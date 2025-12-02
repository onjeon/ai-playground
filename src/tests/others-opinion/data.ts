// others-opinion 테스트 데이터
export const othersopinionTest = {
  id: 'others-opinion',
  title: '타인 평가 민감도 테스트',
  description: '남의 시선에 얼마나 예민한가요? 타인의 평가에 대한 민감도와 대처 방식을 알아봅니다.',
  questions: [
    {
      id: 1,
      text: '새로운 옷을 입고 나갔을 때?',
      options: [
        { text: '내가 좋으면 됐지', type: 'low' },
        { text: '사람들 반응이 조금 궁금함', type: 'medium' },
        { text: '혹시 이상해 보이나 신경 쓰임', type: 'high' },
        { text: '사람들이 뭐라 할까 불안함', type: 'severe' }
      ]
    },
    {
      id: 2,
      text: '발표나 의견을 말할 때?',
      options: [
        { text: '할 말 하면 됨', type: 'low' },
        { text: '긴장되지만 할 수 있음', type: 'medium' },
        { text: '평가받는 느낌에 불편함', type: 'high' },
        { text: '비판받을까 봐 말 못함', type: 'severe' }
      ]
    },
    {
      id: 3,
      text: 'SNS에 사진 올릴 때?',
      options: [
        { text: '그냥 올림', type: 'low' },
        { text: '적당히 고르고 올림', type: 'medium' },
        { text: '어떻게 보일지 많이 고민', type: 'high' },
        { text: '반응 걱정에 잘 못 올림', type: 'severe' }
      ]
    },
    {
      id: 4,
      text: '누군가 나를 쳐다보면?',
      options: [
        { text: '별 생각 없음', type: 'low' },
        { text: '뭐지? 정도 생각', type: 'medium' },
        { text: '뭔가 이상한가? 신경 쓰임', type: 'high' },
        { text: '불안해지고 위축됨', type: 'severe' }
      ]
    },
    {
      id: 5,
      text: '친구들이 속닥속닥 얘기하면?',
      options: [
        { text: '나랑 관련 없을 듯', type: 'low' },
        { text: '뭔 얘기지? 궁금함', type: 'medium' },
        { text: '혹시 내 얘기? 신경 쓰임', type: 'high' },
        { text: '나 욕하나? 불안함', type: 'severe' }
      ]
    },
    {
      id: 6,
      text: '실수를 했을 때 남들 시선은?',
      options: [
        { text: '누구나 실수해, 괜찮아', type: 'low' },
        { text: '조금 부끄럽지만 넘어감', type: 'medium' },
        { text: '사람들이 뭐라 생각할까 걱정', type: 'high' },
        { text: '창피해서 못 견디겠음', type: 'severe' }
      ]
    },
    {
      id: 7,
      text: '결정을 내릴 때 기준은?',
      options: [
        { text: '내가 원하는 것', type: 'low' },
        { text: '내 기준 + 주변 의견 참고', type: 'medium' },
        { text: '다른 사람들이 어떻게 볼지 우선', type: 'high' },
        { text: '남들 시선에 맞춰 결정', type: 'severe' }
      ]
    },
    {
      id: 8,
      text: '비판을 받았을 때?',
      options: [
        { text: '참고할 건 하고 넘김', type: 'low' },
        { text: '기분 나쁘지만 생각해봄', type: 'medium' },
        { text: '오래 마음에 남고 상처받음', type: 'high' },
        { text: '무너지는 느낌', type: 'severe' }
      ]
    },
    {
      id: 9,
      text: '남들과 다른 선택을 할 때?',
      options: [
        { text: '내 인생이니까 OK', type: 'low' },
        { text: '조금 신경 쓰이지만 괜찮음', type: 'medium' },
        { text: '이상하게 보이면 어쩌지', type: 'high' },
        { text: '튀는 게 무서워서 맞춤', type: 'severe' }
      ]
    },
    {
      id: 10,
      text: '남의 시선에 대한 당신의 생각은?',
      options: [
        { text: '다들 자기 일에 바빠', type: 'low' },
        { text: '어느 정도는 신경 써야지', type: 'medium' },
        { text: '사람들 시선이 항상 신경 쓰임', type: 'high' },
        { text: '시선 때문에 힘들다', type: 'severe' }
      ]
    }
  ],
  results: {
    low: {
      type: '자유로운 영혼',
      title: '🦅 자유로운 영혼 (민감도: 15%)',
      description: '남의 시선에 흔들리지 않는 타입! 자기 주관이 뚜렷하고 자유롭게 살아갑니다.',
      sensitivityLevel: '낮음 (15%)',
      traits: [
        '자기 확신이 있음',
        '남의 시선에 자유로움',
        '비판에도 흔들리지 않음',
        '자기 길을 감'
      ],
      strength: '진정한 자유로움을 가지고 있어요',
      advice: '멋져요! 하지만 가끔은 다른 사람의 피드백도 들어보세요. 성장에 도움이 될 수 있어요.'
    },
    medium: {
      type: '균형 잡힌 인식',
      title: '⚖️ 균형 잡힌 인식 (민감도: 40%)',
      description: '적당히 신경 쓰면서도 자기 주관을 유지하는 타입. 건강한 수준입니다.',
      sensitivityLevel: '보통 (40%)',
      traits: [
        '적절한 수준의 인식',
        '의견을 참고하되 결정은 내가',
        '비판을 수용할 줄 앎',
        '균형 잡힌 태도'
      ],
      strength: '사회성과 자기주관의 균형을 잘 잡고 있어요',
      advice: '좋은 밸런스예요! 지금처럼 유지하세요.'
    },
    high: {
      type: '예민한 안테나',
      title: '📡 예민한 안테나 (민감도: 70%)',
      description: '타인의 시선과 평가에 많이 신경 쓰는 타입. 스트레스를 받을 수 있어요.',
      sensitivityLevel: '높음 (70%)',
      traits: [
        '남의 시선에 예민함',
        '평가에 영향을 많이 받음',
        '눈치를 많이 봄',
        '자기표현이 어려울 수 있음'
      ],
      strength: '사회적 감각이 뛰어나요',
      advice: '대부분의 사람들은 당신 생각만큼 당신에게 관심이 없어요. 조금 더 자유로워져도 괜찮아요!'
    },
    severe: {
      type: '시선 공포형',
      title: '😰 시선 공포형 (민감도: 90%)',
      description: '타인의 시선이 일상에 큰 영향을 미치는 타입. 많이 힘드셨을 거예요.',
      sensitivityLevel: '심각 (90%)',
      traits: [
        '시선에 대한 극심한 불안',
        '평가 공포가 있음',
        '위축되기 쉬움',
        '자기표현을 피함'
      ],
      strength: '섬세하고 깊은 감수성을 가지고 있어요',
      advice: '이 정도의 불안은 혼자 감당하기 어려워요. 전문가 상담을 고려해보세요. 당신은 있는 그대로도 괜찮아요.'
    }
  }
};
