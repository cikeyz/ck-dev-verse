# ck.dev-verse

<p align="center">
  <strong>Terminal-style personal portfolio with a command boot sequence.</strong><br>
  Vanilla HTML, CSS, and JavaScript. No build step.
</p>

<p align="center">
  <a href="https://cikeyz.github.io/ck-dev-verse/">Live Demo</a>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick Start</a>
  &nbsp;·&nbsp;
  <a href="#project-structure">Structure</a>
  &nbsp;·&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111111">
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-22c55e?logo=open-source-initiative&logoColor=white">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/Demo-GitHub%20Pages-222222?logo=github&logoColor=white">
</p>

## Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Design Notes](#design-notes)
- [License](#license)
- [Course Note](#course-note)

## Overview

ck.dev-verse presents a personal site as a terminal session. A boot overlay introduces the page, then sections cover projects, skills, work history, and contact. Styling uses amber-on-black terminal chrome without frameworks.

## Features

| Feature | Description |
|---------|-------------|
| Boot sequence | Command-line overlay before the full site |
| Section nav | About, projects, work, skills, contact |
| Terminal chrome | Amber panels, framed cards, starfield accents |
| Contact form echo | Client-side form response for demo purposes |
| Static deploy | Works from any static host or file open |

## Screenshots

| Portfolio |
|-----------|
| ![ck.dev-verse portfolio](docs/screenshots/portfolio.png) |

## Quick Start

```bash
git clone https://github.com/cikeyz/ck-dev-verse.git
cd ck-dev-verse
python -m http.server 8000
# http://localhost:8000
```

## Project Structure

```text
ck-dev-verse/
├── index.html
├── script.js
├── style.css
├── LICENSE
├── README.md
├── assets/
│   ├── dewise-logo.png
│   ├── dewise-logo.svg
│   ├── dost-logo.png
│   ├── profile.jpg
│   └── pup-logo.png
└── docs/
    └── screenshots/
        └── portfolio.png
```

## Design Notes

- Dark base with amber accent (`#ffcc00`)
- Optional long-lived branch: `theme/teal-cyan` (palette experiment; not merged into `main`)

## License

MIT. See [LICENSE](LICENSE).

## Course Note

Built for CMPE 364 (Web and Mobile Systems), Polytechnic University of the Philippines, under Engr. Arlene B. Canlas. Published here as a standalone project.
