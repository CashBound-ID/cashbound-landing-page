import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Card from '@cashbound-id/design-system/card';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';

import { useDevice } from '@/context/DeviceContext';

import styles from './style.module.scss';

interface HowItWorksCardProps {
  description: string;
  illustration: string;
  title: string;
}

const HowItWorksCard = (props: HowItWorksCardProps) => {
  const { description, illustration, title } = props;
  const { color } = useDesignSystemProvider();
  const device = useDevice();

  return (
    <Card
      className={styles['how-it-works-card']}
      padding="32px 24px"
      data-device={device}
      background={color.WHITE}
      border={`2px dashed ${color.GRAYMAUVE600}`}
    >
      <Flex vertical align="center">
        <Image
          src={illustration}
          width={300}
          height={168}
          alt={title}
          unoptimized
          priority
        />

        <section className={styles['how-it-works-card__title']}>
          <Typography
            modifier="heading-sm"
            fontWeight="bold"
            color={color.GRAYMAUVE1200}
            textAlign="center"
          >
            {title}
          </Typography>
        </section>

        <Typography
          margin="16px 0 0"
          modifier="body-lg"
          fontWeight="regular"
          color={color.GRAYMAUVE1100}
          textAlign="center"
        >
          {description}
        </Typography>
      </Flex>
    </Card>
  );
};

export default HowItWorksCard;
