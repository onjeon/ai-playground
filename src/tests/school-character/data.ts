// 학교 캐릭터 테스트

export const questions = [
  {
    id: 1,
    question: "쉬는 시간에 주로 뭘 했나요?",
    options: [
      { text: "열심히 다음 수업 준비", value: "studious" },
      { text: "친구들과 수다/장난", value: "popular" },
      { text: "조용히 책읽기/음악듣기", value: "quiet" },
      { text: "반 친구들 웃기기", value: "funny" },
    ],
  },
  {
    id: 2,
    question: "선생님과의 관계는?",
    options: [
      { text: "모범생으로 인정받음", value: "studious" },
      { text: "친근하게 지냄", value: "popular" },
      { text: "조용히 수업만 들음", value: "quiet" },
      { text: "자주 혼나지만 미움받지는 않음", value: "funny" },
    ],
  },
  {
    id: 3,
    question: "점심시간에는?",
    options: [
      { text: "빨리 먹고 공부하러", value: "studious" },
      { text: "여러 친구들과 함께", value: "popular" },
      { text: "소수의 친한 친구와", value: "quiet" },
      { text: "급식실에서 개그치며", value: "funny" },
    ],
  },
  {
    id: 4,
    question: "조별 과제에서 나는?",
    options: [
      { text: "자료 조사와 PPT 제작", value: "studious" },
      { text: "팀원들 조율하고 발표", value: "popular" },
      { text: "조용히 맡은 일만 함", value: "quiet" },
      { text: "분위기 띄우고 아이디어 냄", value: "funny" },
    ],
  },
  {
    id: 5,
    question: "시험 기간에 나는?",
    options: [
      { text: "평소처럼 꾸준히 공부", value: "studious" },
      { text: "친구들과 스터디 그룹", value: "popular" },
      { text: "혼자 조용히 집중", value: "quiet" },
      { text: "벼락치기 후 시험장에서 개그", value: "funny" },
    ],
  },
  {
    id: 6,
    question: "체육 시간에 나는?",
    options: [
      { text: "운동보다 다른 공부가 좋음", value: "studious" },
      { text: "팀 플레이로 활약", value: "popular" },
      { text: "혼자 산책하거나 쉼", value: "quiet" },
      { text: "재밌게 놀며 분위기 띄움", value: "funny" },
    ],
  },
  {
    id: 7,
    question: "학교 행사에서 나는?",
    options: [
      { text: "참여보다 구경", value: "studious" },
      { text: "적극적으로 참여하고 즐김", value: "popular" },
      { text: "친한 친구랑만 다님", value: "quiet" },
      { text: "무대에서 개그 치거나 MC", value: "funny" },
    ],
  },
  {
    id: 8,
    question: "방과 후에는?",
    options: [
      { text: "학원 가거나 독서실", value: "studious" },
      { text: "친구들과 놀기", value: "popular" },
      { text: "집에서 혼자 시간", value: "quiet" },
      { text: "PC방이나 노래방", value: "funny" },
    ],
  },
  {
    id: 9,
    question: "짝꿍과의 관계는?",
    options: [
      { text: "필요할 때만 대화", value: "studious" },
      { text: "친하게 지내며 도움 줌", value: "popular" },
      { text: "조용히 각자 할 일", value: "quiet" },
      { text: "수업 시간에 장난치는 사이", value: "funny" },
    ],
  },
  {
    id: 10,
    question: "반 분위기를 만드는 역할은?",
    options: [
      { text: "학급 분위기보다 공부가 중요", value: "studious" },
      { text: "반 분위기를 이끔", value: "popular" },
      { text: "분위기에 맞춰 따라감", value: "quiet" },
      { text: "분위기 메이커!", value: "funny" },
    ],
  },
  {
    id: 11,
    question: "졸업 앨범에서 나는?",
    options: [
      { text: "모범생 표창 사진", value: "studious" },
      { text: "친구들과 찍은 사진 많음", value: "popular" },
      { text: "조용히 웃는 개인 사진", value: "quiet" },
      { text: "웃긴 표정 사진 다수", value: "funny" },
    ],
  },
  {
    id: 12,
    question: "동창회에 가면?",
    options: [
      { text: "현재 성과를 이야기", value: "studious" },
      { text: "모두와 반갑게 인사", value: "popular" },
      { text: "친했던 친구만 만남", value: "quiet" },
      { text: "예전 개그로 분위기 띄움", value: "funny" },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  classmates: string;
  advice: string;
}> = {
  studious: {
    type: "studious",
    title: "모범생 타입",
    emoji: "📚",
    description: "당신은 학창시절의 모범생 캐릭터! 성적도 좋고, 선생님의 신뢰를 받는 학생이었어요.",
    traits: ["성실함", "책임감", "집중력", "계획성"],
    strengths: ["학업 성취", "자기 관리", "목표 의식", "신뢰"],
    classmates: "반장, 부반장, 전교 1등, 도서부장 같은 친구들",
    advice: "공부도 중요하지만 추억도 소중해요. 균형을 찾아보세요!",
  },
  popular: {
    type: "popular",
    title: "인싸 타입",
    emoji: "🌟",
    description: "당신은 학창시절의 인기인 캐릭터! 친구가 많고 학교생활을 즐겁게 했어요.",
    traits: ["사교성", "리더십", "친화력", "활발함"],
    strengths: ["대인관계", "소통 능력", "팀워크", "적응력"],
    classmates: "반장, 회장, 체육부장, 방송부 같은 친구들",
    advice: "넓은 인맥도 좋지만 깊은 우정도 가꿔보세요!",
  },
  quiet: {
    type: "quiet",
    title: "조용한 아이 타입",
    emoji: "🌙",
    description: "당신은 학창시절의 조용한 캐릭터! 소수의 친구와 깊은 우정을 나눴어요.",
    traits: ["내향적", "사려깊음", "독립적", "관찰력"],
    strengths: ["깊은 사고", "집중력", "진정한 우정", "자기 세계"],
    classmates: "도서부, 문예부, 조용한 친구 몇 명",
    advice: "조용함은 강점이에요. 가끔은 목소리를 내도 좋아요!",
  },
  funny: {
    type: "funny",
    title: "개그맨 타입",
    emoji: "😂",
    description: "당신은 학창시절의 개그 캐릭터! 반의 분위기 메이커로 모두를 웃게 했어요.",
    traits: ["유머감각", "즉흥성", "창의력", "낙천적"],
    strengths: ["분위기 메이커", "스트레스 해소", "인기", "창의성"],
    classmates: "방송부, 연극부, 반에서 인기있는 친구들",
    advice: "유머는 큰 재능이에요. 때로는 진지한 모습도 보여주세요!",
  },
};

export function calculateResult(answers: string[]): string {
  const scores: Record<string, number> = {
    studious: 0,
    popular: 0,
    quiet: 0,
    funny: 0,
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
