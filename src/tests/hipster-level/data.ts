// 힙스터 레벨 테스트 - 당신은 얼마나 힙한가요?

export interface HipsterLevelQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface HipsterLevelResult {
  type: string;
  title: string;
  emoji: string;
  level: number;
  description: string;
  characteristics: string[];
  lifestyle: string[];
  favoriteThings: string[];
  socialMedia: string;
  musicTaste: string;
  fashionStyle: string;
  hangoutSpots: string[];
  tips: string[];
}

export const questions: HipsterLevelQuestion[] = [
  {
    id: 1,
    question: "카페 선택 기준은?",
    options: [
      { text: "가깝고 편한 곳 (스타벅스 등)", score: 0 },
      { text: "분위기 좋은 곳", score: 1 },
      { text: "인스타 감성 핫플", score: 2 },
      { text: "아무도 모르는 숨은 로스터리", score: 3 },
    ],
  },
  {
    id: 2,
    question: "음악 취향은?",
    options: [
      { text: "인기 차트 음악", score: 0 },
      { text: "좋아하는 장르 위주", score: 1 },
      { text: "인디/언더그라운드 뮤지션", score: 2 },
      { text: "아무도 모르는 해외 아티스트", score: 3 },
    ],
  },
  {
    id: 3,
    question: "뭔가 유행하기 시작하면?",
    options: [
      { text: "나도 해봐야지!", score: 0 },
      { text: "괜찮으면 따라함", score: 1 },
      { text: "유행하면 좀 식상해...", score: 2 },
      { text: "나는 이미 그거 했었는데", score: 3 },
    ],
  },
  {
    id: 4,
    question: "패션 스타일은?",
    options: [
      { text: "유행 따라가는 편", score: 0 },
      { text: "기본템 위주로 깔끔하게", score: 1 },
      { text: "빈티지/유니크한 아이템 믹스", score: 2 },
      { text: "남들 안 입는 브랜드 위주", score: 3 },
    ],
  },
  {
    id: 5,
    question: "SNS 사용 스타일은?",
    options: [
      { text: "일상 공유, 인기 콘텐츠 소비", score: 0 },
      { text: "가끔 올리고 구경 위주", score: 1 },
      { text: "감성 피드 큐레이션", score: 2 },
      { text: "메인스트림 SNS는 안 함", score: 3 },
    ],
  },
  {
    id: 6,
    question: "맛집 선택은?",
    options: [
      { text: "리뷰 많고 줄 서는 곳", score: 0 },
      { text: "검증된 맛집", score: 1 },
      { text: "아는 사람만 아는 로컬 맛집", score: 2 },
      { text: "줄 서는 곳은 절대 안 감", score: 3 },
    ],
  },
  {
    id: 7,
    question: "취미 활동은?",
    options: [
      { text: "대중적인 취미 (영화, 게임 등)", score: 0 },
      { text: "운동이나 자기계발", score: 1 },
      { text: "필름 카메라, 레코드판 등", score: 2 },
      { text: "남들이 잘 모르는 마이너 취미", score: 3 },
    ],
  },
  {
    id: 8,
    question: "여행 스타일은?",
    options: [
      { text: "유명 관광지 위주", score: 0 },
      { text: "인생샷 명소 + 맛집", score: 1 },
      { text: "현지인 추천 숨은 장소", score: 2 },
      { text: "관광객 없는 완전 로컬", score: 3 },
    ],
  },
  {
    id: 9,
    question: "브랜드 선호도는?",
    options: [
      { text: "유명 브랜드가 좋아", score: 0 },
      { text: "가성비 좋으면 OK", score: 1 },
      { text: "스몰 브랜드/독립 브랜드", score: 2 },
      { text: "브랜드보다 가치와 스토리", score: 3 },
    ],
  },
  {
    id: 10,
    question: "콘텐츠 소비 패턴은?",
    options: [
      { text: "인기 드라마/영화 위주", score: 0 },
      { text: "평점 좋은 것 위주", score: 1 },
      { text: "독립영화/아트하우스", score: 2 },
      { text: "아무도 모르는 걸 발굴해서 봄", score: 3 },
    ],
  },
  {
    id: 11,
    question: "내가 좋아하는 게 유행하면?",
    options: [
      { text: "같이 즐기는 사람 많아서 좋아!", score: 0 },
      { text: "반갑긴 함", score: 1 },
      { text: "좀 아쉬움...", score: 2 },
      { text: "유행 전이 더 좋았어", score: 3 },
    ],
  },
  {
    id: 12,
    question: "환경/사회 이슈에 대해?",
    options: [
      { text: "관심은 있지만 실천은 어려움", score: 0 },
      { text: "할 수 있는 것만 함", score: 1 },
      { text: "비건/제로웨이스트 실천 중", score: 2 },
      { text: "라이프스타일 자체가 가치 중심", score: 3 },
    ],
  },
];

