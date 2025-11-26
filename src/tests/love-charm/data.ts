// 나의 연애 매력 포인트 테스트

export interface LoveCharmQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface LoveCharmResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  charmPoints: string[];
  strengths: string[];
  howOthersSeeYou: string;
  inRelationship: string;
  attractionTips: string[];
  idealPartner: string;
  celebExample: string;
  charmScore: number;
}

// 매력 유형
export const loveCharmTypes = ['cute', 'sexy', 'intellectual', 'funny', 'warm', 'mysterious'] as const;
export type LoveCharmType = typeof loveCharmTypes[number];

// 질문 데이터 (12문항)
export const questions: LoveCharmQuestion[] = [
  {
    id: 1,
    question: "처음 만난 사람에게 자주 듣는 첫인상은?",
    options: [
      { text: "귀엽다, 동생 같다", scores: { cute: 2 } },
      { text: "분위기 있다, 섹시하다", scores: { sexy: 2, mysterious: 1 } },
      { text: "똑똒해 보인다, 차분하다", scores: { intellectual: 2 } },
      { text: "재밌어 보인다, 친근하다", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 2,
    question: "호감 가는 상대에게 어필하는 나만의 방법은?",
    options: [
      { text: "애교 부리며 귀엽게 다가가요", scores: { cute: 2 } },
      { text: "눈빛과 분위기로 어필해요", scores: { sexy: 2, mysterious: 1 } },
      { text: "지적인 대화로 관심을 끌어요", scores: { intellectual: 2 } },
      { text: "웃기고 편하게 해줘요", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 3,
    question: "평소 옷 스타일은?",
    options: [
      { text: "귀엽고 사랑스러운 스타일", scores: { cute: 2 } },
      { text: "시크하고 섹시한 스타일", scores: { sexy: 2 } },
      { text: "깔끔하고 단정한 스타일", scores: { intellectual: 2, warm: 1 } },
      { text: "편하고 캐주얼한 스타일", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 4,
    question: "대화할 때 나는?",
    options: [
      { text: "리액션 크고 감정 표현 많아요", scores: { cute: 2, warm: 1 } },
      { text: "차분하게 눈 맞추며 들어요", scores: { sexy: 2, mysterious: 1 } },
      { text: "논리적으로 이야기해요", scores: { intellectual: 2 } },
      { text: "웃기게 얘기하고 분위기 띄워요", scores: { funny: 2 } },
    ],
  },
  {
    id: 5,
    question: "좋아하는 사람 앞에서 나는?",
    options: [
      { text: "수줍어하고 부끄러워해요", scores: { cute: 2 } },
      { text: "더 시크하고 도도해져요", scores: { sexy: 2, mysterious: 1 } },
      { text: "관심사에 대해 열정적으로 얘기해요", scores: { intellectual: 2 } },
      { text: "더 웃기려고 해요", scores: { funny: 2 } },
    ],
  },
  {
    id: 6,
    question: "이성에게 자신 있는 부분은?",
    options: [
      { text: "귀여운 외모와 애교", scores: { cute: 2 } },
      { text: "분위기와 매력적인 눈빛", scores: { sexy: 2 } },
      { text: "대화 스킬과 지적인 면", scores: { intellectual: 2 } },
      { text: "유머 감각과 친화력", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 7,
    question: "데이트할 때 보여주고 싶은 모습은?",
    options: [
      { text: "보호본능 자극하는 귀여운 모습", scores: { cute: 2 } },
      { text: "설레게 만드는 매력적인 모습", scores: { sexy: 2, mysterious: 1 } },
      { text: "배울 점 많은 똑똒한 모습", scores: { intellectual: 2 } },
      { text: "함께 있으면 즐거운 모습", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 8,
    question: "주변에서 나를 뭐라고 부르나요?",
    options: [
      { text: "귀요미, 애기", scores: { cute: 2 } },
      { text: "섹시, 분위기 있다", scores: { sexy: 2 } },
      { text: "인간 백과사전, 박사", scores: { intellectual: 2 } },
      { text: "개그맨, 분위기 메이커", scores: { funny: 2 } },
    ],
  },
  {
    id: 9,
    question: "연인에게 사랑받고 싶은 방식은?",
    options: [
      { text: "예뻐해주고 귀여워해주기", scores: { cute: 2 } },
      { text: "뜨거운 눈빛과 스킨십", scores: { sexy: 2 } },
      { text: "내 생각을 존중하고 대화하기", scores: { intellectual: 2, warm: 1 } },
      { text: "함께 웃고 즐거운 시간 보내기", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 10,
    question: "SNS에 주로 올리는 사진은?",
    options: [
      { text: "귀여운 셀카, 스티커 사진", scores: { cute: 2 } },
      { text: "분위기 있는 감성 사진", scores: { sexy: 2, mysterious: 1 } },
      { text: "책, 전시회, 여행 사진", scores: { intellectual: 2 } },
      { text: "웃긴 사진, 친구들과 사진", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 11,
    question: "고백할 때 나의 스타일은?",
    options: [
      { text: "수줍게 귀엽게 고백해요", scores: { cute: 2 } },
      { text: "분위기 잡고 진지하게", scores: { sexy: 2, mysterious: 1 } },
      { text: "논리적으로 내 마음을 설명해요", scores: { intellectual: 2 } },
      { text: "웃기게 또는 자연스럽게", scores: { funny: 2, warm: 1 } },
    ],
  },
  {
    id: 12,
    question: "연애할 때 가장 중요한 것은?",
    options: [
      { text: "나를 귀여워해주는 것", scores: { cute: 2 } },
      { text: "서로에 대한 끌림과 설렘", scores: { sexy: 2, mysterious: 1 } },
      { text: "깊은 대화와 정신적 교감", scores: { intellectual: 2, warm: 1 } },
      { text: "함께 웃고 즐길 수 있는 것", scores: { funny: 2, warm: 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<LoveCharmType, LoveCharmResult> = {
  cute: {
    type: 'cute',
    title: '귀여움 폭발 매력',
    emoji: '🐰',
    subtitle: 'Adorable Charm',
    description: '당신의 매력은 보호본능을 자극하는 귀여움! 애교와 사랑스러운 모습으로 상대의 마음을 녹입니다. 함께 있으면 절로 미소 짓게 만드는 매력의 소유자예요.',
    charmPoints: ['천연 애교', '사랑스러운 눈빛', '수줍은 미소', '보호본능 자극', '순수한 매력'],
    strengths: ['상대를 기분 좋게 함', '싸워도 화해가 쉬움', '질리지 않는 매력', '연상에게 인기'],
    howOthersSeeYou: '함께 있으면 예뻐해주고 싶고, 지켜주고 싶은 사람. 귀여운 행동에 절로 미소 짓게 됩니다.',
    inRelationship: '연인에게 애교 부리며 사랑받는 것을 좋아해요. 귀여운 모습으로 연인의 마음을 사로잡습니다.',
    attractionTips: ['가끔은 반전 매력도 보여주세요', '귀여움만큼 성숙한 면도 어필하세요', '자연스러운 애교가 최고예요'],
    idealPartner: '나를 예뻐해주고 귀여워해주는 든든한 사람',
    celebExample: '아이유, 김유정 스타일',
    charmScore: 88,
  },
  sexy: {
    type: 'sexy',
    title: '시크 섹시 매력',
    emoji: '🔥',
    subtitle: 'Sexy & Chic Charm',
    description: '당신의 매력은 강렬한 눈빛과 분위기! 시크하고 섹시한 매력으로 상대를 설레게 합니다. 쉽게 넘어오지 않는 도도함이 더 끌리게 만들어요.',
    charmPoints: ['강렬한 눈빛', '섹시한 분위기', '시크한 매력', '도도함', '카리스마'],
    strengths: ['첫인상이 강렬함', '잊히지 않는 매력', '설렘을 주는 타입', '밀당에 강함'],
    howOthersSeeYou: '범접하기 어려운 매력, 다가가기 어렵지만 자꾸 눈이 가는 사람. 눈빛만으로도 설레게 합니다.',
    inRelationship: '쉽게 마음을 주지 않지만, 한번 사랑하면 깊게 사랑해요. 상대를 설레게 하는 능력이 있습니다.',
    attractionTips: ['가끔은 따뜻한 모습도 보여주세요', '너무 차가우면 다가가기 어려워요', '밀당도 적당히!'],
    idealPartner: '나의 시크함 뒤에 숨은 따뜻함을 알아주는 사람',
    celebExample: '제니, 현빈 스타일',
    charmScore: 92,
  },
  intellectual: {
    type: 'intellectual',
    title: '지적인 매력',
    emoji: '📚',
    subtitle: 'Intellectual Charm',
    description: '당신의 매력은 깊이 있는 지성! 대화할수록 빠져드는 지적인 매력으로 상대를 사로잡습니다. 알면 알수록 매력적인 사람이에요.',
    charmPoints: ['지적인 대화', '깊이 있는 생각', '차분한 분위기', '배울 점 많음', '논리적'],
    strengths: ['오래 만날수록 매력 발산', '대화가 즐거움', '신뢰감', '성숙한 관계 가능'],
    howOthersSeeYou: '대화하면 배울 점이 많은 사람. 처음엔 어려워 보이지만 알수록 매력적인 사람입니다.',
    inRelationship: '깊은 대화와 정신적 교감을 중요시해요. 서로 성장하는 관계를 원합니다.',
    attractionTips: ['너무 어렵게 말하지 마세요', '가끔은 가벼운 대화도 즐겨보세요', '감정 표현도 필요해요'],
    idealPartner: '지적 호기심이 많고 함께 성장할 수 있는 사람',
    celebExample: '유재석, 김태희 스타일',
    charmScore: 85,
  },
  funny: {
    type: 'funny',
    title: '유머 만렙 매력',
    emoji: '😄',
    subtitle: 'Funny & Bright Charm',
    description: '당신의 매력은 웃음을 주는 유쾌함! 함께 있으면 웃음이 끊이지 않는 분위기 메이커입니다. 연애도 즐겁고 행복하게 만드는 매력이에요.',
    charmPoints: ['뛰어난 유머 감각', '분위기 메이커', '밝은 에너지', '친화력', '긍정적'],
    strengths: ['함께 있으면 즐거움', '편안한 분위기 조성', '갈등도 유머로 해결', '누구와도 친해짐'],
    howOthersSeeYou: '만나면 즐거운 사람, 분위기를 밝게 만드는 사람. 같이 있으면 행복해지는 매력이 있어요.',
    inRelationship: '연인과 친구처럼 즐겁게 지내요. 웃음이 넘치는 행복한 연애를 합니다.',
    attractionTips: ['가끔은 진지한 모습도 보여주세요', '웃기기만 하면 친구로 보일 수 있어요', '로맨틱한 분위기도 만들어보세요'],
    idealPartner: '내 유머를 알아주고 함께 웃을 수 있는 사람',
    celebExample: '유병재, 신민아 스타일',
    charmScore: 90,
  },
  warm: {
    type: 'warm',
    title: '따뜻한 감성 매력',
    emoji: '☀️',
    subtitle: 'Warm & Caring Charm',
    description: '당신의 매력은 따뜻한 마음! 배려심 깊고 진심 어린 모습으로 상대의 마음을 녹입니다. 함께 있으면 편안하고 안정감을 주는 매력이에요.',
    charmPoints: ['따뜻한 배려', '진심 어린 관심', '편안한 분위기', '안정감', '공감 능력'],
    strengths: ['오래가는 관계', '신뢰받는 타입', '힘들 때 기대고 싶은 사람', '진정한 위로를 줌'],
    howOthersSeeYou: '따뜻하고 편안한 사람. 힘들 때 생각나고, 함께 있으면 마음이 놓이는 사람입니다.',
    inRelationship: '연인을 진심으로 챙기고 배려해요. 안정적이고 따뜻한 사랑을 합니다.',
    attractionTips: ['가끔은 자신을 위한 시간도 가지세요', '너무 주기만 하면 지쳐요', '때로는 받는 것도 필요해요'],
    idealPartner: '내 따뜻함을 알아주고 같이 챙겨주는 사람',
    celebExample: '공유, 손예진 스타일',
    charmScore: 87,
  },
  mysterious: {
    type: 'mysterious',
    title: '미스터리 매력',
    emoji: '🌙',
    subtitle: 'Mysterious Charm',
    description: '당신의 매력은 알 수 없는 신비로움! 쉽게 속을 보여주지 않는 미스터리한 매력으로 상대의 호기심을 자극합니다. 알고 싶어지는 매력이에요.',
    charmPoints: ['신비로운 분위기', '알 수 없는 매력', '예측 불가', '깊이감', '호기심 자극'],
    strengths: ['궁금하게 만듦', '쉽게 질리지 않음', '특별해 보임', '카리스마'],
    howOthersSeeYou: '뭔가 특별하고 신비로운 사람. 알고 싶은데 알기 어려워서 더 끌리는 매력이 있어요.',
    inRelationship: '천천히 마음을 열어요. 알아갈수록 새로운 매력이 발견되는 타입입니다.',
    attractionTips: ['너무 숨기기만 하면 답답해요', '가끔은 솔직하게 표현하세요', '적당한 오픈이 필요해요'],
    idealPartner: '나의 페이스를 존중하고 천천히 알아가려는 사람',
    celebExample: '공효진, 원빈 스타일',
    charmScore: 86,
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): LoveCharmResult {
  const scores: Record<LoveCharmType, number> = {
    cute: 0,
    sexy: 0,
    intellectual: 0,
    funny: 0,
    warm: 0,
    mysterious: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as LoveCharmType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: LoveCharmType = 'warm';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as LoveCharmType;
    }
  });

  return results[resultType];
}
