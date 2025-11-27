// 2025 신년운세 데이터
import { ZodiacAnimal } from '@/lib/fortune/zodiac';

export interface MonthlyFortune {
  month: number;
  summary: string;
  rating: number; // 1-5
}

export interface Fortune2025Data {
  zodiac: ZodiacAnimal;
  keywords: string[];           // 올해의 키워드 3개
  overallRating: number;        // 총운 별점 (1-5)
  overall: string;              // 총운 설명 (200자)
  categories: {
    career: string;             // 직장/사업운 (100자)
    wealth: string;             // 재물운 (100자)
    love: string;               // 연애/결혼운 (100자)
    health: string;             // 건강운 (100자)
    study: string;              // 학업/자기계발운 (100자)
  };
  monthly: MonthlyFortune[];    // 월별 운세 (12개)
  lucky: {
    numbers: number[];          // 행운의 숫자 3개
    colors: string[];           // 행운의 색 2개
    direction: string;          // 행운의 방향
    months: number[];           // 행운의 달
    avoidMonths: number[];      // 피해야 할 달
  };
  advice: {
    doThis: string;             // 올해 꼭 해야 할 것
    avoidThis: string;          // 올해 피해야 할 것
  };
}

// 쥐띠 (1960, 1972, 1984, 1996, 2008, 2020)
export const ratFortune: Fortune2025Data = {
  zodiac: 'rat',
  keywords: ['도약', '기회', '신중함'],
  overallRating: 4,
  overall: '2025년 을사년은 쥐띠에게 새로운 도약의 기회가 찾아오는 해입니다. 뱀띠 해와의 조화로운 기운이 흘러 그동안 준비해온 일들이 빛을 발할 수 있습니다. 다만 상반기에는 신중한 판단이 필요하며, 하반기로 갈수록 운세가 상승합니다. 인간관계에서 귀인이 나타날 수 있으니 새로운 만남에 열린 마음을 가지세요.',
  categories: {
    career: '직장에서 승진이나 새로운 프로젝트의 기회가 찾아옵니다. 상반기에 기반을 다지고 하반기에 성과를 거두는 흐름입니다. 동료와의 협력이 성공의 열쇠가 됩니다.',
    wealth: '재물운은 중상 수준입니다. 꾸준한 저축이 빛을 발하며, 투자보다는 안정적인 수입원 확보에 집중하세요. 가을 이후 예상치 못한 수입이 있을 수 있습니다.',
    love: '솔로는 봄에 좋은 인연을 만날 수 있으니 적극적으로 나서세요. 커플은 서로에 대한 이해가 깊어지는 해이며, 결혼을 고려 중이라면 하반기가 좋습니다.',
    health: '전반적으로 건강하나 과로에 주의하세요. 특히 봄철 환절기에 호흡기 관리가 필요합니다. 규칙적인 운동 습관을 들이면 한 해를 활기차게 보낼 수 있습니다.',
    study: '학업운이 좋아 자격증 취득이나 새로운 기술 습득에 유리합니다. 온라인 강의나 독학보다는 스터디 그룹 활동이 효과적입니다.'
  },
  monthly: [
    { month: 1, summary: '새해 첫 달, 계획 수립에 집중하세요. 큰 결정은 미루는 것이 좋습니다.', rating: 3 },
    { month: 2, summary: '인간관계가 활발해지는 달. 새로운 인연이 행운을 가져다줍니다.', rating: 4 },
    { month: 3, summary: '봄의 기운과 함께 활력이 넘칩니다. 적극적인 행동이 좋은 결과로 이어집니다.', rating: 4 },
    { month: 4, summary: '금전적으로 주의가 필요한 달. 충동구매를 삼가세요.', rating: 3 },
    { month: 5, summary: '직장에서 인정받는 일이 생깁니다. 자신감을 가지세요.', rating: 4 },
    { month: 6, summary: '건강에 신경 써야 하는 달. 무리한 일정은 피하세요.', rating: 3 },
    { month: 7, summary: '하반기 시작과 함께 운세가 상승합니다. 새로운 시작에 좋습니다.', rating: 4 },
    { month: 8, summary: '재물운이 좋아지는 달. 투자나 사업 확장을 고려해볼 만합니다.', rating: 5 },
    { month: 9, summary: '가을의 풍요로움이 찾아옵니다. 그동안의 노력이 결실을 맺습니다.', rating: 5 },
    { month: 10, summary: '인간관계에서 작은 갈등이 있을 수 있으니 대화로 풀어가세요.', rating: 3 },
    { month: 11, summary: '차분하게 한 해를 정리하는 시기. 내년 계획을 세우기 좋습니다.', rating: 4 },
    { month: 12, summary: '따뜻한 연말을 보낼 수 있습니다. 가족과의 시간이 행복을 줍니다.', rating: 4 }
  ],
  lucky: {
    numbers: [3, 7, 9],
    colors: ['파란색', '금색'],
    direction: '북쪽',
    months: [3, 8, 9],
    avoidMonths: [4, 6]
  },
  advice: {
    doThis: '새로운 인연을 소중히 여기고, 하반기에 중요한 결정을 내리세요. 꾸준한 자기계발이 내년의 성공을 준비합니다.',
    avoidThis: '급한 투자나 보증은 피하세요. 상반기에 무리한 계획을 세우면 후반에 어려움이 생길 수 있습니다.'
  }
};

