import {
    mockedUserData,
    mockedUserActivity,
    mockedUserAverageSessions,
    mockedUserPerformance
} from '../../assets/mockedDatas/mockedUser';

import { takeLatest, call, put } from 'redux-saga/effects';
import {
    GET_USER_DATA_STARTED,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    SET_IS_REQUESTING_TRUE,
    SET_IS_REQUESTING_FALSE,
    SET_SHOW_NOTIFICATION_TRUE,
    SET_SHOW_NOTIFICATION_FALSE
} from '../types';

import { formatPerformances, formatDays, getDaysIndex } from '../../utils/utils';

/**
 * @category HTTP Request function
 * @function
 * @param {number} id User id
 * @description Request to get user infos - Endpoint : /user/:id
 */
const fetchUser = (id) => fetch(`http://localhost:3000/user/${id}`);
/**
 * @category HTTP Request function
 * @function
 * @param {number} id User id
 * @description Request to get user activity - Endpoint : /user/:id/activity
 */
const fetchUserActivity = (id) => fetch(`http://localhost:3000/user/${id}/activity`);
/**
 * @category HTTP Request function
 * @function
 * @param {number} id User id
 * @description Request to get user average sessions - Endpoint : /user/:id/average-sessions
 */
const fetchUserAverageSessions = (id) => fetch(`http://localhost:3000/user/${id}/average-sessions`);
/**
 * @category HTTP Request function
 * @function
 * @param {number} id User id
 * @description Request to get user performance - Endpoint : /user/:id/performance
 */
const fetchUserPerformance = (id) => fetch(`http://localhost:3000/user/${id}/performance`);

/**
 * @category Saga
 * @function
 * @param {{payload: Any, type: String}} action Action object including payload and dispatch string
 * @description Saga to make all HTTP requests and send formated data to Reducer
 */
function* getUserData(action){

    const id = action.payload;

    yield put({type: SET_IS_REQUESTING_TRUE});

    try {
        const userDataRes = yield call(fetchUser, id);
        const userData = yield (userDataRes.json());

        const userActivityRes = yield call(fetchUserActivity, id);
        const rawUserActivity = yield (userActivityRes.json());

        const userActivity = getDaysIndex(rawUserActivity.data.sessions);
        const userAverageSessionsRes = yield call(fetchUserAverageSessions, id);
        const rawUserAverageSessions = yield (userAverageSessionsRes.json());
        const userAverageSessions = formatDays(rawUserAverageSessions.data.sessions);

        const userPerfomanceRes = yield call(fetchUserPerformance, id);
        const rawPerformance = yield (userPerfomanceRes.json());
        const userPerformance = formatPerformances(rawPerformance.data);

        yield put({
            type: GET_USER_DATA_SUCCESS,
            payload: {
                userData: userData.data,
                userActivity : userActivity,
                userAverageSessions: userAverageSessions,
                userPerformance
            }
        });

        yield put({
            type: SET_SHOW_NOTIFICATION_FALSE
        })

        yield put({
            type: SET_IS_REQUESTING_FALSE
        });
    }
    catch(error) {
        yield put({ 
            type: GET_USER_DATA_FAILURE, 
            payload: {
                mockedUserData,
                mockedUserActivity,
                mockedUserAverageSessions,
                mockedUserPerformance
            }
        });

        yield put({
            type: SET_SHOW_NOTIFICATION_TRUE
        })

        yield put({
            type: SET_IS_REQUESTING_FALSE
        });
    }
}

export default function* userSaga(){
    yield takeLatest(GET_USER_DATA_STARTED, getUserData)
}