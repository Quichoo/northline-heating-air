import styles from './Logo.module.scss';

export function Logo({ className = '', variant = 'default' }) {
  const classNames = [styles.logo, styles[variant], className].filter(Boolean).join(' ');
  
  return (
    <div className={classNames} aria-label="Northline Heating & Air">
      <img 
        src="/LogoIcon.png" 
        alt="" 
        className={styles.icon} 
        aria-hidden="true" 
      />
      <div className={styles.textGroup}>
        <span className={styles.line1}>NORTHLINE</span>
        <span className={styles.line2}>HEATING & AIR</span>
      </div>
    </div>
  );
}

export default Logo;
