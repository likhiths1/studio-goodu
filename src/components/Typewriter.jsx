import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Typewriter({ text, delay = 0, speed = 0.03 }) {
  const [displayedText, setDisplayedText] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        currentIndex++;
        timeoutId = setTimeout(typeNextCharacter, speed * 1000);
      }
    };

    const startAnimation = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay }
      });
      
      setDisplayedText('');
      typeNextCharacter();
    };

    startAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, delay, speed, controls]);

  return (
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="inline-block"
    >
      {displayedText}
      <motion.span 
        className="inline-block w-[2px] h-6 bg-black/70 ml-1 align-middle"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          transition: { 
            repeat: Infinity, 
            duration: 0.8,
            delay: 0.3
          } 
        }}
      />
    </motion.span>
  );
}
