// work-survival 테스트 데이터
export const worksurvivalTest = {
  id: 'work-survival',
  title: '직장 생존 유형 테스트',
  description: '당신은 회사에서 어떻게 살아남고 있나요? 직장 생존 전략과 유형을 분석해봅니다!',
  questions: [
    {
      id: 1,
      text: '상사가 무리한 요구를 할 때?',
      options: [
        { text: '논리적으로 안 된다고 설명', type: 'assertive' },
        { text: '일단 알겠다고 하고 적당히 타협', type: 'adaptive' },
        { text: '묵묵히 수락하고 야근으로 해결', type: 'endure' },
        { text: '다른 사람에게 슬쩍 넘김', type: 'smart' }
      ]
    },
    {
      id: 2,
      text: '사내 정치에 대한 당신의 태도는?',
      options: [
        { text: '관여 안 함, 실력으로 승부', type: 'assertive' },
        { text: '적당히 관계 관리는 함', type: 'adaptive' },
        { text: '눈에 안 띄게 조용히', type: 'endure' },
        { text: '정치도 능력, 적극 활용', type: 'smart' }
      ]
    },
    {
      id: 3,
      text: '공이 있을 때 어떻게 하나요?',
      options: [
        { text: '내 성과를 명확히 어필', type: 'assertive' },
        { text: '자연스럽게 알려지게 함', type: 'adaptive' },
        { text: '팀 공으로 돌림', type: 'endure' },
        { text: '윗사람에게 전략적으로 보고', type: 'smart' }
      ]
    },
    {
      id: 4,
      text: '동료와 갈등이 생겼을 때?',
      options: [
        { text: '직접 대화로 해결', type: 'assertive' },
        { text: '둘러서 풀거나 시간이 해결', type: 'adaptive' },
        { text: '내가 참음', type: 'endure' },
        { text: '상황에 따라 다르게 대처', type: 'smart' }
      ]
    },
    {
      id: 5,
      text: '회의에서 의견 충돌이 있을 때?',
      options: [
        { text: '내 의견을 논리적으로 주장', type: 'assertive' },
        { text: '분위기 봐서 적당히', type: 'adaptive' },
        { text: '다수 의견에 따름', type: 'endure' },
        { text: '결정권자 눈치를 봄', type: 'smart' }
      ]
    },
    {
      id: 6,
      text: '승진/연봉에 대한 접근법은?',
      options: [
        { text: '실력으로 당당하게 요구', type: 'assertive' },
        { text: '적당한 시기에 넌지시', type: 'adaptive' },
        { text: '알아서 해주겠지 기다림', type: 'endure' },
        { text: '인맥과 타이밍 활용', type: 'smart' }
      ]
    },
    {
      id: 7,
      text: '불필요한 회식이나 모임에 대해?',
      options: [
        { text: '안 가고 싶으면 안 감', type: 'assertive' },
        { text: '가끔은 가고, 가끔은 빠짐', type: 'adaptive' },
        { text: '불편해도 참석함', type: 'endure' },
        { text: '중요한 것만 선별 참석', type: 'smart' }
      ]
    },
    {
      id: 8,
      text: '내 업무 범위 밖의 일을 시키면?',
      options: [
        { text: '그건 제 일이 아닌데요?', type: 'assertive' },
        { text: '이번만 하고 다음엔 말함', type: 'adaptive' },
        { text: '그냥 함', type: 'endure' },
        { text: '협상 카드로 활용', type: 'smart' }
      ]
    },
    {
      id: 9,
      text: '회사에서 자신을 어떻게 포지셔닝하고 있나요?',
      options: [
        { text: '능력 있고 할 말 하는 사람', type: 'assertive' },
        { text: '무난하고 협조적인 사람', type: 'adaptive' },
        { text: '조용하고 성실한 사람', type: 'endure' },
        { text: '필요할 때 빛나는 사람', type: 'smart' }
      ]
    },
    {
      id: 10,
      text: '직장 생존에서 가장 중요한 것은?',
      options: [
        { text: '실력과 당당함', type: 'assertive' },
        { text: '적응력과 융통성', type: 'adaptive' },
        { text: '인내심과 성실함', type: 'endure' },
        { text: '눈치와 전략', type: 'smart' }
      ]
    }
  ],
  results: {
    assertive: {
      type: '당당한 실력파',
      title: '🦁 당당한 실력파',
      description: '실력으로 승부하고 할 말은 하는 타입! 자신감 있게 직장 생활을 하고 있습니다.',
      survivalStrategy: '실력 + 당당함',
      traits: [
        '자기 주장이 명확함',
        '실력을 어필할 줄 암',
        '부당한 것은 참지 않음',
        '정치보다 성과로 승부'
      ],
      strength: '명확한 커뮤니케이션, 존경받는 이미지',
      weakness: '융통성 부족으로 보일 수 있음',
      advice: '당당함은 멋지지만, 조직 문화도 이해해보세요. 가끔은 유연함이 필요해요.'
    },
    adaptive: {
      type: '균형 잡힌 적응러',
      title: '🌊 균형 잡힌 적응러',
      description: '상황에 맞게 유연하게 대처하는 타입! 밸런스 있는 직장 생활을 하고 있습니다.',
      survivalStrategy: '적응력 + 융통성',
      traits: [
        '상황 판단이 빠름',
        '적당히 맞추고 적당히 주장',
        '관계도 업무도 무난하게',
        '스트레스 관리가 양호함'
      ],
      strength: '어디서나 적응하는 능력',
      weakness: '때로는 원칙이 없어 보일 수 있음',
      advice: '균형 감각이 훌륭해요! 가끔은 확실한 입장을 밝히는 것도 필요해요.'
    },
    endure: {
      type: '묵묵한 인내형',
      title: '🐢 묵묵한 인내형',
      description: '참고 견디며 성실하게 일하는 타입! 묵묵히 자리를 지키고 있습니다.',
      survivalStrategy: '인내 + 성실',
      traits: [
        '불평 없이 일함',
        '시키는 건 다 함',
        '갈등을 피함',
        '조용히 자리를 지킴'
      ],
      strength: '신뢰받는 성실한 이미지',
      weakness: '이용당하거나 손해볼 수 있음',
      advice: '성실함은 미덕이지만, 가끔은 자기 주장도 하세요. 참기만 하면 지쳐요.'
    },
    smart: {
      type: '전략적 생존러',
      title: '🦊 전략적 생존러',
      description: '눈치 빠르고 전략적으로 움직이는 타입! 영리하게 직장 생활을 하고 있습니다.',
      survivalStrategy: '눈치 + 전략',
      traits: [
        '상황과 사람을 읽음',
        '정치를 활용할 줄 암',
        '타이밍을 잘 잡음',
        '효율적으로 움직임'
      ],
      strength: '승진과 기회를 잡는 능력',
      weakness: '신뢰를 잃을 수 있음',
      advice: '전략도 중요하지만, 진정성도 챙기세요. 사람들은 진심을 알아봐요.'
    }
  }
};
