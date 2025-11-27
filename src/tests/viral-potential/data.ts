// 바이럴 잠재력 테스트 - 당신의 콘텐츠는 얼마나 퍼질 수 있을까?

export const questions = [
  {
    id: 1,
    question: "일상에서 특이하거나 재미있는 일이 생기면?",
    options: [
      { text: "바로 사진/영상으로 기록한다", scores: { creator: 3, trendy: 1 } },
      { text: "친구들한테 카톡으로 공유한다", scores: { connector: 3, relatable: 1 } },
      { text: "혼자 즐기고 만다", scores: { introvert: 3, authentic: 1 } },
      { text: "SNS에 글로 올린다", scores: { storyteller: 3, authentic: 1 } },
    ],
  },
  {
    id: 2,
    question: "당신의 유머 스타일은?",
    options: [
      { text: "트렌디한 밈과 유행어 활용", scores: { trendy: 3, creator: 1 } },
      { text: "일상 속 공감 가는 이야기", scores: { relatable: 3, connector: 1 } },
      { text: "예상치 못한 반전과 기발함", scores: { creator: 3, storyteller: 1 } },
      { text: "따뜻하고 감동적인 이야기", scores: { authentic: 3, storyteller: 1 } },
    ],
  },
  {
    id: 3,
    question: "콘텐츠를 만든다면 어떤 플랫폼?",
    options: [
      { text: "틱톡/릴스 (숏폼 영상)", scores: { trendy: 3, creator: 1 } },
      { text: "유튜브 (롱폼 영상)", scores: { storyteller: 3, creator: 1 } },
      { text: "인스타그램 (사진/피드)", scores: { creator: 2, authentic: 2 } },
      { text: "트위터/블로그 (글)", scores: { storyteller: 3, relatable: 1 } },
    ],
  },
  {
    id: 4,
    question: "바이럴된 콘텐츠를 보면?",
    options: [
      { text: "나도 비슷하게 만들 수 있을 것 같아", scores: { creator: 3, trendy: 1 } },
      { text: "왜 이게 터졌는지 분석해봄", scores: { storyteller: 3, trendy: 1 } },
      { text: "그냥 재밌게 보고 공유함", scores: { connector: 3, relatable: 1 } },
      { text: "별 관심 없음", scores: { introvert: 3, authentic: 1 } },
    ],
  },
  {
    id: 5,
    question: "사람들이 나에 대해 자주 하는 말은?",
    options: [
      { text: "넌 진짜 재밌어", scores: { creator: 3, relatable: 1 } },
      { text: "넌 표현력이 좋아", scores: { storyteller: 3, creator: 1 } },
      { text: "넌 트렌드에 빠르다", scores: { trendy: 3, connector: 1 } },
      { text: "넌 사람들이랑 잘 통해", scores: { connector: 3, relatable: 1 } },
    ],
  },
  {
    id: 6,
    question: "SNS에서 가장 반응 좋았던 게시물은?",
    options: [
      { text: "웃긴 영상/짤", scores: { creator: 3, trendy: 1 } },
      { text: "공감 가는 일상 이야기", scores: { relatable: 3, authentic: 1 } },
      { text: "감동적인/의미 있는 글", scores: { storyteller: 3, authentic: 1 } },
      { text: "예쁜 사진", scores: { creator: 2, authentic: 2 } },
    ],
  },
  {
    id: 7,
    question: "새로운 트렌드가 생기면?",
    options: [
      { text: "빠르게 따라해본다", scores: { trendy: 3, creator: 1 } },
      { text: "내 스타일로 변형해본다", scores: { creator: 3, storyteller: 1 } },
      { text: "관심 있으면 천천히 시도", scores: { authentic: 3, relatable: 1 } },
      { text: "트렌드는 별로 안 따라함", scores: { introvert: 3, authentic: 1 } },
    ],
  },
  {
    id: 8,
    question: "콘텐츠 아이디어는 어디서 얻어?",
    options: [
      { text: "다른 크리에이터 콘텐츠에서", scores: { trendy: 3, creator: 1 } },
      { text: "일상에서 문득 떠오름", scores: { authentic: 3, relatable: 1 } },
      { text: "사람들과 대화하다가", scores: { connector: 3, relatable: 1 } },
      { text: "깊이 생각하다가", scores: { storyteller: 3, authentic: 1 } },
    ],
  },
  {
    id: 9,
    question: "콘텐츠 제작에 대한 생각은?",
    options: [
      { text: "재밌고 해보고 싶다", scores: { creator: 3, trendy: 1 } },
      { text: "관심은 있지만 어려워 보임", scores: { relatable: 3, connector: 1 } },
      { text: "좋은 이야기가 있으면 해볼 의향", scores: { storyteller: 3, authentic: 1 } },
      { text: "별로 관심 없다", scores: { introvert: 3, authentic: 1 } },
    ],
  },
  {
    id: 10,
    question: "만약 내 콘텐츠가 바이럴되면?",
    options: [
      { text: "드디어! 열심히 더 만들어야지", scores: { creator: 3, trendy: 1 } },
      { text: "신기하고 뿌듯할 것 같아", scores: { relatable: 3, authentic: 1 } },
      { text: "부담스러울 것 같기도...", scores: { introvert: 3, authentic: 1 } },
      { text: "더 의미 있는 걸 만들고 싶어", scores: { storyteller: 3, connector: 1 } },
    ],
  },
];

