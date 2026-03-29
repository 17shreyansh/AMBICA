import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { slideUp } from '../../animations/variants';

export const Hero = () => {
  // Staggered animation for ultra-smooth sequential loading
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-16 sm:pt-20 bg-primary-900 overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Premium Architecture"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-primary-900/40 z-10" />
      </motion.div>

      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-10 xl:col-span-8 flex flex-col justify-center"
          >
            <motion.span
              variants={slideUp}
              className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-300 mb-6 sm:mb-8"
            >
              Ambica Architecture & Interiors
            </motion.span>

            <motion.h1
              variants={slideUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-stone-50 leading-[1.05] tracking-tight mb-6 sm:mb-8"
            >
              Building Dreams <br className="hidden sm:block" />
              <span className="italic text-stone-300 font-light">Into Reality.</span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg lg:text-xl text-stone-300 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light"
            >
              Premium construction and interior design services that transform spaces into uncompromising architectural masterpieces.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <Link 
                to="/projects"
                className="inline-block text-center rounded-none bg-stone-50 text-primary-900 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] px-8 sm:px-10 py-3 sm:py-4 hover:bg-stone-200 transition-colors duration-300 border-none"
              >
                Explore Projects
              </Link>
              <Link 
                to="/contact"
                className="inline-block text-center rounded-none border border-stone-50/30 text-stone-50 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] px-8 sm:px-10 py-3 sm:py-4 hover:bg-stone-50 hover:text-primary-900 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 hidden lg:flex"
      >
        <div className="w-[1px] h-20 bg-stone-50/20 overflow-hidden relative">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-stone-50"
          />
        </div>
      </motion.div>
    </section>
  );
};