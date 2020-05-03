import React, { Component } from 'react'

import ChatContainer from './ChatContainer'

const USERS = [{ username: 'Amy' }, { username: 'John' }];
const TITLE = 'Super Awesome Chat'

class ChatStore extends Component {
  
  state = {
    messages: [
  		{ username: 'Amy', text: 'Hi, Jon!' },
  		{ username: 'Amy', text: 'How are you?' },
  		{ username: 'John', text: 'Hi, Amy! Good, you?' },
	],
  }

  updateMessages = (message) => {
	this.setState((currentState) => ({messages: [ ...currentState.messages, message ]}))
  }

	render() {
      
      const { messages } = this.state

      return (
        <div className="container">
          <ChatContainer title={TITLE} username={USERS[0].username} messages={messages} onMessage={this.updateMessages} />
          <ChatContainer title={TITLE} username={USERS[1].username} messages={messages} onMessage={this.updateMessages} />
		</div>
      )
    }
}

export default ChatStore