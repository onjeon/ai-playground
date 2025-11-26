// MBTI 궁합 테스트 - 나와 상대방의 MBTI 궁합 분석

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
    question: "궁합을 알고 싶은 상대의 MBTI는?",
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
    question: "이 사람과의 관계는?",
    options: [
      { text: "연인/썸", relation: "romantic" },
      { text: "친구", relation: "friend" },
      { text: "직장동료", relation: "work" },
      { text: "가족", relation: "family" },
    ],
  },
  {
    id: 4,
    question: "관계에서 가장 중요하게 생각하는 것은?",
    options: [
      { text: "깊은 대화와 소통", value: "communication" },
      { text: "함께하는 활동과 경험", value: "activity" },
      { text: "서로에 대한 존중", value: "respect" },
      { text: "안정감과 신뢰", value: "stability" },
    ],
  },
  {
    id: 5,
    question: "갈등이 생겼을 때 나는?",
    options: [
      { text: "바로 대화로 해결하려 함", value: "direct" },
      { text: "시간을 두고 생각 정리 후 대화", value: "process" },
      { text: "상대가 먼저 말할 때까지 기다림", value: "wait" },
      { text: "갈등 자체를 피하려 함", value: "avoid" },
    ],
  },
];

export interface MBTICompatibilityResult {
  myType: string;
  partnerType: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  compatibilityScore: number;
  compatibilityLevel: string;
  strengths: string[];
  challenges: string[];
  communicationTips: string[];
  conflictResolution: string;
  growthTogether: string;
  famousCouples: string;
}

// MBTI 궁합 매트릭스 (점수 기반)
const compatibilityMatrix: Record<string, Record<string, number>> = {
  INFP: { ENFJ: 95, ENTJ: 90, INFJ: 85, ENFP: 80, INTJ: 80, INTP: 75, INFP: 70, ENTP: 70, ISFP: 65, ESFJ: 60, ISFJ: 55, ESTP: 50, ESFP: 50, ISTJ: 45, ESTJ: 40, ISTP: 40 },
  ENFP: { INFJ: 95, INTJ: 90, ENFJ: 85, INFP: 80, ENTJ: 80, ENTP: 75, ENFP: 70, INTP: 70, ESFP: 65, ISFJ: 60, ESFJ: 55, ISTP: 50, ESTP: 50, ISFP: 45, ISTJ: 40, ESTJ: 40 },
  INFJ: { ENFP: 95, ENTP: 90, INFP: 85, INTJ: 85, ENFJ: 80, INFJ: 75, ENTJ: 70, INTP: 70, ISFJ: 65, ESFJ: 60, ISFP: 55, ESTP: 50, ESFP: 50, ISTJ: 45, ISTP: 40, ESTJ: 40 },
  ENFJ: { INFP: 95, INTP: 90, ENFP: 85, INFJ: 80, ENTJ: 80, ENFJ: 75, INTJ: 70, ENTP: 70, ESFJ: 65, ISFJ: 60, ESFP: 55, ISTP: 50, ESTP: 50, ISFP: 45, ESTJ: 40, ISTJ: 40 },
  INTJ: { ENFP: 90, ENTP: 90, INFJ: 85, ENTJ: 80, INFP: 80, INTJ: 75, INTP: 75, ENFJ: 70, ISTJ: 65, ISTP: 60, ESTJ: 55, ESTP: 50, ISFJ: 50, ESFJ: 45, ISFP: 40, ESFP: 40 },
  ENTJ: { INFP: 90, INTP: 90, ENFP: 80, INTJ: 80, ENFJ: 80, ENTJ: 75, ENTP: 75, INFJ: 70, ESTJ: 65, ESTP: 60, ISTJ: 55, ISTP: 50, ESFJ: 50, ISFJ: 45, ESFP: 40, ISFP: 40 },
  INTP: { ENTJ: 90, ENFJ: 90, ENTP: 85, INTJ: 75, INFP: 75, INTP: 70, INFJ: 70, ENFP: 70, ISTP: 65, ESTP: 60, ISTJ: 55, ESTJ: 50, ISFP: 50, ESFP: 45, ISFJ: 40, ESFJ: 40 },
  ENTP: { INFJ: 90, INTJ: 90, INTP: 85, ENFP: 75, ENTJ: 75, ENTP: 70, ENFJ: 70, INFP: 70, ESTP: 65, ISTP: 60, ESTJ: 55, ISTJ: 50, ESFP: 50, ISFP: 45, ESFJ: 40, ISFJ: 40 },
  ISFP: { ESFJ: 90, ESTJ: 85, ENFJ: 80, ISFJ: 75, INFP: 65, ESFP: 65, ISFP: 60, ESTP: 60, ENTJ: 55, ISTP: 55, ENFP: 45, INTJ: 40, INFJ: 40, INTP: 35, ENTP: 35, ISTJ: 50 },
  ESFP: { ISFJ: 90, ISTJ: 85, ESTP: 80, ESFJ: 75, ENFP: 65, ISFP: 65, ESFP: 60, ISTP: 60, ENFJ: 55, ESTJ: 55, INFP: 45, INTP: 40, ENTP: 40, INTJ: 35, INFJ: 35, ENTJ: 50 },
  ISTP: { ESFJ: 90, ESTJ: 85, ESTP: 80, ISFJ: 75, INTP: 65, ISTP: 60, ISFP: 55, ENTJ: 60, ESFP: 60, ENTP: 60, ISTJ: 55, INTJ: 50, INFP: 40, ENFP: 40, INFJ: 35, ENFJ: 35 },
  ESTP: { ISFJ: 90, ISTJ: 85, ISTP: 80, ESFJ: 75, ENTP: 65, ESTP: 60, ESFP: 60, INTP: 60, ENTJ: 60, ESTJ: 55, INTJ: 50, ISFP: 50, INFP: 40, INFJ: 40, ENFP: 35, ENFJ: 35 },
  ISFJ: { ESFP: 90, ESTP: 90, ISFP: 75, ISTJ: 80, ESFJ: 75, ISFJ: 70, ENFJ: 65, INFJ: 65, ESTJ: 60, ISTP: 55, INFP: 55, ENFP: 50, ENTJ: 45, INTJ: 45, ENTP: 40, INTP: 40 },
  ESFJ: { ISFP: 90, ISTP: 90, ESFP: 75, ESTJ: 80, ISFJ: 75, ESFJ: 70, ENFP: 65, INFP: 65, ISTJ: 60, ESTP: 55, ENFJ: 55, INFJ: 50, INTP: 45, ENTP: 45, INTJ: 40, ENTJ: 40 },
  ISTJ: { ESFP: 85, ESTP: 85, ISFJ: 80, ESTJ: 75, ISTJ: 70, ISTP: 65, INTJ: 65, ESFJ: 60, ISFP: 55, ENTJ: 55, INTP: 50, ENTP: 45, INFJ: 45, ENFJ: 40, INFP: 40, ENFP: 35 },
  ESTJ: { ISFP: 85, ISTP: 85, ESFJ: 80, ISTJ: 75, ESTJ: 70, ESTP: 65, ENTJ: 65, ISFJ: 60, ESFP: 55, INTJ: 55, ENTP: 50, INTP: 45, ENFP: 45, INFP: 40, ENFJ: 40, INFJ: 35 },
};

