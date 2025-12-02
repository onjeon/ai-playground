// optimism-level 테스트 데이터
export const optimismLevel = {
  id: 'optimism-level',
  title: '낙관주의 레벨 테스트',
  description: '당신은 얼마나 낙관적인가요? 삶을 바라보는 시각을 분석해보세요!',
  questions: [
    {
      id: 1,
      text: '일이 안 풀릴 때 첫 생각은?',
      options: [
        { text: '어떻게든 될 거야!', type: 'high' },
        { text: '해결책을 찾아보자', type: 'moderate' },
        { text: '왜 나한테만 이런 일이...', type: 'low' },
        { text: '예상했어, 원래 이래', type: 'pessimist' }
      ]
    },
    {
      id: 2,
      text: '새로운 도전 앞에서?',
      options: [
        { text: '설레! 잘 될 거야', type: 'high' },
        { text: '해볼 만해, 준비하면 되지', type: 'moderate' },
        { text: '걱정되네... 잘 할 수 있을까', type: 'low' },
        { text: '실패할 것 같아, 안 하는 게...', type: 'pessimist' }
      ]
    },
    {
      id: 3,
      text: '미래에 대한 생각은?',
      options: [
        { text: '분명 좋아질 거야!', type: 'high' },
        { text: '노력하면 나아지겠지', type: 'moderate' },
        { text: '불확실해서 걱정돼', type: 'low' },
        { text: '크게 기대 안 해', type: 'pessimist' }
      ]
    },
    {
      id: 4,
      text: '실패를 경험하면?',
      options: [
        { text: '배움의 기회! 다음엔 더 잘해', type: 'high' },
        { text: '아쉽지만 다시 도전', type: 'moderate' },
        { text: '실망되고 자신감 떨어짐', type: 'low' },
        { text: '역시 안 됐어, 예상대로', type: 'pessimist' }
      ]
    },
    {
      id: 5,
      text: '아침에 눈 뜨면 드는 생각은?',
      options: [
        { text: '오늘도 좋은 날이 될 거야!', type: 'high' },
        { text: '오늘 할 일 생각', type: 'moderate' },
        { text: '또 하루가 시작됐네...', type: 'low' },
        { text: '좀 더 자고 싶다...', type: 'pessimist' }
      ]
    },
    {
      id: 6,
      text: '예상치 못한 상황에서?',
      options: [
        { text: '오히려 좋아! 새로운 기회', type: 'high' },
        { text: '대응하면 되지', type: 'moderate' },
        { text: '당황스럽고 불안해', type: 'low' },
        { text: '역시 일이 꼬이네', type: 'pessimist' }
      ]
    },
    {
      id: 7,
      text: '좋은 일이 생기면?',
      options: [
        { text: '당연해! 더 좋은 일도 올 거야', type: 'high' },
        { text: '좋네, 감사하며 즐김', type: 'moderate' },
        { text: '좋지만 언제까지일까 걱정', type: 'low' },
        { text: '뭔가 안 좋은 일이 올 것 같아', type: 'pessimist' }
      ]
    },
    {
      id: 8,
      text: '컵에 물이 반 있으면?',
      options: [
        { text: '반이나 있네!', type: 'high' },
        { text: '반 있네, 필요하면 더 채우면 되지', type: 'moderate' },
        { text: '반밖에 없네...', type: 'low' },
        { text: '금방 비겠지', type: 'pessimist' }
      ]
    },
    {
      id: 9,
      text: '세상에 대한 생각은?',
      options: [
        { text: '기본적으로 좋은 곳', type: 'high' },
        { text: '좋은 점도 나쁜 점도 있는 곳', type: 'moderate' },
        { text: '힘들고 어려운 곳', type: 'low' },
        { text: '믿을 수 없는 곳', type: 'pessimist' }
      ]
    },
    {
      id: 10,
      text: '삶에 대한 당신의 모토는?',
      options: [
        { text: '모든 게 잘 될 거야!', type: 'high' },
        { text: '노력하면 결과가 따라온다', type: 'moderate' },
        { text: '기대는 낮추고 대비하자', type: 'low' },
        { text: '최악을 예상하면 실망도 없다', type: 'pessimist' }
      ]
    }
  ],
  results: {
    high: {
      type: '슈퍼 낙관주의자',
      title: '🌈 슈퍼 낙관주의자 (90%)',
      description: '세상은 아름다워! 모든 게 잘 될 거라 믿는 긍정의 아이콘.',
      traits: ['극도의 긍정', '희망적', '에너지 넘침', '회복력 강함'],
      optimismLevel: 90,
      advice: '긍정은 최고의 무기! 하지만 현실적인 준비도 함께하면 더 좋아요.'
    },
    moderate: {
      type: '현실적 낙관주의자',
      title: '☀️ 현실적 낙관주의자 (65%)',
      description: '긍정적이지만 현실도 아는 균형 잡힌 시각의 소유자!',
      traits: ['균형 잡힌 긍정', '현실적', '실용적', '적응력'],
      optimismLevel: 65,
      advice: '가장 건강한 시각이에요! 이 균형을 유지하세요.'
    },
    low: {
      type: '신중한 비관주의자',
      title: '🌥️ 신중한 비관주의자 (35%)',
      description: '걱정이 많지만 그래서 더 준비하는 타입.',
      traits: ['신중함', '걱정 많음', '준비성', '현실 직시'],
      optimismLevel: 35,
      advice: '신중함은 강점이지만, 좋은 것도 기대해보세요. 긍정이 현실이 되기도 해요!'
    },
    pessimist: {
      type: '방어적 비관주의자',
      title: '🌧️ 방어적 비관주의자 (15%)',
      description: '기대를 낮춰서 실망을 피하는 자기 보호 타입.',
      traits: ['방어적', '기대 관리', '현실주의', '자기 보호'],
      optimismLevel: 15,
      advice: '자기 보호는 이해하지만, 가끔은 좋은 일도 기대해보세요. 생각보다 세상은 나쁘지 않아요!'
    }
  }
};
