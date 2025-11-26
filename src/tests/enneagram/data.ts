// 에니어그램 성격 유형 테스트

export interface EnneagramQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface EnneagramResult {
  type: string;
  number: number;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  coreDesire: string;
  coreFear: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  growthPath: string;
  stressPath: string;
  tips: string[];
  wing1: string;
  wing2: string;
  famousPeople: string;
}

// 에니어그램 유형
export const enneagramTypes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export type EnneagramType = typeof enneagramTypes[number];

// 질문 데이터 (18문항)
export const questions: EnneagramQuestion[] = [
  {
    id: 1,
    question: "나를 가장 잘 설명하는 것은?",
    options: [
      { text: "옳고 그름에 대한 확실한 기준이 있다", scores: { '1': 2 } },
      { text: "다른 사람을 돕는 것이 기쁘다", scores: { '2': 2 } },
      { text: "성공하고 인정받고 싶다", scores: { '3': 2 } },
      { text: "나만의 독특함이 중요하다", scores: { '4': 2 } },
    ],
  },
  {
    id: 2,
    question: "나를 가장 잘 설명하는 것은?",
    options: [
      { text: "지식을 쌓고 이해하는 것이 중요하다", scores: { '5': 2 } },
      { text: "안전하고 확실한 것이 좋다", scores: { '6': 2 } },
      { text: "새로운 경험과 재미가 필요하다", scores: { '7': 2 } },
      { text: "강하고 통제력 있는 것이 중요하다", scores: { '8': 2 } },
    ],
  },
  {
    id: 3,
    question: "가장 피하고 싶은 것은?",
    options: [
      { text: "불완전하거나 잘못되는 것", scores: { '1': 2 } },
      { text: "필요 없는 사람이 되는 것", scores: { '2': 2 } },
      { text: "실패하거나 가치 없어 보이는 것", scores: { '3': 2 } },
      { text: "평범하고 의미 없는 존재가 되는 것", scores: { '4': 2 } },
    ],
  },
  {
    id: 4,
    question: "가장 피하고 싶은 것은?",
    options: [
      { text: "무능하거나 쓸모없는 것", scores: { '5': 2 } },
      { text: "지지 없이 혼자가 되는 것", scores: { '6': 2 } },
      { text: "고통받거나 제한되는 것", scores: { '7': 2 } },
      { text: "약하거나 통제당하는 것", scores: { '8': 2 } },
    ],
  },
  {
    id: 5,
    question: "스트레스를 받으면 나는?",
    options: [
      { text: "더 비판적이고 완벽을 추구한다", scores: { '1': 2 } },
      { text: "더 다른 사람들에게 집착한다", scores: { '2': 2 } },
      { text: "더 일에 몰두하고 성과에 집착한다", scores: { '3': 2 } },
      { text: "더 우울해지고 자신을 고립시킨다", scores: { '4': 2 } },
    ],
  },
  {
    id: 6,
    question: "스트레스를 받으면 나는?",
    options: [
      { text: "더 혼자 있고 싶고 생각에 빠진다", scores: { '5': 2 } },
      { text: "더 불안해지고 최악을 상상한다", scores: { '6': 2 } },
      { text: "더 산만해지고 즐거운 것을 찾는다", scores: { '7': 2 } },
      { text: "더 공격적이고 통제하려 한다", scores: { '8': 2 } },
    ],
  },
  {
    id: 7,
    question: "나의 대인관계 스타일은?",
    options: [
      { text: "사람들이 더 나아지도록 조언한다", scores: { '1': 2 } },
      { text: "사람들의 필요를 잘 파악하고 도와준다", scores: { '2': 2 } },
      { text: "성공적인 이미지로 다가간다", scores: { '3': 2 } },
      { text: "깊고 의미 있는 관계를 원한다", scores: { '4': 2 } },
    ],
  },
  {
    id: 8,
    question: "나의 대인관계 스타일은?",
    options: [
      { text: "적당한 거리를 유지한다", scores: { '5': 2 } },
      { text: "신뢰할 수 있는 사람인지 확인한다", scores: { '6': 2 } },
      { text: "재미있고 유쾌하게 다가간다", scores: { '7': 2 } },
      { text: "직접적이고 솔직하게 대한다", scores: { '8': 2 } },
    ],
  },
  {
    id: 9,
    question: "일할 때 나는?",
    options: [
      { text: "꼼꼼하고 완벽하게 하려고 한다", scores: { '1': 2 } },
      { text: "팀원들을 돕고 서포트한다", scores: { '2': 2 } },
      { text: "효율적으로 목표를 달성한다", scores: { '3': 2 } },
      { text: "창의적이고 독특한 방식으로 한다", scores: { '4': 2 } },
    ],
  },
  {
    id: 10,
    question: "일할 때 나는?",
    options: [
      { text: "혼자 깊이 분석하고 연구한다", scores: { '5': 2 } },
      { text: "규칙과 절차를 잘 따른다", scores: { '6': 2 } },
      { text: "다양한 일을 동시에 즐긴다", scores: { '7': 2 } },
      { text: "리더십을 발휘하고 결정한다", scores: { '8': 2 } },
    ],
  },
  {
    id: 11,
    question: "나의 핵심 가치는?",
    options: [
      { text: "정직함과 올바름", scores: { '1': 2 } },
      { text: "사랑과 연결", scores: { '2': 2 } },
      { text: "성취와 성공", scores: { '3': 2 } },
      { text: "진정성과 개성", scores: { '4': 2 } },
    ],
  },
  {
    id: 12,
    question: "나의 핵심 가치는?",
    options: [
      { text: "지식과 이해", scores: { '5': 2 } },
      { text: "안전과 충성", scores: { '6': 2 } },
      { text: "자유와 행복", scores: { '7': 2 } },
      { text: "힘과 정의", scores: { '8': 2 } },
    ],
  },
  {
    id: 13,
    question: "어린 시절 나는?",
    options: [
      { text: "착한 아이, 규칙을 잘 따랐다", scores: { '1': 2, '6': 1 } },
      { text: "다른 사람들을 잘 챙겼다", scores: { '2': 2 } },
      { text: "인정받으려고 노력했다", scores: { '3': 2 } },
      { text: "남들과 다르다고 느꼈다", scores: { '4': 2 } },
    ],
  },
  {
    id: 14,
    question: "어린 시절 나는?",
    options: [
      { text: "조용히 관찰하고 생각이 많았다", scores: { '5': 2 } },
      { text: "불안하고 걱정이 많았다", scores: { '6': 2 } },
      { text: "활발하고 재미있는 것을 찾았다", scores: { '7': 2 } },
      { text: "강하고 독립적이었다", scores: { '8': 2 } },
    ],
  },
  {
    id: 15,
    question: "내가 가장 원하는 것은?",
    options: [
      { text: "완벽해지고 싶다", scores: { '1': 2 } },
      { text: "사랑받고 싶다", scores: { '2': 2 } },
      { text: "성공하고 싶다", scores: { '3': 2 } },
      { text: "특별해지고 싶다", scores: { '4': 2 } },
    ],
  },
  {
    id: 16,
    question: "내가 가장 원하는 것은?",
    options: [
      { text: "모든 것을 이해하고 싶다", scores: { '5': 2 } },
      { text: "안전하고 싶다", scores: { '6': 2 } },
      { text: "행복하고 싶다", scores: { '7': 2 } },
      { text: "강해지고 싶다", scores: { '8': 2 } },
    ],
  },
  {
    id: 17,
    question: "평화롭고 조화로운 것이 중요하다",
    options: [
      { text: "매우 그렇다", scores: { '9': 3 } },
      { text: "그런 편이다", scores: { '9': 2 } },
      { text: "보통이다", scores: { '9': 1 } },
      { text: "별로 그렇지 않다", scores: { '9': 0 } },
    ],
  },
  {
    id: 18,
    question: "갈등을 피하고 편안한 상태를 유지하려 한다",
    options: [
      { text: "매우 그렇다", scores: { '9': 3 } },
      { text: "그런 편이다", scores: { '9': 2 } },
      { text: "보통이다", scores: { '9': 1 } },
      { text: "별로 그렇지 않다", scores: { '9': 0 } },
    ],
  },
];

