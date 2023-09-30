'use client';

import {
  Card,
  CardBody,
  Divider,
  Flex,
  Box,
  HStack,
  IconButton,
  Avatar,
  Text,
  Button,
} from '@chakra-ui/react';
import { IoNotificationsOutline, IoCartOutline } from 'react-icons/io5';

export default function Navigation() {
  return (
    <Card w="full">
      <CardBody>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="full"
          gap={3}
        >
          <Box flex={1} />
          <HStack spacing={1}>
            <IconButton
              aria-label="notifications"
              icon={<IoNotificationsOutline />}
            />
            <Divider orientation="vertical" />
            <IconButton aria-label="notifications" icon={<IoCartOutline />} />
            <Divider orientation="vertical" />
            <Button
              leftIcon={
                <Avatar
                  size="xs"
                  name="Margai Wangara"
                  src="https://bit.ly/broken-link"
                  bg="brand.700"
                  color="white"
                />
              }
              fontWeight={'normal'}
              fontSize={'sm'}
            >
              Margai Wangara
            </Button>
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
}
