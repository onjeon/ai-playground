// learning-style 테스트 데이터
export const learningStyle = {
  id: 'learning-style',
  title: '학습 스타일 테스트',
  description: '당신은 어떻게 배우나요? 효과적인 학습 방법을 찾아보세요!',
  questions: [
    {
      id: 1,
      text: '새로운 것을 배울 때 가장 효과적인 방법은?',
      options: [
        { text: '글이나 책으로 읽기', type: 'reading' },
        { text: '강의나 설명 듣기', type: 'auditory' },
        { text: '직접 해보기', type: 'kinesthetic' },
        { text: '그림이나 영상으로 보기', type: 'visual' }
      ]
    },
    {
      id: 2,
      text: '정보를 기억하는 방식은?',
      options: [
        { text: '텍스트로 정리하면 잘 기억', type: 'reading' },
        { text: '말로 반복하면 잘 기억', type: 'auditory' },
        { text: '경험하면 잘 기억', type: 'kinesthetic' },
        { text: '이미지로 떠올리면 잘 기억', type: 'visual' }
      ]
    },
    {
      id: 3,
      text: '공부할 때 선호하는 자료는?',
      options: [
        { text: '교재, 책, 글', type: 'reading' },
        { text: '강의, 팟캐스트', type: 'auditory' },
        { text: '실습, 프로젝트', type: 'kinesthetic' },
        { text: '유튜브, 인포그래픽', type: 'visual' }
      ]
    },
    {
      id: 4,
      text: '길을 찾을 때?',
      options: [
        { text: '주소와 설명을 읽음', type: 'reading' },
        { text: '음성 안내를 들음', type: 'auditory' },
        { text: '직접 걸어보며 익힘', type: 'kinesthetic' },
        { text: '지도를 보며 확인', type: 'visual' }
      ]
    },
    {
      id: 5,
      text: '복잡한 개념을 이해할 때?',
      options: [
        { text: '텍스트로 정리된 설명', type: 'reading' },
        { text: '누군가 말로 설명해주면', type: 'auditory' },
        { text: '직접 예시를 경험하면', type: 'kinesthetic' },
        { text: '다이어그램/그림으로 보면', type: 'visual' }
      ]
    },
    {
      id: 6,
      text: '노트 정리 스타일은?',
      options: [
        { text: '텍스트 위주로 상세하게', type: 'reading' },
        { text: '키워드 위주로 간단히', type: 'auditory' },
        { text: '거의 안 함, 해보면서 익힘', type: 'kinesthetic' },
        { text: '마인드맵, 그림, 색깔', type: 'visual' }
      ]
    },
    {
      id: 7,
      text: '새로운 기기를 배울 때?',
      options: [
        { text: '매뉴얼/설명서 읽기', type: 'reading' },
        { text: '설명 영상 보기', type: 'auditory' },
        { text: '일단 이것저것 눌러봄', type: 'kinesthetic' },
        { text: '그림 가이드 보기', type: 'visual' }
      ]
    },
    {
      id: 8,
      text: '집중할 때 환경은?',
      options: [
        { text: '조용히 읽을 수 있는 곳', type: 'reading' },
        { text: '적당한 소음(카페 등)', type: 'auditory' },
        { text: '움직일 수 있는 곳', type: 'kinesthetic' },
        { text: '깔끔하고 정돈된 곳', type: 'visual' }
      ]
    },
    {
      id: 9,
      text: '발표/설명할 때?',
      options: [
        { text: '스크립트 준비해서 읽음', type: 'reading' },
        { text: '말하면서 생각 정리', type: 'auditory' },
        { text: '시연/데모로 보여줌', type: 'kinesthetic' },
        { text: '슬라이드/시각 자료 활용', type: 'visual' }
      ]
    },
    {
      id: 10,
      text: '가장 잘 기억나는 것은?',
      options: [
        { text: '읽은 내용', type: 'reading' },
        { text: '들은 내용', type: 'auditory' },
        { text: '경험한 것', type: 'kinesthetic' },
        { text: '본 이미지', type: 'visual' }
      ]
    }
  ],
  results: {
    reading: {
      type: '읽기/쓰기형',
      title: '📖 읽기/쓰기형',
      description: '글로 배우는 것이 가장 효과적인 당신!',
      traits: ['텍스트 선호', '정리형', '논리적', '분석적'],
      learningStyle: '읽기/쓰기',
      studyTip: '책, 노트 정리, 요약 글 작성이 효과적이에요!'
    },
    auditory: {
      type: '청각형',
      title: '🎧 청각형',
      description: '듣고 말하면서 배우는 것이 효과적인 당신!',
      traits: ['듣기 선호', '대화형', '구두 표현', '토론 선호'],
      learningStyle: '청각',
      studyTip: '강의, 팟캐스트, 토론, 소리 내어 읽기가 효과적이에요!'
    },
    kinesthetic: {
      type: '체험형',
      title: '🖐️ 체험형',
      description: '직접 해보면서 배우는 것이 효과적인 당신!',
      traits: ['실습 선호', '경험적', '실용적', '활동적'],
      learningStyle: '체험/실습',
      studyTip: '실습, 프로젝트, 롤플레이, 직접 만들기가 효과적이에요!'
    },
    visual: {
      type: '시각형',
      title: '👁️ 시각형',
      description: '보면서 배우는 것이 효과적인 당신!',
      traits: ['시각 선호', '이미지 기억', '공간 인식', '색깔 활용'],
      learningStyle: '시각',
      studyTip: '영상, 그림, 차트, 마인드맵, 색깔 펜이 효과적이에요!'
    }
  }
};
