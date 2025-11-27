// 관상 - 비교형 질문으로 얼굴 특징 분석
// 전문용어 없이 직관적인 선택지로 구성

export interface FaceQuestion {
  id: string;
  part: string;        // 부위명 (이마, 눈썹 등)
  partEmoji: string;
  question: string;    // 질문
  guide?: string;      // 가이드 문구
  options: {
    id: string;
    label: string;
    description?: string;  // 추가 설명
  }[];
}

export interface FaceTraitResult {
  part: string;
  partEmoji: string;
  trait: string;       // 특성 이름
  meaning: string;     // 관상학적 의미
  fortune: string;     // 운세 해석
}

export interface FaceReadingResult {
  traits: FaceTraitResult[];
  overallType: string;           // 종합 유형
  overallDescription: string;    // 종합 설명
  personality: string[];         // 성격 특성
  strengths: string[];           // 강점
  cautions: string[];            // 주의점
  careerFit: string[];           // 적합 직업
  loveFortune: string;           // 연애운
  wealthFortune: string;         // 재물운
  healthTip: string;             // 건강 조언
  luckyColor: string;
  luckyNumber: number;
}

// 관상 질문 목록 - 비교형, 직관적
export const FACE_QUESTIONS: FaceQuestion[] = [
  // 1. 얼굴형
  {
    id: 'face_shape',
    part: '얼굴형',
    partEmoji: '😊',
    question: '거울을 정면으로 보세요. 얼굴 윤곽이 어떤 모양에 가까운가요?',
    guide: '헤어라인부터 턱 끝까지의 전체 윤곽을 보세요',
    options: [
      { id: 'round', label: '동그란 편', description: '전체적으로 둥글둥글한 느낌' },
      { id: 'oval', label: '계란형', description: '위가 넓고 아래로 갈수록 좁아짐' },
      { id: 'square', label: '각진 편', description: '턱이나 광대가 각져 보임' },
      { id: 'long', label: '길쭉한 편', description: '세로로 긴 느낌' },
    ]
  },
  // 2. 이마 - 넓이
  {
    id: 'forehead_width',
    part: '이마',
    partEmoji: '🧠',
    question: '이마가 얼마나 넓은가요?',
    guide: '눈썹 위부터 헤어라인까지의 공간을 보세요',
    options: [
      { id: 'wide', label: '넓은 편', description: '손가락 4개 이상 들어갈 정도' },
      { id: 'medium', label: '보통', description: '손가락 3개 정도' },
      { id: 'narrow', label: '좁은 편', description: '손가락 2개 정도' },
    ]
  },
  // 3. 이마 - 모양
  {
    id: 'forehead_shape',
    part: '이마',
    partEmoji: '🧠',
    question: '이마를 옆에서 봤을 때 어떤가요?',
    guide: '거울을 옆으로 돌려서 확인해보세요',
    options: [
      { id: 'round', label: '둥글게 나온 편', description: '볼록하게 튀어나온 느낌' },
      { id: 'flat', label: '평평한 편', description: '일직선에 가까움' },
      { id: 'sloped', label: '뒤로 기울어진 편', description: '약간 눕는 느낌' },
    ]
  },
  // 4. 눈썹 - 위치
  {
    id: 'eyebrow_position',
    part: '눈썹',
    partEmoji: '🤨',
    question: '눈썹과 눈 사이가 얼마나 떨어져 있나요?',
    guide: '눈을 정면으로 보고 눈썹 아래와 눈꺼풀 사이 거리를 보세요',
    options: [
      { id: 'close', label: '가까운 편', description: '눈썹이 눈 바로 위에 있는 느낌' },
      { id: 'medium', label: '보통', description: '적당한 간격' },
      { id: 'far', label: '떨어진 편', description: '눈 위 공간이 넓어 보임' },
    ]
  },
  // 5. 눈썹 - 방향
  {
    id: 'eyebrow_direction',
    part: '눈썹',
    partEmoji: '🤨',
    question: '눈썹 끝(꼬리)이 어디를 향하나요?',
    guide: '눈썹의 시작점과 끝점을 비교해보세요',
    options: [
      { id: 'up', label: '위로 올라감', description: '끝이 시작점보다 높음' },
      { id: 'straight', label: '수평에 가까움', description: '시작과 끝이 비슷한 높이' },
      { id: 'down', label: '아래로 내려감', description: '끝이 시작점보다 낮음' },
    ]
  },
  // 6. 눈썹 - 굵기
  {
    id: 'eyebrow_thickness',
    part: '눈썹',
    partEmoji: '🤨',
    question: '눈썹이 얼마나 진한가요?',
    guide: '숱과 굵기를 함께 고려해보세요',
    options: [
      { id: 'thick', label: '진하고 굵은 편', description: '눈썹이 뚜렷하게 보임' },
      { id: 'medium', label: '보통', description: '적당한 굵기' },
      { id: 'thin', label: '연하고 가는 편', description: '눈썹이 섬세해 보임' },
    ]
  },
  // 7. 눈 - 크기
  {
    id: 'eye_size',
    part: '눈',
    partEmoji: '👁️',
    question: '눈이 얼마나 큰가요?',
    guide: '얼굴 전체에서 눈이 차지하는 비중을 보세요',
    options: [
      { id: 'big', label: '큰 편', description: '눈이 또렷하고 시원해 보임' },
      { id: 'medium', label: '보통', description: '적당한 크기' },
      { id: 'small', label: '작은 편', description: '눈이 날카롭거나 선해 보임' },
    ]
  },
  // 8. 눈 - 모양
  {
    id: 'eye_shape',
    part: '눈',
    partEmoji: '👁️',
    question: '눈꼬리가 어디를 향하나요?',
    guide: '눈의 안쪽(코 쪽)과 바깥쪽(귀 쪽) 끝을 비교해보세요',
    options: [
      { id: 'up', label: '올라간 편', description: '눈꼬리가 위를 향함' },
      { id: 'straight', label: '수평에 가까움', description: '안쪽과 바깥쪽이 비슷한 높이' },
      { id: 'down', label: '내려간 편', description: '눈꼬리가 아래를 향함' },
    ]
  },
  // 9. 코 - 높이
  {
    id: 'nose_height',
    part: '코',
    partEmoji: '👃',
    question: '코가 얼마나 높은가요?',
    guide: '옆에서 봤을 때 코의 높이를 보세요',
    options: [
      { id: 'high', label: '높은 편', description: '콧대가 뚜렷하게 보임' },
      { id: 'medium', label: '보통', description: '적당한 높이' },
      { id: 'low', label: '낮은 편', description: '콧대가 완만함' },
    ]
  },
  // 10. 코 - 콧볼
  {
    id: 'nose_width',
    part: '코',
    partEmoji: '👃',
    question: '콧볼(코 양옆 날개)이 얼마나 넓은가요?',
    guide: '정면에서 코 아랫부분의 너비를 보세요',
    options: [
      { id: 'wide', label: '넓은 편', description: '콧볼이 양옆으로 퍼져 있음' },
      { id: 'medium', label: '보통', description: '적당한 너비' },
      { id: 'narrow', label: '좁은 편', description: '콧볼이 오밀조밀함' },
    ]
  },
  // 11. 입 - 크기
  {
    id: 'mouth_size',
    part: '입',
    partEmoji: '👄',
    question: '입이 얼마나 큰가요?',
    guide: '입을 다물었을 때 입술의 좌우 길이를 보세요',
    options: [
      { id: 'big', label: '큰 편', description: '입이 넓고 시원해 보임' },
      { id: 'medium', label: '보통', description: '적당한 크기' },
      { id: 'small', label: '작은 편', description: '입이 아담해 보임' },
    ]
  },
  // 12. 입술 - 두께
  {
    id: 'lip_thickness',
    part: '입',
    partEmoji: '👄',
    question: '입술이 얼마나 두꺼운가요?',
    guide: '위아래 입술의 두께를 함께 보세요',
    options: [
      { id: 'thick', label: '두꺼운 편', description: '입술이 도톰하고 볼륨감 있음' },
      { id: 'medium', label: '보통', description: '적당한 두께' },
      { id: 'thin', label: '얇은 편', description: '입술이 가늘고 섬세함' },
    ]
  },
  // 13. 턱 - 모양
  {
    id: 'chin_shape',
    part: '턱',
    partEmoji: '😬',
    question: '턱 끝이 어떤 모양인가요?',
    guide: '정면에서 턱의 끝부분을 보세요',
    options: [
      { id: 'round', label: '둥근 편', description: '턱이 부드럽게 마무리됨' },
      { id: 'pointed', label: '뾰족한 편', description: 'V라인처럼 날카로움' },
      { id: 'square', label: '각진 편', description: '턱이 넓고 각져 보임' },
    ]
  },
  // 14. 귀 - 크기
  {
    id: 'ear_size',
    part: '귀',
    partEmoji: '👂',
    question: '귀가 얼마나 큰가요?',
    guide: '얼굴 옆에서 귀의 크기를 보세요',
    options: [
      { id: 'big', label: '큰 편', description: '귀가 뚜렷하게 보임' },
      { id: 'medium', label: '보통', description: '적당한 크기' },
      { id: 'small', label: '작은 편', description: '귀가 아담함' },
    ]
  },
];

