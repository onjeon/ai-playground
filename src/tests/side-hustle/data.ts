// N잡러 적성 테스트

export interface SideHustleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      content: number;
      commerce: number;
      service: number;
      invest: number;
    };
  }[];
}

export interface SideHustleResult {
  type: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
  famousPeople: string;
}

export const questions: SideHustleQuestion[] = [
  {
    id: 1,
    question: '퇴근 후 남는 시간에 주로 뭘 하나요?',
    options: [
      { text: '유튜브/넷플릭스 시청', scores: { content: 2, commerce: 0, service: 0, invest: 1 } },
      { text: 'SNS 하거나 온라인 쇼핑', scores: { content: 1, commerce: 3, service: 0, invest: 0 } },
      { text: '자기계발/공부', scores: { content: 1, commerce: 0, service: 3, invest: 1 } },
      { text: '재테크 정보 탐색', scores: { content: 0, commerce: 1, service: 0, invest: 3 } },
    ],
  },
  {
    id: 2,
    question: '사람들에게 자주 듣는 말은?',
    options: [
      { text: '"너 말 진짜 재밌다/글 잘 쓴다"', scores: { content: 3, commerce: 0, service: 1, invest: 0 } },
      { text: '"센스 있다/뭘 하든 잘 고른다"', scores: { content: 1, commerce: 3, service: 0, invest: 1 } },
      { text: '"전문가 같다/잘 안다"', scores: { content: 1, commerce: 0, service: 3, invest: 1 } },
      { text: '"돈에 밝다/계산이 빠르다"', scores: { content: 0, commerce: 1, service: 0, invest: 3 } },
    ],
  },
  {
    id: 3,
    question: '부업으로 얼마나 벌고 싶나요?',
    options: [
      { text: '용돈 정도 (월 30-50만원)', scores: { content: 2, commerce: 2, service: 1, invest: 0 } },
      { text: '생활비 보탬 (월 100-200만원)', scores: { content: 2, commerce: 3, service: 2, invest: 1 } },
      { text: '본업만큼 (월 300만원 이상)', scores: { content: 1, commerce: 2, service: 3, invest: 2 } },
      { text: '자산 증식이 목표 (투자 수익)', scores: { content: 0, commerce: 0, service: 0, invest: 3 } },
    ],
  },
  {
    id: 4,
    question: '부업에 투자할 수 있는 시간은?',
    options: [
      { text: '하루 1-2시간 정도', scores: { content: 3, commerce: 1, service: 1, invest: 2 } },
      { text: '주말 집중 투자 가능', scores: { content: 2, commerce: 3, service: 2, invest: 1 } },
      { text: '퇴근 후 3-4시간 가능', scores: { content: 2, commerce: 2, service: 3, invest: 1 } },
      { text: '시간보다 돈을 투자하고 싶다', scores: { content: 0, commerce: 1, service: 0, invest: 3 } },
    ],
  },
  {
    id: 5,
    question: '초기 자금은 얼마나 있나요?',
    options: [
      { text: '거의 없음 (0-50만원)', scores: { content: 3, commerce: 0, service: 2, invest: 0 } },
      { text: '소액 가능 (50-200만원)', scores: { content: 2, commerce: 2, service: 3, invest: 1 } },
      { text: '어느 정도 가능 (200-500만원)', scores: { content: 1, commerce: 3, service: 2, invest: 2 } },
      { text: '여유 있음 (500만원 이상)', scores: { content: 0, commerce: 2, service: 1, invest: 3 } },
    ],
  },
  {
    id: 6,
    question: '리스크에 대한 태도는?',
    options: [
      { text: '리스크 최소화! 안전하게', scores: { content: 3, commerce: 1, service: 2, invest: 0 } },
      { text: '적당한 리스크는 감수', scores: { content: 2, commerce: 3, service: 2, invest: 2 } },
      { text: '하이리스크 하이리턴!', scores: { content: 0, commerce: 1, service: 1, invest: 3 } },
      { text: '노력 대비 확실한 수익 선호', scores: { content: 1, commerce: 1, service: 3, invest: 0 } },
    ],
  },
  {
    id: 7,
    question: '특기나 관심 분야가 있나요?',
    options: [
      { text: '영상 편집/글쓰기/디자인', scores: { content: 3, commerce: 0, service: 1, invest: 0 } },
      { text: '트렌드 파악/마케팅/판매', scores: { content: 1, commerce: 3, service: 0, invest: 1 } },
      { text: '전문 지식/기술/자격증', scores: { content: 1, commerce: 0, service: 3, invest: 0 } },
      { text: '숫자/분석/투자', scores: { content: 0, commerce: 1, service: 0, invest: 3 } },
    ],
  },
  {
    id: 8,
    question: '얼굴 공개에 대해 어떻게 생각하나요?',
    options: [
      { text: '전혀 상관없다', scores: { content: 3, commerce: 1, service: 2, invest: 0 } },
      { text: '필요하면 할 수 있다', scores: { content: 2, commerce: 2, service: 2, invest: 1 } },
      { text: '가능하면 피하고 싶다', scores: { content: 1, commerce: 2, service: 1, invest: 2 } },
      { text: '절대 안 한다', scores: { content: 0, commerce: 1, service: 0, invest: 3 } },
    ],
  },
  {
    id: 9,
    question: '원하는 부업의 형태는?',
    options: [
      { text: '콘텐츠 만들어서 수익화', scores: { content: 3, commerce: 0, service: 1, invest: 0 } },
      { text: '물건 사고팔기', scores: { content: 0, commerce: 3, service: 0, invest: 1 } },
      { text: '내 능력/시간 팔기', scores: { content: 1, commerce: 0, service: 3, invest: 0 } },
      { text: '돈이 돈을 벌게 하기', scores: { content: 0, commerce: 0, service: 0, invest: 3 } },
    ],
  },
  {
    id: 10,
    question: '수익이 나기까지 기다릴 수 있는 기간은?',
    options: [
      { text: '6개월~1년도 괜찮다', scores: { content: 3, commerce: 0, service: 1, invest: 2 } },
      { text: '3-6개월 정도', scores: { content: 2, commerce: 2, service: 2, invest: 2 } },
      { text: '1-3개월 안에 결과가 나야', scores: { content: 0, commerce: 3, service: 2, invest: 1 } },
      { text: '바로 수익이 나면 좋겠다', scores: { content: 0, commerce: 2, service: 3, invest: 0 } },
    ],
  },
  {
    id: 11,
    question: '부업을 시작하려는 이유는?',
    options: [
      { text: '하고 싶은 일을 해보고 싶어서', scores: { content: 3, commerce: 1, service: 2, invest: 0 } },
      { text: '추가 수입이 필요해서', scores: { content: 1, commerce: 3, service: 2, invest: 2 } },
      { text: '내 가치를 인정받고 싶어서', scores: { content: 2, commerce: 0, service: 3, invest: 0 } },
      { text: '경제적 자유를 이루고 싶어서', scores: { content: 1, commerce: 1, service: 1, invest: 3 } },
    ],
  },
  {
    id: 12,
    question: '본업과의 관계는?',
    options: [
      { text: '본업과 다른 새로운 분야', scores: { content: 3, commerce: 2, service: 1, invest: 1 } },
      { text: '본업 경험을 활용하고 싶다', scores: { content: 1, commerce: 1, service: 3, invest: 0 } },
      { text: '언젠가 본업이 됐으면', scores: { content: 2, commerce: 3, service: 2, invest: 1 } },
      { text: '본업에 지장 없는 선에서', scores: { content: 1, commerce: 1, service: 1, invest: 3 } },
    ],
  },
];

