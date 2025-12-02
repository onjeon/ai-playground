// secret-crush 테스트 데이터
export const secretcrushTest = {
  id: "secret-crush",
  title: "짝사랑 유형 테스트",
  description: "좋아하는 사람 앞에서 당신은 어떤 스타일인지 알아보세요!",
  questions: [
    {
      id: 1,
      text: "좋아하는 사람이 생기면 가장 먼저 하는 것은?",
      options: [
        { text: "SNS를 모두 훑어본다", type: "stalker" },
        { text: "친구에게 바로 말한다", type: "talker" },
        { text: "혼자 설레며 간직한다", type: "dreamer" },
        { text: "다가갈 기회를 찾는다", type: "actor" }
      ]
    },
    {
      id: 2,
      text: "좋아하는 사람과 눈이 마주치면?",
      options: [
        { text: "급히 시선을 피한다", type: "dreamer" },
        { text: "눈웃음을 지어본다", type: "actor" },
        { text: "얼굴이 빨개진다", type: "talker" },
        { text: "한 번 더 쳐다본다", type: "stalker" }
      ]
    },
    {
      id: 3,
      text: "좋아하는 사람이 다른 이성과 대화하면?",
      options: [
        { text: "은근히 관찰한다", type: "stalker" },
        { text: "친구에게 불안하다고 말한다", type: "talker" },
        { text: "상상의 시나리오를 만든다", type: "dreamer" },
        { text: "나도 대화에 끼어본다", type: "actor" }
      ]
    },
    {
      id: 4,
      text: "좋아하는 사람의 취향을 알게 되면?",
      options: [
        { text: "나도 관심을 가져본다", type: "stalker" },
        { text: "대화 소재로 활용한다", type: "actor" },
        { text: "그 사람을 더 이해하게 된다", type: "dreamer" },
        { text: "친구에게 신나서 말한다", type: "talker" }
      ]
    },
    {
      id: 5,
      text: "짝사랑 중 가장 행복한 순간은?",
      options: [
        { text: "그 사람 소식을 알게 될 때", type: "stalker" },
        { text: "친구와 그 사람 얘기할 때", type: "talker" },
        { text: "혼자 상상할 때", type: "dreamer" },
        { text: "짧게라도 대화할 때", type: "actor" }
      ]
    },
    {
      id: 6,
      text: "좋아하는 사람에게 말을 걸 기회가 생기면?",
      options: [
        { text: "준비한 말을 한다", type: "actor" },
        { text: "긴장해서 못 한다", type: "dreamer" },
        { text: "뭐라고 했는지 친구에게 보고한다", type: "talker" },
        { text: "그 순간을 기억해둔다", type: "stalker" }
      ]
    },
    {
      id: 7,
      text: "짝사랑 기간이 길어지면?",
      options: [
        { text: "정보가 점점 쌓인다", type: "stalker" },
        { text: "친구도 지칠 정도로 얘기한다", type: "talker" },
        { text: "혼자만의 세계에 빠진다", type: "dreamer" },
        { text: "고백 타이밍을 노린다", type: "actor" }
      ]
    },
    {
      id: 8,
      text: "좋아하는 사람이 연애 중이라면?",
      options: [
        { text: "상대방을 조사해본다", type: "stalker" },
        { text: "친구에게 슬픔을 토로한다", type: "talker" },
        { text: "조용히 마음을 정리한다", type: "dreamer" },
        { text: "그래도 내 마음은 표현한다", type: "actor" }
      ]
    },
    {
      id: 9,
      text: "짝사랑 중 SNS 사용은?",
      options: [
        { text: "그 사람 프로필을 자주 본다", type: "stalker" },
        { text: "내 일상도 올려본다", type: "actor" },
        { text: "좋아하는 감정을 간접 표현한다", type: "dreamer" },
        { text: "친구에게 그 사람 게시물을 공유한다", type: "talker" }
      ]
    },
    {
      id: 10,
      text: "짝사랑이 끝나면 어떻게 하나요?",
      options: [
        { text: "흔적들을 정리한다", type: "stalker" },
        { text: "친구와 회포를 푼다", type: "talker" },
        { text: "추억으로 간직한다", type: "dreamer" },
        { text: "다음 사랑을 기대한다", type: "actor" }
      ]
    }
  ],
  results: {
    stalker: {
      type: "정보수집형 짝사랑러",
      description: "당신은 좋아하는 사람의 모든 것을 알고 싶어하는 스타일입니다. 관심이 곧 사랑이에요!",
      traits: ["꼼꼼함", "관찰력", "정보력", "신중함"],
      advice: "관찰만 하지 말고 직접 다가가보세요. 실제 모습은 상상과 다를 수 있어요!"
    },
    talker: {
      type: "수다형 짝사랑러",
      description: "당신은 짝사랑을 친구와 나누며 즐기는 스타일입니다. 공유하면 기쁨이 배가 되죠!",
      traits: ["사교적", "표현력", "공감 능력", "개방적"],
      advice: "너무 많이 퍼뜨리면 당사자에게 갈 수 있어요. 비밀도 가끔은 필요해요!"
    },
    dreamer: {
      type: "몽상가형 짝사랑러",
      description: "당신은 혼자 상상하며 설레는 순수한 스타일입니다. 마음속 드라마가 있어요!",
      traits: ["감성적", "상상력", "순수함", "내면의 세계"],
      advice: "상상 속에만 머물면 기회를 놓칠 수 있어요. 용기를 내보세요!"
    },
    actor: {
      type: "행동파 짝사랑러",
      description: "당신은 좋아하면 적극적으로 다가가는 스타일입니다. 사랑은 쟁취하는 것이죠!",
      traits: ["용기", "적극성", "자신감", "결단력"],
      advice: "상대방의 반응도 잘 살펴보세요. 서두르지 않아도 좋은 결과가 올 거예요!"
    }
  }
};
