// queue-behavior 테스트 데이터
export const queuebehaviorTest = {
  id: 'queue-behavior',
  title: '줄서기 행동 테스트',
  description: '줄 서서 기다릴 때 당신의 행동으로 알아보는 성격! 인내심 테스트도 포함?!',
  questions: [
    {
      id: 1,
      text: '맛집 앞에 긴 줄이 있으면?',
      options: [
        { text: '그래도 기다린다, 먹어봐야지', type: 'patient' },
        { text: '대기 시간 보고 결정', type: 'strategic' },
        { text: '다른 데 가자', type: 'efficient' },
        { text: '줄 서서 먹을 바엔 안 먹음', type: 'impatient' }
      ]
    },
    {
      id: 2,
      text: '줄 서는 동안 주로 하는 행동은?',
      options: [
        { text: '차분하게 생각 정리나 명상', type: 'patient' },
        { text: '휴대폰으로 시간 활용', type: 'strategic' },
        { text: '주변 구경하며 시간 보냄', type: 'efficient' },
        { text: '안절부절, 시계 계속 확인', type: 'impatient' }
      ]
    },
    {
      id: 3,
      text: '예상보다 줄이 안 줄어들면?',
      options: [
        { text: '이미 기다렸으니 끝까지', type: 'patient' },
        { text: '상황 봐서 포기도 고려', type: 'strategic' },
        { text: '직원에게 예상 시간 물어봄', type: 'efficient' },
        { text: '짜증나서 그냥 나감', type: 'impatient' }
      ]
    },
    {
      id: 4,
      text: '누군가 새치기를 하면?',
      options: [
        { text: '참는다, 별일 아니니까', type: 'patient' },
        { text: '상황 봐서 대응', type: 'strategic' },
        { text: '정중하게 지적함', type: 'efficient' },
        { text: '바로 말함, 못 참겠음', type: 'impatient' }
      ]
    },
    {
      id: 5,
      text: '카페에서 주문 줄이 길 때?',
      options: [
        { text: '기다리며 메뉴 천천히 고름', type: 'patient' },
        { text: '미리 메뉴 정해두고 효율적으로', type: 'strategic' },
        { text: '모바일 주문 앱 확인', type: 'efficient' },
        { text: '줄 짧을 때 다시 오거나 다른 곳', type: 'impatient' }
      ]
    },
    {
      id: 6,
      text: '놀이공원 인기 어트랙션 대기시간 60분이면?',
      options: [
        { text: '재밌을 테니 기다린다', type: 'patient' },
        { text: '패스트패스 있나 확인', type: 'strategic' },
        { text: '다른 거 타고 나중에 다시', type: 'efficient' },
        { text: '60분은 못 기다림', type: 'impatient' }
      ]
    },
    {
      id: 7,
      text: '은행이나 관공서 번호표를 뽑았을 때?',
      options: [
        { text: '차분하게 앉아서 기다림', type: 'patient' },
        { text: '순서 예상하고 다른 일 봄', type: 'strategic' },
        { text: '온라인으로 할 수 있나 확인', type: 'efficient' },
        { text: '왜 이렇게 느린지 짜증', type: 'impatient' }
      ]
    },
    {
      id: 8,
      text: '드라이브 스루가 막혀있으면?',
      options: [
        { text: '차 안에서 편하게 기다림', type: 'patient' },
        { text: '매장 안 줄이랑 비교', type: 'strategic' },
        { text: '주차하고 매장으로', type: 'efficient' },
        { text: '그냥 다른 데 감', type: 'impatient' }
      ]
    },
    {
      id: 9,
      text: '기다림이 끝나고 나서의 기분은?',
      options: [
        { text: '기다린 보람이 있네', type: 'patient' },
        { text: '다음엔 더 효율적으로 해야지', type: 'strategic' },
        { text: '시간이 좀 아깝긴 하네', type: 'efficient' },
        { text: '다신 안 와', type: 'impatient' }
      ]
    },
    {
      id: 10,
      text: '줄 서기에 대한 당신의 생각은?',
      options: [
        { text: '기다림도 삶의 일부', type: 'patient' },
        { text: '불가피하면 효율적으로 활용', type: 'strategic' },
        { text: '줄 서는 건 비효율적', type: 'efficient' },
        { text: '인생에서 줄은 최소화해야 함', type: 'impatient' }
      ]
    }
  ],
  results: {
    patient: {
      type: '인내의 아이콘',
      title: '🧘 인내의 아이콘',
      description: '기다림은 문제없어! 여유롭게 기다릴 줄 아는 평화로운 타입입니다.',
      traits: [
        '인내심이 강하다',
        '마음이 여유롭다',
        '스트레스를 덜 받음',
        '느긋한 성격'
      ],
      advice: '인내심은 미덕이지만, 가끔은 효율적인 방법을 찾아보는 것도 좋아요!'
    },
    strategic: {
      type: '전략적 대기자',
      title: '🧠 전략적 대기자',
      description: '기다림도 전략적으로! 시간을 효율적으로 활용하는 스마트한 타입입니다.',
      traits: [
        '계획적인 성격',
        '상황 판단이 빠르다',
        '멀티태스킹 능력',
        '효율을 중시함'
      ],
      advice: '전략적인 사고는 좋지만, 가끔은 그냥 멍하니 기다려보는 것도 휴식이 될 수 있어요!'
    },
    efficient: {
      type: '효율 추구자',
      title: '⚡ 효율 추구자',
      description: '시간이 금이다! 기다림을 최소화하고 효율을 극대화하는 타입입니다.',
      traits: [
        '효율을 최우선시함',
        '문제 해결력이 좋다',
        '시간 관리를 잘함',
        '실용적인 성격'
      ],
      advice: '효율도 좋지만, 가끔은 기다림 속에서 여유를 찾아보세요. 의외의 좋은 것을 발견할 수도 있어요!'
    },
    impatient: {
      type: '스피드 러버',
      title: '🚀 스피드 러버',
      description: '기다림은 싫어! 빠른 것을 좋아하고 지체를 참기 힘든 열정적인 타입입니다.',
      traits: [
        '에너지가 넘친다',
        '빠른 결정을 좋아함',
        '참을성이 부족한 편',
        '행동 지향적'
      ],
      advice: '빠른 것도 좋지만, 인내심을 기르면 더 많은 것을 얻을 수 있어요. 기다림도 연습이 필요해요!'
    }
  }
};
