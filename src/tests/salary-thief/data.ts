// salary-thief 테스트 데이터
export const salarythiefTest = {
  id: 'salary-thief',
  title: '월급 루팡 지수 테스트',
  description: '솔직하게 답해주세요... 회사에서 얼마나 "효율적으로" 시간을 보내고 계신가요? 😏',
  questions: [
    {
      id: 1,
      text: '출근해서 가장 먼저 하는 일은?',
      options: [
        { text: '바로 업무 시작', type: 'worker' },
        { text: '커피 마시면서 천천히 준비', type: 'normal' },
        { text: '뉴스/SNS 30분 정도 보기', type: 'slacker' },
        { text: '출근한 척하고 한참 멍때림', type: 'thief' }
      ]
    },
    {
      id: 2,
      text: '업무 시간에 유튜브/SNS 보는 빈도는?',
      options: [
        { text: '거의 안 봄', type: 'worker' },
        { text: '점심시간에만', type: 'normal' },
        { text: '틈틈이 자주', type: 'slacker' },
        { text: '사실 대부분의 시간을...', type: 'thief' }
      ]
    },
    {
      id: 3,
      text: '화장실 가는 횟수와 시간은?',
      options: [
        { text: '필요할 때만 최소한으로', type: 'worker' },
        { text: '적당히, 평균적', type: 'normal' },
        { text: '좀 자주, 거기서 폰도 봄', type: 'slacker' },
        { text: '화장실이 나의 휴게실', type: 'thief' }
      ]
    },
    {
      id: 4,
      text: '업무 메일/메시지 답장 속도는?',
      options: [
        { text: '바로바로 처리', type: 'worker' },
        { text: '적당한 시간 내에', type: 'normal' },
        { text: '나중에 한꺼번에', type: 'slacker' },
        { text: '안 보거나 미룸', type: 'thief' }
      ]
    },
    {
      id: 5,
      text: '점심시간 활용법은?',
      options: [
        { text: '빠르게 먹고 일하거나 공부', type: 'worker' },
        { text: '동료와 적당히 먹고 휴식', type: 'normal' },
        { text: '최대한 늘려서 휴식', type: 'slacker' },
        { text: '점심시간? 그게 언제 끝나는 건가요?', type: 'thief' }
      ]
    },
    {
      id: 6,
      text: '"지금 뭐해요?" 물으면?',
      options: [
        { text: '실제로 하고 있는 업무 말함', type: 'worker' },
        { text: '대충 업무 중이라고 말함', type: 'normal' },
        { text: '급하게 화면 전환 후 대답', type: 'slacker' },
        { text: '"아 그거요... 그거 하고 있었어요"', type: 'thief' }
      ]
    },
    {
      id: 7,
      text: '업무량 대비 일하는 시간의 체감은?',
      options: [
        { text: '바쁘게 일함', type: 'worker' },
        { text: '적당함', type: 'normal' },
        { text: '사실 여유 있음', type: 'slacker' },
        { text: '일보다 노는 시간이 더 긴 것 같음', type: 'thief' }
      ]
    },
    {
      id: 8,
      text: '상사가 자리 비우면?',
      options: [
        { text: '똑같이 일함', type: 'worker' },
        { text: '조금 편해지지만 일은 함', type: 'normal' },
        { text: '오 자유시간!', type: 'slacker' },
        { text: '본격적인 휴식 시작', type: 'thief' }
      ]
    },
    {
      id: 9,
      text: '재택근무 시 업무 집중도는?',
      options: [
        { text: '오히려 더 집중됨', type: 'worker' },
        { text: '비슷하거나 조금 낮음', type: 'normal' },
        { text: '솔직히 많이 낮음', type: 'slacker' },
        { text: '재택 = 휴가 느낌', type: 'thief' }
      ]
    },
    {
      id: 10,
      text: '솔직하게, 오늘 진짜 일한 시간은?',
      options: [
        { text: '7시간 이상', type: 'worker' },
        { text: '5~6시간 정도', type: 'normal' },
        { text: '3~4시간...?', type: 'slacker' },
        { text: '음... 그건 비밀', type: 'thief' }
      ]
    }
  ],
  results: {
    worker: {
      type: '모범 사원',
      title: '💼 모범 사원 (루팡 지수: 5%)',
      description: '당신은 진정한 일꾼! 회사의 보배이자 상사의 눈에 든 사람입니다.',
      roopinIndex: '5%',
      workStyle: '열심히 일하는 타입',
      traits: [
        '업무 집중도 최상',
        '효율적인 시간 관리',
        '책임감 있는 자세',
        '성과 중심적'
      ],
      bossThinks: '"이 친구는 믿을 수 있어"',
      advice: '훌륭해요! 하지만 가끔은 쉬어가도 괜찮아요. 번아웃 조심하세요!',
      funFact: '당신 같은 사람이 회사를 굴러가게 합니다 👏'
    },
    normal: {
      type: '평범한 직장인',
      title: '😊 평범한 직장인 (루팡 지수: 30%)',
      description: '적당히 일하고 적당히 쉬는 보통의 직장인! 건강한 밸런스입니다.',
      roopinIndex: '30%',
      workStyle: '균형 잡힌 타입',
      traits: [
        '적당한 업무 집중',
        '휴식도 적당히',
        '무난한 직장 생활',
        '스트레스 관리 양호'
      ],
      bossThinks: '"무난하게 잘 하네"',
      advice: '적당한 밸런스를 유지하고 있어요! 지금처럼 하시면 됩니다.',
      funFact: '대한민국 직장인 평균에 가까워요'
    },
    slacker: {
      type: '슬랙커',
      title: '😎 슬랙커 (루팡 지수: 60%)',
      description: '일도 하지만... 놀기도 하는 타입. 요령 있게 살아가는 중!',
      roopinIndex: '60%',
      workStyle: '효율적(?)인 타입',
      traits: [
        '틈틈이 휴식',
        '요령 있는 업무 처리',
        '눈치 보며 슬랙',
        '나름의 밸런스'
      ],
      bossThinks: '"음... 뭔가 찜찜한데?"',
      advice: '너무 들키지 않게 조심하세요! 적당히가 중요해요. 😅',
      funFact: '화장실 Wi-Fi 속도를 알고 있을 확률 80%'
    },
    thief: {
      type: '월급 루팡',
      title: '🦹 월급 루팡 (루팡 지수: 90%)',
      description: '전설의 월급 루팡... 회사에서 월급 받으며 다른 삶을 사는 타입!',
      roopinIndex: '90%',
      workStyle: '자유로운(?) 영혼',
      traits: [
        '업무 시간 = 개인 시간',
        '눈치 게임 마스터',
        '바쁜 척 연기력 만렙',
        '퇴근만 기다림'
      ],
      bossThinks: '"이 친구 뭐 하는 거지...?"',
      advice: '솔직히... 조금 위험해요. 딱 걸리면 곤란하니 적당히 조절하세요!',
      funFact: '컴퓨터 화면 전환 속도: 0.1초'
    }
  }
};
