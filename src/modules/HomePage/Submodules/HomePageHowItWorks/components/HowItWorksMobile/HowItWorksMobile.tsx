import Flex from '@cashbound-id/design-system/flex';

import HowItWorksCard from '@/modules/HomePage/Submodules/HomePageHowItWorks/components/HowItWorksCard';
import { CASHBOUND_HOW_IT_WORKS_LIST } from '@/modules/HomePage/Submodules/HomePageHowItWorks/constant';

const HowItWorksMobile = () => {
  return (
    <Flex gap={24} vertical>
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
    </Flex>
  );
};

export default HowItWorksMobile;
