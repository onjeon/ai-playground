// secret-keeping 테스트 데이터
export const secretkeepingTest = {
  id: 'secret-keeping',
  title: '비밀 유지력 테스트',
  description: '당신의 비밀 유지 능력은? 친구의 비밀을 얼마나 잘 지키나요?',
  questions: [
    {
      id: 1,
      text: '친구가 "절대 비밀인데..."라고 시작하면?',
      options: [
        { text: '무덤까지 가져갈 각오로 들음', type: 'vault' },
        { text: '들으면서 누구한테도 안 말해야지 다짐', type: 'careful' },
        { text: '흥미진진, 일단 듣고 보자', type: 'tempted' },
        { text: '솔직히 비밀 지키기 자신 없어서 부담', type: 'honest' }
      ]
    },
    {
      id: 2,
      text: '비밀을 들은 후 다른 친구를 만났을 때?',
      options: [
        { text: '전혀 언급 안 함, 기억에서 지움', type: 'vault' },
        { text: '입이 근질근질하지만 참음', type: 'careful' },
        { text: '"야 이건 비밀인데..." 슬쩍 말함', type: 'tempted' },
        { text: '"나 비밀 하나 아는데" 떡밥 던짐', type: 'honest' }
      ]
    },
    {
      id: 3,
      text: '술자리에서 분위기가 무르익었을 때?',
      options: [
        { text: '취해도 비밀은 지킨다', type: 'vault' },
        { text: '조심하려고 하지만 가끔 실수', type: 'careful' },
        { text: '술 마시면 입이 좀 가벼워짐', type: 'tempted' },
        { text: '술자리에서 다 털어놓는 스타일', type: 'honest' }
      ]
    },
    {
      id: 4,
      text: '비밀의 주인공과 사이가 틀어졌다면?',
      options: [
        { text: '그래도 비밀은 비밀, 지킨다', type: 'vault' },
        { text: '말하고 싶지만 참으려고 노력', type: 'careful' },
        { text: '친한 사람한테만 살짝...', type: 'tempted' },
        { text: '관계 끝났으니 비밀도 끝', type: 'honest' }
      ]
    },
    {
      id: 5,
      text: '"너 그 얘기 알아?"라고 물어보면?',
      options: [
        { text: '"무슨 얘기?" 시치미 뚝 뗌', type: 'vault' },
        { text: '"응, 알아" 하고 더 말 안 함', type: 'careful' },
        { text: '"어디까지 알아?" 정보 탐색', type: 'tempted' },
        { text: '"응 알지~ 근데 말이야..."', type: 'honest' }
      ]
    },
    {
      id: 6,
      text: '비밀 유지가 어려운 이유가 있다면?',
      options: [
        { text: '어렵지 않음, 당연히 지켜야지', type: 'vault' },
        { text: '가끔 공유하고 싶은 충동이', type: 'careful' },
        { text: '좋은 이야기는 나누고 싶어서', type: 'tempted' },
        { text: '비밀이 많으면 머리가 복잡해', type: 'honest' }
      ]
    },
    {
      id: 7,
      text: '내 비밀을 남에게 말해도 될까?',
      options: [
        { text: '난 절대 안 말함', type: 'vault' },
        { text: '정말 친한 사람한테만', type: 'careful' },
        { text: '가까운 사람들은 OK', type: 'tempted' },
        { text: '비밀이 별로 없음, 오픈북', type: 'honest' }
      ]
    },
    {
      id: 8,
      text: '연예인 가십이나 핫한 소문에 대해?',
      options: [
        { text: '관심 없음, 남의 일이니까', type: 'vault' },
        { text: '듣긴 하지만 퍼뜨리진 않음', type: 'careful' },
        { text: '재미로 공유하는 편', type: 'tempted' },
        { text: '핫한 건 다 같이 알아야지', type: 'honest' }
      ]
    },
    {
      id: 9,
      text: '비밀을 지켜달라고 한 적 있어?',
      options: [
        { text: '내 비밀은 아예 안 말함', type: 'vault' },
        { text: '가끔, 믿을 수 있는 사람에게만', type: 'careful' },
        { text: '비밀이라고 하면서 말한 적 있음', type: 'tempted' },
        { text: '비밀로 할 만한 게 별로 없음', type: 'honest' }
      ]
    },
    {
      id: 10,
      text: '비밀에 대한 당신의 생각은?',
      options: [
        { text: '신뢰의 상징, 반드시 지켜야 함', type: 'vault' },
        { text: '지키려고 노력해야 하는 것', type: 'careful' },
        { text: '때로는 공유가 필요할 수도', type: 'tempted' },
        { text: '비밀은 적을수록 좋음', type: 'honest' }
      ]
    }
  ],
  results: {
    vault: {
      type: '철벽 금고',
      title: '🔐 철벽 금고',
      description: '비밀은 무덤까지! 어떤 상황에서도 입을 열지 않는 신뢰의 아이콘입니다.',
      traits: [
        '신뢰할 수 있다',
        '의리가 있다',
        '자기 통제력이 뛰어남',
        '진지한 성격'
      ],
      advice: '비밀을 잘 지키는 건 큰 장점이에요! 하지만 가끔은 털어놓는 것도 스트레스 해소에 도움이 돼요.'
    },
    careful: {
      type: '조심스러운 수호자',
      title: '🤐 조심스러운 수호자',
      description: '비밀은 지키려 노력해요! 유혹이 있지만 대부분 잘 참아내는 타입입니다.',
      traits: [
        '노력형 성격',
        '양심적이다',
        '신중한 편',
        '책임감이 있다'
      ],
      advice: '노력하는 모습이 좋아요! 유혹이 올 때 "이 사람이 알면 어떨까"를 생각해보세요.'
    },
    tempted: {
      type: '흔들리는 수다쟁이',
      title: '😬 흔들리는 수다쟁이',
      description: '비밀 지키기... 좀 어려워! 좋은 이야기는 나누고 싶은 사교적인 타입입니다.',
      traits: [
        '사교적인 성격',
        '이야기하는 걸 좋아함',
        '공감 능력이 높다',
        '솔직한 편'
      ],
      advice: '비밀을 듣기 전에 "이거 지킬 수 있을까?" 한 번 생각해보세요. 못 지킬 것 같으면 안 듣는 게 나을 수도 있어요!'
    },
    honest: {
      type: '오픈북 정직러',
      title: '📖 오픈북 정직러',
      description: '비밀은 부담스러워! 솔직하고 투명한 삶을 추구하는 타입입니다.',
      traits: [
        '솔직하다',
        '숨기는 것을 불편해함',
        '개방적인 성격',
        '스트레스를 안 받으려 함'
      ],
      advice: '솔직한 건 좋지만, 다른 사람의 비밀은 그 사람의 것이에요. 신뢰를 위해 비밀 유지력을 기르는 것도 필요해요!'
    }
  }
};
