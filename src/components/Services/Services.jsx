import { motion } from 'motion/react';
import { Snowflake, Flame, Home, Wrench } from 'lucide-react';
import { Container, Section, IconWrapper } from '../ui';
import styles from './Services.module.scss';

const SERVICES = [
  {
    id: 'ac-repair',
    icon: Snowflake,
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair to restore your cool.',
  },
  {
    id: 'heating-repair',
    icon: Flame,
    title: 'Heating & Furnace Repair',
    description: 'Expert heating system and furnace repair when you need warmth most.',
  },
  {
    id: 'installation',
    icon: Home,
    title: 'Installation',
    description: 'Professional HVAC system installation for new construction and replacements.',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'HVAC Maintenance',
    description: 'Seasonal tune-ups that prevent breakdowns and extend system life.',
  },
];

export function Services() {
  return (
    <Section variant="white" id="services">
      <Container size="xl">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Our Services</span>
          <h2 className={styles.headline}>Complete HVAC Solutions for Your Home</h2>
          <p className={styles.subtext}>
            From emergency repairs to new system installations, we handle every heating and cooling need with expertise and care.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper 
                size="xl" 
                color="cool" 
                className={styles.icon}
                aria-label={service.title}
              >
                <service.icon className="w-full h-full" aria-hidden="true" />
              </IconWrapper>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Services;