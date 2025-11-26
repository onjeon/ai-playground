// MBTI 성격 유형 테스트 질문 및 결과 데이터

export interface MBTIQuestion {
  id: number;
  question: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP'; // 어떤 차원을 측정하는지
  options: {
    text: string;
    type: string; // E, I, S, N, T, F, J, P
  }[];
}

export interface MBTIResult {
  type: string; // INTJ, ENFP 등
  title: string;
  emoji: string;
  nickname: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  characteristics: string[];
  compatibility: string[];
  incompatibility: string[];
  famousPeople: string[];
  career: string[];
}

// MBTI 유형 목록
export const mbtiTypes = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
] as const;
export type MBTIType = typeof mbtiTypes[number];

// 질문 데이터 (20문항 - 각 차원 5문항씩)
export const questions: MBTIQuestion[] = [
  // E vs I (외향 vs 내향) - 5문항
  {
    id: 1,
    question: "주말에 에너지를 충전하는 방법은?",
    dimension: 'EI',
    options: [
      { text: "친구들과 만나서 신나게 놀기", type: 'E' },
      { text: "집에서 혼자 조용히 쉬기", type: 'I' },
    ],
  },
  {
    id: 2,
    question: "새로운 사람들과의 만남에서 나는?",
    dimension: 'EI',
    options: [
      { text: "적극적으로 먼저 말을 건다", type: 'E' },
      { text: "상대가 먼저 말 걸어주길 기다린다", type: 'I' },
    ],
  },
  {
    id: 3,
    question: "생각을 정리할 때 나는?",
    dimension: 'EI',
    options: [
      { text: "다른 사람과 이야기하면서 정리한다", type: 'E' },
      { text: "혼자 조용히 생각하며 정리한다", type: 'I' },
    ],
  },
  {
    id: 4,
    question: "파티나 모임에서 나는?",
    dimension: 'EI',
    options: [
      { text: "많은 사람들과 두루두루 어울린다", type: 'E' },
      { text: "소수의 사람과 깊은 대화를 나눈다", type: 'I' },
    ],
  },
  {
    id: 5,
    question: "전화가 울리면?",
    dimension: 'EI',
    options: [
      { text: "바로 받는 편이다", type: 'E' },
      { text: "누군지 확인하고 받을지 결정한다", type: 'I' },
    ],
  },

  // S vs N (감각 vs 직관) - 5문항
  {
    id: 6,
    question: "문제를 해결할 때 나는?",
    dimension: 'SN',
    options: [
      { text: "검증된 방법과 경험에 의존한다", type: 'S' },
      { text: "새로운 가능성과 아이디어를 탐색한다", type: 'N' },
    ],
  },
  {
    id: 7,
    question: "대화할 때 나는?",
    dimension: 'SN',
    options: [
      { text: "구체적인 사실과 세부사항에 집중한다", type: 'S' },
      { text: "전체적인 의미와 패턴을 파악하려 한다", type: 'N' },
    ],
  },
  {
    id: 8,
    question: "설명서를 읽을 때?",
    dimension: 'SN',
    options: [
      { text: "순서대로 차근차근 읽는다", type: 'S' },
      { text: "대충 훑어보고 직접 해본다", type: 'N' },
    ],
  },
  {
    id: 9,
    question: "나는 주로?",
    dimension: 'SN',
    options: [
      { text: "현재에 집중하고 현실적으로 생각한다", type: 'S' },
      { text: "미래를 상상하고 가능성을 생각한다", type: 'N' },
    ],
  },
  {
    id: 10,
    question: "정보를 받아들일 때?",
    dimension: 'SN',
    options: [
      { text: "오감으로 직접 경험하는 것을 선호한다", type: 'S' },
      { text: "숨겨진 의미나 가능성을 찾으려 한다", type: 'N' },
    ],
  },

  // T vs F (사고 vs 감정) - 5문항
  {
    id: 11,
    question: "결정을 내릴 때 나는?",
    dimension: 'TF',
    options: [
      { text: "논리와 객관적 사실을 기준으로 한다", type: 'T' },
      { text: "관련된 사람들의 감정을 고려한다", type: 'F' },
    ],
  },
  {
    id: 12,
    question: "친구가 고민 상담을 할 때?",
    dimension: 'TF',
    options: [
      { text: "해결책이나 조언을 제시한다", type: 'T' },
      { text: "먼저 공감하고 감정을 들어준다", type: 'F' },
    ],
  },
  {
    id: 13,
    question: "갈등 상황에서 나는?",
    dimension: 'TF',
    options: [
      { text: "옳고 그름을 명확히 따진다", type: 'T' },
      { text: "관계의 조화를 우선시한다", type: 'F' },
    ],
  },
  {
    id: 14,
    question: "비판을 받았을 때?",
    dimension: 'TF',
    options: [
      { text: "내용이 타당한지 분석한다", type: 'T' },
      { text: "감정적으로 상처받는 편이다", type: 'F' },
    ],
  },
  {
    id: 15,
    question: "나에게 더 중요한 것은?",
    dimension: 'TF',
    options: [
      { text: "공정함과 진실", type: 'T' },
      { text: "배려와 조화", type: 'F' },
    ],
  },

  // J vs P (판단 vs 인식) - 5문항
  {
    id: 16,
    question: "여행 계획을 세울 때?",
    dimension: 'JP',
    options: [
      { text: "세부 일정을 미리 계획한다", type: 'J' },
      { text: "큰 틀만 정하고 유연하게 움직인다", type: 'P' },
    ],
  },
  {
    id: 17,
    question: "마감 기한이 있는 일을 할 때?",
    dimension: 'JP',
    options: [
      { text: "미리미리 준비해서 여유있게 끝낸다", type: 'J' },
      { text: "마감 직전에 집중력이 올라온다", type: 'P' },
    ],
  },
  {
    id: 18,
    question: "일상생활에서 나는?",
    dimension: 'JP',
    options: [
      { text: "규칙적인 루틴을 좋아한다", type: 'J' },
      { text: "자유롭고 융통성 있게 살고 싶다", type: 'P' },
    ],
  },
  {
    id: 19,
    question: "결정을 내릴 때?",
    dimension: 'JP',
    options: [
      { text: "빨리 결정하고 실행한다", type: 'J' },
      { text: "여러 가능성을 열어두고 미룬다", type: 'P' },
    ],
  },
  {
    id: 20,
    question: "책상이나 방의 상태는?",
    dimension: 'JP',
    options: [
      { text: "정리정돈이 잘 되어있다", type: 'J' },
      { text: "약간 어질러져 있어도 괜찮다", type: 'P' },
    ],
  },
];

