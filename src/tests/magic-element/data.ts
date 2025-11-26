// 마법 속성 테스트 - 나의 마법 원소는?

export interface MagicElementQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MagicElementResult {
  type: string;
  title: string;
  emoji: string;
  element: string;
  description: string;
  characteristics: string[];
  magicPowers: string[];
  strengths: string[];
  weaknesses: string[];
  compatibleElements: string[];
  incompatibleElements: string[];
  famousCharacters: string[];
  lifeAdvice: string;
}

export const magicElementTypes = ['fire', 'water', 'earth', 'wind', 'lightning', 'ice'] as const;
export type MagicElementType = typeof magicElementTypes[number];

export const questions: MagicElementQuestion[] = [
  {
    id: 1,
    question: "감정을 표현하는 나의 방식은?",
    options: [
      { text: "뜨겁고 열정적으로 표현!", scores: { fire: 3 } },
      { text: "잔잔하지만 깊게 느끼는 편", scores: { water: 3 } },
      { text: "차분하고 안정적으로", scores: { earth: 3 } },
      { text: "자유롭고 가볍게", scores: { wind: 3 } },
    ],
  },
  {
    id: 2,
    question: "스트레스 해소 방법은?",
    options: [
      { text: "운동이나 격렬한 활동으로 발산", scores: { fire: 2, lightning: 1 } },
      { text: "물가에서 힐링, 목욕", scores: { water: 3 } },
      { text: "산책, 정원 가꾸기, 자연 속에서", scores: { earth: 3 } },
      { text: "드라이브, 여행, 바람 쐬기", scores: { wind: 3 } },
    ],
  },
  {
    id: 3,
    question: "갈등 상황에서 나는?",
    options: [
      { text: "직접 맞서서 해결한다", scores: { fire: 3 } },
      { text: "흘러가는 대로 두고 본다", scores: { water: 3 } },
      { text: "차분히 기다리며 상황 파악", scores: { earth: 2, ice: 1 } },
      { text: "피하거나 다른 방향으로 전환", scores: { wind: 3 } },
    ],
  },
  {
    id: 4,
    question: "나의 성격을 색으로 표현하면?",
    options: [
      { text: "빨강, 주황 (열정적, 에너지)", scores: { fire: 3 } },
      { text: "파랑 (차분한, 깊은)", scores: { water: 2, ice: 1 } },
      { text: "초록, 갈색 (안정적, 자연적)", scores: { earth: 3 } },
      { text: "하늘색, 흰색 (자유로운, 가벼운)", scores: { wind: 3 } },
    ],
  },
  {
    id: 5,
    question: "친구들 사이에서 나의 역할은?",
    options: [
      { text: "분위기 메이커, 리더", scores: { fire: 3 } },
      { text: "상담사, 공감러", scores: { water: 3 } },
      { text: "든든한 지지자", scores: { earth: 3 } },
      { text: "아이디어 뱅크, 재미 담당", scores: { wind: 2, lightning: 1 } },
    ],
  },
  {
    id: 6,
    question: "좋아하는 계절은?",
    options: [
      { text: "여름 (뜨겁고 활기찬)", scores: { fire: 3 } },
      { text: "장마철/가을비 (촉촉하고 감성적인)", scores: { water: 3 } },
      { text: "봄/가을 (온화하고 풍요로운)", scores: { earth: 3 } },
      { text: "겨울 (차갑고 고요한)", scores: { ice: 3 } },
    ],
  },
  {
    id: 7,
    question: "일할 때 나의 스타일은?",
    options: [
      { text: "빠르게 추진! 속도가 생명", scores: { fire: 2, lightning: 2 } },
      { text: "유연하게, 흐름을 타며", scores: { water: 3 } },
      { text: "꾸준히, 차근차근", scores: { earth: 3 } },
      { text: "자유롭게, 창의적으로", scores: { wind: 3 } },
    ],
  },
  {
    id: 8,
    question: "마법 능력이 생긴다면 쓰고 싶은 용도는?",
    options: [
      { text: "강력한 힘으로 적을 물리치기", scores: { fire: 2, lightning: 2 } },
      { text: "치유와 정화", scores: { water: 3 } },
      { text: "방어와 보호", scores: { earth: 3 } },
      { text: "이동과 자유", scores: { wind: 3 } },
    ],
  },
  {
    id: 9,
    question: "화가 나면 나는?",
    options: [
      { text: "폭발한다! 불같이 화낸다", scores: { fire: 3 } },
      { text: "차갑게 침묵한다", scores: { ice: 3 } },
      { text: "꾹 참고 견딘다", scores: { earth: 3 } },
      { text: "훅 떠나버린다", scores: { wind: 3 } },
    ],
  },
  {
    id: 10,
    question: "내가 끌리는 이미지는?",
    options: [
      { text: "불꽃놀이, 캠프파이어", scores: { fire: 3 } },
      { text: "바다, 폭포, 비 오는 날", scores: { water: 3 } },
      { text: "숲, 산, 정원", scores: { earth: 3 } },
      { text: "하늘, 구름, 새", scores: { wind: 3 } },
    ],
  },
  {
    id: 11,
    question: "결정을 내릴 때 나는?",
    options: [
      { text: "직감으로 빠르게!", scores: { fire: 2, lightning: 2 } },
      { text: "감정과 느낌을 따라서", scores: { water: 3 } },
      { text: "신중하게, 꼼꼼히 분석 후", scores: { earth: 2, ice: 1 } },
      { text: "상황에 따라 유연하게", scores: { wind: 3 } },
    ],
  },
  {
    id: 12,
    question: "나를 동물로 표현하면?",
    options: [
      { text: "사자, 불사조 (강렬한)", scores: { fire: 3 } },
      { text: "돌고래, 물고기 (유연한)", scores: { water: 3 } },
      { text: "곰, 코끼리 (묵직한)", scores: { earth: 3 } },
      { text: "독수리, 나비 (자유로운)", scores: { wind: 3 } },
    ],
  },
];

