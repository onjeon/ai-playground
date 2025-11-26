// 드라마 캐릭터 테스트 - 드라마에서 당신은 어떤 캐릭터?

export interface DramaCharacterQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface DramaCharacterResult {
  type: string;
  title: string;
  emoji: string;
  genre: string;
  description: string;
  characteristics: string[];
  catchphrase: string;
  strengths: string[];
  weaknesses: string[];
  plotTwist: string;
  bestScenes: string[];
  chemistry: string;
  endingType: string;
}

export const dramaCharacterTypes = ['protagonist', 'second-lead', 'villain', 'comic-relief', 'mysterious', 'supporting'] as const;
export type DramaCharacterType = typeof dramaCharacterTypes[number];

export const questions: DramaCharacterQuestion[] = [
  {
    id: 1,
    question: "드라마에서 첫 등장 신이라면?",
    options: [
      { text: "카리스마 있게 등장, 모든 시선 집중", scores: { protagonist: 3, villain: 1 } },
      { text: "멀리서 주인공을 바라보며 쓸쓸한 미소", scores: { 'second-lead': 3 } },
      { text: "뭔가 수상한 분위기, 정체가 궁금해지는", scores: { mysterious: 3 } },
      { text: "넘어지거나 웃기게 등장해서 웃음 유발", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 2,
    question: "삼각관계에 휘말렸다면?",
    options: [
      { text: "당연히 나를 두고 싸우는 상황", scores: { protagonist: 3 } },
      { text: "이루어지지 않는 사랑... 가슴 아파", scores: { 'second-lead': 3 } },
      { text: "내가 삼각관계를 만든 장본인 😈", scores: { villain: 3 } },
      { text: "제3자로서 상황 관찰하며 조언해줌", scores: { supporting: 3 } },
    ],
  },
  {
    id: 3,
    question: "드라마에서 나의 대사 스타일은?",
    options: [
      { text: "명대사 장인! 모든 말이 짤로 만들어짐", scores: { protagonist: 2, villain: 2 } },
      { text: "마음에 남는 따뜻한 위로의 말", scores: { 'second-lead': 3 } },
      { text: "이중적인 의미의 섬뜩한 대사", scores: { mysterious: 3 } },
      { text: "개그 타이밍 좋은 웃긴 애드리브", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 4,
    question: "위기 상황이 닥쳤을 때?",
    options: [
      { text: "주인공 답게 직접 해결하러 뛰어감", scores: { protagonist: 3 } },
      { text: "뒤에서 조용히 도와주고 사라짐", scores: { 'second-lead': 3 } },
      { text: "사실 내가 위기를 만들었음ㅋ", scores: { villain: 3 } },
      { text: "패닉하면서도 웃기게 대처", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 5,
    question: "드라마에서 나의 OST 느낌은?",
    options: [
      { text: "웅장하고 희망찬 메인 테마곡", scores: { protagonist: 3 } },
      { text: "가슴 저리게 슬픈 발라드", scores: { 'second-lead': 3 } },
      { text: "불안하고 긴장감 도는 BGM", scores: { villain: 2, mysterious: 2 } },
      { text: "밝고 경쾌한 코믹 삽입곡", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 6,
    question: "드라마에서 가장 빛날 것 같은 장면은?",
    options: [
      { text: "클라이맥스 고백/대결 신", scores: { protagonist: 3 } },
      { text: "비 오는 날 혼자 우는 신", scores: { 'second-lead': 3 } },
      { text: "반전이 밝혀지는 충격적인 신", scores: { mysterious: 2, villain: 2 } },
      { text: "텐션 올려주는 코믹 신", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 7,
    question: "비밀이 있다면 어떤 비밀?",
    options: [
      { text: "출생의 비밀 or 잃어버린 기억", scores: { protagonist: 3 } },
      { text: "짝사랑을 숨기고 있음", scores: { 'second-lead': 3 } },
      { text: "복수를 계획 중", scores: { villain: 3 } },
      { text: "사실 최종 보스?! 반전 매력", scores: { mysterious: 3 } },
    ],
  },
  {
    id: 8,
    question: "드라마 촬영장에서 나는?",
    options: [
      { text: "주연이라 대기실도 따로, 대우 받음", scores: { protagonist: 3 } },
      { text: "조용히 대본 외우며 감정 이입 중", scores: { 'second-lead': 2, supporting: 1 } },
      { text: "미스터리한 분위기로 어디 있는지 모름", scores: { mysterious: 3 } },
      { text: "촬영장 분위기 메이커, 다 웃게 만듦", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 9,
    question: "드라마 엔딩에서 나는?",
    options: [
      { text: "해피엔딩의 주인공! 다 가짐", scores: { protagonist: 3 } },
      { text: "멋지게 떠나는 씁쓸한 엔딩", scores: { 'second-lead': 3 } },
      { text: "처벌받거나 회개하는 엔딩", scores: { villain: 3 } },
      { text: "끝까지 웃음 주고 배웅해주는 역", scores: { 'comic-relief': 2, supporting: 1 } },
    ],
  },
  {
    id: 10,
    question: "시청자들이 나를 보고?",
    options: [
      { text: "주인공 응원해! 최고야!", scores: { protagonist: 3 } },
      { text: "두번째 남자/여자가 더 낫는데... 억울해", scores: { 'second-lead': 3 } },
      { text: "진짜 싫다... 근데 연기는 잘해", scores: { villain: 3 } },
      { text: "나오면 웃겨ㅋㅋ 씬스틸러!!", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 11,
    question: "드라마에서 나의 패션 스타일은?",
    options: [
      { text: "화려하고 트렌디, 협찬 의상 가득", scores: { protagonist: 3 } },
      { text: "깔끔하고 단정, 은근 고급짐", scores: { 'second-lead': 2, supporting: 1 } },
      { text: "올블랙 or 시크하고 강렬함", scores: { villain: 2, mysterious: 2 } },
      { text: "독특하고 개성 넘침, 캐릭터성 강함", scores: { 'comic-relief': 3 } },
    ],
  },
  {
    id: 12,
    question: "다음 시즌에서 나의 역할은?",
    options: [
      { text: "당연히 또 주인공! 레전드로 남을 거야", scores: { protagonist: 3 } },
      { text: "스핀오프로 나만의 드라마 가능?", scores: { 'second-lead': 3 } },
      { text: "더 강력한 빌런으로 복귀", scores: { villain: 3 } },
      { text: "어디든 출연해서 분위기 살림", scores: { 'comic-relief': 2, supporting: 1 } },
    ],
  },
];

export const results: Record<DramaCharacterType, DramaCharacterResult> = {
  protagonist: {
    type: 'protagonist',
    title: '메인 주인공',
    emoji: '👑',
    genre: '로맨스/판타지/액션',
    description: '드라마의 중심! 모든 스토리가 당신을 중심으로 돌아갑니다. 카리스마와 매력으로 시청자의 마음을 사로잡고, 해피엔딩의 주인공이 됩니다.',
    characteristics: [
      '주인공 아우라',
      '강한 리더십',
      '스포트라이트 체질',
      '긍정적 에너지',
    ],
    catchphrase: '"나... 포기하지 않아."',
    strengths: [
      '모든 상황의 중심',
      '어떤 위기도 극복',
      '해피엔딩 확정',
      '명대사 양산기',
    ],
    weaknesses: [
      '너무 잘돼서 현실감 부족',
      '모든 이성에게 인기 (질투 유발)',
      '고난이 끝없이 찾아옴',
      '가끔 너무 뻔한 전개',
    ],
    plotTwist: '사실 출생의 비밀이 있거나, 엄청난 운명을 타고났습니다.',
    bestScenes: [
      '빗속 고백 신',
      '위기 극복 클라이맥스',
      '마지막 해피엔딩',
    ],
    chemistry: '두 번째 주인공 & 악역과의 긴장감',
    endingType: '화려한 해피엔딩으로 시즌2 가능성 열어둠',
  },
  'second-lead': {
    type: 'second-lead',
    title: '두 번째 주인공',
    emoji: '🥀',
    genre: '로맨스/멜로',
    description: '시청자들이 가장 안타까워하는 캐릭터! 주인공을 진심으로 사랑하지만 이루어지지 않는 애틋한 사랑을 합니다. "두번째가 더 낫는데..." 댓글이 달립니다.',
    characteristics: [
      '애틋한 감성',
      '희생적인 사랑',
      '숨은 매력 폭발',
      '멜로 감성 max',
    ],
    catchphrase: '"행복했으면 좋겠어... 너만..."',
    strengths: [
      '시청자 팬덤 보유',
      '감정 연기 최고',
      '짝사랑 명장면 양산',
      '우는 씬 장인',
    ],
    weaknesses: [
      '결말이 항상 쓸쓸함',
      '주인공에게 밀림',
      '너무 착해서 답답함',
      '행복한 결말 확률 낮음',
    ],
    plotTwist: '알고 보니 주인공을 처음부터 지켜왔거나, 큰 희생을 감수했습니다.',
    bestScenes: [
      '혼자 눈물 흘리는 장면',
      '뒤돌아서 떠나는 장면',
      '마지막 응원 대사',
    ],
    chemistry: '주인공과의 안 이루어지는 케미',
    endingType: '스핀오프에서 해피엔딩 가능성 or 열린 결말',
  },
  villain: {
    type: 'villain',
    title: '카리스마 악역',
    emoji: '🖤',
    genre: '스릴러/복수극/막장',
    description: '드라마의 긴장감을 책임지는 필수 캐릭터! 미워하면서도 연기력에 감탄하게 만드는, 매력적인 빌런입니다. 사연 있는 악역으로 동정표까지 받습니다.',
    characteristics: [
      '압도적인 포스',
      '날카로운 카리스마',
      '계산적인 두뇌',
      '반전 매력 보유',
    ],
    catchphrase: '"내가 원하는 건... 다 가질 거야."',
    strengths: [
      '화제성 끌어올림',
      '명대사 양산 (짤 대박)',
      '연기력 인정받음',
      '스토리 긴장감 담당',
    ],
    weaknesses: [
      '결말이 안 좋음 (처벌/죽음)',
      '미움 받는 역할',
      '가끔 너무 악역이라 욕먹음',
      '선역 팬들에게 공격받음',
    ],
    plotTwist: '과거에 주인공에게 당한 트라우마가 있거나, 사실은 불쌍한 사연이 있습니다.',
    bestScenes: [
      '정체 드러나는 반전 씬',
      '주인공과 대결 씬',
      '과거 회상 (동정 유발)',
    ],
    chemistry: '주인공과의 팽팽한 대립 케미',
    endingType: '처벌받거나 회개, 가끔은 동정받는 죽음',
  },
  'comic-relief': {
    type: 'comic-relief',
    title: '씬스틸러 코믹',
    emoji: '🤣',
    genre: '로맨틱 코미디/시트콤',
    description: '나오기만 하면 웃음 터지는 분위기 메이커! 드라마의 텐션을 올려주고, 무거운 분위기를 환기시켜주는 없어서는 안 될 존재입니다.',
    characteristics: [
      '타고난 유머 감각',
      '뛰어난 애드리브',
      '밝은 에너지',
      '친화력 만렙',
    ],
    catchphrase: '"에이~ 그게 말이 돼?! ㅋㅋㅋ"',
    strengths: [
      '시청자 힐링 담당',
      '짤 제조기 (바이럴)',
      '촬영장 분위기 담당',
      '어느 드라마든 캐스팅됨',
    ],
    weaknesses: [
      '주연급 대우는 아님',
      '진지한 연기 기회 적음',
      '웃긴 역할에 타입캐스팅',
      '스토리 중심에서 벗어남',
    ],
    plotTwist: '반전으로 능력자이거나, 위기 상황에서 결정적 도움을 줍니다.',
    bestScenes: [
      '웃긴 등장 신',
      '긴장감 풀어주는 코믹 신',
      '의외의 진지한 조언 신',
    ],
    chemistry: '주인공 친구 or 서브캐들과의 브로맨스/우정 케미',
    endingType: '마지막까지 웃음 주고 해피하게 마무리',
  },
  mysterious: {
    type: 'mysterious',
    title: '미스터리 키맨',
    emoji: '🌙',
    genre: '미스터리/스릴러/판타지',
    description: '정체를 알 수 없는 수수께끼 캐릭터! "저 캐릭터 정체가 뭐야?" 하는 궁금증을 유발하며, 반전의 열쇠를 쥐고 있습니다.',
    characteristics: [
      '베일에 싸인 정체',
      '예측 불가 행동',
      '의미심장한 대사',
      '강렬한 눈빛',
    ],
    catchphrase: '"...그건 아직 말할 수 없어."',
    strengths: [
      '시청자 호기심 유발',
      '스토리 핵심 키 보유',
      '반전 담당',
      '화제성 높음',
    ],
    weaknesses: [
      '너무 안 나오면 잊혀짐',
      '정체 밝혀지면 김빠질 수 있음',
      '호불호 갈릴 수 있음',
      '스토리가 복잡해질 수 있음',
    ],
    plotTwist: '최종 보스이거나, 의외로 주인공 편이거나, 완전 다른 정체가 밝혀집니다.',
    bestScenes: [
      '의미심장한 등장 신',
      '정체 밝혀지는 반전 신',
      '결정적 조력 신',
    ],
    chemistry: '모든 캐릭터와 미묘한 긴장 관계',
    endingType: '반전 공개 후 선역/악역 엔딩 or 열린 결말',
  },
  supporting: {
    type: 'supporting',
    title: '감초 조연',
    emoji: '🌟',
    genre: '모든 장르',
    description: '드라마의 감초! 주인공을 돋보이게 하면서도 자신만의 존재감을 발휘합니다. 없으면 허전한, 드라마의 필수 조연입니다.',
    characteristics: [
      '든든한 조력자',
      '안정적인 연기',
      '서브플롯 담당',
      '신뢰감 있는 캐릭터',
    ],
    catchphrase: '"내가 도와줄게. 걱정 마."',
    strengths: [
      '안정적인 캐스팅',
      '다양한 역할 소화',
      '팬층이 두터움',
      '인지도 상승 기회',
    ],
    weaknesses: [
      '스포트라이트 받기 어려움',
      '주연 대우는 아님',
      '스토리에서 소외될 수 있음',
      '독자적 인기 얻기 힘듦',
    ],
    plotTwist: '의외의 순간에 결정적 역할을 하거나, 스핀오프 주인공이 됩니다.',
    bestScenes: [
      '주인공 조언 신',
      '서브 로맨스 라인',
      '위기 때 등장 신',
    ],
    chemistry: '주인공과의 단짝 케미, 팀 케미',
    endingType: '주인공 곁에서 해피엔딩 함께 함',
  },
};

export function calculateResult(answers: number[]): DramaCharacterResult {
  const scores: Record<DramaCharacterType, number> = {
    protagonist: 0,
    'second-lead': 0,
    villain: 0,
    'comic-relief': 0,
    mysterious: 0,
    supporting: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as DramaCharacterType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: DramaCharacterType = 'protagonist';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as DramaCharacterType;
    }
  });

  return results[resultType];
}
