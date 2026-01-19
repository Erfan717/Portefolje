# Portefølje (React + TypeScript)

En minimalistisk, rekrutteringsvennlig portefølje bygget med React og TypeScript. Strukturen er komponentbasert med gjenbrukbare seksjoner, kort og prosjektkort. All data ligger som mock-data i `src/data/profile.ts` for enkel oppdatering.

## Teknologi
- React 18 + TypeScript
- Vite som dev-server/bundle
- Lettvekt CSS uten rammeverk, designet for responsiv visning

## Mappestruktur
```
├─ src/
│  ├─ components/   # Section, Card, ProjectCard, Tag
│  ├─ data/         # profile.ts (mock-data)
│  ├─ styles/       # global.css (tema/typografi/layout)
│  ├─ App.tsx       # Sideoppsett med seksjoner
│  └─ main.tsx      # Inngangspunkt
├─ index.html
├─ package.json
├─ tsconfig*.json
└─ vite.config.ts
```

## Kjøre lokalt
```sh
npm install
npm run dev
```
Åpne URL-en Vite logger (typisk http://localhost:5173).

## Oppdatere innhold
- Rediger `src/data/profile.ts` for navn, studier, intro, erfaring, ferdigheter, AI-verktøy, prosjekter og kontaktinfo.
- Legg til nye prosjekter ved å utvide `projects`-arrayet med navn, beskrivelse, tags og valgfrie lenker (GitHub/demo).

## Videre utvidelse
- Legg til flere seksjoner (f.eks. sertifiseringer eller blogg) via `Section` + `Card` komponentene.
- Koble på CMS eller hentedata fra API senere; beholde typer i `Profile` for forutsigbarhet.
- Legg til analyttikk (f.eks. Plausible) eller dark/light tema ved å utvide `global.css` med CSS-variabler og toggles.