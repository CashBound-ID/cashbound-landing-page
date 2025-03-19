'use client';

import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';

import { NAVBAR_MENU } from './constant';
import style from './style.module.scss';

const NavbarDesktop = () => {
  const { color } = useDesignSystemProvider();

  return (
    <Container className={style['navbar']} position="fixed">
      <Flex
        className={style['navbar__container']}
        align="center"
        justify="space-between"
      >
        <Link href="/">
          <Image
            src="/illustration/illustration-cashbound-logo.png"
            alt="Cashbound Apps"
            width={130}
            height={16}
          />
        </Link>

        <Flex gap={40} align="center">
          {NAVBAR_MENU.map((item) => (
            <Link key={item.url} href={item.url}>
              <Typography
                modifier="body-md"
                color={color.VIOLET1200}
                fontWeight="medium"
              >
                {item.text}
              </Typography>
            </Link>
          ))}
        </Flex>

        <Button modifier="primary" variant="outline" size="md">
          Login or Register
        </Button>
      </Flex>
    </Container>
  );
};

export default NavbarDesktop;
