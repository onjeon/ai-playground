// 요리 스타일 테스트 데이터
export const cookingStyleTest = {
  id: 'cooking-style',
  title: '요리 스타일 테스트',
  description: '당신의 요리 스타일은? 레시피 정석파, 창작 요리사, 간편식 러버, 외식 전문가 중 나의 유형을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '요리할 때 레시피를?',
      options: [
        { id: 'a', text: '정확히 따른다', score: { recipe: 3, creative: 0, simple: 0, eatout: 0 } },
        { id: 'b', text: '참고만 하고 변형', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '간단한 것만', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '요리를 잘 안 함', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 2,
      text: '냉장고에 재료가 남으면?',
      options: [
        { id: 'a', text: '레시피 찾아서 요리', score: { recipe: 3, creative: 0, simple: 0, eatout: 0 } },
        { id: 'b', text: '창작 요리에 도전', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '볶음밥이나 국', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '그냥 배달 시킴', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 3,
      text: '요리 도구는?',
      options: [
        { id: 'a', text: '전문 도구 보유', score: { recipe: 3, creative: 1, simple: 0, eatout: 0 } },
        { id: 'b', text: '다양하게 구비', score: { recipe: 1, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '기본만 있음', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '거의 없음', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 4,
      text: '손님 초대 시 식사는?',
      options: [
        { id: 'a', text: '정성 들여 요리', score: { recipe: 3, creative: 1, simple: 0, eatout: 0 } },
        { id: 'b', text: '특별 메뉴 개발', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '간단한 음식', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '외식이나 배달', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 5,
      text: '요리에 대한 생각은?',
      options: [
        { id: 'a', text: '기술이 필요한 예술', score: { recipe: 3, creative: 1, simple: 0, eatout: 0 } },
        { id: 'b', text: '창의적 표현 수단', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '생존을 위한 것', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '전문가에게 맡기기', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 6,
      text: '새로운 요리에 도전하는 빈도는?',
      options: [
        { id: 'a', text: '자주, 레시피 따라', score: { recipe: 3, creative: 0, simple: 0, eatout: 0 } },
        { id: 'b', text: '자주, 내 방식으로', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '가끔 간단한 것만', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '거의 안 함', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 7,
      text: '요리 실패했을 때?',
      options: [
        { id: 'a', text: '레시피 다시 확인', score: { recipe: 3, creative: 0, simple: 0, eatout: 0 } },
        { id: 'b', text: '다음엔 더 잘할 수 있음', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '그냥 먹거나 버림', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '역시 요리는 안 맞아', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 8,
      text: '장보기 스타일은?',
      options: [
        { id: 'a', text: '레시피 보고 정확히', score: { recipe: 3, creative: 0, simple: 0, eatout: 0 } },
        { id: 'b', text: '좋아 보이는 것 구매', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '자주 쓰는 것만', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '장 자체를 잘 안 봄', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 9,
      text: '주로 만드는 음식은?',
      options: [
        { id: 'a', text: '제대로 된 한 끼', score: { recipe: 3, creative: 1, simple: 0, eatout: 0 } },
        { id: 'b', text: '창작 퓨전 요리', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '라면, 계란후라이 등', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '물 끓이기 정도', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 10,
      text: '요리 유튜브/레시피 앱을?',
      options: [
        { id: 'a', text: '자주 본다', score: { recipe: 3, creative: 1, simple: 0, eatout: 0 } },
        { id: 'b', text: '영감 받으러 본다', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '가끔 참고', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '관심 없음', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 11,
      text: '요리 시간이 있다면?',
      options: [
        { id: 'a', text: '복잡한 요리에 도전', score: { recipe: 3, creative: 1, simple: 0, eatout: 0 } },
        { id: 'b', text: '새로운 것 실험', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '평소처럼 간단히', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '그래도 외식이 좋아', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
    {
      id: 12,
      text: '요리에 대한 자신감은?',
      options: [
        { id: 'a', text: '레시피대로면 자신 있음', score: { recipe: 3, creative: 0, simple: 0, eatout: 0 } },
        { id: 'b', text: '뭐든 만들 수 있음', score: { recipe: 0, creative: 3, simple: 0, eatout: 0 } },
        { id: 'c', text: '간단한 것은 OK', score: { recipe: 0, creative: 0, simple: 3, eatout: 0 } },
        { id: 'd', text: '요리는 포기', score: { recipe: 0, creative: 0, simple: 0, eatout: 3 } },
      ],
    },
  ],
  results: {
    recipe: {
      id: 'recipe',
      title: '레시피 정석파',
      description: '정확한 레시피를 따라 완벽한 요리를 만드는 당신! 꼼꼼하고 체계적인 성격입니다.',
      traits: ['꼼꼼함', '정확함', '체계적', '완벽 추구'],
      emoji: '📖',
      color: '#3498DB',
    },
    creative: {
      id: 'creative',
      title: '창작 요리사',
      description: '자신만의 레시피를 만들어내는 창의적인 요리사! 실험 정신이 강합니다.',
      traits: ['창의적', '실험 정신', '도전적', '독창성'],
      emoji: '👨‍🍳',
      color: '#E74C3C',
    },
    simple: {
      id: 'simple',
      title: '간편식 러버',
      description: '효율적으로 배를 채우는 실용파! 요리에 시간을 많이 쓰지 않습니다.',
      traits: ['실용적', '효율적', '간단함', '시간 절약'],
      emoji: '🍳',
      color: '#27AE60',
    },
    eatout: {
      id: 'eatout',
      title: '외식 전문가',
      description: '요리보다는 맛집 탐방이 취미인 당신! 먹는 것을 즐기는 미식가입니다.',
      traits: ['미식가', '맛집 탐방', '외식 선호', '편리함 추구'],
      emoji: '🍽️',
      color: '#9B59B6',
    },
  },
};
