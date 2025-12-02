// hobby-addiction 테스트 데이터
export const hobbyaddictionTest = {
  id: "hobby-addiction",
  title: "취미 중독 유형 테스트",
  description: "취미에 빠지는 당신만의 패턴으로 알아보는 덕질 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "새로운 취미를 발견했을 때 당신의 반응은?",
      options: [
        { text: "관련 장비/도구를 바로 구매한다", type: "allin" },
        { text: "유튜브로 정보를 찾아본다", type: "balance" },
        { text: "친구들에게 같이 하자고 권한다", type: "social" },
        { text: "일단 해보고 맞으면 빠진다", type: "explorer" }
      ]
    },
    {
      id: 2,
      text: "취미에 얼마나 투자하나요?",
      options: [
        { text: "돈을 아끼지 않는다", type: "allin" },
        { text: "가성비 좋게 투자한다", type: "balance" },
        { text: "같이 하는 사람들과 나눈다", type: "social" },
        { text: "최소한으로 시작한다", type: "explorer" }
      ]
    },
    {
      id: 3,
      text: "취미 생활을 할 시간이 없다면?",
      options: [
        { text: "억지로라도 시간을 만든다", type: "allin" },
        { text: "틈틈이 짬을 낸다", type: "balance" },
        { text: "사람들과 약속을 잡아 시간을 확보", type: "social" },
        { text: "바쁘면 당분간 쉰다", type: "explorer" }
      ]
    },
    {
      id: 4,
      text: "취미가 질릴 때 어떻게 하나요?",
      options: [
        { text: "더 깊이 파고들어 새로운 재미를 찾는다", type: "allin" },
        { text: "잠시 쉬다가 다시 한다", type: "balance" },
        { text: "새로운 사람들을 만나 자극받는다", type: "social" },
        { text: "다른 취미로 넘어간다", type: "explorer" }
      ]
    },
    {
      id: 5,
      text: "취미 관련 커뮤니티 활동은?",
      options: [
        { text: "열성적으로 활동한다", type: "allin" },
        { text: "정보만 얻고 조용히 있는다", type: "balance" },
        { text: "오프라인 모임을 좋아한다", type: "social" },
        { text: "혼자 즐기는 게 좋다", type: "explorer" }
      ]
    },
    {
      id: 6,
      text: "취미 실력에 대한 욕심은?",
      options: [
        { text: "프로 레벨을 목표로 한다", type: "allin" },
        { text: "꾸준히 성장하고 싶다", type: "balance" },
        { text: "같이 하는 사람들과 비슷하면 OK", type: "social" },
        { text: "즐기면 그만이다", type: "explorer" }
      ]
    },
    {
      id: 7,
      text: "취미 때문에 밤을 샌 적이 있나요?",
      options: [
        { text: "자주 있다", type: "allin" },
        { text: "가끔 있다", type: "balance" },
        { text: "친구들과 함께라면 샌다", type: "social" },
        { text: "건강이 우선이다", type: "explorer" }
      ]
    },
    {
      id: 8,
      text: "취미 관련 SNS 계정은?",
      options: [
        { text: "전용 계정을 운영한다", type: "allin" },
        { text: "가끔 포스팅한다", type: "balance" },
        { text: "친구들과 공유한다", type: "social" },
        { text: "따로 안 한다", type: "explorer" }
      ]
    },
    {
      id: 9,
      text: "새로운 취미 vs 기존 취미?",
      options: [
        { text: "하나에 깊이 빠진다", type: "allin" },
        { text: "여러 개를 병행한다", type: "balance" },
        { text: "친구 따라 바뀐다", type: "social" },
        { text: "계속 새로운 걸 찾는다", type: "explorer" }
      ]
    },
    {
      id: 10,
      text: "취미 생활이 당신에게 주는 것은?",
      options: [
        { text: "성취감과 목표", type: "allin" },
        { text: "스트레스 해소", type: "balance" },
        { text: "인간관계", type: "social" },
        { text: "새로운 경험", type: "explorer" }
      ]
    }
  ],
  results: {
    allin: {
      type: "올인형 덕후",
      description: "당신은 한 번 빠지면 끝까지 파고드는 진정한 덕후 스타일입니다. 최고를 향한 열정이 대단해요!",
      traits: ["열정적", "전문성", "집중력", "목표 지향"],
      advice: "다른 것들도 돌아보세요. 한 곳에만 집중하면 시야가 좁아질 수 있어요!"
    },
    balance: {
      type: "밸런스형 취미러",
      description: "당신은 일과 취미의 균형을 잘 맞추는 스타일입니다. 건강하게 취미를 즐겨요!",
      traits: ["균형감", "꾸준함", "자기 관리", "지속력"],
      advice: "가끔은 더 깊이 빠져보세요. 몰입의 즐거움도 크답니다!"
    },
    social: {
      type: "소셜형 취미러",
      description: "당신은 사람들과 함께 취미를 즐기는 스타일입니다. 취미가 곧 사교의 장이에요!",
      traits: ["사교성", "공유 정신", "팀워크", "유연함"],
      advice: "혼자만의 시간도 가져보세요. 나만의 취미 시간도 소중해요!"
    },
    explorer: {
      type: "탐험형 취미러",
      description: "당신은 다양한 취미를 경험하는 호기심 많은 스타일입니다. 새로운 세계를 여는 탐험가에요!",
      traits: ["호기심", "적응력", "다재다능", "경험 추구"],
      advice: "하나에 더 집중해보세요. 깊이 파면 더 큰 즐거움이 있을 거예요!"
    }
  }
};
