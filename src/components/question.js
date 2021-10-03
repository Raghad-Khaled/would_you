import { Button, Card, Image } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render() {
      const {name,   
        img,
        A,
        B, id}=this.props
    return (
        <Card className="centered">
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={img}
          />
          <Card.Header>{name} asked would you rather</Card.Header>
          <Card.Description>
            {A} <br/> <strong>OR</strong> <br/> {B}
          </Card.Description>
        </Card.Content>
        <Card.Content >
          
         <Link to={`/question/${id}`}>
            <Button basic color='green' className="btn">
              View Question
            </Button>
         </Link>   

        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps ({questions,users}, { id }) {
    const name=questions[id]? users[questions[id].author].name:null
    const img=questions[id]? users[questions[id].author].avatarURL:null
    const A=questions[id]? questions[id].optionOne.text:null
    const B=questions[id]? questions[id].optionTwo.text:null
  
    return {
     name,   
     img,
     A,
     B,
     id
    };
}

export default  withRouter(connect(mapStateToProps)(Question))