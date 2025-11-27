// 질투 유형 테스트 - 연애에서 나의 질투 성향 분석

export const questions = [
  {
    id: 1,
    question: "연인이 이성 친구와 단둘이 밥을 먹는다고 하면?",
    options: [
      { text: "당연히 안 돼! 뭐하는 거야", type: "possessive", score: 5 },
      { text: "누군지, 왜 만나는지 물어봄", type: "detective", score: 4 },
      { text: "좀 불편하지만 티 안 냄", type: "hidden", score: 3 },
      { text: "그럴 수도 있지, 뭐", type: "chill", score: 1 },
    ],
  },
  {
    id: 2,
    question: "연인의 SNS에 모르는 이성이 좋아요를 계속 누르면?",
    options: [
      { text: "누구야? 당장 차단해", type: "possessive", score: 5 },
      { text: "몰래 그 사람 계정 염탐함", type: "detective", score: 4 },
      { text: "신경 쓰이지만 모른 척", type: "hidden", score: 3 },
      { text: "좋아요가 뭐 어때서", type: "chill", score: 1 },
    ],
  },
  {
    id: 3,
    question: "연인이 전 애인 얘기를 꺼내면?",
    options: [
      { text: "왜 갑자기?! 아직도 생각나?", type: "possessive", score: 5 },
      { text: "자연스럽게 더 캐묻게 됨", type: "detective", score: 4 },
      { text: "듣는 척하면서 속으로 불편", type: "hidden", score: 3 },
      { text: "과거는 과거지", type: "chill", score: 1 },
    ],
  },
  {
    id: 4,
    question: "연인이 다른 이성을 보고 '잘생겼다/예쁘다'라고 하면?",
    options: [
      { text: "나보다 좋아? 화남", type: "possessive", score: 5 },
      { text: "어떤 점이? 왜? 계속 질문", type: "detective", score: 4 },
      { text: "웃으면서 넘기지만 기분 다운", type: "hidden", score: 3 },
      { text: "나도 같이 감상함", type: "chill", score: 1 },
    ],
  },
  {
    id: 5,
    question: "연인의 핸드폰에 이성에게 온 카톡이 보이면?",
    options: [
      { text: "누구야? 보여줘", type: "possessive", score: 5 },
      { text: "슬쩍 확인하고 싶음", type: "detective", score: 4 },
      { text: "궁금하지만 참음", type: "hidden", score: 3 },
      { text: "관심 없음", type: "chill", score: 1 },
    ],
  },
  {
    id: 6,
    question: "연인이 이성과 같이 찍은 사진을 올리면?",
    options: [
      { text: "왜 나한테 말 안 해? 내려", type: "possessive", score: 5 },
      { text: "누군지, 어디서 찍은 건지 추적", type: "detective", score: 4 },
      { text: "불편하지만 터치 안 함", type: "hidden", score: 3 },
      { text: "좋은 사진이네~", type: "chill", score: 1 },
    ],
  },
  {
    id: 7,
    question: "연인이 술자리에서 늦게 연락이 오면?",
    options: [
      { text: "전화 계속 함. 뭐 하는 거야", type: "possessive", score: 5 },
      { text: "누구랑 있는지 파악하려 함", type: "detective", score: 4 },
      { text: "걱정되지만 연락 안 함", type: "hidden", score: 3 },
      { text: "잘 놀다 와~", type: "chill", score: 1 },
    ],
  },
  {
    id: 8,
    question: "연인이 이성 동료와 야근을 자주 하면?",
    options: [
      { text: "매번 그 사람이야? 이상해", type: "possessive", score: 5 },
      { text: "그 동료에 대해 알아봄", type: "detective", score: 4 },
      { text: "일이니까... 하면서도 찝찝", type: "hidden", score: 3 },
      { text: "일 열심히 하네", type: "chill", score: 1 },
    ],
  },
  {
    id: 9,
    question: "연인이 나 대신 친구 약속을 선택하면?",
    options: [
      { text: "나보다 친구가 중요해?", type: "possessive", score: 5 },
      { text: "무슨 약속인지 세부사항 파악", type: "detective", score: 4 },
      { text: "괜찮다고 하면서 서운함", type: "hidden", score: 3 },
      { text: "다음에 보면 되지", type: "chill", score: 1 },
    ],
  },
  {
    id: 10,
    question: "길 가다 연인이 다른 이성과 눈이 마주치면?",
    options: [
      { text: "왜 쳐다봐? 아는 사람이야?", type: "possessive", score: 5 },
      { text: "그 사람을 기억해뒀다가 나중에 물어봄", type: "detective", score: 4 },
      { text: "본 척 안 하지만 기분 묘함", type: "hidden", score: 3 },
      { text: "그런 게 있었나?", type: "chill", score: 1 },
    ],
  },
  {
    id: 11,
    question: "연인이 이성에게 칭찬을 받으면?",
    options: [
      { text: "그 사람 왜 그래? 좀 이상해", type: "possessive", score: 5 },
      { text: "누가, 언제, 뭐라고 했는지 상세 질문", type: "detective", score: 4 },
      { text: "좋겠다~ 하면서 속으로 신경 쓰임", type: "hidden", score: 3 },
      { text: "당연히 칭찬받을 만하지", type: "chill", score: 1 },
    ],
  },
  {
    id: 12,
    question: "연인의 이상형이 나와 다르면?",
    options: [
      { text: "그럼 나는 뭐야? 속상함", type: "possessive", score: 5 },
      { text: "그 이상형에 대해 계속 생각남", type: "detective", score: 4 },
      { text: "별거 아니라고 생각하려 함", type: "hidden", score: 3 },
      { text: "이상형은 이상형일 뿐", type: "chill", score: 1 },
    ],
  },
];

