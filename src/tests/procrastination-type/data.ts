// procrastination-type 테스트 데이터
export const procrastinationtypeTest = {
  id: 'procrastination-type',
  title: '미루기 유형 테스트',
  description: '당신은 왜, 어떻게 미루나요? 미루기 패턴을 분석하고 극복 방법을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '해야 할 일이 있을 때 가장 먼저 드는 생각은?',
      options: [
        { text: '이거 완벽하게 해야 하는데... 준비부터', type: 'perfectionist' },
        { text: '아 귀찮아... 나중에 해도 되지', type: 'comfort' },
        { text: '어디서부터 시작해야 할지 모르겠어', type: 'overwhelmed' },
        { text: '마감 전날이 진정한 시작이지', type: 'thrill' }
      ]
    },
    {
      id: 2,
      text: '미루다가 결국 시작하는 계기는?',
      options: [
        { text: '완벽한 조건이 갖춰졌을 때', type: 'perfectionist' },
        { text: '더 이상 미룰 수 없을 때', type: 'comfort' },
        { text: '누군가 도와주거나 정리해줄 때', type: 'overwhelmed' },
        { text: '데드라인 직전 아드레날린 폭발', type: 'thrill' }
      ]
    },
    {
      id: 3,
      text: '미루는 동안 주로 뭘 하나요?',
      options: [
        { text: '관련 자료 조사, 계획 세우기', type: 'perfectionist' },
        { text: '유튜브, SNS, 넷플릭스...', type: 'comfort' },
        { text: '다른 덜 중요한 일 처리', type: 'overwhelmed' },
        { text: '놀다가 마감 직전에 올인', type: 'thrill' }
      ]
    },
    {
      id: 4,
      text: '미루기에 대한 죄책감은?',
      options: [
        { text: '엄청 느낌, 그래서 더 미룸', type: 'perfectionist' },
        { text: '약간 느끼지만 금방 잊어버림', type: 'comfort' },
        { text: '불안해서 계속 생각남', type: 'overwhelmed' },
        { text: '별로 안 느낌, 결국 해내니까', type: 'thrill' }
      ]
    },
    {
      id: 5,
      text: '큰 프로젝트가 주어지면?',
      options: [
        { text: '완벽한 계획을 세우느라 시작 못 함', type: 'perfectionist' },
        { text: '일단 미뤄두고 나중에 생각', type: 'comfort' },
        { text: '압도당해서 뭘 해야 할지 모름', type: 'overwhelmed' },
        { text: '마감 일주일 전부터 시작하면 됨', type: 'thrill' }
      ]
    },
    {
      id: 6,
      text: '미루다가 일을 마쳤을 때 기분은?',
      options: [
        { text: '더 잘할 수 있었는데... 아쉬워', type: 'perfectionist' },
        { text: '휴~ 끝났다! 이제 쉬자', type: 'comfort' },
        { text: '해냈다! 근데 다음에도 이럴 것 같아', type: 'overwhelmed' },
        { text: '역시 난 마감 전에 해내는 사람!', type: 'thrill' }
      ]
    },
    {
      id: 7,
      text: 'TODO 리스트를 만들면?',
      options: [
        { text: '너무 상세해서 리스트 만들다 하루 끝', type: 'perfectionist' },
        { text: '만들어놓고 잊어버림', type: 'comfort' },
        { text: '너무 많아서 보기만 해도 지침', type: 'overwhelmed' },
        { text: '안 만듦, 머릿속에 있음', type: 'thrill' }
      ]
    },
    {
      id: 8,
      text: '시험/발표 준비는 언제 해요?',
      options: [
        { text: '미리미리, 근데 계속 수정함', type: 'perfectionist' },
        { text: '해야지 해야지 하다가 벼락치기', type: 'comfort' },
        { text: '불안해서 일찍 시작하는데 진도 안 나감', type: 'overwhelmed' },
        { text: '전날 밤새워서 함', type: 'thrill' }
      ]
    },
    {
      id: 9,
      text: '미루기를 고치고 싶은 마음은?',
      options: [
        { text: '많이, 근데 완벽하게 고치고 싶어서 미룸', type: 'perfectionist' },
        { text: '가끔, 근데 결국 또 미룸', type: 'comfort' },
        { text: '항상, 하지만 방법을 모르겠어', type: 'overwhelmed' },
        { text: '별로, 어떻게든 해내잖아', type: 'thrill' }
      ]
    },
    {
      id: 10,
      text: '미루기의 가장 큰 이유는?',
      options: [
        { text: '실패하거나 완벽하지 못할까봐', type: 'perfectionist' },
        { text: '그냥 하기 싫어서', type: 'comfort' },
        { text: '어디서 시작해야 할지 모르겠어서', type: 'overwhelmed' },
        { text: '긴장감 없으면 집중이 안 돼서', type: 'thrill' }
      ]
    }
  ],
  results: {
    perfectionist: {
      type: '완벽주의 미루기',
      title: '✨ 완벽주의형 미루기',
      description: '완벽하게 하고 싶어서 시작을 못 하는 타입! 준비만 하다가 시간이 다 가요.',
      traits: [
        '완벽한 조건을 기다림',
        '계획만 세우다 끝',
        '실패에 대한 두려움',
        '자기 비판이 강함'
      ],
      procrastinationLevel: '계획 과잉형',
      rootCause: '실패에 대한 두려움',
      advice: '"완벽하지 않아도 된다"를 매일 되뇌세요. 일단 시작하는 것이 완벽함보다 중요해요. 80%도 충분히 훌륭합니다!'
    },
    comfort: {
      type: '안락 추구형 미루기',
      title: '🛋️ 안락 추구형 미루기',
      description: '그냥... 하기 싫어서 미루는 솔직한 타입! 현재의 편안함이 최고예요.',
      traits: [
        '즉각적인 즐거움 추구',
        '불편함 회피',
        '동기부여 부족',
        '습관적 미루기'
      ],
      procrastinationLevel: '회피형',
      rootCause: '현재의 편안함에 대한 집착',
      advice: '작은 보상 시스템을 만들어보세요. 30분 일하면 10분 휴식처럼! 뽀모도로 기법이 당신에게 딱이에요.'
    },
    overwhelmed: {
      type: '압도당한 미루기',
      title: '😰 압도당한 미루기',
      description: '할 일이 너무 많고 복잡해서 얼어붙는 타입! 어디서부터 해야 할지 모르겠어요.',
      traits: [
        '큰 그림에 압도당함',
        '우선순위 정하기 어려움',
        '불안감이 행동을 막음',
        '도움 요청을 어려워함'
      ],
      procrastinationLevel: '마비형',
      rootCause: '과제의 크기에 압도당함',
      advice: '큰 일을 아주 작은 조각으로 나누세요. "5분만 하자"로 시작하면 의외로 계속하게 돼요!'
    },
    thrill: {
      type: '데드라인 스릴러',
      title: '⏰ 데드라인 스릴러',
      description: '마감 직전의 긴장감이 있어야 움직이는 타입! 아드레날린이 당신의 연료예요.',
      traits: [
        '마감 직전 폭발적 집중',
        '위기에서 빛나는 능력',
        '평소엔 느긋함',
        '스릴을 즐김'
      ],
      procrastinationLevel: '스릴 추구형',
      rootCause: '긴장감이 있어야 집중됨',
      advice: '마감 직전 스트레스는 건강에 안 좋아요. 인위적으로 중간 마감을 만들어서 작은 스릴을 여러 번 느껴보세요!'
    }
  }
};
