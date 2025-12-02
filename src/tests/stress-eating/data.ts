// stress-eating 테스트 데이터
export const stressEating = {
  id: 'stress-eating',
  title: '스트레스 식습관 테스트',
  description: '스트레스 받으면 먹나요? 굶나요? 당신의 감정적 식습관을 분석해보세요!',
  questions: [
    {
      id: 1,
      text: '스트레스 받으면 식욕이?',
      options: [
        { text: '폭발! 뭐든 먹고 싶어', type: 'overeater' },
        { text: '사라짐, 입맛이 없어', type: 'undereater' },
        { text: '특정 음식만 당김', type: 'comfort' },
        { text: '변함없음', type: 'stable' }
      ]
    },
    {
      id: 2,
      text: '힘들 때 가장 먹고 싶은 것은?',
      options: [
        { text: '치킨, 피자, 라면... 다!', type: 'overeater' },
        { text: '아무것도...', type: 'undereater' },
        { text: '단 거! 초콜릿, 아이스크림', type: 'comfort' },
        { text: '평소 먹던 거', type: 'stable' }
      ]
    },
    {
      id: 3,
      text: '감정이 격해졌을 때?',
      options: [
        { text: '냉장고를 털게 됨', type: 'overeater' },
        { text: '밥 먹을 생각이 안 남', type: 'undereater' },
        { text: '위로 음식이 필요함', type: 'comfort' },
        { text: '식사는 식사대로 함', type: 'stable' }
      ]
    },
    {
      id: 4,
      text: '야근/시험 기간 식습관은?',
      options: [
        { text: '폭식, 배달 앱 풀가동', type: 'overeater' },
        { text: '거의 못 먹음', type: 'undereater' },
        { text: '간식으로 버팀', type: 'comfort' },
        { text: '규칙적으로 챙겨 먹음', type: 'stable' }
      ]
    },
    {
      id: 5,
      text: '먹고 나서 기분은?',
      options: [
        { text: '잠깐 좋다가 후회', type: 'overeater' },
        { text: '먹어야 하는데... 죄책감', type: 'undereater' },
        { text: '위로받은 느낌', type: 'comfort' },
        { text: '그냥 배부름', type: 'stable' }
      ]
    },
    {
      id: 6,
      text: '감정과 음식의 관계는?',
      options: [
        { text: '먹는 게 스트레스 해소', type: 'overeater' },
        { text: '감정이 식욕을 막음', type: 'undereater' },
        { text: '특정 음식이 위로가 됨', type: 'comfort' },
        { text: '별로 연결 안 됨', type: 'stable' }
      ]
    },
    {
      id: 7,
      text: '슬플 때 먹는 것은?',
      options: [
        { text: '양으로 승부! 많이 먹음', type: 'overeater' },
        { text: '목이 막혀서 못 먹음', type: 'undereater' },
        { text: '소울푸드, 추억의 음식', type: 'comfort' },
        { text: '평소대로', type: 'stable' }
      ]
    },
    {
      id: 8,
      text: '화났을 때는?',
      options: [
        { text: '먹으면서 풀림', type: 'overeater' },
        { text: '밥 안 넘어감', type: 'undereater' },
        { text: '매운 거나 강한 맛', type: 'comfort' },
        { text: '음식이랑 상관없음', type: 'stable' }
      ]
    },
    {
      id: 9,
      text: '다이어트 실패 원인은?',
      options: [
        { text: '스트레스 폭식', type: 'overeater' },
        { text: '오히려 스트레스로 빠짐', type: 'undereater' },
        { text: '위로 음식의 유혹', type: 'comfort' },
        { text: '다이어트 해본 적 없음', type: 'stable' }
      ]
    },
    {
      id: 10,
      text: '이상적인 식습관은?',
      options: [
        { text: '감정과 분리해서 먹기', type: 'overeater' },
        { text: '힘들어도 잘 챙겨 먹기', type: 'undereater' },
        { text: '건강한 위로 음식 찾기', type: 'comfort' },
        { text: '지금 그대로 유지', type: 'stable' }
      ]
    }
  ],
  results: {
    overeater: {
      type: '스트레스 폭식형',
      title: '🍕 스트레스 폭식형',
      description: '스트레스 = 먹방! 감정을 음식으로 해소하는 타입.',
      traits: ['감정적 폭식', '음식 = 위로', '후회 패턴', '고열량 선호'],
      eatingPattern: '폭식형',
      advice: '먹기 전에 "진짜 배고픈 건가?" 물어보세요. 5분 기다리고 그래도 먹고 싶으면 소량만. 다른 해소법도 찾아보세요!'
    },
    undereater: {
      type: '스트레스 거식형',
      title: '🍃 스트레스 거식형',
      description: '스트레스 받으면 입맛이 사라지는 타입. 먹어야 하는데...!',
      traits: ['식욕 감소', '목 막힘', '체중 감소', '에너지 저하'],
      eatingPattern: '거식형',
      advice: '스트레스 때도 영양은 필요해요! 작게라도 먹을 수 있는 걸 찾아보세요. 스무디나 간식이라도요.'
    },
    comfort: {
      type: '컴포트푸드형',
      title: '🍫 컴포트푸드형',
      description: '특정 위로 음식이 있는 당신! 소울푸드로 마음을 달래요.',
      traits: ['특정 음식 선호', '위로 추구', '추억의 맛', '단 음식 경향'],
      eatingPattern: '위로형',
      advice: '위로 음식은 괜찮지만, 건강한 대안도 찾아보세요. 과일이나 다크 초콜릿은 어때요?'
    },
    stable: {
      type: '안정적 식습관형',
      title: '⚖️ 안정적 식습관형',
      description: '감정과 식사가 분리된 당신! 건강한 식습관의 소유자.',
      traits: ['감정/식사 분리', '규칙적 식사', '안정적', '건강한 관계'],
      eatingPattern: '안정형',
      advice: '훌륭한 식습관이에요! 이 건강한 패턴을 유지하세요.'
    }
  }
};
