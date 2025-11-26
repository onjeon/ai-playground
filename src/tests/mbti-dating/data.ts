// MBTI 연애할 때 테스트 - 연애하면 나는 어떤 유형?

export interface MbtiDatingQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      E?: number; I?: number;
      S?: number; N?: number;
      T?: number; F?: number;
      J?: number; P?: number;
    };
  }[];
}

export interface MbtiDatingResult {
  type: string;
  title: string;
  emoji: string;
  loveStyle: string;
  description: string;
  datingTraits: string[];
  loveStrengths: string[];
  loveChallenges: string[];
  idealDateIdeas: string[];
  communicationStyle: string;
  conflictStyle: string;
  bestMatch: string[];
  growthTip: string;
}

export const questions: MbtiDatingQuestion[] = [
  {
    id: 1,
    question: "연인과의 데이트, 선호하는 스타일은?",
    options: [
      { text: "활기찬 야외 활동이나 새로운 장소", scores: { E: 2 } },
      { text: "조용한 카페나 집에서 둘이서", scores: { I: 2 } },
      { text: "맛집 투어나 영화 감상", scores: { S: 1, I: 1 } },
      { text: "전시회나 특별한 경험", scores: { N: 1, E: 1 } },
    ],
  },
  {
    id: 2,
    question: "연인에게 고민을 털어놓을 때?",
    options: [
      { text: "논리적인 해결책을 원해", scores: { T: 2 } },
      { text: "일단 공감과 위로가 필요해", scores: { F: 2 } },
      { text: "같이 얘기하다 보면 정리돼", scores: { E: 1, F: 1 } },
      { text: "혼자 정리하고 나중에 공유", scores: { I: 1, T: 1 } },
    ],
  },
  {
    id: 3,
    question: "기념일에 대한 생각은?",
    options: [
      { text: "미리 계획해서 완벽하게!", scores: { J: 2 } },
      { text: "그날 분위기 봐서 즉흥으로", scores: { P: 2 } },
      { text: "실용적인 선물이 최고", scores: { S: 1, T: 1 } },
      { text: "의미 있는 특별한 것으로", scores: { N: 1, F: 1 } },
    ],
  },
  {
    id: 4,
    question: "연인과 싸웠을 때 나는?",
    options: [
      { text: "논리적으로 문제점 설명", scores: { T: 2 } },
      { text: "감정 먼저 표현하고 화해", scores: { F: 2 } },
      { text: "시간 두고 혼자 정리 후 대화", scores: { I: 2 } },
      { text: "바로 대화해서 풀어야 해", scores: { E: 2 } },
    ],
  },
  {
    id: 5,
    question: "사랑 표현 방식은?",
    options: [
      { text: "말로 직접 표현 (사랑해!)", scores: { E: 1, F: 1 } },
      { text: "행동과 선물로 표현", scores: { S: 1, T: 1 } },
      { text: "함께하는 시간으로 표현", scores: { I: 1, F: 1 } },
      { text: "미래 계획을 함께 세움", scores: { N: 1, J: 1 } },
    ],
  },
  {
    id: 6,
    question: "연인의 SNS 활동에 대해?",
    options: [
      { text: "커플 사진 올리는 거 좋아!", scores: { E: 2 } },
      { text: "우리만 알면 돼, 굳이 공개 안 해도", scores: { I: 2 } },
      { text: "적당히, 과하지 않게", scores: { S: 1, J: 1 } },
      { text: "상대가 원하면 맞춰줌", scores: { F: 1, P: 1 } },
    ],
  },
  {
    id: 7,
    question: "연인과의 미래 계획은?",
    options: [
      { text: "구체적인 타임라인이 있어", scores: { J: 2, S: 1 } },
      { text: "대략적인 방향만 있어", scores: { P: 1, N: 1 } },
      { text: "지금 행복하면 됐지", scores: { P: 2 } },
      { text: "자주 미래 얘기 나눠", scores: { J: 1, N: 1 } },
    ],
  },
  {
    id: 8,
    question: "연인 친구들과의 만남은?",
    options: [
      { text: "재밌어! 새로운 사람 만나는 거 좋아", scores: { E: 2 } },
      { text: "가끔은 괜찮은데 자주는 부담", scores: { I: 2 } },
      { text: "연인이 원하면 가지", scores: { F: 1, P: 1 } },
      { text: "미리 알려주면 맞출 수 있어", scores: { J: 1, I: 1 } },
    ],
  },
  {
    id: 9,
    question: "연애 초반 썸 탈 때?",
    options: [
      { text: "적극적으로 다가가!", scores: { E: 2 } },
      { text: "천천히 알아가며 확신 후 고백", scores: { I: 2 } },
      { text: "밀당? 그런 거 모름, 솔직하게", scores: { T: 1, E: 1 } },
      { text: "상대 반응 보면서 조절", scores: { F: 1, P: 1 } },
    ],
  },
  {
    id: 10,
    question: "연인에게 서운할 때?",
    options: [
      { text: "바로 말해서 해결", scores: { E: 1, T: 1 } },
      { text: "표정으로 알아채주길 바람", scores: { F: 2 } },
      { text: "혼자 삭히다가 나중에 말함", scores: { I: 2 } },
      { text: "대화로 감정 공유", scores: { E: 1, F: 1 } },
    ],
  },
  {
    id: 11,
    question: "이상적인 연인상은?",
    options: [
      { text: "함께 성장하는 파트너", scores: { N: 2 } },
      { text: "안정적이고 믿을 수 있는 사람", scores: { S: 2 } },
      { text: "대화가 잘 통하는 사람", scores: { E: 1, N: 1 } },
      { text: "나를 깊이 이해해주는 사람", scores: { F: 1, I: 1 } },
    ],
  },
  {
    id: 12,
    question: "연애하면서 가장 중요한 것은?",
    options: [
      { text: "서로에 대한 신뢰", scores: { J: 1, S: 1 } },
      { text: "감정적 교감과 공감", scores: { F: 2 } },
      { text: "함께하는 시간의 질", scores: { I: 1, N: 1 } },
      { text: "솔직한 소통", scores: { T: 1, E: 1 } },
    ],
  },
];

