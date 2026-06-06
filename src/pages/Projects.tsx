import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { PROJECTS } from '../constants/data';
import { slideUp } from '../animations/variants';
import { ProjectSection } from '../components/sections/ProjectSection';
import { Lightbox } from '../components/ui/Lightbox';

export const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

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
        <ProjectSection 
          key={project.id} 
          project={project} 
          index={index} 
          openLightbox={openLightbox}
        />
      ))}

      <Lightbox 
        isOpen={lightboxOpen}
        images={lightboxImages}
        initialIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};