import { Box, Container, Stack, Typography } from '@mui/material';
import './style.css';
import detaillogo from '../assets/detaillogo.png';
import fileicon from '../assets/fileicon.svg';
import metamask from '../assets/metamask.svg';
import iconsimpli from '../assets/iconsimpli.png';
import arrow from '../assets/arrow.svg';
import mascotXL from '../assets/mascotXL.svg';
import NumberFormat from 'react-number-format';
import { ConnectWallet2 } from '@/components/layout/button';
export interface FarmPageProps {}
const Farm: React.FC<FarmPageProps> = (props) => {
  let price: number = 1.03;
  let price2: number = 2.0;
  let price3: number = 6006930.31;
  return (
    <header className="farm-header ">
      <Stack direction="column">
        <Box width="293 px" height="48px" justifyContent="flex-start" mb="24px">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              textAlign="center"
              fontSize="32px"
              fontWeight={700}
              fontStyle="normal"
            >
              Manual
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing="60px" mb="40px">
          <Stack
            className="backgroundTVL"
            style={{
              width: '600px',
              height: '182px',
              borderRadius: 16
            }}
            justifyContent="center"
          >
            <Stack direction="row">
              <img
                src={detaillogo}
                style={{ height: '182px', width: '168px', borderRadius: 16 }}
                alt="detaillogo"
              />
              <Stack
                justifyContent="center"
                textAlign="center"
                className="inner_position_1"
              >
                <div>Total Value Locked</div>
                <NumberFormat
                  value={price3}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={'$'}
                  style={{
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                />
                <div
                  style={{
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 'normal'
                  }}
                >
                  See more information on BscScan
                </div>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            style={{ width: '158px', height: '182px', borderRadius: 16 }}
            className="blockWallet"
            padding="15px"
            spacing="15px"
          >
            <Box width="133px" height="44px">
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontStyle: 'normal'
                }}
              >
                Your SIMPLI Wallet Balance
              </div>
            </Box>
            <Box width="100%" height="37px">
              <Stack
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  color: '#6CFFD3'
                }}
                direction="row"
                spacing={1}
              >
                <NumberFormat
                  value={price}
                  displayType={'text'}
                  thousandSeparator={true}
                />
                <div>$SIMPLI</div>
              </Stack>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  color: '#F9FAFB'
                }}
              >
                $ 0.0
              </div>
            </Box>
            <Stack width="100%" height="32px">
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  color: '#F9FAFB'
                }}
              >
                SIMPLI Tokens
              </div>
              <Stack direction="row" justifyContent="space-between">
                <img
                  src={fileicon}
                  style={{ height: '25px', width: '15px' }}
                  alt="fileicon"
                />
                <img
                  src={metamask}
                  style={{ height: '25px', width: '25px' }}
                  alt="metamask"
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            style={{ width: '158px', height: '182px', borderRadius: 16 }}
            className="blockWallet"
            spacing="20px"
            padding="15px"
          >
            <Box width="133px" height="44px">
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontStyle: 'normal'
                }}
              >
                SIMPLI Token
              </div>
              <Stack direction="row">
                <img
                  src={iconsimpli}
                  style={{ width: '15px', height: '15px' }}
                  alt="Simpli"
                />
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    fontStyle: 'normal'
                  }}
                >
                  $SIMPLI / UST
                </div>
              </Stack>
            </Box>
            <Box width="93px" height="37px">
              {price2 > price ? (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <img
                    src={arrow}
                    style={{
                      height: '15px',
                      width: '15px',
                      color: '#229A16'
                    }}
                    alt="arrow"
                  />
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      color: '#F9FAFB'
                    }}
                  >
                    {price} UST
                  </div>
                </Stack>
              ) : (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <img
                    src={arrow}
                    style={{
                      height: '15px',
                      width: '15px',
                      color: 'red'
                    }}
                    alt="arrow"
                  />
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      color: '#F9FAFB'
                    }}
                  >
                    {price} UST
                  </div>
                </Stack>
              )}
            </Box>
          </Stack>
        </Stack>
        <Stack
          style={{ width: '100%' }}
          paddingY="24px"
          justifyContent="center"
          alignItems="center"
          className="assetAllocation"
        >
          <img src={mascotXL} alt="mascot" style={{ marginBottom: '8px' }} />
          <Typography
            textAlign="center"
            fontSize="32px"
            fontWeight="bold"
            fontStyle="normal"
            marginBottom="8px"
          >
            Connect Wallet
          </Typography>
          <Typography
            textAlign="center"
            fontSize="18px"
            fontWeight="bold"
            fontStyle="normal"
            marginBottom="47px"
          >
            โปรดเชื่อมต่อกระเป๋าเงินคริปโตของท่านก่อนเริ่มใช้งาน
          </Typography>
          <ConnectWallet2 />
        </Stack>
      </Stack>
    </header>
  );
};

export default Farm;
