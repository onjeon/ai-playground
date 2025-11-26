// MBTI 여행 스타일 테스트 - 여행할 때 나는 어떤 MBTI?

export interface MbtiTravelQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      E?: number; I?: number;
      S?: number; N?: number;
      T?: number; F?: number;
      J?: number; P?: number;
    };
  }[];
}

export interface MbtiTravelResult {
  type: string;
  title: string;
  emoji: string;
  travelStyle: string;
  description: string;
  characteristics: string[];
  idealDestinations: string[];
  travelTips: string[];
  packingStyle: string;
  travelPartner: string[];
  worstMatch: string[];
  travelMotto: string;
}

export const questions: MbtiTravelQuestion[] = [
  {
    id: 1,
    question: "여행 계획을 세울 때 나는?",
    options: [
      { text: "분 단위 세부 일정표 작성!", scores: { J: 3 } },
      { text: "대략적인 방향만, 나머지는 현장에서", scores: { P: 3 } },
      { text: "숙소, 이동만 예약하고 자유롭게", scores: { P: 2, J: 1 } },
      { text: "완벽한 계획 + 플랜B까지 준비", scores: { J: 2, S: 1 } },
    ],
  },
  {
    id: 2,
    question: "여행지에서 사람들과의 교류는?",
    options: [
      { text: "현지인, 다른 여행자들과 적극 소통!", scores: { E: 3 } },
      { text: "필요할 때만 대화, 나머지는 혼자 즐김", scores: { I: 3 } },
      { text: "일행이랑만 주로 다님", scores: { I: 2, E: 1 } },
      { text: "새 친구 사귀는 게 여행의 묘미지!", scores: { E: 2, F: 1 } },
    ],
  },
  {
    id: 3,
    question: "여행지 선택 기준은?",
    options: [
      { text: "유명 관광지, 검증된 곳 위주", scores: { S: 3 } },
      { text: "남들이 안 가는 숨겨진 명소!", scores: { N: 3 } },
      { text: "SNS에서 핫한 포토스팟", scores: { S: 2, E: 1 } },
      { text: "역사, 문화적 의미가 있는 곳", scores: { N: 2, T: 1 } },
    ],
  },
  {
    id: 4,
    question: "여행 중 예상치 못한 일이 생기면?",
    options: [
      { text: "당황하지만 빠르게 대안 찾음", scores: { T: 2, J: 1 } },
      { text: "오히려 좋아! 새로운 모험!", scores: { P: 3 } },
      { text: "스트레스... 원래 계획대로 하고 싶어", scores: { J: 2, S: 1 } },
      { text: "일행 기분 먼저 살피고 결정", scores: { F: 2, E: 1 } },
    ],
  },
  {
    id: 5,
    question: "여행 중 식사는?",
    options: [
      { text: "미리 맛집 리스트 만들어서 방문", scores: { J: 2, S: 1 } },
      { text: "현지인한테 물어보거나 즉흥적으로", scores: { P: 2, E: 1 } },
      { text: "유명한 로컬 음식 위주로", scores: { S: 2 } },
      { text: "처음 보는 음식도 일단 도전!", scores: { N: 2, P: 1 } },
    ],
  },
  {
    id: 6,
    question: "여행 사진 스타일은?",
    options: [
      { text: "인생샷 건지려고 열심히 촬영", scores: { S: 2, E: 1 } },
      { text: "사진보다 눈으로 담는 게 좋아", scores: { N: 2, I: 1 } },
      { text: "일행, 풍경 골고루 기록", scores: { F: 2, S: 1 } },
      { text: "특이하고 의미 있는 것만 찍음", scores: { N: 2, T: 1 } },
    ],
  },
  {
    id: 7,
    question: "숙소 선택 기준은?",
    options: [
      { text: "위치 좋고 깔끔한 호텔", scores: { S: 2, J: 1 } },
      { text: "현지 느낌 나는 에어비앤비나 게스트하우스", scores: { N: 2, E: 1 } },
      { text: "가성비 최고인 곳", scores: { T: 2, S: 1 } },
      { text: "분위기 좋고 특별한 경험 가능한 곳", scores: { N: 2, F: 1 } },
    ],
  },
  {
    id: 8,
    question: "여행 가방 짐 싸기는?",
    options: [
      { text: "체크리스트로 완벽하게 준비", scores: { J: 3 } },
      { text: "대충 필요한 것만 후다닥", scores: { P: 3 } },
      { text: "만약을 대비해 여분까지 챙김", scores: { J: 2, S: 1 } },
      { text: "현지에서 사면 되지~", scores: { P: 2, N: 1 } },
    ],
  },
  {
    id: 9,
    question: "여행 중 갈등이 생기면?",
    options: [
      { text: "논리적으로 최선의 방법 제시", scores: { T: 3 } },
      { text: "다들 기분 좋게 타협점 찾기", scores: { F: 3 } },
      { text: "일단 내 의견 주장 후 토론", scores: { T: 2, E: 1 } },
      { text: "분위기 안 좋아지면 그냥 양보", scores: { F: 2, I: 1 } },
    ],
  },
  {
    id: 10,
    question: "여행 후 기억에 남는 것은?",
    options: [
      { text: "가봤던 모든 장소와 일정", scores: { S: 2, J: 1 } },
      { text: "그때 느꼈던 감정과 분위기", scores: { N: 2, F: 1 } },
      { text: "함께한 사람들과의 추억", scores: { F: 2, E: 1 } },
      { text: "새롭게 알게 된 것들", scores: { N: 2, T: 1 } },
    ],
  },
  {
    id: 11,
    question: "선호하는 여행 형태는?",
    options: [
      { text: "패키지 투어 (편하게)", scores: { J: 2, S: 1 } },
      { text: "완전 자유여행 (내 맘대로)", scores: { P: 2, I: 1 } },
      { text: "친구들과 단체 여행", scores: { E: 2, F: 1 } },
      { text: "혼자 떠나는 힐링 여행", scores: { I: 3 } },
    ],
  },
  {
    id: 12,
    question: "여행의 의미는?",
    options: [
      { text: "새로운 경험과 자기 발견", scores: { N: 2, I: 1 } },
      { text: "일상 탈출, 재충전!", scores: { S: 2, P: 1 } },
      { text: "소중한 사람들과 추억 만들기", scores: { F: 2, E: 1 } },
      { text: "세상을 넓게 보는 기회", scores: { N: 2, T: 1 } },
    ],
  },
];