// 소띠 (1961, 1973, 1985, 1997, 2009, 2021)
export const oxFortune: Fortune2025Data = {
  zodiac: 'ox',
  keywords: ['안정', '성실', '결실'],
  overallRating: 4,
  overall: '2025년은 소띠에게 그동안의 성실함이 보답받는 해입니다. 을사년의 뱀과 소는 삼합의 관계로, 매우 조화로운 기운이 흐릅니다. 직장에서의 성과, 재물의 축적, 안정적인 인간관계 등 여러 면에서 만족스러운 한 해가 될 것입니다. 단, 지나친 욕심은 금물이며 현재에 감사하는 마음이 더 큰 복을 부릅니다.',
  categories: {
    career: '직장에서 신뢰를 얻어 중요한 역할을 맡게 됩니다. 승진이나 연봉 협상에서 좋은 결과를 기대할 수 있으며, 사업을 하는 분은 안정적인 성장세를 보입니다.',
    wealth: '재물운이 상승하는 해입니다. 부동산이나 장기 투자에서 좋은 소식이 있을 수 있습니다. 저축한 돈이 목돈이 되거나, 예상치 못한 보너스가 들어올 수 있습니다.',
    love: '기존 관계가 더욱 깊어지는 해입니다. 커플은 결혼이나 동거 등 관계 진전이 있고, 솔로는 주변 소개로 좋은 인연을 만날 수 있습니다.',
    health: '전반적으로 건강하지만 소화기 계통에 주의하세요. 과식과 야식을 줄이고, 가벼운 산책 습관을 들이면 좋습니다.',
    study: '새로운 분야보다는 기존에 하던 공부를 깊이 있게 파고드는 것이 좋습니다. 자격증 시험에서 좋은 결과를 기대할 수 있습니다.'
  },
  monthly: [
    { month: 1, summary: '한 해의 기반을 다지는 달. 목표를 명확히 세우세요.', rating: 4 },
    { month: 2, summary: '재물운이 좋습니다. 저축이나 투자를 시작하기 좋은 때입니다.', rating: 4 },
    { month: 3, summary: '직장에서 좋은 평가를 받습니다. 자신감 있게 의견을 제시하세요.', rating: 5 },
    { month: 4, summary: '인간관계가 원만해지는 달. 오해가 있었다면 풀어가세요.', rating: 4 },
    { month: 5, summary: '건강에 조금 더 신경 쓰세요. 정기검진을 받는 것도 좋습니다.', rating: 3 },
    { month: 6, summary: '예상치 못한 지출이 있을 수 있습니다. 비상금을 마련해두세요.', rating: 3 },
    { month: 7, summary: '새로운 기회가 찾아옵니다. 망설이지 말고 도전하세요.', rating: 4 },
    { month: 8, summary: '가장 좋은 운세의 달입니다. 중요한 일을 이 달에 진행하세요.', rating: 5 },
    { month: 9, summary: '수확의 계절, 노력의 결실을 거두게 됩니다.', rating: 5 },
    { month: 10, summary: '차분하게 성과를 정리하는 시기입니다.', rating: 4 },
    { month: 11, summary: '가족과 관련된 경사가 있을 수 있습니다.', rating: 4 },
    { month: 12, summary: '풍요롭고 따뜻한 연말을 보내게 됩니다.', rating: 4 }
  ],
  lucky: {
    numbers: [1, 4, 8],
    colors: ['노란색', '흰색'],
    direction: '남쪽',
    months: [3, 8, 9],
    avoidMonths: [5, 6]
  },
  advice: {
    doThis: '꾸준함을 유지하고, 주변 사람들에게 감사를 표현하세요. 재테크에 관심을 가지면 좋은 결과가 있습니다.',
    avoidThis: '새로운 사업이나 큰 변화는 신중히 결정하세요. 보증이나 대출은 피하는 것이 좋습니다.'
  }
};

