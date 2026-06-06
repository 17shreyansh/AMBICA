import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import logo from '../../assets/logo.jpeg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Premium UX: Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled 
          ? 'bg-stone-50/95 backdrop-blur-md border-primary-200/50 shadow-sm' 
          : 'bg-stone-50 border-transparent'
      }`}
    >
      <Container>
        <nav 
          className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24 lg:h-28'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="AMBICA" 
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-[10px] lg:text-[11px] font-semibold tracking-[0.12em] lg:tracking-[0.15em] uppercase py-2 transition-colors duration-300 group ${
                  isActive(link.path) ? 'text-primary-900' : 'text-primary-400 hover:text-primary-900'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[1px] bg-primary-900 transition-all duration-300 ease-out ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Custom Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1.5px] bg-primary-900 transition-all duration-300 ease-out origin-center ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-primary-900 transition-all duration-300 ease-out ${isOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`} />
            <span className={`w-6 h-[1.5px] bg-primary-900 transition-all duration-300 ease-out origin-center ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-stone-50 border-b border-primary-200/50 shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <Container>
          <div className="flex flex-col py-8 sm:py-10 gap-4 sm:gap-6">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group flex items-center font-serif text-2xl sm:text-3xl transition-all duration-300 ${
                  isActive(link.path) ? 'text-primary-900' : 'text-primary-400'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
};