import { motion } from 'motion/react';
import styles from './NavLink.module.scss';

export function NavLink({ href, children, isActive = false, className = '', onClick, ...props }) {
  const isAnchor = href.startsWith('#');
  
  const handleClick = (e) => {
    if (isAnchor && onClick) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <motion.a
      href={href}
      className={[styles.navLink, isActive ? styles.active : '', className].filter(Boolean).join(' ')}
      onClick={handleClick}
      whileHover={{ x: isAnchor ? 4 : 0 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      {...props}
    >
      {children}
      {isActive && <span className={styles.activeIndicator} aria-hidden="true" />}
    </motion.a>
  );
}

export default NavLink;