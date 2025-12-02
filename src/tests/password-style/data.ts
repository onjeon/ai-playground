// password-style 테스트 데이터
export const passwordstyleTest = {
  id: 'password-style',
  title: '비밀번호 스타일 테스트',
  description: '비밀번호 설정 방식으로 알아보는 당신의 성격! 어떤 패턴을 사용하시나요?',
  questions: [
    {
      id: 1,
      text: '새 계정을 만들 때 비밀번호는?',
      options: [
        { text: '항상 쓰는 비밀번호 그대로', type: 'lazy' },
        { text: '기본 패턴에 사이트명 조금 섞기', type: 'pattern' },
        { text: '랜덤 생성기로 복잡하게', type: 'secure' },
        { text: '그때그때 생각나는 대로', type: 'random' }
      ]
    },
    {
      id: 2,
      text: '비밀번호에 주로 들어가는 것은?',
      options: [
        { text: '생일, 전화번호 등 기억하기 쉬운 것', type: 'lazy' },
        { text: '나만 아는 규칙이 있음', type: 'pattern' },
        { text: '대소문자, 숫자, 특수문자 조합', type: 'secure' },
        { text: '그냥 손이 가는 대로 치는 것들', type: 'random' }
      ]
    },
    {
      id: 3,
      text: '"비밀번호가 너무 약합니다"라고 뜨면?',
      options: [
        { text: '뒤에 1이나 ! 하나 추가', type: 'lazy' },
        { text: '규칙에 맞게 살짝 수정', type: 'pattern' },
        { text: '조건 다 맞출 때까지 수정', type: 'secure' },
        { text: '아예 다른 비밀번호로 바꿈', type: 'random' }
      ]
    },
    {
      id: 4,
      text: '비밀번호 관리 방법은?',
      options: [
        { text: '다 똑같아서 기억할 필요 없음', type: 'lazy' },
        { text: '규칙만 기억하면 됨', type: 'pattern' },
        { text: '비밀번호 관리 앱 사용', type: 'secure' },
        { text: '잊어버리면 그때그때 재설정', type: 'random' }
      ]
    },
    {
      id: 5,
      text: '비밀번호 변경 요청이 왔을 때?',
      options: [
        { text: '뒤에 숫자만 바꿈 (1→2)', type: 'lazy' },
        { text: '패턴 유지하면서 일부 수정', type: 'pattern' },
        { text: '완전히 새로운 비밀번호로', type: 'secure' },
        { text: '귀찮아서 미룸', type: 'random' }
      ]
    },
    {
      id: 6,
      text: '비밀번호를 까먹었을 때?',
      options: [
        { text: '평소 쓰는 거 몇 개 시도해봄', type: 'lazy' },
        { text: '내 규칙 떠올리면 맞출 수 있음', type: 'pattern' },
        { text: '비밀번호 관리 앱 확인', type: 'secure' },
        { text: '"비밀번호 찾기" 바로 클릭', type: 'random' }
      ]
    },
    {
      id: 7,
      text: '중요한 계정(은행 등)의 비밀번호는?',
      options: [
        { text: '다른 것과 비슷하게...', type: 'lazy' },
        { text: '특별히 더 복잡한 패턴 적용', type: 'pattern' },
        { text: '완전 별도의 강력한 비밀번호', type: 'secure' },
        { text: '생체인증만 믿음', type: 'random' }
      ]
    },
    {
      id: 8,
      text: '2단계 인증에 대해?',
      options: [
        { text: '귀찮아서 안 함', type: 'lazy' },
        { text: '중요한 것만 설정', type: 'pattern' },
        { text: '가능한 모든 곳에 설정', type: 'secure' },
        { text: '뭔지 잘 모름', type: 'random' }
      ]
    },
    {
      id: 9,
      text: '친구에게 비밀번호 물어보면 알려줄 수 있어?',
      options: [
        { text: '응, 다 비슷해서 부끄럽지만...', type: 'lazy' },
        { text: '규칙만 알면 다 알 수 있어서 비밀', type: 'pattern' },
        { text: '나도 모름, 앱에 저장되어 있어', type: 'secure' },
        { text: '나도 기억 안 나', type: 'random' }
      ]
    },
    {
      id: 10,
      text: '이상적인 비밀번호란?',
      options: [
        { text: '기억하기 쉬운 것', type: 'lazy' },
        { text: '나만의 규칙으로 기억도 되고 안전한 것', type: 'pattern' },
        { text: '복잡하고 유추 불가능한 것', type: 'secure' },
        { text: '비밀번호 없이 사는 세상', type: 'random' }
      ]
    }
  ],
  results: {
    lazy: {
      type: '편의 추구형',
      title: '😴 편의 추구형',
      description: '기억하기 쉬운 게 최고! 편리함을 추구하는 현실적인 타입입니다.',
      traits: [
        '효율을 중시한다',
        '복잡한 것을 싫어함',
        '실용적인 성격',
        '귀찮은 것을 피함'
      ],
      advice: '편리함도 좋지만 보안도 중요해요! 최소한 중요 계정은 다른 비밀번호를 써보세요.'
    },
    pattern: {
      type: '체계적 관리형',
      title: '🧩 체계적 관리형',
      description: '나만의 규칙이 있다! 기억과 보안 사이의 균형을 맞추는 전략적인 타입입니다.',
      traits: [
        '논리적인 사고',
        '체계적인 성격',
        '규칙을 만들기 좋아함',
        '효율적인 관리 능력'
      ],
      advice: '좋은 전략이에요! 다만 패턴이 노출되면 위험하니 주기적으로 규칙을 바꿔보세요.'
    },
    secure: {
      type: '보안 철저형',
      title: '🔐 보안 철저형',
      description: '보안이 최우선! 디지털 안전을 위해 철저하게 관리하는 신중한 타입입니다.',
      traits: [
        '신중하고 꼼꼼하다',
        '위험을 미리 대비함',
        '책임감이 강하다',
        '디테일을 놓치지 않음'
      ],
      advice: '훌륭한 보안 습관이에요! 비밀번호 관리 앱 백업도 잊지 마세요.'
    },
    random: {
      type: '즉흥 자유형',
      title: '🎲 즉흥 자유형',
      description: '그때그때 다르게! 즉흥적이고 자유로운 영혼의 소유자입니다.',
      traits: [
        '자유로운 성격',
        '즉흥적인 결정',
        '규칙에 얽매이지 않음',
        '순간에 충실함'
      ],
      advice: '자유로운 건 좋지만, 비밀번호만큼은 체계가 필요해요! 비밀번호 관리 앱 사용을 추천드려요.'
    }
  }
};
