// MBTI 친구 궁합 테스트 - 우정에서의 MBTI 케미

export const questions = [
  {
    id: 1,
    question: "당신의 MBTI는 무엇인가요?",
    options: [
      { text: "ISTJ", myType: "ISTJ" },
      { text: "ISFJ", myType: "ISFJ" },
      { text: "INFJ", myType: "INFJ" },
      { text: "INTJ", myType: "INTJ" },
      { text: "ISTP", myType: "ISTP" },
      { text: "ISFP", myType: "ISFP" },
      { text: "INFP", myType: "INFP" },
      { text: "INTP", myType: "INTP" },
      { text: "ESTP", myType: "ESTP" },
      { text: "ESFP", myType: "ESFP" },
      { text: "ENFP", myType: "ENFP" },
      { text: "ENTP", myType: "ENTP" },
      { text: "ESTJ", myType: "ESTJ" },
      { text: "ESFJ", myType: "ESFJ" },
      { text: "ENFJ", myType: "ENFJ" },
      { text: "ENTJ", myType: "ENTJ" },
    ],
  },
  {
    id: 2,
    question: "궁합을 알고 싶은 친구의 MBTI는?",
    options: [
      { text: "ISTJ", partnerType: "ISTJ" },
      { text: "ISFJ", partnerType: "ISFJ" },
      { text: "INFJ", partnerType: "INFJ" },
      { text: "INTJ", partnerType: "INTJ" },
      { text: "ISTP", partnerType: "ISTP" },
      { text: "ISFP", partnerType: "ISFP" },
      { text: "INFP", partnerType: "INFP" },
      { text: "INTP", partnerType: "INTP" },
      { text: "ESTP", partnerType: "ESTP" },
      { text: "ESFP", partnerType: "ESFP" },
      { text: "ENFP", partnerType: "ENFP" },
      { text: "ENTP", partnerType: "ENTP" },
      { text: "ESTJ", partnerType: "ESTJ" },
      { text: "ESFJ", partnerType: "ESFJ" },
      { text: "ENFJ", partnerType: "ENFJ" },
      { text: "ENTJ", partnerType: "ENTJ" },
    ],
  },
  {
    id: 3,
    question: "친구와 얼마나 오래 알고 지냈나요?",
    options: [
      { text: "1년 미만", duration: "short" },
      { text: "1-3년", duration: "medium" },
      { text: "3-10년", duration: "long" },
      { text: "10년 이상", duration: "verylong" },
    ],
  },
  {
    id: 4,
    question: "친구와 주로 어떤 활동을 함께 하나요?",
    options: [
      { text: "맛집/카페 탐방", activity: "social" },
      { text: "깊은 대화 나누기", activity: "deep" },
      { text: "취미 활동 (운동, 게임 등)", activity: "hobby" },
      { text: "그냥 같이 있는 것 자체가 좋음", activity: "presence" },
    ],
  },
  {
    id: 5,
    question: "친구에게 고민을 털어놓는 편인가요?",
    options: [
      { text: "뭐든 다 말하는 편", sharing: "open" },
      { text: "어느 정도는 말함", sharing: "moderate" },
      { text: "잘 말 안 하는 편", sharing: "reserved" },
      { text: "듣는 역할이 더 많음", sharing: "listener" },
    ],
  },
];

export interface MBTIFriendMatchResult {
  myType: string;
  partnerType: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  friendshipScore: number;
  friendshipLevel: string;
  strengths: string[];
  challenges: string[];
  activities: string[];
  tips: string[];
  famousDuo: string;
}

