import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { ProjectCard } from '../components/ProjectCard';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { profile } from '../data/profile';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const scrollVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export function Home() {
  const { name, study, location, intro, experience, skillGroups, aiTools, projects, contact } = profile;

  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
    >
      <motion.header 
        className="hero"
        variants={scrollVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div>
          <p className="hero__kicker">Portefølje · IT-student</p>
          <h1 className="hero__title">{name}</h1>
          <p className="hero__subtitle">{study}</p>
          <p className="hero__location">{location}</p>
          <p className="hero__intro">{intro}</p>
          <div className="hero__actions">
            <motion.a 
              className="button button--primary" 
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
            >
              Ta kontakt
            </motion.a>
            <motion.a 
              className="button button--ghost" 
              href={contact.linkedIn} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.header>


      <main className="content">
        <Section id="experience" title="Erfaring" description="Utdanning, praksis og studentprosjekter">
          <div className="grid grid--two">
            {experience.map((item, index) => (
              <motion.div 
                key={item.title} 
                variants={scrollVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
              >
                <Card title={item.title} meta={`${item.organization} · ${item.period}`}>
                  <p className="muted">{item.details}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Ferdigheter" description="Språk, rammeverk og arbeidsmåter">
          <div className="grid grid--three">
            {skillGroups.map((group, index) => (
               <motion.div 
                 key={group.label} 
                 variants={scrollVariants}
                 initial="offscreen"
                 whileInView="onscreen"
                 viewport={{ once: false, amount: 0.2 }}
                 custom={index}
               >
                <Card title={group.label}>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="ai-tools" title="AI-verktøy" description="Verktøy jeg bruker for raskere leveranser">
          <motion.div 
            className="tag-row"
            variants={scrollVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
          >
            {aiTools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </motion.div>
        </Section>

        <Section id="projects" title="Prosjekter" description="Utvalgte prosjekter med kort beskrivelse">
          <div className="grid grid--three">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={scrollVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Kontakt" description="Ta gjerne kontakt for en prat eller samarbeid">
          <div className="contact-grid">
            <motion.div 
              variants={scrollVariants} 
              initial="offscreen" 
              whileInView="onscreen" 
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card title="E-post" footer={<a className="text-link" href={`mailto:${contact.email}`}>{contact.email}</a>}>
                <p className="muted">Raskest svar på hverdager.</p>
              </Card>
            </motion.div>
            <motion.div 
              variants={scrollVariants} 
              initial="offscreen" 
              whileInView="onscreen" 
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card title="LinkedIn" footer={<a className="text-link" href={contact.linkedIn} target="_blank" rel="noreferrer">{contact.linkedIn}</a>}>
                <p className="muted">Koble for faglig nettverk og oppdateringer.</p>
              </Card>
            </motion.div>
            <motion.div 
              variants={scrollVariants} 
              initial="offscreen" 
              whileInView="onscreen" 
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card title="GitHub" footer={<a className="text-link" href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a>}>
                <p className="muted">Kode, eksperimenter og studentprosjekter.</p>
              </Card>
            </motion.div>
          </div>
        </Section>
      </main>
    </motion.div>
  );
}
