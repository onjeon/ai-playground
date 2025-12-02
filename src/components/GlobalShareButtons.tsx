'use client';

import { useState, useEffect } from 'react';
import { Share2, Link2, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/config';

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

// 공유 플랫폼 타입
type SharePlatform = 'kakao' | 'line' | 'whatsapp' | 'telegram' | 'zalo' | 'facebook' | 'twitter' | 'copy';

// 국가별 공유 버튼 설정
const shareConfig: Record<string, SharePlatform[]> = {
  ko: ['kakao', 'facebook', 'twitter', 'copy'],
  ja: ['line', 'twitter', 'facebook', 'copy'],
  'zh-TW': ['line', 'facebook', 'twitter', 'copy'],
  th: ['line', 'facebook', 'twitter', 'copy'],
  id: ['whatsapp', 'facebook', 'twitter', 'copy'],
  vi: ['zalo', 'facebook', 'twitter', 'copy'],
  ms: ['whatsapp', 'facebook', 'twitter', 'copy'],
  fil: ['facebook', 'twitter', 'whatsapp', 'copy'],
  en: ['twitter', 'facebook', 'whatsapp', 'copy'],
  'pt-BR': ['whatsapp', 'facebook', 'twitter', 'copy'],
  es: ['whatsapp', 'facebook', 'twitter', 'copy'],
  de: ['whatsapp', 'facebook', 'twitter', 'copy'],
  fr: ['whatsapp', 'facebook', 'twitter', 'copy'],
  it: ['whatsapp', 'facebook', 'twitter', 'copy'],
  tr: ['whatsapp', 'twitter', 'facebook', 'copy'],
  ar: ['whatsapp', 'twitter', 'telegram', 'copy'],
  hi: ['whatsapp', 'facebook', 'twitter', 'copy'],
  pl: ['whatsapp', 'facebook', 'twitter', 'copy'],
  nl: ['whatsapp', 'facebook', 'twitter', 'copy'],
};

// 기본 설정 (설정에 없는 국가용)
const defaultShareConfig: SharePlatform[] = ['facebook', 'twitter', 'whatsapp', 'copy'];

interface GlobalShareButtonsProps {
  title: string;
  description: string;
  url?: string;
  hashtags?: string[];
  imageUrl?: string;
}

export default function GlobalShareButtons({ 
  title, 
  description, 
  url, 
  hashtags = [],
  imageUrl 
}: GlobalShareButtonsProps) {
  const locale = useLocale() as Locale;
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [kakaoLoaded, setKakaoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 현재 locale에 맞는 공유 버튼 설정
  const platforms = shareConfig[locale] || defaultShareConfig;

  useEffect(() => {
    // URL 설정 (클라이언트에서만)
    setShareUrl(url || window.location.href);
    
    // 모바일 체크
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    // 카카오 SDK 로드 (한국어인 경우만)
    if (locale === 'ko' && platforms.includes('kakao')) {
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
    }
  }, [url, locale, platforms]);

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
        title,
        description,
        imageUrl: imageUrl || undefined,
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

  // LINE 공유
  const handleLineShare = () => {
    const text = `${title}\n${description}\n${shareUrl}`;
    const lineUrl = `https://line.me/R/share?text=${encodeURIComponent(text)}`;
    window.open(lineUrl, '_blank', 'width=600,height=400');
  };

  // WhatsApp 공유
  const handleWhatsAppShare = () => {
    const text = `${title}\n${description}\n${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'width=600,height=400');
  };

  // Telegram 공유
  const handleTelegramShare = () => {
    const text = `${title}\n${description}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank', 'width=600,height=400');
  };

  // Zalo 공유 (베트남)
  const handleZaloShare = () => {
    // Zalo는 모바일 앱 딥링크 사용
    const text = `${title}\n${description}\n${shareUrl}`;
    const zaloUrl = `https://zalo.me/share?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
    window.open(zaloUrl, '_blank', 'width=600,height=400');
  };

  // 페이스북 공유
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  // 트위터/X 공유
  const handleTwitterShare = () => {
    const text = `${title}\n${description}`;
    const hashtagString = hashtags.length > 0 ? hashtags.join(',') : '';
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}${hashtagString ? `&hashtags=${encodeURIComponent(hashtagString)}` : ''}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  // 네이티브 공유 (모바일)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        });
      } catch {
        // 사용자가 취소했거나 오류 발생
      }
    }
  };

  // 플랫폼별 버튼 렌더링
  const renderButton = (platform: SharePlatform) => {
    switch (platform) {
      case 'kakao':
        return (
          <button
            key="kakao"
            onClick={handleKakaoShare}
            className="w-12 h-12 flex items-center justify-center bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="KakaoTalk"
            title="KakaoTalk"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.82 5.31 4.56 6.72l-.92 3.42c-.08.28.22.52.47.37l4.08-2.51c.59.08 1.2.12 1.81.12 5.52 0 10-3.58 10-8S17.52 3 12 3z"/>
            </svg>
          </button>
        );
      
      case 'line':
        return (
          <button
            key="line"
            onClick={handleLineShare}
            className="w-12 h-12 flex items-center justify-center bg-[#00B900] hover:bg-[#00A000] text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="LINE"
            title="LINE"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
          </button>
        );
      
      case 'whatsapp':
        return (
          <button
            key="whatsapp"
            onClick={handleWhatsAppShare}
            className="w-12 h-12 flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        );
      
      case 'telegram':
        return (
          <button
            key="telegram"
            onClick={handleTelegramShare}
            className="w-12 h-12 flex items-center justify-center bg-[#0088CC] hover:bg-[#0077B5] text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="Telegram"
            title="Telegram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </button>
        );
      
      case 'zalo':
        return (
          <button
            key="zalo"
            onClick={handleZaloShare}
            className="w-12 h-12 flex items-center justify-center bg-[#0068FF] hover:bg-[#0055DD] text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="Zalo"
            title="Zalo"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.317c-.467.586-1.267 1.046-2.076 1.046h-2.34l-1.293 1.95c-.14.21-.368.337-.613.337h-.86c-.346 0-.626-.28-.626-.626 0-.087.018-.173.053-.253l.886-1.408h-1.6c-.94 0-1.72-.426-2.163-1.046-.373-.52-.56-1.16-.56-1.933V10.09c0-1.587 1.16-2.84 2.723-2.84h5.746c1.587 0 2.723 1.253 2.723 2.84v2.293c0 .773-.187 1.413-.56 1.933h.56zm-1.47-4.227c0-.453-.346-.8-.8-.8H9.702c-.453 0-.8.347-.8.8v2.293c0 .454.347.8.8.8h5.596c.454 0 .8-.346.8-.8V10.09z"/>
            </svg>
          </button>
        );
      
      case 'facebook':
        return (
          <button
            key="facebook"
            onClick={handleFacebookShare}
            className="w-12 h-12 flex items-center justify-center bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        );
      
      case 'twitter':
        return (
          <button
            key="twitter"
            onClick={handleTwitterShare}
            className="w-12 h-12 flex items-center justify-center bg-black hover:bg-gray-800 text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            aria-label="X"
            title="X (Twitter)"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
        );
      
      case 'copy':
        return (
          <button
            key="copy"
            onClick={handleCopyLink}
            className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-label={copied ? "Copied!" : "Copy Link"}
            title={copied ? "Copied!" : "Copy Link"}
          >
            {copied ? <Check className="w-6 h-6" /> : <Link2 className="w-6 h-6" />}
          </button>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {platforms.map(renderButton)}
      
      {/* 네이티브 공유 (모바일에서만 표시) */}
      {isMobile && 'share' in navigator && (
        <button
          onClick={handleNativeShare}
          className="w-12 h-12 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
          aria-label="Share"
          title="Share"
        >
          <Share2 className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
