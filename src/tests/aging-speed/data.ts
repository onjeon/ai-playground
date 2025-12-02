// aging-speed 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '요즘 세대 유행어/밈을 얼마나 알고 있나요?',
    options: [
      { text: '다 알고 자연스럽게 사용함', type: 'young' },
      { text: '대충 알지만 쓰진 않음', type: 'match' },
      { text: '뭔 소린지 모르겠음', type: 'old' },
      { text: '알 필요성을 못 느낌', type: 'ancient' },
    ],
  },
  {
    id: 2,
    text: '새로운 앱/서비스가 나오면?',
    options: [
      { text: '바로 깔아서 써봄', type: 'young' },
      { text: '후기 보고 괜찮으면 깔아봄', type: 'match' },
      { text: '필요할 때만 씀', type: 'old' },
      { text: '기존 거 쓰는 게 편함', type: 'ancient' },
    ],
  },
  {
    id: 3,
    text: '밤새는 것에 대해 어떻게 생각하나요?',
    options: [
      { text: '가끔 밤새도 다음 날 멀쩡함', type: 'young' },
      { text: '할 수는 있는데 회복이 오래 걸림', type: 'match' },
      { text: '밤새면 며칠간 힘듦', type: 'old' },
      { text: '밤새는 건 불가능', type: 'ancient' },
    ],
  },
  {
    id: 4,
    text: '건강에 대한 관심은?',
    options: [
      { text: '건강? 아직 젊어서 괜찮음', type: 'young' },
      { text: '적당히 운동하고 신경 씀', type: 'match' },
      { text: '영양제 챙겨먹고 건강검진 받음', type: 'old' },
      { text: '매일 건강이 최대 관심사', type: 'ancient' },
    ],
  },
  {
    id: 5,
    text: '금요일 밤 계획은?',
    options: [
      { text: '친구들이랑 밤새 놀기', type: 'young' },
      { text: '술 한잔하고 적당히 귀가', type: 'match' },
      { text: '집에서 넷플릭스가 최고', type: 'old' },
      { text: '일찍 자는 게 행복', type: 'ancient' },
    ],
  },
  {
    id: 6,
    text: '새로운 음악/아티스트에 대해?',
    options: [
      { text: '신곡 나오면 바로 들어봄', type: 'young' },
      { text: '유명하면 들어봄', type: 'match' },
      { text: '예전 노래가 더 좋음', type: 'old' },
      { text: '요즘 노래는 시끄러움', type: 'ancient' },
    ],
  },
  {
    id: 7,
    text: '운동할 때 회복 속도는?',
    options: [
      { text: '하루 자면 끄떡없음', type: 'young' },
      { text: '이틀 정도면 괜찮아짐', type: 'match' },
      { text: '일주일은 뻐근함', type: 'old' },
      { text: '운동하면 다침', type: 'ancient' },
    ],
  },
  {
    id: 8,
    text: '새로운 것을 배우는 것에 대해?',
    options: [
      { text: '금방 배우고 재밌음', type: 'young' },
      { text: '노력하면 할 수 있음', type: 'match' },
      { text: '예전보다 머리가 안 돌아감', type: 'old' },
      { text: '새로운 건 피곤함', type: 'ancient' },
    ],
  },
  {
    id: 9,
    text: '요즘 자주 하는 말은?',
    options: [
      { text: '"이거 개꿀ㅋㅋ"', type: 'young' },
      { text: '"그래 뭐 괜찮네"', type: 'match' },
      { text: '"요즘 애들은..."', type: 'old' },
      { text: '"내가 젊었을 때는..."', type: 'ancient' },
    ],
  },
  {
    id: 10,
    text: '미래에 대한 생각은?',
    options: [
      { text: '아직 뭐든 할 수 있음', type: 'young' },
      { text: '현실적으로 계획 중', type: 'match' },
      { text: '이미 많이 살았음', type: 'old' },
      { text: '남은 시간이 아쉬움', type: 'ancient' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  mentalAge: string;
  description: string;
  characteristic: string[];
  tip: string;
}> = {
  young: {
    title: '영원한 청춘',
    emoji: '🌱',
    mentalAge: '실제 나이 - 10세',
    description: '마음은 영원히 20대! 새로운 것에 열려있고, 에너지가 넘치며, 트렌드에도 민감합니다. 나이는 숫자에 불과하다는 걸 증명하는 타입!',
    characteristic: ['호기심 왕성', '도전 정신', '유연한 사고', '높은 적응력'],
    tip: '젊은 마음을 유지하면서도 몸 관리는 챙기세요! 마음은 20대여도 몸은 솔직합니다.',
  },
  match: {
    title: '균형 잡힌 성숙함',
    emoji: '⚖️',
    mentalAge: '실제 나이와 비슷',
    description: '나이에 맞게 성숙하면서도 유연함을 잃지 않는 타입! 젊음의 활력과 어른의 지혜를 적절히 갖추고 있습니다.',
    characteristic: ['안정감', '현실적 사고', '적당한 모험심', '세대 소통 능력'],
    tip: '지금의 균형감각을 잘 유지하세요! 너무 어리지도, 늙지도 않은 최적의 상태입니다.',
  },
  old: {
    title: '조기 은퇴 마인드',
    emoji: '🛋️',
    mentalAge: '실제 나이 + 10세',
    description: '편안함과 안정을 추구하는 타입. 새로운 것보다 익숙한 것이 좋고, 체력 관리에 신경 쓰며, 조용한 일상을 선호합니다.',
    characteristic: ['안정 추구', '건강 관심 높음', '익숙한 것 선호', '에너지 절약형'],
    tip: '가끔은 새로운 도전도 해보세요! 나이는 마음먹기에 달렸습니다.',
  },
  ancient: {
    title: '마음의 어르신',
    emoji: '👴',
    mentalAge: '실제 나이 + 20세',
    description: '이미 인생을 다 산 것 같은 마음... 새로운 것에 관심이 없고, 예전이 좋았다고 생각하며, 변화보다 유지를 원합니다.',
    characteristic: ['보수적', '과거 지향', '변화 싫어함', '체력 저하 인식'],
    tip: '아직 갈 길이 멀어요! 작은 것부터 새로운 시도를 해보면 젊어질 수 있습니다.',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    young: 0,
    match: 0,
    old: 0,
    ancient: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  return Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}
