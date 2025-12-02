// new-year-resolution 테스트 데이터
export const newyearresolutionTest = {
  id: 'new-year-resolution',
  title: '새해 목표 유형 테스트',
  description: '새해 목표를 세우는 스타일로 알아보는 성격! 당신은 어떤 타입인가요?',
  questions: [
    {
      id: 1,
      text: '새해 목표를 세우는 시기는?',
      options: [
        { text: '12월부터 계획 중', type: 'planner' },
        { text: '새해 첫날에 생각해봄', type: 'hopeful' },
        { text: '생각나면 그때 세움', type: 'flexible' },
        { text: '새해 목표 같은 건 안 세움', type: 'realistic' }
      ]
    },
    {
      id: 2,
      text: '새해 목표의 개수는?',
      options: [
        { text: '구체적으로 10개 이상 리스트업', type: 'planner' },
        { text: '3-5개 정도', type: 'hopeful' },
        { text: '하나만 정해도 대단한 거지', type: 'flexible' },
        { text: '목표 개수? 그런 건 없음', type: 'realistic' }
      ]
    },
    {
      id: 3,
      text: '목표 달성을 위한 계획은?',
      options: [
        { text: '월별, 주별로 세부 계획까지', type: 'planner' },
        { text: '대충의 방향만 정해둠', type: 'hopeful' },
        { text: '일단 시작하고 보는 스타일', type: 'flexible' },
        { text: '계획? 그런 거 없음', type: 'realistic' }
      ]
    },
    {
      id: 4,
      text: '작년 새해 목표 달성률은?',
      options: [
        { text: '70% 이상 달성!', type: 'planner' },
        { text: '절반 정도?', type: 'hopeful' },
        { text: '뭘 세웠는지 기억이...', type: 'flexible' },
        { text: '안 세웠으니 달성률도 없음', type: 'realistic' }
      ]
    },
    {
      id: 5,
      text: '주로 세우는 목표 유형은?',
      options: [
        { text: '구체적이고 측정 가능한 것', type: 'planner' },
        { text: '자기계발, 건강 등 일반적인 것', type: 'hopeful' },
        { text: '그때그때 필요한 것', type: 'flexible' },
        { text: '목표보다 그냥 흘러가는 대로', type: 'realistic' }
      ]
    },
    {
      id: 6,
      text: '목표를 어디에 적어두나요?',
      options: [
        { text: '다이어리, 앱 등에 기록', type: 'planner' },
        { text: '폰 메모나 마음속에', type: 'hopeful' },
        { text: '굳이 안 적음', type: 'flexible' },
        { text: '적을 목표가 없음', type: 'realistic' }
      ]
    },
    {
      id: 7,
      text: '2월쯤 새해 목표 상태는?',
      options: [
        { text: '계획대로 진행 중', type: 'planner' },
        { text: '조금 흐지부지...', type: 'hopeful' },
        { text: '뭐였더라...?', type: 'flexible' },
        { text: '원래 없었음', type: 'realistic' }
      ]
    },
    {
      id: 8,
      text: '목표를 달성하지 못하면?',
      options: [
        { text: '분석하고 수정해서 재도전', type: 'planner' },
        { text: '아쉽지만 내년에 다시', type: 'hopeful' },
        { text: '그럴 수 있지 뭐', type: 'flexible' },
        { text: '안 세웠으니 실패도 없음', type: 'realistic' }
      ]
    },
    {
      id: 9,
      text: '다른 사람들의 새해 목표를 보면?',
      options: [
        { text: '참고해서 내 목표에 반영', type: 'planner' },
        { text: '나도 해볼까? 동기부여됨', type: 'hopeful' },
        { text: '대단하다~ 하고 넘김', type: 'flexible' },
        { text: '별 관심 없음', type: 'realistic' }
      ]
    },
    {
      id: 10,
      text: '새해 목표에 대한 당신의 생각은?',
      options: [
        { text: '성장을 위한 필수 도구', type: 'planner' },
        { text: '새로운 시작의 의미', type: 'hopeful' },
        { text: '있으면 좋고 없어도 그만', type: 'flexible' },
        { text: '굳이 새해에 세울 필요 없음', type: 'realistic' }
      ]
    }
  ],
  results: {
    planner: {
      type: '철저한 계획러',
      title: '📋 철저한 계획러',
      description: '목표도 완벽하게! 체계적인 계획으로 새해 목표를 달성하는 타입입니다.',
      traits: [
        '체계적이고 계획적',
        '목표 지향적',
        '자기 관리를 잘함',
        '성취욕이 강함'
      ],
      advice: '계획은 훌륭하지만, 유연성도 필요해요. 계획대로 안 돼도 자책하지 마세요!'
    },
    hopeful: {
      type: '희망 가득 드리머',
      title: '✨ 희망 가득 드리머',
      description: '새해엔 새로운 나! 희망을 품고 목표를 세우는 낭만적인 타입입니다.',
      traits: [
        '긍정적인 마인드',
        '새로운 시작을 좋아함',
        '동기부여를 받으면 행동',
        '가끔 작심삼일'
      ],
      advice: '꿈은 크게, 실행은 작게! 작은 것부터 시작하면 성취감을 느끼며 목표에 다가갈 수 있어요.'
    },
    flexible: {
      type: '유연한 자유인',
      title: '🌊 유연한 자유인',
      description: '목표? 상황 봐서! 유연하게 살아가는 자유로운 영혼의 타입입니다.',
      traits: [
        '자유로운 성격',
        '즉흥적인 면이 있음',
        '스트레스를 덜 받음',
        '순간을 즐기는 편'
      ],
      advice: '유연함은 장점이지만, 가끔은 작은 목표를 세워보는 것도 성장에 도움이 돼요!'
    },
    realistic: {
      type: '현실주의자',
      title: '🧐 현실주의자',
      description: '새해라고 특별할 것 없지! 현실을 직시하며 살아가는 실용적인 타입입니다.',
      traits: [
        '현실적인 사고',
        '불필요한 기대를 안 함',
        '자기 페이스로 삶',
        '형식에 얽매이지 않음'
      ],
      advice: '현실적인 것도 좋지만, 가끔은 작은 목표로 도전해보는 것도 재미있을 수 있어요!'
    }
  }
};
