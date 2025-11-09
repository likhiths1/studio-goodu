import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Typewriter({ text = '', delay = 0, speed = 0.03 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const safeText = typeof text === 'string' ? text : String(text ?? '');
  const hasText = safeText.trim().length > 0;
  const controls = useAnimation();

  useEffect(() => {
    if (!hasText) return; // nothing to type
    let currentIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      if (currentIndex < safeText.length) {
        setDisplayedText(prev => prev + safeText[currentIndex]);
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
      setIsTyping(true);
      typeNextCharacter();
    };

    startAnimation();

    return () => {
      clearTimeout(timeoutId);
      setIsTyping(false);
    };
  }, [safeText, hasText, delay, speed, controls]);

  if (!hasText) return null;

  return (
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="inline-block"
    >
      {displayedText}
      {isTyping && (
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
      )}
    </motion.span>
  );
}
