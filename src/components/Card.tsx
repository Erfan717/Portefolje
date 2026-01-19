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
  return (
    <article 
      className={`card ${className} ${onClick ? 'card--interactive' : ''}`} 
      onClick={onClick}
    >
      {(title || meta) && (
        <header className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {meta && <p className="card__meta">{meta}</p>}
        </header>
      )}
      <div className="card__body">{children}</div>
      {footer && <footer className="card__footer">{footer}</footer>}
    </article>
  );
}
