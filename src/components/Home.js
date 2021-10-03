import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import QuestionList from './questionList'

 class Home  extends Component {
  state = { activeItem: 'UnAnswared Questions' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
      <Menu tabular>
        <Menu.Item
          name='Answered Questions'
          active={activeItem === 'Answered Questions'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='UnAnswared Questions'
          active={activeItem === 'UnAnswared Questions'}
          onClick={this.handleItemClick}
        />
      </Menu>
       {activeItem=="Answered Questions" &&<QuestionList type="A"/>}
       {activeItem=="UnAnswared Questions" &&<QuestionList type="U"/>}
      </div>
    )
  }
}




export default connect()(Home)