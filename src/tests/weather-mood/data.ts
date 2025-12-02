// weather-mood 테스트 데이터
export const weathermoodTest = {
  id: "weather-mood",
  title: "날씨별 기분 테스트",
  description: "날씨에 따라 달라지는 당신의 기분 패턴으로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "맑고 화창한 날 기분은 어떤가요?",
      options: [
        { text: "에너지가 넘친다", type: "sunny" },
        { text: "밖에 나가고 싶다", type: "active" },
        { text: "평소와 비슷하다", type: "stable" },
        { text: "너무 밝아서 피곤하다", type: "cozy" }
      ]
    },
    {
      id: 2,
      text: "비 오는 날 가장 하고 싶은 것은?",
      options: [
        { text: "창밖 보며 커피 마시기", type: "cozy" },
        { text: "그래도 약속 나가기", type: "active" },
        { text: "집에서 영화 보기", type: "sunny" },
        { text: "비 오나 마나 일상 유지", type: "stable" }
      ]
    },
    {
      id: 3,
      text: "흐리고 우중충한 날의 기분은?",
      options: [
        { text: "왠지 우울해진다", type: "sunny" },
        { text: "편안하고 좋다", type: "cozy" },
        { text: "날씨 상관없이 바쁘다", type: "active" },
        { text: "크게 영향 안 받는다", type: "stable" }
      ]
    },
    {
      id: 4,
      text: "눈이 내리면 기분이 어떤가요?",
      options: [
        { text: "설렌다, 밖에 나가고 싶다", type: "active" },
        { text: "로맨틱하고 좋다", type: "cozy" },
        { text: "춥고 불편하다", type: "sunny" },
        { text: "교통이 걱정된다", type: "stable" }
      ]
    },
    {
      id: 5,
      text: "무더운 여름 날씨에는?",
      options: [
        { text: "시원한 에어컨 아래가 최고", type: "cozy" },
        { text: "바다나 계곡에 가고 싶다", type: "active" },
        { text: "더워도 활동적이다", type: "sunny" },
        { text: "날씨 관계없이 계획대로", type: "stable" }
      ]
    },
    {
      id: 6,
      text: "바람이 많이 부는 날의 반응은?",
      options: [
        { text: "머리가 날리니까 싫다", type: "cozy" },
        { text: "상쾌하고 좋다", type: "active" },
        { text: "기분이 영향받는다", type: "sunny" },
        { text: "신경 안 쓴다", type: "stable" }
      ]
    },
    {
      id: 7,
      text: "가장 좋아하는 계절의 이유는?",
      options: [
        { text: "활동하기 좋아서", type: "active" },
        { text: "분위기가 좋아서", type: "cozy" },
        { text: "기분이 좋아져서", type: "sunny" },
        { text: "딱히 상관없다", type: "stable" }
      ]
    },
    {
      id: 8,
      text: "갑자기 날씨가 바뀌면?",
      options: [
        { text: "기분도 같이 바뀐다", type: "sunny" },
        { text: "계획을 조정한다", type: "active" },
        { text: "집에서 보내는 핑계가 된다", type: "cozy" },
        { text: "유연하게 대처한다", type: "stable" }
      ]
    },
    {
      id: 9,
      text: "날씨 예보를 얼마나 확인하나요?",
      options: [
        { text: "매일 꼭 확인한다", type: "active" },
        { text: "외출 전에만 본다", type: "stable" },
        { text: "날씨 따라 계획이 바뀐다", type: "sunny" },
        { text: "별로 안 본다", type: "cozy" }
      ]
    },
    {
      id: 10,
      text: "가장 기분 좋은 날씨는?",
      options: [
        { text: "맑고 따뜻한 날", type: "sunny" },
        { text: "야외 활동하기 좋은 날", type: "active" },
        { text: "비 오는 날 집에서", type: "cozy" },
        { text: "어떤 날씨든 괜찮다", type: "stable" }
      ]
    }
  ],
  results: {
    sunny: {
      type: "햇살 의존형",
      description: "당신은 밝은 날씨에 에너지를 얻는 스타일입니다. 태양이 당신의 비타민이에요!",
      traits: ["긍정적", "활력", "외향적", "날씨 민감"],
      advice: "흐린 날에도 나만의 햇살을 만들어보세요. 실내 조명이나 취미가 도움이 돼요!"
    },
    active: {
      type: "전천후 활동형",
      description: "당신은 어떤 날씨든 활동적으로 보내는 스타일입니다. 날씨는 핑계일 뿐이에요!",
      traits: ["활동적", "적응력", "계획적", "에너지 넘침"],
      advice: "가끔은 날씨 탓 하며 쉬어가도 괜찮아요. 휴식도 활동이에요!"
    },
    cozy: {
      type: "아늑함 추구형",
      description: "당신은 날씨를 핑계로 집에서 쉬는 걸 좋아하는 스타일입니다. 비 오는 날이 최고죠!",
      traits: ["내향적", "감성적", "여유로움", "분위기 중시"],
      advice: "좋은 날씨도 즐겨보세요. 밖에서만 느낄 수 있는 행복도 있답니다!"
    },
    stable: {
      type: "날씨 무관형",
      description: "당신은 날씨에 크게 영향받지 않는 안정적인 스타일입니다. 일관성이 장점이에요!",
      traits: ["안정적", "독립적", "일관성", "내적 평화"],
      advice: "가끔은 날씨에 맞춰 감정을 표현해보세요. 변화도 좋은 자극이 돼요!"
    }
  }
};
