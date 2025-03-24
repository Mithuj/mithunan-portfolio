import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      }
    })
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary/5 z-0"></div>
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        
        {/* Abstract shapes */}
        <svg className="absolute top-20 left-10 w-40 h-40 text-primary/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M43.2,-68.1C57.1,-62.4,70.2,-52.8,75.1,-39.8C80,-26.8,76.8,-10.4,74.2,5.1C71.6,20.7,69.6,35.3,61.9,46.7C54.2,58.1,40.7,66.2,26.3,70.6C11.9,75.1,-3.3,75.9,-18.9,73C-34.4,70.1,-50.3,63.5,-60.2,51.8C-70.1,40.1,-74.1,23.2,-76.1,5.8C-78.1,-11.6,-78.1,-29.7,-70.3,-43.6C-62.5,-57.5,-46.9,-67.3,-31.4,-72C-16,-76.6,-0.7,-76.1,13.5,-74.2C27.7,-72.3,54.9,-69,71.3,-58.9C87.8,-48.9,93.5,-32.1,89.4,-18C85.3,-3.8,71.3,7.7,64.3,22.2C57.3,36.7,57.3,54.2,49.2,64.4C41,74.6,24.7,77.6,8.9,77.9C-6.9,78.2,-22.1,76,-35.6,69.7C-49.1,63.5,-60.9,53.3,-68.6,40.2C-76.4,27.1,-80.1,11.1,-79.3,-4.6C-78.5,-20.2,-73.2,-35.4,-63.9,-48.3C-54.5,-61.2,-41.1,-71.8,-26.6,-75.9C-12.2,-80,-6.1,-77.7,3.8,-78.8C13.7,-79.9,27.4,-84.4,37.5,-82C47.7,-79.5,54.3,-70.1,43.2,-68.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-56 h-56 text-secondary/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-73.1C62.3,-67.3,75.2,-55.9,82.1,-41.3C89,-26.6,89.9,-8.8,85.6,6.6C81.2,21.9,71.7,34.8,61.2,47.2C50.7,59.5,39.3,71.3,24.5,77.6C9.7,83.9,-8.4,84.6,-23.2,78.9C-38,73.2,-49.6,61,-59.2,47.4C-68.8,33.8,-76.4,18.8,-77.7,2.8C-79,-13.3,-74.1,-30.4,-64.3,-42.9C-54.6,-55.4,-40,-63.2,-25.6,-68.7C-11.1,-74.3,3.2,-77.5,17.7,-77.6C32.2,-77.7,47,-78.8,47.7,-73.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About Me</span>
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </motion.h2>
          
          <div className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <motion.p 
              className="text-lg text-textDark mb-6 leading-relaxed"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              I am a <span className="font-semibold text-primary">second-year B.Sc. (Hons) Computer Science student</span> specializing in full-stack development 
              and software engineering. With a strong foundation in <span className="font-semibold text-secondary">React, Java, Spring Boot, and Python</span>, 
              I've developed various applications ranging from real-time ticketing systems to AI-powered 
              healthcare solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-textDark mb-6 leading-relaxed"
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Currently, I'm focusing on <span className="font-semibold text-primary">Machine Learning and intelligent applications</span>, with a passion for 
              building data-driven solutions that make a real impact. My experience includes working with 
              modern technologies like <span className="font-semibold text-secondary">Supabase, TensorFlow, and various cloud platforms</span>.
            </motion.p>
            
            <motion.p 
              className="text-lg text-textDark leading-relaxed"
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              I'm always eager to learn new technologies and take on challenging projects that push my 
              boundaries and contribute to meaningful solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;