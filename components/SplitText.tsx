'use client';

import { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'ease-out',
  splitType = 'chars',
  textAlign = 'left',
  onLetterAnimationComplete
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const chars = container.querySelectorAll('.split-char');
    
    // Ensure all characters are visible by default, then animate
    chars.forEach((char, index) => {
      const element = char as HTMLElement;
      // Make sure the character inherits the parent's color/styling
      element.style.display = 'inline-block';
      element.style.opacity = '1';
      element.style.color = 'inherit';
      element.style.transform = 'translateY(0px)';
      
      // Add a subtle animation effect
      element.style.transition = `transform 0.3s ease ${index * 50}ms`;
      
      setTimeout(() => {
        element.style.transform = 'translateY(-2px)';
        setTimeout(() => {
          element.style.transform = 'translateY(0px)';
        }, 150);
      }, index * 50 + 100);
    });

    if (onLetterAnimationComplete) {
      setTimeout(onLetterAnimationComplete, (chars.length * 50) + 500);
    }
  }, [text, delay, duration, ease, onLetterAnimationComplete]);

  const splitText = text.split('').map((char, index) => (
    <span 
      key={index} 
      className="split-char" 
      style={{ 
        display: 'inline-block',
        color: 'inherit'
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{ textAlign: textAlign as any }}
    >
      {splitText}
    </div>
  );
}