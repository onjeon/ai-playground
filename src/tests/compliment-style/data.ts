// compliment-style 테스트 데이터
export const complimentstyleTest = {
  id: 'compliment-style',
  title: '칭찬 스타일 테스트',
  description: '당신은 어떻게 칭찬하고 칭찬받는 걸 좋아하나요? 칭찬 스타일로 알아보는 성격 유형!',
  questions: [
    {
      id: 1,
      text: '친구가 새 옷을 입고 왔을 때 당신의 반응은?',
      options: [
        { text: '"와 진짜 예쁘다! 어디서 샀어?"', type: 'expressive' },
        { text: '"그 색 너한테 잘 어울린다"', type: 'specific' },
        { text: '엄지 척하며 미소 짓는다', type: 'subtle' },
        { text: '"그거 얼마야? 소재 좋아 보인다"', type: 'practical' }
      ]
    },
    {
      id: 2,
      text: '동료가 발표를 잘 했을 때 어떻게 칭찬하나요?',
      options: [
        { text: '"완전 프로페셔널했어! 대박!"', type: 'expressive' },
        { text: '"중간에 예시 든 부분이 특히 좋았어"', type: 'specific' },
        { text: '발표 끝나고 조용히 고개 끄덕이며 눈 마주침', type: 'subtle' },
        { text: '"자료 준비 많이 했구나. 고생했어"', type: 'practical' }
      ]
    },
    {
      id: 3,
      text: '누군가의 요리를 먹었을 때 맛있다면?',
      options: [
        { text: '"이게 뭐야 대박 맛있어!! 또 해줘!"', type: 'expressive' },
        { text: '"간이 딱 맞네, 이 소스가 포인트야"', type: 'specific' },
        { text: '말없이 한 그릇 더 푼다', type: 'subtle' },
        { text: '"레시피 좀 알려줘, 나도 해볼래"', type: 'practical' }
      ]
    },
    {
      id: 4,
      text: '칭찬을 받았을 때 당신의 반응은?',
      options: [
        { text: '"정말? 너무 기뻐! 고마워!"', type: 'expressive' },
        { text: '"어떤 점이 좋았어?"라고 물어본다', type: 'specific' },
        { text: '쑥스럽게 웃으며 "아니야~"', type: 'subtle' },
        { text: '"응, 나름 노력했지"라고 담담하게', type: 'practical' }
      ]
    },
    {
      id: 5,
      text: '후배나 아이가 잘했을 때 칭찬 방식은?',
      options: [
        { text: '하이파이브하며 "최고야!!"', type: 'expressive' },
        { text: '"여기 이 부분 정말 잘했어"', type: 'specific' },
        { text: '미소 지으며 머리 쓰다듬어 준다', type: 'subtle' },
        { text: '"잘했네, 다음엔 여기도 신경 써봐"', type: 'practical' }
      ]
    },
    {
      id: 6,
      text: '친구의 새 프로필 사진에 댓글을 단다면?',
      options: [
        { text: '"미쳤다 진짜 ㅠㅠㅠ 너무 예뻐!!"', type: 'expressive' },
        { text: '"이 각도 찰떡이다. 분위기 좋아"', type: 'specific' },
        { text: '좋아요만 누른다', type: 'subtle' },
        { text: '"배경 어디야? 좋은 데 갔네"', type: 'practical' }
      ]
    },
    {
      id: 7,
      text: '당신이 가장 듣고 싶은 칭찬은?',
      options: [
        { text: '"너 진짜 대단해! 최고야!"', type: 'expressive' },
        { text: '"네 이런 점이 정말 특별해"', type: 'specific' },
        { text: '말보다 행동으로 인정받는 것', type: 'subtle' },
        { text: '"네 덕분에 일이 잘 됐어"', type: 'practical' }
      ]
    },
    {
      id: 8,
      text: '연인이나 가까운 사람에게 칭찬할 때는?',
      options: [
        { text: '"사랑해! 넌 세상에서 제일 멋져!"', type: 'expressive' },
        { text: '"오늘 네가 한 말이 정말 감동이었어"', type: 'specific' },
        { text: '손 잡아주거나 안아준다', type: 'subtle' },
        { text: '"네가 있어서 든든해"', type: 'practical' }
      ]
    },
    {
      id: 9,
      text: '칭찬이 어색하게 느껴질 때는?',
      options: [
        { text: '그런 적 없다, 칭찬은 많이 할수록 좋다', type: 'expressive' },
        { text: '구체적이지 않은 빈말처럼 느껴질 때', type: 'specific' },
        { text: '너무 과하거나 부담스러울 때', type: 'subtle' },
        { text: '아부처럼 느껴질 때', type: 'practical' }
      ]
    },
    {
      id: 10,
      text: '칭찬에 대한 당신의 생각은?',
      options: [
        { text: '"칭찬은 고래도 춤추게 한다!"', type: 'expressive' },
        { text: '"진정성 있는 칭찬이 중요해"', type: 'specific' },
        { text: '"말보다 마음이 전해지면 돼"', type: 'subtle' },
        { text: '"칭찬보다 실질적 보상이 낫지"', type: 'practical' }
      ]
    }
  ],
  results: {
    expressive: {
      type: '열정적 칭찬러',
      title: '🎉 열정적 칭찬러',
      description: '칭찬은 크게, 확실하게! 에너지 넘치는 칭찬으로 주변을 환하게 만듭니다.',
      traits: [
        '긍정적이고 에너지가 넘친다',
        '감정 표현이 풍부하다',
        '분위기 메이커 역할을 한다',
        '진심을 숨기지 않는다'
      ],
      advice: '열정적인 칭찬은 큰 힘이 되지만, 가끔은 조용한 진심도 전해보세요. 상대방 스타일에 맞춘 칭찬이 더 와닿을 수 있어요!'
    },
    specific: {
      type: '디테일 칭찬러',
      title: '🔍 디테일 칭찬러',
      description: '구체적이고 정확하게! 무엇이 좋았는지 꼭 집어서 칭찬하는 타입입니다.',
      traits: [
        '관찰력이 뛰어나다',
        '분석적인 사고를 한다',
        '진정성을 중요시한다',
        '섬세하고 세심한 성격'
      ],
      advice: '구체적인 칭찬은 정말 값지지만, 때로는 단순하게 "좋아!"라고 해도 충분해요. 마음이 전해지면 됩니다!'
    },
    subtle: {
      type: '은은한 칭찬러',
      title: '🌙 은은한 칭찬러',
      description: '말보다 행동으로! 조용하지만 깊은 인정을 표현하는 타입입니다.',
      traits: [
        '내성적이지만 깊은 정이 있다',
        '행동으로 마음을 표현한다',
        '진심 어린 사람',
        '쑥스러움이 많은 편'
      ],
      advice: '마음이 있어도 표현하지 않으면 전달이 안 될 때가 있어요. 가끔은 말로도 칭찬해보세요, 상대방이 더 기뻐할 거예요!'
    },
    practical: {
      type: '실용적 칭찬러',
      title: '💼 실용적 칭찬러',
      description: '칭찬도 현실적으로! 노력과 결과를 인정하는 실질적인 칭찬을 합니다.',
      traits: [
        '현실적이고 실용적인 성격',
        '과정과 노력을 중시한다',
        '빈말을 싫어한다',
        '객관적인 시각을 가지고 있다'
      ],
      advice: '실용적인 칭찬도 좋지만, 가끔은 감정적인 표현도 시도해보세요. "고생했어"보다 "정말 대단해!"가 더 힘이 될 때도 있답니다!'
    }
  }
};
