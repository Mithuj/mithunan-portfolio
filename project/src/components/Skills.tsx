import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Layout, BookOpen, BriefcaseIcon } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = {
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    'Software Development': ['Java', 'Python', 'Spring Boot'],
    'Database Management': ['MySQL', 'Supabase'],
    'UI/UX Designing': ['Figma', 'Canva']
  };

  const education = [
    {
      period: '2024-2027',
      degree: 'BSc (Hons) Computer Science',
      institution: 'University of Westminster'
    },
    {
      period: '2023-2024',
      degree: 'Computing Foundation',
      institution: 'Informatics Institute of Technology'
    },
    {
      period: '2008-2022',
      degree: 'Primary & Secondary Education',
      institution: 'Jaffna Hindu College'
    }
  ];

  const experience = [
    {
      title: 'Technical Writer',
      description: 'Medium Blogger',
      link: 'https://medium.com/@your-username',
      period: '2023 - Present'
    }
  ];

  // Enhanced Animation variants
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.03,
      rotateZ: 0.5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.12), 0 0 10px rgba(74, 108, 247, 0.2)",
      borderLeftWidth: "6px",
      background: "linear-gradient(to right, rgba(255,255,255,1), rgba(240,245,255,1))",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.4
      }
    })
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05 + 0.5,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.05,
      x: 5,
      color: "#4a6cf7",
      backgroundColor: "rgba(74, 108, 247, 0.08)",
      transition: { duration: 0.2, type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -5, 0],
      scale: 1.2,
      color: "#4a6cf7",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                custom={idx}
                variants={boxVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-transparent hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <motion.div 
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-md"
                  whileHover={{ scale: 1.5, rotate: 45 }}
                />
                
                <motion.h3 
                  custom={idx}
                  variants={textVariants}
                  className="text-xl font-semibold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative z-10"
                >
                  {category}
                </motion.h3>
                <div className="space-y-3">
                  {items.map((skill, skillIdx) => (
                    <motion.div 
                      key={skill} 
                      className="flex items-center space-x-2 p-2 rounded-md"
                      custom={skillIdx}
                      variants={skillItemVariants}
                      whileHover="hover"
                    >
                      <motion.div variants={iconVariants}>
                        <Code className="w-5 h-5 text-secondary" />
                      </motion.div>
                      <span className="text-textDark transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.period}
                custom={idx}
                variants={boxVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-transparent hover:border-secondary transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-secondary/15 to-primary/5 blur-md"
                  whileHover={{ scale: 1.5, rotate: -45 }}
                />
                
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <motion.h3 
                      custom={idx} 
                      variants={textVariants} 
                      className="text-xl font-semibold text-primary"
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p 
                      custom={idx + 0.5} 
                      variants={textVariants} 
                      className="text-textDark"
                    >
                      {edu.institution}
                    </motion.p>
                  </div>
                  <motion.span 
                    custom={idx + 0.3} 
                    variants={textVariants} 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(74, 108, 247, 0.2)" }}
                    className="text-secondary bg-secondary/10 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {edu.period}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.title}
                custom={idx}
                variants={boxVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-transparent hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <motion.div 
                  className="absolute top-1/2 -right-10 w-24 h-24 rounded-full bg-gradient-to-tl from-primary/10 to-secondary/15 blur-md"
                  whileHover={{ scale: 1.5, rotate: 45 }}
                />
                
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <motion.h3 
                      custom={idx} 
                      variants={textVariants} 
                      className="text-xl font-semibold text-primary"
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      custom={idx + 0.5} 
                      variants={textVariants} 
                      className="text-textDark"
                    >
                      {exp.description}
                    </motion.p>
                    <motion.a 
                      custom={idx + 1} 
                      variants={textVariants}
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline inline-block mt-2 hover:text-primary transition-colors duration-300 group"
                      whileHover={{ 
                        scale: 1.05, 
                        x: 3,
                        transition: { type: "spring", stiffness: 400 } 
                      }}
                    >
                      View Blog
                      <motion.span 
                        className="inline-block ml-1"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "mirror", 
                          duration: 1.5 
                        }}
                      >→</motion.span>
                    </motion.a>
                  </div>
                  <motion.span 
                    custom={idx + 0.3} 
                    variants={textVariants}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(74, 108, 247, 0.2)" }}
                    className="text-secondary bg-secondary/10 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {exp.period}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral/95 via-neutral to-primary/5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        
        {/* Added floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/30"
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.7, 0.4, 0.7],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-sm bg-secondary/20"
          animate={{ 
            y: [0, 20, 0], 
            rotate: [0, 180, 360],
            opacity: [0.5, 0.3, 0.5] 
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-md bg-primary/20"
          animate={{ 
            x: [0, 15, 0], 
            rotate: [0, -90, 0],
            opacity: [0.6, 0.3, 0.6] 
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#4a6cf733_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Skills & Experience</span>
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </motion.h2>

          <div className="flex justify-center space-x-8 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-primary text-yellow-100 font-semibold shadow-md'
                  : 'text-textDark hover:bg-primary/10'
              }`}
              onClick={() => setActiveTab('skills')}
            >
              <Code className="w-5 h-5" />
              <span>Skills</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-primary text-yellow-100 font-semibold shadow-md'
                  : 'text-textDark hover:bg-primary/10'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              <BriefcaseIcon className="w-5 h-5" />
              <span>Experience</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-primary text-yellow-100 font-semibold shadow-md'
                  : 'text-textDark hover:bg-primary/10'
              }`}
              onClick={() => setActiveTab('education')}
            >
              <BookOpen className="w-5 h-5" />
              <span>Education</span>
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;