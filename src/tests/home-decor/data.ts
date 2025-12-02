// home-decor 테스트 데이터
export const homeDecor = {
  id: 'home-decor',
  title: '인테리어 성격 테스트',
  description: '당신의 공간 취향은? 인테리어 스타일로 보는 당신의 성격!',
  questions: [
    {
      id: 1,
      text: '이상적인 방 분위기는?',
      options: [
        { text: '깔끔하고 미니멀한', type: 'minimal' },
        { text: '따뜻하고 아늑한', type: 'cozy' },
        { text: '개성 있고 독특한', type: 'eclectic' },
        { text: '모던하고 세련된', type: 'modern' }
      ]
    },
    {
      id: 2,
      text: '벽 장식 스타일은?',
      options: [
        { text: '깨끗하게, 거의 없이', type: 'minimal' },
        { text: '사진, 그림 등 따뜻하게', type: 'cozy' },
        { text: '독특한 아이템들로 가득', type: 'eclectic' },
        { text: '포인트 있게 세련되게', type: 'modern' }
      ]
    },
    {
      id: 3,
      text: '가구 선택 기준은?',
      options: [
        { text: '심플하고 기능적인', type: 'minimal' },
        { text: '편안하고 포근한', type: 'cozy' },
        { text: '빈티지나 유니크한', type: 'eclectic' },
        { text: '디자인이 예쁜', type: 'modern' }
      ]
    },
    {
      id: 4,
      text: '선호하는 색상 조합은?',
      options: [
        { text: '화이트, 그레이, 블랙', type: 'minimal' },
        { text: '베이지, 우드, 따뜻한 톤', type: 'cozy' },
        { text: '다양한 색의 조합', type: 'eclectic' },
        { text: '모노톤에 포인트 컬러', type: 'modern' }
      ]
    },
    {
      id: 5,
      text: '수납/정리 스타일은?',
      options: [
        { text: '보이지 않게 깔끔히', type: 'minimal' },
        { text: '수납 + 디스플레이', type: 'cozy' },
        { text: '보이는 곳에 개성 있게', type: 'eclectic' },
        { text: '시스템 수납으로 정돈', type: 'modern' }
      ]
    },
    {
      id: 6,
      text: '조명 취향은?',
      options: [
        { text: '밝고 깨끗한 조명', type: 'minimal' },
        { text: '따뜻하고 은은한 조명', type: 'cozy' },
        { text: '독특한 디자인 조명', type: 'eclectic' },
        { text: '간접 조명, 무드등', type: 'modern' }
      ]
    },
    {
      id: 7,
      text: '공간에서 중요한 것은?',
      options: [
        { text: '여백과 정돈', type: 'minimal' },
        { text: '편안함과 온기', type: 'cozy' },
        { text: '나만의 개성 표현', type: 'eclectic' },
        { text: '세련됨과 분위기', type: 'modern' }
      ]
    },
    {
      id: 8,
      text: '소품 스타일은?',
      options: [
        { text: '최소한으로, 꼭 필요한 것만', type: 'minimal' },
        { text: '감성적인 소품들', type: 'cozy' },
        { text: '수집품, 여행 기념품 등', type: 'eclectic' },
        { text: '디자인 소품, 오브제', type: 'modern' }
      ]
    },
    {
      id: 9,
      text: '식물 배치는?',
      options: [
        { text: '1-2개, 심플하게', type: 'minimal' },
        { text: '여기저기 생기 있게', type: 'cozy' },
        { text: '독특한 화분에 다양하게', type: 'eclectic' },
        { text: '인테리어 포인트로', type: 'modern' }
      ]
    },
    {
      id: 10,
      text: '당신의 공간 철학은?',
      options: [
        { text: '적을수록 좋다', type: 'minimal' },
        { text: '집은 쉼터다', type: 'cozy' },
        { text: '나를 표현하는 곳', type: 'eclectic' },
        { text: '감각적인 공간', type: 'modern' }
      ]
    }
  ],
  results: {
    minimal: {
      type: '미니멀리스트',
      title: '⬜ 미니멀리스트',
      description: 'Less is more! 깔끔하고 정돈된 공간을 사랑하는 당신.',
      traits: ['깔끔함', '여백 사랑', '정리 정돈', '단순함'],
      decorStyle: '미니멀',
      personality: '명확하고 효율적인 사고, 본질을 추구',
      advice: '미니멀 공간은 마음도 정돈해줘요. 이 깔끔함을 유지하세요!'
    },
    cozy: {
      type: '코지 러버',
      title: '🏡 코지 러버',
      description: '따뜻하고 아늑한 공간을 사랑하는 당신! 집이 진정한 쉼터예요.',
      traits: ['따뜻함', '편안함', '포근함', '정서적'],
      decorStyle: '내추럴/코지',
      personality: '따뜻하고 정서적, 관계를 중시',
      advice: '당신의 공간은 힐링 그 자체예요. 이 따뜻함을 지켜가세요!'
    },
    eclectic: {
      type: '에클레틱 아티스트',
      title: '🎨 에클레틱 아티스트',
      description: '규칙 없는 자유로움! 개성 넘치는 공간을 만드는 당신.',
      traits: ['개성', '창의성', '수집', '독특함'],
      decorStyle: '에클레틱/빈티지',
      personality: '창의적이고 자유로운 영혼, 틀에 얽매이지 않음',
      advice: '당신만의 개성이 공간에 담겨있어요. 그 유니크함을 계속 표현하세요!'
    },
    modern: {
      type: '모던 스타일리스트',
      title: '🖤 모던 스타일리스트',
      description: '세련되고 감각적인 공간을 추구하는 당신! 트렌드에 민감해요.',
      traits: ['세련됨', '감각적', '트렌디', '심미적'],
      decorStyle: '모던/컨템포러리',
      personality: '감각적이고 심미안이 뛰어남, 트렌드 선도',
      advice: '당신의 공간은 갤러리 같아요. 이 감각을 계속 발휘하세요!'
    }
  }
};
