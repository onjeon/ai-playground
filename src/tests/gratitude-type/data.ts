// gratitude-type 테스트 데이터
export const gratitudeType = {
  id: 'gratitude-type',
  title: '감사 표현 테스트',
  description: '당신은 어떻게 감사를 표현하나요? 감사 스타일로 보는 당신의 사랑 언어!',
  questions: [
    {
      id: 1,
      text: '선물을 받았을 때 감사 표현은?',
      options: [
        { text: '"고마워!!" 말로 크게 표현', type: 'verbal' },
        { text: '포옹이나 손 잡기', type: 'physical' },
        { text: '나중에 답례 선물로', type: 'gift' },
        { text: '도움이 필요할 때 나서서 행동으로', type: 'action' }
      ]
    },
    {
      id: 2,
      text: '도움받았을 때 주로 어떻게 해요?',
      options: [
        { text: '진심 어린 감사의 말', type: 'verbal' },
        { text: '악수나 하이파이브', type: 'physical' },
        { text: '커피나 간식 사줌', type: 'gift' },
        { text: '다음에 내가 도움 줄게', type: 'action' }
      ]
    },
    {
      id: 3,
      text: '부모님께 감사할 때?',
      options: [
        { text: '"사랑해요" 말로 표현', type: 'verbal' },
        { text: '안아드리기', type: 'physical' },
        { text: '선물이나 용돈 드리기', type: 'gift' },
        { text: '집안일 도와드리기', type: 'action' }
      ]
    },
    {
      id: 4,
      text: '친구에게 고마울 때?',
      options: [
        { text: '장문의 감사 메시지', type: 'verbal' },
        { text: '어깨동무, 볼 뽀뽀', type: 'physical' },
        { text: '좋아하는 거 사주기', type: 'gift' },
        { text: '필요할 때 달려가기', type: 'action' }
      ]
    },
    {
      id: 5,
      text: '연인에게 감사 표현은?',
      options: [
        { text: '달달한 말, 편지', type: 'verbal' },
        { text: '스킨십으로 표현', type: 'physical' },
        { text: '깜짝 선물', type: 'gift' },
        { text: '함께 시간 보내기, 챙겨주기', type: 'action' }
      ]
    },
    {
      id: 6,
      text: '직장에서 동료에게 감사할 때?',
      options: [
        { text: '"덕분에 잘 됐어!" 칭찬의 말', type: 'verbal' },
        { text: '악수하며 눈 맞춤', type: 'physical' },
        { text: '커피 한 잔 사주기', type: 'gift' },
        { text: '내가 도울 일 있으면 말해', type: 'action' }
      ]
    },
    {
      id: 7,
      text: '감사받을 때 가장 기분 좋은 방식은?',
      options: [
        { text: '진심 어린 말로 들을 때', type: 'verbal' },
        { text: '따뜻한 포옹', type: 'physical' },
        { text: '작은 선물이라도', type: 'gift' },
        { text: '상대가 나를 위해 뭔가 해줄 때', type: 'action' }
      ]
    },
    {
      id: 8,
      text: '감사 일기를 쓴다면?',
      options: [
        { text: '말로 표현하고 싶은 것들', type: 'verbal' },
        { text: '따뜻했던 순간들', type: 'physical' },
        { text: '받은 것들, 가진 것들', type: 'gift' },
        { text: '도움받은 일들', type: 'action' }
      ]
    },
    {
      id: 9,
      text: '감사를 잘 표현 못하면?',
      options: [
        { text: '말이 안 나와서 답답함', type: 'verbal' },
        { text: '어색해서 못 다가감', type: 'physical' },
        { text: '뭘 해줘야 할지 모르겠음', type: 'gift' },
        { text: '바빠서 못 챙기게 됨', type: 'action' }
      ]
    },
    {
      id: 10,
      text: '감사에 대한 당신의 생각은?',
      options: [
        { text: '말로 표현해야 전달됨', type: 'verbal' },
        { text: '감정은 몸으로 전해짐', type: 'physical' },
        { text: '마음은 물질로 증명됨', type: 'gift' },
        { text: '행동이 진정한 감사', type: 'action' }
      ]
    }
  ],
  results: {
    verbal: {
      type: '말의 마법사',
      title: '💬 말의 마법사',
      description: '감사는 말로! 진심 어린 표현으로 마음을 전하는 당신.',
      traits: ['언어적 표현', '칭찬의 달인', '편지/메시지 선호', '감정 전달력'],
      gratitudeStyle: '언어적 표현',
      advice: '말의 힘을 아는 당신! 가끔은 행동으로도 보여주면 더 깊이 전달돼요.'
    },
    physical: {
      type: '스킨십 감사러',
      title: '🤗 스킨십 감사러',
      description: '포옹 한 번이 천 마디! 따뜻한 스킨십으로 감사를 전하는 당신.',
      traits: ['신체적 표현', '따뜻한 에너지', '친밀감 중시', '직접적 감정 전달'],
      gratitudeStyle: '신체적 표현',
      advice: '따뜻한 표현 방식이에요! 스킨십이 어색한 사람도 있으니 상대에 맞춰주세요.'
    },
    gift: {
      type: '선물 감사러',
      title: '🎁 선물 감사러',
      description: '마음은 선물로! 물질적 표현으로 감사를 전하는 당신.',
      traits: ['선물 선호', '물질적 표현', '정성 담기', '기억에 남는 감사'],
      gratitudeStyle: '물질적 표현',
      advice: '선물은 좋은 표현이지만, 말과 함께라면 더 따뜻해져요!'
    },
    action: {
      type: '행동파 감사러',
      title: '🛠️ 행동파 감사러',
      description: '말보다 행동! 실질적인 도움으로 감사를 보여주는 당신.',
      traits: ['행동으로 증명', '실질적 도움', '묵묵한 감사', '신뢰 구축'],
      gratitudeStyle: '행동적 표현',
      advice: '행동은 진정성을 보여줘요! 하지만 가끔은 말로도 표현해주면 상대가 더 잘 느껴요.'
    }
  }
};
