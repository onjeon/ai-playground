// rejection-fear 테스트 데이터
export const rejectionfearTest = {
  id: 'rejection-fear',
  title: '거절 공포 지수 테스트',
  description: '거절당하는 것이 얼마나 두려운가요? 당신의 거절 공포 레벨과 원인을 분석해봅니다!',
  questions: [
    {
      id: 1,
      text: '부탁을 해야 하는 상황에서 당신은?',
      options: [
        { text: '필요하면 편하게 부탁함', type: 'low' },
        { text: '망설이다가 결국 부탁함', type: 'medium' },
        { text: '거절당할까 봐 혼자 해결하려 함', type: 'high' },
        { text: '부탁 자체를 못 함', type: 'severe' }
      ]
    },
    {
      id: 2,
      text: '고백이나 제안을 해야 할 때?',
      options: [
        { text: '될 대로 되라, 일단 함', type: 'low' },
        { text: '고민하다가 용기내서 함', type: 'medium' },
        { text: '거절당하면 어쩌지... 못함', type: 'high' },
        { text: '상상만 해도 두려움', type: 'severe' }
      ]
    },
    {
      id: 3,
      text: '거절당한 경험을 떠올리면?',
      options: [
        { text: '그럴 수 있지, 별거 아님', type: 'low' },
        { text: '조금 쓰리지만 괜찮음', type: 'medium' },
        { text: '오래 마음에 남음', type: 'high' },
        { text: '트라우마처럼 남아있음', type: 'severe' }
      ]
    },
    {
      id: 4,
      text: '새로운 사람에게 먼저 다가가는 것은?',
      options: [
        { text: '어렵지 않음, 자연스럽게', type: 'low' },
        { text: '좀 긴장되지만 함', type: 'medium' },
        { text: '상대가 먼저 오길 기다림', type: 'high' },
        { text: '거의 못함', type: 'severe' }
      ]
    },
    {
      id: 5,
      text: '의견을 말해야 하는 상황에서?',
      options: [
        { text: '솔직하게 말함', type: 'low' },
        { text: '눈치 보다가 말함', type: 'medium' },
        { text: '반대할까 봐 맞춰서 말함', type: 'high' },
        { text: '말 안 하고 넘김', type: 'severe' }
      ]
    },
    {
      id: 6,
      text: '면접이나 오디션 같은 평가 상황에서?',
      options: [
        { text: '긴장되지만 해볼 만함', type: 'low' },
        { text: '많이 긴장되고 떨림', type: 'medium' },
        { text: '떨어질 생각에 힘듦', type: 'high' },
        { text: '가능하면 피하고 싶음', type: 'severe' }
      ]
    },
    {
      id: 7,
      text: '거절의 이유가 "나" 때문이라고 느끼나요?',
      options: [
        { text: '아니, 상황이나 취향 차이', type: 'low' },
        { text: '가끔 그런 생각이 듦', type: 'medium' },
        { text: '내가 부족해서 그런 것 같음', type: 'high' },
        { text: '항상 내 탓인 것 같음', type: 'severe' }
      ]
    },
    {
      id: 8,
      text: '거절당했을 때 회복 속도는?',
      options: [
        { text: '빠름, 금방 털고 일어남', type: 'low' },
        { text: '며칠 정도 걸림', type: 'medium' },
        { text: '오래 감, 몇 주씩', type: 'high' },
        { text: '완전히 회복이 안 됨', type: 'severe' }
      ]
    },
    {
      id: 9,
      text: '거절이 두려워서 포기한 것이 있나요?',
      options: [
        { text: '거의 없음', type: 'low' },
        { text: '몇 번 있음', type: 'medium' },
        { text: '꽤 많음', type: 'high' },
        { text: '셀 수 없이 많음', type: 'severe' }
      ]
    },
    {
      id: 10,
      text: '거절에 대한 당신의 생각은?',
      options: [
        { text: '거절은 삶의 일부, 당연한 것', type: 'low' },
        { text: '불편하지만 받아들여야 하는 것', type: 'medium' },
        { text: '가능하면 피하고 싶은 것', type: 'high' },
        { text: '견딜 수 없이 두려운 것', type: 'severe' }
      ]
    }
  ],
  results: {
    low: {
      type: '거절 면역형',
      title: '💪 거절 면역형 (공포 지수: 15%)',
      description: '거절을 담담하게 받아들이는 타입! 두려움 없이 도전할 수 있는 건강한 마인드입니다.',
      fearLevel: '낮음 (15%)',
      traits: [
        '거절을 개인적으로 받아들이지 않음',
        '회복력이 좋음',
        '도전을 두려워하지 않음',
        '자존감이 안정적'
      ],
      strength: '원하는 것을 위해 행동할 수 있어요',
      advice: '훌륭한 마인드예요! 이 건강한 태도를 유지하세요.',
      tip: '다른 사람의 거절 공포를 이해하고 배려해주세요'
    },
    medium: {
      type: '일반적 회피형',
      title: '😊 일반적 회피형 (공포 지수: 45%)',
      description: '거절이 불편하지만 감당 가능한 타입. 대부분의 사람들과 비슷한 수준입니다.',
      fearLevel: '보통 (45%)',
      traits: [
        '거절에 약간의 두려움이 있음',
        '그래도 필요하면 도전함',
        '회복에 약간의 시간 필요',
        '적당한 자기 보호'
      ],
      strength: '균형 잡힌 접근 방식을 가지고 있어요',
      advice: '조금 더 자신감을 가져도 괜찮아요. 거절은 실패가 아니에요!',
      tip: '작은 거절부터 경험하며 내성을 키워보세요'
    },
    high: {
      type: '거절 예민형',
      title: '😰 거절 예민형 (공포 지수: 75%)',
      description: '거절에 매우 민감한 타입. 거절이 두려워서 기회를 놓치고 있을 수 있어요.',
      fearLevel: '높음 (75%)',
      traits: [
        '거절에 대한 두려움이 큼',
        '눈치를 많이 봄',
        '거절을 개인적 실패로 느낌',
        '도전을 회피하는 경향'
      ],
      strength: '상대의 감정에 민감해서 배려심이 깊어요',
      advice: '거절은 "당신"의 거부가 아니에요. 상황, 타이밍, 취향의 문제일 뿐이에요.',
      tip: '거절당해도 괜찮은 작은 것부터 시도해보세요'
    },
    severe: {
      type: '거절 공포형',
      title: '😱 거절 공포형 (공포 지수: 95%)',
      description: '거절에 대한 극심한 두려움이 있는 타입. 이것이 삶을 제한하고 있을 수 있어요.',
      fearLevel: '심각 (95%)',
      traits: [
        '거절 자체를 피하기 위해 노력',
        '자존감이 낮을 수 있음',
        '과거 상처가 있을 수 있음',
        '많은 기회를 놓침'
      ],
      strength: '민감한 만큼 깊은 공감 능력을 가지고 있어요',
      advice: '이 정도의 두려움은 혼자 감당하기 어려울 수 있어요. 전문가 상담을 고려해보세요.',
      tip: '거절 공포는 극복할 수 있어요. 작은 성공 경험부터 쌓아가세요'
    }
  }
};
