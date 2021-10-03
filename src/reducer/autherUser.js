import {SETUSER_AUTHER} from '../actions/autherUser'

export default function autherdUser(state=null,action){
    switch (action.type){
        case SETUSER_AUTHER:
            return action.id;
        default:
         return state    
    }
}