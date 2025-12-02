// reaction-style 테스트 데이터
export const reactionstyleTest = {
  id: 'reaction-style',
  title: '리액션 유형 테스트',
  description: '당신의 리액션 스타일은? 오버 리액션? 무표정? 당신만의 반응 패턴을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '친구가 웃긴 얘기를 하면?',
      options: [
        { text: '배 잡고 폭소! 눈물까지', type: 'over' },
        { text: '하하하 재밌다!', type: 'expressive' },
        { text: '피식 웃음', type: 'subtle' },
        { text: '속으로 웃음 (표정은 무)', type: 'poker' }
      ]
    },
    {
      id: 2,
      text: '놀라운 소식을 들었을 때?',
      options: [
        { text: '헐?! 대박!! (온몸으로 표현)', type: 'over' },
        { text: '진짜?! 와 대단하다!', type: 'expressive' },
        { text: '오... 그렇구나', type: 'subtle' },
        { text: '(눈만 약간 커짐)', type: 'poker' }
      ]
    },
    {
      id: 3,
      text: '맛있는 음식을 먹으면?',
      options: [
        { text: '이거 진짜 미쳤어!! 행복해ㅠㅠ', type: 'over' },
        { text: '와 맛있다! 여기 또 오자', type: 'expressive' },
        { text: '음, 괜찮네', type: 'subtle' },
        { text: '(조용히 먹음)', type: 'poker' }
      ]
    },
    {
      id: 4,
      text: '감동적인 영화를 보면?',
      options: [
        { text: '펑펑 울며 휴지 한 통', type: 'over' },
        { text: '눈물 글썽, 감동...', type: 'expressive' },
        { text: '좀 뭉클하네', type: 'subtle' },
        { text: '(눈은 촉촉하지만 티 안 냄)', type: 'poker' }
      ]
    },
    {
      id: 5,
      text: '선물을 받으면?',
      options: [
        { text: '와아아!! 고마워ㅠㅠ (포옹 + 난리)', type: 'over' },
        { text: '우와 고마워! 진짜 좋다!', type: 'expressive' },
        { text: '오 고마워, 잘 쓸게', type: 'subtle' },
        { text: '(내심 기쁘지만 담담하게) 고마워', type: 'poker' }
      ]
    },
    {
      id: 6,
      text: '스포츠 경기 보면서?',
      options: [
        { text: '소리 지르고 난리남', type: 'over' },
        { text: '응원하고 박수치고', type: 'expressive' },
        { text: '조용히 집중해서 봄', type: 'subtle' },
        { text: '무표정으로 관전', type: 'poker' }
      ]
    },
    {
      id: 7,
      text: '사진 찍을 때 표정은?',
      options: [
        { text: 'V자 + 활짝 웃음 + 온갖 포즈', type: 'over' },
        { text: '자연스러운 미소', type: 'expressive' },
        { text: '살짝 미소', type: 'subtle' },
        { text: '무표정 or 어색한 표정', type: 'poker' }
      ]
    },
    {
      id: 8,
      text: '친구가 고민을 털어놓으면?',
      options: [
        { text: '같이 울고 화내며 공감', type: 'over' },
        { text: '적극적으로 들어주고 위로', type: 'expressive' },
        { text: '들어주고 조언', type: 'subtle' },
        { text: '진지하게 듣지만 표현은 적음', type: 'poker' }
      ]
    },
    {
      id: 9,
      text: '축하받을 일이 생기면?',
      options: [
        { text: '기뻐서 어쩔 줄 모름! SNS 공유', type: 'over' },
        { text: '행복하게 기뻐함', type: 'expressive' },
        { text: '좋긴 한데 겸손하게', type: 'subtle' },
        { text: '속으로 기쁨 (티는 안 냄)', type: 'poker' }
      ]
    },
    {
      id: 10,
      text: '주변 사람들이 당신에게 자주 하는 말은?',
      options: [
        { text: '"너 진짜 리액션 좋다" "텐션 높아"', type: 'over' },
        { text: '"같이 있으면 재밌어"', type: 'expressive' },
        { text: '"조용하네" "차분하다"', type: 'subtle' },
        { text: '"속을 모르겠어" "표정이 없어"', type: 'poker' }
      ]
    }
  ],
  results: {
    over: {
      type: '오버 리액션 장인',
      title: '🎭 오버 리액션 장인',
      description: '당신의 리액션은 풀HD 영화급! 감정 표현에 있어 올림픽 금메달리스트예요.',
      traits: [
        '온몸으로 표현',
        '감정 증폭기',
        '분위기 메이커',
        '에너지 넘침'
      ],
      reactionLevel: '200%',
      socialEnergy: '함께하면 즐거운 사람',
      advice: '당신의 리액션은 주변을 밝게 해요! 하지만 가끔은 오버라고 느낄 수 있으니, 상황에 따라 조절하는 것도 좋아요.'
    },
    expressive: {
      type: '적극 리액션러',
      title: '😊 적극 리액션러',
      description: '자연스럽고 적절한 리액션의 달인! 함께 있으면 편안하고 즐거운 타입.',
      traits: [
        '자연스러운 표현',
        '적절한 공감',
        '밸런스 좋은 반응',
        '따뜻한 에너지'
      ],
      reactionLevel: '100%',
      socialEnergy: '균형 잡힌 소통러',
      advice: '가장 이상적인 리액션 스타일이에요! 상대방을 편안하게 만드는 능력을 계속 유지하세요.'
    },
    subtle: {
      type: '은은한 리액션러',
      title: '🌙 은은한 리액션러',
      description: '작지만 진심이 담긴 리액션! 과하지 않지만 충분히 표현하는 타입.',
      traits: [
        '절제된 표현',
        '진심 담긴 반응',
        '차분한 에너지',
        '신뢰감 주는 태도'
      ],
      reactionLevel: '50%',
      socialEnergy: '진중한 소통러',
      advice: '당신의 차분함은 신뢰를 줘요. 하지만 가끔은 조금 더 표현해주면 상대방이 기뻐할 거예요!'
    },
    poker: {
      type: '포커페이스 장인',
      title: '🎴 포커페이스 장인',
      description: '감정은 있지만 표정은 미스터리! 속을 알 수 없는 신비로운 타입.',
      traits: [
        '무표정 마스터',
        '감정 숨기기 전문',
        '미스터리한 매력',
        '내면 세계 풍부'
      ],
      reactionLevel: '10%',
      socialEnergy: '미스터리한 매력',
      advice: '당신의 포커페이스는 특별한 매력이에요! 하지만 가까운 사람에게는 조금 더 표현해주면 관계가 더 깊어질 거예요.'
    }
  }
};