// 부위별 특성 해석 데이터
const TRAIT_INTERPRETATIONS: Record<string, Record<string, FaceTraitResult>> = {
  // 얼굴형
  face_shape: {
    round: {
      part: '얼굴형', partEmoji: '😊',
      trait: '원형 얼굴',
      meaning: '원만한 성격과 친화력을 나타내는 관상',
      fortune: '대인관계가 좋고 주변에 사람이 많이 모입니다'
    },
    oval: {
      part: '얼굴형', partEmoji: '😊',
      trait: '계란형 얼굴',
      meaning: '균형 잡힌 성격과 지혜를 나타내는 관상',
      fortune: '어떤 상황에서도 적응력이 뛰어납니다'
    },
    square: {
      part: '얼굴형', partEmoji: '😊',
      trait: '각진 얼굴',
      meaning: '의지가 강하고 리더십이 있는 관상',
      fortune: '결단력이 있어 큰일을 성취할 수 있습니다'
    },
    long: {
      part: '얼굴형', partEmoji: '😊',
      trait: '긴 얼굴',
      meaning: '생각이 깊고 섬세한 관상',
      fortune: '학문이나 예술 분야에서 두각을 나타냅니다'
    },
  },
  // 이마 넓이
  forehead_width: {
    wide: {
      part: '이마', partEmoji: '🧠',
      trait: '넓은 이마',
      meaning: '지혜롭고 선견지명이 있는 관상',
      fortune: '초년운이 좋고 학업/사업 운이 강합니다'
    },
    medium: {
      part: '이마', partEmoji: '🧠',
      trait: '보통 이마',
      meaning: '균형 잡힌 사고력을 나타내는 관상',
      fortune: '안정적인 운세의 흐름이 이어집니다'
    },
    narrow: {
      part: '이마', partEmoji: '🧠',
      trait: '좁은 이마',
      meaning: '집중력이 강하고 현실적인 관상',
      fortune: '꾸준한 노력으로 중년 이후 성공합니다'
    },
  },
  // 이마 모양
  forehead_shape: {
    round: {
      part: '이마', partEmoji: '🧠',
      trait: '볼록한 이마',
      meaning: '창의력과 상상력이 풍부한 관상',
      fortune: '새로운 아이디어로 성공할 운입니다'
    },
    flat: {
      part: '이마', partEmoji: '🧠',
      trait: '평평한 이마',
      meaning: '논리적이고 분석적인 관상',
      fortune: '계획적인 일처리로 성과를 냅니다'
    },
    sloped: {
      part: '이마', partEmoji: '🧠',
      trait: '기울어진 이마',
      meaning: '직관력이 뛰어난 관상',
      fortune: '순간적인 판단력이 행운을 가져옵니다'
    },
  },
  // 눈썹 위치
  eyebrow_position: {
    close: {
      part: '눈썹', partEmoji: '🤨',
      trait: '눈과 가까운 눈썹',
      meaning: '감정 표현이 직접적이고 열정적인 관상',
      fortune: '적극적인 행동이 기회를 가져옵니다'
    },
    medium: {
      part: '눈썹', partEmoji: '🤨',
      trait: '적당한 위치의 눈썹',
      meaning: '감정과 이성의 균형이 좋은 관상',
      fortune: '안정적인 대인관계를 유지합니다'
    },
    far: {
      part: '눈썹', partEmoji: '🤨',
      trait: '눈과 먼 눈썹',
      meaning: '여유 있고 포용력이 있는 관상',
      fortune: '넓은 시야로 큰 그림을 그립니다'
    },
  },
  // 눈썹 방향
  eyebrow_direction: {
    up: {
      part: '눈썹', partEmoji: '🤨',
      trait: '올라가는 눈썹',
      meaning: '야망이 있고 진취적인 관상',
      fortune: '목표를 향해 끊임없이 전진합니다'
    },
    straight: {
      part: '눈썹', partEmoji: '🤨',
      trait: '수평 눈썹',
      meaning: '의지가 굳고 꾸준한 관상',
      fortune: '흔들림 없이 자기 길을 갑니다'
    },
    down: {
      part: '눈썹', partEmoji: '🤨',
      trait: '내려가는 눈썹',
      meaning: '인정이 많고 부드러운 관상',
      fortune: '주변의 도움이 많이 들어옵니다'
    },
  },
  // 눈썹 굵기
  eyebrow_thickness: {
    thick: {
      part: '눈썹', partEmoji: '🤨',
      trait: '진한 눈썹',
      meaning: '에너지가 넘치고 행동력이 있는 관상',
      fortune: '건강운과 활력이 좋습니다'
    },
    medium: {
      part: '눈썹', partEmoji: '🤨',
      trait: '보통 눈썹',
      meaning: '균형 잡힌 기질의 관상',
      fortune: '무난하게 일이 풀려나갑니다'
    },
    thin: {
      part: '눈썹', partEmoji: '🤨',
      trait: '가는 눈썹',
      meaning: '섬세하고 예민한 관상',
      fortune: '디테일에 강해 전문 분야에서 빛납니다'
    },
  },
  // 눈 크기
  eye_size: {
    big: {
      part: '눈', partEmoji: '👁️',
      trait: '큰 눈',
      meaning: '호기심이 많고 감성적인 관상',
      fortune: '예술적 재능이나 연애운이 좋습니다'
    },
    medium: {
      part: '눈', partEmoji: '👁️',
      trait: '보통 눈',
      meaning: '차분하고 믿음직한 관상',
      fortune: '신뢰를 바탕으로 성공합니다'
    },
    small: {
      part: '눈', partEmoji: '👁️',
      trait: '작은 눈',
      meaning: '신중하고 관찰력이 뛰어난 관상',
      fortune: '깊은 통찰력으로 기회를 잡습니다'
    },
  },
  // 눈 모양
  eye_shape: {
    up: {
      part: '눈', partEmoji: '👁️',
      trait: '올라간 눈꼬리',
      meaning: '자존심이 강하고 승부욕이 있는 관상',
      fortune: '경쟁에서 이기는 힘이 있습니다'
    },
    straight: {
      part: '눈', partEmoji: '👁️',
      trait: '수평 눈꼬리',
      meaning: '정직하고 공정한 관상',
      fortune: '신뢰를 얻어 좋은 인연이 들어옵니다'
    },
    down: {
      part: '눈', partEmoji: '👁️',
      trait: '내려간 눈꼬리',
      meaning: '온화하고 정이 많은 관상',
      fortune: '사람들에게 사랑받는 운입니다'
    },
  },
  // 코 높이
  nose_height: {
    high: {
      part: '코', partEmoji: '👃',
      trait: '높은 코',
      meaning: '자존심과 품위가 있는 관상',
      fortune: '사회적 지위가 높아질 운입니다'
    },
    medium: {
      part: '코', partEmoji: '👃',
      trait: '보통 코',
      meaning: '협조적이고 친근한 관상',
      fortune: '팀워크로 성공하는 운입니다'
    },
    low: {
      part: '코', partEmoji: '👃',
      trait: '낮은 코',
      meaning: '겸손하고 인내심이 있는 관상',
      fortune: '꾸준함이 재물을 모읍니다'
    },
  },
  // 코 너비
  nose_width: {
    wide: {
      part: '코', partEmoji: '👃',
      trait: '넓은 콧볼',
      meaning: '재물 복이 있고 포용력이 있는 관상',
      fortune: '금전운이 좋고 모으는 재주가 있습니다'
    },
    medium: {
      part: '코', partEmoji: '👃',
      trait: '보통 콧볼',
      meaning: '균형 잡힌 재물운의 관상',
      fortune: '안정적인 수입이 이어집니다'
    },
    narrow: {
      part: '코', partEmoji: '👃',
      trait: '좁은 콧볼',
      meaning: '섬세하고 절약 정신이 있는 관상',
      fortune: '계획적인 자산 관리가 중요합니다'
    },
  },
  // 입 크기
  mouth_size: {
    big: {
      part: '입', partEmoji: '👄',
      trait: '큰 입',
      meaning: '표현력이 좋고 적극적인 관상',
      fortune: '말로 하는 일에서 성공합니다'
    },
    medium: {
      part: '입', partEmoji: '👄',
      trait: '보통 입',
      meaning: '원만한 소통 능력의 관상',
      fortune: '대인관계가 무난하게 풀립니다'
    },
    small: {
      part: '입', partEmoji: '👄',
      trait: '작은 입',
      meaning: '신중하고 비밀을 잘 지키는 관상',
      fortune: '신뢰를 얻어 중요한 일을 맡게 됩니다'
    },
  },
  // 입술 두께
  lip_thickness: {
    thick: {
      part: '입', partEmoji: '👄',
      trait: '두꺼운 입술',
      meaning: '정이 많고 감성적인 관상',
      fortune: '연애운과 인복이 좋습니다'
    },
    medium: {
      part: '입', partEmoji: '👄',
      trait: '보통 입술',
      meaning: '균형 잡힌 감성의 관상',
      fortune: '안정적인 인간관계를 유지합니다'
    },
    thin: {
      part: '입', partEmoji: '👄',
      trait: '얇은 입술',
      meaning: '이성적이고 논리적인 관상',
      fortune: '분석력으로 성공하는 운입니다'
    },
  },
  // 턱 모양
  chin_shape: {
    round: {
      part: '턱', partEmoji: '😬',
      trait: '둥근 턱',
      meaning: '원만하고 인정이 많은 관상',
      fortune: '만년에 복이 들어오는 운입니다'
    },
    pointed: {
      part: '턱', partEmoji: '😬',
      trait: '뾰족한 턱',
      meaning: '예민하고 미적 감각이 있는 관상',
      fortune: '예술, 패션 분야에서 빛납니다'
    },
    square: {
      part: '턱', partEmoji: '😬',
      trait: '각진 턱',
      meaning: '의지가 굳고 끈기가 있는 관상',
      fortune: '어려움을 이겨내고 성공합니다'
    },
  },
  // 귀 크기
  ear_size: {
    big: {
      part: '귀', partEmoji: '👂',
      trait: '큰 귀',
      meaning: '복이 많고 장수하는 관상',
      fortune: '재물운과 건강운이 좋습니다'
    },
    medium: {
      part: '귀', partEmoji: '👂',
      trait: '보통 귀',
      meaning: '균형 잡힌 운세의 관상',
      fortune: '꾸준히 발전하는 운입니다'
    },
    small: {
      part: '귀', partEmoji: '👂',
      trait: '작은 귀',
      meaning: '섬세하고 예민한 관상',
      fortune: '감각적인 분야에서 재능을 발휘합니다'
    },
  },
};

