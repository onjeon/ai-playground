// 회식 유형 테스트 - 회식에서 당신은 어떤 캐릭터?

export interface CompanyDinnerQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface CompanyDinnerResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  dinnerStyle: string[];
  survivalTips: string[];
  idealRole: string;
  warning: string;
}

export const companyDinnerTypes = ['mood-maker', 'listener', 'escape-artist', 'networker', 'caretaker', 'ghost'] as const;
export type CompanyDinnerType = typeof companyDinnerTypes[number];

export const questions: CompanyDinnerQuestion[] = [
  {
    id: 1,
    question: "회식 공지가 뜨면 가장 먼저 드는 생각은?",
    options: [
      { text: "오 재밌겠다! 뭐 먹지?", scores: { 'mood-maker': 3 } },
      { text: "누가 가는지 먼저 확인", scores: { networker: 2, listener: 1 } },
      { text: "핑계 댈 게 있나... 고민 시작", scores: { 'escape-artist': 3 } },
      { text: "막내들 챙겨야 하는데", scores: { caretaker: 3 } },
    ],
  },
  {
    id: 2,
    question: "회식 장소에 도착했을 때 당신은?",
    options: [
      { text: "입구에서 큰 소리로 인사하며 등장", scores: { 'mood-maker': 3 } },
      { text: "조용히 빈자리 찾아 앉음", scores: { ghost: 2, listener: 1 } },
      { text: "아는 사람 옆에 자리 잡고 수다", scores: { networker: 3 } },
      { text: "먼저 온 사람들 음료 챙겨줌", scores: { caretaker: 3 } },
    ],
  },
  {
    id: 3,
    question: "분위기가 조금 썰렁해지면?",
    options: [
      { text: "게임이나 재밌는 얘기로 분위기 띄움", scores: { 'mood-maker': 3 } },
      { text: "내 얘기 안 꺼내고 경청 모드", scores: { listener: 3 } },
      { text: "화장실 간다고 잠시 피함", scores: { 'escape-artist': 2, ghost: 1 } },
      { text: "옆 사람한테 말 걸어 소그룹 대화 시작", scores: { networker: 3 } },
    ],
  },
  {
    id: 4,
    question: "회식 자리에서 주로 하는 행동은?",
    options: [
      { text: "술 따르고, 건배사 외치고, 노래 부름", scores: { 'mood-maker': 3 } },
      { text: "다들 얘기할 때 웃으면서 리액션", scores: { listener: 3 } },
      { text: "핸드폰 보면서 적당히 있는 척", scores: { ghost: 3 } },
      { text: "여기저기 돌아다니며 대화 참여", scores: { networker: 3 } },
    ],
  },
  {
    id: 5,
    question: "술을 권하면?",
    options: [
      { text: "좋아요! 같이 마셔요~", scores: { 'mood-maker': 2, networker: 1 } },
      { text: "살짝 거절하면서 분위기 맞춤", scores: { listener: 2, caretaker: 1 } },
      { text: "컨디션 안 좋다고 핑계 대고 피함", scores: { 'escape-artist': 3 } },
      { text: "받아먹고 다른 사람한테 넘김", scores: { caretaker: 2, ghost: 1 } },
    ],
  },
  {
    id: 6,
    question: "회식에서 가장 피하고 싶은 상황은?",
    options: [
      { text: "조용해지는 것 (내가 띄워야 해!)", scores: { 'mood-maker': 3 } },
      { text: "갑자기 나한테 질문 들어오는 것", scores: { ghost: 2, listener: 1 } },
      { text: "2차, 3차 가자는 얘기", scores: { 'escape-artist': 3 } },
      { text: "누가 술 먹고 힘들어하는 것", scores: { caretaker: 3 } },
    ],
  },
  {
    id: 7,
    question: "회식 중 상사가 무리한 부탁을 하면?",
    options: [
      { text: "농담으로 넘기면서 상황 모면", scores: { 'mood-maker': 3 } },
      { text: "일단 네~ 하고 나중에 생각", scores: { listener: 3 } },
      { text: "화장실/전화 핑계로 자리 피함", scores: { 'escape-artist': 3 } },
      { text: "대신 해줄 수 있으면 해주겠다고", scores: { caretaker: 2, networker: 1 } },
    ],
  },
  {
    id: 8,
    question: "회식 막바지, 2차 얘기가 나오면?",
    options: [
      { text: "가야죠! 제가 장소 알아볼게요", scores: { 'mood-maker': 3 } },
      { text: "다들 가면 같이 갈게요~", scores: { listener: 2, networker: 1 } },
      { text: "아 저는 내일 일찍... (탈출 준비)", scores: { 'escape-artist': 3 } },
      { text: "술 많이 마신 사람 먼저 보내드리고", scores: { caretaker: 3 } },
    ],
  },
  {
    id: 9,
    question: "회식에서 나의 역할은?",
    options: [
      { text: "분위기 메이커, 웃음 담당", scores: { 'mood-maker': 3 } },
      { text: "조용한 관찰자, 공감 담당", scores: { listener: 3 } },
      { text: "유령... 있는 듯 없는 듯", scores: { ghost: 3 } },
      { text: "모두를 연결해주는 커넥터", scores: { networker: 3 } },
    ],
  },
  {
    id: 10,
    question: "회식 다음 날 기분은?",
    options: [
      { text: "어제 재밌었다~ 다음에 또!", scores: { 'mood-maker': 3 } },
      { text: "피곤하지만 동료들과 친해진 느낌", scores: { listener: 2, networker: 1 } },
      { text: "드디어 끝났다... 해방감", scores: { 'escape-artist': 3, ghost: 1 } },
      { text: "다들 무사히 귀가했는지 궁금", scores: { caretaker: 3 } },
    ],
  },
  {
    id: 11,
    question: "회식에서 제일 좋아하는 순간은?",
    options: [
      { text: "다 같이 웃고 떠들 때", scores: { 'mood-maker': 3 } },
      { text: "조용히 맛있는 거 먹을 때", scores: { ghost: 2, listener: 1 } },
      { text: "끝나고 집에 갈 때", scores: { 'escape-artist': 3 } },
      { text: "평소 못 본 사람과 대화할 때", scores: { networker: 3 } },
    ],
  },
  {
    id: 12,
    question: "회식에서 나의 좌우명은?",
    options: [
      { text: "일할 땐 일, 놀 땐 확실히!", scores: { 'mood-maker': 3 } },
      { text: "티 안 내고 조용히 즐기기", scores: { listener: 2, ghost: 1 } },
      { text: "빨리 끝내고 빨리 집에", scores: { 'escape-artist': 3 } },
      { text: "다 함께 즐거워야 진짜 회식", scores: { caretaker: 2, networker: 1 } },
    ],
  },
];

