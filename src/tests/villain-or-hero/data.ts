// villain-or-hero 테스트 데이터
export const villainorheroTest = {
  id: 'villain-or-hero',
  title: '빌런 or 히어로 테스트',
  description: '당신의 본성은 빌런에 가까울까, 히어로에 가까울까? 숨겨진 진짜 성향을 파헤쳐봅니다!',
  questions: [
    {
      id: 1,
      text: '누군가 당신을 밀치고 지나갔을 때?',
      options: [
        { text: '"실수겠지" 하고 넘어감', type: 'hero' },
        { text: '속으로 짜증나지만 참음', type: 'anti' },
        { text: '똑같이 밀쳐주고 싶음', type: 'villain' },
        { text: '상황에 따라 다름', type: 'neutral' }
      ]
    },
    {
      id: 2,
      text: '부당한 일을 목격했을 때?',
      options: [
        { text: '당장 나서서 바로잡으려 함', type: 'hero' },
        { text: '신고는 하지만 직접 개입은 꺼려짐', type: 'anti' },
        { text: '내 일 아니면 관심 없음', type: 'villain' },
        { text: '상황 파악 후 결정', type: 'neutral' }
      ]
    },
    {
      id: 3,
      text: '복수에 대한 당신의 생각은?',
      options: [
        { text: '복수보다 용서가 낫다', type: 'hero' },
        { text: '참다가 한 번 제대로', type: 'anti' },
        { text: '반드시 갚아줘야 함', type: 'villain' },
        { text: '케바케, 상대에 따라', type: 'neutral' }
      ]
    },
    {
      id: 4,
      text: '규칙에 대한 당신의 태도는?',
      options: [
        { text: '규칙은 지켜야 함', type: 'hero' },
        { text: '합리적인 규칙만 따름', type: 'anti' },
        { text: '나에게 유리하면 지킴', type: 'villain' },
        { text: '큰 틀만 지키면 됨', type: 'neutral' }
      ]
    },
    {
      id: 5,
      text: '"선의의 거짓말"에 대해?',
      options: [
        { text: '거짓말은 거짓말, 최대한 안 함', type: 'hero' },
        { text: '필요하면 함', type: 'anti' },
        { text: '내 이익을 위해 자주 함', type: 'villain' },
        { text: '상황과 상대에 따라', type: 'neutral' }
      ]
    },
    {
      id: 6,
      text: '경쟁에서 이기기 위해 수단방법을?',
      options: [
        { text: '정정당당하게만 승부', type: 'hero' },
        { text: '약간의 편법은 OK', type: 'anti' },
        { text: '이기는 게 중요, 방법은 상관없음', type: 'villain' },
        { text: '상황 봐서 유연하게', type: 'neutral' }
      ]
    },
    {
      id: 7,
      text: '미워하는 사람에게 불행이 찾아오면?',
      options: [
        { text: '안됐네... 도와줄 수 있으면 도와줌', type: 'hero' },
        { text: '속으로 쾌재, 겉으론 무덤덤', type: 'anti' },
        { text: '잘됐다! 하고 기뻐함', type: 'villain' },
        { text: '뭐... 그 사람 인생이지', type: 'neutral' }
      ]
    },
    {
      id: 8,
      text: '힘(권력, 돈)이 생기면 당신은?',
      options: [
        { text: '좋은 일에 쓰고 싶음', type: 'hero' },
        { text: '나와 내 사람을 위해 사용', type: 'anti' },
        { text: '원하는 것을 얻는 데 사용', type: 'villain' },
        { text: '상황에 따라 다르게 사용', type: 'neutral' }
      ]
    },
    {
      id: 9,
      text: '영화에서 끌리는 캐릭터는?',
      options: [
        { text: '정의로운 주인공', type: 'hero' },
        { text: '복잡한 안티 히어로', type: 'anti' },
        { text: '매력적인 빌런', type: 'villain' },
        { text: '특별히 없음, 스토리가 중요', type: 'neutral' }
      ]
    },
    {
      id: 10,
      text: '당신의 인생 모토에 가까운 것은?',
      options: [
        { text: '"남에게 베풀며 살자"', type: 'hero' },
        { text: '"나와 내 사람만 챙기자"', type: 'anti' },
        { text: '"이 세상에서 살아남자"', type: 'villain' },
        { text: '"상황에 맞게 유연하게"', type: 'neutral' }
      ]
    }
  ],
  results: {
    hero: {
      type: '히어로',
      title: '🦸 히어로',
      description: '정의롭고 따뜻한 영웅의 심장! 세상을 더 나은 곳으로 만들고 싶어하는 타입입니다.',
      alignment: 'Lawful Good',
      heroType: '클래식 히어로',
      traits: [
        '강한 정의감',
        '남을 돕고 싶은 마음',
        '규칙과 도덕을 중시',
        '자기희생도 감수'
      ],
      darkSide: '때로는 너무 이상적이라 현실과 충돌할 수 있어요',
      power: '영감을 주는 리더십',
      advice: '당신의 선함은 세상에 필요해요! 하지만 자신도 챙기세요. 지친 히어로는 아무도 못 구해요.',
      famousCharacter: '캡틴 아메리카, 슈퍼맨'
    },
    anti: {
      type: '안티 히어로',
      title: '🔥 안티 히어로',
      description: '선과 악 사이의 회색지대! 좋은 의도지만 방법은 과격할 수 있는 타입입니다.',
      alignment: 'Chaotic Good',
      heroType: '다크 히어로',
      traits: [
        '목적을 위해 수단 선택',
        '내 사람은 확실히 챙김',
        '규칙보다 결과 중시',
        '복잡한 도덕관'
      ],
      darkSide: '선을 넘을 수 있는 위험이 있어요',
      power: '현실적인 문제 해결 능력',
      advice: '당신의 실용성은 장점이에요. 하지만 가끔은 원칙도 중요하다는 걸 기억하세요.',
      famousCharacter: '배트맨, 데드풀, 펀처'
    },
    villain: {
      type: '빌런',
      title: '😈 빌런',
      description: '자신의 욕망에 솔직한 타입! 세상의 룰보다 자신의 법칙을 따르는 빌런 기질입니다.',
      alignment: 'Chaotic Neutral ~ Evil',
      heroType: '매력적인 악당',
      traits: [
        '자기 이익 최우선',
        '수단방법 가리지 않음',
        '규칙에 얽매이지 않음',
        '강한 생존 본능'
      ],
      darkSide: '외로워질 수 있어요. 모든 걸 얻어도 함께할 사람이 없으면...',
      power: '두려움 없는 추진력',
      advice: '당신의 야망은 대단하지만, 진정한 성공은 혼자 이룰 수 없어요. 신뢰를 쌓아보세요.',
      famousCharacter: '조커, 타노스, 킬모저'
    },
    neutral: {
      type: '뉴트럴',
      title: '⚖️ 뉴트럴',
      description: '선과 악 어디에도 치우치지 않는 균형잡힌 타입! 상황에 따라 유연하게 대처합니다.',
      alignment: 'True Neutral',
      heroType: '관찰자',
      traits: [
        '상황 판단 능력',
        '유연한 도덕관',
        '극단을 피함',
        '현실적인 사고'
      ],
      darkSide: '때로는 결단력이 부족해 보일 수 있어요',
      power: '적응력과 생존력',
      advice: '균형 감각은 훌륭하지만, 가끔은 확실한 입장도 필요해요. 중요한 순간에는 결단하세요.',
      famousCharacter: '닥터 스트레인지, 로키(후반)'
    }
  }
};
