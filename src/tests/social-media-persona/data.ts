// social-media-persona 테스트 데이터
export const socialMediaPersona = {
  id: 'social-media-persona',
  title: 'SNS 페르소나 테스트',
  description: 'SNS에서의 당신은 어떤 모습? 온라인 자아를 분석해보세요!',
  questions: [
    {
      id: 1,
      text: 'SNS 피드에 주로 올리는 것은?',
      options: [
        { text: '일상/셀카/데일리룩', type: 'exhibitor' },
        { text: '정보/의견/시사', type: 'influencer' },
        { text: '거의 안 올림, 구경만', type: 'lurker' },
        { text: '재미있는 것/밈/유머', type: 'entertainer' }
      ]
    },
    {
      id: 2,
      text: 'SNS 사용 목적은?',
      options: [
        { text: '내 삶을 공유하고 싶어서', type: 'exhibitor' },
        { text: '정보 수집과 의견 표현', type: 'influencer' },
        { text: '다른 사람들 구경', type: 'lurker' },
        { text: '재미와 소통', type: 'entertainer' }
      ]
    },
    {
      id: 3,
      text: '좋아요/팔로워 수에 대해?',
      options: [
        { text: '중요함, 신경 쓰임', type: 'exhibitor' },
        { text: '영향력의 척도로 봄', type: 'influencer' },
        { text: '상관없음, 안 올리니까', type: 'lurker' },
        { text: '반응 있으면 좋지만 필수는 아님', type: 'entertainer' }
      ]
    },
    {
      id: 4,
      text: 'SNS 프로필은?',
      options: [
        { text: '예쁘게 꾸며둠, 셀카 프사', type: 'exhibitor' },
        { text: '전문적/관심사 반영', type: 'influencer' },
        { text: '기본값 or 모호한 사진', type: 'lurker' },
        { text: '웃긴 사진이나 캐릭터', type: 'entertainer' }
      ]
    },
    {
      id: 5,
      text: '댓글 작성 스타일은?',
      options: [
        { text: '친구 글에 적극적으로', type: 'exhibitor' },
        { text: '정보나 의견 위주로', type: 'influencer' },
        { text: '거의 안 함', type: 'lurker' },
        { text: '재밌는 댓글, 드립', type: 'entertainer' }
      ]
    },
    {
      id: 6,
      text: '스토리 사용은?',
      options: [
        { text: '일상 자주 공유', type: 'exhibitor' },
        { text: '의미 있는 내용만', type: 'influencer' },
        { text: '거의 안 올림, 보기만', type: 'lurker' },
        { text: '재미있는 것 위주로', type: 'entertainer' }
      ]
    },
    {
      id: 7,
      text: 'SNS 없이 지내는 것은?',
      options: [
        { text: '힘들어, 공유하고 싶은데', type: 'exhibitor' },
        { text: '정보 접근이 불편할 듯', type: 'influencer' },
        { text: '괜찮을 것 같음', type: 'lurker' },
        { text: '심심하겠지만 가능', type: 'entertainer' }
      ]
    },
    {
      id: 8,
      text: 'SNS에서 보이는 나와 실제 나는?',
      options: [
        { text: '더 꾸민 버전', type: 'exhibitor' },
        { text: '관심사 위주로 걸러진 버전', type: 'influencer' },
        { text: '거의 안 보여줌', type: 'lurker' },
        { text: '더 재미있는 버전', type: 'entertainer' }
      ]
    },
    {
      id: 9,
      text: '팔로우하는 계정 유형은?',
      options: [
        { text: '셀럽/인플루언서/일상', type: 'exhibitor' },
        { text: '뉴스/전문가/정보', type: 'influencer' },
        { text: '다양하게, 구경용', type: 'lurker' },
        { text: '밈/유머/엔터테인먼트', type: 'entertainer' }
      ]
    },
    {
      id: 10,
      text: 'SNS가 당신에게 의미하는 것은?',
      options: [
        { text: '자기 표현의 공간', type: 'exhibitor' },
        { text: '정보와 영향력의 채널', type: 'influencer' },
        { text: '세상 구경 창문', type: 'lurker' },
        { text: '재미와 소통의 장', type: 'entertainer' }
      ]
    }
  ],
  results: {
    exhibitor: {
      type: '전시형',
      title: '📸 SNS 전시형',
      description: '내 삶을 공유하는 것을 즐기는 당신! SNS는 당신의 갤러리예요.',
      traits: ['자기 표현', '공유 욕구', '사회적', '외향적'],
      snsPersona: '전시형',
      advice: '공유는 좋지만, 비교에서 오는 스트레스는 조심하세요!'
    },
    influencer: {
      type: '영향력형',
      title: '📢 SNS 영향력형',
      description: '정보와 의견을 나누는 당신! SNS는 당신의 영향력 채널이에요.',
      traits: ['정보 지향', '의견 표현', '영향력', '전문성'],
      snsPersona: '영향력형',
      advice: '의견 표현은 좋지만, 다른 관점도 열린 마음으로 들어보세요!'
    },
    lurker: {
      type: '관찰형',
      title: '👀 SNS 관찰형',
      description: '조용히 구경하는 당신! SNS는 당신의 세상 구경 창문이에요.',
      traits: ['관찰자', '프라이버시 중시', '내향적', '선택적'],
      snsPersona: '관찰형',
      advice: '구경도 좋지만, 가끔은 참여해보세요. 연결의 즐거움이 있어요!'
    },
    entertainer: {
      type: '엔터테이너형',
      title: '🎭 SNS 엔터테이너형',
      description: '재미를 나누는 당신! SNS는 당신의 놀이터예요.',
      traits: ['유머', '소통', '가벼움', '즐거움'],
      snsPersona: '엔터테이너형',
      advice: '재미를 주는 건 훌륭해요! 그 긍정 에너지를 계속 나눠주세요.'
    }
  }
};
