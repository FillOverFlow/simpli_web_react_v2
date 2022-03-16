import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Divider, Stack } from '@mui/material';
import ethbtc from '../../assets/eth-btc.svg';
import { ButtonBase, ButtonEx, ClaimB } from './button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters square {...props} />
))(({ theme }) => ({
  borderRadius: '16px',
  backgroundColor: 'rgba(145, 158, 171, 0.1)'
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({}));

//ข้างใน
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('pool_1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Stack spacing={2}>
      <div>
        <Accordion
          expanded={expanded === 'pool_1'}
          onChange={handleChange('pool_1')}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />}
          >
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Stack direction="row" alignItems="center" spacing={2}>
                <img
                  src={ethbtc}
                  style={{
                    height: '24px',
                    width: '32px'
                  }}
                  alt="ethbtc"
                />
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    textAlign="center"
                    fontSize="10px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color='#FFFFFF'
                  >
                    ETH-BTCB
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontSize="13px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color='#FFFFFF'
                  >
                    Pancake
                  </Typography>
                </Stack>
              </Stack>
              <Box marginX="80px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  $684.727
                </Typography>
              </Box>
              <Box marginRight="80px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  10950.13825867
                </Typography>
              </Box>
              <Box marginRight="90px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  $684.727
                </Typography>
              </Box>
              <Box marginRight="120px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  43.87%
                </Typography>
              </Box>
              <Box marginRight="49.75px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  117.41%
                </Typography>
              </Box>
            </Stack>
          </AccordionSummary>
          <Divider variant="middle" />
          <AccordionDetails>
            <Stack spacing="24px" direction="row">
              <Box
                width="415px"
                height="58px"
                border="1px solid rgba(145, 158, 171, 0.24)"
                borderColor="rgba(145, 158, 171, 0.16)"
                borderRadius="8px"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingX="16px"
                  paddingY="12px"
                >
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="normal"
                    color='#FFFFFF'
                  >
                    SIMPLI Earned
                    <div>
                      <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight={500}
                        color='#FFFFFF'
                      >
                        1.180084
                      </Typography>
                    </div>
                  </Typography>
                  <ClaimB />
                </Stack>
              </Box>
              <Box
                width="415px"
                height="58px"
                border="1px solid rgba(145, 158, 171, 0.24)"
                borderColor="rgba(145, 158, 171, 0.16)"
                borderRadius="8px"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingX="16px"
                  paddingY="12px"
                >
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="normal"
                    color='#FFFFFF'
                  >
                    LP Staked
                    <div>
                      <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight={500}
                        color='#FFFFFF'
                      >
                        1.180084
                      </Typography>
                    </div>
                  </Typography>
                  {<ButtonBase title={'WithDraw'}/>}
                  {<ButtonBase title={'Deposit'} />}
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion
          expanded={expanded === 'pool_2'}
          onChange={handleChange('pool_2')}
        >
          <AccordionSummary
            aria-controls="pool_2-content"
            id="pool_2-header"
            expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />}
          >
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Stack direction="row" alignItems="center" spacing={2}>
                <img
                  src={ethbtc}
                  style={{
                    height: '24px',
                    width: '32px'
                  }}
                  alt="ethbtc"
                />
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    textAlign="center"
                    fontSize="10px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color='#FFFFFF'
                  >
                    ETH-BTCB
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontSize="13px"
                    fontWeight="normal"
                    fontStyle="normal"
                    color='#FFFFFF'
                  >
                    Pancake
                  </Typography>
                </Stack>
              </Stack>
              <Box marginX="80px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  $684.727
                </Typography>
              </Box>
              <Box marginRight="80px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  10950.13825867
                </Typography>
              </Box>
              <Box marginRight="90px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  $684.727
                </Typography>
              </Box>
              <Box marginRight="120px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  43.87%
                </Typography>
              </Box>
              <Box marginRight="49.75px">
                <Typography
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="normal"
                  fontStyle="normal"
                  color='#FFFFFF'
                >
                  117.41%
                </Typography>
              </Box>
            </Stack>
          </AccordionSummary>
          <Divider variant="middle" />
          <AccordionDetails>
            <Stack spacing="24px" direction="row">
              <Box
                width="415px"
                height="58px"
                border="1px solid rgba(145, 158, 171, 0.24)"
                borderColor="rgba(145, 158, 171, 0.16)"
                borderRadius="8px"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingX="16px"
                  paddingY="12px"
                >
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="normal"
                    color='#FFFFFF'
                  >
                    SIMPLI Earned
                    <div>
                      <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight={500}
                        color='#FFFFFF'
                      >
                        1.180084
                      </Typography>
                    </div>
                  </Typography>
                  <ClaimB />
                </Stack>
              </Box>
              <Box
                width="415px"
                height="58px"
                border="1px solid rgba(145, 158, 171, 0.24)"
                borderColor="rgba(145, 158, 171, 0.16)"
                borderRadius="8px"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingX="16px"
                  paddingY="12px"
                >
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="normal"
                    color='#FFFFFF'
                  >
                    LP Staked
                    <div>
                      <Typography
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight={500}
                        color='#FFFFFF'
                      >
                        1.180084
                      </Typography>
                    </div>
                  </Typography>
                  {<ButtonBase title={'WithDraw'}/>}
                  {<ButtonBase title={'Deposit'} />}
                </Stack>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
    </Stack>
  );
}
