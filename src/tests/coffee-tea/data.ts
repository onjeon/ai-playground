// coffee-tea 테스트 데이터
export const coffeeTea = {
  id: 'coffee-tea',
  title: '커피 vs 차 성격 테스트',
  description: '당신은 커피파? 차파? 음료 취향으로 보는 당신의 성격!',
  questions: [
    {
      id: 1,
      text: '아침에 일어나면 가장 먼저 마시고 싶은 것은?',
      options: [
        { text: '진한 아메리카노/에스프레소', type: 'coffee_intense' },
        { text: '부드러운 라떼/카푸치노', type: 'coffee_mild' },
        { text: '향긋한 차 한 잔', type: 'tea' },
        { text: '물이나 주스', type: 'neither' }
      ]
    },
    {
      id: 2,
      text: '카페에서 주로 시키는 것은?',
      options: [
        { text: '에스프레소 계열', type: 'coffee_intense' },
        { text: '달달한 커피 음료', type: 'coffee_mild' },
        { text: '차 메뉴', type: 'tea' },
        { text: '논커피 음료', type: 'neither' }
      ]
    },
    {
      id: 3,
      text: '음료를 마시는 목적은?',
      options: [
        { text: '각성/집중력', type: 'coffee_intense' },
        { text: '기분 전환/여유', type: 'coffee_mild' },
        { text: '차분함/힐링', type: 'tea' },
        { text: '습관/갈증 해소', type: 'neither' }
      ]
    },
    {
      id: 4,
      text: '하루에 마시는 카페인 양은?',
      options: [
        { text: '커피 3잔 이상', type: 'coffee_intense' },
        { text: '커피 1-2잔', type: 'coffee_mild' },
        { text: '차 위주, 커피는 가끔', type: 'tea' },
        { text: '카페인 거의 안 마심', type: 'neither' }
      ]
    },
    {
      id: 5,
      text: '커피 없이 하루를 보내면?',
      options: [
        { text: '두통, 집중 안 됨, 힘듦', type: 'coffee_intense' },
        { text: '좀 아쉽지만 괜찮음', type: 'coffee_mild' },
        { text: '상관없음, 차가 있으니까', type: 'tea' },
        { text: '평소랑 다름없음', type: 'neither' }
      ]
    },
    {
      id: 6,
      text: '집에 있는 음료 도구는?',
      options: [
        { text: '커피 머신/핸드드립 도구', type: 'coffee_intense' },
        { text: '캡슐 머신/인스턴트 커피', type: 'coffee_mild' },
        { text: '찻잔/티팟/티백 컬렉션', type: 'tea' },
        { text: '특별히 없음', type: 'neither' }
      ]
    },
    {
      id: 7,
      text: '음료 마시는 시간은?',
      options: [
        { text: '아침부터 저녁까지 수시로', type: 'coffee_intense' },
        { text: '아침/점심 시간에', type: 'coffee_mild' },
        { text: '여유로운 시간에 천천히', type: 'tea' },
        { text: '특별히 정해진 시간 없음', type: 'neither' }
      ]
    },
    {
      id: 8,
      text: '음료 취향 변천사는?',
      options: [
        { text: '점점 더 진하게', type: 'coffee_intense' },
        { text: '일관되게 유지', type: 'coffee_mild' },
        { text: '커피에서 차로 전환', type: 'tea' },
        { text: '특별히 없음', type: 'neither' }
      ]
    },
    {
      id: 9,
      text: '음료에 대한 투자는?',
      options: [
        { text: '원두/장비에 투자', type: 'coffee_intense' },
        { text: '맛있는 음료에 지출', type: 'coffee_mild' },
        { text: '다양한 차 구매', type: 'tea' },
        { text: '최소한으로', type: 'neither' }
      ]
    },
    {
      id: 10,
      text: '음료가 당신에게 의미하는 것은?',
      options: [
        { text: '필수 연료!', type: 'coffee_intense' },
        { text: '일상의 즐거움', type: 'coffee_mild' },
        { text: '마음의 안식', type: 'tea' },
        { text: '그냥 음료일 뿐', type: 'neither' }
      ]
    }
  ],
  results: {
    coffee_intense: {
      type: '진한 커피파',
      title: '☕ 진한 커피파',
      description: '커피는 삶의 연료! 진한 에스프레소를 사랑하는 열정적인 당신.',
      traits: ['에너지 넘침', '목표 지향', '효율 추구', '강렬한 맛 선호'],
      personality: '열정적이고 목표 지향적, 직접적인 소통 선호',
      drinkRecommend: '에스프레소, 롱블랙, 콜드브루',
      advice: '커피 사랑은 좋지만, 수분 섭취도 챙기세요! 물도 마시기!'
    },
    coffee_mild: {
      type: '부드러운 커피파',
      title: '🥛 부드러운 커피파',
      description: '커피는 좋지만 부드럽게! 여유로운 카페 시간을 즐기는 당신.',
      traits: ['균형 감각', '사교적', '편안함 추구', '적당한 선호'],
      personality: '친근하고 사교적, 조화를 중시',
      drinkRecommend: '라떼, 카푸치노, 플랫화이트',
      advice: '당신의 밸런스 감각이 좋아요! 그 여유를 유지하세요.'
    },
    tea: {
      type: '차 애호가',
      title: '🍵 차 애호가',
      description: '차분히 차 한 잔의 여유! 내면의 평화를 추구하는 당신.',
      traits: ['차분함', '섬세함', '여유로움', '내면 지향'],
      personality: '사려 깊고 차분한, 깊은 생각을 즐김',
      drinkRecommend: '녹차, 홍차, 허브차, 말차',
      advice: '당신의 평화로움은 주변에도 좋은 영향을 줘요. 그 여유를 나눠주세요!'
    },
    neither: {
      type: '자유로운 선택파',
      title: '💧 자유로운 선택파',
      description: '카페인에 구애받지 않는 자유로운 영혼! 건강을 챙기는 당신.',
      traits: ['자유로움', '건강 지향', '독립적', '유연함'],
      personality: '틀에 얽매이지 않는 독립적인 성향',
      drinkRecommend: '물, 과일주스, 디카페인, 스무디',
      advice: '건강한 선택이에요! 가끔 카페에서 새로운 음료도 도전해보세요.'
    }
  }
};
