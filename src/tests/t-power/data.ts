// 전투력 테스트 - 나의 사회 생존력/경쟁력 측정

export const questions = [
  {
    id: 1,
    question: "아침에 눈 뜨자마자 드는 생각은?",
    options: [
      { text: "오늘도 정복하러 간다", score: 10 },
      { text: "오늘 할 일 체크", score: 7 },
      { text: "5분만 더...", score: 4 },
      { text: "퇴근하고 싶다", score: 2 },
    ],
  },
  {
    id: 2,
    question: "어려운 문제가 생기면?",
    options: [
      { text: "오히려 좋아, 도전!", score: 10 },
      { text: "해결 방법을 찾아봄", score: 7 },
      { text: "스트레스 받음", score: 4 },
      { text: "누가 좀 대신 해줘", score: 2 },
    ],
  },
  {
    id: 3,
    question: "거절당했을 때?",
    options: [
      { text: "다시 도전하면 되지", score: 10 },
      { text: "아쉽지만 다른 방법 찾음", score: 7 },
      { text: "좀 상처받음", score: 4 },
      { text: "다신 안 해", score: 2 },
    ],
  },
  {
    id: 4,
    question: "새벽까지 일해야 하면?",
    options: [
      { text: "끝내고 만다", score: 10 },
      { text: "필요하면 함", score: 7 },
      { text: "억지로 함", score: 4 },
      { text: "포기하고 잠", score: 2 },
    ],
  },
  {
    id: 5,
    question: "경쟁자가 나타나면?",
    options: [
      { text: "불타오른다", score: 10 },
      { text: "자극받아서 더 열심히", score: 7 },
      { text: "부담스럽지만 해야지", score: 4 },
      { text: "알아서 잘하겠지 (포기)", score: 2 },
    ],
  },
  {
    id: 6,
    question: "체력 관리는?",
    options: [
      { text: "꾸준히 운동함", score: 10 },
      { text: "가끔 운동함", score: 7 },
      { text: "해야 하는데...", score: 4 },
      { text: "운동? 그게 뭐죠", score: 2 },
    ],
  },
  {
    id: 7,
    question: "스트레스 해소법은?",
    options: [
      { text: "운동/생산적 활동", score: 10 },
      { text: "취미/사람 만나기", score: 7 },
      { text: "자거나 먹음", score: 4 },
      { text: "참거나 폭발", score: 2 },
    ],
  },
  {
    id: 8,
    question: "목표 달성을 위해?",
    options: [
      { text: "무슨 일이든 한다", score: 10 },
      { text: "웬만하면 노력함", score: 7 },
      { text: "적당히 함", score: 4 },
      { text: "되면 좋고 안 되면 말고", score: 2 },
    ],
  },
  {
    id: 9,
    question: "인맥 관리는?",
    options: [
      { text: "전략적으로 넓게", score: 10 },
      { text: "적절히 관리함", score: 7 },
      { text: "가까운 사람만", score: 4 },
      { text: "혼자가 편함", score: 2 },
    ],
  },
  {
    id: 10,
    question: "자기 계발은?",
    options: [
      { text: "항상 배우고 성장 중", score: 10 },
      { text: "가끔 강의/책 봄", score: 7 },
      { text: "해야 하는데 미룸", score: 4 },
      { text: "지금 상태로 OK", score: 2 },
    ],
  },
  {
    id: 11,
    question: "실패했을 때?",
    options: [
      { text: "교훈 얻고 다시 도전", score: 10 },
      { text: "아쉽지만 다음 기회에", score: 7 },
      { text: "당분간 우울함", score: 4 },
      { text: "난 역시 안 돼", score: 2 },
    ],
  },
  {
    id: 12,
    question: "5년 후 나는?",
    options: [
      { text: "확실한 비전이 있음", score: 10 },
      { text: "대략적인 계획은 있음", score: 7 },
      { text: "잘 모르겠음", score: 4 },
      { text: "생각하기 싫음", score: 2 },
    ],
  },
  {
    id: 13,
    question: "프레젠테이션/발표를 하면?",
    options: [
      { text: "자신 있게 잘함", score: 10 },
      { text: "준비하면 할 만함", score: 7 },
      { text: "떨리고 긴장됨", score: 4 },
      { text: "절대 못 함", score: 2 },
    ],
  },
  {
    id: 14,
    question: "중요한 결정을 내릴 때?",
    options: [
      { text: "빠르고 과감하게", score: 10 },
      { text: "충분히 생각 후 결정", score: 7 },
      { text: "누군가와 상의 필요", score: 4 },
      { text: "결정 자체가 어려움", score: 2 },
    ],
  },
  {
    id: 15,
    question: "나의 멘탈은?",
    options: [
      { text: "강철 멘탈", score: 10 },
      { text: "웬만하면 버팀", score: 7 },
      { text: "유리 멘탈", score: 4 },
      { text: "두부 멘탈", score: 2 },
    ],
  },
];

export interface TPowerResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  powerScore: number;
  maxScore: number;
  powerLevel: string;
  rank: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  upgradeSkills: string[];
  famousCharacter: string;
  advice: string;
}

