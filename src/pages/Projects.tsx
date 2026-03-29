import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { PROJECTS } from '../constants/data';
import { slideUp } from '../animations/variants';

export const Projects = () => {
  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-primary-900 text-stone-50">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">Our Projects</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-300 leading-relaxed font-light">
              A curated collection of spaces that showcase our commitment to architectural excellence and design innovation.
            </p>
          </motion.div>
        </Container>
      </section>

      {PROJECTS.map((project, index) => (
        <Section key={project.id} className={index % 2 === 1 ? 'bg-stone-100' : 'bg-stone-50'}>
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="text-xs sm:text-small font-sans tracking-wider mb-3 text-accent-600 uppercase font-semibold">
                  {project.category} • {project.year}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 text-primary-900">{project.title}</h2>
                <p className="text-base leading-relaxed text-primary-700 mb-4 sm:mb-6 font-light">
                  {project.description}
                </p>
                <p className="text-base leading-relaxed text-primary-600 font-light">
                  {project.details}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                className={`h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
};