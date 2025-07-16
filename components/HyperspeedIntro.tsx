'use client';

import { useState, useEffect } from 'react';
// import Hyperspeed from './Hyperspeed';

interface HyperspeedIntroProps {
  onComplete: () => void;
}

const hyperspeedPreset = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 3, // Increase speed for more dramatic effect
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [80, 120], // Increase speed
  movingCloserSpeed: [-150, -200], // Increase speed
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  isHyper: true, // Enable auto speed-up
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
    sticks: 0x03B3C3,
  }
};

export default function HyperspeedIntro({ onComplete }: HyperspeedIntroProps) {
  const [phase, setPhase] = useState<'welcome' | 'hyperspeed' | 'fadeOut'>('welcome');
  const [welcomeFadeOut, setWelcomeFadeOut] = useState(false);

  const handleEnter = () => {
    if (phase !== 'welcome') return;
    console.log("Starting transition...");
    
    // Start welcome fade out
    setWelcomeFadeOut(true);
    
    // After fade out, start hyperspeed
    setTimeout(() => {
      setPhase('hyperspeed');
    }, 500); // Wait for fade out
  };

  useEffect(() => {
    if (phase === 'hyperspeed') {
      // Let hyperspeed run for longer to show the full effect
      const hyperspeedTimer = setTimeout(() => {
        setPhase('fadeOut');
      }, 4000); // Extended to 4 seconds

      return () => clearTimeout(hyperspeedTimer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'fadeOut') {
      // Complete the intro after fade out
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000); // Longer fade out

      return () => clearTimeout(completeTimer);
    }
  }, [phase, onComplete]);

  if (phase === 'welcome') {
    return (
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 to-black flex items-center justify-center cursor-pointer transition-opacity duration-500 ${
          welcomeFadeOut ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleEnter}
      >
        <div className="text-center pointer-events-none">
          <h1 className="text-6xl font-bold text-white mb-8 animate-pulse">Welcome</h1>
          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-transform duration-300">
            Aaryan Gusain
          </div>
          <p className="text-white/70 mt-4">Click anywhere to enter</p>
        </div>
      </div>
    );
  }

  // COMMENTED OUT - Removing hyperspeed transition
  /*
  if (phase === 'hyperspeed') {
    return (
      <div className="fixed inset-0 z-50 bg-black animate-in fade-in duration-500">
        <Hyperspeed effectOptions={hyperspeedPreset} />
      </div>
    );
  }

  if (phase === 'fadeOut') {
    return (
      <div className="fixed inset-0 z-50 bg-black animate-out fade-out duration-800">
        <Hyperspeed effectOptions={hyperspeedPreset} />
      </div>
    );
  }
  */

  return null;
}
