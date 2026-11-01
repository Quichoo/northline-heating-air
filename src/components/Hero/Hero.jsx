import { motion } from 'motion/react';
import { Phone, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button, PhoneButton, Container, Section } from '../ui';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <Section variant="light" size="xl" id="hero" className={styles.hero}>
      <Container size="xl">
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.div 
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className={styles.badgeIcon} aria-hidden="true">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <span>SAME-DAY SERVICE OR YOUR DIAGNOSTIC FEE IS FREE!</span>
            </motion.div>

            <motion.h1 
              className={styles.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              YOUR COMFORT.<br /> OUR PRIORITY.
            </motion.h1>

            <motion.h2 
              className={styles.subheadline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Reliable Heating & Cooling Services for Your Home.
            </motion.h2>

            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              From unexpected HVAC problems to routine maintenance, Northline Heating & Air is here to help keep your family comfortable.
            </motion.p>

            <motion.div 
              className={styles.ctaGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <PhoneButton 
                className={styles.primaryCTA}
                size="lg"
              >
                Call Now
              </PhoneButton>
              <Button 
                variant="outline" 
                size="lg"
                className={styles.secondaryCTA}
                rightIcon={<ChevronRight className="w-5 h-5" aria-hidden="true" />}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
              </Button>
            </motion.div>

            <motion.div 
              className={styles.trustIndicators}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <Clock className="w-5 h-5" />
                </span>
                <span>24/7 Emergency Service</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <span>Family-Owned & Local</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </span>
                <a href="tel:+15550100199" className={styles.phoneLink}>(555) 010-0199</a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="/Hero.jpg"
              alt="Northline Heating & Air technician providing friendly, reliable residential HVAC comfort services in Burnsville"
              className={styles.heroImage}
              loading="eager"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;