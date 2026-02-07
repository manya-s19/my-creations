
import React from 'react';
import { motion } from 'framer-motion';

const WashiTape = ({ color = "#9BC1BC", rotation = 0, width = "200px", className = "" }) => {
  // Using solid colors for patterns instead of gradients
  const patterns = {
    dots: (
      <pattern id={`dots-${color}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.5)" />
      </pattern>
    ),
    stripes: (
      <pattern id={`stripes-${color}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="10" fill="rgba(255,255,255,0.4)" />
      </pattern>
    ),
    solid: (
      <pattern id={`solid-${color}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="10" height="10" fill="transparent" />
      </pattern>
    )
  };

  const patternKeys = Object.keys(patterns);
  const patternType = patternKeys[Math.floor(Math.random() * patternKeys.length)];
  const patternId = `${patternType}-${color}`;

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: width,
        height: '35px',
        transform: `rotate(${rotation}deg)`,
        zIndex: 10,
        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {patterns[patternType]}
        </defs>
        {/* Base Tape Layer - Solid Color */}
        <rect
          width="100%"
          height="100%"
          fill={color}
          opacity="0.9" 
        />
        {/* Pattern Layer */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
        {/* Torn Edges Effect (simulated with white jagged lines at ends) */}
        <path d="M0,0 L5,5 L0,10 L5,15 L0,20 L5,25 L0,30 L5,35 L0,35 Z" fill="rgba(255,255,255,0.0)" />
        <path d="M100%,0 Lcalc(100%-5px),5 L100%,10 Lcalc(100%-5px),15 L100%,20 Lcalc(100%-5px),25 L100%,30 Lcalc(100%-5px),35 L100%,35 Z" fill="rgba(255,255,255,0.0)" />
      </svg>
    </motion.div>
  );
};

export default WashiTape;
