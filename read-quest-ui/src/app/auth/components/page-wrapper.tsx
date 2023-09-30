'use client';
import { Container, Center, VStack, Heading, Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { APP_ROUTES as appRoutes } from '@utils/constants';

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();

  return (
    <Container maxW="container.xl" bg="white" h="100vh" overflowY="auto">
      <Center h="full">
        <VStack spacing={5}>
          <Heading size="lg">
            {pathname === appRoutes.login.route
              ? 'Sign in to your account'
              : 'Create your account'}
          </Heading>
          <Box minW="md">{children}</Box>
        </VStack>
      </Center>
    </Container>
  );
}
