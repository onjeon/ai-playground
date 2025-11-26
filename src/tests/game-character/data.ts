// 게임 캐릭터 유형 테스트 - 게임에서 나는 어떤 클래스?

export interface GameCharacterQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface GameCharacterResult {
  type: string;
  title: string;
  emoji: string;
  className: string;
  description: string;
  characteristics: string[];
  skills: string[];
  strengths: string[];
  weaknesses: string[];
  playStyle: string;
  teamRole: string;
  famousCharacters: string[];
  realLifeAdvice: string;
}

export const gameCharacterTypes = ['warrior', 'mage', 'healer', 'assassin', 'ranger', 'tank'] as const;
export type GameCharacterType = typeof gameCharacterTypes[number];

export const questions: GameCharacterQuestion[] = [
  {
    id: 1,
    question: "팀에서 어떤 역할을 선호해?",
    options: [
      { text: "앞장서서 전투를 이끈다", scores: { warrior: 3 } },
      { text: "뒤에서 강력한 공격을 날린다", scores: { mage: 3 } },
      { text: "팀원들을 지원하고 회복시킨다", scores: { healer: 3 } },
      { text: "은밀하게 핵심 타겟을 제거한다", scores: { assassin: 3 } },
    ],
  },
  {
    id: 2,
    question: "전투에서 나의 스타일은?",
    options: [
      { text: "정면 돌파! 힘으로 밀어붙인다", scores: { warrior: 2, tank: 1 } },
      { text: "전략적으로 스킬을 사용한다", scores: { mage: 3 } },
      { text: "기회를 노려 결정적 한 방", scores: { assassin: 3 } },
      { text: "거리를 유지하며 안전하게", scores: { ranger: 3 } },
    ],
  },
  {
    id: 3,
    question: "가장 중요하게 생각하는 능력치는?",
    options: [
      { text: "공격력! 한 방이 중요해", scores: { warrior: 2, assassin: 1 } },
      { text: "지능/마법력! 스킬 데미지", scores: { mage: 3 } },
      { text: "체력/방어력! 오래 버티기", scores: { tank: 3 } },
      { text: "민첩성/속도! 빠르게 움직이기", scores: { ranger: 2, assassin: 1 } },
    ],
  },
  {
    id: 4,
    question: "게임에서 제일 재미있는 순간은?",
    options: [
      { text: "보스를 쓰러뜨릴 때", scores: { warrior: 3 } },
      { text: "완벽한 콤보로 적을 쓸어버릴 때", scores: { mage: 3 } },
      { text: "팀원을 살려서 승리할 때", scores: { healer: 3 } },
      { text: "몰래 접근해 암살 성공할 때", scores: { assassin: 3 } },
    ],
  },
  {
    id: 5,
    question: "실제 성격을 게임에 대입하면?",
    options: [
      { text: "목표를 향해 돌진하는 편", scores: { warrior: 3 } },
      { text: "분석하고 계획적으로 움직이는 편", scores: { mage: 2, ranger: 1 } },
      { text: "남들을 챙기고 돕는 편", scores: { healer: 3 } },
      { text: "혼자 조용히 일 처리하는 편", scores: { assassin: 2, ranger: 1 } },
    ],
  },
  {
    id: 6,
    question: "파티원이 위험에 처하면?",
    options: [
      { text: "앞으로 나가서 대신 맞는다", scores: { tank: 3 } },
      { text: "적을 빠르게 처치한다", scores: { warrior: 2, assassin: 1 } },
      { text: "즉시 회복/보호 스킬 사용", scores: { healer: 3 } },
      { text: "안전한 곳에서 지원 사격", scores: { ranger: 3 } },
    ],
  },
  {
    id: 7,
    question: "선호하는 무기/장비는?",
    options: [
      { text: "검, 도끼 같은 근접 무기", scores: { warrior: 3 } },
      { text: "지팡이, 마법서", scores: { mage: 3 } },
      { text: "단검, 암기류", scores: { assassin: 3 } },
      { text: "활, 총기 같은 원거리 무기", scores: { ranger: 3 } },
    ],
  },
  {
    id: 8,
    question: "게임에서 제일 싫어하는 상황은?",
    options: [
      { text: "적을 못 잡고 계속 죽을 때", scores: { warrior: 3 } },
      { text: "마나가 없어서 스킬을 못 쓸 때", scores: { mage: 3 } },
      { text: "팀원이 죽는 걸 못 막았을 때", scores: { healer: 3 } },
      { text: "들켜서 도망가야 할 때", scores: { assassin: 3 } },
    ],
  },
  {
    id: 9,
    question: "솔로 플레이 vs 팀 플레이?",
    options: [
      { text: "팀에서 에이스로 활약하고 싶다", scores: { warrior: 3 } },
      { text: "팀을 서포트하는 게 좋다", scores: { healer: 2, tank: 1 } },
      { text: "솔로로 자유롭게 플레이", scores: { assassin: 2, ranger: 1 } },
      { text: "상황에 따라 다르게", scores: { mage: 2, ranger: 1 } },
    ],
  },
  {
    id: 10,
    question: "레벨업하면 제일 먼저 올리고 싶은 스탯은?",
    options: [
      { text: "공격력 (STR)", scores: { warrior: 3 } },
      { text: "지능/마력 (INT)", scores: { mage: 3 } },
      { text: "체력/방어 (VIT)", scores: { tank: 3 } },
      { text: "민첩/치명타 (DEX)", scores: { assassin: 2, ranger: 1 } },
    ],
  },
  {
    id: 11,
    question: "게임에서 성취감을 느낄 때는?",
    options: [
      { text: "강한 적을 이겼을 때", scores: { warrior: 3 } },
      { text: "완벽한 전략이 성공했을 때", scores: { mage: 3 } },
      { text: "팀이 나 덕분에 이겼을 때", scores: { healer: 2, tank: 1 } },
      { text: "아무도 모르게 임무 완수했을 때", scores: { assassin: 3 } },
    ],
  },
  {
    id: 12,
    question: "게임 외에 나의 실제 성향은?",
    options: [
      { text: "적극적이고 행동파", scores: { warrior: 3 } },
      { text: "생각이 많고 분석적", scores: { mage: 3 } },
      { text: "다정하고 배려심 많음", scores: { healer: 3 } },
      { text: "조용하고 독립적", scores: { assassin: 2, ranger: 1 } },
    ],
  },
];

