import React, { ButtonHTMLAttributes } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
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

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500';
  
  const variants = {
    primary: 'bg-primary-950 text-white hover:bg-primary-800 dark:bg-white dark:text-primary-950 dark:hover:bg-primary-100',
    secondary: 'bg-accent-600 text-white hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600',
    outline: 'border border-primary-950 text-primary-950 hover:bg-primary-50 dark:border-white dark:text-white dark:hover:bg-primary-800/30',
    text: 'text-primary-950 hover:text-primary-700 hover:bg-primary-50 dark:text-white dark:hover:text-primary-200 dark:hover:bg-primary-800/30',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const iconClasses = icon ? (
    iconPosition === 'left' 
      ? 'space-x-2' 
      : 'flex-row-reverse space-x-2 space-x-reverse'
  ) : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02, z: 20 }}
      whileTap={{ scale: 0.98 }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${iconClasses} ${className}`}
      {...props}
    >
      {icon && icon}
      <span>{children}</span>
    </motion.button>
  );
};