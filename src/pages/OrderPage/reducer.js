import { handleActions } from 'redux-actions';
import { key, orderSubmitResult, orderSubmit } from './actions';

export const selectors = {
    selectIsSubmitted: state => state[key].isSubmitted,
    selectIsSubmitting: state => state[key].isSubmitting,
};

const initialState = {
    isSubmitted: false,
    isSubmitting: false,
};

export default handleActions(
    {
        [orderSubmit]: state => ({
            ...state,
            isSubmitting: true,
        }),
        [orderSubmitResult]: (state, action) => ({
            ...state,
            isSubmitted: !action.error,
            isSubmitting: false,
        }),
    },
    initialState,
);