// 친구 궁합 매트릭스 (우정 관점)
const friendshipMatrix: Record<string, Record<string, number>> = {
  INFP: { ENFJ: 95, INFJ: 90, ENFP: 88, INTJ: 85, INTP: 82, ENTJ: 80, INFP: 78, ENTP: 75, ISFP: 72, ESFJ: 68, ISFJ: 65, ESTP: 60, ESFP: 58, ISTJ: 55, ESTJ: 50, ISTP: 48 },
  ENFP: { INFJ: 95, INTJ: 92, ENFJ: 88, INFP: 88, ENTJ: 85, ENTP: 82, ENFP: 78, INTP: 75, ESFP: 70, ISFJ: 65, ESFJ: 62, ISTP: 58, ESTP: 55, ISFP: 52, ISTJ: 48, ESTJ: 45 },
  INFJ: { ENFP: 95, ENTP: 90, INTJ: 88, INFP: 90, ENFJ: 85, INTP: 82, INFJ: 78, ENTJ: 75, ISFJ: 70, ISFP: 68, ESFJ: 65, ISTJ: 60, ESTP: 55, ESFP: 52, ISTP: 48, ESTJ: 45 },
  INTJ: { ENFP: 92, ENTP: 90, INFJ: 88, ENTJ: 85, INTP: 85, INFP: 85, INTJ: 80, ENFJ: 78, ISTJ: 72, ISTP: 70, ESTJ: 65, ISFJ: 62, ESTP: 58, ISFP: 55, ESFJ: 50, ESFP: 45 },
  INTP: { ENTP: 92, INTJ: 85, ENTJ: 82, INFP: 82, INFJ: 82, ENFP: 75, INTP: 78, ENFJ: 72, ISTP: 70, ISTJ: 68, ESTP: 65, ESTJ: 60, ISFP: 55, ISFJ: 52, ESFP: 48, ESFJ: 45 },
  ENFJ: { INFP: 95, INFJ: 85, ENFP: 88, INTJ: 78, ENTJ: 82, ENTP: 78, ENFJ: 80, INTP: 72, ESFJ: 75, ISFJ: 72, ESFP: 68, ISFP: 65, ESTJ: 60, ESTP: 55, ISTJ: 52, ISTP: 48 },
  ENTJ: { INTP: 82, INTJ: 85, ENTP: 88, ENFP: 85, INFJ: 75, ENFJ: 82, ENTJ: 80, INFP: 80, ESTJ: 75, ISTP: 70, ESTP: 68, ISTJ: 65, ISFJ: 58, ESFJ: 55, ISFP: 50, ESFP: 48 },
  ENTP: { INFJ: 90, INTJ: 90, INTP: 92, ENFP: 82, ENTJ: 88, ENFJ: 78, ENTP: 80, INFP: 75, ESTP: 72, ISTP: 70, ESTJ: 62, ESFP: 58, ISTJ: 55, ISFP: 52, ESFJ: 48, ISFJ: 45 },
  ISFP: { ESFJ: 85, ENFJ: 65, ESFP: 82, ISFJ: 78, INFP: 72, ESTP: 75, ISFP: 75, ISTP: 72, ESTJ: 68, INFJ: 68, ISTJ: 65, ENFP: 52, ENTJ: 50, INTJ: 55, INTP: 55, ENTP: 52 },
  ESFP: { ISFJ: 85, ESTP: 88, ESFJ: 82, ISFP: 82, ENFJ: 68, ESFP: 78, ENFP: 70, ISTP: 75, ESTJ: 65, ISTJ: 62, INFP: 58, INFJ: 52, ENTJ: 48, INTJ: 45, INTP: 48, ENTP: 58 },
  ISFJ: { ESFP: 85, ESFJ: 88, ISFP: 78, ESTJ: 82, ISTJ: 85, ISFJ: 80, ENFJ: 72, INFJ: 70, ESTP: 68, INFP: 65, ISTP: 62, ENFP: 65, ENTJ: 58, INTJ: 62, INTP: 52, ENTP: 45 },
  ESFJ: { ISFP: 85, ISFJ: 88, ESFP: 82, ESTJ: 85, ENFJ: 75, ESFJ: 82, ISTJ: 78, ESTP: 72, INFJ: 65, ENFP: 62, INFP: 68, ISTP: 58, ENTJ: 55, INTJ: 50, INTP: 45, ENTP: 48 },
  ISTP: { ESTP: 90, ISTP: 85, ISTJ: 78, INTP: 70, INTJ: 70, ISFP: 72, ENTJ: 70, ESTJ: 72, ESFP: 75, ENTP: 70, ISFJ: 62, INFP: 48, ESFJ: 58, ENFP: 58, INFJ: 48, ENFJ: 48 },
  ESTP: { ISTP: 90, ESTP: 88, ESFP: 88, ESTJ: 78, ENTJ: 68, ENTP: 72, ISTJ: 72, ISFP: 75, ESFJ: 72, INTJ: 58, INTP: 65, ISFJ: 68, ENFP: 55, INFP: 60, ENFJ: 55, INFJ: 55 },
  ISTJ: { ISFJ: 85, ESTJ: 88, ISTJ: 85, ISTP: 78, INTJ: 72, ESFJ: 78, ESTP: 72, INTP: 68, ISFP: 65, ENTJ: 65, INFJ: 60, ESFP: 62, ENFJ: 52, INFP: 55, ENTP: 55, ENFP: 48 },
  ESTJ: { ISTJ: 88, ISFJ: 82, ESFJ: 85, ENTJ: 75, ISTP: 72, ESTJ: 82, ESTP: 78, INTJ: 65, INTP: 60, ISFP: 68, ESFP: 65, ENTP: 62, INFJ: 45, ENFJ: 60, INFP: 50, ENFP: 45 },
};

// 우정 레벨 판정
function getFriendshipLevel(score: number): string {
  if (score >= 90) return "소울메이트급 베프";
  if (score >= 80) return "죽이 잘 맞는 절친";
  if (score >= 70) return "편한 좋은 친구";
  if (score >= 60) return "나쁘지 않은 사이";
  if (score >= 50) return "노력이 필요한 관계";
  return "서로 다른 세계 사람";
}

