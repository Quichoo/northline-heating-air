import { motion } from 'motion/react';
import { Phone, Truck, Clock } from 'lucide-react';
import { PhoneButton, Container, Section, IconWrapper } from '../ui';
import styles from './Emergency.module.scss';

export function Emergency() {
  return (
    <Section variant="white" id="emergency" className={styles.section}>
      <Container size="xl">
        <div className={styles.grid}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className={styles.badge}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            >
              24/7 EMERGENCY SERVICE
            </motion.span>

            <motion.h2 
              className={styles.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              HVAC TROUBLE DOESN'T WAIT.<br /> NEITHER DO WE.
            </motion.h2>

            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Middle of the night? Holiday weekend? Hottest day of summer? Northline provides 24/7 emergency HVAC service across Burnsville. One call gets a real technician dispatched—no answering service, no callbacks.
            </motion.p>

            <motion.div 
              className={styles.features}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.feature}>
                <IconWrapper size="lg" color="warm" aria-hidden="true">
                  <Truck className="w-full h-full" aria-hidden="true" />
                </IconWrapper>
                <div>
                  <span className={styles.featureTitle}>Rapid Dispatch</span>
                  <span className={styles.featureText}>Technicians on the way within hours</span>
                </div>
              </div>
              <div className={styles.feature}>
                <IconWrapper size="lg" color="warm" aria-hidden="true">
                  <Clock className="w-full h-full" aria-hidden="true" />
                </IconWrapper>
                <div>
                  <span className={styles.featureTitle}>Always Available</span>
                  <span className={styles.featureText}>24 hours, 7 days, 365 days a year</span>
                </div>
              </div>
              <div className={styles.feature}>
                <IconWrapper size="lg" color="warm" aria-hidden="true">
                  <Phone className="w-full h-full" aria-hidden="true" />
                </IconWrapper>
                <div>
                  <span className={styles.featureTitle}>Direct Phone Contact</span>
                  <span className={styles.featureText}>Immediate dispatch from our local team</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PhoneButton size="lg" className={styles.phoneButton}>
                Call Emergency Line — (555) 010-0199
              </PhoneButton>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/Emergency.jpg"
              alt="24/7 Northline emergency heating and cooling service response vehicle and technician ready in Burnsville"
              className={styles.emergencyImage}
              loading="lazy"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default Emergency;