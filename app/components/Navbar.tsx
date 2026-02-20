import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useMenu } from '@/app/context/MenuContext';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './animatedButton';

export function Navbar() {
  const pathname = usePathname();
  const { setIsMenuOpen } = useMenu();
  const [hash, setHash] = useState('');
  const isContactPage = pathname === '/contact';

  // Update hash on mount and on route change
  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' && hash !== '#services';
    if (path === '/#services') return pathname === '/' && hash === '#services';
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300">
      <div className="mx-auto w-full max-w-6xl flex justify-between items-center px-6 md:px-14 py-4 md:py-5">
        <motion.div
          layout
          className="flex items-center gap-1"
        >
          <div className="w-10 h-10">
            <svg

              viewBox="0 0 52 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='w-9 h-auto'

            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.0086 32.98L35.866 35.0997V35.1096C35.2015 35.7642 34.5757 36.3626 33.9633 36.8901C33.3079 37.4546 32.668 37.9374 32.0116 38.3185C31.4083 38.6689 30.766 38.946 30.0479 39.1386C29.4056 39.3102 28.7034 39.4162 27.9173 39.4475H27.4071C25.8741 39.4475 24.4112 39.17 23.0804 38.6537C21.7295 38.129 20.5085 37.3567 19.4816 36.378C18.4428 35.3864 17.5976 34.1795 17.0158 32.7983C16.4956 31.564 16.1826 30.1888 16.1241 28.702V28.1783C16.1241 26.5436 16.4157 25.0472 16.9454 23.7203C17.4972 22.337 18.3118 21.1276 19.3246 20.1314C21.1953 18.2924 24.0347 17.0936 26.8704 16.938C27.9272 16.8802 28.9943 16.914 29.9972 17.1531C30.8709 17.3613 31.6953 17.7434 32.4402 18.1441C32.9666 18.4583 33.4808 18.8315 33.8777 19.1686C35.6406 20.6653 36.6682 21.7031 38.1744 23.1357L51.6073 11.3048L50.0761 9.57812C48.7552 8.08882 47.4613 6.82491 45.8921 5.67017C44.3031 4.50099 42.7353 3.47655 40.9484 2.67397C39.1531 1.86681 37.3588 1.15932 35.4325 0.745528C33.5224 0.335611 31.5922 0 29.6151 0C25.7558 0 21.2048 0.786731 17.575 2.207C13.9706 3.61777 10.6927 5.65714 8.17475 8.17475C5.60467 10.7452 3.53184 13.8199 2.11509 17.2391C0.752572 20.5297 0 24.1334 0 27.9085C0 31.6834 0.752572 35.2885 2.11544 38.5787C3.53184 41.9972 5.60432 45.0719 8.1744 47.642C10.6924 50.1596 13.9699 52.1986 17.5743 53.6094C21.2041 55.03 25.1701 55.8164 29.0298 55.8164C30.8907 55.8164 32.7441 55.6258 34.5619 55.2564C36.3876 54.8853 38.1723 54.3313 39.8884 53.6065C41.6045 52.8811 43.2456 51.9869 44.7821 50.9368C46.3062 49.8944 47.7342 48.6956 49.0397 47.3521L50.8146 45.5248L38.0082 32.9797L38.0086 32.98ZM28.1424 24.0249C29.1784 24.0249 30.8104 24.6024 32.0422 25.5093C33.0209 26.2298 33.7541 27.1634 33.7541 28.1889C33.7541 29.2147 33.0209 30.1476 32.0419 30.8685C30.8107 31.7749 29.1784 32.3528 28.1424 32.3528C27.107 32.3528 25.4751 31.7749 24.2439 30.8685C23.2649 30.1476 22.5317 29.214 22.5317 28.1889C22.5317 27.163 23.2649 26.2298 24.2436 25.5093C25.4747 24.6028 27.1067 24.0249 28.1424 24.0249ZM28.2089 11.8059C29.5764 11.8059 30.7822 12.1035 31.9021 12.3761C33.0258 12.6493 33.6829 13.0149 34.6458 13.5326C35.5589 14.0238 36.2949 14.576 37.1296 15.2472C37.5624 15.5955 37.8948 15.8875 38.3294 16.2798L44.3179 10.9695C43.5312 10.2613 43.192 9.95352 42.3159 9.36224C41.2298 8.62904 40.0775 7.87365 38.8886 7.33836C37.4324 6.68264 36.0044 6.08678 34.4257 5.74905C32.8702 5.41626 31.2435 5.10601 29.6148 5.10601C26.4259 5.10601 22.5271 5.75751 19.4957 6.93338C16.5238 8.08636 13.8241 9.74328 11.7834 11.7844C9.67849 13.8889 7.98458 16.3995 6.83019 19.1855C5.71912 21.8693 5.10565 24.8155 5.10565 27.9085C5.10565 31.0016 5.71912 33.9481 6.83019 36.632C7.98458 39.4179 9.67919 41.9292 11.7834 44.0334C13.8241 46.0738 16.5238 47.7311 19.4957 48.8844C22.5271 50.0596 25.8413 50.7114 29.0298 50.7114C30.579 50.7114 32.1 50.5579 33.5717 50.2613C35.0655 49.9595 36.521 49.5098 37.9145 48.921C39.0295 48.4498 40.111 47.8864 41.1456 47.237C41.9679 46.7204 42.7596 46.1509 43.5143 45.5308L37.967 40.1413C37.698 40.3878 37.43 40.6258 37.1613 40.8547C36.3196 41.5689 35.4751 42.1968 34.5637 42.7261C33.5914 43.2906 32.5666 43.7365 31.4323 44.0443C30.3075 44.3503 29.0664 44.5218 27.6539 44.5412L27.4483 44.5429L27.4064 44.5531C25.2261 44.5531 23.13 44.1485 21.2062 43.3949C19.2499 42.6282 17.4733 41.4999 15.9709 40.0669C14.444 38.6111 13.2019 36.8418 12.3447 34.8222C11.5295 32.9029 11.0628 30.7561 11.0301 28.4364L11.0283 28.2044L11.0181 28.1786C11.0181 25.8568 11.4485 23.7069 12.2296 21.7777C13.0483 19.7556 14.2541 17.9783 15.7551 16.5023C17.2834 14.9993 19.1108 13.8171 21.1382 13.017C23.0304 12.1341 25.9128 11.8063 28.2089 11.8063V11.8059Z"
                fill="#FF8456"
              />
            </svg>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-gray-800 font-black text-lg md:text-xl leading-tight font-header">Clearview</span>
            <span className="text-gray-500 text-xs leading-tight  font-sans">MARKETING</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          layout
          className="hidden min-[1205px]:flex items-center gap-4"
        >
          <Link href="/" scroll={false} onClick={() => { setHash(''); setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0); }} className={`px-3 py-2 font-medium text-[0.8rem] font-sans whitespace-nowrap ${isActive('/') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors`}>Home</Link>
          <Link href="/about" onClick={() => setHash('')} className={`px-3 py-2 font-medium text-[0.8rem] font-sans whitespace-nowrap ${isActive('/about') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors`}>About Us</Link>
          <Link href="/use-cases" onClick={() => setHash('')} className={`px-3 py-2 font-medium text-[0.8rem] font-sans whitespace-nowrap ${isActive('/use-cases') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors`}>Use Cases</Link>
          <Link href="/testimonials" onClick={() => setHash('')} className={`px-3 py-2 font-medium text-[0.8rem] font-sans whitespace-nowrap ${isActive('/testimonials') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors`}>Testimonials</Link>
        </motion.div>


        <AnimatePresence>
          {!isContactPage && (
            <motion.div
              layout
              initial={{ opacity: 0, width: 0, scale: 0.8 }}
              animate={{ opacity: 1, width: "auto", scale: 1 }}
              exit={{ opacity: 0, width: 0, scale: 0.8, transition: { duration: 0.3 } }}
              className='hidden min-[1205px]:flex overflow-hidden'
            >
              <AnimatedButton
                text="Contact Us"
                href="/contact"
                bgColor="var(--primary)"
                hoverColor="var(--foreground)"
                textColor="var(--background)"
                hoverTextColor="var(--background)"
                textColorChange
              />
            </motion.div>
          )}
        </AnimatePresence>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="min-[1205px]:hidden p-2 text-text-main hover:bg-bg-light rounded-md transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
}