export const results: Record<string, MbtiTravelResult> = {
  'ISTJ': {
    type: 'ISTJ',
    title: '철저한 계획형 여행자',
    emoji: '📋',
    travelStyle: '완벽주의 플래너',
    description: '분 단위 일정표와 함께하는 철저한 여행자. 계획대로 움직일 때 가장 행복해요.',
    characteristics: ['상세한 여행 계획표 작성', '예약은 미리미리', '정해진 일정 준수', '효율적인 동선 설계'],
    idealDestinations: ['일본 (정시 운행)', '독일 (체계적)', '싱가포르 (깔끔)'],
    travelTips: ['가끔은 계획에 없던 일도 즐겨보세요', '여유 시간을 넉넉히 확보하세요'],
    packingStyle: '체크리스트로 완벽하게, 여분까지 준비',
    travelPartner: ['ESTJ', 'ISFJ', 'ISTJ'],
    worstMatch: ['ENFP', 'ESFP'],
    travelMotto: '계획이 곧 성공이다',
  },
  'ISFJ': {
    type: 'ISFJ',
    title: '따뜻한 배려형 여행자',
    emoji: '🤗',
    travelStyle: '일행 챙김이',
    description: '함께하는 사람들을 세심하게 챙기는 따뜻한 여행자. 모두가 편안한 여행을 만들어요.',
    characteristics: ['일행 컨디션 체크', '간식, 비상약 챙기기', '모두가 즐거운 일정 조율', '추억 기록 담당'],
    idealDestinations: ['대만 (친절한 사람들)', '뉴질랜드 (평화로움)', '오스트리아 (아름다운 풍경)'],
    travelTips: ['자신도 즐기는 시간을 가지세요', '가끔은 남 신경 끄고 나만의 시간을'],
    packingStyle: '나보다 일행 것까지 챙기는 엄마 스타일',
    travelPartner: ['ESFJ', 'ISTJ', 'INFJ'],
    worstMatch: ['ENTP', 'ESTP'],
    travelMotto: '함께여서 행복한 여행',
  },
  'INFJ': {
    type: 'INFJ',
    title: '의미 추구형 여행자',
    emoji: '🔮',
    travelStyle: '깊이 있는 탐험가',
    description: '여행에서 특별한 의미를 찾는 깊이 있는 여행자. 영혼이 성장하는 여행을 추구해요.',
    characteristics: ['문화, 역사 깊이 탐구', '현지인과 깊은 대화', '조용한 명상 시간', '의미 있는 장소 방문'],
    idealDestinations: ['인도 (영적 체험)', '페루 (고대 문명)', '아이슬란드 (자연의 신비)'],
    travelTips: ['가벼운 재미도 허락해주세요', '너무 깊이 생각하지 않아도 괜찮아요'],
    packingStyle: '꼭 필요한 것만 미니멀하게',
    travelPartner: ['INFP', 'ENFJ', 'INTJ'],
    worstMatch: ['ESTP', 'ESFP'],
    travelMotto: '여행은 영혼의 양식',
  },
  'INTJ': {
    type: 'INTJ',
    title: '전략적 탐험가',
    emoji: '🗺️',
    travelStyle: '효율 극대화 전략가',
    description: '철저한 사전 조사와 효율적인 동선으로 완벽한 여행을 설계하는 전략가예요.',
    characteristics: ['깊이 있는 사전 조사', '최적화된 동선 설계', '숨겨진 명소 발굴', '혼자만의 시간 확보'],
    idealDestinations: ['영국 (박물관, 역사)', '이집트 (고대 문명)', '체코 (건축, 역사)'],
    travelTips: ['예상 못한 발견도 즐겨보세요', '가끔은 계획 없이 걸어보기'],
    packingStyle: '필요한 것만 효율적으로',
    travelPartner: ['ENTJ', 'INTP', 'INFJ'],
    worstMatch: ['ESFP', 'ENFP'],
    travelMotto: '최고의 여행은 최고의 준비에서',
  },
  'ISTP': {
    type: 'ISTP',
    title: '즉흥적 모험가',
    emoji: '🏍️',
    travelStyle: '액티비티 마스터',
    description: '계획보다 즉흥, 관광보다 체험! 스릴 넘치는 액티비티를 즐기는 모험가예요.',
    characteristics: ['익스트림 스포츠 도전', '현지에서 즉흥적 결정', '실용적 여행 스타일', '문제 해결 능력 뛰어남'],
    idealDestinations: ['뉴질랜드 (번지점프)', '스위스 (스카이다이빙)', '태국 (다이빙)'],
    travelTips: ['가끔은 느긋하게 쉬어가세요', '일행 페이스도 맞춰주기'],
    packingStyle: '가볍게, 현지에서 해결',
    travelPartner: ['ESTP', 'ISFP', 'INTP'],
    worstMatch: ['ENFJ', 'ESFJ'],
    travelMotto: '직접 경험해야 안다',
  },
  'ISFP': {
    type: 'ISFP',
    title: '감성 예술가 여행자',
    emoji: '🎨',
    travelStyle: '미적 체험 추구형',
    description: '아름다운 것에 감동하고 예술적 영감을 얻는 감성 여행자예요.',
    characteristics: ['예술적 장소 탐방', '감각적 경험 추구', '사진으로 순간 포착', '현지 문화 체험'],
    idealDestinations: ['이탈리아 (예술)', '프랑스 (미술관)', '발리 (자연 예술)'],
    travelTips: ['일정에 너무 얽매이지 마세요', '느끼는 대로 움직여도 OK'],
    packingStyle: '감성 아이템 필수 (카메라, 일기장)',
    travelPartner: ['INFP', 'ESFP', 'ISTP'],
    worstMatch: ['ENTJ', 'ESTJ'],
    travelMotto: '아름다움을 찾아 떠나는 여행',
  },
  'INFP': {
    type: 'INFP',
    title: '낭만적 몽상가 여행자',
    emoji: '🌙',
    travelStyle: '영감 추구형 여행자',
    description: '여행에서 영감과 낭만을 찾는 몽상가. 특별한 순간을 마음에 담아요.',
    characteristics: ['감성적 여행지 선호', '혼자만의 시간 필요', '일기나 사진으로 기록', '현지 분위기에 몰입'],
    idealDestinations: ['아일랜드 (문학)', '그리스 (신화)', '일본 교토 (고즈넉함)'],
    travelTips: ['현실적인 계획도 조금은 필요해요', '혼자 너무 오래 있지 않기'],
    packingStyle: '책, 노트 등 감성 아이템 위주',
    travelPartner: ['INFJ', 'ENFP', 'ISFP'],
    worstMatch: ['ESTJ', 'ENTJ'],
    travelMotto: '모든 여행은 내면의 여행',
  },
  'INTP': {
    type: 'INTP',
    title: '지적 탐구형 여행자',
    emoji: '🔬',
    travelStyle: '호기심 천국 탐험가',
    description: '새로운 지식과 발견을 위해 떠나는 지적 호기심 가득한 여행자예요.',
    characteristics: ['박물관, 과학관 필수', '현지 시스템 분석', '왜?라는 질문 많음', '독특한 장소 탐험'],
    idealDestinations: ['영국 (대영박물관)', '미국 NASA', '스위스 CERN'],
    travelTips: ['머리 쉬는 시간도 필요해요', '사람들과의 교류도 시도해보세요'],
    packingStyle: '책, 전자기기 위주로 실용적',
    travelPartner: ['INTJ', 'ENTP', 'ISTP'],
    worstMatch: ['ESFJ', 'ENFJ'],
    travelMotto: '여행은 배움의 연속',
  },
  'ESTP': {
    type: 'ESTP',
    title: '에너지 넘치는 모험왕',
    emoji: '🎢',
    travelStyle: '즉흥 액션 여행자',
    description: '계획? 그게 뭐야! 그 순간의 짜릿함을 즐기는 타고난 모험가예요.',
    characteristics: ['즉흥적 결정', '액티비티 올인', '새로운 사람과 빠른 친화', '현재를 즐김'],
    idealDestinations: ['라스베가스', '두바이', '리우데자네이루'],
    travelTips: ['최소한의 예약은 해두세요', '가끔은 조용한 시간도'],
    packingStyle: '최소한만, 나머지는 현지에서',
    travelPartner: ['ESFP', 'ISTP', 'ENTP'],
    worstMatch: ['INFJ', 'ISFJ'],
    travelMotto: 'YOLO! 지금 이 순간!',
  },
  'ESFP': {
    type: 'ESFP',
    title: '파티 피플 여행자',
    emoji: '🎉',
    travelStyle: '즐거움 전도사',
    description: '어디서든 분위기 메이커! 여행을 축제로 만드는 엔터테이너예요.',
    characteristics: ['어디서든 친구 사귀기', '현지 파티, 축제 참여', '맛집 탐방 필수', '흥이 넘치는 여행'],
    idealDestinations: ['스페인 (축제)', '브라질 (카니발)', '태국 (풀문파티)'],
    travelTips: ['조용한 휴식 시간도 챙기세요', '예산 관리 주의'],
    packingStyle: '파티복, 액세서리 가득',
    travelPartner: ['ESTP', 'ENFP', 'ISFP'],
    worstMatch: ['INTJ', 'ISTJ'],
    travelMotto: '인생은 짧고 여행은 즐겁다',
  },
  'ENFP': {
    type: 'ENFP',
    title: '열정 가득 자유영혼',
    emoji: '🦋',
    travelStyle: '즉흥 낭만 여행자',
    description: '계획은 대충, 열정은 가득! 자유롭게 흘러가는 대로 여행하는 자유영혼이에요.',
    characteristics: ['즉흥적 일정 변경', '현지인과 금세 친해짐', '새로운 경험에 열광', '에너지 넘치는 탐험'],
    idealDestinations: ['남미 (열정)', '동남아 배낭여행', '유럽 자유여행'],
    travelTips: ['중요한 건 미리 예약하세요', '너무 많은 것을 욕심내지 않기'],
    packingStyle: '감성 아이템 + 최소한의 짐',
    travelPartner: ['INFP', 'ENTP', 'ESFP'],
    worstMatch: ['ISTJ', 'INTJ'],
    travelMotto: '길이 없으면 만들면 돼!',
  },
  'ENTP': {
    type: 'ENTP',
    title: '창의적 탐험가',
    emoji: '🚀',
    travelStyle: '아이디어 뱅크 여행자',
    description: '남들이 안 가는 곳, 안 하는 것! 창의적인 여행을 설계하는 혁신가예요.',
    characteristics: ['독특한 여행 코스', '현지인과 토론 즐김', '새로운 시도 좋아함', '지적 호기심 폭발'],
    idealDestinations: ['실리콘밸리', '이스라엘 (스타트업)', '에스토니아 (디지털)'],
    travelTips: ['가끔은 평범한 것도 즐겨보세요', '일행 의견도 존중하기'],
    packingStyle: '효율적으로 + 새로운 가젯',
    travelPartner: ['INTP', 'ENFP', 'ENTJ'],
    worstMatch: ['ISFJ', 'ESFJ'],
    travelMotto: '다르게 여행하라',
  },
  'ESTJ': {
    type: 'ESTJ',
    title: '리더십 여행 대장',
    emoji: '👔',
    travelStyle: '효율적 리더형 여행자',
    description: '여행도 프로젝트처럼! 효율적으로 이끄는 든든한 여행 대장이에요.',
    characteristics: ['일정 관리 철저', '팀 이끄는 리더십', '효율적 동선 계획', '실용적 선택'],
    idealDestinations: ['일본 (효율적)', '독일 (체계적)', '싱가포르 (깔끔)'],
    travelTips: ['가끔은 일정 없이 쉬어가세요', '남의 의견도 유연하게 수용'],
    packingStyle: '필요한 것만 체계적으로',
    travelPartner: ['ISTJ', 'ENTJ', 'ESFJ'],
    worstMatch: ['INFP', 'ISFP'],
    travelMotto: '계획적 여행이 성공적 여행',
  },
  'ESFJ': {
    type: 'ESFJ',
    title: '단체 여행 총무',
    emoji: '🎁',
    travelStyle: '모두를 챙기는 여행 매니저',
    description: '일행 모두가 행복한 여행을 위해 세심하게 챙기는 따뜻한 총무예요.',
    characteristics: ['일행 일정 조율', '모두의 의견 수렴', '맛집, 숙소 리서치', '추억 만들기 전문'],
    idealDestinations: ['하와이 (리조트)', '크루즈 여행', '일본 온천여행'],
    travelTips: ['자기 자신도 챙기세요', '모든 걸 책임지려 하지 않아도 OK'],
    packingStyle: '일행 것까지 챙기는 만능 스타일',
    travelPartner: ['ISFJ', 'ESTJ', 'ENFJ'],
    worstMatch: ['INTP', 'ISTP'],
    travelMotto: '함께하는 여행이 진짜 여행',
  },
  'ENFJ': {
    type: 'ENFJ',
    title: '영감 주는 여행 가이드',
    emoji: '✨',
    travelStyle: '모두를 행복하게 하는 가이드',
    description: '여행에서도 모두에게 영감을 주고 행복을 나누는 따뜻한 리더예요.',
    characteristics: ['일행 분위기 메이커', '의미 있는 여행 추구', '모두의 감정 케어', '추억 만들기 장인'],
    idealDestinations: ['몰디브 (로맨틱)', '산토리니 (감성)', '발리 (힐링)'],
    travelTips: ['나만의 시간도 확보하세요', '모든 걸 완벽하게 할 필요 없어요'],
    packingStyle: '선물, 간식 등 나눔 아이템 가득',
    travelPartner: ['INFJ', 'ENFP', 'ESFJ'],
    worstMatch: ['ISTP', 'INTP'],
    travelMotto: '여행은 마음을 나누는 것',
  },
  'ENTJ': {
    type: 'ENTJ',
    title: 'CEO형 여행 플래너',
    emoji: '👑',
    travelStyle: '완벽한 여행 총괄',
    description: '여행도 비즈니스처럼! 목표를 세우고 완벽하게 달성하는 CEO형 여행자예요.',
    characteristics: ['목표 지향적 여행', '효율적 시간 관리', '최고의 경험 추구', '과감한 결정'],
    idealDestinations: ['뉴욕 (비즈니스)', '두바이 (럭셔리)', '홍콩 (효율)'],
    travelTips: ['가끔은 느긋하게 즐겨보세요', '모든 걸 통제하려 하지 않기'],
    packingStyle: '고급스럽고 효율적으로',
    travelPartner: ['INTJ', 'ESTJ', 'ENTP'],
    worstMatch: ['ISFP', 'INFP'],
    travelMotto: '최고가 아니면 가지 않는다',
  },
};

export function calculateResult(answers: number[]): MbtiTravelResult {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([key, value]) => {
        scores[key as keyof typeof scores] += value || 0;
      });
    }
  });

  const mbtiType = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return results[mbtiType] || results['ISTJ'];
}
