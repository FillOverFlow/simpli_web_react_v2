import { FC } from 'react'
import { styled } from '@mui/material'

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
