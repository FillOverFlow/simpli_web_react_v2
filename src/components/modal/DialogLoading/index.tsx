import { Container } from './css'

interface IProps {
  label?: string
  labelLeft?: string
  labelRight?:string 
  valueLeft?: string
  valueRight?: string

}
export default ({ labelLeft='SIMPLI', labelRight='xSIMPLI'  , label='Staking' , valueLeft='0', valueRight='0'}: IProps) => { 

    return (
    <Container>
      <h1 className='load-title'>Waiting for confirmation</h1>
      <span className='detail'>Please confirm your information</span>
      <div className='swap-con'>
        <span>
        {label} <span className='accent'>{valueLeft} {labelLeft} </span>
          {/* to <span className='accent'>{toDisplayNumber(valueRight, false)} {labelRight}</span> */}
        </span>
        <span>{`\n Confirm this transaction in your wallet`}</span>
      </div>
    </Container>
    );  
}