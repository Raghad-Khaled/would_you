import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    
    <Route {...rest} render={props => (props.autherdUser!==null ? <Component {...props} /> :  
    <Redirect to="/signin" />)} />                         
)




function mapStateToProps ({autherdUser}) {
  
    return {
     autherdUser:autherdUser
    };
}


export default connect(mapStateToProps)(ProtectedRoute);