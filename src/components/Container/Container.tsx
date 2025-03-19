import type { HTMLAttributes, PropsWithChildren } from 'react';

import { useDevice } from '@/context/DeviceContext';

import { cx } from '@/utils/css';

import style from './style.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  position?: 'absolute' | 'relative' | 'fixed';
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, className, position, ...res } = props;
  const device = useDevice();

  return (
    <section
      {...res}
      className={cx(style['container'], className)}
      data-device={device}
      data-position={position}
    >
      {children}
    </section>
  );
};

export default Container;
