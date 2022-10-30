import React from 'react';
import "./Button.css";

function Button({ text }) {
	return (
		<div className='button'>{text}</div>
	)
}

export default Button