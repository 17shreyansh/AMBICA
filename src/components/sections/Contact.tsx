import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { slideUp, staggerContainer } from '../../animations/variants';

export const Contact = () => {
  return (
    <Section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-primary-900 text-stone-50 overflow-hidden" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.span 
              variants={slideUp}
              className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-400 mb-6 sm:mb-8"
            >
              Start a Project
            </motion.span>
            
            <motion.h2 
              variants={slideUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight tracking-tight mb-6 sm:mb-8"
            >
              Let's Work <br className="hidden sm:block" />
              <span className="italic font-light text-stone-300">Together.</span>
            </motion.h2>
            
            <motion.p 
              variants={slideUp}
              className="text-base leading-relaxed text-stone-400 font-light mb-12 sm:mb-16 max-w-md"
            >
              Ready to start your next project? Send us a message and our team will get back to you shortly to discuss how we can help.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-col border-t border-primary-700/50">
              
              <div className="py-4 sm:py-6 border-b border-primary-700/50 flex flex-col gap-1 sm:gap-2">
                <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                  Email
                </div>
                <a href="mailto:info@ambica.com" className="text-lg sm:text-xl font-light hover:text-accent-400 transition-colors duration-300">
                  info@ambica.com
                </a>
              </div>
              
              <div className="py-4 sm:py-6 border-b border-primary-700/50 flex flex-col gap-1 sm:gap-2">
                <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                  Phone
                </div>
                <a href="tel:+919876543210" className="text-lg sm:text-xl font-light hover:text-accent-400 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="py-4 sm:py-6 border-b border-primary-700/50 flex flex-col gap-1 sm:gap-2">
                <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                  Address
                </div>
                <div className="text-base leading-relaxed font-light text-stone-300 max-w-xs">
                  123 Design Street,<br /> Mumbai, Maharashtra 400001
                </div>
              </div>
              
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="lg:col-span-6 lg:col-start-7 pt-4 lg:pt-0"
          >
            <form className="flex flex-col gap-8 sm:gap-10">
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-primary-700 py-3 sm:py-4 text-stone-50 text-sm sm:text-base font-light placeholder:text-primary-500 focus:outline-none focus:border-stone-50 transition-colors duration-300 rounded-none"
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-primary-700 py-3 sm:py-4 text-stone-50 text-sm sm:text-base font-light placeholder:text-primary-500 focus:outline-none focus:border-stone-50 transition-colors duration-300 rounded-none"
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-primary-700 py-3 sm:py-4 text-stone-50 text-sm sm:text-base font-light placeholder:text-primary-500 focus:outline-none focus:border-stone-50 transition-colors duration-300 rounded-none"
                />
              </div>
              
              <div className="relative mt-2 sm:mt-4">
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-primary-700 py-3 sm:py-4 text-stone-50 text-sm sm:text-base font-light placeholder:text-primary-500 focus:outline-none focus:border-stone-50 transition-colors duration-300 resize-none rounded-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                variant="white"
                className="mt-2 sm:mt-4 w-full py-4 sm:py-5"
              >
                Send Message
              </Button>
              
            </form>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};