import React from 'react'
import PropTypes from 'prop-types'

const ChatHeader = ({title, username}) => (
	<div>
		<h2>{title}</h2>
		<div className="name sender">{username}</div>
	</div>
)

ChatHeader.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default ChatHeader