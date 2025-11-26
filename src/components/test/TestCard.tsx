import Link from 'next/link';
import { Clock, Users, Crown, Play } from 'lucide-react';
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
      <Card className="group h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/30 dark:to-pink-900/30 overflow-hidden">
          {/* Emoji Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
              {categoryEmoji[test.categoryId] || '🎯'}
            </span>
          </div>

          {/* Premium Badge */}
          {test.isPremium && (
            <div className="absolute top-3 right-3">
              <Badge variant="premium" className="flex items-center gap-1 shadow-lg">
                <Crown className="w-3 h-3" />
                프리미엄
              </Badge>
            </div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
              <Play className="w-6 h-6 text-indigo-600 ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {test.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-1.5">
            {test.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
            {test.shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {test.estimatedTime}분
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {formatParticipantCount(test.participantCount)}
              </span>
            </div>
            {test.isPremium ? (
              <span className="text-amber-600 dark:text-amber-400 font-semibold">₩{test.price.toLocaleString()}</span>
            ) : (
              <span className="text-green-600 dark:text-green-400 font-semibold">무료</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
