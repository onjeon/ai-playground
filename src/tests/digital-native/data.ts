// 디지털 네이티브 지수 테스트 - 디지털 세상 적응력

export interface DigitalNativeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface DigitalNativeResult {
  type: string;
  title: string;
  emoji: string;
  score: number;
  subtitle: string;
  description: string;
  digitalSkills: string[];
  strengths: string[];
  improvements: string[];
  recommendedTools: string[];
  futureReadiness: string;
}

export const digitalTypes = ['digital_master', 'digital_fluent', 'digital_adaptable', 'digital_learner', 'digital_immigrant'] as const;
export type DigitalType = typeof digitalTypes[number];

export const questions: DigitalNativeQuestion[] = [
  {
    id: 1,
    question: "새로운 앱이나 서비스가 나오면?",
    options: [
      { text: "바로 설치해서 써봐요", score: 4 },
      { text: "리뷰 보고 괜찮으면 써봐요", score: 3 },
      { text: "주변에서 추천하면 써봐요", score: 2 },
      { text: "기존 거 쓰는 게 편해요", score: 1 },
    ],
  },
  {
    id: 2,
    question: "스마트폰 없이 하루를 보낸다면?",
    options: [
      { text: "불안하고 불편할 것 같아요", score: 4 },
      { text: "좀 불편하겠지만 괜찮을 듯", score: 3 },
      { text: "오히려 편할 것 같아요", score: 2 },
      { text: "큰 문제 없을 것 같아요", score: 1 },
    ],
  },
  {
    id: 3,
    question: "온라인 결제/뱅킹 이용 빈도는?",
    options: [
      { text: "거의 모든 결제를 온라인으로", score: 4 },
      { text: "자주 이용해요", score: 3 },
      { text: "가끔 이용해요", score: 2 },
      { text: "거의 안 해요, 현금/대면 선호", score: 1 },
    ],
  },
  {
    id: 4,
    question: "클라우드 서비스(구글 드라이브, 아이클라우드 등) 사용은?",
    options: [
      { text: "모든 파일을 클라우드에 저장해요", score: 4 },
      { text: "자주 사용해요", score: 3 },
      { text: "가끔 사용해요", score: 2 },
      { text: "잘 모르거나 안 써요", score: 1 },
    ],
  },
  {
    id: 5,
    question: "AI 도구(ChatGPT, Copilot 등) 활용도는?",
    options: [
      { text: "거의 매일 다양하게 활용해요", score: 4 },
      { text: "종종 사용해요", score: 3 },
      { text: "몇 번 써봤어요", score: 2 },
      { text: "잘 모르거나 안 써요", score: 1 },
    ],
  },
  {
    id: 6,
    question: "온라인 쇼핑 vs 오프라인 쇼핑?",
    options: [
      { text: "거의 100% 온라인", score: 4 },
      { text: "온라인이 더 많아요", score: 3 },
      { text: "반반 정도", score: 2 },
      { text: "오프라인이 더 편해요", score: 1 },
    ],
  },
  {
    id: 7,
    question: "화상 회의/온라인 미팅 능숙도는?",
    options: [
      { text: "능숙해요, 여러 기능도 잘 써요", score: 4 },
      { text: "기본적으로 잘 해요", score: 3 },
      { text: "할 수는 있지만 어색해요", score: 2 },
      { text: "어렵거나 잘 안 해요", score: 1 },
    ],
  },
  {
    id: 8,
    question: "멀티태스킹(여러 앱/창 동시 사용) 능력은?",
    options: [
      { text: "자연스럽게 해요", score: 4 },
      { text: "꽤 잘하는 편이에요", score: 3 },
      { text: "할 수 있지만 좀 헷갈려요", score: 2 },
      { text: "하나씩 하는 게 편해요", score: 1 },
    ],
  },
  {
    id: 9,
    question: "QR코드 스캔, NFC 태그 등 사용은?",
    options: [
      { text: "자연스럽게 사용해요", score: 4 },
      { text: "자주 사용해요", score: 3 },
      { text: "가끔 사용해요", score: 2 },
      { text: "어렵거나 잘 안 해요", score: 1 },
    ],
  },
  {
    id: 10,
    question: "스트리밍 서비스(넷플릭스, 유튜브 등) 이용은?",
    options: [
      { text: "주요 엔터테인먼트 소스예요", score: 4 },
      { text: "자주 봐요", score: 3 },
      { text: "가끔 봐요", score: 2 },
      { text: "TV가 더 편해요", score: 1 },
    ],
  },
  {
    id: 11,
    question: "디지털 기기 문제가 생기면?",
    options: [
      { text: "직접 검색해서 해결해요", score: 4 },
      { text: "이것저것 시도해봐요", score: 3 },
      { text: "주변에 도움 요청해요", score: 2 },
      { text: "전문가에게 맡겨요", score: 1 },
    ],
  },
  {
    id: 12,
    question: "온라인 보안(비밀번호, 2단계 인증 등) 관리는?",
    options: [
      { text: "철저히 관리해요, 보안 앱도 써요", score: 4 },
      { text: "기본적으로 신경 써요", score: 3 },
      { text: "대충 해요", score: 2 },
      { text: "잘 모르겠어요", score: 1 },
    ],
  },
];

