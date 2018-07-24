import React from 'react';

function FormErrors({ formErrors, id }) {
	return(
		<div className='formErrors'>
			{Object.keys(formErrors).map((fieldName, i) => {
				if (id === fieldName) {
					if(formErrors[fieldName].length > 0) {
						return (
							<p key={i}>{fieldName} {formErrors[fieldName]}</p>
						)
					} else {
						return '';
					}	
				} else {
					return '';
				}
			})}
		</div>
	)
}

export default FormErrors;