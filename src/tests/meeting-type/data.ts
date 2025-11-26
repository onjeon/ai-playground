// 회의 유형 테스트 - 회의에서 당신은 어떤 유형?

export interface MeetingTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MeetingTypeResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  meetingStyle: string[];
  tips: string[];
  idealRole: string;
  compatibility: string;
  warning: string;
}

export const meetingTypeTypes = ['leader', 'analyst', 'mediator', 'creator', 'observer', 'timekeeper'] as const;
export type MeetingTypeType = typeof meetingTypeTypes[number];

export const questions: MeetingTypeQuestion[] = [
  {
    id: 1,
    question: "회의 시작 전 나는?",
    options: [
      { text: "안건과 목표를 미리 정리해옴", scores: { leader: 3 } },
      { text: "관련 데이터와 자료 분석해옴", scores: { analyst: 3 } },
      { text: "참석자들 분위기 파악", scores: { mediator: 3 } },
      { text: "새로운 아이디어 생각해옴", scores: { creator: 3 } },
    ],
  },
  {
    id: 2,
    question: "회의 중 내 역할은?",
    options: [
      { text: "회의를 이끌고 진행하는 것", scores: { leader: 3 } },
      { text: "데이터로 근거를 제시하는 것", scores: { analyst: 3 } },
      { text: "의견을 조율하고 중재하는 것", scores: { mediator: 3 } },
      { text: "창의적인 아이디어 제안하는 것", scores: { creator: 3 } },
    ],
  },
  {
    id: 3,
    question: "회의가 산으로 가면?",
    options: [
      { text: "\"본론으로 돌아갑시다\" 정리함", scores: { leader: 2, timekeeper: 2 } },
      { text: "팩트 체크하며 논점 정리", scores: { analyst: 3 } },
      { text: "분위기 풀면서 합의점 찾기", scores: { mediator: 3 } },
      { text: "새로운 관점으로 전환 시도", scores: { creator: 3 } },
    ],
  },
  {
    id: 4,
    question: "회의에서 가장 중요하게 생각하는 것은?",
    options: [
      { text: "결론과 실행 계획 도출", scores: { leader: 3 } },
      { text: "정확한 데이터와 근거", scores: { analyst: 3 } },
      { text: "모든 의견이 존중받는 것", scores: { mediator: 3 } },
      { text: "혁신적인 아이디어 발굴", scores: { creator: 3 } },
    ],
  },
  {
    id: 5,
    question: "발언할 때 나의 스타일은?",
    options: [
      { text: "자신감 있게 주도적으로", scores: { leader: 3 } },
      { text: "데이터와 논리로 설득력 있게", scores: { analyst: 3 } },
      { text: "상대 의견 존중하며 조심스럽게", scores: { mediator: 2, observer: 1 } },
      { text: "자유롭게 브레인스토밍하듯", scores: { creator: 3 } },
    ],
  },
  {
    id: 6,
    question: "회의가 길어지면?",
    options: [
      { text: "빠른 결론을 위해 밀어붙임", scores: { leader: 2, timekeeper: 2 } },
      { text: "논점을 정리해서 효율화", scores: { analyst: 2, timekeeper: 1 } },
      { text: "지친 사람들 분위기 케어", scores: { mediator: 3 } },
      { text: "딴 생각하다가 갑자기 아이디어", scores: { creator: 2, observer: 1 } },
    ],
  },
  {
    id: 7,
    question: "의견 충돌이 생기면?",
    options: [
      { text: "결정권자가 판단해야 함", scores: { leader: 3 } },
      { text: "데이터로 객관적 판단", scores: { analyst: 3 } },
      { text: "양측 의견 절충안 제시", scores: { mediator: 3 } },
      { text: "제3의 대안 제시", scores: { creator: 3 } },
    ],
  },
  {
    id: 8,
    question: "회의록 작성은?",
    options: [
      { text: "핵심 결정사항 위주로", scores: { leader: 3 } },
      { text: "상세하게 모든 내용 기록", scores: { analyst: 2, timekeeper: 1 } },
      { text: "각자 의견 공정하게 반영", scores: { mediator: 3 } },
      { text: "회의록? 그거 누가 쓰지?", scores: { creator: 2, observer: 1 } },
    ],
  },
  {
    id: 9,
    question: "회의에서 제일 싫은 상황은?",
    options: [
      { text: "결론 없이 끝나는 것", scores: { leader: 3 } },
      { text: "근거 없는 주장이 통할 때", scores: { analyst: 3 } },
      { text: "누군가 무시당할 때", scores: { mediator: 3 } },
      { text: "정해진 틀에만 갇힐 때", scores: { creator: 3 } },
    ],
  },
  {
    id: 10,
    question: "화상 회의에서 나는?",
    options: [
      { text: "화면 ON, 적극 발언", scores: { leader: 3 } },
      { text: "화면 켜고 자료 공유하며 참여", scores: { analyst: 3 } },
      { text: "다들 편하게 하라고 맞춰줌", scores: { mediator: 2, observer: 1 } },
      { text: "멀티태스킹하다가 갑자기 아이디어", scores: { creator: 2, observer: 1 } },
    ],
  },
  {
    id: 11,
    question: "회의 후 나의 행동은?",
    options: [
      { text: "액션 아이템 배분하고 팔로업", scores: { leader: 3 } },
      { text: "회의 내용 정리 및 분석", scores: { analyst: 3 } },
      { text: "개별적으로 피드백 확인", scores: { mediator: 3 } },
      { text: "떠오른 아이디어 발전시키기", scores: { creator: 3 } },
    ],
  },
  {
    id: 12,
    question: "이상적인 회의란?",
    options: [
      { text: "효율적으로 빠르게 결론 도출", scores: { leader: 2, timekeeper: 2 } },
      { text: "데이터 기반 합리적 의사결정", scores: { analyst: 3 } },
      { text: "모두가 만족하는 합의", scores: { mediator: 3 } },
      { text: "창의적 아이디어가 샘솟는 시간", scores: { creator: 3 } },
    ],
  },
];

