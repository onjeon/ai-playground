// 오늘의 운세 데이터
import { 
  generateDailySeed, 
  seededRandom, 
  seededChoice, 
  seededRange,
  DailyFortuneResult 
} from '@/lib/fortune/daily';

// 총운 메시지
const OVERALL_MESSAGES = {
  great: [
    '오늘은 모든 일이 순조롭게 풀리는 날입니다. 자신감을 가지고 적극적으로 행동하세요!',
    '행운이 가득한 하루입니다. 평소 망설였던 일을 시작하기 좋은 날이에요.',
    '좋은 기운이 당신을 감싸고 있어요. 새로운 도전이 성공으로 이어질 수 있습니다.',
    '오늘 하루는 특별한 행운이 따릅니다. 기회를 놓치지 마세요!',
  ],
  good: [
    '전반적으로 무난한 하루가 될 것입니다. 계획한 일을 차근차근 진행하세요.',
    '작은 행운들이 찾아오는 날입니다. 주변을 살펴보면 좋은 기회가 보일 거예요.',
    '안정적인 하루입니다. 급하게 서두르지 않으면 좋은 결과를 얻을 수 있어요.',
    '평화로운 하루가 예상됩니다. 여유를 가지고 하루를 보내세요.',
  ],
  neutral: [
    '보통의 하루가 될 것입니다. 무리하지 말고 현재 상태를 유지하세요.',
    '특별한 일 없이 지나갈 수 있는 하루입니다. 내면을 돌아보는 시간을 가져보세요.',
    '평범한 하루지만, 작은 것에서 행복을 찾을 수 있어요.',
    '조용히 자신의 일에 집중하기 좋은 날입니다.',
  ],
  bad: [
    '조금 주의가 필요한 하루입니다. 중요한 결정은 미루는 것이 좋아요.',
    '작은 어려움이 있을 수 있지만, 차분하게 대처하면 괜찮아요.',
    '예상치 못한 변수가 생길 수 있어요. 유연하게 대응하세요.',
    '오늘은 무리하지 말고 에너지를 아끼세요. 내일은 더 좋아질 거예요.',
  ],
};

