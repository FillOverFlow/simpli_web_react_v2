import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  AccordionActions
} from '@mui/material';

import detaillogo from '../assets/detaillogo.png';
import fileicon from '../assets/fileicon.svg';
import metamask from '../assets/metamask.svg';
import iconsimpli from '../assets/iconsimpli.png';
import ethbtc from '../assets/eth-btc.svg';
import arrow from '../assets/arrow.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './style.css';
import NumberFormat from 'react-number-format';
import { ButtonEx, ClaimB, ClaimButton } from '@/components/layout/button';
import { MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import UnstyledSelectSimple from '@/components/layout/selectBox';
import Option from 'react-select/dist/declarations/src/components/Option';
import CustomizedAccordions from '@/components/layout/accordion';

export interface PositionPageProps {}

const Search = styled('div')(({ theme }) => ({
  height: '48px',
  position: 'relative',
  borderRadius: '8px',
  border: '1px solid #919EAB3D',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '645px'
  }
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: '65ch'
    }
  }
}));

const SelectionMenu = () => {
  return (
    <Stack direction="row" spacing="24px">
      <UnstyledSelectSimple />
      <Search style={{ width: '100%' }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search pools or tokens"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Stack>
  );
};

const AccordionEx = () => {
  const [current, setCurrent] = React.useState(-1);

  const handleChange_Accordion =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: number) => {
      setCurrent(isExpanded ? panel : panel);
    };
  return (
    <Stack>
      <div>
        <Accordion
          expanded={current === 0}
          onChange={() => handleChange_Accordion}
        >
          <AccordionSummary></AccordionSummary>
          <AccordionDetails></AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>
      </div>
    </Stack>
  );
};
const YourPosition: React.FunctionComponent<PositionPageProps> = (props) => {
  let price: number = 1.03;
  let price2: number = 2.0;

  return (
    <Box width="100%">
      <Typography fontSize="32px" fontWeight={700} fontStyle="normal">
        Your Positon
      </Typography>
      <Stack marginTop="24px" height="182px" direction="row" spacing="40px">
        <Stack
          className="backgroundTVL"
          style={{
            width: '435px',
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
              textAlign="center"
              className="inner_position_2"
              alignItems="flex-start"
              spacing="17px"
            >
              <Stack alignItems="flex-start">
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    color: '#F9FAFB'
                  }}
                >
                  Total Value Locked
                </div>
                <NumberFormat
                  value={6006930.31}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={'$'}
                  style={{
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    color: '#F9FAFB'
                  }}
                />
              </Stack>
              <Stack alignItems="flex-start">
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    color: '#F9FAFB'
                  }}
                >
                  Total Investment Value
                </div>
                <NumberFormat
                  value={500}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={'$'}
                  style={{
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    color: '#F9FAFB'
                  }}
                />
              </Stack>
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
              style={{ fontSize: '14px', fontWeight: 500, fontStyle: 'normal' }}
            >
              Your SIMPLI Wallet Balance
            </div>
          </Box>
          <Box width="100%" height="37px">
            <div
              style={{
                fontSize: '16px',
                fontWeight: 500,
                fontStyle: 'normal',
                color: '#6CFFD3'
              }}
            >
              <NumberFormat
                value={1.01}
                displayType={'text'}
                thousandSeparator={true}
              />
            </div>
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
              style={{ fontSize: '14px', fontWeight: 500, fontStyle: 'normal' }}
            >
              SIMPLI Token
            </div>
            <Stack direction="row">
              <img
                src={iconsimpli}
                style={{ width: '15px', height: '15px' }}
                alt="iconsimpli"
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
        <Stack
          style={{ width: '158px', height: '182px', borderRadius: 16 }}
          className="blockWallet"
          padding="15px"
          spacing="16px"
        >
          <Box width="133px" height="44px">
            <div
              style={{ fontSize: '14px', fontWeight: 500, fontStyle: 'normal' }}
            >
              SIMPLI earned:{' '}
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
                value={1.01}
                displayType={'text'}
                thousandSeparator={true}
              />
              <div>$SIMPLI</div>
            </Stack>
            <div
              style={{
                fontSize: '10px',
                fontWeight: '400',
                fontStyle: 'normal',
                color: '#F9FAFB',
                marginBottom: '17px'
              }}
            >
              $ 0.0
            </div>
            <ClaimButton />
          </Box>
        </Stack>
      </Stack>
      <Stack
        width="100%"
        maxWidth="1024px"
        marginTop="41px"
        className="overview"
        padding="24px"
      >
        <div
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#F9FAFB',
            alignItems: 'flex-start'
          }}
        >
          Overview
        </div>
        <Stack justifyContent="center" alignItems="center">
          <Stack
            width="200px"
            height="200px"
            border={2}
            alignItems="center"
            justifyContent="center"
            borderRadius="100%"
          >
            Donut Chart
          </Stack>
        </Stack>
        <Stack width="100%" marginTop="24px">
          <div
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              fontStyle: 'normal',
              color: '#F9FAFB',
              alignItems: 'flex-start'
            }}
          >
            Asset Allocation List
          </div>
        </Stack>
        <Stack marginTop="16px" width="100%">
          <SelectionMenu />
          <Stack marginTop="24px" overflow="hidden" className="scroll-bar">
            <Stack
              direction="row"
              marginBottom="8px"
              paddingX="18px"
              spacing="100px"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#919EAB"
              >
                Pool-Platform
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#919EAB"
              >
                Amount(%)
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#919EAB"
              >
                SIMPLI Earned
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#919EAB"
              >
                TVL
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#919EAB"
              >
                APR (FARM)
              </Typography>
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#919EAB"
              >
                APR (SIMPLI)
              </Typography>
            </Stack>
            <CustomizedAccordions />
          </Stack>
        </Stack>
      </Stack>
      <Box height="300px" />
    </Box>
  );
};

export default YourPosition;
