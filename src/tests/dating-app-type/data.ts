// 소개팅 앱 유형 테스트 데이터
export const datingAppTypeTest = {
  id: 'dating-app-type',
  title: '소개팅 앱 유형 테스트',
  description: '당신에게 맞는 소개팅 앱은? 틴더, 범블, 소모임, 블라인드 데이트 중 당신의 연애 스타일에 맞는 앱을 추천합니다!',
  questions: [
    {
      id: 1,
      text: '새로운 사람을 만날 때 선호하는 방식은?',
      options: [
        { id: 'a', text: '사진과 프로필로 빠르게 판단', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '먼저 대화를 나눠보고 싶다', score: { tinder: 0, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '공통 관심사가 있는 사람', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '지인 소개가 가장 믿음직해', score: { tinder: 0, bumble: 0, social: 1, blind: 3 } },
      ],
    },
    {
      id: 2,
      text: '첫 만남에서 중요하게 보는 것은?',
      options: [
        { id: 'a', text: '외모와 첫인상', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '대화 매너', score: { tinder: 1, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '공통 관심사', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '신뢰할 수 있는 배경', score: { tinder: 0, bumble: 0, social: 1, blind: 3 } },
      ],
    },
    {
      id: 3,
      text: '만남의 속도는?',
      options: [
        { id: 'a', text: '빠르게 만나보고 판단', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '어느 정도 대화 후 만남', score: { tinder: 1, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '천천히 알아가며', score: { tinder: 0, bumble: 1, social: 3, blind: 1 } },
        { id: 'd', text: '신중하게 검증 후', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 4,
      text: '연애에서 원하는 것은?',
      options: [
        { id: 'a', text: '설레는 만남들', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '좋은 대화 상대', score: { tinder: 0, bumble: 3, social: 1, blind: 0 } },
        { id: 'c', text: '취미 공유하는 사람', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '진지한 관계', score: { tinder: 0, bumble: 1, social: 0, blind: 3 } },
      ],
    },
    {
      id: 5,
      text: '프로필 작성 스타일은?',
      options: [
        { id: 'a', text: '사진 위주로', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '자기소개를 자세히', score: { tinder: 0, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '관심사와 취미 중심', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '직업, 학력 등 스펙', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 6,
      text: '매칭 후 첫 메시지는?',
      options: [
        { id: 'a', text: '가볍게 "하이~"', score: { tinder: 3, bumble: 0, social: 0, blind: 0 } },
        { id: 'b', text: '상대방이 먼저 하길 기다림', score: { tinder: 0, bumble: 3, social: 1, blind: 0 } },
        { id: 'c', text: '공통 관심사로 대화 시작', score: { tinder: 0, bumble: 1, social: 3, blind: 1 } },
        { id: 'd', text: '정중하게 자기소개', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 7,
      text: '안 맞는 사람을 만났을 때?',
      options: [
        { id: 'a', text: '빠르게 다음 사람으로', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '예의있게 정리', score: { tinder: 0, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '친구로라도 지낼 수 있음', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '소개해준 사람에게 피드백', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 8,
      text: '이상형의 조건은?',
      options: [
        { id: 'a', text: '비주얼이 중요', score: { tinder: 3, bumble: 1, social: 0, blind: 0 } },
        { id: 'b', text: '성격과 매너', score: { tinder: 0, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '취향이 맞는 사람', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '안정적인 사람', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 9,
      text: '첫 데이트 장소 선호는?',
      options: [
        { id: 'a', text: '트렌디한 핫플', score: { tinder: 3, bumble: 1, social: 1, blind: 0 } },
        { id: 'b', text: '대화하기 좋은 카페', score: { tinder: 0, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '공통 관심사 관련 장소', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '조용하고 편안한 곳', score: { tinder: 0, bumble: 1, social: 0, blind: 3 } },
      ],
    },
    {
      id: 10,
      text: '소개팅에서 가장 불편한 것은?',
      options: [
        { id: 'a', text: '사진과 실물이 다를 때', score: { tinder: 3, bumble: 0, social: 0, blind: 0 } },
        { id: 'b', text: '일방적인 대화', score: { tinder: 0, bumble: 3, social: 0, blind: 0 } },
        { id: 'c', text: '관심사가 전혀 안 맞을 때', score: { tinder: 0, bumble: 0, social: 3, blind: 0 } },
        { id: 'd', text: '신원이 불확실할 때', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 11,
      text: '연애 경험에 대해?',
      options: [
        { id: 'a', text: '다양한 경험이 중요', score: { tinder: 3, bumble: 1, social: 1, blind: 0 } },
        { id: 'b', text: '좋은 인연을 만나면 OK', score: { tinder: 1, bumble: 3, social: 1, blind: 1 } },
        { id: 'c', text: '취향 맞는 사람과 깊게', score: { tinder: 0, bumble: 1, social: 3, blind: 0 } },
        { id: 'd', text: '결혼을 전제로 진지하게', score: { tinder: 0, bumble: 0, social: 0, blind: 3 } },
      ],
    },
    {
      id: 12,
      text: '이상적인 만남의 시작은?',
      options: [
        { id: 'a', text: '스와이프 한 번에 시작', score: { tinder: 3, bumble: 0, social: 0, blind: 0 } },
        { id: 'b', text: '먼저 다가오는 상대', score: { tinder: 0, bumble: 3, social: 0, blind: 0 } },
        { id: 'c', text: '같은 모임에서 자연스럽게', score: { tinder: 0, bumble: 0, social: 3, blind: 1 } },
        { id: 'd', text: '믿을 수 있는 소개로', score: { tinder: 0, bumble: 0, social: 1, blind: 3 } },
      ],
    },
  ],
  results: {
    tinder: {
      id: 'tinder',
      title: '틴더 스타일',
      description: '빠른 판단과 다양한 만남을 즐기는 당신! 첫인상과 느낌을 중시하고, 새로운 사람을 만나는 것 자체를 즐깁니다.',
      traits: ['직관적', '빠른 판단', '다양한 경험', '외향적'],
      emoji: '🔥',
      color: '#FF6B6B',
      recommendation: '틴더, 위피',
    },
    bumble: {
      id: 'bumble',
      title: '범블 스타일',
      description: '대화와 매너를 중시하는 당신! 상대방을 알아가는 과정을 즐기고, 예의 있는 만남을 추구합니다.',
      traits: ['대화 중시', '매너 있는', '신중한 선택', '균형 잡힌'],
      emoji: '🐝',
      color: '#FFC300',
      recommendation: '범블, 힌지',
    },
    social: {
      id: 'social',
      title: '소모임 스타일',
      description: '공통 관심사를 통한 자연스러운 만남을 선호하는 당신! 취미나 활동을 함께하며 알아가는 것을 좋아합니다.',
      traits: ['관심사 중심', '자연스러운', '친구에서 연인', '활동적'],
      emoji: '🎯',
      color: '#45B7D1',
      recommendation: '소모임, 프립, 클럽스',
    },
    blind: {
      id: 'blind',
      title: '블라인드 데이트 스타일',
      description: '신뢰할 수 있는 만남을 원하는 당신! 검증된 소개와 진지한 관계를 추구합니다.',
      traits: ['신중함', '진지한 교제', '안정 추구', '신뢰 중시'],
      emoji: '🤝',
      color: '#9B59B6',
      recommendation: '블라인드, 정오의 데이트',
    },
  },
};
