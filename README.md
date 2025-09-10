# Portfolio - Marcel "Marcy" Sobral

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

A modern, accessible, and bilingual portfolio website built with Next.js 15, featuring a Brazilian-inspired design system and optimized performance.

## ✨ Features

- 🌐 **Bilingual Support**: Complete Portuguese and English translations
- ♿ **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- 🇧🇷 **Brazilian Design System**: Custom design tokens with Brazilian-inspired colors
- ⚡ **Performance Optimized**: Core Web Vitals optimization (LCP, FID, CLS)
- 🎨 **Modern UI**: Clean, minimalist design with smooth animations
- 🔧 **Developer Experience**: Hot reload, TypeScript, and ESLint configuration

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19** - UI library with hooks
- **TypeScript 5.0** - Type-safe JavaScript

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion** - Smooth animations and transitions
- **CSS Modules** - Component-scoped styling

### Internationalization

- **Custom i18n** - Lightweight internationalization with React context

### Testing

- **Vitest** - Fast unit test framework powered by Vite
- **React Testing Library** - Testing utilities for React components
- **jsdom** - Browser environment simulation for tests

### Deployment

- **Vercel** - Platform for optimal Next.js deployment

## 📁 Project Structure

This project follows a **scalable, feature-based architecture** optimized for Next.js 15 in 2025:

```
portfolio/
├── src/                          # Source code (main application)
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles
│   ├── components/               # Reusable components (Atomic Design)
│   │   ├── ui/                   # Atoms (buttons, inputs, etc.)
│   │   │   └── button.tsx        # Button component
│   │   ├── common/               # Molecules (form fields, cards)
│   │   ├── layout/               # Organisms (header, footer, nav)
│   │   │   ├── Header.tsx        # Header component
│   │   │   └── Footer.tsx        # Footer component
│   │   └── features/             # Feature-specific components
│   │       ├── Hero.tsx          # Hero section
│   │       ├── About.tsx         # About section
│   │       ├── Projects.tsx      # Projects section
│   │       ├── Skills.tsx        # Skills section
│   │       └── Timeline.tsx      # Timeline section
│   ├── lib/                      # Business logic and utilities
│   │   ├── hooks/                # Custom React hooks
│   │   │   └── useTranslation.ts # Translation hook
│   │   ├── contexts/             # React contexts
│   │   │   └── LocaleContext.tsx # Locale context
│   │   ├── utils/                # Utility functions
│   │   │   └── utils.ts          # General utilities
│   │   ├── constants/            # Constants and configuration
│   │   │   ├── i18n.ts           # i18n configuration
│   │   │   └── translations.ts   # Translation files
│   │   └── types/                # TypeScript type definitions
│   ├── config/                   # Configuration files
│   │   ├── vitest.config.ts      # Vitest configuration
│   │   ├── next.config.ts        # Next.js configuration
│   │   ├── postcss.config.mjs    # PostCSS configuration
│   │   ├── eslint.config.mjs     # ESLint configuration
│   │   └── components.json       # shadcn/ui configuration
│   ├── styles/                   # Global styles and themes
│   ├── tests/                    # Test utilities and setup
│   │   ├── setup.ts              # Test setup file
│   │   └── Header.test.tsx       # Header component tests
│   └── types/                    # Global type definitions
├── public/                       # Static assets
│   ├── images/                   # Image assets
│   └── manifest.json             # PWA manifest
├── components.json               # shadcn/ui configuration (legacy)
├── eslint.config.mjs             # ESLint configuration (legacy)
├── next.config.ts                # Next.js configuration (legacy)
├── postcss.config.mjs            # PostCSS configuration (legacy)
├── vitest.config.ts              # Vitest configuration (legacy)
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

### Architecture Principles

#### 🏗️ **Feature-Based Organization**

- **Components grouped by feature**: Related components are co-located
- **Clear separation of concerns**: UI, business logic, and configuration separated
- **Scalable structure**: Easy to add new features without affecting existing code

#### 🎨 **Atomic Design Pattern**

- **Atoms**: Basic UI elements (buttons, inputs)
- **Molecules**: Simple combinations of atoms (form fields, cards)
- **Organisms**: Complex UI sections (header, navigation, footer)
- **Features**: Complete feature implementations

#### 📦 **Layered Architecture**

- **Presentation Layer**: Components and UI logic
- **Business Logic Layer**: Hooks, contexts, and utilities
- **Data Layer**: Constants, types, and configuration
- **Infrastructure Layer**: External APIs and services

### File Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`, `Button.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTranslation.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Constants**: camelCase (e.g., `i18n.ts`, `translations.ts`)
- **Types**: PascalCase with `Type` suffix (e.g., `UserType.ts`)
- **Tests**: Same name as component with `.test.tsx` suffix

### Import Patterns

```typescript
// Relative imports within the same layer
import { Button } from '../ui/button';

