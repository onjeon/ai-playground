// MBTI 룸메이트 궁합 테스트 - 함께 살기 좋은 MBTI 조합

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
    question: "궁합을 알고 싶은 룸메이트의 MBTI는?",
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
    question: "당신의 생활 패턴은?",
    options: [
      { text: "아침형 인간 (일찍 자고 일찍 일어남)", lifestyle: "morning" },
      { text: "저녁형 인간 (늦게 자고 늦게 일어남)", lifestyle: "night" },
      { text: "불규칙 (그때그때 다름)", lifestyle: "irregular" },
      { text: "유연함 (맞출 수 있음)", lifestyle: "flexible" },
    ],
  },
  {
    id: 4,
    question: "청소/정리 스타일은?",
    options: [
      { text: "항상 깔끔하게 유지", cleanliness: "neat" },
      { text: "주기적으로 한 번에 청소", cleanliness: "periodic" },
      { text: "어질러도 신경 안 쓰임", cleanliness: "messy" },
      { text: "내 공간만 깔끔하면 됨", cleanliness: "personal" },
    ],
  },
  {
    id: 5,
    question: "집에서의 소통 스타일은?",
    options: [
      { text: "자주 대화하고 함께 시간 보내기", social: "active" },
      { text: "필요할 때만 소통", social: "moderate" },
      { text: "각자 방에서 지내기", social: "independent" },
      { text: "분위기에 따라 다름", social: "flexible" },
    ],
  },
];

export interface MBTIRoommateResult {
  myType: string;
  partnerType: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  roommateScore: number;
  roommateLevel: string;
  livingStrengths: string[];
  potentialIssues: string[];
  houseRules: string[];
  conflictTips: string[];
  idealSetup: string;
}

