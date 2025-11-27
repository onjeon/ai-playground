// 개발자 모드 관리
export const DEVELOPER_MODE_KEY = 'ai-playground-dev-mode';

export function isDeveloperMode(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(DEVELOPER_MODE_KEY) === 'true';
}

export function setDeveloperMode(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  if (enabled) {
    localStorage.setItem(DEVELOPER_MODE_KEY, 'true');
  } else {
    localStorage.removeItem(DEVELOPER_MODE_KEY);
  }
}

export function isPaymentEnabled(): boolean {
  if (typeof window === 'undefined') return true; // 기본값을 true로 설정 (실제 결제 모드)
  const paymentEnabled = localStorage.getItem('ai-playground-payment-enabled');
  return paymentEnabled !== 'false'; // 명시적으로 false가 아닌 경우 true
}

export function setPaymentEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  if (enabled) {
    localStorage.setItem('ai-playground-payment-enabled', 'true');
  } else {
    localStorage.removeItem('ai-playground-payment-enabled');
  }
}
