// 반려동물로 보는 성격 테스트 데이터
export const petPersonalityTest = {
  id: 'pet-personality',
  title: '반려동물로 보는 성격 테스트',
  description: '당신이 좋아하는 반려동물로 성격을 분석합니다! 강아지, 고양이, 햄스터, 물고기 중 당신의 성격과 맞는 반려동물은?',
  questions: [
    {
      id: 1,
      text: '집에 혼자 있을 때 선호하는 것은?',
      options: [
        { id: 'a', text: '누군가와 함께 놀고 싶다', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '혼자만의 시간이 좋다', score: { dog: 0, cat: 3, hamster: 1, fish: 1 } },
        { id: 'c', text: '작은 활동을 하며 시간 보내기', score: { dog: 0, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '조용히 명상하거나 쉬기', score: { dog: 0, cat: 1, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 2,
      text: '사람들과의 관계에서 나는?',
      options: [
        { id: 'a', text: '모든 사람과 친해지고 싶다', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '선택적으로 친해진다', score: { dog: 0, cat: 3, hamster: 1, fish: 0 } },
        { id: 'c', text: '소수의 사람과 깊게', score: { dog: 1, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '혼자가 편하다', score: { dog: 0, cat: 1, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 3,
      text: '에너지 레벨은?',
      options: [
        { id: 'a', text: '항상 활발하고 에너지 넘침', score: { dog: 3, cat: 0, hamster: 1, fish: 0 } },
        { id: 'b', text: '때에 따라 다름', score: { dog: 1, cat: 3, hamster: 1, fish: 0 } },
        { id: 'c', text: '작고 꾸준한 활동', score: { dog: 0, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '차분하고 느긋함', score: { dog: 0, cat: 1, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 4,
      text: '스트레스를 받으면?',
      options: [
        { id: 'a', text: '사람들과 어울리며 풀어', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '혼자만의 공간에서 쉬어', score: { dog: 0, cat: 3, hamster: 1, fish: 1 } },
        { id: 'c', text: '무언가에 몰두해', score: { dog: 0, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '조용히 명상하거나 멍때려', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 5,
      text: '애정 표현 방식은?',
      options: [
        { id: 'a', text: '적극적이고 표현적', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '은근하게 티내기', score: { dog: 0, cat: 3, hamster: 1, fish: 0 } },
        { id: 'c', text: '작은 선물이나 행동으로', score: { dog: 1, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '함께 있는 것으로 충분', score: { dog: 0, cat: 1, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 6,
      text: '새로운 환경에서 나는?',
      options: [
        { id: 'a', text: '바로 적응하고 탐험한다', score: { dog: 3, cat: 1, hamster: 0, fish: 0 } },
        { id: 'b', text: '관찰하다가 천천히 적응', score: { dog: 0, cat: 3, hamster: 1, fish: 0 } },
        { id: 'c', text: '안전한 공간을 먼저 찾는다', score: { dog: 0, cat: 1, hamster: 3, fish: 1 } },
        { id: 'd', text: '환경 변화가 별로 안 좋다', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 7,
      text: '일상의 루틴에 대해?',
      options: [
        { id: 'a', text: '루틴보다 즉흥이 좋다', score: { dog: 3, cat: 1, hamster: 0, fish: 0 } },
        { id: 'b', text: '내 페이스대로 살고 싶다', score: { dog: 0, cat: 3, hamster: 0, fish: 1 } },
        { id: 'c', text: '규칙적인 루틴이 좋다', score: { dog: 1, cat: 0, hamster: 3, fish: 1 } },
        { id: 'd', text: '변화 없이 평온한 게 최고', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 8,
      text: '관심을 받는 것에 대해?',
      options: [
        { id: 'a', text: '관심 받는 게 좋다!', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '내가 원할 때만', score: { dog: 0, cat: 3, hamster: 1, fish: 0 } },
        { id: 'c', text: '조용히 지켜봐주면 좋겠다', score: { dog: 0, cat: 1, hamster: 3, fish: 1 } },
        { id: 'd', text: '관심 없이 그냥 있고 싶다', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 9,
      text: '음식에 대한 태도는?',
      options: [
        { id: 'a', text: '뭐든 잘 먹는 편', score: { dog: 3, cat: 0, hamster: 1, fish: 0 } },
        { id: 'b', text: '입맛이 까다롭다', score: { dog: 0, cat: 3, hamster: 0, fish: 0 } },
        { id: 'c', text: '조금씩 자주 먹는 편', score: { dog: 0, cat: 1, hamster: 3, fish: 1 } },
        { id: 'd', text: '규칙적으로 정해진 것만', score: { dog: 1, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 10,
      text: '수면 패턴은?',
      options: [
        { id: 'a', text: '활발하게 활동 후 쿨쿨', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '낮에도 자주 낮잠', score: { dog: 0, cat: 3, hamster: 0, fish: 0 } },
        { id: 'c', text: '밤에 활발해짐', score: { dog: 0, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '낮밤 구분 없이 쉬엄쉬엄', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 11,
      text: '갈등 상황에서 나는?',
      options: [
        { id: 'a', text: '바로 화해하고 싶다', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '시간을 갖고 거리를 둔다', score: { dog: 0, cat: 3, hamster: 1, fish: 1 } },
        { id: 'c', text: '피하고 숨고 싶다', score: { dog: 0, cat: 1, hamster: 3, fish: 1 } },
        { id: 'd', text: '별 신경 안 쓴다', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
    {
      id: 12,
      text: '이상적인 하루는?',
      options: [
        { id: 'a', text: '친구들과 바깥에서 놀기', score: { dog: 3, cat: 0, hamster: 0, fish: 0 } },
        { id: 'b', text: '집에서 편하게 쉬기', score: { dog: 0, cat: 3, hamster: 1, fish: 1 } },
        { id: 'c', text: '취미 활동에 몰두하기', score: { dog: 0, cat: 1, hamster: 3, fish: 0 } },
        { id: 'd', text: '아무것도 안 하고 평화롭게', score: { dog: 0, cat: 0, hamster: 0, fish: 3 } },
      ],
    },
  ],
  results: {
    dog: {
      id: 'dog',
      title: '강아지 성격',
      description: '충성스럽고 사교적인 강아지 같은 성격! 사람들과 함께하는 것을 좋아하고, 애정 표현이 적극적입니다.',
      traits: ['사교적', '충성스러움', '활발함', '애정 넘침'],
      emoji: '🐕',
      color: '#D4A574',
    },
    cat: {
      id: 'cat',
      title: '고양이 성격',
      description: '독립적이고 도도한 고양이 같은 성격! 혼자만의 시간을 중요하게 여기고, 선택적으로 관계를 맺습니다.',
      traits: ['독립적', '선택적', '도도함', '자기만의 공간 중시'],
      emoji: '🐱',
      color: '#9B59B6',
    },
    hamster: {
      id: 'hamster',
      title: '햄스터 성격',
      description: '귀엽고 부지런한 햄스터 같은 성격! 작은 것에서 행복을 찾고, 규칙적인 생활을 좋아합니다.',
      traits: ['부지런함', '소소한 행복', '꼼꼼함', '루틴 선호'],
      emoji: '🐹',
      color: '#F39C12',
    },
    fish: {
      id: 'fish',
      title: '물고기 성격',
      description: '평화롭고 차분한 물고기 같은 성격! 고요한 환경을 좋아하고, 자신만의 세계에서 평온함을 추구합니다.',
      traits: ['평화로움', '차분함', '관조적', '안정 추구'],
      emoji: '🐟',
      color: '#3498DB',
    },
  },
};