// 궁합 결과 생성
export function getCompatibilityResult(myType: string, partnerType: string): MBTIFriendMatchResult {
  const score = friendshipMatrix[myType]?.[partnerType] || 65;
  const level = getFriendshipLevel(score);
  
  // 유형별 특성 데이터
  const typeData: Record<string, { trait: string; style: string }> = {
    INFP: { trait: "이상주의적이고 공감능력 높은", style: "깊은 대화와 감정 공유" },
    ENFP: { trait: "열정적이고 창의적인", style: "새로운 경험과 아이디어 공유" },
    INFJ: { trait: "통찰력 있고 이타적인", style: "의미 있는 대화와 조언" },
    INTJ: { trait: "전략적이고 독립적인", style: "지적인 대화와 목표 공유" },
    INTP: { trait: "분석적이고 호기심 많은", style: "지적 탐구와 토론" },
    ENFJ: { trait: "카리스마 있고 배려심 깊은", style: "응원과 동기부여" },
    ENTJ: { trait: "결단력 있고 리더십 있는", style: "목표 달성과 성장 지원" },
    ENTP: { trait: "재치있고 논쟁을 즐기는", style: "지적 논쟁과 새로운 시도" },
    ISFP: { trait: "예술적이고 온화한", style: "함께하는 시간과 경험" },
    ESFP: { trait: "즉흥적이고 활기찬", style: "재미있는 활동과 파티" },
    ISFJ: { trait: "헌신적이고 세심한", style: "실질적 도움과 챙김" },
    ESFJ: { trait: "사교적이고 따뜻한", style: "모임 주선과 배려" },
    ISTP: { trait: "실용적이고 침착한", style: "함께하는 취미 활동" },
    ESTP: { trait: "모험적이고 대담한", style: "액티비티와 스릴" },
    ISTJ: { trait: "신뢰할 수 있고 책임감 있는", style: "약속과 의리" },
    ESTJ: { trait: "체계적이고 추진력 있는", style: "계획과 실행" },
  };

  const myData = typeData[myType] || { trait: "독특한", style: "다양한 방식" };
  const partnerData = typeData[partnerType] || { trait: "특별한", style: "자신만의 방식" };

  // 강점/도전/활동/팁 생성
  const strengthsMap: Record<string, string[]> = {
    high: [
      "서로의 부족한 부분을 채워줄 수 있음",
      "대화가 끊이지 않는 케미",
      "함께 있으면 에너지가 충전됨",
    ],
    medium: [
      "서로 다른 관점을 공유할 수 있음",
      "배울 점이 많은 관계",
      "적당한 거리감이 편안함",
    ],
    low: [
      "서로 다른 점에서 배울 수 있음",
      "노력하면 깊은 우정 가능",
      "다양성을 경험할 수 있음",
    ],
  };

  const challengesMap: Record<string, string[]> = {
    high: [
      "너무 비슷해서 발전이 없을 수 있음",
      "서로의 단점이 증폭될 가능성",
    ],
    medium: [
      "소통 방식의 차이로 오해 가능",
      "에너지 레벨 차이 조절 필요",
    ],
    low: [
      "서로를 이해하는 데 시간이 필요",
      "공통 관심사 찾기가 어려울 수 있음",
    ],
  };

  const level_key = score >= 80 ? "high" : score >= 60 ? "medium" : "low";

  const activitiesOptions = [
    "카페에서 깊은 대화 나누기",
    "함께 취미 활동하기",
    "여행 계획 세우고 떠나기",
    "맛집 탐방하기",
    "영화나 드라마 같이 보기",
    "운동이나 게임 함께하기",
  ];

  const tipsMap: Record<string, string[]> = {
    high: [
      "좋은 관계지만 가끔 새로운 자극도 필요해요",
      "서로 당연하게 여기지 말고 고마움을 표현하세요",
    ],
    medium: [
      "서로의 다름을 인정하고 존중하세요",
      "오해가 생기면 바로 대화로 풀어요",
    ],
    low: [
      "억지로 맞추려 하지 말고 자연스럽게",
      "공통 관심사를 찾아보세요",
    ],
  };

  const famousDuos: Record<string, string> = {
    high: "유재석 & 박명수, BTS 정국 & 뷔",
    medium: "송강호 & 봉준호, 아이유 & 유인나",
    low: "셜록 홈즈 & 왓슨 (다르지만 최고의 파트너)",
  };

  return {
    myType,
    partnerType,
    title: `${myType} & ${partnerType}`,
    emoji: score >= 85 ? "💜" : score >= 70 ? "💚" : score >= 55 ? "💛" : "🤝",
    subtitle: level,
    description: `${myData.trait} ${myType}와(과) ${partnerData.trait} ${partnerType}의 조합이에요! ${myType}은(는) ${myData.style}을(를) 중시하고, ${partnerType}은(는) ${partnerData.style}을(를) 선호해요.`,
    friendshipScore: score,
    friendshipLevel: level,
    strengths: strengthsMap[level_key],
    challenges: challengesMap[level_key],
    activities: activitiesOptions.slice(0, 3),
    tips: tipsMap[level_key],
    famousDuo: famousDuos[level_key],
  };
}

export function calculateResult(answers: Array<{ myType?: string; partnerType?: string }>): MBTIFriendMatchResult {
  const myType = answers.find(a => a.myType)?.myType || "INFP";
  const partnerType = answers.find(a => a.partnerType)?.partnerType || "ENFJ";
  return getCompatibilityResult(myType, partnerType);
}
