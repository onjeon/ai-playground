// love-hell 테스트 데이터
export const lovehellTest = {
  id: 'love-hell',
  title: '연애 지옥 유형 테스트',
  description: '당신이 빠지기 쉬운 연애 지옥은? 반복되는 연애 패턴을 분석하고 탈출구를 찾아봅니다!',
  questions: [
    {
      id: 1,
      text: '연애 초반, 상대에 대한 기대감은?',
      options: [
        { text: '이 사람이 운명이야! 확신에 가득 참', type: 'illusion' },
        { text: '상대가 날 좋아하는지 계속 확인하고 싶음', type: 'anxiety' },
        { text: '처음엔 괜찮은데 점점 식어감', type: 'boredom' },
        { text: '나만 좋아하고 상대는 별로인 것 같음', type: 'unrequited' }
      ]
    },
    {
      id: 2,
      text: '연인과 연락이 늦어지면?',
      options: [
        { text: '분명 이유가 있을 거야, 기다림', type: 'illusion' },
        { text: '불안해서 여러 번 연락해봄', type: 'anxiety' },
        { text: '나도 별로 신경 안 쓰임', type: 'boredom' },
        { text: '역시 나한테 관심 없구나...', type: 'unrequited' }
      ]
    },
    {
      id: 3,
      text: '헤어진 후 주로 드는 생각은?',
      options: [
        { text: '그 사람은 원래 좋은 사람이었어...', type: 'illusion' },
        { text: '내가 뭘 잘못한 걸까? 자책함', type: 'anxiety' },
        { text: '어차피 식었으니까 잘 됐어', type: 'boredom' },
        { text: '역시 난 사랑받을 자격이 없나...', type: 'unrequited' }
      ]
    },
    {
      id: 4,
      text: '상대의 단점을 발견했을 때?',
      options: [
        { text: '장점이 단점을 덮어, 괜찮아', type: 'illusion' },
        { text: '이것 때문에 날 싫어하면 어쩌지?', type: 'anxiety' },
        { text: '점점 매력이 떨어지는 것 같음', type: 'boredom' },
        { text: '나도 단점 많으니까 뭐...', type: 'unrequited' }
      ]
    },
    {
      id: 5,
      text: '연애 중 가장 힘든 순간은?',
      options: [
        { text: '현실과 이상의 괴리를 느낄 때', type: 'illusion' },
        { text: '상대 마음을 확인할 수 없을 때', type: 'anxiety' },
        { text: '설렘이 사라지고 지루해질 때', type: 'boredom' },
        { text: '나만 노력하는 것 같을 때', type: 'unrequited' }
      ]
    },
    {
      id: 6,
      text: '연인에게 바라는 것이 있다면?',
      options: [
        { text: '내가 상상하는 모습 그대로여 주길', type: 'illusion' },
        { text: '확실한 애정 표현과 안정감', type: 'anxiety' },
        { text: '계속 새롭고 자극적이길', type: 'boredom' },
        { text: '나를 조금이라도 좋아해 주길', type: 'unrequited' }
      ]
    },
    {
      id: 7,
      text: '전 연인들의 공통점이 있다면?',
      options: [
        { text: '처음엔 완벽해 보였는데 아니었음', type: 'illusion' },
        { text: '감정 표현이 부족했던 사람들', type: 'anxiety' },
        { text: '시간이 지나면 재미없어졌음', type: 'boredom' },
        { text: '나보다 나를 덜 좋아했던 사람들', type: 'unrequited' }
      ]
    },
    {
      id: 8,
      text: '친구들이 내 연애에 대해 자주 하는 말은?',
      options: [
        { text: '"너 또 콩깍지 씌었구나"', type: 'illusion' },
        { text: '"좀 편하게 만나봐"', type: 'anxiety' },
        { text: '"금방 또 질리겠다"', type: 'boredom' },
        { text: '"그 사람 너 좋아하긴 해?"', type: 'unrequited' }
      ]
    },
    {
      id: 9,
      text: '연애할 때 내가 자주 하는 실수는?',
      options: [
        { text: '상대를 이상화하고 현실을 못 봄', type: 'illusion' },
        { text: '집착하거나 확인하려 함', type: 'anxiety' },
        { text: '관계에 소홀해지거나 새 사람에 눈이 감', type: 'boredom' },
        { text: '나를 낮추고 상대에게 맞춤', type: 'unrequited' }
      ]
    },
    {
      id: 10,
      text: '이상적인 연애란?',
      options: [
        { text: '드라마 같은 운명적인 사랑', type: 'illusion' },
        { text: '서로 확실하게 사랑을 확인하는 관계', type: 'anxiety' },
        { text: '항상 새롭고 설레는 관계', type: 'boredom' },
        { text: '나도 사랑받는다고 느끼는 관계', type: 'unrequited' }
      ]
    }
  ],
  results: {
    illusion: {
      type: '환상 지옥',
      title: '🏰 환상 지옥',
      description: '콩깍지 주의보! 상대를 이상화하고 현실을 보지 못해 실망의 늪에 빠지는 유형입니다.',
      hellDescription: '처음엔 "이 사람이 운명이야!"라고 확신하지만, 현실의 모습을 마주하면 "이 사람 왜 이래?"가 되는 지옥',
      traits: [
        '연애 초반 감정의 롤러코스터',
        '상대를 판타지 속 인물로 만듦',
        '현실과 이상의 괴리에 실망',
        '이별 후에도 좋은 기억만 남음'
      ],
      escapeGuide: '상대를 있는 그대로 보려고 노력하세요. 장점도, 단점도 모두 현실입니다. 완벽한 사람은 없어요!',
      advice: '연애 초반에 너무 올인하지 말고, 천천히 상대를 알아가세요. 3개월은 관찰 기간!'
    },
    anxiety: {
      type: '불안 지옥',
      title: '😰 불안 지옥',
      description: '확인 또 확인! 상대의 마음이 불안해서 계속 확인하고, 그 과정에서 지치는 유형입니다.',
      hellDescription: '"나 좋아해?" "진짜?" "확실해?"... 확인받아도 또 불안하고, 그 불안이 관계를 망치는 지옥',
      traits: [
        '상대 감정에 예민하게 반응',
        '연락이 늦으면 불안해함',
        '확인받아도 또 불안함',
        '이별 후 자책하는 경향'
      ],
      escapeGuide: '불안은 상대가 아닌 내 안에서 오는 것일 수 있어요. 자존감을 높이고, 나 자신을 먼저 사랑해보세요.',
      advice: '상대의 행동 하나하나에 의미를 부여하지 마세요. 대부분은 당신 생각만큼 심각하지 않아요!'
    },
    boredom: {
      type: '권태 지옥',
      title: '🥱 권태 지옥',
      description: '설렘 중독! 익숙해지면 지루해지고, 새로운 자극을 찾아 떠나게 되는 유형입니다.',
      hellDescription: '3개월만 지나면 "이게 맞나?" 싶고, 새로운 사람이 더 끌리는... 설렘을 쫓다 정작 사랑을 놓치는 지옥',
      traits: [
        '연애 초반만 불꽃처럼',
        '익숙해지면 매력을 못 느낌',
        '새로운 사람에게 눈이 감',
        '깊은 관계를 유지하기 어려움'
      ],
      escapeGuide: '설렘은 영원하지 않아요. 진짜 사랑은 설렘이 지나간 후 남는 것입니다. 익숙함 속의 소중함을 찾아보세요.',
      advice: '관계에 새로움을 만들어보세요. 상대가 아닌 관계에 투자하면 권태를 극복할 수 있어요!'
    },
    unrequited: {
      type: '짝사랑 지옥',
      title: '💔 짝사랑 지옥',
      description: '편애 모드! 나만 좋아하고 상대는 별로인 관계에 반복적으로 빠지는 유형입니다.',
      hellDescription: '항상 나만 더 좋아하고, 나만 노력하고, 나만 상처받는... 일방통행 사랑의 지옥',
      traits: [
        '나를 덜 좋아하는 사람에게 끌림',
        '관계에서 항상 을의 위치',
        '자존감이 낮아지는 연애 패턴',
        '쉽게 다가오는 사람은 매력 없음'
      ],
      escapeGuide: '나를 확실하게 좋아하는 사람을 만나보세요. 사랑은 고통이 아니에요. 편한 사랑도 존재해요!',
      advice: '나를 좋아하는 사람이 "시시하게" 느껴진다면, 그건 자존감의 문제일 수 있어요. 나를 먼저 사랑해보세요.'
    }
  }
};
