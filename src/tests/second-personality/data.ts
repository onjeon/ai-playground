// second-personality 테스트 데이터
export const secondpersonalityTest = {
  id: 'second-personality',
  title: '숨겨진 두 번째 성격 테스트',
  description: '겉으로 보이는 성격 말고, 속에 숨어있는 두 번째 자아는? 당신의 숨겨진 면을 발견해보세요!',
  questions: [
    {
      id: 1,
      text: '평소 사람들에게 보여주는 나의 모습은?',
      options: [
        { text: '밝고 사교적인 모습', type: 'hidden_introvert' },
        { text: '조용하고 차분한 모습', type: 'hidden_extrovert' },
        { text: '논리적이고 이성적인 모습', type: 'hidden_emotional' },
        { text: '따뜻하고 감성적인 모습', type: 'hidden_logical' }
      ]
    },
    {
      id: 2,
      text: '혼자 있을 때 가장 편하게 하는 행동은?',
      options: [
        { text: '아무것도 안 하고 조용히 쉼', type: 'hidden_introvert' },
        { text: '신나는 음악 틀고 혼자 파티', type: 'hidden_extrovert' },
        { text: '감정적인 콘텐츠 보며 울기', type: 'hidden_emotional' },
        { text: '퍼즐이나 전략 게임 몰입', type: 'hidden_logical' }
      ]
    },
    {
      id: 3,
      text: '가끔 이런 생각이 들어요:',
      options: [
        { text: '"사람들 만나는 거 사실 피곤해..."', type: 'hidden_introvert' },
        { text: '"가끔은 미친 듯이 놀고 싶어!"', type: 'hidden_extrovert' },
        { text: '"나 사실 진짜 감정적인 사람인데..."', type: 'hidden_emotional' },
        { text: '"감정보다 논리가 맞는데 왜 그래..."', type: 'hidden_logical' }
      ]
    },
    {
      id: 4,
      text: '친한 친구만 아는 나의 모습은?',
      options: [
        { text: '혼자 있는 걸 엄청 좋아한다는 것', type: 'hidden_introvert' },
        { text: '텐션 터지면 누구보다 신남', type: 'hidden_extrovert' },
        { text: '사소한 것에도 쉽게 감동받음', type: 'hidden_emotional' },
        { text: '생각보다 냉철하게 판단함', type: 'hidden_logical' }
      ]
    },
    {
      id: 5,
      text: '스트레스 받을 때 진짜 내가 원하는 것은?',
      options: [
        { text: '모든 연락 끊고 혼자만의 시간', type: 'hidden_introvert' },
        { text: '시끄러운 곳에서 스트레스 해소', type: 'hidden_extrovert' },
        { text: '누군가에게 속마음 털어놓기', type: 'hidden_emotional' },
        { text: '혼자 문제 분석하고 해결책 찾기', type: 'hidden_logical' }
      ]
    },
    {
      id: 6,
      text: '영화를 볼 때 나는?',
      options: [
        { text: '사람 많은 영화관보다 집에서 혼자', type: 'hidden_introvert' },
        { text: '친구들이랑 떠들면서 보는 게 좋음', type: 'hidden_extrovert' },
        { text: '감동적인 장면에 남몰래 눈물', type: 'hidden_emotional' },
        { text: '스토리 허점 분석하며 봄', type: 'hidden_logical' }
      ]
    },
    {
      id: 7,
      text: '갈등 상황에서 속마음은?',
      options: [
        { text: '"그냥 피하고 싶다..."', type: 'hidden_introvert' },
        { text: '"확 말하고 시원하게 끝내고 싶어!"', type: 'hidden_extrovert' },
        { text: '"왜 내 마음을 몰라줄까... 속상해"', type: 'hidden_emotional' },
        { text: '"감정 빼고 팩트로 정리하자"', type: 'hidden_logical' }
      ]
    },
    {
      id: 8,
      text: '나도 모르게 나오는 진짜 모습은?',
      options: [
        { text: '말수가 적어지고 에너지 충전 필요', type: 'hidden_introvert' },
        { text: '갑자기 텐션 높아지고 수다스러워짐', type: 'hidden_extrovert' },
        { text: '예민해지고 감정적으로 반응', type: 'hidden_emotional' },
        { text: '냉정해지고 분석 모드 돌입', type: 'hidden_logical' }
      ]
    },
    {
      id: 9,
      text: '술 마시면 드러나는 모습은?',
      options: [
        { text: '오히려 더 조용해지거나 졸림', type: 'hidden_introvert' },
        { text: '신나서 분위기 주도함', type: 'hidden_extrovert' },
        { text: '감정적이 되고 눈물 흘릴 수도', type: 'hidden_emotional' },
        { text: '정신은 멀쩡, 술 게임은 전략적으로', type: 'hidden_logical' }
      ]
    },
    {
      id: 10,
      text: '결정을 내릴 때 실제로 작용하는 것은?',
      options: [
        { text: '내 에너지와 컨디션', type: 'hidden_introvert' },
        { text: '그 순간의 기분과 분위기', type: 'hidden_extrovert' },
        { text: '감정적인 끌림과 직감', type: 'hidden_emotional' },
        { text: '논리적 분석과 이해득실', type: 'hidden_logical' }
      ]
    }
  ],
  results: {
    hidden_introvert: {
      type: '숨겨진 내향성',
      title: '🌙 숨겨진 내향인',
      description: '밖에서는 활발해 보이지만, 속마음은 조용한 혼자만의 시간을 갈망하는 숨겨진 내향인입니다!',
      surface: '외향적이고 사교적',
      hidden: '내향적이고 고독을 즐김',
      traits: [
        '겉으로는 사교적이지만 혼자 충전 필요',
        '사람들 만난 후 에너지 고갈',
        '겉과 속이 달라 오해받기도',
        '친한 사람에게만 진짜 모습 보여줌'
      ],
      advice: '억지로 외향적인 척 안 해도 돼요. 혼자만의 시간을 죄책감 없이 즐기세요. 그게 진짜 당신이에요!',
      compatibility: '진짜 내향인과 깊은 대화가 잘 맞아요'
    },
    hidden_extrovert: {
      type: '숨겨진 외향성',
      title: '☀️ 숨겨진 외향인',
      description: '평소에는 조용해 보이지만, 속에는 불꽃 같은 열정이 숨어있는 숨겨진 외향인입니다!',
      surface: '조용하고 차분함',
      hidden: '열정적이고 에너지 넘침',
      traits: [
        '겉으로는 조용하지만 속은 신남',
        '친해지면 완전 다른 사람',
        '혼자 있으면 가끔 심심해짐',
        '폭발하면 누구보다 텐션 높음'
      ],
      advice: '조용한 모습만이 당신이 아니에요. 가끔은 숨겨진 열정을 마음껏 표출해보세요!',
      compatibility: '에너지를 끌어내주는 외향인과 잘 맞아요'
    },
    hidden_emotional: {
      type: '숨겨진 감성',
      title: '💖 숨겨진 감성인',
      description: '이성적으로 보이지만, 속마음은 풍부한 감정으로 가득한 숨겨진 감성인입니다!',
      surface: '논리적이고 냉철함',
      hidden: '감성적이고 예민함',
      traits: [
        '겉으로는 쿨하지만 속으로 상처받음',
        '감동적인 것에 약함',
        '감정을 숨기느라 지칠 때가 있음',
        '사실 공감 능력이 뛰어남'
      ],
      advice: '감정을 숨기지 않아도 돼요. 당신의 풍부한 감성은 큰 장점이에요. 표현해보세요!',
      compatibility: '감정을 잘 받아주는 사람과 잘 맞아요'
    },
    hidden_logical: {
      type: '숨겨진 이성',
      title: '🧠 숨겨진 이성인',
      description: '따뜻해 보이지만, 속으로는 냉철하게 분석하는 숨겨진 이성인입니다!',
      surface: '따뜻하고 공감적',
      hidden: '논리적이고 분석적',
      traits: [
        '겉으로는 공감하지만 속으로는 분석',
        '감정에 휩쓸리지 않음',
        '중요한 순간엔 냉정한 판단',
        '사실 문제 해결 능력이 뛰어남'
      ],
      advice: '따뜻함과 논리, 둘 다 당신의 모습이에요. 상황에 맞게 잘 활용하세요!',
      compatibility: '감정적인 사람을 잘 보완해줄 수 있어요'
    }
  }
};
