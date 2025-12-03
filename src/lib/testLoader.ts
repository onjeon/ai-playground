// 테스트 데이터 동적 로더
// 번들 사이즈 최적화를 위해 필요한 테스트만 동적으로 로드
// locale별 테스트 지원

export interface BaseTestResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  [key: string]: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TestModule = Record<string, any>;

// locale별 테스트 폴더 매핑
const localeTestFolders: Record<string, string> = {
  ko: 'tests',        // 한국어: src/tests/
  ja: 'tests-ja',     // 일본어: src/tests-ja/
  'zh-TW': 'tests-zh-TW',  // 대만 중국어: src/tests-zh-TW/
};

// 테스트 모듈 동적 로드 (locale 지원)
export async function loadTestModule(slug: string, locale: string = 'ko'): Promise<TestModule | null> {
  try {
    // locale에 따른 테스트 폴더 결정
    const testFolder = localeTestFolders[locale] || localeTestFolders['ko'];
    
    // 해당 locale 폴더에서 먼저 시도
    try {
      if (testFolder === 'tests-ja') {
        const module = await import(`@/tests-ja/${slug}/data`);
        return module as TestModule;
      } else if (testFolder === 'tests-zh-TW') {
        const module = await import(`@/tests-zh-TW/${slug}/data`);
        return module as TestModule;
      }
    } catch {
      // locale 폴더에 없으면 기본(ko) 폴더에서 로드
    }
    
    // 기본 테스트 폴더에서 로드
    const module = await import(`@/tests/${slug}/data`);
    return module as TestModule;
  } catch (error) {
    console.error(`Failed to load test module: ${slug} (locale: ${locale})`, error);
    return null;
  }
}

// 계산 함수 이름 찾기
function findCalculateFunction(module: TestModule): ((answers: number[]) => BaseTestResult) | null {
  // 1. 먼저 calculateResult 확인
  if (typeof module.calculateResult === 'function') {
    return module.calculateResult;
  }
  
  // 2. calculate로 시작하는 다른 함수 찾기
  for (const key of Object.keys(module)) {
    if (key.startsWith('calculate') && typeof module[key] === 'function') {
      return module[key];
    }
  }
  
  return null;
}

// 테스트 데이터 객체 찾기 (xxxTest 형태의 export)
function findTestData(module: TestModule): Record<string, unknown> | null {
  // 1. questions와 results가 직접 export 되어 있는 경우
  if (Array.isArray(module.questions) && module.results) {
    return { questions: module.questions, results: module.results };
  }
  
  // 2. xxxTest 형태로 export 되어 있는 경우
  for (const key of Object.keys(module)) {
    if (key.endsWith('Test') && typeof module[key] === 'object') {
      const testData = module[key];
      if (testData.questions && testData.results) {
        return testData;
      }
    }
  }
  
  return null;
}

// type 기반 일반 계산 함수 (calculateResult 함수가 없는 테스트용)
function genericCalculateResult(module: TestModule, answers: number[]): BaseTestResult | null {
  const testData = findTestData(module);
  if (!testData) {
    return null;
  }
  
  const questions = testData.questions as Array<{
    options: Array<{ type?: string; value?: string }>;
  }>;
  const results = testData.results as Record<string, Record<string, unknown>>;
  
  if (!questions || !results) {
    return null;
  }
  
  // 타입별 점수 계산
  const scores: Record<string, number> = {};
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (!question || !question.options || !question.options[answerIndex]) {
      return;
    }
    
    const option = question.options[answerIndex];
    const type = option.type || option.value;
    
    if (type) {
      scores[type] = (scores[type] || 0) + 1;
    }
  });
  
  // 가장 높은 점수의 타입 찾기
  let maxScore = 0;
  let resultType = Object.keys(results)[0];
  
  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore && results[type]) {
      maxScore = score;
      resultType = type;
    }
  });
  
  // 결과 반환
  const result = results[resultType];
  if (!result) {
    return null;
  }
  
  // BaseTestResult 형태로 변환
  return {
    type: (result.type as string) || resultType,
    title: (result.title as string) || (result.type as string) || resultType,
    emoji: (result.emoji as string) || '🎯',
    description: (result.description as string) || '',
    ...result,
  };
}

// 테스트 결과 계산
export function calculateTestResult(
  module: TestModule,
  slug: string,
  answers: number[]
): BaseTestResult | null {
  try {
    // 1. 먼저 전용 calculate 함수 찾기
    const calculateFn = findCalculateFunction(module);
    
    if (calculateFn) {
      return calculateFn(answers);
    }
    
    // 2. 전용 함수가 없으면 일반 계산 로직 사용
    const genericResult = genericCalculateResult(module, answers);
    if (genericResult) {
      return genericResult;
    }
    
    console.error(`No calculate function or valid test data found for test: ${slug}`);
    return null;
  } catch (error) {
    console.error(`Failed to calculate result for test: ${slug}`, error);
    return null;
  }
}

// 테스트 질문 가져오기
export function getTestQuestions(module: TestModule): unknown[] | null {
  // 1. questions가 직접 export 되어 있는 경우
  if (Array.isArray(module.questions)) {
    return module.questions;
  }
  
  // 2. xxxTest 형태로 export 되어 있는 경우
  for (const key of Object.keys(module)) {
    if (key.endsWith('Test') && typeof module[key] === 'object') {
      const testData = module[key];
      if (Array.isArray(testData.questions)) {
        return testData.questions;
      }
    }
  }
  
  return null;
}
