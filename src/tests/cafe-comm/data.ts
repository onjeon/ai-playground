// 커피 취향 테스트 데이터
export const cafeCommTest = {
  id: 'cafe-comm',
  title: '커피 취향 테스트',
  description: '아메리카노? 라떼? 디카페인? 당신의 커피 취향으로 성격을 분석하고 딱 맞는 커피를 추천해드립니다!',
  questions: [
    {
      id: 1,
      text: '카페에서 주로 시키는 커피는?',
      options: [
        { id: 'a', text: '아메리카노 (무조건!)', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '카페라떼나 바닐라라떼', score: { americano: 0, latte: 3, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '시그니처 메뉴나 특별한 음료', score: { americano: 0, latte: 0, specialty: 3, nonCoffee: 0 } },
        { id: 'd', text: '논커피 음료 (에이드, 스무디 등)', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 2,
      text: '커피를 마시는 주된 이유는?',
      options: [
        { id: 'a', text: '카페인 충전 (생존용)', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '달콤한 맛을 즐기려고', score: { americano: 0, latte: 3, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '새로운 맛을 경험하려고', score: { americano: 0, latte: 0, specialty: 3, nonCoffee: 0 } },
        { id: 'd', text: '분위기 내려고 (커피는 별로)', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 3,
      text: '커피 온도 선호도는?',
      options: [
        { id: 'a', text: '핫 아메리카노 최고', score: { americano: 3, latte: 1, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '따뜻한 라떼가 좋다', score: { americano: 0, latte: 3, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '아이스가 진리', score: { americano: 1, latte: 1, specialty: 2, nonCoffee: 1 } },
        { id: 'd', text: '상황에 따라 다름', score: { americano: 1, latte: 1, specialty: 1, nonCoffee: 1 } },
      ],
    },
    {
      id: 4,
      text: '커피의 단맛에 대해?',
      options: [
        { id: 'a', text: '설탕 절대 안 넣는다', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '약간의 단맛은 좋다', score: { americano: 0, latte: 3, specialty: 1, nonCoffee: 0 } },
        { id: 'c', text: '달달한 게 최고', score: { americano: 0, latte: 1, specialty: 2, nonCoffee: 2 } },
        { id: 'd', text: '쓴맛 자체가 싫다', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 5,
      text: '하루에 커피를 몇 잔 마시나요?',
      options: [
        { id: 'a', text: '3잔 이상', score: { americano: 3, latte: 1, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '1-2잔', score: { americano: 1, latte: 3, specialty: 1, nonCoffee: 0 } },
        { id: 'c', text: '가끔 마신다', score: { americano: 0, latte: 1, specialty: 2, nonCoffee: 1 } },
        { id: 'd', text: '거의 안 마신다', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 6,
      text: '새로운 카페에서 첫 주문은?',
      options: [
        { id: 'a', text: '기본 아메리카노', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '인기 메뉴 라떼류', score: { americano: 0, latte: 3, specialty: 1, nonCoffee: 0 } },
        { id: 'c', text: '시그니처 메뉴 도전', score: { americano: 0, latte: 0, specialty: 3, nonCoffee: 0 } },
        { id: 'd', text: '주스나 에이드', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 7,
      text: '커피 맛의 기준은?',
      options: [
        { id: 'a', text: '진하고 쌉싸름한 맛', score: { americano: 3, latte: 0, specialty: 1, nonCoffee: 0 } },
        { id: 'b', text: '부드럽고 고소한 맛', score: { americano: 0, latte: 3, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '독특하고 새로운 풍미', score: { americano: 0, latte: 0, specialty: 3, nonCoffee: 0 } },
        { id: 'd', text: '상큼하고 달콤한 맛', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 8,
      text: '집에서 커피를 내려 마시나요?',
      options: [
        { id: 'a', text: '매일 직접 내려 마신다', score: { americano: 3, latte: 0, specialty: 1, nonCoffee: 0 } },
        { id: 'b', text: '캡슐커피나 믹스커피', score: { americano: 1, latte: 2, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '가끔 내려 마신다', score: { americano: 1, latte: 1, specialty: 1, nonCoffee: 0 } },
        { id: 'd', text: '집에선 안 마신다', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 9,
      text: '커피에 곁들이는 것은?',
      options: [
        { id: 'a', text: '블랙으로 마신다', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '우유나 시럽 추가', score: { americano: 0, latte: 3, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '휘핑크림이나 토핑', score: { americano: 0, latte: 1, specialty: 2, nonCoffee: 1 } },
        { id: 'd', text: '커피 안 마셔서...', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 10,
      text: '카페인에 대한 민감도는?',
      options: [
        { id: 'a', text: '저녁에 마셔도 잘 잔다', score: { americano: 3, latte: 1, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '오후까지만 마신다', score: { americano: 1, latte: 3, specialty: 1, nonCoffee: 0 } },
        { id: 'c', text: '좀 예민한 편', score: { americano: 0, latte: 1, specialty: 2, nonCoffee: 1 } },
        { id: 'd', text: '카페인 때문에 안 마신다', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 11,
      text: '이상적인 커피 타임은?',
      options: [
        { id: 'a', text: '아침에 눈 뜨자마자', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '점심 먹고 디저트와 함께', score: { americano: 0, latte: 3, specialty: 1, nonCoffee: 1 } },
        { id: 'c', text: '여유로운 오후 티타임', score: { americano: 0, latte: 1, specialty: 3, nonCoffee: 1 } },
        { id: 'd', text: '커피보단 다른 음료', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
    {
      id: 12,
      text: '스타벅스에서 주로 시키는 메뉴는?',
      options: [
        { id: 'a', text: '아메리카노/에스프레소', score: { americano: 3, latte: 0, specialty: 0, nonCoffee: 0 } },
        { id: 'b', text: '라떼/마키아또 종류', score: { americano: 0, latte: 3, specialty: 0, nonCoffee: 0 } },
        { id: 'c', text: '시즌 한정 메뉴', score: { americano: 0, latte: 0, specialty: 3, nonCoffee: 0 } },
        { id: 'd', text: '피지오/티바나/주스', score: { americano: 0, latte: 0, specialty: 0, nonCoffee: 3 } },
      ],
    },
  ],
  results: {
    americano: {
      id: 'americano',
      title: '아메리카노 원탑',
      description: '당신은 진정한 커피 애호가! 복잡한 건 싫고 진하고 깔끔한 아메리카노가 최고입니다. 실용적이고 효율을 중시하는 성격이에요.',
      traits: ['실용주의', '효율 중시', '심플한 취향', '카페인 러버'],
      emoji: '☕',
      color: '#4A3728',
      recommendation: '콜드브루, 롱블랙, 에스프레소',
    },
    latte: {
      id: 'latte',
      title: '부드러운 라떼파',
      description: '커피도 좋지만 부드럽고 달콤한 맛을 즐기는 당신! 따뜻하고 포근한 것을 좋아하고, 조화로운 성격의 소유자입니다.',
      traits: ['조화로움', '부드러운 성격', '달콤함 추구', '편안함 선호'],
      emoji: '🥛',
      color: '#D4A574',
      recommendation: '바닐라라떼, 카라멜마끼아또, 플랫화이트',
    },
    specialty: {
      id: 'specialty',
      title: '스페셜티 탐험가',
      description: '새로운 맛에 대한 호기심이 가득한 당신! 시그니처 메뉴, 시즌 한정 메뉴를 즐기며 다양한 경험을 추구합니다.',
      traits: ['호기심 많음', '모험 정신', '트렌드 민감', '다양성 추구'],
      emoji: '✨',
      color: '#E6A8D7',
      recommendation: '아포카토, 콘파냐, 시즌 한정 메뉴',
    },
    nonCoffee: {
      id: 'nonCoffee',
      title: '논커피 러버',
      description: '커피보다는 다른 음료를 선호하는 당신! 상큼하고 달콤한 것을 좋아하고, 자신만의 취향이 뚜렷합니다.',
      traits: ['독자적 취향', '달콤함 선호', '카페인 민감', '다양한 선택'],
      emoji: '🧃',
      color: '#FFB347',
      recommendation: '레몬에이드, 자몽허니블랙티, 딸기스무디',
    },
  },
};
