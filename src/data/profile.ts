export type ProjectLink = {
  github?: string;
  demo?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
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
    intro: 'Jeg er en nysgjerrig IT-student og juniorutvikler som liker å bygge nyttige løsninger. Jeg trives i tverrfaglige team og jobber strukturert med fokus på kvalitet.',
    experience: [
        {
            title: 'Bachelor i Informasjonssystemer',
            organization: 'Universitetet i Agder',
            period: '2024 – nå',
            details: 'Fokus på webutvikling, databaser, skyplattformer og samarbeid i agile team.'
        },
    ],
    skillGroups: [
        {
            label: 'Språk',
            items: ['TypeScript', 'C#', 'Python', 'SQL', `HTML`,]
        },
        {
            label: 'Rammeverk og verktøy',
            items: ['React', 'ASP.Net Core', 'Entity Framework', 'Git', 'Docker', 'VS Code', 'xUnit', 'ChatGPT', 'GitHub Copilot']
        }
    ],
    projects: [
        {
            id: 'aor',
            name: 'AOR',
            description: 'Fullstack webapplikasjon for registrering og administrasjon av data, utviklet med fokus på struktur, sikkerhet og skalerbarhet.',
            longDescription: 'Dette er et større gruppeprosjekt ... (Legg til mer info her).',
            tags: ['C#', 'ASP.Net Core', 'MVC'],
            links: {
                github: 'https://github.com/MGumpen/aor.git'
            }
        },
        {
            id: 'sensorboard',
            name: 'SensorBoard',
            description: 'Dashboard for IoT-sensorer med websockets, filtrering og sanntidsvarsler.',
            longDescription: 'SensorBoard er utviklet for å overvåke en rekke IoT-enheter i sanntid...',
            tags: ['Node.js', 'WebSocket', 'React'],
            links: {
                github: 'https://github.com/Erfan717/sensorboard'
            }
        },
        {
            id: 'ai-notatassistent',
            name: 'AI Notatassistent',
            description: 'Eksperiment med OpenAI API for å oppsummere forelesningsnotater og foreslå spørsmål.',
            longDescription: 'Dette prosjektet bruker GPT-4 o for å analysere tekstinput...',
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
    },
    aiTools: []
};
