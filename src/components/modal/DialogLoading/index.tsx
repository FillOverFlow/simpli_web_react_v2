import { Container } from './css'

interface IProps {
  action: string
  value: string
}
export default ({ action, value}: IProps) => { 

    return (
      <div>
        <Container>
          <h2 className="wait-title">Waiting for comfirmation</h2>
          <h5 className="donot-close-title">Do not close you internet browser</h5>
          <div className="swap-con">
            <h1 className="load-title">{action} <span className="accent">{value}</span></h1>
            <span className="detail">Confirm this transaction in your wallet</span>
          </div>
        </Container>
      </div>
    );  
}