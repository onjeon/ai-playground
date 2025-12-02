// work-boundary 테스트 데이터
export const workBoundary = {
  id: 'work-boundary',
  title: '워라밸 경계 테스트',
  description: '당신의 일과 삶의 경계는? 워라밸 스타일을 분석해보세요!',
  questions: [
    {
      id: 1,
      text: '퇴근 후 업무 연락이 오면?',
      options: [
        { text: '바로 확인하고 처리', type: 'workaholic' },
        { text: '급한 거면 확인', type: 'flexible' },
        { text: '다음 날 확인', type: 'balanced' },
        { text: '무시, 퇴근은 퇴근', type: 'strict' }
      ]
    },
    {
      id: 2,
      text: '주말에 일 생각이?',
      options: [
        { text: '자주, 머릿속에서 안 떠남', type: 'workaholic' },
        { text: '가끔, 중요한 일 있을 때', type: 'flexible' },
        { text: '거의 안 함, 주말은 휴식', type: 'balanced' },
        { text: '절대 안 함, 단절 필수', type: 'strict' }
      ]
    },
    {
      id: 3,
      text: '휴가 중 업무 메일은?',
      options: [
        { text: '계속 확인', type: 'workaholic' },
        { text: '하루에 한 번 정도', type: 'flexible' },
        { text: '급한 것만 최소로', type: 'balanced' },
        { text: '절대 안 봄', type: 'strict' }
      ]
    },
    {
      id: 4,
      text: '업무 외 시간에 가장 중요한 것은?',
      options: [
        { text: '커리어 발전을 위한 공부', type: 'workaholic' },
        { text: '적당히 일도 하고 쉬기도', type: 'flexible' },
        { text: '가족/친구와의 시간', type: 'balanced' },
        { text: '완전한 휴식', type: 'strict' }
      ]
    },
    {
      id: 5,
      text: '야근에 대한 생각은?',
      options: [
        { text: '필요하면 당연히', type: 'workaholic' },
        { text: '가끔은 어쩔 수 없지', type: 'flexible' },
        { text: '최소화하려 노력', type: 'balanced' },
        { text: '절대 안 함', type: 'strict' }
      ]
    },
    {
      id: 6,
      text: '일과 삶의 구분은?',
      options: [
        { text: '거의 없음, 일이 삶', type: 'workaholic' },
        { text: '유연하게 섞여있음', type: 'flexible' },
        { text: '분리하려 노력함', type: 'balanced' },
        { text: '철저히 분리', type: 'strict' }
      ]
    },
    {
      id: 7,
      text: '일에서 오는 스트레스는?',
      options: [
        { text: '익숙함, 항상 함께', type: 'workaholic' },
        { text: '있지만 관리 가능', type: 'flexible' },
        { text: '워라밸로 해소', type: 'balanced' },
        { text: '최소화하려 경계를 둠', type: 'strict' }
      ]
    },
    {
      id: 8,
      text: '업무 알림 설정은?',
      options: [
        { text: '항상 ON', type: 'workaholic' },
        { text: '근무 시간엔 ON', type: 'flexible' },
        { text: '중요한 것만 ON', type: 'balanced' },
        { text: '퇴근 후 OFF', type: 'strict' }
      ]
    },
    {
      id: 9,
      text: '휴식의 의미는?',
      options: [
        { text: '더 일하기 위한 재충전', type: 'workaholic' },
        { text: '필요할 때 적당히', type: 'flexible' },
        { text: '삶의 균형을 위한 필수', type: 'balanced' },
        { text: '삶의 목적 그 자체', type: 'strict' }
      ]
    },
    {
      id: 10,
      text: '워라밸에 대한 생각은?',
      options: [
        { text: '일이 잘 되면 삶도 좋아짐', type: 'workaholic' },
        { text: '상황에 따라 유연하게', type: 'flexible' },
        { text: '균형이 중요', type: 'balanced' },
        { text: '삶이 일보다 우선', type: 'strict' }
      ]
    }
  ],
  results: {
    workaholic: {
      type: '워커홀릭형',
      title: '💼 워커홀릭형',
      description: '일이 곧 삶! 열정적이지만 경계가 없는 당신.',
      traits: ['일 중심', '열정적', '경계 없음', '성취 지향'],
      boundaryLevel: '거의 없음',
      advice: '열정은 좋지만, 번아웃 조심하세요! 휴식도 성과의 일부예요.'
    },
    flexible: {
      type: '유연형',
      title: '🔄 유연형',
      description: '상황에 맞게 조절하는 당신! 적응력이 높아요.',
      traits: ['유연한', '적응적', '상황 판단', '효율적'],
      boundaryLevel: '유연함',
      advice: '적응력은 장점이에요! 하지만 자신만의 기준도 세워보세요.'
    },
    balanced: {
      type: '균형형',
      title: '⚖️ 균형형',
      description: '일과 삶의 균형을 추구하는 당신! 건강한 경계를 유지해요.',
      traits: ['균형 추구', '경계 설정', '건강한 분리', '자기 관리'],
      boundaryLevel: '균형 잡힌',
      advice: '이상적인 워라밸이에요! 이 균형을 유지하세요.'
    },
    strict: {
      type: '철저 분리형',
      title: '🚪 철저 분리형',
      description: '일과 삶을 철저히 분리하는 당신! 명확한 경계가 있어요.',
      traits: ['명확한 경계', '삶 우선', '휴식 중시', '단절 능력'],
      boundaryLevel: '철저함',
      advice: '경계는 중요해요! 하지만 가끔은 유연성도 필요할 수 있어요.'
    }
  }
};
