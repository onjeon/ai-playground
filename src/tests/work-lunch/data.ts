// work-lunch 테스트 데이터
export const worklunchTest = {
  id: 'work-lunch',
  title: '직장인 점심 테스트',
  description: '점심시간 보내는 방법으로 알아보는 당신의 성격! 오늘 점심 뭐 먹을까요?',
  questions: [
    {
      id: 1,
      text: '점심시간이 되면 가장 먼저?',
      options: [
        { text: '"점심 뭐 먹을까?" 동료들한테 물어봄', type: 'social' },
        { text: '오늘 뭐 먹을지 이미 정해놨음', type: 'planner' },
        { text: '혼자 조용히 먹으러 감', type: 'solo' },
        { text: '일 마무리하고 늦게 먹음', type: 'busy' }
      ]
    },
    {
      id: 2,
      text: '점심 메뉴 선택 기준은?',
      options: [
        { text: '다 같이 먹을 수 있는 것', type: 'social' },
        { text: '영양, 가격, 효율 고려', type: 'planner' },
        { text: '그날 먹고 싶은 것', type: 'solo' },
        { text: '빠르게 먹을 수 있는 것', type: 'busy' }
      ]
    },
    {
      id: 3,
      text: '점심 먹는 장소 선호는?',
      options: [
        { text: '동료들과 함께 식당에서', type: 'social' },
        { text: '늘 가던 단골집', type: 'planner' },
        { text: '혼밥하기 좋은 조용한 곳', type: 'solo' },
        { text: '사무실에서 간단히', type: 'busy' }
      ]
    },
    {
      id: 4,
      text: '"오늘 점심 같이 먹자"라고 하면?',
      options: [
        { text: '좋아! 어디 갈까?', type: 'social' },
        { text: '오늘은 계획이 있는데... 내일?', type: 'planner' },
        { text: '아 오늘은 좀... 다음에', type: 'solo' },
        { text: '오늘 바빠서 빠르게 먹어야 해', type: 'busy' }
      ]
    },
    {
      id: 5,
      text: '점심 먹으면서 주로 하는 대화는?',
      options: [
        { text: '회사 이야기, 일상 수다', type: 'social' },
        { text: '유용한 정보 공유', type: 'planner' },
        { text: '조용히 먹거나 혼자 유튜브', type: 'solo' },
        { text: '대화 없이 빠르게 먹음', type: 'busy' }
      ]
    },
    {
      id: 6,
      text: '점심시간 후 남는 시간은?',
      options: [
        { text: '커피 마시며 동료와 담소', type: 'social' },
        { text: '산책이나 개인 시간', type: 'planner' },
        { text: '조용히 휴식', type: 'solo' },
        { text: '바로 업무 복귀', type: 'busy' }
      ]
    },
    {
      id: 7,
      text: '점심값에 대한 생각은?',
      options: [
        { text: '같이 먹으면 돈이 얼마든', type: 'social' },
        { text: '예산 내에서 효율적으로', type: 'planner' },
        { text: '먹고 싶은 거 먹으면 됨', type: 'solo' },
        { text: '싸고 빠른 게 최고', type: 'busy' }
      ]
    },
    {
      id: 8,
      text: '점심 약속이 취소되면?',
      options: [
        { text: '다른 사람 찾아봄', type: 'social' },
        { text: '혼자라도 먹으러 감', type: 'planner' },
        { text: '오히려 좋아, 혼밥 타임', type: 'solo' },
        { text: '일하면서 대충 때움', type: 'busy' }
      ]
    },
    {
      id: 9,
      text: '회식이 있는 날 점심은?',
      options: [
        { text: '가볍게 먹고 저녁을 위해 아껴둠', type: 'social' },
        { text: '평소대로 먹음, 저녁도 먹을 수 있음', type: 'planner' },
        { text: '점심이든 저녁이든 내 페이스로', type: 'solo' },
        { text: '점심 거르고 일하다가 저녁만', type: 'busy' }
      ]
    },
    {
      id: 10,
      text: '이상적인 점심시간이란?',
      options: [
        { text: '동료들과 함께하는 즐거운 시간', type: 'social' },
        { text: '맛있는 음식과 충분한 휴식', type: 'planner' },
        { text: '나만의 조용한 재충전 시간', type: 'solo' },
        { text: '빠르게 해결하고 업무에 집중', type: 'busy' }
      ]
    }
  ],
  results: {
    social: {
      type: '소셜 점심러',
      title: '👥 소셜 점심러',
      description: '점심은 함께! 동료들과의 식사 시간이 하루의 활력소인 사교적인 타입입니다.',
      traits: [
        '사교적인 성격',
        '팀워크를 중시함',
        '소통을 좋아함',
        '관계 형성에 능숙함'
      ],
      advice: '함께하는 점심도 좋지만, 가끔은 혼자만의 시간도 필요해요. 나를 위한 점심도 가져보세요!'
    },
    planner: {
      type: '계획적 식사러',
      title: '📋 계획적 식사러',
      description: '점심도 계획적으로! 건강과 효율을 고려해 알차게 점심시간을 보내는 타입입니다.',
      traits: [
        '계획적인 성격',
        '자기 관리를 잘함',
        '효율을 중시함',
        '건강을 챙기는 편'
      ],
      advice: '계획적인 식사도 좋지만, 가끔은 즉흥적으로 새로운 곳을 탐험해보세요!'
    },
    solo: {
      type: '혼밥 전문가',
      title: '🎧 혼밥 전문가',
      description: '점심은 나만의 시간! 조용히 재충전하며 혼자만의 점심을 즐기는 타입입니다.',
      traits: [
        '독립적인 성격',
        '내향적인 면이 있다',
        '자기 시간을 소중히 여김',
        '에너지 충전이 필요함'
      ],
      advice: '혼밥도 좋지만, 가끔은 동료들과 함께하면 새로운 아이디어나 정보를 얻을 수 있어요!'
    },
    busy: {
      type: '워커홀릭 점심러',
      title: '💼 워커홀릭 점심러',
      description: '점심도 효율적으로! 일에 집중하느라 점심은 빠르게 해결하는 열정적인 타입입니다.',
      traits: [
        '업무에 열정적',
        '효율을 최우선시함',
        '목표 지향적',
        '시간 관리에 철저함'
      ],
      advice: '일도 중요하지만 제대로 된 점심 휴식이 오후 업무 효율을 높여줘요. 점심은 충분히 쉬세요!'
    }
  }
};
