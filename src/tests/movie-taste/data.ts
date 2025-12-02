// movie-taste 테스트 데이터
export const movieTaste = {
  id: 'movie-taste',
  title: '영화 취향 성격 테스트',
  description: '당신이 좋아하는 영화 장르로 보는 성격! 영화 취향이 말하는 당신의 내면.',
  questions: [
    {
      id: 1,
      text: '가장 좋아하는 영화 장르는?',
      options: [
        { text: '액션/스릴러', type: 'action' },
        { text: '로맨스/드라마', type: 'romance' },
        { text: '코미디', type: 'comedy' },
        { text: 'SF/판타지', type: 'scifi' }
      ]
    },
    {
      id: 2,
      text: '영화에서 가장 중요한 요소는?',
      options: [
        { text: '긴장감과 액션', type: 'action' },
        { text: '감동과 감정선', type: 'romance' },
        { text: '웃음과 재미', type: 'comedy' },
        { text: '상상력과 세계관', type: 'scifi' }
      ]
    },
    {
      id: 3,
      text: '영화 볼 때 기대하는 것은?',
      options: [
        { text: '손에 땀 쥐는 긴장감', type: 'action' },
        { text: '마음이 따뜻해지는 느낌', type: 'romance' },
        { text: '스트레스 해소, 웃음', type: 'comedy' },
        { text: '새로운 세계에 몰입', type: 'scifi' }
      ]
    },
    {
      id: 4,
      text: '인상 깊은 영화 장면은?',
      options: [
        { text: '멋진 액션 시퀀스', type: 'action' },
        { text: '감동적인 고백/이별 장면', type: 'romance' },
        { text: '배꼽 잡은 코믹 장면', type: 'comedy' },
        { text: '압도적인 비주얼/반전', type: 'scifi' }
      ]
    },
    {
      id: 5,
      text: '영화 주인공으로 되고 싶은 타입은?',
      options: [
        { text: '위기를 해결하는 영웅', type: 'action' },
        { text: '사랑을 이루는 주인공', type: 'romance' },
        { text: '웃음을 주는 캐릭터', type: 'comedy' },
        { text: '미지의 세계를 탐험하는 자', type: 'scifi' }
      ]
    },
    {
      id: 6,
      text: '영화 결말 취향은?',
      options: [
        { text: '악당을 처치하는 통쾌한 엔딩', type: 'action' },
        { text: '해피엔딩 또는 여운 있는 엔딩', type: 'romance' },
        { text: '웃으며 끝나는 해피엔딩', type: 'comedy' },
        { text: '생각하게 만드는 열린 결말', type: 'scifi' }
      ]
    },
    {
      id: 7,
      text: '혼자 보기 좋은 영화는?',
      options: [
        { text: '긴장되는 스릴러', type: 'action' },
        { text: '혼자 감성에 젖는 멜로', type: 'romance' },
        { text: '가볍게 웃을 수 있는 코미디', type: 'comedy' },
        { text: '몰입해서 볼 SF/판타지', type: 'scifi' }
      ]
    },
    {
      id: 8,
      text: '영화 보고 나서 드는 생각은?',
      options: [
        { text: '아드레날린 뿜뿜! 짜릿했다', type: 'action' },
        { text: '마음이 따뜻해졌다/눈물났다', type: 'romance' },
        { text: '재밌었다! 스트레스 풀렸다', type: 'comedy' },
        { text: '저런 세계가 있다면... 상상됨', type: 'scifi' }
      ]
    },
    {
      id: 9,
      text: '추천받고 싶은 영화 키워드는?',
      options: [
        { text: '박진감, 스릴, 긴장', type: 'action' },
        { text: '감동, 사랑, 눈물', type: 'romance' },
        { text: '유머, 재미, 가벼움', type: 'comedy' },
        { text: '상상력, 세계관, 몰입', type: 'scifi' }
      ]
    },
    {
      id: 10,
      text: '영화가 당신에게 의미하는 것은?',
      options: [
        { text: '짜릿한 대리만족', type: 'action' },
        { text: '감정의 카타르시스', type: 'romance' },
        { text: '현실 탈출 웃음 충전', type: 'comedy' },
        { text: '무한한 상상의 세계', type: 'scifi' }
      ]
    }
  ],
  results: {
    action: {
      type: '액션/스릴러 러버',
      title: '💥 액션/스릴러 러버',
      description: '긴장감을 사랑하는 당신! 활동적이고 도전을 두려워하지 않아요.',
      traits: ['도전적', '활동적', '승부욕', '에너지 넘침'],
      movieMatch: '액션, 스릴러, 범죄',
      personality: '적극적이고 도전을 즐기는 타입, 정의감이 강함',
      advice: '짜릿한 영화를 통해 에너지를 충전하세요! 가끔은 잔잔한 영화도 좋아요.'
    },
    romance: {
      type: '로맨스/드라마 러버',
      title: '💕 로맨스/드라마 러버',
      description: '감정에 충실한 당신! 사랑과 관계를 소중히 여기는 따뜻한 사람.',
      traits: ['감성적', '공감력 높음', '관계 중시', '로맨티스트'],
      movieMatch: '로맨스, 드라마, 멜로',
      personality: '감수성이 풍부하고 관계를 소중히 여김',
      advice: '감정을 느끼는 건 큰 장점이에요. 영화를 통해 마음을 채우세요!'
    },
    comedy: {
      type: '코미디 러버',
      title: '😂 코미디 러버',
      description: '웃음을 사랑하는 당신! 긍정적이고 유머 감각이 넘쳐요.',
      traits: ['유머러스', '긍정적', '사교적', '스트레스 관리 능력'],
      movieMatch: '코미디, 로맨틱 코미디, 시트콤',
      personality: '낙천적이고 유머로 분위기를 밝히는 타입',
      advice: '웃음은 최고의 약이에요! 그 긍정 에너지를 계속 나눠주세요.'
    },
    scifi: {
      type: 'SF/판타지 러버',
      title: '🚀 SF/판타지 러버',
      description: '상상력이 풍부한 당신! 새로운 세계와 가능성에 열려있어요.',
      traits: ['창의적', '호기심', '상상력', '미래 지향'],
      movieMatch: 'SF, 판타지, 슈퍼히어로',
      personality: '창의적이고 열린 마음, 가능성을 탐구함',
      advice: '무한한 상상력은 당신의 무기예요! 현실에도 그 창의성을 발휘하세요.'
    }
  }
};
