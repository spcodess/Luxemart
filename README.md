# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment Setup

To use API keys and other environment variables:

1. Create a `.env` file in the root directory
2. Add your API key: `VITE_API_KEY=your_api_key_here`
3. The `.env` file is already in `.gitignore` to keep your keys secure

## API Configuration

The project includes a configuration file at `src/config.js` that handles API keys and other environment variables. You can import and use it in your components:

```javascript
import { getApiKey, config } from './config';

// Use the API key
const apiKey = getApiKey();
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
