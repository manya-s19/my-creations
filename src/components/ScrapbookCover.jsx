import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrapbookStickers from './decorative/ScrapbookStickers';
import WashiTape from './decorative/WashiTape';

const ScrapbookCover = ({ onOpen }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setTimeout(() => {
        onOpen();
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#22333B]">
      
      {/* INCREASED SIZE: max-w-xl -> max-w-2xl */}
      <motion.div
        className="relative w-full max-w-2xl"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative w-full cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          animate={{
            rotateY: isFlipped ? -180 : 0,
          }}
          onClick={handleClick}
          whileHover={{ scale: 1.02 }}
        >
          {/* Front of cover */}
          <motion.div
            className="relative bg-[#ED6A5A] rounded-r-xl rounded-l-sm shadow-2xl p-10 md:p-12 paper-texture"
            style={{
              backfaceVisibility: 'hidden',
              width: '100%',
              aspectRatio: '1/1.4', // Portrait aspect ratio
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '14px solid #031927',
              borderLeft: '28px solid #031927', 
              boxShadow: '15px 15px 40px rgba(0,0,0,0.3)',
            }}
          >
            {/* Title Block */}
            <div className="bg-[#F4F1BB] p-10 md:p-14 text-center transform -rotate-2 shadow-[8px_8px_0px_rgba(3,25,39,1)] border-2 border-[#031927] z-10 relative">
                <h1 className="decorative text-5xl md:text-7xl text-[#031927] mb-3">
                My Creative
                </h1>
                <h1 className="decorative text-5xl md:text-7xl text-[#ED6A5A]" style={{ textShadow: '3px 3px 0px #031927' }}>
                Portfolio
                </h1>
                
                {/* Small Stickers attached to title block */}
                <ScrapbookStickers type="star" size={30} rotation={20} className="-top-3 -right-3" />
                <ScrapbookStickers type="heart" size={25} rotation={-10} className="-bottom-3 -left-3" />
            </div>

            <motion.div 
                className="mt-16 bg-[#031927] text-[#F4F1BB] px-10 py-4 rounded-full handwritten text-3xl z-20 hover:bg-[#22333B] transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
              Open Scrapbook
            </motion.div>

            {/* Decorative elements */}
            <WashiTape color="#9BC1BC" rotation={-5} width="180px" className="top-12 left-6" />
            <WashiTape color="#F4F1BB" rotation={5} width="160px" className="bottom-14 right-6" />
            
            {/* --- TOP SECTION STICKERS (Non-tech) --- */}
            <ScrapbookStickers type="star" size={50} rotation={-15} className="top-24 right-12" />
            <ScrapbookStickers type="flower" size={55} rotation={-10} className="top-36 left-8" />
            <ScrapbookStickers type="heart" size={40} rotation={25} className="top-16 left-32" />

            {/* --- MIDDLE SECTION STICKERS (Non-tech) --- */}
            <ScrapbookStickers type="star" size={35} rotation={15} className="top-1/2 left-8 transform -translate-y-1/2" />
            <ScrapbookStickers type="flower" size={45} rotation={15} className="top-1/2 right-8 transform -translate-y-1/2" />

            {/* --- BOTTOM SECTION STICKERS (Non-tech) --- */}
            <ScrapbookStickers type="heart" size={45} rotation={20} className="bottom-28 left-12" />
            <ScrapbookStickers type="star" size={40} rotation={10} className="bottom-32 right-16" />
            <ScrapbookStickers type="flower" size={35} rotation={-15} className="bottom-10 left-32" />

            <div className="absolute top-8 left-10 w-16 h-16 border-l-4 border-t-4 border-[#031927] opacity-40" />
            <div className="absolute bottom-8 right-10 w-16 h-16 border-r-4 border-b-4 border-[#031927] opacity-40" />
          </motion.div>

          {/* Back of cover (Inside Front Cover) */}
          <motion.div
            className="absolute inset-0 bg-[#F4F1BB] rounded-l-xl rounded-r-sm shadow-2xl p-16 paper-texture flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              border: '14px solid #031927',
              borderRight: '28px solid #031927',
            }}
          >
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                     backgroundImage: 'radial-gradient(#031927 1px, transparent 1px)', 
                     backgroundSize: '24px 24px' 
                 }} 
            />
            <motion.div
              className="text-center relative z-10 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: isFlipped ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Inside Cover Stickers framing the text (Tech) */}
              {/* rocket sticker a little to the left (decrease left/translateX value) */}
              <ScrapbookStickers type="rocket" size={40} rotation={-10} className="top-10 left-6 absolute" /> 
              {/* lightning bolt sticker up (decrease top/translateY value) */}
              <ScrapbookStickers type="lightning" size={40} rotation={15} className="top-4 right-10 absolute" />
              {/* coding </> sticker up slightly (decrease top/translateY value) */}
              <ScrapbookStickers type="code" size={45} rotation={-5} className="bottom-4 left-10 absolute" /> 
              {/* computer/laptop sticker down (increase top/translateY value) */}
              <ScrapbookStickers type="laptop" size={30} rotation={10} className="bottom-10 right-10 absolute" />
              {/* lightbulb sticker down and very slightly to the right (increase top/translateY value, increase left/translateX value slightly) */}
              <ScrapbookStickers type="bulb" size={35} rotation={-15} className="top-1/2 left-1/2 -translate-x-1/2 translate-y-12 absolute" />
              
              <h2 className="decorative text-6xl md:text-7xl text-[#ED6A5A] mb-8 relative inline-block">
                Welcome!
              </h2>
              <p className="handwritten text-4xl md:text-5xl text-[#031927] mt-4">
                Turning the page...
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrapbookCover;