import HorizontalSlider from '@cashbound-id/design-system/horizontal-slider';

import HowItWorksCard from '@/modules/HomePage/Submodules/HomePageHowItWorks/components/HowItWorksCard';
import { CASHBOUND_HOW_IT_WORKS_LIST } from '@/modules/HomePage/Submodules/HomePageHowItWorks/constant';

import styles from './style.module.scss';

const HowItWorksTablet = () => {
  return (
    <section className={styles['how-it-works-tablet']}>
      <HorizontalSlider gap={24} padding="0 40px">
        {CASHBOUND_HOW_IT_WORKS_LIST.map((item) => {
          return (
            <HowItWorksCard
              key={item.title}
              description={item.description}
              illustration={item.illustration}
              title={item.title}
            />
          );
        })}
      </HorizontalSlider>
    </section>
  );
};

export default HowItWorksTablet;