export const results: Record<DigitalType, DigitalNativeResult> = {
  digital_master: {
    type: 'digital_master',
    title: '디지털 마스터',
    emoji: '🚀',
    score: 100,
    subtitle: '디지털 세상을 지배하는 자',
    description: '당신은 진정한 디지털 네이티브예요! 최신 기술을 자유자재로 활용하고, 디지털 세상에서 물 만난 물고기처럼 살아가죠. 미래 사회에 완벽히 준비된 사람이에요.',
    digitalSkills: ['최신 기술 즉시 적응', 'AI 도구 능숙 활용', '클라우드 기반 생활', '디지털 보안 철저', '멀티태스킹 능숙'],
    strengths: ['기술 적응력 최상', '효율적 디지털 생활', '정보 접근성 높음', '미래 변화 대비 완료'],
    improvements: ['가끔은 디지털 디톡스도 필요해요', '오프라인 관계도 소중히 하세요'],
    recommendedTools: ['Notion', 'ChatGPT', 'Figma', 'Slack', '자동화 도구'],
    futureReadiness: '미래 사회 완벽 적응 예상',
  },
  digital_fluent: {
    type: 'digital_fluent',
    title: '디지털 능숙자',
    emoji: '💻',
    score: 75,
    subtitle: '디지털 세상에 익숙한 현대인',
    description: '당신은 디지털 환경에 아주 익숙해요! 대부분의 디지털 도구를 능숙하게 사용하고, 새로운 기술에도 빠르게 적응하죠. 디지털 시대를 잘 살아가고 있어요.',
    digitalSkills: ['다양한 앱/서비스 활용', '온라인 소통 능숙', '기본 보안 관리', '새 기술 학습 의지'],
    strengths: ['안정적 디지털 활용', '균형 잡힌 기술 이해', '실용적 접근'],
    improvements: ['AI 도구 활용을 늘려보세요', '자동화로 효율을 높여보세요', '새로운 기술 트렌드 관심 가져보세요'],
    recommendedTools: ['Google Workspace', 'Canva', '메모 앱', '클라우드 저장소'],
    futureReadiness: '미래 적응 준비 양호',
  },
  digital_adaptable: {
    type: 'digital_adaptable',
    title: '디지털 적응자',
    emoji: '📱',
    score: 50,
    subtitle: '필요한 건 다 할 줄 알아요',
    description: '당신은 필요한 디지털 기술은 다 활용할 줄 알아요! 아주 앞서가진 않지만, 일상생활에 필요한 디지털 기술은 무리 없이 사용하고 있죠.',
    digitalSkills: ['기본 스마트폰 활용', '온라인 쇼핑/뱅킹', '기본 SNS 사용', '영상 시청'],
    strengths: ['실용적 기술 활용', '안정적 사용 패턴', '기본기 탄탄'],
    improvements: ['클라우드 활용을 늘려보세요', 'AI 도구를 체험해보세요', '새로운 앱에 도전해보세요', '디지털 효율화를 시도해보세요'],
    recommendedTools: ['기본 앱 마스터하기', '클라우드 저장소 시작', 'AI 챗봇 체험'],
    futureReadiness: '조금 더 학습하면 미래 준비 완료',
  },
  digital_learner: {
    type: 'digital_learner',
    title: '디지털 학습자',
    emoji: '📖',
    score: 25,
    subtitle: '배우는 중이에요!',
    description: '당신은 디지털 세상에 적응 중이에요! 아직 익숙하지 않은 부분도 있지만, 배우려는 의지가 있다면 충분히 따라잡을 수 있어요. 천천히 가도 괜찮아요!',
    digitalSkills: ['기본 스마트폰 사용', '메시지/전화', '간단한 앱 사용'],
    strengths: ['배움의 의지', '신중한 접근', '오프라인 경험 풍부'],
    improvements: ['하나씩 천천히 배워가세요', '주변 도움을 받아보세요', '두려워하지 말고 시도해보세요', '기초 강좌를 들어보세요'],
    recommendedTools: ['카카오톡 마스터', '유튜브 활용', '기본 앱 익히기'],
    futureReadiness: '꾸준히 배우면 적응 가능',
  },
  digital_immigrant: {
    type: 'digital_immigrant',
    title: '디지털 이민자',
    emoji: '🌍',
    score: 0,
    subtitle: '아날로그가 더 편해요',
    description: '당신은 디지털보다 아날로그가 편한 타입이에요! 이건 나쁜 게 아니에요. 다만 점점 디지털화되는 세상에서 기본적인 기술은 익혀두면 생활이 편해질 거예요.',
    digitalSkills: ['기본 전화/문자', '간단한 기기 사용'],
    strengths: ['오프라인 관계 중시', '깊은 집중력', '아날로그 감성'],
    improvements: ['스마트폰 기본 기능부터 익혀보세요', '가족/지인에게 배워보세요', '천천히 하나씩 시도해보세요', '무료 강좌를 활용해보세요'],
    recommendedTools: ['스마트폰 기초', '카카오톡', '유튜브'],
    futureReadiness: '기초부터 차근차근 시작하면 충분히 적응 가능',
  },
};

export function calculateResult(answers: number[]): DigitalNativeResult {
  let totalScore = 0;
  const maxScore = questions.length * 4; // 최대 48점

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  let resultType: DigitalType;
  if (percentage >= 85) {
    resultType = 'digital_master';
  } else if (percentage >= 65) {
    resultType = 'digital_fluent';
  } else if (percentage >= 45) {
    resultType = 'digital_adaptable';
  } else if (percentage >= 25) {
    resultType = 'digital_learner';
  } else {
    resultType = 'digital_immigrant';
  }

  return { ...results[resultType], score: percentage };
}
