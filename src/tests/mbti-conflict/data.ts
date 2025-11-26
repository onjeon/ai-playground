// MBTI 싸울 때 테스트 - 갈등 상황에서 나타나는 MBTI 특성

export interface MbtiConflictQuestion {
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

export interface MbtiConflictResult {
  type: string;
  title: string;
  emoji: string;
  conflictStyle: string;
  description: string;
  characteristics: string[];
  duringConflict: string[];
  afterConflict: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
  bestMatch: string[];
  worstMatch: string[];
  famousQuote: string;
}

export const questions: MbtiConflictQuestion[] = [
  {
    id: 1,
    question: "친구와 의견 충돌이 생기면?",
    options: [
      { text: "바로 말해서 해결하자", scores: { E: 3 } },
      { text: "일단 혼자 생각 정리부터", scores: { I: 3 } },
      { text: "분위기 봐서 타이밍 잡음", scores: { I: 2, F: 1 } },
      { text: "다른 사람들 의견도 들어봄", scores: { E: 2, F: 1 } },
    ],
  },
  {
    id: 2,
    question: "싸움 중 상대가 과거 얘기를 꺼내면?",
    options: [
      { text: "그건 지금 논점이 아니잖아", scores: { T: 3 } },
      { text: "그때 그 상처가 아직도...", scores: { F: 3 } },
      { text: "구체적으로 뭐가 문제인지 정리해줘", scores: { T: 2, J: 1 } },
      { text: "내가 그랬구나... 미안해", scores: { F: 2, P: 1 } },
    ],
  },
  {
    id: 3,
    question: "싸운 후 화해 방식은?",
    options: [
      { text: "시간이 지나면 자연스럽게", scores: { P: 3 } },
      { text: "명확하게 사과하고 마무리", scores: { J: 3 } },
      { text: "맛있는 거 사주면서 풀기", scores: { F: 2, E: 1 } },
      { text: "원인 분석하고 재발 방지책 논의", scores: { T: 2, J: 1 } },
    ],
  },
  {
    id: 4,
    question: "갈등 상황에서 감정 표현은?",
    options: [
      { text: "화나면 바로 표현함", scores: { E: 3 } },
      { text: "속으로 삭이다가 터짐", scores: { I: 3 } },
      { text: "논리적으로 차분하게 설명", scores: { T: 3 } },
      { text: "울거나 감정적으로 호소", scores: { F: 3 } },
    ],
  },
  {
    id: 5,
    question: "상대방이 논리적 허점을 찌르면?",
    options: [
      { text: "인정할 건 인정함", scores: { T: 3 } },
      { text: "그래도 내 감정은 진짜야", scores: { F: 3 } },
      { text: "다른 논리로 반박 준비", scores: { T: 2, N: 1 } },
      { text: "왜 그렇게 공격적이야...", scores: { F: 2, I: 1 } },
    ],
  },
  {
    id: 6,
    question: "싸움이 길어지면?",
    options: [
      { text: "빨리 결론 내고 끝내자", scores: { J: 3 } },
      { text: "충분히 이야기 나눠야지", scores: { P: 3 } },
      { text: "피곤해... 내일 얘기하자", scores: { I: 2, P: 1 } },
      { text: "지금 당장 해결해야 잠이 오지", scores: { J: 2, E: 1 } },
    ],
  },
  {
    id: 7,
    question: "제3자가 싸움에 끼어들면?",
    options: [
      { text: "객관적 의견 환영", scores: { T: 2, E: 1 } },
      { text: "둘이 해결할 문제야", scores: { I: 3 } },
      { text: "내 편 들어주는 사람 필요", scores: { F: 2, E: 1 } },
      { text: "상황에 따라 다름", scores: { P: 2 } },
    ],
  },
  {
    id: 8,
    question: "갈등의 근본 원인을 찾을 때?",
    options: [
      { text: "구체적인 사건/행동 중심으로", scores: { S: 3 } },
      { text: "전체적인 패턴과 맥락으로", scores: { N: 3 } },
      { text: "그때 기분이 어땠는지로", scores: { F: 2, S: 1 } },
      { text: "앞으로 어떻게 할지가 중요", scores: { N: 2, J: 1 } },
    ],
  },
  {
    id: 9,
    question: "상대가 사과했을 때?",
    options: [
      { text: "진심이 느껴지면 바로 용서", scores: { F: 3 } },
      { text: "뭘 잘못했는지 알고 사과하는지 확인", scores: { T: 3 } },
      { text: "일단 받아들이고 지켜봄", scores: { P: 2, I: 1 } },
      { text: "같은 실수 반복 안 하겠다는 약속 필요", scores: { J: 2, T: 1 } },
    ],
  },
  {
    id: 10,
    question: "내가 잘못했을 때 사과 방식은?",
    options: [
      { text: "진심 담아 감정적으로 사과", scores: { F: 3 } },
      { text: "뭘 잘못했는지 명확히 인정", scores: { T: 3 } },
      { text: "행동으로 보여주기", scores: { S: 2, I: 1 } },
      { text: "재발 방지책과 함께 사과", scores: { J: 2, T: 1 } },
    ],
  },
  {
    id: 11,
    question: "싸움 중 침묵이 흐르면?",
    options: [
      { text: "불편해서 먼저 말 꺼냄", scores: { E: 3 } },
      { text: "생각 정리하는 시간으로 활용", scores: { I: 3 } },
      { text: "상대가 먼저 말할 때까지 기다림", scores: { I: 2, P: 1 } },
      { text: "이 상황 자체가 싫어서 해결하려 함", scores: { J: 2, E: 1 } },
    ],
  },
  {
    id: 12,
    question: "갈등 해결 후 관계는?",
    options: [
      { text: "더 깊어질 수 있는 기회", scores: { N: 2, F: 1 } },
      { text: "일단 원래대로 돌아가면 됨", scores: { S: 2, P: 1 } },
      { text: "트러스트 회복에 시간 필요", scores: { J: 2, I: 1 } },
      { text: "같은 일 반복되면 관계 재고", scores: { T: 2, J: 1 } },
    ],
  },
];

export const results: Record<string, MbtiConflictResult> = {
  'ESTJ': {
    type: 'ESTJ',
    title: '정면돌파 해결사',
    emoji: '⚔️',
    conflictStyle: '직접 대면 해결형',
    description: '문제가 생기면 바로 해결해야 직성이 풀리는 타입. 논리적이고 체계적으로 갈등을 정리하며, 명확한 결론을 원합니다.',
    characteristics: ['즉각적 대응', '논리적 접근', '명확한 해결책 추구', '원칙 중시'],
    duringConflict: ['팩트 중심으로 대화', '감정보다 해결책에 집중', '상대방 말 끊고 반박할 수 있음', '빠른 결론 원함'],
    afterConflict: ['깔끔하게 마무리', '재발 방지책 수립', '이후 언급 안 함', '관계 회복 빠름'],
    strengths: ['문제 회피 안 함', '해결 능력 뛰어남', '공정하려 노력'],
    weaknesses: ['상대 감정 놓칠 수 있음', '너무 직설적', '융통성 부족할 때'],
    tips: ['상대방 감정도 인정해주기', '해결책 제시 전 경청하기', '톤 조절에 신경쓰기'],
    bestMatch: ['ISTJ', 'ENTJ', 'ESTP'],
    worstMatch: ['INFP', 'ISFP', 'INFJ'],
    famousQuote: '"문제는 피하면 커지고, 맞서면 작아진다"',
  },
  'ISTJ': {
    type: 'ISTJ',
    title: '냉정한 분석가',
    emoji: '🧊',
    conflictStyle: '신중한 분석형',
    description: '감정에 휘둘리지 않고 차분하게 상황을 분석하는 타입. 시간을 두고 생각을 정리한 후 논리적으로 해결합니다.',
    characteristics: ['감정 절제', '사실 기반 대화', '혼자 정리 시간 필요', '일관성 중시'],
    duringConflict: ['침착함 유지', '과거 사례 참고', '감정 표현 적음', '논점 이탈 싫어함'],
    afterConflict: ['시간 두고 회복', '약속은 반드시 지킴', '같은 실수 용납 어려움'],
    strengths: ['냉정한 판단', '공정함', '약속 이행'],
    weaknesses: ['감정 표현 서툼', '융통성 부족', '과거 집착'],
    tips: ['감정도 중요하다는 것 인정하기', '완벽한 해결 아니어도 OK', '상대방 입장 공감 표현하기'],
    bestMatch: ['ESTJ', 'ISFJ', 'INTJ'],
    worstMatch: ['ENFP', 'ESFP', 'ENTP'],
    famousQuote: '"감정은 지나가지만, 사실은 남는다"',
  },
  'ESFJ': {
    type: 'ESFJ',
    title: '관계 수호자',
    emoji: '🤝',
    conflictStyle: '조화 추구형',
    description: '갈등 자체를 힘들어하며 빨리 화해하고 싶어하는 타입. 관계 회복이 가장 중요하고, 상대방 감정을 많이 신경씁니다.',
    characteristics: ['화해 욕구 강함', '상대 감정 배려', '관계 중시', '갈등 회피 성향'],
    duringConflict: ['상대방 기분 살핌', '본인 감정 억누름', '빨리 끝내고 싶음', '눈치 많이 봄'],
    afterConflict: ['적극적 화해 시도', '선물이나 행동으로 표현', '관계 회복에 집중'],
    strengths: ['공감 능력', '화해 능력', '분위기 파악'],
    weaknesses: ['본인 감정 억압', '갈등 회피', 'NO 못함'],
    tips: ['내 감정도 중요해요', '갈등이 꼭 나쁜 건 아니에요', '솔직하게 말해도 괜찮아요'],
    bestMatch: ['ISFJ', 'ESFP', 'ENFJ'],
    worstMatch: ['INTP', 'INTJ', 'ISTP'],
    famousQuote: '"싸워서 이겨도, 관계를 잃으면 진 거야"',
  },
  'ISFJ': {
    type: 'ISFJ',
    title: '참고 참는 수호자',
    emoji: '😶',
    conflictStyle: '인내형',
    description: '갈등을 피하고 싶어서 참다가 한 번에 터지는 타입. 상대방을 배려하느라 본인 감정을 억누르는 경향이 있습니다.',
    characteristics: ['갈등 회피', '감정 억압', '폭발 가능성', '상대 배려'],
    duringConflict: ['말수 줄어듦', '속으로 상처받음', '참다가 폭발', '과거 일 기억'],
    afterConflict: ['시간이 약', '서서히 회복', '신뢰 회복에 오래 걸림'],
    strengths: ['인내심', '배려심', '기억력 좋음'],
    weaknesses: ['감정 억압', '폭발 위험', '소통 부족'],
    tips: ['작은 것도 바로 말하기', '참지 말고 표현하기', '폭발 전 신호 알아차리기'],
    bestMatch: ['ESFJ', 'ISTJ', 'INFJ'],
    worstMatch: ['ENTP', 'ESTP', 'ENTJ'],
    famousQuote: '"말 안 해도 알아줬으면... 하지만 말해야 해"',
  },
  'ENFJ': {
    type: 'ENFJ',
    title: '감정 조율사',
    emoji: '💝',
    conflictStyle: '중재형',
    description: '양쪽 입장을 이해하고 조율하려는 타입. 갈등 상황에서도 상대방 감정을 읽고 공감하며 해결책을 찾습니다.',
    characteristics: ['공감 능력', '중재 역할', '감정 이해', '화합 추구'],
    duringConflict: ['상대 감정 읽음', '양쪽 이해하려 함', '해결책 제시', '분위기 살핌'],
    afterConflict: ['관계 회복 주도', '후속 케어', '더 깊은 관계로'],
    strengths: ['공감력', '소통 능력', '리더십'],
    weaknesses: ['본인 감정 무시', '중재 피로', '상처 숨김'],
    tips: ['내 감정도 돌보기', '모든 갈등 중재 안 해도 돼요', '경계선 설정하기'],
    bestMatch: ['INFJ', 'ENFP', 'ESFJ'],
    worstMatch: ['ISTP', 'INTP', 'ESTP'],
    famousQuote: '"이해받고 싶으면 먼저 이해해야 해"',
  },
  'INFJ': {
    type: 'INFJ',
    title: '내면 폭풍형',
    emoji: '🌊',
    conflictStyle: '회피 후 폭발형',
    description: '겉으로는 평온해 보이지만 속으로 엄청 힘들어하는 타입. 감정을 정리하는 데 시간이 필요하며, 한계에 다다르면 관계를 정리하기도 합니다.',
    characteristics: ['겉과 속 다름', '감정 억압', '문 닫기', '깊은 상처'],
    duringConflict: ['표면적 침착', '내면 혼란', '혼자 정리 필요', '말수 줄어듦'],
    afterConflict: ['오래 기억함', '관계 재평가', '문 닫으면 끝'],
    strengths: ['깊은 이해', '통찰력', '진정성'],
    weaknesses: ['소통 부족', '갑자기 끊음', '과민 반응'],
    tips: ['감정 바로 표현하기', '완벽한 관계는 없어요', '문 닫기 전 기회 주기'],
    bestMatch: ['ENFJ', 'INTJ', 'INFP'],
    worstMatch: ['ESTP', 'ESFP', 'ESTJ'],
    famousQuote: '"문을 닫으면, 다시 열기 어려워"',
  },
  'ENFP': {
    type: 'ENFP',
    title: '감정 롤러코스터',
    emoji: '🎢',
    conflictStyle: '감정 폭발형',
    description: '감정을 숨기지 못하고 바로 표현하는 타입. 화났다가 금방 풀리고, 싸우면서도 애정 표현을 합니다.',
    characteristics: ['즉각적 감정 표현', '금방 풀림', '드라마틱', '애정 어린 싸움'],
    duringConflict: ['감정적 대화', '과장된 표현', '울기도 함', '화해 신호 보냄'],
    afterConflict: ['빠른 회복', '안 좋은 기억 빨리 잊음', '더 친해지기도'],
    strengths: ['솔직함', '회복력', '애정 표현'],
    weaknesses: ['감정 기복', '논리 부족', '상처 주는 말'],
    tips: ['말하기 전 3초 생각하기', '감정과 사실 분리하기', '상대방도 시간 필요해요'],
    bestMatch: ['INFJ', 'INTJ', 'ENFJ'],
    worstMatch: ['ISTJ', 'ESTJ', 'ISFJ'],
    famousQuote: '"싸워도 사랑해, 미워도 사랑해"',
  },
  'INFP': {
    type: 'INFP',
    title: '상처받은 이상주의자',
    emoji: '💔',
    conflictStyle: '회피형',
    description: '갈등 자체를 매우 힘들어하고 상처받기 쉬운 타입. 자신의 가치관이 공격받으면 강하게 반응하지만, 대부분은 회피합니다.',
    characteristics: ['갈등 회피', '깊은 상처', '가치관 수호', '감정적 대응'],
    duringConflict: ['말문 막힘', '눈물', '혼자 있고 싶음', '이해 안 되면 고통'],
    afterConflict: ['오래 곱씹음', '글로 정리', '혼자 힐링 필요'],
    strengths: ['진정성', '가치관 확고', '깊은 공감'],
    weaknesses: ['회피 성향', '상처 오래 감', '소통 어려움'],
    tips: ['갈등은 성장 기회예요', '완벽한 이해 없어도 OK', '말로 표현 연습하기'],
    bestMatch: ['ENFJ', 'INFJ', 'ENFP'],
    worstMatch: ['ESTJ', 'ENTJ', 'ESTP'],
    famousQuote: '"왜 사람들은 상처 주는 말을 쉽게 할까"',
  },
  'ENTJ': {
    type: 'ENTJ',
    title: '논쟁의 제왕',
    emoji: '👑',
    conflictStyle: '공격적 해결형',
    description: '갈등을 두려워하지 않고 정면으로 맞서는 타입. 이기는 것보다 옳은 결론을 원하지만, 공격적으로 보일 수 있습니다.',
    characteristics: ['논쟁 즐김', '승부욕', '논리 중시', '직접 대면'],
    duringConflict: ['공격적 논조', '논리로 압박', '감정 배제', '포기 안 함'],
    afterConflict: ['빠른 마무리', '개인적으로 안 받아들임', '다음 단계로'],
    strengths: ['해결 능력', '논리력', '결단력'],
    weaknesses: ['너무 공격적', '감정 무시', '상처 줄 수 있음'],
    tips: ['이기는 게 다가 아니에요', '상대방 감정도 중요해요', '한 발 물러서기'],
    bestMatch: ['INTJ', 'ENTP', 'ESTJ'],
    worstMatch: ['ISFP', 'INFP', 'ISFJ'],
    famousQuote: '"토론에서 지는 건 있어도, 침묵은 없다"',
  },
  'INTJ': {
    type: 'INTJ',
    title: '전략적 냉정러',
    emoji: '🧠',
    conflictStyle: '전략적 분석형',
    description: '감정을 배제하고 논리적으로 갈등을 분석하는 타입. 효율적인 해결책을 원하며, 비생산적인 싸움은 피합니다.',
    characteristics: ['논리 중시', '효율성 추구', '감정 배제', '전략적 접근'],
    duringConflict: ['차가운 논리', '감정 표현 거의 없음', '핵심만 얘기', '불필요한 대화 싫어함'],
    afterConflict: ['개인적으로 안 받아들임', '교훈 추출', '비효율적이면 관계 정리'],
    strengths: ['객관성', '해결 능력', '감정 통제'],
    weaknesses: ['냉정함', '공감 부족', '관계 소홀'],
    tips: ['감정도 데이터예요', '가끔은 비효율도 OK', '상대방 입장에서 생각하기'],
    bestMatch: ['ENTJ', 'INTP', 'INFJ'],
    worstMatch: ['ESFP', 'ESFJ', 'ENFP'],
    famousQuote: '"감정적인 싸움은 시간 낭비다"',
  },
  'ENTP': {
    type: 'ENTP',
    title: '논쟁 마니아',
    emoji: '😈',
    conflictStyle: '도발형',
    description: '논쟁 자체를 즐기고 상대방을 도발하기도 하는 타입. 지적 자극을 원하며, 싸움을 게임처럼 여깁니다.',
    characteristics: ['논쟁 즐김', '도발적', '유머 섞음', '지적 싸움'],
    duringConflict: ['상대 논리 허점 공격', '도발', '재미있어함', '이기고 싶음'],
    afterConflict: ['금방 잊음', '악의 없음', '상대방 상처 모를 수 있음'],
    strengths: ['논리력', '유연함', '회복력'],
    weaknesses: ['상대방 상처 무시', '진지함 부족', '도발 과함'],
    tips: ['상대방에겐 게임이 아닐 수 있어요', '선 넘지 않기', '진심으로 사과하기'],
    bestMatch: ['INTJ', 'ENTJ', 'INTP'],
    worstMatch: ['ISFJ', 'ESFJ', 'INFP'],
    famousQuote: '"논쟁은 두뇌 스포츠지, 뭘 그렇게 심각해"',
  },
  'INTP': {
    type: 'INTP',
    title: '논리 로봇',
    emoji: '🤖',
    conflictStyle: '분석형',
    description: '감정보다 논리로 갈등을 이해하려는 타입. 상대방의 감정적 반응을 이해하기 어려워하고, 분석에 집중합니다.',
    characteristics: ['논리 중심', '감정 이해 어려움', '분석적', '거리두기'],
    duringConflict: ['왜 화났는지 분석', '감정 표현 서툼', '논리로 설명', '당황함'],
    afterConflict: ['혼자 복기', '감정 정리 오래 걸림', '뒤늦게 이해'],
    strengths: ['객관성', '분석력', '차분함'],
    weaknesses: ['공감 부족', '감정 표현 서툼', '타이밍 놓침'],
    tips: ['감정은 논리로 해결 안 돼요', '공감 먼저, 분석 나중에', '"그랬구나" 한마디면 충분해요'],
    bestMatch: ['ENTP', 'INTJ', 'ISTP'],
    worstMatch: ['ESFJ', 'ENFJ', 'ISFJ'],
    famousQuote: '"왜 화났는지 설명해주면 이해할 수 있어"',
  },
  'ESTP': {
    type: 'ESTP',
    title: '순간 폭발형',
    emoji: '💥',
    conflictStyle: '즉흥적 대응형',
    description: '화나면 바로 표현하고 바로 푸는 타입. 오래 끌기 싫어하고, 싸운 후 금방 잊어버립니다.',
    characteristics: ['즉각 반응', '빠른 회복', '행동 중심', '과거 안 끌어옴'],
    duringConflict: ['직설적', '행동으로 표현', '감정 숨기지 않음', '길게 안 끎'],
    afterConflict: ['바로 잊음', '악의 없음', '행동으로 화해'],
    strengths: ['솔직함', '회복력', '단순함'],
    weaknesses: ['충동적', '상처 주는 말', '깊이 부족'],
    tips: ['말하기 전 생각하기', '상대방은 오래 기억해요', '진심 어린 사과 연습'],
    bestMatch: ['ISTP', 'ESFP', 'ESTJ'],
    worstMatch: ['INFJ', 'INFP', 'ISFJ'],
    famousQuote: '"싸웠으면 풀어, 뭘 그렇게 오래 끌어"',
  },
  'ISTP': {
    type: 'ISTP',
    title: '쿨한 방관자',
    emoji: '😎',
    conflictStyle: '거리두기형',
    description: '갈등 상황에서 감정적으로 휘말리지 않으려는 타입. 쿨하게 대처하지만, 관심 없어 보일 수 있습니다.',
    characteristics: ['감정 거리두기', '쿨한 대처', '혼자 해결', '관여 안 함'],
    duringConflict: ['무표정', '최소한의 대화', '자리 피함', '시간 필요'],
    afterConflict: ['알아서 정리', '언급 안 함', '행동으로 표현'],
    strengths: ['냉정함', '감정 통제', '개인 공간 존중'],
    weaknesses: ['무관심해 보임', '소통 부족', '회피'],
    tips: ['관심 있다는 표현하기', '"얘기하자" 한마디면 달라져요', '감정 공유도 관계의 일부'],
    bestMatch: ['ESTP', 'INTP', 'ISTJ'],
    worstMatch: ['ENFJ', 'ESFJ', 'ENFP'],
    famousQuote: '"싸우는 것도 에너지 낭비야"',
  },
  'ESFP': {
    type: 'ESFP',
    title: '감정 분출형',
    emoji: '🎭',
    conflictStyle: '드라마틱형',
    description: '감정을 숨기지 못하고 드라마틱하게 표현하는 타입. 화났다가 웃었다가 감정 기복이 있지만, 금방 풀립니다.',
    characteristics: ['감정 표현 풍부', '드라마틱', '금방 풀림', '현재 집중'],
    duringConflict: ['큰 감정 표현', '울거나 화내기', '관심 원함', '위로 필요'],
    afterConflict: ['빠른 회복', '과거 안 끌어옴', '행동으로 화해'],
    strengths: ['솔직함', '회복력', '밝은 에너지'],
    weaknesses: ['감정 기복', '과장', '깊이 부족'],
    tips: ['감정 조절 연습', '상대방 반응 살피기', '진지한 대화도 필요해요'],
    bestMatch: ['ESTP', 'ISFP', 'ESFJ'],
    worstMatch: ['INTJ', 'INTP', 'ISTJ'],
    famousQuote: '"지금 화났으니까 지금 풀어!"',
  },
  'ISFP': {
    type: 'ISFP',
    title: '조용한 상처러',
    emoji: '🥀',
    conflictStyle: '내면 회피형',
    description: '갈등을 극도로 싫어하고 조용히 상처받는 타입. 말로 표현하기보다 혼자 감정을 정리하며, 이해받지 못하면 마음을 닫습니다.',
    characteristics: ['갈등 회피', '조용한 상처', '감정 내면화', '마음 닫기'],
    duringConflict: ['말수 줄어듦', '자리 피함', '눈물', '혼자 있고 싶음'],
    afterConflict: ['오래 기억', '신뢰 회복 어려움', '행동으로 판단'],
    strengths: ['진정성', '배려심', '감수성'],
    weaknesses: ['소통 부족', '회피', '오래 상처받음'],
    tips: ['말로 표현하는 연습', '완벽한 이해 없어도 OK', '감정 억압은 건강에 안 좋아요'],
    bestMatch: ['ESFP', 'INFP', 'ISFJ'],
    worstMatch: ['ENTJ', 'ESTJ', 'ENTP'],
    famousQuote: '"말 안 해도 알아줬으면..."',
  },
};

export function calculateResult(answers: number[]): MbtiConflictResult {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([key, value]) => {
        scores[key as keyof typeof scores] += value || 0;
      });
    }
  });

  const mbtiType = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return results[mbtiType] || results['ENFP'];
}
