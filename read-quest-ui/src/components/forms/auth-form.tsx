'use client';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';

type AuthFormProps = {
  page: 'register' | 'login';
};

export default function AuthForm({ page }: AuthFormProps) {
  return (
    <form action="#" method="POST">
      <VStack spacing={4} p={5}>
        {page === 'register' && (
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
        )}
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <Flex w="full" justify="space-between" align="center" gap={2}>
            <FormLabel>Password</FormLabel>
            {page === 'login' && (
              <Link href="#">
                <Text fontSize="xs" color="teal" fontWeight="medium">
                  Forgot Password?
                </Text>
              </Link>
            )}
          </Flex>
          <Input type="password" />
        </FormControl>
        <Button w="full" colorScheme="teal" mt={2}>
          {page === 'login' ? 'Sign in' : 'Register'}
        </Button>
        <HStack align="center" spacing={1} mt={4}>
          <Text color="gray.500">
            {page === 'login' ? 'Not a member?' : 'Already a member?'}
          </Text>
          <Link href={`/auth/${page === 'login' ? 'register' : 'login'}`}>
            <Text color="teal" fontWeight="medium">
              {page === 'login' ? 'Register' : 'Sign in'}
            </Text>
          </Link>
        </HStack>
      </VStack>
    </form>
  );
}