// 결과 데이터
export const results: Record<EnneagramType, EnneagramResult> = {
  '1': {
    type: '1',
    number: 1,
    title: '개혁가',
    emoji: '⚖️',
    subtitle: '완벽주의적 이상주의자',
    description: '당신은 높은 도덕적 기준을 가진 개혁가입니다. 옳고 그름에 대한 명확한 신념이 있으며, 세상을 더 나은 곳으로 만들고자 합니다. 책임감이 강하고 원칙을 중시합니다.',
    coreDesire: '올바르고 선한 존재가 되고 싶다',
    coreFear: '나쁘거나 결함이 있는 존재가 되는 것',
    characteristics: ['원칙적', '책임감', '완벽주의', '정의로움', '자기비판적'],
    strengths: ['높은 도덕성', '책임감', '꼼꼼함', '개선 의지', '정직함'],
    weaknesses: ['지나친 비판', '완벽주의', '융통성 부족', '분노 억압', '자기 비하'],
    growthPath: '7번(열정가)의 긍정적 측면을 통합하여 더 유연하고 즐거움을 추구',
    stressPath: '4번(예술가)의 부정적 측면으로 우울하고 자기연민에 빠짐',
    tips: ['완벽하지 않아도 괜찮다고 인정하기', '자신에게 관대해지기', '즐거움도 허용하기', '분노를 건강하게 표현하기'],
    wing1: '1w9: 이상주의자 - 더 차분하고 내성적',
    wing2: '1w2: 옹호자 - 더 따뜻하고 사람 지향적',
    famousPeople: '넬슨 만델라, 마하트마 간디, 미셸 오바마',
  },
  '2': {
    type: '2',
    number: 2,
    title: '조력자',
    emoji: '💝',
    subtitle: '사랑을 주는 돌봄이',
    description: '당신은 따뜻하고 caring한 조력자입니다. 다른 사람들의 필요를 잘 알아채고, 그들을 돕는 것에서 기쁨을 느낍니다. 사랑받고 싶은 깊은 욕구가 있습니다.',
    coreDesire: '사랑받고 필요한 존재가 되고 싶다',
    coreFear: '사랑받지 못하고 원치 않는 존재가 되는 것',
    characteristics: ['친절함', '공감 능력', '관대함', '소유욕', '자기희생'],
    strengths: ['공감 능력', '헌신', '따뜻함', '사교성', '직관력'],
    weaknesses: ['자기 무시', '소유욕', '조건부 사랑', '거절 두려움', '자만심'],
    growthPath: '4번(예술가)의 긍정적 측면을 통합하여 자기 필요도 인식',
    stressPath: '8번(도전자)의 부정적 측면으로 공격적이고 조종적',
    tips: ['자신의 필요도 중요함을 인식하기', '조건 없이 사랑하기', '"아니오"라고 말하는 연습', '받는 것도 연습하기'],
    wing1: '2w1: 봉사자 - 더 원칙적이고 책임감 있음',
    wing2: '2w3: 주인 - 더 야망 있고 매력적',
    famousPeople: '마더 테레사, 데스몬드 투투, 돌리 파튼',
  },
  '3': {
    type: '3',
    number: 3,
    title: '성취자',
    emoji: '🏆',
    subtitle: '성공 지향적 실용주의자',
    description: '당신은 목표 지향적이고 효율적인 성취자입니다. 성공과 인정을 추구하며, 자신의 가치를 성과로 증명하려 합니다. 적응력이 뛰어나고 이미지를 중시합니다.',
    coreDesire: '가치 있고 성공적인 존재가 되고 싶다',
    coreFear: '무가치하고 실패한 존재가 되는 것',
    characteristics: ['야망', '효율성', '적응력', '이미지 의식', '경쟁심'],
    strengths: ['목표 달성 능력', '효율성', '리더십', '동기부여', '적응력'],
    weaknesses: ['진정성 결여', '워커홀릭', '감정 무시', '허영심', '피로 무시'],
    growthPath: '6번(충성가)의 긍정적 측면을 통합하여 협력과 진정성 추구',
    stressPath: '9번(평화주의자)의 부정적 측면으로 무기력하고 무관심',
    tips: ['존재 자체로 가치 있음을 인식', '진정한 감정 느끼기', '쉬는 것도 허용하기', '실패도 배움으로 받아들이기'],
    wing1: '3w2: 매력가 - 더 사교적이고 돌봄',
    wing2: '3w4: 전문가 - 더 내성적이고 창의적',
    famousPeople: '오프라 윈프리, 톰 크루즈, 테일러 스위프트',
  },
  '4': {
    type: '4',
    number: 4,
    title: '예술가',
    emoji: '🎭',
    subtitle: '감성적 개인주의자',
    description: '당신은 깊은 감정과 독특함을 가진 예술가입니다. 자신만의 정체성을 찾으려 하며, 평범함을 거부합니다. 아름다움과 의미를 추구하고 감정이 풍부합니다.',
    coreDesire: '자신의 정체성을 찾고 특별해지고 싶다',
    coreFear: '평범하고 의미 없는 존재가 되는 것',
    characteristics: ['창의성', '감수성', '독특함', '자기성찰', '멜랑콜리'],
    strengths: ['창의력', '공감 능력', '진정성', '심미안', '깊은 감정'],
    weaknesses: ['자기연민', '질투', '기분 변화', '자기몰입', '부러움'],
    growthPath: '1번(개혁가)의 긍정적 측면을 통합하여 객관성과 원칙 습득',
    stressPath: '2번(조력자)의 부정적 측면으로 의존적이고 집착적',
    tips: ['현재에 감사하기', '남과 비교하지 않기', '행동으로 옮기기', '긍정적인 면도 보기'],
    wing1: '4w3: 귀족 - 더 야망 있고 외향적',
    wing2: '4w5: 보헤미안 - 더 내성적이고 지적',
    famousPeople: '프린스, 니콜 키드먼, 조니 뎁',
  },
  '5': {
    type: '5',
    number: 5,
    title: '탐구자',
    emoji: '🔍',
    subtitle: '지적인 관찰자',
    description: '당신은 지식을 추구하는 탐구자입니다. 세상을 관찰하고 이해하려 하며, 독립성을 중시합니다. 깊이 있는 전문성을 추구하고 혼자만의 시간이 필요합니다.',
    coreDesire: '유능하고 지식이 풍부해지고 싶다',
    coreFear: '무능하고 쓸모없는 존재가 되는 것',
    characteristics: ['분석적', '관찰력', '독립적', '지적 호기심', '내성적'],
    strengths: ['분석력', '객관성', '전문성', '독립성', '통찰력'],
    weaknesses: ['고립', '감정 회피', '인색함', '냉소적', '현실 도피'],
    growthPath: '8번(도전자)의 긍정적 측면을 통합하여 자신감과 행동력 습득',
    stressPath: '7번(열정가)의 부정적 측면으로 산만하고 충동적',
    tips: ['감정도 중요함을 인식', '사람들과 연결하기', '행동으로 옮기기', '에너지 공유하기'],
    wing1: '5w4: 우상파괴자 - 더 창의적이고 감성적',
    wing2: '5w6: 문제해결자 - 더 실용적이고 협력적',
    famousPeople: '빌 게이츠, 알버트 아인슈타인, 스티븐 호킹',
  },
  '6': {
    type: '6',
    number: 6,
    title: '충성가',
    emoji: '🛡️',
    subtitle: '책임감 있는 회의주의자',
    description: '당신은 안전과 신뢰를 중시하는 충성가입니다. 책임감이 강하고 팀에 헌신합니다. 위험을 예측하고 대비하며, 신뢰할 수 있는 관계를 중시합니다.',
    coreDesire: '안전하고 지지받고 싶다',
    coreFear: '지지 없이 버림받는 것',
    characteristics: ['충성심', '책임감', '경계심', '협력적', '의심'],
    strengths: ['충성심', '책임감', '위기 대처', '헌신', '통찰력'],
    weaknesses: ['불안', '의심', '우유부단', '피해의식', '반항심'],
    growthPath: '9번(평화주의자)의 긍정적 측면을 통합하여 평온함과 신뢰 습득',
    stressPath: '3번(성취자)의 부정적 측면으로 경쟁적이고 이미지 집착',
    tips: ['자신을 신뢰하기', '불안을 인정하고 받아들이기', '최악의 상상 멈추기', '현재에 집중하기'],
    wing1: '6w5: 방어자 - 더 내성적이고 분석적',
    wing2: '6w7: 친구 - 더 외향적이고 유쾌함',
    famousPeople: '톰 행크스, 제니퍼 애니스턴, 브루스 스프링스틴',
  },
  '7': {
    type: '7',
    number: 7,
    title: '열정가',
    emoji: '🎉',
    subtitle: '낙관적인 모험가',
    description: '당신은 즐거움을 추구하는 열정가입니다. 새로운 경험과 가능성에 열려 있으며, 낙관적이고 에너지가 넘칩니다. 고통을 피하고 행복을 추구합니다.',
    coreDesire: '행복하고 만족하고 싶다',
    coreFear: '고통받고 제한되는 것',
    characteristics: ['낙관적', '다재다능', '열정적', '모험심', '산만함'],
    strengths: ['열정', '창의성', '낙관성', '적응력', '아이디어'],
    weaknesses: ['산만함', '약속 이행 부족', '고통 회피', '충동적', '미완성'],
    growthPath: '5번(탐구자)의 긍정적 측면을 통합하여 깊이와 집중력 습득',
    stressPath: '1번(개혁가)의 부정적 측면으로 비판적이고 완벽주의적',
    tips: ['한 가지에 집중하기', '고통도 삶의 일부임을 인정', '현재 순간에 머물기', '약속 지키기'],
    wing1: '7w6: 엔터테이너 - 더 관계 지향적이고 책임감 있음',
    wing2: '7w8: 현실주의자 - 더 대담하고 assertive',
    famousPeople: '로빈 윌리엄스, 짐 캐리, 리처드 브랜슨',
  },
  '8': {
    type: '8',
    number: 8,
    title: '도전자',
    emoji: '🦅',
    subtitle: '강력한 보호자',
    description: '당신은 힘과 정의를 추구하는 도전자입니다. 강하고 직접적이며, 약한 자를 보호합니다. 통제력을 중시하고 약함을 보이는 것을 꺼립니다.',
    coreDesire: '자신을 보호하고 통제력을 갖고 싶다',
    coreFear: '약하거나 통제당하는 것',
    characteristics: ['강인함', '직접적', '보호적', '자기확신', '대립적'],
    strengths: ['리더십', '결단력', '정의감', '보호 본능', '자신감'],
    weaknesses: ['공격성', '통제욕', '약함 부인', '과도함', '위협적'],
    growthPath: '2번(조력자)의 긍정적 측면을 통합하여 부드러움과 공감 습득',
    stressPath: '5번(탐구자)의 부정적 측면으로 고립되고 냉소적',
    tips: ['취약함도 강점임을 인식', '부드러운 면 허용하기', '남의 의견도 듣기', '통제 내려놓기'],
    wing1: '8w7: 독립가 - 더 외향적이고 에너지 넘침',
    wing2: '8w9: 곰 - 더 차분하고 수용적',
    famousPeople: '마틴 루터 킹, 윈스턴 처칠, 세레나 윌리엄스',
  },
  '9': {
    type: '9',
    number: 9,
    title: '평화주의자',
    emoji: '☮️',
    subtitle: '조화로운 중재자',
    description: '당신은 평화와 조화를 추구하는 평화주의자입니다. 갈등을 피하고 모든 관점을 이해하려 합니다. 수용적이고 안정적이며, 다른 사람들과 연결되길 원합니다.',
    coreDesire: '내적 평화와 조화를 이루고 싶다',
    coreFear: '분리되고 갈등에 휘말리는 것',
    characteristics: ['평화로움', '수용적', '중재적', '게으름', '자기망각'],
    strengths: ['중재 능력', '수용성', '인내심', '공감력', '안정감'],
    weaknesses: ['우유부단', '수동적', '갈등 회피', '자기 무시', '관성'],
    growthPath: '3번(성취자)의 긍정적 측면을 통합하여 목표 의식과 자기 가치 습득',
    stressPath: '6번(충성가)의 부정적 측면으로 불안하고 의심',
    tips: ['자신의 의견 표현하기', '갈등도 필요함을 인식', '목표 세우고 실행하기', '자신의 필요 우선시하기'],
    wing1: '9w8: 심판자 - 더 assertive하고 실행력 있음',
    wing2: '9w1: 꿈꾸는 자 - 더 이상주의적이고 원칙적',
    famousPeople: '달라이 라마, 에이브러햄 링컨, 모건 프리먼',
  },
};

// 결과 계산 함수
export function calculateResult(answers: number[]): EnneagramResult {
  const scores: Record<string, number> = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 };
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedOption = question.options[answerIndex];
      Object.entries(selectedOption.scores).forEach(([type, score]) => {
        scores[type] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxType: EnneagramType = '1';
  let maxScore = 0;
  
  (Object.entries(scores) as [EnneagramType, number][]).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return results[maxType];
}
