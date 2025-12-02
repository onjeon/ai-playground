// work-stress 테스트 데이터
export const workstressTest = {
  id: 'work-stress',
  title: '업무 스트레스 해소 테스트',
  description: '스트레스가 쌓였을 때 어떻게 해소하나요? 당신만의 스트레스 해소 스타일은?',
  questions: [
    {
      id: 1,
      text: '힘든 업무 후 퇴근하면 가장 먼저?',
      options: [
        { text: '운동하러 간다', type: 'active' },
        { text: '맛있는 거 먹으러', type: 'indulgent' },
        { text: '집에서 쉰다', type: 'rest' },
        { text: '친구 만나서 수다', type: 'social' }
      ]
    },
    {
      id: 2,
      text: '스트레스 받을 때 주로 먹는 것은?',
      options: [
        { text: '오히려 안 먹거나 건강식', type: 'active' },
        { text: '매운 음식, 단 음식 폭식', type: 'indulgent' },
        { text: '평소대로, 먹는 걸로 풀지 않음', type: 'rest' },
        { text: '친구랑 술 한잔', type: 'social' }
      ]
    },
    {
      id: 3,
      text: '주말에 스트레스 해소 방법은?',
      options: [
        { text: '등산, 운동 등 활동적으로', type: 'active' },
        { text: '쇼핑이나 맛집 투어', type: 'indulgent' },
        { text: '집에서 넷플릭스와 함께', type: 'rest' },
        { text: '친구들과 모임', type: 'social' }
      ]
    },
    {
      id: 4,
      text: '스트레스 상황에서 드는 생각은?',
      options: [
        { text: '움직여서 에너지 발산해야지', type: 'active' },
        { text: '오늘은 나를 위해 투자!', type: 'indulgent' },
        { text: '일단 쉬어야 해', type: 'rest' },
        { text: '누구 만나서 얘기해야지', type: 'social' }
      ]
    },
    {
      id: 5,
      text: '스트레스 해소에 드는 비용은?',
      options: [
        { text: '헬스장, 운동용품 비용 정도', type: 'active' },
        { text: '쇼핑, 외식에 꽤 씀', type: 'indulgent' },
        { text: '거의 안 쓴다, 집이 최고', type: 'rest' },
        { text: '친구들과 술값, 밥값', type: 'social' }
      ]
    },
    {
      id: 6,
      text: '스트레스로 잠이 안 올 때?',
      options: [
        { text: '일단 스트레칭이라도', type: 'active' },
        { text: '야식 시켜 먹음', type: 'indulgent' },
        { text: '누워서 영상 보다 잠듦', type: 'rest' },
        { text: '친구한테 카톡이라도', type: 'social' }
      ]
    },
    {
      id: 7,
      text: '상사에게 혼났을 때 해소법은?',
      options: [
        { text: '퇴근 후 러닝', type: 'active' },
        { text: '치킨에 맥주', type: 'indulgent' },
        { text: '이불 속에서 멍', type: 'rest' },
        { text: '친구한테 하소연', type: 'social' }
      ]
    },
    {
      id: 8,
      text: '스트레스 해소 후 느낌은?',
      options: [
        { text: '땀 흘리고 개운해!', type: 'active' },
        { text: '맛있었다! 내일 후회할지도...', type: 'indulgent' },
        { text: '푹 쉬었더니 좀 낫네', type: 'rest' },
        { text: '털어놓으니 시원하다', type: 'social' }
      ]
    },
    {
      id: 9,
      text: '연차 쓸 때 주로 하는 것은?',
      options: [
        { text: '여행이나 액티비티', type: 'active' },
        { text: '평소 못 가던 맛집, 카페', type: 'indulgent' },
        { text: '집에서 푹 쉼', type: 'rest' },
        { text: '친구 만나서 놀기', type: 'social' }
      ]
    },
    {
      id: 10,
      text: '이상적인 스트레스 해소란?',
      options: [
        { text: '몸을 움직여 에너지 전환', type: 'active' },
        { text: '나를 위한 보상과 즐거움', type: 'indulgent' },
        { text: '고요한 휴식과 재충전', type: 'rest' },
        { text: '사람들과 함께 나누기', type: 'social' }
      ]
    }
  ],
  results: {
    active: {
      type: '활동적 해소러',
      title: '🏃 활동적 해소러',
      description: '움직여서 푼다! 운동과 활동으로 스트레스를 에너지로 전환하는 타입입니다.',
      traits: [
        '활동적인 성격',
        '에너지 발산형',
        '건강한 해소 방법',
        '자기 관리를 잘함'
      ],
      advice: '건강한 해소 방법이에요! 하지만 가끔은 가만히 쉬는 것도 필요해요.'
    },
    indulgent: {
      type: '보상형 해소러',
      title: '🍰 보상형 해소러',
      description: '나를 위한 선물! 맛있는 것, 좋은 것으로 스스로에게 보상하는 타입입니다.',
      traits: [
        '자기 보상을 중시',
        '즐거움을 추구',
        '순간의 위안을 찾음',
        '감정에 솔직함'
      ],
      advice: '때때로 자기 보상은 필요해요! 하지만 과하면 다른 스트레스가 될 수 있으니 적당히 즐기세요.'
    },
    rest: {
      type: '휴식형 해소러',
      title: '🛋️ 휴식형 해소러',
      description: '쉬는 게 최고! 고요한 휴식으로 에너지를 재충전하는 타입입니다.',
      traits: [
        '내향적인 성향',
        '조용한 환경 선호',
        '자기만의 시간 필요',
        '심플한 것을 좋아함'
      ],
      advice: '휴식은 중요해요! 하지만 가끔은 밖으로 나가 기분 전환하는 것도 좋아요.'
    },
    social: {
      type: '소통형 해소러',
      title: '💬 소통형 해소러',
      description: '말하면 풀린다! 사람들과 소통하며 스트레스를 나누는 타입입니다.',
      traits: [
        '사교적인 성격',
        '공유를 통해 해소',
        '공감 능력이 좋음',
        '관계를 중시함'
      ],
      advice: '함께 나누는 건 좋은 해소법이에요! 하지만 때로는 혼자만의 시간도 필요해요.'
    }
  }
};
