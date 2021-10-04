import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component,autherdUser,exact, path}) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    
   // <Route {...rest} render={props => (props.autherdUser!==null ? <Component {...props} /> :  
   // <Redirect to="/signin" />)} />  
         
   <Route  exact={exact} path={path} render={props =>{
       if(autherdUser!==null) 
       {   //console.log(autherdUser)
           return <Component {...props} />}
        else{
        //console.log(props)    
        return <Redirect to="/signin" /> 
        }    }}   />              
)





function mapStateToProps ({autherdUser}) {
  
    return {
     autherdUser:autherdUser
    };
}


export default connect(mapStateToProps)(ProtectedRoute);