'use client';

import type { MouseEventHandler } from 'react';
import { useState } from 'react';

import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Flex from '@cashbound-id/design-system/flex';
import Icon from '@cashbound-id/design-system/icon';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';

import NavbarMobileMenu from './NavbarMobileMenu';
import style from './style.module.scss';

const NavbarMobile = () => {
  const { color } = useDesignSystemProvider();
  const [showNavbarMenu, toggleNavbarMenu] = useState(false);

  const handleOnClickHamburgerMenu: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    toggleNavbarMenu((current) => !current);
  };

  const handleOnClose = () => {
    toggleNavbarMenu(false);
  };

  return (
    <>
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

          <button
            className={style['navbar__hamburger']}
            type="button"
            onClick={handleOnClickHamburgerMenu}
          >
            <Icon icon="hamburger" size={24} color={color.GRAYMAUVE1200} />
          </button>
        </Flex>
      </Container>

      {showNavbarMenu && <NavbarMobileMenu onClose={handleOnClose} />}
    </>
  );
};

export default NavbarMobile;
