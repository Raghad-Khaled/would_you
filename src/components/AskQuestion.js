import { Button, Card, Image } from 'semantic-ui-react'
import { Form, Radio } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handelanserquestion } from '../actions/question'

class AskQuestion extends Component {
    state = {
        value:'',
    }
    handleChange = (e, { value }) => this.setState({ value })
    handleSubmit = (e) => {
        e.preventDefault()
    
        const { value } = this.state
        const { dispatch,id} = this.props
    
        dispatch(handelanserquestion(id, value))
    
        this.setState(() => ({
          value: '',
        }))
      }
  render() {
      const {name,   
        img,
        A,
        B}=this.props
    return (
        <Card className="centered">
        <Card.Content>
          <Image
            floated='right'
            
            src={img}
          />
          <Card.Header>{name} asked would you rather</Card.Header>
          <Card.Description>
          <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Radio
            label={A}
            name='radioGroup'
            value='optionOne'
            checked={this.state.value === 'optionOne'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={B}
            name='radioGroup'
            value='optionTwo'
            checked={this.state.value === 'optionTwo'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type='submit' disabled={this.state.value === ''}  color='green' className="btn">
              Submit Answer
        </Button>
      </Form>

          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps ({questions,users}, { id }) {
    const name=questions[id]? users[questions[id].author].name :null
    const img=questions[id]? users[questions[id].author].avatarURL:null
    const A=questions[id]? questions[id].optionOne.text:null
    const B=questions[id]? questions[id].optionTwo.text :null
  
    return {
     name,   
     img,
     A,
     B
    };
}

export default connect(mapStateToProps)(AskQuestion)