function getPowerLevel(percentage: number): Omit<TPowerResult, 'powerScore' | 'maxScore'> {
  if (percentage >= 90) {
    return {
      type: 'god',
      title: '초사이어인',
      emoji: '⚡',
      subtitle: '전투력 측정 불가',
      description: '당신의 전투력은 측정이 불가능합니다! 강철 멘탈과 끝없는 추진력으로 무엇이든 해내는 당신. 목표를 향한 집념이 대단하고, 주변에 영감을 주는 존재입니다.',
      powerLevel: 'SSS',
      rank: '상위 1%',
      characteristics: ['강철 멘탈', '끝없는 추진력', '카리스마', '승부욕', '자기 확신'],
      strengths: ['불굴의 의지', '리더십', '목표 달성력', '회복력', '영향력'],
      weaknesses: ['워커홀릭 주의', '공감 부족할 수 있음', '번아웃 위험'],
      upgradeSkills: ['워라밸 챙기기', '주변 사람 케어', '쉬는 것도 실력'],
      famousCharacter: '드래곤볼 오공, 아이언맨 토니 스타크',
      advice: '당신은 이미 충분히 강합니다. 가끔은 쉬어도 돼요.',
    };
  } else if (percentage >= 75) {
    return {
      type: 'elite',
      title: '엘리트 전사',
      emoji: '🔥',
      subtitle: '상위권 전투력',
      description: '당신은 강한 전투력을 가진 엘리트입니다! 어려운 상황에서도 포기하지 않고, 목표를 향해 나아가는 힘이 있어요. 꾸준한 노력과 성장 마인드가 인상적입니다.',
      powerLevel: 'S',
      rank: '상위 10%',
      characteristics: ['끈기', '목표 지향', '자기 관리', '성장 마인드', '책임감'],
      strengths: ['꾸준한 노력', '문제 해결력', '자기 통제', '적응력'],
      weaknesses: ['가끔 지침', '완벽주의 경향', '스트레스 관리'],
      upgradeSkills: ['효율성 높이기', '위임하기', '멘탈 케어'],
      famousCharacter: '베지터, 캡틴 아메리카',
      advice: '지금처럼 하면 목표에 반드시 도달합니다!',
    };
  } else if (percentage >= 55) {
    return {
      type: 'soldier',
      title: '일반 병사',
      emoji: '⚔️',
      subtitle: '평균 전투력',
      description: '당신은 평균적인 전투력을 가진 일반 병사입니다. 필요할 때 힘을 내지만, 꾸준함이 부족할 수 있어요. 조금만 더 노력하면 엘리트가 될 수 있습니다!',
      powerLevel: 'A',
      rank: '상위 40%',
      characteristics: ['적당한 노력', '평범함', '가능성', '변동적'],
      strengths: ['적응력', '평균 이상', '발전 가능성'],
      weaknesses: ['일관성 부족', '동기 부여 필요', '안주 경향'],
      upgradeSkills: ['루틴 만들기', '목표 세분화', '동기 찾기'],
      famousCharacter: '나루토 (초기), 피터 파커 (초기)',
      advice: '꾸준함이 천재를 이깁니다. 매일 1% 성장!',
    };
  } else if (percentage >= 35) {
    return {
      type: 'trainee',
      title: '훈련병',
      emoji: '🌱',
      subtitle: '성장 중인 전투력',
      description: '당신은 아직 훈련 중인 전투력입니다. 의지가 약하거나 방향을 못 찾은 상태일 수 있어요. 하지만 지금부터 시작해도 늦지 않았습니다!',
      powerLevel: 'B',
      rank: '상위 60%',
      characteristics: ['미완성', '잠재력', '방황', '성장 필요'],
      strengths: ['가능성', '순수함', '열린 마음'],
      weaknesses: ['추진력 부족', '목표 불명확', '쉽게 포기'],
      upgradeSkills: ['작은 목표 세우기', '멘토 찾기', '체력 기르기'],
      famousCharacter: '나루토 (초기), 피터 파커 (초기)',
      advice: '작은 것부터 시작하세요. 성공 경험이 쌓이면 강해집니다.',
    };
  } else {
    return {
      type: 'civilian',
      title: '평화주의자',
      emoji: '🕊️',
      subtitle: '전투력보다 평화',
      description: '당신은 경쟁이나 싸움보다 평화를 선호하는 타입입니다. 전투력은 낮지만, 다른 가치관으로 살아가고 있어요. 그것도 하나의 선택입니다!',
      powerLevel: 'C',
      rank: '하위권',
      characteristics: ['평화 추구', '경쟁 싫어함', '여유로움', '낮은 야망'],
      strengths: ['마음의 평화', '스트레스 적음', '자기만의 속도'],
      weaknesses: ['사회 적응 어려움', '기회 놓침', '수동적'],
      upgradeSkills: ['작은 도전하기', '체력 기르기', '목표 하나 정하기'],
      famousCharacter: '밥 로스, 미스터 로저스',
      advice: '경쟁이 다가 아니지만, 최소한의 전투력은 생존에 필요해요.',
    };
  }
}

export function calculateTPowerResult(answers: number[]): TPowerResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 10;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const result = getPowerLevel(percentage);

  return {
    ...result,
    powerScore: totalScore,
    maxScore,
  };
}
