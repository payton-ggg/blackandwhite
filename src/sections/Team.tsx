import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { AnimatedElement } from '../components/AnimatedElement';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, delay }) => {
  return (
    <AnimatedElement delay={delay} animation="tilt">
      <motion.div 
        className="group"
        whileHover={{ z: 50 }}
        style={{
          transformPerspective: 1200,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="relative overflow-hidden rounded-xl bg-primary-100 dark:bg-primary-900 aspect-[3/4]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex justify-center space-x-3">
              <motion.a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white text-primary-950 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, z: 30 }}
                aria-label={`${name}'s Twitter`}
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white text-primary-950 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, z: 30 }}
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href={`mailto:${name.toLowerCase().replace(' ', '.')}@blackandwhite.com`} 
                className="w-8 h-8 rounded-full bg-white text-primary-950 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, z: 30 }}
                aria-label={`Email ${name}`}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-primary-600 dark:text-primary-400">{role}</p>
        </div>
      </motion.div>
    </AnimatedElement>
  );
};

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Emma Carter',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Michael Robinson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Sarah Jackson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'David Kim',
      role: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="team" className="section-padding bg-primary-50 dark:bg-primary-900/40">
      <div className="container-custom">
        <AnimatedElement className="text-center max-w-3xl mx-auto mb-16" animation="flip">
          <h2 className="heading-lg mb-4">Meet Our Team</h2>
          <p className="text-xl text-primary-600 dark:text-primary-300">
            Our talented team of creatives brings diverse expertise and a shared passion for minimal, effective design.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};