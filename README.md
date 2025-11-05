# 🌤️ Weather App

<div align="center">

[![Author](https://img.shields.io/badge/Author-Karthikeyan--BE-blue?style=flat-square&logo=github)](https://github.com/Karthikeyan-BE)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A modern, performant weather application built with React and Vite, showcasing clean architecture and contemporary development practices.

[Live Demo](#) • [Report Bug](https://github.com/Karthikeyan-BE/Weather_MERN/issues) • [Request Feature](https://github.com/Karthikeyan-BE/Weather_MERN/issues)

</div>

---

## 📋 Table of Contents

- [Design Philosophy](#-design-philosophy)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Scripts Reference](#-scripts-reference)
- [Contributing](#-contributing)
- [Credits](#-credits)

---

## 🎨 Design Philosophy

This application embodies modern web development principles:

- **Component-Driven Architecture**: Modular, reusable components that promote maintainability
- **Separation of Concerns**: Clear distinction between UI logic, state management, and utilities
- **Performance First**: Leveraging Vite's lightning-fast HMR and optimized build process
- **Developer Experience**: ESLint configuration and structured codebase for collaborative development
- **Scalable Patterns**: Context API for state management, custom hooks for reusable logic

---

## 🛠️ Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|----------|
| **React** | 18.3.1 | UI library with hooks and modern patterns |
| **Vite** | 6.0.1 | Next-generation frontend tooling |
| **JavaScript (ES6+)** | Latest | Modern language features |

### Development Tools

- **ESLint** - Code quality and consistency
- **@vitejs/plugin-react** - Fast Refresh and JSX transformation
- **React DOM** - DOM rendering and manipulation

### Key React Patterns Utilized

- ✅ Functional Components
- ✅ React Hooks (useState, useEffect, useContext)
- ✅ Context API for global state
- ✅ Custom Hooks for logic reusability
- ✅ Component Composition

---

## 🏗️ Architecture

### Modular Structure

The application follows a clean, modular architecture designed for scalability:

```
src/
├── Components/      # Reusable UI components
├── Context/         # Global state management (Context API)
├── Utilities/       # Custom hooks and helper functions
├── assets/          # Static assets (images, icons, styles)
├── App.jsx          # Root component and routing logic
├── main.jsx         # Application entry point
└── index.css        # Global styles and CSS variables
```

### Component Organization

- **Smart Components**: Handle business logic and state management
- **Presentational Components**: Focus purely on UI rendering
- **Composition Pattern**: Building complex UIs from simple components

### State Management Strategy

- **Context API**: Centralized state management in `Context/` folder
- **Local State**: Component-level state with useState
- **Props Drilling Prevention**: Context providers for deep component trees

---

## ✨ Features

### Current Capabilities

- 🌡️ **Real-time Weather Data**: Fetch current weather conditions
- 📍 **Location-based Search**: Get weather for any city worldwide
- 🎯 **Clean UI/UX**: Intuitive and responsive interface
- ⚡ **Fast Performance**: Optimized with Vite and React 18
- 🎨 **Modern Design**: Contemporary styling and layouts

### Custom Hooks

**`useDate`** (Located in `Utilities/useDate.jsx`)
- Custom hook for date/time formatting and manipulation
- Demonstrates React hooks best practices
- Reusable across components

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Karthikeyan-BE/Weather_MERN.git
cd Weather_MERN
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables** (if required)

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.weatherapi.com/v1
```

4. **Start development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**

Navigate to `http://localhost:5173` (default Vite port)

---

## 💻 Development

### Modern React & Vite Practices

#### Hot Module Replacement (HMR)

Vite provides instant feedback during development:
- Changes reflect immediately without full page reload
- State is preserved across updates
- Sub-second development server startup

#### Component Development Workflow

```jsx
// Example component pattern used in this project
import React, { useState, useContext } from 'react';
import { WeatherContext } from '../Context';

const WeatherComponent = () => {
  const { weatherData } = useContext(WeatherContext);
  const [loading, setLoading] = useState(false);
  
  // Component logic here
  
  return (
    // JSX rendering
  );
};

export default WeatherComponent;
```

#### Code Quality

The project includes ESLint configuration for maintaining code standards:
- Consistent code style
- Early error detection
- Best practice enforcement

---

## 📁 Project Structure

### Detailed Breakdown

```
Weather_MERN/
├── public/              # Static public assets
├── src/
│   ├── Components/      # React components
│   │   └── [Component folders with related files]
│   ├── Context/         # Context API providers
│   │   └── index.jsx    # Weather context provider
│   ├── Utilities/       # Helper functions and custom hooks
│   │   └── useDate.jsx  # Custom date/time hook
│   ├── assets/          # Images, icons, and static resources
│   ├── App.jsx          # Root application component
│   ├── main.jsx         # ReactDOM render entry
│   └── index.css        # Global styling
├── .gitignore           # Git ignore patterns
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

---

## 🌐 API Integration

### Extensibility Design

The application architecture supports easy API integration and expansion:

#### Weather API Integration Points

```javascript
// Typical API call structure
const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${location}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};
```

#### Adding New API Endpoints

1. Define API functions in a dedicated service file
2. Use Context API to distribute data
3. Handle loading and error states
4. Implement retry logic for failed requests

#### Environment Variables

Vite uses the `VITE_` prefix for environment variables:
- Accessible via `import.meta.env.VITE_VARIABLE_NAME`
- Configure in `.env` files
- Different configurations for dev/prod

---

## 📜 Scripts Reference

### Available Commands

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm run dev` | Start development server with HMR | Active development |
| `npm run build` | Create production-optimized build | Deployment preparation |
| `npm run preview` | Preview production build locally | Pre-deployment testing |
| `npm run lint` | Run ESLint on codebase | Code quality check |

### Advanced Development Scripts

#### Development with Network Access

```bash
npm run dev -- --host
```
Exposes dev server to local network for mobile testing

#### Production Build Analysis

```bash
npm run build -- --mode production
```
Generates optimized bundle with source maps

#### Custom Port Configuration

```bash
npm run dev -- --port 3000
```
Run development server on custom port

---

## 🤝 Contributing

### Contribution Guidelines

We welcome contributions! Follow these steps to contribute:

#### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/Weather_MERN.git
cd Weather_MERN
```

#### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

#### 3. Development Standards

- ✅ Write clean, self-documenting code
- ✅ Follow existing code style and patterns
- ✅ Use meaningful variable and function names
- ✅ Add comments for complex logic
- ✅ Ensure ESLint passes without warnings
- ✅ Test thoroughly before committing

#### 4. Commit Convention

Follow semantic commit messages:

```bash
git commit -m "feat: add weather forecast feature"
git commit -m "fix: resolve API timeout issue"
git commit -m "docs: update installation instructions"
git commit -m "refactor: optimize component rendering"
```

#### 5. Push & Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request with:
- Clear description of changes
- Screenshots (if UI changes)
- Link to related issues
- Testing details

### Code Review Process

- All PRs require review before merging
- Address reviewer feedback promptly
- Keep PRs focused and atomic
- Update documentation as needed

### Reporting Issues

When reporting bugs or requesting features:

1. Check existing issues first
2. Use issue templates if available
3. Provide clear reproduction steps
4. Include environment details
5. Add screenshots/logs when relevant

---

## 👤 Credits

**Created and maintained by [Karthikeyan-BE](https://github.com/Karthikeyan-BE)**

### Connect

- GitHub: [@Karthikeyan-BE](https://github.com/Karthikeyan-BE)
- Profile: [Karthikeyan-BE's GitHub Profile](https://github.com/Karthikeyan-BE)

### Acknowledgments

- Built with modern React and Vite
- Inspired by best practices in frontend development
- Community feedback and contributions

---

## 📄 License

This project is open source and available for educational and personal use.

---

<div align="center">

**Built with ❤️ using React + Vite**

⭐ Star this repository if you find it helpful!

</div>
