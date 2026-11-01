import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo, NavLink, PhoneButton } from '../ui';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-choose', label: 'Why Choose Us' },
  { href: '#special-offer', label: 'Special Offer' },
  { href: '#emergency', label: 'Emergency' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    NAV_LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header
      ref={headerRef}
      className={[styles.header, isScrolled ? styles.scrolled : ''].join(' ')}
      role="banner"
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          <Logo variant="header" className={styles.logo} aria-label="Northline Heating & Air - Home" />
          
          <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className={styles.navItem}>
                  <NavLink
                    href={link.href}
                    isActive={activeSection === link.href.slice(1)}
                    className={styles.navLink}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <PhoneButton 
              className={styles.phoneButton}
              onClick={closeMobileMenu}
            >
              Call Now
            </PhoneButton>
            
            <button
              className={styles.mobileToggle}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              {isMobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              id="mobile-menu"
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href} className={styles.mobileNavItem}>
                      <NavLink
                        href={link.href}
                        isActive={activeSection === link.href.slice(1)}
                        className={styles.mobileNavLink}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className={styles.mobileCTA}>
                  <PhoneButton 
                    fullWidth
                    className={styles.mobilePhoneButton}
                    onClick={closeMobileMenu}
                  >
                    Call Now
                  </PhoneButton>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;