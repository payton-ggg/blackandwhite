import React, { ReactNode } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'rotate3d' | 'flip' | 'tilt';
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  delay = 0,
  className = '',
  animation = 'fadeInUp'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = {
    stiffness: 400,
    damping: 17,
    mass: 0.5
  };

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 30, rotateX: 10 },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30, rotateY: 30 },
      visible: { 
        opacity: 1, 
        x: 0,
        rotateY: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30, rotateY: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        rotateY: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9, rotateX: 15 },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotateX: 0,
        transition: { 
          duration: 0.8, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    rotate3d: {
      hidden: { opacity: 0, rotateX: 90, rotateY: -45, rotateZ: 45 },
      visible: { 
        opacity: 1, 
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        transition: { 
          duration: 1.2, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    flip: {
      hidden: { opacity: 0, rotateY: 180 },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: { 
          duration: 1, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    tilt: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    }
  };

  const style = animation === 'tilt' ? {
    rotateX: springRotateX,
    rotateY: springRotateY,
    transformPerspective: 1200,
    transformStyle: "preserve-3d"
  } : {};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      className={className}
      style={style}
      onMouseMove={animation === 'tilt' ? handleMouseMove : undefined}
      onMouseLeave={animation === 'tilt' ? handleMouseLeave : undefined}
    >
      {children}
    </motion.div>
  );
};