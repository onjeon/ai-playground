// 웹훅 처리 헬퍼 함수들

interface PaymentRecord {
  paymentKey: string;
  orderId: string;
  status: 'PENDING' | 'COMPLETED' | 'CANCELED' | 'FAILED';
  amount: number;
  method: string;
  createdAt: Date;
  completedAt?: Date;
  canceledAt?: Date;
}

// 로컬스토리지에 결제 기록 저장 (임시 솔루션 - 프로덕션에서는 DB 사용 권장)
export function savePaymentRecord(payment: PaymentRecord): void {
  if (typeof window === 'undefined') {
    console.log('서버 환경: 결제 기록을 로그로만 출력');
    console.log('결제 기록:', payment);
    return;
  }
  
  try {
    const existingRecords = getPaymentRecords();
    const updatedRecords = [
      ...existingRecords.filter(record => record.orderId !== payment.orderId),
      payment
    ];
    
    localStorage.setItem('ai-playground-payments', JSON.stringify(updatedRecords));
    console.log('결제 기록 저장 성공:', payment.orderId);
  } catch (error) {
    console.error('결제 기록 저장 실패:', error);
  }
}

// 로컬스토리지에서 결제 기록 조회
export function getPaymentRecords(): PaymentRecord[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('ai-playground-payments');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('결제 기록 조회 실패:', error);
    return [];
  }
}

// 특정 주문의 결제 기록 조회
export function getPaymentByOrderId(orderId: string): PaymentRecord | null {
  const records = getPaymentRecords();
  return records.find(record => record.orderId === orderId) || null;
}

// 결제 상태 업데이트
export function updatePaymentStatus(
  orderId: string, 
  status: PaymentRecord['status'],
  additionalData?: Partial<PaymentRecord>
): void {
  const existingPayment = getPaymentByOrderId(orderId);
  
  if (existingPayment) {
    const updatedPayment: PaymentRecord = {
      ...existingPayment,
      status,
      ...additionalData,
      ...(status === 'COMPLETED' && { completedAt: new Date() }),
      ...(status === 'CANCELED' && { canceledAt: new Date() })
    };
    
    savePaymentRecord(updatedPayment);
  } else {
    console.warn('업데이트할 결제 기록을 찾을 수 없음:', orderId);
  }
}

// 프리미엄 서비스 활성화
export function activatePremiumService(orderId: string): void {
  if (typeof window === 'undefined') {
    console.log('서버 환경: 프리미엄 서비스 활성화 처리');
    return;
  }
  
  try {
    // 프리미엄 서비스 타입 추출 (주문번호 패턴: PREMIUM_TYPE_timestamp_random)
    const premiumType = extractPremiumType(orderId);
    if (premiumType) {
      localStorage.setItem(`premium_${premiumType}_paid`, 'true');
      console.log(`프리미엄 서비스 활성화: ${premiumType}`);
      
      // 활성화 만료 시간 설정 (24시간)
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
      localStorage.setItem(`premium_${premiumType}_expires`, expiresAt.toISOString());
    }
  } catch (error) {
    console.error('프리미엄 서비스 활성화 실패:', error);
  }
}

// 프리미엄 서비스 비활성화
export function deactivatePremiumService(orderId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const premiumType = extractPremiumType(orderId);
    if (premiumType) {
      localStorage.removeItem(`premium_${premiumType}_paid`);
      localStorage.removeItem(`premium_${premiumType}_expires`);
      console.log(`프리미엄 서비스 비활성화: ${premiumType}`);
    }
  } catch (error) {
    console.error('프리미엄 서비스 비활성화 실패:', error);
  }
}

// 주문번호에서 프리미엄 타입 추출
function extractPremiumType(orderId: string): string | null {
  const match = orderId.match(/PREMIUM_(\w+)_/);
  return match ? match[1].toLowerCase() : null;
}

// 결제 완료 알림 (콘솔 + 토스트)
export function notifyPaymentCompleted(orderId: string, amount: number): void {
  console.log(`결제 완료: ${orderId} - ₩${amount.toLocaleString()}`);
  
  // 브라우저 환경에서만 토스트 표시
  if (typeof window !== 'undefined') {
    // 간단한 토스트 알림
    const toast = document.createElement('div');
    toast.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        font-family: system-ui;
        font-size: 14px;
        animation: slideIn 0.3s ease-out;
      ">
        결제가 완료되었습니다!<br>
        <small>프리미엄 기능을 이용해보세요.</small>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    // 3초 후 제거
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
}

// 결제 취소 알림
export function notifyPaymentCanceled(orderId: string): void {
  console.log(`결제 취소: ${orderId}`);
  
  if (typeof window !== 'undefined') {
    alert('결제가 취소되었습니다.');
  }
}

// 결제 실패 알림
export function notifyPaymentFailed(orderId: string, status: string): void {
  console.log(`결제 실패: ${orderId} - ${status}`);
  
  if (typeof window !== 'undefined') {
    alert(`결제가 실패했습니다. (${status})`);
  }
}

// 웹훅 로깅 (디버깅용)
export function logWebhookEvent(eventType: string, data: any): void {
  const logEntry = {
    timestamp: new Date().toISOString(),
    eventType,
    orderId: data.orderId,
    paymentKey: data.paymentKey,
    status: data.status,
    amount: data.totalAmount
  };
  
  console.log('웹훅 이벤트 로그:', logEntry);
  
  // 로컬스토리지에 최근 웹훅 이벤트 저장 (디버깅용, 최대 50개)
  if (typeof window !== 'undefined') {
    try {
      const existingLogs = JSON.parse(localStorage.getItem('webhook-logs') || '[]');
      const updatedLogs = [logEntry, ...existingLogs].slice(0, 50);
      localStorage.setItem('webhook-logs', JSON.stringify(updatedLogs));
    } catch (error) {
      console.error('웹훅 로그 저장 실패:', error);
    }
  }
}
