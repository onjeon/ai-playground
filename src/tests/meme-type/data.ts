// 밈 유형 테스트 - 나를 밈으로 표현한다면?

export const questions = [
  {
    id: 1,
    question: "친구가 갑자기 황당한 말을 했을 때 나는?",
    options: [
      { text: "???뭐라고??? 멈칫", scores: { confused: 3, dramatic: 1 } },
      { text: "ㅋㅋㅋㅋㅋ 폭소", scores: { laughing: 3, chaotic: 1 } },
      { text: "아 진짜? 쿨하게 반응", scores: { unbothered: 3, sassy: 1 } },
      { text: "야 그게 무슨 소리야", scores: { sassy: 3, dramatic: 1 } },
    ],
  },
  {
    id: 2,
    question: "월요일 아침 기상 후 나의 상태는?",
    options: [
      { text: "좀비 그 자체...", scores: { tired: 3, dramatic: 1 } },
      { text: "어? 벌써 월요일? (멍)", scores: { confused: 3, tired: 1 } },
      { text: "또 일주일 시작이구나 (덤덤)", scores: { unbothered: 3, sassy: 1 } },
      { text: "으아아아 싫어!!!", scores: { dramatic: 3, chaotic: 1 } },
    ],
  },
  {
    id: 3,
    question: "예상치 못한 칭찬을 받으면?",
    options: [
      { text: "헉 나? 진짜? (당황)", scores: { confused: 3, wholesome: 1 } },
      { text: "당연하지~ (어깨 으쓱)", scores: { sassy: 3, unbothered: 1 } },
      { text: "고마워요... 감동ㅠㅠ", scores: { wholesome: 3, dramatic: 1 } },
      { text: "아 뭐야 갑자기ㅋㅋ", scores: { laughing: 3, chaotic: 1 } },
    ],
  },
  {
    id: 4,
    question: "카톡 그룹방이 100개 넘게 쌓였을 때?",
    options: [
      { text: "스크롤 내리다 포기, 나중에 봄", scores: { tired: 3, unbothered: 1 } },
      { text: "뭐야 무슨 일이야?! 빨리 읽음", scores: { dramatic: 3, chaotic: 1 } },
      { text: "그냥 다 읽음 처리", scores: { unbothered: 3, sassy: 1 } },
      { text: "일단 반응 없이 읽기만...", scores: { confused: 3, tired: 1 } },
    ],
  },
  {
    id: 5,
    question: "좋아하는 음식을 먹을 때 나는?",
    options: [
      { text: "행복해서 눈물 날 것 같음", scores: { dramatic: 3, wholesome: 1 } },
      { text: "맛있다 (묵묵히 먹음)", scores: { unbothered: 3, tired: 1 } },
      { text: "이거 미쳤다 진짜ㅋㅋㅋ", scores: { laughing: 3, chaotic: 1 } },
      { text: "냠냠 맛있어요~", scores: { wholesome: 3, laughing: 1 } },
    ],
  },
  {
    id: 6,
    question: "누군가 나를 약올릴 때?",
    options: [
      { text: "뭐? 뭐라고? (화남)", scores: { sassy: 3, dramatic: 1 } },
      { text: "ㅋㅋㅋ 그래~ 알았어~", scores: { unbothered: 3, laughing: 1 } },
      { text: "장난 받아치기", scores: { chaotic: 3, laughing: 1 } },
      { text: "왜 그래... (진지하게 상처)", scores: { wholesome: 3, confused: 1 } },
    ],
  },
  {
    id: 7,
    question: "급하게 달려왔는데 버스가 눈앞에서 떠났을 때?",
    options: [
      { text: "아... 하... (멍하게 서있음)", scores: { tired: 3, confused: 1 } },
      { text: "짜증나!!!!! (외침)", scores: { dramatic: 3, sassy: 1 } },
      { text: "ㅋㅋㅋㅋ 뭐야 이게", scores: { laughing: 3, chaotic: 1 } },
      { text: "다음 버스 기다리지 뭐 (덤덤)", scores: { unbothered: 3, tired: 1 } },
    ],
  },
  {
    id: 8,
    question: "갑자기 모두의 시선이 나에게 집중되면?",
    options: [
      { text: "왜? 왜? 내가 뭐 잘못했어?", scores: { confused: 3, dramatic: 1 } },
      { text: "네? 뭐요? (쿨하게)", scores: { unbothered: 3, sassy: 1 } },
      { text: "아 왜요~ (웃으면서)", scores: { laughing: 3, wholesome: 1 } },
      { text: "관심 받으니까 좋은데?", scores: { sassy: 3, chaotic: 1 } },
    ],
  },
  {
    id: 9,
    question: "친구가 엄청난 비밀을 말해줬을 때?",
    options: [
      { text: "헐 대박 진짜?!?!", scores: { dramatic: 3, chaotic: 1 } },
      { text: "오... 그래? (표정 관리)", scores: { unbothered: 3, sassy: 1 } },
      { text: "ㅋㅋㅋㅋㅋㅋ 미쳤다", scores: { laughing: 3, chaotic: 1 } },
      { text: "괜찮아? 힘들었겠다", scores: { wholesome: 3, confused: 1 } },
    ],
  },
  {
    id: 10,
    question: "나를 가장 잘 표현하는 것은?",
    options: [
      { text: "상황에 따라 텐션이 롤러코스터", scores: { chaotic: 3, dramatic: 1 } },
      { text: "대체로 평온하고 무덤덤", scores: { unbothered: 3, tired: 1 } },
      { text: "감정 표현이 풍부한 편", scores: { dramatic: 3, wholesome: 1 } },
      { text: "웃음이 많은 편", scores: { laughing: 3, wholesome: 1 } },
    ],
  },
];

