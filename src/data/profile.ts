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
            longDescription: 'AOR er en applikasjon laget for at piloter og andre flybesetningsmedlemmer skal kunne rapportere hindringer de oppdager under flyvning som ikke er registrert i deres systemer. Som crew kan man logge inn i applikasjonen, og får da tilgang til et kart som viser posisjonen til brukeren. Brukeren kan klikke på en at hurtigknappene på skjermen for å registrere den hindringen de ser foran seg. Ved å legge til punkter på kartet, registreres posisjonen til hindringen automatisk. Når brukeren er fornøyd med plassering av posisjonspunktene, kan brukeren fylle ut et skjema med informasjon om den aktuelle hindringen. Deretter kan brukeren lagre informasjonen som draft til senere redigering, eller sende inn rapporten til registerfører hos NRL teamet til Kartverket. Brukeren kan også finne en liste over sine egne rapporter, hvor draft også lagres, og se status på innsendte rapporter.',
            tags: ['C#', 'ASP.Net Core', 'MVC'],
            links: {
                github: 'https://github.com/MGumpen/aor.git'
            }
        },
        {
            id: 'safemap',
            name: 'SafeMap',
            description: 'Fullstack webapplikajon ment for å rangere områeder i Norge ut ifra hvor godt forberedt de er med tanke på total beredskap. Fokus på ',
            longDescription: 'SafeMap er et GIS-basert prosjekt som undersøker totalforsvaret i Norge gjennom geografisk analyse av samfunnets beredskap og robusthet. Prosjektet bruker åpne geodata til å identifisere sårbarheter, avhengigheter og tilgjengelighet knyttet til innbyggere og kritisk infrastruktur, med mål om å støtte både offentlige beslutninger og økt beredskapsforståelse hos befolkningen.',
            tags: ['Python', 'FastApi', 'SupaBase', "QGIS", "DBeaver" ],
            links: {
                github: 'https://github.com/MGumpen/safemap'
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
        linkedIn: 'https://www.linkedin.com/in/erfan-sarwari-4b652b3a0/',
        github: 'https://github.com/Erfan717'
    },
    aiTools: []
};
