# Deploy to Vercel

This is a static Astro website. There is no CMS, database, login or API.

## Recommended: Git repository

1. Open the `al-ghamdi-umrah-astro-fixed` project directory (the folder containing `package.json`).
2. Commit the CONTENTS of that folder to the ROOT of your GitHub repository. The top-level of your repository should contain `package.json`, `astro.config.mjs`, `src/`, and `public/`.
3. Import the repository into Vercel.
4. In Project Settings > Build and Deployment: Framework Preset = Astro; Root Directory = `./` (repository root); Build Command = `npm run build`; Output Directory = `dist`; Install Command = `npm install`.
5. Deploy; check the Vercel Build Logs for `astro build` and generated `dist/index.html`.

## If you keep the OLD ZIP layout

The old ZIP contains an enclosing `al-ghamdi-umrah/` folder. If that folder is committed as-is, set Vercel Root Directory to `al-ghamdi-umrah` instead of `./`.

## Local check

Run `npm install && npm run build`. Ensure `dist/index.html` exists. Do not deploy until this succeeds.

## Troubleshooting

A Vercel `404 NOT_FOUND` at `/` can indicate Vercel built the wrong repository folder, deployed a directory without `dist/index.html`, or is using an incorrect Build/Output setting. Inspect Vercel Deployment > Build Logs and Source details.

The existing enquiry script sends Iqama details through WhatsApp, per the original provided HTML. Review this sensitive-data collection before public launch.
