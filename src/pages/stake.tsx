import {
  StakeButton,
  UnStakeButton,
  ConnectWallet2,
  ButtonEx,
  ButtonBase
} from '@/components/layout/button';
import { Box, Stack, Typography, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import iconsimpli from '../assets/iconsimpli.png';
import './style.css';
import iconsimpli from '../assets/iconsimpli.png';
import InputStake from '@/components/layout/inputstake';
import * as Swal from '@/utils/sweetalert'
import StakeAPI from '@/apis/stake'
import { useEthers, useTokenBalance } from '@usedapp/core';
import { displayWeiToEther, weiToFloat , etherToWei, weiToEther} from '@/utils/web3';
import DialogLoading from '@/components/modal/DialogLoading';
import ReactDOMServer from 'react-dom/server';
import { useStaking, useTotalSupply, useUnStaking } from '@/hooks/staking';
import { useAllowance, useApprove, useGetBalanceOfSIMPLI } from '@/hooks/simpliToken';
import { ethers } from 'ethers' 


export interface StakePageProps {}

const Stake: React.FC<StakePageProps> = () => {
  const [stakeType, setStakeType] = useState('stake')
  const [stakeAPR , setStakeAPR] = useState<string | undefined>('3.61')
  const [amount, setAmount] = useState('0')
  const [userPressMax, setUserPressMax] = useState(false)
  const { account } = useEthers();
  const walletAddress = account
  const walletConnected = account ? true : false
  const shouldDisableStake = (+amount <= 0)
  const _handleClickStake = (e: React.MouseEvent, title: string) => {
    setStakeType(title);
  };

  /**
   * START SMART CONTRACT for STAKE 
   */

  const simpliTokenAddress = import.meta.env.VITE_SIMPLI_TOKEN_ADDRESS as string
  const xsimpliTokenAddress = import.meta.env.VITE_SIMPLI_STEAKING_ADDRESS as string
  const allowance = useAllowance(walletAddress,xsimpliTokenAddress)
  const balanceSIMPLI = useTokenBalance(simpliTokenAddress, walletAddress)
  const balanceXSIMPLI = useTokenBalance(xsimpliTokenAddress, walletAddress)
  const balanceSIMPLIStaking = useGetBalanceOfSIMPLI(xsimpliTokenAddress)
  const totalSupplyXSIMPLI = useTotalSupply()
  const { state: stakeTokenState, send: stakeToken } = useStaking()
  const { state: unstakeTokenState, send: unstakeToken } = useUnStaking()
  const { state: approveState , send: approve } = useApprove()
  
  const shouldApprove = () => {
      const showstakeCondition = (+displayWeiToEther(allowance) >= +amount) 
      return amount ? (!showstakeCondition) : true
  }
  const rate = () => {
    if(totalSupplyXSIMPLI && balanceSIMPLIStaking){
      const totalSupplyFloat = weiToFloat(totalSupplyXSIMPLI)
      const balanceSIMPLIStakeingFloat = weiToFloat(balanceSIMPLIStaking)
      return balanceSIMPLIStakeingFloat / totalSupplyFloat
    }else{
      return 1
    }
    
  }

  /** END  */
  const handleApprove = () => {
    const maxEtherValueConstant = ethers.constants.MaxInt256
    approve(xsimpliTokenAddress,maxEtherValueConstant)
  }
  const handleStake = () => {
    const weiAmount = userPressMax ? balanceSIMPLI : etherToWei(amount)
    openLoading()
    stakeToken(weiAmount)
  }
  const handleUnStake = () => {
    const weiAmount = userPressMax ? balanceXSIMPLI : etherToWei(amount)
    openLoading()
    unstakeToken(weiAmount)
  } 
  const openLoading = () => {
    const label = (stakeType == 'stake') ? 'Stake' : 'UnStake'
    const labelLeft = 'SIMPLI'
    const valueLeft = amount
    Swal.SwalLoading({
        customClass: {
					...Swal.defaultOptions.customClass,
					title: 'swal-stake-title',
					popup: 'swal-stake-popup',
				},
        titleText: label,
        html: ReactDOMServer.renderToStaticMarkup(<DialogLoading 
					label={label} 
					labelLeft={labelLeft} 
					valueLeft={valueLeft}/>),
        showCloseButton: true
    })
  }
  const getMaxStakeOrUnStake = () => {
    if(balanceSIMPLI && balanceXSIMPLI){
      const balanceSIMPLIFloat = displayWeiToEther(balanceSIMPLI) + ''
      const balanceXSIMPLIFloat = displayWeiToEther(balanceXSIMPLI) + ''
      const maxValue = (stakeType == 'stake') ? balanceSIMPLIFloat : balanceXSIMPLIFloat
      setAmount(maxValue)
      setUserPressMax(true)
    }else{
      console.log('wait for smartcontract data')
    }
  }
  const callStakingAPI = async() => {
    Swal.SwalLoading({
        titleText: 'Some Title',
        html: ReactDOMServer.renderToStaticMarkup(<DialogLoading 
					label={'label'} 
					labelLeft={'labelLeft'} 
					valueLeft={'valueLeft'}/>),
        showCloseButton: true
    })
    try { 
      const stakeAPR = await StakeAPI.stakingAPR()
      // setStakeAPR(stakeAPR)
      setStakeAPR('40')
      Swal.SwalClose()
    }catch(e){
      await Swal.SwalError({
        text: (e as any )?.message as string
      })
    }
  }

  /** START UseEffect State Handle */

  //Stake State
  useEffect(() => {
			const { status , transaction } = stakeTokenState;
			console.log('stake token state ', status)
			if(status == 'Exception'){
				Swal.SwalError({
					titleText: 'Failed',
					text: stakeTokenState.errorMessage?.toLowerCase(),
					
				})
			}
			if(status == 'Success'){
        const transactionHash  = transaction ? transaction.hash : ''
				const bscLink = import.meta.env.VITE_BSC_LINK + transactionHash
				void Swal.SwalClose();
				void Swal.SwalPopup({
          titleText: 'Success',
					customClass: {
						...Swal.defaultOptions.customClass,
						title: 'swal-approve-modal-title',
						closeButton: 'swal-approve-close-btn',
						confirmButton: 'swal-approve-confirm-btn',
					},
					confirmButtonText: 'OK',
					// html: ReactDOMServer.renderToStaticMarkup(
					// 	<SuccessModal link={bscLink} valueLeft={simpli+''}  valueRight={xsimpli+''}/>
					// ),
					timer: 5000,
				})
				setAmount('')
			}
		},[stakeTokenState])

    //UnStake State
    useEffect(() => {
			const { status , transaction } = unstakeTokenState;
			console.log('unstake token state ', status)
			if(status == 'Exception'){
				Swal.SwalError({
					titleText: 'Failed',
					text: unstakeTokenState.errorMessage?.toLowerCase(),
					
				})
			}
			if(status == 'Success'){
        const transactionHash  = transaction ? transaction.hash : ''
				const bscLink = import.meta.env.VITE_BSC_LINK + transactionHash
				void Swal.SwalClose();
				void Swal.SwalPopup({
          titleText: "Unstake Token",
					customClass: {
						...Swal.defaultOptions.customClass,
						title: 'swal-approve-modal-title',
						closeButton: 'swal-approve-close-btn',
						confirmButton: 'swal-approve-confirm-btn',
					},
					confirmButtonText: 'OK',
					// html: ReactDOMServer.renderToStaticMarkup(
					// 	<SuccessModal label={'Unstake'} link={bscLink} labelLeft='xSIMPLI' labelRight='SIMPLI' valueLeft={xsimpli+''} valueRight={simpli+''} />
					// ),
					timer: 5000,
				})
				setAmount('')
			}
		},[unstakeTokenState])

    //Approve State
    useEffect(() => {
			const { status , transaction } = approveState;
			if(status == 'Exception'){
				Swal.SwalError({
					titleText: 'Failed',
					text: approveState.errorMessage?.toLowerCase()
				})
			}
		})
  
  useEffect(() =>{
    // callStakingAPI()
  },[])

  /** End UseEffect  */
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
          <h3>totalSupply staking Address : {displayWeiToEther(totalSupplyXSIMPLI)} </h3>
          <h3>balanceSIMPLIStaking  : {displayWeiToEther(balanceSIMPLIStaking)} </h3>
        </Box>
      </Stack>
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
                {stakeAPR}%
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
                //   {(stakeType=='stake') ? 'Stake' : 'UnStake'}
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
                    <div>{rate()}</div>
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
                  <div>{amount}</div>
                  <Box width={8} />
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
                    <div>{(stakeType == 'stake') ?  displayWeiToEther(balanceSIMPLI) : displayWeiToEther(balanceXSIMPLI)}</div>
                  </Typography>
                  <Box width="24px" />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={getMaxStakeOrUnStake}
                    fontSize="16px"
                    fontWeight={400}
                    fontStyle="normal"
                    color="#6CFFD3"
                  >
                    Max
                  </Link> */}
                </Box>
              </Stack>
              {
                walletConnected ? 
                  shouldApprove()? <ButtonBase title={'Approve'} onClick={handleApprove}/>:
                  (stakeType == 'stake') ? 
                  <ButtonBase disabled={shouldDisableStake} title={'Stake'} onClick={handleStake}/> : 
                  <ButtonBase disabled={shouldDisableStake} title={'UnStake' } onClick={handleUnStake}/>
                :
                <ConnectWallet2/>
            }
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
                    {displayWeiToEther(balanceXSIMPLI,10)}
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
                    SIMPLI
                  </Typography>
                  <Typography
                    fontSize="16px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color="#6CFFD3"
                  >
                  {displayWeiToEther(balanceSIMPLI,10)}
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