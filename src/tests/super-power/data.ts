// 슈퍼파워 테스트 - 나에게 어울리는 초능력은?

export interface SuperPowerQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface SuperPowerResult {
  type: string;
  title: string;
  emoji: string;
  power: string;
  description: string;
  characteristics: string[];
  abilities: string[];
  strengths: string[];
  weaknesses: string[];
  famousHeroes: string[];
  useCase: string;
  personality: string;
  advice: string;
}

export const superPowerTypes = ['telekinesis', 'telepathy', 'super-speed', 'invisibility', 'time-control', 'super-strength'] as const;
export type SuperPowerType = typeof superPowerTypes[number];

export const questions: SuperPowerQuestion[] = [
  {
    id: 1,
    question: "능력이 생긴다면 제일 먼저 하고 싶은 건?",
    options: [
      { text: "손대지 않고 물건 조종하기", scores: { telekinesis: 3 } },
      { text: "사람들 마음 읽기", scores: { telepathy: 3 } },
      { text: "세계 여행을 몇 초 만에", scores: { 'super-speed': 3 } },
      { text: "아무도 모르게 어디든 가기", scores: { invisibility: 3 } },
    ],
  },
  {
    id: 2,
    question: "가장 부러운 능력은?",
    options: [
      { text: "시간을 멈추거나 되돌리기", scores: { 'time-control': 3 } },
      { text: "무한한 힘으로 뭐든 들기", scores: { 'super-strength': 3 } },
      { text: "마음으로 물체 조종", scores: { telekinesis: 3 } },
      { text: "다른 사람 생각 읽기", scores: { telepathy: 3 } },
    ],
  },
  {
    id: 3,
    question: "문제를 해결하는 나의 스타일은?",
    options: [
      { text: "힘으로 정면 돌파", scores: { 'super-strength': 3 } },
      { text: "빠르게 행동하고 처리", scores: { 'super-speed': 3 } },
      { text: "상황을 분석하고 전략적으로", scores: { telekinesis: 2, 'time-control': 1 } },
      { text: "은밀하게 알아내고 해결", scores: { invisibility: 2, telepathy: 1 } },
    ],
  },
  {
    id: 4,
    question: "악당과 싸운다면 나의 전략은?",
    options: [
      { text: "직접 맞서 힘으로 제압", scores: { 'super-strength': 3 } },
      { text: "빠르게 움직여 혼란 유발", scores: { 'super-speed': 3 } },
      { text: "원거리에서 물체로 공격", scores: { telekinesis: 3 } },
      { text: "몰래 접근해 약점 파악", scores: { invisibility: 2, telepathy: 1 } },
    ],
  },
  {
    id: 5,
    question: "일상에서 능력을 쓴다면?",
    options: [
      { text: "시간 없을 때 멈추고 싶어", scores: { 'time-control': 3 } },
      { text: "무거운 짐 들 때 힘이 필요해", scores: { 'super-strength': 3 } },
      { text: "리모컨/물건 가져오기", scores: { telekinesis: 3 } },
      { text: "숨고 싶을 때 투명해지기", scores: { invisibility: 3 } },
    ],
  },
  {
    id: 6,
    question: "능력을 쓴다면 누구를 위해?",
    options: [
      { text: "세상을 위해 영웅처럼", scores: { 'super-strength': 2, 'super-speed': 1 } },
      { text: "사랑하는 사람들을 지키기 위해", scores: { telekinesis: 2, 'time-control': 1 } },
      { text: "진실을 알기 위해", scores: { telepathy: 3 } },
      { text: "나 자신을 위해", scores: { invisibility: 2, 'time-control': 1 } },
    ],
  },
  {
    id: 7,
    question: "능력의 부작용이 있다면 감수할 수 있는 건?",
    options: [
      { text: "체력 소모가 심함", scores: { 'super-strength': 2, 'super-speed': 1 } },
      { text: "집중력이 많이 필요함", scores: { telekinesis: 2, telepathy: 1 } },
      { text: "외로움을 느낄 수 있음", scores: { invisibility: 3 } },
      { text: "책임감의 무게", scores: { 'time-control': 3 } },
    ],
  },
  {
    id: 8,
    question: "히어로 영화에서 가장 끌리는 능력은?",
    options: [
      { text: "슈퍼맨의 괴력과 비행", scores: { 'super-strength': 3 } },
      { text: "플래시의 초스피드", scores: { 'super-speed': 3 } },
      { text: "진 그레이의 염동력", scores: { telekinesis: 3 } },
      { text: "프로페서 X의 텔레파시", scores: { telepathy: 3 } },
    ],
  },
  {
    id: 9,
    question: "후회되는 일이 있을 때 생각은?",
    options: [
      { text: "그때로 돌아가고 싶어", scores: { 'time-control': 3 } },
      { text: "힘으로 바꿀 수 있었다면", scores: { 'super-strength': 2, telekinesis: 1 } },
      { text: "그 사람 마음을 알았다면", scores: { telepathy: 3 } },
      { text: "그 자리에서 사라졌다면", scores: { invisibility: 3 } },
    ],
  },
  {
    id: 10,
    question: "나의 성향에 가까운 것은?",
    options: [
      { text: "행동파, 직접 부딪히는 편", scores: { 'super-strength': 2, 'super-speed': 1 } },
      { text: "관찰자, 파악하고 움직이는 편", scores: { telepathy: 2, invisibility: 1 } },
      { text: "전략가, 계획하고 실행하는 편", scores: { telekinesis: 2, 'time-control': 1 } },
      { text: "자유로운, 원하는 대로 사는 편", scores: { 'super-speed': 2, invisibility: 1 } },
    ],
  },
  {
    id: 11,
    question: "능력으로 돈을 번다면 어떻게?",
    options: [
      { text: "육체노동/스포츠 (힘)", scores: { 'super-strength': 3 } },
      { text: "배달/운송업 (속도)", scores: { 'super-speed': 3 } },
      { text: "탐정/상담사 (마음읽기)", scores: { telepathy: 3 } },
      { text: "주식/복권 (미래예측)", scores: { 'time-control': 3 } },
    ],
  },
  {
    id: 12,
    question: "능력을 비밀로 할 거야?",
    options: [
      { text: "당연히 영웅으로 활동!", scores: { 'super-strength': 2, 'super-speed': 1 } },
      { text: "가까운 사람만 알게", scores: { telekinesis: 2, telepathy: 1 } },
      { text: "아무에게도 말 안 함", scores: { invisibility: 3 } },
      { text: "상황에 따라 다르게", scores: { 'time-control': 2, telekinesis: 1 } },
    ],
  },
];