// 종합 유형 판정
function determineOverallType(answers: Record<string, string>): { type: string; description: string } {
  // 특성 점수 계산
  let leaderScore = 0;    // 리더형
  let artistScore = 0;    // 예술가형
  let scholarScore = 0;   // 학자형
  let socialScore = 0;    // 사교형
  let practicalScore = 0; // 현실형

  // 얼굴형
  if (answers.face_shape === 'square') leaderScore += 2;
  if (answers.face_shape === 'oval') scholarScore += 2;
  if (answers.face_shape === 'round') socialScore += 2;
  if (answers.face_shape === 'long') artistScore += 2;

  // 이마
  if (answers.forehead_width === 'wide') scholarScore += 2;
  if (answers.forehead_shape === 'round') artistScore += 1;
  if (answers.forehead_shape === 'flat') practicalScore += 1;

  // 눈썹
  if (answers.eyebrow_direction === 'up') leaderScore += 2;
  if (answers.eyebrow_direction === 'down') socialScore += 1;
  if (answers.eyebrow_thickness === 'thick') leaderScore += 1;
  if (answers.eyebrow_thickness === 'thin') artistScore += 1;

  // 눈
  if (answers.eye_size === 'big') artistScore += 2;
  if (answers.eye_size === 'small') scholarScore += 1;
  if (answers.eye_shape === 'up') leaderScore += 1;
  if (answers.eye_shape === 'down') socialScore += 2;

  // 코
  if (answers.nose_height === 'high') leaderScore += 1;
  if (answers.nose_width === 'wide') practicalScore += 2;
  if (answers.nose_width === 'narrow') artistScore += 1;

  // 입
  if (answers.mouth_size === 'big') socialScore += 2;
  if (answers.lip_thickness === 'thick') socialScore += 1;
  if (answers.lip_thickness === 'thin') scholarScore += 1;

  // 턱
  if (answers.chin_shape === 'square') leaderScore += 2;
  if (answers.chin_shape === 'pointed') artistScore += 2;
  if (answers.chin_shape === 'round') socialScore += 1;

  // 귀
  if (answers.ear_size === 'big') practicalScore += 2;

  // 최고 점수 유형 찾기
  const scores = [
    { type: 'leader', score: leaderScore },
    { type: 'artist', score: artistScore },
    { type: 'scholar', score: scholarScore },
    { type: 'social', score: socialScore },
    { type: 'practical', score: practicalScore },
  ];

  scores.sort((a, b) => b.score - a.score);
  const topType = scores[0].type;

  const typeInfo: Record<string, { type: string; description: string }> = {
    leader: {
      type: '리더형 관상',
      description: '당신은 타고난 리더의 관상을 가지고 있습니다. 강한 의지와 결단력, 그리고 추진력이 얼굴에서 드러납니다. 사람들을 이끄는 위치에서 진가를 발휘하며, 큰 일을 도모할 때 빛나는 운세입니다.'
    },
    artist: {
      type: '예술가형 관상',
      description: '당신은 섬세하고 창의적인 예술가의 관상을 가지고 있습니다. 아름다움을 보는 눈과 독창적인 감각이 있습니다. 예술, 디자인, 패션 등 미적 감각을 활용하는 분야에서 성공할 운세입니다.'
    },
    scholar: {
      type: '학자형 관상',
      description: '당신은 지혜롭고 분석적인 학자의 관상을 가지고 있습니다. 깊은 사고력과 통찰력이 있으며, 학문이나 전문 분야에서 두각을 나타낼 운세입니다. 꾸준한 연구와 학습이 성공의 열쇠입니다.'
    },
    social: {
      type: '사교가형 관상',
      description: '당신은 친화력이 뛰어난 사교가의 관상을 가지고 있습니다. 따뜻한 인상과 원만한 성격으로 주변에 사람이 많이 모입니다. 대인관계를 통해 기회를 얻고, 협력으로 성공하는 운세입니다.'
    },
    practical: {
      type: '현실가형 관상',
      description: '당신은 실용적이고 현실적인 현실가의 관상을 가지고 있습니다. 꾸준함과 인내심이 있으며, 재물을 모으는 복이 있습니다. 안정적인 기반 위에서 착실히 성공을 쌓아가는 운세입니다.'
    },
  };

  return typeInfo[topType];
}

