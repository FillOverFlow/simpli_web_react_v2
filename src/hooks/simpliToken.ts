import { ethers } from 'ethers';
import { useContractCall , useContractFunction } from '@usedapp/core';
import { Contract } from '@ethersproject/contracts';

import SimpliABI from '../abis/SimpliToken.json';

const SimpliInterface = new ethers.utils.Interface(SimpliABI)
const SimpliAddress = import.meta.env.VITE_SIMPLI_TOKEN_ADDRESS as string
const contract = new Contract(SimpliAddress, SimpliInterface)

export function useGetBalanceOfSIMPLI(address : any) {
  const [balance] : any = useContractCall({
    abi: SimpliInterface,
    address: SimpliAddress,
    method: "balanceOf",
    args:[address],
  }) ?? [];
  return balance
}

export function useAllowance(owner: any ,spender : any){
  const [allowance] : any = useContractCall({
    abi: SimpliInterface,
    address: SimpliAddress,
    method: "allowance",
    args:[owner,spender],
  }) ?? [];
  return allowance;
}

export function useApprove(){
  const { state, send } = useContractFunction(contract, 'approve', { transactionName:'approve' })
  return { state, send }
}


