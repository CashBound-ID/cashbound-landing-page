import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Card from '@cashbound-id/design-system/card';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';

import styles from './style.module.scss';

const HomePageNewsLetterDesktop = () => {
  const { color } = useDesignSystemProvider();

  return (
    <Card
      background={color.WHITE}
      border={`1px solid ${color.GRAYMAUVE500}`}
      radius="lg"
      padding="40px 40px 40px 32px"
    >
      <Flex gap={24} align="center">
        <Image
          src="/illustration/home-page/news-letter/illustration-email.svg"
          alt="Cashbound News Letter"
          width={96}
          height={80}
        />

        <section className={styles['home-page-news-letter-desktop__text']}>
          <Typography
            modifier="heading-lg"
            fontWeight="bold"
            color={color.GRAYMAUVE1200}
            margin="0 0 8px"
          >
            Future of CashBound is Bright! 🌞
          </Typography>

          <Typography modifier="body-lg" color={color.GRAYMAUVE1100}>
            Exciting updates are on the way! Subscribe and be the first to see
            CashBound evolve into something even better.
          </Typography>
        </section>

        <Flex gap={16}>
          <div
            style={{
              border: `1px solid ${color.GRAYMAUVE600}`,
              borderRadius: 8,
              height: 44,
              width: 286
            }}
          />

          <Button icon="mail-fill" modifier="primary" variant="fill" size="lg">
            Subscribbe
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default HomePageNewsLetterDesktop;
