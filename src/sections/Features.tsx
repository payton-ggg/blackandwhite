import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, Zap, LineChart, Settings, RefreshCw } from 'lucide-react';
import { AnimatedElement } from '../components/AnimatedElement';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement delay={delay} animation="rotate3d">
      <motion.div 
        className="p-6 rounded-xl border border-primary-200 dark:border-primary-800 bg-white dark:bg-primary-900 h-full"
        whileHover={{ 
          scale: 1.05,
          rotateX: 10,
          rotateY: 10,
          z: 50,
          transition: { duration: 0.3 }
        }}
        style={{
          transformPerspective: 1200,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-800 text-primary-950 dark:text-white mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-primary-600 dark:text-primary-300">{description}</p>
      </motion.div>
    </AnimatedElement>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovative Design',
      description: 'Our minimalist approach creates beautiful interfaces that blend form and function seamlessly.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Scalable Architecture',
      description: 'Build on a foundation that grows with your business, from startup to enterprise scale.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your applications run at peak efficiency across all devices.'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Data Driven',
      description: 'Make informed decisions with powerful analytics and clear visualizations of key metrics.'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Continuous Updates',
      description: 'Stay ahead with regular updates, new features, and ongoing improvement cycles.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Fully Customizable',
      description: 'Tailor every aspect of your experience with flexible configuration options.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-primary-50 dark:bg-primary-900/40">
      <div className="container-custom">
        <AnimatedElement className="text-center max-w-3xl mx-auto mb-16" animation="flip">
          <h2 className="heading-lg mb-4">Powerful Features, Simple Design</h2>
          <p className="text-xl text-primary-600 dark:text-primary-300">
            Our platform combines powerful capabilities with intuitive design, creating experiences that delight users and drive results.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};