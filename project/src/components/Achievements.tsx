import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X, Award, Calendar } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  mainImage: string;
  additionalImages?: string[];
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Haxmas 2024, Ascentic & RACIIT - Finalist",
    description: "Competing in HAXMAS 2024, organized by Ascentic and the Rotaract Club of IIT, has been an incredible and enriching journey. The event’s three phases—Ideathon, Designathon, and Hackathon—pushed us to think creatively, collaborate effectively, and challenge our limits.Making it to the Top 8 Finalists and presenting our pitch at the finals was a truly inspiring experience.",
    year: "2023",
    mainImage: "../../../public/images/haxmas/haxmas1.png",
    additionalImages: [
      "../../../public/images/haxmas/haxmas2.jpg",
      "../../../public/images/haxmas/haxmas3.jpg",
    ]
  },
  {
    id: 2,
    title: "Travel Tech 3.0, [ 2025 ] Acornic Ventures - Finalist",
    description: "An Incredible Experience at Travel Tech 3.0 by Acornic Ventures. We are proud to have ended as top 5 finalists at Travel Tech 3.0, organized by Acornic Ventures! This journey was an eye-opening experience where we dove deep into problem-solving, market analysis, revenue models, business strategy, and implementation planning.",
    year: "2022",
    mainImage: "../../../public/images/ventures/ventures1.jpg",
    additionalImages: [
      "../../../public/images/ventures/ventures2.jpg",
      "../../../public/images/ventures/ventures3.jpg",
    ]
  }
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

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

  // Handle image navigation in the modal
  const handleNextImage = () => {
    if (!selectedAchievement || !selectedAchievement.additionalImages) return;
    
    const maxIndex = selectedAchievement.additionalImages.length;
    setCurrentImageIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const handlePrevImage = () => {
    if (!selectedAchievement || !selectedAchievement.additionalImages) return;
    
    const maxIndex = selectedAchievement.additionalImages.length;
    setCurrentImageIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  // Get current image source
  const getCurrentImageSrc = () => {
    if (!selectedAchievement) return '';
    
    if (currentImageIndex === 0) {
      return selectedAchievement.mainImage;
    }
    
    return selectedAchievement.additionalImages?.[currentImageIndex - 1] || '';
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-background-alt to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 13, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 17, 
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
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Achievements</h2>
              <div className="h-1 w-48 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto"></div>
            </motion.div>
            <motion.p 
              className="text-lg text-text-secondary/80 mt-4 max-w-2xl mx-auto"
              variants={headerVariants}
            >
              Key milestones and recognition from my professional journey
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedAchievement(achievement);
                  setCurrentImageIndex(0);
                }}
              >
                <motion.div 
                  className="group h-full bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/30"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)", 
                    y: -5 
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: 'easeOut'
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={achievement.mainImage}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    <motion.div 
                      className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white flex items-center space-x-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{achievement.year}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-4 right-4 bg-primary text-white p-1.5 rounded-full"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Award size={18} />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-text-secondary line-clamp-2">
                      {achievement.description}
                    </p>
                    
                    <motion.div 
                      className="mt-4 inline-flex text-primary font-semibold"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ 
                        scale: 1.05, 
                        opacity: 1, 
                        x: 5, 
                        transition: { duration: 0.2 } 
                      }}
                    >
                      View details
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Modal */}
          <AnimatePresence>
            {selectedAchievement && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedAchievement(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 30 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl max-w-3xl w-full overflow-hidden border border-white/50 shadow-2xl"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={getCurrentImageSrc()}
                      alt={selectedAchievement.title}
                      className="w-full h-full object-contain bg-black/80"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.9 }}
                      key={currentImageIndex} // Force re-render animation when image changes
                    />
                    
                    {/* Image navigation controls */}
                    {selectedAchievement.additionalImages && selectedAchievement.additionalImages.length > 0 && (
                      <>
                        <motion.button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight size={24} />
                        </motion.button>
                        
                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {selectedAchievement.additionalImages.length + 1}
                        </div>
                      </>
                    )}
                    
                    <motion.button
                      onClick={() => setSelectedAchievement(null)}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary">{selectedAchievement.title}</h3>
                      <span className="px-4 py-1 bg-secondary/15 text-secondary rounded-full font-medium">
                        {selectedAchievement.year}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{selectedAchievement.description}</p>
                    
                    {/* Thumbnail navigation (optional) */}
                    {selectedAchievement.additionalImages && selectedAchievement.additionalImages.length > 0 && (
                      <div className="mt-6">
                        <p className="text-sm font-medium text-primary mb-2">Gallery:</p>
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          <motion.div
                            className={`w-16 h-16 rounded-md overflow-hidden ${currentImageIndex === 0 ? 'ring-2 ring-primary' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCurrentImageIndex(0)}
                          >
                            <img 
                              src={selectedAchievement.mainImage} 
                              alt="Main" 
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          
                          {selectedAchievement.additionalImages.map((img, idx) => (
                            <motion.div
                              key={idx}
                              className={`w-16 h-16 rounded-md overflow-hidden ${currentImageIndex === idx + 1 ? 'ring-2 ring-primary' : ''}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setCurrentImageIndex(idx + 1)}
                            >
                              <img 
                                src={img} 
                                alt={`Gallery ${idx + 1}`} 
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
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

export default Achievements;
