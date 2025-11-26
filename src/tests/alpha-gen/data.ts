// 알파세대 이해력 테스트 - 요즘 애들 얼마나 알아?

export interface AlphaGenQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface AlphaGenResult {
  type: string;
  title: string;
  emoji: string;
  score: number;
  subtitle: string;
  description: string;
  characteristics: string[];
  alphaKnowledge: string[];
  generationGap: string[];
  improvementTips: string[];
  alphaTerms: { term: string; meaning: string }[];
}

export const alphaGenTypes = ['alpha_native', 'alpha_friendly', 'alpha_learner', 'alpha_confused', 'alpha_outsider'] as const;
export type AlphaGenType = typeof alphaGenTypes[number];

export const questions: AlphaGenQuestion[] = [
  {
    id: 1,
    question: "'무야호'가 뭔지 알아요?",
    options: [
      { text: "당연하죠! 유행어잖아요", score: 3 },
      { text: "들어본 것 같은데... 뭐였더라", score: 2 },
      { text: "처음 들어봐요", score: 0 },
    ],
  },
  {
    id: 2,
    question: "로블록스(Roblox)를 해본 적 있나요?",
    options: [
      { text: "자주 해요 / 해봤어요", score: 3 },
      { text: "뭔지는 알지만 안 해봤어요", score: 2 },
      { text: "로블록스가 뭐예요?", score: 0 },
    ],
  },
  {
    id: 3,
    question: "'갓생'의 의미를 알고 계신가요?",
    options: [
      { text: "갓(God) + 인생, 완벽한 하루를 보내는 것", score: 3 },
      { text: "뭔가 열심히 사는 거 아닌가요?", score: 2 },
      { text: "전혀 모르겠어요", score: 0 },
    ],
  },
  {
    id: 4,
    question: "요즘 아이들이 가장 많이 쓰는 SNS는?",
    options: [
      { text: "틱톡 / 유튜브 쇼츠", score: 3 },
      { text: "인스타그램", score: 2 },
      { text: "페이스북 / 카카오스토리", score: 0 },
    ],
  },
  {
    id: 5,
    question: "'스키비디 토일렛'을 알고 계신가요?",
    options: [
      { text: "네, 요즘 애들 사이에서 엄청 유행이죠", score: 3 },
      { text: "들어본 것 같은데 뭔지 모르겠어요", score: 1 },
      { text: "뭐예요 그게? 처음 들어요", score: 0 },
    ],
  },
  {
    id: 6,
    question: "'점메추' (점심 메뉴 추천)같은 줄임말 어떻게 생각해요?",
    options: [
      { text: "자연스럽게 써요", score: 3 },
      { text: "알지만 직접 쓰진 않아요", score: 2 },
      { text: "이해가 안 돼요, 왜 줄여요?", score: 0 },
    ],
  },
  {
    id: 7,
    question: "AI 챗봇(ChatGPT 등)을 어떻게 활용하시나요?",
    options: [
      { text: "거의 매일 다양하게 활용해요", score: 3 },
      { text: "가끔 궁금한 거 물어봐요", score: 2 },
      { text: "잘 안 써요 / 어려워요", score: 0 },
    ],
  },
  {
    id: 8,
    question: "'현웃'이 무슨 뜻인지 알아요?",
    options: [
      { text: "현실에서 웃김, 진짜 웃길 때 쓰는 말", score: 3 },
      { text: "웃기다는 뜻 아닌가요?", score: 1 },
      { text: "모르겠어요", score: 0 },
    ],
  },
  {
    id: 9,
    question: "요즘 초등학생들 사이에서 인기 있는 게임은?",
    options: [
      { text: "로블록스, 마인크래프트, 브롤스타즈", score: 3 },
      { text: "배틀그라운드, 롤", score: 1 },
      { text: "잘 모르겠어요", score: 0 },
    ],
  },
  {
    id: 10,
    question: "'어쩔티비'가 뭔지 아세요?",
    options: [
      { text: "어쩌라고 + 저쩌라고 + TV나 봐, 받아치기용 말", score: 3 },
      { text: "TV랑 관련된 건가요?", score: 1 },
      { text: "전혀 모르겠어요", score: 0 },
    ],
  },
  {
    id: 11,
    question: "'플렉스(flex)'의 의미를 아시나요?",
    options: [
      { text: "과시하다, 자랑하다는 뜻이죠", score: 3 },
      { text: "운동 관련 용어 아닌가요?", score: 1 },
      { text: "모르겠어요", score: 0 },
    ],
  },
  {
    id: 12,
    question: "아이들이 쓰는 'ㅇㅈ', 'ㄹㅇ'이 무슨 뜻인지 알아요?",
    options: [
      { text: "인정, 리얼/레알이요", score: 3 },
      { text: "자음만 봐서는 모르겠어요", score: 1 },
      { text: "이런 식으로 쓰는 거 처음 봐요", score: 0 },
    ],
  },
];

