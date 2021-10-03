import { showLoading, hideLoading } from 'react-redux-loading'
import {getInitialData } from "../api"
import { recivequestions } from './question';
import { reciveUsers } from './user';
import { setAuther } from './autherUser';

//const auther="johndoe";
export function handelInitailData(){
    
    return (dispatch)=>{
       dispatch(showLoading())
       return getInitialData()
       .then(({users,questions})=>{
           dispatch(reciveUsers(users))
           dispatch(recivequestions(questions))
           dispatch(setAuther(null))
           dispatch(hideLoading())
       })

    }

}