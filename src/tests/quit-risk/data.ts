// quit-risk 테스트 데이터
export const quitriskTest = {
  id: 'quit-risk',
  title: '퇴사 위험도 테스트',
  description: '당신의 퇴사각은 몇 도? 현재 직장 생활 만족도와 퇴사 위험 신호를 체크해봅니다!',
  questions: [
    {
      id: 1,
      text: '일요일 저녁, 내일 출근 생각에?',
      options: [
        { text: '뭐 그냥 평범한 일요일', type: 'low' },
        { text: '약간 우울하지만 참을 만함', type: 'medium' },
        { text: '심각하게 우울해짐', type: 'high' },
        { text: '월요일이라는 단어만 들어도 힘듦', type: 'critical' }
      ]
    },
    {
      id: 2,
      text: '요즘 이직 사이트 접속 빈도는?',
      options: [
        { text: '거의 안 봄', type: 'low' },
        { text: '심심할 때 가끔', type: 'medium' },
        { text: '매일 구경함', type: 'high' },
        { text: '이력서까지 넣어봄', type: 'critical' }
      ]
    },
    {
      id: 3,
      text: '현재 업무에 대한 흥미는?',
      options: [
        { text: '재미있거나 의미 있음', type: 'low' },
        { text: '그냥 일이니까 함', type: 'medium' },
        { text: '지루하고 의미 없음', type: 'high' },
        { text: '고통스러움', type: 'critical' }
      ]
    },
    {
      id: 4,
      text: '회사에서 성장하고 있다는 느낌은?',
      options: [
        { text: '배우는 게 많다', type: 'low' },
        { text: '조금씩 성장 중', type: 'medium' },
        { text: '제자리걸음인 것 같음', type: 'high' },
        { text: '오히려 퇴보하는 느낌', type: 'critical' }
      ]
    },
    {
      id: 5,
      text: '상사나 동료와의 관계는?',
      options: [
        { text: '좋은 편, 만족스러움', type: 'low' },
        { text: '무난함, 업무적 관계', type: 'medium' },
        { text: '스트레스 받는 사람이 있음', type: 'high' },
        { text: '매일이 전쟁 같음', type: 'critical' }
      ]
    },
    {
      id: 6,
      text: '연봉이나 보상에 대한 만족도는?',
      options: [
        { text: '만족스러움', type: 'low' },
        { text: '그럭저럭 괜찮음', type: 'medium' },
        { text: '부족하다고 느낌', type: 'high' },
        { text: '심각하게 불만족', type: 'critical' }
      ]
    },
    {
      id: 7,
      text: '"퇴사하고 싶다"는 생각이 드는 빈도는?',
      options: [
        { text: '거의 안 듦', type: 'low' },
        { text: '가끔, 힘들 때만', type: 'medium' },
        { text: '자주, 일주일에 여러 번', type: 'high' },
        { text: '매일, 출근하면 바로', type: 'critical' }
      ]
    },
    {
      id: 8,
      text: '회사에서 인정받고 있다는 느낌은?',
      options: [
        { text: '인정받고 있다고 느낌', type: 'low' },
        { text: '보통, 특별히 좋지도 나쁘지도', type: 'medium' },
        { text: '무시당하는 느낌이 있음', type: 'high' },
        { text: '투명인간 취급', type: 'critical' }
      ]
    },
    {
      id: 9,
      text: '출근 전 몸 상태는?',
      options: [
        { text: '평소와 같음', type: 'low' },
        { text: '약간 피곤하지만 괜찮음', type: 'medium' },
        { text: '두통, 소화불량 등 증상 있음', type: 'high' },
        { text: '출근하기 싫어서 몸이 아픔', type: 'critical' }
      ]
    },
    {
      id: 10,
      text: '5년 후에도 이 회사에 있을 것 같아요?',
      options: [
        { text: '아마 있을 것 같음', type: 'low' },
        { text: '글쎄, 상황 봐서', type: 'medium' },
        { text: '아닐 것 같음', type: 'high' },
        { text: '5년은커녕 1년도 모르겠음', type: 'critical' }
      ]
    }
  ],
  results: {
    low: {
      type: '안전 구역',
      title: '🟢 안전 구역 (퇴사각 15°)',
      description: '현재 직장에 만족하고 있어요! 퇴사 위험도가 낮은 안정적인 상태입니다.',
      riskLevel: '낮음',
      riskScore: '15°',
      traits: [
        '업무에 의미를 느끼는 중',
        '관계도 대체로 만족스러움',
        '성장하고 있다는 느낌',
        '출근이 크게 힘들지 않음'
      ],
      advice: '좋은 상태예요! 하지만 현재에 안주하지 말고 지속적인 성장을 위해 노력하세요.',
      warning: '특별한 경고 없음'
    },
    medium: {
      type: '주의 구역',
      title: '🟡 주의 구역 (퇴사각 45°)',
      description: '가끔 퇴사 생각이 드는 보통의 직장인 상태입니다. 아직은 괜찮지만 관리가 필요해요.',
      riskLevel: '보통',
      riskScore: '45°',
      traits: [
        '힘들 때 퇴사 생각이 듦',
        '완전히 만족스럽지는 않음',
        '그래도 다닐 만은 함',
        '더 좋은 기회가 있다면...'
      ],
      advice: '현재 불만족스러운 부분을 파악하고 개선 가능한지 고민해보세요. 이직은 신중하게!',
      warning: '스트레스 관리에 신경 쓰세요'
    },
    high: {
      type: '위험 구역',
      title: '🟠 위험 구역 (퇴사각 75°)',
      description: '퇴사 생각이 자주 드는 위험 신호입니다. 번아웃 가능성이 있으니 대책이 필요해요.',
      riskLevel: '높음',
      riskScore: '75°',
      traits: [
        '출근이 점점 힘들어짐',
        '업무 의미를 못 느낌',
        '이직 사이트 자주 방문',
        '월요일이 두려움'
      ],
      advice: '지금 상태가 지속되면 건강에도 영향을 미칠 수 있어요. 진지하게 이직이나 휴식을 고려해보세요.',
      warning: '번아웃 초기 증상일 수 있어요!'
    },
    critical: {
      type: '탈출 필요',
      title: '🔴 탈출 필요 (퇴사각 90°)',
      description: '심각한 수준의 퇴사 욕구입니다. 건강을 위해 빠른 결정이 필요해요!',
      riskLevel: '심각',
      riskScore: '90°',
      traits: [
        '매일 퇴사 생각',
        '출근 자체가 고통',
        '신체 증상까지 나타남',
        '회사만 생각하면 우울함'
      ],
      advice: '지금 당장 변화가 필요해요. 연차를 쓰거나, 진지하게 이직을 준비하거나, 전문가 상담을 고려해보세요.',
      warning: '이대로는 건강이 위험해요. 나를 먼저 챙기세요!'
    }
  }
};
