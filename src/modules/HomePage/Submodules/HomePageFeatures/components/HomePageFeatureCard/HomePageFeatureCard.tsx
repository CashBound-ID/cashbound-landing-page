import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Card from '@cashbound-id/design-system/card';
import type { CashboundIconType } from '@cashbound-id/design-system/dist/types/icon.js';
import Icon from '@cashbound-id/design-system/icon';
import Typography from '@cashbound-id/design-system/typography';

import { useDevice } from '@/context/DeviceContext';

import style from './style.module.scss';

interface HomePageFeatureCardProps {
  description: string;
  icon: CashboundIconType;
  title: string;
}

const HomePageFeatureCard = (props: HomePageFeatureCardProps) => {
  const { description, icon, title } = props;
  const { color } = useDesignSystemProvider();
  const device = useDevice();
  const isDesktop = device === 'desktop';

  return (
    <Card
      className={style['home-page-feature-card']}
      border={`1px solid ${color.GRAYMAUVE600}`}
      padding={isDesktop ? '32px 24px' : '24px 16px'}
      data-device={isDesktop ? 'desktop' : 'mobile'}
    >
      <Icon
        icon={icon}
        color={color.GRAYMAUVE1100}
        size={isDesktop ? 32 : 24}
        margin="0 0 16px"
      />

      <Typography
        display="block"
        modifier={isDesktop ? 'heading-md' : 'heading-sm'}
        fontWeight="bold"
        color={color.GRAYMAUVE1200}
        margin="0 0 16px"
      >
        {title}
      </Typography>

      <Typography
        display="block"
        modifier={isDesktop ? 'body-lg' : 'body-md'}
        color={color.GRAYMAUVE1100}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default HomePageFeatureCard;
