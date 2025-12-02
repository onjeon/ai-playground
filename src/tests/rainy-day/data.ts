// rainy-day 테스트 데이터
export const rainydayTest = {
  id: 'rainy-day',
  title: '비 오는 날 테스트',
  description: '비 오는 날 당신의 모습으로 알아보는 성격! 비가 오면 기분이 어떠세요?',
  questions: [
    {
      id: 1,
      text: '아침에 일어났는데 비가 오고 있다면?',
      options: [
        { text: '오 좋다! 비 소리 듣기 좋아', type: 'lover' },
        { text: '약간 우울, 이불 밖으로 나가기 싫음', type: 'melancholy' },
        { text: '우산 챙겨야지, 출근 준비', type: 'practical' },
        { text: '비? 별 상관없음', type: 'neutral' }
      ]
    },
    {
      id: 2,
      text: '비 오는 날 가장 하고 싶은 것은?',
      options: [
        { text: '창밖 보며 차 한 잔', type: 'lover' },
        { text: '이불 속에서 영화 보기', type: 'melancholy' },
        { text: '밀린 일이나 집안일', type: 'practical' },
        { text: '평소랑 똑같이 보냄', type: 'neutral' }
      ]
    },
    {
      id: 3,
      text: '비 오는 날 듣고 싶은 음악은?',
      options: [
        { text: '잔잔한 재즈나 클래식', type: 'lover' },
        { text: '감성적인 발라드', type: 'melancholy' },
        { text: '신나는 음악으로 분위기 전환', type: 'practical' },
        { text: '평소 듣던 것', type: 'neutral' }
      ]
    },
    {
      id: 4,
      text: '비 오는 날 음식으로 생각나는 것은?',
      options: [
        { text: '파전과 막걸리, 감성 한 스푼', type: 'lover' },
        { text: '따뜻한 국물 요리', type: 'melancholy' },
        { text: '그냥 평소 먹던 것', type: 'practical' },
        { text: '음식은 날씨랑 상관없음', type: 'neutral' }
      ]
    },
    {
      id: 5,
      text: '우산을 안 가져왔는데 비가 오면?',
      options: [
        { text: '조금 맞으면서 걸어도 괜찮아', type: 'lover' },
        { text: '아 최악... 하루 망침', type: 'melancholy' },
        { text: '편의점 가서 우산 사야지', type: 'practical' },
        { text: '비 그칠 때까지 어디서 기다림', type: 'neutral' }
      ]
    },
    {
      id: 6,
      text: '비 오는 날 외출해야 한다면?',
      options: [
        { text: '비 맞으며 걷는 것도 운치 있음', type: 'lover' },
        { text: '기분이 더 다운됨', type: 'melancholy' },
        { text: '우산, 레인부츠 완벽 대비', type: 'practical' },
        { text: '그냥 가야지 별수 있나', type: 'neutral' }
      ]
    },
    {
      id: 7,
      text: '장마철이 되면?',
      options: [
        { text: '비 오는 날이 많아서 좋음', type: 'lover' },
        { text: '우울한 날이 길어져서 힘듦', type: 'melancholy' },
        { text: '습도 관리, 빨래 고민', type: 'practical' },
        { text: '원래 그런 계절이니까', type: 'neutral' }
      ]
    },
    {
      id: 8,
      text: '비 소리에 대해?',
      options: [
        { text: 'ASMR 그 자체, 힐링됨', type: 'lover' },
        { text: '감정이 복잡해짐', type: 'melancholy' },
        { text: '소음일 뿐', type: 'practical' },
        { text: '특별히 느끼는 것 없음', type: 'neutral' }
      ]
    },
    {
      id: 9,
      text: '비가 그치고 날이 개면?',
      options: [
        { text: '아쉽기도 함', type: 'lover' },
        { text: '기분이 나아짐', type: 'melancholy' },
        { text: '드디어 빨래 널 수 있다', type: 'practical' },
        { text: '그냥 그렇구나', type: 'neutral' }
      ]
    },
    {
      id: 10,
      text: '비 오는 날에 대한 당신의 생각은?',
      options: [
        { text: '낭만적이고 좋아하는 날씨', type: 'lover' },
        { text: '감성적이지만 우울해지기 쉬움', type: 'melancholy' },
        { text: '불편하지만 어쩔 수 없음', type: 'practical' },
        { text: '그냥 날씨일 뿐', type: 'neutral' }
      ]
    }
  ],
  results: {
    lover: {
      type: '비 러버',
      title: '☔ 비 러버',
      description: '비 오는 날이 좋아! 빗소리와 함께하는 낭만을 아는 감성적인 타입입니다.',
      traits: [
        '감성적인 성격',
        '낭만을 추구함',
        '조용한 시간을 좋아함',
        '예술적 감각이 있을 수 있음'
      ],
      advice: '비 오는 날의 낭만도 좋지만, 건강 관리도 잊지 마세요!'
    },
    melancholy: {
      type: '감성 멜랑꼴리',
      title: '🌧️ 감성 멜랑꼴리',
      description: '비가 오면 감정이 복잡해지는 타입. 예민하고 깊은 감수성을 가지고 있습니다.',
      traits: [
        '감수성이 풍부하다',
        '날씨에 민감함',
        '감정의 깊이가 있음',
        '내향적인 면이 있다'
      ],
      advice: '우울할 때는 억지로 괜찮은 척 안 해도 돼요. 하지만 햇빛을 보면 기분이 나아질 수 있어요!'
    },
    practical: {
      type: '실용적 대응러',
      title: '🌂 실용적 대응러',
      description: '비가 오면 준비하면 돼! 현실적으로 대처하는 실용주의 타입입니다.',
      traits: [
        '현실적인 사고',
        '준비성이 철저함',
        '문제 해결 능력이 좋다',
        '감정보다 이성적'
      ],
      advice: '실용적인 것도 좋지만, 가끔은 비 오는 날의 감성도 즐겨보세요!'
    },
    neutral: {
      type: '무던한 일상러',
      title: '😌 무던한 일상러',
      description: '비가 와도 안 와도 나는 나! 날씨에 흔들리지 않는 안정적인 타입입니다.',
      traits: [
        '감정 기복이 적다',
        '안정적인 성격',
        '외부 요인에 덜 영향받음',
        '담담한 편'
      ],
      advice: '안정적인 건 좋은 장점이에요. 가끔은 계절과 날씨의 변화를 더 느껴보는 것도 좋아요!'
    }
  }
};
