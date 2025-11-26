// 오늘의 타로 테스트 - 오늘 당신에게 필요한 메시지는?

export const questions = [
  {
    id: 1,
    question: "오늘 아침 기분은 어땠나요?",
    options: [
      { text: "상쾌하고 기대됨", type: "sun", score: 5 },
      { text: "평범함", type: "star", score: 3 },
      { text: "약간 무거움", type: "moon", score: 2 },
      { text: "불안하거나 우울", type: "tower", score: 1 },
    ],
  },
  {
    id: 2,
    question: "지금 가장 원하는 것은?",
    options: [
      { text: "새로운 시작/기회", type: "fool", score: 5 },
      { text: "안정과 평화", type: "empress", score: 4 },
      { text: "사랑과 관계", type: "lovers", score: 3 },
      { text: "성취와 성공", type: "chariot", score: 2 },
    ],
  },
  {
    id: 3,
    question: "최근 고민이 있다면?",
    options: [
      { text: "선택/결정의 문제", type: "justice", score: 4 },
      { text: "관계 문제", type: "lovers", score: 3 },
      { text: "미래에 대한 불안", type: "moon", score: 2 },
      { text: "특별한 고민 없음", type: "sun", score: 5 },
    ],
  },
  {
    id: 4,
    question: "직감적으로 끌리는 숫자는?",
    options: [
      { text: "1 또는 3", type: "magician", score: 5 },
      { text: "7 또는 9", type: "hermit", score: 3 },
      { text: "4 또는 6", type: "empress", score: 4 },
      { text: "0 또는 13", type: "death", score: 2 },
    ],
  },
  {
    id: 5,
    question: "오늘 하루를 색으로 표현하면?",
    options: [
      { text: "노란색/금색", type: "sun", score: 5 },
      { text: "파란색/보라색", type: "high_priestess", score: 4 },
      { text: "초록색/분홍색", type: "empress", score: 3 },
      { text: "빨간색/검정색", type: "tower", score: 1 },
    ],
  },
  {
    id: 6,
    question: "지금 필요한 에너지는?",
    options: [
      { text: "용기와 행동력", type: "chariot", score: 5 },
      { text: "지혜와 통찰", type: "hermit", score: 4 },
      { text: "사랑과 치유", type: "empress", score: 3 },
      { text: "변화와 해방", type: "death", score: 2 },
    ],
  },
  {
    id: 7,
    question: "최근 꿈에서 본 것은?",
    options: [
      { text: "밝고 좋은 꿈", type: "sun", score: 5 },
      { text: "신비로운 꿈", type: "moon", score: 3 },
      { text: "잘 기억 안 남", type: "star", score: 4 },
      { text: "불안한 꿈", type: "tower", score: 1 },
    ],
  },
  {
    id: 8,
    question: "오늘의 키워드를 고른다면?",
    options: [
      { text: "희망", type: "star", score: 5 },
      { text: "사랑", type: "lovers", score: 4 },
      { text: "성장", type: "strength", score: 3 },
      { text: "변화", type: "wheel", score: 2 },
    ],
  },
  {
    id: 9,
    question: "직감적으로 끌리는 원소는?",
    options: [
      { text: "불 (열정, 에너지)", type: "wands", score: 5 },
      { text: "물 (감정, 직관)", type: "cups", score: 4 },
      { text: "바람 (지성, 소통)", type: "swords", score: 3 },
      { text: "땅 (안정, 물질)", type: "pentacles", score: 2 },
    ],
  },
  {
    id: 10,
    question: "오늘 가장 두려운 것은?",
    options: [
      { text: "두려운 것 없음", type: "strength", score: 5 },
      { text: "실패", type: "tower", score: 2 },
      { text: "외로움", type: "hermit", score: 3 },
      { text: "변화", type: "death", score: 1 },
    ],
  },
  {
    id: 11,
    question: "마음속 깊이 바라는 것은?",
    options: [
      { text: "자유와 모험", type: "fool", score: 5 },
      { text: "사랑과 연결", type: "lovers", score: 4 },
      { text: "성공과 인정", type: "emperor", score: 3 },
      { text: "평화와 휴식", type: "star", score: 2 },
    ],
  },
  {
    id: 12,
    question: "지금 이 순간 느끼는 감정은?",
    options: [
      { text: "기대와 설렘", type: "sun", score: 5 },
      { text: "평온함", type: "temperance", score: 4 },
      { text: "약간의 불안", type: "moon", score: 2 },
      { text: "무기력함", type: "hanged", score: 1 },
    ],
  },
];

export interface TarotTodayResult {
  card: string;
  title: string;
  emoji: string;
  description: string;
  imageDescription: string;
  meaning: string;
  todayMessage: string;
  loveAdvice: string;
  careerAdvice: string;
  healthAdvice: string;
  luckyItem: string;
  luckyColor: string;
  luckyNumber: number;
  warning: string;
  affirmation: string;
}

