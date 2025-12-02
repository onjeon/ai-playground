// online-shopping 테스트 데이터
export const onlineshoppingTest = {
  id: "online-shopping",
  title: "온라인 쇼핑 유형 테스트",
  description: "온라인 쇼핑할 때 당신의 패턴으로 알아보는 소비 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "온라인 쇼핑몰에 들어가면 가장 먼저 하는 것은?",
      options: [
        { text: "필요한 물건만 검색한다", type: "practical" },
        { text: "세일/할인 코너부터 본다", type: "hunter" },
        { text: "신상품을 구경한다", type: "emotional" },
        { text: "일단 이것저것 구경한다", type: "thinker" }
      ]
    },
    {
      id: 2,
      text: "장바구니에 물건을 담는 스타일은?",
      options: [
        { text: "살 것만 담고 바로 결제", type: "practical" },
        { text: "담아두고 할인 쿠폰 기다린다", type: "hunter" },
        { text: "예쁜 건 일단 다 담는다", type: "emotional" },
        { text: "담아두고 며칠 고민한다", type: "thinker" }
      ]
    },
    {
      id: 3,
      text: "배송비가 3,000원 더 내야 무료배송일 때?",
      options: [
        { text: "배송비 낸다", type: "practical" },
        { text: "뭐라도 더 사서 무료배송 만든다", type: "hunter" },
        { text: "무료배송 쿠폰을 찾는다", type: "emotional" },
        { text: "일단 장바구니에 더 담고 고민한다", type: "thinker" }
      ]
    },
    {
      id: 4,
      text: "상품 리뷰는 어떻게 보나요?",
      options: [
        { text: "별점만 확인한다", type: "practical" },
        { text: "나쁜 리뷰 위주로 본다", type: "hunter" },
        { text: "사진 리뷰만 본다", type: "emotional" },
        { text: "꼼꼼히 다 읽는다", type: "thinker" }
      ]
    },
    {
      id: 5,
      text: "새벽 배송이 가능한 제품을 발견했다!",
      options: [
        { text: "급하지 않으면 일반 배송", type: "practical" },
        { text: "새벽 배송 좋아! 바로 주문", type: "hunter" },
        { text: "새벽 배송 추가금 확인부터", type: "emotional" },
        { text: "내일 아침에 올 생각에 설렌다", type: "thinker" }
      ]
    },
    {
      id: 6,
      text: "위시리스트(찜하기)는 어떻게 활용하나요?",
      options: [
        { text: "잘 안 쓴다", type: "practical" },
        { text: "할인 알림 받으려고 찜해둔다", type: "hunter" },
        { text: "갖고 싶은 건 일단 다 찜한다", type: "emotional" },
        { text: "찜해두고 한참 후에 다시 본다", type: "thinker" }
      ]
    },
    {
      id: 7,
      text: "충동구매 후 기분은 어떤가요?",
      options: [
        { text: "충동구매를 안 한다", type: "practical" },
        { text: "싸게 샀으니 괜찮아!", type: "hunter" },
        { text: "행복하다, 후회는 나중에", type: "emotional" },
        { text: "고민되다가 결국 취소한다", type: "thinker" }
      ]
    },
    {
      id: 8,
      text: "쿠폰이나 포인트 활용 방식은?",
      options: [
        { text: "있으면 쓰고 없으면 말고", type: "practical" },
        { text: "최대한 활용하려고 계산한다", type: "hunter" },
        { text: "귀찮아서 잘 안 쓴다", type: "emotional" },
        { text: "쿠폰 쓰려고 더 사게 된다", type: "thinker" }
      ]
    },
    {
      id: 9,
      text: "같은 물건이 여러 쇼핑몰에 있다면?",
      options: [
        { text: "자주 쓰는 곳에서 산다", type: "practical" },
        { text: "가격 비교해서 제일 싼 곳", type: "hunter" },
        { text: "리뷰 좋은 곳에서 산다", type: "emotional" },
        { text: "여러 군데 장바구니에 담아둔다", type: "thinker" }
      ]
    },
    {
      id: 10,
      text: "온라인 쇼핑은 주로 언제 하나요?",
      options: [
        { text: "필요할 때만", type: "practical" },
        { text: "세일 기간에 집중적으로", type: "hunter" },
        { text: "심심할 때 수시로", type: "emotional" },
        { text: "자기 전 침대에서", type: "thinker" }
      ]
    }
  ],
  results: {
    practical: {
      type: "실용적 구매자",
      description: "당신은 필요한 것만 빠르게 구매하는 효율적인 쇼핑러입니다. 계획적 소비의 달인이에요!",
      traits: ["계획적", "효율적", "절제력", "목표 지향적"],
      advice: "가끔은 구경하는 즐거움도 누려보세요. 쇼핑도 하나의 힐링이 될 수 있어요!"
    },
    hunter: {
      type: "알뜰 헌터",
      description: "당신은 최저가와 할인을 놓치지 않는 스마트 쇼핑러입니다. 가성비의 왕이에요!",
      traits: ["정보력", "가성비 추구", "인내심", "분석력"],
      advice: "할인에만 집중하다 보면 필요 없는 것도 사게 돼요. 정말 필요한지 한 번 더 생각해보세요!"
    },
    emotional: {
      type: "감성 쇼핑러",
      description: "당신은 마음에 드는 것을 발견하면 행복한 감성적 쇼핑러입니다. 쇼핑이 곧 힐링이에요!",
      traits: ["감성적", "트렌드 민감", "자기 만족", "심미안"],
      advice: "쇼핑 예산을 정해두면 더 만족스러운 소비를 할 수 있어요. 현명한 힐링을!"
    },
    thinker: {
      type: "고민러 쇼핑러",
      description: "당신은 신중하게 고민하는 사려 깊은 쇼핑러입니다. 후회 없는 구매를 추구해요!",
      traits: ["신중함", "분석적", "완벽주의", "정보 수집"],
      advice: "너무 오래 고민하면 품절될 수 있어요. 어느 정도 고민했다면 결정하는 것도 방법!"
    }
  }
};