// 호랑이띠 (1962, 1974, 1986, 1998, 2010, 2022)
export const tigerFortune: Fortune2025Data = {
  zodiac: 'tiger',
  keywords: ['도전', '변화', '성장'],
  overallRating: 3,
  overall: '2025년은 호랑이띠에게 변화와 도전의 해입니다. 을사년의 기운이 다소 충돌하는 면이 있어 예상치 못한 변수가 생길 수 있습니다. 하지만 이는 성장의 기회이기도 합니다. 유연한 마음으로 변화를 받아들이고, 새로운 환경에 적응하면 후반기에 좋은 결과를 얻을 수 있습니다. 인내심이 올해의 핵심 덕목입니다.',
  categories: {
    career: '직장에서 새로운 역할이나 부서 이동이 있을 수 있습니다. 처음에는 어렵게 느껴져도 적응하면 더 좋은 기회가 됩니다. 이직을 고려 중이라면 하반기가 좋습니다.',
    wealth: '상반기는 지출이 많을 수 있으니 절약이 필요합니다. 하반기부터 재물운이 회복되며, 투자보다는 안정적인 저축이 권장됩니다.',
    love: '솔로는 다양한 만남이 있지만 진지한 인연은 가을 이후에 찾아옵니다. 커플은 서로에 대한 이해와 소통이 중요한 해입니다.',
    health: '스트레스 관리가 중요합니다. 명상이나 취미 활동으로 마음의 안정을 찾으세요. 관절이나 근육 건강에 신경 쓰세요.',
    study: '새로운 분야에 도전하기 좋은 해입니다. 어학이나 IT 관련 공부가 미래에 도움이 됩니다.'
  },
  monthly: [
    { month: 1, summary: '조심스러운 시작이 필요합니다. 큰 결정은 미루세요.', rating: 3 },
    { month: 2, summary: '인간관계에서 오해가 생길 수 있습니다. 대화로 풀어가세요.', rating: 2 },
    { month: 3, summary: '봄과 함께 활력이 돌아옵니다. 운동을 시작하기 좋습니다.', rating: 3 },
    { month: 4, summary: '예상치 못한 지출에 주의하세요. 계획적인 소비가 필요합니다.', rating: 2 },
    { month: 5, summary: '직장에서 인정받는 일이 생깁니다.', rating: 4 },
    { month: 6, summary: '건강 점검이 필요한 달입니다.', rating: 3 },
    { month: 7, summary: '운세가 상승하기 시작합니다. 적극적으로 움직이세요.', rating: 4 },
    { month: 8, summary: '새로운 기회가 찾아옵니다. 준비된 자에게 행운이 옵니다.', rating: 4 },
    { month: 9, summary: '좋은 인연을 만날 수 있는 달입니다.', rating: 4 },
    { month: 10, summary: '재물운이 좋아집니다. 보너스나 추가 수입이 있을 수 있습니다.', rating: 4 },
    { month: 11, summary: '안정을 되찾는 시기입니다.', rating: 4 },
    { month: 12, summary: '한 해를 잘 마무리하며 내년을 준비하세요.', rating: 4 }
  ],
  lucky: {
    numbers: [2, 5, 8],
    colors: ['초록색', '주황색'],
    direction: '동쪽',
    months: [5, 7, 10],
    avoidMonths: [2, 4]
  },
  advice: {
    doThis: '변화를 두려워하지 말고, 새로운 기술이나 지식을 배우세요. 건강 관리에 투자하면 좋은 결과가 있습니다.',
    avoidThis: '급한 결정이나 충동적인 투자는 피하세요. 인간관계에서 감정적으로 대응하지 마세요.'
  }
};

// 토끼띠 (1963, 1975, 1987, 1999, 2011, 2023)
export const rabbitFortune: Fortune2025Data = {
  zodiac: 'rabbit',
  keywords: ['평화', '기회', '인연'],
  overallRating: 4,
  overall: '2025년은 토끼띠에게 평화롭고 안정적인 한 해가 됩니다. 을사년의 기운이 토끼띠와 조화를 이루어 마음의 여유를 찾을 수 있습니다. 특히 인간관계에서 좋은 인연이 찾아오며, 이를 통해 새로운 기회가 열립니다. 급하게 서두르기보다 차분히 준비하면 더 큰 성과를 얻을 수 있는 해입니다.',
  categories: {
    career: '직장에서 안정적인 흐름이 이어집니다. 급격한 변화보다는 현재 위치에서 실력을 쌓는 것이 좋습니다. 좋은 멘토나 선배를 만날 수 있습니다.',
    wealth: '재물운은 보통 수준이지만 꾸준한 수입이 보장됩니다. 큰 투자보다는 소소한 저축이 나중에 큰 도움이 됩니다.',
    love: '연애운이 좋은 해입니다. 솔로는 자연스러운 만남에서 좋은 인연을 찾고, 커플은 함께하는 시간이 더욱 소중해집니다.',
    health: '전반적으로 건강하지만 수면 패턴에 신경 쓰세요. 충분한 휴식이 한 해를 활기차게 보내는 비결입니다.',
    study: '외국어나 예술 분야에서 좋은 성과를 기대할 수 있습니다. 창의적인 활동이 만족감을 줍니다.'
  },
  monthly: [
    { month: 1, summary: '차분하게 한 해를 시작하세요. 계획을 세우는 데 집중하세요.', rating: 3 },
    { month: 2, summary: '좋은 소식이 찾아올 수 있습니다. 기대해도 좋습니다.', rating: 4 },
    { month: 3, summary: '인간관계가 활발해집니다. 새로운 친구를 사귀기 좋습니다.', rating: 4 },
    { month: 4, summary: '재물운이 살짝 오르는 달입니다.', rating: 4 },
    { month: 5, summary: '연애운이 좋습니다. 솔로는 적극적으로 나서보세요.', rating: 5 },
    { month: 6, summary: '직장에서 작은 성과가 있습니다.', rating: 4 },
    { month: 7, summary: '여행이나 휴가로 재충전하기 좋은 달입니다.', rating: 4 },
    { month: 8, summary: '귀인이 나타날 수 있습니다. 만남에 열린 마음을 가지세요.', rating: 5 },
    { month: 9, summary: '안정적인 흐름이 이어집니다.', rating: 4 },
    { month: 10, summary: '가족과 관련된 좋은 일이 있을 수 있습니다.', rating: 4 },
    { month: 11, summary: '한 해의 성과를 정리하는 시기입니다.', rating: 4 },
    { month: 12, summary: '따뜻한 연말을 보내며 감사함을 느끼게 됩니다.', rating: 4 }
  ],
  lucky: {
    numbers: [3, 6, 9],
    colors: ['분홍색', '하늘색'],
    direction: '동쪽',
    months: [5, 8],
    avoidMonths: [1]
  },
  advice: {
    doThis: '인간관계를 소중히 여기고, 새로운 만남에 열린 마음을 가지세요. 취미 활동이 행복을 가져다줍니다.',
    avoidThis: '지나친 걱정이나 불안은 금물입니다. 남의 일에 깊이 관여하는 것도 피하세요.'
  }
};

