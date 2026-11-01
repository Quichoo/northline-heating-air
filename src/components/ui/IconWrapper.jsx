import styles from './IconWrapper.module.scss';

export function IconWrapper({ 
  children, 
  size = 'md', 
  color = 'primary',
  className = '',
  'aria-label': ariaLabel,
  ...props 
}) {
  const sizeClass = size === '2xl' ? 'icon-2xl' : size;
  const classNames = [
    styles.wrapper,
    styles[sizeClass],
    styles[color],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span 
      className={classNames} 
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </span>
  );
}

export default IconWrapper;