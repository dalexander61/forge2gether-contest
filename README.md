# Forge2gether Contest

Phase 1 scaffold for the Forge2gether Essay Contest operations system.

## Phase 1 Architecture

- **Public Web (`web`)**: Next.js + TypeScript + Tailwind, deployed on Vercel, static pages only.
- **Automation (`google-apps-script`)**: Google Apps Script modules for signup, training, entry, judging, finalists, and certificates.
- **Operations Docs (`docs`)**: Runbook, rubric, email templates, and data dictionary placeholders.
- **Form/Sheet Backbone**: Intended to connect to Google Forms and Google Sheets in later implementation phases.

## Explicit Phase 1 Constraints

- No Supabase
- No login/auth implementation
- No database integration
- No Google Forms integration yet
- No private URLs, IDs, or secrets in repo

## Project Structure

```txt
forge2gether-contest/
  product.md
  README.md
  .cursor/
    rules/
      apps-script.mdc
      privacy-and-minors.mdc
      project-overview.mdc
      tech-stack.mdc
      ui-style.mdc
  web/
    app/
      admin/page.tsx
      contest/page.tsx
      faq/page.tsx
      privacy/page.tsx
      rules/page.tsx
      submit/page.tsx
      training/page.tsx
      globals.css
      layout.tsx
      page.tsx
    components/
    lib/
    public/
    .gitignore
    next-env.d.ts
    next.config.ts
    package.json
    postcss.config.mjs
    tailwind.config.ts
    tsconfig.json
  google-apps-script/
    config.gs
    ids.gs
    signup.gs
    training.gs
    entry.gs
    judging.gs
    finalists.gs
    certificates.gs
    emailTemplates.gs
  docs/
    admin-runbook.md
    email-templates.md
    judging-rubric.md
    data-dictionary.md
```