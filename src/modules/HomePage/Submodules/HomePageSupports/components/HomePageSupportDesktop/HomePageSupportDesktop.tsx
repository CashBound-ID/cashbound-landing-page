import Grid from '@cashbound-id/design-system/grid';

import HomePageSupportCard from '@/modules/HomePage/Submodules/HomePageSupports/components/HomePageSupportCard';
import { HOME_PAGE_SUPPORTS } from '@/modules/HomePage/Submodules/HomePageSupports/constant';

const HomePageSupportDesktop = () => {
  return (
    <Grid gap={24}>
      {HOME_PAGE_SUPPORTS.map((item) => {
        const [imageDesktop] = item.illustration;

        return (
          <Grid.Item key={item.title}>
            <HomePageSupportCard
              buttonIcon={item.button.icon}
              buttonText={item.button.text}
              description={item.description}
              gradient={item.gradient}
              illustration={imageDesktop}
              title={item.title}
            />
          </Grid.Item>
        );
      })}
    </Grid>
  );
};

export default HomePageSupportDesktop;
