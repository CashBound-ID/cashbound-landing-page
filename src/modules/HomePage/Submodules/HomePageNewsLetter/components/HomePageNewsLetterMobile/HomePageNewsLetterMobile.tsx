import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Card from '@cashbound-id/design-system/card';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';

import styles from './style.module.scss';

const HomePageNewsLetterMobile = () => {
  const { color } = useDesignSystemProvider();

  return (
    <Card
      className={styles['home-page-news-letter-mobile']}
      background={color.WHITE}
      border={`1px solid ${color.GRAYMAUVE500}`}
      radius="lg"
      padding="24px 16px"
    >
      <Flex gap={24} align="center" vertical>
        <Image
          src="/illustration/home-page/news-letter/illustration-email.svg"
          alt="Cashbound News Letter"
          width={72}
          height={60}
        />

        <section className={styles['home-page-news-letter-mobile__text']}>
          <Typography
            textAlign="center"
            modifier="heading-md"
            fontWeight="bold"
            color={color.GRAYMAUVE1200}
            margin="0 0 8px"
          >
            Future of CashBound is Bright! 🌞
          </Typography>

          <Typography
            textAlign="center"
            modifier="body-md"
            color={color.GRAYMAUVE1100}
          >
            Exciting updates are on the way! Subscribe and be the first to see
            CashBound evolve into something even better.
          </Typography>
        </section>

        <Flex
          gap={16}
          vertical
          className={styles['home-page-news-letter-mobile__form']}
        >
          <div
            style={{
              border: `1px solid ${color.GRAYMAUVE600}`,
              borderRadius: 8,
              height: 44,
              width: '100%'
            }}
          />

          <Button
            icon="mail-fill"
            modifier="primary"
            variant="fill"
            size="lg"
            block
          >
            Subscribbe
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default HomePageNewsLetterMobile;