// 용띠 (1964, 1976, 1988, 2000, 2012, 2024)
export const dragonFortune: Fortune2025Data = {
  zodiac: 'dragon',
  keywords: ['비상', '기회', '신중'],
  overallRating: 3,
  overall: '2025년은 용띠에게 기회와 도전이 공존하는 해입니다. 을사년의 뱀과 용은 비슷한 기운을 가져 경쟁 구도가 형성될 수 있습니다. 좋은 기회가 오지만 신중한 판단이 필요하며, 준비된 자만이 성공을 거둘 수 있습니다. 자만하지 않고 꾸준히 노력하면 후반기에 빛을 발합니다.',
  categories: {
    career: '새로운 프로젝트나 역할을 맡을 기회가 있습니다. 경쟁이 치열할 수 있으나 실력으로 승부하세요. 팀워크가 성공의 열쇠입니다.',
    wealth: '수입은 늘어나지만 지출도 많은 해입니다. 계획적인 자금 관리가 필요하며, 투자는 전문가 상담 후 결정하세요.',
    love: '카리스마가 빛나는 해라 매력이 높아집니다. 솔로는 여러 사람의 관심을 받지만, 진정한 인연을 찾으려면 내면을 봐야 합니다.',
    health: '과로에 주의하세요. 바쁘더라도 규칙적인 생활 패턴을 유지하는 것이 중요합니다.',
    study: '리더십이나 경영 관련 공부가 도움이 됩니다. 자기계발에 투자한 시간이 미래를 바꿉니다.'
  },
  monthly: [
    { month: 1, summary: '야심찬 계획을 세우되 현실적으로 접근하세요.', rating: 3 },
    { month: 2, summary: '경쟁 상황이 생길 수 있습니다. 차분히 대응하세요.', rating: 3 },
    { month: 3, summary: '봄과 함께 에너지가 넘칩니다. 적극적으로 움직이세요.', rating: 4 },
    { month: 4, summary: '재물운이 좋아지는 달입니다.', rating: 4 },
    { month: 5, summary: '인간관계에서 좋은 일이 생깁니다.', rating: 4 },
    { month: 6, summary: '건강에 신경 쓰세요. 충분한 휴식이 필요합니다.', rating: 3 },
    { month: 7, summary: '중요한 결정을 내리기 좋은 달입니다.', rating: 4 },
    { month: 8, summary: '노력의 결실을 볼 수 있습니다.', rating: 4 },
    { month: 9, summary: '주변의 도움으로 어려움을 극복합니다.', rating: 4 },
    { month: 10, summary: '새로운 기회가 찾아옵니다.', rating: 4 },
    { month: 11, summary: '안정을 되찾는 시기입니다.', rating: 4 },
    { month: 12, summary: '성취감을 느끼며 한 해를 마무리합니다.', rating: 4 }
  ],
  lucky: {
    numbers: [1, 6, 7],
    colors: ['금색', '빨간색'],
    direction: '서쪽',
    months: [4, 7, 10],
    avoidMonths: [2, 6]
  },
  advice: {
    doThis: '겸손한 자세로 주변의 조언을 경청하세요. 팀워크를 중시하면 더 큰 성과를 얻습니다.',
    avoidThis: '독단적인 결정이나 과시는 피하세요. 금전 거래에서 신중해야 합니다.'
  }
};

// 뱀띠 (1965, 1977, 1989, 2001, 2013)
export const snakeFortune: Fortune2025Data = {
  zodiac: 'snake',
  keywords: ['본명년', '신중', '내면'],
  overallRating: 3,
  overall: '2025년 을사년은 뱀띠에게 본명년(本命年)으로, 특별한 의미가 있는 해입니다. 자신의 해를 맞아 에너지가 넘치지만, 그만큼 신중함이 필요합니다. 큰 변화보다는 내면의 성장에 집중하고, 기존의 것을 잘 지키는 것이 중요합니다. 빨간색 액세서리로 액운을 막고, 차분한 마음으로 한 해를 보내세요.',
  categories: {
    career: '직장에서 변화의 바람이 불 수 있습니다. 이직이나 부서 이동은 신중히 결정하고, 현재 위치에서 실력을 쌓는 것이 좋습니다.',
    wealth: '본명년에는 큰 투자를 피하는 것이 좋습니다. 안정적인 수입을 유지하며, 예비 자금을 마련해두세요.',
    love: '기존 관계의 안정이 중요합니다. 새로운 시작보다는 현재의 인연을 소중히 여기세요. 솔로는 조급해하지 마세요.',
    health: '본명년에는 건강에 특히 주의하세요. 정기 검진을 받고, 무리한 활동은 피하세요.',
    study: '내면의 성장에 집중하기 좋은 해입니다. 철학이나 심리학 관련 공부가 도움이 됩니다.'
  },
  monthly: [
    { month: 1, summary: '본명년의 시작, 빨간색 아이템으로 액운을 막으세요.', rating: 3 },
    { month: 2, summary: '차분히 계획을 세우는 시기입니다.', rating: 3 },
    { month: 3, summary: '건강에 신경 쓰세요. 무리는 금물입니다.', rating: 2 },
    { month: 4, summary: '인간관계에서 좋은 일이 생깁니다.', rating: 4 },
    { month: 5, summary: '작은 성과가 쌓여가는 달입니다.', rating: 4 },
    { month: 6, summary: '재물운이 안정됩니다.', rating: 3 },
    { month: 7, summary: '여행이나 휴식으로 재충전하세요.', rating: 4 },
    { month: 8, summary: '귀인의 도움이 있을 수 있습니다.', rating: 4 },
    { month: 9, summary: '가을과 함께 운세가 상승합니다.', rating: 4 },
    { month: 10, summary: '안정적인 흐름이 이어집니다.', rating: 4 },
    { month: 11, summary: '내면의 평화를 찾는 시기입니다.', rating: 4 },
    { month: 12, summary: '본명년을 잘 마무리하며 내년을 준비하세요.', rating: 4 }
  ],
  lucky: {
    numbers: [2, 8, 9],
    colors: ['빨간색', '노란색'],
    direction: '남쪽',
    months: [5, 8, 9],
    avoidMonths: [3]
  },
  advice: {
    doThis: '빨간색 액세서리를 착용하고, 내면의 성장에 집중하세요. 기존 관계를 소중히 여기세요.',
    avoidThis: '큰 변화나 모험은 내년으로 미루세요. 금전적 보증이나 대출은 피하세요.'
  }
};

