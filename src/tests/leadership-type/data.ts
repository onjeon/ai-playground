// 리더십 유형 테스트

export const questions = [
  {
    id: 1,
    question: "팀 목표를 달성하기 위해 가장 중요한 것은?",
    options: [
      { text: "명확한 비전과 방향 제시", leadership: "visionary" },
      { text: "팀원들과의 협력과 소통", leadership: "democratic" },
      { text: "체계적인 계획과 실행", leadership: "analytical" },
      { text: "팀원 개개인의 성장 지원", leadership: "coaching" },
    ],
  },
  {
    id: 2,
    question: "중요한 결정을 내릴 때 주로 어떻게 하나요?",
    options: [
      { text: "직감과 비전을 믿고 결정", leadership: "visionary" },
      { text: "팀원들의 의견을 모아서 결정", leadership: "democratic" },
      { text: "데이터와 분석을 기반으로 결정", leadership: "analytical" },
      { text: "팀원들의 역량을 고려해 결정", leadership: "coaching" },
    ],
  },
  {
    id: 3,
    question: "팀원이 실수했을 때 어떻게 대처하나요?",
    options: [
      { text: "실수에서 배울 점을 찾고 앞으로의 방향 제시", leadership: "visionary" },
      { text: "팀 전체가 함께 해결책을 논의", leadership: "democratic" },
      { text: "원인을 분석하고 재발 방지책 마련", leadership: "analytical" },
      { text: "1:1로 피드백하고 성장할 수 있도록 지도", leadership: "coaching" },
    ],
  },
  {
    id: 4,
    question: "새로운 프로젝트를 시작할 때?",
    options: [
      { text: "큰 그림과 최종 목표를 먼저 공유", leadership: "visionary" },
      { text: "팀원들과 함께 계획을 수립", leadership: "democratic" },
      { text: "상세한 일정과 마일스톤 설정", leadership: "analytical" },
      { text: "각 팀원에게 맞는 역할 배분", leadership: "coaching" },
    ],
  },
  {
    id: 5,
    question: "팀 회의에서 당신의 역할은?",
    options: [
      { text: "방향을 제시하고 동기부여", leadership: "visionary" },
      { text: "모든 의견을 듣고 합의 도출", leadership: "democratic" },
      { text: "안건을 정리하고 효율적 진행", leadership: "analytical" },
      { text: "팀원들이 의견을 내도록 격려", leadership: "coaching" },
    ],
  },
  {
    id: 6,
    question: "위기 상황에서 어떻게 대처하나요?",
    options: [
      { text: "침착하게 새로운 방향 제시", leadership: "visionary" },
      { text: "팀원들과 함께 해결책 모색", leadership: "democratic" },
      { text: "체계적으로 원인 분석 후 대응", leadership: "analytical" },
      { text: "팀원들을 안심시키고 역할 재조정", leadership: "coaching" },
    ],
  },
  {
    id: 7,
    question: "팀원의 성과를 평가할 때 중점적으로 보는 것은?",
    options: [
      { text: "목표 달성에 대한 기여도", leadership: "visionary" },
      { text: "팀워크와 협업 능력", leadership: "democratic" },
      { text: "객관적인 성과 지표", leadership: "analytical" },
      { text: "개인의 성장과 발전", leadership: "coaching" },
    ],
  },
  {
    id: 8,
    question: "동기부여를 위해 주로 사용하는 방법은?",
    options: [
      { text: "비전과 꿈을 공유하며 영감 주기", leadership: "visionary" },
      { text: "팀의 일원으로서 소속감 강조", leadership: "democratic" },
      { text: "명확한 보상과 인센티브 제공", leadership: "analytical" },
      { text: "개인 목표 설정과 성장 기회 제공", leadership: "coaching" },
    ],
  },
  {
    id: 9,
    question: "갈등이 생겼을 때 어떻게 해결하나요?",
    options: [
      { text: "더 큰 목표를 상기시켜 갈등 해소", leadership: "visionary" },
      { text: "양측의 의견을 듣고 중재", leadership: "democratic" },
      { text: "사실에 기반해 공정하게 판단", leadership: "analytical" },
      { text: "각자의 입장을 이해하고 성장 기회로 전환", leadership: "coaching" },
    ],
  },
  {
    id: 10,
    question: "가장 이상적인 팀 분위기는?",
    options: [
      { text: "열정적이고 도전적인 분위기", leadership: "visionary" },
      { text: "화목하고 소통이 활발한 분위기", leadership: "democratic" },
      { text: "효율적이고 체계적인 분위기", leadership: "analytical" },
      { text: "서로 배우고 성장하는 분위기", leadership: "coaching" },
    ],
  },
  {
    id: 11,
    question: "리더로서 가장 중요하게 생각하는 가치는?",
    options: [
      { text: "비전과 혁신", leadership: "visionary" },
      { text: "협력과 조화", leadership: "democratic" },
      { text: "효율과 성과", leadership: "analytical" },
      { text: "성장과 발전", leadership: "coaching" },
    ],
  },
  {
    id: 12,
    question: "팀원에게 업무를 위임할 때?",
    options: [
      { text: "큰 방향만 주고 자율성 부여", leadership: "visionary" },
      { text: "팀원과 상의해서 역할 분담", leadership: "democratic" },
      { text: "명확한 기준과 기대치 설정", leadership: "analytical" },
      { text: "역량에 맞춰 도전적인 과제 부여", leadership: "coaching" },
    ],
  },
];