export const results: Record<SuperPowerType, SuperPowerResult> = {
  telekinesis: {
    type: 'telekinesis',
    title: '염동력 (Telekinesis)',
    emoji: '🧠',
    power: '마음으로 물체를 조종하는 힘',
    description: '당신에게 어울리는 초능력은 염동력! 마음의 힘으로 물체를 움직이고 조종할 수 있어요. 전략적이고 섬세한 당신에게 딱 맞는 능력입니다.',
    characteristics: [
      '분석적이고 전략적',
      '섬세한 컨트롤 능력',
      '멀티태스킹 가능',
      '창의적 문제 해결',
    ],
    abilities: [
      '물체 이동/조종',
      '방어막 생성',
      '비행 (자기 자신 들어올리기)',
      '여러 물체 동시 조작',
    ],
    strengths: [
      '원거리에서 안전하게 행동',
      '다양한 상황 대응',
      '정밀한 조작 가능',
      '창의적 활용',
    ],
    weaknesses: [
      '집중력이 필요함',
      '무거운 물체는 힘듦',
      '정신적 피로',
    ],
    famousHeroes: ['진 그레이(X-Men)', '일레븐(기묘한 이야기)', '마틸다'],
    useCase: '멀리 있는 리모컨 가져오기, 청소, 요리, 물건 정리',
    personality: '전략적이고 신중한 성격. 머리를 쓰는 것을 좋아하고, 효율적인 방법을 찾아요.',
    advice: '모든 것을 컨트롤하려 하지 마세요. 흘러가도록 두는 것도 힘이에요.',
  },
  telepathy: {
    type: 'telepathy',
    title: '텔레파시 (Telepathy)',
    emoji: '💭',
    power: '마음을 읽고 소통하는 힘',
    description: '당신에게 어울리는 초능력은 텔레파시! 다른 사람의 생각을 읽고, 마음으로 소통할 수 있어요. 공감력 높은 당신에게 딱 맞는 능력입니다.',
    characteristics: [
      '높은 공감 능력',
      '직관력 뛰어남',
      '사람의 마음을 잘 읽음',
      '소통 능력 우수',
    ],
    abilities: [
      '생각 읽기',
      '정신 소통',
      '기억 탐색',
      '감정 감지',
    ],
    strengths: [
      '상대의 진심을 알 수 있음',
      '효과적인 소통',
      '갈등 예방',
      '숨겨진 진실 파악',
    ],
    weaknesses: [
      '알고 싶지 않은 것도 알게 됨',
      '정신적 부담',
      '프라이버시 침해 문제',
    ],
    famousHeroes: ['프로페서 X(X-Men)', '만티스(가디언즈)', '사토루(주술회전)'],
    useCase: '진심 확인, 거짓말 탐지, 언어 장벽 극복, 깊은 공감',
    personality: '감성적이고 공감력 높은 성격. 사람들의 마음을 이해하고 돕고 싶어해요.',
    advice: '모든 생각을 다 알 필요는 없어요. 때로는 모르는 것이 행복이에요.',
  },
  'super-speed': {
    type: 'super-speed',
    title: '초고속 (Super Speed)',
    emoji: '⚡',
    power: '빛보다 빠르게 움직이는 힘',
    description: '당신에게 어울리는 초능력은 초고속! 눈 깜짝할 사이에 어디든 갈 수 있어요. 자유롭고 활동적인 당신에게 딱 맞는 능력입니다.',
    characteristics: [
      '활동적이고 에너지 넘침',
      '자유를 사랑함',
      '빠른 판단력',
      '효율성 추구',
    ],
    abilities: [
      '초고속 이동',
      '시간이 느리게 보임',
      '잔상 만들기',
      '빠른 치유 (신진대사)',
    ],
    strengths: [
      '시간 절약',
      '위기 대응 빠름',
      '어디든 갈 수 있음',
      '빠른 실행력',
    ],
    weaknesses: [
      '칼로리 소모 엄청남',
      '멈추기 어려움',
      '성급할 수 있음',
    ],
    famousHeroes: ['플래시', '퀵실버(X-Men)', '소닉'],
    useCase: '출퇴근 1초, 전 세계 여행, 늦잠 자도 OK, 긴급 구조',
    personality: '자유롭고 활동적인 성격. 답답한 것을 싫어하고 빠르게 움직이길 좋아해요.',
    advice: '빠르게 가는 것만이 답이 아니에요. 가끔은 멈춰서 주변을 둘러보세요.',
  },
  invisibility: {
    type: 'invisibility',
    title: '투명화 (Invisibility)',
    emoji: '👻',
    power: '보이지 않게 되는 힘',
    description: '당신에게 어울리는 초능력은 투명화! 원할 때 사라지고, 아무도 모르게 행동할 수 있어요. 독립적이고 관찰력 있는 당신에게 딱 맞는 능력입니다.',
    characteristics: [
      '독립적이고 조용함',
      '관찰력 뛰어남',
      '프라이버시 중시',
      '눈치 빠름',
    ],
    abilities: [
      '몸 투명화',
      '만지는 물체 투명화',
      '소리 없이 이동',
      '은신 상태 유지',
    ],
    strengths: [
      '관찰과 정보 수집',
      '은밀한 행동',
      '원치 않는 상황 회피',
      '프라이버시 보호',
    ],
    weaknesses: [
      '존재감이 없어질 수 있음',
      '고독함',
      '투명 상태에서 상처 주의',
    ],
    famousHeroes: ['인비저블 우먼(판타스틱4)', '할로우맨', '투명드래곤 토틀리스'],
    useCase: '혼자만의 시간, 사람 피하기, 비밀 유지, 관찰',
    personality: '내향적이고 관찰력 있는 성격. 혼자만의 시간이 필요하고, 조용히 지켜보는 걸 좋아해요.',
    advice: '가끔은 보이는 것도 중요해요. 당신의 존재는 소중하니까요.',
  },
  'time-control': {
    type: 'time-control',
    title: '시간 조종 (Time Control)',
    emoji: '⏰',
    power: '시간을 멈추고 되돌리는 힘',
    description: '당신에게 어울리는 초능력은 시간 조종! 시간을 멈추거나 되돌릴 수 있어요. 신중하고 책임감 있는 당신에게 딱 맞는 능력입니다.',
    characteristics: [
      '신중하고 계획적',
      '책임감 강함',
      '후회를 싫어함',
      '완벽주의 성향',
    ],
    abilities: [
      '시간 멈추기',
      '시간 되돌리기',
      '시간 빠르게 감기',
      '평행 시간선 보기',
    ],
    strengths: [
      '실수 만회 가능',
      '최적의 선택 가능',
      '무한한 시간',
      '위기 상황 대처',
    ],
    weaknesses: [
      '나비효과 위험',
      '결정 장애 유발',
      '책임감의 무게',
    ],
    famousHeroes: ['닥터 스트레인지', '헤이로(DC)', '막스(라이프이즈스트레인지)'],
    useCase: '실수 되돌리기, 시험 무한 재시도, 소중한 순간 오래 즐기기',
    personality: '신중하고 책임감 있는 성격. 선택의 결과를 중요하게 생각하고, 후회 없는 삶을 원해요.',
    advice: '모든 순간을 완벽하게 할 수 없어요. 실수도 인생의 일부입니다.',
  },
  'super-strength': {
    type: 'super-strength',
    title: '초인적 힘 (Super Strength)',
    emoji: '💪',
    power: '엄청난 물리적 힘',
    description: '당신에게 어울리는 초능력은 초인적 힘! 무엇이든 들어올리고, 어떤 것도 막을 수 없어요. 용감하고 행동적인 당신에게 딱 맞는 능력입니다.',
    characteristics: [
      '용감하고 적극적',
      '정의감 강함',
      '행동으로 보여주는 타입',
      '보호 본능 강함',
    ],
    abilities: [
      '엄청난 힘',
      '높은 내구성',
      '점프력 강화',
      '충격파 생성',
    ],
    strengths: [
      '직접적인 문제 해결',
      '약자 보호',
      '물리적 위협 제거',
      '단순명쾌함',
    ],
    weaknesses: [
      '섬세함 부족',
      '힘 조절 필요',
      '전략보다 힘에 의존',
    ],
    famousHeroes: ['슈퍼맨', '헐크', '올마이트(나의 히어로 아카데미아)'],
    useCase: '구조 활동, 이사, 스포츠, 악당 물리치기',
    personality: '정의롭고 용감한 성격. 힘으로 사람들을 돕고 보호하고 싶어해요.',
    advice: '힘만이 답이 아니에요. 때로는 부드러움이 더 강할 수 있어요.',
  },
};

export function calculateResult(answers: number[]): SuperPowerResult {
  const scores: Record<SuperPowerType, number> = {
    telekinesis: 0,
    telepathy: 0,
    'super-speed': 0,
    invisibility: 0,
    'time-control': 0,
    'super-strength': 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as SuperPowerType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: SuperPowerType = 'telekinesis';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as SuperPowerType;
    }
  });

  return results[resultType];
}
