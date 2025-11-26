// 이별 회복 단계 테스트 - 지금 당신의 이별 극복 단계는?

export interface BreakupRecoveryQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface BreakupRecoveryResult {
  type: string;
  title: string;
  emoji: string;
  stage: number;
  percentage: number;
  description: string;
  characteristics: string[];
  emotionalState: string[];
  healingTips: string[];
  doList: string[];
  dontList: string[];
  nextStageHint: string;
  encouragement: string;
}

export const breakupRecoveryTypes = ['denial', 'anger', 'bargaining', 'depression', 'acceptance'] as const;
export type BreakupRecoveryType = typeof breakupRecoveryTypes[number];

export const questions: BreakupRecoveryQuestion[] = [
  {
    id: 1,
    question: "전 애인 SNS를 어떻게 하고 있어?",
    options: [
      { text: "매일 들어가서 확인함. 뭐하나 봐야지", scores: { denial: 3, bargaining: 1 } },
      { text: "차단함. 보기 싫어", scores: { anger: 3 } },
      { text: "가끔 몰래 들어가봄... 후회하면서", scores: { bargaining: 2, depression: 2 } },
      { text: "별로 궁금하지 않음", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 2,
    question: "헤어진 지 얼마나 됐어?",
    options: [
      { text: "아직 실감이 안 남... 진짜 끝난 거 맞아?", scores: { denial: 3 } },
      { text: "끝난 건 알겠는데 너무 화가 나", scores: { anger: 3 } },
      { text: "다시 시작할 수 있지 않을까...", scores: { bargaining: 3 } },
      { text: "끝난 거 알고, 우울해", scores: { depression: 3 } },
    ],
  },
  {
    id: 3,
    question: "공통 친구가 전 애인 얘기를 꺼내면?",
    options: [
      { text: "'걔 요즘 뭐해?' 하고 물어봄", scores: { denial: 2, bargaining: 2 } },
      { text: "'그 얘기 하지 마' 하고 화냄", scores: { anger: 3 } },
      { text: "듣고 싶으면서도 듣기 싫음... 복잡", scores: { bargaining: 2, depression: 1 } },
      { text: "그냥 담담하게 들음", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 4,
    question: "밤에 잠자리에 누우면?",
    options: [
      { text: "아직도 옆에 있는 것 같음", scores: { denial: 3 } },
      { text: "화나서 잠이 안 옴", scores: { anger: 3 } },
      { text: "그때 이렇게 했으면... 후회가 밀려옴", scores: { bargaining: 3 } },
      { text: "그냥 슬퍼서 눈물 남", scores: { depression: 3 } },
    ],
  },
  {
    id: 5,
    question: "전 애인이 연락 오면?",
    options: [
      { text: "바로 받음! 다시 시작하자는 건가?", scores: { denial: 3 } },
      { text: "안 받음. 할 말 없어", scores: { anger: 2, acceptance: 1 } },
      { text: "받을까 말까 한참 고민하다 받음", scores: { bargaining: 3 } },
      { text: "연락 와도 별 감흥 없을 듯", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 6,
    question: "둘이 자주 가던 장소 지나가면?",
    options: [
      { text: "일부러 가서 추억에 잠김", scores: { denial: 3 } },
      { text: "절대 안 감. 피해 다님", scores: { anger: 2, depression: 1 } },
      { text: "지나가면 가슴이 아프고 후회됨", scores: { bargaining: 2, depression: 2 } },
      { text: "그냥 지나갈 수 있음", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 7,
    question: "요즘 전 애인 생각이 얼마나 나?",
    options: [
      { text: "하루 종일 생각남. 머릿속에서 안 떠남", scores: { denial: 3, bargaining: 1 } },
      { text: "생각나면 짜증남", scores: { anger: 3 } },
      { text: "특정 상황에서 문득문득 생각남", scores: { bargaining: 2, depression: 1 } },
      { text: "가끔 생각나지만 금방 잊어버림", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 8,
    question: "친구들이 새로운 만남 주선해주면?",
    options: [
      { text: "아직 준비 안 됐어. 전 애인밖에 안 보여", scores: { denial: 3 } },
      { text: "남자/여자 다 똑같아. 안 만나", scores: { anger: 3 } },
      { text: "만나긴 하는데 자꾸 전 애인이랑 비교하게 됨", scores: { bargaining: 3 } },
      { text: "새로운 만남도 좋지~", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 9,
    question: "헤어진 이유를 생각하면?",
    options: [
      { text: "왜 헤어졌는지 아직도 이해 안 됨", scores: { denial: 3 } },
      { text: "100% 상대방 잘못. 내 탓 아님", scores: { anger: 3 } },
      { text: "내가 이렇게만 했어도... 자책하게 됨", scores: { bargaining: 3 } },
      { text: "서로 안 맞았던 거라고 이해함", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 10,
    question: "전 애인과의 사진/물건은?",
    options: [
      { text: "다 그대로 있음. 버릴 수 없어", scores: { denial: 3 } },
      { text: "다 버렸거나 태워버림", scores: { anger: 3 } },
      { text: "버릴까 말까 고민 중... 아직은 못 버림", scores: { bargaining: 2, depression: 2 } },
      { text: "정리해서 보관하거나 처분함", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 11,
    question: "혼자 있을 때 기분은?",
    options: [
      { text: "실감이 안 나고 멍함", scores: { denial: 3 } },
      { text: "억울하고 분함", scores: { anger: 3 } },
      { text: "공허하고 우울함", scores: { depression: 3 } },
      { text: "나쁘지 않음. 혼자도 괜찮아", scores: { acceptance: 3 } },
    ],
  },
  {
    id: 12,
    question: "지금 나에게 가장 필요한 건?",
    options: [
      { text: "전 애인의 연락", scores: { denial: 3 } },
      { text: "복수? 아니면 시원하게 말할 기회", scores: { anger: 3 } },
      { text: "시간... 그냥 시간이 필요해", scores: { bargaining: 1, depression: 2 } },
      { text: "나를 위한 새로운 시작", scores: { acceptance: 3 } },
    ],
  },
];

export const results: Record<BreakupRecoveryType, BreakupRecoveryResult> = {
  denial: {
    type: 'denial',
    title: '부정의 단계',
    emoji: '🙈',
    stage: 1,
    percentage: 10,
    description: '아직 이별을 받아들이지 못하고 있어요. "정말 끝난 거 맞아?" "곧 연락 오겠지" 하는 마음이 크시죠. 이별의 충격이 너무 커서 현실을 인정하기 어려운 단계입니다.',
    characteristics: [
      '이별이 실감나지 않음',
      '상대가 돌아올 거라고 믿음',
      '모든 것이 꿈 같음',
      '일상이 멈춘 느낌',
    ],
    emotionalState: [
      '혼란스러움',
      '멍한 느낌',
      '불안함',
      '희망과 절망 사이',
    ],
    healingTips: [
      '현실을 천천히 받아들이세요. 시간이 필요해요',
      '억지로 빨리 극복하려고 하지 마세요',
      '감정을 억누르지 말고 느끼는 대로 표현하세요',
      '신뢰할 수 있는 사람에게 마음을 터놓으세요',
    ],
    doList: [
      '일기 쓰기로 감정 정리하기',
      '충분히 슬퍼하기',
      '가까운 친구와 시간 보내기',
      '규칙적인 생활 유지하기',
    ],
    dontList: [
      '전 애인에게 연락하기',
      '혼자서 계속 곱씹기',
      '술로 감정 해결하기',
      '새로운 연애로 덮으려 하기',
    ],
    nextStageHint: '이별을 인정하기 시작하면 분노의 감정이 올라올 수 있어요. 그것도 자연스러운 과정입니다.',
    encouragement: '지금은 믿기 어렵겠지만, 당신은 이 아픔을 이겨낼 힘이 있어요. 천천히, 하루하루 버텨주세요.',
  },
  anger: {
    type: 'anger',
    title: '분노의 단계',
    emoji: '😤',
    stage: 2,
    percentage: 30,
    description: '이별의 현실을 받아들이기 시작하면서, 화가 나고 억울한 감정이 폭발하는 단계예요. "어떻게 나한테 이럴 수 있어?" 하는 마음이 크죠. 이 분노는 자연스러운 거예요.',
    characteristics: [
      '상대에 대한 분노',
      '억울하고 원망스러움',
      '때로는 자신에게도 화남',
      '세상이 불공평하게 느껴짐',
    ],
    emotionalState: [
      '분노',
      '억울함',
      '배신감',
      '원망',
    ],
    healingTips: [
      '분노를 건강하게 표출하세요 (운동, 글쓰기 등)',
      '화나는 감정을 인정하고 받아들이세요',
      '분노 뒤에 숨은 상처를 들여다보세요',
      '시간이 지나면 분노도 누그러져요',
    ],
    doList: [
      '격한 운동으로 에너지 발산하기',
      '친구에게 시원하게 까기',
      '분노를 글로 쓰고 찢어버리기',
      '내 편이 되어줄 사람과 시간 보내기',
    ],
    dontList: [
      '전 애인에게 화풀이 연락하기',
      'SNS에 저격 글 올리기',
      '복수 계획 세우기',
      '주변 사람들에게 화풀이하기',
    ],
    nextStageHint: '분노가 가라앉으면 "그때 내가 이랬으면..." 하는 후회와 협상의 마음이 올 수 있어요.',
    encouragement: '화가 나는 건 당연해요. 당신의 마음이 다쳤으니까요. 화를 건강하게 풀어내면 한 단계 성장할 수 있어요.',
  },
  bargaining: {
    type: 'bargaining',
    title: '협상의 단계',
    emoji: '🤔',
    stage: 3,
    percentage: 50,
    description: '"그때 내가 이랬으면..." "다시 만나면 이번엔 잘할 수 있어" 하는 생각이 드는 단계예요. 과거로 돌아가고 싶고, 다시 기회를 얻고 싶은 마음이 큽니다.',
    characteristics: [
      '과거를 자주 후회함',
      '가정법으로 생각이 많음',
      '재회를 상상함',
      '자책하는 경향',
    ],
    emotionalState: [
      '후회',
      '죄책감',
      '간절함',
      '불안',
    ],
    healingTips: [
      '과거는 바꿀 수 없다는 걸 받아들이세요',
      '자책은 회복에 도움이 안 돼요',
      '완벽한 관계는 없었다는 걸 기억하세요',
      '앞으로의 나에게 집중하세요',
    ],
    doList: [
      '현재에 집중하는 연습하기',
      '자기 자신을 용서하기',
      '관계의 좋았던 점과 안 좋았던 점 정리하기',
      '나를 위한 시간 갖기',
    ],
    dontList: [
      '전 애인에게 재회 연락하기',
      '"그때 그랬으면" 계속 생각하기',
      '모든 걸 내 탓으로 돌리기',
      '재회 가능성에 매달리기',
    ],
    nextStageHint: '협상이 소용없다는 걸 깨달으면 깊은 슬픔이 찾아올 수 있어요. 그것도 회복의 과정입니다.',
    encouragement: '후회하는 마음은 당신이 그만큼 사랑했다는 증거예요. 하지만 이제는 자신을 위해 앞으로 나아갈 때입니다.',
  },
  depression: {
    type: 'depression',
    title: '우울의 단계',
    emoji: '😢',
    stage: 4,
    percentage: 70,
    description: '이별의 현실을 완전히 받아들이면서 깊은 슬픔과 공허함이 찾아오는 단계예요. 힘들지만, 이 단계를 지나야 진정한 회복이 시작됩니다.',
    characteristics: [
      '깊은 슬픔과 공허함',
      '무기력함',
      '외로움',
      '미래가 막막하게 느껴짐',
    ],
    emotionalState: [
      '슬픔',
      '공허함',
      '외로움',
      '무력감',
    ],
    healingTips: [
      '슬픔을 충분히 느끼세요. 이 과정이 필요해요',
      '혼자 너무 오래 있지 마세요',
      '작은 일상의 즐거움을 찾아보세요',
      '필요하면 전문가의 도움을 받으세요',
    ],
    doList: [
      '햇빛 쬐며 가벼운 산책하기',
      '좋아하는 음식 먹기',
      '친구와 시간 보내기',
      '작은 목표 세우고 성취하기',
    ],
    dontList: [
      '종일 혼자 방에 있기',
      '술이나 약에 의존하기',
      '자해적인 생각하기',
      '모든 사회 활동 거부하기',
    ],
    nextStageHint: '이 슬픔이 조금씩 덜어지면, 새로운 시작을 할 준비가 된 거예요.',
    encouragement: '지금 정말 힘드시죠. 하지만 이 터널의 끝에는 빛이 있어요. 당신은 혼자가 아닙니다.',
  },
  acceptance: {
    type: 'acceptance',
    title: '수용의 단계',
    emoji: '🌱',
    stage: 5,
    percentage: 95,
    description: '이별을 받아들이고 새로운 시작을 준비하는 단계예요. 전 애인에 대한 감정은 정리되었고, 이제 당신 자신의 삶에 집중할 수 있게 되었습니다. 축하해요!',
    characteristics: [
      '이별을 담담하게 받아들임',
      '전 애인을 원망하지 않음',
      '새로운 시작에 열려있음',
      '자신에 대한 이해가 깊어짐',
    ],
    emotionalState: [
      '평온함',
      '희망',
      '자기 수용',
      '감사함',
    ],
    healingTips: [
      '이 경험에서 배운 것을 기억하세요',
      '새로운 목표를 세워보세요',
      '자신을 위한 시간을 충분히 가지세요',
      '준비가 되면 새로운 만남에 열려있어도 좋아요',
    ],
    doList: [
      '새로운 취미나 도전 시작하기',
      '자기 계발에 투자하기',
      '감사한 것들 적어보기',
      '새로운 사람들과 교류하기',
    ],
    dontList: [
      '급하게 새 연애 시작하기',
      '과거 연애 패턴 반복하기',
      '자만하거나 방심하기',
      '다른 사람의 아픔을 무시하기',
    ],
    nextStageHint: '이제 당신은 더 성숙한 사랑을 할 준비가 되었어요.',
    encouragement: '당신은 해냈어요! 이 아픔을 이겨낸 당신은 정말 강한 사람입니다. 앞으로 더 좋은 사랑이 기다리고 있을 거예요.',
  },
};

export function calculateResult(answers: number[]): BreakupRecoveryResult {
  const scores: Record<BreakupRecoveryType, number> = {
    denial: 0,
    anger: 0,
    bargaining: 0,
    depression: 0,
    acceptance: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as BreakupRecoveryType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: BreakupRecoveryType = 'denial';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as BreakupRecoveryType;
    }
  });

  return results[resultType];
}
