// inner-temperature 테스트 데이터
export const innertemperatureTest = {
  id: 'inner-temperature',
  title: '속마음 온도 테스트',
  description: '겉으로 보이는 나 vs 진짜 속마음의 온도 차이는? 당신의 감정 표현 갭을 측정해봅니다!',
  questions: [
    {
      id: 1,
      text: '친구가 약속을 갑자기 취소했을 때?',
      options: [
        { text: '"괜찮아~" (속: 진짜 괜찮음)', type: 'warm' },
        { text: '"괜찮아~" (속: 조금 서운함)', type: 'cool' },
        { text: '"괜찮아~" (속: 많이 서운함)', type: 'cold' },
        { text: '서운하다고 솔직하게 말함', type: 'hot' }
      ]
    },
    {
      id: 2,
      text: '회사에서 부당한 지적을 받았을 때?',
      options: [
        { text: '속으로도 겉으로도 화 안 남', type: 'warm' },
        { text: '"네 알겠습니다" (속: 좀 억울함)', type: 'cool' },
        { text: '"네..." (속: 분노 폭발 직전)', type: 'cold' },
        { text: '바로 반박하거나 표정에 드러남', type: 'hot' }
      ]
    },
    {
      id: 3,
      text: '좋아하는 사람 앞에서의 나는?',
      options: [
        { text: '평소랑 똑같이 자연스러움', type: 'warm' },
        { text: '조금 더 신경 쓰지만 티 안 냄', type: 'cool' },
        { text: '완전 다른 사람처럼 행동', type: 'cold' },
        { text: '좋아하는 티 확실하게 냄', type: 'hot' }
      ]
    },
    {
      id: 4,
      text: '슬픈 영화를 볼 때?',
      options: [
        { text: '울고 싶으면 그냥 운다', type: 'warm' },
        { text: '눈물 참으려고 노력', type: 'cool' },
        { text: '절대 안 우는 척 함', type: 'cold' },
        { text: '감정대로 펑펑 운다', type: 'hot' }
      ]
    },
    {
      id: 5,
      text: '칭찬을 받았을 때 반응은?',
      options: [
        { text: '"고마워!" (속도 기분 좋음)', type: 'warm' },
        { text: '"아니야~" (속: 기분 좋음)', type: 'cool' },
        { text: '"그냥 한 건데" (속: 매우 기분 좋음)', type: 'cold' },
        { text: '기뻐하는 게 확실히 드러남', type: 'hot' }
      ]
    },
    {
      id: 6,
      text: '혼자 있을 때 vs 사람들 앞에서의 나는?',
      options: [
        { text: '거의 똑같다', type: 'warm' },
        { text: '약간 다르다', type: 'cool' },
        { text: '완전히 다른 사람 같다', type: 'cold' },
        { text: '혼자든 같이든 솔직하다', type: 'hot' }
      ]
    },
    {
      id: 7,
      text: '화가 났을 때 표현 방식은?',
      options: [
        { text: '차분하게 말로 표현', type: 'warm' },
        { text: '말은 안 하지만 표정에 살짝', type: 'cool' },
        { text: '완전히 숨기고 혼자 삭임', type: 'cold' },
        { text: '바로 표출한다', type: 'hot' }
      ]
    },
    {
      id: 8,
      text: '기분이 안 좋을 때 친구에게?',
      options: [
        { text: '솔직하게 이야기한다', type: 'warm' },
        { text: '"아무것도 아니야"라고 함', type: 'cool' },
        { text: '아무렇지 않은 척 연기', type: 'cold' },
        { text: '표정으로 다 티남', type: 'hot' }
      ]
    },
    {
      id: 9,
      text: '관심 없는 이야기를 들을 때?',
      options: [
        { text: '관심 있는 부분 찾아서 경청', type: 'warm' },
        { text: '듣는 척하며 다른 생각', type: 'cool' },
        { text: '완벽하게 경청하는 척 연기', type: 'cold' },
        { text: '"그건 좀 별로..."라고 솔직히', type: 'hot' }
      ]
    },
    {
      id: 10,
      text: '속마음을 숨기는 이유가 있다면?',
      options: [
        { text: '굳이 숨길 이유가 없다', type: 'warm' },
        { text: '상대방 배려/갈등 회피', type: 'cool' },
        { text: '나를 보호하기 위해', type: 'cold' },
        { text: '숨기는 게 어렵다', type: 'hot' }
      ]
    }
  ],
  results: {
    warm: {
      type: '따뜻한 일치형 (36.5°C)',
      title: '🌤️ 따뜻한 일치형 (36.5°C)',
      description: '겉과 속이 거의 일치하는 건강한 온도! 자연스럽게 감정을 표현하는 균형 잡힌 타입입니다.',
      traits: [
        '겉과 속이 대체로 일치함',
        '솔직하면서도 배려심 있음',
        '감정 표현이 자연스러움',
        '관계에서 신뢰를 얻는 편'
      ],
      temperatureGap: '거의 없음 (0~5°C 차이)',
      advice: '건강한 감정 온도를 유지하고 있어요! 지금처럼 솔직하면서도 따뜻하게 표현하세요.'
    },
    cool: {
      type: '쿨한 조절형 (28°C)',
      title: '🌊 쿨한 조절형 (28°C)',
      description: '겉은 쿨하지만 속은 따뜻한 타입! 감정을 적절히 조절하며 표현합니다.',
      traits: [
        '겉으로는 쿨하게 보임',
        '속마음은 더 따뜻하거나 예민함',
        '상황에 맞게 감정 조절',
        '어른스러운 대처 능력'
      ],
      temperatureGap: '약간 있음 (10~15°C 차이)',
      advice: '감정 조절 능력이 좋지만, 가끔은 속마음을 더 표현해도 괜찮아요. 사람들은 당신의 진심을 알고 싶어해요.'
    },
    cold: {
      type: '차가운 보호형 (15°C)',
      title: '🧊 차가운 보호형 (15°C)',
      description: '겉은 차갑지만 속은 뜨거운 타입! 자신을 보호하기 위해 감정을 숨기는 경향이 있습니다.',
      traits: [
        '포커페이스 달인',
        '속마음과 표현의 갭이 큼',
        '상처받기 싫어서 숨기는 편',
        '신뢰하는 사람에게만 진심을 보여줌'
      ],
      temperatureGap: '큰 편 (20~30°C 차이)',
      advice: '자신을 보호하는 것도 중요하지만, 가끔은 마음을 열어보세요. 진심을 보여줘도 상처받지 않을 사람들이 있어요.'
    },
    hot: {
      type: '뜨거운 직구형 (42°C)',
      title: '🔥 뜨거운 직구형 (42°C)',
      description: '속마음이 바로 밖으로! 감정 표현이 확실하고 솔직한 타입입니다.',
      traits: [
        '감정을 숨기지 못함',
        '솔직하고 직설적',
        '표정과 말에 다 드러남',
        '진정성 있는 관계를 형성'
      ],
      temperatureGap: '거의 없음 (오히려 과표현)',
      advice: '솔직함은 큰 장점이지만, 때로는 상대방의 입장도 고려하며 표현하면 더 좋은 관계를 만들 수 있어요.'
    }
  }
};
