import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { TESTIMONIALS } from '../../constants/data';
import { slideUp, staggerContainer } from '../../animations/variants';

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const initials = testimonial.name
    .split(' ')
    .filter(Boolean)
    .map((n: string) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <motion.figure
      variants={slideUp}
      className="flex flex-col h-full bg-stone-50 p-6 sm:p-8 border border-primary-200/30 rounded-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden shrink-0 snap-center w-full md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
    >
      <div
        aria-hidden="true"
        className="absolute -top-1 -right-1 text-[80px] sm:text-[100px] font-serif text-stone-200/40 select-none pointer-events-none group-hover:text-primary-200/30 transition-colors duration-500 leading-none"
      >
        &ldquo;
      </div>

      <div
        className="flex gap-0.5 mb-4 relative z-10"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <span
            key={i}
            className="text-accent-500 text-sm"
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      <blockquote className="flex-grow mb-6 relative z-10">
        <p className="text-sm sm:text-base leading-relaxed text-primary-700 font-light italic">
          "{testimonial.content}"
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-4 mt-auto border-t border-primary-200/50 pt-4 relative z-10">
        <div 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 font-serif font-medium text-sm sm:text-base border border-primary-200 shrink-0"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-primary-900 font-medium text-base sm:text-lg leading-tight">
            {testimonial.name}
          </span>
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-primary-500 font-semibold mt-1">
            {testimonial.role}
          </span>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate total pages dynamically based on container and scroll width
  useEffect(() => {
    const updatePages = () => {
      if (scrollContainerRef.current) {
        // Using Math.round prevents floating point/gap errors from adding a tiny fraction of a page
        const pages = Math.round(scrollContainerRef.current.scrollWidth / scrollContainerRef.current.clientWidth);
        setTotalPages(pages || 1);
      }
    };

    updatePages();
    window.addEventListener('resize', updatePages);
    return () => window.removeEventListener('resize', updatePages);
  }, [TESTIMONIALS]);

  // Sync scroll position to active index
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const page = Math.round(scrollLeft / clientWidth);
      setActiveIndex(page);
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: pageIndex * scrollContainerRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToPage(activeIndex - 1);
    } else {
      scrollToPage(totalPages - 1); // Wrap around to end
    }
  };

  const scrollRight = () => {
    if (activeIndex < totalPages - 1) {
      scrollToPage(activeIndex + 1);
    } else {
      scrollToPage(0); // Wrap around to start
    }
  };

  // Autoplay
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;
    
    const interval = setInterval(() => {
      scrollRight();
    }, 5000); // 5 seconds
    
    return () => clearInterval(interval);
  }, [isHovered, activeIndex, totalPages]);

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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-900 leading-tight tracking-tight">
              What Clients <br className="hidden sm:block" />
              Say About Us.
            </h2>
          </motion.div>

          <div className="flex flex-col items-start md:items-end mt-6 md:mt-0">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
              className="text-base leading-relaxed text-primary-700 font-light max-w-sm md:text-right"
            >
              Hear from the people who live and work in the spaces we have built.
            </motion.p>
            
            {/* Navigation Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mt-6"
            >
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 flex items-center justify-center border border-primary-300 rounded-full text-primary-900 hover:bg-primary-900 hover:text-stone-50 transition-colors"
                aria-label="Previous testimonial page"
              >
                &lt;
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 flex items-center justify-center border border-primary-300 rounded-full text-primary-900 hover:bg-primary-900 hover:text-stone-50 transition-colors"
                aria-label="Next testimonial page"
              >
                &gt;
              </button>
            </motion.div>
          </div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>

          {/* Pagination Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-4">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  aria-label={`Go to testimonial page ${index + 1}`}
                  className="py-2 focus:outline-none group"
                >
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      index === activeIndex 
                        ? 'w-8 sm:w-12 bg-primary-900' 
                        : 'w-2 sm:w-3 bg-primary-300 group-hover:bg-primary-500 group-hover:w-4 sm:group-hover:w-6'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};