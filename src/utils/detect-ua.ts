'use server';

import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

import type { DeviceType } from '@/types/misc';

export const getDeviceType = async (): Promise<DeviceType> => {
  if (typeof process === 'undefined') {
    throw new Error(
      '[Server method] you are importing a server-only module outside of server'
    );
  }

  const { get } = await headers();
  const ua = get('user-agent');

  const device = await new UAParser(ua || '').getDevice().withFeatureCheck();

  switch (device.type) {
    case 'mobile':
    case 'tablet':
      return device.type;

    default:
      return 'desktop';
  }
};