// 카테고리별 메시지
const CATEGORY_MESSAGES = {
  love: {
    great: [
      '연인과 달콤한 시간을 보낼 수 있어요. 솔로는 새로운 만남이 기대됩니다!',
      '사랑운이 최고조! 고백이나 프로포즈에 좋은 날이에요.',
      '상대방에게 진심이 전해지는 날입니다.',
    ],
    good: [
      '연인과 편안한 대화를 나눌 수 있어요. 서로의 마음을 확인해보세요.',
      '솔로는 소개팅이나 미팅에서 좋은 인연을 만날 수 있어요.',
      '사랑에 대한 긍정적인 에너지가 흐릅니다.',
    ],
    neutral: [
      '연애운은 평범합니다. 상대방을 배려하는 마음이 중요해요.',
      '급하게 진전시키려 하지 말고 천천히 알아가세요.',
      '혼자만의 시간도 소중히 여기세요.',
    ],
    bad: [
      '연인과 작은 다툼이 있을 수 있어요. 감정 조절에 신경 쓰세요.',
      '솔로는 오늘 만남보다 자기 관리에 집중하세요.',
      '오해가 생길 수 있으니 말조심하세요.',
    ],
  },
  work: {
    great: [
      '업무에서 좋은 성과를 낼 수 있어요. 상사의 인정을 받을 수 있습니다.',
      '새로운 프로젝트를 시작하기 좋은 날입니다.',
      '아이디어가 빛나는 날! 적극적으로 제안해보세요.',
    ],
    good: [
      '맡은 일을 차분히 처리하면 좋은 결과가 있을 거예요.',
      '동료와의 협력이 잘 이루어지는 날입니다.',
      '꾸준히 노력한 것이 인정받을 수 있어요.',
    ],
    neutral: [
      '특별한 변화 없이 평소처럼 일할 수 있어요.',
      '급한 일보다 밀린 업무 정리에 집중하세요.',
      '무난하게 하루가 지나갈 거예요.',
    ],
    bad: [
      '업무에서 실수가 생길 수 있어요. 꼼꼼히 확인하세요.',
      '상사나 동료와 의견 충돌이 있을 수 있습니다. 차분하게 대화하세요.',
      '과로하지 말고 적당히 쉬어가며 일하세요.',
    ],
  },
  money: {
    great: [
      '재물운이 좋습니다! 예상치 못한 수입이 있을 수 있어요.',
      '투자나 재테크에서 좋은 기회가 보일 수 있습니다.',
      '경제적으로 여유로운 하루가 될 거예요.',
    ],
    good: [
      '계획한 대로 지출하면 무리 없이 하루를 보낼 수 있어요.',
      '작은 행운이 찾아올 수 있습니다. 로또 한 장 사보는 건 어떨까요?',
      '안정적인 재정 상태를 유지할 수 있어요.',
    ],
    neutral: [
      '특별한 수입이나 지출 없이 평범한 하루입니다.',
      '충동구매를 피하고 꼭 필요한 것만 구입하세요.',
      '재정 계획을 세우기 좋은 날입니다.',
    ],
    bad: [
      '예상치 못한 지출이 있을 수 있어요. 비상금을 확인해두세요.',
      '투자나 도박은 피하는 것이 좋습니다.',
      '큰 결제나 계약은 오늘 피하세요.',
    ],
  },
  health: {
    great: [
      '컨디션이 최고입니다! 운동을 하면 더 좋은 효과를 볼 수 있어요.',
      '활력이 넘치는 하루입니다. 에너지를 생산적으로 활용하세요.',
      '몸과 마음이 모두 건강한 날입니다.',
    ],
    good: [
      '전반적으로 건강한 하루입니다. 규칙적인 생활을 유지하세요.',
      '가벼운 산책이나 스트레칭이 좋을 것 같아요.',
      '컨디션이 좋으니 하고 싶었던 일을 해보세요.',
    ],
    neutral: [
      '건강에 특별한 문제는 없지만, 무리하지 마세요.',
      '충분한 수면과 휴식이 필요합니다.',
      '평소 건강 습관을 유지하세요.',
    ],
    bad: [
      '컨디션이 좋지 않을 수 있어요. 무리하지 말고 쉬세요.',
      '스트레스 관리에 신경 쓰세요. 명상이나 휴식이 필요합니다.',
      '과식, 과음을 피하고 몸을 아껴주세요.',
    ],
  },
};

// 조언
const ADVICES = {
  great: [
    '자신감을 가지세요. 오늘 당신은 무엇이든 할 수 있어요!',
    '좋은 기운을 주변에 나눠주세요. 더 큰 행운이 돌아올 거예요.',
    '이 좋은 날을 기억해두세요. 힘들 때 힘이 될 거예요.',
  ],
  good: [
    '작은 것에 감사하는 마음을 가지세요.',
    '긍정적인 마음가짐이 좋은 하루를 만들어요.',
    '여유를 가지고 하루를 즐기세요.',
  ],
  neutral: [
    '평범한 하루도 소중합니다. 일상의 작은 행복을 찾아보세요.',
    '오늘은 준비의 시간입니다. 내일을 위해 충전하세요.',
    '조급해하지 마세요. 때가 되면 기회가 옵니다.',
  ],
  bad: [
    '어려운 날도 지나갑니다. 내일은 더 좋아질 거예요.',
    '힘든 일이 있어도 차분하게 대처하세요.',
    '오늘은 쉬어가는 날로 생각하세요. 충전의 시간입니다.',
  ],
};

// 경고 메시지
const WARNINGS = [
  '급한 결정은 피하세요.',
  '감정적인 대응은 금물입니다.',
  '과로와 무리는 피하세요.',
  '충동구매를 조심하세요.',
  '말실수에 주의하세요.',
  '건강 관리에 신경 쓰세요.',
  '시간 관리를 잘 하세요.',
  '중요한 약속을 잊지 마세요.',
  '차분하게 생각하고 행동하세요.',
  '주변 사람들에게 감사하세요.',
];

