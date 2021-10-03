import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './Card.js'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className='center'>Score Board</h1>
        <ul className='dashboard-list'>
          {this.props.userIds.map((id) => (
            <div className="usercard" key={id}>
             <UserCard id={id} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length )- (Object.keys(users[a].answers).length + users[a].questions.length ))
  }
}

export default connect(mapStateToProps)(Dashboard)