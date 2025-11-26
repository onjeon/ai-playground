// 좀비 아포칼립스 생존 테스트 - 좀비 세상에서 살아남기

export interface ZombieSurvivalQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface ZombieSurvivalResult {
  type: string;
  title: string;
  emoji: string;
  survivalRate: number;
  subtitle: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  survivalStrategy: string[];
  bestRole: string;
  teamValue: string;
  deathScenario: string;
  ultimateFate: string;
}

export const survivalTypes = ['leader', 'fighter', 'survivor', 'medic', 'engineer', 'scout', 'sacrifice', 'zombie'] as const;
export type SurvivalType = typeof survivalTypes[number];

export const questions: ZombieSurvivalQuestion[] = [
  {
    id: 1,
    question: "좀비 아포칼립스 발생! 첫 반응은?",
    options: [
      { text: "침착하게 상황 파악하고 계획 세움", scores: { leader: 3, survivor: 1 } },
      { text: "무기 찾아서 맞서 싸움", scores: { fighter: 3 } },
      { text: "일단 숨을 곳을 찾아 도망", scores: { survivor: 3 } },
      { text: "패닉! 어떡해...", scores: { zombie: 3 } },
    ],
  },
  {
    id: 2,
    question: "생존 기지를 고른다면?",
    options: [
      { text: "높은 건물 (넓은 시야)", scores: { leader: 2, scout: 1 } },
      { text: "무기고나 경찰서", scores: { fighter: 3 } },
      { text: "대형 마트 (물자 풍부)", scores: { survivor: 2, engineer: 1 } },
      { text: "병원 (의약품)", scores: { medic: 3 } },
    ],
  },
  {
    id: 3,
    question: "좀비 한 마리를 마주쳤다!",
    options: [
      { text: "직접 처리한다", scores: { fighter: 3 } },
      { text: "조용히 우회한다", scores: { scout: 2, survivor: 1 } },
      { text: "덫을 설치해서 잡는다", scores: { engineer: 3 } },
      { text: "뒤에 있는 사람에게 맡긴다", scores: { sacrifice: 2, zombie: 1 } },
    ],
  },
  {
    id: 4,
    question: "물자가 부족한 상황, 어떻게 할까?",
    options: [
      { text: "위험을 감수하고 물자 탐색", scores: { scout: 3 } },
      { text: "있는 것을 최대한 효율적으로", scores: { survivor: 2, leader: 1 } },
      { text: "다른 그룹과 거래/협상", scores: { leader: 3 } },
      { text: "빼앗는다 (생존이 우선)", scores: { fighter: 2, sacrifice: 1 } },
    ],
  },
  {
    id: 5,
    question: "그룹에서 맡고 싶은 역할은?",
    options: [
      { text: "리더/의사결정자", scores: { leader: 3 } },
      { text: "전투/경비", scores: { fighter: 3 } },
      { text: "의료/치료", scores: { medic: 3 } },
      { text: "정찰/탐색", scores: { scout: 3 } },
    ],
  },
  {
    id: 6,
    question: "동료가 좀비에게 물렸다!",
    options: [
      { text: "최대한 치료해본다", scores: { medic: 3 } },
      { text: "슬프지만... 처리한다", scores: { leader: 2, fighter: 1 } },
      { text: "그를 두고 떠난다", scores: { survivor: 2, sacrifice: 1 } },
      { text: "같이 남아 마지막까지 함께", scores: { sacrifice: 3 } },
    ],
  },
  {
    id: 7,
    question: "무기를 고른다면?",
    options: [
      { text: "총기류 (파워)", scores: { fighter: 3 } },
      { text: "근접 무기 (조용함)", scores: { scout: 2, fighter: 1 } },
      { text: "덫/폭발물 (효율)", scores: { engineer: 3 } },
      { text: "무기보다 이동수단", scores: { survivor: 2, scout: 1 } },
    ],
  },
  {
    id: 8,
    question: "갈등 상황에서 나는?",
    options: [
      { text: "중재하고 해결책 제시", scores: { leader: 3 } },
      { text: "실력으로 해결", scores: { fighter: 3 } },
      { text: "갈등을 피하고 빠짐", scores: { survivor: 2, scout: 1 } },
      { text: "다수 의견을 따름", scores: { sacrifice: 2 } },
    ],
  },
  {
    id: 9,
    question: "좀비 떼가 몰려온다!",
    options: [
      { text: "팀을 이끌고 탈출 지휘", scores: { leader: 3 } },
      { text: "맞서 싸우며 시간 벌기", scores: { fighter: 2, sacrifice: 1 } },
      { text: "비상 탈출구로 빠르게 도망", scores: { scout: 2, survivor: 1 } },
      { text: "미리 준비한 덫/방어 가동", scores: { engineer: 3 } },
    ],
  },
  {
    id: 10,
    question: "체력/스테미나 자신 있어?",
    options: [
      { text: "당연! 운동 열심히 했다", scores: { fighter: 2, scout: 1 } },
      { text: "평균은 되는 것 같아", scores: { survivor: 2, leader: 1 } },
      { text: "체력보단 머리로 살아남음", scores: { engineer: 2, medic: 1 } },
      { text: "솔직히 자신 없어...", scores: { zombie: 2, sacrifice: 1 } },
    ],
  },
  {
    id: 11,
    question: "스트레스 상황에서 나는?",
    options: [
      { text: "침착하게 대응한다", scores: { leader: 2, medic: 1 } },
      { text: "오히려 집중력이 올라간다", scores: { fighter: 2, scout: 1 } },
      { text: "불안하지만 해낸다", scores: { survivor: 2, engineer: 1 } },
      { text: "패닉하기 쉽다", scores: { zombie: 3 } },
    ],
  },
  {
    id: 12,
    question: "좀비 세상이 끝나면 뭘 하고 싶어?",
    options: [
      { text: "새로운 사회 재건에 참여", scores: { leader: 3 } },
      { text: "남은 좀비 사냥", scores: { fighter: 3 } },
      { text: "조용히 농사지으며 살기", scores: { survivor: 3 } },
      { text: "의료/치료 시설 재건", scores: { medic: 3 } },
    ],
  },
];

