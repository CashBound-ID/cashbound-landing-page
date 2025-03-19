import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Typography from '@cashbound-id/design-system/typography';

import { useDevice } from '@/context/DeviceContext';

import HomePageSupportDesktop from './components/HomePageSupportDesktop';
import HomePageSupportMobile from './components/HomePageSupportMobile';

const HomePageSupports = () => {
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
        Need Help? We’ve Got You Covered
      </Typography>
      <Typography
        modifier={device === 'desktop' ? 'body-lg' : 'body-md'}
        textAlign="center"
        color={color.GRAYMAUVE1100}
        margin={device === 'desktop' ? '0 0 40px' : '0 0 32px'}
      >
        Whether you have questions or need assistance, our team is ready to
        help.
      </Typography>

      {device === 'desktop' ? (
        <HomePageSupportDesktop />
      ) : (
        <HomePageSupportMobile />
      )}
    </>
  );
};

export default HomePageSupports;
