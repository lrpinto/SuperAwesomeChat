import React from 'react'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatMessages = ({ messages, username }) => (
  <ul className="message-list">
    {messages.map((message, index) => (
  	  <ChatMessage 
        key={index} index={index} 
        username={message.username} 
        text={message.text} 
        classlist={message.username === username ? 'message sender' : 'message recipient'}
		/>
    ))}
  </ul>
)

ChatMessages.propTypes = {
  username: PropTypes.string.isRequired, 
  messages: PropTypes.array.isRequired, 
}

export default ChatMessages