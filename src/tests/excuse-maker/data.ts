// excuse-maker 테스트 데이터
export const excuseMaker = {
  id: 'excuse-maker',
  title: '핑계 유형 테스트',
  description: '당신의 핑계 스타일은? 핑계 대는 패턴을 분석하고 진짜 이유를 알아보세요!',
  questions: [
    {
      id: 1,
      text: '약속에 늦었을 때 주로 하는 말은?',
      options: [
        { text: '"차가 막혀서..." (외부 탓)', type: 'external' },
        { text: '"몸이 안 좋아서..." (건강 핑계)', type: 'health' },
        { text: '"일이 갑자기 생겨서..." (바쁨 핑계)', type: 'busy' },
        { text: '"늦어서 미안해" (솔직 인정)', type: 'honest' }
      ]
    },
    {
      id: 2,
      text: '하기 싫은 모임을 거절할 때?',
      options: [
        { text: '"그날 선약이 있어서..."', type: 'external' },
        { text: '"요즘 컨디션이 안 좋아서..."', type: 'health' },
        { text: '"일이 너무 바빠서..."', type: 'busy' },
        { text: '"오늘은 쉬고 싶어"', type: 'honest' }
      ]
    },
    {
      id: 3,
      text: '과제/업무를 못 했을 때?',
      options: [
        { text: '"자료가 부족해서..." "시스템 오류가..."', type: 'external' },
        { text: '"아파서 못 했어..."', type: 'health' },
        { text: '"다른 급한 일이 있어서..."', type: 'busy' },
        { text: '"내가 시간 관리를 못 했어"', type: 'honest' }
      ]
    },
    {
      id: 4,
      text: '연락을 늦게 했을 때?',
      options: [
        { text: '"폰이 고장나서..." "알림이 안 와서..."', type: 'external' },
        { text: '"너무 피곤해서 잠들어버렸어..."', type: 'health' },
        { text: '"정신없이 바빴어..."', type: 'busy' },
        { text: '"깜빡했어, 미안"', type: 'honest' }
      ]
    },
    {
      id: 5,
      text: '운동/다이어트를 못 했을 때?',
      options: [
        { text: '"날씨가..." "헬스장이 멀어서..."', type: 'external' },
        { text: '"몸이 안 좋아서..."', type: 'health' },
        { text: '"시간이 없어서..."', type: 'busy' },
        { text: '"의지가 부족했어"', type: 'honest' }
      ]
    },
    {
      id: 6,
      text: '약속을 취소해야 할 때?',
      options: [
        { text: '"갑자기 집안 일이 생겨서..."', type: 'external' },
        { text: '"컨디션이 안 좋아서..."', type: 'health' },
        { text: '"급한 일이 생겼어..."', type: 'busy' },
        { text: '"오늘은 힘들 것 같아, 미안"', type: 'honest' }
      ]
    },
    {
      id: 7,
      text: '실수했을 때 보통?',
      options: [
        { text: '상황이나 다른 사람 탓을 먼저 함', type: 'external' },
        { text: '컨디션 탓을 함', type: 'health' },
        { text: '바빠서 신경 못 썼다고 함', type: 'busy' },
        { text: '내 실수라고 인정함', type: 'honest' }
      ]
    },
    {
      id: 8,
      text: '핑계 댈 때 스스로 어때요?',
      options: [
        { text: '꽤 그럴듯하게 잘 댐', type: 'external' },
        { text: '아픈 건 진짜니까 괜찮음', type: 'health' },
        { text: '실제로 바쁘긴 해서...', type: 'busy' },
        { text: '핑계 자체가 불편함', type: 'honest' }
      ]
    },
    {
      id: 9,
      text: '핑계를 들킬 때 기분은?',
      options: [
        { text: '더 그럴듯한 핑계를 준비함', type: 'external' },
        { text: '진짜 아팠는데... 억울함', type: 'health' },
        { text: '진짜 바빴는데... 서운함', type: 'busy' },
        { text: '창피하고 반성함', type: 'honest' }
      ]
    },
    {
      id: 10,
      text: '핑계에 대한 당신의 생각은?',
      options: [
        { text: '때로는 필요한 사회적 기술', type: 'external' },
        { text: '건강은 진짜 중요하니까', type: 'health' },
        { text: '바쁜 건 사실이니까', type: 'busy' },
        { text: '솔직한 게 결국 편함', type: 'honest' }
      ]
    }
  ],
  results: {
    external: {
      type: '외부 탓 마스터',
      title: '🌪️ 외부 탓 마스터',
      description: '날씨, 교통, 시스템... 외부 요인을 활용하는 핑계의 달인!',
      traits: ['창의적 핑계', '외부 요인 활용', '상황 탓 경향', '방어적'],
      excuseLevel: '고급',
      advice: '창의적인 건 좋지만, 자주 쓰면 신뢰를 잃을 수 있어요. 가끔은 솔직하게 말해보세요!'
    },
    health: {
      type: '건강 핑계러',
      title: '🤒 건강 핑계러',
      description: '아픈 건 어쩔 수 없잖아요? 건강을 방패로 쓰는 타입!',
      traits: ['건강 핑계 선호', '동정심 유발', '거부하기 어려운 핑계', '자기 보호'],
      excuseLevel: '효과적',
      advice: '건강 핑계는 강력하지만, 남용하면 정작 아플 때 안 믿어줘요. 소중히 쓰세요!'
    },
    busy: {
      type: '바쁨 핑계러',
      title: '⏰ 바쁨 핑계러',
      description: '바빠서... 시간이 없어서... 현대인의 가장 흔한 핑계!',
      traits: ['바쁨 강조', '시간 부족 호소', '사회적으로 용인됨', '진짜 바쁠 수도'],
      excuseLevel: '무난함',
      advice: '바쁜 건 사실일 수 있지만, 우선순위의 문제일 때도 있어요. 중요한 건 시간을 만드는 거예요!'
    },
    honest: {
      type: '솔직 인정러',
      title: '✨ 솔직 인정러',
      description: '핑계? 그냥 솔직하게 말하는 게 편해요. 진정한 어른!',
      traits: ['솔직함', '책임감', '신뢰 구축', '성숙함'],
      excuseLevel: '핑계 안 댐',
      advice: '당신의 솔직함은 큰 미덕이에요! 이 정직함이 주변의 신뢰를 쌓아줄 거예요.'
    }
  }
};
