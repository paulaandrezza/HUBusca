'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { Quicksand } from 'next/font/google';
import GlobalStyle from './theme/globalStyles';

const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <GlobalStyle />
      <body className={quicksand.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
