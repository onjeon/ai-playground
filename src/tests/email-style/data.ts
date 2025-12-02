// 이메일 스타일 테스트 - 당신의 업무 이메일 스타일로 보는 성격

export const questions = [
  {
    id: 1,
    question: "이메일을 시작할 때 첫 문장은?",
    options: [
      { text: "바로 용건부터 꺼낸다", style: "concise" },
      { text: "'안녕하세요, 좋은 하루 보내고 계신가요?'로 시작", style: "friendly" },
      { text: "'아래 내용 확인 부탁드립니다'와 함께 상세 목차 제시", style: "perfect" },
      { text: "'ㅎㅎ 안녕하세요~'로 가볍게 시작", style: "casual" },
    ],
  },
  {
    id: 2,
    question: "이메일에서 요청사항을 전달할 때?",
    options: [
      { text: "요청 1, 요청 2... 넘버링해서 명확하게", style: "concise" },
      { text: "먼저 상황 설명 후 부드럽게 부탁드린다고 작성", style: "friendly" },
      { text: "배경, 목적, 요청사항, 기한, 참고자료까지 완벽하게", style: "perfect" },
      { text: "편하게 할 수 있을 때 해주세요~ 라고 작성", style: "casual" },
    ],
  },
  {
    id: 3,
    question: "이메일 길이가 보통 어떤 편인가요?",
    options: [
      { text: "3줄 이내로 최대한 짧게", style: "concise" },
      { text: "인사와 안부를 포함해 적당한 길이", style: "friendly" },
      { text: "필요한 정보를 빠짐없이 담아 길어지는 편", style: "perfect" },
      { text: "때에 따라 다르지만 형식에 구애받지 않음", style: "casual" },
    ],
  },
  {
    id: 4,
    question: "이메일 끝맺음은 주로?",
    options: [
      { text: "'확인 부탁드립니다.' 딱 한 줄", style: "concise" },
      { text: "'항상 고생 많으십니다. 좋은 하루 되세요!'", style: "friendly" },
      { text: "'문의사항 있으시면 언제든 연락 주세요. 감사합니다.'", style: "perfect" },
      { text: "'감사합니다~' 또는 '넵!'", style: "casual" },
    ],
  },
  {
    id: 5,
    question: "이메일에서 이모티콘 사용은?",
    options: [
      { text: "절대 사용하지 않는다", style: "concise" },
      { text: "^^나 :) 정도는 가끔 사용", style: "friendly" },
      { text: "공식적인 메일이면 자제, TPO에 맞게", style: "perfect" },
      { text: "ㅎㅎ, ㅋㅋ, 이모지 자주 사용", style: "casual" },
    ],
  },
  {
    id: 6,
    question: "긴급한 요청 메일을 보낼 때?",
    options: [
      { text: "[긴급] 표시 후 핵심만 간결하게", style: "concise" },
      { text: "급한 상황에 죄송하다는 말과 함께 부탁", style: "friendly" },
      { text: "긴급한 이유, 배경, 대안까지 상세히 설명", style: "perfect" },
      { text: "카톡이나 전화로 먼저 연락하고 메일은 간단히", style: "casual" },
    ],
  },
  {
    id: 7,
    question: "답장 메일을 쓸 때 당신의 스타일은?",
    options: [
      { text: "'확인했습니다. 진행하겠습니다.' 끝", style: "concise" },
      { text: "감사 인사와 함께 친절하게 답변", style: "friendly" },
      { text: "받은 내용 요약 + 내 의견 + 다음 단계 안내", style: "perfect" },
      { text: "'넹! 알겠습니다~'", style: "casual" },
    ],
  },
  {
    id: 8,
    question: "이메일 제목을 작성할 때?",
    options: [
      { text: "[프로젝트명] 핵심 키워드만", style: "concise" },
      { text: "받는 사람이 알아보기 쉽게 친절한 제목", style: "friendly" },
      { text: "[카테고리][날짜] 상세한 내용 - 담당자명", style: "perfect" },
      { text: "제목에 크게 신경 안 쓰는 편", style: "casual" },
    ],
  },
  {
    id: 9,
    question: "실수를 정정하는 메일을 보낼 때?",
    options: [
      { text: "'정정: ~' 제목으로 수정된 내용만 간단히", style: "concise" },
      { text: "정중하게 사과하고 수정 내용 전달", style: "friendly" },
      { text: "실수 원인 분석 + 수정 내용 + 재발 방지 대책", style: "perfect" },
      { text: "'아 죄송해요ㅠㅠ 수정본 보내드려요~'", style: "casual" },
    ],
  },
  {
    id: 10,
    question: "메일을 보내기 전 마지막으로 확인하는 것은?",
    options: [
      { text: "받는 사람과 핵심 내용만 빠르게 체크", style: "concise" },
      { text: "너무 딱딱하지 않은지 톤 확인", style: "friendly" },
      { text: "맞춤법, 첨부파일, 참조자, 내용 전체 꼼꼼히", style: "perfect" },
      { text: "대충 보고 바로 전송", style: "casual" },
    ],
  },
];

export interface EmailStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  emailSignature: string;
  typicalPhrase: string[];
  tips: string[];
  bestWith: string[];
  challengeWith: string[];
}