export interface MemeTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  signatureMeme: string;
  catchphrase: string;
  inRealLife: string;
  strengths: string[];
  relatable: string[];
  famousMeme: string;
  compatibility: string[];
}

export const results: Record<string, MemeTypeResult> = {
  confused: {
    type: "confused",
    title: "물음표 범벅 밈",
    emoji: "❓",
    subtitle: "뭐? 뭐라고? 이해가 안 돼...",
    description: "갑작스러운 상황에 늘 당황하고, '뭐?', '왜?'가 입에 붙은 당신! 세상은 너무 복잡하고 이해 안 되는 것투성이예요. 하지만 그 순수한 물음표 반응이 오히려 귀엽고 공감가는 포인트입니다.",
    signatureMeme: "혼란스러운 수학 공식 짤",
    catchphrase: "뭐? 뭐라고? 갑자기?",
    inRealLife: "설명을 들어도 3번은 다시 물어보는 타입",
    strengths: [
      "순수하고 솔직한 반응",
      "모르는 걸 모른다고 하는 정직함",
      "귀여운 리액션으로 분위기 메이커",
    ],
    relatable: [
      "수업 시간에 멍 때리다 교수님 질문에 당황",
      "친구들 대화에 혼자 못 따라가는 순간",
      "이해했다고 했는데 막상 하면 모르겠는 것",
    ],
    famousMeme: "Confused Math Lady (계산하는 여자)",
    compatibility: ["폭소 밈형", "올바른 밈형"],
  },
  laughing: {
    type: "laughing",
    title: "폭소 밈형",
    emoji: "🤣",
    subtitle: "ㅋㅋㅋㅋㅋㅋ 웃겨 죽겠어",
    description: "뭘 봐도 웃기고, 남들이 안 웃긴 것도 웃긴 당신! 웃음 포인트가 낮아서 항상 웃고 있어요. 주변 사람들도 당신과 있으면 덩달아 웃게 됩니다. 웃음이 전염되는 긍정 에너지의 소유자!",
    signatureMeme: "웃다가 숨 못 쉬는 짤",
    catchphrase: "ㅋㅋㅋㅋㅋ 아 진짜ㅋㅋㅋㅋ",
    inRealLife: "아무 말에도 웃어서 분위기 메이커",
    strengths: [
      "긍정적인 에너지",
      "주변을 밝게 하는 힘",
      "스트레스 해소 능력",
    ],
    relatable: [
      "혼자 핸드폰 보다가 빵 터지는 순간",
      "진지한 자리에서 웃음 참느라 고생",
      "웃긴 거 생각나서 혼자 웃을 때",
    ],
    famousMeme: "Crying Laughing Emoji 실사판",
    compatibility: ["카오스 밈형", "물음표 밈형"],
  },
  unbothered: {
    type: "unbothered",
    title: "무념무상 밈형",
    emoji: "😐",
    subtitle: "그래서? 나랑 무슨 상관?",
    description: "웬만한 일에 동요하지 않는 쿨한 당신! 다들 호들갑 떨 때 혼자 평온하게 지켜보는 타입이에요. '그래서?', '상관없어' 가 생활신조. 이 초연함이 오히려 멋있어 보이기도 합니다.",
    signatureMeme: "불타는 집에서 커피 마시는 짤",
    catchphrase: "상관없어, 어차피 다 괜찮아질 거야",
    inRealLife: "시험망해도 '어차피 한 번 사는 인생' 마인드",
    strengths: [
      "스트레스에 강함",
      "상황에 휘둘리지 않는 평정심",
      "남의 시선 신경 안 씀",
    ],
    relatable: [
      "다들 긴장할 때 혼자 태평한 순간",
      "뒷담 들어도 '그래서?' 반응",
      "급한 상황에도 느긋한 자기 페이스",
    ],
    famousMeme: "This Is Fine (불타는 집 강아지)",
    compatibility: ["피곤 밈형", "세시 밈형"],
  },
  dramatic: {
    type: "dramatic",
    title: "오버 리액션 밈형",
    emoji: "😱",
    subtitle: "헐!!! 대박!!! 어떡해!!!",
    description: "감정 표현이 풍부하고 리액션이 큰 당신! 작은 일에도 크게 반응하고, 기쁘면 날아갈 듯 기뻐하고, 슬프면 세상이 끝난 것 같아요. 덕분에 대화가 재밌고, SNS 스토리텔링도 잘하는 타입!",
    signatureMeme: "충격받은 피카츄 짤",
    catchphrase: "헐 대박 진짜?! 어떡해!!!",
    inRealLife: "일상도 드라마처럼 사는 주인공 마인드",
    strengths: [
      "풍부한 감정 표현력",
      "대화를 재밌게 만드는 능력",
      "공감 능력이 뛰어남",
    ],
    relatable: [
      "친구 소식에 더 난리치는 나",
      "내 일도 아닌데 몰입해서 화내는 순간",
      "작은 감동에도 눈물 글썽",
    ],
    famousMeme: "Surprised Pikachu (충격받은 피카츄)",
    compatibility: ["카오스 밈형", "올바른 밈형"],
  },
  tired: {
    type: "tired",
    title: "피곤 밈형",
    emoji: "😩",
    subtitle: "피곤해... 그냥 자고 싶어...",
    description: "만성피로에 시달리고, 항상 졸리고, 집에만 가고 싶은 당신! '피곤해', '자고 싶어'가 입버릇이에요. 하지만 그 피곤한 모습이 오히려 많은 사람들의 공감을 얻는 포인트입니다.",
    signatureMeme: "눈 밑이 까만 펭귄 짤",
    catchphrase: "아 피곤해... 집 가고 싶다...",
    inRealLife: "잠을 아무리 자도 부족한 만성 피로인",
    strengths: [
      "무리하지 않는 현명함",
      "휴식의 소중함을 아는 사람",
      "솔직한 컨디션 표현",
    ],
    relatable: [
      "금요일 퇴근하고 집에서 죽은 듯이 잠",
      "월요일 아침부터 금요일이 기다려지는 마음",
      "모임 약속 잡으면서 이미 취소하고 싶은 것",
    ],
    famousMeme: "Tired Spongebob (지친 스폰지밥)",
    compatibility: ["무념무상 밈형", "물음표 밈형"],
  },
  sassy: {
    type: "sassy",
    title: "세시 밈형",
    emoji: "💅",
    subtitle: "그래서? 내가 왜? 알바노?",
    description: "당당하고 쿨하며, 할 말 다 하는 당신! 눈치 보지 않고 자기 의견을 표현하고, 약간의 비꼼과 위트가 있어요. '내가 왜?', '알바노' 같은 세시한 대답이 특기인 타입!",
    signatureMeme: "킴 카다시안 무표정 짤",
    catchphrase: "그래서? 내가 왜? 알빠노?",
    inRealLife: "남의 눈치 안 보고 할 말 하는 당당함",
    strengths: [
      "자기 주장이 확실함",
      "눈치 보지 않는 당당함",
      "위트 있는 대화 스킬",
    ],
    relatable: [
      "불합리한 요청에 쿨하게 거절",
      "꼰대 발언에 속으로 세시한 답변",
      "남 신경 안 쓰고 내 길 가는 순간",
    ],
    famousMeme: "Kim Kardashian Crying Face",
    compatibility: ["무념무상 밈형", "카오스 밈형"],
  },
  chaotic: {
    type: "chaotic",
    title: "카오스 밈형",
    emoji: "🌪️",
    subtitle: "뭔가 잘못됐는데 일단 재밌어",
    description: "예측 불가능하고 정신없지만 그게 매력인 당신! 상황이 어수선해져도 오히려 즐기고, 혼돈 속에서 웃음을 찾아요. 주변을 정신없게 만들지만 덕분에 지루할 틈이 없는 타입!",
    signatureMeme: "모든 게 불타는 가운데 웃는 짤",
    catchphrase: "일단 해보고 생각하자ㅋㅋㅋ",
    inRealLife: "계획은 세우지만 즉흥이 더 많은 타입",
    strengths: [
      "어떤 상황에서도 재미를 찾음",
      "창의적이고 예측불가",
      "지루하지 않은 에너지",
    ],
    relatable: [
      "계획이 틀어져도 '오히려 좋아' 마인드",
      "실수했는데 웃기게 넘어가는 순간",
      "정신없이 하다보니 의외로 잘 된 경험",
    ],
    famousMeme: "Joker Stair Dance",
    compatibility: ["폭소 밈형", "오버 리액션 밈형"],
  },
  wholesome: {
    type: "wholesome",
    title: "올바른 밈형",
    emoji: "🥺",
    subtitle: "세상아 착하게 살자...",
    description: "순수하고 따뜻하며, 착한 것을 좋아하는 당신! 귀여운 동물 영상에 울고, 남의 감동 사연에 같이 눈물 흘려요. 세상의 선한 면을 믿고, 작은 것에도 감동하는 순수한 영혼입니다.",
    signatureMeme: "눈 큰 강아지 짤",
    catchphrase: "앜ㅠㅠ 너무 귀여워ㅠㅠ 착하다ㅠㅠ",
    inRealLife: "남의 칭찬에 감동해서 우는 타입",
    strengths: [
      "따뜻한 마음씨",
      "공감 능력이 뛰어남",
      "주변을 편안하게 하는 힘",
    ],
    relatable: [
      "동물 영상에 눈물 찔끔",
      "칭찬 하나에도 감동받는 순간",
      "착한 사람 이야기에 마음이 따뜻해지는 것",
    ],
    famousMeme: "Crying Cat Thumbs Up",
    compatibility: ["물음표 밈형", "오버 리액션 밈형"],
  },
};

export function calculateResult(answers: number[]): MemeTypeResult {
  const scores: Record<string, number> = {
    confused: 0,
    laughing: 0,
    unbothered: 0,
    dramatic: 0,
    tired: 0,
    sassy: 0,
    chaotic: 0,
    wholesome: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([type, score]) => {
        scores[type] = (scores[type] || 0) + score;
      });
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return results[maxType];
}
