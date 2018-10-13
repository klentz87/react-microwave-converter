import React from 'react';
import FormErrors from './FormErrors'
import '../css/App.css';
import '../css/Power.css';
import PropTypes from "prop-types";


function Power({ value, onChange, id, children, isValid }) {
  
  return(
    <div className='text-centered'>
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
        <FormErrors isValid={isValid}/>
      </div>
    </div>
  )
}

Power.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  isValid: PropTypes.bool.isRequired
}

export default Power;