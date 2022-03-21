import styled from "styled-components";
import { flexCol , breakPoints} from "@/styles/snippets";
import { colors } from "@/styles/ci";

export const Container = styled.div`
  ${flexCol}
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  .wait-title { 
    margin-top: 3rem !important;
  }
  .donot-close-title {
    margin-top: 1rem !important;
  }
  .load-title {
    font-size: 16px !important;
  }

  .detail {
    font-size: 16px !important;
  } 

  .swap-con {
    ${flexCol}
    justify-content: center;
    align-items: center;
    padding: 23px 94px;
    margin-top: 40px;
    margin-left: 23px;
    margin-right: 23px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);

    @media (max-width: ${breakPoints.md}px) {
      padding: 34px 28px
    }
  } 

  .accent {
    color: ${colors.ACCENT} !important;
    white-space: nowrap;
  }

  span {
    font-size: 16px !important;
  }
`;