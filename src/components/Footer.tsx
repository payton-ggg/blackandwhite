import React from 'react';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-100 dark:bg-primary-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 w-1/2 h-full bg-primary-950 dark:bg-white"></div>
                <div className="absolute inset-0 ml-4 w-1/2 h-full bg-white dark:bg-primary-950 border-l border-primary-950 dark:border-white"></div>
              </div>
              <h3 className="text-xl font-bold">Black And White</h3>
            </div>
            <p className="text-primary-700 dark:text-primary-300">
              Creating exceptional digital experiences through minimalist design and powerful functionality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'About', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-700 hover:text-primary-950 dark:text-primary-300 dark:hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary-800 dark:text-primary-200" />
                <span className="text-primary-700 dark:text-primary-300">
                  123 Design Street, Creative City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-800 dark:text-primary-200" />
                <span className="text-primary-700 dark:text-primary-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-800 dark:text-primary-200" />
                <a 
                  href="mailto:hello@blackandwhite.com"
                  className="text-primary-700 hover:text-primary-950 dark:text-primary-300 dark:hover:text-white transition-colors duration-300"
                >
                  hello@blackandwhite.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-950 dark:bg-white text-white dark:text-primary-950 flex items-center justify-center hover:bg-accent-600 dark:hover:bg-accent-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-950 dark:bg-white text-white dark:text-primary-950 flex items-center justify-center hover:bg-accent-600 dark:hover:bg-accent-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-950 dark:bg-white text-white dark:text-primary-950 flex items-center justify-center hover:bg-accent-600 dark:hover:bg-accent-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md border border-primary-300 dark:border-primary-700 bg-white dark:bg-primary-800 text-primary-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button className="px-4 py-2 bg-primary-950 dark:bg-white text-white dark:text-primary-950 rounded-r-md hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors duration-300">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-200 dark:border-primary-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-primary-700 dark:text-primary-400">
              © {currentYear} Black And White. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-primary-700 hover:text-primary-950 dark:text-primary-400 dark:hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-700 hover:text-primary-950 dark:text-primary-400 dark:hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-primary-700 hover:text-primary-950 dark:text-primary-400 dark:hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};