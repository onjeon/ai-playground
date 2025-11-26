import { Test } from '@/types';
import TestCard from './TestCard';

interface TestGridProps {
  tests: Test[];
  title?: string;
  emptyMessage?: string;
}

export default function TestGrid({
  tests,
  title,
  emptyMessage = '테스트가 없습니다.',
}: TestGridProps) {
  if (tests.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
}
