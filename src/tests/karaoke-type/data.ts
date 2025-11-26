// 노래방 유형 테스트 - 노래방에서 나는 어떤 타입?

export interface KaraokeTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface KaraokeTypeResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  songStyle: string[];
  strengths: string[];
  funFacts: string[];
  recommendedSongs: string[];
  withFriends: string;
  signature: string;
}

export const karaokeTypes = ['diva', 'shy', 'entertainer', 'listener', 'duet_lover', 'retro_master'] as const;
export type KaraokeType = typeof karaokeTypes[number];

export const questions: KaraokeTypeQuestion[] = [
  {
    id: 1,
    question: "노래방 가자는 제안에?",
    options: [
      { text: "오 좋아! 부를 노래 이미 있어", scores: { diva: 3, entertainer: 1 } },
      { text: "ㅇㅋ 가긴 가는데 부를진 모름", scores: { listener: 2, shy: 1 } },
      { text: "나 잘 못하는데... 그냥 들을게", scores: { shy: 3 } },
      { text: "가자가자! 분위기 담당 ㄱㄱ", scores: { entertainer: 3 } },
    ],
  },
  {
    id: 2,
    question: "노래방에서 첫 곡 선곡은?",
    options: [
      { text: "내 18번곡으로 분위기 시작!", scores: { diva: 3 } },
      { text: "일단 남들 노래 듣다가 선곡", scores: { shy: 2, listener: 2 } },
      { text: "다같이 부를 수 있는 곡!", scores: { entertainer: 3 } },
      { text: "아는 사람이랑 듀엣으로", scores: { duet_lover: 3 } },
    ],
  },
  {
    id: 3,
    question: "좋아하는 노래 장르는?",
    options: [
      { text: "발라드, 감성적인 곡", scores: { diva: 2, shy: 1 } },
      { text: "댄스, 신나는 곡", scores: { entertainer: 3 } },
      { text: "90-2000년대 추억의 노래", scores: { retro_master: 3 } },
      { text: "듀엣곡, 합창곡", scores: { duet_lover: 3 } },
    ],
  },
  {
    id: 4,
    question: "마이크를 잡았을 때?",
    options: [
      { text: "온 열정을 다해 부름!", scores: { diva: 3 } },
      { text: "가사 틀릴까봐 긴장...", scores: { shy: 3 } },
      { text: "춤추면서 분위기 업!", scores: { entertainer: 3 } },
      { text: "옆 사람이랑 눈 맞추며 부름", scores: { duet_lover: 2 } },
    ],
  },
  {
    id: 5,
    question: "남이 노래할 때 나는?",
    options: [
      { text: "다음에 부를 노래 선곡 중", scores: { diva: 2 } },
      { text: "탬버린 치며 호응!", scores: { entertainer: 3 } },
      { text: "조용히 듣고 박수", scores: { listener: 3 } },
      { text: "같이 따라 부름", scores: { duet_lover: 2, entertainer: 1 } },
    ],
  },
  {
    id: 6,
    question: "점수에 대한 생각은?",
    options: [
      { text: "높은 점수 받으면 뿌듯!", scores: { diva: 3 } },
      { text: "점수 신경 안 씀, 재미가 최고", scores: { entertainer: 2, retro_master: 1 } },
      { text: "낮으면 좀 부끄러움", scores: { shy: 3 } },
      { text: "점수 끔, 부담스러움", scores: { listener: 2, shy: 1 } },
    ],
  },
  {
    id: 7,
    question: "애창곡 스타일은?",
    options: [
      { text: "고음 터지는 파워 발라드", scores: { diva: 3 } },
      { text: "다같이 떼창할 수 있는 곡", scores: { entertainer: 3 } },
      { text: "옛날 노래, 추억의 명곡", scores: { retro_master: 3 } },
      { text: "솔직히 애창곡 없음...", scores: { shy: 2, listener: 1 } },
    ],
  },
  {
    id: 8,
    question: "노래방 마무리할 때?",
    options: [
      { text: "마지막까지 열창!", scores: { diva: 2, entertainer: 1 } },
      { text: "다같이 부를 곡으로 마무리", scores: { entertainer: 3 } },
      { text: "드디어 끝... 해방", scores: { shy: 3 } },
      { text: "아쉬워... 더 부르고 싶어", scores: { diva: 2, duet_lover: 1 } },
    ],
  },
  {
    id: 9,
    question: "처음 보는 사람들과 노래방?",
    options: [
      { text: "노래로 친해지기 가능!", scores: { entertainer: 2, diva: 1 } },
      { text: "긴장되지만 시도해봄", scores: { shy: 2 } },
      { text: "분위기 봐서 부를지 결정", scores: { listener: 2, shy: 1 } },
      { text: "듀엣으로 어색함 깨기", scores: { duet_lover: 3 } },
    ],
  },
  {
    id: 10,
    question: "노래방에서 자신있는 것은?",
    options: [
      { text: "노래 실력!", scores: { diva: 3 } },
      { text: "분위기 메이킹!", scores: { entertainer: 3 } },
      { text: "경청과 호응!", scores: { listener: 3 } },
      { text: "합을 맞추는 것!", scores: { duet_lover: 3 } },
    ],
  },
  {
    id: 11,
    question: "노래방 갔을 때 시간은?",
    options: [
      { text: "2시간은 기본이지", scores: { diva: 2, entertainer: 2 } },
      { text: "1시간이면 충분", scores: { shy: 2, listener: 1 } },
      { text: "시간 가는 줄 모름", scores: { entertainer: 3 } },
      { text: "빨리 끝났으면...", scores: { shy: 3 } },
    ],
  },
  {
    id: 12,
    question: "노래방 기계 조작은?",
    options: [
      { text: "능숙! 예약, 음정 조절 다 함", scores: { diva: 2, entertainer: 1 } },
      { text: "기본만 할 줄 앎", scores: { listener: 2 } },
      { text: "누가 해주면 좋겠음", scores: { shy: 2 } },
      { text: "서로 해주면서 노래방 즐김", scores: { duet_lover: 2, entertainer: 1 } },
    ],
  },
];

