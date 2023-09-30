'use client';

import { Container, Flex } from '@chakra-ui/react';

import SideNavigation from '../side-nav';
import ContentArea from '../content-area';

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Flex h="100vh">
      <SideNavigation />
      <ContentArea>{children}</ContentArea>
    </Flex>
  );
}
