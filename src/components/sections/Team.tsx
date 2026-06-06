import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { TEAM } from '../../constants/data';
import { slideUp, staggerContainer } from '../../animations/variants';

export const Team = () => {
  return (
    <Section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-stone-100 overflow-hidden">
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
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-900 leading-tight tracking-tight">
              The People <br className="hidden sm:block" />
              Behind the Work.
            </h2>
          </motion.div>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="text-base leading-relaxed text-primary-700 font-light max-w-sm md:text-right mt-4 sm:mt-6 md:mt-0"
          >
            Meet the experienced builders and designers who bring your ideas to life.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16"
        >
          {TEAM.map((member) => (
            <motion.div key={member.id} variants={slideUp} className="group flex flex-col">
              
              <div className="relative overflow-hidden mb-5 sm:mb-6 h-[350px] sm:h-[400px] bg-primary-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-primary-900/10 pointer-events-none" />
              </div>
              
              <div className="border-t border-primary-200 pt-4 sm:pt-5 flex flex-col gap-1">
                <h3 className="text-xl sm:text-2xl font-serif text-primary-900 leading-tight">
                  {member.name}
                </h3>
                <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold mt-1">
                  {member.role}
                </p>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};