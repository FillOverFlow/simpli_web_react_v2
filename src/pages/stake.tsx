import {
  StakeButton,
  UnStakeButton,
  ConnectWallet2
} from '@/components/layout/button';
import { Box, Stack, Typography, Link } from '@mui/material';
import React, { useState } from 'react';
import './style.css';
import iconsimpli from '../assets/iconsimpli.png';
import InputStake from '@/components/layout/inputstake';

export interface StakePageProps {}

const Stake: React.FC<StakePageProps> = () => {
  const [stakeType, setStakeType] = useState('stake');

  const _handleClickStake = (e: React.MouseEvent, title: string) => {
    setStakeType(title);
  };
  return (
    <header className="stake-header">
      <Typography
        fontSize="32px"
        fontWeight={700}
        fontStyle="normal"
        color="#FFFFFF"
      >
        Maximize yield by Staking $SIMPLI
      </Typography>
      <Stack direction="row">
        <Box>
          <Stack
            className="apr-bar"
            mt="24px"
            paddingX="24px"
            paddingY="10px"
            direction="row"
            justifyContent="space-between"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                fontSize="20px"
                fontWeight="bold"
                fontStyle="normal"
                color="#F9FAFB"
                textAlign="center"
              >
                Stake APR
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column">
              <Typography
                fontSize="24px"
                fontWeight="bold"
                fontStyle="normal"
                color="#F9FAFB"
              >
                3.10%
                <Box
                  fontSize="14px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color="#919EAB"
                >
                  Yesterday’s APR
                </Box>
              </Typography>
            </Box>
          </Stack>
          <Stack height="407px" marginTop="24px" marginRight="41px">
            <Stack direction="row" spacing={2}>
              <>
                <StakeButton
                  activeItem={stakeType}
                  clickHandler={(e) => _handleClickStake(e, 'stake')}
                />
                <UnStakeButton
                  activeItem={stakeType}
                  clickHandler={(e) => _handleClickStake(e, 'unstake')}
                />
              </>
            </Stack>
            <Stack className="stake-box" mt="24px" padding="20px">
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  fontSize="20px"
                  fontWeight={700}
                  fontStyle="normal"
                  color="#F9FAFB"
                >
                  {stakeType === 'stake' ? (
                    <div>Stake</div>
                  ) : (
                    <div>UnStake</div>
                  )}
                </Typography>
                <Stack className="stake-rate" direction="row">
                  <Typography
                    display="flex"
                    fontSize="12px"
                    fontWeight="bold"
                    fontStyle="normal"
                    color="#F9FAFB"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <div>1</div>
                    <img
                      src={iconsimpli}
                      style={{
                        height: '16px',
                        width: '16px'
                      }}
                      alt="iconrate"
                    />
                    <div>xSIMPLI = </div>
                    <Box width={2} />
                    <div>1.002269925650048</div>
                    <Box width={2} />
                    <img
                      src={iconsimpli}
                      style={{
                        height: '16px',
                        width: '16px'
                      }}
                      alt="iconrate"
                    />
                    <div>SIMPLI</div>
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                marginTop="24px"
                marginBottom="9px"
              >
                <Typography
                  fontSize="16px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color="#FFFFFF"
                >
                  Amount
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Typography
                    fontSize="14px"
                    fontWeight="500px"
                    fontStyle="normal"
                    color="#919EAB"
                  >
                    Balance:{' '}
                  </Typography>
                  <Typography
                    fontSize="14px"
                    fontWeight="500px"
                    fontStyle="normal"
                    color="#6CFFD3"
                  >
                    4.5682
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                className="stake-boxx"
                paddingX="24px"
                paddingY="16px"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                marginBottom='24px'
              >
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#F9FAFB"
                  display="flex"
                  flexDirection="row"
                  textAlign="center"
                >
                  <img
                    src={iconsimpli}
                    style={{
                      height: '24px',
                      width: '24px'
                    }}
                    alt="iconrate"
                  />
                  <Box width={5} />
                  {stakeType === 'stake' ? (
                    <div>SIMPLI</div>
                  ) : (
                    <div>xSIMPLI</div>
                  )}
                </Typography>
                <Box display="flex" flexDirection="row">
                  <div>
                    <InputStake />
                  </div>
                  {/* <InputStake /> */}
                  {/* <Typography
                    display="flex"
                    flexDirection="row"
                    fontSize="16px"
                    fontWeight={400}
                    fontStyle="normal"
                    color="#F9FAFB"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div>Balance :</div>
                    <Box width="10px" />
                    <div>0.0</div>
                  </Typography> */}
                  {/* <Box width="24px" />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {}}
                    fontSize="16px"
                    fontWeight={400}
                    fontStyle="normal"
                    color="#6CFFD3"
                  >
                    Max
                  </Link> */}
                </Box>
              </Stack>
              <ConnectWallet2 />
            </Stack>
          </Stack>
        </Box>
        <Box marginTop="24px">
          <Stack spacing={3}>
            <Stack className="box-balance">
              <Typography
                fontSize="20px"
                fontWeight="bold"
                fontStyle="normal"
                color="#F9FAFB"
              >
                Balance
              </Typography>

              <Stack mt="24px" spacing={1}>
                <img
                  src={iconsimpli}
                  alt="logo"
                  style={{ width: '24px', height: '24px' }}
                />
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    fontSize="16px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color="#F9FAFB"
                  >
                    xSIMPLI
                  </Typography>
                  <Typography
                    fontSize="16px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color="#6CFFD3"
                  >
                    0.0
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack className="box-unstaked">
              <Typography
                fontSize="20px"
                fontWeight="normal"
                fontStyle="normal"
                color="#F9FAFB"
              >
                Unstaked
              </Typography>
              <Stack mt="24px" spacing={1}>
                <img
                  src={iconsimpli}
                  alt="logo"
                  style={{ width: '24px', height: '24px' }}
                />
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    fontSize="16px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color="#F9FAFB"
                  >
                    xSIMPLI
                  </Typography>
                  <Typography
                    fontSize="16px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color="#6CFFD3"
                  >
                    0.0
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </header>
  );
};

export default Stake;
