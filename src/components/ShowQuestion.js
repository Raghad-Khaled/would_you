import { Button, Card, Image,Progress } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'
import { handelanserquestion } from '../actions/question'
import Navbar from './Navbar'


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
        A,B,choseA,
        voteA,
        voteB,
       ans }=this.props
    if(ans){  
      console.log(ans) 
    return (
      <React.Fragment>
      <Navbar type=''/>
      <Card className="centered">
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={img}
          />
          <Card.Header>{name} asked would you rather</Card.Header>
          <Card.Description>
            {A} 
            {choseA && <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/35/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>}
            <Progress color='green' value={voteA} total={voteA+voteB} progress='ratio' />
            <br/> <strong>OR</strong> <br/> {B}
            {!choseA && <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/35/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>}
            <Progress color='green' value={voteB} total={voteA+voteB} progress='ratio' />
          </Card.Description>
        </Card.Content>
        <Card.Content >
          
        </Card.Content>
      </Card> 
      </React.Fragment>
    )}
    else if(ans!==null){
      return(
        <React.Fragment>
        <Navbar type=''/>
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
      </React.Fragment>
      )
    }else{
      return(<h1>404 - Not found</h1>)
    }
  }
}

function mapStateToProps ({questions,users, autherdUser}, props) {
    const { id } = props.match.params
    const name=questions[id]? users[questions[id].author].name :null
    const img=questions[id]? users[questions[id].author].avatarURL:null
    const voteA=questions[id]? questions[id].optionOne.votes.length:null
    const voteB=questions[id]? questions[id].optionTwo.votes.length :null
    const choseA=questions[id]?  questions[id].optionOne.votes.includes(autherdUser):null
    const A=questions[id]? questions[id].optionOne.text:null
    const B=questions[id]? questions[id].optionTwo.text :null
    const ans=users[autherdUser]&& questions[id] ? Object.keys(users[autherdUser].answers).includes(questions[id].id) :null
    return {
     name,   
     img,
     A,
     B,
     voteA,
     voteB,
     choseA,
     ans,
     id
    };
}

export default connect(mapStateToProps)(AskQuestion)