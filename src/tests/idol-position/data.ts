// 아이돌 포지션 테스트

export const questions = [
  {
    id: 1,
    question: "그룹 활동에서 나는?",
    options: [
      { text: "센터에서 빛나고 싶다", value: "vocal" },
      { text: "춤으로 무대를 장악하고 싶다", value: "dance" },
      { text: "독특한 개성을 보여주고 싶다", value: "rap" },
      { text: "비주얼로 시선을 사로잡고 싶다", value: "visual" },
    ],
  },
  {
    id: 2,
    question: "가장 자신있는 것은?",
    options: [
      { text: "노래/음정/감정 표현", value: "vocal" },
      { text: "춤/리듬감/몸치 언치 아님", value: "dance" },
      { text: "말솜씨/유머/개성", value: "rap" },
      { text: "외모/분위기/카메라 발", value: "visual" },
    ],
  },
  {
    id: 3,
    question: "무대 위에서 나는?",
    options: [
      { text: "감정을 담아 노래하는 모습", value: "vocal" },
      { text: "칼군무를 추는 모습", value: "dance" },
      { text: "카리스마 넘치는 랩하는 모습", value: "rap" },
      { text: "팬들과 눈 맞추며 미소 짓는 모습", value: "visual" },
    ],
  },
  {
    id: 4,
    question: "연습할 때 집중하는 부분은?",
    options: [
      { text: "음정, 발성, 감정 표현", value: "vocal" },
      { text: "안무, 표정, 동선", value: "dance" },
      { text: "가사, 플로우, 발음", value: "rap" },
      { text: "표정 관리, 카메라 앵글", value: "visual" },
    ],
  },
  {
    id: 5,
    question: "팬미팅에서 하고 싶은 것은?",
    options: [
      { text: "팬들 앞에서 라이브 선물", value: "vocal" },
      { text: "댄스 챌린지/커버 댄스", value: "dance" },
      { text: "프리스타일 랩이나 토크", value: "rap" },
      { text: "포토타임, 팬서비스", value: "visual" },
    ],
  },
  {
    id: 6,
    question: "좋아하는 음악 장르는?",
    options: [
      { text: "발라드, R&B", value: "vocal" },
      { text: "EDM, 힙합 (비트 중심)", value: "dance" },
      { text: "힙합, 랩 (가사 중심)", value: "rap" },
      { text: "팝, K-POP", value: "visual" },
    ],
  },
  {
    id: 7,
    question: "콘서트에서 솔로 무대를 한다면?",
    options: [
      { text: "감동적인 발라드 무대", value: "vocal" },
      { text: "강렬한 퍼포먼스 무대", value: "dance" },
      { text: "파워풀한 랩 무대", value: "rap" },
      { text: "화려한 비주얼 무대", value: "visual" },
    ],
  },
  {
    id: 8,
    question: "팀에서 나의 역할은?",
    options: [
      { text: "음악적 완성도를 높이는 역할", value: "vocal" },
      { text: "퍼포먼스를 이끄는 역할", value: "dance" },
      { text: "개성과 색깔을 더하는 역할", value: "rap" },
      { text: "첫인상과 이미지를 책임지는 역할", value: "visual" },
    ],
  },
  {
    id: 9,
    question: "노래방에서 나는?",
    options: [
      { text: "고음을 자신있게 지른다", value: "vocal" },
      { text: "춤을 추면서 부른다", value: "dance" },
      { text: "랩 파트를 맡는다", value: "rap" },
      { text: "분위기 띄우고 박수친다", value: "visual" },
    ],
  },
  {
    id: 10,
    question: "SNS에 주로 올리는 콘텐츠는?",
    options: [
      { text: "노래 커버 영상", value: "vocal" },
      { text: "댄스 챌린지 영상", value: "dance" },
      { text: "일상/브이로그/토크", value: "rap" },
      { text: "셀카/화보 같은 사진", value: "visual" },
    ],
  },
  {
    id: 11,
    question: "롤모델로 삼고 싶은 아이돌은?",
    options: [
      { text: "아이유, 백현, 태연 (보컬)", value: "vocal" },
      { text: "카이, 모모, 리노 (댄서)", value: "dance" },
      { text: "지드래곤, 수가, 지코 (래퍼)", value: "rap" },
      { text: "차은우, 윈터, 뷔 (비주얼)", value: "visual" },
    ],
  },
  {
    id: 12,
    question: "가장 듣고 싶은 칭찬은?",
    options: [
      { text: "노래 진짜 잘한다!", value: "vocal" },
      { text: "춤선이 너무 예쁘다!", value: "dance" },
      { text: "개성이 넘친다!", value: "rap" },
      { text: "얼굴이 예술이다!", value: "visual" },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  position: string;
  description: string;
  traits: string[];
  strengths: string[];
  famousPeople: string;
  advice: string;
}> = {
  vocal: {
    type: "vocal",
    title: "메인 보컬",
    emoji: "🎤",
    position: "Main Vocal",
    description: "당신은 그룹의 메인 보컬! 뛰어난 가창력으로 팀의 음악적 완성도를 책임지는 핵심 멤버입니다.",
    traits: ["가창력", "음악적 감성", "감정 표현", "안정적 라이브"],
    strengths: ["고음 처리", "음색", "발라드", "라이브"],
    famousPeople: "아이유, 백현, 태연, 정국, 웬디",
    advice: "당신의 목소리는 팀의 보물입니다. 꾸준한 발성 연습으로 더 성장하세요!",
  },
  dance: {
    type: "dance",
    title: "메인 댄서",
    emoji: "💃",
    position: "Main Dancer",
    description: "당신은 그룹의 메인 댄서! 파워풀한 퍼포먼스로 무대를 장악하는 핵심 멤버입니다.",
    traits: ["춤 실력", "리듬감", "표현력", "무대 장악력"],
    strengths: ["칼군무", "안무 소화력", "프리스타일", "퍼포먼스"],
    famousPeople: "카이, 모모, 제이홉, 리노, 현진",
    advice: "당신의 춤은 팀의 무기입니다. 다양한 장르의 춤을 배워보세요!",
  },
  rap: {
    type: "rap",
    title: "메인 래퍼",
    emoji: "🎧",
    position: "Main Rapper",
    description: "당신은 그룹의 메인 래퍼! 독특한 플로우와 가사로 팀에 개성을 더하는 멤버입니다.",
    traits: ["랩 실력", "작사 능력", "개성", "카리스마"],
    strengths: ["플로우", "딕션", "프리스타일", "작사"],
    famousPeople: "지드래곤, 수가, 지코, 마크, 한",
    advice: "당신의 개성은 팀의 색깔입니다. 자신만의 스타일을 계속 발전시키세요!",
  },
  visual: {
    type: "visual",
    title: "비주얼/센터",
    emoji: "✨",
    position: "Visual / Center",
    description: "당신은 그룹의 비주얼! 뛰어난 외모와 분위기로 팀의 첫인상을 책임지는 멤버입니다.",
    traits: ["비주얼", "분위기", "팬서비스", "카메라 발"],
    strengths: ["센터 소화력", "표정 연기", "화보", "예능"],
    famousPeople: "차은우, 윈터, 뷔, 수지, 원영",
    advice: "당신의 비주얼은 팀의 얼굴입니다. 내면의 매력도 함께 키워보세요!",
  },
};

export function calculateResult(answers: string[]): string {
  const scores: Record<string, number> = {
    vocal: 0,
    dance: 0,
    rap: 0,
    visual: 0,
  };

  answers.forEach(answer => {
    if (scores[answer] !== undefined) {
      scores[answer]++;
    }
  });

  return Object.entries(scores).reduce((a, b) =>
    scores[a[0]] > scores[b[0]] ? a : b
  )[0];
}
