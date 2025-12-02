// Root layout - 단순히 children만 렌더링
// 실제 레이아웃은 [locale]/layout.tsx에서 처리

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
