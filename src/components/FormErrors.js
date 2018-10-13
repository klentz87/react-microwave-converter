import React from 'react';
import '../css/FormErrors.css';
import PropTypes from "prop-types";

function FormErrors({ isValid }) {
	const validation = isValid ? '' : "Numeric characters only (please only enter numbers)"

	return(
		<div className='formErrors text-centered'>
			<p>{validation}</p>
		</div>
	)
}

FormErrors.propTypes = {
	isValid: PropTypes.bool.isRequired
}

export default FormErrors;