import { Card } from './Card';
import { Tag } from './Tag';
import type { Project } from '../data/profile';

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, tags, links } = project;

  const actions = (
    <div className="link-row">
      {links?.demo && (
        <a className="text-link" href={links.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      )}
      {links?.github && (
        <a className="text-link" href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
    </div>
  );

  return (
    <Card title={name} footer={actions}>
      <p className="muted">{description}</p>
      <div className="tag-row">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Card>
  );
}
