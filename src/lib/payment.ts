// 토스 페이먼츠 연동
import { isPaymentEnabled } from './developerMode';

export interface PaymentRequest {
  amount: number;
  orderId: string;
  orderName: string;
  customerName?: string;
  customerEmail?: string;
}

export interface PaymentResult {
  success: boolean;
  paymentKey?: string;
  orderId?: string;
  error?: string;
}

// 토스 페이먼츠 SDK 로드
export function loadTossPayments(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Client-side only'));
      return;
    }

    // 이미 로드되었다면 바로 반환
    if ((window as any).TossPayments) {
      resolve((window as any).TossPayments);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.tosspayments.com/v1/payment';
    script.onload = () => {
      if ((window as any).TossPayments) {
        resolve((window as any).TossPayments);
      } else {
        reject(new Error('토스페이먼츠 SDK 로드 실패'));
      }
    };
    script.onerror = () => {
      reject(new Error('토스 페이먼츠 네트워크 로드 실패'));
    };
    document.head.appendChild(script);
  });
}

// 결제 요청 (데모 버전)
export async function requestPayment(request: PaymentRequest): Promise<PaymentResult> {
  try {
    // 데모 버전에서는 실제 결제 대신 모달 표시
    const userConfirmed = confirm(`
결제 정보:
• 상품: ${request.orderName}
• 금액: ₩${request.amount.toLocaleString()}
• 주문번호: ${request.orderId}

데모 버전에서는 실제 결제가 진행되지 않습니다.
결제를 진행하시겠습니까?
    `);

    if (userConfirmed) {
      // 성공 시뮬레이션 (80% 확률)
      const isSuccess = Math.random() > 0.2;
      
      if (isSuccess) {
        return {
          success: true,
          paymentKey: `demo_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
          orderId: request.orderId
        };
      } else {
        return {
          success: false,
          error: '데모 결제 실패 (랜덤 시뮬레이션)'
        };
      }
    } else {
      return {
        success: false,
        error: '사용자가 결제를 취소했습니다'
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '알 수 없는 오류'
    };
  }
}

// 메인 결제 함수 - 개발자 모드에 따라 데모/실제 결제 분기
export async function requestTossPayment(request: PaymentRequest): Promise<PaymentResult> {
  // 결제가 비활성화되어 있으면 데모 결제 사용
  if (!isPaymentEnabled()) {
    return requestPayment(request);
  }
  
  // 실제 토스 페이먼츠 결제
  return requestRealTossPayment(request);
}

// 실제 토스 페이먼츠 연동 함수 (프로덕션용)
async function requestRealTossPayment(request: PaymentRequest): Promise<PaymentResult> {
  try {
    const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
    
    if (!clientKey) {
      throw new Error('토스 페이먼츠 클라이언트 키가 설정되지 않았습니다');
    }

    // 토스페이먼츠 SDK 로드
    await loadTossPayments();
    
    const tossPayments = (window as any).TossPayments(clientKey);
    
    // 간단한 결제 요청 (위젯 방식 대신)
    const result = await tossPayments.requestPayment('카드', {
      amount: request.amount,
      orderId: request.orderId,
      orderName: request.orderName,
      customerName: request.customerName || '고객',
      successUrl: `${window.location.origin}/api/payment/success`,
      failUrl: `${window.location.origin}/api/payment/fail`,
    });

    return { success: true, paymentKey: result.paymentKey, orderId: result.orderId };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : '결제 요청 실패'
    };
  }
}

// 주문번호 생성
export function generateOrderId(prefix: string = 'ORDER'): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}_${timestamp}_${random}`;
}

// 결제 금액 검증
export function validatePaymentAmount(amount: number): boolean {
  return amount >= 100 && amount <= 10000000; // 100원 ~ 1000만원
}

// 프리미엄 콘텐츠 타입별 가격 (필요에 따라 수정)
export const PREMIUM_PRICES = {
  basic: 1000,
  standard: 2000,
  premium: 3000,
} as const;

export type PremiumType = keyof typeof PREMIUM_PRICES;

// 프리미엄 콘텐츠 결제 헬퍼
export function createPremiumPaymentRequest(
  type: PremiumType,
  customerInfo?: { name?: string; email?: string }
): PaymentRequest {
  const typeNames = {
    basic: '베이직',
    standard: '스탠다드',
    premium: '프리미엄'
  };

  return {
    amount: PREMIUM_PRICES[type],
    orderId: generateOrderId(`PREMIUM_${type.toUpperCase()}`),
    orderName: `AI 놀이터 - ${typeNames[type]}`,
    customerName: customerInfo?.name,
    customerEmail: customerInfo?.email
  };
}
