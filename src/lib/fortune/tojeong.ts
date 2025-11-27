// 토정비결 계산 로직
// 전통 토정비결은 음력 생년월일 기반이나, 여기서는 양력 기반으로 단순화

import { ZodiacAnimal, getZodiacByBirthDate, ZODIAC_ANIMALS } from './zodiac';

export interface TojeongGwae {
  upper: number;    // 상괘 (1-8)
  middle: number;   // 중괘 (1-8)
  lower: number;    // 하괘 (1-8)
}

export interface TojeongResult {
  gwae: TojeongGwae;
  gwaeCode: string;           // 괘 코드 (예: "3-5-7")
  gwaeName: string;           // 괘 이름
  zodiac: ZodiacAnimal;
  overallRating: number;      // 1-5
  overall: string;            // 총운 (200자)
  seasonal: {
    spring: string;           // 1-3월
    summer: string;           // 4-6월
    autumn: string;           // 7-9월
    winter: string;           // 10-12월
  };
  categories: {
    wealth: string;           // 재물운
    career: string;           // 관직/직장운
    health: string;           // 건강운
    family: string;           // 가정운
    relationship: string;     // 인간관계
  };
  monthlyKeywords: string[];  // 12개월 키워드
  advice: {
    doThis: string;
    avoidThis: string;
  };
  luckyElements: {
    direction: string;
    color: string;
    number: number;
  };
}

// 괘 계산 (생년월일 기반)
export function calculateGwae(birthDate: string): TojeongGwae {
  const cleaned = birthDate.replace(/-/g, '');
  const year = parseInt(cleaned.substring(0, 4), 10);
  const month = parseInt(cleaned.substring(4, 6), 10);
  const day = parseInt(cleaned.substring(6, 8), 10);
  
  // 상괘: 출생년도 기반 (1-8)
  const upper = ((year % 8) || 8);
  
  // 중괘: 출생월 기반 (1-8)
  const middle = ((month % 8) || 8);
  
  // 하괘: 출생일 기반 (1-8)
  const lower = ((day % 8) || 8);
  
  return { upper, middle, lower };
}

// 괘 코드 생성
export function getGwaeCode(gwae: TojeongGwae): string {
  return `${gwae.upper}-${gwae.middle}-${gwae.lower}`;
}

// 괘 이름 (8괘 기반)
const GWAE_NAMES = [
  '', '건(乾)', '태(兌)', '리(離)', '진(震)',
  '손(巽)', '감(坎)', '간(艮)', '곤(坤)'
];

export function getGwaeName(gwae: TojeongGwae): string {
  return `${GWAE_NAMES[gwae.upper]}${GWAE_NAMES[gwae.middle]}${GWAE_NAMES[gwae.lower]}`;
}

// 총합으로 운세 등급 계산
function calculateRating(gwae: TojeongGwae): number {
  const sum = gwae.upper + gwae.middle + gwae.lower;
  if (sum >= 20) return 5;
  if (sum >= 16) return 4;
  if (sum >= 12) return 3;
  if (sum >= 8) return 2;
  return 1;
}

// 토정비결 결과 생성
export function generateTojeongResult(birthDate: string): TojeongResult {
  const gwae = calculateGwae(birthDate);
  const gwaeCode = getGwaeCode(gwae);
  const gwaeName = getGwaeName(gwae);
  const zodiac = getZodiacByBirthDate(birthDate);
  const rating = calculateRating(gwae);
  
  // 괘 조합에 따른 결과 생성
  const result = generateInterpretation(gwae, zodiac, rating);
  
  return {
    gwae,
    gwaeCode,
    gwaeName,
    zodiac,
    overallRating: rating,
    ...result
  };
}

