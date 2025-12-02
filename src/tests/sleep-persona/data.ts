// sleep-persona 테스트 데이터
export const sleeppersonaTest = {
  id: 'sleep-persona',
  title: '수면 페르소나 테스트',
  description: '당신의 수면 스타일은? 잠버릇부터 기상 패턴까지, 수면 성격을 분석해보세요!',
  questions: [
    {
      id: 1,
      text: '잠드는 데 보통 얼마나 걸려요?',
      options: [
        { text: '누우면 기절 (5분 이내)', type: 'instant' },
        { text: '적당히 (10-20분)', type: 'normal' },
        { text: '꽤 오래 (30분 이상)', type: 'struggle' },
        { text: '매일 다름, 예측 불가', type: 'irregular' }
      ]
    },
    {
      id: 2,
      text: '아침에 알람이 울리면?',
      options: [
        { text: '한 번에 일어남!', type: 'instant' },
        { text: '1-2번 스누즈 후 기상', type: 'normal' },
        { text: '스누즈 10번, 결국 늦음', type: 'struggle' },
        { text: '알람 전에 일어날 때도 있음', type: 'irregular' }
      ]
    },
    {
      id: 3,
      text: '잠들기 전 루틴은?',
      options: [
        { text: '없음, 그냥 눕고 끝', type: 'instant' },
        { text: '폰 좀 보다가 잠듦', type: 'normal' },
        { text: 'ASMR, 명상, 온갖 수면 테크닉 동원', type: 'struggle' },
        { text: '매일 다름, 루틴 없음', type: 'irregular' }
      ]
    },
    {
      id: 4,
      text: '밤에 자다가 깨는 경우는?',
      options: [
        { text: '거의 없음, 폭탄이 터져도 잠', type: 'instant' },
        { text: '화장실 가려고 한 번 정도', type: 'normal' },
        { text: '자주 깸, 숙면이 어려움', type: 'struggle' },
        { text: '낮잠 많이 자면 밤에 잘 깸', type: 'irregular' }
      ]
    },
    {
      id: 5,
      text: '주말 수면 패턴은?',
      options: [
        { text: '평일이랑 비슷, 일찍 일어남', type: 'instant' },
        { text: '1-2시간 늦게 기상', type: 'normal' },
        { text: '몰아서 잠, 12시간 이상도', type: 'struggle' },
        { text: '패턴? 그때그때 달라요', type: 'irregular' }
      ]
    },
    {
      id: 6,
      text: '이상적인 수면 환경은?',
      options: [
        { text: '어디서든 OK, 조건 필요 없음', type: 'instant' },
        { text: '적당히 어둡고 조용하면 됨', type: 'normal' },
        { text: '완벽한 암막 + 적정 온도 + 화이트노이즈', type: 'struggle' },
        { text: '기분에 따라 다름', type: 'irregular' }
      ]
    },
    {
      id: 7,
      text: '커피/카페인 영향은?',
      options: [
        { text: '저녁에 마셔도 잘 잠', type: 'instant' },
        { text: '오후 늦게 마시면 좀 영향 있음', type: 'normal' },
        { text: '점심 이후 금지! 안 그럼 못 잠', type: 'struggle' },
        { text: '그날그날 다름', type: 'irregular' }
      ]
    },
    {
      id: 8,
      text: '낮잠에 대한 생각은?',
      options: [
        { text: '필요 없음, 밤에 충분히 잠', type: 'instant' },
        { text: '가끔 20분 정도 파워냅', type: 'normal' },
        { text: '낮잠 자면 밤에 못 자서 피함', type: 'struggle' },
        { text: '자주 잠, 밤낮이 바뀌기도', type: 'irregular' }
      ]
    },
    {
      id: 9,
      text: '수면 추적 앱을 쓴다면?',
      options: [
        { text: '필요 없음, 알아서 잘 잠', type: 'instant' },
        { text: '가끔 궁금해서 써봄', type: 'normal' },
        { text: '필수! 수면 점수 체크함', type: 'struggle' },
        { text: '써봤는데 데이터가 너무 들쭉날쭉', type: 'irregular' }
      ]
    },
    {
      id: 10,
      text: '수면에 대한 당신의 생각은?',
      options: [
        { text: '잠? 누우면 자는 거지 뭐', type: 'instant' },
        { text: '적당히 자야 컨디션 좋음', type: 'normal' },
        { text: '수면이 제일 중요! 숙면을 위해 노력', type: 'struggle' },
        { text: '밤에 자야 한다는 법은 없잖아?', type: 'irregular' }
      ]
    }
  ],
  results: {
    instant: {
      type: '기절형 수면러',
      title: '💤 기절형 수면러',
      description: '누우면 기절! 수면에 관해서는 축복받은 타입. 아무데서나 잘 자요.',
      traits: [
        '초고속 입면',
        '폭탄도 못 깨움',
        '어디서든 숙면',
        '아침형 인간 기질'
      ],
      sleepQuality: '최고급',
      chronotype: '타고난 숙면러',
      advice: '축복받은 수면 능력! 하지만 너무 잘 자서 중요한 알람을 놓치지 않도록 주의하세요.'
    },
    normal: {
      type: '균형형 수면러',
      title: '😴 균형형 수면러',
      description: '건강한 수면 습관의 소유자! 적당히 자고 적당히 일어나는 이상적인 타입.',
      traits: [
        '안정적인 수면 패턴',
        '적정 수면 시간 유지',
        '규칙적인 생활',
        '건강한 습관'
      ],
      sleepQuality: '양호',
      chronotype: '균형 잡힌 수면러',
      advice: '이상적인 수면 패턴이에요! 이 좋은 습관을 계속 유지하세요.'
    },
    struggle: {
      type: '예민형 수면러',
      title: '🌙 예민형 수면러',
      description: '수면에 민감한 타입! 숙면을 위해 노력하지만 쉽지 않아요.',
      traits: [
        '잠들기 어려움',
        '숙면 욕구 강함',
        '수면 환경 민감',
        '수면 테크닉 박사'
      ],
      sleepQuality: '노력 필요',
      chronotype: '예민한 수면러',
      advice: '수면 위생을 지키고, 잠자리에서는 걱정을 내려놓으세요. 인지행동치료(CBT-I)도 도움이 될 수 있어요.'
    },
    irregular: {
      type: '자유로운 수면러',
      title: '🌀 자유로운 수면러',
      description: '패턴? 그런 거 없어요. 자유로운 영혼의 불규칙한 수면 스타일!',
      traits: [
        '불규칙한 취침/기상',
        '밤낮 자유로운 전환',
        '적응력 높음',
        '패턴 없는 패턴'
      ],
      sleepQuality: '롤러코스터',
      chronotype: '자유로운 수면러',
      advice: '유연성은 장점이지만, 건강을 위해 어느 정도 규칙적인 수면 시간을 만들어보세요. 생체리듬도 중요해요!'
    }
  }
};
