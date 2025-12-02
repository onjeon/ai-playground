// emotion-suppression 테스트 데이터
export const emotionsuppressionTest = {
  id: 'emotion-suppression',
  title: '감정 억압 레벨 테스트',
  description: '당신은 감정을 얼마나 숨기고 있나요? 억압된 감정의 정도와 해소 방법을 알아봅니다.',
  questions: [
    {
      id: 1,
      text: '화가 났을 때 당신의 반응은?',
      options: [
        { text: '바로 표현하거나 말로 전달', type: 'low' },
        { text: '잠깐 참았다가 적절히 표현', type: 'medium' },
        { text: '속으로 삼키고 안 내색함', type: 'high' },
        { text: '화난 것도 인지 못할 때가 있음', type: 'severe' }
      ]
    },
    {
      id: 2,
      text: '슬플 때 우는 것에 대해?',
      options: [
        { text: '울고 싶으면 운다', type: 'low' },
        { text: '혼자 있을 때만 운다', type: 'medium' },
        { text: '울지 않으려고 참는다', type: 'high' },
        { text: '마지막으로 운 게 언제인지 모름', type: 'severe' }
      ]
    },
    {
      id: 3,
      text: '기쁜 일이 있을 때?',
      options: [
        { text: '기뻐하는 게 티가 남', type: 'low' },
        { text: '적당히 표현한다', type: 'medium' },
        { text: '속으로만 기뻐함', type: 'high' },
        { text: '기쁨을 느끼는 것도 어려움', type: 'severe' }
      ]
    },
    {
      id: 4,
      text: '"괜찮아"라고 말하지만 실제로는?',
      options: [
        { text: '대부분 진짜 괜찮음', type: 'low' },
        { text: '가끔 괜찮지 않을 때도 그렇게 말함', type: 'medium' },
        { text: '자주 괜찮지 않은데 그렇게 말함', type: 'high' },
        { text: '항상 그렇게 말함, 습관처럼', type: 'severe' }
      ]
    },
    {
      id: 5,
      text: '감정을 숨기는 이유가 있다면?',
      options: [
        { text: '굳이 숨기지 않음', type: 'low' },
        { text: '상황에 따라 필요하면', type: 'medium' },
        { text: '남에게 부담 주기 싫어서', type: 'high' },
        { text: '감정을 보여주면 약해 보여서', type: 'severe' }
      ]
    },
    {
      id: 6,
      text: '혼자 있을 때 감정 해소 방법은?',
      options: [
        { text: '일기, 대화 등으로 자연스럽게', type: 'low' },
        { text: '콘텐츠 보거나 취미로', type: 'medium' },
        { text: '그냥 참고 시간이 지나길 기다림', type: 'high' },
        { text: '어떻게 해소하는지 모름', type: 'severe' }
      ]
    },
    {
      id: 7,
      text: '누군가 "표정이 왜 그래?"라고 하면?',
      options: [
        { text: '솔직하게 기분 얘기함', type: 'low' },
        { text: '"응? 아무것도 아니야" 하고 넘김', type: 'medium' },
        { text: '"나 원래 이런 표정인데?" 방어함', type: 'high' },
        { text: '내가 무표정이라는 걸 인지 못함', type: 'severe' }
      ]
    },
    {
      id: 8,
      text: '감정을 표현하는 것에 대해?',
      options: [
        { text: '자연스럽고 편함', type: 'low' },
        { text: '약간 어색하지만 할 수 있음', type: 'medium' },
        { text: '어렵고 불편함', type: 'high' },
        { text: '어떻게 하는 건지 모르겠음', type: 'severe' }
      ]
    },
    {
      id: 9,
      text: '어릴 때 감정 표현에 대해 들은 말은?',
      options: [
        { text: '자유롭게 표현해도 괜찮았음', type: 'low' },
        { text: '상황에 맞게 하라고 배움', type: 'medium' },
        { text: '참으라, 울지 마라 등', type: 'high' },
        { text: '감정을 드러내면 혼났음', type: 'severe' }
      ]
    },
    {
      id: 10,
      text: '지금 당신의 감정 상태는?',
      options: [
        { text: '명확하게 알고 있음', type: 'low' },
        { text: '대충 알고 있음', type: 'medium' },
        { text: '잘 모르겠음', type: 'high' },
        { text: '아무것도 안 느껴짐', type: 'severe' }
      ]
    }
  ],
  results: {
    low: {
      type: '건강한 표현형',
      title: '💚 건강한 표현형 (억압 레벨: 15%)',
      description: '감정을 건강하게 인식하고 표현하는 타입! 정서적으로 안정된 상태입니다.',
      suppressionLevel: '낮음 (15%)',
      traits: [
        '감정 인식이 잘 됨',
        '적절하게 표현함',
        '감정에 솔직함',
        '스트레스 관리가 잘 됨'
      ],
      emotionalHealth: '양호',
      advice: '건강한 감정 생활을 하고 있어요! 이 상태를 유지하세요.',
      risk: '특별한 위험 없음'
    },
    medium: {
      type: '선택적 억압형',
      title: '💛 선택적 억압형 (억압 레벨: 40%)',
      description: '상황에 따라 감정을 조절하는 타입. 대부분 건강하지만 가끔 억압할 때가 있어요.',
      suppressionLevel: '보통 (40%)',
      traits: [
        '상황에 맞게 조절',
        '어느 정도 억압이 있음',
        '대체로 건강함',
        '특정 감정만 억압'
      ],
      emotionalHealth: '보통',
      advice: '나쁘지 않지만, 억압하는 감정이 무엇인지 살펴보세요.',
      risk: '스트레스가 쌓일 수 있음'
    },
    high: {
      type: '높은 억압형',
      title: '🟠 높은 억압형 (억압 레벨: 70%)',
      description: '감정을 많이 숨기는 타입. 표현하지 못한 감정이 쌓여있을 수 있어요.',
      suppressionLevel: '높음 (70%)',
      traits: [
        '감정을 잘 숨김',
        '표현이 어려움',
        '속으로 삼키는 경향',
        '스트레스가 쌓임'
      ],
      emotionalHealth: '주의 필요',
      advice: '억압된 감정은 언젠가 터질 수 있어요. 안전한 곳에서 조금씩 표현해보세요.',
      risk: '번아웃, 우울, 신체 증상 가능성'
    },
    severe: {
      type: '감정 해리형',
      title: '🔴 감정 해리형 (억압 레벨: 90%)',
      description: '감정 자체를 인식하기 어려운 상태. 오랜 억압으로 감정이 마비되었을 수 있어요.',
      suppressionLevel: '심각 (90%)',
      traits: [
        '감정 인식이 어려움',
        '무감각한 상태',
        '표현 자체가 힘듦',
        '오래된 억압 패턴'
      ],
      emotionalHealth: '전문적 도움 필요',
      advice: '이 정도의 감정 억압은 혼자 해결하기 어려워요. 전문 상담을 강력히 권합니다.',
      risk: '심각한 정서적/신체적 문제 가능성'
    }
  }
};
