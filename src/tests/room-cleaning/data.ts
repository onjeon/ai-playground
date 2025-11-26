// 방 정리 유형 테스트 - 정리 스타일로 보는 나의 성격

export interface RoomCleaningQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface RoomCleaningResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  roomStyle: string;
  strengths: string[];
  challenges: string[];
  cleaningTips: string[];
  personality: string;
  idealRoom: string;
}

export const cleaningTypes = ['minimalist', 'organized', 'creative_chaos', 'procrastinator', 'nostalgic', 'perfectionist'] as const;
export type CleaningType = typeof cleaningTypes[number];

export const questions: RoomCleaningQuestion[] = [
  {
    id: 1,
    question: "지금 당신의 방 상태는?",
    options: [
      { text: "깔끔! 정리 잘 되어있음", scores: { organized: 2, minimalist: 1 } },
      { text: "나만 아는 정리 상태", scores: { creative_chaos: 3 } },
      { text: "좀... 정리해야 하는데...", scores: { procrastinator: 3 } },
      { text: "완벽하게 정리됨, 먼지 하나 없음", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 2,
    question: "물건 버리는 스타일은?",
    options: [
      { text: "필요없으면 바로 버림", scores: { minimalist: 3 } },
      { text: "분류해서 정리 후 버림", scores: { organized: 3 } },
      { text: "추억이 있으면 못 버림", scores: { nostalgic: 3 } },
      { text: "버려야지 버려야지... 안 버림", scores: { procrastinator: 3 } },
    ],
  },
  {
    id: 3,
    question: "청소하는 주기는?",
    options: [
      { text: "매일 조금씩", scores: { organized: 2, perfectionist: 2 } },
      { text: "주 1회 정도", scores: { organized: 2, minimalist: 1 } },
      { text: "어질러지면 몰아서", scores: { procrastinator: 3 } },
      { text: "손님 오기 전에", scores: { creative_chaos: 2, procrastinator: 1 } },
    ],
  },
  {
    id: 4,
    question: "물건 정리 방식은?",
    options: [
      { text: "카테고리별로 정확하게", scores: { organized: 3 } },
      { text: "보이는 곳만 깔끔하게", scores: { creative_chaos: 2 } },
      { text: "최소한의 물건만 보유", scores: { minimalist: 3 } },
      { text: "일단 서랍에 넣어두기", scores: { procrastinator: 2, nostalgic: 1 } },
    ],
  },
  {
    id: 5,
    question: "책상 위 상태는?",
    options: [
      { text: "필요한 것만 딱", scores: { minimalist: 3 } },
      { text: "정리함에 분류되어 있음", scores: { organized: 3 } },
      { text: "여기저기 물건들이...", scores: { creative_chaos: 2, procrastinator: 1 } },
      { text: "완벽하게 정돈됨", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 6,
    question: "안 쓰는 물건에 대한 태도?",
    options: [
      { text: "1년 안 쓰면 버림", scores: { minimalist: 3 } },
      { text: "나중에 쓸지도? 일단 보관", scores: { nostalgic: 2, procrastinator: 1 } },
      { text: "추억의 물건은 절대 못 버림", scores: { nostalgic: 3 } },
      { text: "정리박스에 분류해서 보관", scores: { organized: 3 } },
    ],
  },
  {
    id: 7,
    question: "청소할 때 스타일은?",
    options: [
      { text: "완벽하게! 구석구석 다", scores: { perfectionist: 3 } },
      { text: "효율적으로 필요한 만큼", scores: { organized: 2, minimalist: 1 } },
      { text: "기분 내키면 열심히", scores: { creative_chaos: 2, procrastinator: 1 } },
      { text: "최소한만... 귀찮아...", scores: { procrastinator: 3 } },
    ],
  },
  {
    id: 8,
    question: "옷장 정리 상태는?",
    options: [
      { text: "색깔/종류별로 정리", scores: { organized: 3, perfectionist: 1 } },
      { text: "기본적으로 정리됨", scores: { minimalist: 2 } },
      { text: "찾는 옷이 어딨더라...", scores: { creative_chaos: 2, procrastinator: 1 } },
      { text: "입지 않는 옷도 가득", scores: { nostalgic: 3 } },
    ],
  },
  {
    id: 9,
    question: "정리정돈에 대한 생각은?",
    options: [
      { text: "깔끔해야 마음이 편해", scores: { organized: 2, perfectionist: 2 } },
      { text: "적당히 정리되면 OK", scores: { creative_chaos: 2 } },
      { text: "솔직히 귀찮아...", scores: { procrastinator: 3 } },
      { text: "물건이 적으면 정리할 것도 없음", scores: { minimalist: 3 } },
    ],
  },
  {
    id: 10,
    question: "이사할 때 짐 정리는?",
    options: [
      { text: "이참에 대청소! 많이 버림", scores: { minimalist: 3 } },
      { text: "분류해서 꼼꼼하게 포장", scores: { organized: 3 } },
      { text: "짐이 왜 이렇게 많지...", scores: { nostalgic: 2, procrastinator: 1 } },
      { text: "마지막까지 미루다 급하게", scores: { procrastinator: 3 } },
    ],
  },
  {
    id: 11,
    question: "방에서 가장 중요한 것은?",
    options: [
      { text: "깔끔함과 여백", scores: { minimalist: 3 } },
      { text: "체계적인 수납", scores: { organized: 3 } },
      { text: "나만의 아늑함", scores: { creative_chaos: 2, nostalgic: 1 } },
      { text: "완벽한 청결", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 12,
    question: "정리 안 된 방을 보면?",
    options: [
      { text: "당장 정리하고 싶어짐", scores: { perfectionist: 3, organized: 1 } },
      { text: "내 방만 깔끔하면 됨", scores: { minimalist: 2 } },
      { text: "뭐... 사는 거 다 그렇지", scores: { creative_chaos: 2, procrastinator: 1 } },
      { text: "저기도 정리 안 하네~ (나도)", scores: { procrastinator: 3 } },
    ],
  },
];

export const results: Record<CleaningType, RoomCleaningResult> = {
  minimalist: {
    type: 'minimalist',
    title: '미니멀 라이프',
    emoji: '🪴',
    description: '적을수록 좋다! 불필요한 건 과감히 버리고 꼭 필요한 것만 남기는 미니멀리스트입니다.',
    characteristics: ['물건 적음', '여백 중시', '과감한 정리', '심플한 공간'],
    roomStyle: '깔끔한 여백, 필수 가구만, 정돈된 공간',
    strengths: ['정리 부담 적음', '청소 쉬움', '집중하기 좋음', '심리적 여유'],
    challenges: ['너무 차갑게 보일 수 있음', '필요한 물건까지 버릴 위험'],
    cleaningTips: ['정기적으로 물건 점검', '원인-원아웃 규칙', '다용도 아이템 활용'],
    personality: '삶에서도 본질에 집중하는 효율주의자',
    idealRoom: '화이트톤, 우드 가구, 식물 한 두 개, 넓은 여백',
  },
  organized: {
    type: 'organized',
    title: '정리 달인',
    emoji: '📦',
    description: '모든 물건에는 제자리가 있다! 체계적이고 논리적으로 정리하는 정리의 달인입니다.',
    characteristics: ['체계적 분류', '라벨링', '수납 용품 활용', '정해진 위치'],
    roomStyle: '카테고리별 수납, 라벨링, 효율적 공간 활용',
    strengths: ['물건 찾기 쉬움', '효율적 공간', '깔끔한 외관', '유지 관리 용이'],
    challenges: ['분류에 시간 소요', '융통성 부족할 수 있음'],
    cleaningTips: ['정리 루틴 유지', '새 물건 들어오면 자리 정하기', '계절별 정리'],
    personality: '삶에서도 계획적이고 체계적인 사람',
    idealRoom: '수납장 가득, 투명 정리함, 라벨 스티커, 모든 게 제자리에',
  },
  creative_chaos: {
    type: 'creative_chaos',
    title: '창조적 혼돈',
    emoji: '🎨',
    description: '내 방 내 맘대로! 남들 눈엔 어질러 보여도 나만 알면 되는 창의적 공간 관리자입니다.',
    characteristics: ['나만의 정리 방식', '겉만 깔끔', '물건 많아도 OK', '자유로운 배치'],
    roomStyle: '개성있는 인테리어, 여기저기 소품, 나만 아는 위치',
    strengths: ['자유로움', '창의적 공간', '스트레스 적음', '개성 표현'],
    challenges: ['다른 사람 눈엔 어질러 보임', '가끔 물건 못 찾음'],
    cleaningTips: ['핫스팟만 깔끔하게', '정기적으로 대청소', '동선 위주 정리'],
    personality: '삶에서도 자유롭고 창의적인 사람',
    idealRoom: '나만의 감성, 수집품 전시, 편안한 아지트 느낌',
  },
  procrastinator: {
    type: 'procrastinator',
    title: '미루기의 달인',
    emoji: '😴',
    description: '내일 해야지... 오늘 말고 내일! 정리의 필요성은 알지만 실행이 어려운 귀차니즘 마스터입니다.',
    characteristics: ['미루기', '몰아서 청소', '손님 오면 대청소', '귀찮음 만렙'],
    roomStyle: '어질러지다가 급청소, 들쑥날쑥한 상태',
    strengths: ['스트레스 안 받음', '몰아서 하면 잘 함', '적당히 사는 법 앎'],
    challenges: ['점점 쌓이는 짐', '급할 때 정리 못함', '물건 자주 잃어버림'],
    cleaningTips: ['5분 정리 습관', '하루 한 곳씩만', '타이머 정리법'],
    personality: '삶에서도 여유롭지만 가끔 벼락치기형',
    idealRoom: '이상: 깔끔 / 현실: 음... 그래도 살만해',
  },
  nostalgic: {
    type: 'nostalgic',
    title: '추억의 수집가',
    emoji: '📸',
    description: '이건 버릴 수 없어! 모든 물건에 추억이 담겨있는 감성적인 수집가입니다.',
    characteristics: ['추억 보관', '버리기 어려움', '수집 성향', '감성적 가치'],
    roomStyle: '추억의 물건들, 사진 액자, 기념품, 손편지 보관',
    strengths: ['소중한 기억 간직', '감성적 공간', '이야기가 있는 방'],
    challenges: ['물건 과다', '정리 어려움', '공간 부족'],
    cleaningTips: ['사진으로 남기고 버리기', '정리 박스 하나만', '베스트 추억만 선별'],
    personality: '삶에서도 관계와 추억을 소중히 여기는 사람',
    idealRoom: '사진 가득, 여행 기념품, 손편지 보관함, 추억 코너',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '완벽주의 클리너',
    emoji: '✨',
    description: '먼지 하나 용납 못 해! 완벽하게 깔끔하고 청결한 공간을 추구하는 청소 완벽주의자입니다.',
    characteristics: ['완벽한 청결', '구석구석 청소', '정기적 대청소', '높은 기준'],
    roomStyle: '티 하나 없이 깔끔, 호텔 같은 청결함',
    strengths: ['항상 깔끔', '위생적', '기분 좋은 공간', '손님 맞이 준비 완료'],
    challenges: ['스트레스', '시간 소요', '타인에게 강요 위험'],
    cleaningTips: ['적당히 타협하기', '완벽보다 꾸준히', '청소 자체를 즐기기'],
    personality: '삶에서도 꼼꼼하고 책임감 있는 사람',
    idealRoom: '흰색 인테리어, 빈틈없는 정리, 광나는 바닥, 먼지 제로',
  },
};

export function calculateResult(answers: number[]): RoomCleaningResult {
  const scores: Record<CleaningType, number> = {
    minimalist: 0,
    organized: 0,
    creative_chaos: 0,
    procrastinator: 0,
    nostalgic: 0,
    perfectionist: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as CleaningType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: CleaningType = 'organized';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as CleaningType;
    }
  });

  return results[resultType];
}
