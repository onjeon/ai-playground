// decision-regret 테스트 데이터
export const decisionRegret = {
  id: 'decision-regret',
  title: '결정 후회 테스트',
  description: '당신은 결정 후 얼마나 후회하나요? 후회 패턴으로 보는 당신의 성격!',
  questions: [
    {
      id: 1,
      text: '중요한 결정을 내린 후?',
      options: [
        { text: '다른 선택이 나았을까 계속 생각', type: 'high' },
        { text: '잠깐 고민하다가 넘어감', type: 'medium' },
        { text: '결정했으면 끝, 앞만 봄', type: 'low' },
        { text: '결정 자체를 잘 못 함', type: 'avoid' }
      ]
    },
    {
      id: 2,
      text: '쇼핑 후 "이거 살걸..." 생각이?',
      options: [
        { text: '자주, 다른 옵션이 떠오름', type: 'high' },
        { text: '가끔, 큰 금액일 때', type: 'medium' },
        { text: '거의 없음, 산 거에 만족', type: 'low' },
        { text: '그래서 결정을 못 함', type: 'avoid' }
      ]
    },
    {
      id: 3,
      text: '메뉴 고른 후 다른 사람 거 보면?',
      options: [
        { text: '아... 저게 더 맛있어 보여', type: 'high' },
        { text: '궁금하지만 내 것도 OK', type: 'medium' },
        { text: '내 선택에 집중', type: 'low' },
        { text: '그래서 항상 같은 거 시킴', type: 'avoid' }
      ]
    },
    {
      id: 4,
      text: '과거의 선택에 대해?',
      options: [
        { text: '자주 떠올리며 후회함', type: 'high' },
        { text: '가끔 생각나지만 금방 잊음', type: 'medium' },
        { text: '과거는 과거, 신경 안 씀', type: 'low' },
        { text: '후회가 두려워 결정 못 함', type: 'avoid' }
      ]
    },
    {
      id: 5,
      text: '"그때 그랬으면..." 생각 빈도는?',
      options: [
        { text: '매우 자주', type: 'high' },
        { text: '가끔', type: 'medium' },
        { text: '거의 안 함', type: 'low' },
        { text: '그래서 결정을 피함', type: 'avoid' }
      ]
    },
    {
      id: 6,
      text: '결정 후 불안감은?',
      options: [
        { text: '높음, 잘한 건지 계속 의심', type: 'high' },
        { text: '잠깐 있다가 사라짐', type: 'medium' },
        { text: '거의 없음', type: 'low' },
        { text: '결정 전에 너무 불안함', type: 'avoid' }
      ]
    },
    {
      id: 7,
      text: '후회할 때 주로?',
      options: [
        { text: '오래 곱씹고 자책함', type: 'high' },
        { text: '반성하고 다음엔 더 잘하자', type: 'medium' },
        { text: '빨리 털고 넘어감', type: 'low' },
        { text: '후회 자체를 피하려 결정 안 함', type: 'avoid' }
      ]
    },
    {
      id: 8,
      text: '결정력에 대한 자기 평가는?',
      options: [
        { text: '결정은 하는데 후회가 많아', type: 'high' },
        { text: '괜찮은 편이라고 생각', type: 'medium' },
        { text: '빠르고 확실하게 결정함', type: 'low' },
        { text: '결정력이 부족함', type: 'avoid' }
      ]
    },
    {
      id: 9,
      text: '인생의 큰 결정들에 대해?',
      options: [
        { text: '다른 길을 갔으면 어땠을까 생각', type: 'high' },
        { text: '대체로 만족, 가끔 궁금', type: 'medium' },
        { text: '내 선택에 만족함', type: 'low' },
        { text: '큰 결정을 피해왔음', type: 'avoid' }
      ]
    },
    {
      id: 10,
      text: '후회에 대한 당신의 생각은?',
      options: [
        { text: '피할 수 없는 고통', type: 'high' },
        { text: '성장의 일부', type: 'medium' },
        { text: '시간 낭비', type: 'low' },
        { text: '두려움의 원천', type: 'avoid' }
      ]
    }
  ],
  results: {
    high: {
      type: '후회 과다형',
      title: '😔 후회 과다형',
      description: '결정 후 다른 선택을 자주 떠올리는 당신. 완벽을 추구하지만 그게 때로는 고통이 돼요.',
      traits: ['완벽주의', '신중함', '자기 비판적', '분석적'],
      regretLevel: '높음',
      advice: '"충분히 좋은 선택"도 괜찮아요. 모든 선택에 완벽한 답은 없어요. 결정했으면 믿어보세요!'
    },
    medium: {
      type: '균형적 후회형',
      title: '⚖️ 균형적 후회형',
      description: '적당히 반성하고 넘어가는 건강한 패턴! 후회를 배움으로 바꿔요.',
      traits: ['균형감', '성장 지향', '적응력', '자기 객관화'],
      regretLevel: '적당함',
      advice: '건강한 후회 패턴이에요! 후회에서 배우고 앞으로 나아가는 당신, 멋져요.'
    },
    low: {
      type: '후회 없는 타입',
      title: '😎 후회 없는 타입',
      description: '결정했으면 끝! 뒤돌아보지 않는 쿨한 당신.',
      traits: ['결단력', '자신감', '앞으로 지향', '스트레스 저항'],
      regretLevel: '낮음',
      advice: '훌륭한 결단력! 하지만 가끔은 반성도 성장에 도움이 돼요. 적당한 되돌아봄도 필요해요.'
    },
    avoid: {
      type: '결정 회피형',
      title: '😰 결정 회피형',
      description: '후회가 두려워 결정 자체를 피하는 당신. 안전하지만 기회를 놓칠 수 있어요.',
      traits: ['불안감', '안전 추구', '우유부단', '회피적'],
      regretLevel: '회피',
      advice: '완벽한 선택은 없어요. 작은 결정부터 연습해보세요. 결정 안 하는 것도 결정이에요!'
    }
  }
};
