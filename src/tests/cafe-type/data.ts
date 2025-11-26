// 카페 유형 테스트 - 나는 어떤 카페 스타일?

export interface CafeTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface CafeTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  favoriteMenu: string[];
  idealCafe: string;
  cafeRoutine: string;
  strengths: string[];
  cafePlaylist: string;
  perfectMatch: string;
  tip: string;
}

export const cafeTypeTypes = ['aesthetic', 'studyholic', 'social', 'peaceful', 'gourmet', 'homebody'] as const;
export type CafeTypeType = typeof cafeTypeTypes[number];

export const questions: CafeTypeQuestion[] = [
  {
    id: 1,
    question: "카페에 가는 주된 이유는?",
    options: [
      { text: "예쁜 공간에서 사진 찍으려고", scores: { aesthetic: 3 } },
      { text: "공부/작업하려고", scores: { studyholic: 3 } },
      { text: "친구들이랑 수다 떨려고", scores: { social: 3 } },
      { text: "조용히 혼자 시간 보내려고", scores: { peaceful: 2, homebody: 1 } },
    ],
  },
  {
    id: 2,
    question: "카페에서 자리를 고를 때 기준은?",
    options: [
      { text: "사진 찍기 좋은 예쁜 자리", scores: { aesthetic: 3 } },
      { text: "콘센트 있고 넓은 테이블", scores: { studyholic: 3 } },
      { text: "대화하기 편한 소파 자리", scores: { social: 3 } },
      { text: "조용하고 구석진 자리", scores: { peaceful: 3 } },
    ],
  },
  {
    id: 3,
    question: "카페에서 주로 시키는 메뉴는?",
    options: [
      { text: "비주얼 예쁜 시그니처 메뉴", scores: { aesthetic: 3 } },
      { text: "아아(아이스 아메리카노) 고정", scores: { studyholic: 2, peaceful: 1 } },
      { text: "달달한 라떼나 프라푸치노류", scores: { social: 2, aesthetic: 1 } },
      { text: "원두 맛 제대로 느낄 수 있는 것", scores: { gourmet: 3 } },
    ],
  },
  {
    id: 4,
    question: "카페에 얼마나 머무나요?",
    options: [
      { text: "사진 찍고 30분~1시간 정도", scores: { aesthetic: 3 } },
      { text: "3-4시간 이상, 하루 종일도 OK", scores: { studyholic: 3 } },
      { text: "수다 떠는 만큼, 2-3시간?", scores: { social: 3 } },
      { text: "커피 한 잔 마시고 빠르게", scores: { peaceful: 2, homebody: 1 } },
    ],
  },
  {
    id: 5,
    question: "카페 선택 기준 1순위는?",
    options: [
      { text: "인테리어, 분위기", scores: { aesthetic: 3 } },
      { text: "와이파이, 콘센트, 자리 넓이", scores: { studyholic: 3 } },
      { text: "대화하기 좋은 분위기", scores: { social: 3 } },
      { text: "커피 맛", scores: { gourmet: 3 } },
    ],
  },
  {
    id: 6,
    question: "혼카(혼자 카페)에 대해 어떻게 생각해요?",
    options: [
      { text: "혼자 가면 사진 누가 찍어줘...", scores: { aesthetic: 2, social: 1 } },
      { text: "혼자가 오히려 집중돼서 좋아", scores: { studyholic: 3 } },
      { text: "카페는 같이 가야 재밌지!", scores: { social: 3 } },
      { text: "혼카 최고! 나만의 시간", scores: { peaceful: 3 } },
    ],
  },
  {
    id: 7,
    question: "새 카페를 발견하면?",
    options: [
      { text: "일단 사진부터! SNS 업로드", scores: { aesthetic: 3 } },
      { text: "작업하기 좋은지 체크", scores: { studyholic: 3 } },
      { text: "친구한테 바로 공유", scores: { social: 3 } },
      { text: "나만 알고 싶은 비밀 장소로", scores: { peaceful: 2, gourmet: 1 } },
    ],
  },
  {
    id: 8,
    question: "카페에서 가장 싫은 것은?",
    options: [
      { text: "인테리어가 별로인 것", scores: { aesthetic: 3 } },
      { text: "콘센트 없거나 자리 좁은 것", scores: { studyholic: 3 } },
      { text: "너무 조용하거나 썰렁한 분위기", scores: { social: 3 } },
      { text: "너무 시끄럽고 북적이는 것", scores: { peaceful: 3 } },
    ],
  },
  {
    id: 9,
    question: "카페에서 하는 일은?",
    options: [
      { text: "사진 찍고 SNS 올리기", scores: { aesthetic: 3 } },
      { text: "공부, 업무, 독서", scores: { studyholic: 3 } },
      { text: "친구와 대화, 미팅", scores: { social: 3 } },
      { text: "멍때리기, 음악 듣기", scores: { peaceful: 3 } },
    ],
  },
  {
    id: 10,
    question: "카페에 가는 빈도는?",
    options: [
      { text: "새 카페 오픈하면 바로 달려감", scores: { aesthetic: 3 } },
      { text: "주 3회 이상, 제2의 사무실", scores: { studyholic: 3 } },
      { text: "친구 만날 때마다, 주 2-3회", scores: { social: 3 } },
      { text: "가끔, 분위기 전환 필요할 때", scores: { peaceful: 2, homebody: 1 } },
    ],
  },
  {
    id: 11,
    question: "카페 사장이 된다면?",
    options: [
      { text: "인스타 감성 뿜뿜 인테리어", scores: { aesthetic: 3 } },
      { text: "와이파이 빵빵, 넓은 테이블", scores: { studyholic: 3 } },
      { text: "대화하기 좋은 아늑한 소파", scores: { social: 3 } },
      { text: "커피 원두에 진심인 로스터리", scores: { gourmet: 3 } },
    ],
  },
  {
    id: 12,
    question: "카페에서 먹는 디저트는?",
    options: [
      { text: "비주얼 좋은 케이크, 마카롱", scores: { aesthetic: 3 } },
      { text: "안 시킴, 커피만", scores: { studyholic: 2, gourmet: 1 } },
      { text: "친구랑 나눠 먹을 거", scores: { social: 3 } },
      { text: "조용히 즐길 수 있는 간단한 것", scores: { peaceful: 3 } },
    ],
  },
];