// 해석 생성 함수
function generateInterpretation(
  gwae: TojeongGwae, 
  zodiac: ZodiacAnimal, 
  rating: number
) {
  const zodiacInfo = ZODIAC_ANIMALS[zodiac];
  
  // 상괘별 기본 운세 톤
  const upperTones = {
    1: { tone: '강건', element: '하늘', nature: '적극적이고 리더십이 강한' },
    2: { tone: '기쁨', element: '연못', nature: '소통과 화합을 중시하는' },
    3: { tone: '밝음', element: '불', nature: '열정적이고 창의적인' },
    4: { tone: '움직임', element: '우레', nature: '변화와 새로움을 추구하는' },
    5: { tone: '순응', element: '바람', nature: '유연하고 적응력이 강한' },
    6: { tone: '깊음', element: '물', nature: '지혜롭고 신중한' },
    7: { tone: '그침', element: '산', nature: '안정과 성실을 중시하는' },
    8: { tone: '포용', element: '땅', nature: '너그럽고 인내심이 강한' },
  };
  
  // 중괘별 계절 영향
  const middleSeasons = {
    1: { strong: 'spring', weak: 'winter' },
    2: { strong: 'autumn', weak: 'spring' },
    3: { strong: 'summer', weak: 'autumn' },
    4: { strong: 'spring', weak: 'summer' },
    5: { strong: 'spring', weak: 'winter' },
    6: { strong: 'winter', weak: 'summer' },
    7: { strong: 'winter', weak: 'spring' },
    8: { strong: 'summer', weak: 'winter' },
  };
  
  // 하괘별 행운 요소
  const lowerLucky = {
    1: { direction: '서북', color: '금색', number: 1 },
    2: { direction: '서', color: '흰색', number: 2 },
    3: { direction: '남', color: '빨간색', number: 3 },
    4: { direction: '동', color: '초록색', number: 4 },
    5: { direction: '동남', color: '연두색', number: 5 },
    6: { direction: '북', color: '검정색', number: 6 },
    7: { direction: '동북', color: '노란색', number: 7 },
    8: { direction: '남서', color: '갈색', number: 8 },
  };

  const upper = upperTones[gwae.upper as keyof typeof upperTones];
  const middle = middleSeasons[gwae.middle as keyof typeof middleSeasons];
  const lower = lowerLucky[gwae.lower as keyof typeof lowerLucky];

  // 등급별 총운 문구
  const overallByRating: Record<number, string> = {
    5: `2025년 을사년은 ${zodiacInfo.name}에게 대길(大吉)의 해입니다. ${upper.element}의 기운과 ${upper.tone}의 덕이 함께하여 모든 일이 순조롭게 풀립니다. 특히 ${middle.strong === 'spring' ? '봄' : middle.strong === 'summer' ? '여름' : middle.strong === 'autumn' ? '가을' : '겨울'}에 큰 행운이 따르니, 이 시기에 중요한 일을 추진하면 좋습니다. 귀인의 도움이 있고, 노력한 만큼의 결실을 맺는 풍요로운 한 해가 될 것입니다.`,
    4: `2025년 을사년은 ${zodiacInfo.name}에게 중길(中吉)의 해입니다. ${upper.nature} 기질이 좋은 방향으로 발휘되어 안정적인 성과를 기대할 수 있습니다. 상반기에 기초를 다지고 하반기에 수확을 거두는 흐름이니, 조급해하지 말고 차근차근 나아가세요. 인간관계에서 좋은 인연이 찾아오며, 재물운도 보통 이상입니다.`,
    3: `2025년 을사년은 ${zodiacInfo.name}에게 평운(平運)의 해입니다. 큰 기복 없이 안정적인 흐름이 이어지나, 특별한 행운을 기대하기보다는 현재의 것을 잘 지키는 데 집중해야 합니다. ${upper.element}의 기운이 함께하니 ${upper.tone}의 자세로 일상을 꾸려가면 무난하게 한 해를 보낼 수 있습니다.`,
    2: `2025년 을사년은 ${zodiacInfo.name}에게 소흉(小凶)의 해입니다. 예상치 못한 변수가 생기거나 계획대로 일이 풀리지 않을 수 있습니다. 하지만 큰 어려움은 아니니 침착하게 대응하면 됩니다. 특히 ${middle.weak === 'spring' ? '봄' : middle.weak === 'summer' ? '여름' : middle.weak === 'autumn' ? '가을' : '겨울'}에는 신중함이 필요하며, 무리한 확장보다는 현상 유지에 힘쓰세요.`,
    1: `2025년 을사년은 ${zodiacInfo.name}에게 주의가 필요한 해입니다. 운세의 흐름이 다소 막히는 시기이니 새로운 시작보다는 내실을 다지는 데 집중하세요. 그러나 어려움 속에서도 ${upper.tone}의 덕을 발휘하면 위기를 기회로 바꿀 수 있습니다. 건강과 안전에 특히 유의하고, 주변의 조언에 귀 기울이세요.`
  };

  // 계절별 운세
  const seasonalFortunes = generateSeasonalFortunes(gwae, rating, middle);
  
  // 분야별 운세
  const categories = generateCategories(gwae, rating);
  
  // 월별 키워드
  const monthlyKeywords = generateMonthlyKeywords(gwae, rating);
  
  // 조언
  const advice = generateAdvice(gwae, rating, upper);

  return {
    overall: overallByRating[rating],
    seasonal: seasonalFortunes,
    categories,
    monthlyKeywords,
    advice,
    luckyElements: lower
  };
}

