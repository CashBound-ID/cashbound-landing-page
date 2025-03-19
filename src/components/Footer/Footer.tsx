'use client';

import { useDesignSystemProvider } from '@cashbound-id/design-system';
import { hexToRgba } from '@cashbound-id/design-system/dist/utils/css.esm.js';
import Flex from '@cashbound-id/design-system/flex';
import Icon from '@cashbound-id/design-system/icon';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';
import Link from 'next/link';

import { useDevice } from '@/context/DeviceContext';

import Container from '@/components/Container';

import type { DeviceType } from '@/types/misc';

import { FOOTER_MENU, FOOTER_SOCIAL_MEDIA } from './constant';
import styles from './style.module.scss';

const HOME_PAGE_NEWSLETTER_HEIGHT: Record<DeviceType, string> = {
  desktop: '124px',
  mobile: '358px',
  tablet: '358px'
};

const Footer = () => {
  const { color } = useDesignSystemProvider();
  const device = useDevice();
  const isDesktop = device === 'desktop';

  return (
    <section
      className={styles['footer']}
      data-device={isDesktop ? 'desktop' : 'mobile'}
      style={{
        '--footer-background': color.GRAYMAUVE1200,
        '--footer-desktop-height': HOME_PAGE_NEWSLETTER_HEIGHT.desktop,
        '--footer-mobile-height': HOME_PAGE_NEWSLETTER_HEIGHT.mobile,
        '--footer-tablet-height': HOME_PAGE_NEWSLETTER_HEIGHT.tablet
      }}
    >
      <Container className={styles['footer__container']} data-device={device}>
        <Flex
          vertical={!isDesktop}
          justify={isDesktop ? 'space-between' : 'start'}
          align={isDesktop ? 'center' : 'start'}
          tag="section"
          gap={32}
        >
          <section>
            <Image
              src="/illustration/illustration-cashbound-logo-white.png"
              alt="Cashbound Apps"
              width={130}
              height={16}
            />
            <Typography
              color={hexToRgba(`${color.WHITE}`, 0.6)}
              margin="8px 0 0"
              modifier="body-sm"
            >
              © Copyright 2024 CashBound
            </Typography>
          </section>

          <ul className={styles['footer__menu']}>
            {FOOTER_MENU.map((item) => {
              return (
                <li key={item.text}>
                  <Link href={item.url}>
                    <Typography
                      color={color.WHITE}
                      modifier="body-md"
                      fontWeight="medium"
                    >
                      {item.text}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className={styles['footer__social-media']}>
            {FOOTER_SOCIAL_MEDIA.map((item) => {
              return (
                <li key={item.icon}>
                  <Link href={item.url}>
                    <Icon icon={item.icon} color={color.WHITE} size={24} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
