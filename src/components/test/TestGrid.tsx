import { Test } from '@/types';
import TestCard from './TestCard';
// AdSense 승인 후 활성화
// import { AdNativeCard } from '@/components/ads';

interface TestGridProps {
  tests: Test[];
  title?: string;
  emptyMessage?: string;
  showAds?: boolean;
  adInterval?: number; // 몇 번째마다 광고를 넣을지 (기본: 6)
}

export default function TestGrid({
  tests,
  title,
  emptyMessage = '테스트가 없습니다.',
  showAds = false,
  adInterval = 6,
}: TestGridProps) {
  // showAds, adInterval은 AdSense 승인 후 사용
  void showAds;
  void adInterval;

  if (tests.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  // AdSense 승인 후 광고 삽입 로직 활성화
  /*
  const renderItems = () => {
    if (!showAds || tests.length < adInterval) {
      return tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ));
    }

    const items: React.ReactNode[] = [];
    tests.forEach((test, index) => {
      items.push(<TestCard key={test.id} test={test} />);
      
      // adInterval마다 광고 삽입 (마지막 아이템 뒤에는 삽입 안 함)
      if ((index + 1) % adInterval === 0 && index < tests.length - 1) {
        items.push(<AdNativeCard key={`ad-${index}`} />);
      }
    });
    
    return items;
  };
  */

  return (
    <div>
      {title && (
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
}
