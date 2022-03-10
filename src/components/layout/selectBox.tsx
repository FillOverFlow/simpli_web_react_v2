import { Box, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses
} from '@mui/base/SelectUnstyled';
import { OptionUnstyled, optionUnstyledClasses } from '@mui/base';
import { PopperUnstyled } from '@mui/base';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75'
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027'
};

const StyledButton = styled('button')(
  ({ theme }) => `
               font-size: 16px;
               box-sizing: border-box;
               width: 233px;
               height: 48px;
               background: #919EAB3D;
               border: 1px solid ${
                 theme.palette.mode === 'dark' ? '#919EAB3D' : grey[300]
               };
               border-radius: 0.75em;
               padding: 10px;
               text-align: left;
               line-height: 1.5;
               color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
             
               &:hover {
                 background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
                 border-color: ${
                   theme.palette.mode === 'dark' ? 'grey[700]' : grey[400]
                 };
               }
             
               &.${selectUnstyledClasses.focusVisible} {
                 outline: 3px solid ${
                   theme.palette.mode === 'dark' ? blue[600] : blue[100]
                 };
               }
             
               &.${selectUnstyledClasses.expanded} {        
                 &::after {
                   content: '▴';
                 }
               }
             
               &::after {
                 content: '▾';
                 float: right;
               }
               `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
               font-size: 16px;
               box-sizing: border-box;
               padding: 5px;
               margin: 10px 0;
               min-width: 233px;
               background: ${
                 theme.palette.mode === 'dark' ? grey[600] : grey[600]
               };
               border: 1px solid ${
                 theme.palette.mode === 'dark' ? '#919EAB3D' : grey[300]
               };
               border-radius: 8px;
               outline: 0px;
               `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
               list-style: none;
               padding: 8px;
               border-radius: 5px;
               cursor: default;
             
               &:last-of-type {
                 border-bottom: none;
               }
             
               &.${optionUnstyledClasses.selected} {
                 background-color: ${
                   theme.palette.mode === 'dark' ? grey[600] : grey[600]
                 };
               }
             
              
             
               &.${optionUnstyledClasses.highlighted}.${
    optionUnstyledClasses.selected
  } {
                 background-color: ${
                   theme.palette.mode === 'dark' ? blue[900] : blue[100]
                 };
                 color: ${
                   theme.palette.mode === 'dark' ? blue[100] : blue[900]
                 };
               }
             
               &.${optionUnstyledClasses.disabled} {
                 color: ${
                   theme.palette.mode === 'dark' ? grey[700] : grey[400]
                 };
               }
             
               &:hover:not(.${optionUnstyledClasses.disabled}) {
                 background-color: ${
                   theme.palette.mode === 'dark' ? grey[800] : grey[100]
                 };
                 color: ${
                   theme.palette.mode === 'dark' ? grey[300] : grey[900]
                 };
               }
               `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const components: SelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>
) => JSX.Element;

export default function UnstyledSelectSimple() {
  return (
    <CustomSelect defaultValue='all'>
      <StyledOption value='all'>All Platform</StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>
  );
}
