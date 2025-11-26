// 정신연령 테스트 - 실제 나이 vs 정신 나이 측정

export const questions = [
  {
    id: 1,
    question: "주말에 가장 하고 싶은 활동은?",
    options: [
      { text: "친구들과 파티나 클럽 가기", mentalAge: 18 },
      { text: "새로운 카페나 맛집 탐방", mentalAge: 25 },
      { text: "집에서 넷플릭스 정주행", mentalAge: 30 },
      { text: "조용한 곳에서 독서나 명상", mentalAge: 45 },
      { text: "가족과 함께 시간 보내기", mentalAge: 40 },
    ],
  },
  {
    id: 2,
    question: "SNS를 얼마나 자주 확인하시나요?",
    options: [
      { text: "수시로 확인함 (하루 20번 이상)", mentalAge: 16 },
      { text: "자주 확인함 (하루 10번 정도)", mentalAge: 22 },
      { text: "가끔 확인함 (하루 2-3번)", mentalAge: 32 },
      { text: "필요할 때만 확인함", mentalAge: 42 },
      { text: "거의 안 함 / 안 함", mentalAge: 55 },
    ],
  },
  {
    id: 3,
    question: "새로운 트렌드나 유행에 대한 태도는?",
    options: [
      { text: "항상 최신 트렌드를 따라가려고 함", mentalAge: 18 },
      { text: "관심 있는 분야는 따라감", mentalAge: 26 },
      { text: "알고는 있지만 굳이 따라가지 않음", mentalAge: 35 },
      { text: "트렌드에 별로 관심 없음", mentalAge: 48 },
      { text: "내 스타일이 가장 좋음", mentalAge: 55 },
    ],
  },
  {
    id: 4,
    question: "갈등 상황에서 어떻게 대처하시나요?",
    options: [
      { text: "감정적으로 반응하고 바로 표현함", mentalAge: 15 },
      { text: "일단 화내고 나중에 후회함", mentalAge: 22 },
      { text: "잠시 생각한 후 대화로 해결", mentalAge: 35 },
      { text: "상대방 입장을 먼저 이해하려 함", mentalAge: 45 },
      { text: "큰 틀에서 보고 중요하지 않으면 넘김", mentalAge: 55 },
    ],
  },
  {
    id: 5,
    question: "돈을 쓸 때 당신의 스타일은?",
    options: [
      { text: "갖고 싶으면 바로 지름", mentalAge: 17 },
      { text: "월급 들어오면 쓰고 싶은 거 먼저 삼", mentalAge: 23 },
      { text: "계획적으로 쓰려고 노력함", mentalAge: 32 },
      { text: "저축 후 남는 돈으로만 소비", mentalAge: 42 },
      { text: "투자와 저축 비율을 철저히 관리", mentalAge: 50 },
    ],
  },
  {
    id: 6,
    question: "아침에 일어나는 시간은?",
    options: [
      { text: "점심쯤 (올빼미족)", mentalAge: 18 },
      { text: "10시-11시 사이", mentalAge: 24 },
      { text: "8시-9시 사이", mentalAge: 32 },
      { text: "6시-7시 사이", mentalAge: 45 },
      { text: "5시-6시 사이 (새벽형)", mentalAge: 58 },
    ],
  },
  {
    id: 7,
    question: "새로운 기술이나 앱을 배울 때?",
    options: [
      { text: "금방 익히고 남들에게 알려줌", mentalAge: 20 },
      { text: "필요하면 빨리 배움", mentalAge: 28 },
      { text: "천천히 익힘", mentalAge: 38 },
      { text: "누군가 알려주면 배움", mentalAge: 48 },
      { text: "굳이 새로운 건 안 배워도 됨", mentalAge: 60 },
    ],
  },
  {
    id: 8,
    question: "친구 관계에서 중요하게 생각하는 것은?",
    options: [
      { text: "함께 놀고 재미있는 시간", mentalAge: 18 },
      { text: "공통 관심사와 취미", mentalAge: 25 },
      { text: "서로 의지할 수 있는 관계", mentalAge: 35 },
      { text: "오래 알고 신뢰할 수 있는 관계", mentalAge: 45 },
      { text: "적은 수의 깊은 관계", mentalAge: 52 },
    ],
  },
  {
    id: 9,
    question: "실패했을 때 당신의 반응은?",
    options: [
      { text: "좌절하고 한동안 우울함", mentalAge: 18 },
      { text: "실패 원인을 남 탓으로 돌림", mentalAge: 22 },
      { text: "아쉽지만 다음에 더 잘하려 함", mentalAge: 32 },
      { text: "실패에서 배움을 찾음", mentalAge: 42 },
      { text: "실패도 인생의 일부로 받아들임", mentalAge: 55 },
    ],
  },
  {
    id: 10,
    question: "건강 관리에 대한 생각은?",
    options: [
      { text: "아직 젊어서 신경 안 씀", mentalAge: 17 },
      { text: "가끔 생각나면 운동함", mentalAge: 25 },
      { text: "정기적으로 운동하려고 노력", mentalAge: 35 },
      { text: "식단과 운동 모두 신경 씀", mentalAge: 45 },
      { text: "건강이 가장 중요하다고 생각함", mentalAge: 55 },
    ],
  },
  {
    id: 11,
    question: "모르는 것이 있을 때?",
    options: [
      { text: "귀찮아서 그냥 넘김", mentalAge: 18 },
      { text: "친구한테 물어봄", mentalAge: 22 },
      { text: "바로 검색해서 찾아봄", mentalAge: 28 },
      { text: "깊이 있게 공부해봄", mentalAge: 38 },
      { text: "전문가에게 물어보거나 책을 읽음", mentalAge: 50 },
    ],
  },
  {
    id: 12,
    question: "여행을 간다면?",
    options: [
      { text: "핫한 여행지에서 인생샷 찍기", mentalAge: 20 },
      { text: "액티비티와 관광 위주", mentalAge: 26 },
      { text: "맛집과 관광을 적절히", mentalAge: 33 },
      { text: "휴식과 힐링 위주", mentalAge: 42 },
      { text: "문화와 역사를 배우는 여행", mentalAge: 52 },
    ],
  },
  {
    id: 13,
    question: "가장 중요하게 생각하는 가치는?",
    options: [
      { text: "재미와 즐거움", mentalAge: 18 },
      { text: "성공과 성취", mentalAge: 28 },
      { text: "안정과 균형", mentalAge: 38 },
      { text: "가족과 관계", mentalAge: 45 },
      { text: "건강과 평화", mentalAge: 55 },
    ],
  },
  {
    id: 14,
    question: "스트레스 해소 방법은?",
    options: [
      { text: "술 마시거나 파티", mentalAge: 20 },
      { text: "게임이나 유튜브 시청", mentalAge: 24 },
      { text: "운동이나 취미 활동", mentalAge: 32 },
      { text: "산책이나 명상", mentalAge: 42 },
      { text: "충분한 수면과 휴식", mentalAge: 50 },
    ],
  },
  {
    id: 15,
    question: "인생에서 가장 배우고 싶은 것은?",
    options: [
      { text: "돈 많이 버는 방법", mentalAge: 22 },
      { text: "인간관계 스킬", mentalAge: 28 },
      { text: "전문적인 지식이나 기술", mentalAge: 35 },
      { text: "삶의 지혜와 철학", mentalAge: 45 },
      { text: "내면의 평화를 찾는 법", mentalAge: 55 },
    ],
  },
];

