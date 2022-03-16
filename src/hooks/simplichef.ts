import { ethers } from 'ethers';
import { useContractCall, useContractCalls, useContractFunction } from '@usedapp/core';
import { Contract } from '@ethersproject/contracts';

import SimpliChefABI from '../abis/Simplichef.json';

const SimpliCheftInterface = new ethers.utils.Interface(SimpliChefABI);
const SimpliChefAddress = import.meta.env.VITE_SIMPLI_CHEF_ADDRESS  as string;
const contract = new Contract(SimpliChefAddress, SimpliCheftInterface);


export function useStakedWantTokenList(pidList: any[], walletAddress){
  return useContractCalls(
    pidList && walletAddress 
    ? pidList.map((pid: any) => ({
      abi: SimpliCheftInterface,
      address: SimpliChefAddress,
      method: 'stakedWantTokens',
      args: [pid, walletAddress]
    }))
    : []
  )
}

export function useStakedWantToken(pid,address) {
  const [stakedWantTokens] : any = useContractCall({
    abi: SimpliCheftInterface,
    address: SimpliChefAddress,
    method: "stakedWantTokens",
    args:[pid,address],
  }) ?? [];
  return stakedWantTokens
}

export function useUserInfo(pid,address) {
  const [shares, rewardDebt] : any = useContractCall({
    abi: SimpliCheftInterface,
    address: SimpliChefAddress,
    method: "userInfo",
    args:[pid,address],
  }) ?? [];
  return [shares, rewardDebt]
}

export function useTotalAllocPoint(){
  const [totalAllocPoint] : any = useContractCall({
    abi: SimpliCheftInterface,
    address: SimpliChefAddress,
    method:"totalAllocPoint",
    args:[],
  }) ?? [];
  return totalAllocPoint
}

export function useSIMPLIPerBlock(){
  const [simpliPerBlock] : any = useContractCall({
    abi: SimpliCheftInterface,
    address: SimpliChefAddress,
    method: "SIMPLIPerBlock",
    args:[],
  }) ?? [];
  return simpliPerBlock
}

export function usePendingSIMPLI(pid,address) {
  const [pendingSIMPLI] : any = useContractCall({
    abi: SimpliCheftInterface,
    address: SimpliChefAddress,
    method: "pendingSIMPLI",
    args:[pid,address],
  }) ?? [];
  return pendingSIMPLI
}


export function usePendingSIMPLIList(pidList: any[], walletAddress) {
  return useContractCalls(
    pidList && walletAddress 
    ? pidList.map((pid: any , index) => ({
      abi: SimpliCheftInterface,
      address: SimpliChefAddress,
      method: 'pendingSIMPLI',
      args: [pid, walletAddress]
    }))
    : []
  )
}

export function usePoolInfo(pid) {
  const [want,allocPoint,lastRewardBlock,accSIMPLIPerShare,strat] : any = useContractCall({
    abi: SimpliCheftInterface,
    address: SimpliChefAddress,
    method:"poolInfo",
    args:[pid]
  }) ?? [];
  return [want,allocPoint,lastRewardBlock,accSIMPLIPerShare,strat]
}


export function useDeposit() {
    const { state, send } =  useContractFunction(contract, 'deposit', { transactionName: 'deposit'})
    return { state, send }
}