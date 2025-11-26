// 빌런 vs 히어로 테스트 - 나는 영웅일까 악당일까?

export const questions = [
  {
    id: 1,
    question: "무인도에 홀로 남겨졌다. 가장 먼저 할 일은?",
    options: [
      { text: "생존에 필요한 것들을 계획적으로 준비", hero: 3, villain: 0 },
      { text: "이 섬을 완전히 내 영역으로 만들기", hero: 0, villain: 3 },
      { text: "탈출 방법 찾기", hero: 2, villain: 1 },
      { text: "다른 생존자가 있나 찾아보기", hero: 3, villain: 0 },
    ],
  },
  {
    id: 2,
    question: "초능력이 생긴다면 어떻게 쓸까?",
    options: [
      { text: "세상을 더 좋은 곳으로 만들기 위해", hero: 3, villain: 0 },
      { text: "내 이익을 위해 은밀하게", hero: 0, villain: 3 },
      { text: "가끔 장난치는 정도로", hero: 1, villain: 2 },
      { text: "내 가족과 친구를 지키기 위해", hero: 2, villain: 1 },
    ],
  },
  {
    id: 3,
    question: "누군가 나에게 큰 피해를 줬다면?",
    options: [
      { text: "용서하고 넘어간다", hero: 3, villain: 0 },
      { text: "법적/정당한 방법으로 대응", hero: 2, villain: 1 },
      { text: "똑같이 되갚아준다", hero: 0, villain: 2 },
      { text: "더 크게 복수한다", hero: 0, villain: 3 },
    ],
  },
  {
    id: 4,
    question: "큰 권력을 얻게 된다면?",
    options: [
      { text: "모두를 위해 공정하게 사용", hero: 3, villain: 0 },
      { text: "나를 따르는 사람들을 챙김", hero: 1, villain: 2 },
      { text: "내 목표 달성을 위해 활용", hero: 0, villain: 2 },
      { text: "세상을 내 뜻대로 바꿈", hero: 0, villain: 3 },
    ],
  },
  {
    id: 5,
    question: "위기 상황에서 나는?",
    options: [
      { text: "다른 사람부터 구한다", hero: 3, villain: 0 },
      { text: "함께 빠져나갈 방법을 찾는다", hero: 2, villain: 1 },
      { text: "내 생존이 우선", hero: 0, villain: 2 },
      { text: "남을 밟고서라도 살아남는다", hero: 0, villain: 3 },
    ],
  },
  {
    id: 6,
    question: "목표를 이루기 위해 어디까지 할 수 있나?",
    options: [
      { text: "정당한 방법 내에서만", hero: 3, villain: 0 },
      { text: "약간의 편법 정도는 OK", hero: 1, villain: 2 },
      { text: "필요하다면 수단 방법 안 가림", hero: 0, villain: 3 },
      { text: "누가 피해를 보든 상관없음", hero: 0, villain: 3 },
    ],
  },
  {
    id: 7,
    question: "적을 제압했을 때?",
    options: [
      { text: "두 번째 기회를 준다", hero: 3, villain: 0 },
      { text: "더 이상 해가 되지 않게만 함", hero: 2, villain: 1 },
      { text: "확실하게 끝장을 본다", hero: 0, villain: 2 },
      { text: "고통받는 모습을 즐긴다", hero: 0, villain: 3 },
    ],
  },
  {
    id: 8,
    question: "사람들이 나를 어떻게 기억했으면 좋겠나?",
    options: [
      { text: "선한 영향력을 준 사람", hero: 3, villain: 0 },
      { text: "대단한 업적을 남긴 사람", hero: 2, villain: 1 },
      { text: "무시할 수 없는 강한 사람", hero: 0, villain: 2 },
      { text: "두려움의 대상", hero: 0, villain: 3 },
    ],
  },
  {
    id: 9,
    question: "규칙에 대한 생각은?",
    options: [
      { text: "규칙은 모두를 위해 존재, 지켜야 함", hero: 3, villain: 0 },
      { text: "대부분 지키지만 상황에 따라", hero: 2, villain: 1 },
      { text: "나에게 유리하면 따름", hero: 0, villain: 2 },
      { text: "규칙은 강자가 만드는 것", hero: 0, villain: 3 },
    ],
  },
  {
    id: 10,
    question: "약자를 보면?",
    options: [
      { text: "도와주고 싶은 마음이 든다", hero: 3, villain: 0 },
      { text: "안타깝지만 내 일이 아니면 패스", hero: 1, villain: 1 },
      { text: "이용할 수 있으면 이용", hero: 0, villain: 2 },
      { text: "약한 건 그들의 잘못", hero: 0, villain: 3 },
    ],
  },
  {
    id: 11,
    question: "배신을 당했을 때?",
    options: [
      { text: "슬프지만 이해하려 노력한다", hero: 3, villain: 0 },
      { text: "관계를 정리하고 떠난다", hero: 2, villain: 1 },
      { text: "언젠가 꼭 되갚아준다", hero: 0, villain: 2 },
      { text: "즉시 보복한다", hero: 0, villain: 3 },
    ],
  },
  {
    id: 12,
    question: "내 이상적인 세상은?",
    options: [
      { text: "모두가 평등하고 행복한 세상", hero: 3, villain: 0 },
      { text: "노력한 만큼 보상받는 세상", hero: 2, villain: 1 },
      { text: "강한 자가 지배하는 세상", hero: 0, villain: 2 },
      { text: "내가 지배하는 세상", hero: 0, villain: 3 },
    ],
  },
];

