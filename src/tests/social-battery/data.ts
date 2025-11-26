// 소셜 배터리 테스트 - 나의 사회적 에너지 측정

export const questions = [
  {
    id: 1,
    question: "주말에 가장 하고 싶은 것은?",
    options: [
      { text: "집에서 혼자 넷플릭스", score: 1 },
      { text: "가까운 친구 1-2명과 조용히", score: 3 },
      { text: "친구들과 맛집/카페 투어", score: 4 },
      { text: "파티나 모임 참석", score: 5 },
    ],
  },
  {
    id: 2,
    question: "모임 후 집에 오면?",
    options: [
      { text: "완전 방전, 며칠 쉬어야 함", score: 1 },
      { text: "피곤하지만 다음 날 괜찮음", score: 3 },
      { text: "오히려 에너지가 남", score: 4 },
      { text: "또 놀고 싶음", score: 5 },
    ],
  },
  {
    id: 3,
    question: "갑자기 친구가 '놀자'고 연락하면?",
    options: [
      { text: "핑계 대고 안 나감", score: 1 },
      { text: "기분에 따라 결정", score: 3 },
      { text: "웬만하면 나감", score: 4 },
      { text: "무조건 GO", score: 5 },
    ],
  },
  {
    id: 4,
    question: "회식이나 단체 모임에서 나는?",
    options: [
      { text: "존재감 없이 조용히 있음", score: 1 },
      { text: "아는 사람이랑만 대화", score: 2 },
      { text: "적당히 어울림", score: 4 },
      { text: "분위기 메이커", score: 5 },
    ],
  },
  {
    id: 5,
    question: "새로운 사람을 만나는 것은?",
    options: [
      { text: "에너지 소모가 너무 큼", score: 1 },
      { text: "좀 부담스럽지만 필요하면", score: 2 },
      { text: "새로운 인연은 환영", score: 4 },
      { text: "새 친구 사귀는 거 너무 좋아", score: 5 },
    ],
  },
  {
    id: 6,
    question: "대화할 때 선호하는 방식은?",
    options: [
      { text: "카톡/문자가 편함", score: 1 },
      { text: "통화 정도는 OK", score: 2 },
      { text: "만나서 대화 선호", score: 4 },
      { text: "수다 떠는 게 제일 좋아", score: 5 },
    ],
  },
  {
    id: 7,
    question: "에너지 충전 방법은?",
    options: [
      { text: "혼자 있는 시간", score: 1 },
      { text: "조용한 취미 활동", score: 2 },
      { text: "가벼운 사교 활동", score: 4 },
      { text: "사람들과 어울리기", score: 5 },
    ],
  },
  {
    id: 8,
    question: "일주일에 사람 만나는 적정 횟수는?",
    options: [
      { text: "0-1회", score: 1 },
      { text: "2-3회", score: 3 },
      { text: "4-5회", score: 4 },
      { text: "거의 매일", score: 5 },
    ],
  },
  {
    id: 9,
    question: "연락 없이 혼자 있는 시간이 길어지면?",
    options: [
      { text: "완전 평화로움", score: 1 },
      { text: "괜찮음", score: 2 },
      { text: "좀 심심해짐", score: 4 },
      { text: "견딜 수 없음, 누군가 만나야 함", score: 5 },
    ],
  },
  {
    id: 10,
    question: "스몰톡(가벼운 대화)에 대해?",
    options: [
      { text: "너무 피곤하고 의미없음", score: 1 },
      { text: "어색하지만 필요하면 함", score: 2 },
      { text: "가볍게 즐김", score: 4 },
      { text: "스몰톡 마스터", score: 5 },
    ],
  },
  {
    id: 11,
    question: "친구 생일 파티 초대를 받으면?",
    options: [
      { text: "선물만 보내고 안 감", score: 1 },
      { text: "잠깐 얼굴만 비침", score: 2 },
      { text: "적당히 즐기다 옴", score: 4 },
      { text: "끝까지 남아서 놀아", score: 5 },
    ],
  },
  {
    id: 12,
    question: "이상적인 여행 스타일은?",
    options: [
      { text: "혼자 자유 여행", score: 1 },
      { text: "절친과 둘이", score: 2 },
      { text: "친구 3-4명과", score: 4 },
      { text: "대규모 단체 여행", score: 5 },
    ],
  },
];

export interface SocialBatteryResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  batteryLevel: number;
  maxBattery: number;
  percentage: number;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  rechargeMethod: string[];
  idealSocialLife: string;
  tips: string[];
}

