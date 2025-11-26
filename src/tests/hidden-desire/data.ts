// 숨겨진 욕망 테스트 - 내 무의식 속 진짜 욕망은?

export interface HiddenDesireQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface HiddenDesireResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  coreDesire: string;
  characteristics: string[];
  unconsciousBehaviors: string[];
  strengths: string[];
  shadowSide: string[];
  fulfillmentTips: string[];
  warning: string;
  affirmation: string;
}

export const hiddenDesireTypes = ['recognition', 'freedom', 'love', 'power', 'security', 'adventure'] as const;
export type HiddenDesireType = typeof hiddenDesireTypes[number];

export const questions: HiddenDesireQuestion[] = [
  {
    id: 1,
    question: "꿈에서 자주 나오는 장면은?",
    options: [
      { text: "많은 사람 앞에서 주목받는 장면", scores: { recognition: 3 } },
      { text: "어디론가 떠나거나 날아가는 장면", scores: { freedom: 2, adventure: 1 } },
      { text: "누군가와 깊이 연결되는 장면", scores: { love: 3 } },
      { text: "무언가를 성취하거나 이기는 장면", scores: { power: 2, recognition: 1 } },
    ],
  },
  {
    id: 2,
    question: "SNS에서 가장 부러운 게시물은?",
    options: [
      { text: "성공/성취를 자랑하는 글", scores: { recognition: 2, power: 1 } },
      { text: "자유로운 여행/일탈 사진", scores: { freedom: 2, adventure: 1 } },
      { text: "행복한 커플/가족 사진", scores: { love: 3 } },
      { text: "안정적이고 풍요로운 일상", scores: { security: 3 } },
    ],
  },
  {
    id: 3,
    question: "스트레스 받을 때 가장 하고 싶은 것은?",
    options: [
      { text: "나를 알아주는 사람에게 인정받기", scores: { recognition: 3 } },
      { text: "모든 것 놓고 어디론가 떠나기", scores: { freedom: 2, adventure: 1 } },
      { text: "사랑하는 사람에게 안기기", scores: { love: 3 } },
      { text: "통제할 수 있는 상황 만들기", scores: { power: 2, security: 1 } },
    ],
  },
  {
    id: 4,
    question: "어린 시절 가장 원했지만 못 가진 것은?",
    options: [
      { text: "부모님의 칭찬과 인정", scores: { recognition: 3 } },
      { text: "혼자만의 시간과 공간", scores: { freedom: 3 } },
      { text: "따뜻한 애정표현", scores: { love: 3 } },
      { text: "안정적이고 예측 가능한 환경", scores: { security: 3 } },
    ],
  },
  {
    id: 5,
    question: "인생에서 가장 두려운 것은?",
    options: [
      { text: "무시당하거나 인정받지 못하는 것", scores: { recognition: 3 } },
      { text: "갇히거나 자유를 잃는 것", scores: { freedom: 3 } },
      { text: "혼자 남겨지거나 사랑받지 못하는 것", scores: { love: 3 } },
      { text: "모든 것을 잃거나 무력해지는 것", scores: { security: 2, power: 1 } },
    ],
  },
  {
    id: 6,
    question: "완벽한 하루를 상상하면?",
    options: [
      { text: "나의 능력을 인정받는 순간들", scores: { recognition: 3 } },
      { text: "아무 제약 없이 원하는 대로 보내는 날", scores: { freedom: 2, adventure: 1 } },
      { text: "소중한 사람들과 깊이 연결되는 시간", scores: { love: 3 } },
      { text: "모든 것이 안정적이고 평화로운 날", scores: { security: 3 } },
    ],
  },
  {
    id: 7,
    question: "직장/학교에서 가장 중요하게 여기는 것은?",
    options: [
      { text: "나의 성과가 인정받는 것", scores: { recognition: 2, power: 1 } },
      { text: "자율성과 자유로운 환경", scores: { freedom: 3 } },
      { text: "좋은 인간관계와 소속감", scores: { love: 2, security: 1 } },
      { text: "안정적인 지위와 보상", scores: { security: 2, power: 1 } },
    ],
  },
  {
    id: 8,
    question: "무인도에 한 가지만 가져갈 수 있다면?",
    options: [
      { text: "나를 기록할 수 있는 것 (카메라, 일기)", scores: { recognition: 2, adventure: 1 } },
      { text: "탈출하거나 탐험할 도구", scores: { freedom: 2, adventure: 1 } },
      { text: "사랑하는 사람의 사진/편지", scores: { love: 3 } },
      { text: "생존에 필요한 실용적인 것", scores: { security: 3 } },
    ],
  },
  {
    id: 9,
    question: "관계에서 가장 참기 힘든 것은?",
    options: [
      { text: "나를 무시하거나 대수롭지 않게 여기는 것", scores: { recognition: 3 } },
      { text: "나를 통제하거나 제한하는 것", scores: { freedom: 3 } },
      { text: "냉담하거나 거리를 두는 것", scores: { love: 3 } },
      { text: "불안정하고 예측 불가능한 것", scores: { security: 3 } },
    ],
  },
  {
    id: 10,
    question: "로또에 당첨되면 가장 먼저 하고 싶은 것은?",
    options: [
      { text: "남들에게 보여줄 수 있는 큰 것 (집, 차, 사업)", scores: { recognition: 2, power: 1 } },
      { text: "세계여행, 모든 것에서 자유롭게", scores: { freedom: 2, adventure: 1 } },
      { text: "가족/친구에게 베풀기", scores: { love: 3 } },
      { text: "평생 걱정 없이 살 수 있게 투자", scores: { security: 3 } },
    ],
  },
  {
    id: 11,
    question: "내가 가장 빛나는 순간은?",
    options: [
      { text: "많은 사람 앞에서 주목받을 때", scores: { recognition: 3 } },
      { text: "아무도 모르게 나만의 모험을 할 때", scores: { freedom: 2, adventure: 1 } },
      { text: "사랑하는 사람과 함께할 때", scores: { love: 3 } },
      { text: "모든 것이 안정적으로 돌아갈 때", scores: { security: 2, power: 1 } },
    ],
  },
  {
    id: 12,
    question: "죽기 전에 꼭 하고 싶은 것은?",
    options: [
      { text: "세상에 나를 남기는 것 (업적, 명성)", scores: { recognition: 2, power: 1 } },
      { text: "모든 제약에서 벗어나 자유롭게 살기", scores: { freedom: 3 } },
      { text: "진정으로 사랑하고 사랑받기", scores: { love: 3 } },
      { text: "평화롭고 후회 없이 마무리하기", scores: { security: 3 } },
    ],
  },
];

