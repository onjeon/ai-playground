// sns-alter-ego 테스트 데이터
export const snsalteregoTest = {
  id: 'sns-alter-ego',
  title: 'SNS 부캐 유형 테스트',
  description: '온라인에서의 나는 어떤 캐릭터? 현실과 SNS 속 나의 갭을 분석해봅니다!',
  questions: [
    {
      id: 1,
      text: 'SNS 프로필 사진은 어떤 스타일?',
      options: [
        { text: '꾸미지 않은 자연스러운 사진', type: 'authentic' },
        { text: '필터/보정은 기본, 예쁘게', type: 'curated' },
        { text: '얼굴 대신 풍경/물건 사진', type: 'mysterious' },
        { text: '밈이나 캐릭터 이미지', type: 'meme' }
      ]
    },
    {
      id: 2,
      text: 'SNS에 올리는 콘텐츠 기준은?',
      options: [
        { text: '일상 그대로, 솔직하게', type: 'authentic' },
        { text: '예쁘고 멋진 순간만 선별', type: 'curated' },
        { text: '의미 있거나 깊은 내용', type: 'mysterious' },
        { text: '웃기거나 공감되는 밈', type: 'meme' }
      ]
    },
    {
      id: 3,
      text: 'SNS에서의 말투는 실제와?',
      options: [
        { text: '거의 똑같다', type: 'authentic' },
        { text: '조금 더 밝고 긍정적', type: 'curated' },
        { text: '조금 더 진지하고 지적', type: 'mysterious' },
        { text: '완전 다름, 드립 장인', type: 'meme' }
      ]
    },
    {
      id: 4,
      text: '부정적인 일이 있을 때 SNS에는?',
      options: [
        { text: '솔직하게 힘들다고 올림', type: 'authentic' },
        { text: '올리지 않음, 좋은 것만', type: 'curated' },
        { text: '은유적으로 표현', type: 'mysterious' },
        { text: '자조 밈으로 승화', type: 'meme' }
      ]
    },
    {
      id: 5,
      text: 'SNS 팔로워/친구들은 나를 어떻게 볼까?',
      options: [
        { text: '실제와 비슷하게', type: 'authentic' },
        { text: '실제보다 멋지거나 예쁘게', type: 'curated' },
        { text: '뭔가 있어 보이게', type: 'mysterious' },
        { text: '웃긴 사람으로', type: 'meme' }
      ]
    },
    {
      id: 6,
      text: 'SNS 게시물 올리기 전에?',
      options: [
        { text: '별 고민 없이 올림', type: 'authentic' },
        { text: '필터/편집 후 올림', type: 'curated' },
        { text: '이게 의미가 있나 고민', type: 'mysterious' },
        { text: '웃긴지 체크 후 올림', type: 'meme' }
      ]
    },
    {
      id: 7,
      text: 'SNS에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '진정성, 있는 그대로', type: 'authentic' },
        { text: '이미지, 어떻게 보이는지', type: 'curated' },
        { text: '깊이, 의미 있는 콘텐츠', type: 'mysterious' },
        { text: '재미, 반응이 좋은 콘텐츠', type: 'meme' }
      ]
    },
    {
      id: 8,
      text: '친한 친구들이 아는 SNS 속 나와 실제 나의 갭은?',
      options: [
        { text: '거의 없음', type: 'authentic' },
        { text: '약간 있음, 온라인이 더 나아 보임', type: 'curated' },
        { text: '꽤 있음, 다른 면을 보여줌', type: 'mysterious' },
        { text: '완전 다름, 온라인이 더 미침', type: 'meme' }
      ]
    },
    {
      id: 9,
      text: '댓글이나 DM 스타일은?',
      options: [
        { text: '평소 말투 그대로', type: 'authentic' },
        { text: '좀 더 친절하고 긍정적', type: 'curated' },
        { text: '신중하게, 필요한 말만', type: 'mysterious' },
        { text: '드립과 밈으로 대화', type: 'meme' }
      ]
    },
    {
      id: 10,
      text: 'SNS를 하는 이유는?',
      options: [
        { text: '기록, 소통, 일상 공유', type: 'authentic' },
        { text: '이미지 관리, 인맥 유지', type: 'curated' },
        { text: '생각 정리, 정보 공유', type: 'mysterious' },
        { text: '재미, 밈 공유, 놀이', type: 'meme' }
      ]
    }
  ],
  results: {
    authentic: {
      type: '리얼 라이프 공유러',
      title: '📱 리얼 라이프 공유러',
      description: 'SNS도 현실도 똑같은 모습! 꾸밈없이 진정성 있게 일상을 공유하는 타입입니다.',
      onlineVsOffline: '거의 동일',
      alterEgo: '없음 (본캐 = 부캐)',
      traits: [
        '있는 그대로를 공유',
        '가식이 없음',
        '진정성 있는 소통',
        '좋은 것도 나쁜 것도 솔직하게'
      ],
      strength: '신뢰감을 주는 SNS 활동',
      advice: '솔직함이 장점이에요! 하지만 모든 걸 공유할 필요는 없어요. 개인 영역도 지키세요.',
      followers: '실제 친구 위주'
    },
    curated: {
      type: '라이프 큐레이터',
      title: '✨ 라이프 큐레이터',
      description: '예쁘고 멋진 순간만 선별! SNS를 통해 이상적인 이미지를 구축하는 타입입니다.',
      onlineVsOffline: '온라인 > 오프라인 (이미지)',
      alterEgo: '더 멋진 버전의 나',
      traits: [
        '선별된 콘텐츠만 공유',
        '이미지 관리에 신경',
        '긍정적인 모습 위주',
        '보정과 필터 활용'
      ],
      strength: '감각적인 피드 운영 능력',
      advice: '예쁜 피드도 좋지만, 완벽해 보이려는 압박에서 벗어나도 괜찮아요.',
      followers: '넓은 인맥, 지인들'
    },
    mysterious: {
      type: '미스터리 인텔리',
      title: '🌙 미스터리 인텔리',
      description: '뭔가 있어 보이는 존재감! 깊이 있고 의미 있는 콘텐츠로 신비로운 이미지를 가진 타입입니다.',
      onlineVsOffline: '다른 면을 보여줌',
      alterEgo: '더 깊은 버전의 나',
      traits: [
        '의미 있는 콘텐츠 추구',
        '은유적 표현',
        '신비로운 이미지',
        '선택적 공유'
      ],
      strength: '궁금증을 유발하는 매력',
      advice: '신비로움도 좋지만, 가끔은 솔직한 모습도 보여주세요. 관계가 더 깊어질 거예요.',
      followers: '비슷한 취향의 사람들'
    },
    meme: {
      type: '밈 크리에이터',
      title: '🤣 밈 크리에이터',
      description: '온라인에서 텐션 폭발! 현실과 완전 다른 드립 장인 캐릭터를 가진 타입입니다.',
      onlineVsOffline: '완전 다름',
      alterEgo: '미친 텐션의 또 다른 나',
      traits: [
        '밈과 드립으로 소통',
        '재미 추구',
        '높은 온라인 텐션',
        '자조적 유머'
      ],
      strength: '온라인에서 인기 만점, 분위기 메이커',
      advice: '온라인 캐릭터도 당신의 일부예요. 하지만 현실에서도 그 재미있는 모습을 보여주세요!',
      followers: '밈 좋아하는 친구들, 인터넷 친구'
    }
  }
};
