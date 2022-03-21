import { css } from 'styled-components';
import { colors as c } from '@/styles/ci';
import { breakPoints } from './snippets';

const colors = {
  ...c,
  dialogAccent: 'rgb(234, 7, 42)',
  dialogAccentShadow: 'rgb(234 7 42 / 50%)',
}

export default css`
  .swal-loader {
    position: absolute;
    top: 60px;
    width: 53.33px !important;
    height: 53.33px !important;
    border-width: 3px !important;
    border-color: ${colors.ACCENT} ${colors.ACCENT} ${colors.ACCENT} transparent !important;
  }

  .swal2-popup {
    width: unset !important;
    /* max-width: 400px !important;
    max-height: 400px !important; */
    /* padding: 60px 120px !important; */
    background-color: ${colors.MODAL_COLOR} !important;
    color: ${colors.WHITE} !important;
    border-radius: 20px !important;

    * {
      color: ${colors.WHITE} !important;
    }

    @media (max-width: ${768}px) {
      padding: 78px 38px !important;
    }

    .swal2-html-container {
      margin: 0 !important;
    }
  }

  .swal-loading-confirm-popup {

  }

  .swal-confirm {
    background-color: ${colors.dialogAccent} !important;

    &:focus {
      box-shadow: 0 0 0 3px ${colors.dialogAccentShadow} !important;
    }
  }

  .swal-close-button {
    font-size: 2em !important;
    color: ${colors.ACCENT} !important;
    margin-right: 7px;
  }

  //? Wallet connect popup
  .swal-wallet-title {
    text-align: unset !important;
    padding: 0.8em 1em !important;
    border-bottom: 1px solid ${colors.GREY};
  }

  //? Wallet disconnect popup
  .swal-title-logout {
    font-size: 1.5em !important;
    padding: 1em 1em 0 !important;
  }

  //? Approve Confirm popup
  .swal-approve-modal-title {
    text-align: center !important;
    font-size: 28px;

    @media (max-width: ${768}px) {
      padding: 0 !important;
    }
  }

  .swal-approve-modal-container {
    text-align: unset !important;
    padding: 40px !important;
  }

  .swal-approve-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #FFFFFF99 !important;
    margin-right: 5px !important;
  }

  .swal-approve-confirm-btn {
    margin-top: 1.5rem !important;
    color: ${colors.ACCENT} !important;
    border: 1px solid ${colors.ACCENT} !important;
    background-color: rgb(108 255 211 / 10%) !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    max-width: 100% !important;
    padding: .5rem 3rem !important;
    border-radius: .25rem !important;
    font-size: 1rem !important;
    vertical-align: middle !important;
    text-align: center !important;
    text-decoration: none !important;
    user-select: none !important;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !important;

    &:hover {
      background-color: rgb(108 255 211 / 20%) !important;
    }

    &:disabled {
      cursor: default !important;
      color: ${colors.GREY} !important;
      border-color: ${colors.GREY} !important;
      background-color: rgb(108 255 211 / 10%) !important;
    }
  }

  .swal-approve-actions {
    width: 70% !important;
  }

  .swal-stake-popup {
    /* padding: 60px 120px !important; */
    background-color: ${colors.MODAL_COLOR} !important;
    color: ${colors.WHITE} !important;
    border-radius: 20px !important;

    * {
      color: ${colors.WHITE} !important;
    }

    @media (max-width: ${768}px) {
      padding: 78px 38px !important;
    }
  }

  .swal-stake-title {
    padding-top: 5rem !important;

    @media (max-width: ${breakPoints.md}px) {
      padding-top: 6rem !important;
    }
  }
`;