'use client';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  IoHomeOutline,
  IoBookOutline,
  IoNewspaperOutline,
  IoStorefrontOutline,
} from 'react-icons/io5';

export default function SideNavigation() {
  return (
    <Box as="aside" h="full" bg="brand.900" flex={1}>
      <Container h="full" py={7}>
        <Flex h="full" direction="column" justify="space-between">
          <VStack spacing={1} h="full" alignItems="stretch">
            <SideNavLink href="/" name="Home" icon={IoHomeOutline} active />
            <SideNavLink href="/" name="Shop" icon={IoStorefrontOutline} />
            <SideNavLink href="/" name="Articles" icon={IoNewspaperOutline} />
            <SideNavLink href="/" name="About" icon={IoBookOutline} />
          </VStack>
          <HStack spacing={2} align="center">
            <Avatar
              size="sm"
              name="Margai Wangara"
              src="https://bit.ly/broken-link"
            />
            <Text color="gray.500">Margai Wangara</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

type SideNavLinkProps = {
  href: string;
  name: string;
  active?: boolean;
  icon?: React.ComponentType;
};

function SideNavLink({ href, name, active, icon: Icon }: SideNavLinkProps) {
  return (
    <Link href={href}>
      <HStack
        spacing={4}
        py={2}
        px={3}
        w="full"
        borderRadius={4}
        color={active ? 'white' : 'gray.500'}
        bg={active ? 'gray.700' : 'transparent'}
        _hover={{ bg: 'gray.700', color: 'white' }}
      >
        <Text fontWeight="medium">{Icon && <Icon />}</Text>
        <Text fontWeight="medium">{name}</Text>
      </HStack>
    </Link>
  );
}
