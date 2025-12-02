// shopping-cart 테스트 데이터
export const shoppingcartTest = {
  id: "shopping-cart",
  title: "장바구니 유형 테스트",
  description: "쇼핑 장바구니 사용 패턴으로 알아보는 당신의 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "장바구니에 물건을 담는 스타일은?",
      options: [
        { text: "필요한 것만 딱딱 담는다", type: "minimalist" },
        { text: "일단 마음에 드는 건 다 담는다", type: "collector" },
        { text: "비교하면서 신중하게 담는다", type: "analyst" },
        { text: "세일 상품 위주로 담는다", type: "hunter" }
      ]
    },
    {
      id: 2,
      text: "장바구니에 물건이 쌓이면?",
      options: [
        { text: "바로 결제한다", type: "minimalist" },
        { text: "그대로 둔다, 언젠간 사겠지", type: "collector" },
        { text: "하나씩 다시 검토한다", type: "analyst" },
        { text: "가격 떨어지길 기다린다", type: "hunter" }
      ]
    },
    {
      id: 3,
      text: "장바구니에 담아둔 물건이 품절되면?",
      options: [
        { text: "아쉽지만 넘어간다", type: "minimalist" },
        { text: "재입고 알림을 설정한다", type: "collector" },
        { text: "다른 곳에서 찾아본다", type: "analyst" },
        { text: "원래 살 생각 없었던 거라 괜찮다", type: "hunter" }
      ]
    },
    {
      id: 4,
      text: "장바구니 정리는 얼마나 자주 하나요?",
      options: [
        { text: "항상 깔끔하게 유지한다", type: "minimalist" },
        { text: "거의 안 한다", type: "collector" },
        { text: "주기적으로 검토한다", type: "analyst" },
        { text: "세일 전에 정리한다", type: "hunter" }
      ]
    },
    {
      id: 5,
      text: "장바구니에 담고 결제 안 한 이유는?",
      options: [
        { text: "당장 필요 없어서", type: "minimalist" },
        { text: "나중에 사려고", type: "collector" },
        { text: "더 고민 중이라서", type: "analyst" },
        { text: "할인 기다리는 중", type: "hunter" }
      ]
    },
    {
      id: 6,
      text: "쇼핑몰에서 장바구니 담기 vs 바로구매?",
      options: [
        { text: "바로구매가 많다", type: "minimalist" },
        { text: "장바구니 담기가 많다", type: "collector" },
        { text: "비교 후 결정한다", type: "analyst" },
        { text: "쿠폰 적용해서 결정한다", type: "hunter" }
      ]
    },
    {
      id: 7,
      text: "여러 쇼핑몰에 장바구니가 있다면?",
      options: [
        { text: "한 곳에만 모아둔다", type: "minimalist" },
        { text: "여러 곳에 다 담아둔다", type: "collector" },
        { text: "가격 비교용으로 담아둔다", type: "analyst" },
        { text: "세일하는 곳에서 산다", type: "hunter" }
      ]
    },
    {
      id: 8,
      text: "장바구니 알림이 오면?",
      options: [
        { text: "알림을 끈다", type: "minimalist" },
        { text: "확인은 하는데 냅둔다", type: "collector" },
        { text: "다시 검토해본다", type: "analyst" },
        { text: "할인 알림이면 바로 확인", type: "hunter" }
      ]
    },
    {
      id: 9,
      text: "장바구니 담은 물건의 운명은?",
      options: [
        { text: "대부분 구매한다", type: "minimalist" },
        { text: "대부분 그냥 둔다", type: "collector" },
        { text: "절반 정도 구매한다", type: "analyst" },
        { text: "할인될 때 구매한다", type: "hunter" }
      ]
    },
    {
      id: 10,
      text: "장바구니 사용의 목적은?",
      options: [
        { text: "결제 전 임시 보관", type: "minimalist" },
        { text: "갖고 싶은 것 목록", type: "collector" },
        { text: "비교 분석용", type: "analyst" },
        { text: "할인 감시용", type: "hunter" }
      ]
    }
  ],
  results: {
    minimalist: {
      type: "미니멀 쇼퍼",
      description: "당신은 필요한 것만 담고 바로 사는 효율적인 쇼퍼입니다. 깔끔한 소비를 해요!",
      traits: ["효율적", "결단력", "절제력", "목적 지향"],
      advice: "가끔은 위시리스트도 만들어보세요. 나중에 필요할 때 편리해요!"
    },
    collector: {
      type: "수집가 쇼퍼",
      description: "당신은 마음에 드는 건 일단 담아두는 스타일입니다. 장바구니가 곧 위시리스트에요!",
      traits: ["수집 본능", "여유로움", "우유부단함", "가능성 열어둠"],
      advice: "주기적으로 정리해보세요. 진짜 원하는 것을 발견할 수 있어요!"
    },
    analyst: {
      type: "분석형 쇼퍼",
      description: "당신은 꼼꼼히 비교하고 검토하는 신중한 쇼퍼입니다. 후회 없는 쇼핑을 해요!",
      traits: ["분석적", "신중함", "정보 수집", "합리적 소비"],
      advice: "때론 직감을 믿어보세요. 너무 오래 고민하면 품절될 수 있어요!"
    },
    hunter: {
      type: "할인 헌터",
      description: "당신은 최적의 타이밍을 노리는 전략적 쇼퍼입니다. 가성비의 달인이에요!",
      traits: ["전략적", "인내심", "가성비 추구", "정보력"],
      advice: "할인 아닐 때도 필요하면 사세요. 시간도 비용이에요!"
    }
  }
};
