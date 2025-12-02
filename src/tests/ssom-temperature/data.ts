// ssom-temperature 테스트 데이터
export const ssomtemperatureTest = {
  id: 'ssom-temperature',
  title: '썸 온도 체크 테스트',
  description: '지금 타고 있는 썸의 온도는 몇 도? 상대방의 관심도와 썸의 진행 상황을 체크해봅니다!',
  questions: [
    {
      id: 1,
      text: '상대방의 연락 빈도는?',
      options: [
        { text: '거의 매일, 먼저 연락 올 때도 많음', type: 'hot' },
        { text: '자주 하지만 내가 더 먼저 하는 편', type: 'warm' },
        { text: '가끔, 답장은 잘 하는데 먼저는 안 함', type: 'cool' },
        { text: '드문드문, 답장도 늦는 편', type: 'cold' }
      ]
    },
    {
      id: 2,
      text: '대화할 때 상대방의 반응은?',
      options: [
        { text: '리액션 좋고, 질문도 많이 함', type: 'hot' },
        { text: '대화는 잘 하지만 딱 그 정도', type: 'warm' },
        { text: '대답은 하는데 대화가 길어지진 않음', type: 'cool' },
        { text: '단답이 많거나 대화가 끊김', type: 'cold' }
      ]
    },
    {
      id: 3,
      text: '만남 제안을 하면?',
      options: [
        { text: '적극적으로 OK, 상대도 제안함', type: 'hot' },
        { text: '대체로 응하지만 내가 더 적극적', type: 'warm' },
        { text: '바쁘다고 미루다가 가끔 만남', type: 'cool' },
        { text: '거절하거나 계속 미룸', type: 'cold' }
      ]
    },
    {
      id: 4,
      text: '상대방이 당신의 일상에 관심을 보이나요?',
      options: [
        { text: '뭐 했는지, 밥 먹었는지 자주 물어봄', type: 'hot' },
        { text: '가끔 물어보는 편', type: 'warm' },
        { text: '내가 얘기하면 반응하는 정도', type: 'cool' },
        { text: '별로 관심 없어 보임', type: 'cold' }
      ]
    },
    {
      id: 5,
      text: '둘이 만나면 분위기는?',
      options: [
        { text: '설레고 자연스러움, 시간 가는 줄 모름', type: 'hot' },
        { text: '편하고 좋지만 썸인지는 모르겠음', type: 'warm' },
        { text: '어색하거나 대화가 끊길 때가 있음', type: 'cool' },
        { text: '별로 안 만남 / 만나도 어색', type: 'cold' }
      ]
    },
    {
      id: 6,
      text: 'SNS에서 상대방의 반응은?',
      options: [
        { text: '내 게시물에 좋아요/댓글 적극적', type: 'hot' },
        { text: '가끔 반응함', type: 'warm' },
        { text: '거의 반응 없음', type: 'cool' },
        { text: '모르겠음 / 서로 안 팔로우', type: 'cold' }
      ]
    },
    {
      id: 7,
      text: '스킨십이나 거리감은?',
      options: [
        { text: '자연스러운 터치, 가까이 있으려 함', type: 'hot' },
        { text: '가끔 가벼운 스킨십', type: 'warm' },
        { text: '적당한 거리 유지', type: 'cool' },
        { text: '거리감 있음, 스킨십 없음', type: 'cold' }
      ]
    },
    {
      id: 8,
      text: '상대가 다른 이성 얘기를 할 때?',
      options: [
        { text: '안 함 / 나에게만 관심 있는 듯', type: 'hot' },
        { text: '가끔 하지만 의미 없어 보임', type: 'warm' },
        { text: '종종 다른 이성 얘기를 함', type: 'cool' },
        { text: '다른 이성에게 더 관심 있어 보임', type: 'cold' }
      ]
    },
    {
      id: 9,
      text: '상대방의 미래 계획에 당신이 포함되나요?',
      options: [
        { text: '"우리 나중에 같이~" 이런 말 자주 함', type: 'hot' },
        { text: '가끔 같이 뭔가 하자는 말을 함', type: 'warm' },
        { text: '본인 얘기만 함', type: 'cool' },
        { text: '나와 미래 얘기를 안 함', type: 'cold' }
      ]
    },
    {
      id: 10,
      text: '솔직히, 상대방이 나를 좋아하는 것 같아요?',
      options: [
        { text: '거의 확실함, 느껴짐', type: 'hot' },
        { text: '좋아하는 것 같기도...?', type: 'warm' },
        { text: '잘 모르겠음, 헷갈림', type: 'cool' },
        { text: '아닌 것 같음...', type: 'cold' }
      ]
    }
  ],
  results: {
    hot: {
      type: '뜨거운 썸',
      title: '🔥 썸 온도: 80°C 이상!',
      description: '이건 거의 연애 직전! 서로 호감이 확실해 보여요. 고백해도 될 타이밍입니다!',
      temperature: '80°C 이상',
      status: '연애 직전',
      signals: [
        '연락 빈도와 질이 높음',
        '만남에 적극적',
        '스킨십이 자연스러움',
        '미래 얘기에 당신이 포함됨'
      ],
      advice: '지금이 타이밍이에요! 용기를 내서 마음을 표현해보세요.',
      nextStep: '고백 또는 관계 정의 대화'
    },
    warm: {
      type: '따뜻한 썸',
      title: '☀️ 썸 온도: 50~70°C',
      description: '호감은 있어 보이지만 아직 확실하지 않은 단계. 조금 더 시그널을 주고받아 보세요!',
      temperature: '50~70°C',
      status: '썸 진행 중',
      signals: [
        '연락은 잘 되지만 애매함',
        '만나면 좋지만 진전은 느림',
        '호감인지 친절인지 헷갈림',
        '썸인 것 같기도 아닌 것 같기도'
      ],
      advice: '조금 더 적극적으로 시그널을 보내보세요. 상대의 반응을 확인해볼 때!',
      nextStep: '더 많은 만남과 대화로 확인'
    },
    cool: {
      type: '미지근한 썸',
      title: '🌊 썸 온도: 25~40°C',
      description: '썸인지 아닌지 애매한 상태. 상대방의 관심이 불확실해 보여요.',
      temperature: '25~40°C',
      status: '불확실',
      signals: [
        '연락은 되지만 시큰둥',
        '만남이 잘 성사되지 않음',
        '대화가 길어지지 않음',
        '내가 더 관심 있는 것 같음'
      ],
      advice: '한 발 물러서서 상대의 반응을 살펴보세요. 무리하게 밀어붙이지 마세요.',
      nextStep: '거리를 두고 상대 반응 확인'
    },
    cold: {
      type: '차가운 썸',
      title: '🧊 썸 온도: 0~20°C',
      description: '솔직히... 이건 썸이 아닐 수도 있어요. 상대방의 관심이 낮아 보입니다.',
      temperature: '0~20°C',
      status: '관심 낮음',
      signals: [
        '연락이 잘 안 됨',
        '만남을 계속 미룸',
        '대화가 단답이거나 끊김',
        '다른 이성에게 관심 있어 보임'
      ],
      advice: '이 썸에 너무 매달리지 마세요. 당신에게 진심인 사람을 찾아보는 게 나을 수도 있어요.',
      nextStep: '정리하거나, 확실하게 물어보기'
    }
  }
};
