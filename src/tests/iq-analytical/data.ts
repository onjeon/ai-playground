// 분석력 테스트

export const questions = [
  {
    id: 1,
    question: "다음 데이터에서 이상한 점을 찾으세요: 판매량(월별) - 100, 120, 115, 350, 125, 130",
    options: [
      { text: "4월 350이 비정상적으로 높음", type: "A" },
      { text: "모두 정상", type: "D" },
      { text: "숫자가 너무 작음", type: "C" },
      { text: "증가 추세가 아님", type: "B" },
    ],
  },
  {
    id: 2,
    question: "A회사 매출이 증가하고 B회사 매출이 감소했을 때, 가장 먼저 확인해야 할 것은?",
    options: [
      { text: "두 회사의 제품/서비스 차이점", type: "A" },
      { text: "날씨 영향", type: "D" },
      { text: "전체 시장 규모", type: "B" },
      { text: "직원 수 변화", type: "C" },
    ],
  },
  {
    id: 3,
    question: "다음 중 상관관계와 인과관계를 구분하는 데 가장 중요한 것은?",
    options: [
      { text: "제3의 변수 가능성 검토", type: "A" },
      { text: "데이터 양 증가", type: "C" },
      { text: "직관적 판단", type: "D" },
      { text: "두 변수의 동시 발생 빈도", type: "B" },
    ],
  },
  {
    id: 4,
    question: "그래프에서 기울기가 갑자기 변하는 지점이 있다면?",
    options: [
      { text: "해당 시점에 특별한 사건이 있었는지 조사", type: "A" },
      { text: "그래프 오류로 판단", type: "D" },
      { text: "무시하고 전체 추세만 봄", type: "C" },
      { text: "데이터를 수정", type: "B" },
    ],
  },
  {
    id: 5,
    question: "실험 결과가 예상과 다르게 나왔을 때?",
    options: [
      { text: "실험 조건과 변수를 재검토", type: "A" },
      { text: "실험을 포기", type: "D" },
      { text: "예상대로 결과 조정", type: "C" },
      { text: "다른 실험으로 교체", type: "B" },
    ],
  },
  {
    id: 6,
    question: "다양한 정보 중 핵심을 찾는 가장 좋은 방법은?",
    options: [
      { text: "목적에 맞는 기준으로 정보 필터링", type: "A" },
      { text: "모든 정보를 똑같이 중요하게 봄", type: "D" },
      { text: "가장 최신 정보만 사용", type: "C" },
      { text: "첫 번째 정보에 집중", type: "B" },
    ],
  },
  {
    id: 7,
    question: "두 제품의 성능을 비교할 때 가장 먼저 해야 할 것은?",
    options: [
      { text: "비교 기준과 측정 방법 정의", type: "A" },
      { text: "직접 사용해봄", type: "B" },
      { text: "리뷰 확인", type: "C" },
      { text: "가격 비교", type: "D" },
    ],
  },
  {
    id: 8,
    question: "복잡한 문제를 분석할 때 당신의 접근 방식은?",
    options: [
      { text: "문제를 작은 부분으로 분해 후 각각 분석", type: "A" },
      { text: "직감으로 핵심 파악", type: "B" },
      { text: "전문가에게 물어봄", type: "C" },
      { text: "비슷한 사례 검색", type: "D" },
    ],
  },
  {
    id: 9,
    question: "뉴스 기사의 신뢰성을 판단할 때 확인하는 것은?",
    options: [
      { text: "출처, 근거, 다른 매체 교차 확인", type: "A" },
      { text: "제목만 봄", type: "D" },
      { text: "공유 수", type: "C" },
      { text: "매체의 유명도", type: "B" },
    ],
  },
  {
    id: 10,
    question: "프로젝트 실패 원인을 분석할 때?",
    options: [
      { text: "근본 원인 분석(5 Whys 등) 적용", type: "A" },
      { text: "담당자 책임만 확인", type: "D" },
      { text: "운이 나빴다고 결론", type: "C" },
      { text: "표면적 원인만 확인", type: "B" },
    ],
  },
  {
    id: 11,
    question: "여러 선택지 중 최선을 고를 때?",
    options: [
      { text: "각 선택지의 장단점을 점수화하여 비교", type: "A" },
      { text: "첫 번째 선택지 선택", type: "D" },
      { text: "직감을 따름", type: "C" },
      { text: "다른 사람 의견에 따름", type: "B" },
    ],
  },
  {
    id: 12,
    question: "데이터 분석 결과를 발표할 때 가장 중요한 것은?",
    options: [
      { text: "결론을 뒷받침하는 근거와 논리 제시", type: "A" },
      { text: "결론만 간단히", type: "D" },
      { text: "화려한 그래프", type: "C" },
      { text: "모든 데이터 나열", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "분석력 천재",
    emoji: "🔬",
    description: "당신은 뛰어난 분석력을 가지고 있습니다! 복잡한 데이터에서 패턴을 발견하고, 정보를 체계적으로 정리하여 통찰을 도출합니다.",
    traits: ["데이터 분석력", "논리적 사고", "비판적 평가", "체계적 접근"],
    strengths: ["데이터 기반 의사결정", "문제 원인 파악", "객관적 평가", "연구/분석 업무"],
    weaknesses: ["과도한 분석으로 결정 지연", "직관 무시 경향"],
    tips: ["분석과 직관의 균형을 찾아보세요", "결론을 빠르게 내리는 연습도 해보세요"],
  },
  B: {
    type: "B",
    title: "분석력 전문가",
    emoji: "📊",
    description: "분석력이 우수합니다. 정보를 잘 정리하고, 의미 있는 결론을 도출할 수 있습니다.",
    traits: ["우수한 분석력", "정보 정리", "논리적 판단", "균형 잡힌 시각"],
    strengths: ["효율적 분석", "핵심 파악", "실용적 결론"],
    weaknesses: ["깊이 있는 분석 필요", "세부사항 놓칠 수 있음"],
    tips: ["더 복잡한 분석에 도전해보세요", "데이터 분석 도구를 배워보세요"],
  },
  C: {
    type: "C",
    title: "분석력 탐구자",
    emoji: "📈",
    description: "기본적인 분석 능력을 갖추고 있습니다. 간단한 분석은 잘 하지만, 복잡한 데이터에서는 더 연습이 필요합니다.",
    traits: ["기본 분석력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["기초 분석", "단계적 접근", "협력적 분석"],
    weaknesses: ["복잡한 분석 어려움", "분석 프레임워크 필요"],
    tips: ["분석 방법론을 공부해보세요", "엑셀이나 데이터 도구를 익혀보세요"],
  },
  D: {
    type: "D",
    title: "분석력 도전자",
    emoji: "🌱",
    description: "분석력은 훈련으로 크게 향상될 수 있습니다! 데이터를 다루는 경험을 쌓아보세요.",
    traits: ["발전 가능성", "직관적", "창의적", "실행 지향"],
    strengths: ["빠른 결정", "실행력", "직관적 판단"],
    weaknesses: ["체계적 분석 연습 필요", "근거 기반 사고 필요"],
    tips: ["간단한 데이터 분석부터 시작해보세요", "분석 사례를 많이 접해보세요"],
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
