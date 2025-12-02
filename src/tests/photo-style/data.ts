// photo-style 테스트 데이터
export const photostyleTest = {
  id: 'photo-style',
  title: '사진 스타일 테스트',
  description: '사진 찍는 습관으로 알아보는 당신의 성격! 어떤 사진을 주로 찍으시나요?',
  questions: [
    {
      id: 1,
      text: '여행 가면 사진을 주로 얼마나 찍나요?',
      options: [
        { text: '수백 장, 모든 순간을 남김', type: 'heavy' },
        { text: '기념이 될 만한 장면만 적당히', type: 'balanced' },
        { text: '거의 안 찍고 눈으로 담음', type: 'minimal' },
        { text: '남이 찍어주면 찍힘', type: 'passive' }
      ]
    },
    {
      id: 2,
      text: '셀카에 대한 생각은?',
      options: [
        { text: '자주 찍고 SNS에도 올림', type: 'heavy' },
        { text: '가끔, 기분 좋을 때', type: 'balanced' },
        { text: '거의 안 찍음', type: 'minimal' },
        { text: '남이 찍어주는 게 나음', type: 'passive' }
      ]
    },
    {
      id: 3,
      text: '맛있는 음식이 나왔을 때?',
      options: [
        { text: '일단 사진부터! 여러 각도로', type: 'heavy' },
        { text: '예쁘게 나왔으면 한 장 정도', type: 'balanced' },
        { text: '바로 먹음, 사진 안 찍음', type: 'minimal' },
        { text: '같이 온 사람이 찍으면 따라 찍음', type: 'passive' }
      ]
    },
    {
      id: 4,
      text: '사진을 찍은 후 주로?',
      options: [
        { text: '바로 필터/보정 후 SNS 업로드', type: 'heavy' },
        { text: '나중에 골라서 정리', type: 'balanced' },
        { text: '찍어두고 잘 안 봄', type: 'minimal' },
        { text: '다른 사람이 보내주면 저장', type: 'passive' }
      ]
    },
    {
      id: 5,
      text: '핸드폰 갤러리 상태는?',
      options: [
        { text: '수천 장, 용량 부족 자주 경험', type: 'heavy' },
        { text: '정리된 앨범으로 관리 중', type: 'balanced' },
        { text: '사진이 별로 없음', type: 'minimal' },
        { text: '남이 보내준 사진 위주', type: 'passive' }
      ]
    },
    {
      id: 6,
      text: '사진 찍을 때 가장 중요한 것은?',
      options: [
        { text: '각도, 조명, 구도 다 중요함', type: 'heavy' },
        { text: '추억이 담기면 됨', type: 'balanced' },
        { text: '그냥 순간 포착', type: 'minimal' },
        { text: '내가 잘 나오는 것', type: 'passive' }
      ]
    },
    {
      id: 7,
      text: '단체 사진 찍을 때 당신은?',
      options: [
        { text: '찍는 역할을 자처함', type: 'heavy' },
        { text: '상황에 따라 찍기도 하고 찍히기도', type: 'balanced' },
        { text: '찍히기만 함', type: 'minimal' },
        { text: '가능하면 빠지고 싶음', type: 'passive' }
      ]
    },
    {
      id: 8,
      text: '과거 사진을 보는 빈도는?',
      options: [
        { text: '자주 봄, 추억 돌아보기 좋아함', type: 'heavy' },
        { text: '가끔, 생각날 때', type: 'balanced' },
        { text: '거의 안 봄', type: 'minimal' },
        { text: '남이 보여주면 같이 봄', type: 'passive' }
      ]
    },
    {
      id: 9,
      text: '사진이 마음에 안 들면?',
      options: [
        { text: '다시 찍음, 마음에 들 때까지', type: 'heavy' },
        { text: '한두 번 더 시도하고 포기', type: 'balanced' },
        { text: '그냥 그러려니 함', type: 'minimal' },
        { text: '신경 안 씀', type: 'passive' }
      ]
    },
    {
      id: 10,
      text: '사진에 대한 당신의 생각은?',
      options: [
        { text: '순간을 영원히 남기는 것', type: 'heavy' },
        { text: '좋은 추억을 기록하는 것', type: 'balanced' },
        { text: '있으면 좋고 없어도 괜찮음', type: 'minimal' },
        { text: '다른 사람이 찍어주면 감사', type: 'passive' }
      ]
    }
  ],
  results: {
    heavy: {
      type: '열정적 포토그래퍼',
      title: '📸 열정적 포토그래퍼',
      description: '모든 순간을 사진으로! 기록하고 공유하는 것을 사랑하는 타입입니다.',
      traits: [
        '디테일에 관심이 많다',
        '추억을 소중히 여김',
        '창의적인 면이 있다',
        '공유하는 것을 좋아함'
      ],
      advice: '사진도 좋지만 가끔은 눈으로만 담아보세요. 순간에 더 집중할 수 있어요!'
    },
    balanced: {
      type: '균형 잡힌 기록자',
      title: '🖼️ 균형 잡힌 기록자',
      description: '의미 있는 순간만 선별해서! 추억과 현재를 균형 있게 즐기는 타입입니다.',
      traits: [
        '균형 감각이 좋다',
        '선택과 집중을 잘함',
        '추억을 소중히 하지만 집착은 않음',
        '실용적인 성격'
      ],
      advice: '좋은 밸런스예요! 가끔은 평범한 일상도 기록해보세요, 나중에 소중해질 수 있어요.'
    },
    minimal: {
      type: '순간 감상러',
      title: '👁️ 순간 감상러',
      description: '눈으로 담는 게 최고! 사진보다 직접 경험하는 것을 중시하는 타입입니다.',
      traits: [
        '현재에 충실하다',
        '물질적 기록보다 경험 중시',
        '미니멀한 성향',
        '내면에 집중하는 편'
      ],
      advice: '눈으로 담는 것도 좋지만, 가끔은 사진으로 남겨두면 나중에 기억을 더 선명히 할 수 있어요!'
    },
    passive: {
      type: '피사체형 인간',
      title: '🎭 피사체형 인간',
      description: '찍히는 게 더 편해! 사진은 남에게 맡기고 즐기는 것에 집중하는 타입입니다.',
      traits: [
        '편안한 성격',
        '다른 사람에게 맡기는 것을 편해함',
        '카메라 앞이 자연스러움',
        '순간을 즐기는 편'
      ],
      advice: '가끔은 직접 카메라를 들어보세요! 내가 본 시각으로 순간을 남기는 것도 특별해요.'
    }
  }
};
