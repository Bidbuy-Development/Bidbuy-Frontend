# Bidbuy-Frontend Developer Guide

## Project Structure & Best Practices

Follow these guidelines to keep the codebase maintainable, scalable, and developer-friendly.

### 1. Folder Structure

- **src/**: All source code (routes, components, styles, utils, etc.)
- **public/**: Static assets (images, fonts, icons)
- **.env.local**: Environment variables (never commit secrets)
- **README.md**: Project documentation

#### Inside `src/`

- **app/**: Next.js App Router. Organize by route (e.g. `app/auth/signin/page.js`).
- **components/**: Reusable UI components, grouped by feature or type.
- **styles/**: CSS files (global and modules)
- **lib/** or **utils/**: Helper functions, API clients, shared logic
- **hooks/**: Custom React hooks
- **context/**: React context providers
- **types/**: TypeScript types (if using TypeScript)

### 2. Naming Conventions

- Use **PascalCase** for components and folders
- Use **camelCase** for functions and variables
- Keep names descriptive and concise

### 3. Feature-Based Grouping

For large projects, group files by feature/domain:

- `src/features/auth/`
- `src/features/dashboard/`

Each feature can have its own components, hooks, and styles.

### 4. General Guidelines

- Avoid deep nesting; keep folder hierarchy shallow
- Separate UI and business logic
- Use index files for barrel exports when appropriate
- Add README.md files in subfolders to document their purpose

### 5. Developer Instructions

- **Branching:** Use feature branches for new work. Merge via pull requests.
- **Commits:** Write clear, descriptive commit messages.
- **Code Reviews:** All changes must be reviewed before merging.
- **Testing:** Add and update tests for new features and bug fixes.
- **Linting:** Run `npm run lint` before pushing code.
- **Dependencies:** Use only necessary packages. Remove unused dependencies.
- **Environment:** Never commit secrets or sensitive data.
- **Documentation:** Update documentation as needed for new features or changes.

---

Adhering to these practices will help all developers work efficiently and keep the project healthy.
