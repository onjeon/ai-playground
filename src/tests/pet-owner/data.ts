// pet-owner 테스트 데이터
export const petownerTest = {
  id: "pet-owner",
  title: "반려동물 집사 유형 테스트",
  description: "반려동물을 대하는 당신의 스타일로 알아보는 집사 유형 테스트!",
  questions: [
    {
      id: 1,
      text: "반려동물에게 말을 걸 때 어떻게 하나요?",
      options: [
        { text: "아기한테 말하듯 한다", type: "devoted" },
        { text: "친구처럼 대화한다", type: "buddy" },
        { text: "간단히 이름만 부른다", type: "practical" },
        { text: "SNS에 올릴 영상을 찍으며 말한다", type: "influencer" }
      ]
    },
    {
      id: 2,
      text: "반려동물 용품을 살 때?",
      options: [
        { text: "최고급으로 산다", type: "devoted" },
        { text: "가성비 좋은 걸로 산다", type: "practical" },
        { text: "예쁜 걸로 산다", type: "influencer" },
        { text: "함께 고른다(?)는 느낌으로", type: "buddy" }
      ]
    },
    {
      id: 3,
      text: "반려동물 사진은 얼마나 많이 찍나요?",
      options: [
        { text: "폰 용량 대부분이 반려동물 사진", type: "devoted" },
        { text: "SNS 업로드용으로 많이 찍는다", type: "influencer" },
        { text: "추억으로 가끔 찍는다", type: "buddy" },
        { text: "필요할 때만 찍는다", type: "practical" }
      ]
    },
    {
      id: 4,
      text: "반려동물이 아프면 어떻게 하나요?",
      options: [
        { text: "바로 병원에 달려간다", type: "devoted" },
        { text: "상태를 보고 판단한다", type: "practical" },
        { text: "걱정되어 곁에 있어준다", type: "buddy" },
        { text: "병원 가면서 스토리 올린다", type: "influencer" }
      ]
    },
    {
      id: 5,
      text: "반려동물 때문에 약속을 취소한 적이 있나요?",
      options: [
        { text: "당연히 있다", type: "devoted" },
        { text: "상황에 따라 조절한다", type: "practical" },
        { text: "데리고 갈 수 있으면 데려간다", type: "buddy" },
        { text: "반려동물 동반 장소로 바꾼다", type: "influencer" }
      ]
    },
    {
      id: 6,
      text: "반려동물 생일은 어떻게 보내나요?",
      options: [
        { text: "케이크와 선물 파티를 한다", type: "devoted" },
        { text: "좋은 간식을 준다", type: "practical" },
        { text: "함께 특별한 시간을 보낸다", type: "buddy" },
        { text: "생일 콘텐츠를 촬영한다", type: "influencer" }
      ]
    },
    {
      id: 7,
      text: "반려동물 훈련에 대한 생각은?",
      options: [
        { text: "전문가에게 맡긴다", type: "devoted" },
        { text: "기본적인 것만 가르친다", type: "practical" },
        { text: "함께 배워간다", type: "buddy" },
        { text: "훈련 과정도 콘텐츠가 된다", type: "influencer" }
      ]
    },
    {
      id: 8,
      text: "반려동물 SNS 계정이 있나요?",
      options: [
        { text: "있고 가끔 올린다", type: "devoted" },
        { text: "있고 열심히 운영한다", type: "influencer" },
        { text: "내 계정에 같이 올린다", type: "buddy" },
        { text: "없다", type: "practical" }
      ]
    },
    {
      id: 9,
      text: "반려동물과 가장 행복한 순간은?",
      options: [
        { text: "바라볼 때 전부 행복하다", type: "devoted" },
        { text: "같이 놀 때", type: "buddy" },
        { text: "건강하게 밥 잘 먹을 때", type: "practical" },
        { text: "예쁜 사진이 나올 때", type: "influencer" }
      ]
    },
    {
      id: 10,
      text: "반려동물에게 가장 중요한 것은?",
      options: [
        { text: "무한한 사랑", type: "devoted" },
        { text: "건강과 규칙적인 생활", type: "practical" },
        { text: "함께하는 시간", type: "buddy" },
        { text: "좋은 환경과 콘텐츠", type: "influencer" }
      ]
    }
  ],
  results: {
    devoted: {
      type: "헌신적 집사",
      description: "당신은 반려동물에게 모든 것을 바치는 진정한 집사입니다. 사랑이 넘쳐요!",
      traits: ["헌신적", "사랑 가득", "책임감", "희생 정신"],
      advice: "반려동물도 좋지만 나 자신도 돌봐주세요. 집사 건강이 반려동물 행복이에요!"
    },
    practical: {
      type: "현실적 집사",
      description: "당신은 건강과 안전을 최우선으로 생각하는 현실적인 집사입니다. 균형 잡힌 돌봄이에요!",
      traits: ["합리적", "건강 중시", "계획적", "책임감"],
      advice: "가끔은 감정 표현도 해주세요. 반려동물도 사랑의 표현을 알아차려요!"
    },
    buddy: {
      type: "친구 같은 집사",
      description: "당신은 반려동물과 동등한 친구 관계를 유지하는 스타일입니다. 진정한 동반자에요!",
      traits: ["동등한 관계", "친밀함", "함께하는 시간", "유대감"],
      advice: "친구지만 가끔은 훈육도 필요해요. 사랑과 규칙의 균형을 맞춰보세요!"
    },
    influencer: {
      type: "콘텐츠형 집사",
      description: "당신은 반려동물과 함께 콘텐츠를 만드는 창작자 집사입니다. 귀여움을 세상과 나눠요!",
      traits: ["창의적", "공유 정신", "트렌드 민감", "기록하는 습관"],
      advice: "촬영 외의 일상도 소중히 해주세요. 카메라 없는 순간도 행복이에요!"
    }
  }
};
