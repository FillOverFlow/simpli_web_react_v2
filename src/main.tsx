import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Mainnet, DAppProvider, Config } from '@usedapp/core'

import { ChosenThemeProvider, ThemeProvider } from '@/providers';
import App from './App';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { LogoFooter } from './components/footer/footer';
import { AuditByComponent } from './components/layout/auditlogo';
import { SocialMediaComponent } from './components/layout/socialmedia';
// import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/dist/sweetalert2.css'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/57fc2c19095745e59ab96a4aa87dada8',
  },
}

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <DAppProvider config={config}>
          <App />
        </DAppProvider>
        <Stack
          bgcolor="rgba(14, 31, 45, 1)"
          width="100%"
          height="110px"
          px="146px"
          py="24px"
          justifyContent="center"
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box alignItems="flex-start">
              <LogoFooter />
            </Box>
            <Stack flexDirection="row">
              <SocialMediaComponent />
              <Box width="53px" />
              {AuditByComponent('35px', '99px')}
            </Stack>
          </Stack>
        </Stack>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
