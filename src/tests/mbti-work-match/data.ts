// MBTI 직장 동료 궁합 테스트 - 업무에서의 MBTI 케미

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
    question: "궁합을 알고 싶은 동료의 MBTI는?",
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
    question: "이 동료와의 관계는?",
    options: [
      { text: "같은 팀 동료", relation: "team" },
      { text: "상사/부하 관계", relation: "hierarchy" },
      { text: "다른 부서 협업 관계", relation: "crossteam" },
      { text: "프로젝트 파트너", relation: "project" },
    ],
  },
  {
    id: 4,
    question: "업무 스타일에서 가장 중요하게 생각하는 것은?",
    options: [
      { text: "효율성과 결과", value: "efficiency" },
      { text: "팀워크와 소통", value: "teamwork" },
      { text: "창의성과 혁신", value: "creativity" },
      { text: "안정성과 체계", value: "stability" },
    ],
  },
  {
    id: 5,
    question: "갈등이 생겼을 때 당신의 스타일은?",
    options: [
      { text: "논리적으로 해결책 제시", value: "logical" },
      { text: "감정을 배려하며 조율", value: "emotional" },
      { text: "상황을 피하고 시간을 둠", value: "avoid" },
      { text: "직접적으로 문제 제기", value: "direct" },
    ],
  },
];

export interface MBTIWorkMatchResult {
  myType: string;
  partnerType: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  workScore: number;
  workLevel: string;
  teamStrengths: string[];
  potentialConflicts: string[];
  bestProjects: string[];
  communicationTips: string[];
  collaborationAdvice: string;
}

