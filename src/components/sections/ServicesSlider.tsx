import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SERVICES } from '../../constants/data';
import { slideUp } from '../../animations/variants';

export const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => prev === 0 ? SERVICES.length - 1 : prev - 1);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex(prev => prev === SERVICES.length - 1 ? 0 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-stone-100 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="max-w-xl"
          >
            <span className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-600 mb-4 sm:mb-6">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-900 leading-tight tracking-tight">
              What We Do.
            </h2>
          </motion.div>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="text-base leading-relaxed text-primary-700 font-light max-w-sm md:text-right mt-4 sm:mt-6 md:mt-0"
          >
            Everything you need to build and design your perfect space, from start to finish.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {SERVICES.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={service.id} className="min-w-full px-2 sm:px-4 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
                      
                      <div className="lg:col-span-7 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden relative bg-primary-200">
                        <img
                          src={service.image}
                          alt={service.title}
                          className={`w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                            isActive ? 'scale-100' : 'scale-110'
                          }`}
                        />
                        <div className="absolute inset-0 border border-primary-900/10 pointer-events-none" />
                      </div>

                      <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center py-4 sm:py-6">
                        <div className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-primary-400 mb-4 sm:mb-6">
                          0{index + 1}
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-primary-900 mb-4 sm:mb-6">
                          {service.title}
                        </h3>
                        
                        <p className="text-base leading-relaxed text-primary-700 font-light mb-6 sm:mb-8 lg:mb-10">
                          {service.description}
                        </p>
                        
                        <ul className="flex flex-col border-t border-primary-200/60">
                          {service.features.map((feature, i) => (
                            <li 
                              key={i} 
                              className="py-3 sm:py-4 border-b border-primary-200/60 font-sans text-sm text-primary-700 flex items-center gap-3 sm:gap-4"
                            >
                              <span className="w-1 h-1 bg-accent-600 block flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mt-12 sm:mt-16 md:mt-20">
            
            {/* Previous Arrow */}
            <button
              onClick={() => setActiveIndex(prev => prev === 0 ? SERVICES.length - 1 : prev - 1)}
              aria-label="Previous slide"
              className="p-3 sm:p-4 border border-primary-300 hover:border-primary-900 hover:bg-primary-900 hover:text-stone-50 text-primary-900 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Line Indicators */}
            <div className="flex items-center gap-3 sm:gap-4">
              {SERVICES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
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
              onClick={() => setActiveIndex(prev => prev === SERVICES.length - 1 ? 0 : prev + 1)}
              aria-label="Next slide"
              className="p-3 sm:p-4 border border-primary-300 hover:border-primary-900 hover:bg-primary-900 hover:text-stone-50 text-primary-900 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};