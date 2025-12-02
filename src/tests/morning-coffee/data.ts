// morning-coffee 테스트 데이터
export const morningcoffeeTest = {
  id: "morning-coffee",
  title: "모닝 커피 유형 테스트",
  description: "아침에 커피를 마시는 습관으로 알아보는 당신의 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "아침에 일어나면 커피는 언제 마시나요?",
      options: [
        { text: "눈 뜨자마자 바로", type: "addict" },
        { text: "씻고 준비한 후에", type: "ritual" },
        { text: "출근해서 마신다", type: "social" },
        { text: "커피를 안 마신다", type: "free" }
      ]
    },
    {
      id: 2,
      text: "선호하는 커피 스타일은?",
      options: [
        { text: "진한 아메리카노", type: "addict" },
        { text: "라떼나 부드러운 커피", type: "ritual" },
        { text: "그날 기분에 따라 다름", type: "social" },
        { text: "커피보다 다른 음료", type: "free" }
      ]
    },
    {
      id: 3,
      text: "커피 없이 아침을 보내면?",
      options: [
        { text: "두통이 오고 집중이 안 된다", type: "addict" },
        { text: "뭔가 허전하다", type: "ritual" },
        { text: "괜찮다, 나중에 마시면 된다", type: "social" },
        { text: "평소와 다름없다", type: "free" }
      ]
    },
    {
      id: 4,
      text: "커피를 마시는 주된 이유는?",
      options: [
        { text: "잠을 깨려고", type: "addict" },
        { text: "여유로운 시간을 즐기려고", type: "ritual" },
        { text: "함께 마시는 시간이 좋아서", type: "social" },
        { text: "가끔 기분 전환으로", type: "free" }
      ]
    },
    {
      id: 5,
      text: "커피를 주로 어디서 마시나요?",
      options: [
        { text: "집에서 직접 내려서", type: "addict" },
        { text: "좋아하는 카페에서", type: "ritual" },
        { text: "회사나 사람들과 함께", type: "social" },
        { text: "특별히 정해진 곳 없음", type: "free" }
      ]
    },
    {
      id: 6,
      text: "하루에 커피를 몇 잔 마시나요?",
      options: [
        { text: "3잔 이상", type: "addict" },
        { text: "1-2잔 정도", type: "ritual" },
        { text: "상황에 따라 다르다", type: "social" },
        { text: "거의 안 마신다", type: "free" }
      ]
    },
    {
      id: 7,
      text: "커피 취향에 대한 고집은?",
      options: [
        { text: "내 취향이 확실하다", type: "addict" },
        { text: "좋아하는 메뉴가 있다", type: "ritual" },
        { text: "추천 받는 걸 좋아한다", type: "social" },
        { text: "아무거나 괜찮다", type: "free" }
      ]
    },
    {
      id: 8,
      text: "커피가 기분에 미치는 영향은?",
      options: [
        { text: "필수, 없으면 짜증난다", type: "addict" },
        { text: "마시면 기분이 좋아진다", type: "ritual" },
        { text: "같이 마시면 더 좋다", type: "social" },
        { text: "크게 영향 없다", type: "free" }
      ]
    },
    {
      id: 9,
      text: "커피 관련 지출은?",
      options: [
        { text: "아끼지 않는다", type: "addict" },
        { text: "좋은 커피에 투자한다", type: "ritual" },
        { text: "모임에서 주로 쓴다", type: "social" },
        { text: "거의 안 쓴다", type: "free" }
      ]
    },
    {
      id: 10,
      text: "커피는 당신에게 어떤 의미인가요?",
      options: [
        { text: "생존 필수품", type: "addict" },
        { text: "일상의 작은 행복", type: "ritual" },
        { text: "사람들과의 연결고리", type: "social" },
        { text: "그냥 음료 중 하나", type: "free" }
      ]
    }
  ],
  results: {
    addict: {
      type: "커피 중독자",
      description: "당신은 커피 없인 하루를 시작할 수 없는 진정한 커피 러버입니다. 카페인이 피에요!",
      traits: ["카페인 의존", "일관성", "루틴 중시", "효율 추구"],
      advice: "가끔은 디카페인도 시도해보세요. 몸에게 휴식을 주는 것도 좋아요!"
    },
    ritual: {
      type: "의식형 커피러",
      description: "당신은 커피를 통해 여유와 행복을 느끼는 스타일입니다. 한 잔의 여유가 소중해요!",
      traits: ["여유로움", "감성적", "자기 시간 중시", "품질 추구"],
      advice: "바쁜 날에도 그 여유를 잊지 마세요. 당신만의 리추얼이 힘이 돼요!"
    },
    social: {
      type: "소셜 커피러",
      description: "당신은 커피를 매개로 사람들과 연결되는 스타일입니다. 커피는 대화의 시작이에요!",
      traits: ["사교적", "유연함", "관계 중시", "개방적"],
      advice: "혼자 마시는 커피의 매력도 발견해보세요. 나만의 시간도 소중해요!"
    },
    free: {
      type: "커피 프리",
      description: "당신은 커피에 의존하지 않는 자유로운 스타일입니다. 카페인 없이도 에너지가 넘쳐요!",
      traits: ["자유로움", "건강 중시", "독립적", "자연스러움"],
      advice: "커피 문화도 가끔 경험해보세요. 새로운 즐거움이 있을 수 있어요!"
    }
  }
};
