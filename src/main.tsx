import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ChosenThemeProvider, ThemeProvider } from '@/providers';
import App from './App';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { LogoFooter } from './components/footer/footer';
import { AuditByComponent } from './components/layout/auditlogo';
import { SocialMediaComponent } from './components/layout/socialmedia';

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <App />
       
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