// 종합 결과 생성
export function generateFaceReadingResult(answers: Record<string, string>): FaceReadingResult {
  // 부위별 특성 수집
  const traits: FaceTraitResult[] = [];
  
  for (const [questionId, answerId] of Object.entries(answers)) {
    const interpretation = TRAIT_INTERPRETATIONS[questionId]?.[answerId];
    if (interpretation) {
      traits.push(interpretation);
    }
  }

  // 종합 유형 판정
  const { type: overallType, description: overallDescription } = determineOverallType(answers);

  // 성격 특성 추출
  const personality: string[] = [];
  if (answers.face_shape === 'round' || answers.chin_shape === 'round') personality.push('원만하고 부드러운 성격');
  if (answers.face_shape === 'square' || answers.chin_shape === 'square') personality.push('의지가 강하고 결단력 있음');
  if (answers.forehead_width === 'wide') personality.push('지혜롭고 선견지명이 있음');
  if (answers.eye_size === 'big') personality.push('감성이 풍부하고 표현력이 좋음');
  if (answers.eye_size === 'small') personality.push('신중하고 관찰력이 뛰어남');
  if (answers.eyebrow_direction === 'up') personality.push('야망이 있고 진취적');
  if (answers.lip_thickness === 'thick') personality.push('정이 많고 따뜻함');
  if (answers.lip_thickness === 'thin') personality.push('이성적이고 논리적');
  
  // 최소 3개 보장
  if (personality.length < 3) {
    const defaults = ['적응력이 좋음', '균형 잡힌 성격', '꾸준한 노력파'];
    while (personality.length < 3) {
      personality.push(defaults[personality.length]);
    }
  }

  // 강점
  const strengths: string[] = [];
  if (answers.forehead_width === 'wide' || answers.forehead_shape === 'round') strengths.push('기획력과 창의력');
  if (answers.eyebrow_thickness === 'thick' || answers.chin_shape === 'square') strengths.push('추진력과 실행력');
  if (answers.eye_shape === 'down' || answers.face_shape === 'round') strengths.push('대인관계 능력');
  if (answers.nose_width === 'wide' || answers.ear_size === 'big') strengths.push('재물 관리 능력');
  if (answers.mouth_size === 'big') strengths.push('표현력과 설득력');
  
  if (strengths.length < 2) {
    strengths.push('꾸준한 노력');
    strengths.push('성실함');
  }

  // 주의점
  const cautions: string[] = [];
  if (answers.eyebrow_direction === 'up') cautions.push('지나친 욕심은 금물');
  if (answers.eye_shape === 'up') cautions.push('자존심 때문에 손해 볼 수 있음');
  if (answers.nose_width === 'narrow') cautions.push('지나친 절약보다 적절한 투자 필요');
  if (answers.forehead_width === 'narrow') cautions.push('조급함을 경계할 것');
  
  if (cautions.length < 2) {
    cautions.push('건강 관리에 신경 쓸 것');
    cautions.push('주변 조언에 귀 기울일 것');
  }

  // 적합 직업
  const careerFit: string[] = [];
  if (answers.face_shape === 'square' || answers.eyebrow_direction === 'up') careerFit.push('경영자, CEO');
  if (answers.forehead_width === 'wide' || answers.forehead_shape === 'round') careerFit.push('연구원, 교수');
  if (answers.eye_size === 'big' || answers.chin_shape === 'pointed') careerFit.push('예술가, 디자이너');
  if (answers.mouth_size === 'big' || answers.face_shape === 'round') careerFit.push('영업, 마케팅');
  if (answers.nose_width === 'wide' || answers.ear_size === 'big') careerFit.push('금융, 투자');
  
  if (careerFit.length < 2) {
    careerFit.push('전문직');
    careerFit.push('서비스업');
  }

  // 연애운
  let loveFortune = '';
  if (answers.eye_size === 'big' && answers.lip_thickness === 'thick') {
    loveFortune = '감성이 풍부하고 정이 많아 연애운이 매우 좋습니다. 다정다감한 매력으로 이성에게 인기가 많고, 깊은 사랑을 할 수 있는 상입니다.';
  } else if (answers.eye_shape === 'down' || answers.face_shape === 'round') {
    loveFortune = '온화하고 친근한 인상으로 자연스럽게 인연이 들어옵니다. 편안한 관계를 원하며, 안정적인 연애를 하는 타입입니다.';
  } else if (answers.eye_shape === 'up' || answers.eyebrow_direction === 'up') {
    loveFortune = '자존심이 강해 쉽게 마음을 열지 않지만, 한번 사랑에 빠지면 열정적입니다. 당당한 매력이 이성을 끌어당깁니다.';
  } else {
    loveFortune = '신중하게 상대를 고르는 편이며, 진지한 만남을 선호합니다. 시간이 걸리더라도 좋은 인연을 만날 운세입니다.';
  }

  // 재물운
  let wealthFortune = '';
  if (answers.nose_width === 'wide' && answers.ear_size === 'big') {
    wealthFortune = '타고난 재물복이 있는 관상입니다. 돈을 모으는 재주가 있고, 투자에도 운이 따릅니다. 중년 이후 재산이 크게 늘어날 상입니다.';
  } else if (answers.nose_width === 'wide' || answers.ear_size === 'big') {
    wealthFortune = '재물운이 좋은 편입니다. 꾸준히 모으면 안정적인 자산을 형성할 수 있고, 금전적으로 어려움 없이 지낼 수 있습니다.';
  } else if (answers.nose_width === 'narrow') {
    wealthFortune = '절약 정신이 있어 새는 돈이 적습니다. 큰 돈보다는 안정적인 수입을 추구하며, 계획적인 자산 관리가 중요합니다.';
  } else {
    wealthFortune = '재물운은 보통이나 노력한 만큼 얻는 상입니다. 꾸준한 저축과 현명한 소비 습관이 부를 가져옵니다.';
  }

  // 건강 조언
  let healthTip = '';
  if (answers.forehead_width === 'narrow' || answers.eyebrow_position === 'close') {
    healthTip = '스트레스 관리에 신경 쓰세요. 머리를 많이 쓰는 편이라 두통이나 수면 문제가 생길 수 있습니다. 충분한 휴식을 취하세요.';
  } else if (answers.eye_size === 'big') {
    healthTip = '눈 건강에 주의하세요. 전자기기 사용을 줄이고, 정기적인 눈 휴식을 취하는 것이 좋습니다.';
  } else if (answers.nose_width === 'wide') {
    healthTip = '호흡기 건강은 좋은 편입니다. 다만 과식에 주의하고, 규칙적인 운동으로 체중 관리를 하세요.';
  } else {
    healthTip = '전반적으로 균형 잡힌 건강 상태입니다. 규칙적인 생활 습관과 적당한 운동으로 건강을 유지하세요.';
  }

  // 행운의 색상과 숫자
  const colors = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '금색'];
  const colorIndex = Object.values(answers).join('').length % colors.length;
  const luckyColor = colors[colorIndex];
  
  const numberBase = Object.values(answers).reduce((sum, val) => sum + val.length, 0);
  const luckyNumber = (numberBase % 9) + 1;

  return {
    traits,
    overallType,
    overallDescription,
    personality: personality.slice(0, 5),
    strengths: strengths.slice(0, 4),
    cautions: cautions.slice(0, 3),
    careerFit: careerFit.slice(0, 4),
    loveFortune,
    wealthFortune,
    healthTip,
    luckyColor,
    luckyNumber,
  };
}
