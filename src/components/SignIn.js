import { Button, Card, Image } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handelAuther } from '../actions/autherUser'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
    state={
        selectValue:'sarahedo',
        toHome:false,
    }
    handleChange=(e)=>{
        this.setState(() => ({
            selectValue:e.target.value
          }))
        }

    handleSubmit = (e) => {
        e.preventDefault()
        const { selectValue } = this.state
        const { dispatch} = this.props
        dispatch( handelAuther(selectValue))

        this.setState(() => ({
            toHome:true
          }))
        
    }    

  render() {
    const { usersId,users} =this.props
    const {toHome}=this.state
    if(toHome){
        return <Redirect to='/' />
    }
    return (
        <Card className="centered center"  style={{width:'400px', marginTop:'40px' }}>
        <Card.Content>
          
          <Card.Header> wellcome to Would you Rather App</Card.Header>
          <Card.Description>
          <Image 
          src="https://img.icons8.com/ultraviolet/90/000000/react--v2.gif"
          />
          <h1 className="center"> Sign In </h1>
         
          </Card.Description>
        </Card.Content>
      
        <Card.Content >
       

        <form  onSubmit={this.handleSubmit}>
         <select className="Drop"
        value={this.state.selectValue} 
        onChange={this.handleChange} 
         >
         {usersId.map((id)=>( <option key={users[id].id} value={users[id].id}  >  {users[id].name}</option> ))}
         </select>

         <Button
         className='btn'
         type='submit'
         basic color='blue' >
         Sign In
         </Button> 
         </form>
        
        

        </Card.Content>
      </Card>
    )
  }
}
// style={{backgroundImage:`url(${users[id].avatarURL});`}}
function mapStateToProps ({users}) {
    
  
    return {
     usersId:Object.keys(users),   
     users
    };
}

export default  connect(mapStateToProps)(SignIn)