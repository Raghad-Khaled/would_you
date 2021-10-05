import React, { Component} from 'react'
import { connect } from 'react-redux'
import {  Route,Switch } from 'react-router-dom'
import {handelInitailData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './addquestion'
import Dashboard from './board'
import ShowQuestion from './ShowQuestion'
import Navbar from './Navbar'
import Home from './Home'
import SignIn from './SignIn'
import { withRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handelInitailData())
    //this.props.history.push('/signin')
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
        <Route path='/leaderboard' exact render={() => (<Navbar type='Score Board'/>)} />
        <Switch>
        <ProtectedRoute path='/' exact component={Home} />
        <ProtectedRoute path='/questions/:id'  exact component={ShowQuestion} />
        <ProtectedRoute path='/add'  exact component={AddQuestion} />
        <ProtectedRoute path='/leaderboard'  exact component={Dashboard} />
        <Route path='/signin' exact component={SignIn} />
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
    <Navbar/>
    <h1>404 - Not found</h1>
    </React.Fragment>
  );
};

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default withRouter(connect(mapStateToProps)(App))