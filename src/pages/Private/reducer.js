import { handleActions } from 'redux-actions';
import { key, privateFetchFulfilled } from './actions';

export const selectors = {
    selectPrivateData: state => state[key].privateData,
};

const initialState = {
    privateData: '',
};

export default handleActions(
    {
        [privateFetchFulfilled]: (state, action) => ({
            ...state,
            privateData: action.payload.privateData,
        }),
    },
    initialState,
);
