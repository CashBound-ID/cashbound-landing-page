'use client';

import { useDevice } from '@/context/DeviceContext';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const device = useDevice();

  if (device === 'desktop') {
    return <NavbarDesktop />;
  }

  return <NavbarMobile />;
};

export default Navbar;
