// MBTI 직장 생존기 테스트 - 직장에서 나는 어떤 MBTI?

export interface MbtiOfficeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      E?: number; I?: number;
      S?: number; N?: number;
      T?: number; F?: number;
      J?: number; P?: number;
    };
  }[];
}

export interface MbtiOfficeResult {
  type: string;
  title: string;
  emoji: string;
  workStyle: string;
  description: string;
  strengths: string[];
  challenges: string[];
  survivalTips: string[];
  bestWith: string[];
  worstWith: string[];
  officeRole: string;
  stressSignal: string;
}

export const questions: MbtiOfficeQuestion[] = [
  {
    id: 1,
    question: "회사에서 점심시간, 당신은?",
    options: [
      { text: "동료들과 함께 밥 먹으러 가기", scores: { E: 2 } },
      { text: "혼밥하며 나만의 시간 갖기", scores: { I: 2 } },
      { text: "가끔은 같이, 가끔은 혼자", scores: { E: 1, I: 1 } },
      { text: "업무 하면서 간단히 때우기", scores: { I: 1, J: 1 } },
    ],
  },
  {
    id: 2,
    question: "새 프로젝트를 맡았을 때?",
    options: [
      { text: "기존 방식대로 안정적으로 진행", scores: { S: 2 } },
      { text: "새로운 방법을 시도해보고 싶어", scores: { N: 2 } },
      { text: "일단 데이터와 사례를 분석", scores: { S: 1, T: 1 } },
      { text: "큰 그림을 먼저 그려봄", scores: { N: 1, P: 1 } },
    ],
  },
  {
    id: 3,
    question: "회의 시간에 나는?",
    options: [
      { text: "적극적으로 의견 발표", scores: { E: 2 } },
      { text: "듣다가 정리된 의견만 말함", scores: { I: 2 } },
      { text: "논리적 반박 포인트 준비", scores: { T: 1, I: 1 } },
      { text: "분위기 봐서 말하기", scores: { F: 1, E: 1 } },
    ],
  },
  {
    id: 4,
    question: "업무 처리 스타일은?",
    options: [
      { text: "계획표 짜고 순서대로 처리", scores: { J: 2 } },
      { text: "급한 거 먼저, 유연하게", scores: { P: 2 } },
      { text: "마감 직전에 집중력 폭발", scores: { P: 1, N: 1 } },
      { text: "미리미리 끝내놓는 편", scores: { J: 1, S: 1 } },
    ],
  },
  {
    id: 5,
    question: "팀원과 갈등이 생기면?",
    options: [
      { text: "논리적으로 문제점 짚기", scores: { T: 2 } },
      { text: "감정 먼저 살피고 대화", scores: { F: 2 } },
      { text: "일단 피하고 시간 두기", scores: { I: 1, P: 1 } },
      { text: "바로 대화로 해결 시도", scores: { E: 1, J: 1 } },
    ],
  },
  {
    id: 6,
    question: "상사에게 피드백을 받았을 때?",
    options: [
      { text: "객관적으로 분석하고 개선", scores: { T: 2 } },
      { text: "좀 상처받지만 받아들임", scores: { F: 2 } },
      { text: "일단 수용, 나중에 반영", scores: { P: 1, F: 1 } },
      { text: "바로 수정해서 다시 보여드림", scores: { J: 1, T: 1 } },
    ],
  },
  {
    id: 7,
    question: "야근을 해야 할 때?",
    options: [
      { text: "계획적으로 안 하게 미리 처리", scores: { J: 2 } },
      { text: "필요하면 하는 거지 뭐", scores: { P: 2 } },
      { text: "효율적으로 빨리 끝내고 퇴근", scores: { T: 1, J: 1 } },
      { text: "팀 분위기 보고 맞춰서", scores: { F: 1, E: 1 } },
    ],
  },
  {
    id: 8,
    question: "새로운 업무 시스템이 도입됐을 때?",
    options: [
      { text: "매뉴얼 보고 차근차근 익힘", scores: { S: 2 } },
      { text: "일단 이것저것 눌러보며 파악", scores: { N: 2 } },
      { text: "왜 바꾸는지 이유부터 궁금", scores: { N: 1, T: 1 } },
      { text: "적응할 때까지 시간이 필요해", scores: { S: 1, I: 1 } },
    ],
  },
  {
    id: 9,
    question: "팀 회식 공지가 떴다!",
    options: [
      { text: "오 재밌겠다! 기대됨", scores: { E: 2 } },
      { text: "갈 건데... 빨리 끝났으면", scores: { I: 2 } },
      { text: "누가 오는지에 따라 다름", scores: { I: 1, F: 1 } },
      { text: "가서 분위기 메이커 할 듯", scores: { E: 1, F: 1 } },
    ],
  },
  {
    id: 10,
    question: "보고서 작성할 때?",
    options: [
      { text: "데이터, 숫자 위주로 정확하게", scores: { S: 2, T: 1 } },
      { text: "전체 맥락과 의미 위주로", scores: { N: 2, F: 1 } },
      { text: "템플릿 따라서 깔끔하게", scores: { S: 1, J: 1 } },
      { text: "창의적 제안도 넣어보기", scores: { N: 1, P: 1 } },
    ],
  },
  {
    id: 11,
    question: "업무 중 스트레스 해소법은?",
    options: [
      { text: "동료랑 수다 떨기", scores: { E: 2 } },
      { text: "혼자 음악 듣거나 산책", scores: { I: 2 } },
      { text: "커피 마시며 잠깐 휴식", scores: { S: 1, P: 1 } },
      { text: "할 일 끝내면 스트레스 해소", scores: { J: 1, T: 1 } },
    ],
  },
  {
    id: 12,
    question: "이상적인 상사 스타일은?",
    options: [
      { text: "명확한 지시와 피드백을 주는", scores: { J: 1, S: 1 } },
      { text: "자율성을 주고 믿어주는", scores: { P: 1, N: 1 } },
      { text: "공정하고 논리적인", scores: { T: 2 } },
      { text: "따뜻하고 배려하는", scores: { F: 2 } },
    ],
  },
];

