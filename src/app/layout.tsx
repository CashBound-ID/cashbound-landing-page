import type { Metadata } from 'next';

import '@cashbound-id/design-system/dist/styles.css';
import CashboundDesignSystem from './context/DesignSystemProvider';

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cashbound-id.github.io/design-system/assets/fonts/cashbound-icon/style.css"
        />
      </head>
      <body>
        <CashboundDesignSystem>{children}</CashboundDesignSystem>
      </body>
    </html>
  );
}
