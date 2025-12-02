// ex-pattern 테스트 데이터
export const expatternTest = {
  id: 'ex-pattern',
  title: '전남친/전여친 유형 테스트',
  description: '내가 만났던 사람들의 공통점은? 반복되는 연애 패턴을 분석하고 다음 연애를 위한 인사이트를 얻어봅니다!',
  questions: [
    {
      id: 1,
      text: '전 연인들의 공통적인 성격은?',
      options: [
        { text: '매력적이고 인기 많은 타입', type: 'charmer' },
        { text: '나한테 잘해주는 헌신적 타입', type: 'devoted' },
        { text: '이해하기 어려운 복잡한 타입', type: 'complicated' },
        { text: '편안하고 안정적인 타입', type: 'stable' },
        { text: '솔직히 별 공통점 없음', type: 'random' }
      ]
    },
    {
      id: 2,
      text: '연애가 주로 시작되는 방식은?',
      options: [
        { text: '상대의 적극적 대시를 받음', type: 'charmer' },
        { text: '내가 먼저 좋아함', type: 'devoted' },
        { text: '밀당 끝에 성사', type: 'complicated' },
        { text: '자연스럽게 친구에서', type: 'stable' },
        { text: '다양함, 정해진 패턴 없음', type: 'random' }
      ]
    },
    {
      id: 3,
      text: '연애 중 주로 느꼈던 감정은?',
      options: [
        { text: '설레지만 불안했음', type: 'charmer' },
        { text: '편하고 안정적이었음', type: 'devoted' },
        { text: '감정 기복이 심했음', type: 'complicated' },
        { text: '평온하고 잔잔했음', type: 'stable' },
        { text: '관계마다 달랐음', type: 'random' }
      ]
    },
    {
      id: 4,
      text: '이별의 주된 원인은?',
      options: [
        { text: '상대의 마음이 떠남/바람', type: 'charmer' },
        { text: '내가 질림/흥미를 잃음', type: 'devoted' },
        { text: '소통 문제/갈등 폭발', type: 'complicated' },
        { text: '자연스러운 권태', type: 'stable' },
        { text: '다양함, 케이스마다 다름', type: 'random' }
      ]
    },
    {
      id: 5,
      text: '이별 후 주로 느끼는 감정은?',
      options: [
        { text: '상처, 배신감', type: 'charmer' },
        { text: '미안함, 죄책감', type: 'devoted' },
        { text: '복잡함, 미련과 후회', type: 'complicated' },
        { text: '아쉬움, 담담함', type: 'stable' },
        { text: '관계마다 다름', type: 'random' }
      ]
    },
    {
      id: 6,
      text: '전 연인들을 떠올리면?',
      options: [
        { text: '내가 왜 저런 사람을...', type: 'charmer' },
        { text: '좋은 사람이었는데 미안함', type: 'devoted' },
        { text: '사랑했지만 힘들었음', type: 'complicated' },
        { text: '나쁘지 않은 추억', type: 'stable' },
        { text: '각자 다른 느낌', type: 'random' }
      ]
    },
    {
      id: 7,
      text: '연애할 때 나의 위치는?',
      options: [
        { text: '쫓아가는 위치 (을)', type: 'charmer' },
        { text: '받는 위치 (갑)', type: 'devoted' },
        { text: '계속 변함 (갑을 교체)', type: 'complicated' },
        { text: '대등한 관계', type: 'stable' },
        { text: '관계마다 다름', type: 'random' }
      ]
    },
    {
      id: 8,
      text: '전 연인과 재회한다면?',
      options: [
        { text: '또 빠질 것 같음...', type: 'charmer' },
        { text: '미안해서 피할 것 같음', type: 'devoted' },
        { text: '복잡한 감정이 올라올 듯', type: 'complicated' },
        { text: '편하게 인사할 수 있음', type: 'stable' },
        { text: '사람마다 다를 듯', type: 'random' }
      ]
    },
    {
      id: 9,
      text: '다음 연애에서 원하는 것은?',
      options: [
        { text: '나를 확실하게 좋아하는 사람', type: 'charmer' },
        { text: '내가 진짜 좋아하는 사람', type: 'devoted' },
        { text: '편안하고 안정적인 관계', type: 'complicated' },
        { text: '새롭고 설레는 사람', type: 'stable' },
        { text: '아직 모르겠음', type: 'random' }
      ]
    },
    {
      id: 10,
      text: '내 연애 패턴에 대한 자각이?',
      options: [
        { text: '매력적인 사람에 약함', type: 'charmer' },
        { text: '좋아해주면 만남', type: 'devoted' },
        { text: '복잡한 관계에 빠짐', type: 'complicated' },
        { text: '비슷한 스타일과 만남', type: 'stable' },
        { text: '패턴이 없는 게 패턴', type: 'random' }
      ]
    }
  ],
  results: {
    charmer: {
      type: '매력 중독형',
      title: '✨ 매력 중독형',
      description: '매력적이고 인기 많은 사람에게 끌리는 패턴! 설렘은 크지만 불안정할 수 있어요.',
      exType: '매력적이지만 나를 덜 좋아했던 사람들',
      pattern: '매력에 끌림 → 쫓아감 → 불안 → 상처',
      traits: [
        '외적 매력에 약함',
        '상대에게 맞추는 경향',
        '쫓아가는 연애',
        '이별 후 상처가 큼'
      ],
      lesson: '나를 진심으로 좋아하는 사람도 충분히 매력적이에요',
      advice: '다음엔 나에게 확실한 사람을 만나보세요. 쫓아가는 연애는 그만!'
    },
    devoted: {
      type: '헌신 수용형',
      title: '🤗 헌신 수용형',
      description: '나를 좋아해주는 사람과 만나는 패턴! 편하지만 흥미가 식기 쉬워요.',
      exType: '나한테 잘해줬지만 내가 덜 좋아했던 사람들',
      pattern: '고백 받음 → 만남 → 편안함 → 흥미 상실',
      traits: [
        '호감을 받으면 만남',
        '받는 위치의 연애',
        '미안함이 남는 이별',
        '내 감정보다 상대 감정 중심'
      ],
      lesson: '내가 진짜 좋아하는 사람도 만나봐야 해요',
      advice: '다음엔 당신이 먼저 설레는 사람을 만나보세요!'
    },
    complicated: {
      type: '복잡계 탐험형',
      title: '🌀 복잡계 탐험형',
      description: '복잡하고 힘든 관계에 끌리는 패턴! 감정은 깊지만 지치기 쉬워요.',
      exType: '이해하기 어렵고 복잡했던 사람들',
      pattern: '밀당 → 감정 기복 → 깊은 정 → 지침',
      traits: [
        '복잡한 사람에게 끌림',
        '밀당에 익숙함',
        '감정 소모가 큼',
        '힘들었지만 잊기 어려움'
      ],
      lesson: '편한 사랑도 진짜 사랑이에요',
      advice: '다음엔 심플하고 솔직한 관계를 경험해보세요!'
    },
    stable: {
      type: '안정 추구형',
      title: '🏠 안정 추구형',
      description: '편안하고 안정적인 사람과 만나는 패턴! 평화롭지만 권태가 올 수 있어요.',
      exType: '편하고 안정적이었던 사람들',
      pattern: '자연스러운 시작 → 편안함 → 잔잔함 → 권태',
      traits: [
        '안정적인 사람을 선호',
        '평화로운 연애',
        '큰 갈등 없이 이별',
        '담담한 추억'
      ],
      lesson: '가끔은 설렘도 필요해요',
      advice: '안정도 좋지만, 약간의 자극도 관계에 활력을 줄 수 있어요!'
    },
    random: {
      type: '무작위 탐색형',
      title: '🎲 무작위 탐색형',
      description: '특별한 패턴 없이 다양한 사람을 만나는 타입! 열린 마음이지만 기준이 필요할 수도.',
      exType: '다양하고 공통점 없는 사람들',
      pattern: '다양한 시작 → 다양한 전개 → 다양한 결말',
      traits: [
        '열린 마음으로 만남',
        '다양한 타입 경험',
        '패턴이 없는 게 패턴',
        '매번 새로운 경험'
      ],
      lesson: '어떤 사람과 잘 맞는지 자신을 알아가는 중',
      advice: '다양한 경험도 좋지만, 이제 내 기준을 세워볼 때예요!'
    }
  }
};
