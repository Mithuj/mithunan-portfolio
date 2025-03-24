import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, ExternalLink, Award } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Hult Prize 2025",
    issuer: "Hult Prize Sri Lanka",
    date: "2025",
    image: "../../../public/images/certificates/hultprize.jpg",
    description: "Participated in an intensive AI bootcamp covering machine learning fundamentals, deep learning, and practical AI applications.",
  },
  {
    id: 2,
    title: "Hacker Rank Java Certification",
    issuer: "HackerRank",
    date: "2024",
    image: "../../../public/images/certificates/java hackerRank.png",
    description: "Recognition for active participation and contributions in IEEE student branch activities and technical events.",
  },
  {
    id: 3,
    title: "LinkedIn Java Certifications",
    issuer: "LinkedIn",
    date: "2024",
    image: "../../../public/images/certificates/java oop.png",
    description: "Certificate of Recognition for participating in Haxmas 2024 hackathon in collaboration with Ascentic.",
  },
  // Add more certificates here for testing "See More" functionality
  {
    id: 4,
    title: "Figma Certification",
    issuer: "LinkedIn",
    date: "2025",
    image: "../../../public/images/certificates/Figma.png",
    description: "Advanced React.js development certification covering modern practices and patterns.",
  },
  {
    id: 5,
    title: "Spring Boot Certification",
    issuer: "LinkedIn",
    date: "2024",
    image: "../../../public/images/certificates/springboot.png",
    description: "Comprehensive Spring Boot certification for enterprise application development.",
  },
  {
    id: 6,
    title: "AIDSL Certification",
    issuer: "AIDSL",
    date: "2023",
    image: "../../../public/images/certificates/AIDSL.png",
    description: "Comprehensive Spring Boot certification for enterprise application development.",
  },
  {
    id: 7,
    title: "React Certification",
    issuer: "LinkedIn",
    date: "2024",
    image: "../../../public/images/certificates/React.png",
    description: "Comprehensive Spring Boot certification for enterprise application development.",
  },
  {
    id: 8,
    title: "HackerRank Python Certification",
    issuer: "HackerRank",
    date: "2025",
    image: "../../../public/images/certificates/python.png",
    description: "Comprehensive Spring Boot certification for enterprise application development.",
  },
  
];

const CertificateCard = ({ certificate, onClick }: { certificate: Certificate, onClick: () => void }) => {
  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform x and y into rotation values
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  // Handle mouse move for 3D effect
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }
  
  // Reset on mouse leave
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  
  return (
    <motion.div
      style={{ 
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white/80 rounded-xl overflow-hidden cursor-pointer shadow-lg border border-white/40 backdrop-blur-sm transform-gpu"
      onClick={onClick}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        borderColor: "rgba(255,255,255,0.8)"
      }}
    >
      <motion.div 
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-4 right-4 bg-primary text-white p-1.5 rounded-full"
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          <Award size={18} />
        </motion.div>
      </motion.div>
      <div className="p-6 bg-white/50">
        <h3 className="text-xl font-semibold text-primary mb-2">{certificate.title}</h3>
        <p className="text-text-secondary text-sm">{certificate.issuer}</p>
        <p className="text-accent font-medium text-sm mt-1">{certificate.date}</p>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        stiffness: 70,
        damping: 18
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-background/95 to-background-alt relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-40 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={headerVariants} className="text-center mb-16">
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Certifications</h2>
              <div className="h-1 w-48 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </motion.div>
            <motion.p 
              className="text-lg text-text-secondary/80 mt-4 max-w-2xl mx-auto"
              variants={headerVariants}
            >
              Professional certifications and achievements throughout my career
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence>
              {displayedCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  variants={itemVariants}
                >
                  <CertificateCard 
                    certificate={cert} 
                    onClick={() => setSelectedCert(cert)} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {certificates.length > 3 && (
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="bg-white/30 backdrop-blur-md hover:bg-white/50 border border-white/50 shadow-lg px-8 py-4 rounded-full text-primary font-semibold flex items-center justify-center space-x-2 mx-auto transition-all duration-300"
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

          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 30 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl max-w-2xl w-full overflow-hidden border border-white/50 shadow-2xl"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <motion.button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="text-xl">×</span>
                    </motion.button>
                  </div>
                  
                  <div className="p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-primary mb-2">{selectedCert.title}</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <p className="text-lg font-semibold text-secondary">{selectedCert.issuer}</p>
                        <span className="text-text-secondary">•</span>
                        <p className="text-accent font-medium">{selectedCert.date}</p>
                      </div>
                      <p className="text-text-secondary leading-relaxed mb-6">{selectedCert.description}</p>
                      
                      {selectedCert.link && (
                        <motion.a
                          href={selectedCert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </motion.div>
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

export default Certifications;