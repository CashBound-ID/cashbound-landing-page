import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Typography from '@cashbound-id/design-system/typography';

import { useDevice } from '@/context/DeviceContext';

import HomePageFeaturesDesktop from './components/HomePageFeaturesDesktop/HomePageFeaturesDesktop';
import HomePageFeaturesMobile from './components/HomePageFeaturesMobile';

const HomePageFeatures = () => {
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
        Track, Manage, and Plan—All in One Place
      </Typography>
      <Typography
        modifier={device === 'desktop' ? 'body-lg' : 'body-md'}
        textAlign="center"
        color={color.GRAYMAUVE1100}
        margin={device === 'desktop' ? '0 0 40px' : '0 0 32px'}
      >
        Start tracking income and expenses today, and watch out for more
        features on the way!
      </Typography>

      {device === 'desktop' ? (
        <HomePageFeaturesDesktop />
      ) : (
        <HomePageFeaturesMobile />
      )}
    </>
  );
};

export default HomePageFeatures;
