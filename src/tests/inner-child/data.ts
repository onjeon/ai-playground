// 내면아이 테스트 - 당신 안의 어린 나를 만나세요

export const questions = [
  {
    id: 1,
    question: "어릴 때 가장 좋아했던 놀이는?",
    options: [
      { text: "혼자 상상의 세계에 빠져 놀기", innerChild: "dreamer" },
      { text: "친구들과 함께 뛰어놀기", innerChild: "playful" },
      { text: "그림 그리기, 만들기", innerChild: "creative" },
      { text: "책 읽기, 퍼즐 맞추기", innerChild: "curious" },
      { text: "어른들 흉내내기", innerChild: "responsible" },
    ],
  },
  {
    id: 2,
    question: "스트레스 받을 때 무의식적으로 하는 행동은?",
    options: [
      { text: "공상에 빠지거나 멍때리기", innerChild: "dreamer" },
      { text: "누군가와 수다 떨기", innerChild: "playful" },
      { text: "음악 듣거나 낙서하기", innerChild: "creative" },
      { text: "정보 검색하거나 분석하기", innerChild: "curious" },
      { text: "할 일 목록 정리하기", innerChild: "responsible" },
    ],
  },
  {
    id: 3,
    question: "당신이 가장 두려워하는 것은?",
    options: [
      { text: "현실에 갇혀 꿈을 잃는 것", innerChild: "dreamer" },
      { text: "혼자 남겨지는 것", innerChild: "playful" },
      { text: "자유롭게 표현하지 못하는 것", innerChild: "creative" },
      { text: "모르는 채로 있는 것", innerChild: "curious" },
      { text: "실패하거나 실망시키는 것", innerChild: "responsible" },
    ],
  },
  {
    id: 4,
    question: "가장 행복했던 어린 시절 기억은?",
    options: [
      { text: "혼자만의 비밀 장소에서 보낸 시간", innerChild: "dreamer" },
      { text: "친구들과 깔깔대며 웃던 순간", innerChild: "playful" },
      { text: "무언가를 만들어 칭찬받았을 때", innerChild: "creative" },
      { text: "새로운 것을 배웠을 때의 설렘", innerChild: "curious" },
      { text: "어른처럼 인정받았을 때", innerChild: "responsible" },
    ],
  },
  {
    id: 5,
    question: "지금 당장 시간이 생긴다면 하고 싶은 것은?",
    options: [
      { text: "아무 생각 없이 하늘 바라보기", innerChild: "dreamer" },
      { text: "친한 친구와 놀기", innerChild: "playful" },
      { text: "창작 활동하기", innerChild: "creative" },
      { text: "관심 분야 공부하기", innerChild: "curious" },
      { text: "밀린 일 처리하기", innerChild: "responsible" },
    ],
  },
  {
    id: 6,
    question: "어릴 때 어른들에게 자주 들었던 말은?",
    options: [
      { text: "맨날 딴 생각만 해", innerChild: "dreamer" },
      { text: "너는 왜 이렇게 시끄러워", innerChild: "playful" },
      { text: "또 뭘 만들고 있니", innerChild: "creative" },
      { text: "질문이 왜 이렇게 많아", innerChild: "curious" },
      { text: "어른스럽다/의젓하다", innerChild: "responsible" },
    ],
  },
  {
    id: 7,
    question: "갈등 상황에서 당신의 첫 반응은?",
    options: [
      { text: "현실을 피하고 싶음", innerChild: "dreamer" },
      { text: "화해하고 다시 잘 지내고 싶음", innerChild: "playful" },
      { text: "감정을 어떻게든 표현하고 싶음", innerChild: "creative" },
      { text: "왜 이렇게 됐는지 이해하고 싶음", innerChild: "curious" },
      { text: "빨리 해결하고 싶음", innerChild: "responsible" },
    ],
  },
  {
    id: 8,
    question: "당신의 장점이라고 생각하는 것은?",
    options: [
      { text: "풍부한 상상력과 감수성", innerChild: "dreamer" },
      { text: "유머감각과 긍정적 에너지", innerChild: "playful" },
      { text: "독특한 시각과 표현력", innerChild: "creative" },
      { text: "분석력과 학습 능력", innerChild: "curious" },
      { text: "책임감과 신뢰성", innerChild: "responsible" },
    ],
  },
  {
    id: 9,
    question: "당신이 가장 필요로 하는 것은?",
    options: [
      { text: "꿈꿀 수 있는 여유", innerChild: "dreamer" },
      { text: "함께할 사람", innerChild: "playful" },
      { text: "자유로운 표현의 공간", innerChild: "creative" },
      { text: "새로운 배움의 기회", innerChild: "curious" },
      { text: "인정과 안정감", innerChild: "responsible" },
    ],
  },
  {
    id: 10,
    question: "피곤할 때 회복하는 방법은?",
    options: [
      { text: "공상하며 쉬기", innerChild: "dreamer" },
      { text: "사람들과 어울리기", innerChild: "playful" },
      { text: "창작 활동으로 전환", innerChild: "creative" },
      { text: "새로운 콘텐츠 탐색", innerChild: "curious" },
      { text: "정리정돈하며 마음 정리", innerChild: "responsible" },
    ],
  },
  {
    id: 11,
    question: "어릴 때 받고 싶었지만 못 받은 것은?",
    options: [
      { text: "내 세계를 이해받는 것", innerChild: "dreamer" },
      { text: "무조건적인 관심과 사랑", innerChild: "playful" },
      { text: "창의성에 대한 인정", innerChild: "creative" },
      { text: "궁금증에 대한 답", innerChild: "curious" },
      { text: "안전하다는 느낌", innerChild: "responsible" },
    ],
  },
  {
    id: 12,
    question: "지금 어린 나에게 해주고 싶은 말은?",
    options: [
      { text: "네 꿈은 충분히 가치 있어", innerChild: "dreamer" },
      { text: "너는 사랑받을 자격이 있어", innerChild: "playful" },
      { text: "네 표현은 틀린 게 아니야", innerChild: "creative" },
      { text: "모르는 게 부끄러운 게 아니야", innerChild: "curious" },
      { text: "완벽하지 않아도 괜찮아", innerChild: "responsible" },
    ],
  },
];