export const results: Record<HiddenDesireType, HiddenDesireResult> = {
  recognition: {
    type: 'recognition',
    title: '인정받고 싶은 욕망',
    emoji: '👑',
    subtitle: '나를 봐줘, 나를 알아줘',
    description: '당신의 무의식 깊은 곳에는 인정받고 싶은 욕망이 있어요. 나의 존재와 가치를 알아주길 바라고, 특별한 사람으로 기억되고 싶어해요.',
    coreDesire: '나의 가치를 인정받고 싶다',
    characteristics: ['성취 지향적', '주목받고 싶음', '칭찬에 민감', '자기 표현 욕구'],
    unconsciousBehaviors: ['SNS에 성과 공유', '자기 어필', '비교하는 습관', '칭찬에 과한 반응'],
    strengths: ['높은 성취 동기', '자기 발전 욕구', '리더십 발휘', '목표 지향적'],
    shadowSide: ['과도한 비교', '인정 중독', '실패에 민감', '타인 평가에 휘둘림'],
    fulfillmentTips: [
      '스스로를 먼저 인정해주세요',
      '외부 평가에서 자유로워지기',
      '작은 성취도 축하하기',
      '비교 대신 어제의 나와 비교하기',
    ],
    warning: '타인의 인정에 너무 의존하면 자신을 잃을 수 있어요',
    affirmation: '나는 이미 충분히 가치 있는 사람이에요',
  },
  freedom: {
    type: 'freedom',
    title: '자유를 향한 욕망',
    emoji: '🦅',
    subtitle: '나를 가두지 마, 날고 싶어',
    description: '당신의 무의식은 자유를 갈망해요. 제한, 의무, 속박에서 벗어나 온전히 나로서 존재하고 싶어하죠. 틀에 갇히는 것을 가장 두려워해요.',
    coreDesire: '어떤 것에도 구속받지 않고 자유롭고 싶다',
    characteristics: ['독립적', '제약 싫어함', '자율성 중시', '변화 추구'],
    unconsciousBehaviors: ['도망가고 싶은 충동', '약속에 부담', '틀에서 벗어나려 함', '여행 갈망'],
    strengths: ['창의성', '독립심', '유연한 사고', '새로움에 열림'],
    shadowSide: ['책임 회피', '관계에서 도망', '안정감 부족', '끈기 부족'],
    fulfillmentTips: [
      '건강한 경계 안에서의 자유 찾기',
      '작은 일탈로 자유 욕구 해소',
      '자유와 책임의 균형 찾기',
      '진정한 자유는 내면에서 온다는 것 기억하기',
    ],
    warning: '모든 것에서 도망치면 결국 외로워질 수 있어요',
    affirmation: '나는 언제든 선택할 자유가 있어요',
  },
  love: {
    type: 'love',
    title: '사랑받고 싶은 욕망',
    emoji: '💗',
    subtitle: '나를 사랑해줘, 떠나지 마',
    description: '당신의 무의식은 사랑과 연결을 갈망해요. 누군가와 깊이 연결되고, 온전히 사랑받고 싶어하죠. 혼자 남겨지는 것을 가장 두려워해요.',
    coreDesire: '조건 없이 사랑받고 싶다',
    characteristics: ['관계 중시', '애정 표현 중요', '친밀감 추구', '소속감 필요'],
    unconsciousBehaviors: ['상대 기분에 민감', '버림받을까 불안', '과도한 희생', '사랑 확인 행동'],
    strengths: ['공감 능력', '따뜻함', '헌신적', '관계 유지 능력'],
    shadowSide: ['의존성', '집착 가능성', '자기 희생', '관계 중심적 자아'],
    fulfillmentTips: [
      '자기 사랑 먼저 채우기',
      '건강한 경계 설정하기',
      '혼자 있는 시간도 소중히',
      '사랑은 주는 것만큼 받는 연습도 필요',
    ],
    warning: '사랑을 위해 자신을 잃지 마세요',
    affirmation: '나는 사랑받을 자격이 있는 사람이에요',
  },
  power: {
    type: 'power',
    title: '힘을 원하는 욕망',
    emoji: '⚡',
    subtitle: '통제하고 싶어, 강해지고 싶어',
    description: '당신의 무의식은 힘과 통제력을 갈망해요. 무력하거나 약한 상태가 되는 것을 피하고, 상황을 주도하고 싶어하죠.',
    coreDesire: '상황을 통제하고 강해지고 싶다',
    characteristics: ['리더십', '결단력', '승부욕', '주도적'],
    unconsciousBehaviors: ['통제하려 함', '지는 것 싫어함', '약점 숨김', '강해 보이려 함'],
    strengths: ['리더십', '추진력', '목표 달성', '위기 대처'],
    shadowSide: ['통제 강박', '권력 추구', '약함 거부', '관계에서 지배적'],
    fulfillmentTips: [
      '약함을 인정하는 것도 강함이에요',
      '통제할 수 없는 것을 받아들이기',
      '힘을 좋은 방향으로 사용하기',
      '진정한 강함은 유연함에서 온다는 것 기억하기',
    ],
    warning: '모든 것을 통제하려 하면 오히려 잃을 수 있어요',
    affirmation: '나는 충분히 강하고, 약해도 괜찮아요',
  },
  security: {
    type: 'security',
    title: '안정을 원하는 욕망',
    emoji: '🏠',
    subtitle: '안전하고 싶어, 지키고 싶어',
    description: '당신의 무의식은 안정과 안전을 갈망해요. 예측 가능하고 안전한 환경에서 평화롭게 살고 싶어하고, 불확실함을 두려워해요.',
    coreDesire: '안전하고 안정적이고 싶다',
    characteristics: ['신중함', '계획적', '안전 추구', '보수적'],
    unconsciousBehaviors: ['변화 회피', '위험 피함', '저축 습관', '확인 행동'],
    strengths: ['신뢰성', '책임감', '계획성', '안정감 제공'],
    shadowSide: ['변화 두려움', '과도한 걱정', '도전 회피', '성장 제한'],
    fulfillmentTips: [
      '작은 변화부터 시도해보기',
      '불확실함 속에서도 괜찮다는 것 연습하기',
      '안정과 모험의 균형 찾기',
      '진정한 안정은 내면에서 온다는 것 기억하기',
    ],
    warning: '너무 안전만 추구하면 성장의 기회를 놓칠 수 있어요',
    affirmation: '나는 어떤 상황에서도 괜찮을 거예요',
  },
  adventure: {
    type: 'adventure',
    title: '모험을 향한 욕망',
    emoji: '🌍',
    subtitle: '새로움을 원해, 지루함은 싫어',
    description: '당신의 무의식은 모험과 자극을 갈망해요. 새로운 경험, 도전, 스릴을 원하고, 일상의 지루함에서 벗어나고 싶어하죠.',
    coreDesire: '새롭고 흥미진진한 경험을 하고 싶다',
    characteristics: ['모험심', '호기심', '자극 추구', '변화 선호'],
    unconsciousBehaviors: ['지루함 회피', '새로운 것 추구', '위험 감수', '일탈 욕구'],
    strengths: ['용기', '적응력', '창의성', '열정'],
    shadowSide: ['불안정함', '끈기 부족', '위험한 행동', '현실 회피'],
    fulfillmentTips: [
      '일상에서 작은 모험 찾기',
      '건전한 스릴 추구 방법 찾기',
      '모험과 안정의 균형 찾기',
      '내면의 모험도 가치 있다는 것 기억하기',
    ],
    warning: '자극만 좇다 보면 진정한 만족을 놓칠 수 있어요',
    affirmation: '나의 인생은 충분히 흥미롭고 모험적이에요',
  },
};

export function calculateResult(answers: number[]): HiddenDesireResult {
  const scores: Record<HiddenDesireType, number> = {
    recognition: 0,
    freedom: 0,
    love: 0,
    power: 0,
    security: 0,
    adventure: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as HiddenDesireType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: HiddenDesireType = 'love';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as HiddenDesireType;
    }
  });

  return results[resultType];
}
