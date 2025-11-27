// SNS 페르소나 테스트 - 온라인에서 나는 어떤 사람?

export const questions = [
  {
    id: 1,
    question: "SNS에 게시물을 올릴 때 나는?",
    options: [
      { text: "거의 안 올린다, 보는 게 더 좋아", scores: { lurker: 3, observer: 1 } },
      { text: "사진/영상 위주로 올린다", scores: { influencer: 3, aesthetic: 1 } },
      { text: "생각이나 의견을 자주 공유한다", scores: { activist: 3, curator: 1 } },
      { text: "일상을 자연스럽게 공유한다", scores: { authentic: 3, connector: 1 } },
    ],
  },
  {
    id: 2,
    question: "프로필 사진은?",
    options: [
      { text: "잘 나온 셀카/인물 사진", scores: { influencer: 3, aesthetic: 1 } },
      { text: "풍경, 사물, 캐릭터 등", scores: { lurker: 2, curator: 2 } },
      { text: "반려동물이나 다른 사람과 함께", scores: { connector: 3, authentic: 1 } },
      { text: "자주 바꾸거나 비워둠", scores: { observer: 3, authentic: 1 } },
    ],
  },
  {
    id: 3,
    question: "댓글/반응은 어떻게 하는 편?",
    options: [
      { text: "좋아요는 자주, 댓글은 가끔", scores: { observer: 3, connector: 1 } },
      { text: "친한 사람 글에만 반응", scores: { connector: 3, authentic: 1 } },
      { text: "적극적으로 댓글 달고 소통", scores: { activist: 2, influencer: 2 } },
      { text: "거의 반응 안 함, 그냥 봄", scores: { lurker: 3, observer: 1 } },
    ],
  },
  {
    id: 4,
    question: "피드에서 가장 많이 보는 콘텐츠는?",
    options: [
      { text: "친구들의 일상", scores: { connector: 3, authentic: 1 } },
      { text: "인플루언서/셀럽 콘텐츠", scores: { influencer: 2, aesthetic: 2 } },
      { text: "뉴스/정보성 콘텐츠", scores: { curator: 3, activist: 1 } },
      { text: "밈/유머 콘텐츠", scores: { observer: 2, lurker: 2 } },
    ],
  },
  {
    id: 5,
    question: "스토리 기능은?",
    options: [
      { text: "자주 올린다", scores: { influencer: 3, authentic: 1 } },
      { text: "특별한 날에만", scores: { aesthetic: 2, connector: 2 } },
      { text: "다른 사람 스토리만 봄", scores: { lurker: 3, observer: 1 } },
      { text: "스토리 기능 잘 안 씀", scores: { observer: 3, curator: 1 } },
    ],
  },
  {
    id: 6,
    question: "SNS를 하는 주된 이유는?",
    options: [
      { text: "친구들과 연결되어 있기 위해", scores: { connector: 3, authentic: 1 } },
      { text: "정보/트렌드를 얻기 위해", scores: { curator: 3, observer: 1 } },
      { text: "나를 표현하고 공유하기 위해", scores: { influencer: 2, aesthetic: 2 } },
      { text: "심심풀이/시간 때우기", scores: { lurker: 3, observer: 1 } },
    ],
  },
  {
    id: 7,
    question: "팔로워/친구 수에 대해?",
    options: [
      { text: "많으면 많을수록 좋다", scores: { influencer: 3, activist: 1 } },
      { text: "아는 사람 위주로 적당히", scores: { connector: 3, authentic: 1 } },
      { text: "숫자는 신경 안 씀", scores: { lurker: 2, observer: 2 } },
      { text: "선별적으로 관리한다", scores: { curator: 3, aesthetic: 1 } },
    ],
  },
  {
    id: 8,
    question: "SNS에서 논쟁이 벌어지면?",
    options: [
      { text: "의견을 적극적으로 표현한다", scores: { activist: 3, influencer: 1 } },
      { text: "조용히 지켜본다", scores: { observer: 3, lurker: 1 } },
      { text: "관심 없음, 스킵", scores: { lurker: 3, aesthetic: 1 } },
      { text: "상황에 따라 다름", scores: { curator: 2, connector: 2 } },
    ],
  },
  {
    id: 9,
    question: "게시물 올릴 때 편집은?",
    options: [
      { text: "필터, 보정 꼼꼼하게", scores: { aesthetic: 3, influencer: 1 } },
      { text: "간단하게만 손봄", scores: { authentic: 3, connector: 1 } },
      { text: "있는 그대로 올림", scores: { authentic: 2, lurker: 2 } },
      { text: "올릴 일이 거의 없음", scores: { lurker: 3, observer: 1 } },
    ],
  },
  {
    id: 10,
    question: "SNS 없이 살 수 있을까?",
    options: [
      { text: "못 살아, 없으면 불안해", scores: { influencer: 3, connector: 1 } },
      { text: "좀 불편하겠지만 가능", scores: { curator: 2, authentic: 2 } },
      { text: "오히려 편할 것 같음", scores: { lurker: 3, observer: 1 } },
      { text: "연락용으로만 필요함", scores: { connector: 3, observer: 1 } },
    ],
  },
];

