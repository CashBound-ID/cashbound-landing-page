import Section from '@cashbound-id/design-system/section';
import SingleSwitch from '@cashbound-id/design-system/single-switch';

import { useDevice } from '@/context/DeviceContext';

import HomePageTakeSurveyDesktop from './components/HomePageTakeSurveyDesktop';
import HomePageTakeSurveyMobile from './components/HomePageTakeSurveyMobile';
import HomePageTakeSurveyTablet from './components/HomePageTakeSurveyTablet';

const HomePageTakeSurvey = () => {
  const device = useDevice();

  return (
    <SingleSwitch match={device}>
      <Section name="desktop">
        <HomePageTakeSurveyDesktop />
      </Section>

      <Section name="tablet">
        <HomePageTakeSurveyTablet />
      </Section>

      <Section name="mobile">
        <HomePageTakeSurveyMobile />
      </Section>
    </SingleSwitch>
  );
};

export default HomePageTakeSurvey;
