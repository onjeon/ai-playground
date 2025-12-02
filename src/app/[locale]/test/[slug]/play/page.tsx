'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTestBySlug } from '@/lib/data';
import { loadTestModule, getTestQuestions } from '@/lib/testLoader';

// 공통 질문 타입
interface QuestionOption {
  text: string;
  [key: string]: unknown;
}

interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

// 질문을 공통 형식으로 변환
function normalizeQuestions(rawQuestions: unknown[]): Question[] {
  return rawQuestions.map((q: unknown, index: number) => {
    const question = q as Record<string, unknown>;
    
    // options 처리
    let options: QuestionOption[] = [];
    if (Array.isArray(question.options)) {
      options = question.options.map((opt: unknown) => {
        if (typeof opt === 'string') {
          return { text: opt };
        }
        if (typeof opt === 'object' && opt !== null) {
          const optObj = opt as Record<string, unknown>;
          return {
            text: String(optObj.text || ''),
            ...optObj,
          };
        }
        return { text: String(opt) };
      });
    }
    
    return {
      id: typeof question.id === 'number' ? question.id : index + 1,
      question: String(question.question || ''),
      options,
    };
  });
}

function TestPlayContent() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const test = getTestBySlug(slug);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 질문 로드
  useEffect(() => {
    async function loadQuestions() {
      try {
        const module = await loadTestModule(slug);
        if (!module) {
          setError('테스트 데이터를 불러올 수 없습니다.');
          setLoading(false);
          return;
        }

        const rawQuestions = getTestQuestions(module);
        if (!rawQuestions || rawQuestions.length === 0) {
          setError('질문을 찾을 수 없습니다.');
          setLoading(false);
          return;
        }

        const normalizedQuestions = normalizeQuestions(rawQuestions);
        setQuestions(normalizedQuestions);
        setAnswers(new Array(normalizedQuestions.length).fill(-1));
        setLoading(false);
      } catch (err) {
        console.error('Error loading questions:', err);
        setError('질문을 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      }
    }

    // 저장된 답변 불러오기
    const savedAnswers = sessionStorage.getItem(`test-${slug}-answers`);
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers);
        if (Array.isArray(parsed)) {
          // 마지막으로 답변한 질문 인덱스 찾기
          const lastAnsweredIndex = parsed.findLastIndex((a: number) => a !== -1);
          if (lastAnsweredIndex >= 0) {
            setCurrentIndex(Math.min(lastAnsweredIndex + 1, parsed.length - 1));
          }
        }
      } catch (e) {
        console.error('Error parsing saved answers:', e);
      }
    }

    loadQuestions();
  }, [slug]);

  // 답변 저장
  useEffect(() => {
    if (answers.length > 0 && answers.some(a => a !== -1)) {
      sessionStorage.setItem(`test-${slug}-answers`, JSON.stringify(answers));
    }
  }, [answers, slug]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);

    // 자동으로 다음 질문으로 이동
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    // 모든 질문에 답변했는지 확인
    const unansweredIndex = answers.findIndex(a => a === -1);
    if (unansweredIndex !== -1) {
      setCurrentIndex(unansweredIndex);
      return;
    }

    // 결과 페이지로 이동
    const answersString = answers.join(',');
    router.push(`/test/${slug}/result?answers=${answersString}`);
  };

  // 로딩 중
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-4 animate-bounce">📝</div>
        <p className="text-gray-600 dark:text-gray-300">테스트 준비 중...</p>
      </div>
    );
  }

  // 에러
  if (error || !test || questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {error || '테스트를 불러올 수 없습니다'}
        </h1>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          돌아가기
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;
  const allAnswered = answers.every(a => a !== -1);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {test.title}
          </span>
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                answers[currentIndex] === index
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                  : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-800'
              }`}
            >
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
            currentIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          이전
        </button>

        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
              allAnswered
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            결과 보기
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={answers[currentIndex] === -1}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              answers[currentIndex] === -1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
            }`}
          >
            다음
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Jump (for answered questions) */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">질문 바로가기</p>
        <div className="flex flex-wrap gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                index === currentIndex
                  ? 'bg-indigo-500 text-white'
                  : answers[index] !== -1
                  ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestPlayPage() {
  return (
    <Suspense fallback={
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-4 animate-bounce">📝</div>
        <p className="text-gray-600 dark:text-gray-300">테스트 준비 중...</p>
      </div>
    }>
      <TestPlayContent />
    </Suspense>
  );
}
