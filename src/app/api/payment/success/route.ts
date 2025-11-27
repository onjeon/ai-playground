import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');

  if (!paymentKey || !orderId || !amount) {
    return NextResponse.redirect(`${request.nextUrl.origin}/payment/fail?error=missing_params`);
  }

  try {
    // 토스 페이먼츠 결제 승인
    const secretKey = process.env.TOSS_SECRET_KEY;
    if (!secretKey) {
      throw new Error('TOSS_SECRET_KEY가 설정되지 않았습니다');
    }

    const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(secretKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount: parseInt(amount),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('토스 페이먼츠 승인 실패:', result);
      return NextResponse.redirect(`${request.nextUrl.origin}/payment/fail?error=confirm_failed`);
    }

    // 결제 성공 - 프리미엄 타입 확인
    // 주문번호 패턴: PREMIUM_RELATIONSHIP_timestamp_random -> relationship
    const premiumType = orderId.split('_')[1]?.toLowerCase();
    
    if (!premiumType) {
      return NextResponse.redirect(`${request.nextUrl.origin}/payment/fail?error=invalid_type`);
    }

    // 결제 성공 - 프리미엄 페이지로 이동
    return NextResponse.redirect(`${request.nextUrl.origin}/premium/${premiumType}?paid=true&orderId=${orderId}&amount=${amount}`);

  } catch (error) {
    console.error('결제 처리 중 오류:', error);
    return NextResponse.redirect(`${request.nextUrl.origin}/payment/fail?error=server_error`);
  }
}
