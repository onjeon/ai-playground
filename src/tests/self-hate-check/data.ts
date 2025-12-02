// self-hate-check 테스트 데이터
export const selfhatecheckTest = {
  id: 'self-hate-check',
  title: '자기혐오 체크 테스트',
  description: '나 자신을 얼마나 미워하고 있나요? 자기혐오의 정도와 원인을 파악하고 치유의 시작점을 찾아봅니다.',
  questions: [
    {
      id: 1,
      text: '거울 속 나를 볼 때 드는 생각은?',
      options: [
        { text: '괜찮네, 나쁘지 않아', type: 'low' },
        { text: '별 생각 없이 봄', type: 'medium' },
        { text: '마음에 안 드는 부분이 눈에 띔', type: 'high' },
        { text: '보기 싫음, 피하고 싶음', type: 'severe' }
      ]
    },
    {
      id: 2,
      text: '실수를 했을 때 나에게 하는 말은?',
      options: [
        { text: '"그럴 수 있지, 다음에 잘하자"', type: 'low' },
        { text: '"조심했어야 하는데..."', type: 'medium' },
        { text: '"역시 난 안 돼, 바보 같아"', type: 'high' },
        { text: '"나는 왜 이 모양이지? 최악이야"', type: 'severe' }
      ]
    },
    {
      id: 3,
      text: '칭찬을 받으면?',
      options: [
        { text: '"고마워" 하고 기분 좋게 받아들임', type: 'low' },
        { text: '쑥스럽지만 기쁨', type: 'medium' },
        { text: '"그냥 하는 말이겠지" 의심함', type: 'high' },
        { text: '불편하거나 믿지 못함', type: 'severe' }
      ]
    },
    {
      id: 4,
      text: '다른 사람과 비교할 때?',
      options: [
        { text: '각자 장단점이 있지', type: 'low' },
        { text: '가끔 부러울 때가 있음', type: 'medium' },
        { text: '나는 왜 저렇지 못할까 자책', type: 'high' },
        { text: '나만 못난 것 같아 우울함', type: 'severe' }
      ]
    },
    {
      id: 5,
      text: '나의 단점에 대해 생각할 때?',
      options: [
        { text: '고칠 수 있는 것은 노력하면 됨', type: 'low' },
        { text: '신경 쓰이지만 어쩔 수 없는 것도', type: 'medium' },
        { text: '단점만 자꾸 생각나서 괴로움', type: 'high' },
        { text: '단점 투성이라 고칠 수 없을 것 같음', type: 'severe' }
      ]
    },
    {
      id: 6,
      text: '"나는 사랑받을 자격이 있다"에 대해?',
      options: [
        { text: '당연하지', type: 'low' },
        { text: '그런 것 같기도...', type: 'medium' },
        { text: '잘 모르겠음', type: 'high' },
        { text: '아닌 것 같음', type: 'severe' }
      ]
    },
    {
      id: 7,
      text: '좋은 일이 생겼을 때?',
      options: [
        { text: '기쁘고 감사함', type: 'low' },
        { text: '기쁘지만 금방 사라질 것 같음', type: 'medium' },
        { text: '내가 받을 자격이 있나 의문', type: 'high' },
        { text: '뭔가 잘못될 것 같은 불안', type: 'severe' }
      ]
    },
    {
      id: 8,
      text: '하루를 돌아볼 때 주로 떠오르는 것은?',
      options: [
        { text: '오늘 잘한 것들', type: 'low' },
        { text: '이것저것 섞여서', type: 'medium' },
        { text: '실수하거나 부끄러웠던 것', type: 'high' },
        { text: '후회되는 것들만 계속 곱씹음', type: 'severe' }
      ]
    },
    {
      id: 9,
      text: '나 자신에게 가장 자주 하는 말은?',
      options: [
        { text: '"잘하고 있어"', type: 'low' },
        { text: '"힘내자"', type: 'medium' },
        { text: '"왜 그랬어? 바보야"', type: 'high' },
        { text: '"넌 정말 쓸모없어"', type: 'severe' }
      ]
    },
    {
      id: 10,
      text: '나 자신에 대한 전반적인 느낌은?',
      options: [
        { text: '대체로 만족함', type: 'low' },
        { text: '보통, 좋을 때도 나쁠 때도', type: 'medium' },
        { text: '불만족, 바꾸고 싶은 게 많음', type: 'high' },
        { text: '싫음, 나로 태어난 게 원망스러움', type: 'severe' }
      ]
    }
  ],
  results: {
    low: {
      type: '건강한 자기 인식',
      title: '💚 건강한 자기 인식',
      description: '나 자신을 있는 그대로 받아들이고 있어요. 건강한 자존감을 가지고 있습니다.',
      hateLevel: '낮음',
      traits: [
        '자기 자신에게 관대함',
        '실수를 받아들일 줄 암',
        '장단점 모두 인정함',
        '자기 가치를 알고 있음'
      ],
      message: '당신은 자신을 잘 돌보고 있어요!',
      advice: '이 건강한 마음을 유지하세요. 주변 사람들에게도 이 긍정적 에너지를 나눠주세요.'
    },
    medium: {
      type: '가벼운 자기 비판',
      title: '💛 가벼운 자기 비판',
      description: '때때로 자신에게 엄격해지지만, 대체로 균형을 유지하고 있어요.',
      hateLevel: '보통',
      traits: [
        '가끔 자기 비판적',
        '비교로 인한 불안 있음',
        '대체로는 괜찮음',
        '개선하고 싶은 마음'
      ],
      message: '완벽하지 않아도 괜찮아요.',
      advice: '자신에게 좀 더 친절해지세요. 친구에게 하듯 나에게도 따뜻한 말을 해주세요.'
    },
    high: {
      type: '높은 자기 비판',
      title: '🟠 높은 자기 비판',
      description: '자신에 대한 부정적인 생각이 많아요. 자기혐오의 패턴이 보입니다.',
      hateLevel: '높음',
      traits: [
        '자기 비판이 일상화됨',
        '칭찬을 받아들이기 어려움',
        '단점에 집중하는 경향',
        '비교로 인한 고통'
      ],
      message: '당신은 생각보다 괜찮은 사람이에요.',
      advice: '자기혐오는 습관처럼 굳어진 것일 수 있어요. 작은 것부터 자신을 인정하는 연습을 해보세요.'
    },
    severe: {
      type: '심각한 자기혐오',
      title: '🔴 심각한 자기혐오',
      description: '자신에 대한 깊은 혐오감을 느끼고 있어요. 이것은 당신의 잘못이 아닙니다.',
      hateLevel: '심각',
      traits: [
        '지속적인 자기 비하',
        '자기 가치 인식 어려움',
        '일상에 영향을 미침',
        '과거의 상처가 있을 수 있음'
      ],
      message: '당신은 사랑받을 자격이 있어요. 정말이에요.',
      advice: '이 정도의 자기혐오는 혼자 감당하기 어려워요. 전문가의 도움을 받아보세요. 당신은 도움받을 가치가 있어요.'
    }
  }
};
