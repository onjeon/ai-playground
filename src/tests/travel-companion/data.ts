// travel-companion 테스트 데이터
export const travelCompanion = {
  id: 'travel-companion',
  title: '여행 동행자 테스트',
  description: '당신은 어떤 여행 메이트? 함께 여행 가고 싶은 사람인지 알아보세요!',
  questions: [
    {
      id: 1,
      text: '여행 계획을 세울 때 당신은?',
      options: [
        { text: '꼼꼼하게 일정표 만들기', type: 'planner' },
        { text: '큰 틀만 정하고 유동적으로', type: 'balanced' },
        { text: '그때그때 마음 가는 대로', type: 'spontaneous' },
        { text: '동행자에게 맡김', type: 'follower' }
      ]
    },
    {
      id: 2,
      text: '여행 중 예상치 못한 일이 생기면?',
      options: [
        { text: '빠르게 대안 찾아 해결', type: 'planner' },
        { text: '당황하지만 적응함', type: 'balanced' },
        { text: '오히려 재밌어! 모험이지', type: 'spontaneous' },
        { text: '누군가 해결해주길 기다림', type: 'follower' }
      ]
    },
    {
      id: 3,
      text: '여행 스타일은?',
      options: [
        { text: '알차게! 명소는 다 돌아야', type: 'planner' },
        { text: '적당히 보고 적당히 쉬고', type: 'balanced' },
        { text: '여유롭게, 카페에서 반나절도 OK', type: 'spontaneous' },
        { text: '동행자 스타일에 맞춤', type: 'follower' }
      ]
    },
    {
      id: 4,
      text: '여행 중 갈등이 생기면?',
      options: [
        { text: '논리적으로 해결 제안', type: 'planner' },
        { text: '서로 양보하며 조율', type: 'balanced' },
        { text: '뭘 해도 괜찮아~ 편하게', type: 'spontaneous' },
        { text: '내 의견보다 상대 의견 따름', type: 'follower' }
      ]
    },
    {
      id: 5,
      text: '여행 중 사진은?',
      options: [
        { text: '포토스팟 미리 조사, 촬영 계획', type: 'planner' },
        { text: '기록용으로 적당히', type: 'balanced' },
        { text: '좋은 순간 즉흥적으로', type: 'spontaneous' },
        { text: '찍어달라고 하면 찍어줌', type: 'follower' }
      ]
    },
    {
      id: 6,
      text: '숙소 선택 기준은?',
      options: [
        { text: '위치, 리뷰 꼼꼼히 비교', type: 'planner' },
        { text: '적당한 가격에 괜찮은 곳', type: 'balanced' },
        { text: '독특하고 재미있는 곳', type: 'spontaneous' },
        { text: '동행자가 고르면 따라감', type: 'follower' }
      ]
    },
    {
      id: 7,
      text: '여행 중 식사는?',
      options: [
        { text: '맛집 리스트 준비 완료', type: 'planner' },
        { text: '미리 조사한 것 + 현지 발견', type: 'balanced' },
        { text: '그때그때 끌리는 곳으로', type: 'spontaneous' },
        { text: '다른 사람이 가자는 곳으로', type: 'follower' }
      ]
    },
    {
      id: 8,
      text: '여행 예산 관리는?',
      options: [
        { text: '철저하게 관리', type: 'planner' },
        { text: '대략적으로, 융통성 있게', type: 'balanced' },
        { text: '여행이니까 좀 써도 괜찮아', type: 'spontaneous' },
        { text: '공동 관리에 맡김', type: 'follower' }
      ]
    },
    {
      id: 9,
      text: '여행 후 당신은?',
      options: [
        { text: '사진 정리, 후기 작성', type: 'planner' },
        { text: '추억 회상하며 정리', type: 'balanced' },
        { text: '또 가고 싶다! 다음 여행 생각', type: 'spontaneous' },
        { text: '좋았다~ 하고 끝', type: 'follower' }
      ]
    },
    {
      id: 10,
      text: '이상적인 여행 메이트는?',
      options: [
        { text: '계획에 협조적인 사람', type: 'planner' },
        { text: '유연하고 배려 있는 사람', type: 'balanced' },
        { text: '모험을 함께할 사람', type: 'spontaneous' },
        { text: '리드해주는 사람', type: 'follower' }
      ]
    }
  ],
  results: {
    planner: {
      type: '계획형 여행러',
      title: '📋 계획형 여행러',
      description: '완벽한 계획의 달인! 함께하면 알찬 여행이 보장돼요.',
      traits: ['꼼꼼한 계획', '정보력', '리더십', '효율 추구'],
      travelMate: '든든한 계획가',
      compatibility: '즉흥 여행러와는 조율 필요',
      advice: '계획은 좋지만, 여유도 남겨두세요. 예상치 못한 발견이 여행의 묘미니까요!'
    },
    balanced: {
      type: '균형형 여행러',
      title: '⚖️ 균형형 여행러',
      description: '계획과 즉흥의 밸런스! 누구와도 잘 맞는 이상적인 여행 메이트.',
      traits: ['유연함', '적응력', '조율 능력', '균형감'],
      travelMate: '만능 여행 메이트',
      compatibility: '누구와도 잘 맞음',
      advice: '최고의 여행 메이트예요! 이 유연함을 유지하세요.'
    },
    spontaneous: {
      type: '즉흥형 여행러',
      title: '🎲 즉흥형 여행러',
      description: '모험을 사랑하는 자유로운 영혼! 예상치 못한 재미를 선사해요.',
      traits: ['즉흥적', '모험심', '자유로움', '열린 마음'],
      travelMate: '모험 친구',
      compatibility: '계획형과는 조율 필요',
      advice: '모험심은 좋지만, 최소한의 예약은 해두세요. 막상 숙소가 없으면 힘들어요!'
    },
    follower: {
      type: '편안한 동행자',
      title: '😊 편안한 동행자',
      description: '갈등 없는 여행의 비결! 함께하면 편안한 타입.',
      traits: ['수용적', '갈등 회피', '편안함', '협조적'],
      travelMate: '편안한 동행자',
      compatibility: '리더형과 찰떡',
      advice: '편안함은 좋지만, 가고 싶은 곳은 말해보세요. 당신의 의견도 중요해요!'
    }
  }
};
