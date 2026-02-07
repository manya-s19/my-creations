
import React from 'react';
import { motion } from 'framer-motion';

const ScrapbookStickers = ({ type = "star", size = 40, rotation = 0, className = "" }) => {
  // Using palette colors explicitly
  const colors = {
    coral: "#ED6A5A",
    cream: "#F4F1BB",
    teal: "#9BC1BC",
    navy: "#031927",
    slate: "#22333B"
  };

  const stickers = {
    star: (
      <svg viewBox="0 0 24 24" fill={colors.coral} stroke={colors.navy} strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill={colors.coral} stroke={colors.navy} strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill={colors.teal} stroke={colors.navy} strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none" />
      </svg>
    ),
    smile: (
      <svg viewBox="0 0 24 24" fill={colors.cream} stroke={colors.navy} strokeWidth="1.5">
        <circle cx="12" cy="12" r="11" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" fill="none" strokeLinecap="round" />
        <circle cx="9" cy="9" r="1.5" fill={colors.navy} />
        <circle cx="15" cy="9" r="1.5" fill={colors.navy} />
      </svg>
    ),
    popSmile: (
      <svg viewBox="0 0 24 24" fill={colors.cream} stroke={colors.navy} strokeWidth="1.5">
        <circle cx="12" cy="12" r="11" />
        {/* Left Star Eye */}
        <path d="M8 7l.6 1.8h1.9l-1.5 1.1.6 1.8-1.6-1.1-1.6 1.1.6-1.8-1.5-1.1h1.9z" fill={colors.coral} stroke="none" />
        {/* Right Star Eye */}
        <path d="M16 7l.6 1.8h1.9l-1.5 1.1.6 1.8-1.6-1.1-1.6 1.1.6-1.8-1.5-1.1h1.9z" fill={colors.coral} stroke="none" />
        <path d="M7 15s2.5 3 5 3 5-3 5-3" fill="none" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    smiley: (
      <svg viewBox="0 0 24 24" fill={colors.cream} stroke={colors.navy} strokeWidth="1.5">
        <circle cx="12" cy="12" r="11" />
        <circle cx="8" cy="9" r="1.5" fill={colors.navy} stroke="none" />
        <circle cx="16" cy="9" r="1.5" fill={colors.navy} stroke="none" />
        <path d="M7 14s2.5 3 5 3 5-3 5-3" fill="none" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    flower: (
      <svg viewBox="0 0 24 24" fill={colors.coral} stroke={colors.navy} strokeWidth="1.5">
        <circle cx="12" cy="12" r="4.5" fill={colors.cream} />
        <circle cx="12" cy="5" r="4" />
        <circle cx="19" cy="12" r="4" />
        <circle cx="12" cy="19" r="4" />
        <circle cx="5" cy="12" r="4" />
      </svg>
    ),
    rainbow: (
      <svg viewBox="0 0 24 24" fill="none" stroke={colors.navy} strokeWidth="2" strokeLinecap="round">
        <path d="M3 17s4-8 9-8 9 8 9 8" stroke={colors.coral} />
        <path d="M5 17s3-5 7-5 7 5 7 5" stroke={colors.cream} />
        <path d="M7 17s2-3 5-3 5 3 5 3" stroke={colors.teal} />
      </svg>
    ),
    laptop: (
      <svg viewBox="0 0 24 24" fill={colors.teal} stroke={colors.navy} strokeWidth="1.5">
         <rect x="1" y="2" width="22" height="14" rx="2" fill={colors.slate} />
         <rect x="3" y="4" width="18" height="10" rx="1" fill={colors.cream} />
         <path d="M0 16h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3z" fill={colors.navy} />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" fill="none" stroke={colors.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" fill={colors.cream} strokeWidth="1.5" />
        <path d="M8 16l-4-4 4-4" stroke={colors.coral} strokeWidth="2.5" />
        <path d="M16 8l4 4-4 4" stroke={colors.coral} strokeWidth="2.5" />
        <path d="M14 6l-4 12" stroke={colors.teal} strokeWidth="2" />
      </svg>
    ),
    bulb: (
      <svg viewBox="0 0 24 24" fill={colors.cream} stroke={colors.navy} strokeWidth="1.5">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 1 7 7c0 2-2 3-2 5v2h-10v-2c0-2-2-3-2-5a7 7 0 0 1 7-7z" fill={colors.cream} />
        <path d="M12 6v4" stroke={colors.coral} strokeWidth="2" />
        <path d="M9 8l1.5 1.5" stroke={colors.coral} strokeWidth="2" />
        <path d="M15 8l-1.5 1.5" stroke={colors.coral} strokeWidth="2" />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24" fill="none" stroke={colors.navy} strokeWidth="1.5" strokeLinejoin="round">
        {/* Flame Exhaust - Bright Coral */}
        <path d="M12 22 L9 18 H15 L12 22Z" fill={colors.coral} stroke={colors.navy} />
        
        {/* Side Fins - Dark Slate */}
        <path d="M6 13 L3 17.5 H7" fill={colors.slate} stroke={colors.navy} />
        <path d="M18 13 L21 17.5 H17" fill={colors.slate} stroke={colors.navy} />
        
        {/* Main Body - Cream/Off-white */}
        <path d="M12 2 C12 2 6 7 6 14.5 C6 16.5 6 17.5 6 17.5 H18 C18 17.5 18 16.5 18 14.5 C18 7 12 2 12 2 Z" fill={colors.cream} stroke={colors.navy} />
        
        {/* Window - Teal */}
        <circle cx="12" cy="10" r="3" fill={colors.teal} stroke={colors.navy} />
        
        {/* Nose Cone Detail Line */}
        <path d="M8.5 6.5 H15.5" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
    lightning: (
      <svg viewBox="0 0 24 24" fill={colors.cream} stroke={colors.navy} strokeWidth="1.5">
        <circle cx="12" cy="12" r="11" fill={colors.slate} />
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={colors.cream} stroke={colors.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    planet: (
       <svg viewBox="0 0 24 24" fill={colors.coral} stroke={colors.navy} strokeWidth="1.5">
         <circle cx="12" cy="12" r="6" fill={colors.coral} />
         <path d="M7 16c-3 1-5 2-5 3s5 3 10 3 10-2 10-3-2-2-5-3" fill="none" stroke={colors.teal} strokeWidth="2" />
         <path d="M17 8c3-1 5-2 5-3s-5-3-10-3-10 2-10 3 2 2 5 3" fill="none" stroke={colors.teal} strokeWidth="2" />
       </svg>
    ),
    earth: (
      <svg viewBox="0 0 24 24" fill="none" stroke={colors.navy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Ocean Background - Sky Blue */}
        <circle cx="12" cy="12" r="10" fill="#63A4FF" stroke="none" /> 
        
        {/* Land Mass 1 (Americas-ish) - Green */}
        <path d="M7 6c0-1.5 1-2.5 2-2 1 .5 2 2 2 3s-1 1-1 3 2 3 2 4.5-2 3.5-3 5-2 1-2-2 0-3 1-5-1-4-1-6.5z" fill="#65A30D" stroke="none" />
        
        {/* Land Mass 2 (Eurasia/Africa-ish) - Green */}
        <path d="M15 4c1.5 0 3 1 4 2.5S20 9 19 11s-2 2-3 1.5-1-2-2-3.5 0-3 1-5z" fill="#65A30D" stroke="none" />
        <path d="M16 14c1 .5 2 1.5 2 2.5s-1 2-2.5 2-2-.5-2-1.5 1.5-2 2.5-3z" fill="#65A30D" stroke="none" />

        {/* Atmosphere/Border - Navy */}
        <circle cx="12" cy="12" r="10" stroke={colors.navy} fill="none" />
        
        {/* Reflection Highlight for realism */}
        <path d="M16 5a7 7 0 0 0-9 4" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  };

  // Calculate scaled size for specific tech stickers on the intro page
  // The isIntroPage logic from ScrapbookPage.jsx applies here through className
  const isTechSticker = ["rocket", "bulb", "lightning", "code", "laptop", "earth"].includes(type);
  const scaleFactor = 1.75;
  const finalSize = isTechSticker && className.includes('float-animation') ? size * scaleFactor : size;


  return (
    <motion.div
      className={`absolute ${className} float-animation`}
      style={{
        width: `${finalSize}px`,
        height: `${finalSize}px`,
        transform: `rotate(${rotation}deg)`,
        filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))',
        zIndex: 20
      }}
      initial={{ opacity: 0, scale: 0, rotate: rotation - 180 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ 
        duration: 0.6, 
        delay: Math.random() * 0.5,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.1, rotate: rotation + 5 }}
    >
      {stickers[type] || stickers.star}
    </motion.div>
  );
};

export default ScrapbookStickers;
