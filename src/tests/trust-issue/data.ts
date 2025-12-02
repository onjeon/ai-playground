// trust-issue 테스트 데이터
export const trustissueTest = {
  id: 'trust-issue',
  title: '신뢰 이슈 테스트',
  description: '당신은 사람들을 얼마나 쉽게 믿나요? 신뢰와 관계에 대한 당신의 패턴을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '새로운 사람을 만났을 때 첫 느낌은?',
      options: [
        { text: '일단 좋은 사람이라고 생각', type: 'trusting' },
        { text: '시간을 두고 천천히 파악', type: 'cautious' },
        { text: '뭔가 숨기는 게 있지 않을까?', type: 'guarded' },
        { text: '행동을 보고 판단, 말은 안 믿음', type: 'skeptical' }
      ]
    },
    {
      id: 2,
      text: '친한 친구가 약속 시간에 많이 늦었을 때?',
      options: [
        { text: '무슨 일 있나? 걱정됨', type: 'trusting' },
        { text: '연락은 했겠지, 기다려봄', type: 'cautious' },
        { text: '또 이러네... 나를 만만하게 보나?', type: 'guarded' },
        { text: '핑계 대겠지, 미리 예상됨', type: 'skeptical' }
      ]
    },
    {
      id: 3,
      text: '연인/배우자의 핸드폰에 모르는 번호가 자주 온다면?',
      options: [
        { text: '업무 연락이겠지, 별 생각 없음', type: 'trusting' },
        { text: '궁금하지만 물어보긴 애매', type: 'cautious' },
        { text: '왜 안 말해주지? 의심이 생김', type: 'guarded' },
        { text: '뭔가 숨기는 거 아닌지 확인하고 싶음', type: 'skeptical' }
      ]
    },
    {
      id: 4,
      text: '동료가 갑자기 잘해주기 시작하면?',
      options: [
        { text: '친해지려나 보다, 좋네', type: 'trusting' },
        { text: '고맙긴 한데 이유가 뭘까', type: 'cautious' },
        { text: '부탁할 거 있거나 뭔가 있겠지', type: 'guarded' },
        { text: '의도가 뭔지 파악될 때까지 경계', type: 'skeptical' }
      ]
    },
    {
      id: 5,
      text: '비밀을 털어놓는 것에 대해 어떻게 생각해요?',
      options: [
        { text: '친한 사람에게는 자연스럽게 말함', type: 'trusting' },
        { text: '정말 믿을 수 있는 한두 명에게만', type: 'cautious' },
        { text: '말해봤자 어디서 새어나갈지 모름', type: 'guarded' },
        { text: '비밀은 혼자 가지고 있는 게 최고', type: 'skeptical' }
      ]
    },
    {
      id: 6,
      text: '누군가 "널 위해서 하는 말이야"라고 하면?',
      options: [
        { text: '고맙다, 조언으로 받아들임', type: 'trusting' },
        { text: '일단 듣고 맞는 말인지 생각해봄', type: 'cautious' },
        { text: '"널 위해서"가 진짜일까 의심', type: 'guarded' },
        { text: '자기 만족이나 참견 아닌가', type: 'skeptical' }
      ]
    },
    {
      id: 7,
      text: '친구가 뒤에서 내 험담을 했다는 걸 알게 되면?',
      options: [
        { text: '무슨 오해가 있었나 직접 물어봄', type: 'trusting' },
        { text: '상처받지만 한번은 이해해봄', type: 'cautious' },
        { text: '"역시 믿을 게 못 돼" 관계 정리', type: 'guarded' },
        { text: '예상했던 일, 애초에 깊게 안 믿었음', type: 'skeptical' }
      ]
    },
    {
      id: 8,
      text: '온라인에서 좋은 후기만 있는 제품을 보면?',
      options: [
        { text: '후기 좋으니 사야지', type: 'trusting' },
        { text: '여러 플랫폼 후기를 비교해봄', type: 'cautious' },
        { text: '조작 후기 아닌지 의심됨', type: 'guarded' },
        { text: '절대 후기만 보고 안 삼, 직접 확인', type: 'skeptical' }
      ]
    },
    {
      id: 9,
      text: '오랜만에 연락 온 친구가 만나자고 하면?',
      options: [
        { text: '반갑다! 언제 볼까?', type: 'trusting' },
        { text: '왜 갑자기? 궁금하지만 만나봄', type: 'cautious' },
        { text: '부탁이나 다단계 아닌지 의심', type: 'guarded' },
        { text: '뭔가 목적이 있겠지, 일단 거리 둠', type: 'skeptical' }
      ]
    },
    {
      id: 10,
      text: '과거에 배신당한 경험이 현재 관계에 미치는 영향은?',
      options: [
        { text: '그때 그 사람일 뿐, 다른 사람은 달라', type: 'trusting' },
        { text: '조심하게 되지만 마음은 열어둠', type: 'cautious' },
        { text: '같은 실수 반복 안 하려고 방어적', type: 'guarded' },
        { text: '사람은 다 비슷해, 기대 안 함', type: 'skeptical' }
      ]
    }
  ],
  results: {
    trusting: {
      type: '열린 마음 소유자',
      title: '💝 열린 마음 소유자 (신뢰도 90%)',
      description: '세상을 긍정적으로 바라보는 당신! 사람들에게 먼저 마음을 여는 타입이에요.',
      traits: [
        '사람들의 선의를 먼저 믿음',
        '열린 마음으로 관계를 시작',
        '용서가 빠르고 두 번째 기회를 줌',
        '긍정적인 인간관'
      ],
      trustLevel: '매우 높음',
      advice: '당신의 따뜻한 마음은 정말 소중해요! 다만 가끔은 자신을 보호하는 것도 필요해요. 신뢰와 경계 사이의 균형을 찾아보세요.'
    },
    cautious: {
      type: '신중한 관찰자',
      title: '🔍 신중한 관찰자 (신뢰도 60%)',
      description: '믿고 싶지만 확인도 필요한 당신! 건강한 신뢰 패턴을 가지고 있어요.',
      traits: [
        '시간을 두고 신뢰를 쌓음',
        '말보다 행동을 보고 판단',
        '신중하지만 마음은 열려있음',
        '적절한 경계선 유지'
      ],
      trustLevel: '적당함',
      advice: '가장 균형 잡힌 신뢰 패턴이에요! 상대를 파악하면서도 마음을 열 준비가 되어있는 당신은 건강한 관계를 만들어갈 수 있어요.'
    },
    guarded: {
      type: '상처받은 수호자',
      title: '🛡️ 상처받은 수호자 (신뢰도 35%)',
      description: '마음을 쉽게 열지 않는 당신. 과거의 상처가 벽이 되었나요?',
      traits: [
        '쉽게 마음을 열지 않음',
        '배신에 대한 두려움이 있음',
        '관계에서 먼저 거리를 둠',
        '자기 보호 본능이 강함'
      ],
      trustLevel: '낮음',
      advice: '자신을 보호하는 건 중요해요. 하지만 모든 벽이 당신을 지켜주지는 않아요. 신뢰할 수 있는 한 사람을 찾아 조금씩 마음을 열어보세요.'
    },
    skeptical: {
      type: '의심의 철학자',
      title: '🤔 의심의 철학자 (신뢰도 15%)',
      description: '증거가 없으면 안 믿는 당신. 깊은 상처가 불신의 갑옷이 되었어요.',
      traits: [
        '사람의 동기를 항상 의심',
        '확실한 증거가 있어야 믿음',
        '기대하지 않아 실망도 없음',
        '혼자가 편하다고 느낌'
      ],
      trustLevel: '매우 낮음',
      advice: '의심은 때로 당신을 보호하지만, 동시에 좋은 관계로부터도 멀어지게 해요. 작은 것부터 믿어보는 연습을 해보면 어떨까요?'
    }
  }
};
