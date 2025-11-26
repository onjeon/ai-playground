// 전 애인 미련 지수 테스트 - 아직 미련이 남아있나요?

export interface ExAttachmentQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface ExAttachmentResult {
  type: string;
  title: string;
  emoji: string;
  level: number;
  description: string;
  symptoms: string[];
  honestTruth: string;
  healingTips: string[];
  doList: string[];
  dontList: string[];
  timeline: string;
  encouragement: string;
}

export const exAttachmentTypes = ['free', 'slight', 'moderate', 'high', 'extreme'] as const;
export type ExAttachmentType = typeof exAttachmentTypes[number];

export const questions: ExAttachmentQuestion[] = [
  {
    id: 1,
    question: "전 애인 SNS를 얼마나 자주 확인해?",
    options: [
      { text: "차단했거나 관심 없음", score: 0 },
      { text: "가끔 궁금해서 한 번씩", score: 1 },
      { text: "일주일에 몇 번은 들어가봄", score: 2 },
      { text: "거의 매일 확인함", score: 3 },
    ],
  },
  {
    id: 2,
    question: "전 애인과의 사진/물건은?",
    options: [
      { text: "다 정리하거나 삭제함", score: 0 },
      { text: "어딘가 있긴 한데 안 봄", score: 1 },
      { text: "가끔 꺼내보게 됨", score: 2 },
      { text: "아직 그대로 간직 중", score: 3 },
    ],
  },
  {
    id: 3,
    question: "전 애인이 새로운 사람을 만난다면?",
    options: [
      { text: "잘 되라고 진심으로 축하", score: 0 },
      { text: "약간 씁쓸하지만 괜찮음", score: 1 },
      { text: "신경 쓰이고 기분 안 좋음", score: 2 },
      { text: "상상만 해도 너무 힘듦", score: 3 },
    ],
  },
  {
    id: 4,
    question: "둘이 자주 가던 장소에 가면?",
    options: [
      { text: "그냥 장소일 뿐, 상관없음", score: 0 },
      { text: "잠깐 생각나지만 금방 잊음", score: 1 },
      { text: "추억이 떠올라 기분이 가라앉음", score: 2 },
      { text: "아예 그 장소는 피해 다님", score: 3 },
    ],
  },
  {
    id: 5,
    question: "잠들기 전 전 애인 생각이?",
    options: [
      { text: "거의 안 남", score: 0 },
      { text: "가끔 문득 생각날 때가 있음", score: 1 },
      { text: "자주 생각나서 잠들기 힘듦", score: 2 },
      { text: "매일 밤 생각남", score: 3 },
    ],
  },
  {
    id: 6,
    question: "전 애인과 연락하고 싶은 충동이?",
    options: [
      { text: "전혀 없음", score: 0 },
      { text: "특별한 날에 가끔", score: 1 },
      { text: "자주 느끼지만 참음", score: 2 },
      { text: "수시로 느끼고 실제로 연락한 적 있음", score: 3 },
    ],
  },
  {
    id: 7,
    question: "새로운 사람을 만날 때?",
    options: [
      { text: "전 애인 생각 없이 집중함", score: 0 },
      { text: "가끔 비교하게 되지만 넘어감", score: 1 },
      { text: "자꾸 전 애인이랑 비교하게 됨", score: 2 },
      { text: "새로운 사람 만날 마음이 안 생김", score: 3 },
    ],
  },
  {
    id: 8,
    question: "전 애인과 비슷한 사람을 보면?",
    options: [
      { text: "별 감흥 없음", score: 0 },
      { text: "잠깐 생각나지만 그뿐", score: 1 },
      { text: "가슴이 철렁하고 신경 쓰임", score: 2 },
      { text: "한참을 쳐다보게 됨", score: 3 },
    ],
  },
  {
    id: 9,
    question: "술 마시면 전 애인 생각이?",
    options: [
      { text: "안 남", score: 0 },
      { text: "취하면 가끔 생각남", score: 1 },
      { text: "술만 마시면 생각남", score: 2 },
      { text: "연락하거나 울어본 적 있음", score: 3 },
    ],
  },
  {
    id: 10,
    question: "지금 전 애인이 돌아온다면?",
    options: [
      { text: "안 받아줄 거임. 끝난 거임", score: 0 },
      { text: "고민은 하겠지만 아마 거절", score: 1 },
      { text: "솔직히 흔들릴 것 같음", score: 2 },
      { text: "당장 다시 만나고 싶음", score: 3 },
    ],
  },
  {
    id: 11,
    question: "이별 후 얼마나 지났어?",
    options: [
      { text: "1년 이상, 완전히 정리됨", score: 0 },
      { text: "6개월~1년, 많이 나아짐", score: 1 },
      { text: "3~6개월, 아직 힘듦", score: 2 },
      { text: "3개월 미만, 너무 힘듦", score: 3 },
    ],
  },
  {
    id: 12,
    question: "전 애인에 대해 솔직하게 말하면?",
    options: [
      { text: "이제 정말 아무렇지 않음", score: 0 },
      { text: "좋은 추억으로 남아있음", score: 1 },
      { text: "아직 마음 한켠에 있음", score: 2 },
      { text: "아직도 사랑하는 것 같음", score: 3 },
    ],
  },
];

