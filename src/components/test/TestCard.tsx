import Link from 'next/link';
import { Clock, Users } from 'lucide-react';
import { Card, Badge } from '@/components/ui';
import { Test } from '@/types';
import { formatParticipantCount } from '@/lib/data';

interface TestCardProps {
  test: Test;
}

const categoryEmoji: Record<string, string> = {
  personality: '🧠',
  psychology: '💭',
  relationship: '💕',
  career: '💼',
  fun: '✨',
  iq: '💡',
};

export default function TestCard({ test }: TestCardProps) {
  return (
    <Link href={`/test/${test.slug}`}>
      <Card className="group h-full active:scale-[0.98] transition-all duration-200 cursor-pointer p-3">
        {/* Header: Emoji + Tags */}
        <div className="flex items-start gap-2 mb-2">
          <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center">
            <span className="text-lg">
              {categoryEmoji[test.categoryId] || '🎯'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1">
              {test.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="default" className="text-[10px] px-1.5">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[13px] text-gray-900 dark:text-white line-clamp-2 mb-1 leading-tight">
          {test.title}
        </h3>

        {/* Short Description */}
        <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 mb-2 leading-relaxed">
          {test.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-0.5">
              <Clock className="w-3 h-3" />
              {test.estimatedTime}분
            </span>
            <span className="flex items-center gap-0.5">
              <Users className="w-3 h-3" />
              {formatParticipantCount(test.participantCount)}
            </span>
          </div>
          <span className="text-green-600 dark:text-green-400 font-semibold">무료</span>
        </div>
      </Card>
    </Link>
  );
}
