// meeting-behavior 테스트 데이터
export const meetingBehavior = {
  id: 'meeting-behavior',
  title: '회의 행동 테스트',
  description: '회의에서 당신은 어떤 역할? 미팅 스타일로 보는 당신의 업무 성격!',
  questions: [
    {
      id: 1,
      text: '회의 시작 전 당신은?',
      options: [
        { text: '안건 미리 검토, 준비 철저', type: 'leader' },
        { text: '아이디어 메모해둠', type: 'creative' },
        { text: '그냥 참석, 흐름 따라감', type: 'observer' },
        { text: '분위기 보며 가벼운 대화', type: 'mediator' }
      ]
    },
    {
      id: 2,
      text: '회의 중 주로 하는 행동은?',
      options: [
        { text: '진행하거나 정리하기', type: 'leader' },
        { text: '새로운 아이디어 제안', type: 'creative' },
        { text: '듣고 필요할 때 의견', type: 'observer' },
        { text: '의견 조율, 분위기 살피기', type: 'mediator' }
      ]
    },
    {
      id: 3,
      text: '의견 충돌이 생기면?',
      options: [
        { text: '결론 내리려고 정리', type: 'leader' },
        { text: '새로운 대안 제시', type: 'creative' },
        { text: '상황 지켜봄', type: 'observer' },
        { text: '양쪽 의견 조율', type: 'mediator' }
      ]
    },
    {
      id: 4,
      text: '회의가 산으로 가면?',
      options: [
        { text: '본론으로 돌리려 함', type: 'leader' },
        { text: '흥미로운 주제면 따라감', type: 'creative' },
        { text: '끝나길 기다림', type: 'observer' },
        { text: '분위기 좋으면 괜찮다고 생각', type: 'mediator' }
      ]
    },
    {
      id: 5,
      text: '발언 스타일은?',
      options: [
        { text: '적극적, 주도적으로', type: 'leader' },
        { text: '떠오르면 바로 말함', type: 'creative' },
        { text: '필요할 때만, 신중하게', type: 'observer' },
        { text: '타이밍 보며 부드럽게', type: 'mediator' }
      ]
    },
    {
      id: 6,
      text: '회의 후 느낌은?',
      options: [
        { text: '결론 났으면 만족', type: 'leader' },
        { text: '아이디어 나왔으면 만족', type: 'creative' },
        { text: '빨리 끝나서 다행', type: 'observer' },
        { text: '분위기 좋았으면 만족', type: 'mediator' }
      ]
    },
    {
      id: 7,
      text: '이상적인 회의는?',
      options: [
        { text: '효율적이고 결론 있는', type: 'leader' },
        { text: '자유롭게 아이디어가 나오는', type: 'creative' },
        { text: '짧고 핵심만', type: 'observer' },
        { text: '모두가 편안한', type: 'mediator' }
      ]
    },
    {
      id: 8,
      text: '길어지는 회의에 대해?',
      options: [
        { text: '비효율적, 줄여야 함', type: 'leader' },
        { text: '논의가 깊어지면 OK', type: 'creative' },
        { text: '힘들어, 집중 안 됨', type: 'observer' },
        { text: '분위기 따라 다름', type: 'mediator' }
      ]
    },
    {
      id: 9,
      text: '회의 메모 스타일은?',
      options: [
        { text: '핵심/결론/액션 아이템', type: 'leader' },
        { text: '떠오른 아이디어 위주', type: 'creative' },
        { text: '거의 안 함', type: 'observer' },
        { text: '분위기/참여자 반응', type: 'mediator' }
      ]
    },
    {
      id: 10,
      text: '회의에서 가장 중요한 것은?',
      options: [
        { text: '결론과 실행', type: 'leader' },
        { text: '창의적 논의', type: 'creative' },
        { text: '시간 효율', type: 'observer' },
        { text: '협력과 분위기', type: 'mediator' }
      ]
    }
  ],
  results: {
    leader: {
      type: '리더형',
      title: '📋 회의 리더형',
      description: '회의를 이끌고 결론을 내는 당신! 효율과 결과를 중시해요.',
      traits: ['주도적', '결과 지향', '정리력', '리더십'],
      meetingRole: '리더/정리자',
      advice: '리더십은 좋지만, 다른 의견도 충분히 들어주세요!'
    },
    creative: {
      type: '창의형',
      title: '💡 회의 창의형',
      description: '아이디어를 던지는 당신! 새로운 관점을 제시해요.',
      traits: ['창의적', '발산형', '자유로운', '영감 제공'],
      meetingRole: '아이디어 뱅크',
      advice: '아이디어는 훌륭해요! 실현 가능성도 함께 고민해보세요.'
    },
    observer: {
      type: '관찰형',
      title: '👁️ 회의 관찰형',
      description: '듣고 판단하는 당신! 신중하게 참여해요.',
      traits: ['신중한', '분석적', '효율 추구', '선택적'],
      meetingRole: '관찰자/분석가',
      advice: '신중함은 좋지만, 의견을 더 적극적으로 내도 좋아요!'
    },
    mediator: {
      type: '조율형',
      title: '🤝 회의 조율형',
      description: '분위기를 살피는 당신! 팀의 화합을 중시해요.',
      traits: ['조율자', '분위기 메이커', '협력적', '공감력'],
      meetingRole: '조율자/분위기 담당',
      advice: '조율 능력은 팀에 소중해요! 자신의 의견도 잊지 마세요.'
    }
  }
};
