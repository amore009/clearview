import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useMenu } from '@/app/context/MenuContext';
import AnimatedButton from './animatedButton';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  // { name: 'Services', href: '/#services' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Testimonials', href: '/testimonials' },
];

export function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-60 bg-white w-full h-full overflow-y-auto"
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-bg-light transition-colors"
            >
              <X className="w-8 h-8 text-text-main" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-main text-2xl font-semibold font-sans hover:text-brand-active transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="text-text-main text-2xl font-semibold font-sans hover:text-brand-active transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              )
            ))}

            <div
           
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + navItems.length * 0.1, duration: 0.4 }}
              >
               <AnimatedButton
  text="Start for free"
  href="/contact"
  bgColor="var(--primary)"
  hoverColor="var(--foreground)"
  textColor="var(--background)"
  hoverTextColor="var(--background)"  
  textColorChange
/>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
