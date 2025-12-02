// news-consumption 테스트 데이터
export const newsconsumptionTest = {
  id: 'news-consumption',
  title: '뉴스 소비 유형 테스트',
  description: '뉴스를 어떻게 소비하는지로 알아보는 당신의 성격! 정보 습득 스타일은?',
  questions: [
    {
      id: 1,
      text: '주로 뉴스를 접하는 경로는?',
      options: [
        { text: '포털 사이트 메인 뉴스', type: 'mainstream' },
        { text: 'SNS 타임라인에 뜨는 것들', type: 'social' },
        { text: '유튜브나 팟캐스트', type: 'deep' },
        { text: '뉴스 잘 안 봄', type: 'minimal' }
      ]
    },
    {
      id: 2,
      text: '뉴스 기사를 볼 때 주로 어떻게?',
      options: [
        { text: '제목과 첫 문단만 훑어봄', type: 'mainstream' },
        { text: '댓글이나 반응부터 확인', type: 'social' },
        { text: '끝까지 정독하고 관련 기사도 찾아봄', type: 'deep' },
        { text: '제목만 보고 넘김', type: 'minimal' }
      ]
    },
    {
      id: 3,
      text: '이슈가 터졌을 때 당신의 반응은?',
      options: [
        { text: '여러 매체 기사를 비교해서 봄', type: 'mainstream' },
        { text: 'SNS 반응과 밈부터 확인', type: 'social' },
        { text: '배경과 맥락을 파악하려 함', type: 'deep' },
        { text: '나중에 정리된 거 보면 되지', type: 'minimal' }
      ]
    },
    {
      id: 4,
      text: '관심 있는 뉴스 분야는?',
      options: [
        { text: '정치, 경제 등 주요 뉴스', type: 'mainstream' },
        { text: '연예, 트렌드, 화제 이슈', type: 'social' },
        { text: '심층 분석, 국제 뉴스', type: 'deep' },
        { text: '딱히 없음, 필요할 때만', type: 'minimal' }
      ]
    },
    {
      id: 5,
      text: '가짜뉴스에 대한 생각은?',
      options: [
        { text: '출처를 확인하고 팩트체크 함', type: 'mainstream' },
        { text: '많이 공유된 건 일단 신뢰', type: 'social' },
        { text: '여러 자료 크로스체크 필수', type: 'deep' },
        { text: '뭐가 진짜인지 모르겠음', type: 'minimal' }
      ]
    },
    {
      id: 6,
      text: '뉴스 알림 설정은?',
      options: [
        { text: '주요 뉴스 앱 알림 켜놓음', type: 'mainstream' },
        { text: 'SNS 알림으로 충분', type: 'social' },
        { text: '관심 분야 뉴스레터 구독', type: 'deep' },
        { text: '알림 다 꺼놓음', type: 'minimal' }
      ]
    },
    {
      id: 7,
      text: '뉴스를 보고 나서 주로 하는 행동은?',
      options: [
        { text: '주변 사람들과 이야기함', type: 'mainstream' },
        { text: 'SNS에 공유하거나 댓글 달', type: 'social' },
        { text: '혼자 생각하거나 더 찾아봄', type: 'deep' },
        { text: '그냥 넘어감', type: 'minimal' }
      ]
    },
    {
      id: 8,
      text: '뉴스 보는 시간대는?',
      options: [
        { text: '출퇴근 시간에 정기적으로', type: 'mainstream' },
        { text: 'SNS 하다가 자연스럽게', type: 'social' },
        { text: '저녁이나 주말에 여유롭게', type: 'deep' },
        { text: '특별히 정해진 시간 없음', type: 'minimal' }
      ]
    },
    {
      id: 9,
      text: '"요즘 무슨 일 있어?" 라고 물어보면?',
      options: [
        { text: '주요 이슈 2-3개는 말할 수 있음', type: 'mainstream' },
        { text: 'SNS에서 본 핫한 이슈 위주로', type: 'social' },
        { text: '자세한 배경까지 설명 가능', type: 'deep' },
        { text: '"나도 잘 모르겠어"', type: 'minimal' }
      ]
    },
    {
      id: 10,
      text: '뉴스에 대한 당신의 생각은?',
      options: [
        { text: '기본 교양으로 알아야 함', type: 'mainstream' },
        { text: '재미있고 화제되는 것 위주로', type: 'social' },
        { text: '깊이 있게 이해하고 싶음', type: 'deep' },
        { text: '모르고 살아도 문제없음', type: 'minimal' }
      ]
    }
  ],
  results: {
    mainstream: {
      type: '균형 잡힌 정보인',
      title: '📰 균형 잡힌 정보인',
      description: '뉴스는 기본! 주요 이슈를 놓치지 않고 균형 잡힌 시각을 유지하는 타입입니다.',
      traits: [
        '사회 이슈에 관심이 많다',
        '균형 잡힌 시각을 가지려 함',
        '기본 소양을 중요시한다',
        '대화 주제가 풍부하다'
      ],
      advice: '다양한 관점의 매체를 접하면 더 균형 잡힌 시각을 가질 수 있어요!'
    },
    social: {
      type: '트렌드 서퍼',
      title: '📱 트렌드 서퍼',
      description: 'SNS가 내 뉴스! 화제의 이슈를 빠르게 캐치하는 트렌디한 타입입니다.',
      traits: [
        '트렌드에 민감하다',
        '공유와 소통을 좋아함',
        '재미를 추구하는 편',
        '빠른 정보 습득 능력'
      ],
      advice: 'SNS 정보는 검증이 필요할 때가 많아요. 가끔은 원본 기사를 확인해보세요!'
    },
    deep: {
      type: '심층 분석가',
      title: '🔍 심층 분석가',
      description: '표면 너머를 본다! 이슈의 맥락과 배경까지 파악하는 깊이 있는 타입입니다.',
      traits: [
        '분석적인 사고를 한다',
        '본질을 파악하려 함',
        '지적 호기심이 강하다',
        '비판적 사고 능력이 있다'
      ],
      advice: '깊이 있는 분석도 좋지만, 가끔은 가볍게 훑어보는 것도 효율적일 수 있어요!'
    },
    minimal: {
      type: '뉴스 프리존',
      title: '🏝️ 뉴스 프리존',
      description: '뉴스 없이도 행복! 정보 과부하에서 벗어난 자유로운 타입입니다.',
      traits: [
        '스트레스를 덜 받음',
        '현재에 집중하는 편',
        '불필요한 정보를 피함',
        '마이 웨이 성향'
      ],
      advice: '가끔은 주요 이슈를 체크하면 대화나 사회생활에 도움이 될 수 있어요!'
    }
  }
};
