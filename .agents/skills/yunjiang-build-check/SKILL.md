---
name: yunjiang-build-check
description: Use this skill after code changes in the Yunjiang Lounge website to run build checks, inspect git status, review changed files, and prepare a clear delivery summary without pushing unless explicitly requested.
---

# Yunjiang Build Check Skill

Use this skill after modifying the Yunjiang Lounge website.

## Default Workflow

When applicable, do the following checks:

1. Inspect current changes with git status.
2. Review changed files with git diff --stat.
3. Build the project with npm run build.
4. If the build fails, read the error carefully, fix only the relevant issue, and run the build again.
5. If the build passes, summarize the result clearly.

## Git Rules

Do not push to GitHub unless the user explicitly asks.

Do not commit unless the user explicitly asks or the current task clearly requested a commit.

If committing, use concise commit messages such as:

- refine appointment form styling
- polish liquid glass navigation
- fix mobile layout spacing
- update brand copy section

## Delivery Summary Format

After checks, report:

- Build result
- Files changed
- Main visual or code changes
- Whether commit or push was done
- Any remaining risks or manual checks needed
