// elevator-behavior 테스트 데이터
export const elevatorbehaviorTest = {
  id: 'elevator-behavior',
  title: '엘리베이터 행동 테스트',
  description: '엘리베이터에서의 당신의 행동으로 알아보는 숨겨진 성격! 작은 공간에서 드러나는 진짜 모습은?',
  questions: [
    {
      id: 1,
      text: '엘리베이터에 타면 가장 먼저 하는 행동은?',
      options: [
        { text: '버튼 앞에 서서 층수 눌러주는 역할을 맡는다', type: 'leader' },
        { text: '구석에 서서 휴대폰을 본다', type: 'introvert' },
        { text: '거울 앞에서 슬쩍 외모를 체크한다', type: 'conscious' },
        { text: '같이 탄 사람과 가볍게 인사나 대화를 한다', type: 'social' }
      ]
    },
    {
      id: 2,
      text: '모르는 사람과 단둘이 엘리베이터에 탔을 때?',
      options: [
        { text: '"몇 층이세요?" 하고 먼저 말을 건다', type: 'leader' },
        { text: '어색해서 휴대폰만 쳐다본다', type: 'introvert' },
        { text: '층수 표시등만 바라본다', type: 'conscious' },
        { text: '날씨 얘기라도 하며 침묵을 깬다', type: 'social' }
      ]
    },
    {
      id: 3,
      text: '뒤에서 뛰어오는 사람이 보일 때?',
      options: [
        { text: '열림 버튼을 꾹 누르고 기다린다', type: 'leader' },
        { text: '못 본 척 하거나 버튼을 모르는 척한다', type: 'introvert' },
        { text: '눈치를 보다가 문이 닫히면 어쩔 수 없지 한다', type: 'conscious' },
        { text: '"기다려요~!" 하고 소리친다', type: 'social' }
      ]
    },
    {
      id: 4,
      text: '엘리베이터가 사람으로 꽉 찼을 때?',
      options: [
        { text: '"안쪽으로 좀 가주세요" 정리를 한다', type: 'leader' },
        { text: '숨을 참고 최대한 작아진다', type: 'introvert' },
        { text: '다음 엘리베이터를 기다린다', type: 'conscious' },
        { text: '"다들 퇴근하시나 봐요~" 농담을 던진다', type: 'social' }
      ]
    },
    {
      id: 5,
      text: '내릴 층이 아닌데 문이 열렸을 때?',
      options: [
        { text: '타려는 사람에게 "올라가요/내려가요" 안내한다', type: 'leader' },
        { text: '가만히 서서 문 닫히길 기다린다', type: 'introvert' },
        { text: '휴대폰 보는 척 시선 회피', type: 'conscious' },
        { text: '밖에 있는 사람과 눈 마주치며 가볍게 웃는다', type: 'social' }
      ]
    },
    {
      id: 6,
      text: '잘못된 층 버튼을 눌렀을 때?',
      options: [
        { text: '"죄송합니다, 제가 잘못 눌렀어요"라고 말한다', type: 'leader' },
        { text: '아무 말 없이 조용히 민망해한다', type: 'introvert' },
        { text: '취소 버튼을 찾느라 당황한다', type: 'conscious' },
        { text: '"앗 손이 미끄러졌네요~" 웃으며 넘긴다', type: 'social' }
      ]
    },
    {
      id: 7,
      text: '아는 사람을 엘리베이터에서 마주쳤을 때?',
      options: [
        { text: '반갑게 인사하고 근황 대화를 나눈다', type: 'leader' },
        { text: '가볍게 목례하고 각자 휴대폰을 본다', type: 'introvert' },
        { text: '어색하게 미소 짓고 빨리 내리고 싶어한다', type: 'conscious' },
        { text: '신나게 수다 떨다가 내릴 층을 놓친다', type: 'social' }
      ]
    },
    {
      id: 8,
      text: '엘리베이터에서 방귀 냄새가 날 때?',
      options: [
        { text: '창문이나 환기 버튼을 찾아본다', type: 'leader' },
        { text: '표정 관리하며 참는다', type: 'introvert' },
        { text: '나인 줄 오해받을까 봐 불안하다', type: 'conscious' },
        { text: '"누구야~" 농담으로 분위기를 환기한다', type: 'social' }
      ]
    },
    {
      id: 9,
      text: '혼자 엘리베이터를 탔을 때 주로 하는 행동은?',
      options: [
        { text: '딱히 특별한 행동 없이 가만히 선다', type: 'leader' },
        { text: '휴대폰 확인하거나 음악 듣는다', type: 'introvert' },
        { text: '거울 보며 머리나 옷매무새 정리', type: 'conscious' },
        { text: '작게 콧노래를 부르거나 춤을 춘다', type: 'social' }
      ]
    },
    {
      id: 10,
      text: '엘리베이터가 갑자기 멈추면?',
      options: [
        { text: '비상벨 누르고 상황을 파악한다', type: 'leader' },
        { text: '조용히 불안해하며 기다린다', type: 'introvert' },
        { text: '갇힌 모습 상상하며 당황한다', type: 'conscious' },
        { text: '같이 탄 사람들과 대화하며 상황을 풀어간다', type: 'social' }
      ]
    }
  ],
  results: {
    leader: {
      type: '리더형 탑승객',
      title: '🎖️ 리더형 탑승객',
      description: '작은 공간에서도 빛나는 리더십! 자연스럽게 상황을 정리하고 배려하는 타입입니다.',
      traits: [
        '책임감이 강하다',
        '상황 판단이 빠르다',
        '타인을 배려하는 마음이 있다',
        '주도적으로 행동하는 편'
      ],
      advice: '리더십은 좋지만, 가끔은 그냥 쉬어가도 괜찮아요. 모든 상황을 책임질 필요는 없답니다!'
    },
    introvert: {
      type: '조용한 탑승객',
      title: '📱 조용한 탑승객',
      description: '내 공간은 소중해! 짧은 이동 시간도 나만의 시간으로 활용하는 타입입니다.',
      traits: [
        '개인 공간을 중요시한다',
        '내향적인 성향이 있다',
        '불필요한 대화를 피하는 편',
        '혼자만의 시간을 좋아한다'
      ],
      advice: '혼자만의 시간도 좋지만, 가끔은 가벼운 인사로 하루를 밝게 시작해보는 건 어떨까요?'
    },
    conscious: {
      type: '눈치 만렙 탑승객',
      title: '👀 눈치 만렙 탑승객',
      description: '남들 시선이 신경 쓰여! 세심하고 예민한 감각을 가진 타입입니다.',
      traits: [
        '타인의 시선을 의식하는 편',
        '세심하고 꼼꼼하다',
        '상황 파악을 잘한다',
        '실수를 두려워하는 경향'
      ],
      advice: '사실 다들 자기 생각에 바빠서 당신을 그렇게 신경 쓰지 않아요. 조금 더 편하게 행동해도 괜찮아요!'
    },
    social: {
      type: '사교형 탑승객',
      title: '🗣️ 사교형 탑승객',
      description: '30초도 아까워! 짧은 순간도 소통의 기회로 만드는 에너지 넘치는 타입입니다.',
      traits: [
        '사교적이고 외향적이다',
        '분위기를 밝게 만든다',
        '낯선 사람과도 쉽게 친해진다',
        '침묵을 불편해하는 편'
      ],
      advice: '밝은 에너지는 좋지만, 조용히 있고 싶은 사람도 있다는 걸 기억해주세요. 상대방의 반응을 살펴보는 것도 중요해요!'
    }
  }
};
