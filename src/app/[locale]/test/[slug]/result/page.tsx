'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { loadTestModule, calculateTestResult, BaseTestResult } from '@/lib/testLoader';
import { getTestBySlug } from '@/lib/data';
import TestResultRenderer from '@/components/test/TestResultRenderer';

function TestResultContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const test = getTestBySlug(slug);

  const [result, setResult] = useState<BaseTestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadResult() {
      const answersParam = searchParams.get('answers');
      if (!answersParam) {
        setError('응답 데이터가 없습니다.');
        setLoading(false);
        return;
      }

      try {
        const answers = answersParam.split(',').map(Number);
        
        // 테스트 모듈 동적 로드
        const module = await loadTestModule(slug);
        if (!module) {
          setError('테스트 데이터를 불러올 수 없습니다.');
          setLoading(false);
          return;
        }

        // 결과 계산
        const calculatedResult = calculateTestResult(module, slug, answers);
        if (!calculatedResult) {
          setError('결과를 계산할 수 없습니다.');
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
        setError('결과를 불러오는 중 오류가 발생했습니다.');
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
        <p className="text-gray-600 dark:text-gray-300">결과를 분석하는 중...</p>
      </div>
    );
  }

  // 에러 또는 데이터 없음
  if (error || !test || !result) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {error || '결과를 불러올 수 없습니다'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">테스트를 다시 진행해주세요.</p>
        <Link
          href={`/test/${slug}`}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-block"
        >
          테스트 다시하기
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

export default function TestResultPage() {
  return (
    <Suspense fallback={
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-6xl mb-4 animate-bounce">🔮</div>
        <p className="text-gray-600 dark:text-gray-300">결과를 불러오는 중...</p>
      </div>
    }>
      <TestResultContent />
    </Suspense>
  );
}
