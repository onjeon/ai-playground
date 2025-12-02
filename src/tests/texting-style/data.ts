// texting-style 테스트 데이터
export const textingstyleTest = {
  id: 'texting-style',
  title: '문자 스타일 테스트',
  description: '카톡/문자 스타일로 알아보는 당신의 성격! 당신은 어떻게 메시지를 보내나요?',
  questions: [
    {
      id: 1,
      text: '메시지를 보낼 때 주로 어떻게?',
      options: [
        { text: '짧게 여러 번 끊어서 보냄', type: 'rapid' },
        { text: '한 번에 길게 정리해서 보냄', type: 'thorough' },
        { text: '필요한 말만 간단히', type: 'minimal' },
        { text: '이모티콘 위주로 보냄', type: 'expressive' }
      ]
    },
    {
      id: 2,
      text: '메시지 끝에 주로 붙이는 것은?',
      options: [
        { text: 'ㅋㅋㅋ, ㅎㅎ 등 웃음', type: 'rapid' },
        { text: '마침표나 온점', type: 'thorough' },
        { text: '아무것도 안 붙임', type: 'minimal' },
        { text: '이모티콘이나 이모지', type: 'expressive' }
      ]
    },
    {
      id: 3,
      text: '답장 속도는?',
      options: [
        { text: '거의 실시간으로 바로', type: 'rapid' },
        { text: '확인하면 빠르게, 바쁘면 나중에', type: 'thorough' },
        { text: '여유 있을 때 한 번에', type: 'minimal' },
        { text: '읽자마자 이모티콘이라도 보냄', type: 'expressive' }
      ]
    },
    {
      id: 4,
      text: '단체 채팅방에서의 당신은?',
      options: [
        { text: '활발하게 대화 참여', type: 'rapid' },
        { text: '필요한 말만 가끔', type: 'thorough' },
        { text: '읽씹 많이 함', type: 'minimal' },
        { text: '이모티콘으로 반응 표시', type: 'expressive' }
      ]
    },
    {
      id: 5,
      text: '"ㅇㅇ", "ㅇㅋ" 같은 줄임말 사용은?',
      options: [
        { text: '자주 씀, 빠르니까', type: 'rapid' },
        { text: '잘 안 씀, 정확하게 쓰고 싶음', type: 'thorough' },
        { text: '상황에 따라 다름', type: 'minimal' },
        { text: '줄임말 대신 이모티콘', type: 'expressive' }
      ]
    },
    {
      id: 6,
      text: '읽고 답장을 안 했을 때(읽씹) 느끼는 감정은?',
      options: [
        { text: '미안함, 빨리 답해야지', type: 'rapid' },
        { text: '나중에 제대로 답하려고', type: 'thorough' },
        { text: '별 생각 없음, 나중에 하지 뭐', type: 'minimal' },
        { text: '일단 이모티콘이라도 보내야 함', type: 'expressive' }
      ]
    },
    {
      id: 7,
      text: '오타가 났을 때?',
      options: [
        { text: '바로 다음 메시지로 수정', type: 'rapid' },
        { text: '삭제하고 다시 보냄', type: 'thorough' },
        { text: '그냥 넘어감, 알아보겠지', type: 'minimal' },
        { text: '오타도 귀엽지 않나?', type: 'expressive' }
      ]
    },
    {
      id: 8,
      text: '긴 이야기를 전해야 할 때?',
      options: [
        { text: '전화하자고 함', type: 'rapid' },
        { text: '정리해서 길게 타이핑', type: 'thorough' },
        { text: '핵심만 요약해서 보냄', type: 'minimal' },
        { text: '음성메시지나 사진 활용', type: 'expressive' }
      ]
    },
    {
      id: 9,
      text: '새로 나온 이모티콘이나 스티커에 대해?',
      options: [
        { text: '유행하는 거 빠르게 습득', type: 'rapid' },
        { text: '쓰던 것만 씀', type: 'thorough' },
        { text: '잘 안 씀', type: 'minimal' },
        { text: '신상은 바로 구매/다운', type: 'expressive' }
      ]
    },
    {
      id: 10,
      text: '메시지에 대한 당신의 생각은?',
      options: [
        { text: '빠른 소통이 생명', type: 'rapid' },
        { text: '정확하게 전달해야 함', type: 'thorough' },
        { text: '필요한 만큼만 하면 됨', type: 'minimal' },
        { text: '감정 표현이 중요함', type: 'expressive' }
      ]
    }
  ],
  results: {
    rapid: {
      type: '속사포 메신저',
      title: '⚡ 속사포 메신저',
      description: '빠르고 활발하게! 실시간 대화를 즐기는 에너지 넘치는 타입입니다.',
      traits: [
        '빠른 반응 속도',
        '사교적인 성격',
        '멀티태스킹 능력',
        '즉흥적인 면이 있음'
      ],
      advice: '빠른 대화도 좋지만, 가끔은 천천히 생각을 정리해서 보내보세요!'
    },
    thorough: {
      type: '꼼꼼 라이터',
      title: '📝 꼼꼼 라이터',
      description: '정확하고 깔끔하게! 메시지도 문서처럼 정리하는 체계적인 타입입니다.',
      traits: [
        '꼼꼼하고 정확함',
        '논리적인 사고',
        '책임감이 있다',
        '신중한 성격'
      ],
      advice: '정확함은 좋지만, 가끔은 가볍게 보내도 괜찮아요. 대화는 완벽할 필요 없어요!'
    },
    minimal: {
      type: '효율주의 답장러',
      title: '📵 효율주의 답장러',
      description: '필요한 말만! 메시지보다 다른 데 시간을 쓰고 싶은 효율적인 타입입니다.',
      traits: [
        '효율을 중시함',
        '자기 시간을 소중히 여김',
        '단순함을 추구',
        '독립적인 성격'
      ],
      advice: '효율도 좋지만, 가끔은 이모티콘 하나로 따뜻함을 전해보세요!'
    },
    expressive: {
      type: '감성 이모티콘러',
      title: '😊 감성 이모티콘러',
      description: '감정은 이모티콘으로! 글보다 표정으로 마음을 전하는 감성적인 타입입니다.',
      traits: [
        '감정 표현이 풍부함',
        '창의적인 면이 있음',
        '친근하고 따뜻함',
        '비언어적 소통을 잘함'
      ],
      advice: '이모티콘도 좋지만, 때로는 글로 마음을 표현하면 더 깊이 전해져요!'
    }
  }
};
