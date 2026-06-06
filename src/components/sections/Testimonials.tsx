import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { TESTIMONIALS } from '../../constants/data';
import { slideUp, staggerContainer } from '../../animations/variants';

export const Testimonials = () => {
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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-900 leading-tight tracking-tight">
              What Clients <br className="hidden sm:block" />
              Say About Us.
            </h2>
          </motion.div>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="text-base leading-relaxed text-primary-700 font-light max-w-sm md:text-right mt-4 sm:mt-6 md:mt-0"
          >
            Hear from the people who live and work in the spaces we have built.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={slideUp}
              className="flex flex-col h-full border-t border-primary-200/60 pt-8 sm:pt-10 group"
            >
              <div className="flex gap-1 mb-6 sm:mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-[12px] text-accent-600 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-primary-900 leading-snug mb-8 sm:mb-12 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex flex-col gap-1 mt-auto">
                <div className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-primary-900 font-semibold">
                  {testimonial.name}
                </div>
                <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.1em] text-primary-400">
                  {testimonial.role}
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};