// 룸메이트 궁합 매트릭스 (생활 관점)
const roommateMatrix: Record<string, Record<string, number>> = {
  // I 유형들은 대체로 I 유형과 잘 맞음 (조용한 생활)
  ISTJ: { ISTJ: 90, ISFJ: 88, INTJ: 85, INFJ: 80, ISTP: 82, ISFP: 78, INTP: 80, INFP: 72, ESTJ: 75, ESFJ: 72, ENTJ: 70, ENFJ: 68, ESTP: 65, ESFP: 60, ENTP: 62, ENFP: 58 },
  ISFJ: { ISFJ: 90, ISTJ: 88, INFJ: 85, ESFJ: 82, ISFP: 85, INFP: 80, INTJ: 75, INTP: 70, ESTJ: 72, ENFJ: 78, ENTJ: 65, ISTP: 68, ESTP: 62, ESFP: 70, ENTP: 58, ENFP: 72 },
  INFJ: { INFJ: 88, INFP: 90, ISFJ: 85, INTJ: 85, ENFJ: 80, ISFP: 82, INTP: 78, ISTJ: 80, ENFP: 75, ESFJ: 72, ENTJ: 68, ISTP: 65, ENTP: 70, ESTJ: 62, ESFP: 60, ESTP: 55 },
  INTJ: { INTJ: 90, INTP: 92, ISTJ: 85, INFJ: 85, ISTP: 80, ENTJ: 78, INFP: 75, ISFJ: 75, ENTP: 75, ISFP: 68, ESTJ: 70, ENFJ: 65, ESTP: 62, ESFJ: 60, ENFP: 65, ESFP: 50 },
  ISTP: { ISTP: 90, INTP: 88, ISTJ: 82, INTJ: 80, ESTP: 78, ISFP: 75, ISFJ: 68, INFJ: 65, ESTJ: 72, ENTJ: 68, ENTP: 72, INFP: 62, ESFP: 68, ESFJ: 58, ENFJ: 55, ENFP: 58 },
  ISFP: { ISFP: 90, INFP: 88, ISFJ: 85, ESFP: 82, INFJ: 82, ISTP: 75, ESFJ: 78, ISTJ: 78, ENFP: 75, ENFJ: 72, INTP: 65, INTJ: 68, ESTP: 68, ESTJ: 62, ENTP: 58, ENTJ: 55 },
  INFP: { INFP: 88, INFJ: 90, ISFP: 88, ENFP: 82, INTP: 78, ISFJ: 80, ENFJ: 78, INTJ: 75, ISTP: 62, ISTJ: 72, ESFJ: 70, ESFP: 72, ENTP: 68, ENTJ: 60, ESTP: 55, ESTJ: 58 },
  INTP: { INTP: 92, INTJ: 92, ISTP: 88, INFP: 78, ENTP: 80, INFJ: 78, ISTJ: 80, ISFP: 65, ENTJ: 72, ISFJ: 70, ESTP: 68, ESTJ: 65, ENFP: 62, ESFJ: 58, ENFJ: 60, ESFP: 52 },
  // E 유형들
  ESTP: { ESTP: 85, ISTP: 78, ESFP: 85, ESTJ: 75, ENTP: 78, ENTJ: 72, ISTJ: 65, ISFP: 68, ESFJ: 70, ISFJ: 62, ENFP: 65, INTJ: 62, INTP: 68, INFJ: 55, ENFJ: 62, INFP: 55 },
  ESFP: { ESFP: 88, ESTP: 85, ISFP: 82, ESFJ: 80, ENFP: 82, ISFJ: 70, ENFJ: 75, ISTP: 68, ESTJ: 62, INFP: 72, INFJ: 60, ISTJ: 60, ENTP: 65, ENTJ: 58, INTP: 52, INTJ: 50 },
  ENFP: { ENFP: 85, INFP: 82, ESFP: 82, ENFJ: 85, ENTP: 80, INFJ: 75, ISFP: 75, ESFJ: 72, ENTJ: 68, ISFJ: 72, INTJ: 65, ESTP: 65, INTP: 62, ESTJ: 58, ISTP: 58, ISTJ: 58 },
  ENTP: { ENTP: 85, INTP: 80, ENTJ: 82, ENFP: 80, ESTP: 78, INTJ: 75, INFJ: 70, ISTP: 72, ESTJ: 65, ENFJ: 70, ESFP: 65, ISTJ: 62, INFP: 68, ISFP: 58, ESFJ: 55, ISFJ: 58 },
  ESTJ: { ESTJ: 88, ISTJ: 75, ENTJ: 80, ESFJ: 78, ISTP: 72, ESTP: 75, ISFJ: 72, INTJ: 70, ENFJ: 68, INTP: 65, INFJ: 62, ISFP: 62, ESFP: 62, ENTP: 65, INFP: 58, ENFP: 60 },
  ESFJ: { ESFJ: 90, ISFJ: 82, ESFP: 80, ESTJ: 78, ISFP: 78, ENFJ: 82, ESTP: 70, ISTJ: 72, ENFP: 72, INFJ: 72, INFP: 70, ISTP: 58, ENTJ: 65, INTJ: 60, ENTP: 55, INTP: 58 },
  ENFJ: { ENFJ: 88, INFJ: 80, ESFJ: 82, ENFP: 85, ISFJ: 78, INFP: 78, ENTJ: 75, ISFP: 72, ESFP: 75, INTJ: 65, ENTP: 70, ISTJ: 68, ESTJ: 68, INTP: 60, ESTP: 62, ISTP: 55 },
  ENTJ: { ENTJ: 85, INTJ: 78, ENTP: 82, ESTJ: 80, ENFJ: 75, INTP: 72, ISTP: 68, ESTP: 72, ISTJ: 70, INFJ: 68, ENFP: 68, ESFJ: 65, ISFJ: 65, ESFP: 58, INFP: 60, ISFP: 55 },
};

function getRoommateLevel(score: number): string {
  if (score >= 88) return "환상의 룸메이트";
  if (score >= 78) return "편안한 동거인";
  if (score >= 68) return "무난한 룸메이트";
  if (score >= 58) return "적응 필요한 관계";
  return "도전적인 동거";
}