// 말띠 (1966, 1978, 1990, 2002, 2014)
export const horseFortune: Fortune2025Data = {
  zodiac: 'horse',
  keywords: ['활력', '확장', '모험'],
  overallRating: 4,
  overall: '2025년은 말띠에게 활력 넘치는 한 해가 됩니다. 을사년의 기운이 말띠의 열정과 어우러져 새로운 도전에 유리합니다. 그동안 미뤄왔던 일을 시작하거나, 새로운 분야로 확장하기 좋은 시기입니다. 다만 너무 많은 것을 한꺼번에 하려 하지 말고, 선택과 집중이 필요합니다.',
  categories: {
    career: '새로운 기회가 많이 찾아옵니다. 이직이나 창업을 고려 중이라면 좋은 시기입니다. 적극적인 네트워킹이 기회를 가져다줍니다.',
    wealth: '수입이 늘어나는 해입니다. 다만 지출도 함께 늘어날 수 있으니 계획적인 관리가 필요합니다. 투자는 전문가와 상담하세요.',
    love: '매력이 빛나는 해라 만남이 많습니다. 솔로는 적극적으로 나서면 좋은 인연을 만나고, 커플은 함께 여행을 계획해보세요.',
    health: '에너지가 넘치지만 과로에 주의하세요. 충분한 휴식과 균형 잡힌 식사가 중요합니다.',
    study: '실용적인 기술이나 자격증 취득에 유리합니다. 새로운 것을 배우는 즐거움을 느끼게 됩니다.'
  },
  monthly: [
    { month: 1, summary: '새해의 활력으로 시작이 좋습니다. 목표를 높게 세우세요.', rating: 4 },
    { month: 2, summary: '인간관계가 활발해집니다. 네트워킹에 힘쓰세요.', rating: 4 },
    { month: 3, summary: '새로운 프로젝트를 시작하기 좋은 달입니다.', rating: 5 },
    { month: 4, summary: '재물운이 좋습니다. 투자 기회를 잘 살피세요.', rating: 4 },
    { month: 5, summary: '바쁘지만 보람찬 달입니다.', rating: 4 },
    { month: 6, summary: '건강에 신경 쓰세요. 휴식이 필요합니다.', rating: 3 },
    { month: 7, summary: '여름 휴가로 재충전하기 좋습니다.', rating: 4 },
    { month: 8, summary: '직장에서 인정받는 일이 생깁니다.', rating: 5 },
    { month: 9, summary: '연애운이 좋은 달입니다.', rating: 5 },
    { month: 10, summary: '안정적인 흐름이 이어집니다.', rating: 4 },
    { month: 11, summary: '성과를 정리하는 시기입니다.', rating: 4 },
    { month: 12, summary: '풍성한 연말을 보내게 됩니다.', rating: 4 }
  ],
  lucky: {
    numbers: [2, 3, 7],
    colors: ['초록색', '빨간색'],
    direction: '남쪽',
    months: [3, 8, 9],
    avoidMonths: [6]
  },
  advice: {
    doThis: '새로운 도전을 두려워하지 마세요. 적극적인 행동이 행운을 부릅니다. 운동으로 체력을 관리하세요.',
    avoidThis: '한꺼번에 너무 많은 일을 벌이지 마세요. 과로와 불규칙한 생활은 피하세요.'
  }
};

