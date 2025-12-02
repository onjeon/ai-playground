// revenge-style 테스트 데이터
export const revengestyleTest = {
  id: "revenge-style",
  title: "복수 스타일 테스트",
  description: "당신이 억울한 일을 당했을 때 어떻게 복수하는 스타일인지 알아보세요!",
  questions: [
    {
      id: 1,
      text: "친구가 뒤에서 나를 험담했다는 걸 알았다. 당신의 반응은?",
      options: [
        { text: "바로 전화해서 따진다", type: "direct" },
        { text: "조용히 거리를 둔다", type: "quiet" },
        { text: "더 잘 되는 모습을 보여준다", type: "success" },
        { text: "다른 친구들에게 이 사실을 알린다", type: "strategic" }
      ]
    },
    {
      id: 2,
      text: "회사에서 내 아이디어를 동료가 자기 것처럼 발표했다. 어떻게 할까?",
      options: [
        { text: "회의 중 바로 지적한다", type: "direct" },
        { text: "상사에게 따로 이야기한다", type: "quiet" },
        { text: "다음에 더 좋은 아이디어로 보여준다", type: "success" },
        { text: "메일로 기록을 남겨둔다", type: "strategic" }
      ]
    },
    {
      id: 3,
      text: "식당에서 음식이 잘못 나왔는데 직원이 실수를 인정하지 않는다.",
      options: [
        { text: "매니저를 불러 강하게 항의한다", type: "direct" },
        { text: "그냥 먹고 다시는 안 온다", type: "quiet" },
        { text: "리뷰에 정중하지만 단호하게 쓴다", type: "success" },
        { text: "SNS에 상황을 공유한다", type: "strategic" }
      ]
    },
    {
      id: 4,
      text: "연인이 약속을 어기고 다른 사람과 만났다면?",
      options: [
        { text: "바로 대판 싸운다", type: "direct" },
        { text: "냉전 모드로 돌입한다", type: "quiet" },
        { text: "나도 자유롭게 다른 약속을 잡는다", type: "success" },
        { text: "이 상황을 친구들에게 공유한다", type: "strategic" }
      ]
    },
    {
      id: 5,
      text: "동네에서 누군가 내 자리에 불법 주차를 했다.",
      options: [
        { text: "쪽지를 강하게 써서 붙인다", type: "direct" },
        { text: "다른 자리에 주차한다", type: "quiet" },
        { text: "번호판 사진을 찍어둔다", type: "success" },
        { text: "주민 단톡방에 올린다", type: "strategic" }
      ]
    },
    {
      id: 6,
      text: "게임에서 팀원이 계속 트롤을 한다면?",
      options: [
        { text: "마이크로 직접 따진다", type: "direct" },
        { text: "묵묵히 최선을 다하고 끝나면 차단", type: "quiet" },
        { text: "나도 대충 한다", type: "success" },
        { text: "신고 버튼을 누른다", type: "strategic" }
      ]
    },
    {
      id: 7,
      text: "빌려준 돈을 친구가 계속 안 갚는다.",
      options: [
        { text: "직접 만나서 갚으라고 한다", type: "direct" },
        { text: "그 친구와 서서히 연락을 끊는다", type: "quiet" },
        { text: "다음에 밥 사달라고 한다", type: "success" },
        { text: "다른 친구들에게 이 사실을 알린다", type: "strategic" }
      ]
    },
    {
      id: 8,
      text: "SNS에서 누군가 나를 비꼬는 댓글을 달았다.",
      options: [
        { text: "바로 답글로 받아친다", type: "direct" },
        { text: "무시하고 차단한다", type: "quiet" },
        { text: "더 멋진 포스트로 대응한다", type: "success" },
        { text: "스크린샷을 찍어둔다", type: "strategic" }
      ]
    },
    {
      id: 9,
      text: "누군가 나를 무시하는 말투로 대화한다면?",
      options: [
        { text: "그 자리에서 지적한다", type: "direct" },
        { text: "대화를 최소화한다", type: "quiet" },
        { text: "나의 가치를 증명할 기회를 기다린다", type: "success" },
        { text: "주변 사람들에게 이야기한다", type: "strategic" }
      ]
    },
    {
      id: 10,
      text: "택배가 파손되어 왔는데 업체에서 책임을 회피한다.",
      options: [
        { text: "고객센터에 강하게 항의한다", type: "direct" },
        { text: "그냥 다른 업체를 이용한다", type: "quiet" },
        { text: "소비자원에 정식 신고한다", type: "success" },
        { text: "커뮤니티에 후기를 공유한다", type: "strategic" }
      ]
    }
  ],
  results: {
    direct: {
      type: "직접 대결형",
      description: "당신은 억울한 일이 생기면 즉시 맞서는 스타일입니다. 참지 않고 바로 해결하려는 강단이 있어요!",
      traits: ["직설적", "용감함", "즉각적 행동", "당당함"],
      advice: "때로는 한 템포 쉬어가는 것도 좋아요. 감정이 가라앉은 후 더 효과적으로 대응할 수 있답니다."
    },
    quiet: {
      type: "조용한 응징형",
      description: "당신은 굳이 싸우지 않고 조용히 관계를 정리하는 스타일입니다. 에너지 낭비 없이 깔끔하게!",
      traits: ["냉철함", "자기보호", "효율적", "품위 유지"],
      advice: "가끔은 상대에게 피드백을 줘야 할 때도 있어요. 조용한 철수가 항상 정답은 아니랍니다."
    },
    success: {
      type: "성공이 최고의 복수형",
      description: "당신은 더 잘 되는 것으로 복수하는 스타일입니다. 분노를 원동력으로 성장하는 멋진 방식이에요!",
      traits: ["성장 마인드", "긍정적 에너지", "자기 발전", "대인배"],
      advice: "스스로를 위해 성장하는 것도 잊지 마세요. 복수가 아닌 나를 위한 발전이 되길!"
    },
    strategic: {
      type: "전략적 공유형",
      description: "당신은 상황을 기록하고 공유하는 전략적 스타일입니다. 증거와 여론의 힘을 아는 현명함이 있어요!",
      traits: ["전략적", "기록 습관", "신중함", "네트워크 활용"],
      advice: "공유 전 한 번 더 생각해보세요. 때로는 조용히 해결하는 것이 나을 수도 있답니다."
    }
  }
};
