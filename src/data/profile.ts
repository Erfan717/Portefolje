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
  study: 'Bachelor i Informasjonssystemer, Universitetet i Agder',
  location: 'Kristiansand, Norge',
  intro:
    'Jeg er en nysgjerrig IT-student og juniorutvikler som liker å bygge nyttige løsninger. Jeg trives i tverrfaglige team og jobber strukturert med fokus på kvalitet.',
  experience: [
    {
      title: 'Bachelor i Informasjonssystemer',
      organization: 'Universitetet i Agder',
      period: '2024 – nå',
      details: 'Fokus på webutvikling, databaser, skyplattformer og samarbeid i agile team.'
    },

    {
      title: 'Prosjekt: AOR',
      organization: 'Studentprosjekt',
      period: '2025',
      details: 'Fullstack webapplikasjon for registrering og administrasjon av data, utviklet med fokus på struktur, sikkerhet og skalerbarhet.'
    }
  ],
  skillGroups: [
    {
      label: 'Språk',
      items: ['TypeScript', 'C#', 'Python', 'SQL', `HTML`,]
    },
    {
      label: 'Rammeverk og verktøy',
      items: ['React', `ASP.Net Core`, `Entity Framework`, 'Git', 'Docker', `VS Code`, `xUnit`, `ChatGPT`, `GitHub Copilot`]
    },
  ],
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
    email: 'erfans1205@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/erfan-sarwari',
    github: 'https://github.com/Erfan717'
  }
};
