import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const message = searchParams.get('message');
  const orderId = searchParams.get('orderId');

  // 실패 페이지로 리다이렉트
  const params = new URLSearchParams();
  if (code) params.set('code', code);
  if (message) params.set('message', message);
  if (orderId) params.set('orderId', orderId);

  return NextResponse.redirect(`${request.nextUrl.origin}/payment/fail?${params.toString()}`);
}
