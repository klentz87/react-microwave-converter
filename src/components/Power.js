import React from 'react';
import FormErrors from './FormErrors'
import '../css/App.css';
import '../css/Power.css';


function Power({ value, onChange, id, children, formErrors }) {
  return(
    <div className='power-component text-centered'>
      <label>
        <h3>{children}</h3>
      </label>  
      <div className="input-group center">  
      	<input type='text' className='form-control' id={id} value={value} onChange={onChange}></input>
        <div className="input-group-append">
			    <span className="input-group-text" id="basic-addon2">watts</span>
      	</div>
      </div>
      <div>
        <FormErrors formErrors={formErrors} id={id}/>
      </div>
    </div>
  )
}

export default Power;