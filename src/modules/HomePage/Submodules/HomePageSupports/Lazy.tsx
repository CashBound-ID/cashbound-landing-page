'use client';

import dynamic from 'next/dynamic';

import HomePageContainer from '@/modules/HomePage/components/HomePageContainer';

import type { DeviceType } from '@/types/misc';

const HOME_PAGE_SUPPORT_HEIGHT: Record<DeviceType, string> = {
  desktop: '827px',
  mobile: '1216px',
  tablet: '1313px'
};

const Lazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page-supports-lazy" */ './HomePageSupports'
    )
);

const HomePageSupportsLazy = () => (
  <HomePageContainer height={HOME_PAGE_SUPPORT_HEIGHT}>
    <Lazy />
  </HomePageContainer>
);

export default HomePageSupportsLazy;