// 양띠 (1967, 1979, 1991, 2003, 2015)
export const sheepFortune: Fortune2025Data = {
  zodiac: 'sheep',
  keywords: ['안정', '창의', '협력'],
  overallRating: 4,
  overall: '2025년은 양띠에게 안정 속에서 창의성을 발휘할 수 있는 해입니다. 을사년의 부드러운 기운이 양띠의 예술적 감각과 어우러져 창작 활동이나 기획 업무에서 좋은 성과를 기대할 수 있습니다. 혼자보다는 협력을 통해 더 큰 성과를 이루며, 인간관계에서 따뜻함을 나누는 한 해가 됩니다.',
  categories: {
    career: '창의적인 아이디어가 인정받습니다. 팀 프로젝트에서 중요한 역할을 맡게 되며, 예술이나 디자인 분야에서 특히 좋은 성과가 있습니다.',
    wealth: '안정적인 수입이 유지됩니다. 큰 투자보다는 꾸준한 저축이 좋으며, 부업이나 창작 활동에서 추가 수입이 생길 수 있습니다.',
    love: '따뜻한 인간관계가 유지됩니다. 커플은 서로에 대한 이해가 깊어지고, 솔로는 친구의 소개로 좋은 인연을 만날 수 있습니다.',
    health: '전반적으로 건강하나 스트레스 관리가 필요합니다. 취미 활동으로 마음의 여유를 찾으세요.',
    study: '예술, 디자인, 문학 분야에서 좋은 성과를 기대할 수 있습니다. 창작 활동이 큰 만족감을 줍니다.'
  },
  monthly: [
    { month: 1, summary: '차분하게 한 해를 계획하세요. 창의적인 아이디어가 떠오릅니다.', rating: 4 },
    { month: 2, summary: '협력의 기회가 찾아옵니다. 함께하면 더 좋은 결과가 있습니다.', rating: 4 },
    { month: 3, summary: '봄의 기운과 함께 영감이 넘칩니다.', rating: 4 },
    { month: 4, summary: '재물운이 안정됩니다.', rating: 4 },
    { month: 5, summary: '인간관계에서 좋은 일이 생깁니다.', rating: 4 },
    { month: 6, summary: '작품이나 프로젝트가 완성되는 달입니다.', rating: 5 },
    { month: 7, summary: '휴식과 재충전의 시기입니다.', rating: 4 },
    { month: 8, summary: '새로운 시도가 좋은 결과로 이어집니다.', rating: 4 },
    { month: 9, summary: '수확의 계절, 노력의 결실을 봅니다.', rating: 5 },
    { month: 10, summary: '가족과 따뜻한 시간을 보내세요.', rating: 4 },
    { month: 11, summary: '한 해의 성과를 정리합니다.', rating: 4 },
    { month: 12, summary: '감사함과 함께 한 해를 마무리합니다.', rating: 4 }
  ],
  lucky: {
    numbers: [2, 5, 8],
    colors: ['베이지색', '갈색'],
    direction: '남쪽',
    months: [6, 9],
    avoidMonths: []
  },
  advice: {
    doThis: '창의적인 활동에 시간을 투자하세요. 협력과 나눔이 더 큰 행운을 가져다줍니다.',
    avoidThis: '혼자서 모든 것을 해결하려 하지 마세요. 완벽주의는 스트레스의 원인이 됩니다.'
  }
};

// 원숭이띠 (1968, 1980, 1992, 2004, 2016)
export const monkeyFortune: Fortune2025Data = {
  zodiac: 'monkey',
  keywords: ['기회', '지혜', '소통'],
  overallRating: 4,
  overall: '2025년은 원숭이띠에게 지혜와 재치가 빛을 발하는 해입니다. 을사년의 뱀과 원숭이는 좋은 궁합으로, 머리를 쓰는 일에서 좋은 성과를 기대할 수 있습니다. 문제 해결 능력이 인정받고, 커뮤니케이션을 통해 새로운 기회가 열립니다. 다만 너무 영리해 보이려 하지 말고 진심을 보여주는 것이 중요합니다.',
  categories: {
    career: '아이디어와 기획력이 인정받습니다. 프레젠테이션이나 협상에서 좋은 결과를 얻고, 승진이나 새로운 직책의 기회가 있습니다.',
    wealth: '재물운이 좋은 해입니다. 투자에서 좋은 수익을 기대할 수 있으나, 과욕은 금물입니다. 정보력을 활용한 재테크가 유리합니다.',
    love: '재치 있는 대화로 호감을 얻습니다. 솔로는 활발한 사교 활동에서 인연을 찾고, 커플은 대화를 통해 관계가 깊어집니다.',
    health: '두뇌 활동이 활발한 만큼 충분한 휴식이 필요합니다. 눈 건강과 수면에 신경 쓰세요.',
    study: 'IT, 금융, 마케팅 분야에서 좋은 성과를 기대할 수 있습니다. 빠른 학습 능력이 빛을 발합니다.'
  },
  monthly: [
    { month: 1, summary: '새해부터 좋은 아이디어가 떠오릅니다. 기록해두세요.', rating: 4 },
    { month: 2, summary: '네트워킹이 기회를 가져다줍니다.', rating: 4 },
    { month: 3, summary: '직장에서 인정받는 일이 생깁니다.', rating: 5 },
    { month: 4, summary: '재물운이 상승합니다.', rating: 4 },
    { month: 5, summary: '새로운 프로젝트가 시작됩니다.', rating: 4 },
    { month: 6, summary: '소통의 중요성을 느끼는 달입니다.', rating: 4 },
    { month: 7, summary: '여름 휴가로 재충전하세요.', rating: 4 },
    { month: 8, summary: '투자에서 좋은 결과가 있을 수 있습니다.', rating: 5 },
    { month: 9, summary: '인간관계가 원만해집니다.', rating: 4 },
    { month: 10, summary: '지혜로운 선택이 필요한 달입니다.', rating: 4 },
    { month: 11, summary: '안정적인 흐름이 이어집니다.', rating: 4 },
    { month: 12, summary: '성취감과 함께 한 해를 마무리합니다.', rating: 4 }
  ],
  lucky: {
    numbers: [4, 8, 9],
    colors: ['흰색', '파란색'],
    direction: '북쪽',
    months: [3, 8],
    avoidMonths: []
  },
  advice: {
    doThis: '커뮤니케이션 능력을 적극 활용하세요. 정보 수집과 네트워킹이 성공의 열쇠입니다.',
    avoidThis: '너무 계산적으로 보이는 것은 피하세요. 약속은 반드시 지키세요.'
  }
};