export const results: Record<ExAttachmentType, ExAttachmentResult> = {
  free: {
    type: 'free',
    title: '완전 자유로움',
    emoji: '🦋',
    level: 5,
    description: '축하해요! 당신은 이별을 완전히 극복했어요. 전 애인에 대한 미련 없이, 온전히 자신의 삶을 살고 있습니다. 새로운 사랑을 맞이할 준비가 되어있어요!',
    symptoms: [
      '전 애인 생각이 거의 안 남',
      '새로운 만남에 열려있음',
      '과거를 담담하게 받아들임',
      '현재에 집중하고 있음',
    ],
    honestTruth: '진정으로 이별을 받아들이고 성장한 상태예요.',
    healingTips: [
      '지금의 건강한 상태를 유지하세요',
      '새로운 인연에 마음을 열어도 좋아요',
      '과거 경험을 성장의 자양분으로 삼으세요',
    ],
    doList: [
      '새로운 취미나 도전 시작하기',
      '좋은 사람 만나면 마음 열기',
      '자기 발전에 투자하기',
    ],
    dontList: [
      '과거에 너무 연연하지 않기',
      '새 연애 서두르지 않기',
    ],
    timeline: '이미 충분히 회복했어요. 자신만의 속도로 나아가세요.',
    encouragement: '당신은 정말 대단해요. 이별을 이겨내고 더 강해졌습니다! 앞으로 더 좋은 사랑이 기다리고 있을 거예요.',
  },
  slight: {
    type: 'slight',
    title: '약간의 미련',
    emoji: '🌤️',
    level: 25,
    description: '거의 극복했지만, 가끔 문득 생각나는 정도의 미련이 남아있어요. 이건 완전히 자연스러운 거예요. 조금만 더 시간이 지나면 완전히 자유로워질 거예요.',
    symptoms: [
      '특별한 날에 가끔 생각남',
      '추억이 좋은 기억으로 남아있음',
      '새로운 만남에도 열려있음',
      '일상에 크게 영향 없음',
    ],
    honestTruth: '미련이라기보다는 좋은 추억으로 남아있는 상태예요.',
    healingTips: [
      '지금 상태도 충분히 건강해요',
      '가끔 생각나는 건 자연스러운 거예요',
      '새로운 추억으로 채워나가세요',
    ],
    doList: [
      '새로운 경험 쌓기',
      '좋은 사람들과 시간 보내기',
      '자기 자신에게 집중하기',
    ],
    dontList: [
      '스스로를 자책하지 않기',
      '억지로 잊으려 하지 않기',
    ],
    timeline: '조금만 더 지나면 완전히 자유로워질 거예요.',
    encouragement: '잘 이겨내고 있어요! 가끔 생각나는 건 당신이 진심으로 사랑했다는 증거예요. 곧 완전히 괜찮아질 거예요.',
  },
  moderate: {
    type: 'moderate',
    title: '꽤 있는 미련',
    emoji: '🌥️',
    level: 50,
    description: '아직 마음 한켠에 전 애인이 자리잡고 있어요. 완전히 놓아주지 못한 상태인데, 이것도 회복 과정의 일부예요. 시간을 두고 천천히 정리해나가세요.',
    symptoms: [
      '자주 생각이 남',
      '새로운 사람과 비교하게 됨',
      'SNS를 가끔 확인함',
      '술 마시면 생각남',
    ],
    honestTruth: '아직 완전히 놓아주지 못한 상태예요. 하지만 괜찮아요, 시간이 필요한 거예요.',
    healingTips: [
      '자신의 감정을 인정하고 받아들이세요',
      '억지로 잊으려 하지 말고 자연스럽게',
      '나를 위한 시간을 더 가지세요',
      'SNS 확인 줄여보기',
    ],
    doList: [
      '새로운 취미 시작하기',
      '친구들과 많이 만나기',
      '운동이나 자기 관리에 집중하기',
      '일기 쓰며 감정 정리하기',
    ],
    dontList: [
      '술김에 연락하지 않기',
      'SNS 스토킹 줄이기',
      '혼자 너무 오래 있지 않기',
    ],
    timeline: '3~6개월 정도 더 시간이 필요할 수 있어요.',
    encouragement: '지금 힘들겠지만, 이 시간도 지나갈 거예요. 당신은 충분히 사랑받을 자격이 있는 사람이에요.',
  },
  high: {
    type: 'high',
    title: '높은 미련',
    emoji: '🌧️',
    level: 75,
    description: '아직 전 애인에 대한 마음이 많이 남아있어요. 이별을 완전히 받아들이지 못한 상태인데, 지금은 자기 자신을 돌보는 게 가장 중요해요.',
    symptoms: [
      '매일 생각이 남',
      '다시 만나고 싶은 마음',
      'SNS를 자주 확인함',
      '새로운 만남이 어려움',
    ],
    honestTruth: '솔직히, 아직 많이 보고 싶고 돌아오길 바라는 마음이 있어요.',
    healingTips: [
      '이 감정도 괜찮다고 인정해주세요',
      '혼자 앓지 말고 누군가에게 털어놓으세요',
      'SNS 차단을 고려해보세요',
      '전문 상담도 도움이 될 수 있어요',
    ],
    doList: [
      '신뢰할 수 있는 사람에게 이야기하기',
      '매일 조금씩 나를 위한 시간 갖기',
      '과거가 아닌 오늘에 집중하기',
      '필요하면 전문 상담 받기',
    ],
    dontList: [
      '절대 술김에 연락하지 않기',
      '재회 환상에 빠지지 않기',
      '새 연애로 상처 덮으려 하지 않기',
      '혼자 너무 오래 고민하지 않기',
    ],
    timeline: '6개월~1년 정도의 회복 시간이 필요할 수 있어요.',
    encouragement: '지금 정말 힘들죠. 하지만 이 감정의 터널 끝에는 빛이 있어요. 혼자가 아니에요, 당신 곁에 응원하는 사람들이 있어요.',
  },
  extreme: {
    type: 'extreme',
    title: '극심한 미련',
    emoji: '🌪️',
    level: 95,
    description: '전 애인에 대한 마음이 아직 너무 강해요. 이별의 아픔이 일상을 힘들게 하고 있다면, 혼자 감당하지 말고 주변의 도움을 받으세요.',
    symptoms: [
      '하루 종일 생각남',
      '잠을 못 이룸',
      '일상생활이 힘듦',
      '다시 만나고 싶은 마음이 간절함',
    ],
    honestTruth: '솔직히, 아직 그 사람을 많이 사랑하고 있어요. 그리고 그게 너무 힘들어요.',
    healingTips: [
      '이 고통은 당신이 진심으로 사랑했다는 증거예요',
      '혼자 감당하지 마세요',
      '전문가 상담을 적극 고려해보세요',
      '매일 조금씩, 아주 작은 것부터',
    ],
    doList: [
      '전문 상담 받기',
      '가까운 사람에게 솔직히 털어놓기',
      '규칙적인 생활 유지하기',
      '작은 목표 하나씩 이루기',
    ],
    dontList: [
      '혼자 앓지 않기',
      '술이나 다른 것에 의존하지 않기',
      '충동적으로 연락하지 않기',
      '자해적인 생각하지 않기',
    ],
    timeline: '회복에는 개인차가 있어요. 전문가와 함께 천천히 나아가세요.',
    encouragement: '지금 정말 많이 힘드시죠. 이 고통이 영원할 것 같지만, 절대 그렇지 않아요. 당신은 이겨낼 힘이 있어요. 도움을 청하는 것도 용기예요. 당신은 혼자가 아니에요.',
  },
};

export function calculateResult(answers: number[]): ExAttachmentResult {
  let totalScore = 0;
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  // 총점 기준: 0-36점 (12문항 x 0-3점)
  const percentage = (totalScore / 36) * 100;
  
  let resultType: ExAttachmentType;
  if (percentage <= 10) {
    resultType = 'free';
  } else if (percentage <= 30) {
    resultType = 'slight';
  } else if (percentage <= 55) {
    resultType = 'moderate';
  } else if (percentage <= 80) {
    resultType = 'high';
  } else {
    resultType = 'extreme';
  }

  return results[resultType];
}
