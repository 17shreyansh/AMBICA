import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { TESTIMONIALS } from '../../constants/data';
import { slideUp, staggerContainer } from '../../animations/variants';
import { Testimonial } from '../../types';

// 1. Extracted Card Component for better readability and maintainability
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  // Safe initial extraction: handles single names and multiple spaces safely
  const initials = testimonial.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    // Semantic HTML: <figure> is the standard wrapper for quotes and their authors
    <motion.figure
      variants={slideUp}
      className="flex flex-col h-full bg-stone-50 p-4 sm:p-5 border border-primary-200/30 rounded-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden shrink-0 snap-center w-[85vw] sm:w-[45vw] lg:w-auto"
    >
      {/* Decorative Quote - hidden from screen readers to prevent it being read aloud */}
      <div
        aria-hidden="true"
        className="absolute -top-1 -right-1 text-[80px] sm:text-[100px] font-serif text-stone-200/40 select-none pointer-events-none group-hover:text-primary-200/30 transition-colors duration-500 leading-none"
      >
        &ldquo;
      </div>

      {/* Accessible Star Rating */}
      <div
        className="flex gap-0.5 mb-3 relative z-10"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="text-[9px] text-accent-600 transition-transform duration-300 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Semantic Blockquote & Typographic Quotes */}
      <blockquote className="text-sm sm:text-base font-serif text-primary-900 leading-relaxed mb-5 flex-grow relative z-10 font-medium">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Semantic Figcaption for the author details */}
      <figcaption className="flex items-center gap-2 mt-auto pt-3 border-t border-primary-200/50 relative z-10">
        <div
          aria-hidden="true"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-900 text-stone-50 flex items-center justify-center font-sans font-semibold text-[9px] tracking-widest shrink-0 transition-colors duration-300 group-hover:bg-accent-600"
        >
          {initials}
        </div>
        <div className="flex flex-col gap-0.5">
          {/* <cite> tag for the author's name */}
          <cite className="not-italic font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-primary-900 font-semibold">
            {testimonial.name}
          </cite>
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.1em] text-primary-500 line-clamp-2 leading-snug">
            {testimonial.role}
          </span>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-stone-100 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 lg:mb-12">
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

          <div className="flex flex-col items-start md:items-end mt-4 sm:mt-6 md:mt-0">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
              className="text-base leading-relaxed text-primary-700 font-light max-w-sm md:text-right"
            >
              Hear from the people who live and work in the spaces we have built.
            </motion.p>
            
            {/* Mobile/Tablet Navigation Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mt-4 lg:hidden"
            >
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 flex items-center justify-center border border-primary-300 rounded-full text-primary-900 hover:bg-primary-900 hover:text-stone-50 transition-colors"
                aria-label="Previous testimonial"
              >
                &lt;
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 flex items-center justify-center border border-primary-300 rounded-full text-primary-900 hover:bg-primary-900 hover:text-stone-50 transition-colors"
                aria-label="Next testimonial"
              >
                &gt;
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={scrollContainerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex lg:grid lg:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};