export const results: SideHustleResult[] = [
  {
    type: 'content',
    title: '콘텐츠 크리에이터',
    emoji: '🎬',
    color: '#EF4444',
    description: '당신에게는 창작의 피가 흐릅니다! 유튜브, 블로그, 인스타그램 등 콘텐츠로 수익을 창출해보세요.',
    traits: ['창의적', '표현력', '꾸준함', '트렌드 감각'],
    strengths: ['초기 비용 거의 없음', '자산화 가능', '시간/장소 자유', '성장 가능성'],
    weaknesses: ['수익화까지 시간 소요', '꾸준한 업로드 필요', '경쟁 치열'],
    tips: [
      '유튜브: 니치한 주제로 시작하세요',
      '블로그: 검색 유입이 잘 되는 주제 선정',
      '인스타: 비주얼과 릴스에 집중',
      '최소 6개월은 수익 없이도 버틸 각오로!',
    ],
    famousPeople: '침착맨, 신사임당, 슈카월드',
  },
  {
    type: 'commerce',
    title: '커머스/리셀러',
    emoji: '🛒',
    color: '#F59E0B',
    description: '트렌드를 읽고 물건을 사고파는 감각이 뛰어나요! 스마트스토어, 리셀, 해외직구 등이 딱!',
    traits: ['트렌드 감각', '협상력', '실행력', '숫자 감각'],
    strengths: ['빠른 수익 실현', '확장 가능성', '재고 = 자산'],
    weaknesses: ['초기 자금 필요', '재고 리스크', 'CS 대응 필요'],
    tips: [
      '스마트스토어: 위탁판매로 시작',
      '리셀: 한정판 스니커즈, 굿즈 등',
      '해외직구: 아마존 -> 쿠팡 차익',
      '처음엔 작게 시작해서 검증 후 확대',
    ],
    famousPeople: '',
  },
  {
    type: 'service',
    title: '프리랜서/전문가',
    emoji: '💼',
    color: '#10B981',
    description: '당신의 전문 지식과 기술이 곧 돈! 프리랜싱, 컨설팅, 온라인 강의 등으로 수익화하세요.',
    traits: ['전문성', '신뢰감', '소통 능력', '문제 해결력'],
    strengths: ['즉시 수익 가능', '높은 시급', '전문성 강화'],
    weaknesses: ['시간 = 돈의 한계', '영업 필요', '본업 충돌 가능'],
    tips: [
      '크몽, 탈잉, 클래스101 등 플랫폼 활용',
      '포트폴리오 구축이 핵심',
      '니치한 전문 분야를 파세요',
      '시간당 단가를 점점 높여가세요',
    ],
    famousPeople: '',
  },
  {
    type: 'invest',
    title: '투자/자산운용',
    emoji: '📊',
    color: '#8B5CF6',
    description: '돈이 일하게 하는 타입! 주식, 부동산, 코인 등 투자를 통한 자산 증식에 관심이 많습니다.',
    traits: ['분석력', '인내심', '리스크 관리', '장기적 관점'],
    strengths: ['패시브 인컴 가능', '시간 자유', '복리 효과'],
    weaknesses: ['원금 손실 리스크', '전문 지식 필요', '심리적 스트레스'],
    tips: [
      '먼저 충분히 공부하고 시작하세요',
      '잃어도 되는 돈으로만 투자',
      '분산 투자는 기본',
      '장기 투자 마인드 유지',
    ],
    famousPeople: '워렌 버핏, 피터 린치',
  },
];

export function calculateSideHustleResult(answers: number[]): SideHustleResult {
  const scores = { content: 0, commerce: 0, service: 0, invest: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      scores.content += optionScores.content;
      scores.commerce += optionScores.commerce;
      scores.service += optionScores.service;
      scores.invest += optionScores.invest;
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  return results.find(r => r.type === maxType) || results[0];
}
