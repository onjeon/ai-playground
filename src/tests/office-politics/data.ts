// office-politics 테스트 데이터
export const officepoliticsTest = {
  id: 'office-politics',
  title: '직장 내 정치력 테스트',
  description: '당신의 사내 정치 능력은? 조직에서 살아남는 정치적 감각을 측정해봅니다!',
  questions: [
    {
      id: 1,
      text: '상사가 부당한 지시를 할 때?',
      options: [
        { text: '바로 반박한다', type: 'low' },
        { text: '이유를 물어보고 판단', type: 'medium' },
        { text: '일단 따르고 나중에 풀어감', type: 'high' },
        { text: '상사 위 사람에게 우회 보고', type: 'master' }
      ]
    },
    {
      id: 2,
      text: '동료들 사이에서 당신의 포지션은?',
      options: [
        { text: '일만 잘하면 되지', type: 'low' },
        { text: '무난하게 잘 지냄', type: 'medium' },
        { text: '정보 허브, 이것저것 알고 있음', type: 'high' },
        { text: '모두와 친하지만 누구 편도 아님', type: 'master' }
      ]
    },
    {
      id: 3,
      text: '회사 내 파벌이 있다면?',
      options: [
        { text: '관심 없음, 중립', type: 'low' },
        { text: '어디 소속인지 파악 정도', type: 'medium' },
        { text: '유리한 쪽에 슬쩍', type: 'high' },
        { text: '양쪽 다 관계 유지', type: 'master' }
      ]
    },
    {
      id: 4,
      text: '윗사람에게 안 좋은 소식을 전할 때?',
      options: [
        { text: '사실 그대로 직구로', type: 'low' },
        { text: '조심스럽게 전달', type: 'medium' },
        { text: '해결책과 함께 전달', type: 'high' },
        { text: '타이밍과 방법을 계산해서', type: 'master' }
      ]
    },
    {
      id: 5,
      text: '공이 있을 때 어필 방법은?',
      options: [
        { text: '말 안 해도 알아주겠지', type: 'low' },
        { text: '보고서에 슬쩍 언급', type: 'medium' },
        { text: '상사에게 직접 어필', type: 'high' },
        { text: '다른 사람 입을 통해 퍼지게', type: 'master' }
      ]
    },
    {
      id: 6,
      text: '회의에서 의견 충돌 시?',
      options: [
        { text: '맞는 말이면 끝까지 주장', type: 'low' },
        { text: '상황 봐서 조율', type: 'medium' },
        { text: '결정권자 의중 파악 후 발언', type: 'high' },
        { text: '나중에 1:1로 설득', type: 'master' }
      ]
    },
    {
      id: 7,
      text: '뒷담화에 대한 태도는?',
      options: [
        { text: '안 함, 관심 없음', type: 'low' },
        { text: '듣기만 함', type: 'medium' },
        { text: '정보 수집용으로 활용', type: 'high' },
        { text: '흘리고 싶은 정보만 흘림', type: 'master' }
      ]
    },
    {
      id: 8,
      text: '승진 경쟁에서 당신의 전략은?',
      options: [
        { text: '실력으로만 승부', type: 'low' },
        { text: '실력 + 어느 정도 어필', type: 'medium' },
        { text: '실력 + 관계 관리', type: 'high' },
        { text: '종합적 전략 (실력+관계+타이밍)', type: 'master' }
      ]
    },
    {
      id: 9,
      text: '회식이나 사내 모임에 대해?',
      options: [
        { text: '싫으면 안 감', type: 'low' },
        { text: '가끔 참석', type: 'medium' },
        { text: '전략적으로 참석', type: 'high' },
        { text: '중요한 자리는 반드시 참석', type: 'master' }
      ]
    },
    {
      id: 10,
      text: '사내 정치에 대한 생각은?',
      options: [
        { text: '더럽다, 나는 안 함', type: 'low' },
        { text: '필요악이긴 함', type: 'medium' },
        { text: '어느 정도 필요함', type: 'high' },
        { text: '정치도 능력이다', type: 'master' }
      ]
    }
  ],
  results: {
    low: {
      type: '정치 무관심형',
      title: '😇 정치 무관심형 (정치력: 20%)',
      description: '실력으로 승부하고 싶은 타입! 사내 정치에 관심이 없거나 거부감이 있습니다.',
      politicsLevel: '낮음 (20%)',
      traits: [
        '실력 중심 사고',
        '정치에 관심 없음',
        '솔직하고 직설적',
        '불합리에 참지 않음'
      ],
      strength: '진정성 있고 신뢰받는 이미지',
      weakness: '조직 내 보이지 않는 힘을 놓칠 수 있음',
      advice: '실력도 중요하지만, 조직에서는 관계도 중요해요. 조금만 관심을 가져보세요.'
    },
    medium: {
      type: '균형 잡힌 현실파',
      title: '⚖️ 균형 잡힌 현실파 (정치력: 50%)',
      description: '적당히 눈치 보면서 적당히 자기 주장도 하는 타입. 무난한 직장 생활 중입니다.',
      politicsLevel: '보통 (50%)',
      traits: [
        '상황에 맞게 대처',
        '적당한 관계 관리',
        '실력과 처세 균형',
        '무난한 포지션'
      ],
      strength: '안정적인 직장 생활',
      weakness: '특별히 눈에 띄지 않을 수 있음',
      advice: '균형 잡힌 접근이에요! 필요할 때는 조금 더 적극적으로 해도 좋아요.'
    },
    high: {
      type: '정치적 감각파',
      title: '🎯 정치적 감각파 (정치력: 75%)',
      description: '조직의 흐름을 읽을 줄 아는 타입! 정치적 감각이 있어 기회를 잘 잡습니다.',
      politicsLevel: '높음 (75%)',
      traits: [
        '조직 역학 이해',
        '전략적 행동',
        '정보 수집 능력',
        '타이밍을 잘 잡음'
      ],
      strength: '승진과 기회를 잡는 능력',
      weakness: '계산적으로 보일 수 있음',
      advice: '좋은 정치적 감각이에요! 하지만 진정성도 잃지 마세요.'
    },
    master: {
      type: '정치 마스터',
      title: '🦊 정치 마스터 (정치력: 95%)',
      description: '조직의 보이지 않는 흐름까지 읽는 타입! 정치적 수완이 뛰어납니다.',
      politicsLevel: '매우 높음 (95%)',
      traits: [
        '모든 흐름을 읽음',
        '우회 전략에 능함',
        '관계 관리의 달인',
        '원하는 것을 얻어냄'
      ],
      strength: '조직에서 원하는 것을 얻을 수 있음',
      weakness: '신뢰를 잃을 수 있음, 진정한 관계 형성 어려움',
      advice: '대단한 능력이지만, 사람들은 진심을 알아봐요. 가끔은 솔직해지세요.'
    }
  }
};
