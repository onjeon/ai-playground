// late-behavior 테스트 데이터
export const latebehaviorTest = {
  id: 'late-behavior',
  title: '지각 행동 테스트',
  description: '약속에 늦었을 때 당신의 행동으로 알아보는 성격 유형! 지각 대처법이 성격을 말해줍니다.',
  questions: [
    {
      id: 1,
      text: '약속 시간에 늦을 것 같다는 걸 알았을 때?',
      options: [
        { text: '즉시 연락해서 상황을 알린다', type: 'honest' },
        { text: '막판까지 버텨보고 정 안 되면 연락', type: 'optimist' },
        { text: '미리 핑계를 생각해둔다', type: 'excuse' },
        { text: '엄청 스트레스받으며 뛰어간다', type: 'anxious' }
      ]
    },
    {
      id: 2,
      text: '지각 메시지를 보낼 때 당신의 스타일은?',
      options: [
        { text: '"미안, 10분 늦을 것 같아. 죄송!"', type: 'honest' },
        { text: '"거의 다 왔어! 조금만 기다려~"', type: 'optimist' },
        { text: '"아 갑자기 급한 일이 생겨서..."', type: 'excuse' },
        { text: '"ㅠㅠㅠㅠ 진짜 미안해 죽을 것 같아"', type: 'anxious' }
      ]
    },
    {
      id: 3,
      text: '약속 장소에 도착했을 때 먼저 하는 말은?',
      options: [
        { text: '"기다렸지? 진짜 미안해"', type: 'honest' },
        { text: '"헉 많이 기다렸어? 나 뛰어왔어!"', type: 'optimist' },
        { text: '"아 진짜 오는 길에 일이 있었어"', type: 'excuse' },
        { text: '"미안미안 진짜 미안해..." (연신 사과)', type: 'anxious' }
      ]
    },
    {
      id: 4,
      text: '지각한 것에 대한 보상으로 주로 하는 행동은?',
      options: [
        { text: '오늘 식사비나 음료 내가 쏜다', type: 'honest' },
        { text: '"다음엔 내가 일찍 갈게~"', type: 'optimist' },
        { text: '특별히 보상은 안 함 (이미 핑계로 정당화)', type: 'excuse' },
        { text: '계속 미안해하며 눈치를 봄', type: 'anxious' }
      ]
    },
    {
      id: 5,
      text: '반대로 상대방이 늦었을 때 당신의 반응은?',
      options: [
        { text: '"괜찮아, 나도 가끔 그래" 이해해줌', type: 'honest' },
        { text: '"오케이~ 나도 여유롭게 올걸"', type: 'optimist' },
        { text: '속으로는 좀 짜증나지만 티 안 냄', type: 'excuse' },
        { text: '"무슨 일 있어? 걱정됐어"', type: 'anxious' }
      ]
    },
    {
      id: 6,
      text: '지각이 습관이 되어가는 것 같을 때?',
      options: [
        { text: '알람을 더 많이 맞추고 일찍 준비하려 노력', type: 'honest' },
        { text: '"에이 다들 좀 늦지 뭐~"', type: 'optimist' },
        { text: '약속 시간을 애초에 넉넉히 잡자고 함', type: 'excuse' },
        { text: '자책하고 고쳐야겠다고 매번 다짐', type: 'anxious' }
      ]
    },
    {
      id: 7,
      text: '중요한 약속(면접, 시험 등)에 늦을 것 같다면?',
      options: [
        { text: '어떻게든 연락하고 최대한 빨리 간다', type: 'honest' },
        { text: '"뭐 어떻게든 되겠지" 일단 달린다', type: 'optimist' },
        { text: '불가피한 상황이었다고 설명할 준비', type: 'excuse' },
        { text: '패닉 상태, 인생 망한 기분', type: 'anxious' }
      ]
    },
    {
      id: 8,
      text: '지각한 이유가 정말로 불가피했을 때?',
      options: [
        { text: '사실대로 말하지만 여전히 미안해함', type: 'honest' },
        { text: '"진짜 어쩔 수 없었어!" 당당하게 설명', type: 'optimist' },
        { text: '조금 과장해서 더 불가피하게 포장', type: 'excuse' },
        { text: '이해받지 못할까 봐 걱정됨', type: 'anxious' }
      ]
    },
    {
      id: 9,
      text: '지각 때문에 친구와 분위기가 안 좋아졌다면?',
      options: [
        { text: '진심으로 사과하고 앞으로 조심하겠다고 약속', type: 'honest' },
        { text: '"그렇게까지 화날 일이야?" 의아해함', type: 'optimist' },
        { text: '"나도 사정이 있었는데" 억울해함', type: 'excuse' },
        { text: '관계가 틀어질까 봐 엄청 불안해함', type: 'anxious' }
      ]
    },
    {
      id: 10,
      text: '지각에 대한 당신의 솔직한 생각은?',
      options: [
        { text: '지각은 상대 시간을 뺏는 것, 최대한 피해야 함', type: 'honest' },
        { text: '5~10분은 코리안 타임이지~', type: 'optimist' },
        { text: '가끔은 어쩔 수 없는 거 아닌가?', type: 'excuse' },
        { text: '지각할 것 같으면 너무 불안해서 못 살겠음', type: 'anxious' }
      ]
    }
  ],
  results: {
    honest: {
      type: '정직한 사과러',
      title: '🙏 정직한 사과러',
      description: '늦으면 늦는다! 솔직하게 인정하고 진심으로 사과하는 신뢰감 있는 타입입니다.',
      traits: [
        '정직하고 책임감이 있다',
        '신뢰를 중요시한다',
        '실수를 인정할 줄 안다',
        '관계를 소중히 여긴다'
      ],
      advice: '솔직함은 정말 좋은 미덕이에요! 하지만 너무 자책하지 말고, 다음엔 더 잘하면 된다고 생각해요.'
    },
    optimist: {
      type: '긍정적 낙관러',
      title: '😄 긍정적 낙관러',
      description: '어떻게든 되겠지! 긍정적 마인드로 모든 상황을 헤쳐나가는 타입입니다.',
      traits: [
        '낙천적이고 긍정적이다',
        '스트레스를 덜 받는다',
        '상황을 가볍게 보는 편',
        '적응력이 좋다'
      ],
      advice: '긍정적인 마인드는 좋지만, 상대방은 기다리면서 걱정했을 수 있어요. 연락은 미리미리 해주세요!'
    },
    excuse: {
      type: '핑계 마스터',
      title: '🎭 핑계 마스터',
      description: '상황 설명의 달인! 어떤 상황도 그럴듯하게 설명하는 스토리텔러 타입입니다.',
      traits: [
        '상황 대처 능력이 좋다',
        '순발력이 있다',
        '자기 방어적인 성향',
        '창의적인 면이 있다'
      ],
      advice: '가끔은 그냥 솔직하게 "미안해"라고 하는 게 더 좋을 때가 있어요. 핑계보다 진심이 더 와닿을 수 있답니다!'
    },
    anxious: {
      type: '걱정 폭발러',
      title: '😰 걱정 폭발러',
      description: '지각 = 대재앙! 약속에 늦는 것만 생각해도 스트레스받는 예민한 타입입니다.',
      traits: [
        '책임감이 매우 강하다',
        '남에게 피해 주는 걸 싫어한다',
        '완벽주의 성향이 있다',
        '불안감이 높은 편'
      ],
      advice: '5분 늦었다고 세상이 끝나는 건 아니에요. 너무 자책하지 마세요. 대부분의 사람들은 생각보다 이해해준답니다!'
    }
  }
};
