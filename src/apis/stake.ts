import * as request from '@/apis/request'
import { APIResponse } from '@/apis/request'

export default { 
  stakingAPR : async () => {
    try {
      const response = await request.get<APIResponse>(`/staking_apr`)
      const [data] = response.data
      return data;
    }catch(e) { 
      console.error('error staking API ', e)
    }
  }
}