export interface MentalAgeResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  mentalAge: number;
  ageGroup: string;
  characteristics: string[];
  strengths: string[];
  improvements: string[];
  advice: string[];
  compatibility: string[];
  incompatibility: string[];
}

// 결과 유형 정의
const resultTypes: Record<string, Omit<MentalAgeResult, 'mentalAge'>> = {
  teen: {
    type: 'teen',
    title: '청소년 마음',
    emoji: '🌟',
    ageGroup: '10대',
    description: '당신의 정신연령은 10대입니다! 순수하고 열정적인 마음을 가지고 있어요. 새로운 것에 대한 호기심이 넘치고, 에너지가 가득합니다. 다만 가끔은 충동적인 면이 있을 수 있어요.',
    characteristics: ['호기심이 많음', '열정적', '트렌드에 민감', '감정 표현이 솔직함', '새로운 경험 추구'],
    strengths: ['무한한 에너지', '빠른 적응력', '창의적 사고', '두려움 없는 도전'],
    improvements: ['인내심 기르기', '장기적 계획 세우기', '감정 조절 연습', '책임감 높이기'],
    advice: ['지금의 열정을 소중히 하세요', '경험을 통해 배우는 시간입니다', '멘토를 찾아보세요'],
    compatibility: ['20대 정신연령', '10대 정신연령'],
    incompatibility: ['50대 이상 정신연령'],
  },
  twenties: {
    type: 'twenties',
    title: '청춘의 마음',
    emoji: '🔥',
    ageGroup: '20대',
    description: '당신의 정신연령은 20대입니다! 꿈과 야망이 가득하고, 자아를 찾아가는 시기의 마음을 가지고 있어요. 도전을 두려워하지 않고 자신만의 길을 개척해 나가고 있습니다.',
    characteristics: ['야망이 있음', '자아 탐색 중', '사회적 활동 활발', '자기 발전 추구', '유연한 사고'],
    strengths: ['높은 적응력', '배움에 대한 열정', '네트워킹 능력', '창의적 문제해결'],
    improvements: ['재정 관리 능력', '장기적 비전 수립', '감정의 기복 조절', '인내심'],
    advice: ['실패를 두려워하지 마세요', '다양한 경험을 쌓으세요', '저축 습관을 들이세요'],
    compatibility: ['20대 정신연령', '30대 정신연령'],
    incompatibility: ['10대 정신연령', '50대 이상 정신연령'],
  },
  thirties: {
    type: 'thirties',
    title: '성숙한 청춘',
    emoji: '💼',
    ageGroup: '30대',
    description: '당신의 정신연령은 30대입니다! 균형 잡힌 시각과 현실적인 사고를 가지고 있어요. 경험에서 배운 지혜와 여전히 남아있는 열정이 조화를 이루고 있습니다.',
    characteristics: ['현실적 사고', '균형 잡힌 생활', '책임감 있음', '목표 지향적', '효율성 추구'],
    strengths: ['의사결정 능력', '시간 관리', '전문성', '안정적인 관계 유지'],
    improvements: ['유연성 유지', '새로운 도전', '워라밸 관리', '건강 관리'],
    advice: ['지금의 안정을 즐기되 도전을 멈추지 마세요', '건강에 투자하세요', '관계를 소중히 하세요'],
    compatibility: ['30대 정신연령', '40대 정신연령'],
    incompatibility: ['10대 정신연령'],
  },
  forties: {
    type: 'forties',
    title: '현자의 마음',
    emoji: '🧘',
    ageGroup: '40대',
    description: '당신의 정신연령은 40대입니다! 풍부한 경험에서 오는 지혜를 가지고 있어요. 삶의 우선순위가 명확하고, 무엇이 정말 중요한지 알고 있습니다.',
    characteristics: ['지혜로움', '우선순위 명확', '감정 조절 능숙', '깊은 인간관계', '자기 이해 높음'],
    strengths: ['인생 경험', '감정적 안정', '멘토링 능력', '위기 관리'],
    improvements: ['변화에 대한 개방성', '새로운 기술 습득', '체력 관리', '젊은 세대 이해'],
    advice: ['경험을 나누세요', '새로운 것에도 열린 마음을', '건강이 가장 큰 자산입니다'],
    compatibility: ['30대 정신연령', '40대 정신연령', '50대 정신연령'],
    incompatibility: ['10대 정신연령', '20대 정신연령'],
  },
  fiftyPlus: {
    type: 'fiftyPlus',
    title: '달관의 경지',
    emoji: '🌳',
    ageGroup: '50대 이상',
    description: '당신의 정신연령은 50대 이상입니다! 인생의 본질을 이해하고 있는 깊은 내면을 가지고 있어요. 작은 것에 연연하지 않고, 큰 그림을 볼 줄 아는 지혜가 있습니다.',
    characteristics: ['달관적 태도', '내면의 평화', '본질을 봄', '감사하는 마음', '관조적 시선'],
    strengths: ['흔들리지 않는 중심', '깊은 통찰력', '인내와 포용', '삶의 지혜'],
    improvements: ['젊은 감각 유지', '신기술 적응', '유연한 사고', '세대 소통'],
    advice: ['젊은 세대에게 배울 점도 있어요', '몸과 마음 건강을 챙기세요', '경험을 나누는 것도 가치있습니다'],
    compatibility: ['40대 정신연령', '50대 이상 정신연령'],
    incompatibility: ['10대 정신연령', '20대 정신연령'],
  },
};

export function calculateMentalAgeResult(answers: number[]): MentalAgeResult {
  // 각 답변의 정신연령 합산
  let totalMentalAge = 0;
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options[answerIndex];
    totalMentalAge += option.mentalAge;
  });

  // 평균 정신연령 계산
  const mentalAge = Math.round(totalMentalAge / questions.length);

  // 결과 유형 결정
  let resultType: string;
  
  if (mentalAge <= 19) {
    resultType = 'teen';
  } else if (mentalAge <= 29) {
    resultType = 'twenties';
  } else if (mentalAge <= 39) {
    resultType = 'thirties';
  } else if (mentalAge <= 49) {
    resultType = 'forties';
  } else {
    resultType = 'fiftyPlus';
  }

  const result = resultTypes[resultType];

  return {
    ...result,
    mentalAge,
  };
}
