'use client';

import { useEffect, useRef } from 'react';

interface CubesProps {
  gridSize?: number;
  maxAngle?: number;
  radius?: number;
  borderStyle?: string;
  faceColor?: string;
  rippleColor?: string;
  rippleSpeed?: number;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
}

export default function Cubes({
  gridSize = 8,
  maxAngle = 60,
  radius = 4,
  borderStyle = "2px dashed #5227FF",
  faceColor = "#1a1a2e",
  rippleColor = "#ff6b6b",
  rippleSpeed = 1.5,
  autoAnimate = true,
  rippleOnClick = true
}: CubesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Simple cube grid animation implementation
    const container = containerRef.current;
    const cubes: HTMLDivElement[] = [];

    // Create grid of cubes
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.style.cssText = `
          position: absolute;
          width: 40px;
          height: 40px;
          border: ${borderStyle};
          background: ${faceColor};
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
          left: ${j * 50}px;
          top: ${i * 50}px;
        `;
        
        container.appendChild(cube);
        cubes.push(cube);
      }
    }

    // Animation logic
    if (autoAnimate) {
      const animate = () => {
        cubes.forEach((cube, index) => {
          const angle = Math.sin(Date.now() * 0.001 + index * 0.1) * maxAngle;
          cube.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
        });
        requestAnimationFrame(animate);
      };
      animate();
    }

    // Click ripple effect
    if (rippleOnClick) {
      container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cubes.forEach((cube, index) => {
          const cubeRect = cube.getBoundingClientRect();
          const distance = Math.sqrt(
            Math.pow(x - (cubeRect.left - rect.left), 2) + 
            Math.pow(y - (cubeRect.top - rect.top), 2)
          );
          
          setTimeout(() => {
            cube.style.backgroundColor = rippleColor;
            cube.style.transform = `scale(1.2) rotateX(${maxAngle}deg)`;
            
            setTimeout(() => {
              cube.style.backgroundColor = faceColor;
              cube.style.transform = 'scale(1) rotateX(0deg)';
            }, 200);
          }, distance * rippleSpeed);
        });
      });
    }

    return () => {
      container.innerHTML = '';
    };
  }, [gridSize, maxAngle, radius, borderStyle, faceColor, rippleColor, rippleSpeed, autoAnimate, rippleOnClick]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ perspective: '1000px' }}
    />
  );
}
