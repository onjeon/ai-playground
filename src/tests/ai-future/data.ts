// ai-future 테스트 데이터
export const aifutureTest = {
  id: 'ai-future',
  title: 'AI가 예측한 내 미래',
  description: '당신의 성격과 가치관을 분석해 AI가 10년 후 모습을 예측해드립니다! 미래의 나는 어떤 모습일까요?',
  questions: [
    {
      id: 1,
      text: '주말 아침, 당신의 선택은?',
      options: [
        { text: '자기계발 (독서, 공부, 운동)', type: 'achiever' },
        { text: '취미 활동 (게임, 넷플릭스, 취미)', type: 'balanced' },
        { text: '사람들 만나기 (친구, 모임)', type: 'connector' },
        { text: '푹 자기 (회복, 휴식)', type: 'free' }
      ]
    },
    {
      id: 2,
      text: '돈을 쓸 때 기준은?',
      options: [
        { text: '미래 투자 (저축, 주식, 교육)', type: 'achiever' },
        { text: '균형 있게 (저축도 소비도 적당히)', type: 'balanced' },
        { text: '경험 위주 (여행, 맛집, 문화생활)', type: 'connector' },
        { text: '지금 행복 (사고 싶은 거 삼)', type: 'free' }
      ]
    },
    {
      id: 3,
      text: '목표를 세울 때 스타일은?',
      options: [
        { text: '구체적인 계획과 기한 설정', type: 'achiever' },
        { text: '대략적인 방향만 정함', type: 'balanced' },
        { text: '사람들과 함께하는 목표', type: 'connector' },
        { text: '목표 없이 흘러가는 대로', type: 'free' }
      ]
    },
    {
      id: 4,
      text: '스트레스 해소법은?',
      options: [
        { text: '운동이나 생산적인 활동', type: 'achiever' },
        { text: '취미 활동으로 전환', type: 'balanced' },
        { text: '친구와 수다 떨기', type: 'connector' },
        { text: '아무것도 안 하고 쉬기', type: 'free' }
      ]
    },
    {
      id: 5,
      text: '인생에서 가장 중요한 것은?',
      options: [
        { text: '성공과 성취', type: 'achiever' },
        { text: '안정과 균형', type: 'balanced' },
        { text: '관계와 사랑', type: 'connector' },
        { text: '자유와 행복', type: 'free' }
      ]
    },
    {
      id: 6,
      text: '새로운 것을 배울 때?',
      options: [
        { text: '전문가 수준까지 파고듦', type: 'achiever' },
        { text: '필요한 만큼만 배움', type: 'balanced' },
        { text: '사람들과 함께 배우는 걸 선호', type: 'connector' },
        { text: '흥미로우면 배우고 아니면 그만', type: 'free' }
      ]
    },
    {
      id: 7,
      text: '10년 후 나의 모습으로 이상적인 것은?',
      options: [
        { text: '업계에서 인정받는 전문가', type: 'achiever' },
        { text: '일과 삶의 균형을 갖춘 사람', type: 'balanced' },
        { text: '좋은 사람들에 둘러싸인 행복한 사람', type: 'connector' },
        { text: '하고 싶은 거 하며 사는 자유인', type: 'free' }
      ]
    },
    {
      id: 8,
      text: '결정을 내릴 때 기준은?',
      options: [
        { text: '장기적인 이득과 성장', type: 'achiever' },
        { text: '리스크와 안정성', type: 'balanced' },
        { text: '주변 사람들의 의견', type: 'connector' },
        { text: '그때의 기분과 직감', type: 'free' }
      ]
    },
    {
      id: 9,
      text: '실패했을 때 반응은?',
      options: [
        { text: '분석하고 다시 도전', type: 'achiever' },
        { text: '받아들이고 다음 기회 노림', type: 'balanced' },
        { text: '주변에 위로받고 힘냄', type: 'connector' },
        { text: '그럴 수 있지 하고 넘김', type: 'free' }
      ]
    },
    {
      id: 10,
      text: '현재 삶의 만족도는?',
      options: [
        { text: '더 성장하고 싶음', type: 'achiever' },
        { text: '대체로 만족, 유지하고 싶음', type: 'balanced' },
        { text: '관계가 좋으면 만족', type: 'connector' },
        { text: '지금 행복하면 OK', type: 'free' }
      ]
    }
  ],
  results: {
    achiever: {
      type: '성취형 미래',
      title: '🏆 AI 예측: 업계 리더',
      description: 'AI 분석 결과, 10년 후 당신은 자신의 분야에서 인정받는 전문가/리더가 되어 있을 확률이 높습니다!',
      futureImage: '업계에서 인정받는 전문가, 또는 자신만의 사업을 운영하는 CEO',
      prediction: {
        career: '전문가 또는 경영자 포지션',
        lifestyle: '바쁘지만 성취감 있는 삶',
        wealth: '상위 20% 이상의 경제적 여유',
        relationship: '같은 목표를 공유하는 파트너'
      },
      probability: '78%',
      advice: '목표를 향한 열정은 훌륭하지만, 가끔은 쉬어가는 것도 성공의 일부예요!',
      warning: '번아웃 주의! 건강도 챙기세요.'
    },
    balanced: {
      type: '균형형 미래',
      title: '⚖️ AI 예측: 워라밸 마스터',
      description: 'AI 분석 결과, 10년 후 당신은 일과 삶의 균형을 갖춘 안정적인 삶을 살고 있을 확률이 높습니다!',
      futureImage: '안정적인 직장과 행복한 가정, 취미도 즐기는 균형 잡힌 삶',
      prediction: {
        career: '안정적인 중견 포지션',
        lifestyle: '여유롭고 균형 잡힌 삶',
        wealth: '안정적인 중산층',
        relationship: '믿음직한 파트너와 함께'
      },
      probability: '82%',
      advice: '균형 감각이 훌륭해요! 가끔은 도전도 해보세요.',
      warning: '안정에 안주하지 않도록 주의!'
    },
    connector: {
      type: '관계형 미래',
      title: '💕 AI 예측: 인맥 부자',
      description: 'AI 분석 결과, 10년 후 당신은 좋은 사람들에 둘러싸여 행복한 삶을 살고 있을 확률이 높습니다!',
      futureImage: '많은 친구와 든든한 가족, 사람들 사이에서 사랑받는 존재',
      prediction: {
        career: '사람을 다루는 분야에서 성공',
        lifestyle: '사람들과 함께하는 풍요로운 삶',
        wealth: '물질보다 관계가 재산',
        relationship: '따뜻한 가정과 넓은 인맥'
      },
      probability: '85%',
      advice: '관계의 힘을 아는 당신! 자신만의 시간도 가끔 가져보세요.',
      warning: '남을 위해 자신을 잃지 않도록!'
    },
    free: {
      type: '자유형 미래',
      title: '🦋 AI 예측: 자유로운 영혼',
      description: 'AI 분석 결과, 10년 후 당신은 틀에 박히지 않은 자유로운 삶을 살고 있을 확률이 높습니다!',
      futureImage: '자유롭게 세계를 여행하거나, 원하는 것을 하며 사는 노마드 또는 예술가',
      prediction: {
        career: '프리랜서, 예술가, 또는 디지털 노마드',
        lifestyle: '자유롭고 독특한 삶',
        wealth: '풍족하진 않지만 필요한 만큼',
        relationship: '자유를 존중하는 파트너'
      },
      probability: '75%',
      advice: '자유로운 영혼 멋져요! 하지만 최소한의 안전망은 만들어두세요.',
      warning: '미래 준비도 조금은 해두세요!'
    }
  }
};
