export type ProjectLink = {
  github?: string;
  demo?: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  links?: ProjectLink;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  details: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  study: string;
  location: string;
  intro: string;
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  aiTools: string[];
  projects: Project[];
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
};

export const profile: Profile = {
  name: 'Erfan Sarwari',
  study: 'Bachelor i Informasjonsteknologi, OsloMet',
  location: 'Oslo, Norge',
  intro:
    'Jeg er en nysgjerrig IT-student og juniorutvikler som liker å bygge nyttige løsninger med React, TypeScript og AI-verktøy. Jeg trives i tverrfaglige team og jobber strukturert med fokus på kvalitet.',
  experience: [
    {
      title: 'Bachelor i Informasjonsteknologi',
      organization: 'OsloMet',
      period: '2024 – nå',
      details: 'Fokus på webutvikling, databaser, skyplattformer og samarbeid i agile team.'
    },
    {
      title: 'Sommerstudent IT',
      organization: 'Statens IT',
      period: 'Sommer 2025',
      details: 'Automatiserte rapportering med Python, satte opp dashboards og brukte GitHub Copilot i parprogrammering.'
    },
    {
      title: 'Prosjekt: Smarte Ruter',
      organization: 'Studentprosjekt',
      period: '2024',
      details: 'Bygget en React + Node løsning for å vise sanntidsdata og forslag til optimal reiserute.'
    }
  ],
  skillGroups: [
    {
      label: 'Språk',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL']
    },
    {
      label: 'Rammeverk og verktøy',
      items: ['React', 'Node.js', 'Express', 'Vite', 'Jest', 'Cypress']
    },
    {
      label: 'Arbeidsflyt',
      items: ['Git', 'GitHub Actions', 'Docker', 'Figma', 'Design Systems']
    }
  ],
  aiTools: ['ChatGPT', 'GitHub Copilot', 'OpenAI API', 'Notion AI'],
  projects: [
    {
      name: 'Studieplanlegger',
      description: 'Planlegger for emner med drag-and-drop, påminnelser og progresjonstavle.',
      tags: ['React', 'TypeScript', 'Drag & Drop'],
      links: {
        github: 'https://github.com/Erfan717/studieplanlegger'
      }
    },
    {
      name: 'SensorBoard',
      description: 'Dashboard for IoT-sensorer med websockets, filtrering og sanntidsvarsler.',
      tags: ['Node.js', 'WebSocket', 'React'],
      links: {
        github: 'https://github.com/Erfan717/sensorboard'
      }
    },
    {
      name: 'AI Notatassistent',
      description: 'Eksperiment med OpenAI API for å oppsummere forelesningsnotater og foreslå spørsmål.',
      tags: ['OpenAI', 'TypeScript', 'Prompt Engineering'],
      links: {
        github: 'https://github.com/Erfan717/ai-notes'
      }
    }
  ],
  contact: {
    email: 'erfan.sarwari@example.com',
    linkedIn: 'https://www.linkedin.com/in/erfan-sarwari',
    github: 'https://github.com/Erfan717'
  }
};
