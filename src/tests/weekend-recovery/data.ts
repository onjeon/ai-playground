// weekend-recovery 테스트 데이터
export const weekendrecoveryTest = {
  id: "weekend-recovery",
  title: "주말 회복 유형 테스트",
  description: "주말에 에너지를 충전하는 당신만의 방식으로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "금요일 밤, 퇴근 후 가장 먼저 하는 것은?",
      options: [
        { text: "친구들과 술 한잔", type: "social" },
        { text: "집에서 넷플릭스", type: "homebody" },
        { text: "밀린 집안일 처리", type: "productive" },
        { text: "취미 활동", type: "hobby" }
      ]
    },
    {
      id: 2,
      text: "토요일 아침에 일어나는 시간은?",
      options: [
        { text: "평소보다 많이 늦게", type: "homebody" },
        { text: "약속에 맞춰서", type: "social" },
        { text: "평소와 비슷하게", type: "productive" },
        { text: "하고 싶은 거에 맞춰서", type: "hobby" }
      ]
    },
    {
      id: 3,
      text: "이상적인 토요일 오후는?",
      options: [
        { text: "친구들과 브런치/카페", type: "social" },
        { text: "집에서 뒹굴뒹굴", type: "homebody" },
        { text: "운동이나 자기계발", type: "productive" },
        { text: "좋아하는 취미 활동", type: "hobby" }
      ]
    },
    {
      id: 4,
      text: "주말에 약속이 없으면?",
      options: [
        { text: "허전하다", type: "social" },
        { text: "행복하다", type: "homebody" },
        { text: "할 일을 찾는다", type: "productive" },
        { text: "드디어 내 시간!", type: "hobby" }
      ]
    },
    {
      id: 5,
      text: "주말에 에너지 충전이 되는 방법은?",
      options: [
        { text: "사람들과 어울리기", type: "social" },
        { text: "혼자만의 시간 갖기", type: "homebody" },
        { text: "뭔가를 해내는 성취감", type: "productive" },
        { text: "좋아하는 일에 몰입하기", type: "hobby" }
      ]
    },
    {
      id: 6,
      text: "일요일 저녁 기분은 어떤가요?",
      options: [
        { text: "월요병이 온다", type: "homebody" },
        { text: "아쉽지만 괜찮다", type: "social" },
        { text: "다음 주 준비한다", type: "productive" },
        { text: "취미로 마무리한다", type: "hobby" }
      ]
    },
    {
      id: 7,
      text: "주말에 가장 많이 하는 것은?",
      options: [
        { text: "약속 잡기", type: "social" },
        { text: "수면과 휴식", type: "homebody" },
        { text: "밀린 일 처리", type: "productive" },
        { text: "덕질/취미", type: "hobby" }
      ]
    },
    {
      id: 8,
      text: "주말 계획은 어떻게 세우나요?",
      options: [
        { text: "친구들 일정에 맞춘다", type: "social" },
        { text: "계획 없이 흘러간다", type: "homebody" },
        { text: "할 일 리스트를 만든다", type: "productive" },
        { text: "하고 싶은 것 위주로", type: "hobby" }
      ]
    },
    {
      id: 9,
      text: "주말에 돈을 가장 많이 쓰는 곳은?",
      options: [
        { text: "모임비/외식비", type: "social" },
        { text: "배달 음식/구독 서비스", type: "homebody" },
        { text: "자기계발/운동", type: "productive" },
        { text: "취미 용품", type: "hobby" }
      ]
    },
    {
      id: 10,
      text: "완벽한 주말의 조건은?",
      options: [
        { text: "좋은 사람들과 함께", type: "social" },
        { text: "아무것도 안 해도 되는 것", type: "homebody" },
        { text: "계획대로 뿌듯하게", type: "productive" },
        { text: "좋아하는 것에 집중하기", type: "hobby" }
      ]
    }
  ],
  results: {
    social: {
      type: "사교형 충전러",
      description: "당신은 사람들과 어울리며 에너지를 얻는 스타일입니다. 함께할 때 행복해요!",
      traits: ["사교적", "외향적", "관계 중시", "활발함"],
      advice: "가끔은 혼자만의 시간도 필요해요. 나를 위한 조용한 시간도 충전이 돼요!"
    },
    homebody: {
      type: "집돌이/집순이형",
      description: "당신은 집에서 쉬며 충전하는 스타일입니다. 집이 제일 편해요!",
      traits: ["내향적", "휴식 중시", "편안함 추구", "에너지 보존"],
      advice: "가끔 밖에 나가보세요. 새로운 경험이 또 다른 에너지를 줄 수 있어요!"
    },
    productive: {
      type: "생산적 충전러",
      description: "당신은 뭔가를 해내며 충전되는 스타일입니다. 성취감이 에너지에요!",
      traits: ["계획적", "성취 지향", "부지런함", "자기 관리"],
      advice: "쉬는 것도 생산적인 활동이에요. 완전한 휴식도 때론 필요해요!"
    },
    hobby: {
      type: "취미형 충전러",
      description: "당신은 좋아하는 일에 몰입하며 충전되는 스타일입니다. 덕질이 힐링이에요!",
      traits: ["열정적", "집중력", "자기만의 세계", "창의적"],
      advice: "취미도 좋지만 다른 활동과 균형을 맞춰보세요. 새로운 취미가 생길 수도!"
    }
  }
};
