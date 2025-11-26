// 애착 유형 테스트

export interface AttachmentStyleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface AttachmentStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  inRelationship: string;
  strengths: string[];
  challenges: string[];
  triggers: string[];
  healingTips: string[];
  bestMatch: string;
  difficultMatch: string;
  famousPeople: string;
}

// 애착 유형
export const attachmentTypes = ['secure', 'anxious', 'avoidant', 'fearful'] as const;
export type AttachmentType = typeof attachmentTypes[number];

// 질문 데이터 (18문항)
export const questions: AttachmentStyleQuestion[] = [
  {
    id: 1,
    question: "연인이 연락이 늦으면 어떤 생각이 드나요?",
    options: [
      { text: "바쁘겠거니 하고 기다린다", scores: { secure: 2 } },
      { text: "혹시 나한테 화났나? 걱정된다", scores: { anxious: 2 } },
      { text: "어차피 각자 시간이 필요하다고 생각한다", scores: { avoidant: 2 } },
      { text: "불안하면서도 먼저 연락하기 싫다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 2,
    question: "연인과 갈등이 생겼을 때 나는?",
    options: [
      { text: "대화로 해결하려고 노력한다", scores: { secure: 2 } },
      { text: "상대가 날 떠날까 봐 불안해진다", scores: { anxious: 2 } },
      { text: "거리를 두고 혼자 정리하고 싶다", scores: { avoidant: 2 } },
      { text: "화가 나면서도 버림받을까 두렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 3,
    question: "연인에게 나의 감정을 표현하는 것이?",
    options: [
      { text: "자연스럽고 편하다", scores: { secure: 2 } },
      { text: "상대 반응이 걱정되지만 표현한다", scores: { anxious: 2 } },
      { text: "어렵고 불편하다", scores: { avoidant: 2 } },
      { text: "표현하고 싶지만 거부당할까 두렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 4,
    question: "관계에서 가장 두려운 것은?",
    options: [
      { text: "특별히 두려운 것은 없다", scores: { secure: 2 } },
      { text: "버림받는 것", scores: { anxious: 2 } },
      { text: "나의 자유와 독립성을 잃는 것", scores: { avoidant: 2 } },
      { text: "상처받는 것과 버림받는 것 모두", scores: { fearful: 2 } },
    ],
  },
  {
    id: 5,
    question: "연인이 나에게 더 가까워지려 할 때?",
    options: [
      { text: "기쁘고 자연스럽게 받아들인다", scores: { secure: 2 } },
      { text: "안심이 되고 더 원하게 된다", scores: { anxious: 2 } },
      { text: "부담스럽고 약간 숨 막힌다", scores: { avoidant: 2 } },
      { text: "원하면서도 두렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 6,
    question: "혼자만의 시간이 필요할 때 연인에게?",
    options: [
      { text: "솔직하게 말하고 이해를 구한다", scores: { secure: 2 } },
      { text: "상대가 서운해할까 봐 말 못 한다", scores: { anxious: 2 } },
      { text: "당연히 필요하다고 생각하고 가진다", scores: { avoidant: 2 } },
      { text: "혼자 있고 싶지만 외로울까 봐 걱정된다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 7,
    question: "연인의 과거 연애에 대해?",
    options: [
      { text: "과거는 과거일 뿐, 크게 신경 쓰지 않는다", scores: { secure: 2 } },
      { text: "궁금하고 비교하게 된다", scores: { anxious: 2 } },
      { text: "굳이 알고 싶지 않다", scores: { avoidant: 2 } },
      { text: "알고 싶으면서도 상처받을까 두렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 8,
    question: "연인이 다른 이성과 대화하는 것을 보면?",
    options: [
      { text: "별로 신경 쓰이지 않는다", scores: { secure: 2 } },
      { text: "불안하고 질투가 난다", scores: { anxious: 2 } },
      { text: "각자의 사회생활이라고 생각한다", scores: { avoidant: 2 } },
      { text: "불안하지만 티 내기 싫다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 9,
    question: "관계에서 나는 주로?",
    options: [
      { text: "균형 잡힌 관계를 유지한다", scores: { secure: 2 } },
      { text: "상대에게 더 많이 맞추는 편이다", scores: { anxious: 2 } },
      { text: "독립적인 관계를 선호한다", scores: { avoidant: 2 } },
      { text: "가까워지면 밀어내는 패턴이 있다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 10,
    question: "연인에게 실망했을 때?",
    options: [
      { text: "대화로 해결하려 한다", scores: { secure: 2 } },
      { text: "내가 뭘 잘못했나 먼저 생각한다", scores: { anxious: 2 } },
      { text: "거리를 두고 감정을 숨긴다", scores: { avoidant: 2 } },
      { text: "상처받고 관계를 끊고 싶어진다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 11,
    question: "새로운 사람과 가까워지는 것이?",
    options: [
      { text: "자연스럽고 즐겁다", scores: { secure: 2 } },
      { text: "빨리 가까워지고 싶다", scores: { anxious: 2 } },
      { text: "천천히 신중하게 진행한다", scores: { avoidant: 2 } },
      { text: "원하면서도 경계하게 된다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 12,
    question: "연인이 나를 칭찬해주면?",
    options: [
      { text: "기쁘게 받아들인다", scores: { secure: 2 } },
      { text: "진심인지 확인하고 싶어진다", scores: { anxious: 2 } },
      { text: "약간 어색하고 부담스럽다", scores: { avoidant: 2 } },
      { text: "기쁘지만 믿기 어렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 13,
    question: "연인과 떨어져 있을 때?",
    options: [
      { text: "그리우면서도 각자 시간을 즐긴다", scores: { secure: 2 } },
      { text: "자주 연락하고 싶고 보고 싶다", scores: { anxious: 2 } },
      { text: "혼자만의 시간이 편하다", scores: { avoidant: 2 } },
      { text: "보고 싶지만 의존하기 싫다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 14,
    question: "관계가 깊어지면?",
    options: [
      { text: "더 안정감을 느낀다", scores: { secure: 2 } },
      { text: "행복하면서도 잃을까 봐 불안하다", scores: { anxious: 2 } },
      { text: "약간 갑갑하게 느껴진다", scores: { avoidant: 2 } },
      { text: "가까워지면 도망치고 싶어진다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 15,
    question: "연인과의 미래를 생각할 때?",
    options: [
      { text: "자연스럽게 함께하는 미래를 그린다", scores: { secure: 2 } },
      { text: "확신이 필요하고 확인하고 싶다", scores: { anxious: 2 } },
      { text: "너무 먼 미래는 생각하지 않는다", scores: { avoidant: 2 } },
      { text: "원하지만 기대하면 실망할까 두렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 16,
    question: "연인에게 도움을 요청하는 것이?",
    options: [
      { text: "자연스럽고 편하다", scores: { secure: 2 } },
      { text: "부담 줄까 봐 망설여진다", scores: { anxious: 2 } },
      { text: "혼자 해결하려 한다", scores: { avoidant: 2 } },
      { text: "도움받고 싶지만 약해 보일까 두렵다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 17,
    question: "이별 후 나는 보통?",
    options: [
      { text: "슬프지만 시간이 지나면 회복한다", scores: { secure: 2 } },
      { text: "오랫동안 힘들고 연락하고 싶어진다", scores: { anxious: 2 } },
      { text: "빠르게 정리하고 넘어간다", scores: { avoidant: 2 } },
      { text: "상처받아서 다시는 연애 안 할 것 같다", scores: { fearful: 2 } },
    ],
  },
  {
    id: 18,
    question: "나에게 사랑이란?",
    options: [
      { text: "신뢰와 안정감", scores: { secure: 2 } },
      { text: "확인과 안심이 필요한 것", scores: { anxious: 2 } },
      { text: "자유로운 관계", scores: { avoidant: 2 } },
      { text: "원하지만 두려운 것", scores: { fearful: 2 } },
    ],
  },
];

// 결과 데이터
export const results: Record<AttachmentType, AttachmentStyleResult> = {
  secure: {
    type: 'secure',
    title: '안정형 애착',
    emoji: '🌟',
    subtitle: 'Secure Attachment',
    description: '당신은 안정형 애착 유형입니다. 관계에서 신뢰와 안정감을 느끼며, 건강한 방식으로 감정을 표현하고 소통할 수 있습니다. 친밀감을 편안하게 받아들이면서도 독립성을 유지합니다.',
    characteristics: ['관계에 대한 신뢰', '건강한 경계 설정', '감정 표현 능력', '갈등 해결 능력', '균형 잡힌 의존성'],
    inRelationship: '파트너를 신뢰하고, 필요할 때 지지를 주고받으며, 갈등이 생겨도 대화로 해결합니다. 혼자만의 시간도, 함께하는 시간도 모두 즐깁니다.',
    strengths: ['안정적인 관계 유지', '효과적인 소통', '감정 조절 능력', '건강한 자존감'],
    challenges: ['때로는 불안정한 파트너에게 지칠 수 있음', '모든 관계가 건강하진 않다는 것을 인식해야 함'],
    triggers: ['심한 배신이나 신뢰 훼손', '지속적인 불안정한 관계'],
    healingTips: ['현재의 건강한 패턴을 유지하세요', '불안정한 관계에서는 경계를 설정하세요', '자신의 욕구도 중요하게 여기세요'],
    bestMatch: '모든 유형과 건강한 관계 가능',
    difficultMatch: '심한 회피형 또는 불안형과는 노력이 필요',
    famousPeople: '오프라 윈프리, 버락 오바마',
  },
  anxious: {
    type: 'anxious',
    title: '불안형 애착',
    emoji: '💗',
    subtitle: 'Anxious Attachment',
    description: '당신은 불안형 애착 유형입니다. 관계에서 사랑과 확인을 갈망하며, 파트너와의 연결을 매우 중요하게 생각합니다. 때로는 버림받을까 봐 두려워 과도하게 매달리거나 확인하려 할 수 있습니다.',
    characteristics: ['사랑에 대한 강한 욕구', '관계에 높은 투자', '감정 표현이 풍부함', '거절에 민감함', '확인 욕구가 높음'],
    inRelationship: '파트너에게 많은 관심과 애정을 주지만, 상대의 사랑을 지속적으로 확인받고 싶어합니다. 연락이 늦거나 관심이 줄어들면 불안해집니다.',
    strengths: ['깊은 감정적 교감', '헌신적인 파트너', '관계 개선을 위한 노력', '감정에 솔직함'],
    challenges: ['과도한 걱정과 불안', '질투심', '자존감 의존', '밀어내기-끌어당기기 패턴'],
    triggers: ['연락 두절', '무관심', '애매한 태도', '거절이나 비판'],
    healingTips: ['자기 가치를 관계 밖에서도 찾으세요', '불안할 때 심호흡하고 기다려보세요', '과도한 확인 대신 자기 돌봄을 연습하세요', '전문 상담을 고려해보세요'],
    bestMatch: '안정형',
    difficultMatch: '회피형 (밀당 패턴 발생 가능)',
    famousPeople: '마릴린 먼로, 엘비스 프레슬리',
  },
  avoidant: {
    type: 'avoidant',
    title: '회피형 애착',
    emoji: '🛡️',
    subtitle: 'Avoidant Attachment',
    description: '당신은 회피형 애착 유형입니다. 독립성과 자율성을 매우 중요하게 생각하며, 너무 가까워지면 부담을 느낍니다. 감정을 억제하고 혼자 해결하려는 경향이 있습니다.',
    characteristics: ['강한 독립심', '감정 억제 경향', '친밀감에 대한 불편함', '자기 충족적', '경계 설정 명확'],
    inRelationship: '어느 정도 거리를 유지하며, 너무 가까워지면 숨 막히게 느낍니다. 감정 표현이 어렵고, 혼자만의 시간이 많이 필요합니다.',
    strengths: ['독립적인 문제 해결', '감정에 휘둘리지 않음', '자기 관리 능력', '침착함'],
    challenges: ['친밀감 형성 어려움', '감정 표현 부족', '파트너가 소외감 느낄 수 있음', '깊은 관계 회피'],
    triggers: ['지나친 요구', '감정적 압박', '독립성 침해', '의존적인 파트너'],
    healingTips: ['조금씩 감정을 표현하는 연습을 하세요', '친밀감이 위협이 아님을 인식하세요', '파트너의 욕구도 존중해보세요', '왜 거리를 두려 하는지 탐색해보세요'],
    bestMatch: '안정형',
    difficultMatch: '불안형 (서로 상처 줄 수 있음)',
    famousPeople: '클린트 이스트우드, 해리슨 포드',
  },
  fearful: {
    type: 'fearful',
    title: '혼란형 애착',
    emoji: '🌀',
    subtitle: 'Fearful-Avoidant Attachment',
    description: '당신은 혼란형(두려움-회피형) 애착 유형입니다. 친밀감을 원하면서도 두려워하는 양가적인 감정을 느낍니다. 가까워지고 싶지만 상처받을까 봐 밀어내는 패턴을 보입니다.',
    characteristics: ['양가적인 감정', '가까워지면 밀어냄', '신뢰 형성 어려움', '감정 기복', '자기 보호 본능'],
    inRelationship: '사랑받고 싶지만 상처받을까 두려워 경계합니다. 가까워지면 갑자기 거리를 두거나 관계를 끊으려 할 수 있습니다.',
    strengths: ['깊은 공감 능력', '상처에 대한 이해', '성장 가능성', '자기 인식'],
    challenges: ['일관성 없는 행동', '신뢰 형성 어려움', '관계 유지 어려움', '자기 파괴적 패턴'],
    triggers: ['친밀감 증가', '과거 상처 자극', '거절이나 비판', '통제 상실'],
    healingTips: ['과거 상처를 치유하는 작업이 필요합니다', '전문 상담을 강력히 권장합니다', '자신의 패턴을 인식하는 것이 첫걸음입니다', '안전한 관계에서 천천히 신뢰를 쌓아보세요'],
    bestMatch: '안정형 (많은 인내와 이해 필요)',
    difficultMatch: '불안형 또는 회피형 (서로 트리거 자극)',
    famousPeople: '에이미 와인하우스, 커트 코베인',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): AttachmentStyleResult {
  const scores: Record<AttachmentType, number> = {
    secure: 0,
    anxious: 0,
    avoidant: 0,
    fearful: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as AttachmentType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: AttachmentType = 'secure';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as AttachmentType;
    }
  });

  return results[resultType];
}
