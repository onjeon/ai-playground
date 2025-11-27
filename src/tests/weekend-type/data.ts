// 주말 유형 테스트 데이터
export const weekendTypeTest = {
  id: 'weekend-type',
  title: '주말 유형 테스트',
  description: '당신은 주말을 어떻게 보내나요? 집콕형, 액티브형, 소셜형, 자기계발형 중 당신의 주말 유형을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '금요일 밤, 가장 먼저 드는 생각은?',
      options: [
        { id: 'a', text: '"집에서 쉬어야지"', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '"내일 뭐하지? 밖에 나가야지"', score: { homebody: 0, active: 3, social: 1, selfDev: 0 } },
        { id: 'c', text: '"누구 만날까?"', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '"밀린 공부/프로젝트 해야지"', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 2,
      text: '토요일 아침 기상 시간은?',
      options: [
        { id: 'a', text: '점심 가까이 일어남', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '일찍 일어나 활동 시작', score: { homebody: 0, active: 3, social: 0, selfDev: 1 } },
        { id: 'c', text: '약속 시간에 맞춰서', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '평소처럼 규칙적으로', score: { homebody: 0, active: 1, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 3,
      text: '이상적인 토요일 오후는?',
      options: [
        { id: 'a', text: '침대에서 넷플릭스', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '등산, 자전거, 운동', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '친구들과 카페나 쇼핑', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '강의 듣거나 책 읽기', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 4,
      text: '주말 저녁 식사는?',
      options: [
        { id: 'a', text: '배달 음식 주문', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '운동 후 건강식', score: { homebody: 0, active: 3, social: 0, selfDev: 1 } },
        { id: 'c', text: '친구들과 맛집 탐방', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '간단히 해결하고 할 일', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 5,
      text: '갑자기 시간이 비면?',
      options: [
        { id: 'a', text: '그냥 집에서 뒹굴기', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '뭐라도 몸을 움직이기', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '친구에게 연락하기', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '배우고 싶던 것 찾아보기', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 6,
      text: '주말 외출 빈도는?',
      options: [
        { id: 'a', text: '거의 안 나간다', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '매번 어디든 나간다', score: { homebody: 0, active: 3, social: 1, selfDev: 0 } },
        { id: 'c', text: '약속 있으면 나간다', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '필요한 일 있으면', score: { homebody: 1, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 7,
      text: '일요일 저녁 기분은?',
      options: [
        { id: 'a', text: '푹 쉬어서 충전됐다', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '활동해서 뿌듯하다', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '사람들 만나서 즐거웠다', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '생산적이어서 만족', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 8,
      text: '주말에 가장 많이 쓰는 앱은?',
      options: [
        { id: 'a', text: '넷플릭스/유튜브', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '운동/헬스 앱', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '카톡/인스타', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '강의/교육 앱', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 9,
      text: '주말 옷차림은?',
      options: [
        { id: 'a', text: '하루 종일 파자마', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '운동복/액티브웨어', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '외출용 깔끔한 옷', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '편하면서 단정하게', score: { homebody: 1, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 10,
      text: '월요일이 기대되는 이유는?',
      options: [
        { id: 'a', text: '기대 안 됨, 주말이 좋다', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '주말 활동 에너지로 버틴다', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '직장/학교 사람들 만남', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '주말에 배운 것 적용', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 11,
      text: '연휴가 생기면 가장 하고 싶은 것은?',
      options: [
        { id: 'a', text: '밀린 잠 자기', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '여행/액티비티', score: { homebody: 0, active: 3, social: 1, selfDev: 0 } },
        { id: 'c', text: '모임/파티', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '자격증/프로젝트', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
    {
      id: 12,
      text: '완벽한 주말의 정의는?',
      options: [
        { id: 'a', text: '아무것도 안 하고 충전', score: { homebody: 3, active: 0, social: 0, selfDev: 0 } },
        { id: 'b', text: '몸을 움직여 땀 흘리기', score: { homebody: 0, active: 3, social: 0, selfDev: 0 } },
        { id: 'c', text: '소중한 사람들과 시간', score: { homebody: 0, active: 0, social: 3, selfDev: 0 } },
        { id: 'd', text: '의미 있는 성장', score: { homebody: 0, active: 0, social: 0, selfDev: 3 } },
      ],
    },
  ],
  results: {
    homebody: {
      id: 'homebody',
      title: '집콕 마스터',
      description: '집에서 편안하게 쉬는 것이 최고의 충전 방법인 당신! 혼자만의 시간으로 에너지를 채웁니다.',
      traits: ['휴식 중시', '혼자 시간', '안락함 추구', '내향적 충전'],
      emoji: '🏠',
      color: '#9B59B6',
    },
    active: {
      id: 'active',
      title: '액티브 무버',
      description: '움직이는 것이 곧 휴식인 당신! 활동적인 주말을 보내며 에너지를 충전합니다.',
      traits: ['활동적', '건강 중시', '아웃도어', '도전적'],
      emoji: '🏃',
      color: '#27AE60',
    },
    social: {
      id: 'social',
      title: '소셜 버터플라이',
      description: '사람들과 함께하는 시간이 가장 즐거운 당신! 관계 속에서 에너지를 얻습니다.',
      traits: ['사교적', '관계 중시', '외향적', '소통 즐김'],
      emoji: '🦋',
      color: '#E74C3C',
    },
    selfDev: {
      id: 'selfDev',
      title: '자기계발 덕후',
      description: '쉬는 시간도 의미 있게 보내고 싶은 당신! 배움과 성장으로 주말을 채웁니다.',
      traits: ['성장 지향', '생산적', '목표 의식', '자기주도'],
      emoji: '📚',
      color: '#3498DB',
    },
  },
};
