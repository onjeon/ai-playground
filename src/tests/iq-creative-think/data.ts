// 창의적 사고력 테스트

export const questions = [
  {
    id: 1,
    question: "벽돌의 새로운 용도를 생각해보세요. 가장 창의적인 것은?",
    options: [
      { text: "예술 작품의 재료", type: "A" },
      { text: "건물 짓기", type: "D" },
      { text: "문 고정용", type: "C" },
      { text: "무게 추", type: "B" },
    ],
  },
  {
    id: 2,
    question: "빈 종이컵으로 할 수 있는 가장 독특한 활동은?",
    options: [
      { text: "미니어처 정원 만들기", type: "A" },
      { text: "물 마시기", type: "D" },
      { text: "펜 꽂이", type: "C" },
      { text: "종이컵 타워", type: "B" },
    ],
  },
  {
    id: 3,
    question: "사막에서 얼음이 필요하다면 어떻게 구할 수 있을까요?",
    options: [
      { text: "태양열로 작동하는 냉각 장치 고안", type: "A" },
      { text: "얼음을 찾아 이동", type: "C" },
      { text: "물을 가져와서 냉동", type: "D" },
      { text: "밤에 물을 얼린다", type: "B" },
    ],
  },
  {
    id: 4,
    question: "시간 여행이 가능하다면, 가장 하고 싶은 것은?",
    options: [
      { text: "역사적 미스터리 해결", type: "A" },
      { text: "과거의 자신에게 조언", type: "B" },
      { text: "유명인 만나기", type: "C" },
      { text: "복권 번호 확인", type: "D" },
    ],
  },
  {
    id: 5,
    question: "동그라미, 세모, 네모를 조합해서 만들 수 있는 가장 창의적인 것은?",
    options: [
      { text: "움직이는 로봇 캐릭터", type: "A" },
      { text: "얼굴", type: "C" },
      { text: "집", type: "D" },
      { text: "자동차", type: "B" },
    ],
  },
  {
    id: 6,
    question: "비 오는 날을 즐기는 가장 창의적인 방법은?",
    options: [
      { text: "빗방울로 음악 만들기", type: "A" },
      { text: "영화 보기", type: "D" },
      { text: "책 읽기", type: "C" },
      { text: "빗속 산책", type: "B" },
    ],
  },
  {
    id: 7,
    question: "낡은 신발을 재활용하는 가장 독특한 방법은?",
    options: [
      { text: "화분으로 만들어 정원 꾸미기", type: "A" },
      { text: "쓰레기통에 버리기", type: "D" },
      { text: "운동 연습용", type: "C" },
      { text: "문 고정용", type: "B" },
    ],
  },
  {
    id: 8,
    question: "만약 하루 동안 투명인간이 된다면?",
    options: [
      { text: "사람들의 진심을 관찰", type: "A" },
      { text: "집에서 쉬기", type: "D" },
      { text: "공짜로 영화 보기", type: "C" },
      { text: "친구 놀래키기", type: "B" },
    ],
  },
  {
    id: 9,
    question: "음식 쓰레기를 활용하는 창의적인 방법은?",
    options: [
      { text: "바이오 연료 생산 시스템", type: "A" },
      { text: "퇴비 만들기", type: "B" },
      { text: "그냥 버리기", type: "D" },
      { text: "동물 사료", type: "C" },
    ],
  },
  {
    id: 10,
    question: "새로운 스포츠를 만든다면, 어떤 개념이 가장 흥미로울까요?",
    options: [
      { text: "무중력 상태의 3D 축구", type: "A" },
      { text: "기존 스포츠 조합", type: "B" },
      { text: "달리기와 퀴즈 결합", type: "C" },
      { text: "수영하며 농구", type: "D" },
    ],
  },
  {
    id: 11,
    question: "미래의 학교는 어떤 모습일까요?",
    options: [
      { text: "AI와 VR을 활용한 개인 맞춤 학습", type: "A" },
      { text: "온라인 수업", type: "C" },
      { text: "지금과 비슷", type: "D" },
      { text: "자연 속 학교", type: "B" },
    ],
  },
  {
    id: 12,
    question: "버려진 자전거로 할 수 있는 가장 창의적인 것은?",
    options: [
      { text: "키네틱 아트 조각품", type: "A" },
      { text: "수리해서 사용", type: "C" },
      { text: "고철로 판매", type: "D" },
      { text: "화분 거치대", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "창의적 사고 천재",
    emoji: "💡",
    description: "당신은 뛰어난 창의력을 가지고 있습니다! 기존의 틀을 벗어나 혁신적인 아이디어를 생각해내며, 문제를 새로운 시각으로 바라봅니다.",
    traits: ["혁신적 사고", "독창성", "상상력", "유연한 발상"],
    strengths: ["새로운 아이디어", "문제의 새로운 해결책", "예술적 표현", "발명/혁신"],
    weaknesses: ["현실성 검토 필요", "아이디어 실행에 도움 필요"],
    tips: ["아이디어를 실현하는 방법도 연습해보세요", "다양한 분야를 탐구해보세요"],
  },
  B: {
    type: "B",
    title: "창의적 사고 전문가",
    emoji: "✨",
    description: "창의력이 우수합니다. 일반적인 것에서 새로운 가능성을 발견하며, 참신한 아이디어를 제시합니다.",
    traits: ["우수한 창의력", "참신한 발상", "응용력", "연결 사고"],
    strengths: ["아이디어 제안", "기존 것의 개선", "창의적 문제 해결"],
    weaknesses: ["때때로 실용성 부족", "아이디어 정리 필요"],
    tips: ["브레인스토밍을 자주 해보세요", "아이디어를 기록하는 습관을 들이세요"],
  },
  C: {
    type: "C",
    title: "창의적 사고 탐구자",
    emoji: "🔍",
    description: "기본적인 창의력을 갖추고 있습니다. 때때로 새로운 아이디어를 내지만, 더 자유로운 발상이 필요합니다.",
    traits: ["기본 창의력", "학습 의지", "발전 가능성", "안정적"],
    strengths: ["실용적 아이디어", "현실적 접근", "안정적인 발상"],
    weaknesses: ["틀에서 벗어나기 어려움", "자유로운 상상 연습 필요"],
    tips: ["엉뚱한 생각도 해보세요", "예술 활동에 참여해보세요"],
  },
  D: {
    type: "D",
    title: "창의적 사고 도전자",
    emoji: "🌱",
    description: "창의력은 연습으로 크게 발전할 수 있습니다! 다양한 자극과 경험을 통해 상상력을 키워보세요.",
    traits: ["발전 가능성", "현실적", "논리적", "안정 지향"],
    strengths: ["실용적 판단", "논리적 사고", "체계적 접근"],
    weaknesses: ["창의적 발상 연습 필요", "새로운 시도 필요"],
    tips: ["창의력 관련 책을 읽어보세요", "새로운 취미에 도전해보세요"],
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
