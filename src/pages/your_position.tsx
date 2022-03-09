import {
    Box,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Divider
} from '@mui/material';

import detaillogo from '../assets/detaillogo.png';
import fileicon from '../assets/fileicon.svg';
import metamask from '../assets/metamask.svg';
import iconsimpli from '../assets/iconsimpli.png';
import ethbtc from '../assets/eth-btc.svg';
import arrow from '../assets/arrow.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './style.css';
import NumberFormat from 'react-number-format';
import { ButtonEx, ClaimB, ClaimButton } from '@/components/layout/button';
import { MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export interface PositionPageProps { }
const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
				backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(3),
				width: '645px'
		}
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
				padding: theme.spacing(1, 1, 1, 0),
				paddingLeft: `calc(1em + ${theme.spacing(4)})`,
				transition: theme.transitions.create('width'),
				width: '100%',

				[theme.breakpoints.up('md')]: {
						width: '65ch'
				}
		}
}));

const SelectionMenu = () => {
		const [select, setSelect] = React.useState('all');

    const handleChange_Selected = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };
    return (
        <Stack direction="row" spacing="24px">
            <div>
                <FormControl fullWidth>
                    <Select value={select} onChange={handleChange_Selected} variant="outlined" className="select">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'all'}>All Platform</MenuItem>
                        <MenuItem value={'ex1'}>Example 1</MenuItem>
                        <MenuItem value={'ex2'}>Example 2</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Search className="search" style={{ width: '100%' }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search pools or tokens" inputProps={{ 'aria-label': 'search' }} />
            </Search>
        </Stack>
    );
};

