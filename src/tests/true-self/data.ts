// true-self 테스트 데이터
export const trueselfTest = {
  id: 'true-self',
  title: '진짜 나 찾기 테스트',
  description: '사회적 가면 뒤에 숨겨진 진짜 당신은? 내면의 진정한 모습을 탐색해봅니다!',
  questions: [
    {
      id: 1,
      text: '혼자 있을 때의 나와 사람들 앞에서의 나는?',
      options: [
        { text: '거의 같다, 일관된 편', type: 'authentic' },
        { text: '약간 다르다, 상황에 맞춤', type: 'adaptive' },
        { text: '꽤 다르다, 의식적으로 바꿈', type: 'mask' },
        { text: '완전 다르다, 별개의 인물 같음', type: 'hidden' }
      ]
    },
    {
      id: 2,
      text: '남들이 모르는 나만의 모습이 있나요?',
      options: [
        { text: '거의 없다, 오픈북 스타일', type: 'authentic' },
        { text: '조금 있다, 친한 사람만 아는', type: 'adaptive' },
        { text: '꽤 있다, 숨기는 면이 있음', type: 'mask' },
        { text: '많다, 진짜 나를 아는 사람 없음', type: 'hidden' }
      ]
    },
    {
      id: 3,
      text: '자신의 진짜 감정을 표현하는 편인가요?',
      options: [
        { text: '솔직하게 표현하는 편', type: 'authentic' },
        { text: '상황 봐서 적당히', type: 'adaptive' },
        { text: '잘 숨기는 편', type: 'mask' },
        { text: '거의 표현 안 함', type: 'hidden' }
      ]
    },
    {
      id: 4,
      text: '남의 시선이나 평가에 대해?',
      options: [
        { text: '크게 신경 안 씀', type: 'authentic' },
        { text: '어느 정도 신경 쓰임', type: 'adaptive' },
        { text: '많이 신경 씀', type: 'mask' },
        { text: '항상 의식하고 행동함', type: 'hidden' }
      ]
    },
    {
      id: 5,
      text: '"진짜 너는 어떤 사람이야?"라고 물으면?',
      options: [
        { text: '바로 대답할 수 있다', type: 'authentic' },
        { text: '잠깐 생각하고 대답', type: 'adaptive' },
        { text: '어떻게 대답해야 할지 모르겠음', type: 'mask' },
        { text: '나도 잘 모르겠다', type: 'hidden' }
      ]
    },
    {
      id: 6,
      text: '좋아하는 것과 싫어하는 것에 대해?',
      options: [
        { text: '명확하게 알고 표현한다', type: 'authentic' },
        { text: '대체로 알지만 상황에 따라', type: 'adaptive' },
        { text: '남들에게 맞추는 편', type: 'mask' },
        { text: '뭘 좋아하는지도 모르겠음', type: 'hidden' }
      ]
    },
    {
      id: 7,
      text: 'SNS에 올리는 모습과 실제 내 모습은?',
      options: [
        { text: '거의 같다', type: 'authentic' },
        { text: '약간의 편집이 있다', type: 'adaptive' },
        { text: '꽤 다르다, 꾸민 모습', type: 'mask' },
        { text: 'SNS는 완전 다른 인물', type: 'hidden' }
      ]
    },
    {
      id: 8,
      text: '혼자만의 시간에 주로 하는 것은?',
      options: [
        { text: '좋아하는 취미에 몰입', type: 'authentic' },
        { text: '쉬거나 할 일 정리', type: 'adaptive' },
        { text: '남들 SNS 보거나 무의미하게', type: 'mask' },
        { text: '공허함을 느끼며 시간 보냄', type: 'hidden' }
      ]
    },
    {
      id: 9,
      text: '나 자신에게 솔직한 편인가요?',
      options: [
        { text: '그렇다, 스스로를 잘 안다', type: 'authentic' },
        { text: '대체로 그렇다', type: 'adaptive' },
        { text: '아닌 것 같다, 회피하는 면이 있음', type: 'mask' },
        { text: '잘 모르겠다, 나도 내가 모름', type: 'hidden' }
      ]
    },
    {
      id: 10,
      text: '진짜 나를 찾고 싶은 마음은?',
      options: [
        { text: '이미 찾은 것 같다', type: 'authentic' },
        { text: '찾아가는 중', type: 'adaptive' },
        { text: '찾고 싶지만 어렵다', type: 'mask' },
        { text: '너무 막막하다', type: 'hidden' }
      ]
    }
  ],
  results: {
    authentic: {
      type: '진정성 있는 자아',
      title: '🌟 진정성 있는 자아',
      description: '보이는 그대로가 나! 자신을 잘 알고 솔직하게 표현하는 타입입니다.',
      traits: [
        '자기 이해도가 높다',
        '솔직한 성격',
        '일관성 있는 모습',
        '자존감이 안정적'
      ],
      advice: '자신을 잘 알고 있어요! 그 모습 그대로 살아가세요. 가끔 유연함도 필요할 때가 있어요.'
    },
    adaptive: {
      type: '유연한 자아',
      title: '🌊 유연한 자아',
      description: '상황에 맞게 조절! 자신을 알면서도 상황에 따라 적응하는 균형 잡힌 타입입니다.',
      traits: [
        '적응력이 좋다',
        '상황 판단을 잘함',
        '유연한 사고',
        '사회성이 좋음'
      ],
      advice: '균형 잡힌 모습이에요! 하지만 가끔은 상황 관계없이 진짜 원하는 것을 표현해보세요.'
    },
    mask: {
      type: '가면을 쓴 자아',
      title: '🎭 가면을 쓴 자아',
      description: '진짜 나는 숨겨져 있어요. 사회적 기대에 맞춰 가면을 쓰고 있는 타입입니다.',
      traits: [
        '남의 시선을 의식함',
        '진짜 감정을 숨기는 편',
        '피로감을 자주 느낌',
        '자기 정체성에 고민'
      ],
      advice: '가면을 벗어도 괜찮아요. 진짜 나를 보여줘도 사랑받을 수 있어요. 조금씩 진심을 표현해보세요.'
    },
    hidden: {
      type: '미지의 자아',
      title: '❓ 미지의 자아',
      description: '나도 나를 잘 모르겠어요. 진정한 자아를 탐색하는 여정이 필요한 타입입니다.',
      traits: [
        '자기 정체성 혼란',
        '공허함을 느낄 때가 많음',
        '타인에게 맞추는 경향',
        '내면 탐색이 필요함'
      ],
      advice: '천천히 나를 알아가도 괜찮아요. 혼자 고민하지 말고, 필요하다면 전문가와 함께 자신을 탐색해보세요.'
    }
  }
};
