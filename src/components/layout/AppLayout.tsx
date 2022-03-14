import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import { Stack } from '@mui/material';
import { LogoHeader } from '../header/headerlogo';
import { BuySimpliButton, ConnectWallet } from './button';

function AppLayout() {
  return (
    <Stack flexDirection="column">
      <Stack mx="146px" my="40px" maxWidth="1248px">
        <Stack direction="row" justifyContent="space-between" width="1248px">
          <LogoHeader />
          <Stack direction="row" spacing="10px " marginX="14px">
            <BuySimpliButton />
            <ConnectWallet />
          </Stack>
        </Stack>
        <Stack display="flex" direction="row" spacing="45px">
          <SideBar />
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AppLayout;
