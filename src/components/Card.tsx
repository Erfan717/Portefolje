import { motion } from 'motion/react';
import type { ReactNode, MouseEventHandler } from 'react';

export type CardProps = {
  title?: ReactNode;
  meta?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
};

export function Card({ title, meta, children, footer, onClick, className = '' }: CardProps) {
  const Component = onClick ? motion.article : 'article';
  const props = onClick ? {
    whileHover: { y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)', borderColor: 'var(--accent)' },
    transition: { type: 'spring', stiffness: 300 }
  } : {};

  return (
    // @ts-ignore: Dynamic component type complexity
    <Component 
      className={`card ${className} ${onClick ? 'card--interactive' : ''}`} 
      onClick={onClick}
      {...props}
    >
      {(title || meta) && (
        <header className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {meta && <p className="card__meta">{meta}</p>}
        </header>
      )}
      <div className="card__body">{children}</div>
      {footer && <footer className="card__footer">{footer}</footer>}
    </Component>
  );
}
