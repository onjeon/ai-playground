// anger-trigger 테스트 데이터
export const angertriggerTest = {
  id: 'anger-trigger',
  title: '분노 트리거 테스트',
  description: '당신을 화나게 만드는 것은 무엇인가요? 분노 패턴을 알면 감정 관리가 쉬워져요!',
  questions: [
    {
      id: 1,
      text: '가장 화가 나는 상황은?',
      options: [
        { text: '불공정한 대우를 받을 때', type: 'injustice' },
        { text: '무시당하거나 존중받지 못할 때', type: 'disrespect' },
        { text: '통제할 수 없는 상황일 때', type: 'control' },
        { text: '기대가 어긋났을 때', type: 'expectation' }
      ]
    },
    {
      id: 2,
      text: '이 중 가장 짜증나는 것은?',
      options: [
        { text: '새치기하는 사람', type: 'injustice' },
        { text: '말 끊는 사람', type: 'disrespect' },
        { text: '예고 없이 계획이 바뀌는 것', type: 'control' },
        { text: '약속을 안 지키는 사람', type: 'expectation' }
      ]
    },
    {
      id: 3,
      text: '직장/학교에서 화나는 순간은?',
      options: [
        { text: '내 노력이 인정받지 못할 때', type: 'injustice' },
        { text: '내 의견이 무시될 때', type: 'disrespect' },
        { text: '갑자기 일이 떨어질 때', type: 'control' },
        { text: '다른 사람이 일을 제대로 안 할 때', type: 'expectation' }
      ]
    },
    {
      id: 4,
      text: '화가 났을 때 주로 어떻게 표현해요?',
      options: [
        { text: '논리적으로 따지고 항의', type: 'injustice' },
        { text: '냉전 또는 거리두기', type: 'disrespect' },
        { text: '통제하려고 애씀', type: 'control' },
        { text: '실망감 표현, 잔소리', type: 'expectation' }
      ]
    },
    {
      id: 5,
      text: '관계에서 화나는 포인트는?',
      options: [
        { text: '한쪽만 노력하는 것 같을 때', type: 'injustice' },
        { text: '내 감정을 가볍게 여길 때', type: 'disrespect' },
        { text: '상대가 내 말대로 안 할 때', type: 'control' },
        { text: '기대한 만큼 안 해줄 때', type: 'expectation' }
      ]
    },
    {
      id: 6,
      text: '뉴스 보다가 화나는 것은?',
      options: [
        { text: '약자에 대한 불공정', type: 'injustice' },
        { text: '무례한 발언이나 태도', type: 'disrespect' },
        { text: '비효율적인 시스템', type: 'control' },
        { text: '지켜지지 않는 약속/공약', type: 'expectation' }
      ]
    },
    {
      id: 7,
      text: '분노가 폭발하기 직전 신호는?',
      options: [
        { text: '"이건 아니지!" 정의감 폭발', type: 'injustice' },
        { text: '"나를 뭐로 보는 거야?" 자존심 건드림', type: 'disrespect' },
        { text: '"왜 내 맘대로 안 되지?" 답답함', type: 'control' },
        { text: '"왜 그 정도도 못해?" 실망감', type: 'expectation' }
      ]
    },
    {
      id: 8,
      text: '화가 풀리는 방법은?',
      options: [
        { text: '상황이 공정하게 해결되면', type: 'injustice' },
        { text: '상대가 진심으로 사과하면', type: 'disrespect' },
        { text: '상황을 내가 통제할 수 있게 되면', type: 'control' },
        { text: '기대치를 조정하거나 충족되면', type: 'expectation' }
      ]
    },
    {
      id: 9,
      text: '어릴 때 화났던 기억은?',
      options: [
        { text: '형제나 친구가 더 좋은 걸 받을 때', type: 'injustice' },
        { text: '무시당하거나 놀림받을 때', type: 'disrespect' },
        { text: '원하는 대로 안 될 때', type: 'control' },
        { text: '부모님이 약속을 안 지켰을 때', type: 'expectation' }
      ]
    },
    {
      id: 10,
      text: '분노에 대한 당신의 생각은?',
      options: [
        { text: '불의를 보면 화내는 게 당연', type: 'injustice' },
        { text: '존중받지 못하면 화나는 게 정상', type: 'disrespect' },
        { text: '상황을 통제 못하면 답답해', type: 'control' },
        { text: '기대가 크면 실망도 큰 법', type: 'expectation' }
      ]
    }
  ],
  results: {
    injustice: {
      type: '정의 수호자',
      title: '⚖️ 정의 수호자',
      description: '불공정과 불의가 당신의 분노 트리거! 세상의 정의를 위해 화를 내는 타입.',
      traits: [
        '공정함에 민감',
        '약자 편에 섬',
        '불의 참지 못함',
        '논리적 분노 표현'
      ],
      triggerType: '불공정/불의',
      angerStyle: '정의로운 분노',
      advice: '당신의 정의감은 소중해요! 하지만 모든 불공정을 바로잡을 순 없어요. 에너지를 선택적으로 쓰고, 변화시킬 수 있는 것에 집중하세요.'
    },
    disrespect: {
      type: '존중 요구자',
      title: '👑 존중 요구자',
      description: '무시와 무례가 당신의 분노 트리거! 존중받고 싶은 욕구가 강한 타입.',
      traits: [
        '존중에 민감',
        '자존심이 강함',
        '무시에 예민',
        '냉전/거리두기'
      ],
      triggerType: '무시/무례',
      angerStyle: '자존심 분노',
      advice: '존중받고 싶은 마음은 자연스러워요. 하지만 모든 무례가 의도적인 건 아니에요. 상대의 의도를 먼저 파악해보세요.'
    },
    control: {
      type: '통제 추구자',
      title: '🎮 통제 추구자',
      description: '통제 불가능한 상황이 당신의 분노 트리거! 예측 가능함을 원하는 타입.',
      traits: [
        '통제력 상실에 분노',
        '계획 변경 싫어함',
        '예측 가능성 추구',
        '완벽주의 경향'
      ],
      triggerType: '통제 불가',
      angerStyle: '답답함 분노',
      advice: '통제하고 싶은 마음은 이해해요. 하지만 모든 걸 통제할 순 없어요. "내가 통제할 수 있는 것 vs 없는 것"을 구분하는 연습을 해보세요.'
    },
    expectation: {
      type: '기대 관리자',
      title: '📊 기대 관리자',
      description: '어긋난 기대가 당신의 분노 트리거! 높은 기준을 가진 타입.',
      traits: [
        '높은 기대치',
        '실망에 민감',
        '기준이 명확함',
        '잔소리/지적 경향'
      ],
      triggerType: '기대 불충족',
      angerStyle: '실망 분노',
      advice: '높은 기준은 성장의 원동력이에요. 하지만 모든 사람이 같은 기준을 갖진 않아요. 기대치를 조정하거나 명확히 전달하는 연습을 해보세요.'
    }
  }
};
