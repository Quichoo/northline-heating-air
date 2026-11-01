import styles from './Container.module.scss';

export function Container({ 
  children, 
  size = 'xl', 
  className = '',
  as: Component = 'div',
  ...props 
}) {
  const sizeClass = size === '2xl' ? 'container-2xl' : size;
  const classNames = [styles.container, styles[sizeClass], className].filter(Boolean).join(' ');

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

export default Container;