export const results: Record<MeetingTypeType, MeetingTypeResult> = {
  leader: {
    type: 'leader',
    title: '회의의 캡틴',
    emoji: '👔',
    description: '회의를 이끌고 결론을 내리는 리더형! 목표 지향적이고 효율적인 당신은 회의가 산으로 가지 않게 잡아주는 핵심 인물이에요.',
    characteristics: [
      '목표 지향적',
      '결단력 있음',
      '효율성 추구',
      '리더십 발휘',
    ],
    strengths: [
      '회의를 빠르게 진행',
      '명확한 결론 도출',
      '실행 계획 수립',
      '책임감 있는 팔로업',
    ],
    weaknesses: [
      '다른 의견 무시할 수 있음',
      '성급한 결론',
      '권위적으로 보일 수 있음',
    ],
    meetingStyle: [
      '안건 미리 공유',
      '시간 엄수',
      '결론 위주 진행',
      '액션 아이템 배분',
    ],
    tips: [
      '다양한 의견에 귀 기울이세요',
      '결론보다 과정도 중요해요',
      '침묵하는 사람에게도 발언 기회를',
    ],
    idealRole: '회의 진행자, 의사결정자',
    compatibility: '애널리스트와 환상의 팀워크',
    warning: '모든 걸 혼자 결정하려 하지 마세요!',
  },
  analyst: {
    type: 'analyst',
    title: '데이터 마스터',
    emoji: '📊',
    description: '팩트와 데이터로 승부하는 분석가형! 객관적 근거를 바탕으로 논리적인 결론을 이끌어내는 회의의 두뇌예요.',
    characteristics: [
      '논리적 사고',
      '데이터 중심',
      '객관적 판단',
      '꼼꼼한 분석',
    ],
    strengths: [
      '근거 있는 주장',
      '객관적 판단 기준 제시',
      '리스크 분석',
      '정확한 현황 파악',
    ],
    weaknesses: [
      '분석 마비(analysis paralysis)',
      '감정적 요소 무시',
      '너무 복잡하게 설명',
    ],
    meetingStyle: [
      '자료 미리 준비',
      '데이터로 주장 뒷받침',
      '논리적 구조화',
      '상세한 기록',
    ],
    tips: [
      '데이터도 중요하지만 직관도 가치 있어요',
      '간결하게 핵심만 전달하세요',
      '감정적 의견도 존중해주세요',
    ],
    idealRole: '자료 분석, 팩트 체크, 기록',
    compatibility: '리더와 시너지, 크리에이터와 보완',
    warning: '분석에 너무 오래 빠지지 마세요!',
  },
  mediator: {
    type: 'mediator',
    title: '평화 유지군',
    emoji: '🕊️',
    description: '모두의 의견을 조율하는 중재자형! 갈등을 풀고 합의점을 찾아내는 회의의 윤활유예요.',
    characteristics: [
      '공감 능력',
      '중립적 태도',
      '갈등 해결',
      '경청 능력',
    ],
    strengths: [
      '다양한 의견 수렴',
      '갈등 상황 중재',
      '분위기 메이킹',
      '소외된 의견 대변',
    ],
    weaknesses: [
      '자기 의견 표현 부족',
      '결정 회피',
      '모두를 만족시키려다 지침',
    ],
    meetingStyle: [
      '모든 의견 경청',
      '절충안 제시',
      '분위기 관리',
      '개별 피드백 확인',
    ],
    tips: [
      '당신의 의견도 중요해요',
      '모두를 만족시킬 순 없어요',
      '때로는 결단이 필요해요',
    ],
    idealRole: '조율자, 분위기 메이커',
    compatibility: '리더와 크리에이터 사이 중재',
    warning: '자신을 잃지 마세요!',
  },
  creator: {
    type: 'creator',
    title: '아이디어 뱅크',
    emoji: '💡',
    description: '창의적인 아이디어로 회의에 활력을 불어넣는 혁신가형! 틀에 박히지 않은 생각으로 새로운 방향을 제시해요.',
    characteristics: [
      '창의적 사고',
      '자유로운 발상',
      '열정적',
      '변화 추구',
    ],
    strengths: [
      '혁신적 아이디어 제안',
      '새로운 관점 제시',
      '브레인스토밍 활성화',
      '정체된 회의 전환',
    ],
    weaknesses: [
      '현실성 부족',
      '산만해질 수 있음',
      '실행력 부족',
    ],
    meetingStyle: [
      '자유로운 발언',
      '브레인스토밍 선호',
      '기존 틀 깨기',
      '시각적 표현',
    ],
    tips: [
      '아이디어의 실현 가능성도 고려하세요',
      '다른 사람의 아이디어도 발전시켜보세요',
      '회의 주제에 집중하는 연습을',
    ],
    idealRole: '아이디어 제안자, 브레인스토밍 리더',
    compatibility: '애널리스트가 실현 가능성 체크해줌',
    warning: '번뜩이는 아이디어가 항상 좋은 건 아니에요!',
  },
  observer: {
    type: 'observer',
    title: '조용한 관찰자',
    emoji: '👀',
    description: '뒤에서 상황을 파악하는 관찰자형! 조용하지만 핵심을 꿰뚫는 통찰력으로 결정적 순간에 빛나요.',
    characteristics: [
      '관찰력',
      '신중함',
      '경청',
      '깊은 사고',
    ],
    strengths: [
      '전체 상황 파악',
      '숨겨진 문제점 발견',
      '신중한 의견 제시',
      '갈등 예측',
    ],
    weaknesses: [
      '발언 기회 놓침',
      '존재감 부족',
      '소극적으로 보임',
    ],
    meetingStyle: [
      '경청 위주',
      '메모하며 관찰',
      '신중한 발언',
      '핵심적 순간에 한 마디',
    ],
    tips: [
      '적극적으로 의견 표현해보세요',
      '당신의 관찰력은 가치있어요',
      '발언 기회를 놓치지 마세요',
    ],
    idealRole: '관찰자, 숨은 조언자',
    compatibility: '리더가 발언 기회 만들어주면 시너지',
    warning: '너무 숨어있으면 기회를 놓쳐요!',
  },
  timekeeper: {
    type: 'timekeeper',
    title: '시간 지킴이',
    emoji: '⏰',
    description: '회의 시간을 철저히 관리하는 효율 추구형! 정해진 시간 안에 결론을 내도록 이끄는 회의의 타임키퍼예요.',
    characteristics: [
      '시간 관념 철저',
      '효율성 중시',
      '구조화된 사고',
      '결과 지향적',
    ],
    strengths: [
      '효율적인 시간 관리',
      '회의 늘어짐 방지',
      '핵심 위주 진행',
      '마감 준수',
    ],
    weaknesses: [
      '깊은 토론 차단',
      '창의적 논의 방해',
      '경직되어 보일 수 있음',
    ],
    meetingStyle: [
      '시간 배분 철저',
      '안건별 시간 제한',
      '핵심 위주 발언',
      '빠른 결론 유도',
    ],
    tips: [
      '중요한 논의엔 여유를 주세요',
      '효율만큼 질도 중요해요',
      '창의적 토론 시간도 필요해요',
    ],
    idealRole: '시간 관리자, 진행 보조',
    compatibility: '리더와 함께 효율적 회의 진행',
    warning: '시간보다 중요한 것도 있어요!',
  },
};

export function calculateResult(answers: number[]): MeetingTypeResult {
  const scores: Record<MeetingTypeType, number> = {
    leader: 0,
    analyst: 0,
    mediator: 0,
    creator: 0,
    observer: 0,
    timekeeper: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as MeetingTypeType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: MeetingTypeType = 'leader';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as MeetingTypeType;
    }
  });

  return results[resultType];
}
