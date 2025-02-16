# Angular 19 Material Starter with Modern Features

Originally created by [@tomastrajan](https://twitter.com/tomastrajan)
Modernized and enhanced for Angular 19 by [Hipolito Nunez](https://github.com/kasparov112000)

[![license](https://img.shields.io/github/license/tomastrajan/angular-ngrx-material-starter.svg)](https://github.com/kasparov112000/angular-ngrx-material-starter/blob/master/LICENSE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Project Revival & Modern Features

This project has been completely revitalized and upgraded to leverage all the latest features that Angular 19 has to offer. The modernization effort includes:

- Upgraded to Angular 19 with standalone components
- Implemented modern Angular features and best practices
- Enhanced performance optimizations
- Updated all dependencies to their latest versions
- Modernized build system and tooling
- Improved developer experience

## Table of Content

- [Getting Started](#getting-started)
- [Useful Commands](#useful-commands)
- [Features](#features)
- [Stack](#stack)

## Getting started

```bash
git clone https://github.com/kasparov112000/angular-ngrx-material-starter.git
cd angular-ngrx-material-starter
npm install
npm start
```

## Development Tools & Commands

### Core Commands
- `npm start` - starts a dev server and opens browser with running app
- `npm run start:prod` - runs full prod build and serves prod bundle
- `npm run build` - builds the project
- `npm run build:prod` - creates production build
- `npm run server` - runs the server component

### Code Quality & Testing
- `npm run test` - runs lint and tests
- `npm run watch` - runs tests in watch mode with ChromeHeadless
- `npm run e2e` - runs end-to-end tests
- `npm run lint` - lints all files (ts, js, html)
- `npm run lint-fix` - automatically fixes linting issues
- `npm run format:write` - formats code using Prettier
- `npm run format:test` - checks if code meets Prettier format rules

### Analysis & Documentation
- `npm run analyze` - analyzes bundle size using webpack-bundle-analyzer
- `npm run contributors:add` - adds new contributors
- `npm run contributors:generate` - generates contributors documentation
- `npm run contributors:check` - verifies contributors list

### CI/CD Integration
- `npm run ci` - runs full CI pipeline including:
  - Format checking
  - Linting
  - Testing with coverage
  - Production build with custom deploy URL

### Development Features
- **Custom Webpack Configuration** (@angular-builders/custom-webpack ^19.0.0)
- **Font Awesome Integration** (@fortawesome/angular-fontawesome ^1.0.0)
- **Browser Detection** (browser-detect ^0.2.28)
- **UUID Generation** (uuid ^11.0.5)

### Code Quality Tools
- ESLint with specialized Angular plugins
- TypeScript ESLint integration
- Prettier code formatting
- Husky for git hooks
- Commitlint for conventional commits

### Webpack Configuration
- Custom webpack configuration support
- Bundle analysis tools
- HTML webpack plugin integration
- Development server with hot reload

## Features

### Core Framework and Libraries
- `Angular ^19.1.5` - Modern powerful framework with standalone components
- `Angular Material ^19.1.3` - Material design component library
- `Angular CLI ^19.1.6` - Command line interface for Angular
- `NgRx ^19.0.1` - One way data flow powered by RxJS Observables
- `RxJS ^7.8.0` - Reactive programming with async collections
- `Bootstrap ^5.3.3` - Responsive layout and grid system
- `TypeScript ~5.7.3` - Enhanced type safety and developer experience
- `i18n ^14.0.0` - Comprehensive internationalization support
- `ESLint ^9.20.1` - Code quality and style checking

### Advanced Features
- **Theming System**
  - Flexible theming support for all components
  - Dark/Light mode switching
  - Custom theme creation capability
  - Runtime theme switching

- **Translations & Internationalization**
  - Multi-language support
  - Lazy-loaded translations
  - Runtime language switching
  - RTL support

- **Animations**
  - Route transition animations
  - Component-level animations
  - Custom animation triggers
  - Smooth state transitions

- **Performance & Architecture**
  - Lazy loading of feature modules
  - Modern standalone components
  - Signal-based state management
  - Progressive Web App (PWA) ready
  - Optimized build system

- **Developer Experience**
  - Comprehensive testing setup with Cypress
  - Font Awesome 5 integration
  - Modern tooling and CLI
  - Hot Module Replacement
  - Quick start templates

## Technology Stack

### Core Framework
- Angular ^19.1.5
- Angular Material ^19.1.3
- Angular CDK ^19.1.3
- Angular CLI ^19.1.6

### State Management & Reactivity
- NgRx Store ^19.0.1
- NgRx Effects ^19.0.1
- NgRx Entity ^19.0.1
- NgRx Router Store ^19.0.1
- RxJS ^7.8.0

### UI & Styling
- Bootstrap ^5.3.3
- Font Awesome ^6.4.0
- Angular Material Components
- Custom theming support

### Internationalization
- @ngx-translate/core ^14.0.0
- Multi-language support
- Lazy loaded translations

### Development & Build Tools
- TypeScript ~5.7.3
- ESLint ^9.20.1
- Webpack ^5.97.1
- Custom Webpack Configuration
- Angular DevTools integration

### Testing Infrastructure
- Jasmine testing framework
- End-to-end testing setup
- CI/CD pipeline integration
- Code coverage reporting

## Original Project Credits

This project was originally created by [Tomas Trajan](https://twitter.com/tomastrajan) and has been modernized while maintaining the spirit of the original implementation. The original project's contributors and their valuable work have been instrumental in creating this foundation.

## Modernization Credits

Modernized and enhanced for Angular 19 by Hipolito Nunez:
- Complete upgrade to Angular 19
- Implementation of modern Angular features
- Performance optimizations
- Build system modernization
- Developer experience improvements

## Contributing

Contributions to further enhance and modernize this project are welcome. Please feel free to submit issues and pull requests.

[Original contributors list remains as is...]