export const results: Record<SurvivalType, ZombieSurvivalResult> = {
  leader: {
    type: 'leader',
    title: '지휘관',
    emoji: '👑',
    survivalRate: 85,
    subtitle: '그룹을 이끄는 리더',
    description: '당신은 타고난 지휘관! 혼란 속에서도 침착하게 상황을 파악하고, 팀을 이끌어 생존으로 향하는 길을 찾아내요. 모두가 당신을 따릅니다.',
    strengths: ['리더십', '판단력', '카리스마', '위기 대처'],
    weaknesses: ['모든 책임을 짊어짐', '희생 강요받을 수 있음'],
    survivalStrategy: ['그룹 형성', '역할 분담', '장기 계획', '안전 기지 구축'],
    bestRole: '그룹 리더 / 의사결정자',
    teamValue: '팀의 중심, 모두가 따르는 리더',
    deathScenario: '팀을 지키려다 희생',
    ultimateFate: '새로운 공동체의 지도자로',
  },
  fighter: {
    type: 'fighter',
    title: '전사',
    emoji: '⚔️',
    survivalRate: 75,
    subtitle: '좀비 킬러',
    description: '당신은 용감한 전사! 좀비와 맞서 싸우는 걸 두려워하지 않고, 뛰어난 전투력으로 팀을 지켜요. 최전선에서 싸우는 영웅이에요.',
    strengths: ['전투력', '용기', '체력', '무기 사용'],
    weaknesses: ['무모할 수 있음', '지구력 소모 빠름'],
    survivalStrategy: ['적극적 전투', '무기 확보', '위협 제거', '경비'],
    bestRole: '전투원 / 경비병',
    teamValue: '팀의 방패, 위협을 제거하는 전사',
    deathScenario: '과도한 전투로 인한 부상/피로',
    ultimateFate: '전설적인 좀비 사냥꾼으로',
  },
  survivor: {
    type: 'survivor',
    title: '생존자',
    emoji: '🏃',
    survivalRate: 90,
    subtitle: '끝까지 살아남는 자',
    description: '당신은 타고난 생존자! 영웅적이진 않아도 끝까지 살아남는 능력이 있어요. 위험을 피하고, 효율적으로 자원을 관리하며 버텨내죠.',
    strengths: ['생존 본능', '적응력', '효율성', '인내심'],
    weaknesses: ['소극적일 수 있음', '리더십 부족'],
    survivalStrategy: ['위험 회피', '자원 관리', '은신', '장기 생존'],
    bestRole: '자원 관리자 / 은신 전문가',
    teamValue: '팀의 생존을 돕는 실용적 멤버',
    deathScenario: '예상치 못한 상황에서',
    ultimateFate: '조용히 끝까지 살아남음',
  },
  medic: {
    type: 'medic',
    title: '의료병',
    emoji: '💊',
    survivalRate: 80,
    subtitle: '생명을 살리는 자',
    description: '당신은 소중한 의료병! 부상당한 동료를 치료하고, 의약품을 관리하며 팀의 건강을 책임져요. 모두에게 없어서는 안 될 존재예요.',
    strengths: ['의료 지식', '침착함', '케어 능력', '약품 관리'],
    weaknesses: ['직접 전투 약함', '감정적 부담'],
    survivalStrategy: ['의약품 확보', '동료 치료', '위생 관리', '응급 처치'],
    bestRole: '의료 담당 / 치료사',
    teamValue: '팀의 생명줄, 없으면 안 되는 존재',
    deathScenario: '환자를 지키려다 감염',
    ultimateFate: '새로운 의료 시설의 책임자로',
  },
  engineer: {
    type: 'engineer',
    title: '기술자',
    emoji: '🔧',
    survivalRate: 85,
    subtitle: '만들고 고치는 자',
    description: '당신은 똑똑한 기술자! 덫을 설치하고, 기지를 요새화하고, 기계를 고쳐서 팀의 생존을 돕죠. 머리로 싸우는 두뇌 플레이어예요.',
    strengths: ['기술력', '창의력', '문제 해결', '덫/방어 구축'],
    weaknesses: ['직접 전투 약함', '도구 의존'],
    survivalStrategy: ['덫 설치', '기지 강화', '장비 수리', '발명'],
    bestRole: '기술 담당 / 시설 관리자',
    teamValue: '팀의 두뇌, 기술적 문제 해결사',
    deathScenario: '자신이 만든 덫에 의한 사고',
    ultimateFate: '새로운 문명의 기술을 재건',
  },
  scout: {
    type: 'scout',
    title: '정찰병',
    emoji: '🔭',
    survivalRate: 70,
    subtitle: '길을 찾는 자',
    description: '당신은 민첩한 정찰병! 위험 지역을 탐색하고, 물자를 찾고, 팀에게 정보를 가져와요. 빠른 발과 예리한 눈이 무기예요.',
    strengths: ['민첩함', '관찰력', '은밀함', '지형 파악'],
    weaknesses: ['혼자 행동 위험', '고립될 수 있음'],
    survivalStrategy: ['정찰', '물자 탐색', '안전 경로 확보', '정보 수집'],
    bestRole: '정찰병 / 탐색대장',
    teamValue: '팀의 눈과 귀, 정보의 원천',
    deathScenario: '정찰 중 좀비 떼에 포위',
    ultimateFate: '전설적인 탐험가로',
  },
  sacrifice: {
    type: 'sacrifice',
    title: '희생자',
    emoji: '💔',
    survivalRate: 40,
    subtitle: '남을 위해 희생하는 자',
    description: '당신은 착한 희생자 타입... 남을 먼저 생각하고, 위험한 상황에서 자신을 희생하려 해요. 영웅적이지만 생존에는 불리할 수 있어요.',
    strengths: ['이타심', '용기', '신뢰감', '희생 정신'],
    weaknesses: ['자기 보존 본능 약함', '쉽게 이용당할 수 있음'],
    survivalStrategy: ['팀 보호', '위험 감수', '마지막까지 함께'],
    bestRole: '서포터 / 후방 지원',
    teamValue: '팀의 양심, 모두가 지키고 싶어하는 사람',
    deathScenario: '동료를 지키려다 감염',
    ultimateFate: '기억 속 영웅으로',
  },
  zombie: {
    type: 'zombie',
    title: '좀비 예정자',
    emoji: '🧟',
    survivalRate: 10,
    subtitle: '가장 먼저 당하는 타입',
    description: '솔직히... 첫날에 당할 확률이 높아요. 패닉하기 쉽고, 체력도 자신 없고, 위기 대처 능력이 부족해요. 하지만 좋은 팀을 만나면 살아남을 수도!',
    strengths: ['... 좀비가 되면 안 피곤함?', '진입 장벽 낮음'],
    weaknesses: ['모든 것', '패닉', '체력', '판단력'],
    survivalStrategy: ['강한 사람 뒤에 숨기', '시키는 대로 하기', '운에 맡기기'],
    bestRole: '... 짐?',
    teamValue: '미끼로 쓰일 수 있음 (농담)',
    deathScenario: '첫날 패닉하다가',
    ultimateFate: '좀비가 되어 떠돌기',
  },
};

export function calculateResult(answers: number[]): ZombieSurvivalResult {
  const scores: Record<SurvivalType, number> = {
    leader: 0,
    fighter: 0,
    survivor: 0,
    medic: 0,
    engineer: 0,
    scout: 0,
    sacrifice: 0,
    zombie: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as SurvivalType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: SurvivalType = 'survivor';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as SurvivalType;
    }
  });

  return results[resultType];
}