export interface JealousyTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  jealousyScore: number;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  inRelationship: string;
  triggers: string[];
  copingTips: string[];
  partnerAdvice: string;
  famousPeople: string;
}

const resultTypes: Record<string, JealousyTypeResult> = {
  possessive: {
    type: 'possessive',
    title: '소유욕 폭발형',
    emoji: '🔥',
    subtitle: '내 사람은 내 꺼야!',
    description: '당신은 연인에 대한 강한 소유욕을 가진 타입입니다. 사랑하는 만큼 질투도 강하고, 감정 표현도 직접적이에요. "너는 내 거야"라는 생각이 강하고, 연인이 다른 이성과 가까워지는 것을 참기 어려워합니다.',
    jealousyScore: 95,
    characteristics: ['강한 소유욕', '직접적 표현', '즉각적 반응', '독점욕'],
    strengths: ['열정적인 사랑', '확실한 애정 표현', '연인에 대한 관심'],
    weaknesses: ['집착으로 보일 수 있음', '연인에게 부담', '신뢰 문제'],
    inRelationship: '연인의 모든 것을 알고 싶고, 함께하고 싶어합니다. 사랑의 표현이 강렬하지만, 때로는 상대방을 숨 막히게 할 수 있어요.',
    triggers: ['이성 친구', 'SNS 활동', '늦은 연락', '비밀'],
    copingTips: ['심호흡 후 말하기', '상대 입장 생각하기', '개인 시간 갖기', '신뢰 연습하기'],
    partnerAdvice: '연인은 당신이 안심할 수 있도록 자주 표현해주면 좋아요. 하지만 적당한 거리도 필요합니다.',
    famousPeople: '고경표 (질투의 화신), 조정석 (질투의 화신)',
  },
  detective: {
    type: 'detective',
    title: '탐정형 질투러',
    emoji: '🔍',
    subtitle: '모든 것이 궁금해...',
    description: '당신은 질투를 직접 표현하기보다 정보를 수집하는 타입입니다. SNS 염탐, 주변인 탐문, 과거 히스토리 체크 등 조용히 모든 것을 파악하려 해요. 겉으로는 쿨해 보이지만, 머릿속에서는 분석이 돌아가고 있습니다.',
    jealousyScore: 80,
    characteristics: ['정보 수집형', '분석적', '겉으로 티 안 냄', '의심 많음'],
    strengths: ['관찰력', '신중함', '상황 파악력'],
    weaknesses: ['지나친 의심', '혼자 스트레스', '소통 부재'],
    inRelationship: '연인의 모든 것을 알고 싶지만 직접 물어보기보다 혼자 알아내려 합니다. 이로 인해 오해가 생기기도 해요.',
    triggers: ['설명 안 되는 행동', 'SNS 변화', '달라진 패턴', '비밀'],
    copingTips: ['직접 물어보기', '상상 vs 사실 구분', '신뢰 선택하기', '확인 강박 줄이기'],
    partnerAdvice: '연인이 미리 설명해주면 탐정 모드가 덜 발동돼요.',
    famousPeople: '셜록 홈즈 (연애 버전)',
  },
  hidden: {
    type: 'hidden',
    title: '속앓이형',
    emoji: '🥺',
    subtitle: '괜찮은 척... 괜찮지 않아',
    description: '당신은 질투를 느끼지만 겉으로 표현하지 않는 타입입니다. "질투하면 못생겨 보여", "집착하면 안 돼"라는 생각에 참고 삼키지만, 속으로는 상처받고 있어요. 쌓인 감정이 한 번에 터질 수 있습니다.',
    jealousyScore: 65,
    characteristics: ['감정 억제', '티 안 내기', '혼자 상처받음', '쌓아두기'],
    strengths: ['성숙해 보임', '상대 배려', '감정 조절 노력'],
    weaknesses: ['소통 부재', '감정 폭발 가능', '자기 희생'],
    inRelationship: '연인에게 부담 주기 싫어서 참지만, 결국 쌓인 서운함이 관계에 영향을 미칠 수 있어요.',
    triggers: ['무관심', '다른 이성에 대한 언급', '약속 변경'],
    copingTips: ['작은 것도 표현하기', '감정 일기 쓰기', '터지기 전 말하기', '자기 감정 인정'],
    partnerAdvice: '연인이 먼저 물어봐 주면 말하기 쉬워요. 섬세한 관심이 필요합니다.',
    famousPeople: '드라마 속 츤데레 캐릭터들, 차은우 (조용한 스타일)',
  },
  chill: {
    type: 'chill',
    title: '쿨내 진동형',
    emoji: '😎',
    subtitle: '질투? 그게 뭔데?',
    description: '당신은 질투를 거의 느끼지 않거나, 느껴도 크게 신경 쓰지 않는 타입입니다. 연인을 신뢰하고, 각자의 영역을 존중해요. 하지만 너무 무관심해 보여서 연인이 서운할 수도 있습니다.',
    jealousyScore: 25,
    characteristics: ['높은 신뢰', '개인주의', '쿨함', '무던함'],
    strengths: ['안정적', '연인에게 자유 부여', '불필요한 싸움 없음'],
    weaknesses: ['무관심으로 오해', '애정 의심받을 수 있음', '관심 부족'],
    inRelationship: '서로의 영역을 존중하는 건강한 관계를 추구하지만, 연인이 "나한테 관심 없나?"라고 느낄 수 있어요.',
    triggers: ['거의 없음'],
    copingTips: ['가끔 질투 표현도 OK', '관심 표현하기', '연인 반응 체크'],
    partnerAdvice: '가끔은 "나 질투 나" 한마디가 연인을 기쁘게 할 수 있어요.',
    famousPeople: '원빈-이나영, 전지현-최준혁',
  },
};

export function calculateJealousyTypeResult(answers: number[]): JealousyTypeResult {
  const typeScores: Record<string, number> = {
    possessive: 0,
    detective: 0,
    hidden: 0,
    chill: 0,
  };

  const types = ['possessive', 'detective', 'hidden', 'chill'];

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const option = question.options[answerIndex];
      if (option.type) {
        typeScores[option.type] += option.score || 1;
      }
    }
  });

  let maxType = 'hidden';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
