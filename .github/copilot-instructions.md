# Copilot / AI Agent Instructions for microservice-demo 🔧

## Quick summary
- This repository currently contains only a minimal `package.json` (Node project). There are no source files, tests, CI configs, or documentation. The `package.json` declares `main: index.js` and a placeholder `test` script.

## What you need to know (big picture) 💡
- Purpose: The repo name suggests a microservice demo but there is no code or docs to confirm architecture. Treat this as an empty/initial Node project scaffold.
- Entry point: Package sets `main` to `index.js`. If adding implementation, ensure the runtime entrypoint is either `index.js` at repo root or update `package.json` accordingly.

## When you (the agent) start working
1. Inspect `package.json` and run the obvious commands:
   - `npm install` to create `node_modules` (if you add dependencies, update package-lock.json)
   - `npm test` (currently the script exits with error; this indicates there are no tests yet)
2. If the maintainer intention is unclear, open an issue or ask clarifying questions before implementing large features. Use the template below in your question:
   > "This repo currently only contains `package.json`. Do you want a minimal runnable microservice scaffold (Express + Dockerfile + basic tests), or should I implement a specific microservice from an attached spec?"

## Actionable first PRs (prioritized) ✅
- Add a short `README.md` describing the intended demo and how to run/test locally.
- Add a minimal runnable entrypoint (`index.js` or `src/index.js`) that logs a confirmation and respects `main` in `package.json`.
- Add a basic `test` script and at least one unit test (e.g., using Jest or Vitest) so `npm test` succeeds.
- Optionally add `.gitignore`, a `Dockerfile` and a `package.json` scripts section for start/build/test.

> Note: Create each change as a small, focused PR with a clear title and description. Keep surface area small so maintainers can review quickly.

## Project-specific conventions to follow
- Mirror existing package.json fields when adding files (e.g., keep `main` consistent).
- Favor minimal, well-documented changes. Because there is no existing style or tests, avoid imposing heavy frameworks unless requested.

## Examples from this repo
- `package.json` shows the only concrete config: `"main": "index.js"` and `"test"` placeholder. Use these as the ground truth for small scaffolding changes.

## Testing and verification 🔬
- After adding a test framework, update `scripts.test` so `npm test` returns success in CI and locally.
- If you add a runtime (Express, Fastify, etc.), include a simple integration smoke test that starts the server on an ephemeral port and verifies a health check endpoint.

## Communication & PR etiquette ✍️
- If you cannot determine the maintainer intent from files, add a short issue proposing an approach before creating a large PR.
- Use short, descriptive commits and PRs, and include commands to reproduce locally (what you ran and expected results).

---

If anything in this file is unclear or you want me to include additional templates (issue/PR/checklist/CI configs), tell me what you'd prefer and I will iterate. ✨
