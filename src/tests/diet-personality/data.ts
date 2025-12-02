// diet-personality 테스트 데이터
export const dietpersonalityTest = {
  id: "diet-personality",
  title: "다이어트 성격 테스트",
  description: "다이어트할 때 당신의 패턴으로 알아보는 성격 유형 테스트!",
  questions: [
    {
      id: 1,
      text: "다이어트를 시작할 때 가장 먼저 하는 것은?",
      options: [
        { text: "운동 계획을 세운다", type: "strict" },
        { text: "냉장고부터 정리한다", type: "balance" },
        { text: "SNS에 선언한다", type: "emotional" },
        { text: "일단 내일부터 시작", type: "tomorrow" }
      ]
    },
    {
      id: 2,
      text: "야식의 유혹이 찾아왔다! 어떻게 할까?",
      options: [
        { text: "물을 마시며 참는다", type: "strict" },
        { text: "건강한 간식으로 대체한다", type: "balance" },
        { text: "오늘만 먹고 내일 운동한다", type: "emotional" },
        { text: "참는 게 더 스트레스, 먹는다", type: "tomorrow" }
      ]
    },
    {
      id: 3,
      text: "다이어트 중 회식/약속이 잡혔다면?",
      options: [
        { text: "샐러드만 먹겠다고 선언한다", type: "strict" },
        { text: "적당히 먹고 다음 날 조절한다", type: "balance" },
        { text: "오늘은 쉬어가는 날!", type: "emotional" },
        { text: "핑계로 약속을 피한다", type: "tomorrow" }
      ]
    },
    {
      id: 4,
      text: "체중계를 얼마나 자주 보나요?",
      options: [
        { text: "매일 아침 체크한다", type: "strict" },
        { text: "일주일에 한 번 정도", type: "balance" },
        { text: "기분 좋을 때만", type: "emotional" },
        { text: "두렵다, 잘 안 본다", type: "tomorrow" }
      ]
    },
    {
      id: 5,
      text: "다이어트 식단은 어떻게 관리하나요?",
      options: [
        { text: "칼로리 앱으로 철저히 기록", type: "strict" },
        { text: "대충 머릿속으로 계산", type: "balance" },
        { text: "건강해 보이는 것만 먹는다", type: "emotional" },
        { text: "식단? 그게 뭐지?", type: "tomorrow" }
      ]
    },
    {
      id: 6,
      text: "운동은 어떻게 하고 있나요?",
      options: [
        { text: "매일 정해진 시간에 한다", type: "strict" },
        { text: "시간 날 때 틈틈이 한다", type: "balance" },
        { text: "영상 보면서 따라 한다", type: "emotional" },
        { text: "운동은 싫어, 식단만 한다", type: "tomorrow" }
      ]
    },
    {
      id: 7,
      text: "다이어트 중 정체기가 왔다면?",
      options: [
        { text: "더 열심히 한다", type: "strict" },
        { text: "방법을 바꿔본다", type: "balance" },
        { text: "일단 쉬어간다", type: "emotional" },
        { text: "포기하고 싶어진다", type: "tomorrow" }
      ]
    },
    {
      id: 8,
      text: "치팅데이에 대한 생각은?",
      options: [
        { text: "치팅데이는 없다", type: "strict" },
        { text: "계획된 치팅데이만 OK", type: "balance" },
        { text: "치팅데이 자주 한다", type: "emotional" },
        { text: "매일이 치팅데이 같다", type: "tomorrow" }
      ]
    },
    {
      id: 9,
      text: "다이어트 성공 비결이 뭐라고 생각하나요?",
      options: [
        { text: "철저한 자기 관리", type: "strict" },
        { text: "꾸준함과 습관", type: "balance" },
        { text: "동기부여와 의지", type: "emotional" },
        { text: "다이어트는 원래 힘들다", type: "tomorrow" }
      ]
    },
    {
      id: 10,
      text: "목표 체중에 도달하면 뭘 할 건가요?",
      options: [
        { text: "유지 관리에 돌입한다", type: "strict" },
        { text: "원하던 옷을 산다", type: "balance" },
        { text: "맛있는 거 먹으러 간다", type: "emotional" },
        { text: "그 날이 올까...?", type: "tomorrow" }
      ]
    }
  ],
  results: {
    strict: {
      type: "철벽 관리자형",
      description: "당신은 계획대로 철저하게 다이어트하는 스타일입니다. 목표를 향한 의지가 강해요!",
      traits: ["의지력", "계획성", "자기 관리", "목표 지향"],
      advice: "가끔은 자신에게 보상을 주세요. 너무 엄격하면 지칠 수 있어요!"
    },
    balance: {
      type: "밸런스형",
      description: "당신은 적당히 조절하며 지속하는 스타일입니다. 꾸준함이 진짜 실력이에요!",
      traits: ["균형감", "지속력", "유연함", "현실적"],
      advice: "지금 방식이 가장 건강해요. 꾸준히 하되, 목표를 명확히 해보세요!"
    },
    emotional: {
      type: "감성 다이어터형",
      description: "당신은 동기부여로 움직이는 감성적 다이어터입니다. 의욕 넘칠 때 최강이에요!",
      traits: ["열정적", "즉흥적", "감성적", "순간 집중력"],
      advice: "꾸준함을 기르면 더 좋은 결과가 올 거예요. 작은 습관부터 시작해보세요!"
    },
    tomorrow: {
      type: "내일부터형",
      description: "당신은 다이어트보다 맛있는 게 더 좋은 솔직한 스타일입니다. 인생은 즐기는 거예요!",
      traits: ["솔직함", "현실적", "자기 수용", "즐기는 삶"],
      advice: "건강을 위해 조금씩 시작해보세요. 작은 변화가 큰 차이를 만들어요!"
    }
  }
};
