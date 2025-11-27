// 카리스마 지수 테스트

export const questions = [
  {
    id: 1,
    question: "방에 들어갔을 때 사람들의 반응은?",
    options: [
      { text: "시선이 자연스럽게 나에게 온다", value: "A" },
      { text: "친한 사람들이 반긴다", value: "B" },
      { text: "특별한 반응은 없다", value: "C" },
      { text: "내가 먼저 인사해야 알아챈다", value: "D" },
    ],
  },
  {
    id: 2,
    question: "사람들 앞에서 말할 때 어떤가요?",
    options: [
      { text: "자연스럽고 사람들이 집중한다", value: "A" },
      { text: "준비하면 잘 한다", value: "B" },
      { text: "긴장되지만 해낸다", value: "C" },
      { text: "많이 긴장되고 피하고 싶다", value: "D" },
    ],
  },
  {
    id: 3,
    question: "내 의견에 대한 사람들의 반응은?",
    options: [
      { text: "대부분 동의하고 따른다", value: "A" },
      { text: "진지하게 들어준다", value: "B" },
      { text: "가끔 들어준다", value: "C" },
      { text: "별로 관심을 안 가진다", value: "D" },
    ],
  },
  {
    id: 4,
    question: "처음 만난 사람과 대화할 때?",
    options: [
      { text: "자연스럽게 분위기를 이끈다", value: "A" },
      { text: "대화를 잘 이어간다", value: "B" },
      { text: "상대방에 따라 다르다", value: "C" },
      { text: "어색하고 힘들다", value: "D" },
    ],
  },
  {
    id: 5,
    question: "그룹에서 결정을 내릴 때 나는?",
    options: [
      { text: "자연스럽게 결정을 주도한다", value: "A" },
      { text: "의견을 적극적으로 낸다", value: "B" },
      { text: "다른 사람 의견을 따른다", value: "C" },
      { text: "결정에 참여하지 않는다", value: "D" },
    ],
  },
  {
    id: 6,
    question: "눈 맞춤에 대해 어떤가요?",
    options: [
      { text: "자연스럽게 눈을 맞추며 대화한다", value: "A" },
      { text: "적당히 맞춘다", value: "B" },
      { text: "자주 시선을 피한다", value: "C" },
      { text: "눈 맞추기가 불편하다", value: "D" },
    ],
  },
  {
    id: 7,
    question: "어려운 상황에서 나는?",
    options: [
      { text: "침착하게 상황을 이끈다", value: "A" },
      { text: "해결책을 찾으려 노력한다", value: "B" },
      { text: "다른 사람에게 의지한다", value: "C" },
      { text: "당황하고 얼어붙는다", value: "D" },
    ],
  },
  {
    id: 8,
    question: "목소리에 대한 평가는?",
    options: [
      { text: "힘있고 전달력이 좋다", value: "A" },
      { text: "듣기 좋은 편이다", value: "B" },
      { text: "평범하다", value: "C" },
      { text: "작거나 자신감이 없다", value: "D" },
    ],
  },
  {
    id: 9,
    question: "자신감 수준은?",
    options: [
      { text: "어떤 상황에서도 자신감 있다", value: "A" },
      { text: "대부분 자신감이 있다", value: "B" },
      { text: "상황에 따라 다르다", value: "C" },
      { text: "자신감이 부족하다", value: "D" },
    ],
  },
  {
    id: 10,
    question: "설득이 필요한 상황에서?",
    options: [
      { text: "대부분 설득에 성공한다", value: "A" },
      { text: "열심히 노력하면 성공한다", value: "B" },
      { text: "반반이다", value: "C" },
      { text: "설득을 잘 못한다", value: "D" },
    ],
  },
  {
    id: 11,
    question: "나만의 독특한 매력이 있다고 생각하나요?",
    options: [
      { text: "확실히 있다", value: "A" },
      { text: "있는 것 같다", value: "B" },
      { text: "잘 모르겠다", value: "C" },
      { text: "없는 것 같다", value: "D" },
    ],
  },
  {
    id: 12,
    question: "사람들이 나를 따르거나 좋아하는 편인가요?",
    options: [
      { text: "많은 사람들이 따른다", value: "A" },
      { text: "꽤 있는 편이다", value: "B" },
      { text: "보통이다", value: "C" },
      { text: "별로 없다", value: "D" },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  score: string;
  description: string;
  traits: string[];
  strengths: string[];
  famousPeople: string;
  advice: string;
}> = {
  charisma_master: {
    type: "charisma_master",
    title: "카리스마의 화신",
    emoji: "👑",
    score: "90-100점",
    description: "당신은 타고난 카리스마의 소유자입니다! 존재감만으로 사람들의 시선을 사로잡고, 자연스럽게 리더 역할을 합니다.",
    traits: ["강력한 존재감", "뛰어난 설득력", "자연스러운 리더십", "압도적 매력"],
    strengths: ["대중 연설", "팀 이끌기", "협상", "인맥 형성"],
    famousPeople: "스티브 잡스, 오프라 윈프리, 방탄소년단 RM",
    advice: "당신의 카리스마는 큰 영향력입니다. 선한 방향으로 사용하세요!",
  },
  charisma_strong: {
    type: "charisma_strong",
    title: "강한 카리스마",
    emoji: "⭐",
    score: "70-89점",
    description: "당신은 상당한 카리스마를 가지고 있습니다. 사람들에게 좋은 인상을 주고 의견을 잘 전달합니다.",
    traits: ["좋은 존재감", "설득력", "자신감", "매력"],
    strengths: ["발표", "리더십", "대인관계", "협업"],
    famousPeople: "유재석, 손석희, 김연아",
    advice: "조금 더 자신감을 가지면 카리스마가 더 빛날 것입니다!",
  },
  charisma_moderate: {
    type: "charisma_moderate",
    title: "보통의 카리스마",
    emoji: "🌟",
    score: "50-69점",
    description: "당신은 평균적인 수준의 카리스마를 가지고 있습니다. 상황에 따라 존재감을 발휘합니다.",
    traits: ["적당한 존재감", "상황적 자신감", "평균적 설득력", "잠재력"],
    strengths: ["안정감", "협조", "적응력", "균형"],
    famousPeople: "박보검, 아이유, 공유",
    advice: "자신만의 강점을 찾고 더 자신감 있게 표현해보세요!",
  },
  charisma_developing: {
    type: "charisma_developing",
    title: "카리스마 개발 중",
    emoji: "🌱",
    score: "30-49점",
    description: "카리스마를 더 발전시킬 수 있는 잠재력이 있습니다. 연습으로 크게 향상될 수 있습니다!",
    traits: ["잠재력", "겸손함", "관찰력", "성장 가능성"],
    strengths: ["경청", "세심함", "신중함", "협력"],
    famousPeople: "이문세, 차은우, 손예진",
    advice: "눈 맞춤, 목소리 톤, 자세부터 연습해보세요. 작은 변화가 큰 차이를 만듭니다!",
  },
};

export function calculateResult(answers: string[]): string {
  let score = 0;
  answers.forEach(answer => {
    if (answer === 'A') score += 3;
    else if (answer === 'B') score += 2;
    else if (answer === 'C') score += 1;
    else if (answer === 'D') score += 0;
  });

  const percentage = (score / 36) * 100;
  
  if (percentage >= 80) return "charisma_master";
  if (percentage >= 60) return "charisma_strong";
  if (percentage >= 40) return "charisma_moderate";
  return "charisma_developing";
}