// 닭띠 (1969, 1981, 1993, 2005, 2017)
export const roosterFortune: Fortune2025Data = {
  zodiac: 'rooster',
  keywords: ['성실', '인정', '보상'],
  overallRating: 5,
  overall: '2025년은 닭띠에게 그동안의 성실함이 크게 보답받는 해입니다. 을사년의 뱀과 닭은 삼합의 관계로, 최고의 궁합을 이룹니다. 직장에서의 승진, 사업의 성공, 재물의 축적 등 여러 면에서 좋은 일이 일어납니다. 자신감을 가지고 적극적으로 나아가면 큰 성과를 거둘 수 있는 한 해입니다.',
  categories: {
    career: '승진이나 새로운 기회가 찾아옵니다. 그동안 묵묵히 해온 일들이 인정받고, 리더 역할을 맡게 될 수 있습니다.',
    wealth: '재물운이 매우 좋습니다. 수입이 늘고, 투자에서도 좋은 결과를 기대할 수 있습니다. 목돈이 들어올 수 있습니다.',
    love: '매력이 빛나는 해입니다. 솔로는 좋은 인연을 만나고, 커플은 결혼이나 관계 진전이 있습니다.',
    health: '전반적으로 건강하지만 바쁜 일정에 과로하지 않도록 주의하세요.',
    study: '자격증 취득이나 승진 시험에서 좋은 결과를 기대할 수 있습니다.'
  },
  monthly: [
    { month: 1, summary: '새해부터 좋은 기운이 넘칩니다. 자신감을 가지세요.', rating: 5 },
    { month: 2, summary: '직장에서 좋은 소식이 있습니다.', rating: 5 },
    { month: 3, summary: '재물운이 최고조입니다.', rating: 5 },
    { month: 4, summary: '인간관계가 원만해집니다.', rating: 4 },
    { month: 5, summary: '새로운 기회를 잡으세요.', rating: 5 },
    { month: 6, summary: '안정적인 흐름이 이어집니다.', rating: 4 },
    { month: 7, summary: '성과를 정리하고 재충전하세요.', rating: 4 },
    { month: 8, summary: '연애운이 좋습니다.', rating: 5 },
    { month: 9, summary: '큰 성과를 거두는 달입니다.', rating: 5 },
    { month: 10, summary: '감사한 일들이 많아집니다.', rating: 4 },
    { month: 11, summary: '풍요로운 한 달입니다.', rating: 4 },
    { month: 12, summary: '최고의 한 해를 마무리합니다.', rating: 5 }
  ],
  lucky: {
    numbers: [5, 7, 8],
    colors: ['금색', '갈색', '노란색'],
    direction: '서쪽',
    months: [1, 3, 5, 9],
    avoidMonths: []
  },
  advice: {
    doThis: '자신감을 가지고 적극적으로 나아가세요. 기회가 왔을 때 망설이지 마세요.',
    avoidThis: '성공에 자만하지 마세요. 주변 사람들과 나누는 자세가 더 큰 복을 부릅니다.'
  }
};

