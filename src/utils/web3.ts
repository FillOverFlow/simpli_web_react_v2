import { formatUnits, parseEther, formatEther } from '@ethersproject/units'

export const truncate = (str: string, showFrontDigits=3, showRearDigits=3) => {
    return (str.length > showFrontDigits + showRearDigits) ? str.substr(0, showFrontDigits-1) + '...' + str.slice(-showRearDigits) : str;
};

export const avoidScienceNumberFormat = (num : number | string)  => {
    return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function(a,b,c,d,e) {
    return e < 0
        ? b + '0.' + Array(1-e-c.length).join('0') + c + d
        : b + c + d + Array(e-d.length+1).join('0');
    });
}  

export const truncateFloat = (str: string, showDigits=8) => {
    let result = str
    if(str.includes('.')){
        const frontDigist = str.split('.')[0]
        const floatDigist = str.split('.')[1];
        const floatDigistPosition = floatDigist.slice(0,showDigits)
        result = frontDigist +'.'+ floatDigistPosition
    }
    return result
};

export const weiToEther = (value : any, showDigits=8) => {
    const EtherString = formatUnits(value)
    const EtherTruncateString = truncateFloat(EtherString,showDigits)
    return EtherTruncateString
}

export const weiToEtherOld = (value : any, showDigits=8) => {
    const EtherFloat = parseFloat(formatEther(value))
    const EtherString = EtherFloat + ''
    const EtherTruncateString = truncateFloat(EtherString,showDigits)
    return avoidScienceNumberFormat(EtherTruncateString)
}

export const etherToWei = (value : string) => {
    return parseEther(value)
}

export const weiToFloat = (value : any ,showDigits=21) => {
    return +weiToEther(value,showDigits)
}

export const displayWeiToEther = (value : any , showDigits=21) => {
    return value ? weiToEther(value,showDigits) : 0.0
}

