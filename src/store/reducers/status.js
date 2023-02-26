import {
    SET_IS_REQUESTING_TRUE,
    SET_IS_REQUESTING_FALSE,
    SET_SHOW_NOTIFICATION_TRUE,
    SET_SHOW_NOTIFICATION_FALSE
} from '../types';

const initialState = {
    isRequesting: false,
    showNotification: false
};

function status(state = initialState, action){
    switch(action.type){

        case SET_IS_REQUESTING_TRUE : 
            return {
                ...state,
                isRequesting: true
            }
        case SET_IS_REQUESTING_FALSE : 
            return {
                ...state,
                isRequesting: false
            }

        case SET_SHOW_NOTIFICATION_TRUE :
            return {
                ...state,
                showNotification: true
            }
        
        case SET_SHOW_NOTIFICATION_FALSE :
            return {
                ...state,
                showNotification: false
            }

        default :
            return state;
    }
}

export default status;