'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored) {
      setIsDark(stored === 'dark');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, mounted]);

  if (!mounted) {
    return <div className="w-5 h-5" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
