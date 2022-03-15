import { Box, Stack, Typography, IconButton } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

import detaillogo from '../assets/detaillogo.png';
import fileicon from '../assets/fileicon.svg';
import metamask from '../assets/metamask.svg';
import iconsimpli from '../assets/iconsimpli.png';
import arrow from '../assets/arrow.svg';

import './style.css';
import NumberFormat from 'react-number-format';
import { ClaimButton } from '@/components/layout/button';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import UnstyledSelectSimple from '@/components/layout/selectBox';

import CustomizedAccordions from '@/components/layout/accordion';
import { useEthers, useTokenBalance } from '@usedapp/core';
import YouPositionAPi, { tvlData }  from '@/apis/you_position';

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
  color: '#fffff',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#ffffff',
  '& .MuiInputBase-input': {
    paddingTop: '10px',
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
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

const YourPosition: React.FunctionComponent<PositionPageProps> = (props) => {
  let price: number = 1.03;
  let price2: number = 2.0;
  const { account } = useEthers()
  const walletAddress = account
  const simpliTokenAddress = import.meta.env.VITE_SIMPLI_TOKEN_ADDRESS as string


  const getTVL = async () => {
    const response =  await YouPositionAPi.getTotalTVLAPI()
    const data  : tvlData[] = response ? JSON.parse(response) : '';
    const dataTVL  = data.filter((item) => item.pid == -1)
    const tvl: number = +dataTVL[0].tvl
    setTVL(tvl)
    console.log('tvl ', tvl)
  }
  
  
  //Start StmartContract 
  const balanceSIMPLI = useTokenBalance(simpliTokenAddress, walletAddress)
  const [tvl, setTVL] = useState(6006930.31)
  const [totalInvest, setTotalInvest] = useState(500)

  //End SmartContract

  useEffect(() =>{
    getTVL()
  },[])

  return (
    <Box width="100%">
      <Typography
        fontSize="32px"
        fontWeight="bold"
        fontStyle="normal"
        color="#FFFFFF"
      >
        Your Positon
      </Typography>
      <Stack marginTop="24px" height="182px" direction="row" spacing="40px">
        <Stack
          className="backgroundTVL"
          width="435px"
          height="182px"
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
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#F9FAFB"
                >
                  Total Value Locked
                </Typography>
                <Typography
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="bold"
                  sx={{
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                  color="#F9FAFB"
                >
                  <NumberFormat
                    value={tvl}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </Typography>
              </Stack>
              <Stack alignItems="flex-start">
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#F9FAFB"
                >
                  Total Investment Value
                </Typography>
                <Typography
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="bold"
                  sx={{
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                  color="#F9FAFB"
                >
                  <NumberFormat
                    value={totalInvest}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          // style={{ width: '158px', height: '182px', borderRadius: 16 }}
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
        <Stack
          width="158px"
          height="182px"
          className="blockWallet"
          padding="15px"
          spacing="16px"
        >
          <Box width="133px" height="44px">
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500px',
                fontStyle: 'normal',
                color: '#F9FAFB'
              }}
            >
              SIMPLI earned:
            </Typography>
          </Box>
          <Box width="100%" height="37px">
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{
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
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  color: '#6CFFD3'
                }}
              >
                $SIMPLI
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                fontStyle: 'normal',
                color: '#F9FAFB',
                marginBottom: '17px'
              }}
            >
              $ 0.0
            </Typography>
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
            color="white"
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
