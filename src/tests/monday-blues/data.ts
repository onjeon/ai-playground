// 월요병 지수 테스트 - 당신의 월요병은 몇 단계?

export interface MondayBluesQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface MondayBluesResult {
  type: string;
  title: string;
  emoji: string;
  level: number;
  description: string;
  characteristics: string[];
  sundayNight: string;
  mondayMorning: string;
  symptoms: string[];
  copingMethods: string[];
  workMotivation: string;
  tips: string[];
  recommendation: string;
}

export const questions: MondayBluesQuestion[] = [
  {
    id: 1,
    question: "일요일 저녁, 내일 출근 생각이 나면?",
    options: [
      { text: "괜찮아, 할 일 있으니까", score: 0 },
      { text: "좀 아쉽지만 뭐...", score: 1 },
      { text: "우울해지기 시작함", score: 2 },
      { text: "극심한 스트레스와 불안", score: 3 },
    ],
  },
  {
    id: 2,
    question: "월요일 아침 알람이 울리면?",
    options: [
      { text: "바로 일어남", score: 0 },
      { text: "5분만... 하고 일어남", score: 1 },
      { text: "알람 여러 번 미룸", score: 2 },
      { text: "알람 끄고 이불 속으로...", score: 3 },
    ],
  },
  {
    id: 3,
    question: "월요일 출근길 기분은?",
    options: [
      { text: "상쾌하게 출발!", score: 0 },
      { text: "평소와 비슷", score: 1 },
      { text: "발걸음이 무거움", score: 2 },
      { text: "회사 가기 싫어서 죽겠음", score: 3 },
    ],
  },
  {
    id: 4,
    question: "월요일 오전 업무 집중도는?",
    options: [
      { text: "평소처럼 집중 잘 됨", score: 0 },
      { text: "조금 느리게 시작", score: 1 },
      { text: "오전 내내 멍함", score: 2 },
      { text: "집중? 그게 뭔데", score: 3 },
    ],
  },
  {
    id: 5,
    question: "월요일에 제일 많이 하는 생각은?",
    options: [
      { text: "이번 주 목표 생각", score: 0 },
      { text: "점심 뭐 먹지?", score: 1 },
      { text: "금요일 빨리 와라...", score: 2 },
      { text: "퇴사하고 싶다...", score: 3 },
    ],
  },
  {
    id: 6,
    question: "주말에 뭐 했어? 질문에?",
    options: [
      { text: "재밌게 보냈어! (진짜)", score: 0 },
      { text: "쉬었어~ (평범하게)", score: 1 },
      { text: "그냥... 집에 있었어 (우울)", score: 2 },
      { text: "출근 생각에 놀지도 못함", score: 3 },
    ],
  },
  {
    id: 7,
    question: "월요일 점심시간 대화 주제는?",
    options: [
      { text: "주말 있었던 일, 재밌는 얘기", score: 0 },
      { text: "업무 관련 이야기", score: 1 },
      { text: "월요일 힘들다는 공감대", score: 2 },
      { text: "퇴사/이직 얘기", score: 3 },
    ],
  },
  {
    id: 8,
    question: "월요일 퇴근 후 계획은?",
    options: [
      { text: "운동이나 약속", score: 0 },
      { text: "집에서 쉬기", score: 1 },
      { text: "아무것도 하기 싫음", score: 2 },
      { text: "바로 자기 (회복 필요)", score: 3 },
    ],
  },
  {
    id: 9,
    question: "월요일에 갑자기 회의가 잡히면?",
    options: [
      { text: "OK, 준비하자", score: 0 },
      { text: "귀찮지만 어쩔 수 없지", score: 1 },
      { text: "하... 월요일부터...", score: 2 },
      { text: "퇴사 버튼 어디 있어?", score: 3 },
    ],
  },
  {
    id: 10,
    question: "월요일에 업무 카톡/이메일 알림 뜨면?",
    options: [
      { text: "바로 확인하고 처리", score: 0 },
      { text: "확인은 하되 나중에 답장", score: 1 },
      { text: "보기 싫음...", score: 2 },
      { text: "알림 자체가 스트레스", score: 3 },
    ],
  },
  {
    id: 11,
    question: "월요일을 버티는 나만의 방법은?",
    options: [
      { text: "특별히 없어도 괜찮음", score: 0 },
      { text: "맛있는 점심/커피로 버팀", score: 1 },
      { text: "퇴근 시간만 기다림", score: 2 },
      { text: "방법이 없음, 그냥 고통", score: 3 },
    ],
  },
  {
    id: 12,
    question: "월요일 밤, 잠들기 전 생각은?",
    options: [
      { text: "오늘 하루 잘 보냈다", score: 0 },
      { text: "화요일이니까 조금 나아지겠지", score: 1 },
      { text: "아직 4일이나 남았네...", score: 2 },
      { text: "왜 매일이 월요일 같지", score: 3 },
    ],
  },
];

