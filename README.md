# Abner Lighting - Static Homepage

Plain HTML + Tailwind CSS v4 homepage.

## Develop

- Build CSS once:

```sh
npm run build:css
```

- Watch CSS during edits:

```sh
npm run dev:css
```

Open `public/index.html` in your browser (or use a simple static server).

## Structure

- `public/index.html` — homepage
- `src/styles.css` — Tailwind entry (compiled to `public/styles.css`)

## Notes

- Drawer menu: full-screen on mobile, left half on desktop.
- Hero carousel: full viewport (width/height), horizontal scroll with snap.
