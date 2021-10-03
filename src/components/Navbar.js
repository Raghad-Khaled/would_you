import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { handelAuther } from '../actions/autherUser'

class Navbar extends Component {
  state = { activeItem: this.props.type }

  

    handleItemClick = (e,{name}) => {
      if(name!='logout'){
      this.setState(() => ({
        activeItem:name
      }))
      }else{
        const { dispatch} = this.props
        dispatch( handelAuther(null))
      }
    }  

  render() {
    const { activeItem } = this.state
    const {name,img}=this.props
    return (
      <div>
        <Menu pointing secondary>
        <NavLink to="/" exact>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        </NavLink>

        <NavLink to="/add">
          <Menu.Item
            name='New Question'
            active={activeItem === 'New Question'}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/leaderboard" >
          <Menu.Item
            name='Score Board'
            active={activeItem === 'Score Board'}
            onClick={this.handleItemClick}
          />
          </NavLink>

          <Menu.Menu position='right'>    
          <Menu.Item>
          <img src={img} />
          </Menu.Item>
          <div  className="user">
          <Menu.Item
            name={name}
          />
          </div>
          </Menu.Menu>
         

          <Menu.Menu position='right'>    
          <NavLink to="/signin" >
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
          </NavLink>
        </Menu.Menu>
        </Menu>

       
      </div>
    )
  }
}

function mapStateToProps ({users,autherdUser}) {
  const name=users[autherdUser]? users[autherdUser].name:null
  const img=users[autherdUser]? users[autherdUser].avatarURL:null
  return {
   name,   
   img,
  };
}

export default connect(mapStateToProps)(Navbar)