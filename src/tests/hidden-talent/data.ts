// 숨겨진 재능 테스트 - 나도 몰랐던 잠재력 발견

export const questions = [
  {
    id: 1,
    question: "어렸을 때 가장 좋아했던 놀이는?",
    options: [
      { text: "레고나 블록 쌓기", talent: "engineering" },
      { text: "그림 그리기, 만들기", talent: "art" },
      { text: "역할놀이, 인형놀이", talent: "performance" },
      { text: "퍼즐이나 보드게임", talent: "logic" },
      { text: "글쓰기, 일기 쓰기", talent: "writing" },
    ],
  },
  {
    id: 2,
    question: "시간 가는 줄 모르고 빠져드는 일은?",
    options: [
      { text: "무언가 만들거나 조립할 때", talent: "engineering" },
      { text: "음악 듣거나 영상 볼 때", talent: "art" },
      { text: "사람들과 대화할 때", talent: "communication" },
      { text: "문제를 분석하고 해결할 때", talent: "logic" },
      { text: "새로운 아이디어를 떠올릴 때", talent: "creativity" },
    ],
  },
  {
    id: 3,
    question: "친구들이 당신에게 자주 하는 부탁은?",
    options: [
      { text: "물건 고치거나 조립해달라고", talent: "engineering" },
      { text: "사진 찍어달라거나 디자인해달라고", talent: "art" },
      { text: "고민 상담이나 조언해달라고", talent: "communication" },
      { text: "결정하기 어려운 것 분석해달라고", talent: "logic" },
      { text: "재미있는 아이디어 내달라고", talent: "creativity" },
    ],
  },
  {
    id: 4,
    question: "유튜브에서 주로 보는 콘텐츠는?",
    options: [
      { text: "DIY, 리뷰, 테크 채널", talent: "engineering" },
      { text: "브이로그, 예술, 디자인", talent: "art" },
      { text: "토크쇼, 인터뷰, 강연", talent: "performance" },
      { text: "다큐멘터리, 교육 콘텐츠", talent: "logic" },
      { text: "음악, 영화 리뷰, 문화 콘텐츠", talent: "writing" },
    ],
  },
  {
    id: 5,
    question: "스트레스 받을 때 주로 하는 행동은?",
    options: [
      { text: "정리정돈하거나 청소함", talent: "engineering" },
      { text: "그림 그리거나 음악 들음", talent: "art" },
      { text: "친구와 수다를 떪", talent: "communication" },
      { text: "혼자 생각을 정리함", talent: "logic" },
      { text: "글을 쓰거나 일기를 씀", talent: "writing" },
    ],
  },
  {
    id: 6,
    question: "새로운 것을 배울 때 선호하는 방식은?",
    options: [
      { text: "직접 해보면서 배움", talent: "engineering" },
      { text: "시각적인 자료로 배움", talent: "art" },
      { text: "누군가에게 설명 들으면서", talent: "communication" },
      { text: "책이나 문서로 체계적으로", talent: "logic" },
      { text: "나만의 방식으로 응용하며", talent: "creativity" },
    ],
  },
  {
    id: 7,
    question: "팀 프로젝트에서 맡게 되는 역할은?",
    options: [
      { text: "실무 실행 및 제작", talent: "engineering" },
      { text: "디자인, 시각화 담당", talent: "art" },
      { text: "발표 및 커뮤니케이션", talent: "performance" },
      { text: "기획 및 전략 수립", talent: "logic" },
      { text: "아이디어 발굴 및 기획", talent: "creativity" },
    ],
  },
  {
    id: 8,
    question: "가장 뿌듯했던 순간은 언제인가요?",
    options: [
      { text: "무언가 직접 만들어 완성했을 때", talent: "engineering" },
      { text: "내 작품이 인정받았을 때", talent: "art" },
      { text: "다른 사람을 도와줬을 때", talent: "communication" },
      { text: "어려운 문제를 해결했을 때", talent: "logic" },
      { text: "새로운 것을 창조해냈을 때", talent: "creativity" },
    ],
  },
  {
    id: 9,
    question: "어떤 환경에서 일할 때 집중이 잘 되나요?",
    options: [
      { text: "정돈된 공간에서 도구와 함께", talent: "engineering" },
      { text: "영감을 주는 분위기에서", talent: "art" },
      { text: "사람들과 함께 있을 때", talent: "communication" },
      { text: "조용하고 방해받지 않을 때", talent: "logic" },
      { text: "자유로운 분위기에서", talent: "creativity" },
    ],
  },
  {
    id: 10,
    question: "다음 중 가장 관심 가는 직업은?",
    options: [
      { text: "엔지니어, 개발자", talent: "engineering" },
      { text: "디자이너, 아티스트", talent: "art" },
      { text: "상담사, 강사, 유튜버", talent: "performance" },
      { text: "데이터 분석가, 연구원", talent: "logic" },
      { text: "작가, 기획자, PD", talent: "writing" },
    ],
  },
  {
    id: 11,
    question: "평소 메모나 기록을 어떻게 하나요?",
    options: [
      { text: "체계적인 목록과 체크리스트", talent: "engineering" },
      { text: "스케치나 그림으로", talent: "art" },
      { text: "음성메모나 통화 녹음", talent: "communication" },
      { text: "논리적인 구조로 정리", talent: "logic" },
      { text: "자유로운 생각의 흐름대로", talent: "writing" },
    ],
  },
  {
    id: 12,
    question: "갑자기 아이디어가 떠오르면?",
    options: [
      { text: "바로 실행 계획을 세움", talent: "engineering" },
      { text: "스케치하거나 비주얼화함", talent: "art" },
      { text: "누군가에게 바로 말함", talent: "communication" },
      { text: "논리적으로 검토해봄", talent: "logic" },
      { text: "더 발전시켜 상상해봄", talent: "creativity" },
    ],
  },
  {
    id: 13,
    question: "여행을 계획할 때 당신의 스타일은?",
    options: [
      { text: "동선과 시간표를 꼼꼼히", talent: "engineering" },
      { text: "인스타 감성 장소 위주로", talent: "art" },
      { text: "현지인 추천이나 친구 의견 참고", talent: "communication" },
      { text: "가성비와 효율성 분석", talent: "logic" },
      { text: "즉흥적으로 떠나는 여행", talent: "creativity" },
    ],
  },
  {
    id: 14,
    question: "가장 자신 있는 능력은?",
    options: [
      { text: "손재주, 실행력", talent: "engineering" },
      { text: "미적 감각, 감성", talent: "art" },
      { text: "말하기, 설득력", talent: "performance" },
      { text: "분석력, 논리력", talent: "logic" },
      { text: "상상력, 독창성", talent: "creativity" },
    ],
  },
  {
    id: 15,
    question: "당신이 만들고 싶은 것은?",
    options: [
      { text: "유용한 앱이나 제품", talent: "engineering" },
      { text: "아름다운 예술 작품", talent: "art" },
      { text: "사람들에게 영향을 주는 콘텐츠", talent: "performance" },
      { text: "세상을 이해하는 이론이나 시스템", talent: "logic" },
      { text: "새로운 이야기나 세계관", talent: "writing" },
    ],
  },
];

