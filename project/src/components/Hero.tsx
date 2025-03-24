import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral via-neutral/95 to-primary/10 z-0"></div>
      
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
      
      {/* Modern grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:32px_32px] z-0 opacity-40"></div>

      {/* Floating elements for visual interest */}
      <motion.div 
        className="absolute top-1/4 left-[15%] w-6 h-6 rounded-md bg-primary/20 hidden md:block"
        animate={{ 
          y: [0, -30, 0], 
          rotate: [0, 45, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-[30%] right-[20%] w-8 h-8 rounded-full bg-secondary/20 hidden md:block"
        animate={{ 
          y: [0, 40, 0], 
          x: [0, -20, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="md:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-primary/80 text-lg md:text-xl font-medium mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.h2>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 drop-shadow-sm leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Hi, I'm Mithunan Jeyamohan
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl font-semibold text-textDark mb-6 h-8">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-textDark/80 text-base md:text-lg mb-8 max-w-xl">
              I craft digital experiences with code, blending creativity with technical expertise to build innovative web applications.
            </p>
            
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(var(--color-primary-rgb), 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >→</motion.span>
              </motion.button>
              
              <motion.a
                href="#contact"
                className="border-2 border-primary/70 text-primary hover:bg-primary/10 px-6 py-[10px] rounded-lg text-base font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
            
            {/* Social icons */}
            <div className="flex items-center space-x-6 mt-8 justify-center md:justify-start">
              <motion.a 
                href="https://github.com/mithunan" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-textDark hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/mithunan" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-textDark hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a 
                href="mailto:mithunan.j@gmail.com"
                className="text-textDark hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Animated rings around the profile picture */}
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute -inset-8 rounded-full border-2 border-dashed border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-md"></div>
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-[2px] z-0"></div>
              
              {/* Profile image */}
              <img
                src="/mithunan.jpg"
                alt="Mithunan Jeyamohan"
                className="rounded-full w-full h-full object-cover shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-4 border-secondary/80 z-20"></div>
              
              {/* Enhanced glow effect */}
              <motion.div 
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 opacity-60 blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#skills"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
      >
        <ChevronDown size={28} className="text-primary" />
      </motion.a>
    </section>
  );
};

export default Hero;