// 행운의 색상
const LUCKY_COLORS = ['빨강', '주황', '노랑', '초록', '파랑', '남색', '보라', '분홍', '흰색', '검정', '금색', '은색'];

// 행운의 방향
const LUCKY_DIRECTIONS = ['동쪽', '서쪽', '남쪽', '북쪽', '동남쪽', '동북쪽', '서남쪽', '서북쪽'];

// 행운의 시간
const LUCKY_TIMES = ['오전 6-8시', '오전 8-10시', '오전 10-12시', '오후 12-2시', '오후 2-4시', '오후 4-6시', '오후 6-8시', '오후 8-10시', '오후 10-12시'];

/**
 * 점수에 따른 등급
 */
function getGrade(score: number): 'great' | 'good' | 'neutral' | 'bad' {
  if (score >= 80) return 'great';
  if (score >= 60) return 'good';
  if (score >= 40) return 'neutral';
  return 'bad';
}

/**
 * 오늘의 운세 생성
 */
export function generateDailyFortune(birthDate: string, targetDate: Date = new Date()): DailyFortuneResult {
  const seed = generateDailySeed(birthDate, targetDate);
  const random = seededRandom(seed);
  
  // 점수 계산 (각 카테고리별로 다르게)
  const overallScore = seededRange(35, 95, random);
  const loveScore = seededRange(30, 100, random);
  const workScore = seededRange(30, 100, random);
  const moneyScore = seededRange(30, 100, random);
  const healthScore = seededRange(30, 100, random);
  
  // 등급
  const overallGrade = getGrade(overallScore);
  const loveGrade = getGrade(loveScore);
  const workGrade = getGrade(workScore);
  const moneyGrade = getGrade(moneyScore);
  const healthGrade = getGrade(healthScore);
  
  // 메시지 선택
  const overallMessage = seededChoice(OVERALL_MESSAGES[overallGrade], random);
  const loveMessage = seededChoice(CATEGORY_MESSAGES.love[loveGrade], random);
  const workMessage = seededChoice(CATEGORY_MESSAGES.work[workGrade], random);
  const moneyMessage = seededChoice(CATEGORY_MESSAGES.money[moneyGrade], random);
  const healthMessage = seededChoice(CATEGORY_MESSAGES.health[healthGrade], random);
  const advice = seededChoice(ADVICES[overallGrade], random);
  const warning = seededChoice(WARNINGS, random);
  
  // 행운의 요소
  const luckyColor = seededChoice(LUCKY_COLORS, random);
  const luckyNumber = seededRange(1, 45, random);
  const luckyDirection = seededChoice(LUCKY_DIRECTIONS, random);
  const luckyTime = seededChoice(LUCKY_TIMES, random);
  
  // 날짜 포맷
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[targetDate.getDay()];
  const dateStr = `${year}년 ${month}월 ${day}일 (${weekday})`;
  
  return {
    date: dateStr,
    birthDate,
    overall: {
      score: overallScore,
      message: overallMessage,
      advice,
    },
    categories: {
      love: { score: loveScore, message: loveMessage },
      work: { score: workScore, message: workMessage },
      money: { score: moneyScore, message: moneyMessage },
      health: { score: healthScore, message: healthMessage },
    },
    lucky: {
      color: luckyColor,
      number: luckyNumber,
      direction: luckyDirection,
      time: luckyTime,
    },
    warning,
  };
}

/**
 * 점수 색상
 */
export function getScoreColor(score: number): string {
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 40) return 'text-yellow-400';
  return 'text-red-400';
}

/**
 * 점수 배경
 */
export function getScoreBg(score: number): string {
  if (score >= 80) return 'bg-green-500/20 border-green-500/30';
  if (score >= 60) return 'bg-blue-500/20 border-blue-500/30';
  if (score >= 40) return 'bg-yellow-500/20 border-yellow-500/30';
  return 'bg-red-500/20 border-red-500/30';
}
