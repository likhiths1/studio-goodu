import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedSection({ children, delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: delay * 0.1,
        ease: [0.16, 0.77, 0.47, 0.97],
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '0px 0px -50px 0px' }}
      transition={{
        duration: 0.8,
        delay: delay * 0.1,
        ease: [0.16, 0.77, 0.47, 0.97],
      }}
    >
      {children}
    </motion.div>
  );
}
