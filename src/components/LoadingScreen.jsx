import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setShowContent(true);
            setTimeout(onComplete, 1000);
          }, 300);
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
      <AnimatePresence>
        {isLoading && (
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
              <motion.h1 className="text-8xl md:text-[10rem] font-inter font-normal text-black">
                {progress}%
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The page content that becomes visible as the loading screen slides up */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="fixed inset-0 z-[9998]"
            initial={{ y: '100%' }}
            animate={{ 
              y: '0%',
              transition: { 
                duration: 1.2,
                ease: [0.77, 0, 0.175, 1],
                delay: 0.1
              }
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreen;