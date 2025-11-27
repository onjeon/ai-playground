// 회사 유형 매칭 테스트

export const questions = [
  {
    id: 1,
    question: "선호하는 업무 환경은?",
    options: [
      { text: "체계적이고 안정적인 환경", value: "corporate" },
      { text: "자유롭고 도전적인 환경", value: "startup" },
      { text: "글로벌하고 다양한 환경", value: "foreign" },
      { text: "혼자 자유롭게 일하는 환경", value: "freelance" },
    ],
  },
  {
    id: 2,
    question: "급여와 안정성에 대한 생각은?",
    options: [
      { text: "안정적인 급여가 가장 중요", value: "corporate" },
      { text: "스톡옵션/성과급에 베팅", value: "startup" },
      { text: "높은 연봉과 복지", value: "foreign" },
      { text: "자유도가 수입보다 중요", value: "freelance" },
    ],
  },
  {
    id: 3,
    question: "야근과 워라밸에 대해?",
    options: [
      { text: "정해진 업무 시간 선호", value: "corporate" },
      { text: "필요하면 밤새도 괜찮음", value: "startup" },
      { text: "효율적 업무 후 칼퇴", value: "foreign" },
      { text: "내 페이스대로 일하고 싶음", value: "freelance" },
    ],
  },
  {
    id: 4,
    question: "조직 문화 선호도는?",
    options: [
      { text: "명확한 위계와 체계", value: "corporate" },
      { text: "수평적이고 빠른 소통", value: "startup" },
      { text: "프로페셔널하고 성과 중심", value: "foreign" },
      { text: "조직에 얽매이고 싶지 않음", value: "freelance" },
    ],
  },
  {
    id: 5,
    question: "성장과 커리어에 대해?",
    options: [
      { text: "정해진 경로로 안정적 승진", value: "corporate" },
      { text: "빠르게 성장하고 싶음", value: "startup" },
      { text: "글로벌 커리어 개발", value: "foreign" },
      { text: "나만의 브랜드 구축", value: "freelance" },
    ],
  },
  {
    id: 6,
    question: "업무 스타일은?",
    options: [
      { text: "매뉴얼과 프로세스 따르기", value: "corporate" },
      { text: "새로운 것 만들어가기", value: "startup" },
      { text: "전문성으로 기여하기", value: "foreign" },
      { text: "내 방식대로 진행하기", value: "freelance" },
    ],
  },
  {
    id: 7,
    question: "팀워크에 대한 생각은?",
    options: [
      { text: "팀의 일원으로 협력", value: "corporate" },
      { text: "소수 정예로 기동성 있게", value: "startup" },
      { text: "전문가들과 프로젝트 협업", value: "foreign" },
      { text: "혼자 일하는 게 편함", value: "freelance" },
    ],
  },
  {
    id: 8,
    question: "위험 감수에 대해?",
    options: [
      { text: "안정이 최고, 위험 회피", value: "corporate" },
      { text: "높은 위험, 높은 보상 OK", value: "startup" },
      { text: "계산된 위험은 감수", value: "foreign" },
      { text: "내 사업은 내가 책임", value: "freelance" },
    ],
  },
  {
    id: 9,
    question: "회사 규모 선호는?",
    options: [
      { text: "큰 조직에서 일하고 싶음", value: "corporate" },
      { text: "작은 팀에서 영향력 발휘", value: "startup" },
      { text: "글로벌 기업에서 배우기", value: "foreign" },
      { text: "1인 기업이 이상적", value: "freelance" },
    ],
  },
  {
    id: 10,
    question: "복지에서 중요한 것은?",
    options: [
      { text: "연금, 보험 등 안정적 복지", value: "corporate" },
      { text: "자유로운 문화, 스낵바", value: "startup" },
      { text: "휴가, 해외 출장 기회", value: "foreign" },
      { text: "시간과 장소의 자유", value: "freelance" },
    ],
  },
  {
    id: 11,
    question: "5년 후 나의 모습은?",
    options: [
      { text: "안정적인 중견 직원", value: "corporate" },
      { text: "스타트업 임원이나 창업", value: "startup" },
      { text: "글로벌 전문가", value: "foreign" },
      { text: "성공한 프리랜서/1인기업", value: "freelance" },
    ],
  },
  {
    id: 12,
    question: "일에서 가장 중요한 것은?",
    options: [
      { text: "안정성과 예측 가능성", value: "corporate" },
      { text: "도전과 빠른 성장", value: "startup" },
      { text: "전문성과 글로벌 경험", value: "foreign" },
      { text: "자유와 자기 결정권", value: "freelance" },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  pros: string[];
  cons: string[];
  companies: string;
  advice: string;
}> = {
  corporate: {
    type: "corporate",
    title: "대기업/공기업형",
    emoji: "🏢",
    description: "당신은 안정적이고 체계적인 대기업이나 공기업이 잘 맞습니다! 명확한 시스템 안에서 성장하는 타입이에요.",
    traits: ["안정 추구", "체계적", "장기적 계획", "조직 적응력"],
    pros: ["안정적 급여", "체계적 교육", "복지", "브랜드"],
    cons: ["느린 의사결정", "관료주의", "경쟁"],
    companies: "삼성, 현대, 네이버, LG, 공기업 등",
    advice: "안정 속에서도 자기 개발을 게을리하지 마세요!",
  },
  startup: {
    type: "startup",
    title: "스타트업형",
    emoji: "🚀",
    description: "당신은 빠르게 성장하는 스타트업이 잘 맞습니다! 도전적이고 역동적인 환경에서 빛나는 타입이에요.",
    traits: ["도전 정신", "적응력", "성장 욕구", "기업가 정신"],
    pros: ["빠른 성장", "다양한 경험", "수평적 문화", "스톡옵션"],
    cons: ["불안정성", "과로", "낮은 초기 급여"],
    companies: "쿠팡, 토스, 당근마켓, 마켓컬리 등",
    advice: "성장 잠재력과 팀을 잘 보고 선택하세요!",
  },
  foreign: {
    type: "foreign",
    title: "외국계 기업형",
    emoji: "🌍",
    description: "당신은 글로벌 외국계 기업이 잘 맞습니다! 전문성과 워라밸을 중시하는 타입이에요.",
    traits: ["전문성", "글로벌 마인드", "효율 중시", "자기 관리"],
    pros: ["높은 연봉", "워라밸", "글로벌 경험", "전문성 개발"],
    cons: ["본사 의존", "고용 불안", "문화 차이"],
    companies: "구글, 아마존, 마이크로소프트, 외국계 금융사 등",
    advice: "영어와 전문성을 꾸준히 키우세요!",
  },
  freelance: {
    type: "freelance",
    title: "프리랜서/1인기업형",
    emoji: "💻",
    description: "당신은 자유로운 프리랜서나 1인기업이 잘 맞습니다! 독립적이고 자기주도적인 타입이에요.",
    traits: ["독립심", "자기 관리", "다재다능", "기업가 정신"],
    pros: ["완전한 자유", "높은 수익 가능", "자기 결정", "다양한 경험"],
    cons: ["불안정한 수입", "자기 관리 필요", "혼자 책임"],
    companies: "개인 브랜드, 1인 에이전시, 크리에이터 등",
    advice: "꾸준한 네트워킹과 포트폴리오 관리가 중요해요!",
  },
};

export function calculateResult(answers: string[]): string {
  const scores: Record<string, number> = {
    corporate: 0,
    startup: 0,
    foreign: 0,
    freelance: 0,
  };

  answers.forEach(answer => {
    if (scores[answer] !== undefined) {
      scores[answer]++;
    }
  });

  return Object.entries(scores).reduce((a, b) =>
    scores[a[0]] > scores[b[0]] ? a : b
  )[0];
}
