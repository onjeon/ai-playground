// 상사 유형 테스트 - 당신은 어떤 유형의 상사/리더일까요?

export interface BossTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface BossTypeResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  managementStyle: string[];
  strengths: string[];
  weaknesses: string[];
  teamReaction: string;
  communicationStyle: string;
  feedbackStyle: string;
  stressResponse: string;
  idealTeam: string[];
  tips: string[];
  famousBoss: string;
}

export const questions: BossTypeQuestion[] = [
  {
    id: 1,
    question: "팀원이 실수했을 때 대응은?",
    options: [
      { text: "왜 이런 실수가 났는지 분석하고 교육", scores: { mentor: 2, perfectionist: 1 } },
      { text: "괜찮아, 다음에 잘하면 돼", scores: { friend: 3 } },
      { text: "책임 소재를 명확히 해야지", scores: { dictator: 2, perfectionist: 1 } },
      { text: "시스템을 바꿔서 재발 방지", scores: { visionary: 2, mentor: 1 } },
    ],
  },
  {
    id: 2,
    question: "업무 지시 스타일은?",
    options: [
      { text: "구체적으로 하나하나 알려줌", scores: { perfectionist: 3 } },
      { text: "방향만 제시하고 자율에 맡김", scores: { visionary: 3 } },
      { text: "함께 의논해서 결정", scores: { friend: 2, mentor: 1 } },
      { text: "내 방식대로 따라오면 됨", scores: { dictator: 3 } },
    ],
  },
  {
    id: 3,
    question: "팀 회식이나 모임에서?",
    options: [
      { text: "일 얘기보다 친해지는 시간", scores: { friend: 3 } },
      { text: "비전과 목표를 공유하는 기회", scores: { visionary: 3 } },
      { text: "팀원들 고민 듣고 조언", scores: { mentor: 3 } },
      { text: "회식은 업무의 연장", scores: { dictator: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 4,
    question: "팀원의 의견이 내 생각과 다르면?",
    options: [
      { text: "설득력 있으면 수용", scores: { visionary: 2, mentor: 1 } },
      { text: "논의는 하되 최종 결정은 내가", scores: { dictator: 2, perfectionist: 1 } },
      { text: "다수결이나 합의로 결정", scores: { friend: 3 } },
      { text: "왜 그렇게 생각하는지 가르쳐줌", scores: { mentor: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 5,
    question: "성과가 안 나올 때?",
    options: [
      { text: "원인 분석하고 교육/훈련 강화", scores: { mentor: 3 } },
      { text: "동기부여하고 분위기 띄움", scores: { friend: 2, visionary: 1 } },
      { text: "목표와 전략 재점검", scores: { visionary: 3 } },
      { text: "압박과 관리 강화", scores: { dictator: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 6,
    question: "팀원 칭찬은?",
    options: [
      { text: "잘하면 바로바로 칭찬", scores: { friend: 3 } },
      { text: "기대 이상일 때 인정", scores: { perfectionist: 3 } },
      { text: "성장 포인트와 함께 피드백", scores: { mentor: 3 } },
      { text: "칭찬은 아껴야 효과 있음", scores: { dictator: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 7,
    question: "새로운 프로젝트 시작할 때?",
    options: [
      { text: "비전과 방향성 공유", scores: { visionary: 3 } },
      { text: "세부 계획과 일정 수립", scores: { perfectionist: 3 } },
      { text: "팀원들 의견 수렴", scores: { friend: 2, mentor: 1 } },
      { text: "역할 배분하고 실행", scores: { dictator: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 8,
    question: "팀원이 퇴사 의사를 밝히면?",
    options: [
      { text: "왜 그런지 듣고 조언/상담", scores: { mentor: 3 } },
      { text: "잡아야 할 인재면 설득", scores: { visionary: 2, dictator: 1 } },
      { text: "아쉽지만 결정 존중", scores: { friend: 3 } },
      { text: "후임자 준비와 인수인계", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 9,
    question: "리더로서 가장 중요한 것은?",
    options: [
      { text: "팀의 성장과 역량 개발", scores: { mentor: 3 } },
      { text: "목표 달성과 성과", scores: { perfectionist: 2, dictator: 1 } },
      { text: "비전과 방향 제시", scores: { visionary: 3 } },
      { text: "좋은 팀 분위기", scores: { friend: 3 } },
    ],
  },
  {
    id: 10,
    question: "팀원들과의 관계는?",
    options: [
      { text: "친한 친구 같은 사이", scores: { friend: 3 } },
      { text: "존경받는 멘토", scores: { mentor: 3 } },
      { text: "명확한 상하관계", scores: { dictator: 3 } },
      { text: "비전을 함께하는 동료", scores: { visionary: 3 } },
    ],
  },
  {
    id: 11,
    question: "위기 상황에서 리더십은?",
    options: [
      { text: "빠른 의사결정과 지시", scores: { dictator: 3 } },
      { text: "팀원들과 함께 해결책 모색", scores: { friend: 2, mentor: 1 } },
      { text: "큰 그림에서 방향 재설정", scores: { visionary: 3 } },
      { text: "원인 분석 후 체계적 대응", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 12,
    question: "팀원 평가 기준은?",
    options: [
      { text: "성장 가능성과 태도", scores: { mentor: 3 } },
      { text: "결과와 성과", scores: { perfectionist: 2, dictator: 1 } },
      { text: "팀워크와 협업", scores: { friend: 3 } },
      { text: "비전 공유와 주도성", scores: { visionary: 3 } },
    ],
  },
];

export const results: Record<string, BossTypeResult> = {
  mentor: {
    type: 'mentor',
    title: '성장 멘토형 상사',
    emoji: '🎓',
    description: '팀원의 성장을 최우선으로 생각하는 멘토형 리더! 가르치고 이끌어주는 것을 좋아하며, 팀원들의 커리어 발전에 진심입니다.',
    characteristics: ['육성형 리더', '피드백 중시', '인내심 많음', '교육적 접근'],
    managementStyle: ['1:1 면담 자주', '성장 피드백', '실패도 학습 기회', '역량 개발 지원'],
    strengths: ['팀원 성장', '충성도 높음', '후배 양성', '조직 문화 형성'],
    weaknesses: ['성과 압박에 약함', '과보호 경향', '의사결정 느릴 수 있음'],
    teamReaction: '배울 점 많은 상사, 롤모델로 생각함',
    communicationStyle: '경청 후 조언, 질문으로 생각 유도',
    feedbackStyle: '구체적이고 발전적인 피드백',
    stressResponse: '팀원 상담으로 해소, 함께 해결',
    idealTeam: ['성장 의지 있는 주니어', '배움에 열린 사람', '피드백 수용력'],
    tips: ['가끔은 답을 직접 줘도 OK', '성과도 챙기세요', '모든 사람이 성장을 원하진 않아요'],
    famousBoss: '잭 웰치, 빌 캠벨',
  },
  friend: {
    type: 'friend',
    title: '친구 같은 상사',
    emoji: '🤝',
    description: '팀원들과 친구처럼 지내는 친화형 리더! 분위기 메이커이고, 팀의 화합과 행복을 중시합니다.',
    characteristics: ['친근함', '수평적 관계', '분위기 메이커', '공감 능력'],
    managementStyle: ['함께 의논', '칭찬 많음', '팀 활동 중시', '갈등 조정'],
    strengths: ['팀 분위기 좋음', '소통 원활', '이직률 낮음', '팀워크'],
    weaknesses: ['권위 부족', '엄격한 피드백 어려움', '성과 압박 약함'],
    teamReaction: '편한 상사, 같이 일하기 좋음',
    communicationStyle: '친근하고 격 없는 대화',
    feedbackStyle: '부드럽게, 긍정 위주',
    stressResponse: '팀원들과 나누며 해소',
    idealTeam: ['자기 주도적인 사람', '팀워크 좋은 사람', '책임감 있는 사람'],
    tips: ['가끔은 단호함도 필요해요', '친해도 기준은 있어야 해요', '리더로서의 거리감도 중요'],
    famousBoss: '리처드 브랜슨',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '완벽주의 상사',
    emoji: '✅',
    description: '디테일과 퀄리티를 중시하는 완벽주의 리더! 높은 기준을 가지고 있고, 팀의 결과물에 자부심을 느낍니다.',
    characteristics: ['높은 기준', '디테일 중시', '체계적', '품질 우선'],
    managementStyle: ['세부 관리', '명확한 기준', '꼼꼼한 검토', '프로세스 중시'],
    strengths: ['높은 품질', '체계적 업무', '실수 적음', '전문성'],
    weaknesses: ['마이크로 매니징', '팀원 압박', '유연성 부족'],
    teamReaction: '배울 점 많지만 빡셈, 긴장됨',
    communicationStyle: '구체적이고 명확하게',
    feedbackStyle: '디테일한 수정 사항 전달',
    stressResponse: '더 꼼꼼해지고 관리 강화',
    idealTeam: ['꼼꼼한 사람', '기준 높은 사람', '성장 의지 있는 사람'],
    tips: ['가끔은 80%도 OK', '팀원 자율성도 주세요', '칭찬도 자주 해주세요'],
    famousBoss: '스티브 잡스',
  },
  visionary: {
    type: 'visionary',
    title: '비전 제시형 상사',
    emoji: '🚀',
    description: '큰 그림을 그리고 방향을 제시하는 비전형 리더! 팀에 영감을 주고, 미래를 함께 만들어갑니다.',
    characteristics: ['비전 제시', '영감 부여', '전략적 사고', '변화 주도'],
    managementStyle: ['방향 제시', '자율 위임', '혁신 장려', '장기 관점'],
    strengths: ['동기부여', '방향성 명확', '변화 리더', '영감'],
    weaknesses: ['디테일 놓침', '실행력 부족', '현실과 괴리'],
    teamReaction: '따르고 싶은 리더, 비전에 동조',
    communicationStyle: '영감을 주는 스토리텔링',
    feedbackStyle: '큰 방향에서의 피드백',
    stressResponse: '더 큰 그림에서 해결책 모색',
    idealTeam: ['실행력 있는 사람', '비전 공감하는 사람', '자기 주도적인 사람'],
    tips: ['디테일도 챙기세요', '실행 가능성 검토', '팀원 고충도 들어주세요'],
    famousBoss: '일론 머스크, 스티브 잡스',
  },
  dictator: {
    type: 'dictator',
    title: '카리스마 독재형 상사',
    emoji: '👑',
    description: '강력한 카리스마로 이끄는 독재형 리더! 빠른 의사결정과 명확한 지시로 성과를 만들어냅니다.',
    characteristics: ['강한 카리스마', '빠른 결정', '명확한 지시', '성과 중심'],
    managementStyle: ['톱다운 방식', '빠른 실행', '결과 중시', '책임 명확'],
    strengths: ['빠른 의사결정', '명확한 방향', '위기 대응력', '성과 창출'],
    weaknesses: ['소통 부족', '팀원 의견 무시', '이직률 높음', '갈등 유발'],
    teamReaction: '무섭지만 능력 있는 상사',
    communicationStyle: '일방향, 지시 위주',
    feedbackStyle: '직접적이고 단호함',
    stressResponse: '더 강하게 밀어붙임',
    idealTeam: ['실행력 좋은 사람', '지시 수용력', '프로페셔널'],
    tips: ['팀원 의견도 들어보세요', '소통 시간 늘리기', '칭찬과 인정도 필요해요'],
    famousBoss: '잭 마, 트래비스 칼라닉',
  },
};

export function calculateResult(answers: number[]): BossTypeResult {
  const scores: Record<string, number> = {
    mentor: 0,
    friend: 0,
    perfectionist: 0,
    visionary: 0,
    dictator: 0,
  };
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([key, value]) => {
        scores[key] += value;
      });
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0];

  return results[maxType] || results['mentor'];
}
