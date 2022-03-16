import {
  alpha,
  Box,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  styled,
  Typography
} from '@mui/material';
import './style.css';
import detaillogo from '../assets/detaillogo.png';
import fileicon from '../assets/fileicon.svg';
import metamask from '../assets/metamask.svg';
import iconsimpli from '../assets/iconsimpli.png';
import arrow from '../assets/arrow.svg';
import mascotXL from '../assets/mascotXL.svg';
import NumberFormat from 'react-number-format';
import { ConnectWallet2, InvestButton } from '@/components/layout/button';
import bscscan from '../assets/bscscan.svg';
import UnstyledSelectSimple from '@/components/layout/selectBox';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import ethbtc from '../assets/eth-btc.svg';
import bnbcoin from '../assets/bnbcoin.png';
import question from '../assets/question.png';
const Search = styled('div')(({ theme }) => ({
  height: '48px',
  position: 'relative',
  borderRadius: '8px',
  border: '1px solid #919EAB3D',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '352px',
  [theme.breakpoints.up('sm')]: {}
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  color: '#fffff',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#ffffff',
  '& .MuiInputBase-input': {
    paddingTop: '10px',
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('md')]: {}
  }
}));

const SelectionMenu = () => {
  return (
    <Stack direction="row" spacing="24px">
      <UnstyledSelectSimple />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search pools or tokens"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Stack>
  );
};

type Props = {
  setSelected: (val: Array<number>) => void;
};

