// worry-pattern 테스트 데이터
export const worrypatternTest = {
  id: 'worry-pattern',
  title: '걱정 유형 테스트',
  description: '당신은 어떤 스타일로 걱정하나요? 걱정 패턴을 알면 불안을 다스리는 법도 알 수 있어요!',
  questions: [
    {
      id: 1,
      text: '걱정이 시작되면 주로 언제까지 계속돼요?',
      options: [
        { text: '해결될 때까지 끝없이', type: 'spiral' },
        { text: '한바탕 걱정하고 잊어버림', type: 'burst' },
        { text: '계속 분석하고 대비책 세움', type: 'planner' },
        { text: '별로 걱정 안 함, 될 대로 되겠지', type: 'chill' }
      ]
    },
    {
      id: 2,
      text: '밤에 잠들기 전 주로 뭘 생각해요?',
      options: [
        { text: '오늘 있었던 일, 내일 걱정들...', type: 'spiral' },
        { text: '갑자기 옛날 창피했던 기억이', type: 'burst' },
        { text: '내일 할 일 체크리스트', type: 'planner' },
        { text: '그냥 바로 잠듦', type: 'chill' }
      ]
    },
    {
      id: 3,
      text: '누군가 "얘기 좀 하자"라고 하면?',
      options: [
        { text: '뭔데?! 뭘 잘못했지? 머릿속 시뮬레이션 시작', type: 'spiral' },
        { text: '순간 심장 쿵, 근데 금방 괜찮아짐', type: 'burst' },
        { text: '어떤 얘기인지 예상하고 대비', type: 'planner' },
        { text: '그래, 무슨 얘기?', type: 'chill' }
      ]
    },
    {
      id: 4,
      text: '중요한 일을 앞두고 있을 때?',
      options: [
        { text: '최악의 시나리오가 계속 떠오름', type: 'spiral' },
        { text: '직전에 갑자기 불안해짐', type: 'burst' },
        { text: '철저하게 준비해서 불안 감소', type: 'planner' },
        { text: '어떻게든 되겠지~', type: 'chill' }
      ]
    },
    {
      id: 5,
      text: '걱정할 때 몸의 반응은?',
      options: [
        { text: '가슴 답답, 소화 안 됨, 수면 장애', type: 'spiral' },
        { text: '순간적으로 심장이 쿵쿵', type: 'burst' },
        { text: '긴장되지만 행동으로 풀어냄', type: 'planner' },
        { text: '별로 없음', type: 'chill' }
      ]
    },
    {
      id: 6,
      text: '친구가 연락이 안 될 때?',
      options: [
        { text: '무슨 일 생긴 거 아닌가? 점점 불안', type: 'spiral' },
        { text: '순간 걱정되다가 잊어버림', type: 'burst' },
        { text: '다른 연락처 찾거나 다시 연락', type: 'planner' },
        { text: '바쁜가 보지, 나중에 연락 오겠지', type: 'chill' }
      ]
    },
    {
      id: 7,
      text: '과거에 한 실수를?',
      options: [
        { text: '몇 년이 지나도 갑자기 떠올라 괴로움', type: 'spiral' },
        { text: '가끔 생각나면 움찔, 근데 금방 잊음', type: 'burst' },
        { text: '같은 실수 안 하려고 메모/대비', type: 'planner' },
        { text: '지난 일은 지난 일', type: 'chill' }
      ]
    },
    {
      id: 8,
      text: '불확실한 상황에서 당신은?',
      options: [
        { text: '모든 가능성을 계속 생각함', type: 'spiral' },
        { text: '불안하다가 어느 순간 포기', type: 'burst' },
        { text: '최대한 정보를 모아서 대비', type: 'planner' },
        { text: '그때 가서 생각해도 됨', type: 'chill' }
      ]
    },
    {
      id: 9,
      text: '걱정을 나누는 스타일은?',
      options: [
        { text: '계속 같은 걱정을 여러 사람에게 말함', type: 'spiral' },
        { text: '순간 터뜨리고 끝', type: 'burst' },
        { text: '조언 구하고 해결책 찾음', type: 'planner' },
        { text: '별로 안 나눔, 혼자 처리', type: 'chill' }
      ]
    },
    {
      id: 10,
      text: '걱정에 대한 당신의 생각은?',
      options: [
        { text: '걱정해야 대비할 수 있어 (근데 너무 많이 함)', type: 'spiral' },
        { text: '가끔 걱정되지만 통제 가능', type: 'burst' },
        { text: '걱정은 준비의 시작', type: 'planner' },
        { text: '걱정해봤자 달라지는 거 없음', type: 'chill' }
      ]
    }
  ],
  results: {
    spiral: {
      type: '스파이럴 걱정러',
      title: '🌀 스파이럴 걱정러',
      description: '한 번 걱정이 시작되면 꼬리에 꼬리를 물고 확대되는 타입. 최악의 시나리오 전문가!',
      traits: [
        '걱정이 걱정을 낳음',
        '최악의 상황 상상',
        '멈추기 어려운 반추',
        '신체 증상 동반'
      ],
      worryLevel: '높음',
      copingStyle: '회피적/반추적',
      advice: '"STOP" 기법을 사용해보세요. 걱정 시작되면 "멈춰!"라고 외치고 5분 타이머 설정. 그 후에도 걱정되면 다시 5분. 작은 걱정은 흘려보내는 연습을 해보세요.'
    },
    burst: {
      type: '버스트 걱정러',
      title: '💥 버스트 걱정러',
      description: '평소엔 괜찮다가 갑자기 터지는 타입! 순간적으로 강하지만 금방 사라져요.',
      traits: [
        '갑작스러운 불안',
        '순간 강렬함',
        '빠른 회복',
        '예측 불가능'
      ],
      worryLevel: '중간 (간헐적)',
      copingStyle: '폭발 후 해소',
      advice: '갑작스러운 불안이 올 때 심호흡을 해보세요. 4초 들이쉬고, 7초 참고, 8초 내쉬기. 신체적으로 진정되면 마음도 따라와요.'
    },
    planner: {
      type: '플래너 걱정러',
      title: '📋 플래너 걱정러',
      description: '걱정을 생산적으로 바꾸는 타입! 불안하면 계획을 세우고 대비해요.',
      traits: [
        '걱정 → 계획으로 전환',
        '준비를 통한 안정',
        '통제감 추구',
        '실용적 대처'
      ],
      worryLevel: '중간 (관리 가능)',
      copingStyle: '문제 해결적',
      advice: '가장 건강한 걱정 스타일이에요! 하지만 모든 걸 통제할 수 없다는 것도 받아들여보세요. 때로는 흘려보내는 것도 필요해요.'
    },
    chill: {
      type: '칠 걱정러',
      title: '😎 칠 걱정러',
      description: '걱정? 그게 뭔데? 느긋하게 흘려보내는 타입. 될 대로 되라 마인드!',
      traits: [
        '낙관적 사고',
        '현재에 집중',
        '스트레스 저항성',
        '유연한 대처'
      ],
      worryLevel: '낮음',
      copingStyle: '수용적',
      advice: '걱정 적은 건 좋지만, 중요한 일에는 적절한 준비도 필요해요! 가끔은 "이건 신경 써야 해"라고 자신에게 말해보세요.'
    }
  }
};
