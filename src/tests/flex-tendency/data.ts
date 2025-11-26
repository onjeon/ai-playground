// 플렉스 성향 테스트 - 당신의 소비/과시 성향 분석

export const questions = [
  {
    id: 1,
    question: "월급이 들어오면 가장 먼저 하고 싶은 것은?",
    options: [
      { text: "좋은 레스토랑에서 맛있는 거 먹기", flex: "experience" },
      { text: "눈여겨 봤던 명품 득템", flex: "luxury" },
      { text: "저축이나 투자 먼저", flex: "saver" },
      { text: "친구들에게 한턱 쏘기", flex: "social" },
    ],
  },
  {
    id: 2,
    question: "SNS에 올리고 싶은 컨텐츠는?",
    options: [
      { text: "멋진 여행지/레스토랑 사진", flex: "experience" },
      { text: "새로 산 명품/전자기기", flex: "luxury" },
      { text: "SNS 거의 안 함", flex: "saver" },
      { text: "친구들과의 즐거운 순간", flex: "social" },
    ],
  },
  {
    id: 3,
    question: "생일 선물로 받고 싶은 것은?",
    options: [
      { text: "특별한 경험 (여행, 공연 등)", flex: "experience" },
      { text: "명품 지갑/가방/시계", flex: "luxury" },
      { text: "현금이나 상품권", flex: "saver" },
      { text: "친구들이 준비한 파티", flex: "social" },
    ],
  },
  {
    id: 4,
    question: "돈을 쓸 때 가장 큰 만족감을 느끼는 순간은?",
    options: [
      { text: "새로운 경험을 할 때", flex: "experience" },
      { text: "좋은 물건을 소유할 때", flex: "luxury" },
      { text: "잔고가 늘어날 때", flex: "saver" },
      { text: "다른 사람을 기쁘게 할 때", flex: "social" },
    ],
  },
  {
    id: 5,
    question: "플렉스의 정의는?",
    options: [
      { text: "남들이 못 하는 특별한 경험", flex: "experience" },
      { text: "고급스러운 물건 소유", flex: "luxury" },
      { text: "플렉스는 낭비라고 생각함", flex: "saver" },
      { text: "사람들과 함께 즐기는 것", flex: "social" },
    ],
  },
  {
    id: 6,
    question: "로또 1등에 당첨되면?",
    options: [
      { text: "세계일주 떠나기", flex: "experience" },
      { text: "드림카/드림하우스 구매", flex: "luxury" },
      { text: "대부분 저축/투자", flex: "saver" },
      { text: "가족/친구들에게 나눠주기", flex: "social" },
    ],
  },
  {
    id: 7,
    question: "스트레스 받을 때 지름신이 온다면?",
    options: [
      { text: "맛집/카페 가기", flex: "experience" },
      { text: "쇼핑 (옷, 가방, 전자기기)", flex: "luxury" },
      { text: "안 삼, 참는다", flex: "saver" },
      { text: "친구 만나서 술 한잔", flex: "social" },
    ],
  },
  {
    id: 8,
    question: "좋은 물건을 살 때 기준은?",
    options: [
      { text: "유니크하고 특별한 스토리", flex: "experience" },
      { text: "브랜드와 품질", flex: "luxury" },
      { text: "가성비와 실용성", flex: "saver" },
      { text: "친구들 반응/유행", flex: "social" },
    ],
  },
  {
    id: 9,
    question: "가장 부러운 사람은?",
    options: [
      { text: "자유롭게 여행 다니는 사람", flex: "experience" },
      { text: "명품으로 꾸민 사람", flex: "luxury" },
      { text: "경제적으로 자유로운 사람", flex: "saver" },
      { text: "인맥이 넓은 사람", flex: "social" },
    ],
  },
  {
    id: 10,
    question: "데이트할 때 중요하게 생각하는 것은?",
    options: [
      { text: "특별하고 새로운 경험", flex: "experience" },
      { text: "좋은 분위기와 고급스러움", flex: "luxury" },
      { text: "부담 없는 가성비", flex: "saver" },
      { text: "함께하는 사람과의 시간", flex: "social" },
    ],
  },
  {
    id: 11,
    question: "소비할 때 후회하는 경우는?",
    options: [
      { text: "기대만큼 특별하지 않았을 때", flex: "experience" },
      { text: "품질이 생각보다 별로일 때", flex: "luxury" },
      { text: "굳이 필요 없는 것 샀을 때", flex: "saver" },
      { text: "혼자만 즐겼을 때", flex: "social" },
    ],
  },
  {
    id: 12,
    question: "부를 과시하는 것에 대한 생각은?",
    options: [
      { text: "경험의 공유는 괜찮음", flex: "experience" },
      { text: "자연스럽게 드러나는 건 OK", flex: "luxury" },
      { text: "굳이 보여줄 필요 없음", flex: "saver" },
      { text: "함께 즐기면 좋은 것", flex: "social" },
    ],
  },
];

export interface FlexTendencyResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  flexScore: number;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  spendingStyle: string;
  financeTips: string[];
  bestMatch: string;
  worstMatch: string;
  famousPeople: string;
}

