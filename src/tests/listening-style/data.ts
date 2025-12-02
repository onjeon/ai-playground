// listening-style 테스트 데이터
export const listeningStyle = {
  id: 'listening-style',
  title: '경청 스타일 테스트',
  description: '당신은 어떻게 듣나요? 경청 패턴을 분석하고 더 좋은 대화 상대가 되어보세요!',
  questions: [
    {
      id: 1,
      text: '친구가 고민을 털어놓으면?',
      options: [
        { text: '바로 해결책을 제시함', type: 'solver' },
        { text: '공감하며 들어줌', type: 'empathic' },
        { text: '내 비슷한 경험을 나눔', type: 'sharer' },
        { text: '질문하며 더 깊이 들음', type: 'explorer' }
      ]
    },
    {
      id: 2,
      text: '대화 중 상대가 말할 때?',
      options: [
        { text: '다음에 할 말을 생각함', type: 'solver' },
        { text: '표정과 감정에 집중', type: 'empathic' },
        { text: '내 경험과 연결지어 생각', type: 'sharer' },
        { text: '궁금한 점을 메모해둠', type: 'explorer' }
      ]
    },
    {
      id: 3,
      text: '상대가 우울하다고 하면?',
      options: [
        { text: '"이렇게 해봐" 조언을 줌', type: 'solver' },
        { text: '"많이 힘들겠다" 공감 표현', type: 'empathic' },
        { text: '"나도 그런 적 있어" 경험 공유', type: 'sharer' },
        { text: '"어떤 점이 제일 힘들어?" 질문', type: 'explorer' }
      ]
    },
    {
      id: 4,
      text: '대화에서 침묵이 생기면?',
      options: [
        { text: '어색해서 채우려 함', type: 'solver' },
        { text: '상대가 정리할 시간으로 이해', type: 'empathic' },
        { text: '내 이야기를 시작함', type: 'sharer' },
        { text: '다음 질문을 생각함', type: 'explorer' }
      ]
    },
    {
      id: 5,
      text: '상대의 말에 동의하지 않을 때?',
      options: [
        { text: '바로 내 의견을 말함', type: 'solver' },
        { text: '일단 듣고 나중에 조심스럽게', type: 'empathic' },
        { text: '"근데 나는..." 하고 내 생각 공유', type: 'sharer' },
        { text: '"왜 그렇게 생각해?" 이유를 물음', type: 'explorer' }
      ]
    },
    {
      id: 6,
      text: '대화 후 주로 기억나는 것은?',
      options: [
        { text: '무슨 문제가 있었는지, 어떻게 해결할지', type: 'solver' },
        { text: '상대의 감정과 분위기', type: 'empathic' },
        { text: '나와 비슷한 경험들', type: 'sharer' },
        { text: '흥미로웠던 세부 내용들', type: 'explorer' }
      ]
    },
    {
      id: 7,
      text: '좋은 경청자란?',
      options: [
        { text: '실질적인 도움을 주는 사람', type: 'solver' },
        { text: '진심으로 공감해주는 사람', type: 'empathic' },
        { text: '자기 이야기도 나눠주는 사람', type: 'sharer' },
        { text: '깊이 있게 질문하는 사람', type: 'explorer' }
      ]
    },
    {
      id: 8,
      text: '회의에서 당신은?',
      options: [
        { text: '해결책 제안 위주로 발언', type: 'solver' },
        { text: '분위기와 감정 흐름 파악', type: 'empathic' },
        { text: '과거 사례나 경험 공유', type: 'sharer' },
        { text: '질문으로 논의 심화', type: 'explorer' }
      ]
    },
    {
      id: 9,
      text: '상대가 같은 이야기를 반복하면?',
      options: [
        { text: '"결론이 뭐야?" 정리 요청', type: 'solver' },
        { text: '중요한 이야기구나, 계속 들음', type: 'empathic' },
        { text: '내 관련 이야기로 전환', type: 'sharer' },
        { text: '왜 반복하는지 궁금해짐', type: 'explorer' }
      ]
    },
    {
      id: 10,
      text: '대화에서 가장 중요한 것은?',
      options: [
        { text: '문제 해결과 결론', type: 'solver' },
        { text: '감정 연결과 공감', type: 'empathic' },
        { text: '서로의 경험 나눔', type: 'sharer' },
        { text: '깊은 이해와 발견', type: 'explorer' }
      ]
    }
  ],
  results: {
    solver: {
      type: '해결사형 경청자',
      title: '🔧 해결사형 경청자',
      description: '들으면서 해결책을 찾는 당신! 실용적이고 행동 지향적인 경청 스타일.',
      traits: ['문제 해결 중심', '실용적', '빠른 판단', '결과 지향'],
      listeningStrength: '실질적 도움 제공',
      advice: '해결책도 좋지만, 때로는 그냥 들어주는 것만으로도 큰 도움이 돼요. "어떤 도움이 필요해?"라고 먼저 물어보세요.'
    },
    empathic: {
      type: '공감형 경청자',
      title: '💗 공감형 경청자',
      description: '감정에 집중하는 당신! 상대방을 진심으로 이해하고 공감하는 따뜻한 경청 스타일.',
      traits: ['감정 중심', '공감력 높음', '비판단적', '지지적'],
      listeningStrength: '정서적 안정감 제공',
      advice: '당신의 공감 능력은 정말 소중해요! 가끔은 공감과 함께 작은 조언도 힘이 될 수 있어요.'
    },
    sharer: {
      type: '공유형 경청자',
      title: '🔄 공유형 경청자',
      description: '나의 경험을 나누는 당신! 대화를 통해 서로의 이야기를 주고받는 스타일.',
      traits: ['경험 공유', '연결 추구', '쌍방향 대화', '관계 중심'],
      listeningStrength: '유대감 형성',
      advice: '경험 공유는 좋지만, 상대의 이야기를 충분히 듣고 나서 나누는 게 더 효과적이에요!'
    },
    explorer: {
      type: '탐구형 경청자',
      title: '🔍 탐구형 경청자',
      description: '질문으로 깊이 파는 당신! 대화를 통해 더 깊은 이해를 추구하는 스타일.',
      traits: ['호기심 강함', '깊이 추구', '질문 중심', '분석적'],
      listeningStrength: '깊은 이해 도출',
      advice: '질문은 훌륭하지만, 때로는 공감의 말 한마디가 먼저 필요할 때도 있어요!'
    }
  }
};
