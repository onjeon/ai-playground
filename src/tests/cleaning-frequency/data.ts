// cleaning-frequency 테스트 데이터
export const cleaningfrequencyTest = {
  id: 'cleaning-frequency',
  title: '청소 주기 테스트',
  description: '당신의 청소 습관으로 알아보는 성격 유형! 얼마나 자주 청소하시나요?',
  questions: [
    {
      id: 1,
      text: '방 청소는 보통 언제 하나요?',
      options: [
        { text: '매일 또는 이틀에 한 번', type: 'daily' },
        { text: '일주일에 한 번 정도', type: 'weekly' },
        { text: '더러워진 게 보일 때', type: 'reactive' },
        { text: '손님이 오기 전날', type: 'event' }
      ]
    },
    {
      id: 2,
      text: '설거지는 언제 하시나요?',
      options: [
        { text: '먹고 나서 바로 한다', type: 'daily' },
        { text: '하루에 한 번 몰아서', type: 'weekly' },
        { text: '싱크대가 가득 차면', type: 'reactive' },
        { text: '더 이상 쓸 그릇이 없을 때', type: 'event' }
      ]
    },
    {
      id: 3,
      text: '침대 시트는 얼마나 자주 교체하나요?',
      options: [
        { text: '일주일에 한 번', type: 'daily' },
        { text: '2주에 한 번 정도', type: 'weekly' },
        { text: '생각날 때 가끔', type: 'reactive' },
        { text: '계절이 바뀔 때...?', type: 'event' }
      ]
    },
    {
      id: 4,
      text: '청소기나 물걸레질은?',
      options: [
        { text: '거의 매일 한다', type: 'daily' },
        { text: '주말에 한 번 한다', type: 'weekly' },
        { text: '먼지가 눈에 보이면', type: 'reactive' },
        { text: '대청소할 때만', type: 'event' }
      ]
    },
    {
      id: 5,
      text: '화장실 청소 주기는?',
      options: [
        { text: '매일 간단히, 주 1회 꼼꼼히', type: 'daily' },
        { text: '일주일에 한 번', type: 'weekly' },
        { text: '더러워 보이면', type: 'reactive' },
        { text: '참다 참다 한다', type: 'event' }
      ]
    },
    {
      id: 6,
      text: '책상이나 테이블 위 정리는?',
      options: [
        { text: '사용 후 바로 정리', type: 'daily' },
        { text: '하루 끝에 정리', type: 'weekly' },
        { text: '물건 찾기 어려울 때', type: 'reactive' },
        { text: '새 물건 놓을 자리가 없을 때', type: 'event' }
      ]
    },
    {
      id: 7,
      text: '빨래는 얼마나 자주?',
      options: [
        { text: '세탁물이 조금만 쌓여도 돌린다', type: 'daily' },
        { text: '일주일에 1-2번 정해진 날에', type: 'weekly' },
        { text: '입을 옷이 없어지려고 할 때', type: 'reactive' },
        { text: '빨래통이 넘칠 때', type: 'event' }
      ]
    },
    {
      id: 8,
      text: '냉장고 정리는?',
      options: [
        { text: '장보고 오면 바로 정리', type: 'daily' },
        { text: '일주일에 한 번 체크', type: 'weekly' },
        { text: '이상한 냄새가 날 때', type: 'reactive' },
        { text: '명절 전후로...', type: 'event' }
      ]
    },
    {
      id: 9,
      text: '창문이나 유리 닦기는?',
      options: [
        { text: '정기적으로 닦는다', type: 'daily' },
        { text: '한 달에 한 번 정도', type: 'weekly' },
        { text: '지문이나 얼룩이 보이면', type: 'reactive' },
        { text: '대청소 때만', type: 'event' }
      ]
    },
    {
      id: 10,
      text: '청소에 대한 당신의 마음가짐은?',
      options: [
        { text: '"깨끗한 공간이 마음의 평화"', type: 'daily' },
        { text: '"적당한 청결은 유지해야지"', type: 'weekly' },
        { text: '"어느 정도 더러워도 괜찮아"', type: 'reactive' },
        { text: '"살다 보면 어떻게든 된다"', type: 'event' }
      ]
    }
  ],
  results: {
    daily: {
      type: '청결 수호자',
      title: '✨ 청결 수호자',
      description: '깨끗함이 곧 행복! 티끌 하나 허용하지 않는 청소의 달인입니다.',
      traits: [
        '완벽주의 성향이 있다',
        '계획적이고 체계적인 성격',
        '깔끔한 환경에서 집중을 잘한다',
        '자기 관리가 철저한 편'
      ],
      advice: '청결한 환경은 좋지만, 가끔은 조금 어질러져도 괜찮아요! 너무 완벽하려고 하면 오히려 스트레스받을 수 있답니다.'
    },
    weekly: {
      type: '균형 잡힌 관리자',
      title: '📋 균형 잡힌 관리자',
      description: '적절한 청소 주기를 유지하는 밸런스의 달인! 효율적으로 청결을 관리합니다.',
      traits: [
        '균형 감각이 뛰어나다',
        '효율성을 중시한다',
        '루틴을 잘 만들어 지킨다',
        '현실적인 기대치를 갖고 있다'
      ],
      advice: '좋은 균형을 유지하고 계시네요! 바쁜 날엔 작은 부분이라도 유지하면서 루틴을 지켜보세요.'
    },
    reactive: {
      type: '자유로운 영혼',
      title: '🌊 자유로운 영혼',
      description: '필요할 때 하면 되지! 융통성 있게 청소하는 여유로운 타입입니다.',
      traits: [
        '유연하고 적응력이 좋다',
        '스트레스를 덜 받는 편',
        '창의적인 성향이 있다',
        '큰 틀에서 보는 성격'
      ],
      advice: '여유로운 마음은 좋지만, 작은 습관을 들이면 나중에 몰아서 하는 수고를 덜 수 있어요!'
    },
    event: {
      type: '이벤트 드리븐 청소러',
      title: '🎉 이벤트 드리븐 청소러',
      description: '특별한 날엔 특별한 청소! 동기부여가 있으면 청소 능력이 폭발합니다.',
      traits: [
        '순간 집중력이 뛰어나다',
        '외부 자극에 반응을 잘한다',
        '한 번 하면 제대로 하는 편',
        '효율보다 결과를 중시'
      ],
      advice: '손님 없어도 한 달에 한 번은 대청소 날로 정해보는 건 어떨까요? 작은 목표가 큰 동기부여가 될 수 있어요!'
    }
  }
};
