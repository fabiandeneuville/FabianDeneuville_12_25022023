import {
    GET_USER_DATA_STARTED,
} from './types';

export const getUserData = (userId) => {
    return {
        type: GET_USER_DATA_STARTED,
        payload: userId
    }
};