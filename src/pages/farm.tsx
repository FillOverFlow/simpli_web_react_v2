import { Box, IconButton, Stack, Typography } from '@mui/material';
import './style.css';
import detaillogo from '../assets/detaillogo.png';
import fileicon from '../assets/fileicon.svg';
import metamask from '../assets/metamask.svg';
import iconsimpli from '../assets/iconsimpli.png';
import arrow from '../assets/arrow.svg';
import mascotXL from '../assets/mascotXL.svg';
import NumberFormat from 'react-number-format';
import { ConnectWallet2 } from '@/components/layout/button';
import bscscan from '../assets/bscscan.svg';
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
              color="#FFFFFF"
            >
              Manual
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing="60px" mb="40px">
          <Stack
            className="backgroundTVL"
            width="600px"
            height="182px"
            position="relative"
            display="flex"
            direction="row"
          >
            <img
              src={detaillogo}
              style={{
                height: '182px',
                width: '168px',
                borderRadius: '16px'
              }}
              alt="detaillogo"
            />
            <Stack textAlign="center" justifyContent="center">
              <Typography
                fontSize="18px"
                fontWeight="700px"
                fontStyle="normal"
                textAlign="center"
                color="#F9FAFB"
              >
                Total Value Locked
              </Typography>
              <Typography
                fontSize="32px"
                fontStyle="normal"
                fontWeight="700px"
                color="#F9FAFB"
                sx={{
                  textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <NumberFormat
                  value={price3}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </Typography>
              <Stack
                direction="row"
                spacing="2px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400px"
                  color="#F9FAFB"
                  textAlign="center"
                >
                  View on BscScan
                </Typography>
                <IconButton aria-label="bsc" size="medium">
                  <img src={bscscan} alt="bsc" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            className="blockWallet"
            padding="15px"
            spacing="15px"
            height="182px"
            width="158px"
          >
            <Typography
              fontSize="14px"
              fontWeight="500px"
              fontStyle="normal"
              color="#F9FAFB"
            >
              Your SIMPLI Wallet Balance
            </Typography>

            <Box width="100%" height="37px">
              <Stack direction="row" spacing="10px">
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#6CFFD3"
                >
                  <NumberFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#6CFFD3"
                >
                  $SIMPLI
                </Typography>
              </Stack>
              <Typography
                fontSize="10px"
                fontWeight="normal"
                fontStyle="normal"
                color="#F9FAFB"
              >
                $ 0.0
              </Typography>
            </Box>
            <Stack width="100%" height="32px">
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#F9FAFB"
              >
                SIMPLI Tokens
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <IconButton aria-label="fileicon" size="medium">
                  <img
                    src={fileicon}
                    style={{ height: '25px', width: '15px' }}
                    alt="fileicon"
                  />
                </IconButton>
                <IconButton aria-label="fileicon" size="medium">
                  <img
                    src={metamask}
                    style={{ height: '25px', width: '25px' }}
                    alt="metamask"
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            height="182px"
            width="158px"
            borderRadius="16px"
            className="blockWallet"
            spacing="20px"
            padding="15px"
          >
            <Box width="133px" height="44px">
              <Typography
                fontSize="14px"
                fontWeight="50px"
                fontStyle="normal"
                color="#F9FAFB"
              >
                SIMPLI Token
              </Typography>
              <Stack direction="row" spacing="10px">
                <img
                  src={iconsimpli}
                  style={{ width: '15px', height: '15px' }}
                  alt="Simpli"
                />
                <Typography
                  fontSize="12px"
                  fontWeight="400px"
                  fontStyle="normal"
                  color="#C4CDD5"
                >
                  $SIMPLI / UST
                </Typography>
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
            color="#F9FAFB"
            sx={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            Connect Wallet
          </Typography>
          <Typography
            textAlign="center"
            fontSize="18px"
            fontWeight="bold"
            fontStyle="normal"
            marginBottom="47px"
            color="#F9FAFB"
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
