import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const springConfig = {
    stiffness: 300,
    damping: 20,
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

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive background pattern */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-10 dark:opacity-5"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="absolute inset-0 grid grid-cols-6 gap-1">
          {Array(24).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-primary-950 dark:bg-white h-full w-px col-start-1" 
              style={{ left: `${(i * 100) / 24}%` }}
              whileHover={{ scaleY: 1.2, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
          {Array(24).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-primary-950 dark:bg-white w-full h-px row-start-1" 
              style={{ top: `${(i * 100) / 24}%` }}
              whileHover={{ scaleX: 1.2, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </motion.div>
      
      <div className="container-custom pt-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-6"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <div className="flex flex-col space-y-2">
              <motion.h1 
                className="heading-xl text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, z: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                Bold Vision.<br />Minimal Design.
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01, z: 10 }}
              >
                We create exceptional digital experiences through the perfect balance of form and function.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center space-x-6 pt-6"
            >
              <p className="text-primary-600 dark:text-primary-400 text-sm">Trusted by:</p>
              <div className="flex space-x-8">
                {['Acme Inc', 'GlobalTech', 'Startup Co', 'Branding Pro'].map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="text-primary-800 dark:text-primary-200 font-semibold whitespace-nowrap"
                    whileHover={{ 
                      scale: 1.05, 
                      z: 20,
                      textShadow: "0 0 8px rgba(139, 92, 246, 0.3)" 
                    }}
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 1000,
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div 
              className="aspect-[4/3] relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-primary-200 dark:border-primary-800"
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-100 dark:from-primary-900 dark:to-primary-950 flex items-center justify-center">
                <motion.div 
                  className="w-4/5 aspect-video bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05, z: 30 }}
                >
                  <div className="h-6 bg-primary-100 dark:bg-primary-700 flex items-center px-3 gap-1.5">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-primary-300 dark:bg-primary-500"
                      whileHover={{ scale: 1.2, backgroundColor: "#8B5CF6" }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-primary-300 dark:bg-primary-500"
                      whileHover={{ scale: 1.2, backgroundColor: "#8B5CF6" }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-primary-300 dark:bg-primary-500"
                      whileHover={{ scale: 1.2, backgroundColor: "#8B5CF6" }}
                    />
                  </div>
                  <div className="grid grid-cols-5 h-[calc(100%-24px)]">
                    <div className="col-span-1 bg-primary-50 dark:bg-primary-900" />
                    <div className="col-span-4 bg-white dark:bg-primary-800 p-3">
                      <motion.div 
                        className="w-full h-4 rounded bg-primary-200 dark:bg-primary-700 mb-3"
                        whileHover={{ scaleX: 1.02 }}
                      />
                      <motion.div 
                        className="w-4/5 h-4 rounded bg-primary-200 dark:bg-primary-700 mb-6"
                        whileHover={{ scaleX: 1.02 }}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        {[0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="aspect-video rounded bg-primary-100 dark:bg-primary-700"
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: "rgb(139, 92, 246, 0.3)",
                              boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 dark:bg-accent-600 rounded-full blur-xl opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-950 dark:bg-white rounded-full blur-xl opacity-10"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <span className="text-sm text-primary-600 dark:text-primary-400">Scroll to explore</span>
          <div className="w-1 h-8 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-primary-300 dark:bg-primary-700 rounded-full" />
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary-950 dark:bg-white rounded-full" 
              animate={{ height: ['0%', '100%', '0%'] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};