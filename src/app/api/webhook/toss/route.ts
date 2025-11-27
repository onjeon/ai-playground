import { NextRequest, NextResponse } from 'next/server';
import { 
  savePaymentRecord, 
  updatePaymentStatus, 
  activatePremiumService, 
  deactivatePremiumService,
  notifyPaymentCompleted,
  notifyPaymentCanceled,
  notifyPaymentFailed,
  logWebhookEvent
} from '@/lib/webhookHandlers';

// 토스페이먼츠 웹훅 이벤트 타입
interface TossWebhookEvent {
  eventType: 'PAYMENT_STATUS_CHANGED' | 'DEPOSIT_CALLBACK' | string;
  createdAt: string;
  data: {
    paymentKey?: string;
    orderId?: string;
    orderName?: string;
    status?: 'READY' | 'IN_PROGRESS' | 'WAITING_FOR_DEPOSIT' | 'DONE' | 'CANCELED' | 'PARTIAL_CANCELED' | 'ABORTED' | 'EXPIRED';
    totalAmount?: number;
    balanceAmount?: number;
    suppliedAmount?: number;
    vat?: number;
    taxFreeAmount?: number;
    method?: string;
    version?: string;
    [key: string]: any;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: TossWebhookEvent = await request.json();
    const { eventType, data, createdAt } = body;

    // 웹훅 이벤트 로깅
    logWebhookEvent(eventType, data);
    
    console.log('토스페이먼츠 웹훅 수신:', {
      eventType,
      orderId: data.orderId,
      status: data.status,
      amount: data.totalAmount,
      createdAt
    });

    // 웹훅 이벤트별 처리
    switch (eventType) {
      case 'PAYMENT_STATUS_CHANGED':
        await handlePaymentStatusChanged(data);
        break;
        
      case 'DEPOSIT_CALLBACK':
        await handleDepositCallback(data);
        break;
        
      default:
        console.log('처리하지 않는 이벤트 타입:', eventType);
        break;
    }

    // 토스페이먼츠에 정상 수신 응답 (중요!)
    return NextResponse.json({ 
      received: true,
      eventType,
      orderId: data.orderId,
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error) {
    console.error('웹훅 처리 실패:', error);
    
    // 에러 발생 시에도 200 응답 (토스페이먼츠 재전송 방지)
    return NextResponse.json({
      received: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 200 });
  }
}

// 결제 상태 변경 이벤트 처리
async function handlePaymentStatusChanged(data: any) {
  const { paymentKey, orderId, status, totalAmount, method } = data;
  
  console.log(`결제 상태 변경: ${orderId} -> ${status} (₩${totalAmount})`);
  
  switch (status) {
    case 'DONE':
      // 결제 완료 처리
      await handlePaymentCompleted({
        paymentKey,
        orderId,
        amount: totalAmount,
        method
      });
      break;
      
    case 'CANCELED':
    case 'PARTIAL_CANCELED':
      // 결제 취소 처리
      await handlePaymentCanceled({
        paymentKey,
        orderId,
        amount: totalAmount
      });
      break;
      
    case 'ABORTED':
    case 'EXPIRED':
      // 결제 실패/만료 처리
      await handlePaymentFailed({
        paymentKey,
        orderId,
        status
      });
      break;
      
    default:
      console.log(`상태 업데이트: ${orderId} -> ${status}`);
      break;
  }
}

// 가상계좌 입금 확인 이벤트 처리
async function handleDepositCallback(data: any) {
  const { orderId, paymentKey, totalAmount } = data;
  
  console.log(`가상계좌 입금 확인: ${orderId} (₩${totalAmount})`);
  
  // 가상계좌 입금 완료 처리 (결제 완료와 동일)
  await handlePaymentCompleted({
    paymentKey,
    orderId,
    amount: totalAmount,
    method: 'virtual_account'
  });
}

// 결제 완료 처리
async function handlePaymentCompleted(payment: {
  paymentKey: string;
  orderId: string;
  amount: number;
  method: string;
}) {
  const { paymentKey, orderId, amount, method } = payment;
  
  console.log('결제 완료 처리:', {
    orderId,
    amount,
    method,
    paymentKey
  });

  try {
    // 결제 기록 저장
    savePaymentRecord({
      paymentKey,
      orderId,
      status: 'COMPLETED',
      amount,
      method,
      createdAt: new Date(),
      completedAt: new Date()
    });

    // 프리미엄 서비스 활성화
    activatePremiumService(orderId);
    
    // 사용자 알림
    notifyPaymentCompleted(orderId, amount);

    console.log(`결제 완료 처리 성공: ${orderId}`);
    
  } catch (error) {
    console.error('결제 완료 처리 실패:', error);
    // 에러 발생해도 웹훅은 성공으로 응답 (중복 처리 방지)
  }
}

// 결제 취소 처리
async function handlePaymentCanceled(payment: {
  paymentKey: string;
  orderId: string;
  amount: number;
}) {
  const { paymentKey, orderId, amount } = payment;
  
  console.log('결제 취소 처리:', {
    orderId,
    amount,
    paymentKey
  });

  try {
    // 결제 상태 업데이트
    updatePaymentStatus(orderId, 'CANCELED', {
      canceledAt: new Date()
    });
    
    // 프리미엄 서비스 비활성화
    deactivatePremiumService(orderId);
    
    // 사용자 알림
    notifyPaymentCanceled(orderId);

    console.log(`결제 취소 처리 성공: ${orderId}`);
    
  } catch (error) {
    console.error('결제 취소 처리 실패:', error);
  }
}

// 결제 실패 처리
async function handlePaymentFailed(payment: {
  paymentKey: string;
  orderId: string;
  status: string;
}) {
  const { paymentKey, orderId, status } = payment;
  
  console.log('결제 실패 처리:', {
    orderId,
    status,
    paymentKey
  });

  try {
    // 결제 상태 업데이트
    updatePaymentStatus(orderId, 'FAILED');
    
    // 사용자 알림
    notifyPaymentFailed(orderId, status);

    console.log(`결제 실패 처리 성공: ${orderId}`);
    
  } catch (error) {
    console.error('결제 실패 처리 실패:', error);
  }
}

// GET 요청 차단 (POST만 허용)
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}

// 기타 HTTP 메서드 차단
export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}
