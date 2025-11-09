/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';

// 🧩 MUI imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 🎨 Create a theme (you can customize colors here)
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontSize: 14,         // base font size in px
    htmlFontSize: 16,     // assume html element font size is 16px
    body1: {
      fontSize: '1rem',   // ~14px (since fontSize:14)
    },
    body2: {
      fontSize: '0.875rem',
    },
    h1: {
      fontSize: '2.125rem',  // ~34px
    },
    h2: {
      fontSize: '1.75rem',   // ~28px
    },
    h3: {
      fontSize: '1.5rem',    // ~24px
    },
  },
  spacing: 4,  // this means theme.spacing(1) === 4px instead of default 8px
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '6px 12px',   // smaller button padding
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '4px',         // smaller icon‑button
        },
      },
    },
  },
});

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);

// 🪄 Wrap App with MUI ThemeProvider and CssBaseline
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>
);