// 업무 궁합 매트릭스
const workMatrix: Record<string, Record<string, number>> = {
  INTJ: { ENTJ: 95, INTP: 92, ENTP: 90, INTJ: 88, INFJ: 82, ISTJ: 80, ENFJ: 75, ESTJ: 72, ENFP: 70, ISTP: 68, INFP: 65, ESTP: 62, ISFJ: 58, ESFJ: 55, ISFP: 50, ESFP: 45 },
  ENTJ: { INTJ: 95, ENTP: 92, INTP: 88, ENTJ: 85, ESTJ: 82, ENFJ: 80, ISTJ: 78, ISTP: 72, ESTP: 70, INFJ: 68, ENFP: 65, ESFJ: 62, ISFJ: 58, INFP: 55, ISFP: 50, ESFP: 48 },
  INTP: { INTJ: 92, ENTP: 95, ENTJ: 88, INTP: 85, ISTP: 80, INFJ: 75, ISTJ: 72, INFP: 70, ESTP: 68, ENFP: 65, ESTJ: 62, ENFJ: 60, ISFP: 55, ESFJ: 52, ISFJ: 50, ESFP: 45 },
  ENTP: { INTP: 95, INTJ: 90, ENTJ: 92, ENTP: 85, ENFP: 82, INFJ: 78, ESTP: 75, ISTP: 72, ENFJ: 70, INFP: 68, ESTJ: 62, ISTJ: 60, ESFP: 55, ISFP: 52, ESFJ: 50, ISFJ: 48 },
  ISTJ: { ESTJ: 92, ISFJ: 88, ISTJ: 90, INTJ: 80, ISTP: 78, ENTJ: 78, ESFJ: 75, ESTP: 72, INTP: 72, INFJ: 68, ENTP: 60, ENFJ: 62, ISFP: 58, ENFP: 55, INFP: 52, ESFP: 50 },
  ESTJ: { ISTJ: 92, ENTJ: 82, ESTJ: 88, ISFJ: 80, ESFJ: 78, ISTP: 75, ESTP: 75, INTJ: 72, INTP: 62, ENFJ: 65, ENTP: 62, INFJ: 58, ISFP: 55, ENFP: 52, INFP: 48, ESFP: 52 },
  ISFJ: { ESFJ: 92, ISTJ: 88, ISFJ: 85, ESTJ: 80, INFJ: 78, ISFP: 75, ENFJ: 72, ESTP: 68, ISTP: 65, ESFP: 68, INFP: 62, INTJ: 58, ENFP: 55, ENTJ: 58, INTP: 50, ENTP: 48 },
  ESFJ: { ISFJ: 92, ESTJ: 78, ESFJ: 85, ENFJ: 82, ISFP: 78, ESFP: 75, ISTJ: 75, ESTP: 70, INFJ: 68, ISTP: 62, ENFP: 65, INFP: 60, INTJ: 55, ENTJ: 62, INTP: 52, ENTP: 50 },
  INFJ: { ENFJ: 92, INFP: 88, INTJ: 82, INFJ: 85, ISFJ: 78, ENFP: 80, INTP: 75, ENTP: 78, ISTJ: 68, ESFJ: 68, ISFP: 65, ENTJ: 68, ESTJ: 58, ESTP: 55, ISTP: 52, ESFP: 50 },
  ENFJ: { INFJ: 92, ENFP: 88, ESFJ: 82, ENFJ: 85, ENTJ: 80, INFP: 78, ISFJ: 72, ENTP: 70, INTJ: 75, ESTJ: 65, ESFP: 68, ISFP: 65, INTP: 60, ESTP: 58, ISTP: 52, ISTJ: 62 },
  INFP: { INFJ: 88, ENFP: 85, ENFJ: 78, INFP: 82, INTP: 70, INTJ: 65, ISFP: 75, ISFJ: 62, ENTP: 68, ESFJ: 60, ENTJ: 55, ISTP: 55, ESFP: 58, ESTJ: 48, ESTP: 52, ISTJ: 52 },
  ENFP: { INFJ: 80, ENFJ: 88, ENTP: 82, ENFP: 85, INFP: 85, INTJ: 70, ESFP: 75, ESFJ: 65, ENTJ: 65, ISFP: 72, INTP: 65, ESTP: 62, ISFJ: 55, ISTP: 55, ESTJ: 52, ISTJ: 55 },
  ISTP: { ESTP: 92, ISTP: 88, ISTJ: 78, INTJ: 68, INTP: 80, ESTJ: 75, ENTJ: 72, ISFP: 70, ENTP: 72, ESFP: 68, ISFJ: 65, INFJ: 52, ESFJ: 62, INFP: 55, ENFP: 55, ENFJ: 52 },
  ESTP: { ISTP: 92, ESTP: 88, ESTJ: 75, ENTJ: 70, ESFP: 82, ENTP: 75, ISTJ: 72, INTJ: 62, INTP: 68, ISFP: 72, ESFJ: 70, ISFJ: 68, ENFP: 62, ENFJ: 58, INFP: 52, INFJ: 55 },
  ISFP: { ESFP: 88, ISFP: 85, ISFJ: 75, ESFJ: 78, ISTP: 70, INFP: 75, ESTP: 72, INFJ: 65, ENFP: 72, ENFJ: 65, ISTJ: 58, ESTJ: 55, INTJ: 50, INTP: 55, ENTJ: 50, ENTP: 52 },
  ESFP: { ISFP: 88, ESTP: 82, ESFP: 85, ESFJ: 75, ENFP: 75, ISFJ: 68, ENFJ: 68, ISTP: 68, ESTJ: 52, ISTJ: 50, INFP: 58, ENTP: 55, INFJ: 50, INTJ: 45, INTP: 48, ENTJ: 48 },
};

function getWorkLevel(score: number): string {
  if (score >= 90) return "최고의 업무 파트너";
  if (score >= 80) return "시너지 좋은 협업 관계";
  if (score >= 70) return "무난한 업무 관계";
  if (score >= 60) return "조율이 필요한 관계";
  if (score >= 50) return "업무 스타일 차이 큼";
  return "협업에 노력이 많이 필요";
}

