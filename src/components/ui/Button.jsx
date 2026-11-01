import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import styles from './Button.module.scss';

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  children,
  className = '',
  disabled,
  onClick,
  href,
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {leftIcon && <span className={styles.iconLeft} aria-hidden="true">{leftIcon}</span>}
      <span className={styles.content}>{children}</span>
      {rightIcon && <span className={styles.iconRight} aria-hidden="true">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classNames}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classNames}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      {...props}
    >
      {isLoading ? (
        <span className={styles.loading}>
          <svg className={styles.spinner} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle
              className={styles.spinnerCircle}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
          <span>Loading...</span>
        </span>
      ) : content}
    </motion.button>
  );
}

// Phone-specific button with phone icon, automatically linking to tel:+15550100199
export function PhoneButton({ children = 'Call Now', href = 'tel:+15550100199', ...props }) {
  return (
    <Button
      variant="phone"
      href={href}
      leftIcon={<Phone className="w-5 h-5" aria-hidden="true" />}
      {...props}
    >
      {children}
    </Button>
  );
}