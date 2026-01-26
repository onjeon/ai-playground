import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

// 카테고리별 색상 매핑
const categoryColors: Record<string, { from: string; to: string; accent: string }> = {
  personality: { from: '#3B82F6', to: '#1D4ED8', accent: '#BFDBFE' },
  psychology: { from: '#F43F5E', to: '#BE123C', accent: '#FECDD3' },
  relationship: { from: '#A855F7', to: '#7C3AED', accent: '#DDD6FE' },
  career: { from: '#10B981', to: '#047857', accent: '#A7F3D0' },
  fun: { from: '#F97316', to: '#EA580C', accent: '#FED7AA' },
  iq: { from: '#6366F1', to: '#4F46E5', accent: '#C7D2FE' },
  default: { from: '#6366F1', to: '#4F46E5', accent: '#C7D2FE' },
};

// Google Fonts에서 Noto Sans 폰트 로드 (한글, 일본어, 태국어 등 지원)
async function loadFont() {
  const response = await fetch(
    'https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLTq8H4hfeE.woff2'
  );
  return await response.arrayBuffer();
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') || '심리 테스트';
  const emoji = searchParams.get('emoji') || '🧠';
  const category = searchParams.get('category') || 'default';
  const participants = searchParams.get('participants') || '10,000';
  const style = searchParams.get('style') || '1';
  const subtitle = searchParams.get('subtitle') || '';
  const locale = searchParams.get('locale') || 'ko';

  const colors = categoryColors[category] || categoryColors.default;

  // 폰트 로드
  let fontData: ArrayBuffer | undefined;
  try {
    fontData = await loadFont();
  } catch (e) {
    console.error('Font loading failed:', e);
  }

  // 로케일별 CTA 텍스트
  const ctaText: Record<string, string> = {
    ko: '🎯 나도 테스트하기',
    ja: '🎯 テストする',
    'zh-TW': '🎯 我也來測試',
    th: '🎯 ทำแบบทดสอบ',
    en: '🎯 Take the test',
    default: '🎯 Take the test',
  };

  const labelText: Record<string, string> = {
    ko: '나의 테스트 결과는?',
    ja: '私のテスト結果は？',
    'zh-TW': '我的測試結果是？',
    th: 'ผลทดสอบของฉัน?',
    en: 'My test result is...',
    default: 'My test result is...',
  };

  const fontOptions = fontData
    ? {
        fonts: [
          {
            name: 'NotoSans',
            data: fontData,
            style: 'normal' as const,
            weight: 700 as const,
          },
        ],
      }
    : {};

  // 결과 페이지용 스타일 (바이럴 최적화)
  if (style === 'result') {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            position: 'relative',
            fontFamily: fontData ? 'NotoSans' : 'sans-serif',
          }}
        >
          {/* 배경 장식 */}
          <div
            style={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 350,
              height: 350,
              borderRadius: 175,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -120,
              left: -120,
              width: 450,
              height: 450,
              borderRadius: 225,
              background: 'rgba(255,255,255,0.08)',
              display: 'flex',
            }}
          />

          {/* 상단 라벨 */}
          <div
            style={{
              display: 'flex',
              padding: '10px 30px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: 50,
              fontSize: 24,
              color: 'white',
              marginBottom: 25,
              fontWeight: 500,
            }}
          >
            {labelText[locale] || labelText.default}
          </div>

          {/* 큰 이모지 */}
          <div style={{ fontSize: 160, marginBottom: 15, display: 'flex' }}>{emoji}</div>

          {/* 결과 제목 */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              padding: '0 60px',
              lineHeight: 1.1,
              display: 'flex',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {title}
          </div>

          {/* 부제목 */}
          {subtitle && (
            <div
              style={{
                marginTop: 15,
                fontSize: 28,
                color: 'rgba(255,255,255,0.9)',
                display: 'flex',
              }}
            >
              {subtitle}
            </div>
          )}

          {/* CTA */}
          <div
            style={{
              marginTop: 35,
              display: 'flex',
              alignItems: 'center',
              padding: '14px 35px',
              backgroundColor: 'white',
              borderRadius: 50,
              fontSize: 24,
              fontWeight: 600,
              color: '#667eea',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
          >
            {ctaText[locale] || ctaText.default}
          </div>

          {/* 브랜드 */}
          <div
            style={{
              position: 'absolute',
              bottom: 35,
              fontSize: 22,
              color: 'rgba(255,255,255,0.7)',
              display: 'flex',
            }}
          >
            AI Playground
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        ...fontOptions,
      }
    );
  }

  // 스타일 1: 그라데이션 + 큰 이모지 (기본)
  if (style === '1') {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
            position: 'relative',
            fontFamily: fontData ? 'NotoSans' : 'sans-serif',
          }}
        >
          {/* 배경 장식 원 - 오른쪽 위 */}
          <div
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: 200,
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
            }}
          />
          {/* 배경 장식 원 - 왼쪽 아래 */}
          <div
            style={{
              position: 'absolute',
              bottom: -150,
              left: -150,
              width: 500,
              height: 500,
              borderRadius: 250,
              background: 'rgba(255,255,255,0.05)',
              display: 'flex',
            }}
          />

          {/* 이모지 */}
          <div style={{ fontSize: 150, marginBottom: 20, display: 'flex' }}>{emoji}</div>

          {/* 제목 */}
          <div
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              padding: '0 60px',
              lineHeight: 1.2,
              display: 'flex',
            }}
          >
            {title}
          </div>

          {/* 참여자 수 */}
          <div
            style={{
              marginTop: 30,
              fontSize: 28,
              color: colors.accent,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            👥 {participants}
          </div>

          {/* 브랜드 */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              display: 'flex',
            }}
          >
            AI Playground
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        ...fontOptions,
      }
    );
  }

  // 스타일 2: 카드 스타일 (화이트 배경)
  if (style === '2') {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F1F5F9',
            fontFamily: fontData ? 'NotoSans' : 'sans-serif',
          }}
        >
          {/* 이모지 원 */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 70,
              marginBottom: 30,
            }}
          >
            {emoji}
          </div>

          {/* 제목 */}
          <div
            style={{
              display: 'flex',
              fontSize: 52,
              fontWeight: 'bold',
              color: '#1E293B',
              textAlign: 'center',
              marginBottom: 25,
              padding: '0 60px',
            }}
          >
            {title}
          </div>

          {/* 태그들 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '12px 28px',
                backgroundColor: colors.from,
                color: 'white',
                borderRadius: 50,
                fontSize: 22,
                fontWeight: 600,
                marginRight: 15,
              }}
            >
              FREE
            </div>
            <div
              style={{
                display: 'flex',
                padding: '12px 28px',
                backgroundColor: '#E2E8F0',
                color: '#64748B',
                borderRadius: 50,
                fontSize: 22,
              }}
            >
              👥 {participants}
            </div>
          </div>

          {/* 브랜드 */}
          <div
            style={{
              position: 'absolute',
              bottom: 30,
              fontSize: 22,
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            🎮 AI Playground
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        ...fontOptions,
      }
    );
  }

  // 스타일 3: 다크 모드 + 네온
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
          fontFamily: fontData ? 'NotoSans' : 'sans-serif',
        }}
      >
        {/* 이모지 */}
        <div
          style={{
            fontSize: 140,
            marginBottom: 20,
            display: 'flex',
          }}
        >
          {emoji}
        </div>

        {/* 제목 */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            padding: '0 80px',
            lineHeight: 1.2,
            display: 'flex',
          }}
        >
          {title}
        </div>

        {/* 구분선 */}
        <div
          style={{
            marginTop: 35,
            marginBottom: 25,
            width: 100,
            height: 4,
            background: `linear-gradient(90deg, ${colors.from}, ${colors.accent})`,
            borderRadius: 2,
            display: 'flex',
          }}
        />

        {/* 참여자 + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 26,
          }}
        >
          <span style={{ color: '#94A3B8', marginRight: 30, display: 'flex' }}>👥 {participants}</span>
          <span
            style={{
              padding: '12px 28px',
              background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
              color: 'white',
              borderRadius: 50,
              fontWeight: 600,
              display: 'flex',
            }}
          >
            {ctaText[locale] || ctaText.default}
          </span>
        </div>

        {/* 브랜드 */}
        <div
          style={{
            position: 'absolute',
            bottom: 35,
            fontSize: 22,
            color: '#64748B',
            display: 'flex',
          }}
        >
          AI Playground
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...fontOptions,
    }
  );
}
