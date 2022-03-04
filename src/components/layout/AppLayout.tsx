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
        <Stack flexDirection="column" justifyContent="space-between" height="100%px">
            <Box mx="146px" my="40px">
                <Stack direction="row" justifyContent="space-between">
                    <LogoHeader />
                    <Box>
                        <BuySimpliButton />
                        <ConnectWallet />
                    </Box>
                </Stack>
                <Stack flexDirection="row">
                    <SideBar />
                    <Box marginLeft="38px" mt="26px" width="100%">
                        <Outlet />
                    </Box>
                </Stack>
            </Box>

            <Stack bgcolor="rgba(14, 31, 45, 1)" width="100%" height="110px" px="146px" py="24px" justifyContent="center">
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
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
        </Stack>
    );
}

export default AppLayout;
