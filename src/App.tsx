import { FC } from 'react';

import Route from './Router';
import './pages/style.css';

import bg_image from './assets/bg_image.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    minHeight: '100vh',
    background: `linear-gradient(
        0deg,
        rgba(14, 31, 45, 0.56) 0%,
        rgba(14, 31, 45, 0.56) 0%),
      url(${bg_image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  grid: {
    height: '100vh'
  },
  paperLeft: {
    height: '90%'
  },
  paperTop: {
    height: '20%'
  },
  paperMain: {
    height: '90%'
  },
  paperRight: {},
  paperBottom: { height: '20%' },
  paper: {
    textAlign: 'center'
  }
}));
const App: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Route />
    </div>
  );
};

export default App;
