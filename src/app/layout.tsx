'use server';

import type { PropsWithChildren } from 'react';

import { Poppins } from 'next/font/google';

import CashboundDesignSystem from '@/context/DesignSystemProvider';
import DeviceProvider from '@/context/DeviceContext';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';

import { getDeviceType } from '@/utils/detect-ua';

import '@cashbound-id/design-system/styles.css';
import '@/style/global.scss';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

const RootLayout = async (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  const device = await getDeviceType();

  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://cashbound-id.github.io/design-system/assets/fonts/cashbound-icon/style.css"
        />
      </head>

      <body>
        <DeviceProvider device={device}>
          <CashboundDesignSystem>
            <Navbar />

            {children}

            <Footer />
          </CashboundDesignSystem>
        </DeviceProvider>
      </body>
    </html>
  );
};

export default RootLayout;
