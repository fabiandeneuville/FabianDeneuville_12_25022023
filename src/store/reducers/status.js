import {
    SET_IS_REQUESTING_TRUE,
    SET_IS_REQUESTING_FALSE
} from '../types';

const initialState = {
    isRequesting: false
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
        default :
            return state;
    }
}

export default status;