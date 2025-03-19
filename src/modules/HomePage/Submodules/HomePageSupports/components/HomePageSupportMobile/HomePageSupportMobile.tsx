import Flex from '@cashbound-id/design-system/flex';

import { useDevice } from '@/context/DeviceContext';
import HomePageSupportCard from '@/modules/HomePage/Submodules/HomePageSupports/components/HomePageSupportCard';
import { HOME_PAGE_SUPPORTS } from '@/modules/HomePage/Submodules/HomePageSupports/constant';

const HomePageSupportMobile = () => {
  const device = useDevice();

  return (
    <Flex gap={24} vertical>
      {HOME_PAGE_SUPPORTS.map((item) => {
        const [, imageTablet, imageMobile] = item.illustration;

        return (
          <HomePageSupportCard
            key={item.title}
            buttonIcon={item.button.icon}
            buttonText={item.button.text}
            description={item.description}
            gradient={item.gradient}
            illustration={device === 'mobile' ? imageMobile : imageTablet}
            title={item.title}
          />
        );
      })}
    </Flex>
  );
};

export default HomePageSupportMobile;
