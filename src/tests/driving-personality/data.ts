// 운전 성격 테스트 - 핸들 잡으면 달라지는 나?

export interface DrivingPersonalityQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface DrivingPersonalityResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  drivingStyle: string;
  characteristics: string[];
  strengths: string[];
  dangers: string[];
  tips: string[];
  musicStyle: string;
  roadRageLevel: string;
}

export const drivingTypes = ['racer', 'relaxed', 'nervous', 'rule_keeper', 'road_captain', 'multitasker'] as const;
export type DrivingType = typeof drivingTypes[number];

export const questions: DrivingPersonalityQuestion[] = [
  {
    id: 1,
    question: "신호가 초록불로 바뀌었는데 앞차가 안 출발하면?",
    options: [
      { text: "바로 경적! 뭐하냐고!", scores: { racer: 3 } },
      { text: "잠깐 기다려봄, 2-3초 후 경적", scores: { rule_keeper: 2 } },
      { text: "경적 안 누름, 기다림", scores: { relaxed: 3 } },
      { text: "같이 멍때리다가 뒤에서 경적 들음", scores: { nervous: 2 } },
    ],
  },
  {
    id: 2,
    question: "끼어들기 하는 차가 있으면?",
    options: [
      { text: "절대 안 비켜줌, 내 차선은 내 것", scores: { racer: 3 } },
      { text: "욕하면서 비켜줌", scores: { road_captain: 2 } },
      { text: "그냥 비켜줌, 뭐 급한가보다", scores: { relaxed: 3 } },
      { text: "놀라서 급브레이크", scores: { nervous: 3 } },
    ],
  },
  {
    id: 3,
    question: "운전 중 음악은?",
    options: [
      { text: "신나는 음악 크게! 드라이브 텐션!", scores: { racer: 2, multitasker: 1 } },
      { text: "잔잔한 음악으로 편안하게", scores: { relaxed: 3 } },
      { text: "내비 안내 집중, 음악은 방해", scores: { nervous: 2, rule_keeper: 1 } },
      { text: "팟캐스트나 라디오", scores: { multitasker: 3 } },
    ],
  },
  {
    id: 4,
    question: "고속도로에서 나의 위치는?",
    options: [
      { text: "1차로 추월차선, 빠르게!", scores: { racer: 3 } },
      { text: "2-3차로에서 주행 흐름에 맞춰", scores: { rule_keeper: 2, road_captain: 1 } },
      { text: "가장 오른쪽 차선, 느긋하게", scores: { relaxed: 3 } },
      { text: "차선 변경 최소화, 그냥 쭉 직진", scores: { nervous: 2 } },
    ],
  },
  {
    id: 5,
    question: "목적지 도착 예상 시간보다 늦어지면?",
    options: [
      { text: "속도 높여! 시간 단축해야지", scores: { racer: 3 } },
      { text: "연락하고 안전하게 감", scores: { rule_keeper: 2, relaxed: 1 } },
      { text: "뭐 어때, 안전이 먼저지", scores: { relaxed: 3 } },
      { text: "스트레스 받음, 초조해짐", scores: { nervous: 3 } },
    ],
  },
  {
    id: 6,
    question: "동승자가 있을 때 운전 스타일은?",
    options: [
      { text: "똑같음, 내 스타일대로", scores: { racer: 2, road_captain: 1 } },
      { text: "좀 더 조심스러워짐", scores: { relaxed: 2, rule_keeper: 1 } },
      { text: "말 걸어서 운전 집중 안 됨", scores: { multitasker: 2, nervous: 1 } },
      { text: "편안한 드라이브 해주려고 노력", scores: { road_captain: 3 } },
    ],
  },
  {
    id: 7,
    question: "갑자기 비가 많이 오면?",
    options: [
      { text: "속도 약간만 줄임, 별거 아님", scores: { racer: 2 } },
      { text: "안전거리 확보하고 속도 줄임", scores: { rule_keeper: 3 } },
      { text: "엄청 천천히, 긴장됨", scores: { nervous: 3 } },
      { text: "잠시 쉬어갈까? 커피나 한잔", scores: { relaxed: 3 } },
    ],
  },
  {
    id: 8,
    question: "처음 가는 길을 갈 때?",
    options: [
      { text: "내비 보면 되지, 일단 고고", scores: { racer: 2, multitasker: 1 } },
      { text: "미리 경로 확인하고 출발", scores: { rule_keeper: 3 } },
      { text: "불안해서 여러 번 확인", scores: { nervous: 3 } },
      { text: "새로운 길 탐험 재밌어!", scores: { relaxed: 2, road_captain: 1 } },
    ],
  },
  {
    id: 9,
    question: "주차할 때 나는?",
    options: [
      { text: "빠르게 쓱 주차 완료", scores: { racer: 2, road_captain: 1 } },
      { text: "천천히 정확하게", scores: { rule_keeper: 2 } },
      { text: "주차 어려운 곳은 피함", scores: { nervous: 3 } },
      { text: "후방 카메라만 믿음", scores: { relaxed: 2, multitasker: 1 } },
    ],
  },
  {
    id: 10,
    question: "장거리 운전 후 기분은?",
    options: [
      { text: "아 재밌었다! 또 하고 싶어", scores: { racer: 2, road_captain: 2 } },
      { text: "피곤하지만 뿌듯함", scores: { rule_keeper: 2, relaxed: 1 } },
      { text: "너무 피곤, 한동안 운전 안 해", scores: { nervous: 3 } },
      { text: "그냥 그랬어, 별 생각 없음", scores: { relaxed: 3 } },
    ],
  },
  {
    id: 11,
    question: "교통 법규에 대한 생각은?",
    options: [
      { text: "기본은 지키는데 융통성 있게", scores: { road_captain: 2, racer: 1 } },
      { text: "철저히 준수해야지", scores: { rule_keeper: 3 } },
      { text: "벌점/과태료가 무서움", scores: { nervous: 2, rule_keeper: 1 } },
      { text: "흐름 따라가면 되는 거 아닌가", scores: { relaxed: 2, multitasker: 1 } },
    ],
  },
  {
    id: 12,
    question: "운전 중 전화가 오면?",
    options: [
      { text: "블루투스로 바로 받음", scores: { multitasker: 3 } },
      { text: "안전한 곳에 차 세우고 받음", scores: { rule_keeper: 3 } },
      { text: "무시, 나중에 확인", scores: { relaxed: 2, racer: 1 } },
      { text: "받아야 하나 말아야 하나 고민하다 끊김", scores: { nervous: 2 } },
    ],
  },
];

