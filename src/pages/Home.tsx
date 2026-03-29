import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ServicesSlider } from '../components/sections/ServicesSlider';
import { ProjectsSlider } from '../components/sections/ProjectsSlider';
import { Team } from '../components/sections/Team';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesSlider />
      <ProjectsSlider />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};