const resultTypes: Record<string, TarotTodayResult> = {
  sun: {
    card: 'The Sun',
    title: '태양',
    emoji: '☀️',
    description: '오늘은 빛나는 하루가 될 거예요! 긍정적인 에너지가 가득하고, 하는 일이 잘 풀릴 징조입니다. 자신감을 가지고 나아가세요.',
    imageDescription: '빛나는 태양 아래 기쁨에 찬 아이',
    meaning: '성공, 기쁨, 활력, 긍정',
    todayMessage: '오늘은 빛나는 하루가 될 거예요! 긍정적인 에너지가 가득하고, 하는 일이 잘 풀릴 징조입니다. 자신감을 가지고 나아가세요.',
    loveAdvice: '사랑에 좋은 날! 마음을 열고 표현하세요.',
    careerAdvice: '적극적으로 도전하세요. 좋은 결과가 있을 거예요.',
    healthAdvice: '에너지가 넘쳐요. 활동적인 하루 보내세요.',
    luckyItem: '노란색 악세서리',
    luckyColor: '노란색',
    luckyNumber: 19,
    warning: '과신은 금물. 겸손함도 잊지 마세요.',
    affirmation: '나는 빛나고 있고, 오늘은 좋은 일만 가득할 거야!',
  },
  star: {
    card: 'The Star',
    title: '별',
    emoji: '⭐',
    description: '힘든 시간을 지나고 있다면, 오늘 희망의 빛이 보일 거예요. 우주가 당신을 응원하고 있습니다. 믿음을 가지세요.',
    imageDescription: '밤하늘의 밝은 별과 희망의 여인',
    meaning: '희망, 영감, 치유, 평화',
    todayMessage: '힘든 시간을 지나고 있다면, 오늘 희망의 빛이 보일 거예요. 우주가 당신을 응원하고 있습니다. 믿음을 가지세요.',
    loveAdvice: '진정한 연결이 다가오고 있어요.',
    careerAdvice: '창의적인 아이디어가 떠오를 날. 기록해두세요.',
    healthAdvice: '마음의 평화가 건강에 좋은 영향을 줘요.',
    luckyItem: '별 모양 장식',
    luckyColor: '은색/하늘색',
    luckyNumber: 17,
    warning: '비현실적인 기대는 조심하세요.',
    affirmation: '나는 희망을 품고 있고, 좋은 일이 다가오고 있어.',
  },
  moon: {
    card: 'The Moon',
    title: '달',
    emoji: '🌙',
    description: '오늘은 직관을 믿으세요. 겉으로 보이는 것과 다를 수 있어요. 감정의 파도에 휩쓸리지 말고, 내면의 목소리를 들어보세요.',
    imageDescription: '신비로운 달빛 아래의 풍경',
    meaning: '직관, 무의식, 환상, 불안',
    todayMessage: '오늘은 직관을 믿으세요. 겉으로 보이는 것과 다를 수 있어요. 감정의 파도에 휩쓸리지 말고, 내면의 목소리를 들어보세요.',
    loveAdvice: '감정에만 의존하지 말고 현실도 보세요.',
    careerAdvice: '모든 정보를 신뢰하지 마세요. 확인이 필요해요.',
    healthAdvice: '충분한 수면과 명상이 도움이 될 거예요.',
    luckyItem: '달 모양 장식',
    luckyColor: '은색/남색',
    luckyNumber: 18,
    warning: '불안에 휩쓸리지 마세요. 대부분 기우예요.',
    affirmation: '나는 내 직관을 믿고, 진실을 볼 수 있어.',
  },
  lovers: {
    card: 'The Lovers',
    title: '연인',
    emoji: '💕',
    description: '오늘은 관계와 선택에 관한 날이에요. 중요한 결정이 있다면 마음의 소리를 들어보세요. 사랑하는 사람들과의 연결이 중요한 날입니다.',
    imageDescription: '사랑으로 연결된 두 사람',
    meaning: '사랑, 조화, 선택, 관계',
    todayMessage: '오늘은 관계와 선택에 관한 날이에요. 중요한 결정이 있다면 마음의 소리를 들어보세요. 사랑하는 사람들과의 연결이 중요한 날입니다.',
    loveAdvice: '사랑에 좋은 날! 마음을 열어보세요.',
    careerAdvice: '협력과 파트너십이 좋은 결과를 가져와요.',
    healthAdvice: '관계에서 오는 스트레스를 관리하세요.',
    luckyItem: '하트 모양 장식',
    luckyColor: '분홍색/빨간색',
    luckyNumber: 6,
    warning: '감정에만 휩쓸린 결정은 조심하세요.',
    affirmation: '나는 사랑받을 자격이 있고, 진정한 연결을 할 수 있어.',
  },
  strength: {
    card: 'Strength',
    title: '힘',
    emoji: '🦁',
    description: '오늘은 내면의 힘을 발휘할 날이에요. 어려움이 있어도 당신 안에 이겨낼 힘이 있습니다. 부드러움 속의 강함을 보여주세요.',
    imageDescription: '사자를 부드럽게 다루는 여인',
    meaning: '내면의 힘, 용기, 인내, 자제력',
    todayMessage: '오늘은 내면의 힘을 발휘할 날이에요. 어려움이 있어도 당신 안에 이겨낼 힘이 있습니다. 부드러움 속의 강함을 보여주세요.',
    loveAdvice: '인내와 이해심이 관계를 더 깊게 해요.',
    careerAdvice: '도전적인 상황에서 침착하게 대처하세요.',
    healthAdvice: '스트레스 관리가 중요한 날이에요.',
    luckyItem: '용기를 상징하는 장식',
    luckyColor: '금색/주황색',
    luckyNumber: 8,
    warning: '무리하지 마세요. 쉬어가는 것도 용기예요.',
    affirmation: '나는 강하고, 어떤 도전도 이겨낼 수 있어.',
  },
  hermit: {
    card: 'The Hermit',
    title: '은둔자',
    emoji: '🔦',
    description: '오늘은 혼자만의 시간이 필요한 날이에요. 내면을 들여다보고 진정 원하는 것이 무엇인지 생각해보세요. 지혜는 고요함 속에서 옵니다.',
    imageDescription: '등불을 든 지혜로운 현자',
    meaning: '성찰, 지혜, 내면 탐구, 고독',
    todayMessage: '오늘은 혼자만의 시간이 필요한 날이에요. 내면을 들여다보고 진정 원하는 것이 무엇인지 생각해보세요. 지혜는 고요함 속에서 옵니다.',
    loveAdvice: '혼자 있는 시간도 사랑의 일부예요.',
    careerAdvice: '깊이 생각하고 결정하세요. 서두르지 마세요.',
    healthAdvice: '명상과 휴식이 필요한 날이에요.',
    luckyItem: '책 또는 일기장',
    luckyColor: '회색/보라색',
    luckyNumber: 9,
    warning: '너무 오래 고립되지 마세요.',
    affirmation: '나는 내 안에서 답을 찾을 수 있어.',
  },
  tower: {
    card: 'The Tower',
    title: '탑',
    emoji: '⚡',
    description: '오늘 예상치 못한 변화가 있을 수 있어요. 하지만 두려워하지 마세요. 무너지는 것은 새로운 시작을 위한 것입니다. 변화를 받아들이세요.',
    imageDescription: '번개에 맞아 무너지는 탑',
    meaning: '급변, 해방, 깨달음, 재건',
    todayMessage: '오늘 예상치 못한 변화가 있을 수 있어요. 하지만 두려워하지 마세요. 무너지는 것은 새로운 시작을 위한 것입니다. 변화를 받아들이세요.',
    loveAdvice: '진실이 드러날 수 있어요. 받아들일 준비를 하세요.',
    careerAdvice: '변화에 유연하게 대처하세요.',
    healthAdvice: '스트레스 관리에 신경 쓰세요.',
    luckyItem: '보호 부적',
    luckyColor: '빨간색',
    luckyNumber: 16,
    warning: '충동적인 결정은 피하세요.',
    affirmation: '변화는 성장의 기회야. 나는 다시 일어설 수 있어.',
  },
  chariot: {
    card: 'The Chariot',
    title: '전차',
    emoji: '🏆',
    description: '오늘은 목표를 향해 전진할 때예요! 강한 의지와 집중력으로 장애물을 극복하세요. 승리가 기다리고 있습니다.',
    imageDescription: '승리의 전차를 모는 전사',
    meaning: '승리, 의지력, 결단, 전진',
    todayMessage: '오늘은 목표를 향해 전진할 때예요! 강한 의지와 집중력으로 장애물을 극복하세요. 승리가 기다리고 있습니다.',
    loveAdvice: '적극적으로 다가가세요. 승부를 걸 때예요.',
    careerAdvice: '결단력 있게 행동하세요. 좋은 결과가 있을 거예요.',
    healthAdvice: '에너지가 높아요. 활동적으로 보내세요.',
    luckyItem: '승리를 상징하는 것',
    luckyColor: '파란색/금색',
    luckyNumber: 7,
    warning: '고집만 부리지 말고 유연함도 필요해요.',
    affirmation: '나는 내 목표를 향해 나아가고 있고, 반드시 성공할 거야!',
  },
};

export function calculateTarotTodayResult(answers: number[]): TarotTodayResult {
  const typeScores: Record<string, number> = {};

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] = (typeScores[type] || 0) + 1;
    }
  });

  let maxType = 'star';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  // 매핑
  const typeToResult: Record<string, string> = {
    sun: 'sun',
    star: 'star',
    moon: 'moon',
    lovers: 'lovers',
    strength: 'strength',
    hermit: 'hermit',
    tower: 'tower',
    chariot: 'chariot',
    fool: 'chariot',
    empress: 'lovers',
    justice: 'hermit',
    magician: 'sun',
    high_priestess: 'moon',
    death: 'tower',
    wheel: 'star',
    temperance: 'star',
    hanged: 'hermit',
    emperor: 'chariot',
    wands: 'chariot',
    cups: 'lovers',
    swords: 'hermit',
    pentacles: 'strength',
  };

  const resultKey = typeToResult[maxType] || 'star';
  return resultTypes[resultKey];
}
