import React, { Component } from 'react'
import { Button, Card,Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handeladdquestion } from '../actions/question'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
  state = {
    text1: '',
    text2:'',
    toHome:false,
  }
  handleChange1 = (e) => {
    const text1 = e.target.value

    this.setState(() => ({
      text1
    }))
  }

  handleChange2 = (e) => {
    const text2 = e.target.value

    this.setState(() => ({
      text2
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text1,text2 } = this.state
    const { dispatch} = this.props

    dispatch(handeladdquestion(text1, text2))

    this.setState(() => ({
      text1: '',
      text2:'',
      toHome: true,
    }))
  }
  render() {
    const { text1,text2, toHome } = this.state
    if(toHome){
      return <Redirect to='/' />
    }

    return (
        <div>
          <h3 className='center'>Creat new Question</h3>
          <form  onSubmit={this.handleSubmit}>
          <Card className="centered">
          <Card.Content>
            <Card.Header>asked would you rather</Card.Header>
            <Card.Description>
            <Input
            placeholder="Option One"
            value={text1}
            onChange={this.handleChange1}
            type="text"
          />
           <br/> <strong><img src="https://img.icons8.com/emoji/50/000000/vs-button-emoji.png"/></strong> <br/> 
          <Input
          placeholder="Option Two"
          value={text2}
          onChange={this.handleChange2}
          type="text"
          />
            </Card.Description>
          </Card.Content>
          <Card.Content >
            
              <Button
              className='btn'
              type='submit'
              disabled={text1 === '' ||text2===''}
              basic color='green' className="btn">
              Add Question
              </Button> 
  
          </Card.Content>
        </Card>
        </form>
        </div>
      )
    }
  }
  
  export default connect()(AddQuestion)