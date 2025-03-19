'use client';

import dynamic from 'next/dynamic';

import HomePageContainer from '@/modules/HomePage/components/HomePageContainer';

import type { DeviceType } from '@/types/misc';

const HOME_PAGE_TAKE_SURVEY_HEIGHT: Record<DeviceType, string> = {
  desktop: '320px',
  mobile: '392px',
  tablet: '348px'
};

const Lazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page-take-survey-lazy" */ './HomePageTakeSurvey'
    )
);

const HomePageSupportsLazy = () => (
  <HomePageContainer height={HOME_PAGE_TAKE_SURVEY_HEIGHT}>
    <Lazy />
  </HomePageContainer>
);

export default HomePageSupportsLazy;
