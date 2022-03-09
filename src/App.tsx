import { FC } from 'react'
import { Link, Slider, styled } from '@mui/material'
import Header from './components/header'
import Route from './Router'
import './pages/style.css'
const App: FC = () => {
  return (
    <Root className='App-header'>
      <Route></Route>
    </Root>
  )
}

const Root = styled('div')`
  width: 100%;
  display: flex;
`

export default App
