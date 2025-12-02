// toxic-meter 테스트 데이터
export const toxicmeterTest = {
  id: 'toxic-meter',
  title: '독성 관계 측정기',
  description: '내 인간관계는 건강할까? 독성 관계 패턴을 체크하고 더 건강한 관계를 만들어보세요!',
  questions: [
    {
      id: 1,
      text: '친구/연인에게 화가 났을 때 당신은?',
      options: [
        { text: '바로 솔직하게 말하고 대화로 푼다', type: 'healthy' },
        { text: '조용히 넘기지만 속으로 기억해둔다', type: 'passive' },
        { text: '무시하거나 냉전으로 대응한다', type: 'avoidant' },
        { text: '상대가 먼저 눈치채길 기대한다', type: 'indirect' }
      ]
    },
    {
      id: 2,
      text: '상대방이 나 없이 다른 친구를 만났을 때?',
      options: [
        { text: '즐거운 시간 보냈으면 좋겠다고 생각', type: 'healthy' },
        { text: '약간 서운하지만 내색 안 함', type: 'passive' },
        { text: '왜 나한테 먼저 말 안 했지? 의심함', type: 'avoidant' },
        { text: '나도 다른 사람 만나서 질투 유발', type: 'indirect' }
      ]
    },
    {
      id: 3,
      text: '의견 충돌이 생겼을 때 당신의 방식은?',
      options: [
        { text: '서로의 입장을 이해하려 노력', type: 'healthy' },
        { text: '내 의견을 굽히고 상대에게 맞춤', type: 'passive' },
        { text: '내 의견이 맞다고 끝까지 주장', type: 'avoidant' },
        { text: '일단 동의한 척하고 나중에 딴소리', type: 'indirect' }
      ]
    },
    {
      id: 4,
      text: '상대방의 성공/좋은 소식을 들었을 때?',
      options: [
        { text: '진심으로 축하하고 기뻐해준다', type: 'healthy' },
        { text: '축하하면서도 내 상황과 비교됨', type: 'passive' },
        { text: '별 반응 없이 내 이야기로 전환', type: 'avoidant' },
        { text: '"좋겠다~"하면서 은근 폄하', type: 'indirect' }
      ]
    },
    {
      id: 5,
      text: '관계에서 문제가 생기면?',
      options: [
        { text: '솔직하게 이야기하고 함께 해결', type: 'healthy' },
        { text: '그냥 참고 시간이 해결해주길 기다림', type: 'passive' },
        { text: '상대 탓을 하거나 거리를 둠', type: 'avoidant' },
        { text: '제3자에게 험담하며 스트레스 풀이', type: 'indirect' }
      ]
    },
    {
      id: 6,
      text: '약속을 잡을 때 주로 어떤 편인가요?',
      options: [
        { text: '서로 편한 시간을 맞춰본다', type: 'healthy' },
        { text: '항상 상대 스케줄에 맞춰준다', type: 'passive' },
        { text: '내 스케줄 위주로 정한다', type: 'avoidant' },
        { text: '애매하게 대답하고 기다리게 함', type: 'indirect' }
      ]
    },
    {
      id: 7,
      text: '상대방이 실수했을 때 당신은?',
      options: [
        { text: '실수는 누구나 한다고 이해해줌', type: 'healthy' },
        { text: '괜찮다고 하면서 속으론 실망', type: 'passive' },
        { text: '실수를 지적하고 기억해둠', type: 'avoidant' },
        { text: '나중에 써먹을 일이 있겠지 생각', type: 'indirect' }
      ]
    },
    {
      id: 8,
      text: '오랫동안 연락 없던 친구가 부탁을 해오면?',
      options: [
        { text: '가능하면 도와주고 안부도 물음', type: 'healthy' },
        { text: '거절하고 싶지만 어쩔 수 없이 도움', type: 'passive' },
        { text: '"왜 나한테만 연락해?" 투정', type: 'avoidant' },
        { text: '도와주면서 빚 지었다고 각인시킴', type: 'indirect' }
      ]
    },
    {
      id: 9,
      text: '관계에서 당신의 에너지 레벨은?',
      options: [
        { text: '만나면 에너지가 충전되는 느낌', type: 'healthy' },
        { text: '만나고 나면 뭔가 지친 느낌', type: 'passive' },
        { text: '만나기 전부터 피곤함을 느낌', type: 'avoidant' },
        { text: '컨디션에 따라 극과 극', type: 'indirect' }
      ]
    },
    {
      id: 10,
      text: '관계에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '서로에 대한 존중과 신뢰', type: 'healthy' },
        { text: '갈등 없이 평화롭게 지내는 것', type: 'passive' },
        { text: '내 영역과 자유를 침범받지 않는 것', type: 'avoidant' },
        { text: '상대가 나를 얼마나 필요로 하는지', type: 'indirect' }
      ]
    }
  ],
  results: {
    healthy: {
      type: '건강한 관계 달인',
      title: '💚 건강한 관계 달인',
      description: '독성 지수 10%! 당신은 건강하고 성숙한 관계를 맺는 달인입니다!',
      traits: [
        '솔직하고 열린 소통을 추구',
        '상대를 있는 그대로 존중',
        '갈등도 성장의 기회로 활용',
        '경계선을 지키면서도 친밀함 유지'
      ],
      healthLevel: '매우 건강',
      advice: '당신의 관계 방식은 정말 건강해요! 이 좋은 에너지를 주변에도 나눠주세요. 가끔은 자신을 위한 시간도 잊지 마세요!'
    },
    passive: {
      type: '수동적 희생자',
      title: '😔 수동적 희생자',
      description: '독성 지수 45%! 좋은 관계를 원하지만 자신을 너무 희생하고 있어요.',
      traits: [
        '갈등을 피하기 위해 참는 편',
        '상대 눈치를 많이 봄',
        '거절을 어려워함',
        '속마음을 잘 표현하지 못함'
      ],
      healthLevel: '주의 필요',
      advice: '당신의 배려심은 소중하지만, 자신의 감정도 중요해요. "No"라고 말하는 연습을 해보세요. 건강한 관계는 일방적인 희생이 아닌 균형에서 옵니다!'
    },
    avoidant: {
      type: '회피형 독립주의자',
      title: '🛡️ 회피형 독립주의자',
      description: '독성 지수 60%! 상처받기 싫어서 벽을 쌓고 있진 않나요?',
      traits: [
        '감정적 친밀함을 불편해함',
        '문제가 생기면 거리를 둠',
        '상대를 쉽게 믿지 못함',
        '혼자가 편하다고 느낌'
      ],
      healthLevel: '개선 필요',
      advice: '자기 보호는 중요하지만, 모든 벽이 당신을 지켜주진 않아요. 신뢰할 수 있는 한 사람에게 조금씩 마음을 열어보세요. 연결은 생각보다 따뜻합니다.'
    },
    indirect: {
      type: '간접적 조종자',
      title: '🎭 간접적 조종자',
      description: '독성 지수 75%! 무의식적으로 관계를 조종하고 있을 수 있어요.',
      traits: [
        '직접 말하기보다 돌려서 표현',
        '상대의 반응을 테스트함',
        '죄책감이나 의무감을 유발',
        '관계에서 주도권을 원함'
      ],
      healthLevel: '심각한 주의',
      advice: '당신도 모르게 관계를 복잡하게 만들고 있어요. 솔직한 소통은 무섭지만, 결국 더 깊은 연결을 만들어줍니다. 직접적으로 말하는 연습을 시작해보세요!'
    }
  }
};
