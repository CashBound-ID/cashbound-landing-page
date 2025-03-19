import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Section from '@cashbound-id/design-system/section';
import SingleSwitch from '@cashbound-id/design-system/single-switch';
import Typography from '@cashbound-id/design-system/typography';

import { useDevice } from '@/context/DeviceContext';

import HowItWorksDesktop from './components/HowItWorksDesktop';
import HowItWorksMobile from './components/HowItWorksMobile';
import HowItWorksTablet from './components/HowItWorksTablet';
import styles from './style.module.scss';

const HomePageHowItWorks = () => {
  const { color } = useDesignSystemProvider();
  const device = useDevice();

  return (
    <>
      <Typography
        modifier={device === 'desktop' ? 'heading-xl' : 'heading-lg'}
        textAlign="center"
        color={color.GRAYMAUVE1200}
        fontWeight="bold"
        margin={device === 'desktop' ? '0 0 8px' : '0 0 16px'}
      >
        Your Path to Financial Freedom! in 3 Steps
      </Typography>
      <Typography
        modifier={device === 'desktop' ? 'body-lg' : 'body-md'}
        textAlign="center"
        color={color.GRAYMAUVE1100}
        margin={device === 'desktop' ? '0 0 40px' : '0 0 32px'}
      >
        It’s easier than you think to manage your money and stay in control.
      </Typography>

      <SingleSwitch match={device}>
        <Section name="desktop">
          <HowItWorksDesktop />
        </Section>

        <Section name="tablet">
          <HowItWorksTablet />
        </Section>

        <Section name="mobile">
          <HowItWorksMobile />
        </Section>
      </SingleSwitch>

      <Button
        className={styles['how-it-works__cta']}
        modifier="primary"
        variant="fill"
        size="lg"
        icon="arrow-right"
        iconPosition="post"
        margin="40px auto 0"
      >
        Became Financial Fighter
      </Button>
    </>
  );
};

export default HomePageHowItWorks;
