// time-perception 테스트 데이터
export const timePerception = {
  id: 'time-perception',
  title: '시간 감각 테스트',
  description: '당신의 시간 감각은 어떤가요? 시간을 느끼는 방식으로 보는 당신의 성격!',
  questions: [
    {
      id: 1,
      text: '약속 시간에 도착하는 패턴은?',
      options: [
        { text: '항상 일찍, 10분 전엔 도착', type: 'early' },
        { text: '대체로 정시', type: 'punctual' },
        { text: '조금씩 늦는 편', type: 'late' },
        { text: '시간 개념 자체가 유연함', type: 'fluid' }
      ]
    },
    {
      id: 2,
      text: '1시간이 "금방" 지나갈 때는?',
      options: [
        { text: '거의 없음, 시간은 항상 느림', type: 'early' },
        { text: '재미있는 일 할 때', type: 'punctual' },
        { text: '자주, 항상 시간이 부족', type: 'late' },
        { text: '몰입하면 몇 시간이고 순식간', type: 'fluid' }
      ]
    },
    {
      id: 3,
      text: '마감 전 당신은?',
      options: [
        { text: '훨씬 전에 끝내놓음', type: 'early' },
        { text: '마감에 맞춰 완료', type: 'punctual' },
        { text: '마감 직전에 겨우', type: 'late' },
        { text: '마감? 필요하면 연장 요청', type: 'fluid' }
      ]
    },
    {
      id: 4,
      text: '시계를 얼마나 자주 봐요?',
      options: [
        { text: '수시로, 시간 관리 필수', type: 'early' },
        { text: '필요할 때', type: 'punctual' },
        { text: '가끔, 보면 이미 늦음', type: 'late' },
        { text: '거의 안 봄, 시계 없이도 OK', type: 'fluid' }
      ]
    },
    {
      id: 5,
      text: '하루가 어떻게 지나가나요?',
      options: [
        { text: '계획대로 착착', type: 'early' },
        { text: '대체로 예상대로', type: 'punctual' },
        { text: '항상 시간이 모자람', type: 'late' },
        { text: '흘러가는 대로', type: 'fluid' }
      ]
    },
    {
      id: 6,
      text: '5분의 가치는?',
      options: [
        { text: '중요! 5분도 아껴야 함', type: 'early' },
        { text: '상황에 따라 다름', type: 'punctual' },
        { text: '별거 아님, 뭘 하겠어', type: 'late' },
        { text: '5분? 순식간에 30분 됨', type: 'fluid' }
      ]
    },
    {
      id: 7,
      text: '과거, 현재, 미래 중 가장 중요한 것은?',
      options: [
        { text: '미래 (준비하고 계획해야)', type: 'early' },
        { text: '현재 (지금이 중요)', type: 'punctual' },
        { text: '과거 (추억이 소중)', type: 'late' },
        { text: '다 연결되어 있음', type: 'fluid' }
      ]
    },
    {
      id: 8,
      text: '"시간 가는 줄 몰랐다"는 경험이?',
      options: [
        { text: '거의 없음, 항상 시간 의식', type: 'early' },
        { text: '가끔, 특별한 경험할 때', type: 'punctual' },
        { text: '자주, 그래서 늦음', type: 'late' },
        { text: '매일, 시간은 환상이니까', type: 'fluid' }
      ]
    },
    {
      id: 9,
      text: '기다리는 것은?',
      options: [
        { text: '짜증남, 시간 낭비', type: 'early' },
        { text: '상황에 따라', type: 'punctual' },
        { text: '괜찮음, 나도 늦으니까', type: 'late' },
        { text: '기다림도 경험의 일부', type: 'fluid' }
      ]
    },
    {
      id: 10,
      text: '시간에 대한 당신의 철학은?',
      options: [
        { text: '시간은 금, 낭비하면 안 됨', type: 'early' },
        { text: '시간은 잘 쓰면 됨', type: 'punctual' },
        { text: '시간은 항상 부족해', type: 'late' },
        { text: '시간은 만들어지는 것', type: 'fluid' }
      ]
    }
  ],
  results: {
    early: {
      type: '시간 선행자',
      title: '⏰ 시간 선행자',
      description: '항상 앞서가는 당신! 시간을 지배하는 철저한 타입.',
      traits: ['철저한 시간 관리', '일찍 도착', '계획적', '미래 지향'],
      timeStyle: '선행형',
      advice: '시간 관리 능력은 훌륭해요! 하지만 가끔은 여유를 즐기는 것도 필요해요.'
    },
    punctual: {
      type: '정시 도착러',
      title: '✅ 정시 도착러',
      description: '딱 맞춰 도착하는 당신! 균형 잡힌 시간 감각의 소유자.',
      traits: ['균형 잡힌 시간 감각', '약속 준수', '현재 집중', '유연성'],
      timeStyle: '균형형',
      advice: '이상적인 시간 감각이에요! 이 균형을 유지하세요.'
    },
    late: {
      type: '시간 추격자',
      title: '🏃 시간 추격자',
      description: '시간과 항상 경주하는 당신! 바쁘게 살지만 늘 시간이 부족해요.',
      traits: ['만성 지각', '낙관적 시간 예측', '멀티태스킹', '순간 집중'],
      timeStyle: '추격형',
      advice: '예상 시간에 10분을 더해보세요. 생각보다 여유가 생길 거예요!'
    },
    fluid: {
      type: '시간 초월자',
      title: '🌀 시간 초월자',
      description: '시간? 그게 뭔데? 시간의 흐름을 다르게 느끼는 자유로운 영혼!',
      traits: ['유연한 시간 개념', '몰입형', '현재 순간 집중', '비선형적 사고'],
      timeStyle: '초월형',
      advice: '당신의 몰입력은 대단해요! 하지만 사회생활에서는 시계도 가끔 봐주세요!'
    }
  }
};
