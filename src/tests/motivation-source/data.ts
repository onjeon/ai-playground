// motivation-source 테스트 데이터
export const motivationSource = {
  id: 'motivation-source',
  title: '동기부여 원천 테스트',
  description: '당신은 무엇에 동기부여 받나요? 진짜 움직이게 하는 원동력을 찾아보세요!',
  questions: [
    {
      id: 1,
      text: '열심히 일하게 만드는 가장 큰 이유는?',
      options: [
        { text: '성공과 성취감', type: 'achievement' },
        { text: '돈과 안정적인 삶', type: 'security' },
        { text: '인정과 칭찬', type: 'recognition' },
        { text: '의미와 가치', type: 'purpose' }
      ]
    },
    {
      id: 2,
      text: '힘들 때 버티게 해주는 것은?',
      options: [
        { text: '목표 달성의 비전', type: 'achievement' },
        { text: '해야 할 책임', type: 'security' },
        { text: '나를 지켜보는 사람들', type: 'recognition' },
        { text: '이 일의 의미', type: 'purpose' }
      ]
    },
    {
      id: 3,
      text: '가장 동기부여 되는 순간은?',
      options: [
        { text: '목표를 이뤘을 때', type: 'achievement' },
        { text: '보상을 받았을 때', type: 'security' },
        { text: '칭찬받았을 때', type: 'recognition' },
        { text: '누군가를 도왔을 때', type: 'purpose' }
      ]
    },
    {
      id: 4,
      text: '새로운 도전을 하는 이유는?',
      options: [
        { text: '성장하고 더 나아지고 싶어서', type: 'achievement' },
        { text: '더 나은 조건/환경을 위해', type: 'security' },
        { text: '실력을 인정받고 싶어서', type: 'recognition' },
        { text: '더 의미 있는 일을 하고 싶어서', type: 'purpose' }
      ]
    },
    {
      id: 5,
      text: '포기하고 싶을 때 떠오르는 것은?',
      options: [
        { text: '여기서 포기하면 다 물거품', type: 'achievement' },
        { text: '생활이 불안해질 거야', type: 'security' },
        { text: '다른 사람들이 실망할 거야', type: 'recognition' },
        { text: '이건 해야 하는 일이야', type: 'purpose' }
      ]
    },
    {
      id: 6,
      text: '직업을 선택할 때 가장 중요한 것은?',
      options: [
        { text: '성장 가능성', type: 'achievement' },
        { text: '급여와 안정성', type: 'security' },
        { text: '사회적 지위와 평판', type: 'recognition' },
        { text: '일의 의미와 사회 기여', type: 'purpose' }
      ]
    },
    {
      id: 7,
      text: '운동/자기계발을 하는 이유는?',
      options: [
        { text: '더 나은 내가 되기 위해', type: 'achievement' },
        { text: '건강/미래를 위한 투자', type: 'security' },
        { text: '외모/능력 인정받기 위해', type: 'recognition' },
        { text: '좋은 삶을 위한 필수', type: 'purpose' }
      ]
    },
    {
      id: 8,
      text: '팀 프로젝트에서 가장 동기부여 되는 것은?',
      options: [
        { text: '프로젝트 성공', type: 'achievement' },
        { text: '보상과 평가', type: 'security' },
        { text: '팀원들의 인정', type: 'recognition' },
        { text: '함께 의미 있는 일을 하는 것', type: 'purpose' }
      ]
    },
    {
      id: 9,
      text: '"왜 그렇게 열심히 해?" 질문에?',
      options: [
        { text: '"목표가 있으니까"', type: 'achievement' },
        { text: '"먹고 살아야 하니까"', type: 'security' },
        { text: '"인정받고 싶으니까"', type: 'recognition' },
        { text: '"이게 중요하니까"', type: 'purpose' }
      ]
    },
    {
      id: 10,
      text: '가장 만족스러운 성공은?',
      options: [
        { text: '큰 목표를 이뤘을 때', type: 'achievement' },
        { text: '경제적 안정을 이뤘을 때', type: 'security' },
        { text: '남들에게 인정받을 때', type: 'recognition' },
        { text: '세상에 기여했을 때', type: 'purpose' }
      ]
    }
  ],
  results: {
    achievement: {
      type: '성취 동기형',
      title: '🏆 성취 동기형',
      description: '목표 달성이 당신의 원동력! 성장과 성취에서 에너지를 얻는 타입.',
      traits: ['목표 지향', '성장 추구', '도전 정신', '자기 발전'],
      motivationType: '내적 성취',
      advice: '성취욕은 큰 동력이에요! 하지만 과정도 즐기고, 달성 못해도 자신을 너무 몰아세우지 마세요.'
    },
    security: {
      type: '안정 동기형',
      title: '🏠 안정 동기형',
      description: '안정과 보상이 당신의 원동력! 현실적이고 책임감 있는 타입.',
      traits: ['안정 추구', '현실적', '책임감', '계획적'],
      motivationType: '외적 보상',
      advice: '안정을 추구하는 건 현명해요! 하지만 가끔은 리스크를 감수하면 더 큰 성장이 있을 수도 있어요.'
    },
    recognition: {
      type: '인정 동기형',
      title: '👏 인정 동기형',
      description: '인정과 칭찬이 당신의 원동력! 사회적 평가에서 에너지를 얻는 타입.',
      traits: ['인정 욕구', '사회적 지위 중시', '타인 의식', '성과 지향'],
      motivationType: '사회적 인정',
      advice: '인정받고 싶은 마음은 자연스러워요! 하지만 스스로 인정하는 것도 중요해요. 외부 평가에 너무 의존하지 마세요.'
    },
    purpose: {
      type: '의미 동기형',
      title: '✨ 의미 동기형',
      description: '의미와 가치가 당신의 원동력! 더 큰 목적을 위해 움직이는 타입.',
      traits: ['의미 추구', '가치 중심', '이타적', '장기적 비전'],
      motivationType: '내적 의미',
      advice: '의미를 추구하는 건 아름다워요! 하지만 현실적인 보상도 당신을 지탱해준다는 걸 잊지 마세요.'
    }
  }
};