function getCompatibilityLevel(score: number): string {
  if (score >= 90) return '천생연분';
  if (score >= 80) return '환상의 궁합';
  if (score >= 70) return '좋은 궁합';
  if (score >= 60) return '무난한 궁합';
  if (score >= 50) return '노력 필요';
  return '도전적인 관계';
}

function getCompatibilityEmoji(score: number): string {
  if (score >= 90) return '💕';
  if (score >= 80) return '💖';
  if (score >= 70) return '💗';
  if (score >= 60) return '💛';
  if (score >= 50) return '🧡';
  return '💪';
}

const typeDescriptions: Record<string, { strengths: string[], challenges: string[], tips: string[] }> = {
  'NF-NF': {
    strengths: ['깊은 감정적 유대', '서로의 가치관 이해', '영적/철학적 대화 가능', '상대의 감정에 공감'],
    challenges: ['현실적 문제 해결 어려움', '감정 과잉으로 갈등 심화', '결정 장애'],
    tips: ['실용적인 계획 세우기', '감정에만 의존하지 않기', '객관적 시각 유지하기'],
  },
  'NT-NT': {
    strengths: ['지적 대화와 토론', '서로의 아이디어 존중', '효율적인 문제 해결', '독립성 인정'],
    challenges: ['감정 표현 부족', '경쟁 심화', '냉정함으로 상처'],
    tips: ['감정 표현 연습하기', '상대의 감정 인정하기', '협력 vs 경쟁 구분'],
  },
  'NF-NT': {
    strengths: ['감성과 논리의 균형', '서로에게 배움', '깊은 대화 가능', '성장 자극'],
    challenges: ['의사소통 방식 차이', '감정 vs 논리 충돌', '이해 부족'],
    tips: ['상대 방식 존중하기', '번역하듯 소통하기', '차이를 장점으로'],
  },
  'SF-SF': {
    strengths: ['따뜻한 정서적 유대', '실용적 배려', '가정적 가치 공유', '안정적 관계'],
    challenges: ['변화에 대한 저항', '갈등 회피', '성장 정체'],
    tips: ['새로운 시도하기', '갈등 직면하기', '개인 성장 추구'],
  },
  'ST-ST': {
    strengths: ['현실적 문제 해결', '신뢰와 책임감', '효율적 협력', '명확한 소통'],
    challenges: ['감정 무시', '융통성 부족', '지루함'],
    tips: ['감정 나누기', '유연성 기르기', '재미 요소 추가'],
  },
  'SF-ST': {
    strengths: ['실용성 공유', '안정적 관계', '명확한 역할', '신뢰 구축'],
    challenges: ['감정 표현 차이', '배려 vs 효율', '소통 방식'],
    tips: ['감정 언어 배우기', '상대 방식 이해', '균형 찾기'],
  },
  'NF-SF': {
    strengths: ['따뜻한 관계', '배려심', '가치 공유 가능', '정서적 지지'],
    challenges: ['이상 vs 현실', '깊이 차이', '대화 주제'],
    tips: ['현실과 이상 조율', '서로 수준 맞추기', '공통 관심사 찾기'],
  },
  'NT-ST': {
    strengths: ['논리적 소통', '문제 해결력', '효율성 추구', '명확함'],
    challenges: ['감정 소홀', '딱딱한 관계', '융통성'],
    tips: ['감성적 시간 갖기', '유연함 연습', '재미 추가'],
  },
  'NF-ST': {
    strengths: ['균형 잡힌 시각', '서로에게 배움', '다양성', '보완'],
    challenges: ['이해 어려움', '가치관 충돌', '소통 장벽'],
    tips: ['인내심 갖기', '차이 인정', '공통점 찾기'],
  },
  'NT-SF': {
    strengths: ['다른 관점', '성장 기회', '균형', '보완적'],
    challenges: ['소통 어려움', '우선순위 차이', '오해'],
    tips: ['상대 언어로 소통', '판단 보류', '열린 마음'],
  },
};

