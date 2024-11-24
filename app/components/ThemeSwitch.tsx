'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiBatteryCharging, FiBattery } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) return null; 

  return (
    <section>
      {resolvedTheme === 'dark' ? (
        <FiBatteryCharging
          className="text-3xl cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <FiBattery
          className="text-3xl cursor-pointer"
          onClick={() => setTheme('dark')} 
        />
      )}
    </section>
  );
}
