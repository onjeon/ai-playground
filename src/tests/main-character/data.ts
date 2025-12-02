// main-character 테스트 데이터
export const maincharacterTest = {
  id: 'main-character',
  title: '주인공 증후군 레벨',
  description: '당신은 자신의 인생에서 얼마나 주인공인가요? 당신의 주인공 에너지를 측정해보세요!',
  questions: [
    {
      id: 1,
      text: '카페에서 창가 자리에 앉았을 때 당신은?',
      options: [
        { text: '영화의 한 장면 같은 느낌을 즐김', type: 'high' },
        { text: '그냥 빛 좋으니까 앉은 것', type: 'low' },
        { text: '혹시 지나가는 사람이 날 볼까 의식됨', type: 'medium' },
        { text: '사진 찍기 좋은 자리라 선택', type: 'moderate' }
      ]
    },
    {
      id: 2,
      text: '길을 걸을 때 이어폰으로 음악을 들으면?',
      options: [
        { text: '내 인생 OST 흘러나오는 느낌', type: 'high' },
        { text: '그냥 심심해서 듣는 것', type: 'low' },
        { text: '음악에 맞춰 걸음걸이 리듬 탐', type: 'medium' },
        { text: '기분에 따라 플레이리스트가 다름', type: 'moderate' }
      ]
    },
    {
      id: 3,
      text: '모임에서 내 이야기에 반응이 좋으면?',
      options: [
        { text: '"역시 나야" 하며 더 흥이 남', type: 'high' },
        { text: '다행이다 싶고 말음', type: 'low' },
        { text: '기분 좋지만 너무 티 안 내려 함', type: 'medium' },
        { text: '분위기가 좋아져서 만족', type: 'moderate' }
      ]
    },
    {
      id: 4,
      text: '일이 잘 안 풀릴 때 당신의 생각은?',
      options: [
        { text: '"시련은 성장의 과정이지"', type: 'high' },
        { text: '"운이 안 좋았네"', type: 'low' },
        { text: '"왜 나한테만 이런 일이"', type: 'medium' },
        { text: '분석하고 다음에 더 잘하자', type: 'moderate' }
      ]
    },
    {
      id: 5,
      text: '오랜만에 옷을 잘 입고 나갔는데?',
      options: [
        { text: '오늘 나 좀 멋있다, 다들 봤겠지?', type: 'high' },
        { text: '그냥 기분 좋을 뿐', type: 'low' },
        { text: '아는 사람 마주칠까 기대됨', type: 'medium' },
        { text: '거울 보며 셀프 힐링', type: 'moderate' }
      ]
    },
    {
      id: 6,
      text: 'SNS에 사진을 올릴 때?',
      options: [
        { text: '멋진 나를 세상에 공유하는 시간', type: 'high' },
        { text: '가끔 기록용으로만 올림', type: 'low' },
        { text: '반응이 신경 쓰여서 고민하다 올림', type: 'medium' },
        { text: '괜찮은 사진이면 올리는 편', type: 'moderate' }
      ]
    },
    {
      id: 7,
      text: '갑자기 비가 오기 시작했을 때?',
      options: [
        { text: '드라마 속 감성 씬 같아서 좋음', type: 'high' },
        { text: '짜증... 우산이 없는데', type: 'low' },
        { text: '비 맞으며 걷는 것도 나쁘지 않아', type: 'medium' },
        { text: '빨리 비 피할 곳 찾아야지', type: 'moderate' }
      ]
    },
    {
      id: 8,
      text: '과거의 힘들었던 일을 떠올리면?',
      options: [
        { text: '그 시련이 지금의 나를 만들었어', type: 'high' },
        { text: '그냥 안 좋은 기억일 뿐', type: 'low' },
        { text: '성장 서사로 포장하고 싶어짐', type: 'medium' },
        { text: '그때 배운 게 있긴 하지', type: 'moderate' }
      ]
    },
    {
      id: 9,
      text: '내 인생을 영화로 만든다면?',
      options: [
        { text: '당연히 대작! 감독 누가 하지?', type: 'high' },
        { text: '누가 내 인생에 관심 있겠어', type: 'low' },
        { text: '숨겨진 명작 정도?', type: 'medium' },
        { text: '특정 시기만 재밌을 듯', type: 'moderate' }
      ]
    },
    {
      id: 10,
      text: '좋아하는 노래 가사가 나랑 딱 맞으면?',
      options: [
        { text: '"이 노래 나 위해 쓴 거 아냐?"', type: 'high' },
        { text: '"공감 가네"하고 끝', type: 'low' },
        { text: '스토리에 내 감정 대입함', type: 'medium' },
        { text: '플레이리스트에 바로 추가', type: 'moderate' }
      ]
    }
  ],
  results: {
    high: {
      type: '주인공 그 자체',
      title: '👑 주인공 그 자체 (레벨 MAX)',
      description: '당신의 인생은 대서사시! 스포트라이트는 당신을 위해 존재합니다!',
      traits: [
        '일상을 특별하게 느끼는 능력',
        '자기 서사에 대한 강한 확신',
        '어려움도 성장 스토리로 변환',
        '높은 자존감과 긍정적 자아상'
      ],
      energyLevel: '스포트라이트 풀파워',
      advice: '당신의 주인공 에너지는 최고예요! 하지만 가끔은 조연들의 이야기도 들어보세요. 모두가 각자의 영화에서 주인공이니까요.'
    },
    low: {
      type: '겸손한 관찰자',
      title: '📷 겸손한 관찰자 (레벨 15%)',
      description: '스포트라이트보다 무대 뒤가 편한 당신. 조용히 세상을 관찰합니다.',
      traits: [
        '자기 과시를 불편해함',
        '현실적이고 담담한 태도',
        '주목받는 것을 어색해함',
        '타인의 이야기에 더 관심'
      ],
      energyLevel: '은은한 조명',
      advice: '겸손함은 미덕이지만, 당신도 충분히 특별한 사람이에요. 가끔은 자신이 주인공인 순간을 즐겨보는 건 어떨까요?'
    },
    medium: {
      type: '숨은 주인공',
      title: '✨ 숨은 주인공 (레벨 60%)',
      description: '겉으로는 티 안 내지만, 속으로는 나름의 드라마를 쓰고 있어요!',
      traits: [
        '내면에서 자기 서사를 즐김',
        '주인공 감성은 있지만 표현은 조심스러움',
        '특별해지고 싶은 욕구가 있음',
        '상황에 따라 주인공 모드 ON/OFF'
      ],
      energyLevel: '간헐적 스포트라이트',
      advice: '당신 안에 있는 주인공을 더 드러내도 괜찮아요! 숨기지 말고 당당하게 빛나보세요.'
    },
    moderate: {
      type: '밸런스형 캐릭터',
      title: '⚖️ 밸런스형 캐릭터 (레벨 45%)',
      description: '주인공도 조연도 자연스럽게! 상황에 맞게 역할을 바꾸는 타입.',
      traits: [
        '상황에 따른 유연한 태도',
        '적당한 자기 표현',
        '주목받는 것도 OK, 안 받는 것도 OK',
        '균형 잡힌 자아상'
      ],
      energyLevel: '조절 가능한 조명',
      advice: '가장 건강한 밸런스를 가지고 있어요! 필요할 때 주인공이 되고, 필요할 때 양보하는 당신이 멋져요.'
    }
  }
};
