// 연애 세포 테스트 - 내 연애 세포는 살아있을까?

export interface LoveCellQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface LoveCellResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  status: string;
  description: string;
  characteristics: string[];
  loveReadiness: string;
  advice: string[];
  signalSensitivity: string;
  idealTiming: string;
  encouragement: string;
}

export const loveCellTypes = ['dead', 'hibernating', 'waking', 'active', 'explosive'] as const;
export type LoveCellType = typeof loveCellTypes[number];

export const questions: LoveCellQuestion[] = [
  {
    id: 1,
    question: "요즘 길 가다가 이성을 보면?",
    options: [
      { text: "그냥 지나감, 눈에 안 들어옴", scores: { dead: 3 } },
      { text: "가끔 '괜찮네' 정도?", scores: { hibernating: 2, waking: 1 } },
      { text: "예쁘다/멋있다 생각은 함", scores: { waking: 2, active: 1 } },
      { text: "자동으로 스캔됨, 눈이 따라감", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 2,
    question: "로맨스 영화/드라마 볼 때 내 반응은?",
    options: [
      { text: "지루함, 다른 거 보고 싶음", scores: { dead: 3 } },
      { text: "그냥 봄, 감정이입 별로", scores: { hibernating: 2, dead: 1 } },
      { text: "나도 저런 연애하고 싶다~", scores: { waking: 2, active: 1 } },
      { text: "심장 터질 것 같음, 대리만족 최고", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 3,
    question: "누군가 나한테 호감을 보이면?",
    options: [
      { text: "불편함, 거리 둠", scores: { dead: 3 } },
      { text: "어... 그냥 무덤덤", scores: { hibernating: 2, dead: 1 } },
      { text: "기분 좋음, 신경 쓰임", scores: { waking: 2, active: 1 } },
      { text: "두근두근! 이게 썸인가?!", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 4,
    question: "친구가 소개팅 주선한다고 하면?",
    options: [
      { text: "아 됐어, 관심 없어", scores: { dead: 3 } },
      { text: "귀찮은데... 생각해볼게", scores: { hibernating: 2, dead: 1 } },
      { text: "어떤 사람인데? 궁금함", scores: { waking: 2, active: 1 } },
      { text: "좋아! 언제야?!", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 5,
    question: "혼자인 주말 저녁, 무슨 생각이 드나요?",
    options: [
      { text: "최고의 힐링타임! 혼자가 좋아", scores: { dead: 2, hibernating: 1 } },
      { text: "편하긴 한데... 가끔 심심", scores: { hibernating: 2, waking: 1 } },
      { text: "누군가 있으면 좋겠다는 생각", scores: { waking: 2, active: 1 } },
      { text: "외로워... 연애하고 싶다 ㅠㅠ", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 6,
    question: "이상형에 대한 생각은?",
    options: [
      { text: "이상형? 딱히 없음, 관심 없음", scores: { dead: 3 } },
      { text: "예전에 있었는데 요즘은 글쎄...", scores: { hibernating: 2, dead: 1 } },
      { text: "있긴 있는데 막 집착하진 않음", scores: { waking: 2, active: 1 } },
      { text: "확고함! 언젠간 만날 거야", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 7,
    question: "카톡에서 상대가 하트 이모티콘을 보내면?",
    options: [
      { text: "그냥 이모티콘일 뿐, 의미 없음", scores: { dead: 2, hibernating: 1 } },
      { text: "별 생각 없이 넘김", scores: { hibernating: 2, dead: 1 } },
      { text: "어? 나한테 관심있나? 살짝 신경 쓰임", scores: { waking: 2, active: 1 } },
      { text: "ㅎㅎ 뭐지? 설마?! 두근거림", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 8,
    question: "요즘 연애 관련해서 자신의 상태는?",
    options: [
      { text: "연애 생각 1도 없음, 나 혼자 좋아", scores: { dead: 3 } },
      { text: "당장은 별로, 나중에~", scores: { hibernating: 2, dead: 1 } },
      { text: "좋은 사람 있으면 해도 됨", scores: { waking: 2, active: 1 } },
      { text: "빨리 연애하고 싶어!! 누구 없나?", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 9,
    question: "최근 설렌 적이 있나요?",
    options: [
      { text: "설렘? 그게 뭐였더라... 기억 안 남", scores: { dead: 3 } },
      { text: "음... 연예인 보고? ㅋㅋ", scores: { hibernating: 2, waking: 1 } },
      { text: "종종 있어, 작은 것에도 설렘", scores: { waking: 2, active: 1 } },
      { text: "매일 설레고 싶어! 설렘 중독", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 10,
    question: "5년 후 내 모습을 상상하면?",
    options: [
      { text: "혼자 잘 살고 있는 나 (만족)", scores: { dead: 2, hibernating: 1 } },
      { text: "글쎄... 그때 되면 생각해야지", scores: { hibernating: 2, waking: 1 } },
      { text: "좋은 사람과 함께라면 좋겠다", scores: { waking: 2, active: 1 } },
      { text: "사랑하는 사람과 행복하게!", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 11,
    question: "전 연인을 떠올리면?",
    options: [
      { text: "감정 없음, 그냥 과거일 뿐", scores: { dead: 2, hibernating: 1 } },
      { text: "좋았던 기억도 있지만... 그때 그 사람", scores: { hibernating: 2, waking: 1 } },
      { text: "아쉬움이 있어서 다음엔 더 잘할 거야", scores: { waking: 2, active: 1 } },
      { text: "그때의 감정이 그리워, 다시 사랑하고 싶어", scores: { active: 2, explosive: 1 } },
    ],
  },
  {
    id: 12,
    question: "친구들이 커플 얘기하면?",
    options: [
      { text: "관심 없음, 다른 얘기 하자", scores: { dead: 3 } },
      { text: "듣긴 하는데 공감 안 됨", scores: { hibernating: 2, dead: 1 } },
      { text: "재밌음, 나도 그런 경험 하고 싶어", scores: { waking: 2, active: 1 } },
      { text: "부러워!! 나도 연애하고 싶다!", scores: { active: 2, explosive: 1 } },
    ],
  },
];

export const results: Record<LoveCellType, LoveCellResult> = {
  dead: {
    type: 'dead',
    title: '연애 세포 사망',
    emoji: '💀',
    percentage: 10,
    status: '완전 동면 상태',
    description: '당신의 연애 세포는 현재 깊은 잠에 빠져있어요. 연애보다 나 자신, 내 시간, 내 공간이 더 소중한 시기입니다. 이건 나쁜 게 아니에요! 자신을 사랑하는 시간이 필요한 거예요.',
    characteristics: ['솔로 라이프 만족', '연애 관심 제로', '혼자가 편함', '로맨스 무감각'],
    loveReadiness: '아직 준비 안 됨. 무리하게 연애하면 오히려 스트레스!',
    advice: [
      '지금은 나 자신에게 집중하는 시기예요',
      '억지로 연애하려 하지 마세요',
      '자연스럽게 마음이 열릴 때를 기다려요',
      '취미나 자기계발에 에너지를 쏟아보세요',
    ],
    signalSensitivity: '호감 신호 감지력 5%. 상대가 대놓고 좋아해도 못 알아챌 수 있어요.',
    idealTiming: '아직은 아님. 마음이 준비됐을 때 시작해도 늦지 않아요.',
    encouragement: '혼자인 시간도 소중해요. 언젠가 마음이 열리는 날이 올 거예요!',
  },
  hibernating: {
    type: 'hibernating',
    title: '연애 세포 동면 중',
    emoji: '😴',
    percentage: 30,
    status: '겨울잠 상태',
    description: '연애 세포가 겨울잠을 자고 있어요. 완전히 꺼진 건 아니지만, 아직 깨어날 준비가 덜 됐어요. 따뜻한 봄바람 같은 설렘이 필요한 시기!',
    characteristics: ['귀찮음이 앞섬', '연애 생각은 가끔', '혼자도 괜찮음', '적극성 부족'],
    loveReadiness: '거의 준비 안 됨. 좋은 사람 나타나면 모를까...',
    advice: [
      '가벼운 만남부터 시작해보세요',
      '너무 깊이 생각하지 말고 일단 만나보기',
      '친구 소개팅 한 번 정도는 OK',
      '연애 콘텐츠로 감각 되살리기',
    ],
    signalSensitivity: '호감 신호 감지력 25%. 눈치가 좀 둔한 편이에요.',
    idealTiming: '급하지 않아요. 자연스럽게 좋은 인연이 올 때까지.',
    encouragement: '지금은 충전 기간! 에너지가 차면 연애 세포도 깨어날 거예요.',
  },
  waking: {
    type: 'waking',
    title: '연애 세포 기지개 중',
    emoji: '🌱',
    percentage: 55,
    status: '슬슬 깨어나는 중',
    description: '연애 세포가 기지개를 켜고 있어요! 아직 완전히 깨어난 건 아니지만, 연애에 대한 관심이 조금씩 생기는 중입니다. 좋은 신호예요!',
    characteristics: ['연애 관심 살짝', '좋은 사람 있으면 OK', '설렘 알기 시작', '마음의 문 열리는 중'],
    loveReadiness: '50% 준비됨. 좋은 사람 만나면 연애할 마음 있음!',
    advice: [
      '적극적으로 사람 만나보세요',
      '소개팅, 모임 등 기회 만들기',
      '호감 가는 사람에게 먼저 다가가 보기',
      '두려워하지 말고 마음 표현해보기',
    ],
    signalSensitivity: '호감 신호 감지력 55%. 보통 정도, 가끔 놓칠 수 있어요.',
    idealTiming: '지금이 좋은 타이밍! 기회가 오면 잡으세요.',
    encouragement: '연애 세포가 깨어나고 있어요! 조금만 더 마음을 열어보세요.',
  },
  active: {
    type: 'active',
    title: '연애 세포 활성화',
    emoji: '💗',
    percentage: 80,
    status: '활발하게 활동 중',
    description: '당신의 연애 세포는 매우 활발해요! 연애에 대한 관심도 높고, 설렘을 느낄 준비가 되어 있어요. 좋은 인연을 만날 가능성이 높은 상태입니다!',
    characteristics: ['연애 관심 높음', '설렘 잘 느낌', '적극적 어필 가능', '로맨스 감성 충만'],
    loveReadiness: '80% 준비 완료! 좋은 사람만 나타나면 바로 시작!',
    advice: [
      '자신감을 갖고 다가가세요',
      '너무 급하게 진행하지는 말기',
      '상대방도 준비됐는지 확인하기',
      '감정에 솔직해지세요',
    ],
    signalSensitivity: '호감 신호 감지력 80%. 상대의 관심을 잘 알아채요.',
    idealTiming: '지금 바로! 적극적으로 인연을 찾아보세요.',
    encouragement: '연애 운이 따르는 시기! 좋은 인연이 곧 나타날 거예요.',
  },
  explosive: {
    type: 'explosive',
    title: '연애 세포 폭발',
    emoji: '💥',
    percentage: 100,
    status: '폭발 직전 상태',
    description: '연애 세포가 MAX 상태입니다! 연애에 대한 열망이 넘쳐서 곧 터질 것 같아요. 이 에너지를 좋은 방향으로 잘 활용하세요!',
    characteristics: ['연애 갈망 최고조', '설렘 중독', '적극적 연애', '로맨스 체질'],
    loveReadiness: '100% 준비 완료! 오늘 당장이라도 연애 가능!',
    advice: [
      '너무 급하게 달려들지 마세요',
      '상대를 잘 파악하고 신중하게',
      '연애 외에 다른 것도 챙기세요',
      '나에게 맞는 사람인지 먼저 확인!',
    ],
    signalSensitivity: '호감 신호 감지력 100%. 눈빛만 봐도 알 수 있어요. (가끔 착각 주의)',
    idealTiming: '지금 당장! 단, 눈 앞의 사람이 진짜 맞는 사람인지 확인 필수.',
    encouragement: '열정이 대단해요! 그 에너지로 좋은 연애 하세요!',
  },
};

export function calculateResult(answers: number[]): LoveCellResult {
  const scores: Record<LoveCellType, number> = {
    dead: 0,
    hibernating: 0,
    waking: 0,
    active: 0,
    explosive: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as LoveCellType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: LoveCellType = 'waking';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as LoveCellType;
    }
  });

  return results[resultType];
}
