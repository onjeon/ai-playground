// defense-mechanism 테스트 데이터
export const defensemechanismTest = {
  id: 'defense-mechanism',
  title: '방어기제 유형 테스트',
  description: '스트레스 상황에서 당신이 무의식적으로 사용하는 방어기제는? 심리학적으로 알아봅니다!',
  questions: [
    {
      id: 1,
      text: '일이 잘 안 풀렸을 때 주로 어떻게 하나요?',
      options: [
        { text: '"이건 원래 그렇게 중요한 게 아니었어"', type: 'rationalization' },
        { text: '"다 상대방 탓이야"', type: 'projection' },
        { text: '아무 일 없었던 것처럼 행동함', type: 'denial' },
        { text: '농담이나 유머로 넘김', type: 'humor' }
      ]
    },
    {
      id: 2,
      text: '비판을 받았을 때 첫 반응은?',
      options: [
        { text: '왜 그렇게 말했는지 논리적으로 분석', type: 'rationalization' },
        { text: '상대방의 문제점을 찾음', type: 'projection' },
        { text: '들리지 않는 척, 무시함', type: 'denial' },
        { text: '"맞아, 내가 좀 그렇지~" 웃으며 넘김', type: 'humor' }
      ]
    },
    {
      id: 3,
      text: '큰 실수를 했을 때?',
      options: [
        { text: '어쩔 수 없는 상황이었다고 설명함', type: 'rationalization' },
        { text: '다른 사람이나 환경 탓을 함', type: 'projection' },
        { text: '실수를 인정하기 싫어서 없던 일처럼', type: 'denial' },
        { text: '실수담을 웃기게 이야기함', type: 'humor' }
      ]
    },
    {
      id: 4,
      text: '불안하거나 걱정될 때?',
      options: [
        { text: '객관적으로 상황을 분석하려 함', type: 'rationalization' },
        { text: '다른 사람들도 불안해하지 않나 살핌', type: 'projection' },
        { text: '생각하지 않으려고 함', type: 'denial' },
        { text: '불안해도 웃긴 것 찾아서 해소', type: 'humor' }
      ]
    },
    {
      id: 5,
      text: '누군가에게 화가 났는데 직접 말할 수 없을 때?',
      options: [
        { text: '화날 이유가 없다고 스스로 설득', type: 'rationalization' },
        { text: '상대가 나한테 화난 것 같다고 느낌', type: 'projection' },
        { text: '화가 나지 않는다고 부정', type: 'denial' },
        { text: '상황을 코미디처럼 만들어버림', type: 'humor' }
      ]
    },
    {
      id: 6,
      text: '원하는 것을 얻지 못했을 때?',
      options: [
        { text: '"어차피 별로였어" (신포도 심리)', type: 'rationalization' },
        { text: '"걔도 못 가졌잖아"', type: 'projection' },
        { text: '원했던 적 없다고 생각함', type: 'denial' },
        { text: '자조적 유머로 상황을 넘김', type: 'humor' }
      ]
    },
    {
      id: 7,
      text: '관계에서 상처받았을 때?',
      options: [
        { text: '왜 그랬는지 이유를 분석함', type: 'rationalization' },
        { text: '상대방이 나를 싫어하는 게 분명해', type: 'projection' },
        { text: '상처받지 않았다고 생각함', type: 'denial' },
        { text: '웃으면서 괜찮은 척함', type: 'humor' }
      ]
    },
    {
      id: 8,
      text: '자신의 단점을 지적받으면?',
      options: [
        { text: '그 단점이 왜 생겼는지 설명함', type: 'rationalization' },
        { text: '지적한 사람의 단점을 떠올림', type: 'projection' },
        { text: '나에겐 그런 단점 없다고 생각', type: 'denial' },
        { text: '"맞아 나 좀 그래~" 웃음으로 인정', type: 'humor' }
      ]
    },
    {
      id: 9,
      text: '어려운 결정을 해야 할 때?',
      options: [
        { text: '모든 선택지의 장단점을 분석', type: 'rationalization' },
        { text: '다른 사람들은 뭘 선택하나 봄', type: 'projection' },
        { text: '결정을 계속 미룸', type: 'denial' },
        { text: '"에라 모르겠다~" 가볍게 결정', type: 'humor' }
      ]
    },
    {
      id: 10,
      text: '스트레스 해소 방법은?',
      options: [
        { text: '왜 스트레스 받는지 원인 분석', type: 'rationalization' },
        { text: '다른 사람들 사는 거 보며 비교', type: 'projection' },
        { text: '스트레스 자체를 생각 안 함', type: 'denial' },
        { text: '웃기는 영상 보거나 친구와 웃음', type: 'humor' }
      ]
    }
  ],
  results: {
    rationalization: {
      type: '합리화 (Rationalization)',
      title: '🧠 합리화형',
      description: '논리와 이유로 감정을 다스려요! 상황에 대해 납득할 만한 설명을 찾는 방어기제를 사용합니다.',
      traits: [
        '논리적인 사고를 선호',
        '감정보다 이성을 중시',
        '분석적인 성격',
        '설명하고 이해하려 함'
      ],
      advice: '합리화도 좋지만, 때로는 감정을 그대로 느끼고 받아들이는 것도 필요해요. 감정에도 귀 기울여보세요.'
    },
    projection: {
      type: '투사 (Projection)',
      title: '🪞 투사형',
      description: '내 마음을 다른 사람에게서 봐요! 자신의 감정이나 특성을 타인에게서 발견하는 방어기제를 사용합니다.',
      traits: [
        '타인에 대한 관심이 많음',
        '비교를 자주 함',
        '외부 귀인 성향',
        '관계에 민감함'
      ],
      advice: '다른 사람을 통해 자신을 보는 대신, 내 안의 감정을 직접 들여다보는 연습을 해보세요.'
    },
    denial: {
      type: '부정 (Denial)',
      title: '🙈 부정형',
      description: '없던 일로! 받아들이기 힘든 현실을 인정하지 않는 방어기제를 사용합니다.',
      traits: [
        '회피 성향이 있음',
        '갈등을 싫어함',
        '평화를 추구',
        '불편한 감정을 외면함'
      ],
      advice: '잠시 피하는 건 괜찮지만, 결국 마주해야 할 것들이 있어요. 조금씩 현실을 받아들이는 연습을 해보세요.'
    },
    humor: {
      type: '유머 (Humor)',
      title: '😄 유머형',
      description: '웃음으로 승화! 어려운 상황도 유머로 전환하는 성숙한 방어기제를 사용합니다.',
      traits: [
        '분위기 메이커',
        '회복탄력성이 좋음',
        '낙천적인 성격',
        '스트레스 해소를 잘함'
      ],
      advice: '유머는 건강한 방어기제예요! 하지만 가끔은 진지하게 감정을 다루는 것도 필요해요.'
    }
  }
};
