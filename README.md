# Angular 19 Material Starter with Modern Features

Originally created by [@tomastrajan](https://twitter.com/tomastrajan)
Modernized and enhanced for Angular 19 by [Hipolito Nunez](https://github.com/kasparov112000)

[![license](https://img.shields.io/github/license/kasparov112000/angular-ngrx-material-starter.svg)](https://github.com/kasparov112000/angular-ngrx-material-starter/blob/master/LICENSE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Table of Content

- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Development Tools & Commands](#development-tools--commands)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)

## Live Demo
[View the live demo](https://github.com/kasparov112000/angular-ngrx-material-starter)

## Getting Started

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

### Development Features
- **Custom Webpack Configuration** (@angular-builders/custom-webpack ^19.0.0)
- **Font Awesome Integration** (@fortawesome/angular-fontawesome ^1.0.0)
- **Browser Detection** (browser-detect ^0.2.28)
- **UUID Generation** (uuid ^11.0.5)

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

## Troubleshooting

- **Blocking at emitting LicenseWebpackPlugin when npm start** - try using [cnpm](https://github.com/cnpm/cnpm) instead of npm

## Contributors

### Project Leads
- [Tomas Trajan](https://twitter.com/tomastrajan) - Original creator
- [Hipolito Nunez](https://github.com/kasparov112000) - Angular 19 modernization lead

### Key Contributions
Hipolito Nunez:
- Complete upgrade to Angular 19
- Implementation of modern Angular features
- Performance optimizations
- Build system modernization
- Developer experience improvements

[Previous contributors list and acknowledgments remain...]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
