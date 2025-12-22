// 문제 해결력 테스트

export const questions = [
  {
    id: 1,
    question: "회사에서 중요한 프로젝트 마감일이 내일인데, 팀원 한 명이 갑자기 아팠다면?",
    options: [
      { text: "남은 인원으로 업무 재분배 후 우선순위 조정", type: "A" },
      { text: "상사에게 보고하고 기다림", type: "C" },
      { text: "마감일 연장 요청", type: "B" },
      { text: "혼자서 모든 일을 처리", type: "D" },
    ],
  },
  {
    id: 2,
    question: "처음 가는 곳에서 길을 잃었다면?",
    options: [
      { text: "지도 앱과 주변 정보를 종합해 경로 파악", type: "A" },
      { text: "무작정 걸어가 본다", type: "D" },
      { text: "근처 사람에게 물어본다", type: "B" },
      { text: "아는 곳까지 돌아간다", type: "C" },
    ],
  },
  {
    id: 3,
    question: "컴퓨터가 갑자기 작동을 멈췄다면?",
    options: [
      { text: "증상 분석 후 단계별로 문제 해결 시도", type: "A" },
      { text: "AS 센터에 맡긴다", type: "C" },
      { text: "재부팅만 반복", type: "D" },
      { text: "주변에 도움 요청", type: "B" },
    ],
  },
  {
    id: 4,
    question: "예산이 부족한 상황에서 중요한 행사를 진행해야 한다면?",
    options: [
      { text: "우선순위를 정하고 창의적 대안 모색", type: "A" },
      { text: "행사 취소 고려", type: "D" },
      { text: "스폰서를 찾는다", type: "B" },
      { text: "규모를 대폭 축소", type: "C" },
    ],
  },
  {
    id: 5,
    question: "팀 내에서 의견 충돌이 발생했다면?",
    options: [
      { text: "양측 의견을 듣고 공통점을 찾아 조율", type: "A" },
      { text: "상급자에게 결정을 맡김", type: "C" },
      { text: "다수결로 결정", type: "B" },
      { text: "회의를 연기", type: "D" },
    ],
  },
  {
    id: 6,
    question: "중요한 발표 직전에 발표 자료가 사라졌다면?",
    options: [
      { text: "핵심 내용을 기억해서 자료 없이 발표 진행", type: "A" },
      { text: "발표 취소 요청", type: "D" },
      { text: "동료에게 백업 요청", type: "B" },
      { text: "발표 순서 변경 요청", type: "C" },
    ],
  },
  {
    id: 7,
    question: "새로운 기술을 빠르게 배워야 하는 상황이라면?",
    options: [
      { text: "핵심 개념부터 파악 후 실습으로 익힘", type: "A" },
      { text: "전문가에게 배움", type: "B" },
      { text: "인터넷 검색", type: "C" },
      { text: "책을 처음부터 읽음", type: "D" },
    ],
  },
  {
    id: 8,
    question: "제한된 자원으로 최대의 성과를 내야 한다면?",
    options: [
      { text: "파레토 법칙 적용, 핵심 20%에 집중", type: "A" },
      { text: "추가 자원 요청", type: "C" },
      { text: "모든 것을 조금씩 진행", type: "D" },
      { text: "일부를 포기하고 나머지에 집중", type: "B" },
    ],
  },
  {
    id: 9,
    question: "고객이 불만을 제기했을 때?",
    options: [
      { text: "경청 후 근본 원인 파악, 해결책 제시", type: "A" },
      { text: "사과만 반복", type: "D" },
      { text: "담당자에게 전달", type: "C" },
      { text: "보상 제안", type: "B" },
    ],
  },
  {
    id: 10,
    question: "어려운 결정을 내려야 할 때 당신의 접근법은?",
    options: [
      { text: "장단점 분석 후 데이터 기반으로 결정", type: "A" },
      { text: "직감을 따름", type: "B" },
      { text: "다른 사람 의견 수렴", type: "C" },
      { text: "결정을 미룸", type: "D" },
    ],
  },
  {
    id: 11,
    question: "프로젝트가 예정보다 늦어지고 있다면?",
    options: [
      { text: "병목 구간 파악 후 자원 재배치", type: "A" },
      { text: "더 열심히 일함", type: "D" },
      { text: "일정 재조정 요청", type: "B" },
      { text: "추가 인력 투입", type: "C" },
    ],
  },
  {
    id: 12,
    question: "실패한 프로젝트를 분석할 때?",
    options: [
      { text: "원인 분석 후 개선점 도출, 다음에 적용", type: "A" },
      { text: "다음 프로젝트에 집중", type: "C" },
      { text: "책임자를 찾음", type: "D" },
      { text: "기록만 남기고 넘어감", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "문제 해결 달인",
    emoji: "🏆",
    description: "당신은 뛰어난 문제 해결 능력을 가지고 있습니다! 복잡한 상황에서도 침착하게 핵심을 파악하고 효과적인 해결책을 찾아냅니다.",
    traits: ["분석적 사고", "체계적 접근", "창의적 해결", "실행력"],
    strengths: ["위기 관리", "전략 수립", "의사결정", "리더십"],
    weaknesses: ["완벽주의 성향", "때때로 결정에 시간 소요"],
    tips: ["빠른 결정이 필요한 상황도 연습해보세요", "다양한 문제 상황을 시뮬레이션해보세요"],
  },
  B: {
    type: "B",
    title: "문제 해결 전문가",
    emoji: "⭐",
    description: "문제 해결 능력이 우수합니다. 대부분의 상황에서 적절한 해결책을 찾으며, 유연하게 대처합니다.",
    traits: ["실용적 사고", "협력적 해결", "유연성", "판단력"],
    strengths: ["현실적 해결책", "팀워크", "빠른 적응"],
    weaknesses: ["독창적 해결책 개발 필요", "리스크 평가 강화 필요"],
    tips: ["더 복잡한 문제에 도전해보세요", "문제 해결 프레임워크를 학습해보세요"],
  },
  C: {
    type: "C",
    title: "문제 해결 탐구자",
    emoji: "🔧",
    description: "기본적인 문제 해결 능력을 갖추고 있습니다. 간단한 문제는 잘 해결하지만, 복잡한 상황에서는 더 체계적인 접근이 필요합니다.",
    traits: ["기본 해결력", "협조적", "학습 의지", "발전 가능성"],
    strengths: ["일상 문제 해결", "도움 요청", "단계적 접근"],
    weaknesses: ["복잡한 문제에서 어려움", "독립적 해결 연습 필요"],
    tips: ["문제 해결 단계를 체계화해보세요", "작은 문제부터 스스로 해결해보세요"],
  },
  D: {
    type: "D",
    title: "문제 해결 도전자",
    emoji: "🌱",
    description: "문제 해결 능력은 경험과 연습으로 크게 향상됩니다! 다양한 상황을 경험하며 발전시켜 보세요.",
    traits: ["발전 가능성", "인내심", "노력형", "개방적"],
    strengths: ["새로운 학습", "도움 수용", "끈기"],
    weaknesses: ["체계적 접근 연습 필요", "자신감 향상 필요"],
    tips: ["문제 해결 사례를 공부해보세요", "작은 성공 경험을 쌓아가세요"],
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
