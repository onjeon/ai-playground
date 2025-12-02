// bookmark-habit 테스트 데이터
export const bookmarkhabitTest = {
  id: 'bookmark-habit',
  title: '북마크 습관 테스트',
  description: '당신의 북마크/저장 습관으로 알아보는 성격 유형! 나중에 볼 것들이 얼마나 쌓여있나요?',
  questions: [
    {
      id: 1,
      text: '흥미로운 글이나 영상을 발견했을 때 당신은?',
      options: [
        { text: '바로 저장하고 나중에 본다', type: 'collector' },
        { text: '일단 끝까지 보고 정말 좋으면 저장한다', type: 'curator' },
        { text: '저장 안 하고 기억으로만 남긴다', type: 'minimalist' },
        { text: '친구한테 바로 공유한다', type: 'sharer' }
      ]
    },
    {
      id: 2,
      text: '당신의 북마크/저장 폴더 상태는?',
      options: [
        { text: '수백~수천 개가 정리 없이 쌓여있다', type: 'collector' },
        { text: '카테고리별로 깔끔하게 정리되어 있다', type: 'curator' },
        { text: '10개 미만으로 최소한만 있다', type: 'minimalist' },
        { text: '저장보다 공유 기록이 더 많다', type: 'sharer' }
      ]
    },
    {
      id: 3,
      text: '저장해둔 콘텐츠를 실제로 다시 보는 빈도는?',
      options: [
        { text: '거의 안 본다... 저장만 한다', type: 'collector' },
        { text: '주기적으로 정리하며 다시 본다', type: 'curator' },
        { text: '저장을 잘 안 해서 볼 것도 없다', type: 'minimalist' },
        { text: '공유한 건 친구 반응 보러 다시 간다', type: 'sharer' }
      ]
    },
    {
      id: 4,
      text: '"나중에 읽을 글" 탭이 있다면?',
      options: [
        { text: '수십 개가 쌓여서 브라우저가 무겁다', type: 'collector' },
        { text: '5개 이하로 관리하며 실제로 읽는다', type: 'curator' },
        { text: '그런 기능을 쓰지 않는다', type: 'minimalist' },
        { text: '탭보다 단톡방에 링크를 더 많이 던진다', type: 'sharer' }
      ]
    },
    {
      id: 5,
      text: 'SNS에서 마음에 드는 게시물을 보면?',
      options: [
        { text: '저장 누르고 넘어간다', type: 'collector' },
        { text: '저장 + 컬렉션 분류까지 한다', type: 'curator' },
        { text: '좋아요만 누른다', type: 'minimalist' },
        { text: '스토리나 DM으로 공유한다', type: 'sharer' }
      ]
    },
    {
      id: 6,
      text: '유용한 정보를 발견했을 때 드는 생각은?',
      options: [
        { text: '"일단 저장! 언젠간 쓸모있겠지"', type: 'collector' },
        { text: '"이건 어느 폴더에 넣어야 하지?"', type: 'curator' },
        { text: '"기억해두면 되지, 굳이 저장할 필요 없어"', type: 'minimalist' },
        { text: '"이거 누구한테 보내주면 좋아하겠다!"', type: 'sharer' }
      ]
    },
    {
      id: 7,
      text: '핸드폰 갤러리나 스크린샷 폴더는?',
      options: [
        { text: '캡처한 정보들로 가득하다', type: 'collector' },
        { text: '앨범별로 정리되어 있다', type: 'curator' },
        { text: '사진 외에는 거의 없다', type: 'minimalist' },
        { text: '친구들한테 보낸 것들 위주다', type: 'sharer' }
      ]
    },
    {
      id: 8,
      text: '온라인 쇼핑몰 찜 목록은?',
      options: [
        { text: '언제 담았는지 모를 상품들이 수십 개', type: 'collector' },
        { text: '구매 예정인 것만 정리해서 담아둔다', type: 'curator' },
        { text: '찜 기능을 거의 안 쓴다', type: 'minimalist' },
        { text: '"이거 어때?" 하며 링크를 자주 보낸다', type: 'sharer' }
      ]
    },
    {
      id: 9,
      text: '저장해둔 것들을 정리해야겠다고 느낄 때는?',
      options: [
        { text: '저장 공간이 부족할 때', type: 'collector' },
        { text: '주기적으로 정리 시간을 갖는다', type: 'curator' },
        { text: '정리할 게 별로 없다', type: 'minimalist' },
        { text: '공유할 만한 거 찾다가 정리하게 된다', type: 'sharer' }
      ]
    },
    {
      id: 10,
      text: '당신에게 "저장하기" 버튼이란?',
      options: [
        { text: '미래의 나를 위한 선물', type: 'collector' },
        { text: '체계적인 지식 관리 도구', type: 'curator' },
        { text: '거의 누르지 않는 버튼', type: 'minimalist' },
        { text: '공유하기 전 임시 저장소', type: 'sharer' }
      ]
    }
  ],
  results: {
    collector: {
      type: '디지털 수집가',
      title: '🗂️ 디지털 수집가',
      description: '일단 저장하고 보는 타입! 언젠간 쓸모있을 거라 믿으며 모든 것을 수집합니다.',
      traits: [
        '호기심이 많고 다양한 분야에 관심이 있다',
        '"나중에"를 위해 준비하는 성격',
        '버리는 것을 아까워하는 편',
        '정보에 대한 FOMO가 있다'
      ],
      advice: '가끔은 저장한 것들을 돌아보고 정리하는 시간을 가져보세요. 진짜 필요한 것과 그렇지 않은 것을 구분하면 더 가볍게 살 수 있어요!'
    },
    curator: {
      type: '체계적 큐레이터',
      title: '📚 체계적 큐레이터',
      description: '저장도 예술! 분류와 정리의 달인으로 필요할 때 바로 찾을 수 있습니다.',
      traits: [
        '체계적이고 조직적인 성격',
        '효율성을 중요시한다',
        '완벽주의 성향이 있다',
        '계획적으로 행동하는 편'
      ],
      advice: '정리에 너무 많은 시간을 쓰진 않나요? 때로는 완벽하지 않아도 괜찮아요. 정리 자체가 목적이 되지 않도록 주의하세요!'
    },
    minimalist: {
      type: '디지털 미니멀리스트',
      title: '✨ 디지털 미니멀리스트',
      description: '필요한 것만! 불필요한 저장 없이 가볍게 디지털 생활을 즐깁니다.',
      traits: [
        '현재에 집중하는 성격',
        '단순함을 좋아한다',
        '결단력이 있는 편',
        '과거에 연연하지 않는다'
      ],
      advice: '미니멀한 생활은 좋지만, 가끔은 유용한 정보를 저장해두면 나중에 도움이 될 수 있어요. 정말 좋은 건 기록해두는 것도 나쁘지 않답니다!'
    },
    sharer: {
      type: '소셜 공유러',
      title: '🔗 소셜 공유러',
      description: '좋은 건 나누는 게 진리! 혼자 보기 아까운 건 바로 공유하는 타입입니다.',
      traits: [
        '사교적이고 관계를 중시한다',
        '나눔의 기쁨을 아는 성격',
        '트렌드에 민감한 편',
        '소통과 연결을 좋아한다'
      ],
      advice: '공유 전에 상대방이 관심있어 할지 한번 더 생각해보는 건 어떨까요? 가끔은 나만의 것으로 간직하는 것도 특별할 수 있어요!'
    }
  }
};