// 개띠 (1970, 1982, 1994, 2006, 2018)
export const dogFortune: Fortune2025Data = {
  zodiac: 'dog',
  keywords: ['신뢰', '안정', '인내'],
  overallRating: 3,
  overall: '2025년은 개띠에게 인내심이 필요한 해입니다. 을사년의 기운이 다소 충돌하는 면이 있어 예상치 못한 어려움이 생길 수 있습니다. 하지만 개띠 특유의 성실함과 충직함이 결국 인정받게 됩니다. 급하게 서두르지 말고 차분히 한 걸음씩 나아가면 후반기에 좋은 결과를 얻습니다.',
  categories: {
    career: '직장에서 묵묵히 맡은 일을 하는 것이 중요합니다. 화려한 성과보다는 신뢰를 쌓는 데 집중하세요. 하반기에 인정받는 일이 생깁니다.',
    wealth: '상반기는 절약이 필요합니다. 하반기부터 재물운이 회복되며, 급한 투자는 피하는 것이 좋습니다.',
    love: '기존 관계의 안정이 중요합니다. 커플은 서로에 대한 믿음이 깊어지고, 솔로는 조급해하지 않으면 좋은 인연이 찾아옵니다.',
    health: '스트레스 관리가 중요합니다. 규칙적인 생활과 충분한 수면이 건강을 지킵니다.',
    study: '장기적인 관점에서 공부를 계획하세요. 당장의 성과보다 실력을 쌓는 것이 중요합니다.'
  },
  monthly: [
    { month: 1, summary: '조심스러운 시작이 필요합니다. 계획을 철저히 세우세요.', rating: 3 },
    { month: 2, summary: '인간관계에서 오해가 생길 수 있습니다.', rating: 2 },
    { month: 3, summary: '차분히 맡은 일에 집중하세요.', rating: 3 },
    { month: 4, summary: '작은 성과가 쌓여갑니다.', rating: 3 },
    { month: 5, summary: '신뢰받는 일이 생깁니다.', rating: 4 },
    { month: 6, summary: '건강에 신경 쓰세요.', rating: 3 },
    { month: 7, summary: '운세가 상승하기 시작합니다.', rating: 4 },
    { month: 8, summary: '재물운이 좋아집니다.', rating: 4 },
    { month: 9, summary: '인정받는 일이 생깁니다.', rating: 4 },
    { month: 10, summary: '안정을 되찾는 시기입니다.', rating: 4 },
    { month: 11, summary: '가족과 따뜻한 시간을 보내세요.', rating: 4 },
    { month: 12, summary: '노력이 보답받는 연말입니다.', rating: 4 }
  ],
  lucky: {
    numbers: [3, 4, 9],
    colors: ['초록색', '빨간색'],
    direction: '동쪽',
    months: [7, 9],
    avoidMonths: [2]
  },
  advice: {
    doThis: '인내심을 가지고 꾸준히 노력하세요. 신뢰를 쌓는 것이 가장 중요합니다.',
    avoidThis: '급한 결정이나 모험은 피하세요. 남의 보증은 서지 마세요.'
  }
};

// 돼지띠 (1971, 1983, 1995, 2007, 2019)
export const pigFortune: Fortune2025Data = {
  zodiac: 'pig',
  keywords: ['풍요', '인복', '나눔'],
  overallRating: 4,
  overall: '2025년은 돼지띠에게 인복이 넘치는 풍요로운 해입니다. 주변 사람들의 도움으로 좋은 기회가 찾아오며, 나누는 만큼 더 큰 복이 돌아옵니다. 특히 상반기에 좋은 일이 많고, 하반기에는 그 성과를 안정적으로 유지하는 흐름입니다. 낙천적인 성격이 행운을 부르는 한 해입니다.',
  categories: {
    career: '동료들과의 좋은 관계가 성공으로 이어집니다. 팀 프로젝트에서 좋은 성과를 내며, 리더의 신임을 얻습니다.',
    wealth: '재물운이 좋습니다. 예상치 못한 수입이나 선물이 있을 수 있습니다. 나눔을 실천하면 더 큰 복이 돌아옵니다.',
    love: '따뜻한 인간관계가 유지됩니다. 솔로는 주변의 소개로 좋은 인연을 만나고, 커플은 행복한 시간을 보냅니다.',
    health: '전반적으로 건강하지만 과식에 주의하세요. 규칙적인 운동이 건강을 지킵니다.',
    study: '관심 있는 분야에서 좋은 성과를 기대할 수 있습니다. 즐기면서 공부하세요.'
  },
  monthly: [
    { month: 1, summary: '새해부터 좋은 기운이 가득합니다. 밝은 마음으로 시작하세요.', rating: 4 },
    { month: 2, summary: '인간관계에서 좋은 일이 생깁니다.', rating: 5 },
    { month: 3, summary: '재물운이 상승합니다.', rating: 5 },
    { month: 4, summary: '귀인의 도움이 있습니다.', rating: 5 },
    { month: 5, summary: '직장에서 인정받습니다.', rating: 4 },
    { month: 6, summary: '건강에 조금 신경 쓰세요.', rating: 3 },
    { month: 7, summary: '안정적인 흐름이 이어집니다.', rating: 4 },
    { month: 8, summary: '가족과 좋은 시간을 보내세요.', rating: 4 },
    { month: 9, summary: '풍요로운 가을을 맞이합니다.', rating: 4 },
    { month: 10, summary: '감사한 일들이 많아집니다.', rating: 4 },
    { month: 11, summary: '한 해의 성과를 정리합니다.', rating: 4 },
    { month: 12, summary: '따뜻하고 풍요로운 연말입니다.', rating: 5 }
  ],
  lucky: {
    numbers: [2, 5, 8],
    colors: ['노란색', '회색'],
    direction: '동쪽',
    months: [2, 3, 4, 12],
    avoidMonths: [6]
  },
  advice: {
    doThis: '주변 사람들과 나누는 자세를 가지세요. 인복이 재물복을 부릅니다.',
    avoidThis: '과욕은 금물입니다. 무리한 투자나 사업 확장은 피하세요.'
  }
};

// 전체 운세 데이터 맵
export const FORTUNE_2025_DATA: Record<ZodiacAnimal, Fortune2025Data> = {
  rat: ratFortune,
  ox: oxFortune,
  tiger: tigerFortune,
  rabbit: rabbitFortune,
  dragon: dragonFortune,
  snake: snakeFortune,
  horse: horseFortune,
  sheep: sheepFortune,
  monkey: monkeyFortune,
  rooster: roosterFortune,
  dog: dogFortune,
  pig: pigFortune,
};

// 띠로 운세 가져오기
export function getFortune2025(zodiac: ZodiacAnimal): Fortune2025Data {
  return FORTUNE_2025_DATA[zodiac];
}
