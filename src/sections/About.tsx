import React from 'react';
import { CheckCircle } from 'lucide-react';
import { AnimatedElement } from '../components/AnimatedElement';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  const achievements = [
    { number: '5+', text: 'Years Experience' },
    { number: '200+', text: 'Projects Completed' },
    { number: '50+', text: 'Happy Clients' },
    { number: '15+', text: 'Industry Awards' }
  ];

  const benefits = [
    'Cutting-edge digital solutions',
    'Expert team of designers and developers',
    'Proven track record of success',
    'Dedicated support and maintenance',
    'Competitive pricing and flexible plans',
    'Seamless integration with existing systems'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <AnimatedElement animation="fadeInLeft">
                <div className="aspect-square max-w-lg relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-primary-200 dark:border-primary-800 bg-white dark:bg-primary-900">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-6">
                    <div className="bg-primary-100 dark:bg-primary-800 rounded-lg"></div>
                    <div className="bg-primary-950 dark:bg-white rounded-lg"></div>
                    <div className="bg-primary-950 dark:bg-white rounded-lg"></div>
                    <div className="bg-primary-100 dark:bg-primary-800 rounded-lg"></div>
                  </div>
                </div>
              </AnimatedElement>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg border-2 border-primary-200 dark:border-primary-800 rounded-2xl -z-10 -rotate-6"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500 rounded-full blur-3xl opacity-20 -z-20"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <AnimatedElement animation="fadeInRight">
              <h2 className="heading-lg mb-6">About Black And White</h2>
              <p className="text-lg text-primary-700 dark:text-primary-300 mb-6 leading-relaxed">
                Founded in 2020, Black And White has quickly established itself as a leader in creating minimalist, high-performance digital experiences that blend aesthetics with functionality.
              </p>
              <p className="text-lg text-primary-700 dark:text-primary-300 mb-8 leading-relaxed">
                Our mission is simple: strip away the unnecessary and focus on what truly matters. We believe in the power of clean design, intuitive user experiences, and cutting-edge technology.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {achievements.map((item, index) => (
                  <AnimatedElement key={index} delay={index * 0.1} animation="scale">
                    <div className="text-center">
                      <p className="text-3xl md:text-4xl font-bold text-primary-950 dark:text-white">{item.number}</p>
                      <p className="text-primary-600 dark:text-primary-400 text-sm mt-1">{item.text}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <AnimatedElement key={index} delay={0.2 + index * 0.1} animation="fadeInUp" className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-600 dark:text-accent-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
              
              <Button variant="primary" size="lg">Learn More About Us</Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};