export interface SNSPersonaResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  onlinePersona: string;
  favoriteFeature: string;
  snsStyle: string;
  strengths: string[];
  weaknesses: string[];
  bestPlatform: string;
  tips: string[];
  compatibility: string[];
}

export const results: Record<string, SNSPersonaResult> = {
  influencer: {
    type: "influencer",
    title: "인플루언서형",
    emoji: "⭐",
    subtitle: "SNS가 나의 무대!",
    description: "SNS에서 활발하게 활동하며 자신을 표현하는 것을 좋아하는 당신! 팔로워들과 소통하고 콘텐츠를 만드는 데 재능이 있어요. 온라인에서의 존재감이 강하고 트렌드에 민감합니다.",
    onlinePersona: "콘텐츠 크리에이터, 트렌드세터",
    favoriteFeature: "피드 게시물, 라이브 방송",
    snsStyle: "정기적으로 콘텐츠 업로드, 팔로워와 적극 소통",
    strengths: [
      "자기표현 능력이 뛰어남",
      "트렌드를 빠르게 캐치",
      "온라인 인맥 형성에 능숙",
    ],
    weaknesses: [
      "좋아요/팔로워 수에 민감할 수 있음",
      "온라인 이미지 관리에 지칠 수 있음",
      "오프라인보다 온라인에 치중할 수 있음",
    ],
    bestPlatform: "인스타그램, 틱톡, 유튜브",
    tips: [
      "가끔은 SNS에서 벗어나 현실에 집중해보세요",
      "진정성 있는 콘텐츠가 오래갑니다",
      "팔로워 수보다 의미 있는 연결에 집중하세요",
    ],
    compatibility: ["연결형", "큐레이터형"],
  },
  lurker: {
    type: "lurker",
    title: "눈팅러형",
    emoji: "👀",
    subtitle: "조용히 보고 있어요",
    description: "SNS에서 직접 활동하기보다 다른 사람들의 콘텐츠를 보는 것을 즐기는 당신! 계정은 있지만 거의 올리지 않고, 그냥 보는 것만으로도 충분히 즐거워요. 온라인에서 자신을 드러내는 것에 큰 관심이 없습니다.",
    onlinePersona: "조용한 관찰자, 숨은 팔로워",
    favoriteFeature: "피드 구경, 검색 탐색",
    snsStyle: "게시물은 거의 안 올리고 보기만 함",
    strengths: [
      "SNS에 중독되지 않음",
      "프라이버시를 잘 지킴",
      "객관적인 관찰력",
    ],
    weaknesses: [
      "온라인으로 친구들과 연결되기 어려움",
      "소통 기회를 놓칠 수 있음",
      "존재감이 없어 보일 수 있음",
    ],
    bestPlatform: "레딧, 커뮤니티 사이트",
    tips: [
      "가끔은 반응을 남겨 존재감을 알려보세요",
      "온라인 소통도 관계 유지에 도움이 됩니다",
      "당신만의 페이스를 유지하되 너무 고립되지 마세요",
    ],
    compatibility: ["관찰자형", "진정성형"],
  },
  observer: {
    type: "observer",
    title: "관찰자형",
    emoji: "🔍",
    subtitle: "보이지 않는 곳에서 다 보고 있어요",
    description: "SNS 트렌드와 사람들의 동향을 예리하게 관찰하는 당신! 직접 참여하기보다 뒤에서 상황을 파악하고 분석하는 것을 좋아해요. 정보는 많이 알지만 드러내지 않는 타입입니다.",
    onlinePersona: "정보 수집가, 분석가",
    favoriteFeature: "검색, 해시태그 탐색",
    snsStyle: "정보 수집 위주, 가끔 의미 있는 반응만",
    strengths: [
      "정보 수집 능력이 뛰어남",
      "트렌드를 빠르게 파악",
      "객관적 시각 유지",
    ],
    weaknesses: [
      "참여도가 낮아 보일 수 있음",
      "소통 기회를 놓칠 수 있음",
      "지나친 관찰이 피로감을 줄 수 있음",
    ],
    bestPlatform: "트위터/X, 뉴스 앱",
    tips: [
      "관찰만 하지 말고 가끔은 참여해보세요",
      "수집한 정보를 공유하면 가치가 커져요",
      "분석 능력을 콘텐츠로 만들어보세요",
    ],
    compatibility: ["큐레이터형", "눈팅러형"],
  },
  connector: {
    type: "connector",
    title: "연결형",
    emoji: "🤝",
    subtitle: "SNS는 사람을 이어주는 도구",
    description: "SNS를 친구들과 연결되어 있기 위한 도구로 사용하는 당신! 과시보다는 소통, 콘텐츠보다는 관계를 중요하게 생각해요. 친구들의 소식에 반응하고 축하하는 걸 좋아합니다.",
    onlinePersona: "따뜻한 친구, 응원단",
    favoriteFeature: "DM, 댓글, 친구 태그",
    snsStyle: "친구들 글에 반응하고 소소하게 일상 공유",
    strengths: [
      "관계 유지에 능숙",
      "온오프라인 균형이 좋음",
      "진정성 있는 소통",
    ],
    weaknesses: [
      "콘텐츠 제작에는 관심 없음",
      "새로운 인맥 확장에 소극적",
      "SNS 외 연락 수단을 선호할 수 있음",
    ],
    bestPlatform: "페이스북, 인스타그램 친한 친구",
    tips: [
      "온라인 소통도 좋지만 오프라인 만남도 중요해요",
      "가끔은 새로운 사람들과도 연결해보세요",
      "당신의 따뜻한 반응이 친구들에게 힘이 됩니다",
    ],
    compatibility: ["진정성형", "인플루언서형"],
  },
  curator: {
    type: "curator",
    title: "큐레이터형",
    emoji: "📚",
    subtitle: "가치 있는 정보를 선별하고 공유해요",
    description: "좋은 콘텐츠나 정보를 발굴하고 공유하는 것을 좋아하는 당신! SNS를 정보의 창고로 활용하고, 팔로워들에게 유익한 것들을 큐레이션해서 전달합니다. 취향과 안목이 있는 타입이에요.",
    onlinePersona: "정보 큐레이터, 취향 리더",
    favoriteFeature: "북마크, 공유, 리트윗",
    snsStyle: "좋은 콘텐츠 발굴 및 공유, 정보성 게시물",
    strengths: [
      "정보 선별 능력이 뛰어남",
      "유용한 콘텐츠 공유",
      "신뢰받는 정보원이 될 수 있음",
    ],
    weaknesses: [
      "자기 콘텐츠는 잘 안 만듦",
      "너무 진지해 보일 수 있음",
      "재미보다 유익함에 치중",
    ],
    bestPlatform: "링크드인, 트위터/X, 브런치",
    tips: [
      "정보 외에 자신의 생각도 함께 공유해보세요",
      "가벼운 콘텐츠도 사람들은 좋아해요",
      "큐레이션 능력을 활용해 자신만의 채널을 만들어보세요",
    ],
    compatibility: ["관찰자형", "행동파형"],
  },
  activist: {
    type: "activist",
    title: "행동파형",
    emoji: "📢",
    subtitle: "목소리를 내고 변화를 만들어요",
    description: "사회 이슈나 관심사에 대해 적극적으로 목소리를 내는 당신! SNS를 통해 의견을 표현하고 공유하며, 때로는 논쟁에도 참여합니다. 신념이 있고 그것을 표현하는 것을 두려워하지 않아요.",
    onlinePersona: "의견 리더, 변화 주도자",
    favoriteFeature: "리트윗, 공유, 해시태그 캠페인",
    snsStyle: "이슈에 대한 의견 표명, 정보 공유",
    strengths: [
      "영향력을 행사할 수 있음",
      "신념을 가지고 행동",
      "사람들의 인식을 바꿀 수 있음",
    ],
    weaknesses: [
      "논쟁에 휘말릴 수 있음",
      "너무 진지해 보일 수 있음",
      "피로감을 느낄 수 있음",
    ],
    bestPlatform: "트위터/X, 페이스북",
    tips: [
      "다른 의견도 경청하는 자세가 중요해요",
      "가끔은 가벼운 콘텐츠로 쉬어가세요",
      "온라인뿐 아니라 오프라인 활동도 중요해요",
    ],
    compatibility: ["큐레이터형", "인플루언서형"],
  },
  aesthetic: {
    type: "aesthetic",
    title: "감성파형",
    emoji: "🎨",
    subtitle: "예쁜 것만 보고 올려요",
    description: "시각적으로 아름다운 것을 추구하는 당신! 피드의 통일성, 사진의 퀄리티에 신경을 쓰고, 예쁜 것들을 큐레이션하는 것을 좋아해요. SNS는 당신의 미적 감각을 표현하는 공간입니다.",
    onlinePersona: "비주얼 큐레이터, 감성 계정",
    favoriteFeature: "필터, 편집 앱, 피드 구성",
    snsStyle: "비주얼 중심, 통일된 피드 구성",
    strengths: [
      "미적 감각이 뛰어남",
      "시각적으로 매력적인 콘텐츠",
      "브랜딩에 능숙",
    ],
    weaknesses: [
      "완벽주의로 게시가 어려울 수 있음",
      "진정성이 떨어져 보일 수 있음",
      "콘텐츠 제작에 시간이 많이 듦",
    ],
    bestPlatform: "인스타그램, 핀터레스트",
    tips: [
      "완벽하지 않아도 올려보세요",
      "비주얼 외에 스토리도 담아보세요",
      "당신의 감각을 살린 크리에이터가 될 수 있어요",
    ],
    compatibility: ["인플루언서형", "진정성형"],
  },
  authentic: {
    type: "authentic",
    title: "진정성형",
    emoji: "💯",
    subtitle: "있는 그대로의 나를 보여줘요",
    description: "꾸밈없이 자연스러운 일상을 공유하는 당신! 필터나 과장 없이 솔직한 모습을 보여주는 것을 선호해요. 진짜 나의 모습을 공유하는 것이 SNS의 의미라고 생각합니다.",
    onlinePersona: "솔직한 친구, 리얼 라이프",
    favoriteFeature: "일상 공유, 스토리",
    snsStyle: "있는 그대로 자연스럽게 공유",
    strengths: [
      "진정성 있는 콘텐츠",
      "팔로워들과 진솔한 관계",
      "편안하고 부담 없음",
    ],
    weaknesses: [
      "콘텐츠가 단조로워 보일 수 있음",
      "프라이버시 경계가 모호할 수 있음",
      "팔로워 확장에 관심 없음",
    ],
    bestPlatform: "인스타그램 스토리, BeReal",
    tips: [
      "진정성을 유지하되 프라이버시도 지키세요",
      "당신의 솔직함이 많은 사람에게 위로가 됩니다",
      "가끔은 특별한 순간도 기록해보세요",
    ],
    compatibility: ["연결형", "눈팅러형"],
  },
};

export function calculateResult(answers: number[]): SNSPersonaResult {
  const scores: Record<string, number> = {
    influencer: 0,
    lurker: 0,
    observer: 0,
    connector: 0,
    curator: 0,
    activist: 0,
    aesthetic: 0,
    authentic: 0,
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