const resultTypes: Record<string, EmailStyleResult> = {
  concise: {
    type: 'concise',
    title: '간결형 효율러',
    emoji: '⚡',
    subtitle: '핵심만 담는 스피드 마스터',
    description: '당신은 군더더기 없이 핵심만 전달하는 효율적인 이메일러입니다. 바쁜 업무 환경에서 빠른 의사결정을 돕고, 받는 사람도 한눈에 요점을 파악할 수 있게 해줍니다. 시간은 금이라는 것을 누구보다 잘 아는 당신! 다만 가끔은 차가워 보일 수 있으니 상황에 따라 한 줄 인사를 추가해보는 건 어떨까요?',
    characteristics: ['효율적', '명확함', '시간 절약', '결과 지향적', '실용주의'],
    strengths: ['빠른 커뮤니케이션', '명확한 의사 전달', '업무 효율 극대화', '핵심 파악력'],
    weaknesses: ['차갑게 느껴질 수 있음', '맥락 부족', '관계 형성에 약함'],
    emailSignature: '확인 부탁드립니다.',
    typicalPhrase: ['건으로 연락드립니다.', '확인 부탁드립니다.', '회신 바랍니다.'],
    tips: ['가끔은 인사 한 줄 추가해보기', '중요한 관계에는 따뜻한 표현 사용', '상대방 스타일에 맞춰 조절'],
    bestWith: ['간결형', '완벽형'],
    challengeWith: ['친절형'],
  },
  friendly: {
    type: 'friendly',
    title: '친절형 따뜻이',
    emoji: '🌸',
    subtitle: '인사와 안부가 가득한 따뜻한 타입',
    description: '당신은 이메일에서도 따뜻함이 묻어나는 친절한 커뮤니케이터입니다. 업무적인 내용도 부드럽게 전달하고, 상대방의 기분을 배려하는 센스가 있어요. 덕분에 이메일을 받는 사람도 기분 좋게 업무를 시작할 수 있습니다. 좋은 관계 형성의 달인이지만, 핵심이 묻히지 않도록 주의하면 더 좋아요!',
    characteristics: ['따뜻함', '배려심', '친근함', '긍정적', '관계 지향적'],
    strengths: ['좋은 관계 형성', '부드러운 분위기 조성', '상대방 배려', '긍정적 이미지'],
    weaknesses: ['핵심이 늦게 전달될 수 있음', '이메일이 길어짐', '때로 비효율적'],
    emailSignature: '항상 고생 많으십니다. 좋은 하루 되세요!',
    typicalPhrase: ['좋은 하루 보내고 계신가요?', '바쁘신 와중에 죄송합니다', '항상 감사드립니다'],
    tips: ['요청사항은 명확하게 별도 표시', '핵심을 앞에 배치', '인사는 간결하게 줄여보기'],
    bestWith: ['친절형', '캐주얼형'],
    challengeWith: ['간결형'],
  },
  perfect: {
    type: 'perfect',
    title: '완벽형 꼼꼼이',
    emoji: '📋',
    subtitle: '빈틈없이 꼼꼼한 디테일 마스터',
    description: '당신은 이메일 하나에도 완벽을 추구하는 프로페셔널입니다. 배경 설명부터 요청사항, 기한, 참고자료까지 빠짐없이 담아 받는 사람이 추가 질문 없이 바로 업무를 진행할 수 있게 합니다. 신뢰를 주는 이메일 스타일이지만, 때로는 핵심 요약을 먼저 제시하면 더 효과적일 수 있어요!',
    characteristics: ['꼼꼼함', '체계적', '전문적', '신뢰감', '책임감'],
    strengths: ['완벽한 정보 전달', '오해 최소화', '전문적 이미지', '신뢰 구축'],
    weaknesses: ['이메일 작성에 시간 소요', '내용이 길어짐', '부담스러울 수 있음'],
    emailSignature: '문의사항 있으시면 언제든 연락 주세요. 감사합니다.',
    typicalPhrase: ['아래 내용 확인 부탁드립니다', '참고로 말씀드리면', '상세 내용은 첨부파일을 확인해주세요'],
    tips: ['핵심 요약을 맨 앞에 배치 (TL;DR)', '정보 우선순위 정하기', '상대방 수준에 맞게 조절'],
    bestWith: ['완벽형', '간결형'],
    challengeWith: ['캐주얼형'],
  },
  casual: {
    type: 'casual',
    title: '캐주얼형 편안이',
    emoji: '😎',
    subtitle: '격식 없이 편하게 쓰는 타입',
    description: '당신은 딱딱한 형식보다 편안한 소통을 선호하는 자유로운 영혼입니다. 이메일도 대화하듯 자연스럽게 작성하고, 상대방과의 거리감을 좁히는 데 탁월해요. 친근한 분위기를 만들지만, 공식적인 상황에서는 조금 더 격식을 갖추면 프로페셔널함을 더할 수 있어요!',
    characteristics: ['자유로움', '친근함', '유연함', '소탈함', '인간미'],
    strengths: ['편안한 분위기 조성', '빠른 소통', '관계 형성', '부담 없는 대화'],
    weaknesses: ['비공식적으로 보일 수 있음', '정보 누락 가능성', '상황 파악 필요'],
    emailSignature: '감사합니다~',
    typicalPhrase: ['ㅎㅎ 안녕하세요~', '넵! 알겠습니다~', '편하게 연락주세요!'],
    tips: ['상대방과 상황에 따라 톤 조절', '중요한 메일은 재검토', '공식 메일은 격식 갖추기'],
    bestWith: ['캐주얼형', '친절형'],
    challengeWith: ['완벽형'],
  },
};

export function calculateEmailStyleResult(answers: number[]): EmailStyleResult {
  const styleScores: Record<string, number> = {
    concise: 0,
    friendly: 0,
    perfect: 0,
    casual: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const option = question.options[answerIndex];
      styleScores[option.style] += 1;
    }
  });

  let maxStyle = 'friendly';
  let maxScore = 0;

  Object.entries(styleScores).forEach(([style, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxStyle = style;
    }
  });

  return resultTypes[maxStyle];
}
