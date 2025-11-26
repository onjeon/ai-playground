'use client';

import { useState, useEffect } from 'react';
import { Share2, Link2, Check } from 'lucide-react';

// 카카오 SDK 타입 선언
declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: KakaoShareOptions) => void;
      };
    };
  }
}

interface KakaoShareOptions {
  objectType: 'feed';
  content: {
    title: string;
    description: string;
    imageUrl?: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  buttons?: Array<{
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }>;
}

interface ShareButtonsProps {
  title: string;
  description: string;
  url?: string;
  hashtags?: string[];
}

export default function ShareButtons({ title, description, url, hashtags = [] }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    // URL 설정 (클라이언트에서만)
    setShareUrl(url || window.location.href);

    // 카카오 SDK 로드
    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init('293212a05f16194e72db4c824c6218ca');
          setKakaoLoaded(true);
        }
      };
      document.head.appendChild(script);
    } else if (!window.Kakao.isInitialized()) {
      window.Kakao.init('293212a05f16194e72db4c824c6218ca');
      setKakaoLoaded(true);
    } else {
      setKakaoLoaded(true);
    }
  }, [url]);

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    if (!window.Kakao || !kakaoLoaded) {
      alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        // imageUrl: 'https://ai-playground.vercel.app/og-image.png', // TODO: 이미지 추가 후 활성화
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '테스트 하러가기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  // 페이스북 공유
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  // 트위터/X 공유
  const handleTwitterShare = () => {
    const text = `${title}\n${description}`;
    const hashtagString = hashtags.length > 0 ? hashtags.join(',') : 'AI놀이터,심리테스트';
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent(hashtagString)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  // 네이티브 공유 (모바일)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: shareUrl,
        });
      } catch {
        // 사용자가 취소했거나 오류 발생
      }
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {/* 카카오톡 */}
      <button
        onClick={handleKakaoShare}
        className="w-12 h-12 flex items-center justify-center bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
        aria-label="카카오톡으로 공유"
        title="카카오톡"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.82 5.31 4.56 6.72l-.92 3.42c-.08.28.22.52.47.37l4.08-2.51c.59.08 1.2.12 1.81.12 5.52 0 10-3.58 10-8S17.52 3 12 3z"/>
        </svg>
      </button>

      {/* 페이스북 */}
      <button
        onClick={handleFacebookShare}
        className="w-12 h-12 flex items-center justify-center bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
        aria-label="페이스북으로 공유"
        title="페이스북"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </button>

      {/* 트위터/X */}
      <button
        onClick={handleTwitterShare}
        className="w-12 h-12 flex items-center justify-center bg-black hover:bg-gray-800 text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
        aria-label="X로 공유"
        title="X (트위터)"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>

      {/* 링크 복사 */}
      <button
        onClick={handleCopyLink}
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 ${
          copied 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        aria-label="링크 복사"
        title={copied ? "복사됨!" : "링크 복사"}
      >
        {copied ? <Check className="w-6 h-6" /> : <Link2 className="w-6 h-6" />}
      </button>

      {/* 네이티브 공유 (모바일에서만 표시) */}
      {'share' in navigator && (
        <button
          onClick={handleNativeShare}
          className="w-12 h-12 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 sm:hidden"
          aria-label="공유하기"
          title="공유하기"
        >
          <Share2 className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
