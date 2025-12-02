// energy-source 테스트 데이터
export const energySource = {
  id: 'energy-source',
  title: '에너지 충전 테스트',
  description: '당신은 어디서 에너지를 얻나요? 진짜 충전 방법을 찾아보세요!',
  questions: [
    {
      id: 1,
      text: '지친 하루 후 가장 하고 싶은 것은?',
      options: [
        { text: '친구들과 수다/모임', type: 'social' },
        { text: '혼자 조용히 쉬기', type: 'alone' },
        { text: '운동/산책', type: 'physical' },
        { text: '취미 활동/창작', type: 'creative' }
      ]
    },
    {
      id: 2,
      text: '에너지가 가장 충전되는 순간은?',
      options: [
        { text: '사람들과 함께할 때', type: 'social' },
        { text: '나만의 시간을 가질 때', type: 'alone' },
        { text: '몸을 움직일 때', type: 'physical' },
        { text: '뭔가를 만들거나 배울 때', type: 'creative' }
      ]
    },
    {
      id: 3,
      text: '스트레스 해소 방법은?',
      options: [
        { text: '친구에게 전화/만남', type: 'social' },
        { text: '혼자 영화/음악 감상', type: 'alone' },
        { text: '운동/스포츠', type: 'physical' },
        { text: '그림/글쓰기/만들기', type: 'creative' }
      ]
    },
    {
      id: 4,
      text: '이상적인 휴가는?',
      options: [
        { text: '친구들과 함께 여행', type: 'social' },
        { text: '혼자 조용한 여행', type: 'alone' },
        { text: '액티비티 가득한 여행', type: 'physical' },
        { text: '새로운 경험/배움 여행', type: 'creative' }
      ]
    },
    {
      id: 5,
      text: '번아웃이 왔을 때?',
      options: [
        { text: '사람들과 어울리며 기분 전환', type: 'social' },
        { text: '모든 연락 끊고 혼자 시간', type: 'alone' },
        { text: '몸을 움직여서 리셋', type: 'physical' },
        { text: '새로운 취미/프로젝트 시작', type: 'creative' }
      ]
    },
    {
      id: 6,
      text: '주말에 가장 하고 싶은 것은?',
      options: [
        { text: '약속 잡고 사람 만나기', type: 'social' },
        { text: '집에서 푹 쉬기', type: 'alone' },
        { text: '등산/수영/헬스', type: 'physical' },
        { text: '밀린 취미 활동', type: 'creative' }
      ]
    },
    {
      id: 7,
      text: '에너지가 없을 때 증상은?',
      options: [
        { text: '사람들이 보고 싶어짐', type: 'social' },
        { text: '혼자 있고 싶어짐', type: 'alone' },
        { text: '몸이 찌뿌둥해짐', type: 'physical' },
        { text: '무기력하고 지루해짐', type: 'creative' }
      ]
    },
    {
      id: 8,
      text: '가장 활력을 주는 것은?',
      options: [
        { text: '좋은 사람들과의 시간', type: 'social' },
        { text: '고요한 나만의 시간', type: 'alone' },
        { text: '땀 흘리는 시간', type: 'physical' },
        { text: '몰입하는 시간', type: 'creative' }
      ]
    },
    {
      id: 9,
      text: '에너지 충전 후 느낌은?',
      options: [
        { text: '행복하고 연결된 느낌', type: 'social' },
        { text: '평화롭고 정돈된 느낌', type: 'alone' },
        { text: '상쾌하고 활력 있는 느낌', type: 'physical' },
        { text: '뿌듯하고 영감 받은 느낌', type: 'creative' }
      ]
    },
    {
      id: 10,
      text: '에너지에 대한 당신의 생각은?',
      options: [
        { text: '사람에게서 얻는 것', type: 'social' },
        { text: '나 자신에게서 찾는 것', type: 'alone' },
        { text: '몸에서 만들어지는 것', type: 'physical' },
        { text: '열정에서 나오는 것', type: 'creative' }
      ]
    }
  ],
  results: {
    social: {
      type: '사회적 충전형',
      title: '👥 사회적 충전형',
      description: '사람들과 함께할 때 에너지가 충전되는 당신!',
      traits: ['외향적', '사교적', '연결 추구', '공유 좋아함'],
      energySource: '사회적 교류',
      advice: '사람들과의 시간을 확보하세요! 하지만 혼자만의 시간도 가끔 필요해요.'
    },
    alone: {
      type: '고독 충전형',
      title: '🧘 고독 충전형',
      description: '혼자만의 시간에서 에너지를 얻는 당신!',
      traits: ['내향적', '독립적', '내면 지향', '자기 성찰'],
      energySource: '혼자만의 시간',
      advice: '나만의 시간을 소중히 하세요! 그게 당신의 에너지원이에요.'
    },
    physical: {
      type: '신체 충전형',
      title: '🏃 신체 충전형',
      description: '몸을 움직일 때 에너지가 샘솟는 당신!',
      traits: ['활동적', '건강 중시', '에너지 넘침', '실천력'],
      energySource: '신체 활동',
      advice: '규칙적인 운동을 유지하세요! 그게 당신의 활력 비결이에요.'
    },
    creative: {
      type: '창조 충전형',
      title: '🎨 창조 충전형',
      description: '뭔가를 만들거나 배울 때 에너지가 차오르는 당신!',
      traits: ['창의적', '호기심', '몰입형', '성장 지향'],
      energySource: '창작과 배움',
      advice: '취미와 배움의 시간을 확보하세요! 그게 당신을 살아있게 해요.'
    }
  }
};
