'use client';

import type { PropsWithChildren } from 'react';

import { useDevice } from '@/context/DeviceContext';

import Container from '@/components/Container';

import { cx } from '@/utils/css';
import type { DeviceType } from '@/types/misc';

import style from './style.module.scss';

interface HomePageContainerProps {
  backgroundColor?: string;
  className?: string;
  height: Record<DeviceType, string>;
}

const HomePageContainer = (
  props: PropsWithChildren<HomePageContainerProps>
) => {
  const {
    backgroundColor = 'transparent',
    children,
    className,
    height
  } = props;
  const device = useDevice();

  return (
    <Container
      className={cx(style['home-page-container'], className)}
      data-device={device}
      style={{
        '--homepage-background': backgroundColor,
        '--homepage-desktop-height': height.desktop,
        '--homepage-mobile-height': height.mobile,
        '--homepage-tablet-height': height.tablet
      }}
    >
      {children}
    </Container>
  );
};

export default HomePageContainer;
