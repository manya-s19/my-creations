
import React from 'react';
import { motion } from 'framer-motion';

const HandwrittenLabel = ({ text, rotation = -2, color = "#031927", bgColor = "transparent", className = "" }) => {
  return (
    <motion.div
      className={`handwritten inline-block ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: 15
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div 
        className="px-4 py-2"
        style={{
          backgroundColor: bgColor,
          color: color,
          border: bgColor !== 'transparent' ? `2px solid ${color}` : 'none',
          boxShadow: bgColor !== 'transparent' ? '3px 3px 0px rgba(0,0,0,0.15)' : 'none',
          borderRadius: '4px' // Slightly rounded for solid labels
        }}
      >
        <span className="text-2xl font-bold">{text}</span>
      </div>
    </motion.div>
  );
};

export default HandwrittenLabel;
