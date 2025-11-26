// EQ 감성지능 테스트

export interface EQQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface EQResult {
  type: string;
  title: string;
  emoji: string;
  level: string;
  score: number;
  maxScore: number;
  percentage: number;
  description: string;
  eqComponents: {
    selfAwareness: number;
    selfRegulation: number;
    motivation: number;
    empathy: number;
    socialSkills: number;
  };
  strengths: string[];
  improvements: string[];
  tips: string[];
  careerFit: string[];
  relationshipAdvice: string;
}

// 질문 데이터 (15문항) - 각 영역 3문항씩
export const questions: EQQuestion[] = [
  // 자기인식 (Self-Awareness) - 3문항
  {
    id: 1,
    question: "나는 내가 왜 특정 감정을 느끼는지 잘 안다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 2,
    question: "나는 나의 강점과 약점을 정확히 파악하고 있다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 3,
    question: "나는 나의 감정이 내 행동에 어떤 영향을 미치는지 안다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  // 자기조절 (Self-Regulation) - 3문항
  {
    id: 4,
    question: "화가 나도 차분하게 대처할 수 있다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 5,
    question: "스트레스 상황에서도 감정을 잘 통제한다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 6,
    question: "충동적인 행동을 하지 않고 생각 후 행동한다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  // 동기부여 (Motivation) - 3문항
  {
    id: 7,
    question: "실패해도 다시 도전하는 회복력이 있다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 8,
    question: "어려운 상황에서도 긍정적인 면을 찾으려 한다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 9,
    question: "목표를 향해 꾸준히 노력하는 편이다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  // 공감 (Empathy) - 3문항
  {
    id: 10,
    question: "다른 사람의 감정을 잘 읽을 수 있다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 11,
    question: "상대방의 입장에서 생각하려고 노력한다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 12,
    question: "다른 사람이 힘들어할 때 공감하며 위로할 수 있다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  // 사회적 기술 (Social Skills) - 3문항
  {
    id: 13,
    question: "갈등 상황에서 원만하게 해결하는 편이다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 14,
    question: "팀으로 일할 때 협력을 잘 이끌어낸다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
  {
    id: 15,
    question: "처음 보는 사람과도 대화를 잘 이끌어간다",
    options: [
      { text: "전혀 그렇지 않다", score: 1 },
      { text: "그렇지 않은 편이다", score: 2 },
      { text: "보통이다", score: 3 },
      { text: "그런 편이다", score: 4 },
      { text: "매우 그렇다", score: 5 },
    ],
  },
];

// 결과 계산 함수
export function calculateResult(answers: number[]): EQResult {
  const maxScore = 75; // 15문항 * 5점
  
  // 영역별 점수 계산
  const selfAwareness = answers.slice(0, 3).reduce((sum, idx) => sum + questions[answers.indexOf(idx)]?.options[idx]?.score || 0, 0);
  const selfRegulation = answers.slice(3, 6).reduce((sum, idx) => sum + questions[answers.indexOf(idx) + 3]?.options[idx]?.score || 0, 0);
  const motivation = answers.slice(6, 9).reduce((sum, idx) => sum + questions[answers.indexOf(idx) + 6]?.options[idx]?.score || 0, 0);
  const empathy = answers.slice(9, 12).reduce((sum, idx) => sum + questions[answers.indexOf(idx) + 9]?.options[idx]?.score || 0, 0);
  const socialSkills = answers.slice(12, 15).reduce((sum, idx) => sum + questions[answers.indexOf(idx) + 12]?.options[idx]?.score || 0, 0);

  // 정확한 점수 계산
  let totalScore = 0;
  answers.forEach((answerIndex, questionIndex) => {
    if (questions[questionIndex] && questions[questionIndex].options[answerIndex]) {
      totalScore += questions[questionIndex].options[answerIndex].score;
    }
  });

  // 영역별 점수 재계산 (정확하게)
  const componentScores = {
    selfAwareness: 0,
    selfRegulation: 0,
    motivation: 0,
    empathy: 0,
    socialSkills: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    if (questions[questionIndex] && questions[questionIndex].options[answerIndex]) {
      const score = questions[questionIndex].options[answerIndex].score;
      if (questionIndex < 3) componentScores.selfAwareness += score;
      else if (questionIndex < 6) componentScores.selfRegulation += score;
      else if (questionIndex < 9) componentScores.motivation += score;
      else if (questionIndex < 12) componentScores.empathy += score;
      else componentScores.socialSkills += score;
    }
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  // 레벨 및 결과 결정
  let result: EQResult;

  if (percentage >= 85) {
    result = {
      type: 'master',
      title: 'EQ 마스터',
      emoji: '🌟',
      level: '매우 높음',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신은 뛰어난 감성지능을 가지고 있습니다! 자신과 타인의 감정을 깊이 이해하고, 이를 바탕으로 훌륭한 인간관계를 형성합니다. 리더십과 공감 능력이 탁월하여 주변 사람들에게 긍정적인 영향을 줍니다.',
      eqComponents: componentScores,
      strengths: ['탁월한 공감 능력', '뛰어난 감정 조절', '강력한 리더십', '원만한 대인관계', '높은 자기인식'],
      improvements: ['때로는 자신의 필요도 우선시하기', '모든 상황을 해결하려 하지 않기'],
      tips: ['현재의 능력을 유지하고 발전시키세요', '멘토링이나 코칭으로 다른 사람들을 도와주세요', '감정적 번아웃에 주의하세요'],
      careerFit: ['CEO/경영진', '심리상담사', '인사담당자', '교육자', '코치'],
      relationshipAdvice: '당신의 뛰어난 공감 능력을 활용하되, 자신의 감정적 필요도 소홀히 하지 마세요.',
    };
  } else if (percentage >= 70) {
    result = {
      type: 'high',
      title: 'EQ 리더',
      emoji: '💫',
      level: '높음',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신은 높은 감성지능을 가지고 있습니다. 감정을 잘 이해하고 관리하며, 다른 사람들과 좋은 관계를 유지합니다. 팀에서 중요한 역할을 하며, 갈등 해결에 능숙합니다.',
      eqComponents: componentScores,
      strengths: ['좋은 공감 능력', '감정 조절 능력', '협력적 태도', '긍정적 마인드', '사회적 기술'],
      improvements: ['스트레스 상황에서의 감정 조절 강화', '더 깊은 자기성찰 시간 갖기', '경청 능력 더 발전시키기'],
      tips: ['명상이나 마음챙김을 통해 자기인식을 더 높여보세요', '어려운 대화를 피하지 말고 연습하세요', '피드백을 적극적으로 요청하세요'],
      careerFit: ['팀 리더', '영업/마케팅', '고객 서비스', '프로젝트 매니저', '교사'],
      relationshipAdvice: '관계에서 균형을 유지하면서, 더 깊은 감정적 연결을 추구해보세요.',
    };
  } else if (percentage >= 50) {
    result = {
      type: 'average',
      title: 'EQ 성장자',
      emoji: '🌱',
      level: '보통',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신의 감성지능은 평균 수준입니다. 기본적인 감정 이해와 관리는 가능하지만, 일부 영역에서 발전의 여지가 있습니다. 꾸준한 노력으로 더 높은 EQ를 달성할 수 있습니다.',
      eqComponents: componentScores,
      strengths: ['기본적인 감정 인식', '노력하는 자세', '성장 가능성'],
      improvements: ['자기 감정 더 잘 인식하기', '스트레스 관리 기술 배우기', '타인의 감정에 더 주의 기울이기', '충동적 반응 줄이기'],
      tips: ['감정 일기를 써서 자기인식을 높이세요', '갈등 상황에서 잠시 멈추고 생각하는 습관을 들이세요', 'EQ 관련 책이나 강의를 통해 학습하세요'],
      careerFit: ['전문직', '기술직', '분석가', '연구원'],
      relationshipAdvice: '상대방의 감정에 더 주의를 기울이고, 자신의 감정도 솔직하게 표현하는 연습을 해보세요.',
    };
  } else if (percentage >= 35) {
    result = {
      type: 'developing',
      title: 'EQ 개발자',
      emoji: '🔧',
      level: '개발 필요',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신의 감성지능은 발전이 필요한 수준입니다. 감정을 이해하고 관리하는 것이 어려울 수 있지만, 이는 학습과 연습을 통해 충분히 개선할 수 있습니다.',
      eqComponents: componentScores,
      strengths: ['성장 의지', '자기 인식의 시작'],
      improvements: ['감정 인식 훈련하기', '감정 조절 기법 배우기', '경청 능력 기르기', '공감 연습하기', '충동 조절 연습'],
      tips: ['전문 상담이나 코칭을 고려해보세요', '감정을 표현하는 어휘를 늘려보세요', '명상으로 마음을 관찰하는 연습을 하세요', '신뢰할 수 있는 사람에게 피드백을 요청하세요'],
      careerFit: ['독립적인 업무', '기술 중심 역할', '데이터 분석'],
      relationshipAdvice: '관계에서 어려움을 느낄 수 있습니다. 전문가의 도움을 받거나, 의식적으로 감정 표현을 연습해보세요.',
    };
  } else {
    result = {
      type: 'beginner',
      title: 'EQ 초보자',
      emoji: '🌰',
      level: '매우 낮음',
      score: totalScore,
      maxScore,
      percentage,
      description: '당신의 감성지능은 아직 초기 단계입니다. 감정을 이해하고 관리하는 것이 어려울 수 있지만, 걱정하지 마세요. EQ는 타고나는 것이 아니라 개발할 수 있는 능력입니다.',
      eqComponents: componentScores,
      strengths: ['발전 가능성', '시작하는 용기'],
      improvements: ['감정에 이름 붙이는 연습', '멈추고 생각하기', '다른 사람 관찰하기', '작은 것부터 공감하기', '감정 일기 쓰기'],
      tips: ['EQ 향상 프로그램이나 워크샵에 참여해보세요', '심리 상담을 통해 자기 이해를 높여보세요', '매일 5분 명상으로 시작해보세요', '감정 관련 책을 읽어보세요'],
      careerFit: ['구조화된 업무', '명확한 가이드라인이 있는 역할'],
      relationshipAdvice: '인간관계에서 어려움을 많이 경험할 수 있습니다. 전문가의 도움을 받는 것을 강력히 권장합니다.',
    };
  }

  return result;
}
