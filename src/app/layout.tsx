'use client';

import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { UserContextProvider } from './contexts/UserContext';
import GlobalStyle from './theme/globalStyles';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HUBusca',
  description: 'Site de busca de repositórios dos devs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <GlobalStyle />
      <body className={quicksand.className}>
        <StyledComponentsRegistry>
          <UserContextProvider>{children}</UserContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
