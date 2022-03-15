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
  }
}

export interface tvlData { 
  pid : number  
  tvl : string 
}