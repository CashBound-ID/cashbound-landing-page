'use client';

import { useDesignSystemProvider } from '@cashbound-id/design-system';
import dynamic from 'next/dynamic';

import { useDevice } from '@/context/DeviceContext';

import Container from '@/components/Container';

import type { DeviceType } from '@/types/misc';

import styles from './style.module.scss';

const HOME_PAGE_NEWSLETTER_HEIGHT: Record<DeviceType, string> = {
  desktop: '245px',
  mobile: '435px',
  tablet: '415px'
};

const Lazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page-news-letter-lazy" */ './HomePageNewsLetter'
    )
);

const HomePageNewsLetterLazy = () => {
  const { color } = useDesignSystemProvider();
  const device = useDevice();

  return (
    <section
      className={styles['home-page-news-letter']}
      style={{
        '--homepage-background': color.GRAYMAUVE300,
        '--homepage-desktop-height': HOME_PAGE_NEWSLETTER_HEIGHT.desktop,
        '--homepage-mobile-height': HOME_PAGE_NEWSLETTER_HEIGHT.mobile,
        '--homepage-tablet-height': HOME_PAGE_NEWSLETTER_HEIGHT.tablet
      }}
    >
      <Container
        className={styles['home-page-news-letter__container']}
        data-device={device}
      >
        <Lazy />
      </Container>
    </section>
  );
};

export default HomePageNewsLetterLazy;