export const results: Record<string, HipsterLevelResult> = {
  'mainstream': {
    type: 'mainstream',
    title: '메인스트림 시민',
    emoji: '👍',
    level: 15,
    description: '대중적인 것을 자연스럽게 즐기는 타입! 유행을 따라가는 게 편하고, 많은 사람들과 공감대를 형성하기 좋아요.',
    characteristics: ['대중 친화적', '트렌드 팔로워', '접근성 중시', '공감대 형성 쉬움'],
    lifestyle: ['인기 콘텐츠 소비', '유명 맛집 탐방', '대중적 취미'],
    favoriteThings: ['인기 브랜드', '차트 음악', '핫한 카페'],
    socialMedia: '인스타그램 활발 사용, 인기 콘텐츠 공유',
    musicTaste: 'K-POP, 팝송, 인기 차트',
    fashionStyle: '트렌디한 대중 브랜드',
    hangoutSpots: ['스타벅스', '인기 맛집', '핫플레이스'],
    tips: ['대중적인 것도 좋은 것!', '가끔은 새로운 시도도 해보세요', '당신만의 취향도 개발해보기'],
  },
  'casual': {
    type: 'casual',
    title: '캐주얼 힙스터',
    emoji: '😎',
    level: 40,
    description: '적당히 힙한 감각을 가진 타입! 유행도 따르지만 나만의 취향도 있어요. 균형 잡힌 감성의 소유자!',
    characteristics: ['균형 잡힌 취향', '적당한 개성', '유연함', '열린 마음'],
    lifestyle: ['감성 카페 탐방', '좋은 것 큐레이션', '다양한 시도'],
    favoriteThings: ['분위기 좋은 카페', '추천받은 음악', '감성 인테리어'],
    socialMedia: '인스타 감성 피드, 가끔 핫플 공유',
    musicTaste: '다양한 장르, 플레이리스트 큐레이션',
    fashionStyle: '기본 + 포인트 아이템',
    hangoutSpots: ['분위기 좋은 카페', '숨은 맛집', '전시회'],
    tips: ['좋은 균형이에요!', '더 다양한 시도 해보기', '당신만의 시그니처 만들기'],
  },
  'hipster': {
    type: 'hipster',
    title: '정통 힙스터',
    emoji: '🎸',
    level: 65,
    description: '본격 힙스터 감성! 남들과 다른 것을 추구하고, 독특한 취향을 가지고 있어요. 트렌드보다 가치를 중시합니다.',
    characteristics: ['독특한 취향', '트렌드 선도', '가치 중시', '큐레이션 능력'],
    lifestyle: ['인디 문화 소비', '빈티지 수집', '로컬 지지'],
    favoriteThings: ['숨은 로스터리', '인디 뮤지션', '빈티지 아이템'],
    socialMedia: 'VSCO, 비하인드 더 신 콘텐츠',
    musicTaste: '인디/얼터너티브, 해외 언더그라운드',
    fashionStyle: '빈티지 믹스, 유니크 브랜드',
    hangoutSpots: ['로컬 카페', '독립서점', '갤러리'],
    tips: ['당신의 감성을 존중해요!', '가끔은 대중적인 것도 OK', '취향 공유도 즐거워요'],
  },
  'ultra': {
    type: 'ultra',
    title: '울트라 힙스터',
    emoji: '🌿',
    level: 85,
    description: '극한의 힙스터! 유행하는 건 피하고, 아무도 모르는 것만 찾아다녀요. "그거 유행하기 전에 나 했어"가 입버릇.',
    characteristics: ['극도의 개성', '안티 메인스트림', '발굴 능력', '가치 지향'],
    lifestyle: ['마이너 문화 심취', '지속가능한 소비', '로컬 퍼스트'],
    favoriteThings: ['아무도 모르는 브랜드', '희귀 바이닐', '제로웨이스트'],
    socialMedia: '메인스트림 SNS 안 함 또는 극소수만 팔로우',
    musicTaste: '해외 인디, 레어 바이닐, 라이브 공연',
    fashionStyle: '스몰 브랜드, 빈티지 올드',
    hangoutSpots: ['숨은 공방', '로컬 펍', '아는 사람만 아는 곳'],
    tips: ['멋진 취향이지만...', '가끔은 공유의 즐거움도 느껴보세요', '힙함도 집착하면 덜 힙해요'],
  },
  'legendary': {
    type: 'legendary',
    title: '힙함을 초월한 존재',
    emoji: '🦄',
    level: 100,
    description: '힙함을 넘어선 경지! 유행 따위는 안중에도 없고, 완전히 자기만의 세계에 살고 있어요. 존경스러우면서도 미스터리한 존재.',
    characteristics: ['완전한 독자 노선', '트렌드 무관심', '자기 세계', '미스터리'],
    lifestyle: ['완전 자급자족', '디지털 디톡스', '미니멀 라이프'],
    favoriteThings: ['직접 만든 것', '자연', '고요함'],
    socialMedia: '없음 또는 모름',
    musicTaste: '자연의 소리, 직접 연주',
    fashionStyle: '자기만의 유니폼 또는 핸드메이드',
    hangoutSpots: ['자연', '자기 공간', '알 수 없음'],
    tips: ['당신은 이미 전설이에요', '세상과의 연결도 가끔은 좋아요', '당신의 세계를 공유해주세요'],
  },
};

export function calculateResult(answers: number[]): HipsterLevelResult {
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
    return results['mainstream'];
  } else if (percentage <= 40) {
    return results['casual'];
  } else if (percentage <= 60) {
    return results['hipster'];
  } else if (percentage <= 80) {
    return results['ultra'];
  } else {
    return results['legendary'];
  }
}
