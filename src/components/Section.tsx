import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  kicker?: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, kicker, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section__header">
        {kicker && <p className="section__kicker">{kicker}</p>}
        <div>
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__description">{description}</p>}
        </div>
      </header>
      <div className="section__content">{children}</div>
    </section>
  );
}
