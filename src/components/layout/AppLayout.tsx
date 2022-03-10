import { Outlet } from 'react-router-dom';
import React from 'react';
import SideBar from '../sidebar/sidebar';
import { Stack, Box } from '@mui/material';
import { LogoHeader } from '../header/headerlogo';
import { LogoFooter } from '../footer/footer';
import { SocialMediaComponent } from './socialmedia';
import { AuditByComponent } from './auditlogo';
import { BuySimpliButton, ConnectWallet } from './button';

function AppLayout() {
  return (
    <Stack
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      className="App-header"
    >
      <Stack mx="146px" my="40px" maxWidth="1248px">
        <Stack direction="row" justifyContent="space-between" width="1248px">
          <LogoHeader />
          <Stack direction="row" spacing="10px " marginX='14px'>
            <BuySimpliButton />
            <ConnectWallet />
          </Stack>
        </Stack>
        <Stack flexDirection="row">
          <SideBar />
          <Box marginLeft="38px" mt="26px" width="100%" maxWidth="1248px">
            <Outlet />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AppLayout;