export function getWorkCompatibility(myType: string, partnerType: string): MBTIWorkMatchResult {
  const score = workMatrix[myType]?.[partnerType] || 60;
  const level = getWorkLevel(score);

  const workStyles: Record<string, { strength: string; weakness: string }> = {
    INTJ: { strength: "전략적 기획", weakness: "팀 협업" },
    ENTJ: { strength: "리더십", weakness: "세부사항 관리" },
    INTP: { strength: "분석/문제해결", weakness: "실행/마감" },
    ENTP: { strength: "아이디어 발상", weakness: "후속 작업" },
    ISTJ: { strength: "체계적 실행", weakness: "유연한 대응" },
    ESTJ: { strength: "프로젝트 관리", weakness: "감정 배려" },
    ISFJ: { strength: "꼼꼼한 지원", weakness: "주도적 제안" },
    ESFJ: { strength: "팀 분위기 조성", weakness: "비판적 피드백" },
    INFJ: { strength: "비전 제시", weakness: "실무 디테일" },
    ENFJ: { strength: "동기부여", weakness: "객관적 평가" },
    INFP: { strength: "창의적 콘텐츠", weakness: "마감 관리" },
    ENFP: { strength: "혁신적 제안", weakness: "반복 업무" },
    ISTP: { strength: "문제 해결", weakness: "장기 계획" },
    ESTP: { strength: "위기 대응", weakness: "서류 작업" },
    ISFP: { strength: "디자인/감각", weakness: "발표/주장" },
    ESFP: { strength: "프레젠테이션", weakness: "데이터 분석" },
  };

  const myStyle = workStyles[myType] || { strength: "다양한 업무", weakness: "특정 영역" };
  const partnerStyle = workStyles[partnerType] || { strength: "다양한 업무", weakness: "특정 영역" };

  const level_key = score >= 80 ? "high" : score >= 60 ? "medium" : "low";

  const strengthsMap: Record<string, string[]> = {
    high: [
      "서로의 강점이 시너지를 냄",
      "의사소통이 원활함",
      "업무 분담이 자연스러움",
    ],
    medium: [
      "다른 관점에서 피드백 가능",
      "서로 배울 점이 있음",
      "노력하면 좋은 결과 가능",
    ],
    low: [
      "서로 다른 강점 보유",
      "역할 분담이 명확하면 가능",
      "다양성이 프로젝트에 도움될 수 있음",
    ],
  };

  const conflictsMap: Record<string, string[]> = {
    high: [
      "비슷한 약점이 있을 수 있음",
      "경쟁 관계가 될 가능성",
    ],
    medium: [
      "소통 방식 차이로 오해 가능",
      "우선순위 판단 기준 다름",
    ],
    low: [
      "업무 속도/방식 차이 큼",
      "가치관 충돌 가능성",
    ],
  };

  const projectsMap: Record<string, string[]> = {
    high: ["전략 기획 프로젝트", "혁신 프로젝트", "리더십이 필요한 업무"],
    medium: ["팀 프로젝트", "크로스펑셔널 업무", "중장기 과제"],
    low: ["역할이 명확한 프로젝트", "단기 과제", "각자 영역이 구분된 업무"],
  };

  const tipsMap: Record<string, string[]> = {
    high: [
      "서로의 강점을 최대한 활용하세요",
      "정기적인 소통으로 방향성을 맞추세요",
    ],
    medium: [
      "서로의 업무 스타일을 존중하세요",
      "명확한 역할 분담이 중요해요",
    ],
    low: [
      "기대치를 미리 조율하세요",
      "문서로 소통하면 오해가 줄어요",
    ],
  };

  return {
    myType,
    partnerType,
    title: `${myType} & ${partnerType}`,
    emoji: score >= 85 ? "🤝" : score >= 70 ? "💼" : score >= 55 ? "📊" : "⚙️",
    subtitle: level,
    description: `${myType}의 강점은 '${myStyle.strength}'이고, ${partnerType}의 강점은 '${partnerStyle.strength}'입니다. 이 조합은 ${level}으로 평가됩니다.`,
    workScore: score,
    workLevel: level,
    teamStrengths: strengthsMap[level_key],
    potentialConflicts: conflictsMap[level_key],
    bestProjects: projectsMap[level_key],
    communicationTips: tipsMap[level_key],
    collaborationAdvice: score >= 75 
      ? "서로의 강점을 살려 최고의 결과를 만들어보세요!" 
      : score >= 55 
        ? "서로 다른 점을 이해하고 존중하면 좋은 협업이 가능해요."
        : "명확한 역할 분담과 문서화된 소통이 성공의 열쇠입니다.",
  };
}

export function calculateResult(answers: Array<{ myType?: string; partnerType?: string }>): MBTIWorkMatchResult {
  const myType = answers.find(a => a.myType)?.myType || "INTJ";
  const partnerType = answers.find(a => a.partnerType)?.partnerType || "ENTJ";
  return getWorkCompatibility(myType, partnerType);
}
