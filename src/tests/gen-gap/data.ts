// 세대 격차 테스트 데이터
export const genGapTest = {
  id: 'gen-gap',
  title: '세대 격차 테스트',
  description: '당신은 어느 세대와 가장 잘 맞나요? X세대, 밀레니얼, Z세대, 알파세대 중 당신의 마음이 속한 세대를 찾아드립니다!',
  questions: [
    {
      id: 1,
      text: '새로운 기술이나 앱이 나오면?',
      options: [
        { id: 'a', text: '꼭 필요할 때만 배운다', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '일단 써보고 적응한다', score: { genX: 0, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '바로 다운받아 사용한다', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '가르쳐줄 필요 없이 직관적으로', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 2,
      text: '소통 방식으로 선호하는 것은?',
      options: [
        { id: 'a', text: '전화 통화가 확실하다', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '카톡이나 문자', score: { genX: 1, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: 'DM이나 오픈채팅', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '음성메시지나 영상통화', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 3,
      text: '여가 시간에 주로 하는 것은?',
      options: [
        { id: 'a', text: 'TV나 신문 보기', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '유튜브, 넷플릭스', score: { genX: 1, millennial: 3, genZ: 2, alpha: 0 } },
        { id: 'c', text: '틱톡, 인스타 릴스', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '메타버스, VR 게임', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 4,
      text: '직장/학교에 대한 생각은?',
      options: [
        { id: 'a', text: '한 곳에서 오래 다니는 게 좋다', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '워라밸이 중요하다', score: { genX: 0, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '이직/전학은 자연스러운 것', score: { genX: 0, millennial: 1, genZ: 3, alpha: 0 } },
        { id: 'd', text: '유튜버/인플루언서가 되고 싶다', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 5,
      text: '음악을 듣는 방법은?',
      options: [
        { id: 'a', text: 'CD나 라디오', score: { genX: 3, millennial: 0, genZ: 0, alpha: 0 } },
        { id: 'b', text: '멜론, 스포티파이', score: { genX: 1, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '유튜브 뮤직', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '틱톡에서 듣고 찾아본다', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 6,
      text: '돈에 대한 생각은?',
      options: [
        { id: 'a', text: '저축이 최고다', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '투자와 저축 병행', score: { genX: 1, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '경험에 투자한다', score: { genX: 0, millennial: 1, genZ: 3, alpha: 0 } },
        { id: 'd', text: '용돈/코인으로 시작', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 7,
      text: 'SNS 사용 패턴은?',
      options: [
        { id: 'a', text: '페이스북 가끔', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '인스타그램 메인', score: { genX: 0, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '틱톡, 트위터', score: { genX: 0, millennial: 0, genZ: 3, alpha: 1 } },
        { id: 'd', text: '로블록스, 제페토', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 8,
      text: '새로운 신조어에 대해?',
      options: [
        { id: 'a', text: '무슨 말인지 모르겠다', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '들으면 이해는 된다', score: { genX: 1, millennial: 3, genZ: 0, alpha: 0 } },
        { id: 'c', text: '자연스럽게 사용한다', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '내가 만들기도 한다', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 9,
      text: '결혼에 대한 생각은?',
      options: [
        { id: 'a', text: '당연히 해야지', score: { genX: 3, millennial: 0, genZ: 0, alpha: 0 } },
        { id: 'b', text: '하면 좋고 안 해도 괜찮다', score: { genX: 1, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '굳이? 아직 모르겠다', score: { genX: 0, millennial: 1, genZ: 3, alpha: 0 } },
        { id: 'd', text: '결혼이 뭐지?', score: { genX: 0, millennial: 0, genZ: 0, alpha: 3 } },
      ],
    },
    {
      id: 10,
      text: '쇼핑 방식은?',
      options: [
        { id: 'a', text: '직접 매장에서', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '온라인 쇼핑몰', score: { genX: 1, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '인플루언서 추천템', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '라이브 커머스', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 11,
      text: '정보를 얻는 경로는?',
      options: [
        { id: 'a', text: '뉴스, 신문', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '네이버, 포털', score: { genX: 1, millennial: 3, genZ: 0, alpha: 0 } },
        { id: 'c', text: '유튜브, SNS', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: 'AI 챗봇', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
    {
      id: 12,
      text: '가장 중요하게 생각하는 가치는?',
      options: [
        { id: 'a', text: '안정과 성실', score: { genX: 3, millennial: 1, genZ: 0, alpha: 0 } },
        { id: 'b', text: '균형과 행복', score: { genX: 1, millennial: 3, genZ: 1, alpha: 0 } },
        { id: 'c', text: '자유와 개성', score: { genX: 0, millennial: 1, genZ: 3, alpha: 1 } },
        { id: 'd', text: '재미와 경험', score: { genX: 0, millennial: 0, genZ: 1, alpha: 3 } },
      ],
    },
  ],
  results: {
    genX: {
      id: 'genX',
      title: 'X세대 마인드',
      description: '당신은 전통적인 가치와 안정을 중시하는 X세대 마인드입니다! 검증된 것을 선호하고, 변화보다는 안정을 추구합니다.',
      traits: ['안정 추구', '전통 중시', '검증된 것 선호', '성실함'],
      emoji: '📺',
      color: '#6B5B95',
    },
    millennial: {
      id: 'millennial',
      title: '밀레니얼 마인드',
      description: '당신은 워라밸을 중시하고 디지털에 익숙한 밀레니얼 마인드입니다! 새로운 것에 열려있으면서도 균형을 추구합니다.',
      traits: ['워라밸 중시', '디지털 적응', '경험 중시', '유연함'],
      emoji: '💻',
      color: '#88B04B',
    },
    genZ: {
      id: 'genZ',
      title: 'Z세대 마인드',
      description: '당신은 디지털 네이티브이자 트렌드세터인 Z세대 마인드입니다! 개성을 중시하고 새로운 것에 빠르게 적응합니다.',
      traits: ['트렌드 민감', '개성 중시', '빠른 적응', 'SNS 활발'],
      emoji: '📱',
      color: '#92A8D1',
    },
    alpha: {
      id: 'alpha',
      title: '알파세대 마인드',
      description: '당신은 메타버스와 AI가 익숙한 알파세대 마인드입니다! 디지털 환경이 일상이고, 새로운 기술에 직관적으로 적응합니다.',
      traits: ['AI 친화적', '메타버스 적응', '직관적', '미래지향'],
      emoji: '🤖',
      color: '#FF6F61',
    },
  },
};
