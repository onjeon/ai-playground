// 내향/외향 테스트 - 당신은 내향인? 외향인?

export const questions = [
  {
    id: 1,
    question: "주말에 에너지 충전 방법은?",
    options: [
      { text: "혼자만의 시간", type: "introvert", score: 5 },
      { text: "친한 친구 1-2명과", type: "ambivert", score: 3 },
      { text: "여러 친구들과 모임", type: "extrovert", score: 1 },
      { text: "새로운 사람들 만남", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 2,
    question: "파티에 가면 나는?",
    options: [
      { text: "빨리 집에 가고 싶음", type: "introvert", score: 5 },
      { text: "아는 사람들과만 대화", type: "ambivert", score: 3 },
      { text: "적극적으로 참여", type: "extrovert", score: 1 },
      { text: "새로운 사람에게 말 걸음", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 3,
    question: "모임 후 기분은?",
    options: [
      { text: "지침, 충전 필요", type: "introvert", score: 5 },
      { text: "적당히 피곤", type: "ambivert", score: 3 },
      { text: "신남, 에너지 충전됨", type: "extrovert", score: 1 },
      { text: "2차 가고 싶음", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 4,
    question: "전화 통화는?",
    options: [
      { text: "싫어함, 문자 선호", type: "introvert", score: 5 },
      { text: "친한 사람만 OK", type: "ambivert", score: 3 },
      { text: "통화 좋아함", type: "extrovert", score: 1 },
      { text: "수다 떨기 좋아함", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 5,
    question: "혼자 있는 시간은?",
    options: [
      { text: "필수! 없으면 스트레스", type: "introvert", score: 5 },
      { text: "가끔 필요함", type: "ambivert", score: 3 },
      { text: "별로 안 필요함", type: "extrovert", score: 1 },
      { text: "외로움, 싫어함", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 6,
    question: "새로운 사람을 만나면?",
    options: [
      { text: "에너지 소모됨", type: "introvert", score: 5 },
      { text: "적응 시간 필요", type: "ambivert", score: 3 },
      { text: "흥미로움", type: "extrovert", score: 1 },
      { text: "신남! 새 친구!", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 7,
    question: "대화 스타일은?",
    options: [
      { text: "듣는 것 선호", type: "introvert", score: 5 },
      { text: "상황에 따라", type: "ambivert", score: 3 },
      { text: "말하는 것 좋아함", type: "extrovert", score: 1 },
      { text: "대화 주도함", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 8,
    question: "회의/수업에서?",
    options: [
      { text: "조용히 듣고 메모", type: "introvert", score: 5 },
      { text: "필요할 때만 발언", type: "ambivert", score: 3 },
      { text: "적극 참여", type: "extrovert", score: 1 },
      { text: "토론 리드함", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 9,
    question: "친구 수는?",
    options: [
      { text: "소수의 깊은 친구", type: "introvert", score: 5 },
      { text: "적당한 수의 친구", type: "ambivert", score: 3 },
      { text: "많은 친구", type: "extrovert", score: 1 },
      { text: "아는 사람 엄청 많음", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 10,
    question: "생각하는 방식은?",
    options: [
      { text: "혼자 깊이 생각", type: "introvert", score: 5 },
      { text: "정리 후 공유", type: "ambivert", score: 3 },
      { text: "말하면서 정리", type: "extrovert", score: 1 },
      { text: "토론하며 발전", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 11,
    question: "이상적인 직장 환경은?",
    options: [
      { text: "개인 공간, 집중", type: "introvert", score: 5 },
      { text: "적당한 협업", type: "ambivert", score: 3 },
      { text: "팀 중심 환경", type: "extrovert", score: 1 },
      { text: "사람 많은 곳", type: "extrovert", score: 0 },
    ],
  },
  {
    id: 12,
    question: "스트레스 해소법은?",
    options: [
      { text: "혼자 취미 생활", type: "introvert", score: 5 },
      { text: "친한 친구와 대화", type: "ambivert", score: 3 },
      { text: "사람들과 어울림", type: "extrovert", score: 1 },
      { text: "파티나 모임 참석", type: "extrovert", score: 0 },
    ],
  },
];

export interface IntrovertExtrovertResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  energySource: string;
  energyDrain: string;
  idealEnvironment: string;
  socialTips: string[];
  careerSuggestions: string[];
}

const resultTypes: Record<string, IntrovertExtrovertResult> = {
  introvert: {
    type: 'introvert',
    title: '내향인',
    emoji: '🌙',
    percentage: 85,
    description: '당신은 내면 세계가 풍요로운 내향인입니다! 혼자만의 시간에서 에너지를 충전하고, 깊은 생각과 집중을 좋아해요. 소수의 깊은 관계를 선호합니다.',
    characteristics: ['깊은 사고', '집중력', '경청', '관찰력', '신중함'],
    strengths: ['깊은 집중력', '창의적 사고', '진정한 관계 형성', '독립적'],
    challenges: ['사교 모임 스트레스', '네트워킹 어려움', '오해받기 쉬움'],
    energySource: '혼자만의 시간, 조용한 환경',
    energyDrain: '많은 사람과의 만남, 시끄러운 환경',
    idealEnvironment: '조용한 개인 공간, 재택근무',
    socialTips: ['소그룹 모임 선호하기', '충전 시간 확보', '미리 대화 주제 생각'],
    careerSuggestions: ['작가', '연구원', '개발자', '디자이너', '회계사'],
  },
  ambivert: {
    type: 'ambivert',
    title: '양향인',
    emoji: '⚖️',
    percentage: 50,
    description: '당신은 내향과 외향의 균형을 가진 양향인입니다! 상황에 따라 유연하게 적응하고, 혼자 시간도 사교 활동도 모두 즐길 수 있어요.',
    characteristics: ['유연성', '균형감', '적응력', '다재다능', '상황 파악'],
    strengths: ['상황 적응력', '다양한 사람과 소통', '균형 잡힌 시각'],
    challenges: ['정체성 혼란', '에너지 관리', '양쪽의 장단점'],
    energySource: '상황에 따라 다름',
    energyDrain: '한쪽으로 치우칠 때',
    idealEnvironment: '다양한 환경, 유연한 근무',
    socialTips: ['자신의 에너지 상태 파악', '균형 유지', '필요에 따라 선택'],
    careerSuggestions: ['교사', '관리자', '컨설턴트', '영업', '프로젝트 매니저'],
  },
  extrovert: {
    type: 'extrovert',
    title: '외향인',
    emoji: '☀️',
    percentage: 15,
    description: '당신은 사람들과 함께할 때 빛나는 외향인입니다! 사교 활동에서 에너지를 얻고, 새로운 만남을 즐겨요. 넓은 인맥과 활발한 소통을 좋아합니다.',
    characteristics: ['사교성', '활발함', '외향적', '행동력', '표현력'],
    strengths: ['네트워킹', '팀워크', '의사소통', '리더십'],
    challenges: ['혼자 있기 어려움', '깊은 집중 어려움', '과한 자극 추구'],
    energySource: '사람들과의 교류, 활동적인 환경',
    energyDrain: '고립, 혼자 있는 시간',
    idealEnvironment: '팀 중심 환경, 활발한 분위기',
    socialTips: ['경청 연습', '혼자 시간도 만들기', '깊은 관계 형성'],
    careerSuggestions: ['영업', '마케팅', 'PR', '이벤트 기획', '강연자'],
  },
};

export function calculateIntrovertExtrovertResult(answers: number[]): IntrovertExtrovertResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 60) {
    return { ...resultTypes.introvert, percentage: Math.round(percentage) };
  } else if (percentage >= 40) {
    return { ...resultTypes.ambivert, percentage: Math.round(percentage) };
  } else {
    return { ...resultTypes.extrovert, percentage: Math.round(100 - percentage) };
  }
}
