// 다음 연애 준비도 테스트 - 새로운 사랑 준비됐어?

export interface NextLoveReadyQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface NextLoveReadyResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  status: string;
  description: string;
  currentState: string[];
  readySignals: string[];
  notReadySignals: string[];
  advice: string[];
  todoList: string[];
  avoidList: string[];
  timeline: string;
  encouragement: string;
}

export const nextLoveReadyTypes = ['not_ready', 'healing', 'almost', 'ready', 'perfect'] as const;
export type NextLoveReadyType = typeof nextLoveReadyTypes[number];

export const questions: NextLoveReadyQuestion[] = [
  {
    id: 1,
    question: "전 애인 생각이 얼마나 자주 나?",
    options: [
      { text: "거의 매일, 아직 많이 생각나", score: 0 },
      { text: "일주일에 몇 번 정도", score: 1 },
      { text: "가끔, 특별한 계기가 있을 때만", score: 2 },
      { text: "거의 안 나, 이제 무덤덤해", score: 3 },
    ],
  },
  {
    id: 2,
    question: "새로운 사람을 만난다는 생각을 하면?",
    options: [
      { text: "아직은 생각도 싫어, 지침", score: 0 },
      { text: "관심은 있는데 자신이 없음", score: 1 },
      { text: "좋은 사람 있으면 만나볼 의향 있음", score: 2 },
      { text: "기대돼! 새로운 인연 환영", score: 3 },
    ],
  },
  {
    id: 3,
    question: "요즘 나의 정서 상태는?",
    options: [
      { text: "아직 힘들고 감정 기복 심함", score: 0 },
      { text: "괜찮아지고 있지만 가끔 힘듦", score: 1 },
      { text: "대체로 안정적, 일상 회복됨", score: 2 },
      { text: "행복하고 에너지 넘침", score: 3 },
    ],
  },
  {
    id: 4,
    question: "이전 연애에서 배운 점이 있어?",
    options: [
      { text: "아직 정리가 안 됨, 모르겠어", score: 0 },
      { text: "생각해보려 하지만 감정이 앞섬", score: 1 },
      { text: "어느 정도 깨달은 게 있음", score: 2 },
      { text: "확실히 알게 된 게 있고 성장했음", score: 3 },
    ],
  },
  {
    id: 5,
    question: "혼자 있는 시간은 어때?",
    options: [
      { text: "외롭고 힘들어, 누군가 필요해", score: 0 },
      { text: "조금 외롭지만 견딜만함", score: 1 },
      { text: "나쁘지 않아, 나만의 시간 즐김", score: 2 },
      { text: "좋아! 혼자서도 충분히 행복해", score: 3 },
    ],
  },
  {
    id: 6,
    question: "전 애인에 대한 감정은?",
    options: [
      { text: "아직 미련이 있거나 원망이 큼", score: 0 },
      { text: "복잡해, 아직 정리 중", score: 1 },
      { text: "담담해짐, 좋은 추억으로", score: 2 },
      { text: "완전히 정리됐어, 무덤덤함", score: 3 },
    ],
  },
  {
    id: 7,
    question: "자존감 상태는 어때?",
    options: [
      { text: "많이 낮아짐, 나에 대한 확신 없음", score: 0 },
      { text: "회복 중, 아직 흔들림", score: 1 },
      { text: "괜찮아, 나름 자신 있음", score: 2 },
      { text: "높아! 나 자신을 사랑함", score: 3 },
    ],
  },
  {
    id: 8,
    question: "다음 연애에서 원하는 것이 있어?",
    options: [
      { text: "아직 생각 안 해봄, 모르겠어", score: 0 },
      { text: "막연하게 '좋은 사람'이면...", score: 1 },
      { text: "어느 정도 기준은 있음", score: 2 },
      { text: "명확해! 내가 원하는 게 확실함", score: 3 },
    ],
  },
  {
    id: 9,
    question: "주변에서 소개팅 주선해준다면?",
    options: [
      { text: "아직 됐어, 관심 없음", score: 0 },
      { text: "고민될 것 같아, 할까 말까", score: 1 },
      { text: "조건 맞으면 나가볼 의향 있음", score: 2 },
      { text: "좋아! 만나볼게", score: 3 },
    ],
  },
  {
    id: 10,
    question: "연애 말고 내 삶은 어때?",
    options: [
      { text: "연애 생각에 다른 건 잘 안 됨", score: 0 },
      { text: "나아지고 있지만 아직 부족", score: 1 },
      { text: "일상 회복됨, 나름 잘 지냄", score: 2 },
      { text: "최고! 일/취미/관계 다 충실해", score: 3 },
    ],
  },
  {
    id: 11,
    question: "이별 후 자기 관리는?",
    options: [
      { text: "많이 못 했어, 힘들었음", score: 0 },
      { text: "하려고 노력 중", score: 1 },
      { text: "꽤 열심히 하고 있음", score: 2 },
      { text: "완벽해! 외모/건강 모두 신경 씀", score: 3 },
    ],
  },
  {
    id: 12,
    question: "지금 당장 좋은 사람이 나타난다면?",
    options: [
      { text: "아직 받아들일 준비 안 됨", score: 0 },
      { text: "좋은데... 겁이 남", score: 1 },
      { text: "좋지! 천천히 알아가고 싶어", score: 2 },
      { text: "완전 환영! 잘해볼 자신 있어", score: 3 },
    ],
  },
];

