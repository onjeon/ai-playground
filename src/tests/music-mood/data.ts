// music-mood 테스트 데이터
export const musicMood = {
  id: 'music-mood',
  title: '음악 무드 테스트',
  description: '당신의 음악 취향으로 보는 감정 상태! 플레이리스트가 말하는 당신의 마음.',
  questions: [
    {
      id: 1,
      text: '요즘 가장 많이 듣는 음악은?',
      options: [
        { text: '신나는 댄스/팝', type: 'energetic' },
        { text: '잔잔한 발라드/인디', type: 'mellow' },
        { text: '강렬한 록/힙합', type: 'intense' },
        { text: '편안한 재즈/클래식', type: 'calm' }
      ]
    },
    {
      id: 2,
      text: '음악 들을 때 주로 어떤 기분?',
      options: [
        { text: '에너지 충전! 신남', type: 'energetic' },
        { text: '감성에 젖어듦', type: 'mellow' },
        { text: '감정 폭발, 카타르시스', type: 'intense' },
        { text: '평화롭고 차분해짐', type: 'calm' }
      ]
    },
    {
      id: 3,
      text: '가사에서 공감하는 주제는?',
      options: [
        { text: '파티, 즐거움, 자신감', type: 'energetic' },
        { text: '사랑, 이별, 그리움', type: 'mellow' },
        { text: '분노, 저항, 자유', type: 'intense' },
        { text: '일상, 평화, 사색', type: 'calm' }
      ]
    },
    {
      id: 4,
      text: '운동/작업할 때 음악은?',
      options: [
        { text: 'BPM 높은 신나는 곡', type: 'energetic' },
        { text: '감성적인 곡', type: 'mellow' },
        { text: '강렬한 비트', type: 'intense' },
        { text: 'Lo-fi, 앰비언트', type: 'calm' }
      ]
    },
    {
      id: 5,
      text: '슬플 때 듣는 음악은?',
      options: [
        { text: '억지로 신나는 곡 틀어서 기분 전환', type: 'energetic' },
        { text: '슬픈 곡 들으며 감정 몰입', type: 'mellow' },
        { text: '강한 곡으로 감정 발산', type: 'intense' },
        { text: '조용한 음악으로 진정', type: 'calm' }
      ]
    },
    {
      id: 6,
      text: '플레이리스트 특징은?',
      options: [
        { text: '파티/운동용 위주', type: 'energetic' },
        { text: '감성/힐링 위주', type: 'mellow' },
        { text: '장르 다양, 강렬한 곡 많음', type: 'intense' },
        { text: '잔잔하고 배경음악 같은', type: 'calm' }
      ]
    },
    {
      id: 7,
      text: '새 음악을 고르는 기준은?',
      options: [
        { text: '듣자마자 몸이 움직이는 곡', type: 'energetic' },
        { text: '마음을 울리는 곡', type: 'mellow' },
        { text: '임팩트 있는 곡', type: 'intense' },
        { text: '편안하게 들을 수 있는 곡', type: 'calm' }
      ]
    },
    {
      id: 8,
      text: '음악 없이 지내는 것은?',
      options: [
        { text: '에너지가 안 생김', type: 'energetic' },
        { text: '감정을 어디에 담지...', type: 'mellow' },
        { text: '답답함', type: 'intense' },
        { text: '괜찮지만 있으면 더 좋아', type: 'calm' }
      ]
    },
    {
      id: 9,
      text: '음악이 당신에게 의미하는 것은?',
      options: [
        { text: '에너지원', type: 'energetic' },
        { text: '감정의 친구', type: 'mellow' },
        { text: '표현의 도구', type: 'intense' },
        { text: '마음의 안식처', type: 'calm' }
      ]
    },
    {
      id: 10,
      text: '지금 듣고 싶은 음악은?',
      options: [
        { text: '신나게 춤추고 싶은 곡', type: 'energetic' },
        { text: '마음을 어루만지는 곡', type: 'mellow' },
        { text: '온 힘을 쏟아 들을 곡', type: 'intense' },
        { text: '조용히 들을 수 있는 곡', type: 'calm' }
      ]
    }
  ],
  results: {
    energetic: {
      type: '에너지 충전형',
      title: '⚡ 에너지 충전형',
      description: '음악으로 에너지를 충전하는 당신! 신나는 곡이 당신의 연료예요.',
      traits: ['업템포 선호', '긍정적 에너지', '활동적', '사교적'],
      musicMood: '활기찬',
      currentState: '에너지와 활력을 추구하는 상태',
      advice: '음악이 당신에게 큰 에너지원이에요! 이 긍정적 에너지를 유지하세요.'
    },
    mellow: {
      type: '감성 몰입형',
      title: '💜 감성 몰입형',
      description: '음악으로 감정을 느끼는 당신! 감성적인 곡에 마음을 맡겨요.',
      traits: ['발라드/인디 선호', '감수성 풍부', '내향적', '공감 능력'],
      musicMood: '감성적',
      currentState: '감정적 연결과 공감을 추구하는 상태',
      advice: '당신의 감수성은 소중해요. 하지만 너무 슬픈 곡만 듣지 말고 기분 전환 곡도 섞어보세요!'
    },
    intense: {
      type: '감정 폭발형',
      title: '🔥 감정 폭발형',
      description: '음악으로 감정을 폭발시키는 당신! 강렬한 곡으로 카타르시스를 느껴요.',
      traits: ['록/힙합 선호', '감정 표출', '강렬함', '자유로운 영혼'],
      musicMood: '강렬한',
      currentState: '감정 발산과 해방을 추구하는 상태',
      advice: '음악을 통한 감정 발산은 건강해요! 가끔은 잔잔한 곡으로 쉬어가는 것도 좋아요.'
    },
    calm: {
      type: '평화 추구형',
      title: '🌿 평화 추구형',
      description: '음악으로 평화를 찾는 당신! 잔잔한 곡이 마음의 안식처예요.',
      traits: ['재즈/클래식 선호', '차분함', '내면 지향', '안정 추구'],
      musicMood: '평화로운',
      currentState: '내면의 평화와 안정을 추구하는 상태',
      advice: '음악이 당신의 안식처가 되어주네요. 이 평화로운 마음을 유지하세요!'
    }
  }
};
