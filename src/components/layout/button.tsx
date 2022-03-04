import { Button, styled, Typography } from '@mui/material';
import icon_wallet from '/Simpli_Web3/src/assets/icon_wallet.png';
import logosimplix from '/Simpli_Web3/src/assets/logosimplix.svg';

const ConnectWalletStyled = styled(Button)({
    backgroundColor: 'rgba(108, 255, 211, 0.16)',
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
    py: '16px',
    textTransform: 'none'
});

export const ConnectWallet = () => {
    return (
        <ConnectWalletStyled>
            <img src={icon_wallet} style={{ marginRight: '7.5px', width: '16px', height: '16px' }} alt="icon" />
            Connect Wallet
        </ConnectWalletStyled>
    );
};

const BuySimpliStyled = styled(Button)({
    marginRight: '16px',
    backgroundColor: 'rgba(0, 117, 191, 0.16)',
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
    paddingInline: '30px',
    textTransform: 'none'

});
export const BuySimpliButton = () => {
    return (
        <BuySimpliStyled>
            <img src={logosimplix} style={{ marginRight: '6px', width: '16px', height: '16px' }} alt="logo" />
            Buy $SIMPLI
        </BuySimpliStyled>
    );
};

const ClaimAll = styled(Button)({
    backgroundColor: '#6CFFD3',
    height: '34px',
    width: '96px',
    borderRadius: '8px',
    textTransform: 'none'
});

export const ClaimButton = () => {
    return (
        <ClaimAll aria-label="claimbutton">
            <Typography
                style={{
                    color: '#204C3F',
                    fontSize: '13px',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '22px'
                }}
            >
                Claim all
            </Typography>
        </ClaimAll>
    );
};

const ClaimX = styled(Button)({
    backgroundColor: '#6CFFD3',
    height: '34px',
    width: '120px',
    borderRadius: '8px',
    textTransform: 'none'
});

export const ClaimB = () => {
    return (
        <ClaimX variant="contained" disableRipple>
            <Typography
                sx={{
                    color: '#204C3F',
                    fontSize: 13,
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: 700
                }}
            >
                Claim
            </Typography>
        </ClaimX>
    );
};
const WithdrawB = styled(Button)({
    backgroundColor: 'rgba(108, 255, 211, 0.16)',
    height: '34px',
    width: '120px',
    borderRadius: '8px',
    borderWidth: 1,
    borderColor: ' #6CFFD3',
    textTransform: 'none'
});

export const ButtonEx = (title: string) => {
    return (
        <WithdrawB aria-label="bx" variant="outlined">
            <Typography
                alignItems="center"
                justifyContent="center"
                sx={{
                    color: '#6CFFD3',
                    fontSize: '13px',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: 700
                }}
            >
                {title}
            </Typography>
        </WithdrawB>
    );
};
