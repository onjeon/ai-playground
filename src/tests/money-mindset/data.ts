// money-mindset 테스트 데이터
export const moneyMindset = {
  id: 'money-mindset',
  title: '돈 마인드 테스트',
  description: '당신의 돈에 대한 마인드셋은? 금전 관념으로 보는 당신의 가치관!',
  questions: [
    {
      id: 1,
      text: '돈에 대한 첫 번째 생각은?',
      options: [
        { text: '안전과 안정', type: 'security' },
        { text: '자유와 경험', type: 'freedom' },
        { text: '성공의 척도', type: 'status' },
        { text: '그냥 필요한 것', type: 'practical' }
      ]
    },
    {
      id: 2,
      text: '여유 자금이 생기면?',
      options: [
        { text: '바로 저축/투자', type: 'security' },
        { text: '경험에 사용 (여행, 취미)', type: 'freedom' },
        { text: '나를 위한 것 구매', type: 'status' },
        { text: '필요한 게 있으면 쓰고 나머지 저축', type: 'practical' }
      ]
    },
    {
      id: 3,
      text: '돈 쓸 때 가장 행복한 순간은?',
      options: [
        { text: '통장 잔고가 늘어날 때', type: 'security' },
        { text: '좋은 경험을 할 때', type: 'freedom' },
        { text: '원하는 걸 살 때', type: 'status' },
        { text: '필요한 걸 해결할 때', type: 'practical' }
      ]
    },
    {
      id: 4,
      text: '재정 목표는?',
      options: [
        { text: '노후 대비, 비상금 확보', type: 'security' },
        { text: '하고 싶은 것 할 수 있는 자유', type: 'freedom' },
        { text: '경제적 성공, 부 축적', type: 'status' },
        { text: '불편함 없이 살 수 있는 정도', type: 'practical' }
      ]
    },
    {
      id: 5,
      text: '비싼 것을 사고 싶을 때?',
      options: [
        { text: '꼭 필요한지 오래 고민', type: 'security' },
        { text: '가치 있는 경험이면 OK', type: 'freedom' },
        { text: '원하면 사는 편', type: 'status' },
        { text: '가성비 따지고 결정', type: 'practical' }
      ]
    },
    {
      id: 6,
      text: '돈이 부족하면 느끼는 감정은?',
      options: [
        { text: '불안, 초조', type: 'security' },
        { text: '자유가 제한되는 느낌', type: 'freedom' },
        { text: '자존감 하락', type: 'status' },
        { text: '불편함, 해결해야 할 문제', type: 'practical' }
      ]
    },
    {
      id: 7,
      text: '가계부/재정 관리는?',
      options: [
        { text: '철저하게 관리', type: 'security' },
        { text: '대략적으로, 자유롭게', type: 'freedom' },
        { text: '관심 적음, 쓰고 싶은 대로', type: 'status' },
        { text: '필요한 만큼 관리', type: 'practical' }
      ]
    },
    {
      id: 8,
      text: '돈에 대한 불안이?',
      options: [
        { text: '있음, 항상 걱정됨', type: 'security' },
        { text: '가끔, 자유가 제한될까 봐', type: 'freedom' },
        { text: '별로, 벌면 되니까', type: 'status' },
        { text: '있으면 좋고 없으면 아쉬운 정도', type: 'practical' }
      ]
    },
    {
      id: 9,
      text: '선물/기부에 대한 생각은?',
      options: [
        { text: '예산 내에서 신중하게', type: 'security' },
        { text: '기꺼이, 경험과 연결을 위해', type: 'freedom' },
        { text: '좋은 거로, 품격 있게', type: 'status' },
        { text: '적당히, 부담 없는 선에서', type: 'practical' }
      ]
    },
    {
      id: 10,
      text: '돈과 행복의 관계는?',
      options: [
        { text: '돈이 있어야 안심되고 행복', type: 'security' },
        { text: '돈은 자유를 위한 도구', type: 'freedom' },
        { text: '돈은 성공과 인정의 증거', type: 'status' },
        { text: '돈은 생활의 필수품', type: 'practical' }
      ]
    }
  ],
  results: {
    security: {
      type: '안정 추구형',
      title: '🏦 안정 추구형',
      description: '돈은 안전의 근원! 미래를 위해 저축하고 대비하는 신중한 타입.',
      traits: ['안전 지향', '계획적', '저축 중시', '리스크 회피'],
      moneyStyle: '안정형',
      advice: '안전 추구는 좋지만, 가끔은 현재를 위해 쓰는 것도 괜찮아요! 돈은 쓰라고 있는 거예요.'
    },
    freedom: {
      type: '자유 추구형',
      title: '🌍 자유 추구형',
      description: '돈은 자유의 도구! 경험과 자유를 위해 돈을 쓰는 타입.',
      traits: ['경험 중시', '자유 지향', '유연함', '현재 중심'],
      moneyStyle: '경험형',
      advice: '경험에 투자하는 건 좋지만, 미래를 위한 저축도 조금씩 해두세요!'
    },
    status: {
      type: '성취 추구형',
      title: '🏆 성취 추구형',
      description: '돈은 성공의 증거! 경제적 성취를 추구하는 야망 있는 타입.',
      traits: ['성공 지향', '야망', '소비 선호', '지위 의식'],
      moneyStyle: '성취형',
      advice: '성취욕은 좋은 동력이에요! 하지만 돈이 전부가 아니라는 것도 기억하세요.'
    },
    practical: {
      type: '실용 추구형',
      title: '⚖️ 실용 추구형',
      description: '돈은 도구! 필요한 만큼 쓰고 관리하는 균형 잡힌 타입.',
      traits: ['실용적', '균형', '합리적', '감정 분리'],
      moneyStyle: '실용형',
      advice: '가장 건강한 금전 관념이에요! 이 균형을 유지하세요.'
    }
  }
};