const resultTypes: Record<string, FlexTendencyResult> = {
  experience: {
    type: 'experience',
    title: '경험 플렉서',
    emoji: '✈️',
    subtitle: '특별한 경험이 진짜 부자',
    description: '당신은 물건보다 경험에 투자하는 타입! 여행, 맛집, 공연 등 돈으로 살 수 없는 추억을 만드는 데 가치를 둡니다. 인스타에는 멋진 장소와 순간들로 가득하고, "거기 어디야?" 질문을 자주 받는 타입이에요.',
    flexScore: 75,
    characteristics: ['경험 중시', '추억 수집가', '호기심 많음', 'YOLO 성향', '모험적'],
    strengths: ['풍부한 경험', '열린 마음', '적응력', '이야기 보따리'],
    weaknesses: ['물질적 자산 부족', '순간적 소비', '저축 어려움'],
    spendingStyle: '특별한 경험을 위해서는 과감하게 지출하지만, 일상적인 물건에는 인색한 편',
    financeTips: ['경험 예산 별도 설정', '마일리지/포인트 적극 활용', '저축 자동화하기'],
    bestMatch: '소셜 플렉서',
    worstMatch: '저축 마스터',
    famousPeople: '손흥민, 아이유',
  },
  luxury: {
    type: 'luxury',
    title: '럭셔리 플렉서',
    emoji: '💎',
    subtitle: '좋은 것만 아는 감각파',
    description: '당신은 품질과 브랜드에 가치를 두는 럭셔리 플렉서! 비싸도 좋은 것을 선택하고, 소유의 기쁨을 아는 타입입니다. 명품백, 드림카, 최신 가전 등 좋은 물건을 통해 자기 표현을 하고 만족감을 얻어요.',
    flexScore: 85,
    characteristics: ['품질 중시', '브랜드 선호', '완벽주의', '미적 감각', '소유욕'],
    strengths: ['안목 있음', '품질 감별력', '자기 투자', '오래 쓰는 편'],
    weaknesses: ['과소비 위험', '허영심', '유지비용 부담'],
    spendingStyle: '품질 좋은 것을 위해 돈을 아끼지 않고, 싼 건 오히려 낭비라고 생각',
    financeTips: ['구매 전 24시간 대기', '중고 명품 활용', '진짜 원하는 것만 사기'],
    bestMatch: '럭셔리 플렉서',
    worstMatch: '저축 마스터',
    famousPeople: 'G-Dragon, 제니',
  },
  saver: {
    type: 'saver',
    title: '저축 마스터',
    emoji: '🏦',
    subtitle: '진짜 부자는 티 안 내',
    description: '당신은 과시보다 실속을 챙기는 저축 마스터! 돈의 가치를 알고, 불필요한 소비를 자제하며, 미래를 위해 준비하는 타입입니다. 잔고가 늘어나는 게 최고의 플렉스라고 생각해요.',
    flexScore: 25,
    characteristics: ['실용적', '계획적', '검소함', '미래지향적', '자기통제'],
    strengths: ['재정 안정', '노후 대비', '충동구매 없음', '금융 지식'],
    weaknesses: ['경직됨', '즐거움 놓침', '인색해 보일 수 있음'],
    spendingStyle: '필요한 것만 사고, 가성비를 따지며, 쿠폰과 할인을 적극 활용',
    financeTips: ['가끔은 자신에게 보상하기', '경험에도 투자하기', '적당한 소비도 OK'],
    bestMatch: '저축 마스터',
    worstMatch: '럭셔리 플렉서',
    famousPeople: '워런 버핏, 마크 저커버그',
  },
  social: {
    type: 'social',
    title: '소셜 플렉서',
    emoji: '🎉',
    subtitle: '함께여서 더 빛나는',
    description: '당신은 사람들과 함께 즐기는 데 돈을 쓰는 소셜 플렉서! 한턱 내고, 파티 열고, 선물 주는 것에 기쁨을 느끼는 타입입니다. 돈은 결국 관계를 위해 쓰는 거라고 생각해요.',
    flexScore: 70,
    characteristics: ['관계 중심', '넉넉함', '사교적', '배려심', '인맥왕'],
    strengths: ['넓은 인맥', '신뢰 구축', '호감형', '팀플레이'],
    weaknesses: ['과한 지출', '거절 어려움', '자기 소홀'],
    spendingStyle: '다른 사람을 위한 지출에 관대하고, 밥값/술값 자주 냄',
    financeTips: ['자기를 위한 예산 따로 설정', '적당히 거절하는 연습', '1/N도 괜찮음'],
    bestMatch: '경험 플렉서',
    worstMatch: '저축 마스터',
    famousPeople: '유재석, 박나래',
  },
};

export function calculateFlexTendencyResult(answers: number[]): FlexTendencyResult {
  const flexScores: Record<string, number> = {
    experience: 0,
    luxury: 0,
    saver: 0,
    social: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];
    flexScores[option.flex] += 1;
  });

  let maxType = 'saver';
  let maxScore = 0;

  Object.entries(flexScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
