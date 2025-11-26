// 카테고리 타입
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

// 테스트 타입
export interface Test {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  thumbnailUrl: string;
  questionCount: number;
  estimatedTime: number; // 분 단위
  participantCount: number;
  isPremium: boolean;
  price: number; // 0이면 무료
  tags: string[];
  createdAt: string;
}

// 테스트 질문 타입
export interface Question {
  id: string;
  testId: string;
  order: number;
  content: string;
  type: 'single' | 'multiple' | 'scale' | 'text';
  options?: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  label: string;
  value: string | number;
  imageUrl?: string;
}

// 테스트 결과 타입
export interface TestResult {
  id: string;
  testId: string;
  title: string;
  description: string;
  imageUrl?: string;
  traits?: ResultTrait[];
  shareText: string;
}

export interface ResultTrait {
  name: string;
  value: number;
  maxValue: number;
  description: string;
}

// 사용자 응답 타입
export interface UserAnswer {
  questionId: string;
  answer: string | number | string[];
}

// 테스트 세션 타입
export interface TestSession {
  testId: string;
  currentQuestionIndex: number;
  answers: UserAnswer[];
  startedAt: string;
  completedAt?: string;
}
