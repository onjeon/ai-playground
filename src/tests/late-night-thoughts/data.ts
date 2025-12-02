// late-night-thoughts 테스트 데이터
export const latenightthoughtsTest = {
  id: "late-night-thoughts",
  title: "새벽 감성 유형 테스트",
  description: "밤에 찾아오는 생각과 감정으로 알아보는 당신의 내면 테스트!",
  questions: [
    {
      id: 1,
      text: "밤에 잠이 안 올 때 주로 무슨 생각을 하나요?",
      options: [
        { text: "내일 할 일, 계획", type: "planner" },
        { text: "과거 기억, 후회", type: "reflector" },
        { text: "미래에 대한 상상", type: "dreamer" },
        { text: "그냥 멍때린다", type: "zen" }
      ]
    },
    {
      id: 2,
      text: "새벽에 갑자기 슬퍼질 때 있나요?",
      options: [
        { text: "거의 없다", type: "planner" },
        { text: "자주 있다", type: "reflector" },
        { text: "가끔 있다", type: "dreamer" },
        { text: "슬픔보다 평온함", type: "zen" }
      ]
    },
    {
      id: 3,
      text: "밤에 문득 연락하고 싶은 사람이 생기면?",
      options: [
        { text: "내일 연락해야지 메모한다", type: "planner" },
        { text: "그 사람과의 기억을 떠올린다", type: "reflector" },
        { text: "연락할까 말까 고민한다", type: "dreamer" },
        { text: "그냥 생각만 하고 잔다", type: "zen" }
      ]
    },
    {
      id: 4,
      text: "새벽 감성으로 인해 한 행동 중 가장 비슷한 것은?",
      options: [
        { text: "내일 계획을 정리한다", type: "planner" },
        { text: "과거 사진/대화를 본다", type: "reflector" },
        { text: "충동구매/충동 결정", type: "dreamer" },
        { text: "아무것도 안 한다", type: "zen" }
      ]
    },
    {
      id: 5,
      text: "밤에 듣는 음악은?",
      options: [
        { text: "잠 잘 오는 음악", type: "planner" },
        { text: "감성적인 노래", type: "reflector" },
        { text: "그때 기분에 맞는 음악", type: "dreamer" },
        { text: "음악 안 듣는다", type: "zen" }
      ]
    },
    {
      id: 6,
      text: "새벽에 SNS를 보면?",
      options: [
        { text: "정보성 게시물을 본다", type: "planner" },
        { text: "옛 게시물/태그된 사진을 본다", type: "reflector" },
        { text: "스토리/피드를 둘러본다", type: "dreamer" },
        { text: "SNS 안 본다", type: "zen" }
      ]
    },
    {
      id: 7,
      text: "밤에 불안감이 찾아오면?",
      options: [
        { text: "해결책을 생각한다", type: "planner" },
        { text: "왜 불안한지 분석한다", type: "reflector" },
        { text: "다른 생각으로 전환한다", type: "dreamer" },
        { text: "그냥 받아들인다", type: "zen" }
      ]
    },
    {
      id: 8,
      text: "새벽에 가장 많이 하는 것은?",
      options: [
        { text: "내일 준비", type: "planner" },
        { text: "생각에 잠기기", type: "reflector" },
        { text: "유튜브/넷플릭스", type: "dreamer" },
        { text: "그냥 누워있기", type: "zen" }
      ]
    },
    {
      id: 9,
      text: "밤에 쓴 글/메시지를 아침에 보면?",
      options: [
        { text: "괜찮다, 계획대로다", type: "planner" },
        { text: "부끄럽다, 감정적이었다", type: "reflector" },
        { text: "뭘 썼는지 기억도 안 난다", type: "dreamer" },
        { text: "밤에 글을 안 쓴다", type: "zen" }
      ]
    },
    {
      id: 10,
      text: "새벽 시간이 당신에게 주는 것은?",
      options: [
        { text: "정리와 계획의 시간", type: "planner" },
        { text: "자기 성찰의 시간", type: "reflector" },
        { text: "자유로운 상상의 시간", type: "dreamer" },
        { text: "고요함과 평화", type: "zen" }
      ]
    }
  ],
  results: {
    planner: {
      type: "계획형 야행성",
      description: "당신은 밤에도 생산적인 생각을 하는 스타일입니다. 내일을 위한 준비가 철저해요!",
      traits: ["계획적", "미래 지향", "자기 관리", "책임감"],
      advice: "가끔은 생각을 내려놓고 쉬어보세요. 밤은 휴식의 시간이기도 해요!"
    },
    reflector: {
      type: "회상형 야행성",
      description: "당신은 밤에 과거를 돌아보는 감성적인 스타일입니다. 깊이 있는 내면 세계를 가졌어요!",
      traits: ["감성적", "자기 성찰", "과거 지향", "감정 풍부"],
      advice: "과거보다 현재와 미래에도 집중해보세요. 지금 이 순간도 소중해요!"
    },
    dreamer: {
      type: "몽상가 야행성",
      description: "당신은 밤에 상상의 나래를 펴는 자유로운 스타일입니다. 창의력이 밤에 빛나요!",
      traits: ["상상력", "자유로움", "즉흥적", "창의적"],
      advice: "새벽의 충동은 아침에 다시 생각해보세요. 밤의 결정은 신중하게!"
    },
    zen: {
      type: "명상형 야행성",
      description: "당신은 밤의 고요함을 즐기는 평화로운 스타일입니다. 내면의 평화가 있어요!",
      traits: ["평온함", "현재 집중", "자기 수용", "무념무상"],
      advice: "그 평화로움을 유지하세요. 가끔은 생각을 정리하는 것도 좋아요!"
    }
  }
};
