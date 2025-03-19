import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Card from '@cashbound-id/design-system/card';
import Flex from '@cashbound-id/design-system/flex';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';

const HomePageTakeSurveyTablet = () => {
  const { color } = useDesignSystemProvider();

  return (
    <Card
      background={color.GRAYMAUVE300}
      border={`1px solid ${color.GRAYMAUVE500}`}
      padding="24px 16px"
    >
      <Flex gap={24} vertical justify="center" align="center">
        <Image
          src="/illustration/illustration-cashbound-logo-square.png"
          width={72}
          height={72}
          alt=""
        />

        <section>
          <Typography
            modifier="heading-md"
            fontWeight="bold"
            color={color.GRAYMAUVE1200}
            margin="0 0 8px"
            textAlign="center"
          >
            What Would You Like to See Next in CashBound?
          </Typography>

          <Typography
            modifier="body-md"
            color={color.GRAYMAUVE1100}
            textAlign="center"
          >
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

export default HomePageTakeSurveyTablet;
