import Section from '@cashbound-id/design-system/section';
import SingleSwitch from '@cashbound-id/design-system/single-switch';

import { useDevice } from '@/context/DeviceContext';

import HomePageNewsLetterDesktop from './components/HomePageNewsLetterDesktop';
import HomePageNewsLetterMobile from './components/HomePageNewsLetterMobile';

const HomePageNewsLetter = () => {
  const device = useDevice();

  return (
    <SingleSwitch match={device}>
      <Section name="desktop">
        <HomePageNewsLetterDesktop />
      </Section>

      <Section name="tablet">
        <HomePageNewsLetterMobile />
      </Section>

      <Section name="mobile">
        <HomePageNewsLetterMobile />
      </Section>
    </SingleSwitch>
  );
};

export default HomePageNewsLetter;