// 계절별 운세 생성
function generateSeasonalFortunes(
  _gwae: TojeongGwae, 
  _rating: number,
  middle: { strong: string; weak: string }
) {
  return {
    spring: middle.strong === 'spring' 
      ? '봄의 기운이 강하게 작용하여 새로운 시작에 유리합니다. 계획했던 일을 추진하기 좋고, 인간관계에서도 좋은 인연이 찾아옵니다.'
      : middle.weak === 'spring'
      ? '봄철에는 신중함이 필요합니다. 급한 결정은 피하고, 건강 관리에 신경 쓰세요. 차분히 기다리면 좋은 기회가 옵니다.'
      : '봄은 평온한 흐름이 이어집니다. 특별한 변화보다는 일상의 안정을 유지하며 내실을 다지세요.',
    
    summer: middle.strong === 'summer'
      ? '여름의 열기와 함께 운세도 상승합니다. 적극적인 활동이 좋은 결과로 이어지며, 재물운도 좋아지는 시기입니다.'
      : middle.weak === 'summer'
      ? '여름에는 건강과 안전에 주의하세요. 무리한 활동을 피하고, 휴식을 충분히 취하면 후반기에 회복됩니다.'
      : '여름은 보통의 흐름입니다. 꾸준히 하던 일을 이어가면 가을에 결실을 볼 수 있습니다.',
    
    autumn: middle.strong === 'autumn'
      ? '가을은 수확의 계절로, 그동안의 노력이 결실을 맺습니다. 재물운이 좋고, 인정받는 일이 생깁니다.'
      : middle.weak === 'autumn'
      ? '가을에는 욕심을 버리고 현재에 만족하세요. 무리한 투자나 확장은 피하고, 안정을 추구하면 무난합니다.'
      : '가을은 안정적인 흐름이 이어집니다. 가족과의 시간을 소중히 하고, 감사하는 마음을 가지세요.',
    
    winter: middle.strong === 'winter'
      ? '겨울은 내면의 성장에 좋은 시기입니다. 한 해를 정리하며 다음 해를 준비하면, 새해에 더 큰 도약이 있습니다.'
      : middle.weak === 'winter'
      ? '겨울에는 건강에 특히 주의하세요. 보온에 신경 쓰고, 무리한 일정은 피하세요. 따뜻한 사람들과 함께하면 위안이 됩니다.'
      : '겨울은 차분히 마무리하는 시기입니다. 한 해를 돌아보며 감사함을 느끼고, 새해 계획을 세우세요.'
  };
}