export const results: Record<string, MbtiDatingResult> = {
  ISTJ: {
    type: 'ISTJ',
    title: '든든한 신뢰의 연인',
    emoji: '🏠',
    loveStyle: '안정 추구형',
    description: '한 번 마음 주면 끝까지 책임지는 믿음직한 연인! 말보다 행동으로 사랑을 보여주는 진정한 애인입니다.',
    datingTraits: ['약속 철저히 지킴', '행동으로 사랑 표현', '안정적인 관계 추구', '실용적인 서프라이즈'],
    loveStrengths: ['신뢰감', '책임감', '꾸준함', '현실적 지원'],
    loveChallenges: ['감정 표현 부족', '융통성 부족', '변화 거부'],
    idealDateIdeas: ['맛집 탐방', '영화 감상', '집에서 요리', '안정적인 데이트'],
    communicationStyle: '논리적이고 직접적, 감정보다 사실 위주',
    conflictStyle: '시간을 두고 정리 후 논리적으로 해결',
    bestMatch: ['ESFP', 'ESTP'],
    growthTip: '가끔은 말로 "사랑해"라고 표현해보세요',
  },
  ISFJ: {
    type: 'ISFJ',
    title: '따뜻한 헌신의 연인',
    emoji: '💝',
    loveStyle: '헌신 돌봄형',
    description: '연인을 위해 무엇이든 해주고 싶은 따뜻한 마음의 소유자! 세심하게 챙기고 기억하는 로맨티스트입니다.',
    datingTraits: ['세심한 배려', '기념일 챙김', '연인 우선', '따뜻한 서포트'],
    loveStrengths: ['배려심', '기억력', '헌신', '안정감'],
    loveChallenges: ['자기 희생 과다', '속마음 숨김', '거절 못함'],
    idealDateIdeas: ['기념일 데이트', '맛있는 음식 해주기', '사진 찍기', '추억 만들기'],
    communicationStyle: '부드럽고 배려있게, 상대 기분 먼저 살핌',
    conflictStyle: '상대 입장 먼저 생각, 갈등 회피 경향',
    bestMatch: ['ESTP', 'ESFP'],
    growthTip: '내 감정과 니즈도 솔직하게 표현해보세요',
  },
  INFJ: {
    type: 'INFJ',
    title: '영혼의 소울메이트',
    emoji: '🌙',
    loveStyle: '깊은 교감형',
    description: '피상적인 관계는 NO! 영혼까지 나누는 깊은 사랑을 원하는 이상주의적 연인입니다.',
    datingTraits: ['깊은 대화 선호', '직관적 이해', '의미 있는 관계', '미래 지향적'],
    loveStrengths: ['깊은 이해력', '헌신', '직관력', '이상 추구'],
    loveChallenges: ['이상과 현실 괴리', '상처받기 쉬움', '완벽주의'],
    idealDateIdeas: ['의미 있는 장소', '깊은 대화', '예술 감상', '자연 속 산책'],
    communicationStyle: '깊이 있고 의미 있는 대화 선호',
    conflictStyle: '상처받으면 닫히지만, 진심 어린 대화로 해결',
    bestMatch: ['ENFP', 'ENTP'],
    growthTip: '완벽한 관계는 없어요, 과정을 즐겨보세요',
  },
  INTJ: {
    type: 'INTJ',
    title: '전략적 파트너',
    emoji: '♟️',
    loveStyle: '지적 교감형',
    description: '연애도 전략적으로! 머리로 사랑하고 함께 성장하는 파트너십을 추구하는 연인입니다.',
    datingTraits: ['지적 대화 중시', '독립성 존중', '장기적 관점', '효율적 소통'],
    loveStrengths: ['지적 자극', '신뢰', '성장 지향', '문제 해결력'],
    loveChallenges: ['감정 표현 서툼', '냉정해 보임', '높은 기준'],
    idealDateIdeas: ['토론 카페', '전시회', '독서 모임', '새로운 배움'],
    communicationStyle: '논리적이고 직접적, 핵심 위주',
    conflictStyle: '논리적 분석 후 해결책 제시',
    bestMatch: ['ENFP', 'ENTP'],
    growthTip: '가끔은 논리 말고 감정으로 반응해보세요',
  },
  ISTP: {
    type: 'ISTP',
    title: '쿨한 자유로운 연인',
    emoji: '🏍️',
    loveStyle: '독립 존중형',
    description: '서로의 공간을 존중하는 쿨한 연인! 말보다 함께하는 시간과 행동으로 사랑을 보여줍니다.',
    datingTraits: ['행동으로 표현', '자유 존중', '실용적 애정', '위기에 강함'],
    loveStrengths: ['쿨함', '문제 해결력', '실용성', '독립성'],
    loveChallenges: ['감정 표현 부족', '약속에 느슨', '장기 계획 약함'],
    idealDateIdeas: ['액티비티 데이트', '드라이브', '새로운 경험', '운동'],
    communicationStyle: '간결하고 직접적, 필요할 때만 소통',
    conflictStyle: '거리두기로 진정 후 해결',
    bestMatch: ['ESFJ', 'ESTJ'],
    growthTip: '감정도 가끔 말로 표현해주면 좋아요',
  },
  ISFP: {
    type: 'ISFP',
    title: '감성적인 로맨티스트',
    emoji: '🌸',
    loveStyle: '감성 교감형',
    description: '조용하지만 깊은 감정을 가진 로맨티스트! 섬세한 감각으로 특별한 순간을 만드는 연인입니다.',
    datingTraits: ['섬세한 감성', '조용한 사랑', '예술적 감각', '현재에 충실'],
    loveStrengths: ['감성', '배려', '적응력', '진심'],
    loveChallenges: ['표현 서툼', '갈등 회피', '우유부단'],
    idealDateIdeas: ['예쁜 카페', '사진 촬영', '자연 속 데이트', '공연 관람'],
    communicationStyle: '부드럽고 조용하게, 비언어적 표현 많음',
    conflictStyle: '회피하다가 감정 폭발 위험',
    bestMatch: ['ENFJ', 'ESFJ'],
    growthTip: '불편한 것도 솔직하게 말해보세요',
  },
  INFP: {
    type: 'INFP',
    title: '순수한 이상주의 연인',
    emoji: '🦋',
    loveStyle: '이상 추구형',
    description: '동화 같은 사랑을 꿈꾸는 순수한 연인! 깊은 감정적 교감과 의미 있는 사랑을 추구합니다.',
    datingTraits: ['이상적 사랑 추구', '깊은 감정', '창의적 표현', '진심 어린 교감'],
    loveStrengths: ['진심', '이해력', '창의성', '헌신'],
    loveChallenges: ['이상과 현실 괴리', '상처받기 쉬움', '우유부단'],
    idealDateIdeas: ['의미 있는 장소', '글 쓰기', '별 보기', '깊은 대화'],
    communicationStyle: '감성적이고 진심 어린, 글로 표현 선호',
    conflictStyle: '상처받으면 내면으로 숨음',
    bestMatch: ['ENFJ', 'ENTJ'],
    growthTip: '현실의 불완전한 사랑도 충분히 아름다워요',
  },
  INTP: {
    type: 'INTP',
    title: '지적 탐구 연인',
    emoji: '🔭',
    loveStyle: '지적 호기심형',
    description: '연인도 탐구 대상! 끝없이 알아가고 싶고 지적 교감을 나누고 싶은 호기심 많은 연인입니다.',
    datingTraits: ['지적 호기심', '독립적', '논리적 사랑', '깊은 관심'],
    loveStrengths: ['지적 자극', '독립성 존중', '문제 해결', '진지한 관심'],
    loveChallenges: ['감정 표현 서툼', '연락 잊음', '현실 감각 부족'],
    idealDateIdeas: ['토론', '다큐 감상', '새로운 지식 탐구', '조용한 시간'],
    communicationStyle: '분석적이고 탐구적, 왜? 질문 많음',
    conflictStyle: '감정보다 논리로 접근',
    bestMatch: ['ENTJ', 'ESTJ'],
    growthTip: '상대의 감정에도 관심을 가져보세요',
  },
  ESTP: {
    type: 'ESTP',
    title: '스릴 넘치는 연인',
    emoji: '🎢',
    loveStyle: '모험 추구형',
    description: '지루한 건 딱 질색! 짜릿하고 재미있는 연애를 즐기는 액션파 연인입니다.',
    datingTraits: ['즉흥적', '액션파', '현재 중심', '재미 추구'],
    loveStrengths: ['재미', '모험심', '적응력', '행동력'],
    loveChallenges: ['진지함 부족', '충동적', '미래 계획 약함'],
    idealDateIdeas: ['놀이공원', '스포츠', '여행', '파티'],
    communicationStyle: '직접적이고 솔직, 행동으로 표현',
    conflictStyle: '빨리 해결하고 넘어가기',
    bestMatch: ['ISFJ', 'ISTJ'],
    growthTip: '가끔은 깊은 대화 시간도 가져보세요',
  },
  ESFP: {
    type: 'ESFP',
    title: '행복 바이러스 연인',
    emoji: '🌈',
    loveStyle: '즐거움 추구형',
    description: '함께 있으면 무조건 행복! 밝은 에너지로 연애를 즐겁게 만드는 텐션 업 연인입니다.',
    datingTraits: ['밝은 에너지', '즐거움 추구', '현재 중심', '스킨십 좋아함'],
    loveStrengths: ['긍정 에너지', '재미', '애정 표현', '사교성'],
    loveChallenges: ['진지함 부족', '충동적', '갈등 회피'],
    idealDateIdeas: ['맛집 탐방', '쇼핑', '파티', '여행'],
    communicationStyle: '밝고 긍정적, 재미있게 대화',
    conflictStyle: '웃으면서 넘기려다 폭발 위험',
    bestMatch: ['ISFJ', 'ISTJ'],
    growthTip: '때로는 진지한 대화도 필요해요',
  },
  ENFP: {
    type: 'ENFP',
    title: '설레임 전도사',
    emoji: '✨',
    loveStyle: '열정 로맨스형',
    description: '매일이 첫사랑 같은 설렘! 열정적이고 로맨틱한 사랑을 하는 이상주의적 연인입니다.',
    datingTraits: ['열정적', '로맨틱', '이상주의', '창의적 표현'],
    loveStrengths: ['열정', '창의성', '긍정 에너지', '이해력'],
    loveChallenges: ['새로운 것에 끌림', '집중력 분산', '현실 감각 부족'],
    idealDateIdeas: ['새로운 경험', '여행', '특별한 이벤트', '깊은 대화'],
    communicationStyle: '열정적이고 표현력 풍부',
    conflictStyle: '감정적으로 반응하지만 금방 풀림',
    bestMatch: ['INFJ', 'INTJ'],
    growthTip: '설렘이 식어도 사랑은 깊어질 수 있어요',
  },
  ENTP: {
    type: 'ENTP',
    title: '지적 유희의 연인',
    emoji: '🎭',
    loveStyle: '도전 자극형',
    description: '지루한 연애는 싫어! 서로 자극하고 성장하는 지적 파트너십을 원하는 연인입니다.',
    datingTraits: ['지적 토론 좋아함', '장난기', '독립적', '새로움 추구'],
    loveStrengths: ['지적 자극', '유머', '적응력', '창의성'],
    loveChallenges: ['논쟁적', '감정 배려 부족', '일관성 부족'],
    idealDateIdeas: ['토론', '새로운 도전', '게임', '탐험'],
    communicationStyle: '재치있고 논쟁적, 티키타카 대화',
    conflictStyle: '논쟁으로 해결, 감정보다 논리',
    bestMatch: ['INFJ', 'INTJ'],
    growthTip: '상대의 감정도 논리만큼 중요해요',
  },
  ESTJ: {
    type: 'ESTJ',
    title: '책임감 있는 연인',
    emoji: '💼',
    loveStyle: '안정 리드형',
    description: '연애도 책임지는 리더형 연인! 계획적이고 체계적으로 관계를 이끌어가는 든든한 파트너입니다.',
    datingTraits: ['계획적', '책임감', '실용적', '리드함'],
    loveStrengths: ['신뢰', '안정감', '책임감', '실행력'],
    loveChallenges: ['융통성 부족', '권위적', '감정 표현 서툼'],
    idealDateIdeas: ['계획된 데이트', '맛집', '안정적 활동', '기념일'],
    communicationStyle: '직접적이고 명확하게',
    conflictStyle: '문제 해결 위주, 감정보다 해결책',
    bestMatch: ['ISFP', 'ISTP'],
    growthTip: '가끔은 계획 없이 흘러가는 것도 좋아요',
  },
  ESFJ: {
    type: 'ESFJ',
    title: '사랑꾼 로맨티스트',
    emoji: '💕',
    loveStyle: '헌신 표현형',
    description: '사랑할 때 올인하는 진정한 로맨티스트! 연인을 위해 무엇이든 하고 표현하는 다정한 연인입니다.',
    datingTraits: ['다정다감', '기념일 중시', '표현력 풍부', '연인 우선'],
    loveStrengths: ['애정 표현', '배려', '로맨틱', '헌신'],
    loveChallenges: ['과한 기대', '남 눈치', '집착 위험'],
    idealDateIdeas: ['로맨틱 디너', '기념일', '선물', '사진 찍기'],
    communicationStyle: '따뜻하고 표현력 풍부',
    conflictStyle: '화해 원함, 갈등 싫어함',
    bestMatch: ['ISFP', 'ISTP'],
    growthTip: '나만의 시간도 중요해요',
  },
  ENFJ: {
    type: 'ENFJ',
    title: '이상적인 소울메이트',
    emoji: '💖',
    loveStyle: '성장 지향형',
    description: '연인의 최고 서포터! 함께 성장하고 서로의 꿈을 응원하는 이상적인 파트너입니다.',
    datingTraits: ['서포트', '성장 지향', '깊은 교감', '헌신적'],
    loveStrengths: ['이해력', '서포트', '소통력', '비전 공유'],
    loveChallenges: ['과한 기대', '자기 희생', '이상주의'],
    idealDateIdeas: ['의미 있는 활동', '깊은 대화', '함께 성장', '봉사 활동'],
    communicationStyle: '공감적이고 깊이 있게',
    conflictStyle: '대화로 해결, 관계 회복 중시',
    bestMatch: ['INFP', 'ISFP'],
    growthTip: '나 자신도 돌보는 시간이 필요해요',
  },
  ENTJ: {
    type: 'ENTJ',
    title: '야망의 파트너',
    emoji: '👑',
    loveStyle: '목표 지향형',
    description: '함께 정상을 향해! 서로의 성공을 위해 자극하고 지원하는 파워 커플을 꿈꾸는 연인입니다.',
    datingTraits: ['목표 지향', '야망 공유', '효율적', '리드함'],
    loveStrengths: ['추진력', '지원', '성장', '비전'],
    loveChallenges: ['감정 무시', '통제적', '일 우선'],
    idealDateIdeas: ['네트워킹', '자기계발', '고급 레스토랑', '목표 대화'],
    communicationStyle: '직접적이고 목표 지향적',
    conflictStyle: '빠르게 해결하고 넘어감',
    bestMatch: ['INFP', 'INTP'],
    growthTip: '감정적 교감도 성공의 일부예요',
  },
};

export function calculateResult(answers: number[]): MbtiDatingResult {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([key, value]) => {
        scores[key as keyof typeof scores] += value || 0;
      });
    }
  });

  const mbtiType = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return results[mbtiType] || results['INFP'];
}
