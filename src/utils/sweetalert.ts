import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

export const defaultOptions: SweetAlertOptions = {
  customClass: {
    loader: 'swal-loader',
    popup: 'swal-popup',
    confirmButton: 'swal-confirm',
    closeButton: 'swal-close-button',
  },
}

export const SwalPopup = (option?: SweetAlertOptions) => {
  return (
    Swal.fire({
      ...defaultOptions,
      ...option,
    })
  );
}

/**
 *  Swal config.
 *
 * @export
 * @param {SweetAlertOptions} [option]
 * @returns
 */

export const SwalMixin = (option?: SweetAlertOptions) => (
  Swal.mixin({
    ...defaultOptions,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    ...option
  })
)

export const isSwalLoading = () => (
  Swal.isLoading()
);

export const SwalLoading = async (option?: SweetAlertOptions): Promise<SweetAlertResult> => (
  Swal.fire({
    ...defaultOptions,
    titleText: "Loading",
    html: "please wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    ...option,
  })
);

export const SwalClose = () => (
  Swal.close()
)

export const SwalConfirm = (option?: SweetAlertOptions) => {
  return Swal.fire({
    ...defaultOptions,
    customClass: {
      ...defaultOptions.customClass,
      ...(option?.customClass || {}),
    },
    titleText: 'Are you sure?',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    ...option,
  });
}

/**
 * For swal error.
 * Example
 * SwalError({message:''})
 * @export
 * @param {SweetAlertOptions} [option]
 * @returns {Promise<SweetAlertResult>}
 */
export const SwalError = async (option?: SweetAlertOptions): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...defaultOptions,
    titleText: `Error`,
    allowOutsideClick: false,
    text: 'Please try again',
    confirmButtonText: 'Close',
    ...option,
  });
}



