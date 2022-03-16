import { FC } from 'react';

import Route from './Router';
import './pages/style.css';

import bg_image from './assets/bg_image.png';
import { makeStyles } from '@mui/styles';
import { Box, Stack } from '@mui/material';
import { LogoFooter } from './components/footer/footer';
import { SocialMediaComponent } from './components/layout/socialmedia';
import { AuditByComponent } from './components/layout/auditlogo';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(
        0deg,
        rgba(14, 31, 45, 0.56) 0%,
        rgba(14, 31, 45, 0.56) 0%),
      url(${bg_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
      <Stack
        bgcolor="rgba(14, 31, 45, 1)"
        width="100%"
        height="110px"
        px="146px"
        py="24px"
        justifyContent="center"
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box alignItems="flex-start">
            <LogoFooter />
          </Box>
          <Stack flexDirection="row">
            <SocialMediaComponent />
            <Box width="53px" />
            {AuditByComponent('35px', '99px')}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
  //   <Box
  //     sx={{
  //       background: `linear-gradient(
  //       0deg,
  //       rgba(14, 31, 45, 0.56) 0%,
  //       rgba(14, 31, 45, 0.56) 0%),
  //     url(${bg_image})`,
  //       backgroundPosition: 'center',
  //       backgroundRepeat: 'no-repeat'
  //     }}
  //   >
  //     <Route />
  //   </Box>
  // );
};

export default App;
