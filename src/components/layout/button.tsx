import { Button, Stack, styled, Typography } from '@mui/material';
import icon_wallet from '../../assets/icon_wallet.png';
import logosimplix from '../../assets/logosimplix.svg';
import iconsimpli from '../../assets/iconsimpli.png';
import iconwallet_black from '../../assets/iconwallet_black.svg';
import React from 'react';

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
  textTransform: 'none',
  alignItems: 'center',
  justifyContent: 'center'
});

export const ConnectWallet = () => {
  return (
    <ConnectWalletStyled>
      <img
        src={icon_wallet}
        style={{ marginRight: '7.5px', width: '16px', height: '16px' }}
        alt="icon"
      />
      Connect Wallet
    </ConnectWalletStyled>
  );
};

const ConnectWallet2Styled = styled(Button)({
  backgroundColor: '#6CFFD3',
  height: '56px',
  width: '158px',
  fontSize: '14px',
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '22px',
  borderRadius: '16px',
  color: '#204C3F',
  py: '16px',
  textTransform: 'none'
});

export const ConnectWallet2 = () => {
  return (
    <ConnectWallet2Styled>
      <img
        src={iconwallet_black}
        style={{ marginRight: '7.5px', width: '16px', height: '16px' }}
        alt="icon"
      />
      Connect Wallet
    </ConnectWallet2Styled>
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
      <img
        src={logosimplix}
        style={{ marginRight: '6px', width: '16px', height: '16px' }}
        alt="logo"
      />
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

interface ChildProps {
  activeItem: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StakeStyleButton = styled(Button)({
  backgroundColor: '#919EAB',
  height: '40px',
  width: '136px',
  borderRadius: '8px',
  textTransform: 'none'
});

export const StakeButton: React.FC<ChildProps> = (props) => {
  return (
    <StakeStyleButton
      aria-label="bx"
      variant="contained"
      onClick={props.clickHandler}
      sx={{
        backgroundColor: props.activeItem === 'stake' ? '#6CFFD3' : '#919EAB'
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          alignItems="center"
          justifyContent="center"
          sx={{
            color: 'black',
            fontSize: '13px',
            textAlign: 'center',
            fontStyle: 'normal',
            fontWeight: 700
          }}
        >
          Stake
        </Typography>
        <Stack direction="row">
          <img
            src={iconsimpli}
            alt="icon"
            style={{ width: '16px', height: '16px' }}
          />
          <Typography
            alignItems="center"
            justifyContent="center"
            sx={{
              color: 'black',
              fontSize: '13px',
              textAlign: 'center',
              fontStyle: 'normal',
              fontWeight: 700
            }}
          >
            SIMPLI
          </Typography>
        </Stack>
      </Stack>
    </StakeStyleButton>
  );
};

export const UnStakeButton: React.FC<ChildProps> = (props) => {
  return (
    <StakeStyleButton
      aria-label="bx"
      variant="contained"
      onClick={props.clickHandler}
      sx={{
        backgroundColor: props.activeItem === 'unstake' ? '#6CFFD3' : '#919EAB'
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          alignItems="center"
          justifyContent="center"
          sx={{
            color: 'black',
            fontSize: '13px',
            textAlign: 'center',
            fontStyle: 'normal',
            fontWeight: 700
          }}
        >
          UnStake
        </Typography>
      </Stack>
    </StakeStyleButton>
  );
};

const MaxStyleButton = styled(Button)({
  textTransform: 'none'
});

export const MaxButton = (title: string) => {
  return (
    <MaxStyleButton aria-label="bx" variant="text">
      <Typography
        alignItems="center"
        justifyContent="center"
        sx={{
          color: '#6CFFD3',
          fontSize: '16px',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: 500
        }}
      >
        {title}
      </Typography>
    </MaxStyleButton>
  );
};