function getBatteryResult(percentage: number): Omit<SocialBatteryResult, 'batteryLevel' | 'maxBattery' | 'percentage'> {
  if (percentage >= 85) {
    return {
      type: 'supercharger',
      title: '무한 에너지',
      emoji: '⚡',
      subtitle: '사람이 곧 에너지!',
      description: '당신의 소셜 배터리는 무한대에 가깝습니다! 사람들과 어울리면 오히려 에너지가 충전되는 타입이에요. 파티, 모임, 새로운 만남... 모두 환영! 혼자 있으면 오히려 방전됩니다.',
      characteristics: ['극강 외향', '파티 피플', '에너자이저', '인싸 중의 인싸'],
      strengths: ['넓은 인맥', '사교성', '분위기 메이커', '적응력'],
      challenges: ['혼자 있기 힘듦', '깊은 관계 어려움', '오지랖'],
      rechargeMethod: ['친구 만나기', '파티 참석', '새로운 모임'],
      idealSocialLife: '매일 다른 사람을 만나고, 다양한 모임에 참석하는 것',
      tips: ['가끔은 혼자 시간도 필요해요', '질 vs 양의 밸런스'],
    };
  } else if (percentage >= 65) {
    return {
      type: 'social',
      title: '활발한 소셜러',
      emoji: '🔋',
      subtitle: '사람 좋아, 하지만 쉼도 필요',
      description: '당신은 사교적이고 사람 만나는 걸 즐기지만, 적절한 혼자 시간도 필요한 타입입니다. 에너지 관리를 잘하고, 소셜 라이프와 개인 시간의 밸런스를 맞출 줄 알아요.',
      characteristics: ['밸런스형', '적절한 사교성', '에너지 관리'],
      strengths: ['균형감', '적응력', '다양한 관계'],
      challenges: ['가끔 과소비', '거절 어려움'],
      rechargeMethod: ['친구와 수다', '가벼운 외출', '적절한 휴식'],
      idealSocialLife: '주 2-4회 적당한 모임과 혼자만의 시간',
      tips: ['에너지 레벨 체크하기', '무리하지 않기'],
    };
  } else if (percentage >= 45) {
    return {
      type: 'balanced',
      title: '밸런스형',
      emoji: '⚖️',
      subtitle: '때에 따라 달라요',
      description: '당신은 상황에 따라 사교적일 수도, 혼자 있고 싶을 수도 있는 밸런스형입니다. 기분과 컨디션에 따라 소셜 배터리가 달라지고, 강제하는 모임은 싫어해요.',
      characteristics: ['상황 따라 다름', '유연함', '선택적 사교'],
      strengths: ['적응력', '자기 인식', '경계 설정'],
      challenges: ['일관성 부족', '예측 어려움'],
      rechargeMethod: ['기분에 따라 선택', '무리하지 않는 활동'],
      idealSocialLife: '원할 때 만나고, 원할 때 쉬는 자유로운 스타일',
      tips: ['자신의 에너지 레벨 존중하기'],
    };
  } else if (percentage >= 25) {
    return {
      type: 'introvert',
      title: '에너지 절약형',
      emoji: '🪫',
      subtitle: '사람은 소량으로...',
      description: '당신은 사람을 만나면 에너지가 소모되는 타입입니다. 소수의 친한 사람은 좋지만, 많은 사람과의 모임은 부담스러워요. 혼자 있는 시간이 충전 시간입니다.',
      characteristics: ['내향적', '에너지 민감', '소수 정예', '혼자 좋아'],
      strengths: ['깊은 관계', '자기 성찰', '집중력', '독립적'],
      challenges: ['사회생활 피로', '거절 죄책감', '외로움'],
      rechargeMethod: ['혼자 시간', '조용한 취미', '소수 친구'],
      idealSocialLife: '주 1-2회 친한 사람과의 만남',
      tips: ['무리하지 않아도 돼요', '거절해도 괜찮아요'],
    };
  } else {
    return {
      type: 'hermit',
      title: '은둔 고수',
      emoji: '🏠',
      subtitle: '집이 최고야',
      description: '당신의 소셜 배터리는 매우 작습니다. 사람 만나는 게 큰 에너지 소모이고, 혼자 있는 게 가장 편해요. 필수적인 만남 외에는 집에 있고 싶은 타입입니다.',
      characteristics: ['극내향', '혼자 충전', '사회 피로', '집순이/집돌이'],
      strengths: ['자기 세계', '독립성', '깊은 사고', '자기 충분성'],
      challenges: ['고립 위험', '관계 유지 어려움', '사회성'],
      rechargeMethod: ['완전한 혼자 시간', '취미 활동', '반려동물'],
      idealSocialLife: '최소한의 필수 만남만',
      tips: ['가끔은 나가보는 것도 좋아요', '온라인 소통도 OK'],
    };
  }
}

export function calculateSocialBatteryResult(answers: number[]): SocialBatteryResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const result = getBatteryResult(percentage);

  return {
    ...result,
    batteryLevel: totalScore,
    maxBattery: maxScore,
    percentage,
  };
}
