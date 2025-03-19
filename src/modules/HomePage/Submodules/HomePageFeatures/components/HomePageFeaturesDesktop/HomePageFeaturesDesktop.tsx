import Grid from '@cashbound-id/design-system/grid';

import HomePageFeatureCard from '@/modules/HomePage/Submodules/HomePageFeatures/components/HomePageFeatureCard';
import { CASHBOUND_FEATURES_LIST } from '@/modules/HomePage/Submodules/HomePageFeatures/constant';

const HomePageFeaturesDesktop = () => {
  return (
    <Grid gap={24}>
      {CASHBOUND_FEATURES_LIST.map((item, index) => {
        return (
          <Grid.Item key={item.title} col={index <= 1 ? 6 : 3}>
            <HomePageFeatureCard
              description={item.description}
              title={item.title}
              icon={item.icon}
            />
          </Grid.Item>
        );
      })}
    </Grid>
  );
};

export default HomePageFeaturesDesktop;
