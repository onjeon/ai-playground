'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { loadTestModule, calculateTestResult, BaseTestResult } from '@/lib/testLoader';
import { getTestBySlug } from '@/lib/data';
import TestResultRenderer from '@/components/test/TestResultRenderer';

function TestResultContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const t = useTranslations('test');
  const slug = params.slug as string;
  const test = getTestBySlug(slug);

  const [result, setResult] = useState<BaseTestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  useEffect(() => {
    async function loadResult() {
      const answersParam = searchParams.get('answers');
      if (!answersParam) {
        setErrorKey('noResponseData');
        setLoading(false);
        return;
      }

      try {
        const answers = answersParam.split(',').map(Number);
        
        // 테스트 모듈 동적 로드
        const module = await loadTestModule(slug);
        if (!module) {
          setErrorKey('cannotLoadTest');
          setLoading(false);
          return;
        }

        // 결과 계산
        const calculatedResult = calculateTestResult(module, slug, answers);
        if (!calculatedResult) {
          setErrorKey('cannotCalculate');
          setLoading(false);
          return;
        }

        setResult(calculatedResult);
        setLoading(false);

        // 세션 스토리지 정리
        sessionStorage.removeItem(`test-${slug}-answers`);

        // 참여자 수 증가 (localStorage 기반)
        const key = `test-${slug}-participated`;
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, 'true');
        }
      } catch (err) {
        console.error('Error loading test result:', err);
        setErrorKey('errorLoadingResult');
        setLoading(false);
      }
    }

    loadResult();
  }, [searchParams, slug]);

  // 로딩 중
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-4 animate-bounce">🔮</div>
        <p className="text-gray-600 dark:text-gray-300">{t('analyzing')}</p>
      </div>
    );
  }

  // 에러 또는 데이터 없음
  if (errorKey || !test || !result) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {errorKey ? t(errorKey) : t('cannotLoadResult')}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">{t('retryTestAgain')}</p>
        <Link
          href={`/test/${slug}`}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-block"
        >
          {t('retryTest')}
        </Link>
      </div>
    );
  }

  return (
    <TestResultRenderer
      result={result}
      slug={slug}
      testTitle={test.title}
      testTags={test.tags}
    />
  );
}

function LoadingFallback() {
  const t = useTranslations('test');
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <div className="text-6xl mb-4 animate-bounce">🔮</div>
      <p className="text-gray-600 dark:text-gray-300">{t('analyzing')}</p>
    </div>
  );
}

export default function TestResultPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TestResultContent />
    </Suspense>
  );
}
