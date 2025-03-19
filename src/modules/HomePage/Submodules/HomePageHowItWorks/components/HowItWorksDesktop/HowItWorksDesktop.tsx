import Grid from '@cashbound-id/design-system/grid';

import HowItWorksCard from '@/modules/HomePage/Submodules/HomePageHowItWorks/components/HowItWorksCard';
import { CASHBOUND_HOW_IT_WORKS_LIST } from '@/modules/HomePage/Submodules/HomePageHowItWorks/constant';

const HowItWorksDesktop = () => {
  return (
    <Grid gap={24}>
      {CASHBOUND_HOW_IT_WORKS_LIST.map((item) => {
        return (
          <Grid.Item key={item.title} col={4}>
            <HowItWorksCard
              description={item.description}
              illustration={item.illustration}
              title={item.title}
            />
          </Grid.Item>
        );
      })}
    </Grid>
  );
};

export default HowItWorksDesktop;
