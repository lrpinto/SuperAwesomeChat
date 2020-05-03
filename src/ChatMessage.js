import React from 'react'
import PropTypes from 'prop-types'

const ChatMessage = ({ index, username, text, classlist }) => (
      <li
        key={index}
        className={classlist}
        >
		<p>{`${username}: ${text}`}</p>
      </li>
)

ChatMessage.propTypes = {
	index: PropTypes.number.isRequired,
	username: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	classlist: PropTypes.string.isRequired,
}

export default ChatMessage