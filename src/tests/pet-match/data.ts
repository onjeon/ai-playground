// 반려동물 궁합 테스트 - 나와 맞는 반려동물은?

export interface PetMatchQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface PetMatchResult {
  type: string;
  petName: string;
  emoji: string;
  subtitle: string;
  description: string;
  matchScore: number;
  whyMatch: string[];
  careLevel: string;
  lifestyle: string[];
  considerations: string[];
  alternativePets: string[];
  famousPet: string;
}

export const petTypes = ['dog_active', 'dog_calm', 'cat_independent', 'cat_friendly', 'fish', 'hamster', 'bird', 'reptile'] as const;
export type PetType = typeof petTypes[number];

export const questions: PetMatchQuestion[] = [
  {
    id: 1,
    question: "평소 활동량은 어느 정도인가요?",
    options: [
      { text: "매일 운동하거나 야외활동 많음", scores: { dog_active: 3, bird: 1 } },
      { text: "가끔 운동, 적당히 활동적", scores: { dog_calm: 2, cat_friendly: 1 } },
      { text: "집에 있는 걸 좋아함", scores: { cat_independent: 2, fish: 1 } },
      { text: "움직이는 거 별로...", scores: { fish: 3, reptile: 2 } },
    ],
  },
  {
    id: 2,
    question: "하루 중 집에 있는 시간은?",
    options: [
      { text: "거의 하루 종일 집에 있음", scores: { dog_active: 2, bird: 2 } },
      { text: "출퇴근 시간 빼고 집에 있음", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "바빠서 집에 있는 시간 적음", scores: { cat_independent: 3, fish: 2 } },
      { text: "출장/외출이 잦음", scores: { fish: 3, reptile: 3 } },
    ],
  },
  {
    id: 3,
    question: "반려동물과 어떻게 교감하고 싶나요?",
    options: [
      { text: "함께 뛰어놀고 산책하고 싶어요", scores: { dog_active: 3 } },
      { text: "안아주고 쓰다듬고 싶어요", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "같은 공간에서 각자 시간 보내기", scores: { cat_independent: 3 } },
      { text: "지켜보는 것만으로도 힐링", scores: { fish: 3, reptile: 2 } },
    ],
  },
  {
    id: 4,
    question: "털 빠짐에 대한 생각은?",
    options: [
      { text: "괜찮아요, 청소하면 되죠", scores: { dog_active: 2, dog_calm: 2 } },
      { text: "조금은 괜찮은데 많으면...", scores: { cat_friendly: 2, hamster: 1 } },
      { text: "털 빠지는 건 싫어요", scores: { fish: 3, reptile: 2 } },
      { text: "알러지가 있어요", scores: { fish: 3, reptile: 3 } },
    ],
  },
  {
    id: 5,
    question: "선호하는 반려동물 크기는?",
    options: [
      { text: "크고 듬직한 게 좋아요", scores: { dog_active: 3, dog_calm: 2 } },
      { text: "적당한 중간 사이즈", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "작고 아담한 게 좋아요", scores: { cat_independent: 2, hamster: 3 } },
      { text: "크기 상관없어요", scores: { bird: 2, reptile: 2 } },
    ],
  },
  {
    id: 6,
    question: "반려동물 케어에 쏟을 수 있는 시간은?",
    options: [
      { text: "하루 2시간 이상 가능", scores: { dog_active: 3, bird: 2 } },
      { text: "하루 1시간 정도", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "하루 30분 내외", scores: { cat_independent: 2, hamster: 2 } },
      { text: "최소한의 시간만", scores: { fish: 3, reptile: 3 } },
    ],
  },
  {
    id: 7,
    question: "소음에 대한 민감도는?",
    options: [
      { text: "전혀 괜찮아요, 시끌벅적 좋아요", scores: { dog_active: 2, bird: 2 } },
      { text: "어느 정도는 괜찮아요", scores: { dog_calm: 2, cat_friendly: 1 } },
      { text: "조용한 게 좋아요", scores: { cat_independent: 2, fish: 2 } },
      { text: "완전 조용해야 해요", scores: { fish: 3, reptile: 3 } },
    ],
  },
  {
    id: 8,
    question: "반려동물 양육 경험은?",
    options: [
      { text: "여러 동물 키워봤어요", scores: { dog_active: 2, bird: 1 } },
      { text: "한두 마리 키워봤어요", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "처음이에요", scores: { fish: 2, hamster: 2 } },
      { text: "독특한 동물에 관심 있어요", scores: { reptile: 3, bird: 2 } },
    ],
  },
  {
    id: 9,
    question: "주거 환경은 어떤가요?",
    options: [
      { text: "마당 있는 넓은 집", scores: { dog_active: 3, dog_calm: 2 } },
      { text: "아파트/빌라 (넓은 편)", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "원룸/소형 주거", scores: { cat_independent: 2, fish: 2, hamster: 2 } },
      { text: "반려동물 제한 있음", scores: { fish: 3, reptile: 2 } },
    ],
  },
  {
    id: 10,
    question: "반려동물에게 기대하는 것은?",
    options: [
      { text: "활기차고 함께 활동", scores: { dog_active: 3, bird: 1 } },
      { text: "따뜻한 위로와 교감", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "독립적이면서 함께하는 느낌", scores: { cat_independent: 3 } },
      { text: "관찰하고 돌보는 재미", scores: { fish: 2, reptile: 2, hamster: 1 } },
    ],
  },
  {
    id: 11,
    question: "예산 (초기 비용 + 월 양육비)은?",
    options: [
      { text: "비용은 상관없어요", scores: { dog_active: 2, bird: 1 } },
      { text: "적당히 쓸 수 있어요", scores: { dog_calm: 2, cat_friendly: 2 } },
      { text: "가성비 있게 키우고 싶어요", scores: { hamster: 2, fish: 2 } },
      { text: "최소 비용으로", scores: { fish: 3, reptile: 1 } },
    ],
  },
  {
    id: 12,
    question: "여행/장기 외출 시 계획은?",
    options: [
      { text: "함께 데려갈 수 있음", scores: { dog_active: 2, dog_calm: 2 } },
      { text: "펫시터/호텔 이용 가능", scores: { cat_friendly: 2, cat_independent: 1 } },
      { text: "지인에게 부탁 가능", scores: { hamster: 2, bird: 1 } },
      { text: "자동급식기 등으로 해결", scores: { fish: 3, reptile: 3 } },
    ],
  },
];

