import {
    GET_USER_DATA_FAILURE,
    GET_USER_DATA_SUCCESS
} from '../types';

const initialState = {
    userData: null,
    userActivity: null,
    userAverageSessions: null,
    userPerformance: null
}

function user(state = initialState, action){
    switch (action.type){

        case GET_USER_DATA_SUCCESS :
            return {
                ...state,
                userData: action.payload.userData,
                userActivity: action.payload.userActivity,
                userAverageSessions: action.payload.userAverageSessions,
                userPerformance: action.payload.userPerformance
            }

        case GET_USER_DATA_FAILURE : 
            return {
                ...state,
                userData: action.payload.mockedUserData,
                userActivity: action.payload.mockedUserActivity,
                userAverageSessions: action.payload.mockedUserAverageSessions,
                userPerformance: action.payload.mockedUserPerformance
            }

        default :
            return state
    }
}

export default user;