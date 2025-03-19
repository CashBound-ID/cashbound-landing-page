'use client';

import Flex from '@cashbound-id/design-system/flex';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';

import style from './style.module.scss';

const NavbarMobile = () => {
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
      </Flex>
    </Container>
  );
};

export default NavbarMobile;
