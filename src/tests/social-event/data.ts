// social-event 테스트 데이터
export const socialeventTest = {
  id: "social-event",
  title: "사교 모임 유형 테스트",
  description: "모임에서의 당신의 행동 패턴으로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "처음 가는 모임에 도착하면?",
      options: [
        { text: "먼저 다가가서 인사한다", type: "host" },
        { text: "아는 사람을 찾는다", type: "connector" },
        { text: "조용히 자리를 잡는다", type: "observer" },
        { text: "핸드폰을 본다", type: "wallflower" }
      ]
    },
    {
      id: 2,
      text: "모임에서 대화할 때 당신의 역할은?",
      options: [
        { text: "대화를 이끌어간다", type: "host" },
        { text: "사람들을 연결해준다", type: "connector" },
        { text: "듣고 리액션한다", type: "observer" },
        { text: "조용히 있다가 끼어든다", type: "wallflower" }
      ]
    },
    {
      id: 3,
      text: "모임 중 어색한 침묵이 흐르면?",
      options: [
        { text: "새로운 화제를 던진다", type: "host" },
        { text: "옆 사람에게 말을 건다", type: "connector" },
        { text: "누군가 말하길 기다린다", type: "observer" },
        { text: "핸드폰을 확인한다", type: "wallflower" }
      ]
    },
    {
      id: 4,
      text: "모임에서 새로운 사람을 만나면?",
      options: [
        { text: "적극적으로 대화한다", type: "host" },
        { text: "공통점을 찾아본다", type: "connector" },
        { text: "상대가 말하면 대답한다", type: "observer" },
        { text: "인사만 하고 넘어간다", type: "wallflower" }
      ]
    },
    {
      id: 5,
      text: "모임 후 연락처 교환은?",
      options: [
        { text: "적극적으로 받는다", type: "host" },
        { text: "좋은 사람만 교환한다", type: "connector" },
        { text: "상대가 원하면 교환한다", type: "observer" },
        { text: "거의 안 한다", type: "wallflower" }
      ]
    },
    {
      id: 6,
      text: "모임의 이상적인 규모는?",
      options: [
        { text: "많을수록 좋다", type: "host" },
        { text: "적당히 8-15명", type: "connector" },
        { text: "소규모 4-6명", type: "observer" },
        { text: "1:1이 편하다", type: "wallflower" }
      ]
    },
    {
      id: 7,
      text: "모임이 끝나갈 때 기분은?",
      options: [
        { text: "아쉽다, 더 놀고 싶다", type: "host" },
        { text: "좋은 시간이었다", type: "connector" },
        { text: "적당히 피곤하다", type: "observer" },
        { text: "드디어 집에 간다", type: "wallflower" }
      ]
    },
    {
      id: 8,
      text: "모임에서 가장 즐거운 순간은?",
      options: [
        { text: "분위기가 최고조일 때", type: "host" },
        { text: "좋은 사람을 만났을 때", type: "connector" },
        { text: "재미있는 이야기를 들을 때", type: "observer" },
        { text: "집에 가는 길", type: "wallflower" }
      ]
    },
    {
      id: 9,
      text: "정기 모임에 대한 생각은?",
      options: [
        { text: "좋다, 자주 하자", type: "host" },
        { text: "관계 유지에 좋다", type: "connector" },
        { text: "가끔은 괜찮다", type: "observer" },
        { text: "부담스럽다", type: "wallflower" }
      ]
    },
    {
      id: 10,
      text: "모임에서 에너지를 얻나요, 소모하나요?",
      options: [
        { text: "에너지가 충전된다", type: "host" },
        { text: "좋은 만남이면 충전된다", type: "connector" },
        { text: "적당히 소모된다", type: "observer" },
        { text: "많이 소모된다", type: "wallflower" }
      ]
    }
  ],
  results: {
    host: {
      type: "파티 호스트형",
      description: "당신은 모임의 중심이 되어 분위기를 이끄는 스타일입니다. 사람들과 함께할 때 빛나요!",
      traits: ["리더십", "사교성", "에너지 넘침", "카리스마"],
      advice: "조용한 사람들에게도 관심을 가져보세요. 모두가 빛나는 자리를 만들어요!"
    },
    connector: {
      type: "커넥터형",
      description: "당신은 사람들을 연결하고 관계를 만드는 스타일입니다. 인맥의 허브에요!",
      traits: ["관계 지향", "배려심", "네트워킹", "사교적"],
      advice: "연결만 하지 말고 깊은 관계도 가져보세요. 진정한 친구도 중요해요!"
    },
    observer: {
      type: "관찰자형",
      description: "당신은 조용히 듣고 관찰하는 스타일입니다. 깊이 있는 대화를 좋아해요!",
      traits: ["경청", "분석력", "신중함", "깊이 있음"],
      advice: "가끔은 먼저 말을 걸어보세요. 당신의 이야기도 듣고 싶어해요!"
    },
    wallflower: {
      type: "월플라워형",
      description: "당신은 모임보다 혼자가 편한 스타일입니다. 소중한 사람과의 깊은 대화가 더 좋아요!",
      traits: ["내향적", "독립적", "깊은 관계 선호", "에너지 보존"],
      advice: "편한 모임에서 조금씩 참여해보세요. 생각보다 즐거울 수 있어요!"
    }
  }
};
