'use client';
import { useEffect, useState } from 'react';

import type { NullAble } from '@/types/utils';

const useClientMediaQuery = (query: string) => {
  const [match, setMatches] = useState<NullAble<boolean>>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const handleMatchChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQueryList.addEventListener('change', handleMatchChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return match;
};

export default useClientMediaQuery;
