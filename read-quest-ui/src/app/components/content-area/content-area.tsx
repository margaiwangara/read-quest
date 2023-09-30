'use client';

import { Box } from '@chakra-ui/react';

type ContentAreaProps = {
  children: React.ReactNode;
};

export default function ContentArea({ children }: ContentAreaProps) {
  return <Box flex={4}>{children}</Box>;
}
