import { ethers } from 'ethers';
import { useContractCall , useContractFunction } from '@usedapp/core';
import { Contract } from '@ethersproject/contracts';

import StakingABI from '../abis/Staking.json';

const StakingInterface = new ethers.utils.Interface(StakingABI)
const StakingAddress = import.meta.env.VITE_SIMPLI_STEAKING_ADDRESS as string
const contract = new Contract(StakingAddress, StakingInterface)


export function useGetBalanceOfStaking(address: any) {
  const [balance] : any = useContractCall({
    abi: StakingInterface,
    address: StakingAddress,
    method: "balanceOf",
    args:[address],
  }) ?? [];
  return balance
}

export function useTotalSupply() {
  const [totalSupply] : any = useContractCall({
    abi: StakingInterface,
    address: StakingAddress,
    method: "totalSupply",
    args:[],
  }) ?? [];
  return totalSupply
}

export function useStaking(){
  const { state, send } = useContractFunction(contract, 'enter', { transactionName:'enter' })
  return { state, send }
}

export function useUnStaking(){
  const { state, send } = useContractFunction(contract, 'leave', { transactionName: 'leave'})
  return { state, send }
}