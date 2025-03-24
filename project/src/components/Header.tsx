import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href to the PDF file
    link.href = '/Mithunan Jeyamohan CV.pdf';
    
    // Set download attribute with the filename
    link.download = 'Mithunan Jeyamohan CV.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-primary'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          >
            MJ
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative">
                <motion.a
                  href={item.href}
                  className={`text-textDark hover:text-primary transition-colors py-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              </motion.div>
            ))}
            <motion.button
              className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2 overflow-hidden relative"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              onClick={handleDownloadCV}
            >
              
              <motion.div
                className="absolute inset-0 bg-primary-dark"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "easeInOut" }}
              />
              
              <span className="relative z-10 flex items-center space-x-2">
                <Download size={18} />
                <span>CV</span>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-textDark"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-textDark hover:text-primary transition-colors ${
                      activeSection === item.href.substring(1) ? 'text-primary font-medium' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: navItems.indexOf(item) * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button 
                  className="bg-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-fit"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                >
                  <Download size={18} />
                  <span>CV</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;