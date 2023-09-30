import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ChakraProvider } from '@providers/.';

export const metadata: Metadata = {
  title: 'ReadQuest - A Library Application',
  description: 'View and buy the latest and freshest books in the market',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ weight: ['400', '500', '700'], subsets: [] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
