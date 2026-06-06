import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export const About = () => {
  // Staggered text reveal for a smooth feel
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    },
  };

  return (
    <Section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-stone-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 lg:col-start-1"
          >
            <motion.span 
              variants={itemVariant}
              className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-600 mb-6 sm:mb-8"
            >
              About Us
            </motion.span>

            <motion.h2 
              variants={itemVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-900 leading-[1.1] tracking-tight mb-6 sm:mb-8"
            >
              Building Spaces <br className="hidden sm:block" />
              <span className="italic text-primary-500 font-light">You Love.</span>
            </motion.h2>

            <motion.p 
              variants={itemVariant}
              className="text-base leading-relaxed text-primary-700 font-light mb-4 sm:mb-6"
            >
              For over 30 years, AMBICA has been building and designing beautiful homes and offices. We are a trusted team that makes sure every room looks great and works perfectly for your daily life.
            </motion.p>

            <motion.p 
              variants={itemVariant}
              className="text-base leading-relaxed text-primary-700 font-light mb-8 sm:mb-12"
            >
              We focus on clean design, strong building methods, and top-quality materials. We work hard on every single project to make sure you are completely happy with the final result.
            </motion.p>

            <motion.div 
              variants={itemVariant}
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 border-t border-primary-200/60"
            >
              {[
                { number: '500+', label: 'Completed Projects' },
                { number: '30+', label: 'Years Experience' },
                { number: '98%', label: 'Happy Clients' }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col gap-1 sm:gap-2">
                  <div className="text-2xl sm:text-3xl lg:text-h3 font-serif text-primary-900 leading-none">
                    {stat.number}
                  </div>
                  <div className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-primary-400 font-semibold leading-tight pr-2 sm:pr-4">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 lg:col-start-7 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden"
          >
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80"
              alt="Ambica Architecture Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-primary-900/10 pointer-events-none" />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};