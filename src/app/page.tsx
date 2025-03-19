import type { Metadata } from 'next';

import HomePage from '@/modules/HomePage/HomePage';

export const metadata: Metadata = {
  description: 'Cashbound landing page',
  title: 'Cashbound'
};

export default function Home() {
  return <HomePage />;
}