export const results: Record<KaraokeType, KaraokeTypeResult> = {
  diva: {
    type: 'diva',
    title: '노래방 디바',
    emoji: '🎤',
    description: '노래방은 나의 무대! 마이크만 잡으면 가수 뺨치는 실력 발휘, 노래방 점수판을 지배하는 진정한 디바입니다!',
    characteristics: ['노래 자신감', '고음 도전', '감정 표현', '완벽한 무대'],
    songStyle: ['파워 발라드', '고음곡', '감성곡', '가창력 곡'],
    strengths: ['노래 실력', '무대 장악력', '분위기 끌어올림', '청중 집중'],
    funFacts: ['18번곡이 여러 개', '마이크 놓기 싫어함', '점수 100점 욕심', '노래방 끝나면 목 아픔'],
    recommendedSongs: ['체념 - 빅마마', 'If I Ain\'t Got You', '사랑했지만', '보고싶다'],
    withFriends: '친구들의 박수와 환호를 받는 메인 가수',
    signature: '이 노래 나 진짜 잘해, 들어봐!',
  },
  shy: {
    type: 'shy',
    title: '수줍은 관객',
    emoji: '🙈',
    description: '노래방? 나보단 남들이 하는 게... 마이크 잡으면 떨리지만, 한 번 부르면 의외로 괜찮은 숨은 실력자!',
    characteristics: ['노래 부끄러움', '남들 먼저', '가사 걱정', '조용한 응원'],
    songStyle: ['무난한 곡', '쉬운 멜로디', '익숙한 노래', '느린 템포'],
    strengths: ['경청 능력', '좋은 청중', '겸손함', '숨겨진 잠재력'],
    funFacts: ['마이크 잡으면 긴장 만렙', '가사 틀릴까봐 걱정', '친한 사람 앞에서만 부름', '집에서 혼자 연습'],
    recommendedSongs: ['좋은 날 - 아이유', '밤편지', '봄날', '잊어야 한다는 마음으로'],
    withFriends: '조용히 응원하다가 가끔 깜짝 무대',
    signature: '나 못하는데... 진짜 한 곡만...',
  },
  entertainer: {
    type: 'entertainer',
    title: '분위기 메이커',
    emoji: '🎉',
    description: '노래방의 핵인싸! 노래 실력보다 분위기가 중요해! 탬버린 흔들며 모두를 춤추게 만드는 파티 피플입니다!',
    characteristics: ['분위기 장인', '호응 만점', '춤 동반', '에너지 폭발'],
    songStyle: ['댄스곡', '신나는 노래', '떼창곡', '애니메이션 OST'],
    strengths: ['분위기 살리기', '호응 이끌기', '재미 보장', '모두 참여시킴'],
    funFacts: ['탬버린은 필수', '앉아서 부른 적 없음', '목보다 체력 먼저 나감', '노래방 끝나면 땀범벅'],
    recommendedSongs: ['DJ DOC 메들리', '미쳐 - 포미닛', '빙고', '상사디사 - 장윤정'],
    withFriends: '모두를 일으켜 세우는 에너지 폭탄',
    signature: '다같이!! 하나 둘 셋!',
  },
  listener: {
    type: 'listener',
    title: '감상파 리스너',
    emoji: '👂',
    description: '노래방에서 부르는 것보다 듣는 게 좋아! 좋은 음악과 친구들의 노래를 즐기는 귀호강 전문가입니다!',
    characteristics: ['경청 전문', '좋은 반응', '음악 감상', '편안한 존재'],
    songStyle: ['안 부름', '가끔 쉬운 곡', '합창곡 참여', '라스트 곡'],
    strengths: ['최고의 청중', '진심 어린 박수', '편안한 분위기', '다른 사람 빛나게 함'],
    funFacts: ['노래 예약 거의 안 함', '음료수 담당', '점수판 관리', '사진 찍어줌'],
    recommendedSongs: ['다같이 부르는 곡만', '마지막에 한 곡', '친구가 시키면 부름', '듀엣으로 참여'],
    withFriends: '열심히 호응해주는 베스트 관객',
    signature: '나 안 불러도 돼, 듣는 것도 좋아',
  },
  duet_lover: {
    type: 'duet_lover',
    title: '듀엣 전문가',
    emoji: '👫',
    description: '혼자보다 둘이! 함께 부르면 더 즐거운 듀엣의 달인! 노래방을 커뮤니케이션의 장으로 만드는 협동 전문가입니다!',
    characteristics: ['듀엣 선호', '화음 맞추기', '함께하는 즐거움', '파트너십'],
    songStyle: ['듀엣곡', '합창곡', '남녀 파트곡', '콜앤리스폰스'],
    strengths: ['협동심', '화음 능력', '함께하는 즐거움', '어색함 깨기'],
    funFacts: ['솔로곡은 어색함', '파트너 찾는 중', '눈 맞추며 부름', '듀엣곡 다 암기'],
    recommendedSongs: ['썸 - 소유&정기고', '시간을 달려서', '어떤가요', '우리 둘이 함께'],
    withFriends: '누구든 끌어들여 함께 부르는 협동러',
    signature: '이 노래 같이 부르자! 넌 여기 파트!',
  },
  retro_master: {
    type: 'retro_master',
    title: '추억의 명곡 마스터',
    emoji: '📻',
    description: '옛날 노래가 최고야! 90-2000년대 명곡을 줄줄이 부르는 추억 저장소, 모두의 향수를 자극하는 레트로 DJ입니다!',
    characteristics: ['옛날 노래 전문', '추억 소환', '세대 공감', '명곡 전도사'],
    songStyle: ['90년대 가요', '2000년대 히트곡', '트로트', 'OST 명곡'],
    strengths: ['풍부한 레퍼토리', '세대 연결', '추억 소환', '분위기 전환'],
    funFacts: ['최신 노래는 모름', '옛날 노래 가사 완벽', '부모님과 노래방 가능', 'LP 수집 취미'],
    recommendedSongs: ['널 사랑하겠어 - 젝키', '거짓말 - god', '슬픈 사랑의 노래', '천년의 사랑'],
    withFriends: '추억 여행으로 이끄는 타임머신 조종사',
    signature: '이 노래 알아? 완전 명곡이야!',
  },
};

export function calculateResult(answers: number[]): KaraokeTypeResult {
  const scores: Record<KaraokeType, number> = {
    diva: 0,
    shy: 0,
    entertainer: 0,
    listener: 0,
    duet_lover: 0,
    retro_master: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as KaraokeType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: KaraokeType = 'entertainer';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as KaraokeType;
    }
  });

  return results[resultType];
}
