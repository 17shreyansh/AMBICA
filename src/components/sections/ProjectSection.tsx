import { motion } from 'framer-motion';
import { Project } from '../../types';
import { slideUp } from '../../animations/variants';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

interface ProjectSectionProps {
  project: Project;
  index: number;
  openLightbox?: (images: string[], index: number) => void;
}

export const ProjectSection = ({ project, index, openLightbox }: ProjectSectionProps) => {
  const isReversed = index % 2 === 1;

  // Combine featured image and gallery into a single array for the Lightbox
  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <Section className={`py-16 sm:py-20 md:py-24 lg:py-32 ${isReversed ? 'bg-stone-100' : 'bg-stone-50'}`}>
      <Container>
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          
          {/* ROW 1: Content and Featured Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
              className={`flex flex-col justify-center h-full ${isReversed ? 'lg:order-2' : ''}`}
            >
              <div className="text-[10px] sm:text-[11px] font-sans tracking-[0.15em] sm:tracking-[0.2em] mb-4 text-accent-600 uppercase font-semibold">
                {project.category} • {project.year}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 text-primary-900 leading-tight">
                {project.title}
              </h2>
              <div className="w-12 h-[1px] bg-accent-500 mb-8"></div>
              <p className="text-base sm:text-lg leading-relaxed text-primary-700 mb-6 font-light">
                {project.description}
              </p>
              <p className="text-base leading-relaxed text-primary-600 font-light">
                {project.details}
              </p>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
              className={`w-full h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded-sm shadow-md group cursor-pointer ${isReversed ? 'lg:order-1' : ''}`}
              onClick={() => openLightbox && openLightbox(allImages, 0)}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
          </div>

          {/* ROW 2: Gallery Images */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
              className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 w-full overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {project.gallery.slice(0, 4).map((img, i) => (
                <div 
                  key={i} 
                  className="shrink-0 snap-start w-[50vw] sm:w-[30vw] md:w-[22vw] lg:w-full h-[150px] sm:h-[180px] lg:h-[200px] overflow-hidden rounded-sm shadow-sm group cursor-pointer"
                  onClick={() => openLightbox && openLightbox(allImages, i + 1)}
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </Container>
    </Section>
  );
};
