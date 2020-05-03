import React from 'react'
import PropTypes from 'prop-types'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import SendChatMessage from './SendChatMessage'

const ChatContainer = ({ title, username, messages, onMessage }) => (
    <div className="chat-window">
		<ChatHeader title={title} username={username} />
        <ChatMessages messages={messages} username={username} />
        <SendChatMessage onMessage={(text) => onMessage({username: username, text: text })} />
    </div>
)
  
ChatContainer.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired, 
  messages: PropTypes.array.isRequired, 
  onMessage: PropTypes.func.isRequired
}

export default ChatContainer