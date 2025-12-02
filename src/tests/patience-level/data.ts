// patience-level 테스트 데이터
export const patienceLevel = {
  id: 'patience-level',
  title: '인내심 레벨 테스트',
  description: '당신의 인내심은 어느 정도? 참을성 레벨을 측정하고 당신의 인내 유형을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '식당에서 음식이 30분 넘게 안 나오면?',
      options: [
        { text: '직원 불러서 확인, 더 늦으면 나감', type: 'low' },
        { text: '좀 짜증나지만 기다림', type: 'medium' },
        { text: '대화하면서 느긋하게 기다림', type: 'high' },
        { text: '주방이 바쁜가 보다, 이해함', type: 'zen' }
      ]
    },
    {
      id: 2,
      text: '컴퓨터/앱이 느리게 로딩될 때?',
      options: [
        { text: '답답해서 여러 번 클릭하거나 껐다 킴', type: 'low' },
        { text: '한숨 쉬며 기다림', type: 'medium' },
        { text: '다른 일 하면서 기다림', type: 'high' },
        { text: '기다리는 시간도 휴식', type: 'zen' }
      ]
    },
    {
      id: 3,
      text: '누군가 약속 시간에 20분 늦으면?',
      options: [
        { text: '화나서 연락, 많이 늦으면 먼저 감', type: 'low' },
        { text: '기다리지만 속으로 불만', type: 'medium' },
        { text: '괜찮아, 폰 보면서 기다림', type: 'high' },
        { text: '뭔가 사정 있겠지, 여유롭게 기다림', type: 'zen' }
      ]
    },
    {
      id: 4,
      text: '교통 체증에 갇혔을 때?',
      options: [
        { text: '짜증폭발, 경적도 눌러봄', type: 'low' },
        { text: '스트레스받지만 어쩔 수 없지', type: 'medium' },
        { text: '음악이나 팟캐스트 틀고 즐김', type: 'high' },
        { text: '이 시간도 나만의 시간', type: 'zen' }
      ]
    },
    {
      id: 5,
      text: '줄이 길게 서 있을 때?',
      options: [
        { text: '빠른 줄 찾아 이동, 못 참겠으면 포기', type: 'low' },
        { text: '서 있긴 하지만 불편함', type: 'medium' },
        { text: '폰 보면서 시간 보냄', type: 'high' },
        { text: '사람 구경하며 여유롭게', type: 'zen' }
      ]
    },
    {
      id: 6,
      text: '누군가 말을 느리게 할 때?',
      options: [
        { text: '답답해서 말 끊거나 대신 말해줌', type: 'low' },
        { text: '기다리지만 속으로 답답', type: 'medium' },
        { text: '끝까지 들어줌', type: 'high' },
        { text: '천천히 듣는 것도 대화의 일부', type: 'zen' }
      ]
    },
    {
      id: 7,
      text: '목표 달성이 예상보다 오래 걸리면?',
      options: [
        { text: '조급해지고 포기하고 싶어짐', type: 'low' },
        { text: '힘들지만 계속 함', type: 'medium' },
        { text: '과정을 즐기려 노력', type: 'high' },
        { text: '시간이 걸려도 결국 될 거라 믿음', type: 'zen' }
      ]
    },
    {
      id: 8,
      text: '누군가 같은 말을 반복하면?',
      options: [
        { text: '"알았어, 알았어" 말 자름', type: 'low' },
        { text: '듣긴 하지만 지루함', type: 'medium' },
        { text: '다시 들어줌, 중요한가 보다', type: 'high' },
        { text: '반복에도 새로운 뉘앙스가 있을 수 있음', type: 'zen' }
      ]
    },
    {
      id: 9,
      text: '배달/택배가 예정보다 늦으면?',
      options: [
        { text: '고객센터 연락, 화남', type: 'low' },
        { text: '짜증나지만 기다림', type: 'medium' },
        { text: '언젠간 오겠지', type: 'high' },
        { text: '배송 과정도 이해, 여유롭게', type: 'zen' }
      ]
    },
    {
      id: 10,
      text: '인내심에 대한 당신의 생각은?',
      options: [
        { text: '시간 낭비, 빠른 게 최고', type: 'low' },
        { text: '필요하지만 쉽지 않음', type: 'medium' },
        { text: '중요한 덕목, 노력 중', type: 'high' },
        { text: '인생은 마라톤, 조급함은 독', type: 'zen' }
      ]
    }
  ],
  results: {
    low: {
      type: '빠름빠름형',
      title: '⚡ 빠름빠름형 (인내심 20%)',
      description: '시간은 금! 기다림은 최소화하고 싶은 당신. 효율을 추구하지만 가끔 조급함이 문제!',
      traits: ['효율 추구', '시간 민감', '직접적 행동', '빠른 결정'],
      patienceLevel: 20,
      advice: '속도도 중요하지만, 기다림이 더 좋은 결과를 가져올 때도 있어요. 심호흡하고 "이것도 지나간다"를 되뇌어보세요.'
    },
    medium: {
      type: '보통형',
      title: '⏳ 보통형 (인내심 50%)',
      description: '기다릴 순 있지만 편하지는 않아요. 상황에 따라 인내심이 달라지는 평균적인 타입!',
      traits: ['상황적 인내', '내적 불편함', '적응력', '자기 조절'],
      patienceLevel: 50,
      advice: '당신의 인내심은 평균적이에요. 조금만 더 여유를 가지면 스트레스가 줄어들 거예요!'
    },
    high: {
      type: '여유형',
      title: '🌿 여유형 (인내심 75%)',
      description: '기다림을 잘 다루는 당신! 조급함 대신 여유를 선택하는 성숙한 타입.',
      traits: ['여유로움', '과정 중시', '감정 조절', '긍정적 태도'],
      patienceLevel: 75,
      advice: '훌륭한 인내심이에요! 이 여유가 당신의 큰 장점이에요. 계속 유지하세요!'
    },
    zen: {
      type: '달관형',
      title: '🧘 달관형 (인내심 95%)',
      description: '기다림? 그것도 삶의 일부! 완벽한 평정심을 가진 선(禪)의 경지.',
      traits: ['깊은 평정심', '철학적 태도', '완전한 수용', '내면의 평화'],
      patienceLevel: 95,
      advice: '당신의 인내심은 경이로운 수준이에요. 다만 가끔은 행동이 필요할 때도 있어요. 균형을 잊지 마세요!'
    }
  }
};
