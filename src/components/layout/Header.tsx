'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, Sun, Moon, Zap, Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tests?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="px-3 flex items-center justify-between h-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">AI</span>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            놀이터
          </span>
        </Link>

        {/* Right buttons */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 dark:text-gray-400 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>
          <button
            onClick={() => { setIsSearchOpen(!isSearchOpen); setIsMobileMenuOpen(false); }}
            className="p-2 text-gray-500 dark:text-gray-400 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsSearchOpen(false); }}
            className="p-2 text-gray-500 dark:text-gray-400 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search */}
      {isSearchOpen && (
        <form onSubmit={handleSearch} className="px-3 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="어떤 테스트를 찾으시나요?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all"
              autoFocus
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </form>
      )}

      {/* Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <nav className="px-3 py-2 space-y-0.5">
            <Link href="/" className="block px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              홈
            </Link>
            <Link href="/tests?sort=popular" className="block px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              인기 테스트
            </Link>
            <Link href="/tests?sort=new" className="block px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              신규 테스트
            </Link>
            <div className="my-1.5 border-t border-gray-100 dark:border-gray-800" />
            <Link href="/physical" className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              <Zap className="w-4 h-4 text-yellow-500" />
              피지컬 테스트
            </Link>
            <Link href="/games" className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              <Gamepad2 className="w-4 h-4 text-green-500" />
              게임
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
