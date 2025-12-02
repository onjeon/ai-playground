// future-me 테스트 데이터
export const futureMe = {
  id: 'future-me',
  title: '10년 후 나 테스트',
  description: '당신의 미래 모습은? 현재 패턴으로 예측하는 10년 후 당신!',
  questions: [
    {
      id: 1,
      text: '지금 가장 중요하게 여기는 것은?',
      options: [
        { text: '커리어와 성공', type: 'achiever' },
        { text: '관계와 사랑', type: 'connector' },
        { text: '자유와 경험', type: 'explorer' },
        { text: '안정과 평화', type: 'peaceful' }
      ]
    },
    {
      id: 2,
      text: '주말에 주로 뭘 하나요?',
      options: [
        { text: '자기계발/사이드 프로젝트', type: 'achiever' },
        { text: '가족/친구와 시간', type: 'connector' },
        { text: '새로운 경험/여행', type: 'explorer' },
        { text: '휴식/취미', type: 'peaceful' }
      ]
    },
    {
      id: 3,
      text: '10년 후 이상적인 모습은?',
      options: [
        { text: '업계에서 인정받는 전문가', type: 'achiever' },
        { text: '사랑하는 가족과 함께', type: 'connector' },
        { text: '세계를 누비는 자유인', type: 'explorer' },
        { text: '평화롭고 여유로운 삶', type: 'peaceful' }
      ]
    },
    {
      id: 4,
      text: '돈을 벌면 가장 하고 싶은 것은?',
      options: [
        { text: '더 큰 목표를 위한 투자', type: 'achiever' },
        { text: '사랑하는 사람들과 나눔', type: 'connector' },
        { text: '버킷리스트 실행', type: 'explorer' },
        { text: '마음 편히 살 수 있는 기반', type: 'peaceful' }
      ]
    },
    {
      id: 5,
      text: '스트레스 받을 때 하는 생각은?',
      options: [
        { text: '이걸 해내면 더 성장할 거야', type: 'achiever' },
        { text: '누군가와 이야기하고 싶다', type: 'connector' },
        { text: '여기서 벗어나고 싶다', type: 'explorer' },
        { text: '그냥 쉬고 싶다', type: 'peaceful' }
      ]
    },
    {
      id: 6,
      text: '행복의 기준은?',
      options: [
        { text: '목표 달성', type: 'achiever' },
        { text: '사랑하는 관계', type: 'connector' },
        { text: '자유로운 삶', type: 'explorer' },
        { text: '마음의 평화', type: 'peaceful' }
      ]
    },
    {
      id: 7,
      text: '지금 열정을 쏟는 것은?',
      options: [
        { text: '일/공부', type: 'achiever' },
        { text: '관계', type: 'connector' },
        { text: '경험/취미', type: 'explorer' },
        { text: '나 자신', type: 'peaceful' }
      ]
    },
    {
      id: 8,
      text: '10년 후 두려운 것은?',
      options: [
        { text: '아무것도 이루지 못한 것', type: 'achiever' },
        { text: '외로움', type: 'connector' },
        { text: '지루한 삶', type: 'explorer' },
        { text: '불안정', type: 'peaceful' }
      ]
    },
    {
      id: 9,
      text: '현재 가장 부족한 것은?',
      options: [
        { text: '시간/기회', type: 'achiever' },
        { text: '연결/소통', type: 'connector' },
        { text: '자유/모험', type: 'explorer' },
        { text: '여유/평화', type: 'peaceful' }
      ]
    },
    {
      id: 10,
      text: '인생 모토와 가장 가까운 것은?',
      options: [
        { text: '최고가 되자', type: 'achiever' },
        { text: '함께라서 행복하다', type: 'connector' },
        { text: '인생은 여행이다', type: 'explorer' },
        { text: '지금 이 순간', type: 'peaceful' }
      ]
    }
  ],
  results: {
    achiever: {
      type: '성취자',
      title: '🏆 10년 후: 성취자',
      description: '10년 후 당신은 목표를 이룬 성공한 전문가! 열정과 노력이 결실을 맺었어요.',
      futureImage: '업계에서 인정받는 전문가, 자신만의 영역 구축',
      traits: ['커리어 성공', '전문성', '영향력', '성취감'],
      advice: '성공을 향해 달리는 건 좋지만, 과정에서 소중한 것들을 놓치지 마세요!'
    },
    connector: {
      type: '연결자',
      title: '💕 10년 후: 연결자',
      description: '10년 후 당신은 사랑으로 둘러싸인 사람! 깊은 관계가 당신의 자산이에요.',
      futureImage: '사랑하는 가족/친구와 함께, 따뜻한 관계의 중심',
      traits: ['풍요로운 관계', '사랑', '소속감', '연결'],
      advice: '관계는 소중하지만, 자신만의 시간과 목표도 잊지 마세요!'
    },
    explorer: {
      type: '탐험가',
      title: '🌍 10년 후: 탐험가',
      description: '10년 후 당신은 경험으로 가득한 자유인! 다양한 경험이 당신을 풍요롭게 했어요.',
      futureImage: '세계를 누비며 다양한 경험, 자유로운 라이프스타일',
      traits: ['풍부한 경험', '자유', '모험', '다양성'],
      advice: '모험은 멋지지만, 뿌리 내릴 곳도 생각해보세요!'
    },
    peaceful: {
      type: '평화주의자',
      title: '🧘 10년 후: 평화주의자',
      description: '10년 후 당신은 내면의 평화를 찾은 사람! 여유롭고 만족스러운 삶이에요.',
      futureImage: '안정적이고 평화로운 삶, 마음의 여유',
      traits: ['내면의 평화', '안정', '만족', '여유'],
      advice: '평화는 소중하지만, 가끔은 도전도 삶을 풍요롭게 해요!'
    }
  }
};