export interface ViralPotentialResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  viralScore: number;
  description: string;
  contentStyle: string;
  bestPlatform: string;
  viralStrengths: string[];
  contentTips: string[];
  exampleContent: string[];
  famousCreator: string;
  growthAdvice: string;
}

export const results: Record<string, ViralPotentialResult> = {
  creator: {
    type: "creator",
    title: "타고난 크리에이터",
    emoji: "🎬",
    subtitle: "바이럴 잠재력 95%",
    viralScore: 95,
    description: "당신은 콘텐츠 제작에 타고난 재능이 있어요! 아이디어도 넘치고, 그것을 표현하는 능력도 뛰어납니다. 트렌드를 잘 캐치하면서도 자기만의 색깔을 입힐 줄 알아요. 꾸준히 만들면 터질 확률이 높아요!",
    contentStyle: "기획된 재미, 퀄리티 있는 영상/이미지",
    bestPlatform: "틱톡, 유튜브 쇼츠, 인스타 릴스",
    viralStrengths: [
      "창의적인 아이디어 발상력",
      "트렌드 캐치 능력",
      "표현력과 편집 감각",
    ],
    contentTips: [
      "첫 3초 임팩트가 중요해요",
      "트렌드 + 자기 색깔 조합이 핵심",
      "꾸준한 업로드가 알고리즘에 좋아요",
    ],
    exampleContent: [
      "트렌드 챌린지 참여",
      "일상 브이로그",
      "공감 콘텐츠",
    ],
    famousCreator: "MrBeast, Khaby Lame 유형",
    growthAdvice: "재능은 있으니 꾸준함만 더하면 됩니다!",
  },
  trendy: {
    type: "trendy",
    title: "트렌드 서퍼",
    emoji: "🏄",
    subtitle: "바이럴 잠재력 85%",
    viralScore: 85,
    description: "트렌드의 파도를 타는 데 능숙한 당신! 뭐가 뜨는지 빠르게 알아채고, 그 흐름에 올라탈 줄 알아요. 타이밍만 잘 맞추면 터질 확률이 높은 타입이에요.",
    contentStyle: "트렌드 기반, 빠른 반응 콘텐츠",
    bestPlatform: "틱톡, 트위터/X",
    viralStrengths: [
      "트렌드 감지 능력",
      "빠른 실행력",
      "시의적절한 콘텐츠",
    ],
    contentTips: [
      "트렌드 초기에 올라타세요",
      "남들과 다른 변형을 시도해보세요",
      "속도가 생명이에요",
    ],
    exampleContent: [
      "밈 활용 콘텐츠",
      "트렌드 리액션",
      "시사 이슈 관련",
    ],
    famousCreator: "트렌드 챌린지 1등 하는 틱톡커",
    growthAdvice: "트렌드에 당신만의 색깔을 더해보세요!",
  },
  storyteller: {
    type: "storyteller",
    title: "스토리텔러",
    emoji: "📖",
    subtitle: "바이럴 잠재력 80%",
    viralScore: 80,
    description: "이야기를 풀어내는 능력이 뛰어난 당신! 긴 글이나 영상도 사람들이 끝까지 보게 만드는 힘이 있어요. 감동이나 공감을 이끌어내는 스토리로 바이럴될 확률이 높아요.",
    contentStyle: "스토리 중심, 감성/정보성 콘텐츠",
    bestPlatform: "유튜브, 브런치, 인스타그램",
    viralStrengths: [
      "스토리 구성 능력",
      "감정 전달력",
      "깊이 있는 콘텐츠",
    ],
    contentTips: [
      "후킹할 수 있는 도입부가 중요해요",
      "감정선을 잘 설계하세요",
      "마무리가 여운을 남겨야 공유됩니다",
    ],
    exampleContent: [
      "경험담/에피소드",
      "정보성 콘텐츠",
      "감동 스토리",
    ],
    famousCreator: "무도, 유퀴즈 같은 스토리텔링",
    growthAdvice: "좋은 이야기가 있으면 사람들은 알아서 공유해요!",
  },
  relatable: {
    type: "relatable",
    title: "공감 유발자",
    emoji: "🤝",
    subtitle: "바이럴 잠재력 75%",
    viralScore: 75,
    description: "당신의 이야기는 많은 사람들이 '어 나도!' 하고 공감해요. 특별한 기술 없이도 일상의 공감 포인트를 잘 잡아내는 능력이 있어요. 공감 콘텐츠는 공유율이 높아서 바이럴 확률도 높아요.",
    contentStyle: "일상 공감, 솔직한 이야기",
    bestPlatform: "트위터/X, 인스타그램 스토리",
    viralStrengths: [
      "공감 포인트 캐치 능력",
      "솔직한 표현",
      "사람들과 연결되는 힘",
    ],
    contentTips: [
      "'다들 이런 경험 있지 않나요?' 느낌의 콘텐츠",
      "과장하지 않고 솔직하게",
      "댓글로 소통하면 더 퍼져요",
    ],
    exampleContent: [
      "직장인 공감",
      "대학생 공감",
      "연애/일상 공감",
    ],
    famousCreator: "공감트윗 유명인, 일상 유튜버",
    growthAdvice: "당신의 일상이 곧 콘텐츠예요!",
  },
  connector: {
    type: "connector",
    title: "네트워커",
    emoji: "🔗",
    subtitle: "바이럴 잠재력 70%",
    viralScore: 70,
    description: "직접 만드는 것보다 좋은 콘텐츠를 발굴하고 공유하는 데 재능이 있어요! 당신을 통해 많은 콘텐츠가 퍼지고, 사람들은 당신의 추천을 신뢰합니다. 큐레이터형 인플루언서 잠재력!",
    contentStyle: "큐레이션, 공유, 소통",
    bestPlatform: "트위터/X, 카카오톡, 커뮤니티",
    viralStrengths: [
      "좋은 콘텐츠 발굴 능력",
      "공유 욕구",
      "넓은 네트워크",
    ],
    contentTips: [
      "공유할 때 자기 코멘트를 달면 더 좋아요",
      "특정 분야 큐레이션으로 신뢰 쌓기",
      "공유와 함께 소통하면 팬이 생겨요",
    ],
    exampleContent: [
      "추천 리스트",
      "핫한 정보 공유",
      "트렌드 리포트",
    ],
    famousCreator: "뉴스레터 운영자, 인맥왕",
    growthAdvice: "직접 만들어보는 도전도 해보세요!",
  },
  authentic: {
    type: "authentic",
    title: "진정성 뿜뿜",
    emoji: "💎",
    subtitle: "바이럴 잠재력 65%",
    viralScore: 65,
    description: "꾸밈없이 진실된 콘텐츠를 만드는 당신! 바이럴을 노리지 않지만, 그 진정성이 오히려 사람들 마음을 움직일 때가 있어요. 뜨면 진짜 팬이 생기는 타입!",
    contentStyle: "꾸밈없는 솔직한 콘텐츠",
    bestPlatform: "브이로그, 블로그, BeReal",
    viralStrengths: [
      "진정성",
      "신뢰감 주는 분위기",
      "장기적 팬 확보",
    ],
    contentTips: [
      "있는 그대로를 보여주되 스토리를 담아보세요",
      "일관된 자기 색깔이 중요해요",
      "소수지만 강한 팬을 만들 수 있어요",
    ],
    exampleContent: [
      "일상 브이로그",
      "솔직한 후기",
      "성장 기록",
    ],
    famousCreator: "진정성 유튜버, 에세이 작가",
    growthAdvice: "진정성을 유지하면서 표현력을 키워보세요!",
  },
  introvert: {
    type: "introvert",
    title: "숨은 보석",
    emoji: "💫",
    subtitle: "바이럴 잠재력 50%",
    viralScore: 50,
    description: "콘텐츠 제작이나 바이럴에 큰 관심은 없지만, 당신 안에 분명 빛나는 무언가가 있어요! 자기만의 세계가 있고, 그것을 표현하기 시작하면 독특한 매력을 발산할 수 있어요.",
    contentStyle: "자기만의 독특한 세계관",
    bestPlatform: "텀블러, 블로그, 비공개 계정",
    viralStrengths: [
      "독특한 관점",
      "깊이 있는 세계관",
      "따라하기 어려운 오리지널리티",
    ],
    contentTips: [
      "부담 없이 작은 것부터 공유해보세요",
      "당신만의 취미를 콘텐츠로 만들어보세요",
      "바이럴보다 기록의 관점으로 시작하세요",
    ],
    exampleContent: [
      "취미 기록",
      "사진 모음",
      "짧은 글",
    ],
    famousCreator: "언더그라운드 아티스트",
    growthAdvice: "세상에 보여줄 준비가 되면 빛날 거예요!",
  },
};

export function calculateResult(answers: number[]): ViralPotentialResult {
  const scores: Record<string, number> = {
    creator: 0,
    trendy: 0,
    storyteller: 0,
    relatable: 0,
    connector: 0,
    authentic: 0,
    introvert: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([type, score]) => {
        scores[type] = (scores[type] || 0) + score;
      });
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return results[maxType];
}
