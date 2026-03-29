import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import logo from '../../assets/logo.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-primary-900 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-6 sm:pb-8 border-t border-primary-800 overflow-hidden">
      <Container>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-16 sm:mb-20 lg:mb-24">
          
          <div className="sm:col-span-2 md:col-span-12 lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="inline-block mb-6 sm:mb-8 group">
              <img 
                src={logo} 
                alt="AMBICA" 
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain grayscale opacity-80 mix-blend-lighten transition-opacity duration-300 group-hover:opacity-100" 
              />
            </Link>
            <p className="text-base leading-relaxed text-stone-400 font-light max-w-sm">
              Building beautiful, lasting spaces for you to live and work in.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
            <h4 className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-500 mb-6 sm:mb-8">
              Navigation
            </h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link to="/" className="text-sm sm:text-base text-stone-300 font-light hover:text-stone-50 transition-colors duration-300">
                Home
              </Link>
              <Link to="/services" className="text-sm sm:text-base text-stone-300 font-light hover:text-stone-50 transition-colors duration-300">
                Services
              </Link>
              <Link to="/projects" className="text-sm sm:text-base text-stone-300 font-light hover:text-stone-50 transition-colors duration-300">
                Projects
              </Link>
              <Link to="/contact" className="text-sm sm:text-base text-stone-300 font-light hover:text-stone-50 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-500 mb-6 sm:mb-8">
              Contact
            </h4>
            <div className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base text-stone-300 font-light">
              <p className="leading-relaxed">
                123 Design Street<br />
                Mumbai, Maharashtra 400001
              </p>
              <a href="tel:+919876543210" className="hover:text-stone-50 transition-colors duration-300">
                +91 98765 43210
              </a>
              <a href="mailto:info@ambica.com" className="hover:text-stone-50 transition-colors duration-300">
                info@ambica.com
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-500 mb-6 sm:mb-8">
              Social
            </h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                <a
                  key={social}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-stone-300 font-light hover:text-stone-50 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-[1px] bg-stone-50 transition-all duration-300 group-hover:w-3" />
                  {social}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        <div className="border-t border-primary-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} Ambica. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-600">
              Crafted with love by
            </span>
            <a 
              href="https://affobe.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-400 hover:text-accent-300 transition-colors duration-300 font-semibold"
            >
              AFFOBE
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
};