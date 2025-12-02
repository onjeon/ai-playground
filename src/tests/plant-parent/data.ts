// plant-parent 테스트 데이터
export const plantParent = {
  id: 'plant-parent',
  title: '식물 집사 테스트',
  description: '당신은 어떤 식물 집사? 당신에게 맞는 식물과 관리 스타일을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '식물 물주기 스타일은?',
      options: [
        { text: '정해진 날짜에 규칙적으로', type: 'dedicated' },
        { text: '생각날 때, 흙 말랐을 때', type: 'casual' },
        { text: '자주 깜빡함...', type: 'forgetful' },
        { text: '식물 없어서 모름', type: 'newbie' }
      ]
    },
    {
      id: 2,
      text: '식물을 키우는 이유는?',
      options: [
        { text: '생명을 돌보는 보람', type: 'dedicated' },
        { text: '인테리어/공기 정화', type: 'casual' },
        { text: '선물 받았거나 충동구매', type: 'forgetful' },
        { text: '키워보고 싶은 마음', type: 'newbie' }
      ]
    },
    {
      id: 3,
      text: '식물이 시들면?',
      options: [
        { text: '원인 분석하고 살리려 노력', type: 'dedicated' },
        { text: '안타깝지만 다음에 더 잘', type: 'casual' },
        { text: '아... 또 죽었구나', type: 'forgetful' },
        { text: '왜 죽는지 모르겠어', type: 'newbie' }
      ]
    },
    {
      id: 4,
      text: '식물 관련 지식은?',
      options: [
        { text: '꽤 많이 알고 공부함', type: 'dedicated' },
        { text: '기본적인 것만', type: 'casual' },
        { text: '잘 모름', type: 'forgetful' },
        { text: '배우고 싶어', type: 'newbie' }
      ]
    },
    {
      id: 5,
      text: '키우고 싶은 식물 수는?',
      options: [
        { text: '많이! 식물원처럼', type: 'dedicated' },
        { text: '적당히 3-5개', type: 'casual' },
        { text: '1-2개도 벅참', type: 'forgetful' },
        { text: '일단 하나부터', type: 'newbie' }
      ]
    },
    {
      id: 6,
      text: '식물에 이름 붙이나요?',
      options: [
        { text: '당연! 각각 애칭 있음', type: 'dedicated' },
        { text: '가끔, 특별한 식물에', type: 'casual' },
        { text: '아니...', type: 'forgetful' },
        { text: '붙이면 정 들 것 같아', type: 'newbie' }
      ]
    },
    {
      id: 7,
      text: '식물 관리 앱/캘린더 사용?',
      options: [
        { text: '사용함, 체계적으로', type: 'dedicated' },
        { text: '가끔, 필요하면', type: 'casual' },
        { text: '있어도 안 쓸 듯', type: 'forgetful' },
        { text: '있으면 도움 될 것 같아', type: 'newbie' }
      ]
    },
    {
      id: 8,
      text: '화분 구매 스타일은?',
      options: [
        { text: '식물에 맞는 거 신중히', type: 'dedicated' },
        { text: '예쁜 거로 적당히', type: 'casual' },
        { text: '있는 거 그냥 씀', type: 'forgetful' },
        { text: '뭘 사야 할지 모름', type: 'newbie' }
      ]
    },
    {
      id: 9,
      text: '식물과 대화하나요?',
      options: [
        { text: '자주! 말 걸고 칭찬함', type: 'dedicated' },
        { text: '가끔 혼잣말처럼', type: 'casual' },
        { text: '안 함', type: 'forgetful' },
        { text: '해보면 좋을까?', type: 'newbie' }
      ]
    },
    {
      id: 10,
      text: '당신에게 식물이란?',
      options: [
        { text: '가족 같은 존재', type: 'dedicated' },
        { text: '일상의 작은 기쁨', type: 'casual' },
        { text: '신경 쓸 것', type: 'forgetful' },
        { text: '새로운 도전', type: 'newbie' }
      ]
    }
  ],
  results: {
    dedicated: {
      type: '열혈 식물 집사',
      title: '🌿 열혈 식물 집사',
      description: '식물 사랑이 넘치는 당신! 진정한 식물 부모예요.',
      traits: ['체계적 관리', '애정 가득', '지식 풍부', '헌신적'],
      plantMatch: '난이도 높은 식물도 OK (몬스테라, 알로카시아, 무화과)',
      advice: '당신의 초록이들은 행복해요! 하지만 과보호도 독이 될 수 있으니 적당히~'
    },
    casual: {
      type: '여유로운 식물 집사',
      title: '🪴 여유로운 식물 집사',
      description: '적당히 돌보는 캐주얼 식물 집사! 부담 없이 함께해요.',
      traits: ['적당한 관심', '인테리어 목적', '유연함', '실용적'],
      plantMatch: '관리 쉬운 식물 (스투키, 산세베리아, 스파티필룸)',
      advice: '당신의 페이스가 좋아요! 물주기 알림 앱으로 좀 더 규칙적으로 해보세요.'
    },
    forgetful: {
      type: '깜빡이 식물 집사',
      title: '😅 깜빡이 식물 집사',
      description: '맘은 있는데 자꾸 깜빡하는 당신! 생존력 강한 식물이 필요해요.',
      traits: ['깜빡함', '의욕 있음', '바쁜 일상', '죄책감'],
      plantMatch: '죽지 않는 식물 (다육이, 선인장, 스투키, 에어플랜트)',
      advice: '한 달에 한 번 물 줘도 되는 식물로 시작하세요! 죄책감은 NO~'
    },
    newbie: {
      type: '새싹 식물 집사',
      title: '🌱 새싹 식물 집사',
      description: '식물 세계에 첫 발을 내딛는 당신! 함께 성장해요.',
      traits: ['초보', '배움 의지', '설렘', '가능성'],
      plantMatch: '초보자용 식물 (스킨답서스, 행운목, 산호수, 테이블야자)',
      advice: '환영해요! 키우기 쉬운 식물부터 시작하고, 하나씩 늘려가세요. 유튜브로 기초부터!'
    }
  }
};
