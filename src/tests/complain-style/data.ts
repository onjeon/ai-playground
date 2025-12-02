// complain-style 테스트 데이터
export const complainStyle = {
  id: 'complain-style',
  title: '불평 스타일 테스트',
  description: '당신은 어떻게 불만을 표현하나요? 불평 패턴으로 보는 당신의 성격!',
  questions: [
    {
      id: 1,
      text: '음식이 맛없게 나왔을 때?',
      options: [
        { text: '직원 불러서 바로 말함', type: 'direct' },
        { text: '그냥 먹고 다신 안 옴', type: 'passive' },
        { text: '같이 온 사람에게 투덜거림', type: 'venting' },
        { text: '리뷰에 솔직하게 작성', type: 'indirect' }
      ]
    },
    {
      id: 2,
      text: '직장/학교에서 불만이 있을 때?',
      options: [
        { text: '담당자/상사에게 직접 말함', type: 'direct' },
        { text: '참고 넘어감', type: 'passive' },
        { text: '동료들과 뒷담화', type: 'venting' },
        { text: '익명 건의함에 투고', type: 'indirect' }
      ]
    },
    {
      id: 3,
      text: '택배가 파손되어 왔을 때?',
      options: [
        { text: '바로 고객센터에 강력 항의', type: 'direct' },
        { text: '귀찮아서 그냥 씀', type: 'passive' },
        { text: 'SNS에 분노 포스팅', type: 'venting' },
        { text: '차분하게 환불 요청', type: 'indirect' }
      ]
    },
    {
      id: 4,
      text: '친구가 약속을 자주 어기면?',
      options: [
        { text: '직접 말하고 따짐', type: 'direct' },
        { text: '그냥 거리를 둠', type: 'passive' },
        { text: '다른 친구에게 푸념', type: 'venting' },
        { text: '넌지시 힌트를 줌', type: 'indirect' }
      ]
    },
    {
      id: 5,
      text: '서비스가 불만족스러울 때?',
      options: [
        { text: '매니저 불러! 항의!', type: 'direct' },
        { text: '다음부터 안 가면 됨', type: 'passive' },
        { text: '주변 사람들에게 호소', type: 'venting' },
        { text: '정중하게 피드백 전달', type: 'indirect' }
      ]
    },
    {
      id: 6,
      text: '불평할 때 주로 느끼는 감정은?',
      options: [
        { text: '분노, 당장 해결해야 함', type: 'direct' },
        { text: '체념, 뭘 해도 안 바뀜', type: 'passive' },
        { text: '답답함, 누군가 들어줘야 함', type: 'venting' },
        { text: '신중함, 잘 전달해야 함', type: 'indirect' }
      ]
    },
    {
      id: 7,
      text: '불평 후 보통 어떻게 되나요?',
      options: [
        { text: '시원하게 해결됨', type: 'direct' },
        { text: '아무것도 안 함, 속만 상함', type: 'passive' },
        { text: '말은 했는데 해결은 안 됨', type: 'venting' },
        { text: '시간 걸려도 결국 해결', type: 'indirect' }
      ]
    },
    {
      id: 8,
      text: '불평하는 것에 대한 생각은?',
      options: [
        { text: '당연한 권리! 말해야 바뀜', type: 'direct' },
        { text: '에너지 낭비, 피하고 싶음', type: 'passive' },
        { text: '스트레스 해소에 필요함', type: 'venting' },
        { text: '방법이 중요, 건설적으로', type: 'indirect' }
      ]
    },
    {
      id: 9,
      text: '불평 안에 숨은 진짜 니즈는?',
      options: [
        { text: '문제 해결과 변화', type: 'direct' },
        { text: '평화와 갈등 회피', type: 'passive' },
        { text: '공감과 위로', type: 'venting' },
        { text: '존중받는 느낌', type: 'indirect' }
      ]
    },
    {
      id: 10,
      text: '다른 사람의 불평을 들을 때?',
      options: [
        { text: '"그래서 뭘 했어?" 행동 촉구', type: 'direct' },
        { text: '"그냥 넘어가" 조언', type: 'passive' },
        { text: '"진짜? 너무하다!" 공감', type: 'venting' },
        { text: '"이렇게 말해보는 건?" 조언', type: 'indirect' }
      ]
    }
  ],
  results: {
    direct: {
      type: '직접 표현형',
      title: '🔥 직접 표현형',
      description: '할 말은 한다! 불만을 직접 전달하는 당당한 타입.',
      traits: ['직접적 소통', '문제 해결 지향', '당당함', '때로는 공격적'],
      complainStyle: '직접 표현',
      advice: '직접 말하는 건 효과적이지만, 방식도 중요해요. 차분하게 전달하면 더 잘 들려요!'
    },
    passive: {
      type: '참는 게 약형',
      title: '😶 참는 게 약형',
      description: '그냥 참고 넘어가는 당신. 갈등을 피하지만 속은 상해요.',
      traits: ['갈등 회피', '체념적', '에너지 보존', '수동적'],
      complainStyle: '억압',
      advice: '참는 것도 한계가 있어요. 작은 것부터 표현하는 연습을 해보세요. 당신의 의견도 중요해요!'
    },
    venting: {
      type: '푸념형',
      title: '😤 푸념형',
      description: '일단 말해야 직성이 풀리는 당신! 공감받고 싶은 마음이 커요.',
      traits: ['감정 발산', '공감 욕구', '스트레스 해소', '해결보다 표현'],
      complainStyle: '감정 발산',
      advice: '말하는 건 스트레스 해소에 좋지만, 가끔은 해결을 위한 행동도 필요해요!'
    },
    indirect: {
      type: '간접 전달형',
      title: '📝 간접 전달형',
      description: '신중하게, 건설적으로. 방법을 고민하는 현명한 타입!',
      traits: ['신중한 접근', '건설적 피드백', '갈등 최소화', '효과적 소통'],
      complainStyle: '간접 표현',
      advice: '훌륭한 방식이에요! 하지만 너무 돌려 말하면 안 전달될 수 있어요. 적절한 직접성도 필요해요.'
    }
  }
};
