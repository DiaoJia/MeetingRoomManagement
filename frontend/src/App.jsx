import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router'
import AppRoutes from './routers/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
};

export default App
