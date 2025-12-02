// new-year-goal 테스트 데이터
export const newyeargoalTest = {
  id: "new-year-goal",
  title: "새해 목표 유형 테스트",
  description: "새해 목표를 세우고 실천하는 패턴으로 알아보는 당신의 성격!",
  questions: [
    {
      id: 1,
      text: "새해 목표를 세울 때 어떻게 하나요?",
      options: [
        { text: "구체적인 계획과 일정을 잡는다", type: "planner" },
        { text: "큰 방향만 정한다", type: "visionary" },
        { text: "작년과 비슷하게", type: "realistic" },
        { text: "목표를 안 세운다", type: "free" }
      ]
    },
    {
      id: 2,
      text: "목표 실천율은 어느 정도인가요?",
      options: [
        { text: "대부분 달성한다", type: "planner" },
        { text: "절반 정도 달성한다", type: "realistic" },
        { text: "시도는 하지만 흐지부지", type: "visionary" },
        { text: "목표 자체를 잊는다", type: "free" }
      ]
    },
    {
      id: 3,
      text: "새해 목표로 가장 많이 세우는 것은?",
      options: [
        { text: "자기계발/공부", type: "planner" },
        { text: "건강/다이어트", type: "realistic" },
        { text: "새로운 경험/도전", type: "visionary" },
        { text: "딱히 없다", type: "free" }
      ]
    },
    {
      id: 4,
      text: "목표를 포기하게 되는 시점은?",
      options: [
        { text: "포기 안 한다", type: "planner" },
        { text: "3월쯤", type: "visionary" },
        { text: "1월 중순쯤", type: "realistic" },
        { text: "1월 1일 다음 날", type: "free" }
      ]
    },
    {
      id: 5,
      text: "목표 달성을 위한 준비는?",
      options: [
        { text: "필요한 것을 미리 구매/준비한다", type: "planner" },
        { text: "일단 시작하고 본다", type: "visionary" },
        { text: "현실적인 것만 준비한다", type: "realistic" },
        { text: "준비 없이 즉흥적으로", type: "free" }
      ]
    },
    {
      id: 6,
      text: "목표 달성 실패 시 어떻게 하나요?",
      options: [
        { text: "원인을 분석하고 재도전", type: "planner" },
        { text: "다음에 하자고 넘긴다", type: "visionary" },
        { text: "목표가 무리였다고 인정", type: "realistic" },
        { text: "원래 기대 안 했다", type: "free" }
      ]
    },
    {
      id: 7,
      text: "새해 목표를 주변에 공유하나요?",
      options: [
        { text: "SNS에 선언한다", type: "planner" },
        { text: "친한 친구에게만 말한다", type: "visionary" },
        { text: "말 안 하고 조용히 한다", type: "realistic" },
        { text: "공유할 목표가 없다", type: "free" }
      ]
    },
    {
      id: 8,
      text: "연말에 한 해를 돌아보면?",
      options: [
        { text: "목표 달성률을 점검한다", type: "planner" },
        { text: "좋았던 기억을 떠올린다", type: "visionary" },
        { text: "그럭저럭 살았다", type: "realistic" },
        { text: "돌아볼 게 없다", type: "free" }
      ]
    },
    {
      id: 9,
      text: "목표 관리 도구는?",
      options: [
        { text: "앱/다이어리로 관리", type: "planner" },
        { text: "머릿속으로만", type: "visionary" },
        { text: "간단한 메모 정도", type: "realistic" },
        { text: "관리 안 한다", type: "free" }
      ]
    },
    {
      id: 10,
      text: "새해 목표에 대한 생각은?",
      options: [
        { text: "성장을 위해 필수다", type: "planner" },
        { text: "동기부여가 된다", type: "visionary" },
        { text: "있으면 좋고 없어도 그만", type: "realistic" },
        { text: "의미 없다", type: "free" }
      ]
    }
  ],
  results: {
    planner: {
      type: "철저한 계획가",
      description: "당신은 새해 목표를 세우고 실천하는 진정한 계획가입니다. 성장하는 한 해를 보내요!",
      traits: ["계획적", "성장 지향", "자기 관리", "꾸준함"],
      advice: "완벽하지 않아도 괜찮아요. 가끔은 흘러가는 대로도 좋아요!"
    },
    visionary: {
      type: "꿈꾸는 비전가",
      description: "당신은 큰 그림을 그리지만 실천은 느슨한 스타일입니다. 상상력이 풍부해요!",
      traits: ["상상력", "낙관적", "유연함", "아이디어 풍부"],
      advice: "큰 목표를 작게 쪼개보세요. 실천이 쉬워져요!"
    },
    realistic: {
      type: "현실적인 실용가",
      description: "당신은 무리하지 않는 현실적인 목표를 세우는 스타일입니다. 균형 잡힌 삶을 살아요!",
      traits: ["현실적", "균형감", "실용적", "안정 추구"],
      advice: "가끔은 도전적인 목표도 세워보세요. 예상 밖의 성취가 있을 거예요!"
    },
    free: {
      type: "자유로운 영혼",
      description: "당신은 목표에 얽매이지 않는 자유로운 스타일입니다. 순간을 즐기는 삶을 살아요!",
      traits: ["자유로움", "즉흥적", "현재 집중", "스트레스 프리"],
      advice: "작은 목표라도 세워보세요. 성취감이 주는 기쁨도 있답니다!"
    }
  }
};
