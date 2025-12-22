// 비판적 사고력 테스트

export const questions = [
  {
    id: 1,
    question: "'이 다이어트 약을 먹고 100명 중 80명이 살이 빠졌습니다.' 이 주장의 문제점은?",
    options: [
      { text: "대조군 없음, 얼마나 빠졌는지 불명확", type: "A" },
      { text: "문제없음, 80%면 효과적", type: "D" },
      { text: "숫자가 너무 적음", type: "C" },
      { text: "100명은 충분한 표본", type: "B" },
    ],
  },
  {
    id: 2,
    question: "'유명 연예인 A씨도 이 제품을 사용합니다.' 이 광고의 논리적 오류는?",
    options: [
      { text: "권위에 호소하는 오류", type: "A" },
      { text: "완벽하게 설득력 있음", type: "D" },
      { text: "수량이 부족함", type: "C" },
      { text: "가격을 언급하지 않음", type: "B" },
    ],
  },
  {
    id: 3,
    question: "'모두가 그렇게 하니까 나도 해야 해.' 이 논리의 문제점은?",
    options: [
      { text: "대중에 호소하는 오류", type: "A" },
      { text: "합리적인 판단", type: "D" },
      { text: "매우 설득력 있음", type: "C" },
      { text: "사회적 증거로 타당", type: "B" },
    ],
  },
  {
    id: 4,
    question: "'A를 하지 않으면 B가 일어난다'는 주장을 평가할 때 확인해야 할 것은?",
    options: [
      { text: "A와 B 사이의 인과관계 증거", type: "A" },
      { text: "A를 하면 항상 좋은 결과", type: "D" },
      { text: "B가 일어날 확률", type: "C" },
      { text: "A의 비용", type: "B" },
    ],
  },
  {
    id: 5,
    question: "연구 결과가 '상관관계'를 보여줄 때, 이것이 '인과관계'를 의미하나요?",
    options: [
      { text: "아니오, 상관관계는 인과관계가 아님", type: "A" },
      { text: "예, 같은 의미", type: "D" },
      { text: "때때로 같음", type: "C" },
      { text: "항상 같음", type: "B" },
    ],
  },
  {
    id: 6,
    question: "'이것을 반대하면 당신은 X와 같은 부류입니다.' 이 주장의 문제점은?",
    options: [
      { text: "인신공격 및 허수아비 논증", type: "A" },
      { text: "논리적으로 타당", type: "D" },
      { text: "약간의 문제만 있음", type: "C" },
      { text: "효과적인 설득법", type: "B" },
    ],
  },
  {
    id: 7,
    question: "두 가지 선택지만 제시하며 '둘 중 하나를 선택해야 한다'고 할 때?",
    options: [
      { text: "흑백논리 오류, 다른 선택지 확인 필요", type: "A" },
      { text: "합리적인 선택 요구", type: "D" },
      { text: "결정을 도와주는 방법", type: "C" },
      { text: "효율적인 의사결정", type: "B" },
    ],
  },
  {
    id: 8,
    question: "'과거에 항상 그래왔으니 앞으로도 그럴 것이다.' 이 추론의 문제점은?",
    options: [
      { text: "귀납의 한계, 예외 가능성 무시", type: "A" },
      { text: "완벽하게 논리적", type: "D" },
      { text: "과거는 미래를 보장", type: "C" },
      { text: "경험은 최고의 증거", type: "B" },
    ],
  },
  {
    id: 9,
    question: "논쟁에서 상대방의 주장을 과장하거나 왜곡해서 공격하는 것은?",
    options: [
      { text: "허수아비 논증 오류", type: "A" },
      { text: "효과적인 토론 기술", type: "D" },
      { text: "정당한 반박", type: "C" },
      { text: "논리적 분석", type: "B" },
    ],
  },
  {
    id: 10,
    question: "'증명되지 않았으니 거짓이다' 또는 '반증되지 않았으니 참이다.' 이 논리는?",
    options: [
      { text: "무지에 호소하는 오류", type: "A" },
      { text: "합리적 결론", type: "D" },
      { text: "과학적 방법", type: "C" },
      { text: "논리적 추론", type: "B" },
    ],
  },
  {
    id: 11,
    question: "감정에 호소하여 논리적 근거 없이 설득하려는 것은?",
    options: [
      { text: "감정에 호소하는 오류", type: "A" },
      { text: "효과적인 커뮤니케이션", type: "D" },
      { text: "공감 능력의 표현", type: "C" },
      { text: "설득의 정석", type: "B" },
    ],
  },
  {
    id: 12,
    question: "주장을 뒷받침하는 근거가 그 주장 자체를 전제로 할 때?",
    options: [
      { text: "순환 논증 오류", type: "A" },
      { text: "강력한 논증", type: "D" },
      { text: "자기 증명", type: "C" },
      { text: "일관된 주장", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "비판적 사고 천재",
    emoji: "🎓",
    description: "당신은 뛰어난 비판적 사고력을 가지고 있습니다! 논리적 오류를 빠르게 발견하고, 주장의 타당성을 정확하게 평가합니다.",
    traits: ["논리적 오류 탐지", "비판적 분석", "증거 평가", "객관적 판단"],
    strengths: ["가짜 뉴스 구별", "합리적 의사결정", "토론/논쟁", "연구/분석"],
    weaknesses: ["때때로 지나친 의심", "긍정적 측면 간과"],
    tips: ["비판과 건설적 제안을 함께 하세요", "다양한 관점도 수용해보세요"],
  },
  B: {
    type: "B",
    title: "비판적 사고 전문가",
    emoji: "⭐",
    description: "비판적 사고력이 우수합니다. 대부분의 논리적 오류를 파악하며, 주장을 합리적으로 평가합니다.",
    traits: ["우수한 논리 분석", "오류 인식", "증거 검토", "합리적 판단"],
    strengths: ["논리적 평가", "정보 검증", "합리적 토론"],
    weaknesses: ["복잡한 오류 놓칠 수 있음", "더 깊은 분석 필요"],
    tips: ["더 다양한 논리적 오류를 공부해보세요", "철학적 논증을 읽어보세요"],
  },
  C: {
    type: "C",
    title: "비판적 사고 탐구자",
    emoji: "📚",
    description: "기본적인 비판적 사고력을 갖추고 있습니다. 일부 오류는 파악하지만, 더 체계적인 분석 능력이 필요합니다.",
    traits: ["기본 비판력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 논리 이해", "질문하는 자세", "열린 마음"],
    weaknesses: ["논리적 오류 학습 필요", "체계적 분석 연습 필요"],
    tips: ["논리학 기초를 공부해보세요", "'왜?'라고 자주 질문하세요"],
  },
  D: {
    type: "D",
    title: "비판적 사고 도전자",
    emoji: "🌱",
    description: "비판적 사고력은 학습으로 크게 향상될 수 있습니다! 논리적 오류에 대해 공부해보세요.",
    traits: ["발전 가능성", "수용적", "신뢰적", "긍정적"],
    strengths: ["열린 마음", "다양한 의견 수용", "긍정적 태도"],
    weaknesses: ["비판적 분석 연습 필요", "논리적 오류 학습 필요"],
    tips: ["미디어 리터러시를 배워보세요", "주장의 근거를 항상 확인하세요"],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
