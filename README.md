# dankort-eksamen-team11

--------- Om projektet ---------
Dette projekt er vores 2. semesters eksamensprojekt, udviklet af Team 11. Vi har udviklet et dynamisk website med HTML, CSS og JavaScript, hvor indholdet hentes fra en database i Supabase, som vi selv har opbygget.

Sitet består af flere sider, hvor brugeren kan:

- FORSIDE: På forsiden får brugeren et overblik over hjemmesiden og de fordele, Dankort tilbyder.
- HVORFOR OS SIDE: En side, der forklarer, hvorfor det er en fordel at vælge Dankort.
- PROFIL SIDE: En profilside, hvor brugeren kan følge sin personlige impact gennem donationer til Den Danske Naturfond. Brugeren har også mulighed for at designe sit eget betalingskort til mobilbetaling.
- POINT BUTIK SIDE: En side, der viser, hvor mange point brugeren har optjent, samt hvilke oplevelser pointene kan bruges på.
- OFFER SIDE: Når brugeren vælger en oplevelse, bliver de sendt videre til en individuel side med information om den valgte oplevelse.

--------- Links ---------
GitHub repository: [https://github.com/TEAM-11-EKSAMEN/dankort-eksamen-team11]
GitHub Pages: [https://team-11-eksamen.github.io/dankort-eksamen-team11/]
Figma: [https://www.figma.com/design/crt2GOJGXJBp0svSI2pEFl/Dankort-Eksamen-2026?node-id=0-1&t=PEeJs0oSUZ0D3qr2-1]

--------- Projektstruktur ---------
Projektet er opdelt i HTML, CSS og JavaScript-filer.

dankort-eksamen-team11/
├── index.html
├── about.html
├── profile.html
├── point.html
├── offer.html
├── css/
│   ├── reset.css
│   ├── general.css
│   ├── componenter.css
│   ├── index.css
│   ├── about.css
│   ├── profile.css
│   ├── point.css
│   └── offer.css
├── js/
│   ├── menu.js
│   ├── about-slider.js
│   ├── profile.js
│   ├── point.js
│   └── offer.js
└── README.md

--------- Filbeskrivelser ---------

- index.html – forsiden
- about.html – hvorfor vælge os
- profile.html – personlig profil
- point.html – viser en liste med data fra API'et fra supabase
- offer.html – viser detaljer om en valgt oplevelse med data fra API'et fra supabase
- style.css – styler designet
- JavaScript-filer – styrer det dynamiske indhold på de forskellige sider og de bevægelige elementer

--------- Hvordan koden bliver dynamisk ---------

- Point.html og offer.html er de dynamiske sider, og de har hver fået en javascript for at kunne gøre det dynamisk.
  --- Link superbase til kode ---
- For at forbinde hjemmesiden til databasen bruges en Supabase URL og en API-nøgle. Med supabase.createClient() oprettes forbindelsen, så JavaScript kan hente data fra databasen og vise det dynamisk på siden.
- Data bliver hentet fra Supabase med .select("\*"), som fetcher indholdet fra tabellen dankort_extra ind i JavaScript-koden.

- point.js
  --- Bruges på point-siden med cards.
  --- Her hentes data fra Supabase-databasen, og alle tilbud bliver vist dynamisk som cards.

  -- Flow:

1. Siden loader
2. JavaScript kører
3. Data hentes fra Supabase-tabellen dankort_extra
4. Data bliver gennemgået med forEach()
5. HTML-strukturen til cards bliver genereret dynamisk i JavaScript og indsat i .cards-container i point.html.
6. Brugeren kan klikke på et card
7. Cardet linker videre til offer.html?id=...
   --- Det gør siden dynamisk, fordi alle cards bliver genereret automatisk ud fra databasen. Hvis der tilføjes nye tilbud i databasen, vises de automatisk på siden uden at ændre HTML-koden.

- offer.js
  --- Bruges på detaljesiden for et tilbud.
  --- Denne fil læser et id fra URL’en og henter derefter det rigtige tilbud fra Supabase.

-- Flow:

1. Brugeren klikker på en CTA på card
2. id sendes med i URL’en
3. offer.js læser id med URLSearchParams
4. Data hentes fra Supabase, hvor id matcher
5. Indholdet indsættes dynamisk i HTML’en
   --- Det gør det muligt at genbruge den samme offer.html til alle tilbud. I stedet for at lave én HTML-side per tilbud, bliver indholdet udskiftet dynamisk ud fra databasen og URL-id’et.

--------- Navngivning ---------
-- Vi har navngivet vores filer, variabler og funktioner, så de er så selvforklarende og overskuelige som muligt.
-- Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet, læsevenlig og følger almindelige JavaScript-konventioner.

Eksempler på variabler
-- js

- const supabaseUrl; --> Indeholder URL’en til Supabase-databasen.
- const supabaseKey; --> Indeholder API-nøglen, som giver adgang til databasen.
- const client; --> Opretter forbindelsen mellem hjemmesiden og Supabase.
- const container; --> Finder HTML-containeren, hvor cards bliver indsat dynamisk.
- const params; --> Læser parametre fra URL’en.
- const id; --> Henter det specifikke id fra URL’en, så det rigtige tilbud kan vises.

Eksempler på funktioner
-- js

- getOffers(); --> Henter alle tilbud fra databasen.
- getOffer(); --> Henter ét specifikt tilbud ud fra et id.
- forEach(); --> Gennemgår alle tilbud ét ad gangen.
- select(); --> Henter data fra en tabel i Supabase.
- eq(); --> Filtrerer data, så kun det ønskede id hentes.
- single(); --> Sikrer at kun én række bliver returneret.
- createClient(); --> Opretter forbindelse til Supabase-databasen.

--------- Kommentarer i koden ---------
-- Vi har kommenteret de steder i javascript koden, hvor det giver mening. Fx ved funktioner, forbindelsen til Supabase, hentning af data og steder hvor der sker DOM-manipulation.

Eksempel:
// URL til database
const supabaseUrl = "https://iassvoylesrurfkrboat.supabase.co";

// API nøgle som giver adgang til databasen
const supabaseKey = "xxxxxxxx";

// opretter forbindelse til supabase
const client = supabase.createClient(supabaseUrl, supabaseKey);
// henter data fra databasen
async function getOffers() {
const { data, error } = await client
.from("dankort_extra")
.select("\*");
}
--------- Data og JSON-struktur ---------
Vi henter data fra Supabase i JSON-format.

Et objekt fra databasen kan fx se sådan ud:

```json
{
  "id": 1,
  "name": "Tilbudsnavn",
  "billet": "2 billetter",
  "header": "Overskrift på tilbud",
  "info": "Beskrivelse af tilbuddet",
  "fordel": "Brugerens fordel",
  "praktisk": "Praktisk information",
  "point": 450,
  "tilbud": "450 point",
  "img1": "billede1.webp",
  "img2": "billede2.webp"
}
```

Felter vi bruger

- id --> bruges til at sende brugeren videre til den rigtige tilbudsside
- name --> navn på tilbuddet eller samarbejdspartneren
- billet --> tekst som vises på cardet
- header --> overskrift på tilbudssiden
- info --> beskrivelse af tilbuddet
- fordel --> brugerens fordel ved tilbuddet
- praktisk --> praktisk information om tilbuddet
- point --> antal point tilbuddet koster
- tilbud --> tekst som vises i knappen
- img1 --> billede til cards og hero-sektion
- img2 --> ekstra billede til detaljesiden

--------- Git og branches ---------
-- Vi har brugt GitHub til at samarbejde om projektet.
-- Vi har arbejdet med branches, så flere kunne kode samtidig uden at overskrive hinandens ændringer.
--- Vi navngav branchene så vi selv forstår det.

Workflow

1. Oprette en branch med et navn, som giver mening for os
2. Sørge for ikke at arbejde i de samme filer samtidig
3. Kode nye features eller opdatere eksisterende kode i branchen
4. Committe ændringer, når man er færdig med dem
5. Publish og pushe branchen til GitHub
6. Merge branchen til main i GitHub
7. Hvis der opstår konflikter ved merge i GitHub, løser vi dem før vi arbejder videre i koden

Det gjorde samarbejdet mere overskueligt og gjorde det nemmere at holde styr på, hvem der lavede hvilke dele af projektet. Samtidig gjorde workflowet, at der meget sjældent opstod konflikter ved merge.

--------- Udfordringer undervejs ---------

1. En af vores udfordringer var at få forbindelsen til Supabase til at virke korrekt i starten. JavaScript kunne ikke finde navnene og datafelterne fra databasen, hvilket gjorde, at indholdet ikke blev vist på siden.

Løsninger

- Tjekke at supabaseUrl og supabaseKey var skrevet/linket rigtigt
- Sikre at forbindelsen blev oprettet med:
  const client = supabase.createClient(supabaseUrl, supabaseKey);
- Bruge console.log(data) til at tjekke om data blev hentet korrekt
- Kontrollere at kolonnenavnene i databasen matchede navnene i JavaScript
- Sikre at Supabase-scriptet blev importeret korrekt i HTML-filen

2. En af vores udfordringer var at få carousellen på about-siden til at fungere korrekt. Det var især svært at få billederne til at skifte rigtigt mellem aktivt, forrige og næste slide, samtidig med at layoutet fungerede responsivt på mobil, tablet og desktop.

Løsninger

- Bruge classList i JavaScript til at skifte mellem aktive slides
- Arbejde med transform, translate og scale i CSS for at placere billederne korrekt
- Teste carousellen løbende på forskellige skærmstørrelser
- Justere media queries og spacing, så layoutet fungerede responsivt på alle devices

3. En anden af vores udfordringer var designet af oplevelses-cards på points-siden. Vi ville gerne lave en speciel CTA- og tekstboks med en buet/bukket form, hvor teksten med point og billet lå i den høje del af buen, mens knappen lå nedenunder. Det var svært at få formen, placeringen og lagene til at fungere korrekt oven på billederne og samtidig være responsivt på forskellige skærmstørrelser.

Løsninger

- Opdele designet i to bokse:
  .upper-part-box
  .lower-part-box
- Bruge position: absolute til at placere boksene oven på billedet
- Placere .upper-part-box højere op med:
  top: -60px;
- Lave den buede/bukkede form med:
  border-top-left-radius: 2.8rem;
- Bruge z-index til at styre lagene, så den øverste boks lå oven på den nederste boks og billedet

--------- Mulige forbedringer ---------
Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion til tilbud og oplevelser
- Mere genbrug af CSS-klasser, så styling kun behøver at blive skrevet én gang
- En mere struktureret CSS-opsætning med fælles styles til fx fonte, knapper og spacing
- Renere og mere semantisk HTML med mindre brug af unødvendige div-elementer
- Dark mode og light mode

--------- Gruppemedlemmer ---------

- Thomas Severin Jørgensen
- Joel Hald Fabrin
- Lua Skov Rudkjøbing
- Noah Gabriel Noinovic
