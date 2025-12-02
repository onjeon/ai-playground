// dream-analysis 테스트 데이터
export const dreamAnalysis = {
  id: 'dream-analysis',
  title: '꿈 유형 분석 테스트',
  description: '당신은 어떤 꿈을 자주 꾸나요? 꿈 패턴으로 보는 당신의 무의식 세계!',
  questions: [
    {
      id: 1,
      text: '가장 자주 꾸는 꿈의 유형은?',
      options: [
        { text: '쫓기거나 도망치는 꿈', type: 'anxiety' },
        { text: '하늘을 날거나 초능력 쓰는 꿈', type: 'freedom' },
        { text: '시험/발표를 망치는 꿈', type: 'pressure' },
        { text: '누군가를 만나는 꿈', type: 'connection' }
      ]
    },
    {
      id: 2,
      text: '꿈에서 자주 나오는 장소는?',
      options: [
        { text: '낯설고 미로 같은 곳', type: 'anxiety' },
        { text: '넓은 하늘이나 바다', type: 'freedom' },
        { text: '학교/직장', type: 'pressure' },
        { text: '집이나 익숙한 곳', type: 'connection' }
      ]
    },
    {
      id: 3,
      text: '꿈에서 자주 느끼는 감정은?',
      options: [
        { text: '불안, 두려움', type: 'anxiety' },
        { text: '자유로움, 해방감', type: 'freedom' },
        { text: '긴장, 압박감', type: 'pressure' },
        { text: '그리움, 따뜻함', type: 'connection' }
      ]
    },
    {
      id: 4,
      text: '꿈에서 자주 하는 행동은?',
      options: [
        { text: '도망가거나 숨기', type: 'anxiety' },
        { text: '날거나 뛰어다니기', type: 'freedom' },
        { text: '뭔가를 열심히 하기', type: 'pressure' },
        { text: '누군가와 대화하기', type: 'connection' }
      ]
    },
    {
      id: 5,
      text: '꿈에서 깨어났을 때 기분은?',
      options: [
        { text: '휴... 꿈이어서 다행', type: 'anxiety' },
        { text: '아쉬워, 더 꾸고 싶었어', type: 'freedom' },
        { text: '피곤해, 꿈에서도 일했네', type: 'pressure' },
        { text: '여운이 남아, 누군가 보고 싶어', type: 'connection' }
      ]
    },
    {
      id: 6,
      text: '악몽을 꿀 때 주로?',
      options: [
        { text: '뭔가에 쫓기거나 위험에 처함', type: 'anxiety' },
        { text: '갇히거나 움직일 수 없음', type: 'freedom' },
        { text: '실패하거나 창피당함', type: 'pressure' },
        { text: '사랑하는 사람을 잃음', type: 'connection' }
      ]
    },
    {
      id: 7,
      text: '좋은 꿈을 꿀 때 주로?',
      options: [
        { text: '문제가 해결되는 꿈', type: 'anxiety' },
        { text: '자유롭게 모험하는 꿈', type: 'freedom' },
        { text: '성공하거나 인정받는 꿈', type: 'pressure' },
        { text: '좋아하는 사람과 함께하는 꿈', type: 'connection' }
      ]
    },
    {
      id: 8,
      text: '꿈을 얼마나 기억해요?',
      options: [
        { text: '선명하게, 특히 무서운 꿈', type: 'anxiety' },
        { text: '신기한 꿈은 잘 기억함', type: 'freedom' },
        { text: '현실적인 꿈이 기억에 남음', type: 'pressure' },
        { text: '감정이 강했던 꿈 기억', type: 'connection' }
      ]
    },
    {
      id: 9,
      text: '꿈에 대한 당신의 생각은?',
      options: [
        { text: '불안의 반영 같아', type: 'anxiety' },
        { text: '현실에서 못하는 경험', type: 'freedom' },
        { text: '걱정이 꿈으로 나오는 것 같아', type: 'pressure' },
        { text: '그리운 사람을 만나는 시간', type: 'connection' }
      ]
    },
    {
      id: 10,
      text: '요즘 반복되는 꿈의 주제는?',
      options: [
        { text: '뭔가 위협적인 것', type: 'anxiety' },
        { text: '자유와 탈출', type: 'freedom' },
        { text: '할 일과 책임', type: 'pressure' },
        { text: '관계와 사람들', type: 'connection' }
      ]
    }
  ],
  results: {
    anxiety: {
      type: '불안 표출형 꿈',
      title: '😰 불안 표출형 꿈',
      description: '당신의 꿈은 숨겨진 불안을 드러내요. 무의식이 경고 신호를 보내는 중!',
      traits: ['쫓기는 꿈', '위험한 상황', '도망치기', '불안감'],
      dreamMeaning: '해결되지 않은 스트레스나 두려움',
      advice: '꿈이 말하는 불안의 원인을 찾아보세요. 현실에서 작은 것부터 해결하면 꿈도 편해질 거예요.'
    },
    freedom: {
      type: '자유 갈망형 꿈',
      title: '🦅 자유 갈망형 꿈',
      description: '당신의 꿈은 자유를 갈망해요. 현실의 제약에서 벗어나고 싶은 마음!',
      traits: ['날아다니기', '모험', '해방감', '초능력'],
      dreamMeaning: '자유와 해방에 대한 욕구',
      advice: '현실에서도 작은 자유를 찾아보세요. 새로운 경험, 일탈이 꿈의 갈증을 해소해줄 거예요.'
    },
    pressure: {
      type: '압박 반영형 꿈',
      title: '📚 압박 반영형 꿈',
      description: '당신의 꿈은 현실의 압박을 반영해요. 책임과 기대에 대한 부담이 크네요.',
      traits: ['시험/발표', '실패하는 꿈', '늦는 꿈', '일하는 꿈'],
      dreamMeaning: '성과에 대한 압박과 불안',
      advice: '완벽하지 않아도 괜찮아요. 자신에게 조금 더 관대해지면 꿈도 편해질 거예요.'
    },
    connection: {
      type: '관계 중심형 꿈',
      title: '💗 관계 중심형 꿈',
      description: '당신의 꿈은 관계와 연결을 중시해요. 사람들과의 유대가 중요한 마음!',
      traits: ['사람 만나기', '대화하기', '그리운 사람', '감정적 장면'],
      dreamMeaning: '관계와 연결에 대한 욕구',
      advice: '꿈에 나온 사람들에게 연락해보세요. 무의식이 그들을 그리워하고 있어요.'
    }
  }
};