export const results: Record<PetType, PetMatchResult> = {
  dog_active: {
    type: 'dog_active',
    petName: '활동적인 강아지',
    emoji: '🐕',
    subtitle: '함께 뛰어놀 친구',
    description: '에너지 넘치는 당신에게는 활동적인 강아지가 딱이에요! 함께 산책하고, 뛰어놀고, 야외활동을 즐길 수 있는 최고의 친구가 될 거예요.',
    matchScore: 95,
    whyMatch: ['활동적인 라이프스타일', '충분한 시간 투자 가능', '교감 원함', '넓은 공간'],
    careLevel: '높음 (하루 2시간 이상)',
    lifestyle: ['매일 산책 필수', '훈련과 교육', '적극적 교감', '운동 파트너'],
    considerations: ['분리불안 관리', '비용 (의료비, 사료 등)', '여행 시 케어 계획'],
    alternativePets: ['골든리트리버', '래브라도', '보더콜리', '비글'],
    famousPet: '마루는 강쥐 (마루)',
  },
  dog_calm: {
    type: 'dog_calm',
    petName: '얌전한 강아지',
    emoji: '🐶',
    subtitle: '편안한 동반자',
    description: '당신에게는 차분하고 얌전한 강아지가 잘 맞아요! 함께 소파에서 쉬면서 따뜻한 교감을 나눌 수 있는 반려견이에요.',
    matchScore: 90,
    whyMatch: ['적당한 활동량', '따뜻한 교감 원함', '안정적인 생활', '적당한 시간 투자'],
    careLevel: '중간 (하루 1시간 정도)',
    lifestyle: ['규칙적인 산책', '실내 활동 위주', '스킨십 좋아함', '가족과 함께'],
    considerations: ['정기적 미용', '건강 관리', '훈련 필요'],
    alternativePets: ['시츄', '말티즈', '푸들', '웰시코기'],
    famousPet: '복실이네 (복실이)',
  },
  cat_independent: {
    type: 'cat_independent',
    petName: '독립적인 고양이',
    emoji: '🐱',
    subtitle: '도도한 동거인',
    description: '바쁜 당신에게는 독립적인 고양이가 최고예요! 각자의 공간을 존중하면서도 함께하는 시간이 소중한, 완벽한 동거인이 될 거예요.',
    matchScore: 95,
    whyMatch: ['바쁜 라이프스타일', '독립적 성향', '조용한 환경 선호', '적은 시간으로 케어'],
    careLevel: '낮음~중간',
    lifestyle: ['자유로운 실내 생활', '화장실 관리', '가끔 교감', '독립적'],
    considerations: ['캣타워/놀이 환경', '털 빠짐', '스크래처 필요'],
    alternativePets: ['러시안블루', '브리티시숏헤어', '터키시앙고라'],
    famousPet: '크림히어로즈 (7묘)',
  },
  cat_friendly: {
    type: 'cat_friendly',
    petName: '친화적인 고양이',
    emoji: '😺',
    subtitle: '애교 만점 고양이',
    description: '교감을 원하지만 산책은 부담인 당신에게! 사람을 좋아하고 애교 많은 고양이가 당신의 마음을 사로잡을 거예요.',
    matchScore: 90,
    whyMatch: ['교감 원함', '실내 생활', '적당한 활동량', '스킨십 좋아함'],
    careLevel: '중간',
    lifestyle: ['함께 노는 시간', '스킨십', '장난감 놀이', '무릎냥이'],
    considerations: ['관심 필요', '외로움 타는 품종', '놀이 시간 확보'],
    alternativePets: ['랙돌', '스코티시폴드', '페르시안', '먼치킨'],
    famousPet: '수리노을 (수리, 노을)',
  },
  fish: {
    type: 'fish',
    petName: '관상어',
    emoji: '🐠',
    subtitle: '힐링 인테리어',
    description: '바쁘지만 반려동물을 원하는 당신에게 관상어는 완벽해요! 아름다운 어항이 인테리어가 되고, 헤엄치는 모습이 힐링이 됩니다.',
    matchScore: 95,
    whyMatch: ['바쁜 일상', '조용함 선호', '관찰 즐김', '최소 케어'],
    careLevel: '낮음',
    lifestyle: ['주기적 먹이주기', '수조 관리', '관찰하는 즐거움', '인테리어 효과'],
    considerations: ['초기 수조 세팅', '수질 관리', '온도 관리 (열대어)'],
    alternativePets: ['금붕어', '베타', '구피', '네온테트라'],
    famousPet: '니모 (영화 니모를 찾아서)',
  },
  hamster: {
    type: 'hamster',
    petName: '햄스터',
    emoji: '🐹',
    subtitle: '작고 귀여운 친구',
    description: '작고 귀여운 것을 좋아하는 당신에게 햄스터는 최고의 선택이에요! 작은 공간에서도 키울 수 있고, 쳇바퀴 돌리는 모습이 귀여워요.',
    matchScore: 85,
    whyMatch: ['작은 공간', '적은 비용', '관찰 즐김', '귀여움 추구'],
    careLevel: '낮음~중간',
    lifestyle: ['케이지 관리', '간식 주기', '야행성 활동', '관찰 즐기기'],
    considerations: ['야행성', '짧은 수명 (2-3년)', '물림 주의'],
    alternativePets: ['드워프햄스터', '골든햄스터', '저빌', '기니피그'],
    famousPet: '햄찌',
  },
  bird: {
    type: 'bird',
    petName: '앵무새/새',
    emoji: '🦜',
    subtitle: '수다쟁이 친구',
    description: '대화하고 교감하고 싶은 당신에게 앵무새가 딱이에요! 말도 배우고, 노래도 부르고, 활발한 친구가 되어줄 거예요.',
    matchScore: 80,
    whyMatch: ['교감 원함', '특별한 경험', '시간 투자 가능', '활발함 좋아함'],
    careLevel: '중간~높음',
    lifestyle: ['말 가르치기', '케이지 밖 활동', '교감 시간', '청소 관리'],
    considerations: ['소음', '긴 수명 (대형 앵무)', '관심 많이 필요', '먼지'],
    alternativePets: ['잉꼬', '코카틸', '사랑앵무', '십자매'],
    famousPet: '이아고 (알라딘)',
  },
  reptile: {
    type: 'reptile',
    petName: '파충류',
    emoji: '🦎',
    subtitle: '특별한 반려동물',
    description: '독특하고 특별한 것을 좋아하는 당신에게 파충류는 새로운 경험이에요! 관찰하는 재미와 키우는 즐거움을 동시에!',
    matchScore: 80,
    whyMatch: ['독특함 추구', '관찰 즐김', '조용함 선호', '털 알러지'],
    careLevel: '중간 (종류에 따라 다름)',
    lifestyle: ['온도/습도 관리', '먹이 관리', '관찰', '핸들링'],
    considerations: ['특수한 환경 필요', '먹이 (곤충 등)', '긴 수명 (종류에 따라)'],
    alternativePets: ['레오파드게코', '크레스티드게코', '콘스네이크', '비어디드래곤'],
    famousPet: '파스칼 (라푼젤)',
  },
};

export function calculateResult(answers: number[]): PetMatchResult {
  const scores: Record<PetType, number> = {
    dog_active: 0,
    dog_calm: 0,
    cat_independent: 0,
    cat_friendly: 0,
    fish: 0,
    hamster: 0,
    bird: 0,
    reptile: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as PetType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: PetType = 'cat_independent';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as PetType;
    }
  });

  return results[resultType];
}
