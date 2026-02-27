import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ChevronLeft, ChevronRight, ArrowRight, Home } from 'lucide-react';
import ScrapbookCover from './ScrapbookCover';
import ScrapbookPage from './ScrapbookPage';
import ProjectCard from './ProjectCard';
import projectsData from '@/data/projectsData';
import HandwrittenLabel from './decorative/HandwrittenLabel';
import WashiTape from './decorative/WashiTape';

const PortfolioPages = () => {
  const [viewState, setViewState] = useState('cover'); // 'cover' or 'book'
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = e => {
      if (viewState === 'cover') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'Escape') {
        setViewState('cover');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [viewState, currentProjectIndex]);

  const handleOpenScrapbook = () => {
    setViewState('book');
    setCurrentProjectIndex(0);
  };

  const handleNext = () => {
    if (currentProjectIndex < projectsData.length - 1) {
      setCurrentProjectIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(prev => prev - 1);
    } else {
      // Return to cover if going back from the first page
      setViewState('cover');
    }
  };

  const renderBookContent = () => {
    const leftProject = currentProjectIndex > 0 ? projectsData[currentProjectIndex - 1] : null;
    const rightProject = projectsData[currentProjectIndex];

    return (
      <div className="relative flex items-center justify-center w-full max-w-[95vw] 2xl:max-w-[1800px] px-2 md:px-4">
        
        {/* The Book Spread */}
        <div className="flex flex-col md:flex-row w-full shadow-2xl relative max-w-7xl mx-auto">
            
            {/* Navigation Button Left */}
            <button 
                onClick={handlePrevious}
                className="hidden xl:flex absolute -left-16 z-50 top-1/2 -translate-y-1/2 p-4 bg-[#ED6A5A] text-[#031927] rounded-full shadow-[4px_4px_0px_#031927] border-2 border-[#031927] hover:scale-110 hover:shadow-none transition-all"
                aria-label="Previous Page"
            >
                <ChevronLeft size={36} />
            </button>

            {/* Desktop Center Spine Binding */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-10 -ml-5 z-30 bg-gradient-to-r from-black/10 to-transparent pointer-events-none rounded-sm"></div>
            
            {/* Left Page (Previous Project or Intro) */}
            <div className="w-full md:w-1/2 hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-${currentProjectIndex}`}
                  initial={{ opacity: 0, rotateY: -10 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 10 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <ScrapbookPage 
                    position="left" 
                    pageNumber={currentProjectIndex * 2} 
                    title={leftProject ? "Previous Work" : "Introduction"}
                    bgColor="#F4F1BB"
                  >
                     {leftProject ? (
                         <div className="w-full h-full flex items-center justify-center p-6"> 
                            <ProjectCard project={leftProject} />
                         </div>
                     ) : (
                         <div className="flex flex-col items-center justify-center h-full text-center space-y-8 p-8">
                             <HandwrittenLabel text="My Journey So Far" rotation={-2} color="#031927" bgColor="#9BC1BC" className="text-4xl mb-6"/>
                             <p className="text-2xl text-[#031927] leading-relaxed max-w-lg mx-auto">
                                 Welcome to my collection of digital experiments and professional projects. 
                             </p>
                             <p className="text-xl text-[#22333B] max-w-md mx-auto">
                                 Flip through the pages to see what I've been working on lately!
                             </p>
                             <div className="w-40 h-2 bg-[#ED6A5A] rounded-full mx-auto my-6"/>
                             
                             {/* Table of Contents */}
                             <div className="bg-white/60 p-6 rounded-lg border-2 border-[#031927] max-w-md w-full">
                                <h3 className="handwritten text-2xl font-bold text-[#031927] mb-4">Table of Contents</h3>
                                <ul className="space-y-3 text-left">
                                  {projectsData.map((project, index) => (
                                    <li key={project.id}>
                                      <button
                                        onClick={() => setCurrentProjectIndex(index)}
                                        className="text-[#22333B] hover:text-[#ED6A5A] transition-colors text-base font-medium flex items-start gap-2 w-full text-left group"
                                      >
                                        <span className="text-[#ED6A5A] font-bold min-w-[24px]">{index + 1}.</span>
                                        <span className="group-hover:underline">{project.title}</span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                         </div>
                     )}
                  </ScrapbookPage>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Page (Current Project) */}
            <div className="w-full md:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                    key={`right-${currentProjectIndex}`}
                    initial={{ opacity: 0, rotateY: 10 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -10 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                >
                  <ScrapbookPage 
                    position="right" 
                    pageNumber={currentProjectIndex * 2 + 1}
                    title="Current Project"
                    bgColor="#fffbf0"
                  >
                    <div className="w-full h-full flex items-center justify-center p-6">
                        <ProjectCard project={rightProject} />
                    </div>
                  </ScrapbookPage>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Button Right */}
            <button 
              onClick={() => {
                if (currentProjectIndex === projectsData.length - 1) {
                  setViewState('cover');
                } else {
                  handleNext();
                }
              }}
              className="hidden xl:flex absolute -right-16 z-50 top-1/2 -translate-y-1/2 p-4 bg-[#9BC1BC] text-[#031927] rounded-full shadow-[4px_4px_0px_#031927] border-2 border-[#031927] hover:scale-110 hover:shadow-none transition-all"
              aria-label={currentProjectIndex === projectsData.length - 1 ? "Return Home" : "Next Page"}
            >
                {currentProjectIndex === projectsData.length - 1 ? (
                  <Home size={36} />
                ) : (
                  <ChevronRight size={36} />
                )}
            </button>
            
             {/* Mobile Navigation Controls */}
            <div className="md:hidden flex justify-between items-center bg-[#22333B] p-4 text-[#F4F1BB]">
              <button onClick={handlePrevious} className="flex items-center gap-1 font-bold">
                <ChevronLeft size={24}/> Prev
              </button>
              <span className="text-base">Project {currentProjectIndex + 1} of {projectsData.length}</span>
                <button 
                  onClick={() => {
                    if (currentProjectIndex === projectsData.length - 1) {
                      setViewState('cover');
                    } else {
                      handleNext();
                    }
                  }}
                  className="flex items-center gap-1 font-bold"
                >
                  {currentProjectIndex === projectsData.length - 1 ? (
                    <>Home <Home size={24}/></>
                  ) : (
                    <>Next <ChevronRight size={24}/></>
                  )}
                </button>
            </div>

        </div>

      </div>
    );
  };

  const renderSidebar = () => (
     <motion.div
        key="sidebar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.67, ease: "easeOut" }}
        className="w-full lg:w-auto lg:max-w-[600px] flex flex-col justify-center mb-8 lg:mb-0 relative z-20 shrink-0" 
     >
        {/* Decorative Tape for Sidebar */}
        <WashiTape color="#ED6A5A" rotation={-3} width="160px" className="-top-4 left-8 z-30 hidden lg:block" />

        <div className="bg-gradient-to-br from-[#F4F1BB] to-[#FFDAC1] rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden border-2 border-[#031927]/10">
           {/* Subtle Texture Overlay */}
           <div className="absolute inset-0 opacity-10 paper-texture pointer-events-none" />
           
           <div className="relative z-10">
               <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.27 }}
                  className="text-3xl md:text-5xl font-bold text-[#031927] mb-6 font-serif tracking-tight"
               >
                  Hey, I'm <span className="text-[#ED6A5A] inline-block transform -rotate-2">Manya!</span>
               </motion.h1>

               <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-5 text-base md: text:lg md:text-xl text-[#22333B] leading-relaxed"
               >
                  <p className="text-base md:text-lg">
                    I'm a creative developer who builds things that live on the internet. Here's my <a href="https://drive.google.com/file/d/1c9mxW-w5R0yQmkfAnZg_VLAMrcwhhSZk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#ED6A5A] underline font-bold hover:text-[#031927] transition-colors">resume</a>.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed text-[#22333B]">I'm a computer science student at the <strong>University of Waterloo</strong> passionate about building things at the intersection of software and hardware, from noise-cancelling tech to aerospace data pipelines. My experience spans researching electrochemistry at Stanford, leading robotics teams, and full-stack development, with a focus on AI, data analysis, and making complex systems work.</p>
            <p className="text-sm md:text-base leading-relaxed text-[#22333B]">I work primarily with <strong>Python (NumPy, Pandas, PyTorch, TensorFlow), Java, C/C++, and JavaScript/React.</strong> I'm learning Linux right now, and I'm currently developing a <strong>GNSS satellite simulation and web applications for Women in Aerospace Canada.</strong> I'm also passionate about tech x education in my volunteer work, and I tutor in my free time.</p>
            <p className="text-sm md:text-base leading-relaxed text-[#22333B]">I'm always open to collaborating on projects involving robotics, data science, or creative problem-solving!</p>
                  <p>
                    From <strong className="text-[#031927]">tutoring and education platforms</strong> to <strong className="text-[#031927]">satellite simulations</strong>, 
                    I enjoy turning complex ideas into playful, interactive experiences.
                  </p>
                  <p className="text-xs md:text-base italic opacity-80 pt-2 border-t border-[#031927]/10">
                    This scrapbook is a collection of my journey, experiments, and professional work. It's a little messy and a work in progress, just like me :)
                  </p>
               </motion.div>

               <motion.button 
                  onClick={handleOpenScrapbook}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ x: 10 }}
                  transition={{ delay: 0.53 }}
                  className="mt-6 md:mt-8 flex items-center gap-2 md: gap-3 text-[#031927] font-bold text-lg md:text-xl group w-full text-left"
               >
                  <span className="border-b-2 border-[#ED6A5A]">Check out my scrapbook portfolio</span>
                  <ArrowRight className="group-hover:text-[#ED6A5A] transition-colors" size={24} />
               </motion.button>
           </div>
        </div>
     </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Manya's Portfolio</title>
        <meta 
          name="description" 
          content="Explore Manya's creative portfolio showcasing tutoring platforms, AI projects, satellite simulations, and fun experiments." 
        />
      </Helmet>
      
      {/* Main Container */}
      <div className="min-h-screen bg-[#22333B] flex flex-col items-center justify-center p-4 lg:p-8 overflow-x-hidden relative">
        
        {/* Layout Container */}
        {/* Adjusted gap and max-width for better centering and close proximity */}
        <div className={`w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center transition-all duration-900 ease-in-out ${viewState === 'cover' ? 'justify-center gap-8 lg:gap-12' : 'justify-center h-full'}`}>
            
            {/* Sidebar Section */}
            <AnimatePresence mode="wait">
                {viewState === 'cover' && renderSidebar()}
            </AnimatePresence>

            {/* Scrapbook Section */}
            <motion.div 
                layout
                transition={{ duration: 0.93, ease: [0.25, 0.1, 0.25, 1.0] }}
                // Changed width logic: use auto width in cover mode to allow packing with gap
                className={`flex justify-center items-center transition-all duration-900 ${viewState === 'cover' ? 'w-full lg:w-auto shrink-0' : 'w-full h-full'}`}
            >
                <AnimatePresence mode="wait">
                    {viewState === 'cover' ? (
                        <motion.div
                            key="cover-wrapper"
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.53 } }}
                            className="w-full max-w-2xl"
                        >
                            <ScrapbookCover onOpen={handleOpenScrapbook} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="book-wrapper"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.27 }}
                            className="w-full"
                        >
                            {renderBookContent()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

        </div>
      </div>
    </>
  );
};

export default PortfolioPages;