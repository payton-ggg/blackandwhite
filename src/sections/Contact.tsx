import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { AnimatedElement } from '../components/AnimatedElement';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  const contactInfo = [
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: 'Visit Us',
      content: '123 Design Street, Creative City, 10001'
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: 'Call Us',
      content: '+1 (555) 123-4567'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: 'Email Us',
      content: 'hello@blackandwhite.com'
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      title: 'Working Hours',
      content: 'Mon - Fri: 9am - 6pm'
    },
  ];

  const inputClasses = "w-full px-4 py-3 rounded-md border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800 text-primary-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300";

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="text-xl text-primary-600 dark:text-primary-300">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <AnimatedElement animation="fadeInLeft">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-950 dark:text-white mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="py-2 px-4 rounded-md border border-primary-200 dark:border-primary-700 text-primary-950 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="lg:col-span-3">
            <AnimatedElement animation="fadeInRight">
              <div className="bg-white dark:bg-primary-900 rounded-xl shadow-xl p-8 border border-primary-100 dark:border-primary-800">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg p-4 flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-green-700 dark:text-green-300 text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className={inputClasses}
                      />
                    </div>
                    
                    <div className="text-right">
                      <Button
                        type="submit"
                        variant="primary"
                        icon={<Send className="w-4 h-4" />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};