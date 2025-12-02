// mbti-dark-side 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '극심한 스트레스를 받으면 가장 먼저 나타나는 반응은?',
    options: [
      { text: '모든 것을 완벽하게 통제하려고 함', type: 'control' },
      { text: '갑자기 충동적이고 무모해짐', type: 'impulsive' },
      { text: '사람들을 밀어내고 혼자 고립됨', type: 'withdraw' },
      { text: '감정 폭발, 예민해져서 다 싸움', type: 'explosive' },
    ],
  },
  {
    id: 2,
    text: '스트레스 상황에서 주변 사람들에게 하는 행동은?',
    options: [
      { text: '잔소리와 비판이 늘어남', type: 'control' },
      { text: '약속을 펑크내거나 연락 씹음', type: 'impulsive' },
      { text: '냉담하고 무관심해짐', type: 'withdraw' },
      { text: '사소한 것에 화내고 눈물 터짐', type: 'explosive' },
    ],
  },
  {
    id: 3,
    text: '번아웃 직전일 때 드는 생각은?',
    options: [
      { text: '"내가 다 해야 해, 아무도 못 믿어"', type: 'control' },
      { text: '"다 때려치우고 여행이나 갈까"', type: 'impulsive' },
      { text: '"그냥 사라지고 싶다"', type: 'withdraw' },
      { text: '"왜 다들 나한테만 이래?"', type: 'explosive' },
    ],
  },
  {
    id: 4,
    text: '힘들 때 SNS 사용 패턴은?',
    options: [
      { text: '남들 피드 감시하며 비교함', type: 'control' },
      { text: '충동적으로 과격한 글 올림', type: 'impulsive' },
      { text: '모든 SNS 삭제하고 잠수', type: 'withdraw' },
      { text: '우울한 감성글 폭풍 업로드', type: 'explosive' },
    ],
  },
  {
    id: 5,
    text: '직장/학교에서 한계에 다다르면?',
    options: [
      { text: '마이크로매니징, 모든 걸 체크함', type: 'control' },
      { text: '갑자기 퇴사/자퇴 선언', type: 'impulsive' },
      { text: '존재감 없이 조용히 버팀', type: 'withdraw' },
      { text: '불만 터뜨리며 갈등 유발', type: 'explosive' },
    ],
  },
  {
    id: 6,
    text: '스트레스성 소비 패턴은?',
    options: [
      { text: '오히려 아무것도 안 삼 (통제)', type: 'control' },
      { text: '충동구매 폭발, 카드값 폭탄', type: 'impulsive' },
      { text: '관심 없음, 뭘 사도 기쁘지 않음', type: 'withdraw' },
      { text: '자기 위로용 플렉스', type: 'explosive' },
    ],
  },
  {
    id: 7,
    text: '연인/친구에게 상처받으면?',
    options: [
      { text: '상대 허점 분석하고 논리로 공격', type: 'control' },
      { text: '바로 관계 정리 선언', type: 'impulsive' },
      { text: '아무 말 없이 거리두기', type: 'withdraw' },
      { text: '감정 쏟아내며 대판 싸움', type: 'explosive' },
    ],
  },
  {
    id: 8,
    text: '극한의 피로감이 몰려오면?',
    options: [
      { text: '더 완벽해지려고 무리함', type: 'control' },
      { text: '갑자기 올나잇 놀러 감', type: 'impulsive' },
      { text: '방에서 며칠째 안 나옴', type: 'withdraw' },
      { text: '이유 없이 눈물이 남', type: 'explosive' },
    ],
  },
  {
    id: 9,
    text: '흑화 모드일 때 자신에 대한 생각은?',
    options: [
      { text: '"난 할 수 있어, 더 해야 해"', type: 'control' },
      { text: '"어차피 한 번 사는 인생"', type: 'impulsive' },
      { text: '"난 필요 없는 존재야"', type: 'withdraw' },
      { text: '"왜 나만 이렇게 힘들어?"', type: 'explosive' },
    ],
  },
  {
    id: 10,
    text: '스트레스 해소할 때 선택하는 방법은?',
    options: [
      { text: '계획 세우고 정리정돈', type: 'control' },
      { text: '술, 파티, 새로운 자극', type: 'impulsive' },
      { text: '혼자 조용히 회복', type: 'withdraw' },
      { text: '누군가에게 하소연', type: 'explosive' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  description: string;
  darkSide: string;
  trigger: string;
  recovery: string;
  mbtiMatch: string[];
}> = {
  control: {
    title: '완벽주의 흑화형',
    emoji: '🎯',
    description: '스트레스를 받으면 모든 것을 통제하려는 욕구가 폭발합니다. 자신과 타인 모두에게 높은 기준을 요구하며, 완벽하지 않으면 불안해집니다.',
    darkSide: '마이크로매니징, 잔소리, 비판적 태도, 강박적 행동',
    trigger: '불확실한 상황, 타인의 실수, 계획 틀어짐',
    recovery: '완벽하지 않아도 괜찮다는 것을 인정하기. "Good enough"도 충분해요.',
    mbtiMatch: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ'],
  },
  impulsive: {
    title: '충동 폭주형',
    emoji: '🔥',
    description: '스트레스가 쌓이면 갑자기 모든 것을 내던지고 싶어집니다. 무모한 결정, 충동적 행동으로 나중에 후회할 일을 만들기도 합니다.',
    darkSide: '충동구매, 갑작스런 관계 정리, 무계획 행동, 자극 추구',
    trigger: '지루함, 구속받는 느낌, 책임감 과부하',
    recovery: '24시간 룰: 큰 결정은 하루 뒤에. 충동은 파도처럼 지나갑니다.',
    mbtiMatch: ['ESTP', 'ESFP', 'ENTP', 'ENFP'],
  },
  withdraw: {
    title: '고립 은둔형',
    emoji: '🌑',
    description: '힘들면 세상과 단절하고 싶어집니다. 연락을 피하고, 방에 틀어박혀 혼자만의 세계로 도피합니다. 겉으론 괜찮아 보여도 속은 텅 비어있죠.',
    darkSide: '잠수, 무기력, 감정 차단, 관계 회피',
    trigger: '사회적 에너지 고갈, 거절 경험, 기대에 못 미침',
    recovery: '작은 연결부터 시작하기. 신뢰하는 한 사람에게만이라도 손 내밀어보세요.',
    mbtiMatch: ['INTP', 'INFP', 'ISTP', 'ISFP'],
  },
  explosive: {
    title: '감정 폭발형',
    emoji: '💥',
    description: '참고 참다가 한 번에 터지는 스타일. 평소엔 괜찮다가도 임계점을 넘으면 감정의 쓰나미가 몰려옵니다. 후폭풍도 크죠.',
    darkSide: '화, 눈물, 예민함, 말실수, 관계 갈등',
    trigger: '무시당하는 느낌, 불공평함, 감정적 상처',
    recovery: '감정 일기 쓰기. 터지기 전에 작은 밸브로 조금씩 풀어주세요.',
    mbtiMatch: ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ'],
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    control: 0,
    impulsive: 0,
    withdraw: 0,
    explosive: 0,
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
