import styled, { css } from 'styled-components';
import { colors } from "./ci";

export const flex = css`
display: flex;
`;

export const flexCol = css`
${flex}
flex-direction: column;
`;

export const flexCenter = css`
${flex}
justify-content: center;
align-items: center;
`;

export const card = css`
${flexCol}
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: 1px solid rgba(0, 0, 0, 0.125);
border-radius: 0.25rem;
`;

export const VolatilityColorSpan = styled.span<{ color: string; size?: number; }>`
width: ${({ size }) => size || 15}px;
height: ${({ size }) => size || 15}px;
border-radius: 5px;
box-shadow: 0px 0px ${({ size }) => (size || 15) * .7}px 0px ${({ color }) => color};
background-color: ${({ color }) => color};
`;

export const modalBackdrop = css`
  ${flexCenter}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colors.BACKDROP};
  margin: 0;
`;

export const breakPoints = {
  ssm: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

