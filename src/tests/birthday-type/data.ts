// birthday-type 테스트 데이터
export const birthdaytypeTest = {
  id: "birthday-type",
  title: "생일 유형 테스트",
  description: "생일을 보내는 방식으로 알아보는 당신의 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "생일을 어떻게 보내고 싶나요?",
      options: [
        { text: "많은 사람들과 파티", type: "celebrant" },
        { text: "소중한 사람과 조용히", type: "intimate" },
        { text: "혼자만의 시간", type: "solo" },
        { text: "평소와 다름없이", type: "casual" }
      ]
    },
    {
      id: 2,
      text: "생일 축하를 받을 때 기분은?",
      options: [
        { text: "기대하고 좋아한다", type: "celebrant" },
        { text: "고맙고 감동한다", type: "intimate" },
        { text: "쑥스럽다", type: "solo" },
        { text: "별 느낌 없다", type: "casual" }
      ]
    },
    {
      id: 3,
      text: "SNS에 생일 알림은?",
      options: [
        { text: "켜두고 축하 받는다", type: "celebrant" },
        { text: "가까운 사람만 알게 한다", type: "intimate" },
        { text: "꺼둔다", type: "solo" },
        { text: "신경 안 쓴다", type: "casual" }
      ]
    },
    {
      id: 4,
      text: "생일 선물에 대한 생각은?",
      options: [
        { text: "기대하고 좋아한다", type: "celebrant" },
        { text: "마음이 중요하다", type: "intimate" },
        { text: "받으면 부담스럽다", type: "solo" },
        { text: "있으면 좋고 없어도 괜찮다", type: "casual" }
      ]
    },
    {
      id: 5,
      text: "생일 케이크 촛불을 끌 때 소원은?",
      options: [
        { text: "진지하게 빈다", type: "celebrant" },
        { text: "감사하는 마음으로 빈다", type: "intimate" },
        { text: "형식적으로 한다", type: "solo" },
        { text: "케이크 없어도 괜찮다", type: "casual" }
      ]
    },
    {
      id: 6,
      text: "생일 당일 가장 하고 싶은 것은?",
      options: [
        { text: "특별한 이벤트/외식", type: "celebrant" },
        { text: "사랑하는 사람과 시간 보내기", type: "intimate" },
        { text: "하고 싶은 거 마음대로 하기", type: "solo" },
        { text: "평소대로 지내기", type: "casual" }
      ]
    },
    {
      id: 7,
      text: "생일이 다가오면 기분은?",
      options: [
        { text: "설렌다", type: "celebrant" },
        { text: "감사하다", type: "intimate" },
        { text: "나이 먹는 게 싫다", type: "solo" },
        { text: "별 생각 없다", type: "casual" }
      ]
    },
    {
      id: 8,
      text: "생일에 연락이 없으면?",
      options: [
        { text: "서운하다", type: "celebrant" },
        { text: "가까운 사람만 연락 오면 OK", type: "intimate" },
        { text: "오히려 편하다", type: "solo" },
        { text: "신경 안 쓴다", type: "casual" }
      ]
    },
    {
      id: 9,
      text: "생일 준비는 누가 하나요?",
      options: [
        { text: "직접 계획한다", type: "celebrant" },
        { text: "주변에서 해준다", type: "intimate" },
        { text: "혼자 조용히 보낸다", type: "solo" },
        { text: "준비 같은 건 없다", type: "casual" }
      ]
    },
    {
      id: 10,
      text: "생일에 가장 좋은 것은?",
      options: [
        { text: "축하와 관심", type: "celebrant" },
        { text: "소중한 사람과의 시간", type: "intimate" },
        { text: "나만의 특별한 시간", type: "solo" },
        { text: "딱히 없다", type: "casual" }
      ]
    }
  ],
  results: {
    celebrant: {
      type: "축제형",
      description: "당신은 생일을 특별하게 보내고 싶어하는 스타일입니다. 축하 받는 것을 즐기는 파티 러버!",
      traits: ["사교적", "긍정적", "에너지 넘침", "관심 욕구"],
      advice: "혼자만의 조용한 생일도 특별할 수 있어요. 가끔은 내면의 시간도 가져보세요!"
    },
    intimate: {
      type: "소수정예형",
      description: "당신은 소중한 사람과 함께 하는 생일을 좋아하는 스타일입니다. 깊은 관계를 중시해요!",
      traits: ["관계 중시", "감성적", "진정성", "소수 깊은 관계"],
      advice: "가끔은 더 많은 사람들과도 함께해보세요. 새로운 인연이 생길 수 있어요!"
    },
    solo: {
      type: "나홀로형",
      description: "당신은 생일을 조용히 혼자 보내는 것을 좋아하는 스타일입니다. 나만의 시간이 소중해요!",
      traits: ["독립적", "내향적", "자기만의 세계", "프라이버시 중시"],
      advice: "가끔은 주변의 축하도 받아보세요. 사랑받고 있다는 걸 느낄 수 있어요!"
    },
    casual: {
      type: "무관심형",
      description: "당신은 생일에 큰 의미를 두지 않는 담담한 스타일입니다. 평소와 다름없이 편해요!",
      traits: ["담담함", "실용적", "무던함", "일상 중시"],
      advice: "1년에 한 번뿐인 날이에요. 특별하게 자신을 위한 시간을 가져보세요!"
    }
  }
};
