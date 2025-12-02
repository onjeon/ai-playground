// shopping-persona 테스트 데이터
export const shoppingpersonaTest = {
  id: 'shopping-persona',
  title: '쇼핑 페르소나 테스트',
  description: '당신의 쇼핑 스타일은? 충동구매러? 비교분석러? 장바구니 관리자? 진짜 쇼핑 성격을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '쇼핑할 때 가장 먼저 하는 행동은?',
      options: [
        { text: '끌리는 거 바로 집어들기', type: 'impulse' },
        { text: '가격 비교 앱 켜기', type: 'analyst' },
        { text: '장바구니에 일단 담아두기', type: 'cart' },
        { text: '진짜 필요한지 한번 더 생각', type: 'minimal' }
      ]
    },
    {
      id: 2,
      text: '"오늘만 세일!" 문구를 보면?',
      options: [
        { text: '사야 해! 이건 운명이야', type: 'impulse' },
        { text: '진짜 할인인지 원가 확인부터', type: 'analyst' },
        { text: '장바구니에 담고 내일까지 고민', type: 'cart' },
        { text: '원래 살 생각 없었으면 패스', type: 'minimal' }
      ]
    },
    {
      id: 3,
      text: '온라인 쇼핑몰 장바구니 상태는?',
      options: [
        { text: '비어있음 (담으면 바로 결제하니까)', type: 'impulse' },
        { text: '비교용 상품들로 가득', type: 'analyst' },
        { text: '위시리스트처럼 운영 중', type: 'cart' },
        { text: '거의 안 씀, 필요할 때 바로 검색', type: 'minimal' }
      ]
    },
    {
      id: 4,
      text: '옷 쇼핑할 때 당신은?',
      options: [
        { text: '예쁘면 일단 사고 봄', type: 'impulse' },
        { text: '소재, 가격, 활용도 꼼꼼히 체크', type: 'analyst' },
        { text: '피팅하고 사진 찍어서 나중에 결정', type: 'cart' },
        { text: '진짜 필요한 것만, 기본템 위주', type: 'minimal' }
      ]
    },
    {
      id: 5,
      text: '쇼핑 후 후회한 적이?',
      options: [
        { text: '자주... 왜 샀지?', type: 'impulse' },
        { text: '거의 없음, 철저히 검토하니까', type: 'analyst' },
        { text: '가끔, 고민하다 품절됐을 때', type: 'cart' },
        { text: '별로 없음, 애초에 많이 안 사서', type: 'minimal' }
      ]
    },
    {
      id: 6,
      text: '친구랑 쇼핑 가면?',
      options: [
        { text: '이것저것 추천하며 같이 흥분', type: 'impulse' },
        { text: '친구 물건 가성비 분석해줌', type: 'analyst' },
        { text: '천천히 구경, 바로 결제 안 함', type: 'cart' },
        { text: '친구 따라다니며 구경만', type: 'minimal' }
      ]
    },
    {
      id: 7,
      text: '새로 나온 신상품을 보면?',
      options: [
        { text: '갖고 싶어! 남들보다 먼저!', type: 'impulse' },
        { text: '리뷰 쌓일 때까지 기다림', type: 'analyst' },
        { text: '위시리스트에 추가', type: 'cart' },
        { text: '그거 꼭 필요해? 기존 거 있잖아', type: 'minimal' }
      ]
    },
    {
      id: 8,
      text: '한 달 쇼핑 예산은?',
      options: [
        { text: '예산? 그때그때 다름 (통제 안 됨)', type: 'impulse' },
        { text: '철저하게 관리, 가계부 작성', type: 'analyst' },
        { text: '있긴 한데 가끔 초과', type: 'cart' },
        { text: '거의 안 씀, 필요한 것만', type: 'minimal' }
      ]
    },
    {
      id: 9,
      text: '결제 버튼을 누르기 전 마지막 생각은?',
      options: [
        { text: '(이미 눌렀음)', type: 'impulse' },
        { text: '이게 최저가 맞나? 한번 더 확인', type: 'analyst' },
        { text: '내일까지 고민해볼까...', type: 'cart' },
        { text: '이거 없으면 정말 안 되나?', type: 'minimal' }
      ]
    },
    {
      id: 10,
      text: '쇼핑에 대한 당신의 철학은?',
      options: [
        { text: '인생은 한 번! 사고 싶을 때 사야지', type: 'impulse' },
        { text: '똑똑하게 사야 진짜 쇼핑 고수', type: 'analyst' },
        { text: '천천히 고민해서 후회 없이', type: 'cart' },
        { text: '적게 사고, 좋은 것만', type: 'minimal' }
      ]
    }
  ],
  results: {
    impulse: {
      type: '충동구매 전사',
      title: '🛒 충동구매 전사',
      description: '보면 사고, 예쁘면 사고, 세일하면 사는 당신! 쇼핑은 힐링이자 스포츠예요.',
      traits: [
        '감정적 구매',
        '결제 속도 번개급',
        '새로운 것에 열광',
        '쇼핑 = 행복'
      ],
      shoppingStyle: '열정적 쇼퍼',
      spendingTendency: '변동적 (높음)',
      advice: '쇼핑의 기쁨은 인정! 하지만 24시간 규칙을 만들어보세요. 담아두고 하루 지나면 다시 생각해보기. 충동은 식을 수 있어요!'
    },
    analyst: {
      type: '분석의 신',
      title: '📊 분석의 신',
      description: '가격, 리뷰, 스펙 완벽 분석! 모든 구매에 데이터가 함께하는 똑똑한 쇼퍼.',
      traits: [
        '철저한 비교분석',
        '가성비 추구',
        '리뷰 정독',
        '최저가 사냥꾼'
      ],
      shoppingStyle: '이성적 쇼퍼',
      spendingTendency: '계획적 (절약형)',
      advice: '똑똑한 소비 습관이에요! 하지만 가끔은 분석 피로도 있어요. 작은 것은 그냥 마음 가는 대로 사도 괜찮아요!'
    },
    cart: {
      type: '장바구니 관리자',
      title: '🧺 장바구니 관리자',
      description: '일단 담아! 결제는 나중에. 장바구니가 당신의 위시리스트이자 명상 공간이에요.',
      traits: [
        '신중한 결정',
        '장바구니 = 위시리스트',
        '고민을 즐김',
        '품절에 아쉬움'
      ],
      shoppingStyle: '신중한 쇼퍼',
      spendingTendency: '중간 (신중)',
      advice: '신중함은 좋지만, 너무 오래 고민하면 품절돼요! 1주일 이상 장바구니에 있는 건 정리 타임을 가져보세요.'
    },
    minimal: {
      type: '미니멀 쇼퍼',
      title: '🌿 미니멀 쇼퍼',
      description: '필요한 것만, 좋은 것만. 적게 사고 오래 쓰는 지속가능한 쇼핑의 달인!',
      traits: [
        '필요성 우선',
        '질 > 양',
        '충동구매 면역',
        '미니멀 라이프'
      ],
      shoppingStyle: '의식적 쇼퍼',
      spendingTendency: '낮음 (절제)',
      advice: '환경에도 좋고 지갑에도 좋은 습관! 하지만 가끔은 자신에게 선물하는 것도 괜찮아요. 당신도 소중하니까요!'
    }
  }
};
