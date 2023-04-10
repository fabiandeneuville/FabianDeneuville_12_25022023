import {
    GET_USER_DATA_STARTED,
} from './types';

/**
 * @category Redux Action
 * @function
 * @param {number} userId user Id
 * @return {{string, number}} Redux action and user id
 */
export const getUserDataAction = (userId) => {
    return {
        type: GET_USER_DATA_STARTED,
        payload: userId
    }
};