import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Route } from 'react-router-dom'
import {handelInitailData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './addquestion'
import Dashboard from './board'
import ShowQuestion from './ShowQuestion'
import Navbar from './Navbar'
import Home from './Home'

class Pages extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      {this.props.loading === true
        ? <div>loading</div>
        :<div> <Route path='/' exact component={Home} />
        <Route path='/question/:id' component={ShowQuestion} />
        <Route path='/add' component={AddQuestion} />
        <Route path='/leaderboard' component={Dashboard} />
        </div> }
      </React.Fragment>
    )
  }
}



export default connect()(Pages)