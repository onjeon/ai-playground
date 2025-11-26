// SNS 성격 테스트 - 당신의 SNS 인격은?

export const questions = [
  {
    id: 1,
    question: "SNS에 게시물 올리는 빈도는?",
    options: [
      { text: "매일 올린다", type: "influencer", score: 5 },
      { text: "일주일에 몇 번", type: "active", score: 4 },
      { text: "가끔", type: "casual", score: 2 },
      { text: "거의 안 올린다", type: "lurker", score: 1 },
    ],
  },
  {
    id: 2,
    question: "SNS 프로필 사진은?",
    options: [
      { text: "완벽하게 보정된 셀카", type: "influencer", score: 5 },
      { text: "자연스러운 내 사진", type: "authentic", score: 3 },
      { text: "풍경이나 사물", type: "private", score: 2 },
      { text: "기본 이미지/없음", type: "lurker", score: 1 },
    ],
  },
  {
    id: 3,
    question: "좋아요/댓글 받으면?",
    options: [
      { text: "매우 신경 쓰인다", type: "validation", score: 5 },
      { text: "기분 좋다", type: "active", score: 3 },
      { text: "상관없다", type: "casual", score: 2 },
      { text: "확인 안 한다", type: "lurker", score: 1 },
    ],
  },
  {
    id: 4,
    question: "인스타 스토리 올리는 빈도는?",
    options: [
      { text: "매일 여러 개", type: "influencer", score: 5 },
      { text: "자주 올린다", type: "active", score: 4 },
      { text: "가끔", type: "casual", score: 2 },
      { text: "거의 안 올린다", type: "lurker", score: 1 },
    ],
  },
  {
    id: 5,
    question: "SNS에 올리기 전 나는?",
    options: [
      { text: "완벽하게 편집/보정", type: "perfectionist", score: 5 },
      { text: "약간 다듬는다", type: "active", score: 3 },
      { text: "거의 그대로 올린다", type: "authentic", score: 2 },
      { text: "안 올린다", type: "lurker", score: 1 },
    ],
  },
  {
    id: 6,
    question: "다른 사람 게시물에 반응은?",
    options: [
      { text: "적극적으로 좋아요/댓글", type: "social", score: 5 },
      { text: "친한 친구만", type: "selective", score: 3 },
      { text: "좋아요만", type: "passive", score: 2 },
      { text: "구경만", type: "lurker", score: 1 },
    ],
  },
  {
    id: 7,
    question: "팔로워 수가 중요한가?",
    options: [
      { text: "매우 중요하다", type: "influencer", score: 5 },
      { text: "신경 쓰인다", type: "validation", score: 4 },
      { text: "별로 안 중요", type: "casual", score: 2 },
      { text: "모른다/상관없다", type: "lurker", score: 1 },
    ],
  },
  {
    id: 8,
    question: "SNS에 올리는 내용은?",
    options: [
      { text: "일상/셀카/여행", type: "influencer", score: 5 },
      { text: "관심사/취미", type: "authentic", score: 3 },
      { text: "특별한 일만", type: "casual", score: 2 },
      { text: "안 올린다", type: "lurker", score: 1 },
    ],
  },
  {
    id: 9,
    question: "SNS 확인 빈도는?",
    options: [
      { text: "수시로 (1시간에 여러 번)", type: "addicted", score: 5 },
      { text: "하루에 여러 번", type: "active", score: 4 },
      { text: "하루에 한두 번", type: "casual", score: 2 },
      { text: "가끔", type: "detached", score: 1 },
    ],
  },
  {
    id: 10,
    question: "SNS 없이 살 수 있나?",
    options: [
      { text: "절대 못 산다", type: "addicted", score: 5 },
      { text: "좀 어렵다", type: "active", score: 3 },
      { text: "할 수 있다", type: "casual", score: 2 },
      { text: "이미 거의 안 한다", type: "detached", score: 1 },
    ],
  },
  {
    id: 11,
    question: "SNS 속 나 vs 실제 나?",
    options: [
      { text: "완전 다른 모습", type: "persona", score: 5 },
      { text: "약간 포장", type: "filtered", score: 3 },
      { text: "거의 같다", type: "authentic", score: 2 },
      { text: "SNS에 나를 안 올린다", type: "private", score: 1 },
    ],
  },
  {
    id: 12,
    question: "SNS 하는 이유는?",
    options: [
      { text: "인정/관심 받기 위해", type: "validation", score: 5 },
      { text: "소통/연결 유지", type: "social", score: 4 },
      { text: "정보 습득", type: "consumer", score: 2 },
      { text: "딱히 안 한다", type: "detached", score: 1 },
    ],
  },
];

export interface SnsPersonalityResult {
  type: string;
  title: string;
  emoji: string;
  snsScore: number;
  description: string;
  characteristics: string[];
  postingStyle: string;
  interactionStyle: string;
  strengths: string[];
  watchOuts: string[];
  detoxTips: string[];
  healthyUsageTips: string[];
}

