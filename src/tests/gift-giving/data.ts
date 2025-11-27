// 선물 유형 테스트 데이터
export const giftGivingTest = {
  id: 'gift-giving',
  title: '선물 유형 테스트',
  description: '당신은 어떤 선물을 주는 사람인가요? 실용파, 감성파, 서프라이즈파, 현금파 중 나의 선물 스타일을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '선물을 고를 때 가장 중요한 것은?',
      options: [
        { id: 'a', text: '받는 사람이 쓸 수 있는지', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '의미와 감성', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '놀라움과 특별함', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '받는 사람이 원하는 것', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 2,
      text: '선물 예산은?',
      options: [
        { id: 'a', text: '적당한 가격의 실용품', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '가격보다 정성', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '특별한 것이라면 과감히', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '정해진 금액 그대로', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 3,
      text: '생일 선물로 주로 주는 것은?',
      options: [
        { id: 'a', text: '생활용품/전자기기', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '직접 만든 것/추억 관련', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '예상 못한 특별한 선물', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '현금이나 상품권', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 4,
      text: '선물 포장은?',
      options: [
        { id: 'a', text: '심플하게', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '직접 정성껏', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '화려하고 특별하게', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '봉투에 현금/상품권', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 5,
      text: '선물에 카드를 쓸 때?',
      options: [
        { id: 'a', text: '간단한 메시지만', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '진심 담아 길게', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '재미있는 내용으로', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '생략하는 경우 많음', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 6,
      text: '선물 준비 시간은?',
      options: [
        { id: 'a', text: '필요한 것 빠르게 구매', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '오래 고민하고 준비', score: { practical: 0, emotional: 3, surprise: 1, cash: 0 } },
        { id: 'c', text: '서프라이즈 계획에 시간', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '거의 안 걸림', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 7,
      text: '상대방이 원하는 걸 모를 때?',
      options: [
        { id: 'a', text: '무난하게 실용적인 것', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '그 사람을 생각하며 고른 것', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '예상 못한 재미있는 것', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '직접 고르라고 상품권', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 8,
      text: '받고 싶은 선물 유형은?',
      options: [
        { id: 'a', text: '실용적으로 쓸 수 있는 것', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '마음이 담긴 것', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '예상 못한 깜짝 선물', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '원하는 걸 살 수 있는 현금', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 9,
      text: '선물 전달 방식은?',
      options: [
        { id: 'a', text: '직접 만나서 심플하게', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '직접 만나서 진심 전달', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '서프라이즈 이벤트로', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '계좌이체나 택배', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 10,
      text: '기념일을 챙기는 편인가요?',
      options: [
        { id: 'a', text: '필요한 것으로 챙김', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '꼼꼼히 챙김', score: { practical: 0, emotional: 3, surprise: 1, cash: 0 } },
        { id: 'c', text: '특별하게 준비', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '현금으로 표현', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 11,
      text: '회사/단체 선물은?',
      options: [
        { id: 'a', text: '쓸 수 있는 것으로', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '정성 들인 것으로', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '재미있는 것으로', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '상품권이 최고', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
    {
      id: 12,
      text: '선물에 대한 생각은?',
      options: [
        { id: 'a', text: '필요한 것을 주는 게 최고', score: { practical: 3, emotional: 0, surprise: 0, cash: 0 } },
        { id: 'b', text: '마음을 전하는 수단', score: { practical: 0, emotional: 3, surprise: 0, cash: 0 } },
        { id: 'c', text: '기쁨과 놀라움을 주는 것', score: { practical: 0, emotional: 0, surprise: 3, cash: 0 } },
        { id: 'd', text: '선택권을 주는 게 최고', score: { practical: 0, emotional: 0, surprise: 0, cash: 3 } },
      ],
    },
  ],
  results: {
    practical: {
      id: 'practical',
      title: '실용파 기버',
      description: '받는 사람이 실제로 쓸 수 있는 것을 주는 당신! 실용적이고 현실적인 사고를 합니다.',
      traits: ['실용적', '현실적', '효율 중시', '배려'],
      emoji: '🎁',
      color: '#3498DB',
    },
    emotional: {
      id: 'emotional',
      title: '감성파 기버',
      description: '마음과 정성이 담긴 선물을 주는 당신! 따뜻하고 섬세한 감성의 소유자입니다.',
      traits: ['감성적', '정성 가득', '따뜻함', '섬세함'],
      emoji: '💝',
      color: '#E74C3C',
    },
    surprise: {
      id: 'surprise',
      title: '서프라이즈 기버',
      description: '예상치 못한 특별한 선물로 기쁨을 주는 당신! 재미있고 창의적인 성격입니다.',
      traits: ['창의적', '재미있음', '특별함 추구', '이벤트 선호'],
      emoji: '🎉',
      color: '#9B59B6',
    },
    cash: {
      id: 'cash',
      title: '현실파 기버',
      description: '받는 사람이 원하는 걸 직접 고르도록 하는 당신! 합리적이고 실질적인 사고를 합니다.',
      traits: ['합리적', '실질적', '선택권 존중', '간편함'],
      emoji: '💵',
      color: '#27AE60',
    },
  },
};
