// 돈 성격 테스트 데이터
export const moneyPersonalityTest = {
  id: 'money-personality',
  title: '돈 성격 테스트',
  description: '돈을 대하는 당신의 성격은? 저축러, 투자러, 소비러, 무관심러 중 나의 금전 성격을 분석합니다!',
  questions: [
    {
      id: 1,
      text: '월급이 들어오면 가장 먼저 하는 일은?',
      options: [
        { id: 'a', text: '정해진 금액을 저축', score: { saver: 3, investor: 1, spender: 0, indifferent: 0 } },
        { id: 'b', text: '투자 계좌로 이체', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '갖고 싶던 것 구매', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '특별히 하는 것 없음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 2,
      text: '예상치 못한 보너스가 들어오면?',
      options: [
        { id: 'a', text: '비상금으로 저축', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '주식이나 코인에 투자', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '자신에게 선물!', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '그냥 계좌에 둠', score: { saver: 1, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 3,
      text: '가계부를 쓰나요?',
      options: [
        { id: 'a', text: '매일 꼼꼼히 기록', score: { saver: 3, investor: 1, spender: 0, indifferent: 0 } },
        { id: 'b', text: '앱으로 대략 확인', score: { saver: 1, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '필요성을 못 느낌', score: { saver: 0, investor: 0, spender: 3, indifferent: 1 } },
        { id: 'd', text: '쓴 적 없음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 4,
      text: '돈에 대한 생각은?',
      options: [
        { id: 'a', text: '안전하게 모아야 함', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '불려야 의미 있음', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '쓰려고 버는 것', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '별로 중요하지 않음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 5,
      text: '세일 기간에 나는?',
      options: [
        { id: 'a', text: '필요한 것만 저렴하게', score: { saver: 3, investor: 0, spender: 1, indifferent: 0 } },
        { id: 'b', text: '세일보다 투자 관심', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '득템의 기회!', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '별 관심 없음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 6,
      text: '친구들 사이에서 나는?',
      options: [
        { id: 'a', text: '절약 노하우 전파자', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '투자 정보 공유자', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '돈 잘 쓰는 편', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '돈 얘기 별로 안 함', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 7,
      text: '재테크 정보를 어떻게 얻나요?',
      options: [
        { id: 'a', text: '예금/적금 상품 비교', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '투자 관련 뉴스/유튜브', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '캐시백/할인 정보', score: { saver: 1, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '특별히 찾아보지 않음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 8,
      text: '큰 지출을 앞두고?',
      options: [
        { id: 'a', text: '오래 고민하고 아낌', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '투자 수익으로 충당', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '필요하면 과감히 지출', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '별로 계획 안 세움', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 9,
      text: '돈과 관련된 목표가 있나요?',
      options: [
        { id: 'a', text: '목표 저축액 달성', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '투자 수익률 달성', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '하고 싶은 것 다 하기', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '특별한 목표 없음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 10,
      text: '경제 뉴스에 관심이?',
      options: [
        { id: 'a', text: '금리/예금 소식 주목', score: { saver: 3, investor: 1, spender: 0, indifferent: 0 } },
        { id: 'b', text: '주식/부동산 관심', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '소비 트렌드 관심', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '별로 관심 없음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 11,
      text: '10년 후 재정 상태는?',
      options: [
        { id: 'a', text: '목돈을 모아뒀을 것', score: { saver: 3, investor: 0, spender: 0, indifferent: 0 } },
        { id: 'b', text: '투자로 자산 증가', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '좋은 경험으로 가득', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '생각해본 적 없음', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
    {
      id: 12,
      text: '돈 버는 이유는?',
      options: [
        { id: 'a', text: '안정적인 미래를 위해', score: { saver: 3, investor: 1, spender: 0, indifferent: 0 } },
        { id: 'b', text: '더 큰 돈을 만들기 위해', score: { saver: 0, investor: 3, spender: 0, indifferent: 0 } },
        { id: 'c', text: '원하는 것을 사기 위해', score: { saver: 0, investor: 0, spender: 3, indifferent: 0 } },
        { id: 'd', text: '그냥 살다 보니', score: { saver: 0, investor: 0, spender: 0, indifferent: 3 } },
      ],
    },
  ],
  results: {
    saver: {
      id: 'saver',
      title: '저축 마스터',
      description: '안전과 안정을 중시하는 저축형! 꾸준히 모으는 것이 부자의 지름길이라 믿습니다.',
      traits: ['안전 추구', '계획적', '절약형', '미래 대비'],
      emoji: '🐷',
      color: '#27AE60',
    },
    investor: {
      id: 'investor',
      title: '투자 러버',
      description: '돈이 일하게 만드는 투자형! 수익률과 자산 증식에 관심이 많습니다.',
      traits: ['성장 추구', '리스크 감수', '정보 수집', '수익 지향'],
      emoji: '📈',
      color: '#3498DB',
    },
    spender: {
      id: 'spender',
      title: '욜로 소비러',
      description: '현재를 즐기는 소비형! 돈은 쓰려고 버는 것이라 생각합니다.',
      traits: ['현재 중심', '경험 중시', '즐거움 추구', '자유로움'],
      emoji: '🛍️',
      color: '#E74C3C',
    },
    indifferent: {
      id: 'indifferent',
      title: '돈 무관심파',
      description: '돈보다 중요한 것이 많은 유형! 금전적인 것에 크게 연연하지 않습니다.',
      traits: ['초연함', '다른 가치 중시', '단순함', '무욕'],
      emoji: '🧘',
      color: '#9B59B6',
    },
  },
};
