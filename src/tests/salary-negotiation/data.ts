// salary-negotiation 테스트 데이터
export const salarynegotiationTest = {
  id: 'salary-negotiation',
  title: '연봉 협상력 테스트',
  description: '당신의 연봉 협상 스타일은? 협상 능력과 태도로 알아보는 연봉 협상력!',
  questions: [
    {
      id: 1,
      text: '연봉 협상 시즌이 다가오면?',
      options: [
        { text: '미리 성과 정리하고 협상 준비', type: 'strategic' },
        { text: '어떻게 말할지 고민됨', type: 'cautious' },
        { text: '그냥 회사에서 주는 대로', type: 'passive' },
        { text: '솔직하게 원하는 만큼 말함', type: 'direct' }
      ]
    },
    {
      id: 2,
      text: '면접에서 희망 연봉을 물어보면?',
      options: [
        { text: '시장 조사 기반으로 제시', type: 'strategic' },
        { text: '적당히 조심스럽게 말함', type: 'cautious' },
        { text: '회사 기준에 맞추겠다고 함', type: 'passive' },
        { text: '딱 원하는 금액 말함', type: 'direct' }
      ]
    },
    {
      id: 3,
      text: '연봉 인상폭이 기대 이하면?',
      options: [
        { text: '근거를 들어 재협상 시도', type: 'strategic' },
        { text: '불만이지만 일단 참음', type: 'cautious' },
        { text: '어쩔 수 없지 하고 수용', type: 'passive' },
        { text: '직접적으로 불만을 표현', type: 'direct' }
      ]
    },
    {
      id: 4,
      text: '연봉 협상 전 준비하는 것은?',
      options: [
        { text: '성과 자료, 시장 연봉, 협상 전략', type: 'strategic' },
        { text: '대충 할 말 정리', type: 'cautious' },
        { text: '특별히 준비 안 함', type: 'passive' },
        { text: '원하는 금액만 정해감', type: 'direct' }
      ]
    },
    {
      id: 5,
      text: '동료보다 연봉이 낮다는 걸 알게 되면?',
      options: [
        { text: '데이터로 협상 카드 준비', type: 'strategic' },
        { text: '속상하지만 어떻게 말할지 고민', type: 'cautious' },
        { text: '그럴 수도 있지... 참음', type: 'passive' },
        { text: '바로 따지러 감', type: 'direct' }
      ]
    },
    {
      id: 6,
      text: '이직 제안이 왔을 때 협상 방식은?',
      options: [
        { text: '현재 연봉 + 희망 인상률 제시', type: 'strategic' },
        { text: '상대 제안 먼저 듣고 결정', type: 'cautious' },
        { text: '제시해주는 대로', type: 'passive' },
        { text: '원하는 금액 당당하게 요구', type: 'direct' }
      ]
    },
    {
      id: 7,
      text: '협상이 결렬될 것 같을 때?',
      options: [
        { text: '대안을 제시하며 협상 지속', type: 'strategic' },
        { text: '한발 물러서서 타협점 찾음', type: 'cautious' },
        { text: '그냥 포기함', type: 'passive' },
        { text: '내 조건 안 맞으면 안 해', type: 'direct' }
      ]
    },
    {
      id: 8,
      text: '연봉 외 복지 협상에 대해?',
      options: [
        { text: '연봉 + 복지 패키지로 협상', type: 'strategic' },
        { text: '연봉 위주로, 복지는 보너스', type: 'cautious' },
        { text: '복지까지 협상할 생각 없음', type: 'passive' },
        { text: '다 달라고 요구함', type: 'direct' }
      ]
    },
    {
      id: 9,
      text: '"더 줄 수 없다"고 하면?',
      options: [
        { text: '다른 조건(직책, 휴가 등) 협상', type: 'strategic' },
        { text: '아쉽지만 수용', type: 'cautious' },
        { text: '그러려니 함', type: 'passive' },
        { text: '그럼 다른 회사 알아봄', type: 'direct' }
      ]
    },
    {
      id: 10,
      text: '연봉 협상에 대한 당신의 생각은?',
      options: [
        { text: '필수, 내 가치는 내가 정한다', type: 'strategic' },
        { text: '필요하지만 어렵고 부담됨', type: 'cautious' },
        { text: '회사가 알아서 해주면 좋겠음', type: 'passive' },
        { text: '원하는 건 말해야지', type: 'direct' }
      ]
    }
  ],
  results: {
    strategic: {
      type: '전략적 협상가',
      title: '♟️ 전략적 협상가',
      description: '협상도 전략이다! 철저한 준비와 논리로 원하는 것을 얻어내는 타입입니다.',
      traits: [
        '준비성이 철저함',
        '논리적인 접근',
        '협상 스킬이 좋음',
        '자기 가치를 아는 편'
      ],
      advice: '전략적인 접근은 훌륭해요! 하지만 관계도 중요하니, 윈-윈 협상을 목표로 해보세요.'
    },
    cautious: {
      type: '신중한 협상자',
      title: '🤔 신중한 협상자',
      description: '조심스럽게 접근! 협상은 하고 싶지만 부담을 느끼는 타입입니다.',
      traits: [
        '신중한 성격',
        '관계를 중시함',
        '갈등을 피하는 편',
        '적당한 타협점 추구'
      ],
      advice: '더 당당해져도 괜찮아요! 당신의 가치를 인정하고 말하는 연습을 해보세요.'
    },
    passive: {
      type: '수동적 수용자',
      title: '🙂 수동적 수용자',
      description: '회사가 알아서 해주겠지! 협상보다 주어진 것에 만족하는 타입입니다.',
      traits: [
        '순응적인 성격',
        '갈등을 매우 싫어함',
        '현상 유지 선호',
        '협상에 소극적'
      ],
      advice: '가만히 있으면 손해볼 수 있어요. 작은 것부터 요청하는 연습을 해보세요!'
    },
    direct: {
      type: '직설적 요구자',
      title: '💪 직설적 요구자',
      description: '원하는 건 말한다! 직접적이고 당당하게 자기 의견을 내는 타입입니다.',
      traits: [
        '당당한 성격',
        '직설적인 표현',
        '자기 확신이 있음',
        '타협을 잘 안 함'
      ],
      advice: '당당한 건 좋지만, 상대방 입장도 들어보세요. 너무 직설적이면 역효과가 날 수 있어요.'
    }
  }
};
