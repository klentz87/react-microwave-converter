import React from 'react';

function FormErrors({ isValid }) {
	const validation = isValid ? '' : "Numeric characters only (please only enter numbers)"

	return(
		<div className='formErrors'>
			{validation}
		</div>
	)
}

export default FormErrors;