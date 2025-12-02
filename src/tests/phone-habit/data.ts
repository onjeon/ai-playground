// phone-habit 테스트 데이터
export const phonehabitTest = {
  id: 'phone-habit',
  title: '휴대폰 습관 테스트',
  description: '휴대폰 사용 습관으로 알아보는 당신의 성격! 스마트폰을 어떻게 다루시나요?',
  questions: [
    {
      id: 1,
      text: '아침에 눈 뜨면 가장 먼저?',
      options: [
        { text: '휴대폰부터 확인', type: 'heavy' },
        { text: '알람 끄고 좀 더 누워있음', type: 'moderate' },
        { text: '화장실 먼저, 폰은 나중', type: 'light' },
        { text: '폰 없이 아침 루틴 시작', type: 'digital' }
      ]
    },
    {
      id: 2,
      text: '휴대폰 배터리가 20% 남았을 때?',
      options: [
        { text: '불안함, 충전기 급하게 찾음', type: 'heavy' },
        { text: '좀 신경 쓰이지만 괜찮음', type: 'moderate' },
        { text: '집 가면 충전하지 뭐', type: 'light' },
        { text: '배터리에 연연하지 않음', type: 'digital' }
      ]
    },
    {
      id: 3,
      text: '밥 먹을 때 휴대폰은?',
      options: [
        { text: '영상 보면서 먹음', type: 'heavy' },
        { text: '가끔 확인하면서', type: 'moderate' },
        { text: '주로 밥에 집중', type: 'light' },
        { text: '휴대폰은 안 봄', type: 'digital' }
      ]
    },
    {
      id: 4,
      text: '휴대폰을 집에 두고 나왔다면?',
      options: [
        { text: '다시 가지러 감, 못 버팀', type: 'heavy' },
        { text: '불편하지만 어쩔 수 없지', type: 'moderate' },
        { text: '오히려 해방감', type: 'light' },
        { text: '가끔 일부러 두고 나감', type: 'digital' }
      ]
    },
    {
      id: 5,
      text: '스크린 타임(하루 사용시간)은?',
      options: [
        { text: '5시간 이상', type: 'heavy' },
        { text: '3-5시간 정도', type: 'moderate' },
        { text: '1-3시간', type: 'light' },
        { text: '1시간 미만', type: 'digital' }
      ]
    },
    {
      id: 6,
      text: '대화 중 휴대폰 알림이 오면?',
      options: [
        { text: '바로 확인함', type: 'heavy' },
        { text: '슬쩍 화면만 봄', type: 'moderate' },
        { text: '나중에 확인', type: 'light' },
        { text: '무음이라 모름', type: 'digital' }
      ]
    },
    {
      id: 7,
      text: '잠자기 전 휴대폰은?',
      options: [
        { text: '손에 쥐고 자다가 떨어뜨림', type: 'heavy' },
        { text: '좀 보다가 충전기에 꽂고 잠', type: 'moderate' },
        { text: '일찍 내려놓음', type: 'light' },
        { text: '침실에 안 가지고 들어감', type: 'digital' }
      ]
    },
    {
      id: 8,
      text: '휴대폰 정리 상태는?',
      options: [
        { text: '앱 엄청 많고 알림도 많음', type: 'heavy' },
        { text: '적당히 정리된 상태', type: 'moderate' },
        { text: '필수 앱만 깔끔하게', type: 'light' },
        { text: '미니멀하게 최소한만', type: 'digital' }
      ]
    },
    {
      id: 9,
      text: '심심할 때 가장 먼저 하는 행동은?',
      options: [
        { text: '휴대폰 들고 앱 돌아다님', type: 'heavy' },
        { text: 'SNS 좀 보다가 다른 것도 함', type: 'moderate' },
        { text: '책이나 다른 활동', type: 'light' },
        { text: '멍때리거나 생각함', type: 'digital' }
      ]
    },
    {
      id: 10,
      text: '휴대폰에 대한 당신의 생각은?',
      options: [
        { text: '없으면 못 살아', type: 'heavy' },
        { text: '편리한 도구', type: 'moderate' },
        { text: '필요할 때만 쓰면 됨', type: 'light' },
        { text: '덜 쓰고 싶음', type: 'digital' }
      ]
    }
  ],
  results: {
    heavy: {
      type: '스마트폰 헤비유저',
      title: '📱 스마트폰 헤비유저',
      description: '폰과 함께하는 일상! 디지털 네이티브로서 모든 것을 폰으로 해결하는 타입입니다.',
      traits: [
        '디지털에 익숙하다',
        '연결되어 있는 것을 좋아함',
        '정보 수집이 빠르다',
        'FOMO 성향이 있을 수 있음'
      ],
      advice: '가끔은 폰 없이 시간을 보내보세요. 디지털 디톡스가 새로운 영감을 줄 수 있어요!'
    },
    moderate: {
      type: '균형 잡힌 사용자',
      title: '⚖️ 균형 잡힌 사용자',
      description: '적당히, 필요할 때! 휴대폰과 건강한 관계를 유지하는 밸런스 타입입니다.',
      traits: [
        '자기 조절 능력이 있다',
        '균형 감각이 좋다',
        '상황에 따라 조절 가능',
        '실용적인 성격'
      ],
      advice: '좋은 밸런스를 유지하고 있어요! 이 습관을 계속 유지해보세요.'
    },
    light: {
      type: '라이트 사용자',
      title: '🌿 라이트 사용자',
      description: '필요할 때만! 휴대폰에 얽매이지 않고 자유로운 타입입니다.',
      traits: [
        '현실에 집중하는 편',
        '자기 시간을 소중히 여김',
        '집중력이 좋다',
        '오프라인 활동을 좋아함'
      ],
      advice: '디지털과 좋은 거리를 두고 있어요! 필요한 정보는 놓치지 않도록만 해주세요.'
    },
    digital: {
      type: '디지털 미니멀리스트',
      title: '🧘 디지털 미니멀리스트',
      description: '폰 없이도 행복! 의식적으로 디지털 사용을 최소화하는 타입입니다.',
      traits: [
        '의지력이 강하다',
        '현재에 집중하는 편',
        '아날로그 감성이 있다',
        '자기 주관이 뚜렷함'
      ],
      advice: '멋진 디지털 습관이에요! 다만 긴급 연락은 놓치지 않도록 해주세요.'
    }
  }
};
