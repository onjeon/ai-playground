// friendship-age 테스트 데이터
export const friendshipageTest = {
  id: 'friendship-age',
  title: '우정 나이 테스트',
  description: '당신의 우정 스타일은 몇 살? 친구 관계에서 보이는 당신의 성숙도를 알아보세요!',
  questions: [
    {
      id: 1,
      text: '친구가 약속을 갑자기 취소하면?',
      options: [
        { text: '섭섭해서 토라짐, 연락 안 받음', type: 'child' },
        { text: '왜? 이유 따지고 싸움', type: 'teen' },
        { text: '아쉽지만 이해하고 다음에 만나자', type: 'adult' },
        { text: '무슨 일 있나? 괜찮은지 먼저 물어봄', type: 'mature' }
      ]
    },
    {
      id: 2,
      text: '친구와 의견이 다를 때?',
      options: [
        { text: '내 의견이 맞다고 끝까지 주장', type: 'child' },
        { text: '논쟁하다가 감정 상함', type: 'teen' },
        { text: '서로 다를 수 있다고 인정', type: 'adult' },
        { text: '오히려 다른 시각에서 배움', type: 'mature' }
      ]
    },
    {
      id: 3,
      text: '친구가 나보다 더 잘 될 때?',
      options: [
        { text: '질투나고 부러워서 비교됨', type: 'child' },
        { text: '축하하면서도 속으로 복잡', type: 'teen' },
        { text: '진심으로 축하, 자극받음', type: 'adult' },
        { text: '기쁘게 축하, 도움 줄 게 있는지 물어봄', type: 'mature' }
      ]
    },
    {
      id: 4,
      text: '친구 사이에 오해가 생기면?',
      options: [
        { text: '상대가 먼저 사과할 때까지 기다림', type: 'child' },
        { text: '친구들한테 내 편 만들기', type: 'teen' },
        { text: '직접 대화해서 풀려고 노력', type: 'adult' },
        { text: '내 잘못도 인정하고 먼저 다가감', type: 'mature' }
      ]
    },
    {
      id: 5,
      text: '친구에게 돈을 빌려줄 때?',
      options: [
        { text: '싫은데 거절 못해서 빌려줌', type: 'child' },
        { text: '빌려주고 언제 갚나 계속 신경 씀', type: 'teen' },
        { text: '줄 수 있는 만큼만, 안 갚아도 OK 각오', type: 'adult' },
        { text: '상황 보고 판단, 진짜 필요하면 도움', type: 'mature' }
      ]
    },
    {
      id: 6,
      text: '친구가 다른 친구와 더 친해지면?',
      options: [
        { text: '질투나고 서운함, 뺏긴 기분', type: 'child' },
        { text: '나도 그 친구랑 친해지거나 거리둠', type: 'teen' },
        { text: '각자의 관계가 있는 거지 뭐', type: 'adult' },
        { text: '다 함께 어울릴 수 있으면 좋지', type: 'mature' }
      ]
    },
    {
      id: 7,
      text: '친구의 고민을 들을 때?',
      options: [
        { text: '내 얘기로 바꿔서 얘기함', type: 'child' },
        { text: '해결책을 바로 제시하려 함', type: 'teen' },
        { text: '공감하며 들어줌', type: 'adult' },
        { text: '필요한 게 뭔지 물어보고 맞춤 지원', type: 'mature' }
      ]
    },
    {
      id: 8,
      text: '오랫동안 연락 없던 친구가 연락하면?',
      options: [
        { text: '왜 이제야 연락해? 삐짐', type: 'child' },
        { text: '뭔가 부탁할 거 아닌가 의심', type: 'teen' },
        { text: '반갑게 연락, 근황 물어봄', type: 'adult' },
        { text: '관계에 공백이 있어도 괜찮다 생각', type: 'mature' }
      ]
    },
    {
      id: 9,
      text: '친구 관계에서 가장 중요한 것은?',
      options: [
        { text: '나를 최우선으로 생각해주는 것', type: 'child' },
        { text: '비밀 공유, 편들어주는 것', type: 'teen' },
        { text: '서로 존중하고 신뢰하는 것', type: 'adult' },
        { text: '서로의 성장을 응원하는 것', type: 'mature' }
      ]
    },
    {
      id: 10,
      text: '친구와 멀어지는 것에 대해?',
      options: [
        { text: '불안하고 매달리게 됨', type: 'child' },
        { text: '상처받고 원망함', type: 'teen' },
        { text: '아쉽지만 자연스러운 일로 받아들임', type: 'adult' },
        { text: '좋은 추억에 감사, 새 인연에 열림', type: 'mature' }
      ]
    }
  ],
  results: {
    child: {
      type: '어린이 우정',
      title: '👶 우정 나이 7세',
      description: '우정에서 아직 어린아이 같은 면이 있어요. 나를 중심으로 관계를 보는 경향이 있어요.',
      traits: [
        '나 중심적 관계관',
        '소유욕/질투심',
        '감정 기복',
        '즉각적인 반응'
      ],
      friendshipAge: '7세',
      growthArea: '타인의 입장에서 생각하기',
      advice: '친구도 나와 다른 감정과 상황이 있다는 걸 기억해요. 관계는 주고받는 거예요. 조금씩 넓은 마음을 가져보세요!'
    },
    teen: {
      type: '청소년 우정',
      title: '🧑 우정 나이 16세',
      description: '우정에 열정적이지만 아직 감정적인 면이 있어요. 친구 관계에서 성장 중!',
      traits: [
        '열정적인 우정',
        '편 가르기 경향',
        '감정에 휘둘림',
        '비밀 공유 중시'
      ],
      friendshipAge: '16세',
      growthArea: '감정 조절과 객관성',
      advice: '친구에 대한 열정은 좋지만, 한 발 물러서서 보는 여유도 필요해요. 갈등도 성장의 기회가 될 수 있어요!'
    },
    adult: {
      type: '성인 우정',
      title: '🧑‍💼 우정 나이 30세',
      description: '건강하고 균형 잡힌 우정 스타일! 서로를 존중하는 성숙한 관계를 유지해요.',
      traits: [
        '상호 존중',
        '건강한 경계',
        '갈등 해결 능력',
        '독립적 관계'
      ],
      friendshipAge: '30세',
      growthArea: '더 깊은 연결',
      advice: '훌륭한 우정 스타일이에요! 이 균형을 유지하면서, 가끔은 더 깊이 마음을 나눠보는 것도 좋아요.'
    },
    mature: {
      type: '현자 우정',
      title: '🧙 우정 나이 60세',
      description: '지혜롭고 깊은 우정의 달인! 진정한 관계의 의미를 아는 성숙한 타입.',
      traits: [
        '무조건적 수용',
        '깊은 공감',
        '지혜로운 조언',
        '관계의 흐름 이해'
      ],
      friendshipAge: '60세',
      growthArea: '이미 충분히 성숙해요!',
      advice: '당신의 우정은 주변 사람들에게 큰 선물이에요. 그 지혜를 나누고, 가끔은 스스로도 받는 연습을 해보세요.'
    }
  }
};
