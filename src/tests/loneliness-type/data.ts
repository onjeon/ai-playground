// loneliness-type 테스트 데이터
export const lonelinesstypeTest = {
  id: 'loneliness-type',
  title: '외로움 유형 테스트',
  description: '당신이 느끼는 외로움의 종류는? 외로움의 원인을 파악하고 해소 방법을 찾아봅니다.',
  questions: [
    {
      id: 1,
      text: '외로움을 느끼는 순간은 주로 언제인가요?',
      options: [
        { text: '혼자 있을 때, 누군가와 함께하고 싶을 때', type: 'social' },
        { text: '사람들 사이에서도 소외감을 느낄 때', type: 'emotional' },
        { text: '내 마음을 이해해주는 사람이 없다고 느낄 때', type: 'deep' },
        { text: '삶의 의미나 방향을 잃었다고 느낄 때', type: 'existential' }
      ]
    },
    {
      id: 2,
      text: '친구들과 함께 있어도 외로움을 느낀 적 있나요?',
      options: [
        { text: '거의 없음, 함께면 괜찮음', type: 'social' },
        { text: '가끔, 내가 겉도는 느낌', type: 'emotional' },
        { text: '자주, 진짜 나를 모르는 것 같음', type: 'deep' },
        { text: '늘, 근본적으로 다른 느낌', type: 'existential' }
      ]
    },
    {
      id: 3,
      text: '외로울 때 가장 원하는 것은?',
      options: [
        { text: '그냥 옆에 누군가 있었으면', type: 'social' },
        { text: '나를 이해해주는 사람', type: 'emotional' },
        { text: '깊은 대화를 나눌 수 있는 사람', type: 'deep' },
        { text: '삶의 의미를 찾는 것', type: 'existential' }
      ]
    },
    {
      id: 4,
      text: '외로움을 해소하기 위해 주로 하는 행동은?',
      options: [
        { text: '사람들에게 연락하거나 모임 나감', type: 'social' },
        { text: 'SNS를 보거나 콘텐츠 소비', type: 'emotional' },
        { text: '글을 쓰거나 혼자 생각에 잠김', type: 'deep' },
        { text: '철학적인 책/영상 또는 자기성찰', type: 'existential' }
      ]
    },
    {
      id: 5,
      text: '"진정한 친구"가 몇 명이나 있다고 생각하나요?',
      options: [
        { text: '많음, 친구들이 있어서 다행', type: 'social' },
        { text: '몇 명 있지만 가끔 의문', type: 'emotional' },
        { text: '거의 없음, 진짜 나를 아는 사람이 드뭄', type: 'deep' },
        { text: '모르겠음, 친구의 정의 자체가 모호', type: 'existential' }
      ]
    },
    {
      id: 6,
      text: '밤에 잠들기 전 자주 드는 생각은?',
      options: [
        { text: '내일 누구 만나지?', type: 'social' },
        { text: '나를 좋아하는 사람이 있을까?', type: 'emotional' },
        { text: '나를 진짜 이해하는 사람이 있을까?', type: 'deep' },
        { text: '내 삶의 의미는 뭘까?', type: 'existential' }
      ]
    },
    {
      id: 7,
      text: 'SNS를 보면서 느끼는 감정은?',
      options: [
        { text: '나도 같이 하고 싶다, 부러움', type: 'social' },
        { text: '나만 빠진 것 같은 소외감', type: 'emotional' },
        { text: '겉으로만 행복해 보인다는 회의감', type: 'deep' },
        { text: '이게 다 무슨 의미가 있나 허무함', type: 'existential' }
      ]
    },
    {
      id: 8,
      text: '연인이 있어도 외로움을 느낀 적 있나요?',
      options: [
        { text: '없음, 연인이 있으면 괜찮음', type: 'social' },
        { text: '가끔, 충분히 사랑받는지 불안', type: 'emotional' },
        { text: '자주, 영혼까지 연결된 느낌이 안 듦', type: 'deep' },
        { text: '늘, 연인 유무와 관계없는 외로움', type: 'existential' }
      ]
    },
    {
      id: 9,
      text: '외로움에 대한 당신의 생각은?',
      options: [
        { text: '사람 만나면 해결됨', type: 'social' },
        { text: '나를 인정해주면 나아질 것', type: 'emotional' },
        { text: '깊은 연결이 필요함', type: 'deep' },
        { text: '인간의 근본적인 조건인 것 같음', type: 'existential' }
      ]
    },
    {
      id: 10,
      text: '가장 공감되는 문장은?',
      options: [
        { text: '"혼자 밥 먹기 싫어"', type: 'social' },
        { text: '"나를 좋아해주는 사람이 있을까"', type: 'emotional' },
        { text: '"아무도 진짜 나를 모르는 것 같아"', type: 'deep' },
        { text: '"이 모든 게 무슨 의미가 있지?"', type: 'existential' }
      ]
    }
  ],
  results: {
    social: {
      type: '사회적 외로움',
      title: '👥 사회적 외로움',
      description: '함께할 사람이 필요한 타입! 물리적인 만남과 교류가 부족할 때 외로움을 느끼는 유형입니다.',
      characteristics: [
        '혼자 있는 시간이 힘듦',
        '사람들과 함께 있으면 해소됨',
        '새로운 만남에 적극적',
        '소셜 활동이 에너지원'
      ],
      cause: '사회적 교류의 부족, 물리적 고립',
      solution: '모임 참여, 새로운 사람 만나기, 취미 동아리',
      advice: '사람을 만나세요! 소모임, 동아리, 봉사활동 등 새로운 연결고리를 찾아보세요.'
    },
    emotional: {
      type: '정서적 외로움',
      title: '💔 정서적 외로움',
      description: '인정과 사랑이 필요한 타입! 함께 있어도 감정적 연결이 부족하면 외로움을 느끼는 유형입니다.',
      characteristics: [
        '사람들 사이에서도 소외감',
        '나를 좋아하는지 불안함',
        '인정받고 싶은 욕구',
        '거절에 민감함'
      ],
      cause: '감정적 연결의 부족, 인정 욕구 미충족',
      solution: '자존감 강화, 신뢰 관계 구축',
      advice: '먼저 자신을 인정해주세요. 외부의 인정보다 내면의 안정이 먼저예요.'
    },
    deep: {
      type: '깊은 외로움',
      title: '🌊 깊은 외로움',
      description: '영혼의 연결을 원하는 타입! 표면적 관계로는 채워지지 않는 깊은 외로움을 느끼는 유형입니다.',
      characteristics: [
        '피상적 관계에 만족 못함',
        '진정한 이해를 갈망',
        '깊은 대화를 원함',
        '내면 세계가 풍부함'
      ],
      cause: '진정한 연결의 부족, 이해받지 못하는 느낌',
      solution: '깊은 대화가 가능한 관계 찾기, 자기 표현',
      advice: '당신의 깊이를 이해해줄 사람은 분명 있어요. 먼저 마음을 열어보세요.'
    },
    existential: {
      type: '실존적 외로움',
      title: '🌌 실존적 외로움',
      description: '삶의 의미를 찾는 타입! 사람의 유무와 관계없이 근본적인 고독을 느끼는 유형입니다.',
      characteristics: [
        '삶의 의미에 대한 고민',
        '근본적인 고독감',
        '철학적 사고',
        '사람으로 채워지지 않는 빈자리'
      ],
      cause: '삶의 의미 부재, 실존적 질문',
      solution: '자기 성찰, 의미 있는 활동, 필요시 전문가 상담',
      advice: '이 외로움은 당신이 깊이 있는 사람이라는 증거예요. 의미를 찾는 여정을 두려워하지 마세요.'
    }
  }
};
