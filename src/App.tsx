import { FC } from 'react';
import { Box, Stack, styled } from '@mui/material';

import Route from './Router';
import './pages/style.css';
import { SocialMediaComponent } from './components/layout/socialmedia';
import { AuditByComponent } from './components/layout/auditlogo';
import { LogoFooter } from './components/footer/footer';
const App: FC = () => {
  return (
    <Root>
      <Route />
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
            {' '}
            <LogoFooter />
          </Box>
          <Stack flexDirection="row">
            <SocialMediaComponent />
            <Box width="53px" />
            {AuditByComponent('35px', '99px')}
          </Stack>
        </Stack>
      </Stack>
    </Root>
  );
};

const Root = styled('div')`
  width: 100%;
  height: 100%
  display: flex;
`;

export default App;
