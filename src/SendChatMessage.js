import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SendChatMessage extends Component {
  
  static propTypes = {
    onMessage: PropTypes.func.isRequired
  }

  state = {
	text: ''
  }


  updateText = (text: string) =>   {
	this.setState((currentState) => ({ text: text }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onMessage(this.state.text)
    this.updateText('')
  }

  render() {
    
    const { text } = this.state

    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
			type="text" 
			className="form-control" 
			placeholder="Enter your message..." 
			name="text" value={text} 
			onChange={(event) => this.updateText(event.currentTarget.value)}
			/>
          <div className="input-group-append">
            <button className="btn submit-button" disabled={text === ''}>
            SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
    
}


export default SendChatMessage