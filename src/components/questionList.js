import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './question'

class QuestionList extends Component {
  render() {
    return (
      <div>
        <ul className='dashboard-list'>
          {this.props.questionIds && this.props.questionIds.map((id) => (
            <div className="usercard" key={id}>
             <Question id={id} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions,users ,autherdUser },{type}) {
  if(type=='A'){
  return { 
    questionIds: autherdUser&&users[autherdUser] ? Object.keys(users[autherdUser].answers).sort((a,b,) => questions[b].timestamp - questions[a].timestamp):null
    //questionIds:Object.keys(questions)
  }
  }else{
    return{
    questionIds:questions&&users[autherdUser]? Object.keys(questions).filter((key)=>( !Object.keys(users[autherdUser].answers).includes(key) )).sort((a,b,) => questions[b].timestamp - questions[a].timestamp)  :null
    }
  }
}

export default connect(mapStateToProps)(QuestionList)