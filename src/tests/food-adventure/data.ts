// food-adventure 테스트 데이터
export const foodadventureTest = {
  id: "food-adventure",
  title: "음식 모험 유형 테스트",
  description: "새로운 음식을 대하는 당신의 태도로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "처음 가는 식당에서 메뉴를 고를 때?",
      options: [
        { text: "새로운 메뉴에 도전한다", type: "adventurer" },
        { text: "무난한 인기 메뉴를 시킨다", type: "safe" },
        { text: "리뷰를 보고 결정한다", type: "researcher" },
        { text: "익숙한 종류의 음식을 고른다", type: "loyal" }
      ]
    },
    {
      id: 2,
      text: "외국 여행에서 현지 음식을 대하는 태도는?",
      options: [
        { text: "무조건 도전!", type: "adventurer" },
        { text: "안전해 보이는 것만", type: "safe" },
        { text: "미리 조사해서 간다", type: "researcher" },
        { text: "한식당을 찾는다", type: "loyal" }
      ]
    },
    {
      id: 3,
      text: "먹어본 적 없는 식재료가 있는 요리를 보면?",
      options: [
        { text: "궁금해서 시켜본다", type: "adventurer" },
        { text: "다른 사람이 먼저 먹으면 먹어본다", type: "safe" },
        { text: "그게 뭔지 검색부터 한다", type: "researcher" },
        { text: "안 먹는다", type: "loyal" }
      ]
    },
    {
      id: 4,
      text: "자주 가는 식당에서 새 메뉴가 나오면?",
      options: [
        { text: "바로 시켜본다", type: "adventurer" },
        { text: "맛있으면 다음에 시킨다", type: "safe" },
        { text: "후기를 찾아본다", type: "researcher" },
        { text: "원래 먹던 거 먹는다", type: "loyal" }
      ]
    },
    {
      id: 5,
      text: "음식 취향이 독특한 친구와 식사할 때?",
      options: [
        { text: "같이 새로운 거 먹어본다", type: "adventurer" },
        { text: "무난한 곳으로 타협한다", type: "safe" },
        { text: "그 음식에 대해 알아본다", type: "researcher" },
        { text: "내가 좋아하는 곳으로 간다", type: "loyal" }
      ]
    },
    {
      id: 6,
      text: "매운 음식, 도전적인 음식에 대한 생각은?",
      options: [
        { text: "도전이 재미있다", type: "adventurer" },
        { text: "적당한 수준까지만", type: "safe" },
        { text: "스코빌 지수를 확인한다", type: "researcher" },
        { text: "굳이 왜?", type: "loyal" }
      ]
    },
    {
      id: 7,
      text: "유행하는 음식이 생기면?",
      options: [
        { text: "빨리 먹어봐야 한다", type: "adventurer" },
        { text: "유행이 좀 지나면 가본다", type: "safe" },
        { text: "후기를 모은 후 결정한다", type: "researcher" },
        { text: "유행에 관심 없다", type: "loyal" }
      ]
    },
    {
      id: 8,
      text: "배달 앱에서 음식을 주문할 때?",
      options: [
        { text: "새로운 가게를 찾아본다", type: "adventurer" },
        { text: "평점 높은 곳으로 간다", type: "safe" },
        { text: "리뷰를 꼼꼼히 읽는다", type: "researcher" },
        { text: "단골집에서 시킨다", type: "loyal" }
      ]
    },
    {
      id: 9,
      text: "음식이 기대와 다르면?",
      options: [
        { text: "그래도 경험이다", type: "adventurer" },
        { text: "다음엔 안전한 걸로", type: "safe" },
        { text: "리뷰에 기록한다", type: "researcher" },
        { text: "역시 단골집이 최고", type: "loyal" }
      ]
    },
    {
      id: 10,
      text: "음식 선택의 기준은?",
      options: [
        { text: "새로운 경험", type: "adventurer" },
        { text: "실패 없는 선택", type: "safe" },
        { text: "정보와 평가", type: "researcher" },
        { text: "익숙함과 편안함", type: "loyal" }
      ]
    }
  ],
  results: {
    adventurer: {
      type: "음식 모험가",
      description: "당신은 새로운 맛을 탐험하는 걸 즐기는 스타일입니다. 먹는 것도 모험이에요!",
      traits: ["호기심", "도전 정신", "개방적", "경험 추구"],
      advice: "가끔은 익숙한 맛의 편안함도 좋아요. 모든 식사가 모험일 필요는 없답니다!"
    },
    safe: {
      type: "안전지향형",
      description: "당신은 검증된 맛을 선호하는 스타일입니다. 실패 없는 선택이 현명해요!",
      traits: ["신중함", "안정 추구", "현실적", "계획적"],
      advice: "가끔은 모험도 해보세요. 새로운 최애 음식을 발견할 수 있어요!"
    },
    researcher: {
      type: "리서치형",
      description: "당신은 정보를 바탕으로 선택하는 스타일입니다. 아는 만큼 맛있어요!",
      traits: ["분석적", "꼼꼼함", "정보력", "합리적"],
      advice: "가끔은 즉흥적으로 선택해보세요. 예상 밖의 발견이 있을 수 있어요!"
    },
    loyal: {
      type: "충성파",
      description: "당신은 익숙하고 좋아하는 것을 고수하는 스타일입니다. 단골의 가치를 아는 사람이에요!",
      traits: ["일관성", "편안함 추구", "전통 중시", "깊이 있는 취향"],
      advice: "새로운 세계도 열어보세요. 새로운 단골집이 생길 수도 있어요!"
    }
  }
};
