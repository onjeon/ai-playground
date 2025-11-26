// 술자리 유형 테스트 - 술 마시면 나는 어떤 타입?

export const questions = [
  {
    id: 1,
    question: "술자리 시작! 첫 잔은?",
    options: [
      { text: "벌컥벌컥 원샷!", type: "wild", score: 5 },
      { text: "천천히 분위기 파악하며", type: "social", score: 3 },
      { text: "맛을 음미하며", type: "chill", score: 2 },
      { text: "술보다 안주가 먼저", type: "foodie", score: 1 },
    ],
  },
  {
    id: 2,
    question: "술이 좀 들어가면?",
    options: [
      { text: "신나서 텐션 폭발", type: "wild", score: 5 },
      { text: "수다가 많아짐", type: "social", score: 4 },
      { text: "조용히 기분 좋아짐", type: "chill", score: 2 },
      { text: "졸려짐", type: "sleepy", score: 1 },
    ],
  },
  {
    id: 3,
    question: "술자리에서 나의 역할은?",
    options: [
      { text: "분위기 메이커", type: "wild", score: 5 },
      { text: "대화 이끄는 사람", type: "social", score: 4 },
      { text: "리액션 담당", type: "chill", score: 2 },
      { text: "조용히 듣는 사람", type: "sleepy", score: 1 },
    ],
  },
  {
    id: 4,
    question: "2차 가자고 하면?",
    options: [
      { text: "당연히 가야지!", type: "wild", score: 5 },
      { text: "멤버 보고 결정", type: "social", score: 3 },
      { text: "집 가고 싶은데...", type: "chill", score: 2 },
      { text: "난 빠질게", type: "sleepy", score: 1 },
    ],
  },
  {
    id: 5,
    question: "술 마시면 하는 행동은?",
    options: [
      { text: "노래 부르고 춤춤", type: "wild", score: 5 },
      { text: "전화하고 연락함", type: "social", score: 4 },
      { text: "사진 찍고 SNS", type: "chill", score: 3 },
      { text: "조용히 생각에 잠김", type: "emotional", score: 2 },
    ],
  },
  {
    id: 6,
    question: "취하면 감정이?",
    options: [
      { text: "신나고 행복해짐", type: "wild", score: 5 },
      { text: "사람들이 좋아짐", type: "social", score: 4 },
      { text: "감성적이 됨", type: "emotional", score: 3 },
      { text: "울컥할 때 있음", type: "emotional", score: 2 },
    ],
  },
  {
    id: 7,
    question: "술자리 대화 주제는?",
    options: [
      { text: "야한 얘기, 19금 토크", type: "wild", score: 5 },
      { text: "인간관계, 가십", type: "social", score: 4 },
      { text: "진지한 인생 이야기", type: "emotional", score: 3 },
      { text: "회사/학교 얘기", type: "chill", score: 2 },
    ],
  },
  {
    id: 8,
    question: "주량은?",
    options: [
      { text: "무한리필 가능", type: "wild", score: 5 },
      { text: "적당히 마시면 오래 감", type: "social", score: 3 },
      { text: "1-2잔이면 충분", type: "chill", score: 2 },
      { text: "술 잘 못 마심", type: "sleepy", score: 1 },
    ],
  },
  {
    id: 9,
    question: "필름 끊긴 적?",
    options: [
      { text: "자주 있음", type: "wild", score: 5 },
      { text: "가끔", type: "social", score: 3 },
      { text: "거의 없음", type: "chill", score: 2 },
      { text: "한 번도 없음", type: "sleepy", score: 1 },
    ],
  },
  {
    id: 10,
    question: "술 마신 다음 날?",
    options: [
      { text: "해장술 ㄱㄱ", type: "wild", score: 5 },
      { text: "숙취 있어도 활동 가능", type: "social", score: 3 },
      { text: "하루 종일 누워있음", type: "chill", score: 2 },
      { text: "술 먹은 거 후회함", type: "emotional", score: 1 },
    ],
  },
  {
    id: 11,
    question: "선호하는 술자리는?",
    options: [
      { text: "시끄럽고 신나는 곳", type: "wild", score: 5 },
      { text: "대화하기 좋은 곳", type: "social", score: 4 },
      { text: "조용하고 분위기 좋은 곳", type: "chill", score: 2 },
      { text: "집에서 혼술", type: "emotional", score: 1 },
    ],
  },
  {
    id: 12,
    question: "술 마시는 이유는?",
    options: [
      { text: "놀기 위해서!", type: "wild", score: 5 },
      { text: "사람들과 어울리려고", type: "social", score: 4 },
      { text: "스트레스 풀려고", type: "emotional", score: 2 },
      { text: "맛있어서/분위기 좋아서", type: "chill", score: 1 },
    ],
  },
];

export interface DrinkingStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  alcoholTolerance: number;
  characteristics: string[];
  funFacts: string[];
  warnings: string[];
  bestWith: string;
  worstWith: string;
  signatureDrink: string;
  morningAfter: string;
}

