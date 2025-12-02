// waiting-style 테스트 데이터
export const waitingstyleTest = {
  id: 'waiting-style',
  title: '기다림 스타일 테스트',
  description: '무언가를 기다릴 때 당신의 모습은? 기다림의 태도로 알아보는 성격!',
  questions: [
    {
      id: 1,
      text: '택배가 오기로 한 날, 당신은?',
      options: [
        { text: '배송 조회를 수시로 확인', type: 'anxious' },
        { text: '오겠지 하고 다른 일 함', type: 'patient' },
        { text: '오면 문자 오니까 신경 안 씀', type: 'efficient' },
        { text: '빨리 안 오면 짜증남', type: 'impatient' }
      ]
    },
    {
      id: 2,
      text: '친구와 약속 장소에서 기다릴 때?',
      options: [
        { text: '시계 자주 보며 안절부절', type: 'anxious' },
        { text: '여유롭게 주변 구경하거나 휴대폰', type: 'patient' },
        { text: '그 시간에 다른 볼일 처리', type: 'efficient' },
        { text: '5분 지나면 재촉 연락', type: 'impatient' }
      ]
    },
    {
      id: 3,
      text: '주문한 음식이 안 나올 때?',
      options: [
        { text: '"왜 이렇게 오래 걸리지?" 불안', type: 'anxious' },
        { text: '맛있게 만들고 있겠지, 기다림', type: 'patient' },
        { text: '직원에게 확인해봄', type: 'efficient' },
        { text: '빨리 안 나오면 화남', type: 'impatient' }
      ]
    },
    {
      id: 4,
      text: '중요한 결과(합격, 결과 등)를 기다릴 때?',
      options: [
        { text: '불안해서 다른 일이 안 됨', type: 'anxious' },
        { text: '될 건 되고, 다른 것에 집중', type: 'patient' },
        { text: '결과 나올 때까지 최선을 다함', type: 'efficient' },
        { text: '빨리 좀 알려줬으면', type: 'impatient' }
      ]
    },
    {
      id: 5,
      text: '로딩이 오래 걸리는 웹사이트는?',
      options: [
        { text: '새로고침 연타', type: 'anxious' },
        { text: '잠깐 기다려봄', type: 'patient' },
        { text: '다른 탭 열어서 다른 일 함', type: 'efficient' },
        { text: '바로 닫고 다른 사이트로', type: 'impatient' }
      ]
    },
    {
      id: 6,
      text: '답장이 안 올 때 (읽씹 당했을 때)?',
      options: [
        { text: '계속 신경 쓰임, 뭐라고 할지 생각', type: 'anxious' },
        { text: '바쁘겠지, 나중에 오겠지', type: 'patient' },
        { text: '필요하면 다시 연락함', type: 'efficient' },
        { text: '답 안 오면 짜증남', type: 'impatient' }
      ]
    },
    {
      id: 7,
      text: '버스/지하철을 기다릴 때?',
      options: [
        { text: '도착 시간 앱 계속 확인', type: 'anxious' },
        { text: '음악 듣거나 생각하며 기다림', type: 'patient' },
        { text: '그 시간에 뉴스나 이메일 확인', type: 'efficient' },
        { text: '왜 이렇게 안 오는지 짜증', type: 'impatient' }
      ]
    },
    {
      id: 8,
      text: '설렘 가득한 일정(여행, 콘서트 등)을 기다릴 때?',
      options: [
        { text: 'D-day 카운트다운, 설레서 잠이 안 옴', type: 'anxious' },
        { text: '기대하면서 일상을 보냄', type: 'patient' },
        { text: '준비할 것들 체크하며 보냄', type: 'efficient' },
        { text: '빨리 그날이 왔으면', type: 'impatient' }
      ]
    },
    {
      id: 9,
      text: '기다림이 길어지면?',
      options: [
        { text: '점점 불안해지고 초조해짐', type: 'anxious' },
        { text: '그래도 괜찮아, 기다릴 수 있어', type: 'patient' },
        { text: '다른 방법을 찾아봄', type: 'efficient' },
        { text: '인내심 한계, 포기하거나 화남', type: 'impatient' }
      ]
    },
    {
      id: 10,
      text: '기다림에 대한 당신의 생각은?',
      options: [
        { text: '기다리는 동안 불안함', type: 'anxious' },
        { text: '기다림도 삶의 일부', type: 'patient' },
        { text: '기다리는 시간을 활용해야 함', type: 'efficient' },
        { text: '기다리는 건 시간 낭비', type: 'impatient' }
      ]
    }
  ],
  results: {
    anxious: {
      type: '설레는 초조러',
      title: '😰 설레는 초조러',
      description: '기다림은 곧 불안! 결과가 나올 때까지 마음이 편치 않은 타입입니다.',
      traits: [
        '감수성이 풍부하다',
        '책임감이 강하다',
        '완벽주의 성향',
        '결과를 중요시함'
      ],
      advice: '기다리는 동안 너무 불안해하지 마세요. 이미 할 수 있는 건 다 했잖아요. 심호흡하고 다른 것에 집중해보세요!'
    },
    patient: {
      type: '여유로운 기다림러',
      title: '🧘 여유로운 기다림러',
      description: '기다림도 휴식! 조급해하지 않고 여유롭게 흘러가는 대로 사는 타입입니다.',
      traits: [
        '인내심이 강하다',
        '마음의 여유가 있다',
        '스트레스를 덜 받음',
        '긍정적인 마인드'
      ],
      advice: '여유로운 마음은 정말 좋은 장점이에요! 하지만 가끔은 적극적으로 움직여야 할 때도 있답니다.'
    },
    efficient: {
      type: '효율적 시간 활용러',
      title: '⏰ 효율적 시간 활용러',
      description: '기다리는 시간도 금! 빈 시간을 생산적으로 쓰는 효율적인 타입입니다.',
      traits: [
        '시간 관리를 잘함',
        '생산적인 마인드',
        '멀티태스킹 능력',
        '실용적인 사고'
      ],
      advice: '효율적인 시간 활용은 멋져요! 하지만 가끔은 아무것도 안 하는 것도 필요해요.'
    },
    impatient: {
      type: '빨리빨리 성격',
      title: '🚀 빨리빨리 성격',
      description: '기다림은 싫어! 빠른 결과를 원하는 성급한 타입입니다.',
      traits: [
        '에너지가 넘친다',
        '결과 지향적',
        '참을성이 부족',
        '빠른 결정을 선호'
      ],
      advice: '빠른 것도 좋지만, 좋은 것은 기다림이 필요할 때가 있어요. 인내심을 기르면 더 큰 것을 얻을 수 있어요!'
    }
  }
};