function getTypeCategory(type: string): string {
  const n = type.includes('N');
  const f = type.includes('F');
  if (n && f) return 'NF';
  if (n && !f) return 'NT';
  if (!n && f) return 'SF';
  return 'ST';
}

export function calculateMBTICompatibilityResult(answers: number[]): MBTICompatibilityResult {
  const mbtiTypes = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];
  
  const myType = mbtiTypes[answers[0]] || 'INFP';
  const partnerType = mbtiTypes[answers[1]] || 'ENFJ';
  
  const score = compatibilityMatrix[myType]?.[partnerType] || 60;
  const level = getCompatibilityLevel(score);
  const emoji = getCompatibilityEmoji(score);
  
  const myCategory = getTypeCategory(myType);
  const partnerCategory = getTypeCategory(partnerType);
  const pairKey = [myCategory, partnerCategory].sort().join('-');
  
  const typeInfo = typeDescriptions[pairKey] || typeDescriptions['NF-NT'];
  
  return {
    myType,
    partnerType,
    title: `${myType} & ${partnerType}`,
    emoji,
    subtitle: level,
    description: `${myType}와 ${partnerType}의 궁합 점수는 ${score}점입니다! ${score >= 70 ? '서로를 잘 이해하고 보완할 수 있는 관계입니다.' : score >= 50 ? '차이점을 이해하고 노력하면 좋은 관계를 만들 수 있습니다.' : '도전적이지만, 서로 다름에서 많이 배울 수 있는 관계입니다.'}`,
    compatibilityScore: score,
    compatibilityLevel: level,
    strengths: typeInfo.strengths,
    challenges: typeInfo.challenges,
    communicationTips: typeInfo.tips,
    conflictResolution: score >= 70 
      ? '서로의 방식을 존중하며 대화하면 쉽게 해결할 수 있어요.'
      : '차이점을 인정하고, 상대의 관점에서 생각해보는 연습이 필요해요.',
    growthTogether: score >= 70
      ? '함께 있으면 자연스럽게 서로의 장점을 배우고 성장할 수 있어요.'
      : '의식적으로 서로에게 배우려는 노력이 필요하지만, 그만큼 크게 성장할 수 있어요.',
    famousCouples: `${myType}와 ${partnerType} 조합의 유명 커플/듀오가 있을 수 있어요!`,
  };
}
