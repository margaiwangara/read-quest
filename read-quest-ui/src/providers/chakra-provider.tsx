'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider as ChakraReactProvider,
  extendTheme,
} from '@chakra-ui/react';
import { Inter } from 'next/font/google';

type ChakraProviderProps = {
  children: React.ReactNode;
};

const inter = Inter({ weight: ['400', '500', '700'], subsets: [] });

const theme = extendTheme({
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontWeight,
  },
});

export default function ChakraProvider({ children }: ChakraProviderProps) {
  return (
    <CacheProvider>
      <ChakraReactProvider theme={theme}>{children}</ChakraReactProvider>
    </CacheProvider>
  );
}
