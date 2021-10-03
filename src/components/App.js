import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {  Route,Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import {handelInitailData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { createBrowserHistory } from "history";
import AddQuestion from './addquestion'
import Dashboard from './board'
import ShowQuestion from './ShowQuestion'
import Navbar from './Navbar'
import Home from './Home'
import SignIn from './SignIn'
import Pages from './Pages'
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handelInitailData())
  }
 // {createBrowserHistory().location.pathname !== '/signin' &&  <Navbar/>}
/*  state = {
    history: createBrowserHistory(),
  };*/
  render() {
    return (
      <div>
      <LoadingBar/>
      {this.props.loading === true
        ? <div>loading</div>
        :<div>
        <Route path='/' exact  render={() => (<Navbar type='home' />)} />
        <Route path='/add'  exact render={() => (<Navbar type='New Question' />)} />
        <ProtectedRoute path='/leaderboard'  exact  exact render={() => (<Navbar type='Score Board' />)} />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/question/:id'  exact component={ShowQuestion} />
        <Route path='/add'  exact component={AddQuestion} />
        <Route path='/leaderboard'  exact component={Dashboard} />
        <Route path='/signin'  exact component={SignIn} />
        <Route component={NoMatchPage} />
        </Switch>
        </div> }
      </div>
    )
  }
}


const NoMatchPage = () => {
  return (
    <React.Fragment>
    <h1>404 - Not found</h1>
    </React.Fragment>
  );
};

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)