export const results: Record<GameCharacterType, GameCharacterResult> = {
  warrior: {
    type: 'warrior',
    title: '전사 (Warrior)',
    emoji: '⚔️',
    className: '근접 딜러 / 파이터',
    description: '당신은 전사 클래스! 강한 의지와 용맹함으로 최전선에서 싸우는 타입입니다. 목표를 향해 돌진하고, 어떤 어려움도 정면 돌파하는 리더십이 있어요.',
    characteristics: [
      '용맹하고 적극적',
      '리더십이 강함',
      '직접적이고 솔직함',
      '행동력 만점',
    ],
    skills: [
      '강타 (Heavy Strike)',
      '돌진 (Charge)',
      '분노 (Berserk)',
      '전투 함성 (Battle Cry)',
    ],
    strengths: [
      '강한 추진력',
      '믿음직한 리더',
      '위기 상황에서 빛남',
      '포기하지 않는 근성',
    ],
    weaknesses: [
      '무모할 수 있음',
      '세밀함이 부족할 수 있음',
      '참을성이 부족',
    ],
    playStyle: '앞장서서 적진에 돌격! 강력한 근접 공격으로 적을 제압',
    teamRole: '전투의 중심, 파티의 에이스',
    famousCharacters: ['클라우드(FF7)', '거스(던파)', '가렌(LOL)'],
    realLifeAdvice: '때로는 한 발 물러서서 상황을 보는 것도 전략이에요.',
  },
  mage: {
    type: 'mage',
    title: '마법사 (Mage)',
    emoji: '🔮',
    className: '원거리 마법 딜러',
    description: '당신은 마법사 클래스! 지혜와 지식을 바탕으로 강력한 마법을 사용하는 타입입니다. 전략적 사고와 분석력으로 복잡한 상황도 명쾌하게 해결해요.',
    characteristics: [
      '지적이고 분석적',
      '전략적 사고',
      '창의적 문제 해결',
      '호기심 가득',
    ],
    skills: [
      '파이어볼 (Fireball)',
      '냉기 폭풍 (Blizzard)',
      '번개 화살 (Lightning Bolt)',
      '텔레포트 (Teleport)',
    ],
    strengths: [
      '뛰어난 분석력',
      '창의적 해결책',
      '광역 제압 능력',
      '지식 습득 빠름',
    ],
    weaknesses: [
      '체력이 약할 수 있음',
      '근접전에 취약',
      '행동보다 생각이 앞섬',
    ],
    playStyle: '안전한 거리에서 강력한 마법으로 적을 초토화',
    teamRole: '전략 두뇌, 광역 딜러',
    famousCharacters: ['간달프', '럭스(LOL)', '젤다의 젤다'],
    realLifeAdvice: '머리도 중요하지만, 가끔은 직감을 믿어보세요.',
  },
  healer: {
    type: 'healer',
    title: '힐러 (Healer)',
    emoji: '💚',
    className: '서포터 / 회복 전문가',
    description: '당신은 힐러 클래스! 따뜻한 마음으로 팀원들을 돌보고 회복시키는 타입입니다. 팀의 숨은 공로자로, 당신이 있어야 팀이 굴러가요.',
    characteristics: [
      '배려심이 깊음',
      '책임감 강함',
      '관찰력 뛰어남',
      '희생 정신',
    ],
    skills: [
      '치유 (Heal)',
      '보호막 (Shield)',
      '해독 (Purify)',
      '부활 (Resurrection)',
    ],
    strengths: [
      '팀의 버팀목',
      '위기 관리 능력',
      '공감 능력 뛰어남',
      '인내심 있음',
    ],
    weaknesses: [
      '자기 케어가 부족할 수 있음',
      '공격력이 낮음',
      '결정을 미룰 수 있음',
    ],
    playStyle: '팀원들의 체력을 관리하고, 버프/디버프 조절',
    teamRole: '생명줄, 팀 케어러',
    famousCharacters: ['소라카(LOL)', '머시(오버워치)', '유나(FF10)'],
    realLifeAdvice: '남을 돌보는 것도 중요하지만, 자신도 돌봐야 해요.',
  },
  assassin: {
    type: 'assassin',
    title: '암살자 (Assassin)',
    emoji: '🗡️',
    className: '은신 암살 전문가',
    description: '당신은 암살자 클래스! 은밀하고 효율적으로 목표를 달성하는 타입입니다. 조용하지만 결정적인 순간에 빛나는 능력을 가지고 있어요.',
    characteristics: [
      '독립적이고 조용함',
      '집중력 높음',
      '효율성 추구',
      '기회 포착 능력',
    ],
    skills: [
      '은신 (Stealth)',
      '급소 공격 (Critical Strike)',
      '독 바르기 (Poison)',
      '그림자 걷기 (Shadow Walk)',
    ],
    strengths: [
      '결정적 한 방',
      '효율적인 일처리',
      '관찰력 뛰어남',
      '독립적으로 일 처리',
    ],
    weaknesses: [
      '팀워크가 약할 수 있음',
      '장기전에 불리',
      '사회성이 부족해 보일 수 있음',
    ],
    playStyle: '은밀하게 접근해 핵심 타겟을 빠르게 제거',
    teamRole: '암살자, 핵심 타겟 제거',
    famousCharacters: ['아칼리(LOL)', '겐지(오버워치)', '에지오(어쌔신크리드)'],
    realLifeAdvice: '혼자서도 잘하지만, 가끔은 팀과 함께하는 것도 좋아요.',
  },
  ranger: {
    type: 'ranger',
    title: '레인저 (Ranger)',
    emoji: '🏹',
    className: '원거리 물리 딜러',
    description: '당신은 레인저 클래스! 멀리서 정확하게 목표를 맞추는 타입입니다. 상황을 관찰하고 최적의 타이밍에 행동하는 신중함이 있어요.',
    characteristics: [
      '신중하고 정확함',
      '관찰력 뛰어남',
      '인내심 있음',
      '독립적',
    ],
    skills: [
      '정조준 (Snipe)',
      '다연발 (Multi-Shot)',
      '함정 설치 (Trap)',
      '추적 (Tracking)',
    ],
    strengths: [
      '정확한 판단력',
      '안전한 포지셔닝',
      '꾸준한 딜',
      '자연 친화적',
    ],
    weaknesses: [
      '근접전에 취약',
      '소극적으로 보일 수 있음',
      '결정이 느릴 수 있음',
    ],
    playStyle: '거리를 유지하며 안전하게 꾸준히 딜',
    teamRole: '원거리 딜러, 정찰 담당',
    famousCharacters: ['레골라스', '애쉬(LOL)', '알로이(호라이즌)'],
    realLifeAdvice: '안전지대도 좋지만, 가끔은 가까이 다가가 보세요.',
  },
  tank: {
    type: 'tank',
    title: '탱커 (Tank)',
    emoji: '🛡️',
    className: '방어 전문가 / 탱크',
    description: '당신은 탱커 클래스! 팀을 보호하고 공격을 대신 받아내는 타입입니다. 묵직한 존재감으로 팀의 방패 역할을 해요.',
    characteristics: [
      '듬직하고 신뢰감',
      '보호 본능 강함',
      '인내심 많음',
      '책임감 강함',
    ],
    skills: [
      '도발 (Taunt)',
      '방패 막기 (Block)',
      '보호막 (Barrier)',
      '불굴의 의지 (Fortitude)',
    ],
    strengths: [
      '팀의 버팀목',
      '위기 상황 대처 능력',
      '끈기와 지구력',
      '신뢰받는 존재',
    ],
    weaknesses: [
      '공격력이 낮음',
      '기동성이 떨어짐',
      '혼자서는 힘들 수 있음',
    ],
    playStyle: '팀원을 보호하며 적의 공격을 흡수',
    teamRole: '방패, 팀 보호자',
    famousCharacters: ['라인하르트(오버워치)', '브라움(LOL)', '나이트(던파)'],
    realLifeAdvice: '모든 걸 혼자 막으려 하지 마세요. 같이 막으면 더 든든해요.',
  },
};

export function calculateResult(answers: number[]): GameCharacterResult {
  const scores: Record<GameCharacterType, number> = {
    warrior: 0,
    mage: 0,
    healer: 0,
    assassin: 0,
    ranger: 0,
    tank: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as GameCharacterType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: GameCharacterType = 'warrior';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as GameCharacterType;
    }
  });

  return results[resultType];
}
