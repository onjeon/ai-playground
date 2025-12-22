// 언어 능력 IQ 테스트

export const questions = [
  {
    id: 1,
    question: "'사면초가'와 가장 비슷한 의미의 표현은?",
    options: [
      { text: "진퇴양난", type: "A" },
      { text: "일석이조", type: "C" },
      { text: "백발백중", type: "D" },
      { text: "동문서답", type: "B" },
    ],
  },
  {
    id: 2,
    question: "다음 중 단어의 관계가 다른 하나는?",
    options: [
      { text: "사과 : 과일", type: "C" },
      { text: "장미 : 꽃", type: "D" },
      { text: "자동차 : 바퀴", type: "A" },
      { text: "강아지 : 동물", type: "B" },
    ],
  },
  {
    id: 3,
    question: "'청출어람'의 의미로 가장 적절한 것은?",
    options: [
      { text: "제자가 스승보다 뛰어남", type: "A" },
      { text: "파란색이 아름다움", type: "D" },
      { text: "푸른 하늘을 바라봄", type: "C" },
      { text: "물이 맑음", type: "B" },
    ],
  },
  {
    id: 4,
    question: "다음 빈칸에 들어갈 적절한 단어는? '열심히 공부한 ____, 좋은 성적을 받았다.'",
    options: [
      { text: "덕분에", type: "A" },
      { text: "때문에", type: "B" },
      { text: "탓에", type: "C" },
      { text: "바람에", type: "D" },
    ],
  },
  {
    id: 5,
    question: "'빛'과 '소리'의 관계와 같은 것은?",
    options: [
      { text: "시각 : 청각", type: "A" },
      { text: "손 : 발", type: "C" },
      { text: "책 : 연필", type: "D" },
      { text: "강 : 산", type: "B" },
    ],
  },
  {
    id: 6,
    question: "다음 중 맞춤법이 올바른 것은?",
    options: [
      { text: "웬만하면", type: "A" },
      { text: "왠만하면", type: "C" },
      { text: "웬만해면", type: "D" },
      { text: "왠만해면", type: "B" },
    ],
  },
  {
    id: 7,
    question: "'오비이락'의 뜻은?",
    options: [
      { text: "까마귀 날자 배 떨어진다", type: "A" },
      { text: "다섯 마리 비둘기", type: "D" },
      { text: "이것이 즐거움이다", type: "C" },
      { text: "오래된 친구", type: "B" },
    ],
  },
  {
    id: 8,
    question: "다음 문장에서 밑줄 친 부분과 바꿔 쓸 수 있는 것은? '그는 __매우__ 똑똒하다.'",
    options: [
      { text: "아주", type: "A" },
      { text: "거의", type: "C" },
      { text: "조금", type: "D" },
      { text: "별로", type: "B" },
    ],
  },
  {
    id: 9,
    question: "'역지사지'가 의미하는 것은?",
    options: [
      { text: "상대방의 입장에서 생각함", type: "A" },
      { text: "역사를 기록함", type: "D" },
      { text: "땅을 바꾸어 심음", type: "C" },
      { text: "자리를 바꿈", type: "B" },
    ],
  },
  {
    id: 10,
    question: "다음 중 의미가 서로 반대인 것은?",
    options: [
      { text: "증가 - 감소", type: "A" },
      { text: "시작 - 개시", type: "C" },
      { text: "행복 - 기쁨", type: "D" },
      { text: "원인 - 이유", type: "B" },
    ],
  },
  {
    id: 11,
    question: "'금상첨화'와 반대되는 의미의 표현은?",
    options: [
      { text: "설상가상", type: "A" },
      { text: "일석이조", type: "C" },
      { text: "백문불여일견", type: "D" },
      { text: "동병상련", type: "B" },
    ],
  },
  {
    id: 12,
    question: "다음 중 '인내'의 유의어는?",
    options: [
      { text: "끈기", type: "A" },
      { text: "분노", type: "D" },
      { text: "포기", type: "C" },
      { text: "성급함", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "언어 능력 천재",
    emoji: "📚",
    description: "당신은 뛰어난 언어 능력을 가지고 있습니다! 어휘력, 문맥 파악, 표현력 모두 우수하며, 언어를 통한 소통에 탁월합니다.",
    traits: ["풍부한 어휘력", "문맥 이해력", "표현력", "독해력"],
    strengths: ["글쓰기 능력", "토론/발표 능력", "외국어 학습", "의사소통"],
    weaknesses: ["때때로 말이 너무 길어짐", "단순한 표현 어려움"],
    tips: ["작문이나 저술 활동에 도전해보세요", "다양한 장르의 책을 읽어보세요"],
  },
  B: {
    type: "B",
    title: "언어 능력 전문가",
    emoji: "✨",
    description: "언어 능력이 우수합니다. 대부분의 언어 문제를 잘 해결하며, 의사소통에도 능숙합니다.",
    traits: ["우수한 어휘력", "이해력", "표현 능력", "소통 능력"],
    strengths: ["효과적인 의사소통", "글쓰기", "독서 이해"],
    weaknesses: ["고급 어휘 확장 필요", "표현의 다양성 개선"],
    tips: ["더 다양한 책을 읽어보세요", "글쓰기 연습을 해보세요"],
  },
  C: {
    type: "C",
    title: "언어 능력 탐구자",
    emoji: "📖",
    description: "기본적인 언어 능력을 갖추고 있습니다. 일상적인 소통에는 문제가 없지만, 고급 표현에서는 더 연습이 필요합니다.",
    traits: ["기본 언어력", "학습 의지", "발전 가능성", "꾸준함"],
    strengths: ["일상 대화", "기초 독해", "단계적 발전"],
    weaknesses: ["어휘 확장 필요", "고급 표현 연습 필요"],
    tips: ["매일 새로운 단어를 배워보세요", "신문이나 책을 꾸준히 읽으세요"],
  },
  D: {
    type: "D",
    title: "언어 능력 도전자",
    emoji: "🌱",
    description: "언어 능력은 연습으로 크게 향상될 수 있습니다! 독서와 글쓰기를 통해 발전시켜 보세요.",
    traits: ["발전 가능성", "다른 강점 보유", "노력형", "창의적"],
    strengths: ["비언어적 소통", "시각적 이해", "실용적 접근"],
    weaknesses: ["어휘력 개선 필요", "독서량 증가 필요"],
    tips: ["쉬운 책부터 시작해보세요", "일기 쓰기를 해보세요"],
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
