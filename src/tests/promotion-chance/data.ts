// promotion-chance 테스트 데이터
export const promotionchanceTest = {
  id: 'promotion-chance',
  title: '승진 가능성 테스트',
  description: '당신의 업무 스타일과 태도로 알아보는 승진 가능성! 직장에서 얼마나 인정받고 있나요?',
  questions: [
    {
      id: 1,
      text: '상사에게 자신의 성과를 어필하는 편인가요?',
      options: [
        { text: '적극적으로 알림, 어필도 능력이다', type: 'high' },
        { text: '적당히, 기회가 오면', type: 'medium' },
        { text: '어필은 좀... 일로 보여주지', type: 'low' },
        { text: '어필? 그게 뭐죠?', type: 'verylow' }
      ]
    },
    {
      id: 2,
      text: '추가 업무나 프로젝트 제안이 왔을 때?',
      options: [
        { text: '적극 수락, 기회로 삼음', type: 'high' },
        { text: '괜찮으면 하고, 아니면 거절', type: 'medium' },
        { text: '내 일도 바쁜데... 거절', type: 'low' },
        { text: '추가 업무? 싫어요', type: 'verylow' }
      ]
    },
    {
      id: 3,
      text: '회의에서 당신의 발언 빈도는?',
      options: [
        { text: '자주, 의견을 적극 개진', type: 'high' },
        { text: '필요할 때 적당히', type: 'medium' },
        { text: '거의 안 함, 듣는 편', type: 'low' },
        { text: '회의에서 존재감 없음', type: 'verylow' }
      ]
    },
    {
      id: 4,
      text: '상사와의 관계는?',
      options: [
        { text: '좋음, 신뢰받는 편', type: 'high' },
        { text: '무난함, 업무적 관계', type: 'medium' },
        { text: '별로... 어색함', type: 'low' },
        { text: '안 좋음, 갈등이 있음', type: 'verylow' }
      ]
    },
    {
      id: 5,
      text: '업무 외 스킬 개발이나 자기계발은?',
      options: [
        { text: '꾸준히 하고 있음', type: 'high' },
        { text: '가끔 생각나면', type: 'medium' },
        { text: '거의 안 함', type: 'low' },
        { text: '자기계발? 그럴 시간 없음', type: 'verylow' }
      ]
    },
    {
      id: 6,
      text: '팀 내에서 당신의 역할은?',
      options: [
        { text: '리더 또는 핵심 멤버', type: 'high' },
        { text: '성실한 팀원', type: 'medium' },
        { text: '조용한 팀원', type: 'low' },
        { text: '있는 듯 없는 듯', type: 'verylow' }
      ]
    },
    {
      id: 7,
      text: '업무 실수가 발생했을 때?',
      options: [
        { text: '빠르게 인정하고 해결책 제시', type: 'high' },
        { text: '솔직하게 인정', type: 'medium' },
        { text: '일단 숨기고 보려 함', type: 'low' },
        { text: '남 탓하거나 변명', type: 'verylow' }
      ]
    },
    {
      id: 8,
      text: '승진에 대한 욕구는?',
      options: [
        { text: '강함, 목표가 있음', type: 'high' },
        { text: '있긴 한데 막 절실하진 않음', type: 'medium' },
        { text: '별로, 현 상태도 괜찮음', type: 'low' },
        { text: '승진보다 퇴근이 중요', type: 'verylow' }
      ]
    },
    {
      id: 9,
      text: '회사 정치(사내 정치)에 대해?',
      options: [
        { text: '어느 정도 필요, 관계 관리함', type: 'high' },
        { text: '싫지만 현실이니까', type: 'medium' },
        { text: '관심 없음, 일만 할래', type: 'low' },
        { text: '싫어, 그래서 안 함', type: 'verylow' }
      ]
    },
    {
      id: 10,
      text: '현재 회사에서의 비전은?',
      options: [
        { text: '장기적 커리어 플랜이 있음', type: 'high' },
        { text: '일단 당분간은 여기서', type: 'medium' },
        { text: '잘 모르겠음', type: 'low' },
        { text: '빨리 나가고 싶음', type: 'verylow' }
      ]
    }
  ],
  results: {
    high: {
      type: '승진 유력 후보',
      title: '🚀 승진 유력 후보',
      description: '승진 가능성 매우 높음! 적극적인 태도와 성과로 인정받고 있는 타입입니다.',
      traits: [
        '적극적이고 주도적',
        '성과 어필을 잘함',
        '상사와 좋은 관계',
        '커리어 목표가 명확함'
      ],
      advice: '잘 하고 계세요! 하지만 경쟁에 치여 동료 관계를 소홀히 하지 않도록 주의하세요.'
    },
    medium: {
      type: '안정적 성장형',
      title: '📈 안정적 성장형',
      description: '꾸준히 인정받는 중! 성실함으로 차근차근 성장하고 있는 타입입니다.',
      traits: [
        '성실한 업무 태도',
        '안정적인 성과',
        '무난한 관계',
        '현실적인 시각'
      ],
      advice: '조금 더 적극적으로 자신을 어필해보세요. 실력은 있으니 알리는 것도 중요해요!'
    },
    low: {
      type: '조용한 실무자',
      title: '🔧 조용한 실무자',
      description: '묵묵히 일하는 타입! 승진보다 업무 자체에 집중하는 스타일입니다.',
      traits: [
        '조용하고 성실함',
        '어필에 약함',
        '승진 욕구가 낮음',
        '자기 일에 집중'
      ],
      advice: '일 잘하는 것도 중요하지만, 가끔은 보여주는 것도 필요해요. 승진을 원한다면 목소리를 내보세요!'
    },
    verylow: {
      type: '마이웨이형',
      title: '🏃 마이웨이형',
      description: '승진? 관심 없어요! 회사보다 자기 삶이 중요한 자유로운 영혼입니다.',
      traits: [
        '승진에 관심 없음',
        '워라밸 중시',
        '회사에 대한 애착 낮음',
        '자기 삶에 집중'
      ],
      advice: '본인의 가치관대로 사는 것도 좋지만, 커리어도 인생의 일부예요. 균형을 찾아보세요!'
    }
  }
};
