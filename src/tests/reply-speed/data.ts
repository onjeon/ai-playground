// reply-speed 테스트 데이터
export const replyspeedTest = {
  id: "reply-speed",
  title: "답장 속도 유형 테스트",
  description: "메시지 답장 속도로 알아보는 당신의 성격과 관계 스타일!",
  questions: [
    {
      id: 1,
      text: "친구에게 메시지가 왔을 때 평균 답장 시간은?",
      options: [
        { text: "즉시 (5분 이내)", type: "lightning" },
        { text: "30분~1시간 내", type: "balanced" },
        { text: "몇 시간 후", type: "slow" },
        { text: "하루 이상 걸릴 때도 있다", type: "turtle" }
      ]
    },
    {
      id: 2,
      text: "중요한 사람(연인/절친)의 메시지라면?",
      options: [
        { text: "무조건 바로 답한다", type: "lightning" },
        { text: "빨리 답하려고 노력한다", type: "balanced" },
        { text: "중요해도 내 페이스대로", type: "slow" },
        { text: "중요해도 바쁘면 늦는다", type: "turtle" }
      ]
    },
    {
      id: 3,
      text: "업무 메시지 답장 속도는?",
      options: [
        { text: "업무도 바로 답한다", type: "lightning" },
        { text: "업무 시간 내에 답한다", type: "balanced" },
        { text: "정리해서 한꺼번에 답한다", type: "slow" },
        { text: "최대한 미룬다", type: "turtle" }
      ]
    },
    {
      id: 4,
      text: "답장이 늦어지는 이유는?",
      options: [
        { text: "늦어지지 않는다", type: "lightning" },
        { text: "바빠서", type: "balanced" },
        { text: "답할 내용을 고민해서", type: "slow" },
        { text: "답하기 귀찮아서", type: "turtle" }
      ]
    },
    {
      id: 5,
      text: "읽고 바로 답 안 하면?",
      options: [
        { text: "읽으면 바로 답한다", type: "lightning" },
        { text: "나중에 잊어버린다", type: "balanced" },
        { text: "의도적으로 미뤄둔다", type: "slow" },
        { text: "읽지도 않고 나중에 본다", type: "turtle" }
      ]
    },
    {
      id: 6,
      text: "상대방의 늦은 답장에 대한 생각은?",
      options: [
        { text: "좀 서운하다", type: "lightning" },
        { text: "바쁘겠거니 한다", type: "balanced" },
        { text: "나도 그러니까 괜찮다", type: "slow" },
        { text: "전혀 신경 안 쓴다", type: "turtle" }
      ]
    },
    {
      id: 7,
      text: "단톡방에서의 답장 속도는?",
      options: [
        { text: "활발하게 참여한다", type: "lightning" },
        { text: "가끔 참여한다", type: "balanced" },
        { text: "나중에 읽는다", type: "slow" },
        { text: "거의 잠수 상태", type: "turtle" }
      ]
    },
    {
      id: 8,
      text: "답장을 보낼 때 고민하는 시간은?",
      options: [
        { text: "거의 안 한다, 바로 보낸다", type: "lightning" },
        { text: "조금 생각하고 보낸다", type: "balanced" },
        { text: "꽤 고민한다", type: "slow" },
        { text: "너무 고민해서 결국 안 보낸다", type: "turtle" }
      ]
    },
    {
      id: 9,
      text: "빠른 답장이 필요할 것 같은 메시지라면?",
      options: [
        { text: "당연히 바로 답한다", type: "lightning" },
        { text: "최대한 빨리 답한다", type: "balanced" },
        { text: "급한 정도를 판단한다", type: "slow" },
        { text: "전화하라고 한다", type: "turtle" }
      ]
    },
    {
      id: 10,
      text: "이상적인 답장 속도는?",
      options: [
        { text: "빠를수록 좋다", type: "lightning" },
        { text: "적당히 여유 있게", type: "balanced" },
        { text: "서로 편할 때", type: "slow" },
        { text: "답장 속도는 중요하지 않다", type: "turtle" }
      ]
    }
  ],
  results: {
    lightning: {
      type: "번개 답장러",
      description: "당신은 메시지가 오면 바로 답하는 스타일입니다. 소통의 달인이에요!",
      traits: ["즉각적", "연결 중시", "책임감", "관계 지향"],
      advice: "상대도 당신처럼 빠르지 않을 수 있어요. 여유를 가져보세요!"
    },
    balanced: {
      type: "밸런스 답장러",
      description: "당신은 적당한 속도로 답하는 균형 잡힌 스타일입니다. 자연스러운 소통을 해요!",
      traits: ["균형감", "유연함", "상황 판단", "배려심"],
      advice: "지금 스타일이 가장 건강해요. 자연스럽게 유지하세요!"
    },
    slow: {
      type: "신중 답장러",
      description: "당신은 생각하고 답하는 신중한 스타일입니다. 깊이 있는 대화를 좋아해요!",
      traits: ["신중함", "자기 페이스", "깊이 있음", "내향적"],
      advice: "급한 연락엔 빠르게 반응하는 것도 좋아요. 관계를 위해 가끔은 빨리!"
    },
    turtle: {
      type: "거북이 답장러",
      description: "당신은 답장에 시간이 걸리는 자유로운 스타일입니다. 마이페이스에요!",
      traits: ["독립적", "자유로움", "비동기 선호", "부담 없음"],
      advice: "중요한 사람에겐 조금 더 신경 써보세요. 관계 유지에 도움이 돼요!"
    }
  }
};