export interface LeadershipTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  leadershipTips: string[];
  idealTeam: string;
  famousPeople: string;
  growthAreas: string[];
}

const resultTypes: Record<string, LeadershipTypeResult> = {
  visionary: {
    type: 'visionary',
    title: '비저너리 리더',
    emoji: '🔮',
    subtitle: '큰 그림을 그리는 영감의 리더',
    description: '당신은 큰 비전을 제시하고 팀을 영감으로 이끄는 비저너리 리더입니다. 미래를 내다보는 통찰력과 변화를 두려워하지 않는 용기가 있어요. 팀원들에게 꿈을 심어주고 불가능해 보이는 목표도 가능하게 만드는 능력이 있습니다.',
    characteristics: ['통찰력', '영감', '용기', '창의성', '열정'],
    strengths: ['비전 제시 능력', '변화 주도', '팀 동기부여', '창의적 문제해결'],
    weaknesses: ['세부사항 놓칠 수 있음', '현실성 부족할 때', '조급함'],
    leadershipTips: ['실행 계획도 함께 제시하기', '팀원 의견 경청하기', '작은 성과도 축하하기'],
    idealTeam: '실행력 있는 팀원들과 함께할 때 시너지 발휘',
    famousPeople: '스티브 잡스, 일론 머스크, 정주영',
    growthAreas: ['세부 계획 수립 능력', '인내심', '실행력 보완'],
  },
  democratic: {
    type: 'democratic',
    title: '민주형 리더',
    emoji: '🤝',
    subtitle: '함께 만들어가는 협력의 리더',
    description: '당신은 팀원들의 의견을 존중하고 함께 결정하는 민주형 리더입니다. 소통과 협력을 중시하며, 팀의 화합을 이끌어내는 능력이 있어요. 모든 팀원이 주인의식을 갖도록 만들고, 집단지성을 활용해 더 나은 결과를 만들어냅니다.',
    characteristics: ['소통', '협력', '포용성', '균형감', '신뢰'],
    strengths: ['팀 화합 능력', '다양한 의견 수렴', '높은 참여도 유도', '신뢰 구축'],
    weaknesses: ['결정 속도 느림', '때로 우유부단', '갈등 회피 경향'],
    leadershipTips: ['때로는 단호한 결정 필요', '마감 시간 설정하기', '본인 의견도 명확히 표현'],
    idealTeam: '적극적이고 의견 표현이 활발한 팀원들',
    famousPeople: '넬슨 만델라, 에이브러햄 링컨',
    growthAreas: ['결단력', '시간 관리', '갈등 관리 능력'],
  },
  analytical: {
    type: 'analytical',
    title: '분석형 리더',
    emoji: '📊',
    subtitle: '데이터로 증명하는 전략가 리더',
    description: '당신은 데이터와 분석을 기반으로 합리적인 결정을 내리는 분석형 리더입니다. 체계적인 계획과 효율적인 실행에 강점이 있어요. 감정에 휘둘리지 않고 객관적인 판단을 내리며, 리스크 관리와 성과 측정에 능합니다.',
    characteristics: ['논리적', '체계적', '객관적', '신중함', '효율성'],
    strengths: ['합리적 의사결정', '리스크 관리', '효율적 자원 배분', '성과 측정'],
    weaknesses: ['유연성 부족', '감정적 교류 어려움', '과도한 분석 경향'],
    leadershipTips: ['팀원 감정도 고려하기', '직감도 때로는 신뢰', '완벽보다 실행'],
    idealTeam: '책임감 있고 자기 관리가 되는 팀원들',
    famousPeople: '빌 게이츠, 워런 버핏',
    growthAreas: ['감성 리더십', '유연성', '빠른 결정력'],
  },
  coaching: {
    type: 'coaching',
    title: '코칭형 리더',
    emoji: '🌱',
    subtitle: '성장을 이끄는 멘토 리더',
    description: '당신은 팀원 개개인의 성장과 발전을 돕는 코칭형 리더입니다. 각 팀원의 강점을 발견하고 잠재력을 끌어내는 능력이 있어요. 단기 성과보다 장기적인 성장에 투자하며, 팀원들에게 신뢰받는 멘토 역할을 합니다.',
    characteristics: ['경청', '공감', '인내심', '관찰력', '지지'],
    strengths: ['인재 육성', '동기부여', '신뢰 관계 구축', '팀원 역량 개발'],
    weaknesses: ['성과 압박 시 어려움', '때로 과보호', '결과보다 과정 중시'],
    leadershipTips: ['성과와 성장 균형 잡기', '때로는 엄격함 필요', '본인 성장도 챙기기'],
    idealTeam: '성장 의지가 있고 피드백 수용하는 팀원들',
    famousPeople: '필 잭슨, 오프라 윈프리',
    growthAreas: ['성과 관리', '결단력', '전략적 사고'],
  },
};

export function calculateLeadershipTypeResult(answers: number[]): LeadershipTypeResult {
  const leadershipScores: Record<string, number> = {
    visionary: 0,
    democratic: 0,
    analytical: 0,
    coaching: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];
    leadershipScores[option.leadership] += 1;
  });

  let maxType = 'democratic';
  let maxScore = 0;

  Object.entries(leadershipScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