const AccordionEx = () => {
		const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange_Accordion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Stack>
            <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === 'panel1'}
                onChange={handleChange_Accordion('panel1')}
                style={{ borderRadius: 16 }}
                sx={{
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    border: '1px solid rgba(145, 158, 171, 0.24)',
                    marginTop: '10px',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" marginRight="80px">
                            <img
                                src={ethbtc}
                                style={{
                                    height: '24px',
                                    width: '32px',
                                    marginRight: '4px'
                                }}
                                alt="ethbtc"
                            />
                            <Typography fontSize="13px" fontWeight="normal" fontStyle="normal">
                                ETH-BTCB Pancake
                            </Typography>
                        </Stack>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="80px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            10950.13825867
                        </Typography>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="103px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            43.87%
                        </Typography>
                        <Typography marginLeft="30px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            117.41%
                        </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant="fullWidth" />
                    <Stack spacing="24px" direction="row" marginTop="16px">
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    SIMPLI Earned
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                <ClaimB />
                            </Stack>
                        </Box>
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    LP Staked
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                {ButtonEx('Withdraw')}
                                {ButtonEx('Deposit')}
                            </Stack>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === 'panel2'}
                onChange={handleChange_Accordion('panel2')}
                style={{ borderRadius: 16 }}
                sx={{
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    border: '1px solid rgba(145, 158, 171, 0.24)',
                    marginTop: '10px',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" marginRight="80px">
                            <img
                                src={ethbtc}
                                style={{
                                    height: '24px',
                                    width: '32px',
                                    marginRight: '4px'
                                }}
                                alt="ethbtc"
                            />
                            <Typography fontSize="13px" fontWeight="normal" fontStyle="normal">
                                ETH-BTCB Pancake
                            </Typography>
                        </Stack>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="80px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            10950.13825867
                        </Typography>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="103px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            43.87%
                        </Typography>
                        <Typography marginLeft="30px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            117.41%
                        </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant="fullWidth" />
                    <Stack spacing="24px" direction="row" marginTop="16px">
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    SIMPLI Earned
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                <ClaimB />
                            </Stack>
                        </Box>
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    LP Staked
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                {ButtonEx('Withdraw')}
                                {ButtonEx('Deposit')}
                            </Stack>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === 'panel3'}
                onChange={handleChange_Accordion('panel3')}
                style={{ borderRadius: 16 }}
                sx={{
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    border: '1px solid rgba(145, 158, 171, 0.24)',
                    marginTop: '10px',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" marginRight="80px">
                            <img
                                src={ethbtc}
                                style={{
                                    height: '24px',
                                    width: '32px',
                                    marginRight: '4px'
                                }}
                                alt="ethbtc"
                            />
                            <Typography fontSize="13px" fontWeight="normal" fontStyle="normal">
                                ETH-BTCB Pancake
                            </Typography>
                        </Stack>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="80px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            10950.13825867
                        </Typography>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="103px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            43.87%
                        </Typography>
                        <Typography marginLeft="30px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            117.41%
                        </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant="fullWidth" />
                    <Stack spacing="24px" direction="row" marginTop="16px">
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    SIMPLI Earned
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                <ClaimB />
                            </Stack>
                        </Box>
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    LP Staked
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                {ButtonEx('Withdraw')}
                                {ButtonEx('Deposit')}
                            </Stack>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === 'panel4'}
                onChange={handleChange_Accordion('panel4')}
                style={{ borderRadius: 16 }}
                sx={{
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    border: '1px solid rgba(145, 158, 171, 0.24)',
                    marginTop: '10px',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" marginRight="80px">
                            <img
                                src={ethbtc}
                                style={{
                                    height: '24px',
                                    width: '32px',
                                    marginRight: '4px'
                                }}
                                alt="ethbtc"
                            />
                            <Typography fontSize="13px" fontWeight="normal" fontStyle="normal">
                                ETH-BTCB Pancake
                            </Typography>
                        </Stack>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="80px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            10950.13825867
                        </Typography>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="103px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            43.87%
                        </Typography>
                        <Typography marginLeft="30px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            117.41%
                        </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant="fullWidth" />
                    <Stack spacing="24px" direction="row" marginTop="16px">
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    SIMPLI Earned
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                <ClaimB />
                            </Stack>
                        </Box>
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    LP Staked
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                {ButtonEx('Withdraw')}
                                {ButtonEx('Deposit')}
                            </Stack>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === 'panel5'}
                onChange={handleChange_Accordion('panel5')}
                style={{ borderRadius: 16 }}
                sx={{
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    border: '1px solid rgba(145, 158, 171, 0.24)',
                    marginTop: '10px',
                    '&:before': {
                        display: 'none'
                    }
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor="#6CFFD3" />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" marginRight="80px">
                            <img
                                src={ethbtc}
                                style={{
                                    height: '24px',
                                    width: '32px',
                                    marginRight: '4px'
                                }}
                                alt="ethbtc"
                            />
                            <Typography fontSize="13px" fontWeight="normal" fontStyle="normal">
                                ETH-BTCB Pancake
                            </Typography>
                        </Stack>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="80px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            10950.13825867
                        </Typography>
                        <Typography marginRight="110px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            $684.727
                        </Typography>
                        <Typography marginRight="103px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            43.87%
                        </Typography>
                        <Typography marginLeft="30px" fontSize="13px" fontWeight="normal" fontStyle="normal">
                            117.41%
                        </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant="fullWidth" />
                    <Stack spacing="24px" direction="row" marginTop="16px">
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    SIMPLI Earned
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                <ClaimB />
                            </Stack>
                        </Box>
                        <Box width="415px" height="58px" border="1px solid rgba(145, 158, 171, 0.24)" borderColor="rgba(145, 158, 171, 0.16)" borderRadius="8px">
                            <Stack direction="row" justifyContent="space-between" paddingX="16px" paddingY="12px">
                                <Typography fontSize="12px" fontStyle="normal" fontWeight="normal">
                                    LP Staked
                                    <div>
                                        <Typography fontSize="16px" fontStyle="normal" fontWeight={500}>
                                            1.180084
                                        </Typography>
                                    </div>
                                </Typography>
                                {ButtonEx('Withdraw')}
                                {ButtonEx('Deposit')}
                            </Stack>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
};
const YourPosition: React.FunctionComponent<PositionPageProps> = props => {
    let price: number = 1.03;
    let price2: number = 2.0;


    return (
        <Box width="100%">
            <Typography
                fontSize="32px"
                fontWeight={700}
                fontStyle="normal">Your Positon
            </Typography>
            <Stack marginTop="24px" height="182px" direction="row" spacing="40px">
                <Stack
                    className="backgroundTVL"
                    style={{
                        width: '435px',
                        height: '182px',
                        borderRadius: 16
                    }}
                    justifyContent="center"
                >
                    <Stack direction="row">
                        <img src={detaillogo} style={{ height: '182px', width: '168px', borderRadius: 16 }} alt="detaillogo" />
                        <Stack textAlign="center" className="inner_position_2" alignItems="flex-start" spacing="17px">
                            <Stack alignItems="flex-start">
                                <div
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        fontStyle: 'normal',
                                        color: '#F9FAFB'
                                    }}
                                >
                                    Total Value Locked
                                </div>
                                <NumberFormat
                                    value={6006930.31}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    style={{ fontSize: '24px', fontStyle: 'normal', fontWeight: 700, textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', color: '#F9FAFB' }}
                                />
                            </Stack>
                            <Stack alignItems="flex-start">
                                <div
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        fontStyle: 'normal',
                                        color: '#F9FAFB'
                                    }}
                                >
                                    Total Investment Value
                                </div>
                                <NumberFormat
                                    value={500}
                                    displayType="text"
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    style={{ fontSize: '24px', fontStyle: 'normal', fontWeight: 700, textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', color: '#F9FAFB' }}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack style={{ width: '158px', height: '182px', borderRadius: 16 }} className="blockWallet" padding="15px" spacing="15px">
                    <Box width="133px" height="44px">
                        <div style={{ fontSize: '14px', fontWeight: 500, fontStyle: 'normal' }}>Your SIMPLI Wallet Balance</div>
                    </Box>
                    <Box width="100%" height="37px">
                        <div style={{ fontSize: '16px', fontWeight: 500, fontStyle: 'normal', color: '#6CFFD3' }}>
                            <NumberFormat value={1.01} displayType={'text'} thousandSeparator={true} />
                        </div>
                        <div style={{ fontSize: '10px', fontWeight: 'normal', fontStyle: 'normal', color: '#F9FAFB' }}>$ 0.0</div>
                    </Box>
                    <Stack width="100%" height="32px">
                        <div style={{ fontSize: '12px', fontWeight: 'normal', fontStyle: 'normal', color: '#F9FAFB' }}>SIMPLI Tokens</div>
                        <Stack direction="row" justifyContent="space-between">
                            <img src={fileicon} style={{ height: '25px', width: '15px' }} alt="fileicon" />
                            <img src={metamask} style={{ height: '25px', width: '25px' }} alt="metamask" />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack style={{ width: '158px', height: '182px', borderRadius: 16 }} className="blockWallet" spacing="20px" padding="15px">
                    <Box width="133px" height="44px">
                        <div style={{ fontSize: '14px', fontWeight: 500, fontStyle: 'normal' }}>SIMPLI Token</div>
                        <Stack direction="row">
                            <img src={iconsimpli} style={{ width: '15px', height: '15px' }} alt="iconsimpli" />
                            <div style={{ fontSize: '12px', fontWeight: 400, fontStyle: 'normal' }}>$SIMPLI / UST</div>
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
                                <div style={{ fontSize: '16px', fontWeight: 500, fontStyle: 'normal', color: '#F9FAFB' }}>{price} UST</div>
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
                                <div style={{ fontSize: '16px', fontWeight: 500, fontStyle: 'normal', color: '#F9FAFB' }}>{price} UST</div>
                            </Stack>
                        )}
                    </Box>
                </Stack>
                <Stack style={{ width: '158px', height: '182px', borderRadius: 16 }} className="blockWallet" padding="15px" spacing="16px">
                    <Box width="133px" height="44px">
                        <div style={{ fontSize: '14px', fontWeight: 500, fontStyle: 'normal' }}>SIMPLI earned: </div>
                    </Box>
                    <Box width="100%" height="37px">
                        <Stack style={{ fontSize: '16px', fontWeight: 500, fontStyle: 'normal', color: '#6CFFD3' }} direction="row" spacing={1}>
                            <NumberFormat value={1.01} displayType={'text'} thousandSeparator={true} />
                            <div>$SIMPLI</div>
                        </Stack>
                        <div style={{ fontSize: '10px', fontWeight: '400', fontStyle: 'normal', color: '#F9FAFB', marginBottom: '17px' }}>$ 0.0</div>
                        <ClaimButton />
                    </Box>
                </Stack>
            </Stack>
            <Stack width="100%" marginTop="41px" className="overview" padding="24px">
                <div style={{ fontSize: '20px', fontWeight: 'bold', fontStyle: 'normal', color: '#F9FAFB', alignItems: 'flex-start' }}>Overview</div>
                <Stack justifyContent="center" alignItems="center">
                    <Stack width="200px" height="200px" border={2} alignItems="center" justifyContent="center" borderRadius="100%">
                        Donut Chart
                    </Stack>
                </Stack>
                <Stack width="100%" marginTop="24px">
                    <div style={{ fontSize: '20px', fontWeight: 'bold', fontStyle: 'normal', color: '#F9FAFB', alignItems: 'flex-start' }}>Asset Allocation List</div>
                </Stack>
                <Stack marginTop="16px" width="100%">
                    <SelectionMenu />
                    <Stack marginTop="24px" overflow="hidden" className="scroll-bar">
                        <Stack direction="row" fontSize="10px" fontWeight="normal" fontStyle="normal" color="#919EAB" marginBottom="8px" paddingX="8px" spacing={10} justifyContent="space-between">
                            <Typography>Pool-Platform</Typography>
                            <Typography>Amount(%)</Typography>
                            <Typography>SIMPLI Earned</Typography>
                            <Typography>TVL</Typography>
                            <Typography>APR (FARM)</Typography>
                            <Typography>APR (SIMPLI)</Typography>
                        </Stack>
                        <Stack overflow="auto" zIndex={100} paddingX="1px" borderRadius="16px">
                            <AccordionEx />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Box height="300px" />
        </Box>
    );
};

export default YourPosition;
