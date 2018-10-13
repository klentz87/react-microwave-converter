import React from 'react';
import '../css/App.css';
import '../css/Button.css';
import PropTypes from "prop-types";


function Button({ onSubmit, isDisabled }) {
  return(
  	<div>
		<button type="button" className="btn btn-primary" onClick={onSubmit} disabled={!isDisabled}>
			Submit
		</button>
  	</div>
  )
}

Button.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool.isRequired
}

export default Button;