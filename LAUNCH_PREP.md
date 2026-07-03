# GenerΛzione — Briefing per il lancio

Questo file riassume lo stato del progetto per chiunque (bot o persona) debba
continuare il lavoro in preparazione al lancio pubblico.

## Stack

- **Next.js 16** (App Router), TypeScript, Tailwind
- Repo GitHub: `generazionenetowrk/generazione` (attualmente **pubblico** —
  vedi sezione "Da decidere" sotto)
- Deploy: **Vercel**, dominio `generazione.network`
- Package manager: `pnpm`

## Stato attuale: sito bloccato su "Coming Soon"

Il file [middleware.ts](middleware.ts) reindirizza **tutto il traffico** a
`/comingsoon`, tranne:
- chi ha un cookie di bypass (vedi sotto)
- le route `/api/*`

**Prima del lancio pubblico: eliminare `middleware.ts` e pushare.** Questo è
l'interruttore che rende il sito visibile a tutti.

### Bypass dev (solo finché il middleware esiste)

Visitare `generazione.network/?preview=generazione-dev-2024` imposta un
cookie valido 7 giorni che permette di vedere il sito intero.
⚠️ Questo segreto è scritto in chiaro nel codice — chiunque legga il repo
pubblico può leggerlo e bypassare il coming soon.

## Cosa è stato fatto finora

1. Middleware di redirect verso `/comingsoon` (con bypass dev)
2. Immagine copertina GID caricata e collegata alla card in `/members`
3. Layout `/members` sistemato: GID centrato in alto, 5 sezioni "in arrivo"
   disposte 3 sopra + 2 centrate sotto
4. Footer landing page: aggiunti link testuali Instagram, YouTube, email di
   contatto (`info@generazione.network`)
5. Form iscrizione (`form.generazione.network/form/contatto`) integrato in
   homepage al posto del vecchio form Kit
6. Form adesione (`form.generazione.network/form/adesione`) integrato nella
   pagina `/gid`
7. **Sicurezza password membri**: la verifica non avviene più lato client.
   La password vive in `MEMBERS_PASSWORD` (env var **server-only**, senza
   prefisso `NEXT_PUBLIC_`) ed è verificata da
   [app/api/members/login/route.ts](app/api/members/login/route.ts), che
   imposta un cookie `httpOnly`. Se la env var manca, il gate rifiuta tutti
   (fail-closed). **Questa variabile è già impostata su Vercel.**
8. Pulizia pre-lancio: link rotti sistemati (logo navbar, bottone "Unisciti"
   nel footer GID), le sezioni non ancora pronte
   (`/clippers-armada`, `/entrepreneurs-network`, `/influencer-network`)
   reindirizzano alla home invece di mostrare pagine incomplete
9. VSL principale integrata come embed **Wistia** (media-id `eailnqdsim`)
   nella hero della homepage, invece di un file video locale da 3.5GB

## Problema risolto: deploy bloccato da Vercel su repo privato

Il repo era stato reso privato per proteggere il segreto di bypass nel
middleware, ma questo ha **bloccato i deploy automatici** — l'integrazione
GitHub↔Vercel non aveva accesso ai repo privati. Per questo motivo **il repo
è tornato pubblico**.

### Da decidere: repo pubblico vs privato

- **Pubblico (stato attuale)**: i deploy funzionano senza intervento, ma il
  segreto di bypass nel middleware è leggibile da chiunque
- **Privato**: più sicuro, ma richiede autorizzare l'app Vercel sui repo
  privati prima di rifarlo:
  1. [github.com/settings/installations](https://github.com/settings/installations)
  2. Configure → Vercel → Repository access → "All repositories" (o
     aggiungere esplicitamente questo repo)
  3. Poi si può rendere privato senza bloccare i deploy

Se si resta pubblici fino al lancio, il rischio è basso (max: qualcuno vede
il sito in anteprima). Da riconsiderare **dopo** il lancio, quando il
middleware sarà comunque rimosso e il segreto non conterà più.

## Checklist finale lancio

- [ ] Decidere se rendere il repo privato (autorizzando prima Vercel) o
      lasciarlo pubblico
- [ ] Verificare che il video Wistia (`eailnqdsim`) sia pubblico/processato,
      non in stato privato o "processing"
- [ ] Eliminare `middleware.ts` e pushare → sito pubblico
- [ ] Test da telefono in incognito subito dopo:
  - `generazione.network` → homepage completa, VSL che parte
  - Form "Unisciti oggi" → si carica (non deve dare 401)
  - Password membri (`Elitegiovane`) → sblocca `/members`
  - Card GID → pagina GID → form adesione in fondo, si carica
  - Footer: link Instagram/YouTube/email funzionanti
- [ ] Revocare eventuali vecchi token GitHub condivisi durante lo sviluppo
      (Settings → Developer settings → Personal access tokens)

## Riferimenti utili

- Password membri: variabile `MEMBERS_PASSWORD` su Vercel (Settings →
  Environment Variables)
- Form contatto: `https://form.generazione.network/form/contatto`
- Form adesione: `https://form.generazione.network/form/adesione`
- Video VSL: Wistia media-id `eailnqdsim`