// 16가지 MBTI 결과 데이터
export const results: Record<MBTIType, MBTIResult> = {
  ISTJ: {
    type: 'ISTJ',
    title: '청렴결백한 논리주의자',
    emoji: '📋',
    nickname: '소금형 인간',
    description: '책임감이 강하고 신뢰할 수 있는 현실주의자입니다. 한번 맡은 일은 끝까지 해내며, 전통과 규칙을 중시합니다. 조용하지만 내면의 신념이 확고하고, 실용적이며 사실에 기반한 판단을 합니다.',
    strengths: ['책임감', '신뢰성', '꼼꼼함', '인내심', '성실함'],
    weaknesses: ['융통성 부족', '변화 저항', '감정 표현 서툼'],
    characteristics: ['규칙과 전통 중시', '체계적인 업무 처리', '약속을 철저히 지킴', '신중한 의사결정'],
    compatibility: ['ESFP', 'ESTP'],
    incompatibility: ['ENFP', 'ENTP'],
    famousPeople: ['조지 워싱턴', '엘리자베스 2세', '워렌 버핏'],
    career: ['회계사', '법률가', '공무원', '은행원', '관리자'],
  },
  ISFJ: {
    type: 'ISFJ',
    title: '용감한 수호자',
    emoji: '🛡️',
    nickname: '헌신적인 보호자',
    description: '따뜻하고 헌신적인 성격으로 주변 사람들을 돌봅니다. 겸손하고 책임감 있으며, 다른 사람의 감정에 민감합니다. 조용히 봉사하는 것을 좋아하고, 안정적인 환경을 추구합니다.',
    strengths: ['배려심', '성실함', '인내심', '충성심', '관찰력'],
    weaknesses: ['거절 못함', '자기희생', '변화 두려움'],
    characteristics: ['타인 돌봄에 헌신', '세심한 배려', '전통 가치 중시', '조화로운 관계 추구'],
    compatibility: ['ESFP', 'ESTP'],
    incompatibility: ['ENTP', 'ENTJ'],
    famousPeople: ['마더 테레사', '비욘세', '케이트 미들턴'],
    career: ['간호사', '교사', '사회복지사', '상담사', '사서'],
  },
  INFJ: {
    type: 'INFJ',
    title: '선의의 옹호자',
    emoji: '🦋',
    nickname: '예언자형',
    description: '가장 희귀한 성격 유형으로, 이상주의적이면서도 실행력이 있습니다. 깊은 통찰력과 직관을 가지고 있으며, 의미 있는 일에 헌신합니다. 조용하지만 강한 신념을 가지고 있습니다.',
    strengths: ['통찰력', '창의성', '헌신', '이상주의', '공감능력'],
    weaknesses: ['완벽주의', '번아웃', '비밀주의'],
    characteristics: ['의미와 목적 추구', '깊은 인간관계 선호', '직관적 이해', '도움 주기 좋아함'],
    compatibility: ['ENFP', 'ENTP'],
    incompatibility: ['ESTP', 'ESFP'],
    famousPeople: ['마틴 루터 킹', '넬슨 만델라', '테일러 스위프트'],
    career: ['상담사', '작가', '심리학자', '예술가', 'NGO 활동가'],
  },
  INTJ: {
    type: 'INTJ',
    title: '용의주도한 전략가',
    emoji: '🎯',
    nickname: '과학자형',
    description: '독립적이고 분석적인 사고를 가진 전략가입니다. 높은 기준을 가지고 있으며, 지식과 역량에 대한 자신감이 있습니다. 장기적인 비전을 가지고 체계적으로 목표를 달성합니다.',
    strengths: ['전략적 사고', '독립성', '결단력', '분석력', '자기확신'],
    weaknesses: ['오만함', '감정 표현 서툼', '비타협적'],
    characteristics: ['완벽주의적 계획', '효율성 추구', '지적 호기심', '독립적 작업 선호'],
    compatibility: ['ENFP', 'ENTP'],
    incompatibility: ['ESFJ', 'ISFJ'],
    famousPeople: ['일론 머스크', '마크 저커버그', '아이작 뉴턴'],
    career: ['과학자', 'CEO', '프로그래머', '컨설턴트', '건축가'],
  },
  ISTP: {
    type: 'ISTP',
    title: '만능 재주꾼',
    emoji: '🔧',
    nickname: '장인형',
    description: '논리적이고 실용적인 문제 해결사입니다. 조용하고 과묵하지만, 위기 상황에서 빛을 발합니다. 손으로 직접 만지고 경험하는 것을 좋아하며, 분석적이면서도 유연합니다.',
    strengths: ['문제해결력', '적응력', '실용성', '침착함', '효율성'],
    weaknesses: ['감정 표현 부족', '무관심', '위험 추구'],
    characteristics: ['실용적 분석', '위기 대처 능력', '도구/기계 다루기', '자유 추구'],
    compatibility: ['ESTJ', 'ENTJ'],
    incompatibility: ['ENFJ', 'ESFJ'],
    famousPeople: ['클린트 이스트우드', '마이클 조던', '톰 크루즈'],
    career: ['엔지니어', '파일럿', '기술자', '운동선수', '소방관'],
  },
  ISFP: {
    type: 'ISFP',
    title: '호기심 많은 예술가',
    emoji: '🎨',
    nickname: '성인군자형',
    description: '온화하고 감수성이 풍부한 예술가 타입입니다. 현재를 즐기며 자유를 중시합니다. 말보다 행동으로 사랑을 표현하고, 자신만의 가치관을 소중히 여깁니다.',
    strengths: ['예술적 감각', '공감능력', '유연성', '충성심', '섬세함'],
    weaknesses: ['자기비하', '스트레스 취약', '장기계획 부족'],
    characteristics: ['현재 순간 즐김', '조화와 평화 추구', '개인 공간 중시', '실용적 배려'],
    compatibility: ['ESFJ', 'ESTJ'],
    incompatibility: ['ENTJ', 'ENTP'],
    famousPeople: ['마이클 잭슨', '브리트니 스피어스', '오드리 햅번'],
    career: ['디자이너', '음악가', '수의사', '요리사', '사진작가'],
  },
  INFP: {
    type: 'INFP',
    title: '열정적인 중재자',
    emoji: '🌸',
    nickname: '잔다르크형',
    description: '이상주의적이고 공감 능력이 뛰어난 몽상가입니다. 내면의 가치와 신념에 따라 살며, 진정성을 추구합니다. 창의적이고 개인적인 표현을 중요시합니다.',
    strengths: ['공감능력', '창의성', '열린 마음', '이상주의', '헌신'],
    weaknesses: ['비현실적', '자기비판', '감정기복'],
    characteristics: ['이상과 가치 추구', '창의적 표현', '깊은 감정', '의미 있는 관계 추구'],
    compatibility: ['ENFJ', 'ENTJ'],
    incompatibility: ['ESTJ', 'ISTJ'],
    famousPeople: ['셰익스피어', 'J.R.R. 톨킨', '빈센트 반 고흐'],
    career: ['작가', '예술가', '상담사', '심리학자', '인문학자'],
  },
  INTP: {
    type: 'INTP',
    title: '논리적인 사색가',
    emoji: '🔬',
    nickname: '아이디어 뱅크',
    description: '논리와 분석을 사랑하는 사색가입니다. 추상적인 개념과 이론에 매력을 느끼며, 지적 호기심이 강합니다. 독창적인 아이디어를 생산하며, 논리적 일관성을 중시합니다.',
    strengths: ['분석력', '창의성', '객관성', '독창성', '논리력'],
    weaknesses: ['사회성 부족', '우유부단', '감정 둔감'],
    characteristics: ['지적 탐구', '이론적 분석', '독립적 사고', '혁신적 아이디어'],
    compatibility: ['ENTJ', 'ESTJ'],
    incompatibility: ['ESFJ', 'ISFJ'],
    famousPeople: ['아인슈타인', '빌 게이츠', '소크라테스'],
    career: ['과학자', '철학자', '프로그래머', '수학자', '분석가'],
  },
  ESTP: {
    type: 'ESTP',
    title: '모험을 즐기는 사업가',
    emoji: '🏄',
    nickname: '사업가형',
    description: '활동적이고 현실적인 모험가입니다. 지금 이 순간을 즐기며, 빠른 결정과 행동력이 특징입니다. 사람들과 어울리기 좋아하고, 위기 상황에서 뛰어난 능력을 발휘합니다.',
    strengths: ['적응력', '현실감각', '관찰력', '사교성', '결단력'],
    weaknesses: ['참을성 부족', '규칙 무시', '장기계획 약함'],
    characteristics: ['즉흥적 행동', '현실적 문제해결', '활발한 사교', '모험 추구'],
    compatibility: ['ISFJ', 'ISTJ'],
    incompatibility: ['INFJ', 'INTJ'],
    famousPeople: ['어니스트 헤밍웨이', '마돈나', '도널드 트럼프'],
    career: ['영업', '기업가', '마케터', '운동선수', '응급구조사'],
  },
  ESFP: {
    type: 'ESFP',
    title: '자유로운 영혼의 연예인',
    emoji: '🎭',
    nickname: '사교형',
    description: '활기차고 재미있는 엔터테이너입니다. 사람들과 함께하는 것을 좋아하고, 현재 순간을 최대한 즐깁니다. 긍정적인 에너지로 주변을 밝게 만들며, 실용적인 도움을 주는 것을 좋아합니다.',
    strengths: ['사교성', '실용성', '낙천성', '관찰력', '유연성'],
    weaknesses: ['집중력 부족', '갈등 회피', '장기계획 약함'],
    characteristics: ['즐거움 추구', '사람 좋아함', '현실적 배려', '즉흥성'],
    compatibility: ['ISFJ', 'ISTJ'],
    incompatibility: ['INTJ', 'INFJ'],
    famousPeople: ['마릴린 먼로', '엘비스 프레슬리', '저스틴 비버'],
    career: ['연예인', '이벤트 기획', '여행 가이드', '영업', '교사'],
  },
  ENFP: {
    type: 'ENFP',
    title: '재기발랄한 활동가',
    emoji: '🌈',
    nickname: '스파크형',
    description: '열정적이고 창의적인 자유로운 영혼입니다. 새로운 가능성을 탐험하고, 사람들에게 영감을 줍니다. 호기심이 많고 에너지가 넘치며, 진정한 연결을 추구합니다.',
    strengths: ['창의성', '열정', '사교성', '공감능력', '적응력'],
    weaknesses: ['집중력 부족', '실용성 부족', '과도한 낙관'],
    characteristics: ['아이디어 풍부', '사람 중심', '새로움 추구', '감정적 연결'],
    compatibility: ['INTJ', 'INFJ'],
    incompatibility: ['ISTJ', 'ISFJ'],
    famousPeople: ['로빈 윌리엄스', '윌 스미스', '로버트 다우니 주니어'],
    career: ['기획자', '마케터', '상담사', '배우', '작가'],
  },
  ENTP: {
    type: 'ENTP',
    title: '뜨거운 논쟁을 즐기는 변론가',
    emoji: '💡',
    nickname: '발명가형',
    description: '지적이고 호기심 많은 논쟁가입니다. 새로운 아이디어를 탐구하고 기존 시스템에 도전합니다. 빠른 사고와 언변으로 토론을 즐기며, 혁신적인 해결책을 찾습니다.',
    strengths: ['창의성', '전략적 사고', '지적 호기심', '적응력', '자신감'],
    weaknesses: ['논쟁적', '감정 둔감', '마무리 약함'],
    characteristics: ['아이디어 생산', '지적 도전', '유연한 사고', '토론 즐김'],
    compatibility: ['INTJ', 'INFJ'],
    incompatibility: ['ISFJ', 'ISTJ'],
    famousPeople: ['토마스 에디슨', '벤자민 프랭클린', '마크 트웨인'],
    career: ['기업가', '변호사', '컨설턴트', '발명가', '크리에이터'],
  },
  ESTJ: {
    type: 'ESTJ',
    title: '엄격한 관리자',
    emoji: '👔',
    nickname: '사업가형',
    description: '조직적이고 책임감 있는 관리자입니다. 명확한 원칙과 규칙을 중시하며, 효율적으로 일을 처리합니다. 리더십이 있고 결단력이 뛰어나며, 전통적 가치를 존중합니다.',
    strengths: ['조직력', '책임감', '결단력', '실용성', '리더십'],
    weaknesses: ['융통성 부족', '지배적', '감정 무시'],
    characteristics: ['질서 유지', '명확한 기준', '효율성 추구', '전통 존중'],
    compatibility: ['ISFP', 'ISTP'],
    incompatibility: ['INFP', 'ENFP'],
    famousPeople: ['미셸 오바마', '헨리 포드', '프랭크 시나트라'],
    career: ['관리자', '군인', '법률가', '공무원', 'CEO'],
  },
  ESFJ: {
    type: 'ESFJ',
    title: '사교적인 외교관',
    emoji: '🤝',
    nickname: '친선도모형',
    description: '따뜻하고 사교적인 돌봄이입니다. 다른 사람의 필요에 민감하고, 조화로운 환경을 만들기 위해 노력합니다. 전통을 중시하고 충성심이 강하며, 실질적인 도움을 주는 것을 좋아합니다.',
    strengths: ['배려심', '협력', '충성심', '실용성', '조직력'],
    weaknesses: ['인정 욕구', '비판 민감', '변화 저항'],
    characteristics: ['화합 추구', '타인 돌봄', '전통 중시', '사회적 책임'],
    compatibility: ['ISFP', 'ISTP'],
    incompatibility: ['INTP', 'INTJ'],
    famousPeople: ['테일러 스위프트', '제니퍼 로페즈', '빌 클린턴'],
    career: ['간호사', '교사', 'HR 담당', '이벤트 기획', '상담사'],
  },
  ENFJ: {
    type: 'ENFJ',
    title: '정의로운 사회운동가',
    emoji: '🌟',
    nickname: '언변능숙형',
    description: '카리스마 있고 영감을 주는 리더입니다. 다른 사람의 성장을 돕는 것에서 기쁨을 느끼며, 긍정적인 영향력을 미칩니다. 공감 능력이 뛰어나고 이타적이며, 조화로운 관계를 추구합니다.',
    strengths: ['리더십', '공감능력', '소통능력', '이타심', '카리스마'],
    weaknesses: ['자기희생', '비판 민감', '과도한 이상'],
    characteristics: ['타인 성장 지원', '비전 제시', '조화 추구', '감정적 연결'],
    compatibility: ['INFP', 'ISFP'],
    incompatibility: ['ISTP', 'ESTP'],
    famousPeople: ['오프라 윈프리', '버락 오바마', '마틴 루터 킹'],
    career: ['교사', '상담사', '정치인', 'HR 매니저', '사회운동가'],
  },
  ENTJ: {
    type: 'ENTJ',
    title: '대담한 통솔자',
    emoji: '👑',
    nickname: '지도자형',
    description: '자신감 있고 결단력 있는 리더입니다. 효율성과 성과를 중시하며, 장기적인 비전을 가지고 조직을 이끕니다. 도전을 두려워하지 않고, 목표 달성을 위해 전략적으로 움직입니다.',
    strengths: ['리더십', '전략적 사고', '결단력', '자신감', '효율성'],
    weaknesses: ['지배적', '감정 무시', '참을성 부족'],
    characteristics: ['목표 지향', '효율 추구', '전략 수립', '권위적 리더십'],
    compatibility: ['INFP', 'INTP'],
    incompatibility: ['ISFP', 'ISFJ'],
    famousPeople: ['스티브 잡스', '마거릿 대처', '나폴레옹'],
    career: ['CEO', '경영자', '변호사', '컨설턴트', '정치인'],
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): MBTIResult {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedType = question.options[answerIndex].type as keyof typeof scores;
      scores[selectedType]++;
    }
  });

  // MBTI 유형 결정
  const mbtiType = [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P',
  ].join('') as MBTIType;

  return results[mbtiType];
}