export const results: Record<NextLoveReadyType, NextLoveReadyResult> = {
  not_ready: {
    type: 'not_ready',
    title: '아직 준비 안 됨',
    emoji: '🌧️',
    percentage: 15,
    status: '회복 필요 단계',
    description: '아직 마음의 상처가 아물지 않은 상태예요. 이별의 아픔이 생생하고, 새로운 시작보다 지금은 나 자신을 돌보는 게 우선이에요. 무리하게 새 연애를 시작하면 상처만 커질 수 있어요.',
    currentState: [
      '감정적으로 불안정한 상태',
      '전 애인에 대한 미련이나 원망이 큼',
      '자존감이 낮아진 상태',
      '일상 회복이 덜 됨',
    ],
    readySignals: [],
    notReadySignals: [
      '전 애인 생각이 자주 남',
      '새 연애 생각이 부담스러움',
      '감정 기복이 심함',
      '혼자 있기 힘듦',
    ],
    advice: [
      '지금은 나 자신에게만 집중하세요',
      '충분히 슬퍼해도 괜찮아요',
      '가까운 사람에게 마음을 털어놓으세요',
      '필요하다면 전문 상담도 고려해보세요',
    ],
    todoList: [
      '매일 작은 자기 관리 하기',
      '좋아하는 것 하나씩 다시 시작하기',
      '감정 일기 써보기',
      '친구들과 시간 보내기',
    ],
    avoidList: [
      '억지로 새 사람 만나기',
      '술로 감정 해소하기',
      '전 애인 SNS 스토킹',
      '혼자 끙끙 앓기',
    ],
    timeline: '최소 2~3개월은 충분히 쉬세요',
    encouragement: '지금 힘든 거 당연해요. 천천히 가도 괜찮아요. 회복하는 데 필요한 시간을 충분히 가지세요.',
  },
  healing: {
    type: 'healing',
    title: '회복 중',
    emoji: '🌤️',
    percentage: 35,
    status: '치유 진행 중',
    description: '조금씩 나아지고 있어요! 아직 완전히 회복된 건 아니지만, 예전보다 많이 괜찮아진 상태예요. 가끔 힘든 순간이 있어도 이겨내고 있는 당신, 대단해요.',
    currentState: [
      '감정이 조금씩 안정되는 중',
      '일상이 서서히 회복됨',
      '아직 가끔 힘든 순간이 있음',
      '새 연애에 대한 관심이 조금 생김',
    ],
    readySignals: [
      '혼자 있는 시간이 견딜만해짐',
      '일상이 돌아오고 있음',
      '전 애인 생각이 줄어들고 있음',
    ],
    notReadySignals: [
      '아직 감정 정리가 덜 됨',
      '자신감이 완전히 회복 안 됨',
      '새 연애가 두려움',
    ],
    advice: [
      '지금 속도가 딱 좋아요, 서두르지 마세요',
      '자기 자신과의 시간을 더 가지세요',
      '새 사람 만나는 건 조금 더 기다려도 괜찮아요',
      '취미나 자기계발에 투자해보세요',
    ],
    todoList: [
      '운동이나 새로운 취미 시작하기',
      '혼자 여행이나 혼밥 도전해보기',
      '자존감 높이는 활동하기',
      '일기나 글로 감정 정리하기',
    ],
    avoidList: [
      '외로움에 아무나 만나기',
      '과거에 너무 집착하기',
      '회복을 서두르기',
      '자신을 자책하기',
    ],
    timeline: '1~2개월 정도 더 회복에 집중하세요',
    encouragement: '잘 이겨내고 있어요! 조금만 더 자신에게 집중하면 완전히 준비될 거예요.',
  },
  almost: {
    type: 'almost',
    title: '거의 준비됨',
    emoji: '🌈',
    percentage: 60,
    status: '준비 단계',
    description: '이제 많이 괜찮아졌어요! 전 연애는 좋은 추억과 교훈으로 남았고, 새로운 시작에 대한 기대도 생기고 있어요. 조금만 더 다듬으면 완벽하게 준비될 거예요.',
    currentState: [
      '감정적으로 안정됨',
      '전 연애에서 배운 게 있음',
      '새 연애에 관심이 생김',
      '자존감이 회복되는 중',
    ],
    readySignals: [
      '혼자서도 행복함',
      '새로운 인연에 열려있음',
      '전 애인 생각이 많이 줄음',
      '일상이 충실해짐',
    ],
    notReadySignals: [
      '가끔 과거에 흔들릴 때가 있음',
      '완벽한 자신감은 아직',
    ],
    advice: [
      '조금씩 새로운 만남에 도전해봐도 좋아요',
      '너무 급하게 진행하지는 마세요',
      '내가 원하는 게 뭔지 더 명확히 해보세요',
      '자연스러운 만남에 열려있으세요',
    ],
    todoList: [
      '가벼운 소개팅이나 모임 참여해보기',
      '이상형 기준 정리해보기',
      '자기 관리 계속하기',
      '긍정적인 마인드 유지하기',
    ],
    avoidList: [
      '과거와 현재를 비교하기',
      '완벽한 사람 찾으려 하기',
      '연애에 집착하기',
      '자신에게 너무 엄격하기',
    ],
    timeline: '지금 시작해도 되지만, 천천히 가세요',
    encouragement: '정말 잘 해왔어요! 이제 새로운 인연을 만날 준비가 거의 됐어요. 좋은 사람이 기다리고 있을 거예요.',
  },
  ready: {
    type: 'ready',
    title: '준비 완료',
    emoji: '💚',
    percentage: 80,
    status: '새 출발 가능',
    description: '새로운 연애를 시작할 준비가 됐어요! 과거를 잘 정리하고, 자신을 충분히 사랑하는 상태예요. 좋은 인연이 오면 자신 있게 시작할 수 있어요.',
    currentState: [
      '감정적으로 건강한 상태',
      '자존감이 높음',
      '혼자서도 행복함',
      '새 연애에 적극적',
    ],
    readySignals: [
      '전 연애 완전히 정리됨',
      '새로운 인연 기대됨',
      '내가 원하는 게 명확함',
      '사랑받을 자격이 있다고 느낌',
    ],
    notReadySignals: [],
    advice: [
      '적극적으로 인연을 찾아보세요',
      '좋은 사람에게 먼저 다가가도 좋아요',
      '과거 실수를 반복하지 않도록 주의하세요',
      '연애도 좋지만 나 자신도 계속 챙기세요',
    ],
    todoList: [
      '소개팅, 앱 등 적극 활용하기',
      '새로운 환경에 나가보기',
      '호감 가는 사람에게 먼저 다가가기',
      '열린 마음 유지하기',
    ],
    avoidList: [
      '너무 높은 기대',
      '첫인상으로만 판단하기',
      '과거 패턴 반복하기',
      '연애에만 올인하기',
    ],
    timeline: '지금 당장 시작해도 좋아요!',
    encouragement: '당신은 정말 준비됐어요! 자신감을 갖고 새로운 사랑을 찾아가세요. 좋은 인연이 기다리고 있어요!',
  },
  perfect: {
    type: 'perfect',
    title: '완벽하게 준비됨',
    emoji: '💖',
    percentage: 100,
    status: '최상의 컨디션',
    description: '완벽해요! 자기 자신을 충분히 사랑하고, 혼자서도 행복한 상태에서 새 연애를 기다리고 있어요. 이런 상태에서 시작하는 연애는 건강하고 오래갈 확률이 높아요!',
    currentState: [
      '자기 사랑 완벽',
      '정서적으로 매우 안정',
      '삶의 모든 영역이 충실',
      '새 연애에 대한 기대와 자신감',
    ],
    readySignals: [
      '혼자서 완전히 행복함',
      '과거에 전혀 연연 안 함',
      '원하는 게 명확함',
      '자존감 최고 상태',
      '사랑할 준비 완벽',
    ],
    notReadySignals: [],
    advice: [
      '이 좋은 에너지를 잘 유지하세요',
      '너무 완벽한 사람을 찾으려 하지 마세요',
      '자연스러운 인연을 즐기세요',
      '연애해도 나 자신을 잃지 마세요',
    ],
    todoList: [
      '좋은 기운으로 새로운 인연 만나기',
      '다양한 사람들과 교류하기',
      '직감을 믿고 호감에 솔직해지기',
      '이 좋은 상태 유지하기',
    ],
    avoidList: [
      '너무 이상적인 사람만 기다리기',
      '연애 시작하면 나를 잃기',
      '과거 연애와 비교하기',
      '조급해지기',
    ],
    timeline: '언제든 준비 완료! 좋은 인연만 기다려요',
    encouragement: '당신은 최고의 상태예요! 이렇게 건강하게 연애를 준비한 당신에게 좋은 인연이 반드시 찾아올 거예요!',
  },
};

export function calculateResult(answers: number[]): NextLoveReadyResult {
  let totalScore = 0;
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  // 총점 기준: 0-36점 (12문항 x 0-3점)
  const percentage = (totalScore / 36) * 100;
  
  let resultType: NextLoveReadyType;
  if (percentage <= 20) {
    resultType = 'not_ready';
  } else if (percentage <= 40) {
    resultType = 'healing';
  } else if (percentage <= 60) {
    resultType = 'almost';
  } else if (percentage <= 85) {
    resultType = 'ready';
  } else {
    resultType = 'perfect';
  }

  return results[resultType];
}
