
# Vue + Vuetify Starter Template

This is a feature-rich starter template to kickstart your next Vue.js 3 project. It comes pre-configured with a powerful stack including Vite, Vue Router, Pinia for state management, and Vuetify for a beautiful Material Design component library. This template is designed for a rapid and efficient development workflow, allowing you to focus on building your application.

## Features

- **Vue 3:** Utilizes the latest Vue.js features, including the Composition API and `<script setup>` SFCs.
- **Vite:** Next-generation frontend tooling for lightning-fast development and optimized builds.
- **Vue Router:** The official router for Vue.js, pre-configured for handling application navigation.
- **Pinia:** The official state management library for Vue, offering a simple and intuitive API.
- **Vuetify:** A complete Material Design component framework for building stunning user interfaces.
- **TypeScript:** Out-of-the-box support for TypeScript, providing type safety and improved developer experience.
- **ESLint & Prettier:** Integrated linting and code formatting to maintain code quality and consistency.
- **Vitest:** A blazing fast unit test framework powered by Vite.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Create new project directory**
   ```sh
   mkdir <my-project-name> && cd <my-project-name>
   ```

2. **Initialize new project from template**

   ```sh
   npx degit jchrist77/vue-vuetify-starter#app
   ```

3. **Initialize new Git repo**
   ```sh
   git init .
   ```

4. **Install dependencies**
   ```sh
   npm install
   ```

## Available Scripts

- **`npm run dev`**: Starts the development server with hot-reloads.
- **`npm run build`**: Compiles and minifies the application for production.
- **`npm run test`**: Runs the unit tests.
- **`npm run lint`**: Lints the codebase for potential errors and style issues.
- **`npm run format`**: Formats the code using Prettier.

## Project Structure

```
.
├── public
├── src
│   ├── assets
│   ├── components
│   ├── composables
│   ├── config
│   ├── pages
│   ├── plugins
│   ├── router
│   ├── services
│   ├── stores
│   ├── styles
│   ├── types
│   └── main.ts
│   └── App.vue
├── tests
└── vite.config.ts
```

- **`src/assets`**: Static assets like images, styles and fonts.
- **`src/components`**: Reusable Vue components.
- **`src/composables`**: Reusable Vue composables.
- **`src/config`**: Configuration files (e.g., environment variables).
- **`src/pages`**: Application pages (views) for Vue Router.
- **`src/plugins`**: Vue plugins.
- **`src/router`**: Vue Router configuration.
- **`src/services`**: Application services (e.g., API clients).
- **`src/stores`**: Pinia store modules.
- **`src/styles`**: Global stylesheets.
- **`src/types`**: TypeScript type definitions.
- **`src/main.ts`**: The main entry point of the application.
- **`src/App.vue`**: The main Vue application component.
- **`tests`**: Unit, integration and e2e tests.
