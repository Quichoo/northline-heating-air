import { motion } from 'motion/react';
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Logo } from '../ui';
import { NavLink } from '../ui';
import { Container, Section } from '../ui';
import styles from './Footer.module.scss';

const FOOTER_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-choose', label: 'Why Choose Us' },
  { href: '#special-offer', label: 'Special Offer' },
  { href: '#emergency', label: 'Emergency' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <Section variant="primary" className={styles.section}>
        <Container size="xl">
          <div className={styles.grid}>
            <motion.div
              className={styles.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Logo variant="footer" className={styles.logo} />
              <p className={styles.tagline}>
                Reliable heating and cooling for Burnsville, MN families.
              </p>
              <p className={styles.promise}>
                "Your family's comfort comes first."
              </p>
            </motion.div>

            <motion.nav
              className={styles.nav}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              aria-label="Footer navigation"
            >
              <h3 className={styles.navTitle}>Quick Links</h3>
              <ul className={styles.navList}>
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href} className={styles.navItem}>
                    <NavLink
                      href={link.href}
                      className={styles.navLink}
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className={styles.contact}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={styles.contactTitle}>Contact</h3>
              <div className={styles.contactItems}>
                <a href="tel:+15550100199" className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>(555) 010-0199</span>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>Burnsville, Minnesota</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <Clock className="w-5 h-5" />
                  </span>
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.bottom}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Northline Heating & Air. All rights reserved.
            </p>
            <p className={styles.license}>
              Burnsville, Minnesota &bull; tel:+15550100199
            </p>
          </motion.div>
        </Container>
      </Section>
    </footer>
  );
}

export default Footer;