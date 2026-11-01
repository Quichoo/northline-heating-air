import { motion } from 'motion/react';
import { Users, ShieldCheck, MessageCircle, Clock } from 'lucide-react';
import { Container, Section, IconWrapper } from '../ui';
import styles from './WhyChoose.module.scss';

const VALUES = [
  {
    id: 'family-owned',
    icon: Users,
    title: 'Family-Owned Business',
    description: 'Locally owned and operated. We treat your home like our own.',
  },
  {
    id: 'honest-reliable',
    icon: ShieldCheck,
    title: 'Honest and Reliable Service',
    description: 'Transparent pricing. No upsells. No surprises.',
  },
  {
    id: 'friendly-support',
    icon: MessageCircle,
    title: 'Friendly Customer Support',
    description: 'Real people answer the phone. Friendly voices, clear answers.',
  },
  {
    id: '24-7-emergency',
    icon: Clock,
    title: '24/7 Emergency HVAC Service',
    description: 'Day or night, weekend or holiday—we\'re here when it matters.',
  },
];

export function WhyChoose() {
  return (
    <Section variant="light" id="why-choose">
      <Container size="xl">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Why Choose Northline</span>
          <h2 className={styles.headline}>Your Comfort Is Our Family Business</h2>
          <p className={styles.subtext}>
            We're not a national chain. We're your neighbors, committed to honest work and lasting relationships.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {VALUES.map((value, index) => (
            <motion.article
              key={value.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper 
                size="xl" 
                color="warm" 
                className={styles.icon}
                aria-label={value.title}
              >
                <value.icon className="w-full h-full" aria-hidden="true" />
              </IconWrapper>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDescription}>{value.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default WhyChoose;