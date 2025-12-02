// noise-sensitivity 테스트 데이터
export const noisesensitivityTest = {
  id: 'noise-sensitivity',
  title: '소음 민감도 테스트',
  description: '소리에 얼마나 민감한가요? 당신의 청각 예민함 레벨을 알아봅니다!',
  questions: [
    {
      id: 1,
      text: '카페에서 공부나 일을 할 때?',
      options: [
        { text: '시끄러워서 집중 불가, 조용한 곳만', type: 'high' },
        { text: '약간 신경 쓰이지만 적응 가능', type: 'medium' },
        { text: '오히려 백색소음 같아서 좋음', type: 'low' },
        { text: '시끌벅적해야 에너지가 남', type: 'lover' }
      ]
    },
    {
      id: 2,
      text: '옆집이나 윗집 소음이 들릴 때?',
      options: [
        { text: '미칠 것 같음, 잠도 못 잠', type: 'high' },
        { text: '신경 쓰이지만 어쩔 수 없지', type: 'medium' },
        { text: '크지 않으면 별로 신경 안 씀', type: 'low' },
        { text: '사람 사는 소리지 뭐', type: 'lover' }
      ]
    },
    {
      id: 3,
      text: '이어폰/헤드폰 사용 빈도는?',
      options: [
        { text: '거의 항상 착용, 소음 차단용', type: 'high' },
        { text: '음악 들을 때만', type: 'medium' },
        { text: '잘 안 씀, 주변 소리도 들어야지', type: 'low' },
        { text: '음악은 스피커로 크게 틀어야 제맛', type: 'lover' }
      ]
    },
    {
      id: 4,
      text: '시계 초침 소리에 대해?',
      options: [
        { text: '못 참음, 디지털 시계만 사용', type: 'high' },
        { text: '조용할 때 신경 쓰이긴 함', type: 'medium' },
        { text: '있는지도 몰랐음', type: 'low' },
        { text: '오히려 차분해지는 소리', type: 'lover' }
      ]
    },
    {
      id: 5,
      text: '누군가 음식 먹는 소리(쩝쩝)가 들리면?',
      options: [
        { text: '소름 끼침, 견딜 수 없음', type: 'high' },
        { text: '불편하지만 참을 만함', type: 'medium' },
        { text: '별로 신경 안 씀', type: 'low' },
        { text: '맛있게 먹나 보다 함', type: 'lover' }
      ]
    },
    {
      id: 6,
      text: '잠잘 때 환경은?',
      options: [
        { text: '완전 무음이어야 함, 귀마개 필수', type: 'high' },
        { text: '조용하면 좋지만 적응 가능', type: 'medium' },
        { text: '어느 정도 소리 있어도 잘 잠', type: 'low' },
        { text: 'TV나 음악 틀어놓고 자야 편함', type: 'lover' }
      ]
    },
    {
      id: 7,
      text: '대중교통에서 다른 사람 통화 소리는?',
      options: [
        { text: '엄청 신경 쓰임, 짜증남', type: 'high' },
        { text: '좀 거슬리긴 함', type: 'medium' },
        { text: '그냥 배경 소음', type: 'low' },
        { text: '내용이 재미있으면 몰래 들음', type: 'lover' }
      ]
    },
    {
      id: 8,
      text: '콘서트나 클럽 같은 시끄러운 장소는?',
      options: [
        { text: '못 감, 청각이 고통받음', type: 'high' },
        { text: '가끔은 괜찮지만 오래 못 버팀', type: 'medium' },
        { text: '즐길 수 있음', type: 'low' },
        { text: '최고! 에너지 충전됨', type: 'lover' }
      ]
    },
    {
      id: 9,
      text: '공사장 소음이 들릴 때?',
      options: [
        { text: '집에 못 있음, 피난 감', type: 'high' },
        { text: '짜증나지만 어쩔 수 없이 참음', type: 'medium' },
        { text: '일하다 보면 잊어버림', type: 'low' },
        { text: '뭔가 되어가는 소리라 나쁘지 않음', type: 'lover' }
      ]
    },
    {
      id: 10,
      text: '조용한 환경 vs 시끄러운 환경?',
      options: [
        { text: '무조건 조용한 환경', type: 'high' },
        { text: '상황에 따라 다름', type: 'medium' },
        { text: '크게 상관없음', type: 'low' },
        { text: '활기찬 환경이 좋음', type: 'lover' }
      ]
    }
  ],
  results: {
    high: {
      type: '청각 예민러',
      title: '🔇 청각 예민러',
      description: '소리에 매우 민감한 타입! 조용한 환경에서 최고의 컨디션을 발휘합니다.',
      traits: [
        '감각이 예민하다',
        '집중력이 높을 때가 많다',
        '세심하고 섬세한 성격',
        '환경에 영향을 많이 받음'
      ],
      advice: '노이즈 캔슬링 이어폰은 좋은 투자예요! 하지만 가끔은 작은 소리에도 적응해보세요.'
    },
    medium: {
      type: '적응형 청자',
      title: '👂 적응형 청자',
      description: '상황에 따라 조절 가능! 어느 정도의 소음도 적응하며 균형을 유지하는 타입입니다.',
      traits: [
        '적응력이 좋다',
        '유연한 성격',
        '상황 판단을 잘한다',
        '스트레스 관리가 괜찮음'
      ],
      advice: '균형 잡힌 감각을 가지고 있어요. 필요에 따라 환경을 조절하면 더 좋아요!'
    },
    low: {
      type: '둔감력 보유자',
      title: '😌 둔감력 보유자',
      description: '소음? 뭐가 문제지? 어떤 환경에서도 편안함을 유지하는 여유로운 타입입니다.',
      traits: [
        '스트레스에 강하다',
        '적응력이 뛰어남',
        '마음이 여유로움',
        '어디서든 집중 가능'
      ],
      advice: '둔감력은 축복이에요! 다만 다른 사람들은 민감할 수 있으니 배려해주세요.'
    },
    lover: {
      type: '소음 애호가',
      title: '🔊 소음 애호가',
      description: '활기찬 소리가 에너지원! 시끌벅적한 환경에서 오히려 힘을 얻는 타입입니다.',
      traits: [
        '에너지가 넘친다',
        '외향적인 성향',
        '활동적인 것을 좋아함',
        '혼자 있으면 심심함'
      ],
      advice: '활기찬 건 좋지만, 조용한 시간도 때로는 필요해요. 청력도 소중히!'
    }
  }
};
