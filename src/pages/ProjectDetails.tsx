import { useParams, Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { Tag } from '../components/Tag';
import { Card } from '../components/Card';
import { Section } from '../components/Section';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  // Use loose comparison or normalization if IDs might vary, but strict check is fine for now
  const project = profile.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page">
        <h1>Fant ikke prosjektet</h1>
        <Link to="/" className="text-link">Gå tilbake til forsiden</Link>
      </div>
    );
  }

  const { name, description, longDescription, imageUrl, tags, links } = project;

  return (
    <div className="page">
      <div style={{ marginBottom: '24px' }}>
        <Link to="/" className="button button--ghost">← Tilbake</Link>
      </div>

      <header className="hero">
        <p className="hero__kicker">Prosjekt</p>
        <h1 className="hero__title">{name}</h1>
        <p className="hero__intro">{description}</p>
        
         <div className="tag-row" style={{ marginTop: '16px', marginBottom: '24px' }}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

        <div className="hero__actions">
          {links?.demo && (
            <a className="button button--primary" href={links.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {links?.github && (
            <a className="button button--ghost" href={links.github} target="_blank" rel="noreferrer">
              Kildekode (GitHub)
            </a>
          )}
        </div>
      </header>

      <main className="content">
        {imageUrl && (
            <Section id="gallery" title="Galleri">
                <div className="card">
                     <img src={imageUrl} alt={`Skjermbilde av ${name}`} style={{ width: '100%', borderRadius: '8px' }} />
                </div>
            </Section>
        )}

        <Section id="details" title="Om prosjektet">
          <Card>
            <div className="long-description" style={{ whiteSpace: 'pre-line' }}>
              {longDescription || 'Ingen detaljert beskrivelse tilgjengelig enda.'}
            </div>
          </Card>
        </Section>
      </main>
    </div>
  );
}
