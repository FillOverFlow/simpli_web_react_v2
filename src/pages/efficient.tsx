import { ArrowCircleLeft, ArrowRightAlt } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

const Efficient = () => {
  return (
    <header className="ai-header">
      <Stack direction="column" width="100%">
        <Box width="293 px" height="48px" justifyContent="flex-start" mb="24px">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              style={{
                textAlign: 'center',
                fontSize: '32px',
                fontWeight: '700px',
                fontStyle: 'normal',
                color: '#FFFFFF'
              }}
            >
              AI Farm
            </Typography>
            <Typography
              style={{
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '400px',
                fontStyle: 'normal',
                alignItems: 'center',
                color: '#6CFFD3'
              }}
            >
              (Optimal Asset Allocation)
            </Typography>
          </Stack>
        </Box>
        <Link to={'/'}>
          <Typography
            fontSize="13px"
            fontWeight="bold"
            fontStyle="normal"
            color="#FFFFFF"
          >
            Back
          </Typography>
        </Link>
      </Stack>
      {/* <Grid container border={2}></Grid> */}
    </header>
  );
};

export default Efficient;
