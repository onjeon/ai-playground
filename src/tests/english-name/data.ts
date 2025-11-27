// 영어 이름 추천 테스트

export const questions = [
  {
    id: 1,
    question: "당신의 첫인상은 어떤 편인가요?",
    options: [
      { text: "따뜻하고 친근한 느낌", value: "warm" },
      { text: "시크하고 세련된 느낌", value: "cool" },
      { text: "밝고 활기찬 느낌", value: "bright" },
      { text: "신비롭고 독특한 느낌", value: "mysterious" },
    ],
  },
  {
    id: 2,
    question: "선호하는 분위기는?",
    options: [
      { text: "클래식하고 우아한", value: "classic" },
      { text: "모던하고 트렌디한", value: "modern" },
      { text: "자연스럽고 편안한", value: "natural" },
      { text: "독특하고 개성있는", value: "unique" },
    ],
  },
  {
    id: 3,
    question: "자신의 성격을 한 단어로?",
    options: [
      { text: "다정함", value: "warm" },
      { text: "카리스마", value: "cool" },
      { text: "유쾌함", value: "bright" },
      { text: "창의적", value: "mysterious" },
    ],
  },
  {
    id: 4,
    question: "좋아하는 계절은?",
    options: [
      { text: "따뜻한 봄", value: "warm" },
      { text: "시원한 겨울", value: "cool" },
      { text: "활기찬 여름", value: "bright" },
      { text: "감성적인 가을", value: "mysterious" },
    ],
  },
  {
    id: 5,
    question: "모임에서 나는?",
    options: [
      { text: "모두와 잘 어울리는 편", value: "warm" },
      { text: "소수의 사람과 깊게 대화", value: "cool" },
      { text: "분위기 메이커", value: "bright" },
      { text: "관찰자 역할", value: "mysterious" },
    ],
  },
  {
    id: 6,
    question: "좋아하는 색상 계열은?",
    options: [
      { text: "파스텔 톤, 베이지", value: "warm" },
      { text: "블랙, 네이비, 그레이", value: "cool" },
      { text: "옐로우, 오렌지, 핑크", value: "bright" },
      { text: "퍼플, 와인, 딥그린", value: "mysterious" },
    ],
  },
  {
    id: 7,
    question: "이상적인 주말 활동은?",
    options: [
      { text: "가족/친구와 따뜻한 시간", value: "warm" },
      { text: "혼자만의 조용한 시간", value: "cool" },
      { text: "활동적인 취미나 여행", value: "bright" },
      { text: "예술/문화 활동", value: "mysterious" },
    ],
  },
  {
    id: 8,
    question: "음악 취향은?",
    options: [
      { text: "발라드, 어쿠스틱", value: "warm" },
      { text: "재즈, 클래식", value: "cool" },
      { text: "팝, 댄스", value: "bright" },
      { text: "인디, 얼터너티브", value: "mysterious" },
    ],
  },
  {
    id: 9,
    question: "스트레스 해소 방법은?",
    options: [
      { text: "좋아하는 사람과 대화", value: "warm" },
      { text: "혼자 명상이나 독서", value: "cool" },
      { text: "운동이나 춤", value: "bright" },
      { text: "창작 활동이나 글쓰기", value: "mysterious" },
    ],
  },
  {
    id: 10,
    question: "패션 스타일은?",
    options: [
      { text: "로맨틱, 페미닌", value: "warm" },
      { text: "미니멀, 시크", value: "cool" },
      { text: "캐주얼, 스포티", value: "bright" },
      { text: "유니크, 빈티지", value: "mysterious" },
    ],
  },
  {
    id: 11,
    question: "동물에 비유한다면?",
    options: [
      { text: "강아지, 토끼", value: "warm" },
      { text: "고양이, 늑대", value: "cool" },
      { text: "돌고래, 앵무새", value: "bright" },
      { text: "올빼미, 여우", value: "mysterious" },
    ],
  },
  {
    id: 12,
    question: "이름에서 주고 싶은 느낌은?",
    options: [
      { text: "친근하고 부르기 쉬운", value: "warm" },
      { text: "세련되고 품위있는", value: "cool" },
      { text: "밝고 긍정적인", value: "bright" },
      { text: "독특하고 기억에 남는", value: "mysterious" },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  names: { name: string; meaning: string }[];
  description: string;
  traits: string[];
  famousPeople: string;
}> = {
  warm: {
    type: "warm",
    title: "따뜻한 감성의 이름",
    emoji: "🌸",
    names: [
      { name: "Emma", meaning: "전체, 완전한 - 따뜻하고 포용력 있는" },
      { name: "Grace", meaning: "우아함, 은총 - 품위 있고 다정한" },
      { name: "Lily", meaning: "백합 - 순수하고 아름다운" },
      { name: "Sophie", meaning: "지혜 - 현명하고 따뜻한" },
    ],
    description: "당신은 따뜻하고 다정한 에너지를 가진 사람입니다. 부드럽고 친근한 이름이 잘 어울립니다.",
    traits: ["다정함", "포용력", "친근함", "따뜻함"],
    famousPeople: "엠마 왓슨, 그레이스 켈리",
  },
  cool: {
    type: "cool",
    title: "시크한 매력의 이름",
    emoji: "❄️",
    names: [
      { name: "Victoria", meaning: "승리 - 강인하고 우아한" },
      { name: "Alexandra", meaning: "수호자 - 세련되고 품위있는" },
      { name: "Serena", meaning: "고요한 - 차분하고 시크한" },
      { name: "Diana", meaning: "신성한 - 고귀하고 카리스마있는" },
    ],
    description: "당신은 세련되고 카리스마 있는 매력을 가진 사람입니다. 품위 있고 시크한 이름이 잘 어울립니다.",
    traits: ["세련됨", "품위", "카리스마", "신비로움"],
    famousPeople: "빅토리아 베컴, 다이애나 비",
  },
  bright: {
    type: "bright",
    title: "밝은 에너지의 이름",
    emoji: "☀️",
    names: [
      { name: "Joy", meaning: "기쁨 - 밝고 긍정적인" },
      { name: "Sunny", meaning: "햇살 - 활기차고 따뜻한" },
      { name: "Bella", meaning: "아름다운 - 화사하고 매력적인" },
      { name: "Lucy", meaning: "빛 - 밝고 영롱한" },
    ],
    description: "당신은 밝고 활기찬 에너지를 가진 사람입니다. 긍정적이고 화사한 이름이 잘 어울립니다.",
    traits: ["밝음", "활기참", "긍정적", "유쾌함"],
    famousPeople: "루시 리우, 벨라 하디드",
  },
  mysterious: {
    type: "mysterious",
    title: "신비로운 분위기의 이름",
    emoji: "🌙",
    names: [
      { name: "Luna", meaning: "달 - 신비롭고 독특한" },
      { name: "Aurora", meaning: "새벽 - 환상적이고 아름다운" },
      { name: "Iris", meaning: "무지개 - 다채롭고 신비로운" },
      { name: "Celeste", meaning: "하늘의 - 우아하고 신비한" },
    ],
    description: "당신은 신비롭고 독특한 매력을 가진 사람입니다. 개성 있고 기억에 남는 이름이 잘 어울립니다.",
    traits: ["신비로움", "독특함", "창의적", "깊이있음"],
    famousPeople: "오로라(가수), 루나 러브굿(해리포터)",
  },
};

export function calculateResult(answers: string[]): string {
  const scores: Record<string, number> = {
    warm: 0,
    cool: 0,
    bright: 0,
    mysterious: 0,
  };

  answers.forEach(answer => {
    if (scores[answer] !== undefined) {
      scores[answer]++;
    }
  });

  return Object.entries(scores).reduce((a, b) =>
    scores[a[0]] > scores[b[0]] ? a : b
  )[0];
}
