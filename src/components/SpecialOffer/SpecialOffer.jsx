import { motion } from 'motion/react';
import { PhoneButton, Container, Section } from '../ui';
import styles from './SpecialOffer.module.scss';

export function SpecialOffer() {
  return (
    <Section variant="primary" id="special-offer" className={styles.section}>
      <Container size="lg">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className={styles.badge}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            LIMITED TIME OFFER
          </motion.span>

          <motion.h2 
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SAME-DAY SERVICE OR YOUR DIAGNOSTIC FEE IS FREE!
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            When your HVAC system fails, you can't wait days for a repair. We guarantee same-day service or your diagnostic fee is on us.
          </motion.p>

          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PhoneButton size="lg" className={styles.phoneButton}>
              Call Now — (555) 010-0199
            </PhoneButton>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default SpecialOffer;