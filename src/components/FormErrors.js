import React from 'react';
import '../css/FormErrors.css'

function FormErrors({ isValid }) {
	const validation = isValid ? '' : "Numeric characters only (please only enter numbers)"

	return(
		<div className='formErrors text-centered'>
			<p>{validation}</p>
		</div>
	)
}

export default FormErrors;