const resultTypes: Record<string, DrinkingStyleResult> = {
  wild: {
    type: 'wild',
    title: '파티 애니멀',
    emoji: '🎉',
    subtitle: '술자리의 핵인싸',
    description: '당신은 술자리의 핵심 분위기 메이커! 술이 들어가면 텐션이 폭발하고, 2차 3차는 기본이에요. 모두를 신나게 만드는 파티의 주인공입니다!',
    alcoholTolerance: 90,
    characteristics: ['하이텐션', '분위기 메이커', '무한 체력', '2차 필참'],
    funFacts: ['필름 끊김 단골', '다음날 SNS 확인 필수', '전화기 압수해야 함'],
    warnings: ['과음 주의', '다음 날 후회 주의', '지갑 조심'],
    bestWith: '같은 파티 애니멀',
    worstWith: '조용히 마시는 타입',
    signatureDrink: '폭탄주',
    morningAfter: '해장술로 리셋',
  },
  social: {
    type: 'social',
    title: '소셜 드링커',
    emoji: '🗣️',
    subtitle: '대화의 달인',
    description: '당신은 술자리에서 대화를 이끄는 소셜 나비! 술은 사람들과 어울리기 위한 도구예요. 적당히 마시면서 분위기를 조절하는 능력자입니다.',
    alcoholTolerance: 65,
    characteristics: ['대화 리더', '분위기 조절', '적당한 주량', '인맥왕'],
    funFacts: ['술자리 단톡방 관리자', '모임 주최자', '연락처 부자'],
    warnings: ['말실수 주의', '비밀 누설 주의'],
    bestWith: '다양한 타입과 호환',
    worstWith: '너무 조용한 타입',
    signatureDrink: '와인 or 맥주',
    morningAfter: '어제 대화 복기 중',
  },
  chill: {
    type: 'chill',
    title: '칠 드링커',
    emoji: '🍷',
    subtitle: '여유롭게 즐기는 타입',
    description: '당신은 술의 맛과 분위기를 즐기는 타입! 조용하고 분위기 좋은 곳에서 여유롭게 한잔하는 걸 좋아해요. 양보다 질을 중시합니다.',
    alcoholTolerance: 45,
    characteristics: ['분위기 중시', '소량 음주', '맛 감별사', '힐링 추구'],
    funFacts: ['단골 바 있음', '술잔 들고 사진 찍기', '분위기에 취함'],
    warnings: ['시간 가는 줄 모름', '회식에서 아웃사이더'],
    bestWith: '같은 칠 타입',
    worstWith: '폭탄주 강요하는 사람',
    signatureDrink: '위스키 or 칵테일',
    morningAfter: '개운하게 일어남',
  },
  emotional: {
    type: 'emotional',
    title: '감성 드링커',
    emoji: '🌙',
    subtitle: '감정에 취하는 타입',
    description: '당신은 술과 함께 감정이 깊어지는 타입! 취하면 생각이 많아지고 감성적이 돼요. 가끔 울컥하거나 진지한 대화를 원하게 됩니다.',
    alcoholTolerance: 40,
    characteristics: ['감성적', '진지한 대화', '혼술 가능', '생각 많음'],
    funFacts: ['취하면 과거 회상', '전 애인 생각', '인생 고민'],
    warnings: ['연락 금지', '혼자 마시면 우울', '취중진담 주의'],
    bestWith: '들어주는 타입',
    worstWith: '시끄러운 파티 타입',
    signatureDrink: '소주 or 맥주',
    morningAfter: '어제 한 말 후회 중',
  },
  sleepy: {
    type: 'sleepy',
    title: '귀차니즘 드링커',
    emoji: '😴',
    subtitle: '술보다 잠이 좋아',
    description: '당신은 술자리보다 집이 좋은 타입! 술이 들어가면 졸리고, 1차에서 빠지고 싶어해요. 체력 아끼고 싶고, 다음 날이 더 중요합니다.',
    alcoholTolerance: 25,
    characteristics: ['조기 퇴근', '체력 부족', '집순이/집돌이', '다음 날 중시'],
    funFacts: ['1차에서 벌써 눈 감김', '택시 먼저 탐', 'FOMO 없음'],
    warnings: ['사회생활 주의', '술자리 기피 이미지'],
    bestWith: '짧게 마시는 타입',
    worstWith: '2차 3차 강요하는 사람',
    signatureDrink: '음료수',
    morningAfter: '푹 자서 개운',
  },
  foodie: {
    type: 'foodie',
    title: '안주 드링커',
    emoji: '🍗',
    subtitle: '술보다 안주가 본체',
    description: '당신은 술자리의 진정한 미식가! 술은 안주를 위한 거예요. 맛집 탐방이 목적이고, 술은 그냥 곁들이는 음료입니다.',
    alcoholTolerance: 35,
    characteristics: ['안주 본체', '맛집 탐방', '음식 사진', '먹방 유튜버'],
    funFacts: ['메뉴판 다 시킴', '안주 추천 전문가', '배 터지게 먹음'],
    warnings: ['체중 증가 주의', '술값보다 안주값'],
    bestWith: '같이 먹는 거 좋아하는 타입',
    worstWith: '술만 마시는 타입',
    signatureDrink: '뭐든 안주랑 맞으면 OK',
    morningAfter: '해장국으로 마무리',
  },
};

export function calculateDrinkingStyleResult(answers: number[]): DrinkingStyleResult {
  const typeScores: Record<string, number> = {
    wild: 0,
    social: 0,
    chill: 0,
    emotional: 0,
    sleepy: 0,
    foodie: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'social';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
