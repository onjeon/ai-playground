// 연애 마인드셋 테스트

export const questions = [
  {
    id: 1,
    question: "연애에서 가장 중요한 것은?",
    options: [
      { text: "로맨틱한 감정과 설렘", value: "romantic" },
      { text: "현실적 조건과 미래", value: "realistic" },
      { text: "자유로움과 독립", value: "free" },
      { text: "깊은 헌신과 신뢰", value: "devoted" },
    ],
  },
  {
    id: 2,
    question: "이상적인 데이트는?",
    options: [
      { text: "서프라이즈 이벤트/여행", value: "romantic" },
      { text: "맛집에서 미래 계획 대화", value: "realistic" },
      { text: "각자 하고 싶은 걸 함께", value: "free" },
      { text: "집에서 둘만의 시간", value: "devoted" },
    ],
  },
  {
    id: 3,
    question: "연인의 조건 중 가장 중요한 것은?",
    options: [
      { text: "나를 설레게 하는 사람", value: "romantic" },
      { text: "조건이 맞는 사람", value: "realistic" },
      { text: "서로 존중하는 사람", value: "free" },
      { text: "나만 바라보는 사람", value: "devoted" },
    ],
  },
  {
    id: 4,
    question: "연인과 다툼이 생기면?",
    options: [
      { text: "화해 이벤트로 풀기", value: "romantic" },
      { text: "합리적으로 대화", value: "realistic" },
      { text: "각자 시간을 갖기", value: "free" },
      { text: "무조건 화해해야 함", value: "devoted" },
    ],
  },
  {
    id: 5,
    question: "연애 기념일에 대해?",
    options: [
      { text: "모든 기념일 철저히 챙김", value: "romantic" },
      { text: "중요한 기념일만 챙김", value: "realistic" },
      { text: "형식보다 진심이 중요", value: "free" },
      { text: "매일이 기념일", value: "devoted" },
    ],
  },
  {
    id: 6,
    question: "연인의 SNS 활동에 대해?",
    options: [
      { text: "커플 사진 자주 올리기", value: "romantic" },
      { text: "각자 알아서", value: "realistic" },
      { text: "개인 프라이버시 존중", value: "free" },
      { text: "모든 것 공유하고 싶음", value: "devoted" },
    ],
  },
  {
    id: 7,
    question: "연인과 떨어져 있을 때?",
    options: [
      { text: "많이 보고 싶어함", value: "romantic" },
      { text: "각자 할 일 하기", value: "realistic" },
      { text: "개인 시간 즐기기", value: "free" },
      { text: "수시로 연락하고 싶음", value: "devoted" },
    ],
  },
  {
    id: 8,
    question: "연인에게 선물을 준다면?",
    options: [
      { text: "감동적인 서프라이즈 선물", value: "romantic" },
      { text: "실용적이고 필요한 것", value: "realistic" },
      { text: "부담 없는 작은 선물", value: "free" },
      { text: "정성 담은 수제 선물", value: "devoted" },
    ],
  },
  {
    id: 9,
    question: "결혼에 대한 생각은?",
    options: [
      { text: "로맨틱한 프로포즈가 꿈", value: "romantic" },
      { text: "조건이 맞으면 OK", value: "realistic" },
      { text: "연애와 결혼은 별개", value: "free" },
      { text: "사랑하면 당연히 결혼", value: "devoted" },
    ],
  },
  {
    id: 10,
    question: "연인 외 이성 친구에 대해?",
    options: [
      { text: "연인이면 모든 게 달라야 함", value: "romantic" },
      { text: "적당한 선 유지하면 OK", value: "realistic" },
      { text: "친구는 친구, 자유롭게", value: "free" },
      { text: "연인이 있으면 불편함", value: "devoted" },
    ],
  },
  {
    id: 11,
    question: "사랑의 표현 방식은?",
    options: [
      { text: "달달한 말과 행동", value: "romantic" },
      { text: "실질적인 도움", value: "realistic" },
      { text: "존중과 자유 부여", value: "free" },
      { text: "모든 것을 함께하기", value: "devoted" },
    ],
  },
  {
    id: 12,
    question: "이별 후 나는?",
    options: [
      { text: "오래 아파함", value: "romantic" },
      { text: "빠르게 정리하고 다음으로", value: "realistic" },
      { text: "자유로워졌다고 느낌", value: "free" },
      { text: "오랫동안 잊지 못함", value: "devoted" },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  cautions: string[];
  compatibility: string;
  advice: string;
}> = {
  romantic: {
    type: "romantic",
    title: "로맨티스트",
    emoji: "💕",
    description: "당신은 사랑에 푹 빠지는 로맨티스트! 설렘과 감동을 중시하며 연애에 진심인 타입이에요.",
    traits: ["감성적", "표현력", "열정적", "로맨틱"],
    strengths: ["감동 이벤트", "애정 표현", "기념일 챙기기", "분위기 메이커"],
    cautions: ["현실 감각", "과한 기대", "질투심"],
    compatibility: "헌신형과 잘 맞아요!",
    advice: "로맨스도 좋지만 현실적인 면도 함께 보세요!",
  },
  realistic: {
    type: "realistic",
    title: "현실주의자",
    emoji: "🎯",
    description: "당신은 연애도 현실적으로 보는 현실주의자! 조건과 미래를 중시하며 합리적인 타입이에요.",
    traits: ["합리적", "계획적", "실용적", "냉정함"],
    strengths: ["안정적 관계", "미래 계획", "갈등 해결", "균형 유지"],
    cautions: ["감정 표현", "로맨틱함 부족", "계산적"],
    compatibility: "비슷한 현실주의자와 잘 맞아요!",
    advice: "가끔은 감성적인 면도 표현해보세요!",
  },
  free: {
    type: "free",
    title: "자유연애파",
    emoji: "🦋",
    description: "당신은 자유로운 연애를 추구하는 타입! 독립성과 개인 공간을 중시하며 존중을 중요하게 여겨요.",
    traits: ["독립적", "존중", "개방적", "자유로움"],
    strengths: ["개인 존중", "스트레스 없는 관계", "성숙함", "자기 발전"],
    cautions: ["친밀감 부족", "애정 표현", "거리감"],
    compatibility: "같은 자유연애파와 잘 맞아요!",
    advice: "자유도 좋지만 가끔은 더 가까이 다가가보세요!",
  },
  devoted: {
    type: "devoted",
    title: "헌신형",
    emoji: "💝",
    description: "당신은 사랑에 올인하는 헌신형! 깊은 신뢰와 끈끈한 관계를 중시하며 진심을 다하는 타입이에요.",
    traits: ["헌신적", "충실함", "깊은 애정", "함께함"],
    strengths: ["믿음직함", "깊은 유대감", "노력", "진정성"],
    cautions: ["집착", "의존", "번아웃"],
    compatibility: "로맨티스트와 잘 맞아요!",
    advice: "헌신도 좋지만 나 자신도 소중히 여기세요!",
  },
};

export function calculateResult(answers: string[]): string {
  const scores: Record<string, number> = {
    romantic: 0,
    realistic: 0,
    free: 0,
    devoted: 0,
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
