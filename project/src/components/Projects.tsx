import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// Define proper interface for project type
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  contributors: string[];
  details: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const projects: Project[] = [
    {
      title: "MemoRaid – Memory Rehabilitation App",
      description: "AI powered Amnesia Rehabilition App. mobile App and Web application",
      tech: ["Dart", "Flutter", "React", "Node.js","Supabase store", "Supabase", "Gemini API", "Ngrok", "CI/CD pipeline", "Postman API"],
      github: "https://github.com",
      contributors: ["Mithunan Jeyamohan", " Avinesh", "Anushikan"," Rishaanth", "Linushankaran", "Shahinya"],
      details: "Developing an interactive application to assist individuals with amnesia using memory exercises, task management tools, and AI insights for cognitive health improvement, Caregivers integration. ( for privacy we are not able to show the full details, contact me directly for more information)"
    },
    {
      title: "Real-Time Event Ticketing Application",
      description: "A full-stack application for event ticket management with real-time updates.",
      tech: ["React", "Spring Boot", "Java", "SQL"],
      github: "https://github.com/Mithuj/Mithunan-Ticket-Booking-System--1.git",
      contributors: ["Mithunan Jeyamohan"],
      details: "Developed a full stack application where vendors can add tickets for their events, and customers can browse and purchase tickets in a simulated environment."
    },
    {
      title: "Charity Donation Platform (Ongoing)",
      description: "A platform enabling users to support various charitable causes with secure transactions. ",
      tech: ["HTML5", "CSS", "JavaScript", "PHP", "Supabase"],
      github: "https://github.com/yourusername/charity-platform",
      contributors: ["Mithunan Jeyamohan", "christy Sharujan", "Kabishan", "Afra"],
      details: "Platform features secure transactions, one-time or recurring donations, real-time project tracking, and impact notifications for transparent donor engagement. ( for privacy we are not able to show the full details, contact me directly for more information)"
    },
    // Additional projects for the "See More" feature
    {
      title: "Real-Time Event Ticketing Application- CLI ",
      description: "A content creation tool leveraging AI to help bloggers and marketers generate engaging content.",
      tech: ["Java"],
      github: "https://github.com/yourusername/ai-content-generator",
      contributors: ["Mithunan Jeyamohan"],
      details: "Developed an AI-powered platform that generates blog posts, social media content, and email campaigns based on user inputs and preferences. The tool includes SEO optimization and sentiment analysis features."
    },
    {
      title: "Your One-Stop Health & Wellness Store",
      description: "An interactive website to buy medicines and health products while promoting wellness through exercise and nutrition tips.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mithuj/first-year-group-project-html-css-javascript.git",
      contributors: ["Mithunan Jeyamohan", "Aathif", "Bathushan"],
      details: "We have created an interactive website using HTML, CSS, and JavaScript, where users can easily buy medicines and health products. With a smooth add-to-cart and checkout process, shopping is hassle-free. Our homepage is engaging, and we also promote health awareness by sharing tips on nutrition, mental wellness, and exercise. A dedicated section offers workout guidance, and our feedback form helps us improve while building a health-conscious community."
    },
    {
      title: "Flight Ticket Booking - CLI",
      description: "A Java-based flight booking system with error handling, allowing users to book, cancel, view seating, and manage tickets efficiently.",
      tech: ["Java"],
      github: "https://github.com/Mithuj/flight_ticket_booking.git",
      contributors: ["Mithunan Jeyamohan"],
      details: "I have developed a flight booking system entirely using Java, ensuring smooth and reliable functionality with perfect error handling. Users can effortlessly book flight tickets, cancel reservations, and find the first available seat. The system allows passengers to input their details, view seating arrangements, and check booked seats for better planning. Purchased tickets are securely stored in a text format for easy record-keeping. Additionally, managers have access to essential insights, including total tickets sold, revenue generated, and passenger details, enabling efficient management of the booking system."
    },
    {
      title: "my Own Portfolio",
      description: "A content creation tool leveraging AI to help bloggers and marketers generate engaging content.",
      tech: ["React"],
      github: "https://github.com/yourusername/ai-content-generator",
      contributors: ["Mithunan Jeyamohan"],
      details: "Developed an AI-powered platform that generates blog posts, social media content, and email campaigns based on user inputs and preferences. The tool includes SEO optimization and sentiment analysis features."
    },
    {
      title: "University students and lectures management system (CLI)",
      description: "An interactive website to buy medicines and health products while promoting wellness through exercise and nutrition tips.",
      tech: ["Python",""],
      github: "https://github.com/Mithuj/first-year-group-project-html-css-javascript.git",
      contributors: ["Mithunan Jeyamohan", "Aathif", "Bathushan"],
      details: "We have created an interactive website using HTML, CSS, and JavaScript, where users can easily buy medicines and health products. With a smooth add-to-cart and checkout process, shopping is hassle-free. Our homepage is engaging, and we also promote health awareness by sharing tips on nutrition, mental wellness, and exercise. A dedicated section offers workout guidance, and our feedback form helps us improve while building a health-conscious community."
    },
    
  ];

  // Determine which projects to display based on showAll state
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-neutral/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Projects
          </motion.h2>
          
          <motion.p 
            className="text-lg text-center text-textDark/70 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A collection of my recent work spanning web development, mobile applications, and machine learning.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <AnimatePresence>
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  layout
                  className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="p-6 relative overflow-hidden group">
                    {/* Decorative element */}
                    <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-primary/10 group-hover:scale-150 transition-all duration-700"></div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{project.title}</h3>
                    <p className="text-textDark mb-4 relative z-10">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end space-x-4 relative z-10">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary/80"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* See More/Less Button */}
          {projects.length > 3 && (
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="bg-white/40 backdrop-blur-md hover:bg-white/60 border border-white/50 shadow-lg px-8 py-4 rounded-full text-primary font-semibold flex items-center justify-center space-x-2 mx-auto transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{showAll ? 'Show Less' : 'See More'}</span>
                {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </motion.button>
            </motion.div>
          )}

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl max-w-2xl w-full p-8 border border-white/50 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-2xl font-bold text-primary mb-4">{selectedProject.title}</h3>
                  <p className="text-textDark mb-6 leading-relaxed">{selectedProject.details}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Contributors:</h4>
                    <ul className="space-y-1">
                      {selectedProject.contributors.map(contributor => (
                        <li key={contributor} className="text-textDark flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {contributor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-primary px-5 py-2.5 rounded-lg border border-primary/80 hover:bg-primary/90"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/5"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;