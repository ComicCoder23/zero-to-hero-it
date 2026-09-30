# Career Leveling Machine — ComicCoder23

Local **job-ops dashboard** for continuous applications, learning XP, demo work-allowance guardrail, bot roster, SQA/LinkedIn status, and a colourful portfolio showcase.

**Path:** `/workspace/alan-leveling-machine/`  
**Stack:** Vite + React + TypeScript · UK English  
**Data:** static JSON under `src/data/` (derived from `/workspace/alan-portfolio-package/`)

## Run

```bash
cd /workspace/alan-leveling-machine
npm install
npm run dev
```

Open the Vite URL (usually http://localhost:5173).  
Production check: `npm run build`

## Design

Pretty colourful liquid-metal / orb UI: curved cards, glass panels, animated chrome orbs.  
**Showcase strip** features: Tech Tradie Media (public), Mum PC Helper, Look Up, Memory City, KCH Radar, ComicCoder23, ComicCoder23 Builds.

**TTM containment:** TTM appears as a **showcase-only** tile (public site + public LinkedIn). It does **not** bleed into Job Queue, Apply Kit copy, personal LinkedIn drafts, cover notes, or Learning job-path strips (`variant="jobSafe"`).

## Panels

| Panel | Route | What it does |
|---|---|---|
| Command Home | `/` | Hero showcase (incl. TTM), North Star, P0s, demo work-allowance meter, quick links |
| Job Queue | `/jobs` | Kanban/table + daily digest + live job boards/recruiters (no TTM) |
| Apply Kit | `/apply-kit` | Prefill profile fields, cover note, ATS, CV blurb, education safe line — **Copy** buttons (no TTM) |
| Learning & XP | `/learning` | Streak, L1–L4, 12-week plan, YouTube/community links |
| Funding & Money | `/funding` | Scotland routes + demo work-allowance guardrail + live funding links |
| Bot Team | `/bots` | All 8 geeky bots + status chips |
| Credentials | `/credentials` | SQA dual SCN (values redacted in public build) + personal LinkedIn draft + TTM LI note (separate) |
| Recovery Guardian | `/recovery` | Watt Watcher alerts (internal) |
| Package Library | `/package` | Index of package files 01–37 + ChatGPT plan “not found” |
| Proof Projects | `/projects` | Full showcase (incl. TTM) + ComicCoder23 job-safe cards |

## Live links & copy blocks

Every external URL opens in a new tab (`rel=noopener`).  
Copy blocks use `navigator.clipboard` for cover note, LinkedIn draft, ATS keywords, digests, recruiter stub, Apply Kit field dump.

## Hard rules

- Do **not** push to GitHub from this app folder unless the operator asks.
- Do **not** edit TTM site sources or private portfolio TTM branding folders.
- No auto-send email / no LinkedIn account creation from the UI.
- Agents: ComicCoder23 GitHub read-only.

## Related package docs

- Plan: `/workspace/alan-portfolio-package/36-LEVELING-MACHINE-FRONTEND-PLAN.md`
- Status: `/workspace/alan-portfolio-package/37-LEVELING-MACHINE-FRONTEND.md`
