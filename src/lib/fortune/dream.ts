// 꿈해몽 - 키워드 선택형
// 꿈에 나온 요소들을 선택하면 종합 해석 제공

export interface DreamCategory {
  id: string;
  name: string;
  emoji: string;
  keywords: DreamKeyword[];
}

export interface DreamKeyword {
  id: string;
  name: string;
  meaning: string;           // 기본 해석
  fortune: 'great' | 'good' | 'neutral' | 'caution';  // 길흉
  areas: {
    wealth?: string;         // 재물운 관련 해석
    love?: string;           // 연애운 관련 해석
    career?: string;         // 직장운 관련 해석
    health?: string;         // 건강운 관련 해석
  };
  luckyNumber?: number;
}

export interface DreamResult {
  selectedKeywords: DreamKeyword[];
  overallFortune: 'great' | 'good' | 'neutral' | 'caution';
  overallRating: number;     // 1-5
  summary: string;           // 종합 해석
  detailedMeaning: string;   // 상세 해석
  categories: {
    wealth: string;
    love: string;
    career: string;
    health: string;
  };
  advice: string;
  luckyNumbers: number[];
  luckyColor: string;
}

// 꿈 키워드 카테고리
export const DREAM_CATEGORIES: DreamCategory[] = [
  {
    id: 'animals',
    name: '동물',
    emoji: '🐾',
    keywords: [
      { id: 'dragon', name: '용', meaning: '권력, 성공, 출세의 상징으로 매우 좋은 꿈입니다.', fortune: 'great', areas: { wealth: '큰 재물이 들어옵니다', career: '승진이나 성공이 가까워졌습니다' }, luckyNumber: 1 },
      { id: 'snake', name: '뱀', meaning: '재물과 지혜의 상징입니다. 뱀이 집에 들어오면 재물이 들어옵니다.', fortune: 'good', areas: { wealth: '예상치 못한 수입이 있습니다', love: '새로운 인연이 나타납니다' }, luckyNumber: 6 },
      { id: 'tiger', name: '호랑이', meaning: '권위와 힘의 상징입니다. 호랑이를 타면 높은 지위에 오릅니다.', fortune: 'great', areas: { career: '큰 기회가 찾아옵니다', wealth: '사업 번창을 암시합니다' }, luckyNumber: 3 },
      { id: 'pig', name: '돼지', meaning: '재물과 풍요의 상징입니다. 돼지가 나오면 금전운이 좋아집니다.', fortune: 'great', areas: { wealth: '뜻밖의 횡재가 있습니다', career: '노력의 결실을 봅니다' }, luckyNumber: 8 },
      { id: 'fish', name: '물고기', meaning: '재물과 성공을 상징합니다. 물고기를 잡으면 큰 이익이 있습니다.', fortune: 'good', areas: { wealth: '재물운이 상승합니다', love: '좋은 인연을 만납니다' }, luckyNumber: 7 },
      { id: 'bird', name: '새', meaning: '자유와 소식을 상징합니다. 좋은 소식이 찾아올 수 있습니다.', fortune: 'good', areas: { career: '좋은 소식이 있습니다', love: '연락이 오길 기대할 수 있습니다' }, luckyNumber: 4 },
      { id: 'dog', name: '개', meaning: '충성과 우정을 상징합니다. 진실한 친구나 조력자가 나타납니다.', fortune: 'good', areas: { love: '믿을 수 있는 인연입니다', career: '좋은 동료를 만납니다' }, luckyNumber: 5 },
      { id: 'cow', name: '소', meaning: '근면과 재물의 상징입니다. 노력이 결실을 맺습니다.', fortune: 'good', areas: { wealth: '꾸준한 수입이 보장됩니다', career: '성실함이 인정받습니다' }, luckyNumber: 2 },
      { id: 'horse', name: '말', meaning: '발전과 성공을 상징합니다. 말을 타면 목표를 이룹니다.', fortune: 'good', areas: { career: '빠른 발전이 있습니다', wealth: '투자가 성공합니다' }, luckyNumber: 9 },
      { id: 'rat', name: '쥐', meaning: '재물과 자손의 상징입니다. 다산과 번성을 의미합니다.', fortune: 'neutral', areas: { wealth: '작은 이익이 있습니다', health: '건강에 신경 쓰세요' }, luckyNumber: 1 },
    ]
  },
  {
    id: 'nature',
    name: '자연/날씨',
    emoji: '🌿',
    keywords: [
      { id: 'water', name: '물/강', meaning: '재물과 감정의 흐름을 상징합니다. 맑은 물은 좋은 징조입니다.', fortune: 'good', areas: { wealth: '재물이 흘러들어옵니다', love: '감정이 풍요로워집니다' }, luckyNumber: 6 },
      { id: 'fire', name: '불', meaning: '열정과 변화를 상징합니다. 불이 밝으면 길몽입니다.', fortune: 'good', areas: { career: '열정이 성공으로 이어집니다', love: '뜨거운 사랑이 시작됩니다' }, luckyNumber: 3 },
      { id: 'mountain', name: '산', meaning: '목표와 성취를 상징합니다. 산에 오르면 목표를 이룹니다.', fortune: 'good', areas: { career: '높은 목표를 달성합니다', wealth: '큰 성과가 있습니다' }, luckyNumber: 7 },
      { id: 'sun', name: '해/태양', meaning: '성공과 명예의 상징입니다. 떠오르는 해는 대길몽입니다.', fortune: 'great', areas: { career: '승진과 성공이 기다립니다', wealth: '밝은 미래가 펼쳐집니다' }, luckyNumber: 1 },
      { id: 'moon', name: '달', meaning: '여성, 감성, 직관을 상징합니다. 보름달은 소원 성취입니다.', fortune: 'good', areas: { love: '연애운이 좋아집니다', health: '마음의 평화를 찾습니다' }, luckyNumber: 2 },
      { id: 'star', name: '별', meaning: '희망과 소원을 상징합니다. 별이 밝으면 소원이 이루어집니다.', fortune: 'good', areas: { love: '좋은 인연이 나타납니다', career: '희망이 현실이 됩니다' }, luckyNumber: 5 },
      { id: 'rain', name: '비', meaning: '정화와 새로운 시작을 상징합니다. 비 온 뒤 맑음처럼 좋아집니다.', fortune: 'neutral', areas: { wealth: '일시적 어려움 후 회복', health: '몸과 마음을 정화하세요' }, luckyNumber: 4 },
      { id: 'rainbow', name: '무지개', meaning: '행운과 축복의 상징입니다. 무지개를 보면 좋은 일이 생깁니다.', fortune: 'great', areas: { love: '아름다운 인연을 만납니다', wealth: '행운이 찾아옵니다' }, luckyNumber: 7 },
      { id: 'flower', name: '꽃', meaning: '행복과 사랑을 상징합니다. 꽃이 피면 기쁜 일이 생깁니다.', fortune: 'good', areas: { love: '연애 운이 좋습니다', health: '건강해집니다' }, luckyNumber: 8 },
      { id: 'tree', name: '나무', meaning: '성장과 발전을 상징합니다. 큰 나무는 안정과 성공입니다.', fortune: 'good', areas: { career: '꾸준한 성장이 있습니다', wealth: '재물이 쌓입니다' }, luckyNumber: 3 },
    ]
  },
  {
    id: 'objects',
    name: '물건/사물',
    emoji: '💎',
    keywords: [
      { id: 'gold', name: '금/보석', meaning: '재물과 가치의 상징입니다. 금을 얻으면 큰 재물이 들어옵니다.', fortune: 'great', areas: { wealth: '큰 재물운이 있습니다', career: '가치를 인정받습니다' }, luckyNumber: 8 },
      { id: 'money', name: '돈', meaning: '재물과 풍요를 상징합니다. 돈을 얻으면 실제로 재물이 들어옵니다.', fortune: 'great', areas: { wealth: '예상치 못한 수입이 있습니다', career: '보상을 받습니다' }, luckyNumber: 8 },
      { id: 'ring', name: '반지', meaning: '약속과 인연을 상징합니다. 반지를 끼면 좋은 인연이 있습니다.', fortune: 'good', areas: { love: '결혼이나 약속이 이루어집니다', wealth: '귀한 것을 얻습니다' }, luckyNumber: 2 },
      { id: 'clothes', name: '옷', meaning: '새 옷은 새로운 시작, 좋은 변화를 의미합니다.', fortune: 'good', areas: { career: '새로운 기회가 옵니다', love: '이미지가 좋아집니다' }, luckyNumber: 5 },
      { id: 'car', name: '자동차', meaning: '능력과 지위를 상징합니다. 좋은 차는 성공을 의미합니다.', fortune: 'good', areas: { career: '능력을 인정받습니다', wealth: '재물이 늘어납니다' }, luckyNumber: 4 },
      { id: 'house', name: '집', meaning: '안정과 가정을 상징합니다. 새 집은 새로운 시작입니다.', fortune: 'good', areas: { wealth: '부동산 운이 좋습니다', love: '가정이 화목해집니다' }, luckyNumber: 6 },
      { id: 'key', name: '열쇠', meaning: '기회와 해결을 상징합니다. 열쇠를 얻으면 문제가 풀립니다.', fortune: 'good', areas: { career: '기회가 열립니다', wealth: '길이 열립니다' }, luckyNumber: 1 },
      { id: 'book', name: '책', meaning: '지혜와 배움을 상징합니다. 시험 합격이나 학업 성공을 암시합니다.', fortune: 'good', areas: { career: '시험에 합격합니다', wealth: '지식이 재물이 됩니다' }, luckyNumber: 4 },
      { id: 'mirror', name: '거울', meaning: '자아 성찰을 상징합니다. 맑은 거울은 진실을 봅니다.', fortune: 'neutral', areas: { love: '자신을 돌아보세요', health: '마음을 살피세요' }, luckyNumber: 9 },
      { id: 'food', name: '음식', meaning: '풍요와 만족을 상징합니다. 맛있는 음식은 행복을 의미합니다.', fortune: 'good', areas: { wealth: '풍요로워집니다', health: '건강해집니다' }, luckyNumber: 3 },
    ]
  },
  {
    id: 'people',
    name: '사람/관계',
    emoji: '👥',
    keywords: [
      { id: 'baby', name: '아기', meaning: '새로운 시작과 희망을 상징합니다. 아기가 나오면 좋은 일이 시작됩니다.', fortune: 'great', areas: { love: '새 생명의 소식이 있습니다', career: '새로운 시작이 축복받습니다' }, luckyNumber: 1 },
      { id: 'deceased', name: '돌아가신 분', meaning: '조상의 보호와 메시지를 의미합니다. 좋은 소식을 전해줍니다.', fortune: 'good', areas: { wealth: '조상의 도움이 있습니다', health: '보호받고 있습니다' }, luckyNumber: 9 },
      { id: 'celebrity', name: '유명인', meaning: '인정과 성공을 상징합니다. 자신도 인정받게 됩니다.', fortune: 'good', areas: { career: '유명해지거나 인정받습니다', love: '매력이 높아집니다' }, luckyNumber: 5 },
      { id: 'stranger', name: '낯선 사람', meaning: '새로운 인연이나 기회를 상징합니다.', fortune: 'neutral', areas: { love: '새로운 만남이 있습니다', career: '새로운 기회가 옵니다' }, luckyNumber: 7 },
      { id: 'friend', name: '친구', meaning: '도움과 우정을 상징합니다. 친구의 도움을 받게 됩니다.', fortune: 'good', areas: { love: '좋은 인연으로 발전합니다', career: '협력이 성공을 가져옵니다' }, luckyNumber: 3 },
      { id: 'enemy', name: '적/원수', meaning: '갈등의 해결을 의미합니다. 화해하면 문제가 풀립니다.', fortune: 'neutral', areas: { career: '경쟁에서 이깁니다', health: '스트레스를 해소하세요' }, luckyNumber: 4 },
      { id: 'lover', name: '연인', meaning: '사랑과 관계를 상징합니다. 연인이 나오면 연애운이 좋습니다.', fortune: 'good', areas: { love: '사랑이 깊어집니다', career: '파트너와 협력하세요' }, luckyNumber: 2 },
      { id: 'parents', name: '부모님', meaning: '보호와 지지를 상징합니다. 가족의 도움이 있습니다.', fortune: 'good', areas: { wealth: '가족의 도움이 있습니다', health: '가족 건강에 신경 쓰세요' }, luckyNumber: 6 },
    ]
  },
  {
    id: 'actions',
    name: '행동/상황',
    emoji: '🎬',
    keywords: [
      { id: 'flying', name: '날기', meaning: '자유와 성취를 상징합니다. 높이 날면 목표를 이룹니다.', fortune: 'great', areas: { career: '높은 목표를 달성합니다', wealth: '크게 성공합니다' }, luckyNumber: 1 },
      { id: 'falling', name: '떨어지기', meaning: '불안과 변화를 상징합니다. 착지하면 문제가 해결됩니다.', fortune: 'neutral', areas: { health: '안정이 필요합니다', career: '변화에 대비하세요' }, luckyNumber: 4 },
      { id: 'running', name: '달리기', meaning: '노력과 추진을 상징합니다. 목표를 향해 달리고 있습니다.', fortune: 'good', areas: { career: '목표에 가까워집니다', health: '에너지가 넘칩니다' }, luckyNumber: 3 },
      { id: 'swimming', name: '수영', meaning: '감정과 재물의 흐름을 상징합니다.', fortune: 'good', areas: { wealth: '재물이 흘러들어옵니다', love: '감정이 풍요로워집니다' }, luckyNumber: 6 },
      { id: 'eating', name: '먹기', meaning: '흡수와 성장을 상징합니다. 맛있게 먹으면 좋은 일이 생깁니다.', fortune: 'good', areas: { wealth: '풍요가 찾아옵니다', health: '건강해집니다' }, luckyNumber: 8 },
      { id: 'crying', name: '울기', meaning: '정화와 해소를 상징합니다. 슬픔 뒤에 기쁨이 옵니다.', fortune: 'neutral', areas: { health: '감정을 해소하세요', love: '진심이 전해집니다' }, luckyNumber: 9 },
      { id: 'laughing', name: '웃기', meaning: '행복과 만족을 상징합니다. 웃으면 좋은 일이 생깁니다.', fortune: 'good', areas: { love: '행복한 시간이 옵니다', health: '스트레스가 해소됩니다' }, luckyNumber: 7 },
      { id: 'wedding', name: '결혼식', meaning: '결합과 새로운 시작을 상징합니다. 좋은 인연이 맺어집니다.', fortune: 'great', areas: { love: '결혼이나 약속이 이루어집니다', wealth: '경사가 있습니다' }, luckyNumber: 2 },
      { id: 'death', name: '죽음', meaning: '끝과 새로운 시작을 상징합니다. 역설적으로 새 출발을 의미합니다.', fortune: 'neutral', areas: { career: '새로운 시작이 있습니다', wealth: '과거를 정리하세요' }, luckyNumber: 9 },
      { id: 'chase', name: '쫓기기', meaning: '불안과 도전을 상징합니다. 도망치면 문제를 피하고 있습니다.', fortune: 'caution', areas: { health: '스트레스를 관리하세요', career: '문제를 직면하세요' }, luckyNumber: 4 },
    ]
  },
  {
    id: 'places',
    name: '장소',
    emoji: '🏛️',
    keywords: [
      { id: 'school', name: '학교', meaning: '배움과 성장을 상징합니다. 시험 합격이나 발전을 암시합니다.', fortune: 'good', areas: { career: '학습이 성공으로 이어집니다', wealth: '노력이 결실을 맺습니다' }, luckyNumber: 4 },
      { id: 'hospital', name: '병원', meaning: '치유와 회복을 상징합니다. 건강에 신경 써야 합니다.', fortune: 'neutral', areas: { health: '건강 검진을 받으세요', wealth: '건강이 재물보다 중요합니다' }, luckyNumber: 6 },
      { id: 'temple', name: '절/교회', meaning: '영적 성장과 평화를 상징합니다. 마음의 안정을 찾습니다.', fortune: 'good', areas: { health: '마음의 평화를 찾습니다', love: '진심이 전해집니다' }, luckyNumber: 9 },
      { id: 'office', name: '회사/사무실', meaning: '일과 성과를 상징합니다. 직장에서 좋은 일이 생깁니다.', fortune: 'good', areas: { career: '업무에서 성과를 냅니다', wealth: '수입이 늘어납니다' }, luckyNumber: 5 },
      { id: 'home', name: '집', meaning: '안정과 가정을 상징합니다. 가정의 화목을 의미합니다.', fortune: 'good', areas: { love: '가정이 화목합니다', wealth: '안정적인 기반이 됩니다' }, luckyNumber: 6 },
      { id: 'ocean', name: '바다', meaning: '무한한 가능성을 상징합니다. 넓은 바다는 큰 기회입니다.', fortune: 'good', areas: { career: '큰 기회가 열립니다', wealth: '무한한 가능성이 있습니다' }, luckyNumber: 7 },
    ]
  }
];

