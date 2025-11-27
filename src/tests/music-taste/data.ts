// 음악 취향 테스트 데이터
export const musicTasteTest = {
  id: 'music-taste',
  title: '음악 취향 테스트',
  description: '당신의 음악 취향으로 성격을 분석합니다! K-POP, 인디, 힙합, 클래식 중 당신의 플레이리스트는 어떤 성격을 말해줄까요?',
  questions: [
    {
      id: 1,
      text: '플레이리스트에 가장 많은 장르는?',
      options: [
        { id: 'a', text: 'K-POP/아이돌 음악', score: { kpop: 3, indie: 0, hiphop: 0, classical: 0 } },
        { id: 'b', text: '인디/어쿠스틱', score: { kpop: 0, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: '힙합/R&B', score: { kpop: 0, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '클래식/재즈', score: { kpop: 0, indie: 0, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 2,
      text: '음악을 듣는 주된 상황은?',
      options: [
        { id: 'a', text: '신나게 기분 전환할 때', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '감성에 젖고 싶을 때', score: { kpop: 0, indie: 3, hiphop: 0, classical: 1 } },
        { id: 'c', text: '자신감이 필요할 때', score: { kpop: 1, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '집중하거나 휴식할 때', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 3,
      text: '콘서트나 공연에 가신다면?',
      options: [
        { id: 'a', text: '아이돌 콘서트', score: { kpop: 3, indie: 0, hiphop: 0, classical: 0 } },
        { id: 'b', text: '소극장 인디 공연', score: { kpop: 0, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: '힙합 페스티벌', score: { kpop: 0, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '오케스트라/재즈 공연', score: { kpop: 0, indie: 0, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 4,
      text: '음악에서 가장 중요하게 여기는 것은?',
      options: [
        { id: 'a', text: '중독성 있는 멜로디', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '가사의 시적인 표현', score: { kpop: 0, indie: 3, hiphop: 1, classical: 0 } },
        { id: 'c', text: '리듬감과 비트', score: { kpop: 1, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '연주와 하모니', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 5,
      text: '새로운 아티스트를 발견하는 경로는?',
      options: [
        { id: 'a', text: '음악 방송/차트', score: { kpop: 3, indie: 0, hiphop: 0, classical: 0 } },
        { id: 'b', text: '지인 추천/숨은 맛집', score: { kpop: 0, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: 'SNS/틱톡 바이럴', score: { kpop: 1, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '전문 매체/리뷰', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 6,
      text: '기분이 우울할 때 듣는 음악은?',
      options: [
        { id: 'a', text: '신나는 댄스곡', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '감성적인 발라드', score: { kpop: 1, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: '위로가 되는 힙합', score: { kpop: 0, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '차분한 연주곡', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 7,
      text: '음악 스트리밍 서비스 사용 패턴은?',
      options: [
        { id: 'a', text: '인기 차트 위주로', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '나만의 플레이리스트 구축', score: { kpop: 0, indie: 3, hiphop: 0, classical: 1 } },
        { id: 'c', text: '추천 알고리즘 따라', score: { kpop: 1, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '앨범 단위로 감상', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 8,
      text: '음악 팬심을 표현하는 방식은?',
      options: [
        { id: 'a', text: '덕질/팬클럽 활동', score: { kpop: 3, indie: 0, hiphop: 0, classical: 0 } },
        { id: 'b', text: '조용히 응원하며 음반 구매', score: { kpop: 0, indie: 3, hiphop: 0, classical: 1 } },
        { id: 'c', text: 'SNS에서 공유하고 소통', score: { kpop: 1, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '혼자 깊이 감상', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 9,
      text: '운동할 때 듣는 음악은?',
      options: [
        { id: 'a', text: 'K-POP 댄스곡', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '템포 있는 인디', score: { kpop: 0, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: '힙합/일렉트로닉', score: { kpop: 0, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '클래식/오케스트라', score: { kpop: 0, indie: 0, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 10,
      text: '노래방에서 주로 부르는 곡은?',
      options: [
        { id: 'a', text: '최신 K-POP 히트곡', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '감성 발라드/인디 명곡', score: { kpop: 0, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: '힙합/R&B 곡', score: { kpop: 0, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '가요/팝송 클래식', score: { kpop: 1, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 11,
      text: '음악 취향을 친구에게 설명한다면?',
      options: [
        { id: 'a', text: '요즘 뭐가 핫한지 다 알아', score: { kpop: 3, indie: 0, hiphop: 1, classical: 0 } },
        { id: 'b', text: '숨은 보석 같은 곡을 찾아', score: { kpop: 0, indie: 3, hiphop: 0, classical: 0 } },
        { id: 'c', text: '힙하고 쿨한 음악 좋아해', score: { kpop: 0, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '깊이 있는 음악을 감상해', score: { kpop: 0, indie: 1, hiphop: 0, classical: 3 } },
      ],
    },
    {
      id: 12,
      text: '음악이 삶에서 차지하는 비중은?',
      options: [
        { id: 'a', text: '삶의 활력소이자 즐거움', score: { kpop: 3, indie: 1, hiphop: 1, classical: 0 } },
        { id: 'b', text: '감성을 채워주는 친구', score: { kpop: 0, indie: 3, hiphop: 0, classical: 1 } },
        { id: 'c', text: '나를 표현하는 수단', score: { kpop: 1, indie: 0, hiphop: 3, classical: 0 } },
        { id: 'd', text: '지적 만족을 주는 예술', score: { kpop: 0, indie: 0, hiphop: 0, classical: 3 } },
      ],
    },
  ],
  results: {
    kpop: {
      id: 'kpop',
      title: 'K-POP 러버',
      description: '트렌드에 민감하고 밝은 에너지를 가진 당신! 아이돌의 퍼포먼스와 중독성 있는 멜로디를 사랑합니다.',
      traits: ['트렌디', '밝은 에너지', '사교적', '열정적'],
      emoji: '🎤',
      color: '#FF69B4',
    },
    indie: {
      id: 'indie',
      title: '인디 감성파',
      description: '깊은 감성과 시적인 세계관을 가진 당신! 숨은 보석 같은 음악을 발굴하는 것을 좋아합니다.',
      traits: ['감성적', '독자적 취향', '시적', '섬세함'],
      emoji: '🎸',
      color: '#8E44AD',
    },
    hiphop: {
      id: 'hiphop',
      title: '힙합 마니아',
      description: '자신감 넘치고 쿨한 바이브의 당신! 리듬감 있는 음악으로 자신을 표현하는 것을 좋아합니다.',
      traits: ['자신감', '쿨함', '표현력', '트렌드 세터'],
      emoji: '🎧',
      color: '#E74C3C',
    },
    classical: {
      id: 'classical',
      title: '클래식 감상가',
      description: '지적이고 차분한 성격의 당신! 깊이 있는 음악을 통해 내면의 풍요를 추구합니다.',
      traits: ['지적', '차분함', '심미안', '내면 중시'],
      emoji: '🎻',
      color: '#2C3E50',
    },
  },
};
