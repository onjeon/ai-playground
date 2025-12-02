// vacation-plan 테스트 데이터
export const vacationplanTest = {
  id: 'vacation-plan',
  title: '휴가 계획 테스트',
  description: '휴가를 어떻게 계획하고 보내나요? 여행 스타일로 알아보는 성격!',
  questions: [
    {
      id: 1,
      text: '휴가 계획은 언제부터 세우나요?',
      options: [
        { text: '몇 달 전부터 꼼꼼하게', type: 'planner' },
        { text: '1-2주 전에 대충', type: 'flexible' },
        { text: '당일 또는 전날에 결정', type: 'spontaneous' },
        { text: '계획? 그냥 쉬면 되지', type: 'restful' }
      ]
    },
    {
      id: 2,
      text: '여행지 선택 기준은?',
      options: [
        { text: '리서치 후 최적의 장소', type: 'planner' },
        { text: '가고 싶었던 곳 중에서', type: 'flexible' },
        { text: '그때그때 땡기는 곳', type: 'spontaneous' },
        { text: '집이 최고, 여행 별로', type: 'restful' }
      ]
    },
    {
      id: 3,
      text: '숙소 예약 스타일은?',
      options: [
        { text: '리뷰 다 읽고 최고의 숙소 예약', type: 'planner' },
        { text: '적당한 곳으로 미리 예약', type: 'flexible' },
        { text: '가서 찾거나 당일 예약', type: 'spontaneous' },
        { text: '우리 집이 최고의 숙소', type: 'restful' }
      ]
    },
    {
      id: 4,
      text: '여행 일정은?',
      options: [
        { text: '시간 단위로 계획표 작성', type: 'planner' },
        { text: '하루 1-2개 핵심만 정함', type: 'flexible' },
        { text: '일정 없이 발 닿는 대로', type: 'spontaneous' },
        { text: '일정이라니, 그냥 쉬는 게 휴가', type: 'restful' }
      ]
    },
    {
      id: 5,
      text: '휴가 중 아침에 일어나면?',
      options: [
        { text: '계획대로 일찍 일어나 움직임', type: 'planner' },
        { text: '적당히 일어나서 준비', type: 'flexible' },
        { text: '눈 떠질 때까지 잠', type: 'spontaneous' },
        { text: '휴가니까 실컷 늦잠', type: 'restful' }
      ]
    },
    {
      id: 6,
      text: '여행 짐 싸기는?',
      options: [
        { text: '체크리스트로 완벽하게', type: 'planner' },
        { text: '필요한 것 위주로 적당히', type: 'flexible' },
        { text: '급하게 대충 챙김', type: 'spontaneous' },
        { text: '집에 있으니까 짐 쌀 일 없음', type: 'restful' }
      ]
    },
    {
      id: 7,
      text: '현지에서 예상치 못한 상황이 생기면?',
      options: [
        { text: '플랜 B, C가 준비되어 있음', type: 'planner' },
        { text: '유연하게 대처함', type: 'flexible' },
        { text: '오히려 재밌음, 모험이지', type: 'spontaneous' },
        { text: '그래서 집이 좋은 거임', type: 'restful' }
      ]
    },
    {
      id: 8,
      text: '여행 중 맛집은?',
      options: [
        { text: '미리 리스트업 해둔 곳으로', type: 'planner' },
        { text: '유명한 곳 몇 개 + 현지에서 발견', type: 'flexible' },
        { text: '그때 보이는 곳으로', type: 'spontaneous' },
        { text: '배달 시켜 먹으면 되지', type: 'restful' }
      ]
    },
    {
      id: 9,
      text: '휴가 후 느끼는 감정은?',
      options: [
        { text: '계획대로 잘 마쳤다는 뿌듯함', type: 'planner' },
        { text: '잘 쉬었다는 만족감', type: 'flexible' },
        { text: '아쉬움, 더 놀고 싶다', type: 'spontaneous' },
        { text: '역시 집이 최고였다', type: 'restful' }
      ]
    },
    {
      id: 10,
      text: '이상적인 휴가란?',
      options: [
        { text: '알차게 보낸 시간', type: 'planner' },
        { text: '적당히 놀고 적당히 쉬는 것', type: 'flexible' },
        { text: '예측 불가한 모험', type: 'spontaneous' },
        { text: '아무것도 안 하는 것', type: 'restful' }
      ]
    }
  ],
  results: {
    planner: {
      type: '완벽주의 플래너',
      title: '📋 완벽주의 플래너',
      description: '휴가도 계획적으로! 꼼꼼한 준비로 알찬 휴가를 보내는 타입입니다.',
      traits: [
        '계획적이고 체계적',
        '꼼꼼하고 신중함',
        '효율을 중시함',
        '준비성이 철저함'
      ],
      advice: '계획도 좋지만, 가끔은 계획 없이 흘러가는 대로 즐겨보세요. 뜻밖의 재미가 있을 거예요!'
    },
    flexible: {
      type: '균형 잡힌 여행자',
      title: '⚖️ 균형 잡힌 여행자',
      description: '적당히 계획, 적당히 자유롭게! 밸런스 있는 휴가를 즐기는 타입입니다.',
      traits: [
        '균형 감각이 좋다',
        '적응력이 뛰어남',
        '유연한 사고',
        '스트레스 관리를 잘함'
      ],
      advice: '균형 잡힌 여행 스타일이에요! 가끔은 한쪽으로 확 기울여보는 것도 새로운 경험이 될 수 있어요.'
    },
    spontaneous: {
      type: '자유로운 모험가',
      title: '🎒 자유로운 모험가',
      description: '계획은 없다! 발 닿는 대로 떠나는 자유로운 영혼의 타입입니다.',
      traits: [
        '자유로운 영혼',
        '모험심이 강함',
        '적응력이 좋다',
        '순간을 즐기는 편'
      ],
      advice: '자유로운 여행도 좋지만, 가끔은 미리 예약해야 할 것들도 있어요. 최소한의 준비는 해두세요!'
    },
    restful: {
      type: '집순이/집돌이',
      title: '🏠 집순이/집돌이',
      description: '집이 최고! 어디 가느니 집에서 푹 쉬는 게 진정한 휴가인 타입입니다.',
      traits: [
        '휴식을 중요시함',
        '내향적인 면이 있다',
        '편안함을 추구',
        '에너지 충전에 집중'
      ],
      advice: '집에서 쉬는 것도 좋지만, 가끔은 새로운 환경에서 다른 에너지를 받아보세요!'
    }
  }
};
