import { Button } from '@mui/material';
import icon_wallet from '/Simpli_Web3/src/assets/icon_wallet.png';
import logosimplix from '/Simpli_Web3/src/assets/logosimplix.svg';
export const ConnectWallet = () => {
    return (
        <Button
            sx={{
                bgcolor: 'rgba(108, 255, 211, 0.16)', //       borderRadius="16px"
                height: '54px',
                width: '158px',
                textColor: '#6CFFD3',
                fontSize: '11px',
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '22px',
                borderRadius: '16px',
                color: 'rgba(108, 255, 211, 1)',
                // fontFamily: "DM Sans",
                // px: "18px",
                py: '16px'
            }}
        >
            <img src={icon_wallet} style={{ marginRight: '7.5px', width: '16px', height: '16px' }} alt="icon" />
            Connect Wallet
        </Button>
    );
};

export const BuySimpliButton = () => {
    return (
        <Button
            sx={{
                mr: '16px',
                bgcolor: 'rgba(0, 117, 191, 0.16)',
                height: '54px',
                width: '158px',
                textColor: '#6CFFD3',
                fontSize: '11px',
                textAlign: 'center',
                fontStyle: 'bold',
                color: '#F9FAFB',
                fontWeight: 700,
                lineHeight: '22px',
                borderRadius: '16px',
                // fontFamily: "DM Sans",
                px: '30px',
                py: '16px'
            }}
        >
            <img src={logosimplix} style={{ marginRight: '6px', width: '16px', height: '16px' }} alt="logo" />
            Buy $SIMPLI
        </Button>
    );
};
