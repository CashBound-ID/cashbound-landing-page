import HorizontalSlider from '@cashbound-id/design-system/horizontal-slider';

import { useDevice } from '@/context/DeviceContext';
import HomePageFeatureCard from '@/modules/HomePage/Submodules/HomePageFeatures/components/HomePageFeatureCard';
import { CASHBOUND_FEATURES_LIST } from '@/modules/HomePage/Submodules/HomePageFeatures/constant';

import styles from './style.module.scss';

const HomePageFeaturesMobile = () => {
  const device = useDevice();

  return (
    <section
      className={styles['home-page-features-mobile']}
      data-device={device}
    >
      <HorizontalSlider
        gap={16}
        padding={device === 'mobile' ? '0 16px' : '0 40px'}
      >
        {CASHBOUND_FEATURES_LIST.map((item) => {
          return (
            <HomePageFeatureCard
              key={item.title}
              description={item.description}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </HorizontalSlider>
    </section>
  );
};

export default HomePageFeaturesMobile;
