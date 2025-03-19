'use client';

import dynamic from 'next/dynamic';

import HomePageContainer from '@/modules/HomePage/components/HomePageContainer';

import type { DeviceType } from '@/types/misc';

const HOME_PAGE_HOW_IT_WORKS_HEIGHT: Record<DeviceType, string> = {
  desktop: '720px',
  mobile: '1417px',
  tablet: '615px'
};

const Lazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page-how-it-works-lazy" */ './HomePageHowItWorks'
    )
);

const HomePageHowItWorksLazy = () => (
  <HomePageContainer height={HOME_PAGE_HOW_IT_WORKS_HEIGHT}>
    <Lazy />
  </HomePageContainer>
);

export default HomePageHowItWorksLazy;
