// night-routine 테스트 데이터
export const nightRoutine = {
  id: 'night-routine',
  title: '밤 루틴 테스트',
  description: '당신의 밤 시간 패턴은? 야행성인지 건강한 수면러인지 알아보세요!',
  questions: [
    {
      id: 1,
      text: '보통 몇 시에 잠들어요?',
      options: [
        { text: '10-11시, 일찍 자는 편', type: 'early' },
        { text: '12시 전후', type: 'moderate' },
        { text: '새벽 1-2시', type: 'late' },
        { text: '새벽 3시 이후, 밤새울 때도', type: 'owl' }
      ]
    },
    {
      id: 2,
      text: '자기 전 주로 뭘 해요?',
      options: [
        { text: '독서나 명상', type: 'early' },
        { text: 'TV나 유튜브 좀 보다가', type: 'moderate' },
        { text: '폰/컴퓨터 계속 하다가', type: 'late' },
        { text: '게임/작업/공부 등 활동', type: 'owl' }
      ]
    },
    {
      id: 3,
      text: '밤 시간 에너지는?',
      options: [
        { text: '떨어져서 일찍 졸림', type: 'early' },
        { text: '적당함', type: 'moderate' },
        { text: '오히려 올라감', type: 'late' },
        { text: '최고! 밤이 내 시간', type: 'owl' }
      ]
    },
    {
      id: 4,
      text: '밤에 가장 집중 잘 되는 일은?',
      options: [
        { text: '없음, 밤엔 쉬어야지', type: 'early' },
        { text: '가벼운 활동 정도', type: 'moderate' },
        { text: '영화, 게임, 취미', type: 'late' },
        { text: '창작, 공부, 프로젝트', type: 'owl' }
      ]
    },
    {
      id: 5,
      text: '야식은?',
      options: [
        { text: '안 먹음, 건강에 안 좋으니까', type: 'early' },
        { text: '가끔, 배고프면', type: 'moderate' },
        { text: '자주, 밤에 출출해', type: 'late' },
        { text: '필수! 밤 활동의 연료', type: 'owl' }
      ]
    },
    {
      id: 6,
      text: '밤에 혼자 있는 것은?',
      options: [
        { text: '무서워서 싫어', type: 'early' },
        { text: '괜찮음, 익숙함', type: 'moderate' },
        { text: '좋아, 나만의 시간', type: 'late' },
        { text: '최고! 방해 없이 집중', type: 'owl' }
      ]
    },
    {
      id: 7,
      text: '"잠이 안 와서" 하는 일은?',
      options: [
        { text: '거의 없음, 바로 잠듦', type: 'early' },
        { text: 'ASMR이나 음악 틀기', type: 'moderate' },
        { text: '폰 보다가 더 안 잠', type: 'late' },
        { text: '그냥 하고 싶은 거 함', type: 'owl' }
      ]
    },
    {
      id: 8,
      text: '주말 밤 패턴은?',
      options: [
        { text: '평일이랑 비슷하게', type: 'early' },
        { text: '조금 늦게', type: 'moderate' },
        { text: '훨씬 늦게', type: 'late' },
        { text: '밤새는 경우도 많음', type: 'owl' }
      ]
    },
    {
      id: 9,
      text: '밤에 대한 당신의 감정은?',
      options: [
        { text: '휴식의 시간, 빨리 자야 함', type: 'early' },
        { text: '하루 마무리 시간', type: 'moderate' },
        { text: '자유로운 나만의 시간', type: 'late' },
        { text: '가장 살아있는 시간!', type: 'owl' }
      ]
    },
    {
      id: 10,
      text: '아침이 힘든 이유는?',
      options: [
        { text: '힘들지 않음, 잘 일어남', type: 'early' },
        { text: '조금 힘들지만 괜찮음', type: 'moderate' },
        { text: '밤에 늦게 자서', type: 'late' },
        { text: '밤이 내 시간이라 어쩔 수 없음', type: 'owl' }
      ]
    }
  ],
  results: {
    early: {
      type: '건강 수면형',
      title: '😴 건강 수면형',
      description: '일찍 자고 일찍 일어나는 건강한 수면 패턴!',
      traits: ['일찍 취침', '규칙적 수면', '아침형', '건강 중시'],
      nightStyle: '건강형',
      advice: '훌륭한 수면 습관! 건강한 생체 리듬을 유지하세요.'
    },
    moderate: {
      type: '보통 야간형',
      title: '🌙 보통 야간형',
      description: '평균적인 밤 패턴! 적당히 즐기고 적당히 자는 타입.',
      traits: ['적당한 취침', '유연한 패턴', '균형형', '적응력'],
      nightStyle: '균형형',
      advice: '균형 잡힌 밤 시간이에요! 이 패턴을 유지하면 좋겠어요.'
    },
    late: {
      type: '야행성 기질',
      title: '🌛 야행성 기질',
      description: '밤에 활동하는 게 좋은 당신! 야행성 DNA가 있어요.',
      traits: ['늦은 취침', '밤 활동 선호', '야행성', '자유로운 밤'],
      nightStyle: '야행성',
      advice: '밤형도 괜찮지만, 사회생활에 지장이 없도록 조절해보세요!'
    },
    owl: {
      type: '진정한 올빼미',
      title: '🦉 진정한 올빼미',
      description: '밤이 진짜 당신의 시간! 어둠 속에서 빛나는 타입.',
      traits: ['새벽 취침', '밤 = 골든타임', '극야행성', '창작형'],
      nightStyle: '올빼미형',
      advice: '창의성이 밤에 빛나는 타입이에요! 하지만 건강을 위해 가끔은 일찍 자는 날도 만들어보세요.'
    }
  }
};
