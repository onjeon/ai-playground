// 영화 장르 테스트 데이터
export const movieGenreTest = {
  id: 'movie-genre',
  title: '영화 장르 테스트',
  description: '당신이 좋아하는 영화 장르로 성격을 분석합니다! 로맨스, 액션, 스릴러, 코미디 중 당신의 성격과 맞는 장르는?',
  questions: [
    {
      id: 1,
      text: '주말 밤 넷플릭스에서 고르는 영화는?',
      options: [
        { id: 'a', text: '설레는 로맨스/멜로', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '화려한 액션/SF', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '긴장감 넘치는 스릴러', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '웃음 터지는 코미디', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 2,
      text: '영화를 볼 때 가장 기대하는 것은?',
      options: [
        { id: 'a', text: '감동적인 스토리', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '화려한 시각적 경험', score: { romance: 0, action: 3, thriller: 1, comedy: 0 } },
        { id: 'c', text: '예상치 못한 반전', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '유쾌한 웃음', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 3,
      text: '좋아하는 영화 주인공 유형은?',
      options: [
        { id: 'a', text: '사랑에 빠지는 주인공', score: { romance: 3, action: 0, thriller: 0, comedy: 1 } },
        { id: 'b', text: '영웅적인 주인공', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '지적인 탐정/수사관', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '유쾌하고 엉뚱한 캐릭터', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 4,
      text: '영화관에서 선호하는 자리는?',
      options: [
        { id: 'a', text: '커플석/아늑한 곳', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '스크린이 큰 앞자리', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '집중할 수 있는 중앙', score: { romance: 0, action: 1, thriller: 3, comedy: 0 } },
        { id: 'd', text: '친구들과 편한 좌석', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 5,
      text: '영화 속 세계관으로 가고 싶다면?',
      options: [
        { id: 'a', text: '파리의 로맨틱한 거리', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '마블/DC 유니버스', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '미스터리한 저택', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '시트콤 속 일상', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 6,
      text: '영화를 추천받을 때 선호하는 키워드는?',
      options: [
        { id: 'a', text: '"감동적이야", "눈물 날 거야"', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '"쩔어", "스케일 대박"', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '"반전 있어", "소름 돋아"', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '"웃겨", "배꼽 빠져"', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 7,
      text: '영화 엔딩 선호도는?',
      options: [
        { id: 'a', text: '해피엔딩 필수', score: { romance: 3, action: 1, thriller: 0, comedy: 1 } },
        { id: 'b', text: '카타르시스 있는 결말', score: { romance: 0, action: 3, thriller: 1, comedy: 0 } },
        { id: 'c', text: '열린 결말/반전', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '유쾌하게 마무리', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 8,
      text: '영화를 볼 때 감정 상태는?',
      options: [
        { id: 'a', text: '눈물 흘리며 감정이입', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '손에 땀 쥐며 몰입', score: { romance: 0, action: 3, thriller: 1, comedy: 0 } },
        { id: 'c', text: '긴장감으로 집중', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '크게 웃으며 즐김', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 9,
      text: '인생 영화로 꼽을 만한 것은?',
      options: [
        { id: 'a', text: '노트북, 러브레터 같은', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '어벤져스, 인터스텔라 같은', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '올드보이, 기생충 같은', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '극한직업, 엑시트 같은', score: { romance: 0, action: 1, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 10,
      text: '친구와 영화 볼 때 분위기는?',
      options: [
        { id: 'a', text: '감동 포인트에서 함께 눈물', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '액션 장면에서 환호', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '추리하며 대화', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '같이 웃으며 즐기기', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 11,
      text: '스트레스 받을 때 보고 싶은 영화는?',
      options: [
        { id: 'a', text: '따뜻한 감성 영화', score: { romance: 3, action: 0, thriller: 0, comedy: 1 } },
        { id: 'b', text: '시원하게 때리는 액션', score: { romance: 0, action: 3, thriller: 0, comedy: 0 } },
        { id: 'c', text: '몰입할 수 있는 스릴러', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '머리 비우는 코미디', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
    {
      id: 12,
      text: '영화가 나에게 주는 것은?',
      options: [
        { id: 'a', text: '감정의 위로와 공감', score: { romance: 3, action: 0, thriller: 0, comedy: 0 } },
        { id: 'b', text: '짜릿함과 대리만족', score: { romance: 0, action: 3, thriller: 1, comedy: 0 } },
        { id: 'c', text: '지적 자극과 몰입', score: { romance: 0, action: 0, thriller: 3, comedy: 0 } },
        { id: 'd', text: '웃음과 힐링', score: { romance: 0, action: 0, thriller: 0, comedy: 3 } },
      ],
    },
  ],
  results: {
    romance: {
      id: 'romance',
      title: '로맨스 감성파',
      description: '감성적이고 따뜻한 마음의 소유자! 사랑 이야기에 쉽게 감정이입하고, 인간관계를 소중히 여깁니다.',
      traits: ['감성적', '공감 능력', '따뜻함', '관계 중시'],
      emoji: '💕',
      color: '#FF69B4',
    },
    action: {
      id: 'action',
      title: '액션 마니아',
      description: '활동적이고 도전적인 성격! 짜릿한 경험을 좋아하고, 큰 스케일의 것에 끌립니다.',
      traits: ['활동적', '도전적', '스케일 추구', '대담함'],
      emoji: '💥',
      color: '#E74C3C',
    },
    thriller: {
      id: 'thriller',
      title: '스릴러 애호가',
      description: '분석적이고 지적인 성격! 복잡한 상황을 즐기고, 퍼즐을 풀듯 생각하는 것을 좋아합니다.',
      traits: ['분석적', '지적', '집중력', '호기심'],
      emoji: '🔍',
      color: '#2C3E50',
    },
    comedy: {
      id: 'comedy',
      title: '코미디 러버',
      description: '밝고 유쾌한 성격! 웃음으로 스트레스를 해소하고, 주변을 즐겁게 만드는 것을 좋아합니다.',
      traits: ['유쾌함', '긍정적', '사교적', '스트레스 해소'],
      emoji: '😂',
      color: '#F39C12',
    },
  },
};
