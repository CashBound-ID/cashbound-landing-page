import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Card from '@cashbound-id/design-system/card';
import type { CashboundIconType } from '@cashbound-id/design-system/dist/types/icon.js';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';

import { useDevice } from '@/context/DeviceContext';

import type { DeviceType } from '@/types/misc';

import style from './style.module.scss';

const IMAGE_PRESET_SIZE: Record<DeviceType, { height: number; width: number }> =
  {
    desktop: { height: 300, width: 330 },
    mobile: { height: 252, width: 180 },
    tablet: { height: 300, width: 330 }
  };

interface HomePageSupportCardProps {
  buttonIcon: CashboundIconType;
  buttonText: string;
  description: string;
  gradient: string;
  illustration: string;
  title: string;
}

const HomePageSupportCard = (props: HomePageSupportCardProps) => {
  const { buttonIcon, buttonText, description, gradient, illustration, title } =
    props;
  const { color } = useDesignSystemProvider();
  const device = useDevice();
  const {
    [device]: { height, width }
  } = IMAGE_PRESET_SIZE;

  return (
    <Card
      className={style['home-page-support-card']}
      data-device={device}
      shadow="default"
      background={color.WHITE}
      padding={0}
    >
      <Flex
        className={style['home-page-support-card__heading']}
        vertical
        align="center"
      >
        <section className={style['home-page-support-card__title']}>
          <Typography
            textAlign="center"
            modifier={device === 'mobile' ? 'body-lg' : 'heading-sm'}
            color={color.GRAYMAUVE1200}
            fontWeight="bold"
          >
            {title}
          </Typography>
        </section>

        <Typography
          className={style['home-page-support-card__text']}
          textAlign="center"
          modifier={device === 'mobile' ? 'body-md' : 'body-lg'}
          color={color.GRAYMAUVE1100}
        >
          {description}
        </Typography>

        <Button icon={buttonIcon} modifier="primary" variant="fill" size="lg">
          {buttonText}
        </Button>
      </Flex>

      <section
        className={style['home-page-support-card__illustration']}
        style={{ backgroundImage: gradient }}
      >
        <Image src={illustration} alt={title} width={width} height={height} />
      </section>
    </Card>
  );
};

export default HomePageSupportCard;
