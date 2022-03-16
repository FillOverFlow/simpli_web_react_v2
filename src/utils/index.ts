import { DashboardData, FarmDataTable, tvlData } from "@/apis/you_position";

export const convertPoolName = (pools : string ) => {
    let split = pools.split(':').map(s => s.toUpperCase());
    if (split.length > 2) split = split.slice(1);
    split = split.filter(s => s != null && s != '');
    return split.map((s, i) => (i > 0 ? '-' : '') + s)
}

export const mergePoolDataWithTvl = (poolData1 :DashboardData[], poolData2: tvlData[]): (DashboardData & tvlData | undefined)[] =>  {
  //poolData1 need have pool_name
  return poolData1.map((item,i) => {
    if(item.pid === poolData2[i].pid){
      return Object.assign({},item,poolData2[i])
    }
  })
}

export const convertInternationalCurrentcy = (value: number,display:number = 3) => {
     // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9
    ? (Math.abs(Number(value)) / 1.0e+9).toFixed(display) + "B"
     // Six Zeroes for Millions 
    : Math.abs(Number(value)) >= 1.0e+6
    ? (Math.abs(Number(value)) / 1.0e+6).toFixed(display) + "M"
    // Three Zeroes for Thousands
    : (Math.abs(Number(value)) >= 1.0e+3)
    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(display) + "K"
    : Math.abs(Number(value)).toFixed(display); 
}