export interface VillainHeroResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  heroScore: number;
  villainScore: number;
  alignment: string;
  characteristics: string[];
  strengths: string[];
  darkSide: string[];
  movieCharacter: string;
  famousExample: string;
  lifeAdvice: string;
  theme: string;
}

function getAlignment(heroPercent: number): VillainHeroResult {
  if (heroPercent >= 85) {
    return {
      type: 'pure-hero',
      title: '순수한 영웅',
      emoji: '🦸',
      subtitle: '정의의 수호자',
      description: '당신은 타고난 영웅입니다! 약자를 돕고, 정의를 실현하며, 희생도 마다하지 않는 진정한 히어로예요. 세상을 더 나은 곳으로 만들기 위해 노력하는 당신, 정말 멋집니다!',
      heroScore: 0,
      villainScore: 0,
      alignment: '순수 선',
      characteristics: ['이타적', '정의로움', '희생정신', '용감함', '리더십'],
      strengths: ['도덕적 나침반', '강한 신념', '영감을 주는 존재', '신뢰받음'],
      darkSide: ['너무 이상주의적', '자기 희생 과다', '융통성 부족'],
      movieCharacter: '캡틴 아메리카, 슈퍼맨, 강동원(영화 속 캐릭터)',
      famousExample: '간디, 마더 테레사, 넬슨 만델라',
      lifeAdvice: '가끔은 자신도 챙기세요. 영웅도 휴식이 필요합니다.',
      theme: 'bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-500',
    };
  } else if (heroPercent >= 65) {
    return {
      type: 'anti-hero',
      title: '안티 히어로',
      emoji: '🦇',
      subtitle: '어둠 속의 정의',
      description: '당신은 전통적인 영웅은 아니지만, 나름의 방식으로 옳은 일을 합니다. 규칙에 얽매이지 않고, 필요하면 더러운 일도 하지만, 결국 선한 쪽에 서는 타입이에요.',
      heroScore: 0,
      villainScore: 0,
      alignment: '혼돈 선',
      characteristics: ['실용적', '독립적', '복잡한 도덕관', '카리스마'],
      strengths: ['유연한 사고', '효과적 문제 해결', '현실적', '강인함'],
      darkSide: ['수단 정당화', '외로움', '신뢰 얻기 어려움'],
      movieCharacter: '배트맨, 데드풀, 존 윅',
      famousExample: '로빈 후드, 졸로',
      lifeAdvice: '당신만의 정의를 믿되, 선을 넘지 않도록 주의하세요.',
      theme: 'bg-gradient-to-br from-gray-700 via-slate-600 to-gray-800',
    };
  } else if (heroPercent >= 45) {
    return {
      type: 'neutral',
      title: '중립적 인간',
      emoji: '⚖️',
      subtitle: '상황에 따라 달라지는',
      description: '당신은 선과 악의 경계에 있습니다. 상황에 따라, 이익에 따라 어느 쪽에도 설 수 있어요. 극단적이지 않고 현실적인 판단을 하는 타입입니다.',
      heroScore: 0,
      villainScore: 0,
      alignment: '진정한 중립',
      characteristics: ['실용적', '적응력', '생존 본능', '균형감'],
      strengths: ['상황 판단력', '생존력', '유연성', '객관적'],
      darkSide: ['신념 부재', '신뢰 어려움', '기회주의'],
      movieCharacter: '한 솔로(초기), 잭 스패로',
      famousExample: '한 솔로 (스타워즈), 잭 스패로우',
      lifeAdvice: '중요한 순간에는 결단을 내리세요. 어떤 선택이든.',
      theme: 'bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-600',
    };
  } else if (heroPercent >= 25) {
    return {
      type: 'anti-villain',
      title: '안티 빌런',
      emoji: '🃏',
      subtitle: '이유 있는 악당',
      description: '당신은 빌런 성향이 있지만, 완전한 악은 아닙니다. 나름의 이유와 원칙이 있고, 때로는 선한 행동도 해요. 목적을 위해 수단을 가리지 않는 타입입니다.',
      heroScore: 0,
      villainScore: 0,
      alignment: '질서 악',
      characteristics: ['야심가', '전략적', '냉철함', '원칙 있음'],
      strengths: ['목표 지향', '결단력', '카리스마', '지략'],
      darkSide: ['공감 부족', '이용하는 경향', '자기중심적'],
      movieCharacter: '타노스, 매그니토, 로키',
      famousExample: '타노스, 매그니토, 로키',
      lifeAdvice: '목적이 수단을 정당화하지 않아요. 때로는 과정도 중요합니다.',
      theme: 'bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-800',
    };
  } else {
    return {
      type: 'villain',
      title: '타고난 빌런',
      emoji: '😈',
      subtitle: '세상을 지배할 자',
      description: '당신은 강한 빌런 성향을 가지고 있습니다! 자신의 목표를 위해 무엇이든 할 수 있고, 힘과 권력에 대한 욕구가 강해요. 세상을 자신의 방식대로 바꾸고 싶어하는 타입입니다.',
      heroScore: 0,
      villainScore: 0,
      alignment: '혼돈 악',
      characteristics: ['야망', '지배욕', '카리스마', '냉혹함'],
      strengths: ['강한 의지', '두려움 없음', '전략적 사고', '리더십'],
      darkSide: ['공감 부족', '파괴적', '신뢰 어려움', '고립'],
      movieCharacter: '조커, 볼드모트, 다스 베이더',
      famousExample: '조커, 볼드모트, 다스 베이더',
      lifeAdvice: '힘을 가졌다면 책임도 있어요. 파괴보다 창조가 더 어렵고 가치 있습니다.',
      theme: 'bg-gradient-to-br from-red-900 via-rose-800 to-pink-900',
    };
  }
}

export function calculateVillainHeroResult(answers: number[]): VillainHeroResult {
  let heroScore = 0;
  let villainScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      heroScore += question.options[answerIndex].hero;
      villainScore += question.options[answerIndex].villain;
    }
  });

  const total = heroScore + villainScore;
  const heroPercent = total > 0 ? Math.round((heroScore / total) * 100) : 50;

  const result = getAlignment(heroPercent);
  result.heroScore = heroScore;
  result.villainScore = villainScore;

  return result;
}