export const results: Record<AlphaGenType, AlphaGenResult> = {
  alpha_native: {
    type: 'alpha_native',
    title: '알파세대 원어민',
    emoji: '🧒',
    score: 100,
    subtitle: '요즘 애들이랑 완벽 소통!',
    description: '당신은 알파세대와 완벽하게 소통할 수 있어요! 최신 트렌드, 유행어, 문화를 모두 꿰뚫고 있네요. 혹시 본인이 알파세대이시거나, 알파세대와 아주 가까이 지내시나요?',
    characteristics: ['트렌드에 민감함', '디지털 네이티브', '새로운 것에 열린 마음', '세대 소통 능력 최상'],
    alphaKnowledge: ['유행어 완벽 이해', '최신 게임/앱 숙지', 'SNS 트렌드 파악', 'Z세대-알파세대 문화 이해'],
    generationGap: ['거의 없음', '자연스러운 소통 가능', '문화적 공감대 형성'],
    improvementTips: ['계속 관심 가지세요', '알파세대와 대화를 유지하세요', '변화하는 트렌드도 놓치지 마세요'],
    alphaTerms: [
      { term: '스키비디', meaning: '요즘 유행하는 밈/캐릭터' },
      { term: '갓생', meaning: '완벽하게 계획된 하루' },
      { term: '현웃', meaning: '현실에서 진짜 웃김' },
    ],
  },
  alpha_friendly: {
    type: 'alpha_friendly',
    title: '알파세대 친화형',
    emoji: '🤝',
    score: 75,
    subtitle: '요즘 애들이랑 잘 통해요!',
    description: '당신은 알파세대와 꽤 잘 소통할 수 있어요! 대부분의 트렌드와 유행어를 이해하고, 세대 차이를 넘어 대화할 수 있는 능력이 있네요.',
    characteristics: ['열린 마음', '학습 의지', '적응력 있음', '소통 능력 양호'],
    alphaKnowledge: ['주요 유행어 이해', '인기 콘텐츠 인지', 'SNS 기본 이해', '세대 차이 인식'],
    generationGap: ['약간의 갭 존재', '노력하면 극복 가능', '기본적 소통은 원활'],
    improvementTips: ['최신 유행 콘텐츠를 접해보세요', '틱톡/유튜브 쇼츠를 구경해보세요', '알파세대에게 직접 물어보세요'],
    alphaTerms: [
      { term: '점메추', meaning: '점심 메뉴 추천' },
      { term: '플렉스', meaning: '과시하다, 자랑하다' },
      { term: 'ㅇㅈ', meaning: '인정' },
    ],
  },
  alpha_learner: {
    type: 'alpha_learner',
    title: '알파세대 학습자',
    emoji: '📚',
    score: 50,
    subtitle: '배우면 금방 따라잡아요!',
    description: '당신은 알파세대 문화를 절반 정도 이해하고 있어요. 기본적인 건 알지만 최신 트렌드는 조금 놓치고 있네요. 하지만 관심만 있다면 금방 따라잡을 수 있어요!',
    characteristics: ['기본 지식 보유', '학습 의지 있음', '적응 중', '노력형'],
    alphaKnowledge: ['기본 유행어 일부 이해', '대표 콘텐츠 인지', '디지털 기기 사용 가능'],
    generationGap: ['중간 정도의 갭', '대화 시 설명 필요', '노력으로 극복 가능'],
    improvementTips: ['요즘 유행하는 콘텐츠를 찾아보세요', '젊은 세대와 대화를 늘려보세요', '새로운 앱/게임을 체험해보세요', '유튜브 트렌드를 구경하세요'],
    alphaTerms: [
      { term: '무야호', meaning: '기쁨/흥분 표현 (유행어)' },
      { term: '어쩔티비', meaning: '어쩌라고 받아치기' },
      { term: 'ㄹㅇ', meaning: '리얼/레알 (진짜)' },
    ],
  },
  alpha_confused: {
    type: 'alpha_confused',
    title: '알파세대 혼란러',
    emoji: '😵',
    score: 25,
    subtitle: '요즘 애들 뭐라는 거야...?',
    description: '알파세대 문화가 조금 낯설게 느껴지시죠? 괜찮아요, 세대 차이는 자연스러운 거예요. 관심을 갖고 조금씩 알아가면 소통이 훨씬 수월해질 거예요!',
    characteristics: ['세대 차이 체감', '낯선 문화', '이해 노력 필요', '배울 의지 있음'],
    alphaKnowledge: ['일부 유행어만 인지', '디지털 문화 낯섦', '최신 트렌드 미파악'],
    generationGap: ['상당한 갭 존재', '소통 시 어려움', '이해에 시간 필요'],
    improvementTips: ['알파세대 가족/지인에게 물어보세요', '유튜브 인기 영상을 구경하세요', '틱톡을 깔아보세요', '열린 마음으로 접근하세요'],
    alphaTerms: [
      { term: '로블록스', meaning: '메타버스 게임 플랫폼' },
      { term: '쇼츠', meaning: '짧은 세로 영상' },
      { term: '밈', meaning: '인터넷 유행 콘텐츠' },
    ],
  },
  alpha_outsider: {
    type: 'alpha_outsider',
    title: '알파세대 이방인',
    emoji: '👽',
    score: 0,
    subtitle: '완전 다른 세계에서 오셨군요!',
    description: '알파세대 문화가 외계어처럼 느껴지시나요? 세대 차이가 크게 느껴지지만, 이건 나쁜 게 아니에요. 서로 다른 세대가 서로 배워가는 거니까요!',
    characteristics: ['큰 세대 차이', '다른 문화권', '새로운 학습 필요', '다양성 존중'],
    alphaKnowledge: ['대부분 낯섦', '디지털 문화 미경험', '최신 트렌드 모름'],
    generationGap: ['큰 갭 존재', '기본 설명부터 필요', '장기적 학습 필요'],
    improvementTips: ['기본 SNS부터 시작하세요', '유튜브 구경을 해보세요', '어린 세대에게 직접 배워보세요', '실패해도 괜찮아요, 도전하세요'],
    alphaTerms: [
      { term: 'SNS', meaning: '소셜 네트워크 서비스' },
      { term: '유튜브', meaning: '동영상 공유 플랫폼' },
      { term: '앱', meaning: '스마트폰 애플리케이션' },
    ],
  },
};

export function calculateResult(answers: number[]): AlphaGenResult {
  let totalScore = 0;
  const maxScore = questions.length * 3; // 최대 36점

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  let resultType: AlphaGenType;
  if (percentage >= 85) {
    resultType = 'alpha_native';
  } else if (percentage >= 65) {
    resultType = 'alpha_friendly';
  } else if (percentage >= 40) {
    resultType = 'alpha_learner';
  } else if (percentage >= 20) {
    resultType = 'alpha_confused';
  } else {
    resultType = 'alpha_outsider';
  }

  return { ...results[resultType], score: percentage };
}
