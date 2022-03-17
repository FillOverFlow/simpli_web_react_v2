import * as request from '@/apis/request'
import { APIResponse } from '@/apis/request'

export default { 
  getTotalTVLAPI: async () => {
    try {
      const response = await request.get<APIResponse>(`/tvl`)
      const [data] = response.data
      return data;
    }catch(e) { 
      console.error('error TVL API ', e)
    }
  },
  getDashboardAPI: async () => {
    try {
      const response = await request.get<APIResponse>(`/load_addr_pid_alloc_point`)
      const [data] = response.data
      return data;
    }catch(e) { 
      console.error('error TVL API ', e)
    }
  }
}

export interface tvlData { 
  pid : number  
  tvl : string 
  dailyAPR: string
  weeklyAPR: string 
  yearlyAPR: string
  lp_value_usd: string
  total_supply: string
  
}

export interface DashboardData {
  pool_name : string
  address: string
  pid : number
  alloc_point : number 
}

export interface FarmDataTable  {
  amountUSD: number | "" | undefined;
  simpliEarn: any[] | undefined;
  amountNumber: number | undefined;
  amountBigNumber: any | undefined;
  pool_name?: string | undefined;
  address?: string | undefined;
  alloc_point?: number | undefined;
  pid?: number | undefined;
  tvl?: string | undefined;
  dailyAPR?: string | undefined;
  weeklyAPR?: string | undefined;
  yearlyAPR?: string | undefined;
  lp_value_usd?: string | undefined;
  total_supply?: string | undefined;
}