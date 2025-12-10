# Contributing to Boids

Welcome to Winter of Open Source! 🎉

We're excited to have you contribute to this flocking simulation project.

## Getting Started

### Prerequisites

1. A modern browser (Chrome/Firefox recommended)
2. Git installed on your system
3. A GitHub account
4. Node.js _or_ Python 3 (for running a local server)

### Setting Up Local Environment

1. **Fork the repository**
   Click the “Fork” button on the top right of this repository.

2. **Clone your fork**

```bash
git clone https://github.com/YOUR_NAME/boids.git
cd boids
```

3. **Start a local development server**

Choose one:

```bash
python3 -m http.server 8000

npx http-server
```

4. **Open the simulation**

Visit:

```
http://localhost:8000
```

This should display the interactive Boids simulation.

## How to Contribute

### Step 1: Choose an Issue

Browse the [open issues](../../issues) and look for labels:

1. `good first issue` – beginner friendly
2. `easy`, `medium`, `hard` – task difficulty
3. `documentation`, `bug`, `feature`, `enhancement`

### Step 2: Assign Yourself

1. Comment `/assign` on the issue
2. Wait for maintainer approval
3. Complete the issue within **48 hours**
4. Work on **only one issue at a time**

### Step 3: Create a Branch

```bash
git checkout -b fix/issue-number-short-description
```

Example branch names:

- `fix/12-boid-alignment-bug`
- `feature/33-add-trails`
- `docs/08-improve-readme`

### Step 4: Make Changes

- Follow the existing code structure
- Add meaningful comments
- Keep commits atomic
- Test your changes in the browser before pushing

### Step 5: Commit Changes

```bash
git add .
git commit -m "Clear commit message"
```

### Step 6: Push & Create PR

```bash
git push origin fix/issue-number-short-description
```

Then:

1. Open a PR via “Compare & pull request”
2. Link the issue using `Fixes #<issue-number>`
3. Describe your changes clearly
4. Add screenshots/behavior GIFs when relevant
5. Fill out all checklist items

## PR Acceptance Criteria

- Code is clean, readable, and commented
- Follows existing JS style conventions
- No unexplained magic numbers
- PR is linked to an issue
- Behavior tested in-browser
- Screenshots or GIFs included when relevant
- No plagiarism

## Points System (Winter of Open Source)

| Contribution Type | Points |
| ----------------- | ------ |
| Easy Issue        | 10     |
| Medium Issue      | 20     |
| Hard Issue        | 40     |
| Documentation Fix | 5      |
| Bug Fix           | 20     |
| Feature Addition  | 30     |

### Bonuses

1. First 10 PRs: +10 points
2. First PR of the week: +10 points
3. Most impactful PR: +50 points

## Reporting Bugs

Include:

- Description of issue
- Steps to reproduce
- Expected vs actual behavior
- Browser used
- Screenshots/videos if applicable

## Suggesting Features

Provide:

- Feature description
- Why it’s useful
- Optional implementation ideas

> [!NOTE]
> Use the default templates when opening issues or PRs.

## Code Style

- Use 2-space indentation
- Use `const` whenever possible, `let` when needed
- Use descriptive variable names
- Add comments for complex algorithms
- Keep functions focused and small
- Keep rendering logic separate from physics logic
- Avoid inline styles in HTML

### Example

```javascript
// Good: explains WHY the rule is applied
// Steering away from nearby boids to prevent crowding
separation(neighbors) { ... }

// Bad: explains WHAT (already obvious)
separation(neighbors) { ... }
```

## Getting Help

- Discord: [Server link]()
- GitHub Discussions
- Comment directly on issues for guidance

## Important Rules

1. Work on **one issue at a time**
2. Finish assigned issues in **48 hours** (extensions possible)
3. Respect the code of conduct
4. PRs must link to an issue
5. Avoid plagiarism or low-effort AI-generated content

<p>
<center>
<b>Happy Contributing! <3</b>
</center>
</p>