export const results: Record<string, MbtiOfficeResult> = {
  ISTJ: {
    type: 'ISTJ',
    title: '신뢰의 실무 전문가',
    emoji: '📋',
    workStyle: '체계적 완벽주의',
    description: '맡은 일은 반드시 완수하는 회사의 든든한 기둥! 정확하고 꼼꼼한 업무 처리로 상사의 신뢰를 한 몸에 받는 타입입니다.',
    strengths: ['철저한 마감 준수', '정확한 업무 처리', '책임감 강함', '안정적인 성과'],
    challenges: ['변화에 적응 느림', '융통성 부족할 때', '새 방식 거부감'],
    survivalTips: ['가끔은 새로운 시도도 OK', '완벽보다 적당히도 괜찮아', '동료와 소통 시간 늘리기'],
    bestWith: ['ESTJ', 'ISFJ', 'INTJ'],
    worstWith: ['ENFP', 'ENTP'],
    officeRole: '팀의 품질 관리자',
    stressSignal: '평소보다 더 꼼꼼해지고 말수가 줄어듦',
  },
  ISFJ: {
    type: 'ISFJ',
    title: '따뜻한 팀 서포터',
    emoji: '🤝',
    workStyle: '헌신적 조력자',
    description: '팀의 분위기 메이커이자 든든한 지원군! 동료들의 어려움을 먼저 알아채고 도와주는 회사의 천사입니다.',
    strengths: ['세심한 배려', '꼼꼼한 업무', '팀 화합 기여', '신뢰받는 조력자'],
    challenges: ['거절을 못함', '과로 위험', '자기 주장 약함'],
    survivalTips: ['NO라고 말하는 연습', '내 업무 우선순위 지키기', '과한 헌신 주의'],
    bestWith: ['ESFJ', 'ISTJ', 'INFJ'],
    worstWith: ['ENTP', 'ESTP'],
    officeRole: '팀의 윤활유',
    stressSignal: '더 조용해지고 혼자 일을 떠안음',
  },
  INFJ: {
    type: 'INFJ',
    title: '비전의 조용한 리더',
    emoji: '🔮',
    workStyle: '통찰력 있는 전략가',
    description: '조용하지만 깊은 통찰력으로 팀을 이끄는 숨은 리더! 의미 있는 일에 열정을 불태우는 이상주의자입니다.',
    strengths: ['깊은 통찰력', '의미 추구', '창의적 해결책', '동료 이해력'],
    challenges: ['현실과 이상 괴리', '에너지 소진', '과도한 완벽주의'],
    survivalTips: ['현실적 목표 설정', '혼자 시간 확보', '작은 성취도 인정하기'],
    bestWith: ['ENFJ', 'INTJ', 'INFP'],
    worstWith: ['ESTP', 'ESFP'],
    officeRole: '팀의 비전 설계자',
    stressSignal: '회의에서 점점 말이 없어짐',
  },
  INTJ: {
    type: 'INTJ',
    title: '전략적 마스터플래너',
    emoji: '🧠',
    workStyle: '효율 극대화 전략가',
    description: '뛰어난 분석력과 전략으로 문제를 해결하는 브레인! 비효율을 참지 못하고 시스템을 개선하는 혁신가입니다.',
    strengths: ['뛰어난 분석력', '장기 전략 수립', '독립적 업무', '높은 기준'],
    challenges: ['감정 표현 부족', '권위에 도전', '완벽주의 스트레스'],
    survivalTips: ['팀원 감정도 고려하기', '상사 스타일에 맞추기', '90%도 괜찮아'],
    bestWith: ['ENTJ', 'INTP', 'ISTJ'],
    worstWith: ['ESFP', 'ESFJ'],
    officeRole: '팀의 전략 참모',
    stressSignal: '더 냉정해지고 혼자 일하려 함',
  },
  ISTP: {
    type: 'ISTP',
    title: '냉철한 문제 해결사',
    emoji: '🔧',
    workStyle: '실용적 해결사',
    description: '위기 상황에서 빛나는 냉철한 해결사! 복잡한 문제도 논리적으로 분석해서 깔끔하게 처리합니다.',
    strengths: ['위기 대응력', '논리적 분석', '실용적 해결', '침착함'],
    challenges: ['장기 계획 약함', '감정 소통 부족', '규칙 거부감'],
    survivalTips: ['장기 목표 세워보기', '동료와 소통 늘리기', '규칙도 때론 필요해'],
    bestWith: ['ESTP', 'ISTJ', 'ESTJ'],
    worstWith: ['ENFJ', 'ESFJ'],
    officeRole: '팀의 트러블슈터',
    stressSignal: '더 과묵해지고 혼자 해결하려 함',
  },
  ISFP: {
    type: 'ISFP',
    title: '조용한 창작자',
    emoji: '🎨',
    workStyle: '감성적 실행가',
    description: '조용히 자기 일을 해내는 예술가 타입! 섬세한 감각으로 디테일을 살리고 조화를 추구합니다.',
    strengths: ['섬세한 감각', '적응력 좋음', '실용적 창의성', '협조적'],
    challenges: ['자기 주장 약함', '갈등 회피', '장기 계획 부족'],
    survivalTips: ['의견 표현 연습', '갈등도 성장의 기회', '목표 설정해보기'],
    bestWith: ['ESFP', 'ISFJ', 'INFP'],
    worstWith: ['ENTJ', 'ESTJ'],
    officeRole: '팀의 감성 담당',
    stressSignal: '더 위축되고 회피하려 함',
  },
  INFP: {
    type: 'INFP',
    title: '이상을 좇는 몽상가',
    emoji: '✨',
    workStyle: '의미 추구형',
    description: '일의 의미와 가치를 중요시하는 이상주의자! 창의적이고 공감 능력이 뛰어나 팀에 영감을 줍니다.',
    strengths: ['창의성', '공감 능력', '가치 추구', '적응력'],
    challenges: ['현실 감각 부족', '비판에 민감', '우선순위 혼란'],
    survivalTips: ['현실적 목표로 쪼개기', '비판은 업무에 대한 것', '마감 관리 철저히'],
    bestWith: ['ENFP', 'INFJ', 'ENFJ'],
    worstWith: ['ESTJ', 'ENTJ'],
    officeRole: '팀의 영감 메이커',
    stressSignal: '멍하니 있거나 감정적으로 지쳐 보임',
  },
  INTP: {
    type: 'INTP',
    title: '논리의 분석가',
    emoji: '🔬',
    workStyle: '지적 탐구형',
    description: '끝없는 호기심으로 문제의 본질을 파헤치는 분석가! 복잡한 이론도 명쾌하게 정리하는 두뇌 집단입니다.',
    strengths: ['논리적 분석', '창의적 해결', '객관적 판단', '학습 능력'],
    challenges: ['실행력 부족', '소통 어려움', '세부사항 놓침'],
    survivalTips: ['아이디어를 행동으로', '쉽게 설명하는 연습', '마감 알람 설정'],
    bestWith: ['INTJ', 'ENTP', 'ISTP'],
    worstWith: ['ESFJ', 'ENFJ'],
    officeRole: '팀의 씽크탱크',
    stressSignal: '더 혼자 있으려 하고 대화 회피',
  },
  ESTP: {
    type: 'ESTP',
    title: '액션 히어로',
    emoji: '⚡',
    workStyle: '즉흥적 실행가',
    description: '생각보다 행동이 빠른 액션파! 위기 상황에서 능력이 빛나고 에너지 넘치는 분위기 메이커입니다.',
    strengths: ['빠른 실행력', '위기 대응', '적응력', '설득력'],
    challenges: ['장기 계획 약함', '충동적 결정', '디테일 놓침'],
    survivalTips: ['결정 전 한 번 더 생각', '장기 계획도 세워보기', '서류 작업도 중요해'],
    bestWith: ['ISTP', 'ESTJ', 'ESFP'],
    worstWith: ['INFJ', 'INFP'],
    officeRole: '팀의 추진력',
    stressSignal: '더 충동적이 되거나 자리를 피함',
  },
  ESFP: {
    type: 'ESFP',
    title: '오피스 엔터테이너',
    emoji: '🎉',
    workStyle: '에너지 넘치는 활력소',
    description: '어디서든 분위기를 띄우는 회사의 비타민! 밝은 에너지로 팀 사기를 올리는 무드메이커입니다.',
    strengths: ['밝은 에너지', '팀 분위기 업', '빠른 적응', '실용적'],
    challenges: ['집중력 분산', '장기 계획 약함', '진지한 대화 회피'],
    survivalTips: ['중요한 일 먼저 처리', '가끔은 진지하게도', '플래너 활용하기'],
    bestWith: ['ESTP', 'ISFP', 'ESFJ'],
    worstWith: ['INTJ', 'ISTJ'],
    officeRole: '팀의 무드메이커',
    stressSignal: '평소보다 더 산만하거나 갑자기 조용해짐',
  },
  ENFP: {
    type: 'ENFP',
    title: '아이디어 뱅크',
    emoji: '💡',
    workStyle: '창의적 열정가',
    description: '끊임없이 아이디어가 샘솟는 창의력 대장! 열정적으로 새 프로젝트를 제안하고 팀에 활력을 불어넣습니다.',
    strengths: ['창의력', '열정', '소통 능력', '새로운 시도'],
    challenges: ['마무리 약함', '산만함', '현실 감각 부족'],
    survivalTips: ['시작한 건 끝까지', '우선순위 정하기', '디테일도 챙기기'],
    bestWith: ['INFP', 'ENFJ', 'ENTP'],
    worstWith: ['ISTJ', 'ESTJ'],
    officeRole: '팀의 아이디어 뱅크',
    stressSignal: '에너지가 급격히 떨어지고 무기력해짐',
  },
  ENTP: {
    type: 'ENTP',
    title: '논쟁의 혁신가',
    emoji: '🚀',
    workStyle: '도전적 혁신가',
    description: '기존 방식에 끊임없이 도전하는 혁신가! 논리적 토론을 즐기고 새로운 가능성을 탐구합니다.',
    strengths: ['혁신적 사고', '논리적 토론', '빠른 학습', '적응력'],
    challenges: ['권위와 충돌', '마무리 약함', '일관성 부족'],
    survivalTips: ['상사 의견도 존중', '끝까지 마무리하기', '팀 협조도 필요해'],
    bestWith: ['INTP', 'ENTJ', 'ENFP'],
    worstWith: ['ISFJ', 'ESFJ'],
    officeRole: '팀의 변화 촉진자',
    stressSignal: '논쟁이 공격적으로 변하거나 냉소적이 됨',
  },
  ESTJ: {
    type: 'ESTJ',
    title: '조직의 리더',
    emoji: '👔',
    workStyle: '체계적 관리자',
    description: '명확한 목표와 체계로 팀을 이끄는 리더 타입! 책임감 강하고 결과를 만들어내는 추진력의 소유자입니다.',
    strengths: ['리더십', '조직력', '책임감', '결과 중심'],
    challenges: ['융통성 부족', '권위적일 수 있음', '감정 배려 약함'],
    survivalTips: ['다른 의견도 경청', '부드러운 소통 연습', '과정도 중요해'],
    bestWith: ['ISTJ', 'ENTJ', 'ESFJ'],
    worstWith: ['INFP', 'ISFP'],
    officeRole: '팀의 총괄 매니저',
    stressSignal: '더 권위적이 되고 통제하려 함',
  },
  ESFJ: {
    type: 'ESFJ',
    title: '화합의 중심',
    emoji: '🌟',
    workStyle: '관계 중심 조율자',
    description: '팀의 화합을 이끄는 인기 만점 조율자! 동료들을 챙기고 좋은 분위기를 만드는 인싸 of 인싸입니다.',
    strengths: ['팀 화합', '배려심', '실행력', '소통 능력'],
    challenges: ['갈등 회피', '남 눈치', '변화 거부'],
    survivalTips: ['내 의견도 중요해', '모든 사람 다 못 맞춰', '새로운 것도 시도'],
    bestWith: ['ISFJ', 'ESTJ', 'ENFJ'],
    worstWith: ['INTP', 'ISTP'],
    officeRole: '팀의 화합 담당',
    stressSignal: '과하게 다른 사람 신경쓰며 지쳐감',
  },
  ENFJ: {
    type: 'ENFJ',
    title: '카리스마 리더',
    emoji: '🌈',
    workStyle: '영감을 주는 리더',
    description: '따뜻한 카리스마로 팀을 이끄는 타고난 리더! 동료들의 성장을 돕고 비전을 공유하는 멘토입니다.',
    strengths: ['리더십', '공감 능력', '동기부여', '비전 제시'],
    challenges: ['과한 책임감', '자기 희생', '비판에 민감'],
    survivalTips: ['나도 챙기기', '모든 걸 책임질 필요 없어', '객관적 피드백 수용'],
    bestWith: ['INFJ', 'ENFP', 'ESFJ'],
    worstWith: ['ISTP', 'INTP'],
    officeRole: '팀의 영혼 리더',
    stressSignal: '더 열심히 하려다 번아웃 위험',
  },
  ENTJ: {
    type: 'ENTJ',
    title: '야망의 사령관',
    emoji: '👑',
    workStyle: '전략적 사령관',
    description: '명확한 비전과 강력한 추진력의 사령관! 목표를 향해 팀을 이끌고 결과를 만들어내는 타고난 CEO 타입입니다.',
    strengths: ['강력한 리더십', '전략적 사고', '결단력', '목표 달성'],
    challenges: ['독단적일 수 있음', '감정 무시', '일 중독'],
    survivalTips: ['팀원 의견 경청', '감정도 챙기기', '워라밸도 필요해'],
    bestWith: ['INTJ', 'ESTJ', 'ENTP'],
    worstWith: ['ISFP', 'INFP'],
    officeRole: '팀의 사령관',
    stressSignal: '더 공격적이고 통제하려는 경향',
  },
};

export function calculateResult(answers: number[]): MbtiOfficeResult {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([key, value]) => {
        scores[key as keyof typeof scores] += value || 0;
      });
    }
  });

  const mbtiType = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return results[mbtiType] || results['ISTJ'];
}
