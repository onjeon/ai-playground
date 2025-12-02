// subway-behavior 테스트 데이터
export const subwaybehaviorTest = {
  id: "subway-behavior",
  title: "지하철 행동 유형 테스트",
  description: "지하철에서의 행동으로 알아보는 당신의 성격 유형 테스트!",
  questions: [
    {
      id: 1,
      text: "지하철에 타면 가장 먼저 하는 것은?",
      options: [
        { text: "빈자리를 찾는다", type: "pro" },
        { text: "핸드폰을 꺼낸다", type: "considerate" },
        { text: "창밖이나 주변을 본다", type: "zen" },
        { text: "이어폰을 끼고 음악을 듣는다", type: "flow" }
      ]
    },
    {
      id: 2,
      text: "자리가 하나 났다! 당신의 반응은?",
      options: [
        { text: "재빠르게 앉는다", type: "pro" },
        { text: "주변에 앉을 사람 있나 본다", type: "considerate" },
        { text: "곧 내리니까 서 있는다", type: "zen" },
        { text: "눈치 보다가 놓친다", type: "flow" }
      ]
    },
    {
      id: 3,
      text: "옆 사람이 계속 내 공간을 침범한다면?",
      options: [
        { text: "몸으로 밀어낸다", type: "pro" },
        { text: "참고 있다가 자리를 옮긴다", type: "considerate" },
        { text: "한숨을 쉬며 참는다", type: "zen" },
        { text: "귀찮아서 그냥 둔다", type: "flow" }
      ]
    },
    {
      id: 4,
      text: "지하철에서 주로 뭘 하며 시간을 보내나요?",
      options: [
        { text: "SNS나 뉴스를 본다", type: "pro" },
        { text: "게임을 한다", type: "considerate" },
        { text: "멍하니 있거나 생각에 잠긴다", type: "zen" },
        { text: "음악이나 영상을 본다", type: "flow" }
      ]
    },
    {
      id: 5,
      text: "노약자석 근처에 서 있는데 자리가 났다면?",
      options: [
        { text: "절대 안 앉는다", type: "pro" },
        { text: "주변에 노약자 없으면 앉는다", type: "considerate" },
        { text: "앉을까 말까 고민한다", type: "zen" },
        { text: "다른 자리로 이동한다", type: "flow" }
      ]
    },
    {
      id: 6,
      text: "내릴 역이 다가오면 언제 일어나나요?",
      options: [
        { text: "한두 정거장 전부터 문 앞으로", type: "pro" },
        { text: "도착 직전에 일어난다", type: "considerate" },
        { text: "문 열리면 일어난다", type: "zen" },
        { text: "내릴 역 지나칠까 긴장한다", type: "flow" }
      ]
    },
    {
      id: 7,
      text: "출퇴근 시간 만원 지하철에서의 당신은?",
      options: [
        { text: "틈새를 찾아 파고든다", type: "pro" },
        { text: "다음 차를 기다린다", type: "considerate" },
        { text: "문 앞에서 버틴다", type: "zen" },
        { text: "체념하고 탄다", type: "flow" }
      ]
    },
    {
      id: 8,
      text: "지하철에서 아는 사람을 마주쳤다면?",
      options: [
        { text: "반갑게 인사하고 대화한다", type: "pro" },
        { text: "가볍게 인사만 한다", type: "considerate" },
        { text: "못 본 척한다", type: "zen" },
        { text: "상대가 먼저 인사하면 한다", type: "flow" }
      ]
    },
    {
      id: 9,
      text: "지하철 환승할 때 당신의 스타일은?",
      options: [
        { text: "최단 거리로 빠르게 이동", type: "pro" },
        { text: "사람 적은 길로 여유롭게", type: "considerate" },
        { text: "에스컬레이터를 선호한다", type: "zen" },
        { text: "네비게이션 앱을 확인한다", type: "flow" }
      ]
    },
    {
      id: 10,
      text: "지하철에서 가장 싫은 상황은?",
      options: [
        { text: "자리 뺏기는 것", type: "pro" },
        { text: "시끄러운 통화 소리", type: "considerate" },
        { text: "냄새나 더위", type: "zen" },
        { text: "지연이나 고장", type: "flow" }
      ]
    }
  ],
  results: {
    pro: {
      type: "지하철 프로",
      description: "당신은 지하철 이용의 달인입니다. 효율적인 동선과 전략으로 출퇴근을 정복하는 프로에요!",
      traits: ["효율적", "전략적", "적극적", "상황 판단력"],
      advice: "가끔은 여유를 가져보세요. 효율만 추구하다 보면 지칠 수 있어요!"
    },
    considerate: {
      type: "배려형 승객",
      description: "당신은 주변을 살피며 배려하는 따뜻한 승객입니다. 매너 있는 지하철 이용자에요!",
      traits: ["배려심", "관찰력", "양보 정신", "사려 깊음"],
      advice: "자신을 위한 시간도 챙기세요. 매번 양보만 하면 피곤해질 수 있어요!"
    },
    zen: {
      type: "명상형 승객",
      description: "당신은 지하철에서 자신만의 시간을 즐기는 스타일입니다. 이동 시간이 곧 힐링 타임이에요!",
      traits: ["내성적", "사색적", "자기만의 세계", "평화로움"],
      advice: "가끔은 주변과 소통해보세요. 의외의 즐거움을 발견할 수 있어요!"
    },
    flow: {
      type: "흘러가는 대로형",
      description: "당신은 상황에 맡기는 편안한 스타일입니다. 스트레스 없이 지하철을 이용해요!",
      traits: ["유연함", "무던함", "적응력", "스트레스 프리"],
      advice: "때로는 적극적으로 움직여보세요. 더 편한 자리를 찾을 수 있을 거예요!"
    }
  }
};