const TableList: React.FC<Props> = ({ setSelected }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<Array<number>>([]);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    const currentIndex = selectedIndex.indexOf(index);
    const newSelected = [...selectedIndex];
    if (currentIndex === -1) {
      newSelected.push(index);
    } else {
      newSelected.splice(currentIndex, 1);
    }
    setSelectedIndex(newSelected);
    setSelected(newSelected);
  };

  return (
    <Grid sx={{ width: '100%', maxWidth: '709px' }}>
      <List
        aria-label="pool"
        disablePadding
        sx={{
          maxHeight: '528px',
          overflow: 'auto',
          marginTop: '8px',
          borderRadius: '16px',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0
          }
        }}
      >
        <Stack direction="column" spacing="16px">
          {[0, 1, 2, 3, 4].map((value) => {
            const labelId = `list-secondary-label-${value}`;
            return (
              <Stack direction="row" alignItems="center">
                <Box>
                  <ListItemButton
                    key={value}
                    sx={{
                      background: 'rgba(145, 158, 171, 0.16)',
                      border:
                        selectedIndex.indexOf(value) !== -1
                          ? '1px solid #6CFFD3'
                          : '1px solid rgba(145, 158, 171, 0.24)',
                      boxSizing: 'border-box',
                      borderRadius: '16px',
                      width: '609px'
                    }}
                    selected={selectedIndex.indexOf(value) !== -1}
                    onClick={(event) => handleListItemClick(event, value)}
                  >
                    <ListItemText>
                      <Stack
                        direction="row"
                        spacing="102px"
                        alignItems="center"
                      >
                        <Stack direction="row" spacing="10px">
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
                              fontSize="16px"
                              fontWeight="normal"
                              fontStyle="normal"
                              color="#FFFFFF"
                            >
                              ETH-BTCB
                            </Typography>
                            <Typography
                              textAlign="center"
                              fontSize="12px"
                              fontWeight="normal"
                              fontStyle="normal"
                              color="#FFFFFF"
                            >
                              Pancake
                            </Typography>
                          </Stack>
                        </Stack>
                        <Typography
                          textAlign="center"
                          fontSize="16px"
                          fontWeight="normal"
                          fontStyle="normal"
                          color="#FFFFFF"
                        >
                          $226,035,684
                        </Typography>
                        <Stack
                          direction="row"
                          spacing="5px"
                          alignItems="center"
                        >
                          <Typography
                            fontSize="16px"
                            fontWeight="normal"
                            fontStyle="normal"
                            color="#FFFFFF"
                          >
                            2.48 9.54
                          </Typography>
                          <div>/</div>
                          <Typography
                            fontSize="12px"
                            fontWeight="normal"
                            fontStyle="normal"
                            color="#919EAB"
                          >
                            9.54
                          </Typography>
                        </Stack>
                      </Stack>
                    </ListItemText>
                  </ListItemButton>
                </Box>
                <Box>
                  {selectedIndex.indexOf(value) !== -1 ? (
                    <Typography
                      fontSize="14px"
                      fontWeight="bold"
                      fontStyle="normal"
                      color="#FFFFFF"
                      marginLeft="24px"
                    >
                      Select
                    </Typography>
                  ) : (
                    ''
                  )}
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </List>
    </Grid>
  );
  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //     color: 'red',
  //   }
  // }));

  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   // '&:nth-of-type(odd)': {
  //   //   backgroundColor: theme.palette.action.hover
  //   // },
  //   // hide last border
  //   '&:last-child td, &:last-child th': {
  //     border: 0
  //   }
  // }));

  // function createData(
  //   name: string,
  //   calories: number,
  //   fat: number,
  //   carbs: number,
  //   protein: number
  // ) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9)
  // ];

  // return (
  //   <TableContainer component={Paper}>
  //     <Table
  //       sx={{ minWidth: 300, alignItems: 'center' }}
  //       aria-label="customized table"
  //     >
  //       {/* <TableHead>
  //         <TableRow>
  //           <StyledTableCell>Dessert</StyledTableCell>
  //           <StyledTableCell align="right">Calories</StyledTableCell>
  //           <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
  //           <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
  //           <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
  //         </TableRow>
  //       </TableHead> */}
  //       <TableBody>
  //         {rows.map((row) => (
  //           <StyledTableRow key={row.name}>
  //             <StyledTableCell component="th" scope="row">
  //               {row.name}
  //             </StyledTableCell>
  //             <StyledTableCell align="justify">{row.calories}</StyledTableCell>
  //             <StyledTableCell align="justify">{row.fat}</StyledTableCell>
  //             <StyledTableCell align="justify">{row.carbs}</StyledTableCell>
  //             <StyledTableCell align="justify">{row.protein}</StyledTableCell>
  //           </StyledTableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
};
export interface FarmPageProps {}
const Farm: React.FC<FarmPageProps> = (props) => {
  let price: number = 1.03;
  let price2: number = 2.0;
  let price3: number = 6006930.31;
  const [selected, setSelected] = React.useState<Array<number>>([]);
  return (
    <header className="farm-header ">
      <Stack direction="column">
        <Box width="293 px" height="48px" justifyContent="flex-start" mb="24px">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              textAlign="center"
              fontSize="32px"
              fontWeight={700}
              fontStyle="normal"
              color="#FFFFFF"
            >
              Manual
            </Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing="60px" mb="40px">
          <Stack
            className="backgroundTVL"
            width="600px"
            height="182px"
            position="relative"
            display="flex"
            direction="row"
          >
            <img
              src={detaillogo}
              style={{
                height: '182px',
                width: '168px',
                borderRadius: '16px'
              }}
              alt="detaillogo"
            />
            <Stack textAlign="center" justifyContent="center">
              <Typography
                fontSize="18px"
                fontWeight="700px"
                fontStyle="normal"
                textAlign="center"
                color="#F9FAFB"
              >
                Total Value Locked
              </Typography>
              <Typography
                fontSize="32px"
                fontStyle="normal"
                fontWeight="700px"
                color="#F9FAFB"
                sx={{
                  textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <NumberFormat
                  value={price3}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </Typography>
              <Stack
                direction="row"
                spacing="2px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400px"
                  color="#F9FAFB"
                  textAlign="center"
                >
                  View on BscScan
                </Typography>
                <IconButton aria-label="bsc" size="medium">
                  <img src={bscscan} alt="bsc" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            className="blockWallet"
            padding="15px"
            spacing="15px"
            height="182px"
            width="158px"
          >
            <Typography
              fontSize="14px"
              fontWeight="500px"
              fontStyle="normal"
              color="#F9FAFB"
            >
              Your SIMPLI Wallet Balance
            </Typography>

            <Box width="100%" height="37px">
              <Stack direction="row" spacing="10px">
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#6CFFD3"
                >
                  <NumberFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight="500px"
                  fontStyle="normal"
                  color="#6CFFD3"
                >
                  $SIMPLI
                </Typography>
              </Stack>
              <Typography
                fontSize="10px"
                fontWeight="normal"
                fontStyle="normal"
                color="#F9FAFB"
              >
                $ 0.0
              </Typography>
            </Box>
            <Stack width="100%" height="32px">
              <Typography
                fontSize="12px"
                fontWeight="normal"
                fontStyle="normal"
                color="#F9FAFB"
              >
                SIMPLI Tokens
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <IconButton aria-label="fileicon" size="medium">
                  <img
                    src={fileicon}
                    style={{ height: '25px', width: '15px' }}
                    alt="fileicon"
                  />
                </IconButton>
                <IconButton aria-label="fileicon" size="medium">
                  <img
                    src={metamask}
                    style={{ height: '25px', width: '25px' }}
                    alt="metamask"
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            height="182px"
            width="158px"
            borderRadius="16px"
            className="blockWallet"
            spacing="20px"
            padding="15px"
          >
            <Box width="133px" height="44px">
              <Typography
                fontSize="14px"
                fontWeight="50px"
                fontStyle="normal"
                color="#F9FAFB"
              >
                SIMPLI Token
              </Typography>
              <Stack direction="row" spacing="10px">
                <img
                  src={iconsimpli}
                  style={{ width: '15px', height: '15px' }}
                  alt="Simpli"
                />
                <Typography
                  fontSize="12px"
                  fontWeight="400px"
                  fontStyle="normal"
                  color="#C4CDD5"
                >
                  $SIMPLI / UST
                </Typography>
              </Stack>
            </Box>
            <Box width="93px" height="37px">
              {price2 > price ? (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <img
                    src={arrow}
                    style={{
                      height: '15px',
                      width: '15px',
                      color: '#229A16'
                    }}
                    alt="arrow"
                  />
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      color: '#F9FAFB'
                    }}
                  >
                    {price} UST
                  </div>
                </Stack>
              ) : (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <img
                    src={arrow}
                    style={{
                      height: '15px',
                      width: '15px',
                      color: 'red'
                    }}
                    alt="arrow"
                  />
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      fontStyle: 'normal',
                      color: '#F9FAFB'
                    }}
                  >
                    {price} UST
                  </div>
                </Stack>
              )}
            </Box>
          </Stack>
        </Stack>
        <Grid container>
          <Stack direction="row" spacing="40px">
            <Stack
              display="flex"
              sx={{
                background: '#17283C',
                border: '1px solid #002339',
                boxSizing: 'border-box',
                boxShadow:
                  '0px 0px 2px rgba(0, 0, 0, 0.24), 0px 16px 32px -4px rgba(0, 0, 0, 0.24)',
                borderRadius: '16px'
              }}
            >
              <Stack sx={{ padding: '24px' }} spacing="16px">
                <Typography
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500px"
                  color="#FFFFFF"
                >
                  Investment list
                </Typography>
                <SelectionMenu />
              </Stack>
              <Divider color="#454F5B" />
              <Stack marginTop="48px" paddingX="24px">
                <Stack
                  width="609px"
                  direction="row"
                  spacing="102px"
                  justifyContent="space-between"
                  paddingX="48px"
                >
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="500px"
                    color="#919EAB"
                  >
                    Pool
                  </Typography>
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="500px"
                    color="#919EAB"
                    width="60px"
                    textAlign="right"
                  >
                    TVL
                  </Typography>
                  <Typography
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="500px"
                    color="#919EAB "
                  >
                    APR(%) / APY(%)
                  </Typography>
                </Stack>
                <TableList setSelected={setSelected} />
              </Stack>
            </Stack>
            <Stack display="block" spacing="40px">
              <Stack
                direction="column"
                spacing="10px"
                alignItems="flex-start"
                padding="24px"
                sx={{
                  width: '256px',
                  height: '168px',
                  background: '#17283C',
                  border: '1px solid #002339',
                  boxSizing: 'border-box',
                  boxShadow:
                    '0px 0px 2px rgba(0, 0, 0, 0.24), 0px 16px 32px -4px rgba(0, 0, 0, 0.24)',
                  borderRadius: '16px'
                }}
              >
                <Typography
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500px"
                  color="#FFFFFF"
                >
                  Your Token
                </Typography>
                <Stack direction="row" spacing={1}>
                  <img src={bnbcoin} alt="bnb" />
                  <Typography
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500px"
                    color="#FFFFFF"
                  >
                    BNB
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500px"
                    color="#FFFFFF"
                  >
                    Balance
                  </Typography>
                  <img src={question} alt="question" />
                </Stack>

                <Typography
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500px"
                  color="#6CFFD3"
                >
                  4.568238053543385
                </Typography>
              </Stack>

              <Stack
                padding="24px"
                spacing="16px"
                sx={{
                  width: '256px',
                  maxHeight: '100vh',
                  marginBottom: '40px',
                  background: '#17283C',
                  border: '1px solid #002339',
                  boxSizing: 'border-box',
                  boxShadow:
                    '0px 0px 2px rgba(0, 0, 0, 0.24), 0px 16px 32px -4px rgba(0, 0, 0, 0.24)',
                  borderRadius: '16px'
                }}
              >
                <Typography
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500px"
                  color="#FFFFFF"
                >
                  Investment Select
                </Typography>
                <Stack direction="column">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    marginBottom="15px"
                  >
                    <Typography
                      fontSize="12px"
                      fontStyle="normal"
                      fontWeight="400px"
                      color="#919EAB"
                    >
                      Pool
                    </Typography>
                    <Typography
                      fontSize="12px"
                      fontStyle="normal"
                      fontWeight="400px"
                      color="#919EAB"
                    >
                      Amount
                    </Typography>
                  </Stack>

                  {selected.map((value) => {
                    return (
                      <Stack height="64px" width="208px">
                        <Stack direction="row" spacing="10px">
                          <img
                            src={ethbtc}
                            style={{
                              height: '24px',
                              width: '32px'
                            }}
                            alt="ethbtc"
                          />

                          <Typography
                            textAlign="center"
                            fontSize="14px"
                            fontWeight="normal"
                            fontStyle="normal"
                            color="#FFFFFF"
                          >
                            ETH-BTCB
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          marginTop="9px"
                        >
                          <Typography
                            fontSize="12px"
                            fontWeight="normal"
                            fontStyle="normal"
                            color="#FFFFFF"
                          >
                            Platform: Pancake
                          </Typography>
                          <Typography
                            fontSize="14px"
                            fontWeight="normal"
                            fontStyle="normal"
                            color="#FFFFFF"
                          >
                            0.014
                          </Typography>
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>
                <InvestButton />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        {/* <Stack
          style={{ width: '100%' }}
          paddingY="24px"
          justifyContent="center"
          alignItems="center"
          className="assetAllocation"
        >
          <img src={mascotXL} alt="mascot" style={{ marginBottom: '8px' }} />
          <Typography
            textAlign="center"
            fontSize="32px"
            fontWeight="bold"
            fontStyle="normal"
            marginBottom="8px"
            color="#F9FAFB"
            sx={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            Connect Wallet
          </Typography>
          <Typography
            textAlign="center"
            fontSize="18px"
            fontWeight="bold"
            fontStyle="normal"
            marginBottom="47px"
            color="#F9FAFB"
          >
            โปรดเชื่อมต่อกระเป๋าเงินคริปโตของท่านก่อนเริ่มใช้งาน
          </Typography>
          <ConnectWallet2 />
        </Stack> */}
      </Stack>
    </header>
  );
};

export default Farm;