export const results: Record<DrivingType, DrivingPersonalityResult> = {
  racer: {
    type: 'racer',
    title: '스피드 레이서',
    emoji: '🏎️',
    description: '핸들 잡으면 레이서 본능 폭발! 빠르고 역동적인 운전을 즐기는 당신, 도로는 당신의 서킷입니다!',
    drivingStyle: '속도 추구형',
    characteristics: ['빠른 가속', '적극적 추월', '시간 단축 추구', '역동적 운전'],
    strengths: ['순발력 좋음', '집중력 높음', '자신감 있음', '상황 판단 빠름'],
    dangers: ['과속 위험', '급정거 위험', '로드레이지 주의', '피로 누적'],
    tips: ['속도계 자주 확인하기', '안전거리 유지하기', '분노 조절 연습', '여유있게 출발하기'],
    musicStyle: 'EDM, 힙합, 신나는 음악',
    roadRageLevel: '높음 (화날 때 주의!)',
  },
  relaxed: {
    type: 'relaxed',
    title: '느긋한 드라이버',
    emoji: '😌',
    description: '운전도 힐링이다! 여유롭고 편안한 드라이브를 즐기는 당신, 급할 거 하나 없는 여유로운 여행자입니다.',
    drivingStyle: '여유 추구형',
    characteristics: ['느긋한 속도', '양보 잘 함', '풍경 감상', '스트레스 제로'],
    strengths: ['안전운전', '연비 좋음', '동승자 편안', '사고 위험 낮음'],
    dangers: ['너무 느려서 민폐', '집중력 저하', '졸음운전 주의', '뒤차 답답함'],
    tips: ['흐름 속도 맞추기', '졸릴 때 휴식', '1차로 피하기', '가끔은 속도 좀 높여보기'],
    musicStyle: '잔잔한 발라드, 재즈, 클래식',
    roadRageLevel: '낮음 (거의 화 안 남)',
  },
  nervous: {
    type: 'nervous',
    title: '긴장형 초보마음',
    emoji: '😰',
    description: '운전만 하면 긴장 100%! 조심성 끝판왕인 당신, 항상 두 손은 핸들에, 눈은 도로에 고정입니다.',
    drivingStyle: '조심 극대화형',
    characteristics: ['항상 긴장', '차선 변경 최소화', '속도 느림', '예민한 반응'],
    strengths: ['매우 조심', '사고 회피', '방어운전', '집중력'],
    dangers: ['과도한 긴장으로 피로', '급작스러운 반응', '자신감 부족', '뒤차에 민폐'],
    tips: ['자신감 가지기', '연습으로 익숙해지기', '심호흡하기', '편한 시간대 운전하기'],
    musicStyle: '잔잔한 음악 or 무음',
    roadRageLevel: '낮음 (남한테 화낼 여유 없음)',
  },
  rule_keeper: {
    type: 'rule_keeper',
    title: '규칙의 수호자',
    emoji: '📋',
    description: '교통법규는 철저히! 원칙대로 안전하게 운전하는 당신, 모범운전자 상 후보입니다!',
    drivingStyle: '원칙 준수형',
    characteristics: ['법규 철저', '안전거리 유지', '방향지시등 필수', '정속 주행'],
    strengths: ['무사고', '예측 가능', '안전운전', '벌점 없음'],
    dangers: ['융통성 부족', '뒤차 답답', '흐름 방해 가능', '고지식해 보임'],
    tips: ['흐름도 고려하기', '상황 따라 융통성도', '너무 원칙만 고집 NO', '여유 가지기'],
    musicStyle: '라디오 교통정보, 뉴스',
    roadRageLevel: '중간 (남이 법규 어기면 화남)',
  },
  road_captain: {
    type: 'road_captain',
    title: '도로 위 선장',
    emoji: '🚗',
    description: '운전은 자신있어! 누구든 태워주는 믿음직한 운전기사, 동승자들의 안전과 편안함을 책임지는 캡틴입니다.',
    drivingStyle: '리드형 드라이버',
    characteristics: ['운전 자신감', '배려 운전', '상황 대처력', '편안한 드라이브'],
    strengths: ['실력 좋음', '동승자 배려', '침착함', '경험 풍부'],
    dangers: ['자만심 주의', '피로 무시', '과신', '남 운전에 답답'],
    tips: ['겸손하게', '피로 관리', '방심 금지', '남 운전도 인정하기'],
    musicStyle: '동승자 취향에 맞춤',
    roadRageLevel: '중간 (화내도 참는 편)',
  },
  multitasker: {
    type: 'multitasker',
    title: '멀티태스킹 드라이버',
    emoji: '📱',
    description: '운전하면서 이것저것! 음악도 팟캐스트도 전화도~ 여러 가지를 동시에 하는 멀티플레이어입니다.',
    drivingStyle: '동시진행형',
    characteristics: ['운전 중 다른 활동', '블루투스 활용', '시간 활용', '능숙한 조작'],
    strengths: ['시간 효율', '멀티태스킹', '적응력', '다양한 정보 습득'],
    dangers: ['집중력 분산', '사고 위험', '산만함', '돌발 상황 대처 늦음'],
    tips: ['운전에 집중하기', '급하지 않은 건 나중에', '핸즈프리 필수', '안전 최우선'],
    musicStyle: '팟캐스트, 라디오, 오디오북',
    roadRageLevel: '낮음 (다른 거 하느라 신경 안 씀)',
  },
};

export function calculateResult(answers: number[]): DrivingPersonalityResult {
  const scores: Record<DrivingType, number> = {
    racer: 0,
    relaxed: 0,
    nervous: 0,
    rule_keeper: 0,
    road_captain: 0,
    multitasker: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as DrivingType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: DrivingType = 'relaxed';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as DrivingType;
    }
  });

  return results[resultType];
}
