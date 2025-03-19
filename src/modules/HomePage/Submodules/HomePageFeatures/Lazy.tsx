'use client';

import dynamic from 'next/dynamic';

import HomePageContainer from '@/modules/HomePage/components/HomePageContainer';

import type { DeviceType } from '@/types/misc';

const HOME_PAGE_FEATURE_HEIGHT: Record<DeviceType, string> = {
  desktop: '724px',
  mobile: '440px',
  tablet: '389px'
};

const Lazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page-features-lazy" */ './HomePageFeatures'
    )
);

const HomePageFeaturesLazy = () => (
  <HomePageContainer height={HOME_PAGE_FEATURE_HEIGHT}>
    <Lazy />
  </HomePageContainer>
);

export default HomePageFeaturesLazy;
