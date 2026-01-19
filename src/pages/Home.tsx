import { Card } from '../components/Card';
import { ProjectCard } from '../components/ProjectCard';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { profile } from '../data/profile';

export function Home() {
  const { name, study, location, intro, experience, skillGroups, aiTools, projects, contact } = profile;

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__kicker">Portefølje · IT-student</p>
        <h1 className="hero__title">{name}</h1>
        <p className="hero__subtitle">{study}</p>
        <p className="hero__location">{location}</p>
        <p className="hero__intro">{intro}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={`mailto:${contact.email}`}>
            Ta kontakt
          </a>
          <a className="button button--ghost" href={contact.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <main className="content">
        <Section id="experience" title="Erfaring" description="Utdanning, praksis og studentprosjekter">
          <div className="grid grid--two">
            {experience.map((item) => (
              <Card key={item.title} title={item.title} meta={`${item.organization} · ${item.period}`}>
                <p className="muted">{item.details}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Ferdigheter" description="Språk, rammeverk og arbeidsmåter">
          <div className="grid grid--three">
            {skillGroups.map((group) => (
              <Card key={group.label} title={group.label}>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="ai-tools" title="AI-verktøy" description="Verktøy jeg bruker for raskere leveranser">
          <div className="tag-row">
            {aiTools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Prosjekter" description="Utvalgte prosjekter med kort beskrivelse">
          <div className="grid grid--three">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Kontakt" description="Ta gjerne kontakt for en prat eller samarbeid">
          <div className="contact-grid">
            <Card title="E-post" footer={<a className="text-link" href={`mailto:${contact.email}`}>{contact.email}</a>}>
              <p className="muted">Raskest svar på hverdager.</p>
            </Card>
            <Card title="LinkedIn" footer={<a className="text-link" href={contact.linkedIn} target="_blank" rel="noreferrer">{contact.linkedIn}</a>}>
              <p className="muted">Koble for faglig nettverk og oppdateringer.</p>
            </Card>
            <Card title="GitHub" footer={<a className="text-link" href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a>}>
              <p className="muted">Kode, eksperimenter og studentprosjekter.</p>
            </Card>
          </div>
        </Section>
      </main>
    </div>
  );
}