export interface InnerChildResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  woundedAspects: string[];
  healingTips: string[];
  affirmations: string[];
  recommendedActivities: string[];
  innerNeed: string;
}

const resultTypes: Record<string, InnerChildResult> = {
  dreamer: {
    type: 'dreamer',
    title: '몽상가 아이',
    emoji: '🌙',
    subtitle: '상상의 세계에서 빛나는 아이',
    description: '당신의 내면에는 풍부한 상상력과 깊은 감수성을 가진 몽상가 아이가 살고 있어요. 현실보다 더 아름다운 세계를 꿈꾸고, 그 안에서 자유롭게 노닐던 아이입니다. 하지만 "현실적이지 못하다"는 말에 상처받아 꿈꾸는 것을 두려워하게 되었을 수 있어요.',
    characteristics: ['풍부한 상상력', '깊은 감수성', '직관력', '예술적 영혼', '내향적 성향'],
    strengths: ['창의적 비전', '깊은 공감 능력', '섬세한 관찰력', '영감을 주는 능력'],
    woundedAspects: ['현실 도피 경향', '실행력 부족', '자기 세계에 갇힘', '인정받지 못한 느낌'],
    healingTips: ['꿈 일기 쓰기', '창작 활동하기', '명상과 시각화', '안전한 공간에서 상상 펼치기'],
    affirmations: ['내 상상력은 소중한 재능이야', '꿈꾸는 것은 힘이야', '내 세계는 가치 있어'],
    recommendedActivities: ['글쓰기', '그림 그리기', '명상', '판타지 영화/책 감상'],
    innerNeed: '내 꿈과 상상의 세계를 인정받고 싶어요',
  },
  playful: {
    type: 'playful',
    title: '장난꾸러기 아이',
    emoji: '🎈',
    subtitle: '함께할 때 빛나는 아이',
    description: '당신의 내면에는 밝고 활기찬 장난꾸러기 아이가 살고 있어요. 사람들과 어울리며 웃고 떠드는 것을 좋아하고, 주변에 기쁨을 전파하는 아이입니다. 하지만 "조용히 해" "왜 이렇게 유난이야"라는 말에 자신의 밝은 에너지를 숨기게 되었을 수 있어요.',
    characteristics: ['활발함', '사교성', '긍정적 에너지', '유머 감각', '외향적 성향'],
    strengths: ['분위기 메이커', '관계 형성 능력', '회복탄력성', '열정'],
    woundedAspects: ['혼자 있는 것에 대한 두려움', '인정욕구', '깊은 관계의 어려움', '감정 회피'],
    healingTips: ['혼자 있는 시간 연습', '깊은 대화 시도', '진정한 감정 표현', '자기 자신과 놀기'],
    affirmations: ['나는 혼자여도 충분해', '진짜 내 모습도 사랑받을 수 있어', '즐거움은 내 안에 있어'],
    recommendedActivities: ['그룹 활동', '춤/운동', '파티 기획', '코미디 감상'],
    innerNeed: '있는 그대로의 나로 사랑받고 싶어요',
  },
  creative: {
    type: 'creative',
    title: '예술가 아이',
    emoji: '🎨',
    subtitle: '자유롭게 표현하고 싶은 아이',
    description: '당신의 내면에는 독특한 시각과 표현 욕구를 가진 예술가 아이가 살고 있어요. 세상을 자기만의 방식으로 보고 표현하고 싶어하는 아이입니다. 하지만 "그게 뭐야" "이상해"라는 말에 자신의 표현을 숨기게 되었을 수 있어요.',
    characteristics: ['독창성', '표현력', '감각적', '비순응적', '자유로운 영혼'],
    strengths: ['독특한 관점', '예술적 재능', '감정 표현', '혁신성'],
    woundedAspects: ['이해받지 못한 느낌', '자기 검열', '완벽주의', '인정에 대한 갈망'],
    healingTips: ['결과 없이 창작하기', '자기만의 작품 만들기', '표현 연습', '창작 커뮤니티 참여'],
    affirmations: ['내 표현은 가치 있어', '완벽하지 않아도 아름다워', '내 시각은 유일해'],
    recommendedActivities: ['미술/공예', '악기 연주', '글쓰기', '인테리어/패션'],
    innerNeed: '내 표현을 자유롭게 하고 인정받고 싶어요',
  },
  curious: {
    type: 'curious',
    title: '탐험가 아이',
    emoji: '🔍',
    subtitle: '세상이 궁금한 아이',
    description: '당신의 내면에는 호기심 가득한 탐험가 아이가 살고 있어요. 왜? 어떻게? 라는 질문으로 세상을 탐구하고 싶어하는 아이입니다. 하지만 "질문 좀 그만해" "그냥 시키는 대로 해"라는 말에 궁금해하는 것을 두려워하게 되었을 수 있어요.',
    characteristics: ['호기심', '분석적', '학구적', '탐구적', '논리적'],
    strengths: ['학습 능력', '분석력', '문제 해결력', '지식 탐구'],
    woundedAspects: ['모르는 것에 대한 불안', '과도한 분석', '감정 회피', '완벽주의'],
    healingTips: ['모르는 것 인정하기', '호기심 따라가기', '새로운 분야 탐구', '질문하기 연습'],
    affirmations: ['모르는 건 부끄러운 게 아니야', '궁금해하는 건 지혜의 시작이야', '배움은 즐거워'],
    recommendedActivities: ['독서', '다큐멘터리 시청', '새로운 취미 배우기', '박물관/전시회'],
    innerNeed: '마음껏 궁금해하고 탐구하고 싶어요',
  },
  responsible: {
    type: 'responsible',
    title: '어른스러운 아이',
    emoji: '🎒',
    subtitle: '일찍 철든 아이',
    description: '당신의 내면에는 일찍 어른이 되어야 했던 아이가 살고 있어요. 책임감 있고 의젓하다는 말을 들었지만, 사실은 어린 나이에 너무 많은 짐을 지고 있었던 아이입니다. "네가 어른이 돼야지"라는 말에 어린 시절을 빨리 포기해야 했을 수 있어요.',
    characteristics: ['책임감', '신뢰성', '성숙함', '보호 본능', '자기 통제'],
    strengths: ['리더십', '신뢰성', '문제 해결', '자기 관리'],
    woundedAspects: ['완벽주의', '쉬지 못함', '도움 요청 어려움', '내면의 어린이 억압'],
    healingTips: ['의미 없이 놀기', '실수해도 괜찮다고 말하기', '도움 요청 연습', '내면의 아이와 대화'],
    affirmations: ['완벽하지 않아도 사랑받을 수 있어', '쉬어도 괜찮아', '나도 도움받을 자격이 있어'],
    recommendedActivities: ['어린 시절 좋아했던 것 하기', '놀이공원 가기', '만화/동화 보기', '무계획 여행'],
    innerNeed: '어린이로서 보호받고 편하게 쉬고 싶어요',
  },
};

export function calculateInnerChildResult(answers: number[]): InnerChildResult {
  const innerChildScores: Record<string, number> = {
    dreamer: 0,
    playful: 0,
    creative: 0,
    curious: 0,
    responsible: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];
    innerChildScores[option.innerChild] += 1;
  });

  let maxType = 'dreamer';
  let maxScore = 0;

  Object.entries(innerChildScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