// 길흉 점수
const FORTUNE_SCORES = {
  great: 5,
  good: 4,
  neutral: 3,
  caution: 2
};

// 꿈 해몽 결과 생성
export function generateDreamInterpretation(selectedIds: string[]): DreamResult {
  // 선택된 키워드 찾기
  const selectedKeywords: DreamKeyword[] = [];
  
  for (const category of DREAM_CATEGORIES) {
    for (const keyword of category.keywords) {
      if (selectedIds.includes(keyword.id)) {
        selectedKeywords.push(keyword);
      }
    }
  }
  
  if (selectedKeywords.length === 0) {
    throw new Error('선택된 키워드가 없습니다');
  }
  
  // 전체 운세 계산
  const totalScore = selectedKeywords.reduce(
    (sum, kw) => sum + FORTUNE_SCORES[kw.fortune], 
    0
  );
  const avgScore = totalScore / selectedKeywords.length;
  
  let overallFortune: 'great' | 'good' | 'neutral' | 'caution';
  let overallRating: number;
  
  if (avgScore >= 4.5) {
    overallFortune = 'great';
    overallRating = 5;
  } else if (avgScore >= 3.8) {
    overallFortune = 'good';
    overallRating = 4;
  } else if (avgScore >= 3) {
    overallFortune = 'neutral';
    overallRating = 3;
  } else {
    overallFortune = 'caution';
    overallRating = 2;
  }
  
  // 종합 요약 생성
  const summary = generateSummary(selectedKeywords, overallFortune);
  
  // 상세 해석 생성
  const detailedMeaning = generateDetailedMeaning(selectedKeywords);
  
  // 분야별 해석 종합
  const categories = generateCategoryInterpretations(selectedKeywords);
  
  // 조언 생성
  const advice = generateAdvice(selectedKeywords, overallFortune);
  
  // 행운의 숫자
  const luckyNumberSet = new Set(
    selectedKeywords
      .filter(kw => kw.luckyNumber)
      .map(kw => kw.luckyNumber!)
  );
  const luckyNumbers = Array.from(luckyNumberSet).slice(0, 3);
  
  // 행운의 색상
  const luckyColor = getLuckyColor(overallFortune);
  
  return {
    selectedKeywords,
    overallFortune,
    overallRating,
    summary,
    detailedMeaning,
    categories,
    advice,
    luckyNumbers,
    luckyColor
  };
}

