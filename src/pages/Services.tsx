import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { SERVICES } from '../constants/data';
import { slideUp } from '../animations/variants';

export const Services = () => {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-300 leading-relaxed font-light">
              Comprehensive construction and interior design solutions tailored to bring your vision to life with precision and excellence.
            </p>
          </motion.div>
        </Container>
      </section>

      {SERVICES.map((service, index) => (
        <Section key={service.id} className={index % 2 === 1 ? 'bg-stone-100' : 'bg-stone-50'}>
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 text-primary-900">{service.title}</h2>
                <p className="text-base leading-relaxed text-primary-700 mb-6 sm:mb-8 font-light">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-sans font-semibold text-primary-900">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 text-sm sm:text-base text-primary-700">
                        <span className="w-1.5 h-1.5 bg-accent-600 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                className={`h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
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