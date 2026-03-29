import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { PROJECTS } from '../../constants/data';
import { slideUp } from '../../animations/variants';

export const ProjectsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredProjects = PROJECTS.slice(0, 3);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => prev === 0 ? featuredProjects.length - 1 : prev - 1);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex(prev => prev === featuredProjects.length - 1 ? 0 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [featuredProjects.length]);

  return (
    <Section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-stone-50 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="max-w-xl"
          >
            <span className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-600 mb-4 sm:mb-6">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-900 leading-tight tracking-tight">
              Our Best Work.
            </h2>
          </motion.div>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="text-base leading-relaxed text-primary-700 font-light max-w-sm md:text-right mt-4 sm:mt-6 md:mt-0"
          >
            Take a look at some of the homes and offices we are most proud to have built.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredProjects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={project.id} className="min-w-full px-2 sm:px-4 lg:px-0">
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full group overflow-hidden bg-primary-200">
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                          isActive ? 'scale-100' : 'scale-110'
                        }`}
                      />
                      
                      <div className="absolute bottom-0 left-0 w-full md:w-auto md:max-w-xl bg-primary-900 p-6 sm:p-8 md:p-12 transition-transform duration-700 delay-300 ease-out">
                        <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-400 mb-3 sm:mb-4 font-semibold">
                          {project.category} &nbsp;—&nbsp; {project.year}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif text-stone-50 mb-3 sm:mb-4 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed opacity-90">
                          {project.description}
                        </p>
                      </div>

                      <div className="absolute inset-0 border border-primary-900/10 pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-8">
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Previous Arrow */}
              <button
                onClick={() => setActiveIndex(prev => prev === 0 ? featuredProjects.length - 1 : prev - 1)}
                aria-label="Previous project"
                className="p-3 sm:p-4 border border-primary-300 hover:border-primary-900 hover:bg-primary-900 hover:text-stone-50 text-primary-900 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Line Indicators */}
              <div className="flex items-center gap-3 sm:gap-4">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                    className="py-3 sm:py-4 focus:outline-none group"
                  >
                    <div 
                      className={`h-[1px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        index === activeIndex 
                          ? 'w-12 sm:w-16 bg-primary-900' 
                          : 'w-4 sm:w-6 bg-primary-300 group-hover:bg-primary-500 group-hover:w-8 sm:group-hover:w-10'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Next Arrow */}
              <button
                onClick={() => setActiveIndex(prev => prev === featuredProjects.length - 1 ? 0 : prev + 1)}
                aria-label="Next project"
                className="p-3 sm:p-4 border border-primary-300 hover:border-primary-900 hover:bg-primary-900 hover:text-stone-50 text-primary-900 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* View All Button */}
            <div>
              <Link
                to="/projects"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 lg:px-10 border border-primary-900 text-primary-900 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] hover:bg-primary-900 hover:text-stone-50 transition-colors duration-300"
              >
                View All Projects
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
};