// 종합 요약 생성
function generateSummary(keywords: DreamKeyword[], fortune: string): string {
  const keywordNames = keywords.map(k => k.name).join(', ');
  
  switch (fortune) {
    case 'great':
      return `꿈에 ${keywordNames}이(가) 나타났군요! 이 꿈은 매우 좋은 길몽입니다. 가까운 시일 내에 좋은 소식이 찾아오거나, 오래된 소원이 이루어질 수 있습니다. 자신감을 가지고 적극적으로 행동하면 더 큰 행운이 따를 것입니다.`;
    case 'good':
      return `꿈에 ${keywordNames}이(가) 나타났군요. 전반적으로 좋은 의미를 가진 꿈입니다. 현재 진행 중인 일이 순조롭게 풀리거나, 새로운 기회가 찾아올 수 있습니다. 긍정적인 마음으로 하루를 시작하세요.`;
    case 'neutral':
      return `꿈에 ${keywordNames}이(가) 나타났군요. 이 꿈은 변화나 전환을 암시하는 중립적인 의미를 가집니다. 큰 걱정은 필요 없으며, 현재 상황을 돌아보고 새로운 방향을 모색해보세요.`;
    case 'caution':
      return `꿈에 ${keywordNames}이(가) 나타났군요. 이 꿈은 주의나 대비를 요하는 메시지를 담고 있습니다. 하지만 꿈은 경고이자 조언이니, 미리 대비하면 어려움을 피할 수 있습니다.`;
    default:
      return `꿈에 ${keywordNames}이(가) 나타났습니다.`;
  }
}

