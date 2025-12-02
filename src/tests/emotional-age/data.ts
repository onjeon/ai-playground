// emotional-age 테스트 데이터
export const emotionalageTest = {
  id: 'emotional-age',
  title: '감정 나이 테스트',
  description: '실제 나이와 감정 나이는 다르다! 당신의 마음은 몇 살일까요?',
  questions: [
    {
      id: 1,
      text: '일이 계획대로 안 될 때 당신은?',
      options: [
        { text: '화가 나고 짜증이 폭발', type: 'child' },
        { text: '스트레스받지만 일단 해결책 찾음', type: 'adult' },
        { text: '원래 인생이 그런 거지 뭐', type: 'elder' },
        { text: '왜 안 되는지 분석하고 수정', type: 'young' }
      ]
    },
    {
      id: 2,
      text: '누군가 나를 비판했을 때?',
      options: [
        { text: '상처받고 막 울고 싶어짐', type: 'child' },
        { text: '기분 나쁘지만 객관적으로 생각해봄', type: 'adult' },
        { text: '그럴 수도 있지, 크게 신경 안 씀', type: 'elder' },
        { text: '왜 그런 말을 했는지 따져봄', type: 'young' }
      ]
    },
    {
      id: 3,
      text: '갑자기 좋아하는 것이 생기면?',
      options: [
        { text: '바로 올인! 다른 건 잊어버림', type: 'child' },
        { text: '시간과 예산 계획하고 즐김', type: 'adult' },
        { text: '좋긴 한데 예전만큼 빠지진 않음', type: 'elder' },
        { text: '관련 정보 다 찾아보고 파고듦', type: 'young' }
      ]
    },
    {
      id: 4,
      text: '친구와 싸웠을 때 화해 방식은?',
      options: [
        { text: '내가 왜 먼저 연락해야 해? 기다림', type: 'child' },
        { text: '시간 좀 두고 차분히 대화', type: 'adult' },
        { text: '뭐 그럴 수 있지, 별일 아님', type: 'elder' },
        { text: '일단 연락하고 감정 쏟아냄', type: 'young' }
      ]
    },
    {
      id: 5,
      text: '힘든 일이 있을 때 가장 먼저 하는 행동은?',
      options: [
        { text: '누군가에게 위로받고 싶어짐', type: 'child' },
        { text: '혼자 정리할 시간을 가짐', type: 'adult' },
        { text: '시간이 해결해주겠지, 그냥 삶', type: 'elder' },
        { text: '운동이나 취미로 기분 전환', type: 'young' }
      ]
    },
    {
      id: 6,
      text: '미래에 대한 생각은?',
      options: [
        { text: '미래? 오늘이 재밌으면 됐지', type: 'child' },
        { text: '계획적으로 준비하고 있음', type: 'adult' },
        { text: '살아봤자 다 거기서 거기', type: 'elder' },
        { text: '가능성이 넘쳐서 기대됨', type: 'young' }
      ]
    },
    {
      id: 7,
      text: '새로운 도전을 앞두고?',
      options: [
        { text: '막연히 설레고 무서움', type: 'child' },
        { text: '리스크와 보상을 따져봄', type: 'adult' },
        { text: '이 나이에 뭘 새로... 피곤해', type: 'elder' },
        { text: '바로 해보고 싶은 열정', type: 'young' }
      ]
    },
    {
      id: 8,
      text: '인간관계에서 가장 중요한 건?',
      options: [
        { text: '나를 좋아해주고 관심 줘야 함', type: 'child' },
        { text: '서로 존중하고 배려하는 것', type: 'adult' },
        { text: '적당한 거리, 깊은 관계는 피곤', type: 'elder' },
        { text: '재밌고 에너지 주는 관계', type: 'young' }
      ]
    },
    {
      id: 9,
      text: '후회가 될 것 같은 결정 앞에서?',
      options: [
        { text: '불안해서 누군가 대신 정해줬으면', type: 'child' },
        { text: '충분히 고민하고 결정, 후회는 안 함', type: 'adult' },
        { text: '어차피 뭘 해도 후회는 있어', type: 'elder' },
        { text: '일단 해보고 후회는 나중에', type: 'young' }
      ]
    },
    {
      id: 10,
      text: '인생에서 가장 좋았던 시기는?',
      options: [
        { text: '아직 오지 않은 것 같아', type: 'child' },
        { text: '지금이 가장 좋은 시기', type: 'adult' },
        { text: '옛날이 좋았어, 그립다', type: 'elder' },
        { text: '항상 좋았고 앞으로도 좋을 것', type: 'young' }
      ]
    }
  ],
  results: {
    child: {
      type: '순수한 어린이 마음',
      title: '👶 순수한 어린이 마음 (감정 나이 7세)',
      description: '세상을 아이의 눈으로 바라보는 당신! 순수함과 호기심이 가득해요.',
      traits: [
        '감정 표현이 솔직하고 즉각적',
        '의존 욕구와 인정 욕구가 강함',
        '순수하고 상처받기 쉬운 마음',
        '즐거움을 추구하고 책임은 회피'
      ],
      emotionalAge: '7세',
      advice: '당신의 순수함은 정말 소중해요! 하지만 가끔은 스스로를 다독이고, 어른으로서 자신을 보호하는 법도 배워보세요.'
    },
    young: {
      type: '열정 넘치는 청년 마음',
      title: '🔥 열정 넘치는 청년 마음 (감정 나이 25세)',
      description: '에너지와 열정이 넘치는 당신! 도전을 두려워하지 않아요.',
      traits: [
        '높은 에너지와 열정',
        '도전을 즐기고 실패도 배움으로',
        '낙관적이고 가능성을 봄',
        '감정 기복은 있지만 회복력 강함'
      ],
      emotionalAge: '25세',
      advice: '당신의 열정은 세상을 바꿀 수 있어요! 그 에너지를 잘 관리하면서, 때로는 쉬어가는 것도 잊지 마세요.'
    },
    adult: {
      type: '성숙한 어른 마음',
      title: '🎯 성숙한 어른 마음 (감정 나이 40세)',
      description: '균형 잡힌 시선으로 세상을 바라보는 당신! 감정적 성숙도가 높아요.',
      traits: [
        '감정 조절 능력이 뛰어남',
        '책임감 있고 계획적',
        '갈등 상황에서 이성적 대처',
        '자기 객관화가 가능'
      ],
      emotionalAge: '40세',
      advice: '당신은 정말 성숙한 마음을 가졌어요! 가끔은 내면의 아이를 꺼내서 순수하게 즐기는 시간도 가져보세요.'
    },
    elder: {
      type: '초연한 현자 마음',
      title: '🧘 초연한 현자 마음 (감정 나이 70세)',
      description: '세상사에 초연한 당신! 달관의 경지에 오른 마음이에요.',
      traits: [
        '웬만한 일에 동요하지 않음',
        '과거의 경험이 지혜가 됨',
        '욕심이 줄고 비움을 앎',
        '때로는 냉소적이거나 무관심'
      ],
      emotionalAge: '70세',
      advice: '당신의 여유로움은 삶의 지혜에서 온 거예요. 하지만 가끔은 새로운 것에 설레고, 열정을 느끼는 것도 삶을 풍요롭게 해줘요!'
    }
  }
};
