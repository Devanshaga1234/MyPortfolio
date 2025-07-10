'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8"></div>; // Prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <FiSun className="h-5 w-5 text-yellow-300" />
      ) : (
        <FiMoon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
}
