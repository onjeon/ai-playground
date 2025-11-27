// 재택근무 유형 테스트 데이터
export const workFromHomeTest = {
  id: 'work-from-home',
  title: '재택근무 유형 테스트',
  description: '재택근무할 때 당신은 어떤 유형? 칼퇴형, 워커홀릭형, 유연형, 방해금지형 중 나의 재택근무 스타일을 알아보세요!',
  questions: [
    {
      id: 1,
      text: '재택근무 시작 시간은?',
      options: [
        { id: 'a', text: '정시에 칼같이 시작', score: { strict: 3, workaholic: 1, flexible: 0, focused: 1 } },
        { id: 'b', text: '이미 일찍부터 일하고 있음', score: { strict: 0, workaholic: 3, flexible: 0, focused: 1 } },
        { id: 'c', text: '여유롭게 준비 후 시작', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '방해 없는 시간에 집중해서', score: { strict: 0, workaholic: 1, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 2,
      text: '재택근무 복장은?',
      options: [
        { id: 'a', text: '출근 때처럼 갖춰 입음', score: { strict: 3, workaholic: 1, flexible: 0, focused: 0 } },
        { id: 'b', text: '상의만 비즈니스 캐주얼', score: { strict: 1, workaholic: 3, flexible: 0, focused: 1 } },
        { id: 'c', text: '편한 옷 (파자마 포함)', score: { strict: 0, workaholic: 0, flexible: 3, focused: 1 } },
        { id: 'd', text: '집중 모드 옷이 따로 있음', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 3,
      text: '점심시간 활용은?',
      options: [
        { id: 'a', text: '딱 1시간만 쉬고 복귀', score: { strict: 3, workaholic: 0, flexible: 0, focused: 1 } },
        { id: 'b', text: '먹으면서 일하기도', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '여유롭게 쉬다가 복귀', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '집중이 끊기면 그때 먹음', score: { strict: 0, workaholic: 1, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 4,
      text: '업무 종료 시간은?',
      options: [
        { id: 'a', text: '정시에 칼퇴근', score: { strict: 3, workaholic: 0, flexible: 1, focused: 0 } },
        { id: 'b', text: '일 끝날 때까지 (야근 흔함)', score: { strict: 0, workaholic: 3, flexible: 0, focused: 1 } },
        { id: 'c', text: '유동적으로 조절', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '목표 달성하면 종료', score: { strict: 0, workaholic: 1, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 5,
      text: '화상회의에 대한 생각은?',
      options: [
        { id: 'a', text: '정해진 시간에 참석', score: { strict: 3, workaholic: 1, flexible: 0, focused: 0 } },
        { id: 'b', text: '수시로 소통해야 함', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '최소화하고 싶음', score: { strict: 0, workaholic: 0, flexible: 3, focused: 1 } },
        { id: 'd', text: '집중 시간 피해서', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 6,
      text: '재택근무 장소는?',
      options: [
        { id: 'a', text: '지정된 홈오피스', score: { strict: 3, workaholic: 1, flexible: 0, focused: 1 } },
        { id: 'b', text: '어디서든 항상 일함', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '소파, 침대 등 편한 곳', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '방해 없는 조용한 공간', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 7,
      text: '업무와 개인 시간 경계는?',
      options: [
        { id: 'a', text: '확실히 구분함', score: { strict: 3, workaholic: 0, flexible: 0, focused: 1 } },
        { id: 'b', text: '경계가 모호함', score: { strict: 0, workaholic: 3, flexible: 1, focused: 0 } },
        { id: 'c', text: '유연하게 섞어서', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '집중 시간만 확보', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 8,
      text: '슬랙/메신저 알림은?',
      options: [
        { id: 'a', text: '업무 시간에만 ON', score: { strict: 3, workaholic: 0, flexible: 0, focused: 1 } },
        { id: 'b', text: '항상 ON', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '필요할 때만 확인', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '집중 시간엔 OFF', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 9,
      text: '재택근무의 가장 큰 장점은?',
      options: [
        { id: 'a', text: '출퇴근 시간 절약', score: { strict: 3, workaholic: 1, flexible: 1, focused: 0 } },
        { id: 'b', text: '더 많은 일 가능', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '자유로운 시간 활용', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '방해 없이 집중', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 10,
      text: '재택근무의 가장 큰 단점은?',
      options: [
        { id: 'a', text: '업무와 휴식 구분 어려움', score: { strict: 3, workaholic: 1, flexible: 0, focused: 0 } },
        { id: 'b', text: '일을 멈추기 어려움', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '자기 관리 어려움', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '가족/동거인 방해', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 11,
      text: '재택근무 생산성은?',
      options: [
        { id: 'a', text: '회사와 동일', score: { strict: 3, workaholic: 0, flexible: 0, focused: 1 } },
        { id: 'b', text: '회사보다 높음', score: { strict: 0, workaholic: 3, flexible: 0, focused: 1 } },
        { id: 'c', text: '날마다 다름', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '집중 시간엔 최고', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
    {
      id: 12,
      text: '이상적인 근무 형태는?',
      options: [
        { id: 'a', text: '주 5일 재택 (규칙적)', score: { strict: 3, workaholic: 0, flexible: 0, focused: 1 } },
        { id: 'b', text: '언제 어디서든 일하기', score: { strict: 0, workaholic: 3, flexible: 0, focused: 0 } },
        { id: 'c', text: '하이브리드 (유연하게)', score: { strict: 0, workaholic: 0, flexible: 3, focused: 0 } },
        { id: 'd', text: '집중 필요할 때 재택', score: { strict: 0, workaholic: 0, flexible: 0, focused: 3 } },
      ],
    },
  ],
  results: {
    strict: {
      id: 'strict',
      title: '칼퇴근 마스터',
      description: '업무와 개인 시간을 확실히 구분하는 당신! 정해진 시간에 일하고, 칼퇴근으로 워라밸을 지킵니다.',
      traits: ['시간 관리', '워라밸 중시', '규칙적', '경계 확실'],
      emoji: '⏰',
      color: '#3498DB',
    },
    workaholic: {
      id: 'workaholic',
      title: '워커홀릭형',
      description: '일에 대한 열정이 넘치는 당신! 재택근무가 더 많은 일을 할 수 있는 기회가 됩니다.',
      traits: ['열정적', '성과 지향', '항상 연결', '일 중심'],
      emoji: '💼',
      color: '#E74C3C',
    },
    flexible: {
      id: 'flexible',
      title: '유연형',
      description: '자유롭게 시간을 활용하는 당신! 업무와 개인 일을 유연하게 섞어서 처리합니다.',
      traits: ['유연함', '자유로움', '적응력', '자기주도'],
      emoji: '🌊',
      color: '#27AE60',
    },
    focused: {
      id: 'focused',
      title: '딥워크형',
      description: '방해 없이 집중하는 것을 중시하는 당신! 재택근무로 깊은 집중 상태를 유지합니다.',
      traits: ['집중력', '생산성', '방해금지', '목표 지향'],
      emoji: '🎯',
      color: '#9B59B6',
    },
  },
};
