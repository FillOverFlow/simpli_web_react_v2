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
import { ButtonBase, ClaimB } from './button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DashboardData, FarmDataTable, tvlData } from '@/apis/you_position';
import { convertInternationalCurrentcy, convertPoolName } from '@/utils';
import { displayWeiToEther } from '@/utils/web3';


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

interface ICustomizeProps { 
  dashBoardData : FarmDataTable[];
}
export default function CustomizedAccordions({
  dashBoardData
}: ICustomizeProps) {
  const [expanded, setExpanded] = React.useState<string | false>('pool_1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Stack spacing={2}>
      {dashBoardData && dashBoardData.map(({pid, pool_name, tvl,amountUSD,amountBigNumber, simpliEarn, yearlyAPR }, index) => {
        const pool = convertPoolName(pool_name)
        const platform = pool_name.split(':')[0].toUpperCase()
        return (
          <div>
            <Accordion
              expanded={expanded === `pool_${index}`}
              onChange={handleChange(`pool_${index}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
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
                        color="#FFFFFF"
                      >
                        {pool}
                      </Typography>
                      <Typography
                        textAlign="center"
                        fontSize="13px"
                        fontWeight="normal"
                        fontStyle="normal"
                        color="#FFFFFF"
                      >
                        {platform}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Box marginX="80px">
                    <Typography
                      textAlign="center"
                      fontSize="13px"
                      fontWeight="normal"
                      fontStyle="normal"
                      color="#FFFFFF"
                    >
                      ${amountUSD.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box marginRight="80px">
                    <Typography
                      textAlign="center"
                      fontSize="13px"
                      fontWeight="normal"
                      fontStyle="normal"
                      color="#FFFFFF"
                    >
                      {simpliEarn && displayWeiToEther(simpliEarn[0],8)}
                    </Typography>
                  </Box>
                  <Box marginRight="90px">
                    <Typography
                      textAlign="center"
                      fontSize="13px"
                      fontWeight="normal"
                      fontStyle="normal"
                      color="#FFFFFF"
                    >
                      ${tvl && convertInternationalCurrentcy(+tvl)}
                    </Typography>
                  </Box>
                  <Box marginRight="120px">
                    <Typography
                      textAlign="center"
                      fontSize="13px"
                      fontWeight="normal"
                      fontStyle="normal"
                      color="#FFFFFF"
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
                      color="#FFFFFF"
                    >
                      {(+yearlyAPR).toFixed(2)}%
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
                        color="#FFFFFF"
                      >
                        SIMPLI Earned
                        <div>
                          <Typography
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {simpliEarn && displayWeiToEther(simpliEarn[0],10)}
                          </Typography>
                        </div>
                      </Typography>
                      <ClaimB pid={pid} />
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
                        color="#FFFFFF"
                      >
                        LP Staked
                        <div>
                          <Typography
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {displayWeiToEther(amountBigNumber[0],8)}
                          </Typography>
                        </div>
                      </Typography>
                      {<ButtonBase title={'WithDraw'} />}
                      {<ButtonBase title={'Deposit'} />}
                    </Stack>
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </Stack>
  );
}
