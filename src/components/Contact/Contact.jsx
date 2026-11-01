import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { PhoneButton, Container, Section, IconWrapper } from '../ui';
import styles from './Contact.module.scss';

export function Contact() {
  return (
    <Section variant="light" id="contact" className={styles.section}>
      <Container size="xl">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Contact Us</span>
          <h2 className={styles.headline}>Ready to Restore Your Comfort?</h2>
          <p className={styles.subtext}>
            Call now for same-day service or 24/7 emergency HVAC repair in Burnsville, MN.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.infoItem}>
              <IconWrapper size="xl" color="cool" aria-hidden="true">
                <Phone className="w-full h-full" aria-hidden="true" />
              </IconWrapper>
              <div>
                <span className={styles.infoLabel}>Call Us</span>
                <a href="tel:+15550100199" className={styles.infoValue}>
                  (555) 010-0199
                </a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <IconWrapper size="xl" color="cool" aria-hidden="true">
                <MapPin className="w-full h-full" aria-hidden="true" />
              </IconWrapper>
              <div>
                <span className={styles.infoLabel}>Service Area</span>
                <span className={styles.infoValue}>Burnsville, Minnesota</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <IconWrapper size="xl" color="cool" aria-hidden="true">
                <Clock className="w-full h-full" aria-hidden="true" />
              </IconWrapper>
              <div>
                <span className={styles.infoLabel}>Availability</span>
                <span className={styles.infoValue}>24 Hours / 7 Days a Week</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.ctaTitle}>Call Now for Immediate Service</h3>
            <p className={styles.ctaText}>
              Connect directly with our local Burnsville team for fast dispatch and dependable comfort service.
            </p>
            <PhoneButton size="lg" fullWidth className={styles.phoneButton}>
              Call Now — (555) 010-0199
            </PhoneButton>
            <p className={styles.guarantee}>
              <strong>Same-Day Guarantee:</strong> Diagnostic fee free if we can't make it today.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;