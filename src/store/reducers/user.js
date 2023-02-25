import {
    GET_USER_DATA_SUCCESS
} from '../types';

const initialState = {
    userData: {},
    userActivity: {},
    userAverageSessions: {},
    userPerformance: {}
}

function user(state = initialState, action){
    switch (action.type){

        case GET_USER_DATA_SUCCESS :
            return {
                ...state,
                userData: action.payload.userData.data,
                userActivity: action.payload.userActivity.data,
                userAverageSessions: action.payload.userAverageSessions.data,
                userPerformance: action.payload.userPerformance.data
            }

        default :
            return state
    }
}

export default user;