export const results: Record<CompanyDinnerType, CompanyDinnerResult> = {
  'mood-maker': {
    type: 'mood-maker',
    title: '분위기 메이커',
    emoji: '🎤',
    description: '회식의 꽃! 당신이 없으면 회식이 안 돌아갑니다. 건배사부터 게임 진행까지, 분위기 띄우기는 당신의 특기죠. 모두가 당신의 에너지에 힘을 얻어요.',
    characteristics: [
      '자연스러운 분위기 주도',
      '높은 에너지와 열정',
      '유머 감각 보유',
      '사교적인 성격',
    ],
    strengths: [
      '어색한 분위기를 단번에 풀어줌',
      '동료들에게 좋은 기억을 선사',
      '팀 결속력 향상에 기여',
      '직장 내 인기인',
    ],
    weaknesses: [
      '체력 소모가 큼',
      '기대치가 높아져 부담될 수 있음',
      '조용히 있고 싶어도 불려감',
      '과음 위험',
    ],
    dinnerStyle: [
      '첫 건배사는 항상 내가',
      '게임 진행도 내 몫',
      '노래방 가면 마이크 놓지 않음',
      '모두가 웃을 때까지 멈추지 않음',
    ],
    survivalTips: [
      '가끔은 에너지 충전 시간이 필요해요',
      '음주 조절은 필수! 체력 관리하세요',
      '모든 회식을 책임지려 하지 않아도 돼요',
      '조용히 쉬고 싶을 땐 솔직하게 말해도 괜찮아요',
    ],
    idealRole: '회식 총괄 기획자, MC',
    warning: '너무 무리하면 번아웃 올 수 있어요. 적당히 쉬어가세요!',
  },
  listener: {
    type: 'listener',
    title: '공감형 청취자',
    emoji: '👂',
    description: '회식에서 가장 편안한 대화 상대! 당신은 남의 얘기를 진심으로 들어주고, 적절한 리액션으로 모두를 기분 좋게 만들어요. 숨은 인싸입니다.',
    characteristics: [
      '뛰어난 경청 능력',
      '적절한 리액션',
      '편안한 분위기 조성',
      '공감 능력 우수',
    ],
    strengths: [
      '동료들이 마음을 열어 대화함',
      '갈등 중재 역할 가능',
      '신뢰받는 동료',
      '조용하지만 존재감 있음',
    ],
    weaknesses: [
      '자기 얘기를 잘 안 함',
      '남의 얘기 들으며 지칠 수 있음',
      '존재감이 묻힐 때도 있음',
      '술 자리에서 타겟이 될 수 있음',
    ],
    dinnerStyle: [
      '옆 사람과 깊은 대화',
      '고개 끄덕이며 공감 표시',
      '조용히 분위기 즐기기',
      '필요할 때 한 마디씩',
    ],
    survivalTips: [
      '가끔은 자기 얘기도 해보세요',
      '들어주는 것도 에너지가 드는 일이에요',
      '무리한 상담 요청은 거절해도 돼요',
      '당신의 이야기도 충분히 가치있어요',
    ],
    idealRole: '고민 상담사, 분위기 조율자',
    warning: '감정 노동이 쌓일 수 있어요. 자기 감정 케어도 중요해요!',
  },
  'escape-artist': {
    type: 'escape-artist',
    title: '탈출 전문가',
    emoji: '🏃',
    description: '회식은 의무, 탈출은 예술! 각종 핑계와 눈치로 최적의 탈출 타이밍을 찾아내는 당신. "내일 일찍 일어나야 해서..."가 입에 붙었죠.',
    characteristics: [
      '탈출 타이밍 감각 우수',
      '다양한 핑계 보유',
      '혼자만의 시간 중시',
      '에너지 절약형',
    ],
    strengths: [
      '자기 시간 관리 능력',
      '체력/건강 관리 우수',
      '불필요한 음주 자제',
      '워라밸 지킴이',
    ],
    weaknesses: [
      '동료들과 친해질 기회 감소',
      '조직 생활에서 눈에 안 띌 수 있음',
      '회피로 오해받을 수 있음',
      '가끔 눈치 보느라 피곤',
    ],
    dinnerStyle: [
      '출구 가까운 자리 선호',
      '시계 자주 확인',
      '핑계 시나리오 미리 준비',
      '1차에서 마무리 목표',
    ],
    survivalTips: [
      '가끔은 끝까지 있어보는 것도 좋아요',
      '적당한 참여로 이미지 관리하세요',
      '무리한 술자리는 진짜 거절해도 돼요',
      '탈출 후 죄책감 느끼지 마세요!',
    ],
    idealRole: '회식 종료 알리미, 택시 대기자',
    warning: '너무 자주 빠지면 아웃사이더 될 수 있어요. 밸런스가 중요!',
  },
  networker: {
    type: 'networker',
    title: '인맥왕 네트워커',
    emoji: '🤝',
    description: '회식은 비즈니스 확장의 기회! 여기저기 돌아다니며 다양한 사람들과 관계를 쌓는 당신. 이름과 얼굴 기억력이 남다릅니다.',
    characteristics: [
      '뛰어난 사교성',
      '이름/얼굴 기억력 우수',
      '화제 전환 능력',
      '폭넓은 인맥 관리',
    ],
    strengths: [
      '다양한 부서와 연결 가능',
      '정보 수집 능력 우수',
      '협업 시 시너지',
      '직장 내 핵심 연결고리',
    ],
    weaknesses: [
      '깊은 관계보다 넓은 관계',
      '피상적으로 보일 수 있음',
      '정치적으로 오해받을 수 있음',
      '에너지 소모 큼',
    ],
    dinnerStyle: [
      '여러 테이블 돌아다니기',
      '명함 교환 or 카톡 추가',
      '키맨 옆자리 확보',
      '대화 주제 다양하게 준비',
    ],
    survivalTips: [
      '질보다 양이 아니에요. 깊은 관계도 중요해요',
      '정치적으로 보이지 않게 주의하세요',
      '진정성 있는 관심이 오래가요',
      '모든 사람과 친해질 필요는 없어요',
    ],
    idealRole: '부서 간 연결고리, 정보통',
    warning: '너무 계산적으로 보이면 역효과! 진정성이 핵심이에요.',
  },
  caretaker: {
    type: 'caretaker',
    title: '케어 담당 엄친아',
    emoji: '💝',
    description: '회식의 숨은 영웅! 술 취한 동료 챙기고, 물 떠다 주고, 택시 잡아주고... 당신이 없으면 회식이 무사히 끝나지 않아요.',
    characteristics: [
      '배려심 가득',
      '상황 파악 능력',
      '책임감 강함',
      '희생 정신',
    ],
    strengths: [
      '동료들의 신뢰와 감사',
      '리더십 인정받음',
      '위기 대처 능력',
      '팀 케미 형성에 기여',
    ],
    weaknesses: [
      '본인 즐기는 시간 부족',
      '에너지 소모 큼',
      '당연하게 여겨질 수 있음',
      '거절 못하는 성격',
    ],
    dinnerStyle: [
      '물/안주 챙기기',
      '취한 동료 보살피기',
      '택시 잡아주기',
      '다음 날 안부 확인',
    ],
    survivalTips: [
      '본인도 즐기는 시간을 가지세요',
      '다른 사람도 챙기게 역할 분담하세요',
      '가끔은 도움 요청해도 괜찮아요',
      '당신도 챙김 받을 자격이 있어요!',
    ],
    idealRole: '회식 안전 책임자, 막내 케어러',
    warning: '항상 챙기다 보면 번아웃! 가끔은 내가 챙김 받으세요.',
  },
  ghost: {
    type: 'ghost',
    title: '투명인간 고스트',
    emoji: '👻',
    description: '회식에 왔는데 안 온 것 같은 존재감! 조용히 밥 먹고, 조용히 술 마시고, 조용히 사라지는... 하지만 평화로운 당신만의 회식법이에요.',
    characteristics: [
      '낮은 존재감',
      '조용한 성격',
      '관찰자 타입',
      '혼자를 즐김',
    ],
    strengths: [
      '스트레스 최소화',
      '체력 소모 적음',
      '불필요한 술자리 피함',
      '자기만의 페이스 유지',
    ],
    weaknesses: [
      '동료들과 친밀감 부족',
      '소외감 느낄 수 있음',
      '참여 안 한다고 오해받을 수 있음',
      '승진/평가에 불리할 수도',
    ],
    dinnerStyle: [
      '구석 자리 선호',
      '핸드폰이 친구',
      '최소한의 대화',
      '조용히 음식만 집중',
    ],
    survivalTips: [
      '가끔은 먼저 말 걸어보세요',
      '한두 명이라도 친한 동료 만들어보세요',
      '존재감을 드러내야 할 때도 있어요',
      '회식도 업무의 일부일 수 있어요',
    ],
    idealRole: '조용한 참관인, 뒷정리 도우미',
    warning: '너무 숨으면 팀에서 소외될 수 있어요. 적당한 노출이 필요해요!',
  },
};

export function calculateResult(answers: number[]): CompanyDinnerResult {
  const scores: Record<CompanyDinnerType, number> = {
    'mood-maker': 0,
    listener: 0,
    'escape-artist': 0,
    networker: 0,
    caretaker: 0,
    ghost: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as CompanyDinnerType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: CompanyDinnerType = 'listener';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as CompanyDinnerType;
    }
  });

  return results[resultType];
}
