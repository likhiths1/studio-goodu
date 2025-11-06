import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete, children }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      {/* The loading screen that slides up */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            className="fixed inset-0 bg-[#FFF6ED] z-[9999] flex items-end justify-center overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ 
              y: '0%',
              transition: { 
                duration: 0.8,
                ease: [0.77, 0, 0.175, 1]
              }
            }}
            exit={{ 
              y: '-100%',
              transition: { 
                duration: 1.2,
                ease: [0.77, 0, 0.175, 1]
              }
            }}
            onAnimationComplete={(definition) => {
              if (definition === 'exit') {
                onComplete();
              }
            }}
          >
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.6
                }
              }}
            >
              <motion.h1 className="text-8xl md:text-[10rem] font-inter font-normal text-black mb-6">
                {progress}%
              </motion.h1>
              {/* Animated line that expands from center to both sides */}
              <div className="flex justify-center w-full">
                <motion.div 
                  className="h-0.5 bg-black/30 relative overflow-hidden"
                  style={{ width: '60%' }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-black origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: progress / 100,
                      transition: { 
                        duration: 1,
                        ease: [0.16, 0.77, 0.47, 0.97]
                      }
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Content container that becomes visible after loading */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

export default LoadingScreen;