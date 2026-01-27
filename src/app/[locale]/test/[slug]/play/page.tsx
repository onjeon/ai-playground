'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTestBySlug } from '@/lib/data';
import { loadTestModule, getTestQuestions, calculateTestResult } from '@/lib/testLoader';

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
  const t = useTranslations('test');
  const slug = params.slug as string;
  const test = getTestBySlug(slug);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [testModule, setTestModule] = useState<Awaited<ReturnType<typeof loadTestModule>> | null>(null);

  // 질문 로드
  useEffect(() => {
    async function loadQuestions() {
      try {
        const module = await loadTestModule(slug);
        if (!module) {
          setErrorKey('cannotLoadTest');
          setLoading(false);
          return;
        }

        setTestModule(module);

        const rawQuestions = getTestQuestions(module);
        if (!rawQuestions || rawQuestions.length === 0) {
          setErrorKey('cannotFindQuestions');
          setLoading(false);
          return;
        }

        const normalizedQuestions = normalizeQuestions(rawQuestions);
        setQuestions(normalizedQuestions);
        setAnswers(new Array(normalizedQuestions.length).fill(-1));
        setLoading(false);
      } catch (err) {
        console.error('Error loading questions:', err);
        setErrorKey('errorLoadingQuestions');
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

    // 결과 미리 계산하여 OG 메타데이터용 파라미터 생성
    let resultParams = '';
    if (testModule) {
      try {
        const result = calculateTestResult(testModule, slug, answers);
        if (result) {
          const emoji = encodeURIComponent(result.emoji || '🎯');
          const title = encodeURIComponent(result.title || '');
          resultParams = `&emoji=${emoji}&title=${title}`;
        }
      } catch (err) {
        console.error('Error pre-calculating result:', err);
      }
    }

    // 결과 페이지로 이동
    const answersString = answers.join(',');
    router.push(`/test/${slug}/result?answers=${answersString}${resultParams}`);
  };

  // 로딩 중
  if (loading) {
    return (
      <div className="content-container text-center py-16 md:py-20">
        <div className="text-6xl mb-4 animate-bounce">📝</div>
        <p className="text-gray-600 dark:text-gray-300">{t('loading')}</p>
      </div>
    );
  }

  // 에러
  if (errorKey || !test || questions.length === 0) {
    return (
      <div className="content-container text-center py-16 md:py-20">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {errorKey ? t(errorKey) : t('cannotLoadTest')}
        </h1>
        <button
          onClick={() => router.back()}
          className="primary-action-btn bg-indigo-600 text-white hover:bg-indigo-700 no-select inline-flex"
        >
          {t('goBack')}
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;
  const allAnswered = answers.every(a => a !== -1);

  return (
    <div className="content-container">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[60%]">
            {test.title}
          </span>
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
        {/* Progress Bar - slightly taller on mobile for visibility */}
        <div className="w-full h-2.5 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-5 md:p-8 mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-5 md:mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {/* Options - Mobile optimized with larger touch targets */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`test-option-btn no-select ${
                answers[currentIndex] === index
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                  : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation - Larger touch targets on mobile */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`nav-btn no-select ${
            currentIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">{t('previous')}</span>
        </button>

        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`primary-action-btn no-select ${
              allAnswered
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 active:opacity-80'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {t('viewResult')}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={answers[currentIndex] === -1}
            className={`nav-btn no-select ${
              answers[currentIndex] === -1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 active:bg-indigo-100 dark:active:bg-indigo-900/50'
            }`}
          >
            <span className="hidden sm:inline">{t('next')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Submit button when all answered */}
      {allAnswered && !isLastQuestion && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold text-sm"
          >
            {t('viewResult')}
          </button>
        </div>
      )}
    </div>
  );
}

function LoadingFallback() {
  const t = useTranslations('test');
  return (
    <div className="content-container text-center py-16 md:py-20">
      <div className="text-6xl mb-4 animate-bounce">📝</div>
      <p className="text-gray-600 dark:text-gray-300">{t('loading')}</p>
    </div>
  );
}

export default function TestPlayPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TestPlayContent />
    </Suspense>
  );
}
