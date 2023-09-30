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
  colors: {
    brand: {
      50: '#EDF0F7',
      100: '#CDD6E9',
      200: '#ADBCDB',
      300: '#8DA2CD',
      400: '#6D88C0',
      500: '#4D6DB2',
      600: '#3E578E',
      700: '#2E426B',
      800: '#1F2C47',
      900: '#0F1624',
    },
  },
});

export default function ChakraProvider({ children }: ChakraProviderProps) {
  return (
    <CacheProvider>
      <ChakraReactProvider theme={theme}>{children}</ChakraReactProvider>
    </CacheProvider>
  );
}
