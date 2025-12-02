// alarm-behavior 테스트 데이터
export const alarmbehaviorTest = {
  id: "alarm-behavior",
  title: "알람 행동 유형 테스트",
  description: "아침 알람이 울릴 때 당신의 반응으로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "아침에 알람이 울렸다. 첫 번째 반응은?",
      options: [
        { text: "바로 일어난다", type: "hero" },
        { text: "5분만 더...스누즈를 누른다", type: "snooze" },
        { text: "알람을 끄고 다시 잔다", type: "blanket" },
        { text: "이불 속에서 핸드폰부터 본다", type: "free" }
      ]
    },
    {
      id: 2,
      text: "알람을 몇 개나 설정해두나요?",
      options: [
        { text: "1개면 충분하다", type: "hero" },
        { text: "2-3개 정도", type: "snooze" },
        { text: "5개 이상 연속으로", type: "blanket" },
        { text: "알람 없이도 일어난다", type: "free" }
      ]
    },
    {
      id: 3,
      text: "중요한 약속이 있는 날 아침은?",
      options: [
        { text: "평소보다 일찍 자연스럽게 일어난다", type: "hero" },
        { text: "알람을 여러 개 설정한다", type: "snooze" },
        { text: "긴장해서 밤새 뒤척인다", type: "blanket" },
        { text: "어차피 일어나니까 평소대로", type: "free" }
      ]
    },
    {
      id: 4,
      text: "알람 소리는 어떤 걸 선호하나요?",
      options: [
        { text: "기본 알람음", type: "hero" },
        { text: "점점 커지는 부드러운 소리", type: "snooze" },
        { text: "충격적으로 시끄러운 소리", type: "blanket" },
        { text: "좋아하는 노래", type: "free" }
      ]
    },
    {
      id: 5,
      text: "스누즈 버튼에 대한 생각은?",
      options: [
        { text: "쓸 일이 없다", type: "hero" },
        { text: "적당히 활용한다", type: "snooze" },
        { text: "없으면 못 산다", type: "blanket" },
        { text: "스누즈? 그게 뭐지?", type: "free" }
      ]
    },
    {
      id: 6,
      text: "주말 아침은 어떻게 보내나요?",
      options: [
        { text: "평일처럼 일찍 일어난다", type: "hero" },
        { text: "조금 늦게 일어난다", type: "snooze" },
        { text: "점심까지 잔다", type: "blanket" },
        { text: "알람 없이 자연스럽게 눈 뜬다", type: "free" }
      ]
    },
    {
      id: 7,
      text: "알람을 끄고 이불 밖으로 나오기까지 걸리는 시간은?",
      options: [
        { text: "1분 이내", type: "hero" },
        { text: "5-10분", type: "snooze" },
        { text: "30분 이상", type: "blanket" },
        { text: "상황에 따라 다르다", type: "free" }
      ]
    },
    {
      id: 8,
      text: "알람 때문에 옆 사람이 깰까봐 걱정한 적 있나요?",
      options: [
        { text: "한 번에 끄니까 괜찮다", type: "hero" },
        { text: "진동으로 해둔다", type: "snooze" },
        { text: "여러 번 울리니까 미안하다", type: "blanket" },
        { text: "상대방 먼저 일어난다", type: "free" }
      ]
    },
    {
      id: 9,
      text: "알람 없이 일어나야 할 때 어떻게 하나요?",
      options: [
        { text: "생체 시계가 알아서 깨운다", type: "hero" },
        { text: "불안해서 자주 깬다", type: "snooze" },
        { text: "100% 늦잠 잔다", type: "blanket" },
        { text: "누군가에게 깨워달라고 부탁한다", type: "free" }
      ]
    },
    {
      id: 10,
      text: "아침에 일어나는 게 힘든 이유는?",
      options: [
        { text: "힘들지 않다", type: "hero" },
        { text: "잠이 부족해서", type: "snooze" },
        { text: "이불이 너무 좋아서", type: "blanket" },
        { text: "일어날 동기가 없어서", type: "free" }
      ]
    }
  ],
  results: {
    hero: {
      type: "모닝 히어로형",
      description: "당신은 알람 한 번에 일어나는 타고난 아침형 인간입니다. 새벽을 지배하는 자, 하루를 지배해요!",
      traits: ["자기 통제력", "규칙적", "의지력", "책임감"],
      advice: "당신의 아침 루틴을 잘 유지하세요! 가끔은 늦잠의 행복도 누려보는 건 어때요?"
    },
    snooze: {
      type: "적당히 스누즈형",
      description: "당신은 알람과 타협하는 현실적인 스타일입니다. 5분의 여유를 아는 균형 잡힌 사람이에요!",
      traits: ["유연함", "현실적", "균형감", "적응력"],
      advice: "스누즈 횟수를 조금씩 줄여보세요. 여유로운 아침이 하루를 바꿀 수 있어요!"
    },
    blanket: {
      type: "이불 밖은 위험해형",
      description: "당신은 알람과의 전쟁에서 이불의 편인 진정한 늦잠러입니다. 잠의 소중함을 아는 사람이에요!",
      traits: ["여유로움", "감성적", "편안함 추구", "순간을 즐김"],
      advice: "조금씩 기상 시간을 앞당겨보세요. 아침의 여유가 주는 행복도 있답니다!"
    },
    free: {
      type: "자유로운 기상형",
      description: "당신은 알람에 의존하지 않는 자유로운 영혼입니다. 몸이 원할 때 일어나는 자연주의자에요!",
      traits: ["자유로움", "직관적", "스트레스 프리", "자연스러움"],
      advice: "중요한 일정이 있을 때는 알람을 활용해보세요. 자유도 좋지만 약속도 중요해요!"
    }
  }
};
