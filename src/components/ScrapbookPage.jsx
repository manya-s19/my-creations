import React from 'react';
import { motion } from 'framer-motion';
import WashiTape from './decorative/WashiTape';
import ScrapbookStickers from './decorative/ScrapbookStickers';
import HandwrittenLabel from './decorative/HandwrittenLabel';

const ScrapbookPage = ({ 
  children, 
  pageNumber, 
  title,
  position = "right", // "left" or "right"
  bgColor = "#F4F1BB", // Allow custom background color per page
  project
}) => {
  const isLeft = position === "left";
  // Determine if this is the introduction page where we want the tech stickers
  // Page number is 0 for the intro page (index 0 * 2), and title is "Introduction"
  const isIntroPage = pageNumber === 0 || title === "Introduction" || title === "My Journey Begins";

  return (
    <div 
      className={`relative w-full h-full paper-texture flex flex-col p-6 md:p-8 ${isLeft ? 'page-left' : 'page-right'}`}
      style={{
        backgroundColor: bgColor,
        aspectRatio: '1/1.4', 
        borderLeft: !isLeft ? 'none' : 'none',
        borderRight: isLeft ? '1px solid rgba(0,0,0,0.1)' : 'none',
      }}
    >
      {/* Decorative Elements */}
      {isLeft ? (
         <>
           <WashiTape color="#ED6A5A" rotation={-45} width="120px" className="-top-4 -left-4" />
           {/* Only show standard star if NOT intro page */}
           {!isIntroPage && <ScrapbookStickers type="star" size={28} rotation={10} className="bottom-6 left-6" />}
         </>
      ) : (
         <>
           <WashiTape color="#9BC1BC" rotation={45} width="120px" className="-top-4 -right-4" />
           {!isIntroPage && <ScrapbookStickers type="heart" size={28} rotation={-10} className="bottom-6 right-6" />}
         </>
      )}

      {/* Intro Page Specific Tech Stickers - Adjusted Layout */}
      {isIntroPage && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-xl">
            {/* Top Section - Organic Scatter */}
            {/* Rocket moved further down as requested */}
            <ScrapbookStickers type="rocket" size={60} rotation={-25} className="top-28 left-8 md:top-34 md:left-14" />
            
            {/* Bulb remains roughly same */}
            <ScrapbookStickers type="bulb" size={55} rotation={15} className="top-24 right-8 md:top-28 md:right-16" />
            
            {/* Middle Section - Framing Content */}
            {/* Code sticker moved closer to rocket */}
            <ScrapbookStickers type="code" size={55} rotation={-10} className="top-38 left-16 md:top-44 md:left-24" />
            
            {/* Lightning sticker moved up slightly */}
            <ScrapbookStickers type="lightning" size={50} rotation={20} className="top-[35%] right-8 md:right-14" />
            
            {/* Bottom Section - Balanced Anchors */}
            {/* Earth sticker (replacing previous planet) */}
            <ScrapbookStickers type="earth" size={60} rotation={10} className="bottom-20 left-12 md:bottom-28 md:left-20" />
            
            <ScrapbookStickers type="laptop" size={65} rotation={-5} className="bottom-16 right-10 md:bottom-24 md:right-16" />
            
            {/* New Bulb added close to laptop, adjusted to be closer to the right */}
            <ScrapbookStickers type="bulb" size={45} rotation={-15} className="bottom-24 right-20 md:bottom-32 md:right-28" />
        </div>
      )}

      {/* Page Content Container */}
      <div className="flex-1 relative z-10 flex flex-col overflow-hidden">
        {/* Header */}
        {title && (
          <div className={`mb-4 flex flex-col justify-end ${isLeft ? 'items-start text-left' : 'items-end text-right'}`}>
            <HandwrittenLabel 
                text={title} 
                rotation={isLeft ? -1 : 1} 
                color="#031927" 
                bgColor="#ED6A5A" 
                className="text-xl md:text-2xl" 
            />
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          <div className="w-full h-full">
            {children}
            {/* Project Description with clickable link */}
            {project && (
              <p className="text-gray-600">
                {project.description}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {project.linkText}
                </a>
              </p>
            )}
           </div>
        </div>

        {/* Footer / Page Number */}
        <div className={`mt-auto pt-2 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
           <span className="handwritten text-lg text-[#22333B] opacity-60">
             Page {pageNumber}
           </span>
        </div>
      </div>

    </div>
  );
};

export default ScrapbookPage;