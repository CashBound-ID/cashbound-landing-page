'use client';

import type { PropsWithChildren } from 'react';

import DesignSystemProvider from '@cashbound-id/design-system/index.esm';

const CashboundDesignSystem = (props: PropsWithChildren<unknown>) => {
  return <DesignSystemProvider>{props.children}</DesignSystemProvider>;
};

export default CashboundDesignSystem;
