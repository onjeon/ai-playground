// ghost-type 테스트 데이터
export const ghosttypeTest = {
  id: "ghost-type",
  title: "잠수 유형 테스트",
  description: "연락이 뜸해질 때 당신은 어떤 잠수 유형인지 알아보세요!",
  questions: [
    {
      id: 1,
      text: "카톡이 왔는데 바로 답장하기 귀찮다. 어떻게 할까?",
      options: [
        { text: "일단 읽씹하고 나중에 답한다", type: "strategic" },
        { text: "읽지도 않고 나중에 본다", type: "complete" },
        { text: "간단히 이모티콘만 보낸다", type: "minimal" },
        { text: "바쁘다고 짧게 답한다", type: "excuse" }
      ]
    },
    {
      id: 2,
      text: "단체 채팅방이 시끄러울 때 당신의 행동은?",
      options: [
        { text: "알림 끄고 나중에 쭉 읽는다", type: "strategic" },
        { text: "조용히 나간다", type: "complete" },
        { text: "가끔 이모티콘만 남긴다", type: "minimal" },
        { text: "바쁜 척 핑계를 댄다", type: "excuse" }
      ]
    },
    {
      id: 3,
      text: "친구가 전화를 걸어왔다. 받고 싶지 않을 때 어떻게 할까?",
      options: [
        { text: "일단 안 받고 나중에 문자한다", type: "strategic" },
        { text: "전화도 문자도 무시한다", type: "complete" },
        { text: "끊고 바로 뭐야? 문자를 보낸다", type: "minimal" },
        { text: "회의 중이라고 문자한다", type: "excuse" }
      ]
    },
    {
      id: 4,
      text: "썸 타던 사람에게 갑자기 연락하기 싫어졌다. 어떻게 할까?",
      options: [
        { text: "답장 간격을 점점 늘린다", type: "strategic" },
        { text: "그냥 연락을 끊는다", type: "complete" },
        { text: "짧은 답만 한다", type: "minimal" },
        { text: "요즘 바쁘다고 말한다", type: "excuse" }
      ]
    },
    {
      id: 5,
      text: "SNS에서 활동하기 싫을 때 당신의 방식은?",
      options: [
        { text: "로그인은 하지만 활동 안 한다", type: "strategic" },
        { text: "앱을 삭제한다", type: "complete" },
        { text: "좋아요만 누른다", type: "minimal" },
        { text: "스토리에 바쁨을 어필한다", type: "excuse" }
      ]
    },
    {
      id: 6,
      text: "가족 단톡방에서 연락이 올 때 반응은?",
      options: [
        { text: "나중에 한꺼번에 읽는다", type: "strategic" },
        { text: "최대한 잠수를 탄다", type: "complete" },
        { text: "ㅇㅇ, ㅎㅎ로 대응한다", type: "minimal" },
        { text: "일 때문에 바쁘다고 한다", type: "excuse" }
      ]
    },
    {
      id: 7,
      text: "약속 잡자는 연락이 왔는데 가기 싫다면?",
      options: [
        { text: "일단 답을 미룬다", type: "strategic" },
        { text: "연락 자체를 무시한다", type: "complete" },
        { text: "일정 확인하고 연락한다고 한다", type: "minimal" },
        { text: "그 날 선약이 있다고 한다", type: "excuse" }
      ]
    },
    {
      id: 8,
      text: "업무 외 시간에 상사한테 연락이 왔다.",
      options: [
        { text: "일단 안 보고 다음 날 답한다", type: "strategic" },
        { text: "끝까지 무시한다", type: "complete" },
        { text: "확인했습니다 정도만 답한다", type: "minimal" },
        { text: "외출 중이라고 한다", type: "excuse" }
      ]
    },
    {
      id: 9,
      text: "오랜만에 연락한 지인에게 답하기 귀찮을 때?",
      options: [
        { text: "며칠 후에 답한다", type: "strategic" },
        { text: "그냥 무시한다", type: "complete" },
        { text: "짧게만 답한다", type: "minimal" },
        { text: "요즘 정신없다고 한다", type: "excuse" }
      ]
    },
    {
      id: 10,
      text: "연인에게도 연락하기 싫을 때가 있다면?",
      options: [
        { text: "읽고 나중에 답한다", type: "strategic" },
        { text: "연락이 뜸해진다", type: "complete" },
        { text: "하트만 보낸다", type: "minimal" },
        { text: "피곤하다고 먼저 말한다", type: "excuse" }
      ]
    }
  ],
  results: {
    strategic: {
      type: "전략적 잠수형",
      description: "당신은 읽고 나중에 답하는 계산된 잠수 스타일입니다. 적당한 거리두기의 달인이에요!",
      traits: ["계획적", "여유로움", "눈치 빠름", "자기 페이스 유지"],
      advice: "가끔은 바로 답하면 관계가 더 편해질 수 있어요. 중요한 사람에겐 빠른 답장을!"
    },
    complete: {
      type: "완전 잠수형",
      description: "당신은 확실하게 연락을 끊는 진정한 잠수의 정석입니다. 나만의 시간이 소중해요!",
      traits: ["독립적", "확실함", "자기 시간 중시", "과감함"],
      advice: "완전한 단절은 오해를 부를 수 있어요. 간단한 안부 정도는 남겨두는 것도 방법!"
    },
    minimal: {
      type: "최소 대응형",
      description: "당신은 이모티콘이나 짧은 답으로 최소한의 예의는 지키는 스타일입니다. 센스 있는 잠수에요!",
      traits: ["센스 있음", "효율적", "관계 유지", "밸런스 조절"],
      advice: "가끔은 길게 대화해보세요. 깊은 대화가 관계를 더 풍성하게 만들어줘요!"
    },
    excuse: {
      type: "핑계 마스터형",
      description: "당신은 합리적인 이유를 대며 자연스럽게 빠지는 스타일입니다. 누구도 미워할 수 없는 잠수에요!",
      traits: ["눈치 빠름", "상황 대처력", "관계 배려", "커뮤니케이션 능력"],
      advice: "핑계가 쌓이면 신뢰가 떨어질 수 있어요. 솔직하게 말하는 것도 용기랍니다!"
    }
  }
};
