import { createAction } from 'redux-actions';

export const key = 'services/snackbar';

export const openErrorSnackbar = createAction(`${key}/OPEN_ERROR_SNACKBAR`);

export default {
    openErrorSnackbar,
};
