// 팀 역할 테스트

export interface TeamRoleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      leader: number;
      planner: number;
      executor: number;
      supporter: number;
    };
  }[];
}

export interface TeamRoleResult {
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

export const questions: TeamRoleQuestion[] = [
  {
    id: 1,
    question: '새 프로젝트가 시작되면 나는?',
    options: [
      { text: '전체 방향과 전략을 구상한다', scores: { leader: 3, planner: 2, executor: 0, supporter: 0 } },
      { text: '세부 계획과 일정을 짠다', scores: { leader: 0, planner: 3, executor: 1, supporter: 0 } },
      { text: '바로 실행에 들어간다', scores: { leader: 0, planner: 0, executor: 3, supporter: 1 } },
      { text: '팀원들의 의견을 모은다', scores: { leader: 1, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 2,
    question: '회의에서 나의 역할은?',
    options: [
      { text: '방향을 제시하고 결정을 내린다', scores: { leader: 3, planner: 1, executor: 0, supporter: 0 } },
      { text: '아이디어를 정리하고 구조화한다', scores: { leader: 0, planner: 3, executor: 0, supporter: 1 } },
      { text: '구체적인 실행 방안을 제안한다', scores: { leader: 0, planner: 1, executor: 3, supporter: 0 } },
      { text: '다양한 의견이 나오도록 돕는다', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 3,
    question: '문제가 발생하면?',
    options: [
      { text: '빠르게 결단을 내린다', scores: { leader: 3, planner: 0, executor: 1, supporter: 0 } },
      { text: '원인을 분석하고 대안을 찾는다', scores: { leader: 0, planner: 3, executor: 1, supporter: 0 } },
      { text: '바로 해결하러 뛰어든다', scores: { leader: 0, planner: 0, executor: 3, supporter: 0 } },
      { text: '팀원들의 상황을 먼저 살핀다', scores: { leader: 1, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 4,
    question: '팀에서 가장 중요하게 생각하는 것은?',
    options: [
      { text: '목표 달성과 성과', scores: { leader: 3, planner: 1, executor: 2, supporter: 0 } },
      { text: '체계적인 프로세스', scores: { leader: 0, planner: 3, executor: 1, supporter: 0 } },
      { text: '빠른 실행력', scores: { leader: 1, planner: 0, executor: 3, supporter: 0 } },
      { text: '팀원들의 화합', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 5,
    question: '마감이 다가올 때 나는?',
    options: [
      { text: '우선순위를 정해 팀을 독려한다', scores: { leader: 3, planner: 1, executor: 0, supporter: 1 } },
      { text: '남은 일정을 재조정한다', scores: { leader: 0, planner: 3, executor: 0, supporter: 1 } },
      { text: '야근해서라도 끝낸다', scores: { leader: 0, planner: 0, executor: 3, supporter: 0 } },
      { text: '힘든 팀원을 돕는다', scores: { leader: 0, planner: 0, executor: 1, supporter: 3 } },
    ],
  },
  {
    id: 6,
    question: '새로운 아이디어가 나왔을 때?',
    options: [
      { text: '가능성을 판단하고 추진 여부 결정', scores: { leader: 3, planner: 1, executor: 0, supporter: 0 } },
      { text: '실현 가능성과 리스크 분석', scores: { leader: 0, planner: 3, executor: 0, supporter: 1 } },
      { text: '일단 해보자고 제안', scores: { leader: 1, planner: 0, executor: 3, supporter: 0 } },
      { text: '모든 사람의 의견을 묻는다', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 7,
    question: '팀원이 실수했을 때?',
    options: [
      { text: '피드백을 주고 개선 방향을 제시', scores: { leader: 3, planner: 1, executor: 0, supporter: 1 } },
      { text: '실수 원인을 분석하고 재발 방지책 마련', scores: { leader: 0, planner: 3, executor: 0, supporter: 1 } },
      { text: '내가 직접 수습한다', scores: { leader: 0, planner: 0, executor: 3, supporter: 1 } },
      { text: '격려하고 다음을 기약한다', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 8,
    question: '나의 업무 스타일은?',
    options: [
      { text: 'Big Picture를 보고 방향 설정', scores: { leader: 3, planner: 1, executor: 0, supporter: 0 } },
      { text: '디테일하게 계획하고 관리', scores: { leader: 0, planner: 3, executor: 1, supporter: 0 } },
      { text: '빠르게 실행하고 수정', scores: { leader: 0, planner: 0, executor: 3, supporter: 0 } },
      { text: '팀원들과 소통하며 조율', scores: { leader: 1, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 9,
    question: '성과 평가에서 인정받고 싶은 부분은?',
    options: [
      { text: '리더십과 목표 달성', scores: { leader: 3, planner: 0, executor: 1, supporter: 0 } },
      { text: '꼼꼼한 기획과 관리', scores: { leader: 0, planner: 3, executor: 0, supporter: 0 } },
      { text: '실행력과 결과물', scores: { leader: 0, planner: 0, executor: 3, supporter: 0 } },
      { text: '팀워크 기여와 분위기', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 10,
    question: '갈등 상황에서 나는?',
    options: [
      { text: '중재하고 결정을 내린다', scores: { leader: 3, planner: 0, executor: 0, supporter: 1 } },
      { text: '객관적 사실을 정리한다', scores: { leader: 0, planner: 3, executor: 0, supporter: 1 } },
      { text: '빨리 해결하고 일하자고 한다', scores: { leader: 1, planner: 0, executor: 3, supporter: 0 } },
      { text: '양쪽 이야기를 다 들어본다', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 11,
    question: '프로젝트 성공 후 나는?',
    options: [
      { text: '다음 목표를 설정한다', scores: { leader: 3, planner: 1, executor: 0, supporter: 0 } },
      { text: '무엇이 잘 됐는지 분석/기록', scores: { leader: 0, planner: 3, executor: 0, supporter: 1 } },
      { text: '곧바로 다음 일에 착수', scores: { leader: 0, planner: 0, executor: 3, supporter: 0 } },
      { text: '팀원들과 축하 자리를 만든다', scores: { leader: 1, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
  {
    id: 12,
    question: '이상적인 팀에서 나의 포지션은?',
    options: [
      { text: '팀장/리더', scores: { leader: 3, planner: 0, executor: 0, supporter: 0 } },
      { text: '기획자/PM', scores: { leader: 0, planner: 3, executor: 0, supporter: 0 } },
      { text: '실무 담당자', scores: { leader: 0, planner: 0, executor: 3, supporter: 0 } },
      { text: '팀 서포터/조율자', scores: { leader: 0, planner: 0, executor: 0, supporter: 3 } },
    ],
  },
];

export const results: TeamRoleResult[] = [
  {
    type: 'leader',
    title: '리더/방향 설정자',
    emoji: '👑',
    color: '#EF4444',
    description: '팀의 방향을 제시하고 이끄는 타입! 큰 그림을 보고 결단을 내리는 리더십이 강점입니다.',
    traits: ['비전 제시', '결단력', '책임감', '추진력'],
    strengths: ['목표 설정', '팀 동기부여', '빠른 의사결정', '위기 대응'],
    weaknesses: ['독단적 결정 위험', '디테일 놓침', '경청 부족 가능'],
    tips: [
      '팀원들의 의견도 충분히 경청하세요',
      '마이크로매니징은 피하세요',
      '실패해도 책임지는 모습을 보이세요',
      '칭찬과 인정을 자주 하세요',
    ],
    famousPeople: '스티브 잡스, 일론 머스크, 손정의',
  },
  {
    type: 'planner',
    title: '기획자/전략가',
    emoji: '📋',
    color: '#3B82F6',
    description: '체계적으로 계획하고 관리하는 두뇌! 디테일과 프로세스에 강한 전략가입니다.',
    traits: ['분석적', '체계적', '신중함', '꼼꼼함'],
    strengths: ['계획 수립', '리스크 관리', '문서화', '프로세스 최적화'],
    weaknesses: ['실행 지연', '과도한 분석', '유연성 부족'],
    tips: [
      '완벽한 계획보다 빠른 실행도 중요해요',
      '계획은 바뀔 수 있다는 걸 인정하세요',
      '실행하는 사람들의 피드백을 반영하세요',
      '때로는 직감도 믿어보세요',
    ],
    famousPeople: '피터 드러커, 사티아 나델라',
  },
  {
    type: 'executor',
    title: '실행자/해결사',
    emoji: '⚡',
    color: '#F59E0B',
    description: '말보다 행동! 빠르게 실행하고 결과를 만들어내는 실행력의 화신입니다.',
    traits: ['실행력', '문제 해결', '끈기', '결과 지향'],
    strengths: ['빠른 실행', '문제 해결', '생산성', '책임 완수'],
    weaknesses: ['번아웃 위험', '전략적 사고 부족', '위임 어려움'],
    tips: [
      '가끔은 멈추고 방향을 점검하세요',
      '혼자 다 하려 하지 마세요',
      '장기적 관점도 키워보세요',
      '충분한 휴식도 생산성입니다',
    ],
    famousPeople: '손흥민, 류현진, 김연아',
  },
  {
    type: 'supporter',
    title: '서포터/조율자',
    emoji: '🤝',
    color: '#10B981',
    description: '팀의 윤활유! 팀원들을 연결하고 분위기를 만드는 소통의 달인입니다.',
    traits: ['공감 능력', '소통', '협력적', '배려심'],
    strengths: ['팀 분위기', '갈등 중재', '경청', '네트워킹'],
    weaknesses: ['자기 주장 부족', '결정 회피', '과도한 배려'],
    tips: [
      '당신의 의견도 중요합니다',
      '때로는 No라고 말하는 연습을 하세요',
      '모든 사람을 만족시킬 순 없어요',
      '자신의 성과도 어필하세요',
    ],
    famousPeople: '유재석, 신동엽, 조세호',
  },
];

export function calculateTeamRoleResult(answers: number[]): TeamRoleResult {
  const scores = { leader: 0, planner: 0, executor: 0, supporter: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      scores.leader += optionScores.leader;
      scores.planner += optionScores.planner;
      scores.executor += optionScores.executor;
      scores.supporter += optionScores.supporter;
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  return results.find(r => r.type === maxType) || results[0];
}
