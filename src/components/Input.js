import React from 'react';

export const Input = (props) => {
	return (
		<Input type="text" 
		onKeyDown={props.handleKeyPress} 
		onChange={props.handleInputChange}
		value={props.inputText} />
	)
}