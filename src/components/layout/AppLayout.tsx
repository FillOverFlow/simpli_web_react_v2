import { Outlet } from 'react-router-dom';
import SideBar from '../sidebar/sidebar';
import { Stack } from '@mui/material';
import { LogoHeader } from '../header/headerlogo';
import { BuySimpliButton, ConnectWallet } from './button';

function AppLayout() {
  return (
    <div>
      <Stack flexDirection="column">
        <Stack mx="146px" my="40px">
          <Stack direction="row" justifyContent="space-between">
            <LogoHeader />
            <Stack direction="row" spacing="10px " marginX="14px">
              <BuySimpliButton />
              <ConnectWallet />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="45px" height="100%">
            <SideBar />
            <Outlet />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default AppLayout;
