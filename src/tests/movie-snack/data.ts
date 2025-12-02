// movie-snack 테스트 데이터
export const moviesnackTest = {
  id: 'movie-snack',
  title: '영화관 간식 테스트',
  description: '영화관에서 고르는 간식으로 알아보는 당신의 성격! 팝콘파? 나쵸파?',
  questions: [
    {
      id: 1,
      text: '영화관에 가면 가장 먼저 사는 간식은?',
      options: [
        { text: '팝콘 (카라멜 or 버터)', type: 'classic' },
        { text: '나쵸 + 치즈소스', type: 'bold' },
        { text: '핫도그나 버거류', type: 'filling' },
        { text: '간식 안 사고 영화에만 집중', type: 'minimalist' }
      ]
    },
    {
      id: 2,
      text: '팝콘 사이즈를 고른다면?',
      options: [
        { text: '라지! 어차피 다 먹을 거', type: 'classic' },
        { text: '콤보로 이것저것 같이', type: 'bold' },
        { text: '미디엄 정도, 배고프니까', type: 'filling' },
        { text: '스몰이나 안 삼', type: 'minimalist' }
      ]
    },
    {
      id: 3,
      text: '음료는 뭘로?',
      options: [
        { text: '콜라! 영화관엔 콜라지', type: 'classic' },
        { text: '사이다나 환타 같은 다른 탄산', type: 'bold' },
        { text: '커피나 따뜻한 음료', type: 'filling' },
        { text: '물이나 안 삼', type: 'minimalist' }
      ]
    },
    {
      id: 4,
      text: '간식을 먹는 타이밍은?',
      options: [
        { text: '예고편부터 시작해서 중간까지', type: 'classic' },
        { text: '영화 시작하면 폭풍 흡입', type: 'bold' },
        { text: '배고플 때 먹고 영화에 집중', type: 'filling' },
        { text: '영화 끝나고 남으면 먹음', type: 'minimalist' }
      ]
    },
    {
      id: 5,
      text: '같이 간 사람과 간식 공유에 대해?',
      options: [
        { text: '큰 거 하나 사서 나눠 먹자', type: 'classic' },
        { text: '각자 먹고 싶은 거 사자', type: 'bold' },
        { text: '네 거 맛보고 내 거도 줄게', type: 'filling' },
        { text: '각자 알아서', type: 'minimalist' }
      ]
    },
    {
      id: 6,
      text: '영화관 간식이 비싸다고 느낄 때?',
      options: [
        { text: '그래도 영화관 왔으니까 사야지', type: 'classic' },
        { text: '밖에서 몰래 사 가지고 들어감', type: 'bold' },
        { text: '아예 밥 먹고 와서 간식 안 삼', type: 'filling' },
        { text: '비싸니까 그냥 안 삼', type: 'minimalist' }
      ]
    },
    {
      id: 7,
      text: '팝콘을 먹다가 소리가 날 것 같을 때?',
      options: [
        { text: '조용한 장면 피해서 우적우적', type: 'classic' },
        { text: '신경 안 쓰고 먹음', type: 'bold' },
        { text: '입에 넣고 천천히 녹여 먹음', type: 'filling' },
        { text: '이래서 간식 안 삼', type: 'minimalist' }
      ]
    },
    {
      id: 8,
      text: '영화가 끝나고 간식이 남았다면?',
      options: [
        { text: '나가면서 마저 먹음', type: 'classic' },
        { text: '들고 나가서 집에서 먹음', type: 'bold' },
        { text: '배부르면 버림', type: 'filling' },
        { text: '애초에 남을 정도로 안 삼', type: 'minimalist' }
      ]
    },
    {
      id: 9,
      text: '새로 나온 특이한 간식 (한정판 등)이 있다면?',
      options: [
        { text: '그래도 팝콘이 최고', type: 'classic' },
        { text: '오 신기해! 도전해볼래', type: 'bold' },
        { text: '맛있어 보이면 사볼 수도', type: 'filling' },
        { text: '관심 없음', type: 'minimalist' }
      ]
    },
    {
      id: 10,
      text: '영화관 간식 하면 떠오르는 이미지는?',
      options: [
        { text: '따끈한 팝콘 냄새와 함께하는 추억', type: 'classic' },
        { text: '이것저것 잔뜩 들고 있는 모습', type: 'bold' },
        { text: '영화보다 간식이 기대될 때도 있음', type: 'filling' },
        { text: '영화에만 집중하고 싶음', type: 'minimalist' }
      ]
    }
  ],
  results: {
    classic: {
      type: '정통파 무비러버',
      title: '🍿 정통파 무비러버',
      description: '영화관엔 팝콘이지! 전통적인 영화 관람 경험을 사랑하는 클래식한 타입입니다.',
      traits: [
        '전통과 익숙함을 좋아한다',
        '안정적인 선택을 선호',
        '추억을 소중히 여긴다',
        '분위기를 중요시한다'
      ],
      advice: '가끔은 새로운 메뉴도 도전해보세요! 의외로 새로운 최애를 발견할 수도 있어요.'
    },
    bold: {
      type: '모험적 미식가',
      title: '🌮 모험적 미식가',
      description: '다양하게 즐기자! 새로운 것도 과감하게 도전하는 모험적인 타입입니다.',
      traits: [
        '호기심이 많다',
        '새로운 경험을 즐긴다',
        '자기 주관이 뚜렷하다',
        '규칙에 얽매이지 않는다'
      ],
      advice: '다양한 시도는 좋지만, 가끔은 단순하게 팝콘 하나로 영화에 집중해보는 것도 좋아요!'
    },
    filling: {
      type: '실속파 관람객',
      title: '🌭 실속파 관람객',
      description: '간식도 든든하게! 영화 시간을 식사 시간으로도 활용하는 실용적인 타입입니다.',
      traits: [
        '실용적인 성격',
        '효율을 중시한다',
        '현실적인 판단을 한다',
        '배고픔에 솔직하다'
      ],
      advice: '든든하게 먹는 건 좋지만, 영화에 더 집중하고 싶다면 가벼운 간식도 고려해보세요!'
    },
    minimalist: {
      type: '순수 영화 덕후',
      title: '🎬 순수 영화 덕후',
      description: '영화가 메인이지! 간식 없이도 영화 자체에 완전히 몰입하는 순수파입니다.',
      traits: [
        '집중력이 뛰어나다',
        '본질에 충실하다',
        '불필요한 것을 줄이는 편',
        '깔끔한 것을 좋아한다'
      ],
      advice: '가끔은 팝콘 한 봉지로 영화관 분위기를 더 즐겨보는 것도 추억이 될 수 있어요!'
    }
  }
};
