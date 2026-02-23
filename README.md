# minions-oss-projects

**Project definitions, repos, version history, and health status**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-oss-projects/sdk minions-sdk

# Python
pip install minions-oss-projects

# CLI (global)
npm install -g @minions-oss-projects/cli
```

---

## CLI

```bash
# Show help
oss-projects --help
```

---

## Python SDK

```python
from minions_oss_projects import create_client

client = create_client()
```

---

## Project Structure

```
minions-oss-projects/
  packages/
    core/           # TypeScript core library (@minions-oss-projects/sdk on npm)
    python/         # Python SDK (minions-oss-projects on PyPI)
    cli/            # CLI tool (@minions-oss-projects/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [oss-projects.minions.help](https://oss-projects.minions.help)
- Blog: [oss-projects.minions.blog](https://oss-projects.minions.blog)
- App: [oss-projects.minions.wtf](https://oss-projects.minions.wtf)

---

## License

[MIT](LICENSE)
