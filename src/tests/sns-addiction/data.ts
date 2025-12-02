// sns-addiction 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '아침에 눈 뜨자마자 가장 먼저 하는 것은?',
    options: [
      { text: '알람 끄고 SNS부터 체크', type: 'severe' },
      { text: '카톡 확인하고 인스타 잠깐', type: 'moderate' },
      { text: '일어나서 씻고 나서 폰 봄', type: 'mild' },
      { text: 'SNS는 출근/등교 후에', type: 'healthy' },
    ],
  },
  {
    id: 2,
    text: '밥 먹을 때 스마트폰은?',
    options: [
      { text: '무조건 영상 틀어놓고 먹음', type: 'severe' },
      { text: '혼밥일 때만 봄', type: 'moderate' },
      { text: '급한 연락만 확인', type: 'mild' },
      { text: '밥 먹을 땐 폰 안 봄', type: 'healthy' },
    ],
  },
  {
    id: 3,
    text: '화장실 갈 때 폰은?',
    options: [
      { text: '필수템, 없으면 불안함', type: 'severe' },
      { text: '습관적으로 들고 감', type: 'moderate' },
      { text: '가끔 가져감', type: 'mild' },
      { text: '굳이 안 가져감', type: 'healthy' },
    ],
  },
  {
    id: 4,
    text: 'SNS 알림이 안 오면?',
    options: [
      { text: '불안해서 직접 앱 들어가서 확인', type: 'severe' },
      { text: '좀 신경 쓰이긴 함', type: 'moderate' },
      { text: '나중에 확인하면 됨', type: 'mild' },
      { text: '알림 자체를 꺼놨음', type: 'healthy' },
    ],
  },
  {
    id: 5,
    text: '좋아요/댓글이 안 달리면?',
    options: [
      { text: '삭제하고 다시 올릴까 고민', type: 'severe' },
      { text: '좀 서운하고 신경 쓰임', type: 'moderate' },
      { text: '그럴 수도 있지 뭐', type: 'mild' },
      { text: '애초에 신경 안 씀', type: 'healthy' },
    ],
  },
  {
    id: 6,
    text: '하루에 SNS 사용 시간은?',
    options: [
      { text: '5시간 이상', type: 'severe' },
      { text: '3~5시간', type: 'moderate' },
      { text: '1~3시간', type: 'mild' },
      { text: '1시간 미만', type: 'healthy' },
    ],
  },
  {
    id: 7,
    text: '친구 만나서 얘기할 때?',
    options: [
      { text: '대화 중에도 폰 계속 봄', type: 'severe' },
      { text: '알림 오면 확인함', type: 'moderate' },
      { text: '급한 것만 보고 다시 대화', type: 'mild' },
      { text: '만날 땐 폰 안 봄', type: 'healthy' },
    ],
  },
  {
    id: 8,
    text: '잠들기 전 루틴은?',
    options: [
      { text: 'SNS 보다가 새벽 2~3시에 잠듦', type: 'severe' },
      { text: '30분~1시간 정도 보다 잠', type: 'moderate' },
      { text: '잠깐 보고 폰 내려놓음', type: 'mild' },
      { text: '잠들기 1시간 전부터 폰 안 봄', type: 'healthy' },
    ],
  },
  {
    id: 9,
    text: 'SNS 없이 하루를 보내라면?',
    options: [
      { text: '불가능, 미칠 것 같음', type: 'severe' },
      { text: '힘들겠지만 해볼 수는 있음', type: 'moderate' },
      { text: '좀 심심하겠지만 괜찮음', type: 'mild' },
      { text: '오히려 좋아, 해봤음', type: 'healthy' },
    ],
  },
  {
    id: 10,
    text: '여행/데이트 중 폰 사용은?',
    options: [
      { text: '인스타용 사진 찍느라 바쁨', type: 'severe' },
      { text: '인증샷은 필수, 나머지는 적당히', type: 'moderate' },
      { text: '사진만 찍고 SNS는 나중에', type: 'mild' },
      { text: '폰은 가방 속에, 순간을 즐김', type: 'healthy' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  percentage: string;
  description: string;
  symptoms: string[];
  detoxTip: string;
}> = {
  severe: {
    title: 'SNS 과몰입 단계',
    emoji: '📱🔥',
    percentage: '90~100%',
    description: 'SNS가 일상을 지배하고 있어요. 현실보다 온라인에서 더 많은 시간을 보내고 있으며, 이것이 수면, 관계, 생산성에 영향을 미치고 있을 수 있습니다.',
    symptoms: ['스마트폰 없으면 불안', '현실 대화보다 DM이 편함', '좋아요 수에 감정이 좌우됨', '새벽까지 스크롤'],
    detoxTip: '디지털 디톡스가 필요해요! 하루 1시간 폰 프리 타임부터 시작해보세요. 앱 사용 시간 제한 기능을 활용하는 것도 추천!',
  },
  moderate: {
    title: 'SNS 의존 단계',
    emoji: '📱💭',
    percentage: '60~80%',
    description: 'SNS가 생활의 상당 부분을 차지하고 있어요. 아직은 통제 가능하지만, 조금만 방심하면 과몰입으로 넘어갈 수 있는 경계에 있습니다.',
    symptoms: ['무의식적 앱 실행', '할 일 미루고 SNS', 'FOMO(놓치는 것에 대한 두려움)', '비교하며 우울해짐'],
    detoxTip: '알림 끄기, 앱 폴더 정리, 잠금화면에서 SNS 앱 빼기 등 작은 변화부터 시작해보세요!',
  },
  mild: {
    title: 'SNS 적정 사용',
    emoji: '📱✨',
    percentage: '30~50%',
    description: '건강한 수준으로 SNS를 사용하고 있어요! 필요할 때 쓰고, 필요 없을 때는 내려놓을 줄 아는 균형 잡힌 사용자입니다.',
    symptoms: ['가끔 시간 가는 줄 모름', '그래도 중요한 일 우선', '오프라인 활동도 활발'],
    detoxTip: '지금 패턴을 유지하세요! 가끔 "오늘 폰 얼마나 썼지?" 체크하면서 자기 모니터링하면 더 좋아요.',
  },
  healthy: {
    title: 'SNS 마스터',
    emoji: '🧘‍♂️',
    percentage: '0~20%',
    description: '디지털 미니멀리스트! SNS에 휘둘리지 않고 주도적으로 사용하는 당신. 현실에서의 삶에 집중하며 건강한 디지털 라이프를 살고 있습니다.',
    symptoms: ['SNS 없어도 불안 없음', '현실 관계가 더 중요', '목적 있을 때만 사용'],
    detoxTip: '당신이 오히려 주변에 디톡스 팁을 알려주세요! 이 균형감각을 계속 유지하시길 :)',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    severe: 0,
    moderate: 0,
    mild: 0,
    healthy: 0,
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