export const results: Record<string, MondayBluesResult> = {
  'immune': {
    type: 'immune',
    title: '월요병 면역자',
    emoji: '💪',
    level: 10,
    description: '월요병? 그게 뭔데요? 월요일도 다른 날과 똑같이 활기차게 시작하는 타입! 일과 생활의 균형이 잘 잡혀 있거나, 정말 일을 좋아하는 분이네요.',
    characteristics: ['긍정 마인드', '일 만족도 높음', '에너지 넘침', '루틴 확립'],
    sundayNight: '내일 할 일 정리하고 편하게 잠',
    mondayMorning: '알람 전에 일어나기도 함',
    symptoms: ['없음! 컨디션 좋음'],
    copingMethods: ['특별히 필요 없음', '평소처럼 지냄'],
    workMotivation: '일 자체가 동기부여, 목표 의식 확실',
    tips: ['당신의 비결을 공유해주세요!', '번아웃 조심, 가끔은 쉬어요', '동료들도 챙겨주세요'],
    recommendation: '이 상태를 유지하면서, 주변 사람들에게 긍정 에너지를 나눠주세요!',
  },
  'mild': {
    type: 'mild',
    title: '가벼운 월요병',
    emoji: '😐',
    level: 35,
    description: '약간의 월요병이 있지만 충분히 컨트롤 가능한 수준! 누구나 느끼는 정도의 "아 벌써 월요일이네~" 정도예요.',
    characteristics: ['평균적인 직장인', '적응력 있음', '회복력 좋음', '균형 잡힘'],
    sundayNight: '조금 아쉽지만 괜찮아',
    mondayMorning: '5분만... 하지만 결국 일어남',
    symptoms: ['약간의 귀차니즘', '커피 필요', '점심이 기다려짐'],
    copingMethods: ['아침 커피', '맛있는 점심', '동료와 수다'],
    workMotivation: '적당한 책임감과 목표 의식',
    tips: ['지금 상태면 충분해요!', '작은 보상 시스템 만들기', '월요일 특별 루틴 추가해보기'],
    recommendation: '월요일 아침 작은 즐거움(맛있는 브런치, 좋아하는 음악)을 추가해보세요!',
  },
  'moderate': {
    type: 'moderate',
    title: '일반적인 월요병',
    emoji: '😩',
    level: 60,
    description: '본격적인 월요병! 일요일 저녁부터 우울해지고, 월요일 출근길은 정말 힘들어요. 많은 직장인들이 공감하는 수준입니다.',
    characteristics: ['일요일 저녁 우울', '월요일 집중 어려움', '금요일만 기다림', '회복 시간 필요'],
    sundayNight: '내일 출근 생각에 우울해짐',
    mondayMorning: '알람 여러 번 미루고 겨우 일어남',
    symptoms: ['무기력', '집중력 저하', '피로감', '의욕 상실'],
    copingMethods: ['커피 연속', '점심 맛집', '퇴근 카운트다운', '동료와 공감'],
    workMotivation: '월급날과 휴가가 동기부여',
    tips: ['일요일 저녁 루틴 바꿔보기', '월요일에 좋아하는 것 배치', '점진적 변화 시도'],
    recommendation: '월요일 저녁에 본인만의 보상(맛있는 저녁, 넷플릭스 등)을 정해두세요!',
  },
  'severe': {
    type: 'severe',
    title: '심각한 월요병',
    emoji: '😭',
    level: 80,
    description: '월요병이 심각한 수준! 출근 자체가 큰 스트레스이고, 일주일 내내 힘들어요. 직장이나 업무 환경을 점검해볼 필요가 있습니다.',
    characteristics: ['만성 피로', '업무 스트레스 심함', '퇴사 생각 자주', '회복 안 됨'],
    sundayNight: '극심한 스트레스와 불면',
    mondayMorning: '몸이 안 움직임, 출근 거부감',
    symptoms: ['두통', '소화불량', '불면', '우울감', '무기력'],
    copingMethods: ['거의 효과 없음', '퇴근만 기다림', '이직 사이트 탐색'],
    workMotivation: '거의 없음, 의무감으로만',
    tips: ['직장/업무 환경 점검 필요', '휴가 사용 권장', '전문가 상담 고려'],
    recommendation: '심각한 수준이에요. 연차 쓰고 충분히 쉬거나, 근본적인 원인(업무/인간관계/환경)을 파악해보세요.',
  },
  'critical': {
    type: 'critical',
    title: '응급 월요병',
    emoji: '🆘',
    level: 95,
    description: '매일이 월요일 같은 상태! 단순 월요병을 넘어서 번아웃이나 우울증 가능성이 있어요. 전문적인 도움이 필요할 수 있습니다.',
    characteristics: ['만성 우울', '번아웃 상태', '일상생활 영향', '회복 불가'],
    sundayNight: '일주일 내내 이 기분',
    mondayMorning: '출근 자체가 불가능할 것 같음',
    symptoms: ['심한 우울', '수면 장애', '식욕 변화', '무력감', '절망감'],
    copingMethods: ['없음, 모든 게 힘듦'],
    workMotivation: '완전히 소진됨',
    tips: ['지금 당장 쉬세요', '전문가 상담 필수', '혼자 해결하려 하지 마세요'],
    recommendation: '이건 월요병이 아니라 번아웃/우울증 신호일 수 있어요. 회사에 휴직을 요청하거나, 전문 상담을 받아보세요. 당신의 건강이 가장 중요합니다.',
  },
};

export function calculateResult(answers: number[]): MondayBluesResult {
  let totalScore = 0;
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  // 최대 점수: 36 (12문항 * 3점)
  const percentage = (totalScore / 36) * 100;

  if (percentage <= 15) {
    return results['immune'];
  } else if (percentage <= 35) {
    return results['mild'];
  } else if (percentage <= 55) {
    return results['moderate'];
  } else if (percentage <= 75) {
    return results['severe'];
  } else {
    return results['critical'];
  }
}
