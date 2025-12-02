// gift-receiver 테스트 데이터
export const giftreceiverTest = {
  id: "gift-receiver",
  title: "선물 받는 유형 테스트",
  description: "선물을 받을 때 당신의 반응으로 알아보는 성격 테스트!",
  questions: [
    {
      id: 1,
      text: "선물을 받으면 가장 먼저 하는 것은?",
      options: [
        { text: "감탄하며 바로 뜯는다", type: "excited" },
        { text: "뭘까 추측하며 천천히 뜯는다", type: "analyzer" },
        { text: "고마움을 먼저 표현한다", type: "grateful" },
        { text: "쑥스러워한다", type: "shy" }
      ]
    },
    {
      id: 2,
      text: "기대하던 선물이 아니었다면?",
      options: [
        { text: "그래도 즐겁게 반응한다", type: "excited" },
        { text: "왜 이걸 줬을까 생각한다", type: "analyzer" },
        { text: "마음이 중요하니까 괜찮다", type: "grateful" },
        { text: "티 안 내려고 노력한다", type: "shy" }
      ]
    },
    {
      id: 3,
      text: "선물 포장을 뜯는 스타일은?",
      options: [
        { text: "신나서 막 뜯는다", type: "excited" },
        { text: "조심스럽게 뜯는다", type: "analyzer" },
        { text: "포장도 감사히 본다", type: "grateful" },
        { text: "남들 앞에서 뜯기 부끄럽다", type: "shy" }
      ]
    },
    {
      id: 4,
      text: "예상치 못한 선물을 받으면?",
      options: [
        { text: "와! 하고 좋아한다", type: "excited" },
        { text: "왜 줬지? 생각한다", type: "analyzer" },
        { text: "감동해서 고마워한다", type: "grateful" },
        { text: "당황한다", type: "shy" }
      ]
    },
    {
      id: 5,
      text: "선물에서 가장 중요하게 생각하는 것은?",
      options: [
        { text: "선물 자체", type: "excited" },
        { text: "선물의 의미/이유", type: "analyzer" },
        { text: "주는 사람의 마음", type: "grateful" },
        { text: "선물보다 부담감", type: "shy" }
      ]
    },
    {
      id: 6,
      text: "비싼 선물을 받으면?",
      options: [
        { text: "기분 좋다", type: "excited" },
        { text: "가격을 추측해본다", type: "analyzer" },
        { text: "부담스럽지만 감사하다", type: "grateful" },
        { text: "너무 부담스럽다", type: "shy" }
      ]
    },
    {
      id: 7,
      text: "선물을 받고 SNS에 올리나요?",
      options: [
        { text: "바로 올린다", type: "excited" },
        { text: "예쁘게 찍어서 올린다", type: "analyzer" },
        { text: "준 사람에게 감사 메시지를 보낸다", type: "grateful" },
        { text: "올리기 쑥스럽다", type: "shy" }
      ]
    },
    {
      id: 8,
      text: "마음에 안 드는 선물은 어떻게 하나요?",
      options: [
        { text: "그래도 잘 쓴다", type: "excited" },
        { text: "어디 쓸 데 없나 찾아본다", type: "analyzer" },
        { text: "마음이 중요하니 간직한다", type: "grateful" },
        { text: "어떻게 해야 할지 모르겠다", type: "shy" }
      ]
    },
    {
      id: 9,
      text: "선물을 받을 때 표정 관리는?",
      options: [
        { text: "감정 그대로 드러난다", type: "excited" },
        { text: "적당히 리액션한다", type: "analyzer" },
        { text: "진심으로 고마워한다", type: "grateful" },
        { text: "어색하다", type: "shy" }
      ]
    },
    {
      id: 10,
      text: "선물 받는 것에 대한 생각은?",
      options: [
        { text: "좋다! 더 주세요", type: "excited" },
        { text: "무슨 의미인지 궁금하다", type: "analyzer" },
        { text: "받기만 하면 미안하다", type: "grateful" },
        { text: "부담스럽다", type: "shy" }
      ]
    }
  ],
  results: {
    excited: {
      type: "흥분형",
      description: "당신은 선물을 받으면 기쁨을 숨기지 않는 스타일입니다. 솔직한 반응이 매력이에요!",
      traits: ["솔직함", "긍정적", "에너지 넘침", "즉각적 반응"],
      advice: "선물의 마음도 함께 느껴보세요. 물건 외에 담긴 정성도 있답니다!"
    },
    analyzer: {
      type: "분석형",
      description: "당신은 선물의 의미를 생각하는 스타일입니다. 섬세하고 꼼꼼해요!",
      traits: ["분석적", "섬세함", "호기심", "깊이 있음"],
      advice: "가끔은 그냥 기뻐해도 좋아요. 단순하게 즐기는 것도 행복이에요!"
    },
    grateful: {
      type: "감사형",
      description: "당신은 선물보다 마음을 중시하는 따뜻한 스타일입니다. 진정한 감사를 아는 사람이에요!",
      traits: ["감사하는 마음", "따뜻함", "관계 중시", "배려심"],
      advice: "당신도 선물을 즐겨도 돼요. 받는 기쁨도 주는 사람에게 선물이에요!"
    },
    shy: {
      type: "쑥스러움형",
      description: "당신은 선물 받는 것이 쑥스러운 스타일입니다. 겸손하고 조용한 매력이 있어요!",
      traits: ["겸손함", "내향적", "부담 느낌", "조용함"],
      advice: "받는 것도 주는 기쁨이에요. 편하게 기뻐해도 괜찮아요!"
    }
  }
};