export const results: Record<CafeTypeType, CafeTypeResult> = {
  aesthetic: {
    type: 'aesthetic',
    title: '감성 카페러',
    emoji: '📸',
    subtitle: '카페는 비주얼이지',
    description: '당신은 예쁜 카페를 찾아다니는 감성 카페러예요! 인테리어, 분위기, 그리고 사진 찍기 좋은 곳을 최우선으로 생각하죠. SNS 피드가 카페 사진으로 가득!',
    characteristics: ['비주얼 중시', 'SNS 활발', '신상 카페 탐방', '사진 찍는 재미'],
    favoriteMenu: ['시그니처 음료', '예쁜 라떼아트', '비주얼 케이크', '에이드류'],
    idealCafe: '인스타 감성 가득한 인테리어, 포토존 있는 곳',
    cafeRoutine: '사진 찍고 → SNS 업로드 → 커피 즐기기',
    strengths: ['트렌드에 밝음', '좋은 카페 추천 가능', '감각적'],
    cafePlaylist: '잔잔한 인디, 감성 팝',
    perfectMatch: '같이 사진 찍어줄 친구',
    tip: '가끔은 비주얼 말고 맛에도 집중해보세요!',
  },
  studyholic: {
    type: 'studyholic',
    title: '카공족',
    emoji: '💻',
    subtitle: '카페가 내 사무실',
    description: '당신은 카페에서 공부/작업하는 카공족이에요! 콘센트와 와이파이, 넓은 테이블이 최우선 조건이죠. 카페는 제2의 사무실!',
    characteristics: ['작업 집중', '장시간 체류', '효율 추구', '아아 중독'],
    favoriteMenu: ['아이스 아메리카노', '차가운 음료', '리필 가능한 것'],
    idealCafe: '콘센트 많고, 와이파이 빵빵하고, 자리 넓은 곳',
    cafeRoutine: '자리 잡기 → 노트북 세팅 → 작업 몰입',
    strengths: ['생산성 높음', '카페 활용 능력', '집중력'],
    cafePlaylist: '백색소음, 로파이',
    perfectMatch: '같이 카공하는 스터디 메이트',
    tip: '적당히 쉬면서! 눈도 목도 쉬어야 해요.',
  },
  social: {
    type: 'social',
    title: '소셜 카페러',
    emoji: '💬',
    subtitle: '카페는 수다 장소',
    description: '당신은 친구들과 수다 떨러 카페 가는 소셜 카페러예요! 대화하기 좋은 분위기와 편한 자리가 최우선이죠. 카페 = 친구와의 시간!',
    characteristics: ['사교적', '대화 사랑', '친구와 함께', '분위기 중시'],
    favoriteMenu: ['달달한 라떼', '나눠 먹을 디저트', '계절 음료'],
    idealCafe: '대화하기 좋은 분위기, 편한 소파 자리',
    cafeRoutine: '자리 잡기 → 주문 → 끝없는 수다',
    strengths: ['관계 유지 잘 함', '분위기 메이커', '친화력'],
    cafePlaylist: '기분 좋은 팝, 잔잔한 BGM',
    perfectMatch: '수다 떨 친구들',
    tip: '가끔은 혼카도 해보세요, 나만의 시간도 소중해요!',
  },
  peaceful: {
    type: 'peaceful',
    title: '힐링 카페러',
    emoji: '🌿',
    subtitle: '조용한 나만의 시간',
    description: '당신은 조용히 혼자만의 시간을 보내러 카페 가는 힐링 카페러예요! 북적이는 곳보다 조용하고 평화로운 분위기를 선호하죠.',
    characteristics: ['평화 추구', '혼자 시간', '조용한 곳 선호', '내향적'],
    favoriteMenu: ['따뜻한 차', '핸드드립', '시그니처 블렌드'],
    idealCafe: '조용하고 아늑한 숨은 카페, 사람 적은 곳',
    cafeRoutine: '자리 잡기 → 음악 듣기 → 멍때리기 or 독서',
    strengths: ['자기만의 시간', '휴식 능력', '여유로움'],
    cafePlaylist: '재즈, 클래식, 자연의 소리',
    perfectMatch: '조용한 단골 카페',
    tip: '당신만의 아지트를 찾아보세요!',
  },
  gourmet: {
    type: 'gourmet',
    title: '커피 미식가',
    emoji: '☕',
    subtitle: '커피는 맛이지',
    description: '당신은 커피 맛에 진심인 커피 미식가예요! 원두, 로스팅, 추출 방법까지 꼼꼼히 따지죠. 분위기보다 한 잔의 퀄리티!',
    characteristics: ['맛 중시', '커피 지식', '품질 추구', '원두 마니아'],
    favoriteMenu: ['핸드드립', '싱글 오리진', '플랫 화이트', '에스프레소'],
    idealCafe: '로스터리 카페, 스페셜티 커피 전문점',
    cafeRoutine: '원두 확인 → 추출 방법 선택 → 음미하기',
    strengths: ['좋은 커피 감별력', '맛집 탐방 능력', '전문 지식'],
    cafePlaylist: '조용한 재즈, 또는 음악 없이',
    perfectMatch: '같은 커피 덕후 친구',
    tip: '가끔은 분위기도 즐겨보세요!',
  },
  homebody: {
    type: 'homebody',
    title: '집카페 선호러',
    emoji: '🏠',
    subtitle: '집이 최고야',
    description: '당신은 사실 카페보다 집이 더 좋은 집카페 선호러예요! 밖에 나가는 것보다 집에서 커피 마시는 게 더 편하고 좋죠.',
    characteristics: ['집 선호', '편안함 추구', '나가기 귀찮음', '홈카페 덕후'],
    favoriteMenu: ['집에서 내린 커피', '캡슐커피', '편의점 커피'],
    idealCafe: '우리 집...',
    cafeRoutine: '침대에서 → 커피 내리기 → 소파에서 즐기기',
    strengths: ['절약', '편안함', '자유로움'],
    cafePlaylist: '내 방 BGM, 넷플릭스',
    perfectMatch: '집으로 배달되는 커피',
    tip: '가끔은 밖에서 환경 바꿔보는 것도 좋아요!',
  },
};

export function calculateResult(answers: number[]): CafeTypeResult {
  const scores: Record<CafeTypeType, number> = {
    aesthetic: 0,
    studyholic: 0,
    social: 0,
    peaceful: 0,
    gourmet: 0,
    homebody: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as CafeTypeType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: CafeTypeType = 'peaceful';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as CafeTypeType;
    }
  });

  return results[resultType];
}
