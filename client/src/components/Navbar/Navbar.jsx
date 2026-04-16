import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-display font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-gray-900'
                }`}>
                  Healing Life
                </h1>
                <p className={`text-xs font-medium transition-colors ${
                  isScrolled ? 'text-primary-600' : 'text-primary-600'
                }`}>
                  Homeocare
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-800 hover:text-primary-600'
                  }`}
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </motion.a>
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 btn-shine"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#appointment')}
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <div className="pt-4 border-t space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-gray-700 py-2"
                  >
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">+91 98765 43210</span>
                  </a>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-full font-medium shadow-lg flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick('#appointment')}
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}

export default Navbar;