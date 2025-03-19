import { useEffect, useState } from 'react';

import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Chip from '@cashbound-id/design-system/chip';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Script from 'next/script';

import { useDevice } from '@/context/DeviceContext';

import Container from '@/components/Container';

import type { DeviceType } from '@/types/misc';

import style from './style.module.scss';

const IMAGE_HERO: Record<DeviceType, string> = {
  desktop:
    '/illustration/home-page/hero-image/illustration-hero-illustration-desktop.png',
  mobile:
    '/illustration/home-page/hero-image/illustration-hero-illustration-mobile.png',
  tablet:
    '/illustration/home-page/hero-image/illustration-hero-illustration-tablet.png'
};

const HomePageHeroImage = () => {
  const device = useDevice();
  const { color } = useDesignSystemProvider();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      const gradient = new Gradient();
      gradient.initGradient('#gradient-canvas');
    }
  }, [loaded]);

  const handleOnLoadScript = () => setLoaded(true);

  return (
    <>
      <Script src="./js/strapi-gradient.js" async onLoad={handleOnLoadScript} />

      <section className={style['home-page-hero-image']} data-device={device}>
        <canvas
          id="gradient-canvas"
          style={{
            '--gradient-color-1': '#EFFBFF',
            '--gradient-color-2': '#DFF3FF',
            '--gradient-color-3': '#F7EAFF',
            '--gradient-color-4': '#FFE9E2'
          }}
        />

        <Container>
          <Flex
            className={style['home-page-hero-image__content']}
            align="center"
            vertical
          >
            <Chip icon="baby-fill" selected>
              BETA Version
            </Chip>

            <Typography
              modifier={device === 'mobile' ? 'heading-xl' : 'heading-2xl'}
              tag="h1"
              fontWeight="bold"
              color={color.GRAYMAUVE1200}
              textAlign="center"
              margin="16px 0"
            >
              Adulting Just Got Easier.
            </Typography>

            <Typography
              modifier={device === 'mobile' ? 'body-md' : 'body-lg'}
              tag="p"
              fontWeight="medium"
              color={color.GRAYMAUVE1200}
              textAlign="center"
              margin={device === 'mobile' ? '0 0 24px' : '0 0 40px'}
            >
              Life’s busy. CashBound makes it easy to track your
              {device === 'desktop' ? <br /> : ' '}
              <Typography
                display="inline"
                modifier={device === 'mobile' ? 'body-md' : 'body-lg'}
                tag="span"
                fontWeight="medium"
                color={color.GREENGRASS700}
                textAlign="center"
              >
                income
              </Typography>{' '}
              and{' '}
              <Typography
                display="inline"
                modifier="body-lg"
                tag="span"
                fontWeight="medium"
                color={color.REDTOMATO900}
                textAlign="center"
              >
                expenses
              </Typography>
              —so you can stay in control without the stress.
            </Typography>

            <Button
              modifier="primary"
              variant="fill"
              size="lg"
              icon="arrow-right"
              iconPosition="post"
              block={device === 'mobile'}
            >
              Start Now for Free
            </Button>
          </Flex>
        </Container>

        <picture>
          <img src={IMAGE_HERO[device]} alt="" />
        </picture>
      </section>
    </>
  );
};

export default HomePageHeroImage;