// 상세 해석 생성
function generateDetailedMeaning(keywords: DreamKeyword[]): string {
  const meanings = keywords.map(kw => 
    `• ${kw.name}: ${kw.meaning}`
  ).join('\n\n');
  
  return `선택하신 꿈의 요소들을 하나씩 살펴보겠습니다.\n\n${meanings}`;
}

// 분야별 해석 종합
function generateCategoryInterpretations(keywords: DreamKeyword[]) {
  const collectInterp = (area: 'wealth' | 'love' | 'career' | 'health') => {
    const interps = keywords
      .filter(kw => kw.areas[area])
      .map(kw => kw.areas[area]!);
    
    if (interps.length === 0) {
      return getDefaultInterpretation(area);
    }
    
    return interps.join(' ') + ' ' + getAreaAdvice(area, interps.length);
  };
  
  return {
    wealth: collectInterp('wealth'),
    love: collectInterp('love'),
    career: collectInterp('career'),
    health: collectInterp('health')
  };
}

// 기본 해석
function getDefaultInterpretation(area: string): string {
  switch (area) {
    case 'wealth':
      return '재물운은 평온합니다. 큰 변화보다는 현재의 안정을 유지하세요.';
    case 'love':
      return '연애운은 보통입니다. 자연스러운 만남에 열린 마음을 가지세요.';
    case 'career':
      return '직장운은 무난합니다. 꾸준히 노력하면 인정받게 됩니다.';
    case 'health':
      return '건강운은 평온합니다. 규칙적인 생활을 유지하세요.';
    default:
      return '평온한 흐름이 이어집니다.';
  }
}