export interface HiddenTalentResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  talentArea: string;
  characteristics: string[];
  strengths: string[];
  hiddenPotential: string[];
  recommendedCareers: string[];
  developmentTips: string[];
  famousPeople: string;
  motivationalQuote: string;
  compatibility: string[];
  incompatibility: string[];
}

const resultTypes: Record<string, HiddenTalentResult> = {
  engineering: {
    type: 'engineering',
    title: '공학의 마법사',
    emoji: '🔧',
    subtitle: '만들고 조립하는 것이 천직인 당신',
    description: '당신에게는 무언가를 직접 만들고 구현하는 숨겨진 재능이 있습니다! 복잡한 것을 단순하게, 불가능해 보이는 것을 가능하게 만드는 능력이 있어요. 손으로 만지고 조립하고 개선하는 과정에서 진정한 만족감을 느끼는 타입입니다.',
    talentArea: '제작 & 구현',
    characteristics: ['실행력', '문제 해결', '손재주', '체계적 사고', '꼼꼼함'],
    strengths: ['아이디어를 현실로 만드는 능력', '기계/도구에 대한 직관적 이해', '효율적인 프로세스 설계', '디테일에 강함'],
    hiddenPotential: ['하드웨어/소프트웨어 개발', '프로덕트 디자인', '3D 프린팅/메이커 활동', '로봇공학', '건축/인테리어'],
    recommendedCareers: ['소프트웨어 엔지니어', '제품 디자이너', '건축가', '기계공학자', '메이커/발명가', '로봇 엔지니어'],
    developmentTips: ['아두이노/라즈베리파이로 작은 프로젝트 시작해보세요', '온라인 메이커 커뮤니티에 참여해보세요', '코딩 기초를 배워보세요', 'DIY 취미를 발전시켜보세요'],
    famousPeople: '일론 머스크, 스티브 워즈니악, 다이슨 창업자 제임스 다이슨',
    motivationalQuote: '"최고의 방법은 직접 만들어 보는 것이다"',
    compatibility: ['논리적 사고형', '창의력 천재'],
    incompatibility: ['커뮤니케이션 달인'],
  },
  art: {
    type: 'art',
    title: '예술의 영혼',
    emoji: '🎨',
    subtitle: '아름다움을 창조하는 타고난 예술가',
    description: '당신 안에는 아름다움을 보고 창조하는 놀라운 재능이 숨어 있습니다! 시각적인 것에 민감하고, 색감과 구도를 직관적으로 이해하는 능력이 있어요. 일상에서도 무의식적으로 심미적인 것을 추구하는 당신은 타고난 예술가입니다.',
    talentArea: '시각 예술 & 디자인',
    characteristics: ['심미안', '감성적', '섬세함', '직관력', '표현력'],
    strengths: ['뛰어난 색감과 구도 감각', '시각적 스토리텔링', '감정을 형태로 표현', '트렌드 감지 능력'],
    hiddenPotential: ['일러스트레이션', 'UI/UX 디자인', '사진/영상', '패션 스타일링', '공간 디자인'],
    recommendedCareers: ['그래픽 디자이너', 'UI/UX 디자이너', '사진작가', '영상 크리에이터', '패션 디자이너', '인테리어 디자이너'],
    developmentTips: ['매일 스케치 습관을 들여보세요', '다양한 예술 작품을 감상하세요', '디자인 툴(피그마, 포토샵)을 배워보세요', '자신만의 포트폴리오를 만들어보세요'],
    famousPeople: '피카소, 앤디 워홀, 조니 아이브',
    motivationalQuote: '"예술은 우리 일상의 먼지를 영혼에서 씻어낸다"',
    compatibility: ['글쓰기 재능', '창의력 천재'],
    incompatibility: ['논리적 사고형'],
  },
  communication: {
    type: 'communication',
    title: '커뮤니케이션 달인',
    emoji: '🗣️',
    subtitle: '마음을 연결하는 대화의 천재',
    description: '당신에게는 사람들의 마음을 읽고 연결하는 특별한 재능이 있습니다! 대화를 통해 상대방을 이해하고, 공감하고, 영향을 주는 능력이 뛰어나요. 복잡한 것을 쉽게 설명하고, 갈등을 중재하는 능력도 탁월합니다.',
    talentArea: '대인관계 & 소통',
    characteristics: ['공감 능력', '경청', '언어 감각', '사교성', '설득력'],
    strengths: ['빠른 래포 형성', '갈등 중재 능력', '복잡한 것을 쉽게 설명', '동기부여 능력'],
    hiddenPotential: ['상담/코칭', '협상/세일즈', '강연/교육', '콘텐츠 크리에이팅', 'HR/조직관리'],
    recommendedCareers: ['상담사', '코치', 'HR 매니저', '세일즈 전문가', '교육자', '커뮤니티 매니저'],
    developmentTips: ['적극적 경청 기술을 연습하세요', '비폭력 대화법을 공부하세요', '다양한 사람들과 대화 경험을 쌓으세요', '스토리텔링 기술을 개발하세요'],
    famousPeople: '오프라 윈프리, 유재석',
    motivationalQuote: '"진정한 대화는 상대방의 영혼을 만지는 것이다"',
    compatibility: ['무대의 스타', '글쓰기 재능'],
    incompatibility: ['공학의 마법사'],
  },
  logic: {
    type: 'logic',
    title: '논리적 사고형',
    emoji: '🧠',
    subtitle: '패턴을 읽는 분석의 달인',
    description: '당신에게는 복잡한 정보를 분석하고 패턴을 발견하는 놀라운 재능이 있습니다! 데이터 속에서 의미를 찾아내고, 논리적으로 문제를 해결하는 능력이 뛰어나요. 감정보다 이성으로 판단하며, 객관적인 시각을 유지하는 힘이 있습니다.',
    talentArea: '분석 & 전략',
    characteristics: ['분석력', '비판적 사고', '객관성', '체계성', '집중력'],
    strengths: ['복잡한 데이터에서 인사이트 도출', '논리적 의사결정', '전략적 기획 능력', '시스템적 사고'],
    hiddenPotential: ['데이터 분석', '연구/학술', '투자/재무', '전략 컨설팅', '프로그래밍'],
    recommendedCareers: ['데이터 사이언티스트', '연구원', '전략 컨설턴트', '퀀트', '프로그래머', '변호사'],
    developmentTips: ['통계와 데이터 분석을 배워보세요', '체스나 논리 퍼즐로 사고력을 키우세요', '다양한 관점에서 생각하는 훈련을 하세요', '글로 논리를 정리하는 습관을 들이세요'],
    famousPeople: '셜록 홈즈, 워런 버핏, 엘론 머스크',
    motivationalQuote: '"데이터는 새로운 석유다"',
    compatibility: ['공학의 마법사', '글쓰기 재능'],
    incompatibility: ['예술의 영혼'],
  },
  creativity: {
    type: 'creativity',
    title: '창의력 천재',
    emoji: '💡',
    subtitle: '상상을 현실로 바꾸는 아이디어뱅크',
    description: '당신에게는 남들이 보지 못하는 것을 보고, 새로운 것을 상상하는 놀라운 재능이 있습니다! 기존의 틀을 깨고 새로운 가능성을 탐구하는 것을 즐기며, 독창적인 아이디어로 세상을 놀라게 할 잠재력이 있어요.',
    talentArea: '혁신 & 아이디어',
    characteristics: ['독창성', '호기심', '유연함', '모험심', '통합적 사고'],
    strengths: ['새로운 연결고리 발견', '고정관념 탈피', '다양한 관점에서의 접근', '빠른 아이디어 생성'],
    hiddenPotential: ['스타트업 창업', '크리에이티브 디렉팅', '신제품 기획', '브랜딩', '콘텐츠 기획'],
    recommendedCareers: ['창업가', '크리에이티브 디렉터', '광고 기획자', '브랜드 매니저', 'PD', '게임 기획자'],
    developmentTips: ['브레인스토밍 습관을 들이세요', '다양한 분야를 탐구하세요', '실패를 두려워하지 마세요', '"만약에"라는 질문을 자주 해보세요'],
    famousPeople: '스티브 잡스, 제프 베조스, 월트 디즈니',
    motivationalQuote: '"상상력은 지식보다 중요하다"',
    compatibility: ['예술의 영혼', '공학의 마법사'],
    incompatibility: ['논리적 사고형'],
  },
  writing: {
    type: 'writing',
    title: '글쓰기 재능',
    emoji: '✍️',
    subtitle: '언어로 세상을 그리는 스토리텔러',
    description: '당신에게는 말과 글로 세상을 표현하는 특별한 재능이 있습니다! 생각과 감정을 언어로 담아내는 능력이 뛰어나고, 읽는 사람의 마음을 움직이는 힘이 있어요. 복잡한 개념도 명확하게 전달할 수 있는 능력자입니다.',
    talentArea: '글쓰기 & 스토리텔링',
    characteristics: ['언어 감각', '관찰력', '감수성', '표현력', '상상력'],
    strengths: ['명확한 메시지 전달', '감정을 담은 글쓰기', '스토리 구성 능력', '다양한 문체 구사'],
    hiddenPotential: ['소설/에세이 집필', '콘텐츠 마케팅', '카피라이팅', '시나리오 작성', '저널리즘'],
    recommendedCareers: ['작가', '콘텐츠 마케터', '카피라이터', '시나리오 작가', '기자', '에디터'],
    developmentTips: ['매일 글쓰기 습관을 들이세요', '다양한 장르의 책을 읽으세요', '블로그나 뉴스레터를 시작해보세요', '글쓰기 커뮤니티에 참여하세요'],
    famousPeople: '무라카미 하루키, J.K. 롤링, 스티븐 킹',
    motivationalQuote: '"글쓰기는 영혼의 출혈이다"',
    compatibility: ['커뮤니케이션 달인', '논리적 사고형'],
    incompatibility: ['공학의 마법사'],
  },
  performance: {
    type: 'performance',
    title: '무대의 스타',
    emoji: '🎭',
    subtitle: '사람들 앞에서 빛나는 타고난 퍼포머',
    description: '당신에게는 사람들 앞에서 빛을 발하는 특별한 재능이 있습니다! 관중 앞에서 긴장하기보다 오히려 에너지를 얻고, 메시지를 임팩트 있게 전달하는 능력이 뛰어나요. 무대 위에서 진정한 자신을 발휘하는 타입입니다.',
    talentArea: '퍼포먼스 & 프레젠테이션',
    characteristics: ['카리스마', '표현력', '순발력', '자신감', '매력'],
    strengths: ['강력한 프레젠테이션', '청중 장악력', '즉흥적 대응 능력', '기억에 남는 인상'],
    hiddenPotential: ['유튜브/스트리밍', '강연/MC', '연기/모델링', '라이브 커머스', '이벤트 기획'],
    recommendedCareers: ['유튜버', '강연자', 'MC/아나운서', '배우', '쇼호스트', '세일즈 리더'],
    developmentTips: ['작은 무대부터 경험을 쌓으세요', '스피치 클래스를 들어보세요', '영상 촬영에 익숙해지세요', '자신만의 캐릭터를 개발하세요'],
    famousPeople: '오프라 윈프리, 유재석, 백종원',
    motivationalQuote: '"무대는 당신이 진짜 자신이 될 수 있는 곳이다"',
    compatibility: ['커뮤니케이션 달인', '창의력 천재'],
    incompatibility: ['논리적 사고형'],
  },
};

export function calculateHiddenTalentResult(answers: number[]): HiddenTalentResult {
  // 재능 유형별 점수 계산
  const talentScores: Record<string, number> = {
    engineering: 0,
    art: 0,
    communication: 0,
    logic: 0,
    creativity: 0,
    writing: 0,
    performance: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];
    talentScores[option.talent] += 1;
  });

  // 가장 높은 점수의 재능 찾기
  let maxTalent = 'creativity';
  let maxScore = 0;

  Object.entries(talentScores).forEach(([talent, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxTalent = talent;
    }
  });

  return resultTypes[maxTalent];
}
