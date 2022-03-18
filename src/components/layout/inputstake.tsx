import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  TextField
} from '@mui/material';
import * as React from 'react';
// import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';

// const StyledInputElement = styled('input')(
//   ({ theme }) => `
//                width: 2ch;
//                color: #919EAB;
//                font-size: 16px;
//                font-weight: 400;
//                line-height: 1.5;
//                background: none;
//                border: 1px solid;
//                padding: 16px 16px;
//                outline: none;
//                &:focus {
//                outline: none;
//                caret-color: white;
//                }
//              `
// );

// const CustomInput = React.forwardRef(function CustomInput(
//   props: InputUnstyledProps,
//   ref: React.ForwardedRef<HTMLDivElement>
// ) {
//   return (
//     <InputUnstyled
//       components={{ Input: StyledInputElement }}
//       {...props}
//       ref={ref}
//     />
//   );
// });
interface State {
  amount: string;
}

export default function InputStake() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [values, setValues] = React.useState<State>({
    amount: ''
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <TextField
      type="text"
      maxRows={25}
      id="outlined-basic"
      variant="standard"
      value={values.amount}
      ref={inputRef}
      onChange={handleChange('amount')}
      InputProps={{
        disableUnderline: true,
        placeholder: '0',
        style: {
          textAlign: 'right',
          width: values.amount.length ? `${values.amount.length}ch` : '2ch'
        }
      }}
    />
  );
}

//                color: #919EAB;
//                font-size: 16px;
//                font-weight: 400;
//                line-height: 1.5;
//                background: none;
//                border: 1px solid;
//                padding: 16px 16px;
//                outline: none;
//                &:focus {
//                outline: none;
//                caret-color: white;
