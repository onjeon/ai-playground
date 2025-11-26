// 분노 스타일 테스트 - 화날 때 나의 유형은?

export const questions = [
  {
    id: 1,
    question: "누군가 약속 시간에 30분 늦으면?",
    options: [
      { text: "바로 화내고 따짐", type: "explosive", score: 5 },
      { text: "속으로 삭이면서 냉랭하게 대함", type: "passive", score: 4 },
      { text: "왜 늦었는지 이유를 들어봄", type: "rational", score: 2 },
      { text: "그럴 수도 있지 하고 넘김", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 2,
    question: "직장/학교에서 부당한 대우를 받으면?",
    options: [
      { text: "바로 항의한다", type: "explosive", score: 5 },
      { text: "뒤에서 험담하거나 비꼼", type: "passive", score: 4 },
      { text: "차분하게 문제 제기", type: "rational", score: 2 },
      { text: "참고 넘어간다", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 3,
    question: "SNS에서 누가 나를 비난하면?",
    options: [
      { text: "바로 맞대응 댓글", type: "explosive", score: 5 },
      { text: "차단하고 뒤에서 욕함", type: "passive", score: 4 },
      { text: "논리적으로 반박", type: "rational", score: 2 },
      { text: "무시하고 넘김", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 4,
    question: "화가 나면 나는?",
    options: [
      { text: "목소리가 커지고 흥분함", type: "explosive", score: 5 },
      { text: "말수가 줄고 냉담해짐", type: "passive", score: 4 },
      { text: "왜 화가 났는지 설명하려 함", type: "rational", score: 2 },
      { text: "웃으면서 괜찮은 척", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 5,
    question: "연인/친구와 다투면?",
    options: [
      { text: "큰 소리로 싸운다", type: "explosive", score: 5 },
      { text: "연락 안 하고 무시", type: "passive", score: 4 },
      { text: "대화로 해결하려 함", type: "rational", score: 2 },
      { text: "일단 내가 사과함", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 6,
    question: "화난 감정을 표현하는 것은?",
    options: [
      { text: "당연히 해야지, 속 시원해", type: "explosive", score: 5 },
      { text: "직접은 아니고 돌려서", type: "passive", score: 4 },
      { text: "상황 봐서 적절히", type: "rational", score: 2 },
      { text: "참는 게 나아", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 7,
    question: "화가 난 후 나는?",
    options: [
      { text: "바로 풀리고 언제 그랬냐는 듯", type: "explosive", score: 5 },
      { text: "오래 기억하고 있음", type: "passive", score: 4 },
      { text: "해결되면 잊음", type: "rational", score: 2 },
      { text: "겉으론 괜찮은데 속에 쌓임", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 8,
    question: "운전 중 끼어들기 당하면?",
    options: [
      { text: "경적 울리고 욕함", type: "explosive", score: 5 },
      { text: "째려보고 앞차 바짝 붙음", type: "passive", score: 4 },
      { text: "한숨 쉬고 넘김", type: "rational", score: 2 },
      { text: "아무렇지 않음", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 9,
    question: "음식점에서 주문이 잘못 나오면?",
    options: [
      { text: "바로 직원 부르고 화냄", type: "explosive", score: 5 },
      { text: "인상 쓰면서 바꿔달라고 함", type: "passive", score: 4 },
      { text: "정중하게 바꿔달라고 요청", type: "rational", score: 2 },
      { text: "그냥 먹음", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 10,
    question: "스트레스 받을 때 푸는 방법은?",
    options: [
      { text: "소리 지르거나 물건 던짐", type: "explosive", score: 5 },
      { text: "혼자 삭히거나 술 마심", type: "passive", score: 4 },
      { text: "운동이나 취미로 해소", type: "rational", score: 2 },
      { text: "그냥 참음", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 11,
    question: "누군가 내 뒷담화를 한다는 걸 알면?",
    options: [
      { text: "바로 찾아가서 따짐", type: "explosive", score: 5 },
      { text: "나도 뒤에서 욕함", type: "passive", score: 4 },
      { text: "직접 대화로 해결", type: "rational", score: 2 },
      { text: "모른 척 함", type: "suppressive", score: 1 },
    ],
  },
  {
    id: 12,
    question: "나의 분노 조절 능력은?",
    options: [
      { text: "솔직히 잘 안 됨", type: "explosive", score: 5 },
      { text: "겉으론 참는데 속은 부글부글", type: "passive", score: 4 },
      { text: "대체로 잘 조절함", type: "rational", score: 2 },
      { text: "화 자체를 잘 안 냄", type: "suppressive", score: 1 },
    ],
  },
];

export interface AngerStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  angerScore: number;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  triggers: string[];
  copingTips: string[];
  healthWarning: string;
  relationshipTip: string;
}

const resultTypes: Record<string, AngerStyleResult> = {
  explosive: {
    type: 'explosive',
    title: '폭발형 분노',
    emoji: '🌋',
    subtitle: '화산처럼 터지는 타입',
    description: '당신은 화가 나면 바로 표출하는 폭발형입니다! 감정을 숨기지 않고 직접적으로 표현해요. 속 시원하게 화를 내고 금방 풀리는 편이지만, 주변 사람들이 상처받을 수 있어요.',
    angerScore: 90,
    characteristics: ['직접적 표현', '감정 숨기지 않음', '빠른 분출', '금방 풀림'],
    strengths: ['속에 쌓지 않음', '솔직함', '스트레스 축적 안 됨'],
    weaknesses: ['주변에 상처', '후회할 말', '관계 손상', '충동적'],
    triggers: ['무시당할 때', '부당한 대우', '기다리게 할 때', '거짓말'],
    copingTips: ['10초 세기', '심호흡', '그 자리 떠나기', '운동으로 해소'],
    healthWarning: '고혈압, 심장 질환 주의. 분노 조절 연습 필요',
    relationshipTip: '화나도 5분만 기다렸다 말하세요. 그 5분이 관계를 살립니다.',
  },
  passive: {
    type: 'passive',
    title: '수동공격형 분노',
    emoji: '🧊',
    subtitle: '얼음처럼 차갑게 표현',
    description: '당신은 화를 직접 표현하지 않고 간접적으로 표출하는 타입입니다. 무시, 냉담, 비꼬기, 험담 등으로 분노를 표현해요. 겉으론 괜찮아 보여도 속은 부글부글합니다.',
    angerScore: 75,
    characteristics: ['간접적 표현', '냉담/무시', '뒤에서 표출', '오래 기억'],
    strengths: ['직접 충돌 피함', '겉으론 침착', '관계 유지'],
    weaknesses: ['문제 해결 안 됨', '오해 쌓임', '속병', '신뢰 손상'],
    triggers: ['무시당할 때', '인정 안 받을 때', '통제당할 때'],
    copingTips: ['직접 말하기 연습', '감정 일기', '상담 고려', '솔직한 대화'],
    healthWarning: '우울증, 소화 장애 주의. 감정 표현 연습 필요',
    relationshipTip: '돌려 말하지 말고 "나 지금 기분이 안 좋아"라고 솔직하게 말해보세요.',
  },
  rational: {
    type: 'rational',
    title: '이성적 분노',
    emoji: '🧠',
    subtitle: '차분하게 대처하는 타입',
    description: '당신은 화가 나도 감정에 휩쓸리지 않고 이성적으로 대처하는 타입입니다. 왜 화가 났는지 분석하고, 대화로 문제를 해결하려 해요. 건강한 분노 표현 방식을 가지고 있습니다.',
    angerScore: 40,
    characteristics: ['감정 조절', '논리적 대처', '대화로 해결', '차분함'],
    strengths: ['건강한 표현', '관계 유지', '문제 해결', '신뢰 얻음'],
    weaknesses: ['가끔 답답함', '감정 억압 위험', '상대가 이해 못 할 수도'],
    triggers: ['논리적이지 않은 상황', '불공정', '비효율'],
    copingTips: ['감정도 표현하기', '완벽주의 줄이기', '가끔은 화내도 OK'],
    healthWarning: '감정 억압하지 않도록 주의. 때로는 화내는 것도 필요',
    relationshipTip: '논리만이 아니라 감정도 함께 전달해보세요.',
  },
  suppressive: {
    type: 'suppressive',
    title: '억압형 분노',
    emoji: '😶',
    subtitle: '참고 또 참는 타입',
    description: '당신은 화가 나도 표현하지 않고 참는 억압형입니다. 갈등을 피하고 싶고, 화내는 게 나쁘다고 생각해요. 하지만 쌓인 감정은 언젠가 터지거나 몸으로 나타날 수 있어요.',
    angerScore: 20,
    characteristics: ['감정 억압', '갈등 회피', '참음', '괜찮은 척'],
    strengths: ['충돌 피함', '온화해 보임', '인내심'],
    weaknesses: ['속병', '감정 폭발 위험', '자존감 하락', '이용당할 수 있음'],
    triggers: ['억압이 쌓일 때', '한계점 도달'],
    copingTips: ['작은 것부터 표현하기', '거절 연습', '자기주장 훈련', '상담 권장'],
    healthWarning: '우울증, 신체화 증상(두통, 소화불량) 주의. 전문 상담 권장',
    relationshipTip: '화를 참는 게 미덕이 아니에요. 당신의 감정도 소중합니다.',
  },
};

export function calculateAngerStyleResult(answers: number[]): AngerStyleResult {
  const typeScores: Record<string, number> = {
    explosive: 0,
    passive: 0,
    rational: 0,
    suppressive: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'rational';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
