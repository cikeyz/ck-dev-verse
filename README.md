# ck.dev-verse

Terminal-style personal portfolio. Boot with a command-line overlay, then browse projects, skills, work, and contact. Vanilla HTML, CSS, and JavaScript.

## Features

| Feature | Description |
|---------|-------------|
| Boot sequence | Command-line overlay before the full site |
| Section nav | About, projects, work, skills, contact |
| Terminal chrome | Amber-on-black panels and starfield accents |
| No build step | Open `index.html` or use any static server |

## Quick start

```bash
# open index.html
# or
python -m http.server 8000
```

## Structure

```text
ck-dev-verse/
  index.html
  script.js
  style.css
  assets/
```

## Design notes

Dark UI with amber accents (`#ffcc00`). Optional branch `theme/teal-cyan` keeps a teal palette experiment. `main` is the amber terminal look.

## License

MIT. See [LICENSE](LICENSE).

## Course note

Built for CMPE 364 (Web and Mobile Systems), Polytechnic University of the Philippines, under Engr. Arlene B. Canlas. Published here as a standalone project.
