// meme-identity 테스트 데이터
export const memeidentityTest = {
  id: 'meme-identity',
  title: '나는 어떤 밈인가 테스트',
  description: '당신의 성격을 인터넷 밈으로 표현하면? SNS에서 당신은 어떤 밈 캐릭터일까요!',
  questions: [
    {
      id: 1,
      text: '친구들 사이에서 당신의 포지션은?',
      options: [
        { text: '분위기 메이커, 웃음 담당', type: 'doge' },
        { text: '조용히 있다가 한마디로 터뜨림', type: 'wojak' },
        { text: '진지한 조언러, 상담 담당', type: 'gigachad' },
        { text: '예측불가 4차원 캐릭터', type: 'pepe' }
      ]
    },
    {
      id: 2,
      text: '단톡방에서 주로 하는 행동은?',
      options: [
        { text: '밈/짤 폭격으로 분위기 띄움', type: 'doge' },
        { text: '읽씹하다가 갑자기 참전', type: 'wojak' },
        { text: '논쟁 정리하고 결론 내림', type: 'gigachad' },
        { text: '아무도 이해 못할 드립 침', type: 'pepe' }
      ]
    },
    {
      id: 3,
      text: '스트레스 받을 때 당신은?',
      options: [
        { text: '웃긴 영상 보면서 잊으려 함', type: 'doge' },
        { text: '멍하니 천장 보며 생각에 잠김', type: 'wojak' },
        { text: '운동이나 생산적인 활동으로 전환', type: 'gigachad' },
        { text: '이상한 행동으로 주변 당황시킴', type: 'pepe' }
      ]
    },
    {
      id: 4,
      text: 'SNS 프로필 사진 스타일은?',
      options: [
        { text: '밝고 친근한 셀카/사진', type: 'doge' },
        { text: '감성적이거나 우울한 분위기', type: 'wojak' },
        { text: '자신감 넘치는 포즈', type: 'gigachad' },
        { text: '아무도 이해 못할 이상한 사진', type: 'pepe' }
      ]
    },
    {
      id: 5,
      text: '누군가 기분 나쁜 말을 했을 때?',
      options: [
        { text: '웃으면서 "ㅋㅋㅋ 뭐래" 넘김', type: 'doge' },
        { text: '속으로 상처받고 곱씹음', type: 'wojak' },
        { text: '정면으로 반박하거나 무시', type: 'gigachad' },
        { text: '더 이상한 말로 상대 혼란시킴', type: 'pepe' }
      ]
    },
    {
      id: 6,
      text: '좋아하는 콘텐츠 유형은?',
      options: [
        { text: '웃긴 영상, 동물 짤, 밈', type: 'doge' },
        { text: '감성 글귀, 공감 콘텐츠', type: 'wojak' },
        { text: '자기계발, 동기부여 콘텐츠', type: 'gigachad' },
        { text: '병맛, 언더그라운드 밈', type: 'pepe' }
      ]
    },
    {
      id: 7,
      text: '새로운 사람을 만났을 때?',
      options: [
        { text: '먼저 말 걸고 친해지려 함', type: 'doge' },
        { text: '어색해서 눈치만 봄', type: 'wojak' },
        { text: '자연스럽게 대화 리드', type: 'gigachad' },
        { text: '이상한 첫인상을 남김', type: 'pepe' }
      ]
    },
    {
      id: 8,
      text: '인생의 좌우명에 가까운 것은?',
      options: [
        { text: '"일단 웃고 보자"', type: 'doge' },
        { text: '"왜 사는지 모르겠다"', type: 'wojak' },
        { text: '"노력은 배신하지 않는다"', type: 'gigachad' },
        { text: '"세상은 원래 미친 곳"', type: 'pepe' }
      ]
    },
    {
      id: 9,
      text: '갑자기 100만원이 생기면?',
      options: [
        { text: '친구들이랑 맛있는 거 먹음', type: 'doge' },
        { text: '일단 저축하고 고민함', type: 'wojak' },
        { text: '자기계발이나 투자에 사용', type: 'gigachad' },
        { text: '아무도 이해 못할 곳에 씀', type: 'pepe' }
      ]
    },
    {
      id: 10,
      text: '당신을 한 단어로 표현하면?',
      options: [
        { text: '유쾌함', type: 'doge' },
        { text: '감성', type: 'wojak' },
        { text: '카리스마', type: 'gigachad' },
        { text: '혼돈', type: 'pepe' }
      ]
    }
  ],
  results: {
    doge: {
      type: '도지 (Doge)',
      title: '🐕 도지 (Doge)',
      description: 'Such 유쾌! Much 긍정! Very 사교적! 당신은 어디서든 분위기를 밝게 만드는 도지 타입입니다.',
      traits: [
        '긍정적이고 유쾌한 에너지',
        '누구와도 쉽게 친해지는 친화력',
        '스트레스도 웃음으로 승화',
        '사람들에게 힐링을 주는 존재'
      ],
      memeDescription: '"Wow", "Such", "Very", "Much"로 유명한 시바견 밈. 인터넷의 대표 긍정 아이콘!',
      advice: '긍정 에너지 그 자체인 당신! 가끔은 진지한 감정도 표현해보세요. 웃음 뒤에 숨은 속마음도 소중하니까요.'
    },
    wojak: {
      type: '워작 (Wojak)',
      title: '😔 워작 (Wojak)',
      description: '감성과 공감의 아이콘! 세상의 슬픔을 이해하고 공유하는 워작 타입입니다.',
      traits: [
        '깊은 감수성과 공감 능력',
        '내면의 세계가 풍부함',
        '조용하지만 깊은 관계를 원함',
        '때로는 우울하지만 그게 매력'
      ],
      memeDescription: '인터넷의 모든 슬픔과 공감을 담은 캐릭터. "I know that feel bro"의 주인공.',
      advice: '당신의 감수성은 특별한 재능이에요. 하지만 가끔은 밖으로 나와서 밝은 에너지도 받아보세요!'
    },
    gigachad: {
      type: '기가채드 (GigaChad)',
      title: '💪 기가채드 (GigaChad)',
      description: '자신감과 카리스마의 화신! 어떤 상황에서도 당당한 기가채드 타입입니다.',
      traits: [
        '흔들리지 않는 자신감',
        '목표를 향한 추진력',
        '주변의 시선에 영향받지 않음',
        '리더십과 책임감'
      ],
      memeDescription: '완벽한 턱선과 자신감을 가진 인터넷의 알파. "Yes"라고 대답하는 그 남자.',
      advice: '멋진 자신감의 소유자! 하지만 가끔은 약한 모습을 보여도 괜찮아요. 완벽하지 않아도 사랑받을 수 있어요.'
    },
    pepe: {
      type: '페페 (Pepe)',
      title: '🐸 페페 (Pepe)',
      description: '예측불가 혼돈의 아이콘! 세상을 다른 시각으로 보는 페페 타입입니다.',
      traits: [
        '독특하고 창의적인 사고방식',
        '틀에 박히지 않은 자유로운 영혼',
        '남들이 이해 못해도 OK',
        '인터넷 밈 문화의 진정한 이해자'
      ],
      memeDescription: '슬픔, 기쁨, 분노, 혼돈... 모든 감정을 표현하는 개구리. 인터넷 문화의 상징.',
      advice: '당신의 독특함은 세상에 하나뿐인 개성이에요. 그 4차원적 매력을 계속 발휘하세요!'
    }
  }
};
