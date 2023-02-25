import { takeLatest, call, put } from 'redux-saga/effects';
import {
    GET_USER_DATA_STARTED,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    SET_IS_REQUESTING_TRUE,
    SET_IS_REQUESTING_FALSE
} from '../types';

const fetchUser = (id) => fetch(`http://localhost:3000/user/${id}`);
const fetchUserActivity = (id) => fetch(`http://localhost:3000/user/${id}/activity`);
const fetchUserAverageSessions = (id) => fetch(`http://localhost:3000/user/${id}/average-sessions`);
const fetchUserPerformance = (id) => fetch(`http://localhost:3000/user/${id}/performance`);

function* getUserData(action){

    const id = action.payload;

    yield put({type: SET_IS_REQUESTING_TRUE});

    try {
        const userDataRes = yield call(fetchUser, id);
        const userData = yield (userDataRes.json());

        const userActivityRes = yield call(fetchUserActivity, id);
        const userActivity = yield (userActivityRes.json());

        const userAverageSessionsRes = yield call(fetchUserAverageSessions, id);
        const userAverageSessions = yield (userAverageSessionsRes.json());

        const userPerfomanceRes = yield call(fetchUserPerformance, id);
        const userPerformance = yield (userPerfomanceRes.json());

        yield put({
            type: GET_USER_DATA_SUCCESS,
            payload: {
                userData,
                userActivity,
                userAverageSessions,
                userPerformance
            }
        });

        yield put({
            type: SET_IS_REQUESTING_FALSE
        });
    }
    catch(error) {
        yield put({ 
            type: GET_USER_DATA_FAILURE, payload: error 
        });

        yield put({
            type: SET_IS_REQUESTING_FALSE
        });
        console.log(error)
    }
}

export default function* userSaga(){
    yield takeLatest(GET_USER_DATA_STARTED, getUserData)
}