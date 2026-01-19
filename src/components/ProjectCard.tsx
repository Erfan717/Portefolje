import { useNavigate } from 'react-router-dom';
import { Card } from './Card';
import { Tag } from './Tag';
import type { Project } from '../data/profile';

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const { id, name, description, tags, links } = project;

  const handleCardClick = () => {
    navigate(`/project/${id}`);
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const actions = (
    <div className="link-row">
      {links?.demo && (
        <a 
          className="text-link" 
          href={links.demo} 
          target="_blank" 
          rel="noreferrer"
          onClick={handleLinkClick}
        >
          Demo
        </a>
      )}
      {links?.github && (
        <a 
          className="text-link" 
          href={links.github} 
          target="_blank" 
          rel="noreferrer"
          onClick={handleLinkClick}
        >
          GitHub
        </a>
      )}
    </div>
  );

  return (
    <Card 
      onClick={handleCardClick}
      title={name} 
      footer={actions}
    >
      <p className="muted" style={{ marginBottom: '16px' }}>{description}</p>
      <div className="tag-row">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Card>
  );
}
