// phone-notification 테스트 데이터
export const phonenotificationTest = {
  id: "phone-notification",
  title: "알림 확인 유형 테스트",
  description: "휴대폰 알림을 대하는 당신의 태도로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "알림이 왔을 때 가장 먼저 하는 것은?",
      options: [
        { text: "바로 확인한다", type: "instant" },
        { text: "나중에 한꺼번에 본다", type: "batch" },
        { text: "중요한 것만 확인한다", type: "selective" },
        { text: "알림을 꺼놔서 모른다", type: "minimal" }
      ]
    },
    {
      id: 2,
      text: "읽지 않은 알림 배지(빨간 숫자)는?",
      options: [
        { text: "있으면 바로 없앤다", type: "instant" },
        { text: "신경 안 쓴다", type: "batch" },
        { text: "중요한 것만 읽는다", type: "selective" },
        { text: "배지를 꺼놨다", type: "minimal" }
      ]
    },
    {
      id: 3,
      text: "회의/중요한 일 중에 알림이 오면?",
      options: [
        { text: "슬쩍 확인한다", type: "instant" },
        { text: "끝나고 확인한다", type: "batch" },
        { text: "보낸 사람 확인 후 판단", type: "selective" },
        { text: "무음이라 모른다", type: "minimal" }
      ]
    },
    {
      id: 4,
      text: "알림 설정은 어떻게 해두나요?",
      options: [
        { text: "모든 앱 알림 허용", type: "instant" },
        { text: "기본 설정 그대로", type: "batch" },
        { text: "중요한 앱만 알림 허용", type: "selective" },
        { text: "대부분 알림 꺼둠", type: "minimal" }
      ]
    },
    {
      id: 5,
      text: "SNS 알림에 대한 태도는?",
      options: [
        { text: "좋아요/댓글 바로 확인", type: "instant" },
        { text: "시간 날 때 확인", type: "batch" },
        { text: "DM만 확인", type: "selective" },
        { text: "SNS 알림은 꺼둠", type: "minimal" }
      ]
    },
    {
      id: 6,
      text: "잠자기 전 알림 확인은?",
      options: [
        { text: "마지막까지 확인한다", type: "instant" },
        { text: "그날 것 정리하고 잔다", type: "batch" },
        { text: "중요한 것만 확인", type: "selective" },
        { text: "침대에선 폰 안 본다", type: "minimal" }
      ]
    },
    {
      id: 7,
      text: "알림음 설정은?",
      options: [
        { text: "항상 소리 켜둠", type: "instant" },
        { text: "진동 모드", type: "batch" },
        { text: "VIP만 소리", type: "selective" },
        { text: "항상 무음", type: "minimal" }
      ]
    },
    {
      id: 8,
      text: "알림을 못 본 걸 알았을 때?",
      options: [
        { text: "당장 확인한다", type: "instant" },
        { text: "시간 되면 본다", type: "batch" },
        { text: "급한 것만 확인", type: "selective" },
        { text: "크게 신경 안 쓴다", type: "minimal" }
      ]
    },
    {
      id: 9,
      text: "하루에 폰을 확인하는 횟수는?",
      options: [
        { text: "셀 수 없이 많이", type: "instant" },
        { text: "수십 번 정도", type: "batch" },
        { text: "필요할 때만", type: "selective" },
        { text: "거의 안 본다", type: "minimal" }
      ]
    },
    {
      id: 10,
      text: "알림에 대한 당신의 철학은?",
      options: [
        { text: "놓치면 안 된다", type: "instant" },
        { text: "적당히 관리한다", type: "batch" },
        { text: "중요한 것만 집중", type: "selective" },
        { text: "알림은 방해다", type: "minimal" }
      ]
    }
  ],
  results: {
    instant: {
      type: "즉시 확인형",
      description: "당신은 알림이 오면 바로 확인하는 스타일입니다. 항상 연결되어 있어요!",
      traits: ["반응성", "연결 욕구", "FOMO", "관계 중시"],
      advice: "가끔은 알림을 끄고 집중해보세요. 단절도 필요해요!"
    },
    batch: {
      type: "모아서 확인형",
      description: "당신은 알림을 모아서 처리하는 스타일입니다. 효율적인 관리를 해요!",
      traits: ["효율적", "자기 페이스", "균형감", "계획적"],
      advice: "급한 연락을 놓치지 않도록 중요 알림은 따로 설정해두세요!"
    },
    selective: {
      type: "선택적 확인형",
      description: "당신은 중요한 알림만 확인하는 스타일입니다. 우선순위가 명확해요!",
      traits: ["우선순위 명확", "선택적 집중", "효율성", "경계 설정"],
      advice: "가끔은 덜 중요한 알림에서도 즐거움을 찾아보세요!"
    },
    minimal: {
      type: "알림 최소화형",
      description: "당신은 알림에서 자유로운 스타일입니다. 디지털 미니멀리스트에요!",
      traits: ["독립적", "집중력", "미니멀리즘", "자기 통제"],
      advice: "중요한 연락은 놓치지 않도록 가끔 확인해주세요!"
    }
  }
};
