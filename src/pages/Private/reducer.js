import { handleActions } from 'redux-actions';
import { key, privateFetchResult } from './actions';

export const selectors = {
    selectPrivateData: state => state[key].privateData,
};

const initialState = {
    privateData: '',
};

export default handleActions(
    {
        [privateFetchResult]: (state, action) => ({
            ...state,
            privateData: action.payload.privateData,
        }),
    },
    initialState,
);
