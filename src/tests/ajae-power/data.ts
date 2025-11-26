// 아재력 테스트 - 당신의 아재/아줌마력은?

export interface AjaePowerQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface AjaePowerResult {
  type: string;
  title: string;
  emoji: string;
  level: number;
  description: string;
  characteristics: string[];
  symptoms: string[];
  famousLines: string[];
  musicTaste: string[];
  fashionStyle: string;
  weekendActivity: string;
  tips: string[];
  mentalAge: string;
}

export const questions: AjaePowerQuestion[] = [
  {
    id: 1,
    question: "요즘 유행하는 밈이나 신조어를 보면?",
    options: [
      { text: "바로 이해하고 쓸 수 있음", score: 0 },
      { text: "검색하면 알 수 있음", score: 1 },
      { text: "뭔 소린지 모르겠음", score: 2 },
      { text: "요즘 애들은 왜 저래...", score: 3 },
    ],
  },
  {
    id: 2,
    question: "카톡 프사는?",
    options: [
      { text: "셀카 or 감각적인 사진", score: 0 },
      { text: "풍경/음식 사진", score: 1 },
      { text: "가족/반려동물 사진", score: 2 },
      { text: "기본 프사 or 명언 이미지", score: 3 },
    ],
  },
  {
    id: 3,
    question: "아재개그를 들으면?",
    options: [
      { text: "진짜 노잼...", score: 0 },
      { text: "가끔 웃김 인정", score: 1 },
      { text: "나도 하나 알려줄까?", score: 2 },
      { text: "내가 더 잘해 ㅋㅋ", score: 3 },
    ],
  },
  {
    id: 4,
    question: "노래방 가면 부르는 노래는?",
    options: [
      { text: "최신 가요/팝송", score: 0 },
      { text: "2010년대 히트곡", score: 1 },
      { text: "2000년대 가요", score: 2 },
      { text: "90년대 이전 노래", score: 3 },
    ],
  },
  {
    id: 5,
    question: "젊은 사람들 패션을 보면?",
    options: [
      { text: "나도 저렇게 입고 싶다", score: 0 },
      { text: "트렌드구나 하고 이해함", score: 1 },
      { text: "춥지/덥지 않나...?", score: 2 },
      { text: "왜 저렇게 입고 다녀", score: 3 },
    ],
  },
  {
    id: 6,
    question: "새로운 앱/서비스가 나오면?",
    options: [
      { text: "바로 다운받아서 써봄", score: 0 },
      { text: "리뷰 보고 괜찮으면 써봄", score: 1 },
      { text: "누가 추천하면 깔아봄", score: 2 },
      { text: "지금 쓰는 것도 충분해", score: 3 },
    ],
  },
  {
    id: 7,
    question: "문자/카톡 할 때?",
    options: [
      { text: "이모지/이모티콘 적절히 사용", score: 0 },
      { text: "ㅋㅋㅋ 많이 씀", score: 1 },
      { text: "^^, ㅎㅎ 자주 씀", score: 2 },
      { text: "온점... 많이 씀...", score: 3 },
    ],
  },
  {
    id: 8,
    question: "회식이나 모임에서?",
    options: [
      { text: "분위기 따라 자연스럽게", score: 0 },
      { text: "적당히 어울림", score: 1 },
      { text: "건배사나 덕담 준비", score: 2 },
      { text: "옛날 얘기하면서 훈화", score: 3 },
    ],
  },
  {
    id: 9,
    question: "요즘 뭐 보고 있어? 라고 물으면?",
    options: [
      { text: "넷플릭스/유튜브 최신 콘텐츠", score: 0 },
      { text: "화제의 드라마/예능", score: 1 },
      { text: "뉴스/시사 프로그램", score: 2 },
      { text: "TV조선/채널A 드라마", score: 3 },
    ],
  },
  {
    id: 10,
    question: "주말 아침에 하는 일은?",
    options: [
      { text: "늦잠 or 브런치", score: 0 },
      { text: "밀린 집안일", score: 1 },
      { text: "등산/조깅", score: 2 },
      { text: "새벽에 일어나서 뉴스 보기", score: 3 },
    ],
  },
  {
    id: 11,
    question: "'요즘 것들'이라는 말을?",
    options: [
      { text: "절대 안 함, 그런 말 싫음", score: 0 },
      { text: "가끔 농담으로", score: 1 },
      { text: "은근히 쓰게 됨", score: 2 },
      { text: "자주 씀 (진심으로)", score: 3 },
    ],
  },
  {
    id: 12,
    question: "건강에 대한 관심은?",
    options: [
      { text: "아직 젊어서 크게 신경 안 씀", score: 0 },
      { text: "운동 좀 해야겠다 생각", score: 1 },
      { text: "영양제 챙겨 먹음", score: 2 },
      { text: "건강검진 결과가 제일 중요", score: 3 },
    ],
  },
];