// 분야별 운세 생성
function generateCategories(
  gwae: TojeongGwae, 
  rating: number
) {
  const wealthRating = ((gwae.lower + gwae.middle) % 5) + 1;
  const careerRating = ((gwae.upper + gwae.middle) % 5) + 1;
  const healthRating = ((gwae.upper + gwae.lower) % 5) + 1;
  
  return {
    wealth: wealthRating >= 4 
      ? '재물운이 좋습니다. 꾸준한 수입이 보장되고, 예상치 못한 횡재수도 있습니다. 다만 과욕은 금물이며, 저축과 투자의 균형을 맞추세요.'
      : wealthRating >= 3
      ? '재물운은 보통 수준입니다. 큰 이익보다는 안정적인 관리가 중요합니다. 충동적인 소비를 줄이고 계획적으로 운영하세요.'
      : '재물운에 주의가 필요합니다. 큰 투자나 보증은 피하고, 절약하는 자세가 필요합니다. 하반기에 회복 기미가 보입니다.',
    
    career: careerRating >= 4
      ? '직장운이 좋습니다. 승진이나 새로운 기회가 찾아오며, 상사나 동료의 인정을 받습니다. 자신감을 가지고 적극적으로 나서세요.'
      : careerRating >= 3
      ? '직장운은 평온합니다. 급격한 변화보다는 현재 위치에서 실력을 쌓는 것이 좋습니다. 꾸준함이 신뢰를 쌓습니다.'
      : '직장에서 어려움이 있을 수 있습니다. 인내심을 가지고, 묵묵히 맡은 일을 해내면 나중에 인정받게 됩니다.',
    
    health: healthRating >= 4
      ? '건강운이 좋습니다. 활력이 넘치고 큰 탈 없이 한 해를 보낼 수 있습니다. 규칙적인 운동으로 체력을 유지하세요.'
      : healthRating >= 3
      ? '건강은 무난합니다. 다만 과로나 스트레스에 주의하고, 균형 잡힌 식사와 충분한 수면을 챙기세요.'
      : '건강에 신경 써야 합니다. 정기 검진을 받고, 무리한 활동은 피하세요. 특히 환절기에 주의가 필요합니다.',
    
    family: rating >= 3
      ? '가정에 화목한 기운이 흐릅니다. 가족과의 대화가 늘고, 함께하는 시간이 행복을 줍니다. 경조사가 있을 수 있습니다.'
      : '가정 내 소소한 갈등이 있을 수 있으나, 대화로 풀어나갈 수 있습니다. 서로에 대한 이해와 배려가 필요합니다.',
    
    relationship: rating >= 3
      ? '인간관계가 원만합니다. 새로운 인연이 좋은 영향을 주고, 기존 관계도 깊어집니다. 귀인이 나타날 수 있으니 만남에 열린 마음을 가지세요.'
      : '인간관계에서 오해가 생길 수 있습니다. 말과 행동을 신중히 하고, 작은 것에 너무 예민하게 반응하지 마세요.'
  };
}

// 월별 키워드 생성
function generateMonthlyKeywords(gwae: TojeongGwae, rating: number): string[] {
  const positiveWords = ['순조', '발전', '기회', '행운', '성과', '화합', '안정', '풍요', '만남', '성공', '희망', '감사'];
  const neutralWords = ['평온', '유지', '준비', '계획', '정리', '휴식', '반성', '조율', '대기', '관망', '절제', '성찰'];
  const cautionWords = ['신중', '인내', '절약', '주의', '조심', '보류', '재고', '점검', '양보', '회피', '대비', '보수'];
  
  const keywords: string[] = [];
  
  for (let i = 0; i < 12; i++) {
    const monthScore = (gwae.upper + gwae.middle + gwae.lower + i) % 10;
    
    if (monthScore >= 7 || (rating >= 4 && monthScore >= 5)) {
      keywords.push(positiveWords[i]);
    } else if (monthScore >= 4 || rating >= 3) {
      keywords.push(neutralWords[i]);
    } else {
      keywords.push(cautionWords[i]);
    }
  }
  
  return keywords;
}

// 조언 생성
function generateAdvice(
  gwae: TojeongGwae, 
  rating: number,
  upper: { tone: string; element: string; nature: string }
) {
  const doThisOptions = [
    `${upper.tone}의 기운을 살려 꾸준히 노력하세요. 작은 성공이 쌓여 큰 성취가 됩니다.`,
    `인간관계를 소중히 여기세요. 귀인이 나타나 도움을 줄 수 있습니다.`,
    `새로운 것을 배우고 자기계발에 힘쓰세요. 내년을 위한 투자가 됩니다.`,
    `건강을 최우선으로 챙기세요. 건강해야 모든 일이 가능합니다.`,
    `가족과의 시간을 늘리세요. 가정의 화목이 모든 복의 근원입니다.`
  ];
  
  const avoidThisOptions = [
    `급한 결정이나 충동적인 행동은 피하세요. 신중함이 필요합니다.`,
    `남의 일에 깊이 관여하거나 보증 서는 것을 피하세요.`,
    `과욕을 부리거나 무리한 확장은 삼가세요.`,
    `말조심하고, 분쟁이나 다툼에 휘말리지 마세요.`,
    `건강을 소홀히 하거나 과로하지 마세요.`
  ];
  
  const doIndex = (gwae.upper + rating) % 5;
  const avoidIndex = (gwae.lower + rating) % 5;
  
  return {
    doThis: doThisOptions[doIndex],
    avoidThis: avoidThisOptions[avoidIndex]
  };
}
