import Link from 'next/link';
import { Clock, Users, Crown } from 'lucide-react';
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
      <Card className="group h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer p-3 sm:p-4">
        {/* Header: Emoji + Tags + Premium */}
        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
          {/* Emoji */}
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/30 dark:to-pink-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
            <span className="text-xl sm:text-2xl">
              {categoryEmoji[test.categoryId] || '🎯'}
            </span>
          </div>
          
          {/* Tags & Premium */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
              {test.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="default" className="text-[10px] sm:text-xs px-1.5 sm:px-2">
                  #{tag}
                </Badge>
              ))}
              {test.isPremium && (
                <Badge variant="premium" className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs">
                  <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  프리미엄
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-1 sm:mb-1.5">
          {test.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2 sm:mb-3">
          {test.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-400 pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-0.5 sm:gap-1">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {test.estimatedTime}분
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {formatParticipantCount(test.participantCount)}
            </span>
          </div>
          {test.isPremium ? (
            <span className="text-amber-600 dark:text-amber-400 font-semibold">₩{test.price.toLocaleString()}</span>
          ) : (
            <span className="text-green-600 dark:text-green-400 font-semibold">무료</span>
          )}
        </div>
      </Card>
    </Link>
  );
}