export function getRoommateCompatibility(myType: string, partnerType: string): MBTIRoommateResult {
  const score = roommateMatrix[myType]?.[partnerType] || 65;
  const level = getRoommateLevel(score);

  const livingStyles: Record<string, { habit: string; need: string }> = {
    ISTJ: { habit: "규칙적이고 정돈된", need: "조용하고 깔끔한 환경" },
    ISFJ: { habit: "배려심 있고 꼼꼼한", need: "안정적이고 따뜻한 분위기" },
    INFJ: { habit: "조용하고 사려 깊은", need: "프라이버시와 평화" },
    INTJ: { habit: "독립적이고 체계적인", need: "개인 공간과 조용함" },
    ISTP: { habit: "자유롭고 실용적인", need: "간섭 없는 자유" },
    ISFP: { habit: "온화하고 예술적인", need: "편안하고 자유로운 분위기" },
    INFP: { habit: "감성적이고 창의적인", need: "이해받는 느낌" },
    INTP: { habit: "분석적이고 독립적인", need: "혼자만의 시간" },
    ESTP: { habit: "활동적이고 즉흥적인", need: "자유와 재미" },
    ESFP: { habit: "사교적이고 활기찬", need: "즐거운 분위기" },
    ENFP: { habit: "열정적이고 자유로운", need: "영감과 소통" },
    ENTP: { habit: "호기심 많고 논쟁적인", need: "지적 자극" },
    ESTJ: { habit: "체계적이고 책임감 있는", need: "질서와 규칙" },
    ESFJ: { habit: "돌봄형이고 사교적인", need: "조화로운 관계" },
    ENFJ: { habit: "배려심 많고 따뜻한", need: "의미 있는 연결" },
    ENTJ: { habit: "효율적이고 결단력 있는", need: "목표와 성취" },
  };

  const myStyle = livingStyles[myType] || { habit: "독특한", need: "개인적인 환경" };
  const partnerStyle = livingStyles[partnerType] || { habit: "특별한", need: "자신만의 공간" };

  const level_key = score >= 80 ? "high" : score >= 65 ? "medium" : "low";

  const strengthsMap: Record<string, string[]> = {
    high: [
      "생활 리듬이 잘 맞음",
      "서로의 공간을 존중함",
      "갈등이 적고 편안함",
    ],
    medium: [
      "다름을 이해하려 노력할 수 있음",
      "서로에게 배울 점이 있음",
      "룰을 정하면 잘 지낼 수 있음",
    ],
    low: [
      "다양한 관점을 경험할 수 있음",
      "성장의 기회가 될 수 있음",
      "명확한 규칙이 있으면 가능",
    ],
  };

  const issuesMap: Record<string, string[]> = {
    high: [
      "너무 비슷해서 자극이 없을 수 있음",
      "같은 것을 원할 때 충돌",
    ],
    medium: [
      "청소/정리 기준 차이",
      "소음/활동량 차이",
      "손님 초대 관련 의견 차이",
    ],
    low: [
      "생활 리듬 충돌 (아침형 vs 저녁형)",
      "개인 공간 vs 공유 공간 기준 다름",
      "소통 방식 차이로 오해 가능",
    ],
  };

  const rulesMap: Record<string, string[]> = {
    high: [
      "기본적인 예의만 지키면 OK",
      "자연스럽게 룰이 만들어짐",
    ],
    medium: [
      "청소 당번제 도입 추천",
      "조용한 시간대 정하기",
      "공용 물건 사용 규칙 정하기",
    ],
    low: [
      "상세한 하우스 룰 필수",
      "정기적인 룸메이트 미팅",
      "갈등 해결 프로세스 합의",
      "개인 공간 명확히 구분",
    ],
  };

  const tipsMap: Record<string, string[]> = {
    high: [
      "좋은 관계지만 가끔 환기도 필요해요",
      "서로 당연하게 여기지 말고 감사 표현하세요",
    ],
    medium: [
      "다른 점을 문제가 아닌 차이로 받아들이세요",
      "불편한 점은 쌓지 말고 바로 이야기하세요",
    ],
    low: [
      "기대치를 낮추고 현실적으로 접근하세요",
      "최소한의 룰만 정하고 각자 영역을 존중하세요",
    ],
  };

  const setupMap: Record<string, string> = {
    high: "함께 쓰는 공간에서도 편안하게 지낼 수 있어요",
    medium: "각자 방이 있고, 공용 공간 사용 규칙이 있으면 좋아요",
    low: "개인 공간이 명확히 구분된 구조가 필수예요",
  };

  return {
    myType,
    partnerType,
    title: `${myType} & ${partnerType}`,
    emoji: score >= 85 ? "🏠" : score >= 72 ? "🛋️" : score >= 60 ? "🚪" : "🔑",
    subtitle: level,
    description: `${myType}은(는) ${myStyle.habit} 생활 스타일로 '${myStyle.need}'이(가) 필요해요. ${partnerType}은(는) ${partnerStyle.habit} 스타일로 '${partnerStyle.need}'을(를) 원해요.`,
    roommateScore: score,
    roommateLevel: level,
    livingStrengths: strengthsMap[level_key],
    potentialIssues: issuesMap[level_key],
    houseRules: rulesMap[level_key],
    conflictTips: tipsMap[level_key],
    idealSetup: setupMap[level_key],
  };
}

export function calculateResult(answers: Array<{ myType?: string; partnerType?: string }>): MBTIRoommateResult {
  const myType = answers.find(a => a.myType)?.myType || "INFP";
  const partnerType = answers.find(a => a.partnerType)?.partnerType || "INFJ";
  return getRoommateCompatibility(myType, partnerType);
}
