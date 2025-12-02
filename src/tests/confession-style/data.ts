// confession-style 테스트 데이터
export const confessionstyleTest = {
  id: "confession-style",
  title: "고백 스타일 테스트",
  description: "좋아하는 사람에게 마음을 전할 때 당신만의 고백 스타일을 알아보세요!",
  questions: [
    {
      id: 1,
      text: "마음에 드는 사람이 생겼다. 가장 먼저 어떻게 할까?",
      options: [
        { text: "바로 연락처를 물어본다", type: "direct" },
        { text: "자연스러운 기회를 기다린다", type: "careful" },
        { text: "공통 지인을 통해 정보를 얻는다", type: "perfect" },
        { text: "SNS로 먼저 접근한다", type: "mood" }
      ]
    },
    {
      id: 2,
      text: "고백하기 전 어느 정도 친해져야 할까?",
      options: [
        { text: "마음이 확실하면 바로 한다", type: "direct" },
        { text: "충분히 친해진 후에 한다", type: "careful" },
        { text: "상대 마음을 확인한 후에 한다", type: "perfect" },
        { text: "분위기가 무르익으면 한다", type: "mood" }
      ]
    },
    {
      id: 3,
      text: "고백 장소로 선호하는 곳은?",
      options: [
        { text: "어디든 상관없다, 지금 당장", type: "direct" },
        { text: "조용하고 프라이빗한 곳", type: "careful" },
        { text: "추억이 될 만한 특별한 장소", type: "perfect" },
        { text: "분위기 좋은 카페나 레스토랑", type: "mood" }
      ]
    },
    {
      id: 4,
      text: "고백할 때 주로 어떤 말을 할 것 같아?",
      options: [
        { text: "좋아해, 사귀자", type: "direct" },
        { text: "내 마음이 이래...어떻게 생각해?", type: "careful" },
        { text: "너에 대한 내 마음을 길게 설명한다", type: "perfect" },
        { text: "너랑 있으면 행복해, 우리 만나볼래?", type: "mood" }
      ]
    },
    {
      id: 5,
      text: "고백이 거절당했다면 어떻게 할까?",
      options: [
        { text: "깨끗이 인정하고 다음 기회를 노린다", type: "direct" },
        { text: "거리를 두고 마음을 정리한다", type: "careful" },
        { text: "왜인지 물어보고 다시 도전한다", type: "perfect" },
        { text: "친구로 남으면서 기회를 본다", type: "mood" }
      ]
    },
    {
      id: 6,
      text: "상대가 나를 좋아하는지 확인하는 방법은?",
      options: [
        { text: "직접 물어본다", type: "direct" },
        { text: "행동과 눈빛을 관찰한다", type: "careful" },
        { text: "친구를 통해 알아본다", type: "perfect" },
        { text: "밀당으로 반응을 본다", type: "mood" }
      ]
    },
    {
      id: 7,
      text: "고백 전날 밤, 당신의 상태는?",
      options: [
        { text: "떨리지만 자신 있다", type: "direct" },
        { text: "여러 시나리오를 상상한다", type: "careful" },
        { text: "완벽한 대본을 준비한다", type: "perfect" },
        { text: "분위기에 맡기자고 생각한다", type: "mood" }
      ]
    },
    {
      id: 8,
      text: "이성에게 먼저 다가가는 편인가요?",
      options: [
        { text: "항상 내가 먼저 다가간다", type: "direct" },
        { text: "상대가 관심 보이면 다가간다", type: "careful" },
        { text: "신중하게 타이밍을 재다가 다가간다", type: "perfect" },
        { text: "자연스러운 상황을 만들어 다가간다", type: "mood" }
      ]
    },
    {
      id: 9,
      text: "고백에 선물이나 이벤트가 필요할까?",
      options: [
        { text: "말로 충분하다", type: "direct" },
        { text: "작은 꽃 정도면 좋겠다", type: "careful" },
        { text: "정성스런 선물을 준비한다", type: "perfect" },
        { text: "분위기에 맞는 이벤트를 한다", type: "mood" }
      ]
    },
    {
      id: 10,
      text: "고백 성공 후 첫 데이트는?",
      options: [
        { text: "바로 그 자리에서 첫 데이트!", type: "direct" },
        { text: "천천히 계획을 세운다", type: "careful" },
        { text: "상대가 좋아할 곳을 리서치한다", type: "perfect" },
        { text: "둘이 같이 정한다", type: "mood" }
      ]
    }
  ],
  results: {
    direct: {
      type: "직진 고백러",
      description: "당신은 마음이 생기면 망설이지 않는 직진 스타일입니다. 용기 있는 사랑꾼이에요!",
      traits: ["용기 있음", "솔직함", "자신감", "결단력"],
      advice: "때로는 상대의 템포도 맞춰보세요. 서두르지 않아도 진심은 전달된답니다!"
    },
    careful: {
      type: "신중파 고백러",
      description: "당신은 충분히 준비하고 확신이 생길 때 고백하는 스타일입니다. 진중한 사랑을 하는 타입이에요!",
      traits: ["신중함", "진지함", "관찰력", "깊은 감정"],
      advice: "너무 오래 기다리면 타이밍을 놓칠 수 있어요. 적당한 때가 되면 용기를 내보세요!"
    },
    perfect: {
      type: "완벽주의 고백러",
      description: "당신은 모든 것을 완벽하게 준비해 고백하는 스타일입니다. 정성 가득한 로맨티스트에요!",
      traits: ["꼼꼼함", "정성스러움", "로맨틱", "노력파"],
      advice: "완벽함보다 진심이 중요해요. 준비가 완벽하지 않아도 마음은 전달된답니다!"
    },
    mood: {
      type: "분위기 고백러",
      description: "당신은 자연스러운 분위기에서 고백하는 스타일입니다. 감성적이고 센스 있는 연애를 해요!",
      traits: ["분위기 메이커", "센스 있음", "자연스러움", "감성적"],
      advice: "좋은 분위기를 기다리다 보면 기회를 놓칠 수도 있어요. 가끔은 분위기를 직접 만들어보세요!"
    }
  }
};