// Absolute imports using @ alias
import { useTranslation } from '@/lib/hooks/useTranslation';

// External dependencies
import { useState } from 'react';
```

### Benefits of This Structure

✅ **Scalability**: Easy to add new features without affecting existing code
✅ **Maintainability**: Clear separation of concerns and logical grouping
✅ **Developer Experience**: Intuitive file locations and consistent patterns
✅ **Testing**: Isolated components and utilities for comprehensive testing
✅ **Performance**: Optimized imports and code splitting opportunities
✅ **Type Safety**: Centralized type definitions and strict TypeScript usage
✅ **Modern Standards**: Follows Next.js 15 and React 19 best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/marcythany/portfolio.git
   cd portfolio

   ```

2. Install dependencies  
   npm install

3. Start development server
   npm run dev

## 🧪 Testing

This project includes a comprehensive test suite built with **Vitest** and **React Testing Library** to ensure code quality and prevent regressions.

### Test Setup

The testing environment is configured with:

- **Vitest**: Fast unit test framework powered by Vite
- **React Testing Library**: Testing utilities for React components
- **jsdom**: Browser environment simulation for tests
- **@testing-library/jest-dom**: Custom Jest matchers for DOM assertions

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests once (CI mode)
npm run test:run

# Generate coverage report
npm run test:coverage
```

### Test Structure

Tests are organized following best practices:

```
components/
├── Component.test.tsx    # Component tests
├── __tests__/           # Alternative test location
└── ui/                  # UI component tests

lib/
├── hooks/
│   └── useHook.test.ts  # Custom hook tests
└── utils/
    └── utility.test.ts  # Utility function tests
```

### Test Categories

#### Component Tests

- **Rendering Tests**: Verify components render correctly with proper structure
- **Interaction Tests**: Test user interactions (clicks, keyboard navigation)
- **Accessibility Tests**: Ensure WCAG compliance and proper ARIA attributes
- **Responsive Tests**: Test mobile/desktop behavior
- **Theme Tests**: Verify light/dark mode functionality

#### Example Test Structure

```typescript
describe('Header Component', () => {
	describe('Rendering', () => {
		it('renders the header with correct structure', () => {
			// Test implementation
		});
	});

	describe('Navigation', () => {
		it('scrolls to section when navigation item is clicked', () => {
			// Test implementation
		});
	});

	describe('Theme Toggle', () => {
		it('toggles to dark theme when button is clicked', () => {
			// Test implementation
		});
	});
});
```

### Mocking Strategy

The project uses comprehensive mocking for external dependencies:

- **Custom Hooks**: `useTranslation` hook is mocked to return controlled values
- **Browser APIs**: `localStorage`, `document.querySelector`, `scrollIntoView` are mocked
- **Context Providers**: `LocaleProvider` wraps components for testing

### Test Coverage

Current test coverage includes:

- ✅ Component rendering and structure
- ✅ User interactions and event handling
- ✅ Accessibility features and ARIA attributes
- ✅ Theme switching functionality
- ✅ Language switching and i18n
- ✅ Mobile menu behavior
- ✅ Error handling and edge cases
- ✅ Keyboard navigation support

### Writing Tests

When adding new tests:

1. **Use descriptive test names** that explain the expected behavior
2. **Group related tests** using `describe` blocks
3. **Mock external dependencies** to isolate component logic
4. **Test user interactions** over implementation details
5. **Include accessibility checks** for interactive elements
6. **Test edge cases** and error conditions

### Continuous Integration

Tests are automatically run in CI/CD pipelines to ensure:

- All tests pass before deployment
- Code coverage meets minimum thresholds
- No regressions are introduced

---

⭐ **Star this repository if you find it helpful!**

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
