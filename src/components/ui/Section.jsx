import styles from './Section.module.scss';

export function Section({ 
  children, 
  variant = 'default',
  size = 'default',
  id,
  className = '',
  as: Component = 'section',
  ...props 
}) {
  const classNames = [
    styles.section,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component 
      id={id}
      className={classNames}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;