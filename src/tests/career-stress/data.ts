// career-stress 테스트 데이터
export const careerstressTest = {
  id: 'career-stress',
  title: '직장 스트레스 지수 테스트',
  description: '당신의 직장 스트레스 레벨은? 현재 업무 환경에서의 스트레스 정도를 측정해봅니다!',
  questions: [
    {
      id: 1,
      text: '월요일 아침, 출근 생각에 드는 기분은?',
      options: [
        { text: '괜찮아, 새로운 한 주 시작!', type: 'low' },
        { text: '좀 귀찮지만 어쩔 수 없지', type: 'moderate' },
        { text: '벌써부터 피곤하다...', type: 'high' },
        { text: '월요일만 생각하면 우울해', type: 'severe' }
      ]
    },
    {
      id: 2,
      text: '업무 중 상사의 호출에 드는 생각은?',
      options: [
        { text: '무슨 일인지 궁금하다', type: 'low' },
        { text: '약간 긴장되지만 괜찮아', type: 'moderate' },
        { text: '또 뭐지... 불안하다', type: 'high' },
        { text: '심장이 떨린다, 무섭다', type: 'severe' }
      ]
    },
    {
      id: 3,
      text: '퇴근 후 회사 생각이 나는 빈도는?',
      options: [
        { text: '거의 안 남, 칼퇴근 후 해방', type: 'low' },
        { text: '가끔, 중요한 일 있을 때만', type: 'moderate' },
        { text: '자주, 내일 할 일이 걱정됨', type: 'high' },
        { text: '항상, 잠들기 전까지 생각남', type: 'severe' }
      ]
    },
    {
      id: 4,
      text: '업무량에 대한 느낌은?',
      options: [
        { text: '적당해서 여유가 있다', type: 'low' },
        { text: '바쁘지만 감당 가능하다', type: 'moderate' },
        { text: '많아서 늘 쫓기는 느낌', type: 'high' },
        { text: '과부하, 도저히 감당 안 됨', type: 'severe' }
      ]
    },
    {
      id: 5,
      text: '직장 동료들과의 관계는?',
      options: [
        { text: '좋은 편, 친한 동료도 있다', type: 'low' },
        { text: '무난하다, 업무적 관계', type: 'moderate' },
        { text: '불편한 사람이 있다', type: 'high' },
        { text: '갈등이나 스트레스가 많다', type: 'severe' }
      ]
    },
    {
      id: 6,
      text: '일요일 저녁의 기분은?',
      options: [
        { text: '주말 잘 보냈다, 편안하다', type: 'low' },
        { text: '내일 출근 생각에 약간 아쉽다', type: 'moderate' },
        { text: '벌써 월요일이라니 우울하다', type: 'high' },
        { text: '불안하고 잠이 안 온다', type: 'severe' }
      ]
    },
    {
      id: 7,
      text: '현재 일에 대한 보람이나 성취감은?',
      options: [
        { text: '보람을 느끼며 일한다', type: 'low' },
        { text: '가끔 성취감을 느낀다', type: 'moderate' },
        { text: '별로 없다, 그냥 돈벌이', type: 'high' },
        { text: '전혀 없다, 허무하다', type: 'severe' }
      ]
    },
    {
      id: 8,
      text: '직장 때문에 건강에 영향을 받는다면?',
      options: [
        { text: '특별히 없다', type: 'low' },
        { text: '가끔 피곤하거나 두통', type: 'moderate' },
        { text: '수면 문제나 소화불량 있음', type: 'high' },
        { text: '심각한 건강 이상을 느낌', type: 'severe' }
      ]
    },
    {
      id: 9,
      text: '이직에 대한 생각은?',
      options: [
        { text: '당장은 없다, 만족스럽다', type: 'low' },
        { text: '가끔 생각해보는 정도', type: 'moderate' },
        { text: '자주 생각한다', type: 'high' },
        { text: '당장이라도 그만두고 싶다', type: 'severe' }
      ]
    },
    {
      id: 10,
      text: '현재 직장 생활을 한 단어로 표현하면?',
      options: [
        { text: '안정', type: 'low' },
        { text: '보통', type: 'moderate' },
        { text: '버티기', type: 'high' },
        { text: '지옥', type: 'severe' }
      ]
    }
  ],
  results: {
    low: {
      type: '안정적 직장인',
      title: '💚 안정적 직장인',
      description: '스트레스 관리를 잘 하고 있어요! 직장 생활에 대체로 만족하며 건강한 마인드를 유지하고 있습니다.',
      traits: [
        '일과 삶의 균형이 좋다',
        '스트레스 관리 능력이 있다',
        '긍정적인 마인드',
        '직장에서 안정감을 느낀다'
      ],
      advice: '현재 상태를 잘 유지하세요! 가끔 힘들 때는 자신만의 스트레스 해소법으로 관리해주세요.'
    },
    moderate: {
      type: '평범한 직장인',
      title: '💛 평범한 직장인',
      description: '적당한 수준의 스트레스를 경험하고 있어요. 대부분의 직장인이 느끼는 정도입니다.',
      traits: [
        '일반적인 업무 스트레스',
        '때때로 힘든 순간이 있음',
        '그래도 감당 가능한 수준',
        '균형을 찾으려 노력함'
      ],
      advice: '스트레스가 쌓이지 않도록 주기적으로 휴식과 취미 활동을 가져보세요!'
    },
    high: {
      type: '과부하 직장인',
      title: '🟠 과부하 직장인',
      description: '상당한 스트레스를 받고 있어요. 번아웃 징후가 보이니 주의가 필요합니다.',
      traits: [
        '업무로 인한 높은 스트레스',
        '에너지 소진을 느낌',
        '일에 대한 의욕 저하',
        '휴식이 필요한 상태'
      ],
      advice: '지금 상태로는 번아웃이 올 수 있어요. 충분한 휴식을 취하고, 필요하다면 전문가 상담을 고려해보세요.'
    },
    severe: {
      type: '위험 신호',
      title: '🔴 위험 신호',
      description: '매우 높은 스트레스 상태입니다. 현재 상황이 건강에 심각한 영향을 미칠 수 있어요.',
      traits: [
        '극심한 업무 스트레스',
        '신체적/정신적 증상 동반',
        '심각한 번아웃 상태',
        '즉각적인 조치가 필요'
      ],
      advice: '전문가 상담이 필요한 상태입니다. 휴가를 내거나, 심리 상담을 받아보세요. 건강이 최우선입니다!'
    }
  }
};
