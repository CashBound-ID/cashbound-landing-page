'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import useClientMediaQuery from '@/hooks/useClientMediaQuery';

import type { DeviceType } from '@/types/misc';
import type { Maybe } from '@/types/utils';

const _deviceContext = createContext<Maybe<DeviceType>>(undefined);

interface DeviceProviderProps {
  device: DeviceType;
}

const DeviceProvider = (props: PropsWithChildren<DeviceProviderProps>) => {
  const { children, device } = props;
  const [currentDevice, setDevice] = useState<DeviceType>(device);
  const isMobile = useClientMediaQuery('(max-width: 600px)');
  const isTablet = useClientMediaQuery(
    '(min-width: 601px) and (max-width: 1024px)'
  );
  const isDesktop = useClientMediaQuery('(min-width: 1025px)');

  useEffect(() => {
    if (isMobile) {
      setDevice('mobile');
    } else if (isTablet) {
      setDevice('tablet');
    } else if (isDesktop) {
      setDevice('desktop');
    }
  }, [isDesktop, isMobile, isTablet]);

  return (
    <_deviceContext.Provider value={currentDevice}>
      {children}
    </_deviceContext.Provider>
  );
};

export const useDevice = () => {
  const payload = useContext(_deviceContext);

  if (!payload) {
    throw new Error(`useDevice must be used within the DeviceProvider`);
  }

  return payload;
};

export default DeviceProvider;