export const results: Record<MagicElementType, MagicElementResult> = {
  fire: {
    type: 'fire',
    title: '불의 마법사',
    emoji: '🔥',
    element: '화염 (Fire)',
    description: '당신은 불의 마법사! 뜨거운 열정과 강한 에너지를 가진 당신은 어떤 상황에서도 빛을 발합니다. 리더십과 추진력으로 주변을 이끌고, 불처럼 강렬한 존재감을 가지고 있어요.',
    characteristics: [
      '열정적이고 에너지 넘침',
      '강한 리더십',
      '직접적이고 솔직함',
      '빠른 행동력',
    ],
    magicPowers: [
      '화염 발사',
      '체온 조절',
      '빛과 열 생성',
      '의지력 강화',
    ],
    strengths: [
      '추진력이 강함',
      '분위기를 이끄는 카리스마',
      '두려움 없는 도전 정신',
      '따뜻한 마음',
    ],
    weaknesses: [
      '성급하고 조급할 수 있음',
      '감정 기복이 심할 수 있음',
      '쉽게 지칠 수 있음',
    ],
    compatibleElements: ['바람', '번개'],
    incompatibleElements: ['물', '얼음'],
    famousCharacters: ['주작', '불의 정령 살라만더', '파이어 마리오'],
    lifeAdvice: '불은 통제할 때 가장 아름답게 타오릅니다. 열정을 잘 조절하세요.',
  },
  water: {
    type: 'water',
    title: '물의 마법사',
    emoji: '💧',
    element: '수류 (Water)',
    description: '당신은 물의 마법사! 유연하고 적응력 있는 당신은 어떤 상황에서도 흘러갈 줄 압니다. 깊은 감성과 공감 능력으로 사람들의 마음을 치유하는 힘을 가지고 있어요.',
    characteristics: [
      '감성적이고 직관적',
      '유연하고 적응력 뛰어남',
      '깊은 공감 능력',
      '치유의 마음',
    ],
    magicPowers: [
      '물 조종',
      '치유 마법',
      '정화 능력',
      '감정 읽기',
    ],
    strengths: [
      '어떤 상황에도 적응',
      '감정적 지지 능력',
      '직관력이 뛰어남',
      '인내심과 끈기',
    ],
    weaknesses: [
      '결정을 미루는 경향',
      '감정에 휩쓸릴 수 있음',
      '수동적일 수 있음',
    ],
    compatibleElements: ['땅', '얼음'],
    incompatibleElements: ['불', '번개'],
    famousCharacters: ['인어공주', '물의 정령 운디네', '카타라(아바타)'],
    lifeAdvice: '물은 유연하지만 바위도 뚫습니다. 부드러움은 약함이 아니에요.',
  },
  earth: {
    type: 'earth',
    title: '대지의 마법사',
    emoji: '🌍',
    element: '대지 (Earth)',
    description: '당신은 대지의 마법사! 안정적이고 신뢰할 수 있는 당신은 흔들리지 않는 산처럼 든든합니다. 인내심과 끈기로 목표를 이루고, 주변 사람들의 버팀목이 되어요.',
    characteristics: [
      '안정적이고 신뢰감 있음',
      '인내심과 끈기',
      '현실적이고 실용적',
      '묵직한 존재감',
    ],
    magicPowers: [
      '땅과 바위 조종',
      '방어막 생성',
      '식물 성장 촉진',
      '지진 유발',
    ],
    strengths: [
      '어떤 상황에도 흔들리지 않음',
      '믿음직한 지지자',
      '장기적 계획 능력',
      '실행력이 강함',
    ],
    weaknesses: [
      '변화에 느릴 수 있음',
      '고집이 셀 수 있음',
      '새로운 것에 보수적',
    ],
    compatibleElements: ['물', '바람'],
    incompatibleElements: ['번개'],
    famousCharacters: ['가이아', '토프(아바타)', '대지의 정령 노움'],
    lifeAdvice: '산은 움직이지 않지만, 세상을 품습니다. 유연함도 강함의 일부예요.',
  },
  wind: {
    type: 'wind',
    title: '바람의 마법사',
    emoji: '💨',
    element: '풍류 (Wind)',
    description: '당신은 바람의 마법사! 자유롭고 구속받지 않는 당신은 어디든 날아갈 수 있습니다. 창의적이고 유연한 사고로 새로운 가능성을 열고, 변화를 두려워하지 않아요.',
    characteristics: [
      '자유로운 영혼',
      '창의적이고 독창적',
      '변화를 즐김',
      '가볍고 유연함',
    ],
    magicPowers: [
      '바람 조종',
      '비행 능력',
      '속도 강화',
      '소리/음파 조작',
    ],
    strengths: [
      '창의적 문제 해결',
      '적응력 만점',
      '새로운 시도에 열려 있음',
      '분위기 전환 능력',
    ],
    weaknesses: [
      '집중력이 분산될 수 있음',
      '책임감이 약해 보일 수 있음',
      '가벼워 보일 수 있음',
    ],
    compatibleElements: ['불', '땅'],
    incompatibleElements: ['얼음'],
    famousCharacters: ['바람계곡의 나우시카', '아앙(아바타)', '실프'],
    lifeAdvice: '바람은 보이지 않지만 모든 것을 움직입니다. 자유는 책임과 함께해요.',
  },
  lightning: {
    type: 'lightning',
    title: '번개의 마법사',
    emoji: '⚡',
    element: '뇌전 (Lightning)',
    description: '당신은 번개의 마법사! 빠르고 강렬한 당신은 순간적으로 세상을 밝히는 번개처럼 강한 임팩트를 줍니다. 날카로운 두뇌와 빠른 판단력이 장점이에요.',
    characteristics: [
      '빠르고 날카로움',
      '강렬한 존재감',
      '순간 판단력',
      '에너지 넘침',
    ],
    magicPowers: [
      '전기 발생',
      '순간이동 (초고속)',
      '전자기파 조작',
      '마비 공격',
    ],
    strengths: [
      '빠른 실행력',
      '날카로운 판단력',
      '강력한 임팩트',
      '위기 상황에서 빛남',
    ],
    weaknesses: [
      '지구력이 부족할 수 있음',
      '성급한 판단',
      '통제력이 필요함',
    ],
    compatibleElements: ['불', '바람'],
    incompatibleElements: ['물', '땅'],
    famousCharacters: ['토르', '피카츄', '라이코'],
    lifeAdvice: '번개는 순간이지만, 그 빛은 오래 기억됩니다. 힘을 잘 조절하세요.',
  },
  ice: {
    type: 'ice',
    title: '얼음의 마법사',
    emoji: '❄️',
    element: '빙결 (Ice)',
    description: '당신은 얼음의 마법사! 차갑고 냉정해 보이지만, 그 안에는 깊은 내면이 있습니다. 이성적이고 논리적인 사고로 복잡한 문제도 명쾌하게 해결해요.',
    characteristics: [
      '냉철하고 이성적',
      '차분하고 절제력 있음',
      '날카로운 분석력',
      '미스터리한 매력',
    ],
    magicPowers: [
      '냉기 조종',
      '얼음 생성',
      '시간 지연 (동결)',
      '보호막 형성',
    ],
    strengths: [
      '감정에 휘둘리지 않음',
      '냉철한 판단력',
      '집중력이 뛰어남',
      '섬세한 표현력',
    ],
    weaknesses: [
      '차가워 보일 수 있음',
      '감정 표현이 서툴 수 있음',
      '완벽주의 성향',
    ],
    compatibleElements: ['물', '바람'],
    incompatibleElements: ['불'],
    famousCharacters: ['엘사(겨울왕국)', '서브제로(모탈컴뱃)', '토시로(블리치)'],
    lifeAdvice: '얼음도 결국은 물입니다. 가끔은 녹아서 흐를 줄도 알아야 해요.',
  },
};

export function calculateResult(answers: number[]): MagicElementResult {
  const scores: Record<MagicElementType, number> = {
    fire: 0,
    water: 0,
    earth: 0,
    wind: 0,
    lightning: 0,
    ice: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as MagicElementType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: MagicElementType = 'fire';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as MagicElementType;
    }
  });

  return results[resultType];
}