export const results: Record<string, AjaePowerResult> = {
  'young': {
    type: 'young',
    title: '영포티 청년',
    emoji: '🧒',
    level: 15,
    description: '아재력 거의 제로! MZ 감성 그 자체입니다. 트렌드에 민감하고 젊은 문화를 자연스럽게 즐기는 타입이에요.',
    characteristics: ['트렌드 민감', 'SNS 능숙', '젊은 감성', '새로운 것 환영'],
    symptoms: ['신조어 바로 이해', '최신 밈 공유', '젊은 친구들과 소통 원활'],
    famousLines: ['"ㄹㅇㅋㅋ"', '"레게노"', '"킹받네"'],
    musicTaste: ['최신 K-POP', '팝송', '힙합/R&B'],
    fashionStyle: '트렌디한 캐주얼, 스트릿 패션',
    weekendActivity: '핫플 탐방, 넷플릭스, 친구들과 놀기',
    tips: ['이대로 유지하세요!', '하지만 어른의 지혜도 배워보세요', '세대 소통 능력 기르기'],
    mentalAge: '20대 초반',
  },
  'mild': {
    type: 'mild',
    title: '아재 입문자',
    emoji: '🙂',
    level: 40,
    description: '약간의 아재력이 감지됩니다! 젊은 감성을 유지하려 노력하지만, 가끔 아재 모먼트가 튀어나와요.',
    characteristics: ['젊으려 노력', '가끔 아재 모먼트', '적응력 있음', '중간 세대'],
    symptoms: ['가끔 신조어 검색', '아재개그에 웃음', '트렌드 따라가려 노력'],
    famousLines: ['"요즘 뭐가 유행이야?"', '"아 그거 알아 알아"', '"나 때는..."'],
    musicTaste: ['2010년대 가요', '발라드', '가끔 최신곡'],
    fashionStyle: '깔끔한 캐주얼, 무난한 스타일',
    weekendActivity: '카페, 맛집 탐방, 넷플릭스',
    tips: ['젊은 친구들과 더 어울려보세요', '새로운 것에 열린 마음 유지', '아재개그는 적당히!'],
    mentalAge: '30대 초중반',
  },
  'moderate': {
    type: 'moderate',
    title: '정통 아재',
    emoji: '👔',
    level: 65,
    description: '본격적인 아재력 발동! 어느새 아재개그가 입에서 나오고, "요즘 것들"이라는 말이 자연스러워졌어요.',
    characteristics: ['아재개그 시전', '옛날 얘기 많음', '꼰대 성향 시작', '건강 관심↑'],
    symptoms: ['^^, ㅎㅎ 사용', '온점... 많이...', '젊은 문화 이해 어려움'],
    famousLines: ['"나 때는 말이야..."', '"요즘 것들은..."', '"건강이 최고야"'],
    musicTaste: ['2000년대 가요', '트로트 입문', '옛날 노래'],
    fashionStyle: '편한 옷 위주, 기능성 중시',
    weekendActivity: '등산, 골프, 뉴스 시청',
    tips: ['젊은 세대 이해하려 노력해보세요', '아재개그 줄이기 도전', '새로운 콘텐츠 시청해보기'],
    mentalAge: '40대',
  },
  'advanced': {
    type: 'advanced',
    title: '프로 꼰대',
    emoji: '👴',
    level: 85,
    description: '아재력 만렙에 근접! 완전한 아재/아줌마 모드입니다. 젊은 문화는 외계어처럼 느껴지고, 옛것이 최고예요.',
    characteristics: ['완전한 아재 모드', '꼰대력 상승', '옛날이 좋았어', '변화 거부'],
    symptoms: ['신조어 해독 불가', '젊은 패션 이해 안 됨', '훈화/잔소리 자동 발사'],
    famousLines: ['"이게 다 스마트폰 때문이야"', '"요즘 애들은 버릇이 없어"', '"우리 때는 안 그랬는데"'],
    musicTaste: ['90년대 이전 가요', '트로트', '클래식'],
    fashionStyle: '편한 게 최고, 등산복 데일리',
    weekendActivity: '새벽 등산, TV 뉴스, 낮잠',
    tips: ['열린 마음 가져보세요', '젊은 세대도 배울 점 있어요', '변화를 두려워 마세요'],
    mentalAge: '50대 이상',
  },
  'ultimate': {
    type: 'ultimate',
    title: '레전드 어르신',
    emoji: '🧓',
    level: 100,
    description: '아재력 그 자체! 이미 젊은 문화와는 완전히 다른 세계에 살고 계십니다. 하지만 그것도 하나의 매력이에요!',
    characteristics: ['완벽한 아재', '자기 세계 확고', '변화 없음', '전통 중시'],
    symptoms: ['스마트폰도 어려움', '모든 것이 옛날이 좋았음', '젊은이 이해 포기'],
    famousLines: ['"세상이 너무 빨리 변해"', '"옛날에는 다 좋았어"', '"나는 이대로가 좋아"'],
    musicTaste: ['트로트', '국민가요', '옛날 노래만'],
    fashionStyle: '편한 옷, 변함없는 스타일 고수',
    weekendActivity: '새벽 산책, 뉴스, 손자/손녀 만나기',
    tips: ['괜찮아요, 당신만의 매력이 있어요', '가끔은 새로운 것도 시도해보세요', '젊은 세대와 대화해보기'],
    mentalAge: '인생의 지혜가 가득한 나이',
  },
};

export function calculateResult(answers: number[]): AjaePowerResult {
  let totalScore = 0;
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  // 최대 점수: 36 (12문항 * 3점)
  const percentage = (totalScore / 36) * 100;

  if (percentage <= 20) {
    return results['young'];
  } else if (percentage <= 40) {
    return results['mild'];
  } else if (percentage <= 60) {
    return results['moderate'];
  } else if (percentage <= 80) {
    return results['advanced'];
  } else {
    return results['ultimate'];
  }
}
