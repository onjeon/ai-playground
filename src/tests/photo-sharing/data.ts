// photo-sharing 테스트 데이터
export const photosharingTest = {
  id: "photo-sharing",
  title: "사진 공유 유형 테스트",
  description: "SNS에 사진을 공유하는 당신만의 스타일로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "여행에서 사진을 찍으면 어떻게 하나요?",
      options: [
        { text: "바로바로 스토리에 올린다", type: "instant" },
        { text: "보정 후 피드에 올린다", type: "perfectionist" },
        { text: "친한 친구에게만 공유한다", type: "private" },
        { text: "폰에 저장만 해둔다", type: "collector" }
      ]
    },
    {
      id: 2,
      text: "셀카를 찍을 때 당신의 스타일은?",
      options: [
        { text: "각도와 조명을 신경 쓴다", type: "perfectionist" },
        { text: "자연스러운 순간을 포착한다", type: "instant" },
        { text: "친구와 함께 찍는 걸 좋아한다", type: "private" },
        { text: "셀카를 잘 안 찍는다", type: "collector" }
      ]
    },
    {
      id: 3,
      text: "맛있는 음식을 먹기 전에?",
      options: [
        { text: "먹기 전에 꼭 사진을 찍는다", type: "instant" },
        { text: "예쁘게 나오면 찍는다", type: "perfectionist" },
        { text: "같이 온 사람과 함께 찍는다", type: "private" },
        { text: "그냥 먹는다", type: "collector" }
      ]
    },
    {
      id: 4,
      text: "사진 보정은 어느 정도 하나요?",
      options: [
        { text: "필터 정도만 가볍게", type: "instant" },
        { text: "꼼꼼하게 보정한다", type: "perfectionist" },
        { text: "보정 없이 자연스럽게", type: "private" },
        { text: "보정할 줄 모른다", type: "collector" }
      ]
    },
    {
      id: 5,
      text: "SNS 피드 관리는 어떻게 하나요?",
      options: [
        { text: "생각날 때마다 올린다", type: "instant" },
        { text: "톤앤매너를 맞춰서 올린다", type: "perfectionist" },
        { text: "가끔 의미 있는 것만 올린다", type: "private" },
        { text: "피드에 거의 안 올린다", type: "collector" }
      ]
    },
    {
      id: 6,
      text: "좋아요와 댓글 반응은 신경 쓰나요?",
      options: [
        { text: "좋아요 수를 확인한다", type: "instant" },
        { text: "반응이 좋으면 기분 좋다", type: "perfectionist" },
        { text: "별로 신경 안 쓴다", type: "private" },
        { text: "SNS를 잘 안 해서 모르겠다", type: "collector" }
      ]
    },
    {
      id: 7,
      text: "추억 사진은 어떻게 보관하나요?",
      options: [
        { text: "SNS가 내 앨범이다", type: "instant" },
        { text: "클라우드에 정리해서 보관", type: "perfectionist" },
        { text: "가까운 사람에게만 공유", type: "private" },
        { text: "폰 갤러리에 그냥 쌓인다", type: "collector" }
      ]
    },
    {
      id: 8,
      text: "사진을 찍는 주된 이유는?",
      options: [
        { text: "공유하고 반응 받는 재미", type: "instant" },
        { text: "예쁜 순간을 남기고 싶어서", type: "perfectionist" },
        { text: "소중한 사람과의 추억", type: "private" },
        { text: "나중에 기억하려고", type: "collector" }
      ]
    },
    {
      id: 9,
      text: "남이 찍어준 사진이 마음에 안 들면?",
      options: [
        { text: "다시 찍어달라고 한다", type: "perfectionist" },
        { text: "그래도 올린다", type: "instant" },
        { text: "그냥 간직한다", type: "private" },
        { text: "삭제한다", type: "collector" }
      ]
    },
    {
      id: 10,
      text: "사진 공유의 만족감은 어디서 오나요?",
      options: [
        { text: "많은 사람의 관심", type: "instant" },
        { text: "완성도 높은 결과물", type: "perfectionist" },
        { text: "소중한 사람과의 공감", type: "private" },
        { text: "사진 공유에 큰 관심 없다", type: "collector" }
      ]
    }
  ],
  results: {
    instant: {
      type: "실시간 공유러",
      description: "당신은 일상을 바로바로 공유하는 소통형 스타일입니다. SNS가 곧 일기장이에요!",
      traits: ["사교적", "즉흥적", "소통 욕구", "트렌드 민감"],
      advice: "가끔은 순간을 온전히 즐기는 것도 좋아요. 모든 걸 공유하지 않아도 돼요!"
    },
    perfectionist: {
      type: "완벽주의 포토그래퍼",
      description: "당신은 완성도 높은 사진을 추구하는 스타일입니다. 미적 감각이 뛰어나요!",
      traits: ["심미안", "꼼꼼함", "창의성", "자기 표현"],
      advice: "완벽하지 않아도 괜찮아요. 자연스러운 순간도 충분히 아름다워요!"
    },
    private: {
      type: "프라이빗 공유러",
      description: "당신은 소중한 사람과만 추억을 나누는 스타일입니다. 진정한 관계를 중시해요!",
      traits: ["선택적 공유", "깊은 관계", "진정성", "프라이버시 중시"],
      advice: "가끔은 더 넓은 세상과도 소통해보세요. 새로운 인연이 생길 수 있어요!"
    },
    collector: {
      type: "조용한 수집가",
      description: "당신은 사진을 간직하지만 공유는 안 하는 스타일입니다. 추억은 마음속에!",
      traits: ["내향적", "독립적", "자기만족", "조용한 관찰자"],
      advice: "가끔 공유해보세요. 당신의 시선이 다른 사람에게 영감이 될 수 있어요!"
    }
  }
};
