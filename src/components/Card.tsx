import type { ReactNode } from 'react';

export type CardProps = {
  title?: string;
  meta?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, meta, children, footer }: CardProps) {
  return (
    <article className="card">
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
