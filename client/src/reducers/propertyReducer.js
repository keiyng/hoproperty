import {FETCH_PROPERTIES, FETCH_AVAILABLE_DETAILS} from '../actions/types';

export default function(state = [], action) {
   switch(action.type) {
       case FETCH_PROPERTIES:
            return action.payload;
        case FETCH_AVAILABLE_DETAILS:
            return action.payload;
        default: 
            return state || '';
   }
}