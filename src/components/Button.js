import React from 'react';
import '../css/App.css';
import '../css/Button.css';


function Button({ onSubmit, isDisabled }) {
  return(
  	<div>
		<button type="button" className="btn btn-primary" onClick={onSubmit} disabled={!isDisabled}>
			Submit
		</button>
  	</div>
  )
}

export default Button;