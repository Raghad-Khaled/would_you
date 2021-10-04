import {  Card, Image } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
  render() {
      const {name,   
        img,
        questionsC,
        questionsA}=this.props
    return (
        <Card className="centered">
        <Card.Content>
          <Image
            floated='right'
       
            src={img}
          />
          <Card.Header>{name}</Card.Header>
          <Card.Description className="red">
          score <strong> {questionsA+questionsC } </strong>
          </Card.Description>
        </Card.Content>
        <Card.Content >
          <div className=''>
            <h3  color='green'>
              Questions answered  {questionsA}
            </h3>
            <h3 color='red'>
              Question Created {questionsC}
            </h3>
          </div>
        </Card.Content>
      </Card>

    )
  }
}

function mapStateToProps ({users}, { id }) {
    const name=users[id].name
    const img=users[id].avatarURL
    const questionsC=users[id].questions.length
    const questionsA=Object.keys(users[id].answers).length
  
    return {
     name,   
     img,
     questionsC,
     questionsA
    };
}

export default connect(mapStateToProps)(UserCard)