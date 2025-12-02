// luck-magnet 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '복권을 사면 결과는?',
    options: [
      { text: '가끔 소액이라도 당첨됨', type: 'lucky' },
      { text: '한 번도 당첨된 적 없음', type: 'unlucky' },
      { text: '사본 적 없음', type: 'neutral' },
      { text: '살 생각조차 안 함 (어차피 안 됨)', type: 'pessimist' },
    ],
  },
  {
    id: 2,
    text: '뽑기/가챠/랜덤박스 운은?',
    options: [
      { text: '원하는 거 잘 뽑음', type: 'lucky' },
      { text: '꽝만 뽑음', type: 'unlucky' },
      { text: '운빨보다 확률 계산함', type: 'neutral' },
      { text: '돈 낭비라 안 함', type: 'pessimist' },
    ],
  },
  {
    id: 3,
    text: '길에서 돈이나 좋은 것을 주운 적 있나요?',
    options: [
      { text: '종종 있음', type: 'lucky' },
      { text: '한 번도 없음', type: 'unlucky' },
      { text: '있긴 한데 별로 기억 안 남', type: 'neutral' },
      { text: '주우면 오히려 불안함', type: 'pessimist' },
    ],
  },
  {
    id: 4,
    text: '시험/면접에서 찍은 문제가 맞은 적?',
    options: [
      { text: '자주 맞음, 감이 좋음', type: 'lucky' },
      { text: '찍으면 다 틀림', type: 'unlucky' },
      { text: '찍지 않고 공부함', type: 'neutral' },
      { text: '찍어서 맞을 리 없다고 생각', type: 'pessimist' },
    ],
  },
  {
    id: 5,
    text: '여행 갈 때 날씨는?',
    options: [
      { text: '항상 맑음, 여행 날씨 좋음', type: 'lucky' },
      { text: '꼭 비 오거나 태풍', type: 'unlucky' },
      { text: '날씨는 운보다 시즌 문제', type: 'neutral' },
      { text: '기대 안 해서 실망도 없음', type: 'pessimist' },
    ],
  },
  {
    id: 6,
    text: '줄 서 있을 때 경험은?',
    options: [
      { text: '내 줄이 제일 빨리 줄어듦', type: 'lucky' },
      { text: '항상 내 줄만 안 줄어듦', type: 'unlucky' },
      { text: '그냥 기다림, 다 비슷함', type: 'neutral' },
      { text: '줄 서는 것 자체가 싫음', type: 'pessimist' },
    ],
  },
  {
    id: 7,
    text: '우연히 좋은 기회를 얻은 적?',
    options: [
      { text: '자주 있음 (우연한 만남, 기회 등)', type: 'lucky' },
      { text: '그런 적 없음', type: 'unlucky' },
      { text: '기회는 만드는 것', type: 'neutral' },
      { text: '좋은 일은 남 얘기', type: 'pessimist' },
    ],
  },
  {
    id: 8,
    text: '물건을 잃어버리면?',
    options: [
      { text: '신기하게 다시 찾게 됨', type: 'lucky' },
      { text: '영영 못 찾음', type: 'unlucky' },
      { text: '잃어버리지 않게 조심함', type: 'neutral' },
      { text: '찾아봤자 안 나올 거라 포기', type: 'pessimist' },
    ],
  },
  {
    id: 9,
    text: '게임에서 레어 아이템 드랍률은?',
    options: [
      { text: '남들보다 잘 나옴', type: 'lucky' },
      { text: '확률 뚫는 건 남 얘기', type: 'unlucky' },
      { text: '확률은 확률일 뿐', type: 'neutral' },
      { text: '그래서 과금 안 함', type: 'pessimist' },
    ],
  },
  {
    id: 10,
    text: '인생 전반적으로 운이 좋다고 생각하나요?',
    options: [
      { text: '네, 럭키비키 체질', type: 'lucky' },
      { text: '아니요, 언럭키 체질', type: 'unlucky' },
      { text: '운보다 노력이 중요', type: 'neutral' },
      { text: '운 같은 건 믿지 않음', type: 'pessimist' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  luckLevel: string;
  description: string;
  evidence: string[];
  advice: string;
}> = {
  lucky: {
    title: '럭키비키 체질',
    emoji: '🍀',
    luckLevel: '행운 지수 90%',
    description: '타고난 행운의 별 아래 태어난 당신! 뽑기도 잘 되고, 우연한 기회도 자주 오고, 위기도 운으로 넘기는 럭키 체질입니다.',
    evidence: ['뽑기 잘 됨', '좋은 우연 자주 경험', '위기 회피 능력', '긍정적 에너지'],
    advice: '행운을 당연하게 여기지 말고 감사하세요! 그리고 주변에 운 좀 나눠주세요 😊',
  },
  unlucky: {
    title: '언럭키 체질',
    emoji: '🌧️',
    luckLevel: '행운 지수 30%',
    description: '운이 따라주지 않는다고 느끼는 당신... 하지만 운이 없어서 더 노력하고, 그래서 결국 성공하는 케이스가 많아요!',
    evidence: ['뽑기 안 됨', '비 오는 날 우산 없음', '줄이 안 줄어듦', '찍으면 틀림'],
    advice: '운은 순환합니다. 지금 쌓인 불운은 나중에 대박으로 돌아올지도?!',
  },
  neutral: {
    title: '실력주의자',
    emoji: '📊',
    luckLevel: '행운 의존도 0%',
    description: '운을 믿기보다 노력과 확률을 믿는 현실주의자! 행운에 기대지 않고 자신의 힘으로 결과를 만들어가는 타입입니다.',
    evidence: ['논리적 사고', '확률 계산', '노력 중시', '운에 휘둘리지 않음'],
    advice: '가끔은 운에 맡겨보는 것도 재미있어요. 인생엔 우연도 필요합니다!',
  },
  pessimist: {
    title: '기대 제로형',
    emoji: '😶',
    luckLevel: '행운 기대치 0%',
    description: '아예 운을 기대하지 않는 스타일. 실망하지 않으려고 기대를 낮추지만, 그래서 좋은 일이 와도 못 알아볼 수 있어요.',
    evidence: ['운을 믿지 않음', '기대 최소화', '현실적 비관', '방어적 태도'],
    advice: '가끔은 좋은 일을 기대해보세요. 믿으면 보이는 것들이 있습니다!',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    lucky: 0,
    unlucky: 0,
    neutral: 0,
    pessimist: 0,
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
