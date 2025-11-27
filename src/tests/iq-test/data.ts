// IQ 테스트 (간이 버전)

export interface IQTestQuestion {
  id: number;
  type: 'pattern' | 'logic' | 'math' | 'verbal' | 'spatial';
  question: string;
  options: string[];
  correctAnswer: number; // 정답 인덱스
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface IQTestResult {
  type: string;
  title: string;
  emoji: string;
  iqScore: number;
  percentile: number;
  description: string;
  strengths: string[];
  characteristics: string[];
  brainType: string;
  recommendedActivities: string[];
  famousPeople: string;
  advice: string;
}

// 질문 데이터 (25문항 - 다양한 유형)
export const questions: IQTestQuestion[] = [
  // 패턴 인식 (5문항)
  {
    id: 1,
    type: 'pattern',
    question: "다음 숫자 패턴의 빈칸에 들어갈 숫자는? 2, 4, 8, 16, ?",
    options: ["24", "32", "28", "30"],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 2,
    type: 'pattern',
    question: "다음 숫자 패턴의 빈칸에 들어갈 숫자는? 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 3,
    type: 'pattern',
    question: "다음 숫자 패턴의 빈칸에 들어갈 숫자는? 3, 6, 11, 18, 27, ?",
    options: ["36", "38", "40", "35"],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 4,
    type: 'pattern',
    question: "다음 알파벳 패턴의 빈칸에 들어갈 글자는? A, C, F, J, ?",
    options: ["M", "N", "O", "P"],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 5,
    type: 'pattern',
    question: "다음 숫자 패턴의 빈칸에 들어갈 숫자는? 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "42", "49"],
    correctAnswer: 1,
    difficulty: 'easy',
  },

  // 논리 추론 (5문항)
  {
    id: 6,
    type: 'logic',
    question: "모든 장미는 꽃이다. 어떤 꽃은 빨갛다. 따라서?",
    options: ["모든 장미는 빨갛다", "어떤 장미는 빨갛다", "확실히 말할 수 없다", "모든 빨간 것은 꽃이다"],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 7,
    type: 'logic',
    question: "A가 B보다 크고, B가 C보다 크면?",
    options: ["C가 가장 크다", "A가 가장 크다", "B가 가장 크다", "알 수 없다"],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 8,
    type: 'logic',
    question: "비가 오면 땅이 젖는다. 땅이 젖어 있다. 따라서?",
    options: ["비가 왔다", "비가 오고 있다", "반드시 비가 왔다고 할 수 없다", "비가 안 왔다"],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 9,
    type: 'logic',
    question: "철수는 영희보다 키가 크고, 영희는 민수보다 키가 크다. 민수는 지수보다 키가 작다. 가장 키가 큰 사람은?",
    options: ["철수", "영희", "민수", "알 수 없다"],
    correctAnswer: 3,
    difficulty: 'hard',
  },
  {
    id: 10,
    type: 'logic',
    question: "A, B, C 중 한 명만 거짓말을 한다. A: 'B가 거짓말쟁이다.' B: 'C가 거짓말쟁이다.' C: 'A가 거짓말쟁이다.' 거짓말쟁이는?",
    options: ["A", "B", "C", "알 수 없다"],
    correctAnswer: 0,
    difficulty: 'hard',
  },

  // 수학적 사고 (5문항)
  {
    id: 11,
    type: 'math',
    question: "어떤 수의 1/3이 15라면, 그 수의 1/5은?",
    options: ["7", "9", "10", "12"],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 12,
    type: 'math',
    question: "사과 3개와 귤 2개의 가격이 2,000원이고, 사과 2개와 귤 3개의 가격이 1,750원이다. 사과 1개의 가격은?",
    options: ["300원", "400원", "500원", "550원"],
    correctAnswer: 2,
    difficulty: 'hard',
  },
  {
    id: 13,
    type: 'math',
    question: "시속 60km로 2시간 동안 간 거리를 시속 40km로 가면 몇 시간 걸리는가?",
    options: ["2시간", "2.5시간", "3시간", "3.5시간"],
    correctAnswer: 2,
    difficulty: 'easy',
  },
  {
    id: 14,
    type: 'math',
    question: "A가 혼자 하면 12일, B가 혼자 하면 6일 걸리는 일을 둘이 함께 하면?",
    options: ["3일", "4일", "5일", "6일"],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 15,
    type: 'math',
    question: "100의 20%의 50%는?",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1,
    difficulty: 'easy',
  },

  // 언어 추론 (5문항)
  {
    id: 16,
    type: 'verbal',
    question: "'책 : 읽다'의 관계와 같은 것은?",
    options: ["노래 : 듣다", "음식 : 요리하다", "그림 : 보다", "악기 : 연주하다"],
    correctAnswer: 3,
    difficulty: 'medium',
  },
  {
    id: 17,
    type: 'verbal',
    question: "'증가'의 반의어는?",
    options: ["상승", "감소", "유지", "변동"],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 18,
    type: 'verbal',
    question: "'새 : 날다 : 하늘'과 같은 관계는?",
    options: ["물고기 : 수영하다 : 물", "개 : 짖다 : 집", "말 : 달리다 : 초원", "고양이 : 할퀴다 : 나무"],
    correctAnswer: 0,
    difficulty: 'medium',
  },
  {
    id: 19,
    type: 'verbal',
    question: "다음 중 나머지 셋과 성격이 다른 것은?",
    options: ["행복", "기쁨", "환희", "분노"],
    correctAnswer: 3,
    difficulty: 'easy',
  },
  {
    id: 20,
    type: 'verbal',
    question: "'백발백중'과 가장 유사한 의미는?",
    options: ["만수무강", "일거양득", "십중팔구", "천하무적"],
    correctAnswer: 2,
    difficulty: 'medium',
  },

  // 공간 지각 (5문항)
  {
    id: 21,
    type: 'spatial',
    question: "정육면체를 펼치면 6개의 정사각형이 된다. 마주 보는 면의 눈금 합이 7인 주사위에서, 1의 맞은편 숫자는?",
    options: ["2", "4", "5", "6"],
    correctAnswer: 3,
    difficulty: 'easy',
  },
  {
    id: 22,
    type: 'spatial',
    question: "거울에 비친 시계가 3시 30분을 가리키면, 실제 시간은?",
    options: ["8시 30분", "9시 30분", "8시", "9시"],
    correctAnswer: 0,
    difficulty: 'medium',
  },
  {
    id: 23,
    type: 'spatial',
    question: "동쪽을 바라보고 있다가 시계 방향으로 270도 회전하면 어느 방향을 바라보게 되는가?",
    options: ["동쪽", "서쪽", "남쪽", "북쪽"],
    correctAnswer: 3,
    difficulty: 'medium',
  },
  {
    id: 24,
    type: 'spatial',
    question: "정사각형 종이를 반으로 접고, 다시 반으로 접은 후 모서리를 자르면 펼쳤을 때 구멍이 몇 개?",
    options: ["1개", "2개", "4개", "8개"],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 25,
    type: 'spatial',
    question: "큐브를 3x3x3으로 쌓으면 총 몇 개의 작은 큐브가 필요한가?",
    options: ["9개", "18개", "24개", "27개"],
    correctAnswer: 3,
    difficulty: 'easy',
  },
];

// 결과 템플릿
const resultTemplates = {
  genius: {
    type: 'genius',
    title: '천재적 지능',
    emoji: '🧠',
    description: '매우 뛰어난 지적 능력을 가지고 있습니다. 복잡한 문제를 빠르게 이해하고 창의적인 해결책을 찾는 능력이 탁월합니다.',
    strengths: ['뛰어난 문제 해결력', '빠른 학습 능력', '창의적 사고', '논리적 추론'],
    characteristics: ['복잡한 개념 빠른 이해', '독창적인 아이디어', '높은 집중력', '패턴 인식 능력'],
    brainType: '고도의 분석적, 창의적 사고',
    recommendedActivities: ['고급 퍼즐', '체스', '프로그래밍', '과학 연구', '전략 게임'],
    famousPeople: '아인슈타인, 스티븐 호킹',
    advice: '당신의 뛰어난 능력을 사회에 기여하는 방향으로 활용해보세요. 겸손함도 지능의 일부입니다.',
  },
  superior: {
    type: 'superior',
    title: '우수한 지능',
    emoji: '⭐',
    description: '평균보다 높은 지적 능력을 보유하고 있습니다. 논리적 사고와 문제 해결에 강점이 있습니다.',
    strengths: ['논리적 분석력', '학습 능력', '문제 해결력', '패턴 인식'],
    characteristics: ['빠른 이해력', '분석적 사고', '효율적인 학습', '좋은 기억력'],
    brainType: '분석적이고 체계적인 사고',
    recommendedActivities: ['논리 퍼즐', '독서', '보드게임', '새로운 기술 학습'],
    famousPeople: '빌 게이츠, 일론 머스크',
    advice: '지속적인 학습으로 능력을 더 발전시켜 보세요. 다양한 분야에 도전해보는 것도 좋습니다.',
  },
  above_average: {
    type: 'above_average',
    title: '평균 이상의 지능',
    emoji: '📚',
    description: '평균보다 높은 지적 능력을 가지고 있습니다. 대부분의 문제를 잘 해결하며, 학습 능력이 좋습니다.',
    strengths: ['균형 잡힌 사고', '적응력', '학습 의욕', '실용적 문제 해결'],
    characteristics: ['꾸준한 발전', '실용적 지능', '좋은 이해력', '논리적 접근'],
    brainType: '균형 잡힌 분석적 사고',
    recommendedActivities: ['독서', '퀴즈', '새로운 취미 배우기', '토론'],
    famousPeople: '존 F. 케네디, 조지 워싱턴',
    advice: '꾸준한 노력으로 더 발전할 수 있습니다. 관심 분야에 깊이 파고들어 보세요.',
  },
  average: {
    type: 'average',
    title: '평균적 지능',
    emoji: '🎯',
    description: '대부분의 사람들과 비슷한 수준의 지적 능력을 가지고 있습니다. 일상생활과 대부분의 직업에서 충분히 기능합니다.',
    strengths: ['실용적 지능', '사회적 적응력', '경험 학습', '상식'],
    characteristics: ['일반적인 문제 해결', '실생활 적응', '균형 잡힌 능력', '실용성'],
    brainType: '실용적이고 균형 잡힌 사고',
    recommendedActivities: ['다양한 경험', '독서', '게임', '사교 활동'],
    famousPeople: '무하마드 알리 (복싱 천재), 포레스트 검프 (영화 속 성공 인물)',
    advice: 'IQ가 성공의 전부는 아닙니다. 노력, 끈기, 사회성이 더 중요할 수 있습니다.',
  },
  below_average: {
    type: 'below_average',
    title: '발전 가능한 지능',
    emoji: '🌱',
    description: '일부 영역에서 더 발전할 여지가 있습니다. 지능은 고정된 것이 아니며, 훈련으로 향상될 수 있습니다.',
    strengths: ['성장 가능성', '다른 형태의 지능', '실용적 능력', '감성 지능'],
    characteristics: ['실용적 접근', '경험 기반 학습', '창의적 해결', '대인 관계'],
    brainType: '실용적이고 경험적인 사고',
    recommendedActivities: ['두뇌 훈련 게임', '독서', '새로운 것 배우기', '명상'],
    famousPeople: '토마스 에디슨 (학교 성적 불량), 리처드 브랜슨 (난독증 극복)',
    advice: 'IQ 테스트가 모든 지능을 측정하지는 않습니다. 다양한 분야에서 자신의 강점을 찾아보세요.',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): IQTestResult {
  let correctCount = 0;
  
  // 정답 개수 계산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && answerIndex === question.correctAnswer) {
      // 난이도에 따른 가중치
      if (question.difficulty === 'hard') {
        correctCount += 1.5;
      } else if (question.difficulty === 'medium') {
        correctCount += 1.2;
      } else {
        correctCount += 1;
      }
    }
  });

  // IQ 점수 계산 (대략적인 변환)
  // 정규분포를 가정하여 점수 변환
  const maxPossibleScore = 30; // 가중치 적용 최대 점수
  const ratio = correctCount / maxPossibleScore;
  
  // IQ 85-145 범위로 변환
  let iqScore = Math.round(85 + (ratio * 60));
  
  // 범위 제한
  iqScore = Math.max(85, Math.min(145, iqScore));

  // 백분위 계산 (대략적)
  let percentile: number;
  if (iqScore >= 130) percentile = 98;
  else if (iqScore >= 120) percentile = 91;
  else if (iqScore >= 110) percentile = 75;
  else if (iqScore >= 100) percentile = 50;
  else if (iqScore >= 90) percentile = 25;
  else percentile = 10;

  // 결과 유형 결정
  let resultType: string;
  if (iqScore >= 130) resultType = 'genius';
  else if (iqScore >= 115) resultType = 'superior';
  else if (iqScore >= 100) resultType = 'above_average';
  else if (iqScore >= 90) resultType = 'average';
  else resultType = 'below_average';

  const template = resultTemplates[resultType as keyof typeof resultTemplates];

  return {
    ...template,
    iqScore,
    percentile,
  };
}
