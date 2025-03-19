import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Card from '@cashbound-id/design-system/card';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';

const HomePageTakeSurveyDesktop = () => {
  const { color } = useDesignSystemProvider();

  return (
    <Card
      background={color.GRAYMAUVE300}
      border={`1px solid ${color.GRAYMAUVE500}`}
      padding="40px"
    >
      <Flex gap={24} align="center">
        <Image
          src="/illustration/illustration-cashbound-logo-square.png"
          width={80}
          height={80}
          alt=""
        />

        <section style={{ flex: 1 }}>
          <Typography
            modifier="heading-lg"
            fontWeight="bold"
            color={color.GRAYMAUVE1200}
            margin="0 0 8px"
          >
            What Would You Like to See Next in CashBound?
          </Typography>

          <Typography modifier="body-lg" color={color.GRAYMAUVE1100}>
            Let us know what feature you’d like to see next.
          </Typography>
        </section>

        <Button modifier="primary" variant="fill" size="lg" icon="write-note">
          Take Survey
        </Button>
      </Flex>
    </Card>
  );
};

export default HomePageTakeSurveyDesktop;
