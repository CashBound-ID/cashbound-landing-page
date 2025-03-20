import { useDesignSystemProvider } from '@cashbound-id/design-system';
import Button from '@cashbound-id/design-system/button';
import Flex from '@cashbound-id/design-system/flex';
import Icon from '@cashbound-id/design-system/icon';
import Overlay from '@cashbound-id/design-system/overlay';
import Portal from '@cashbound-id/design-system/portal';
import Typography from '@cashbound-id/design-system/typography';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';

import { cx } from '@/utils/css';

import useNavbarMobile from './hooks/useNavbarMobile';
import { NAVBAR_MENU } from './constant';
import style from './style.module.scss';

interface NavbarMobileMenuProps {
  onClose(): void;
}

const NavbarMobileMenu = (props: NavbarMobileMenuProps) => {
  const { onClose } = props;
  const { color } = useDesignSystemProvider();
  const {
    actions: { close, onAnimationEnd, onClickOverlay },
    state: { show }
  } = useNavbarMobile({ onClose });

  const handleonClickLogin = () => {
    close();
  };

  return (
    <>
      <Overlay show={show} onClick={onClickOverlay} />
      <Portal>
        <Container
          className={cx(style['navbar__menu'], 'animate')}
          data-show={show}
          onAnimationEnd={onAnimationEnd}
        >
          <Flex vertical gap={24}>
            <Flex
              className={style['navbar__container']}
              align="center"
              justify="space-between"
            >
              <Link href="/">
                <Image
                  src="/illustration/illustration-cashbound-logo.png"
                  alt="Cashbound Apps"
                  width={130}
                  height={16}
                />
              </Link>

              <button
                className={style['navbar__hamburger']}
                type="button"
                onClick={close}
              >
                <Icon icon="close" size={24} color={color.GRAYMAUVE1200} />
              </button>
            </Flex>

            <Flex className={style['navbar__menu-list']} vertical>
              {NAVBAR_MENU.map((item) => (
                <Link key={item.url} href={item.url}>
                  <Typography
                    modifier="body-md"
                    color={color.VIOLET1200}
                    fontWeight="medium"
                  >
                    {item.text}
                  </Typography>
                </Link>
              ))}
            </Flex>

            <Button
              modifier="primary"
              variant="outline"
              size="lg"
              onClick={handleonClickLogin}
            >
              Login or Register
            </Button>
          </Flex>
        </Container>
      </Portal>
    </>
  );
};

export default NavbarMobileMenu;