// 분야별 추가 조언
function getAreaAdvice(area: string, count: number): string {
  if (count >= 3) {
    switch (area) {
      case 'wealth': return '여러 요소가 재물운을 강하게 암시하니 기대해도 좋습니다.';
      case 'love': return '연애운이 매우 좋으니 적극적으로 나서세요.';
      case 'career': return '직장운이 강하게 나타나니 자신감을 가지세요.';
      case 'health': return '건강에 대한 메시지가 많으니 몸 관리에 신경 쓰세요.';
    }
  }
  return '';
}

// 조언 생성
function generateAdvice(keywords: DreamKeyword[], fortune: string): string {
  const greatKeywords = keywords.filter(k => k.fortune === 'great');
  const cautionKeywords = keywords.filter(k => k.fortune === 'caution');
  
  if (fortune === 'great' || fortune === 'good') {
    return `이 꿈은 긍정적인 에너지를 담고 있습니다. ${
      greatKeywords.length > 0 
        ? `특히 ${greatKeywords.map(k => k.name).join(', ')}의 상징은 큰 행운을 암시하니, ` 
        : ''
    }자신감을 가지고 하고자 하는 일을 추진하세요. 꿈에서 받은 좋은 기운을 현실에서도 이어가려면, 긍정적인 마음가짐과 적극적인 행동이 중요합니다.`;
  } else if (fortune === 'caution') {
    return `이 꿈은 주의를 요하는 메시지를 담고 있습니다. ${
      cautionKeywords.length > 0 
        ? `${cautionKeywords.map(k => k.name).join(', ')}의 상징이 나타났으니 ` 
        : ''
    }큰 결정은 신중히 하고, 건강과 안전에 주의를 기울이세요. 하지만 꿈은 경고이자 기회입니다. 미리 대비하면 어려움을 피할 수 있습니다.`;
  } else {
    return '이 꿈은 변화의 시기를 암시합니다. 현재 상황을 차분히 돌아보고, 새로운 방향을 모색해보세요. 급하게 결정하기보다 충분히 생각한 후 행동하면 좋은 결과가 있을 것입니다.';
  }
}

// 행운의 색상
function getLuckyColor(fortune: string): string {
  switch (fortune) {
    case 'great': return '금색';
    case 'good': return '초록색';
    case 'neutral': return '파란색';
    case 'caution': return '보라색';
    default: return '흰색';
  }
}

// 모든 키워드 가져오기
export function getAllKeywords(): DreamKeyword[] {
  return DREAM_CATEGORIES.flatMap(cat => cat.keywords);
}

// 카테고리별 키워드 가져오기
export function getKeywordsByCategory(categoryId: string): DreamKeyword[] {
  const category = DREAM_CATEGORIES.find(c => c.id === categoryId);
  return category?.keywords || [];
}
