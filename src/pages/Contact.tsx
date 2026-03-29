import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { slideUp, staggerContainer } from '../animations/variants';

export const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-primary-900 text-stone-50">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">Get in Touch</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-300 leading-relaxed font-light">
              Ready to start your next project? We'd love to hear from you. Send us a message and our team will get back to you shortly.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form & Info Section */}
      <Section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-stone-50 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5"
            >
              <motion.span 
                variants={slideUp}
                className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-600 mb-6 sm:mb-8"
              >
                Contact Information
              </motion.span>
              
              <motion.h2 
                variants={slideUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight tracking-tight mb-6 sm:mb-8 text-primary-900"
              >
                Let's Build <br className="hidden sm:block" />
                <span className="italic font-light text-primary-600">Something Great.</span>
              </motion.h2>
              
              <motion.p 
                variants={slideUp}
                className="text-base leading-relaxed text-primary-700 font-light mb-12 sm:mb-16 max-w-md"
              >
                Whether you're planning a new construction project or looking to redesign your interior space, we're here to help bring your vision to life.
              </motion.p>

              {/* Contact Details */}
              <motion.div variants={slideUp} className="flex flex-col border-t border-primary-200/60">
                
                <div className="py-4 sm:py-6 border-b border-primary-200/60 flex flex-col gap-1 sm:gap-2">
                  <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                    Office Address
                  </div>
                  <div className="text-base leading-relaxed font-light text-primary-900">
                    123 Design Street,<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </div>
                </div>
                
                <div className="py-4 sm:py-6 border-b border-primary-200/60 flex flex-col gap-1 sm:gap-2">
                  <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                    Email
                  </div>
                  <a href="mailto:info@ambica.com" className="text-lg sm:text-xl font-light hover:text-accent-600 transition-colors duration-300 text-primary-900">
                    info@ambica.com
                  </a>
                </div>
                
                <div className="py-4 sm:py-6 border-b border-primary-200/60 flex flex-col gap-1 sm:gap-2">
                  <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                    Phone
                  </div>
                  <a href="tel:+919876543210" className="text-lg sm:text-xl font-light hover:text-accent-600 transition-colors duration-300 text-primary-900">
                    +91 98765 43210
                  </a>
                </div>

                <div className="py-4 sm:py-6 border-b border-primary-200/60 flex flex-col gap-1 sm:gap-2">
                  <div className="font-sans text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase text-primary-400 font-semibold">
                    Business Hours
                  </div>
                  <div className="text-base leading-relaxed font-light text-primary-900">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
                
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
              className="lg:col-span-7 bg-stone-100 p-6 sm:p-8 lg:p-12"
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-primary-900 mb-6 sm:mb-8">Send us a Message</h3>
              
              <form className="flex flex-col gap-6 sm:gap-8">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="firstName" className="block font-sans text-xs uppercase tracking-wider text-primary-600 mb-2 font-semibold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      className="w-full bg-stone-50 border border-primary-200 px-4 py-3 sm:py-4 text-primary-900 text-sm sm:text-base font-light placeholder:text-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="lastName" className="block font-sans text-xs uppercase tracking-wider text-primary-600 mb-2 font-semibold">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full bg-stone-50 border border-primary-200 px-4 py-3 sm:py-4 text-primary-900 text-sm sm:text-base font-light placeholder:text-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block font-sans text-xs uppercase tracking-wider text-primary-600 mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    className="w-full bg-stone-50 border border-primary-200 px-4 py-3 sm:py-4 text-primary-900 text-sm sm:text-base font-light placeholder:text-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-wider text-primary-600 mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="w-full bg-stone-50 border border-primary-200 px-4 py-3 sm:py-4 text-primary-900 text-sm sm:text-base font-light placeholder:text-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="projectType" className="block font-sans text-xs uppercase tracking-wider text-primary-600 mb-2 font-semibold">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    className="w-full bg-stone-50 border border-primary-200 px-4 py-3 sm:py-4 text-primary-900 text-sm sm:text-base font-light focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block font-sans text-xs uppercase tracking-wider text-primary-600 mb-2 font-semibold">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    className="w-full bg-stone-50 border border-primary-200 px-4 py-3 sm:py-4 text-primary-900 text-sm sm:text-base font-light placeholder:text-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-primary-900 border border-primary-900 text-stone-50 font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-900"
                >
                  Send Message
                </button>
                
              </form>
            </motion.div>

          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <section className="h-[400px] sm:h-[500px] lg:h-[600px] bg-primary-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl mb-4">📍</div>
            <p className="text-lg sm:text-xl text-primary-700 font-light">Map Integration Coming Soon</p>
            <p className="text-sm text-primary-500 mt-2">123 Design Street, Mumbai, Maharashtra 400001</p>
          </div>
        </div>
      </section>
    </>
  );
};