const resultTypes: Record<string, SnsPersonalityResult> = {
  influencer: {
    type: 'influencer',
    title: 'SNS 인플루언서',
    emoji: '📸',
    snsScore: 95,
    description: '당신은 SNS의 헤비 유저! 콘텐츠 제작과 공유를 즐기고, 팔로워와의 소통을 중요시해요. SNS가 일상의 큰 부분을 차지합니다.',
    characteristics: ['활발한 포스팅', '팔로워 중시', '콘텐츠 제작', '트렌드 민감'],
    postingStyle: '매일 여러 개의 퀄리티 콘텐츠',
    interactionStyle: '적극적 소통, 댓글 답변',
    strengths: ['표현력', '트렌드 파악', '네트워킹'],
    watchOuts: ['SNS 중독', '현실 vs 온라인 괴리', '비교 함정'],
    detoxTips: ['하루 사용 시간 제한', '오프라인 시간 확보'],
    healthyUsageTips: ['진정성 유지', '숫자에 집착 말기', '정신 건강 챙기기'],
  },
  active: {
    type: 'active',
    title: '활발한 유저',
    emoji: '👍',
    snsScore: 70,
    description: '당신은 SNS를 활발하게 사용하는 편! 적당히 포스팅하고, 친구들과 소통해요. 건강한 사용 패턴에 가깝습니다.',
    characteristics: ['정기적 포스팅', '친구와 소통', '균형잡힘'],
    postingStyle: '일주일에 몇 번, 자연스럽게',
    interactionStyle: '친한 친구 중심 소통',
    strengths: ['관계 유지', '정보 습득', '균형'],
    watchOuts: ['과사용 경계', '비교 주의'],
    detoxTips: ['알림 줄이기', '정해진 시간에만 확인'],
    healthyUsageTips: ['목적 있는 사용', '휴식 시간 확보'],
  },
  casual: {
    type: 'casual',
    title: '캐주얼 유저',
    emoji: '📱',
    snsScore: 45,
    description: '당신은 SNS를 가볍게 사용하는 타입! 가끔 올리고, 가끔 구경해요. 온라인보다 오프라인에 더 집중합니다.',
    characteristics: ['가벼운 사용', '오프라인 중심', '필요할 때만'],
    postingStyle: '특별한 일이 있을 때만',
    interactionStyle: '가볍게 좋아요 정도',
    strengths: ['균형 잡힌 생활', 'SNS 스트레스 적음'],
    watchOuts: ['연결감 부족할 수 있음'],
    detoxTips: ['현재 상태 유지해도 OK'],
    healthyUsageTips: ['필요한 소통은 유지'],
  },
  lurker: {
    type: 'lurker',
    title: '조용한 관찰자',
    emoji: '👀',
    snsScore: 20,
    description: '당신은 SNS를 구경만 하는 타입! 포스팅은 거의 안 하고 조용히 살펴봐요. 프라이버시를 중요시합니다.',
    characteristics: ['관찰자', '프라이버시 중시', '조용함'],
    postingStyle: '거의 포스팅 안 함',
    interactionStyle: '구경만',
    strengths: ['프라이버시 보호', 'SNS 스트레스 없음'],
    watchOuts: ['관계 단절 주의'],
    detoxTips: ['필요 없음 - 이미 분리됨'],
    healthyUsageTips: ['필요한 연결은 다른 방법으로'],
  },
  addicted: {
    type: 'addicted',
    title: 'SNS 중독',
    emoji: '📵',
    snsScore: 85,
    description: '당신은 SNS에 과도하게 의존하고 있을 수 있어요. 확인 강박, 알림 불안 등이 있다면 디지털 디톡스가 필요합니다.',
    characteristics: ['과사용', '확인 강박', '알림 불안', 'FOMO'],
    postingStyle: '과도함',
    interactionStyle: '항상 연결됨',
    strengths: ['빠른 정보 습득'],
    watchOuts: ['중독', '정신 건강', '현실 도피', '비교 우울'],
    detoxTips: ['알림 끄기', '앱 삭제 기간', '사용 시간 제한'],
    healthyUsageTips: ['전문 상담 고려', '오프라인 취미', '대면 관계 강화'],
  },
};

export function calculateSnsPersonalityResult(answers: number[]): SnsPersonalityResult {
  const typeScores: Record<string, number> = {
    influencer: 0,
    active: 0,
    casual: 0,
    lurker: 0,
    addicted: 0,
  };

  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      totalScore += question.options[answerIndex].score;
      
      if (type === 'influencer' || type === 'perfectionist') typeScores.influencer += 1;
      if (type === 'active' || type === 'social') typeScores.active += 1;
      if (type === 'casual' || type === 'selective') typeScores.casual += 1;
      if (type === 'lurker' || type === 'private') typeScores.lurker += 1;
      if (type === 'addicted' || type === 'validation') typeScores.addicted += 1;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  // 중독 체크
  if (typeScores.addicted >= 4) {
    return { ...resultTypes.addicted, snsScore: Math.round(percentage) };
  }

  if (percentage >= 75) {
    return { ...resultTypes.influencer, snsScore: Math.round(percentage) };
  } else if (percentage >= 50) {
    return { ...resultTypes.active, snsScore: Math.round(percentage) };
  } else if (percentage >= 30) {
    return { ...resultTypes.casual, snsScore: Math.round(percentage) };
  } else {
    return { ...resultTypes.lurker, snsScore: Math.round(percentage) };
  }
}
