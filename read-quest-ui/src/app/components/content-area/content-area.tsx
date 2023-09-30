'use client';

import { Box } from '@chakra-ui/react';

import Navigation from '../nav';

type ContentAreaProps = {
  children: React.ReactNode;
};

export default function ContentArea({ children }: ContentAreaProps) {
  return (
    <Box flex={4}>
      <Navigation />
    </Box>
  );
}
