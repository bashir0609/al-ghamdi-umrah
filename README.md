# Al Ghamdi Umrah (Astro static site)

Exact design preservation of the supplied standalone HTML. No CMS, database, login, or backend.

## Run locally

Requires Node.js 20.3+ and npm with network access:

```bash
npm install
npm run dev
```

Visit http://localhost:4321. Production build: `npm run build`. Upload generated `dist/` to any static host.

## Source files

- `src/pages/index.astro`: actual Astro page containing original HTML markup, not an injected HTML document.
- `public/styles/original.css`: extracted original CSS, unchanged. Includes original embedded hero background image.
- `public/scripts/original.js`: extracted original WhatsApp enquiry script, unchanged.
- `reference/original.html`: exact original file for comparison.

Important: The reference form asks for Iqama and includes it in WhatsApp message text. This was retained solely because the requested behavior must be identical. Review the privacy implications before publishing.

No new features or styling changes were made. The Google Fonts stylesheet loads from Google when connected to the internet.
