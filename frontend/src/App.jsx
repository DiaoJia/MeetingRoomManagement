import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { Box, CssBaseline, Typography } from '@mui/material';
import AppHeader from './components/AppHeader';
import SideNav from './components/SideNav';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router'
import AppRoutes from './routers/AppRoutes';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader handleCollapsed={handleCollapsed} />
          <Box sx={styles.container}>
            <Router>
              <SideNav collapsed={collapsed} />
              <Box component={'main'} sx={styles.mainSection}>
                <AppRoutes />
              </Box>
            </Router>
          </Box>
        </ThemeProvider>
      </React.Fragment>
  )
};

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100vh - 64px)',
  },
  mainSection: {
    p: 1,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
};

export default App
