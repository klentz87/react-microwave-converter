import React from 'react';
import FormErrors from './FormErrors'
//import '../css/App.css';
//import '../css/Time.css';
import PropTypes from "prop-types";
import { Row } from "mdbreact"

function Time({ minutes, seconds, onChange, isMinutesValid, isSecondsValid }) {
  
  let isValid = true;
  
  if (isMinutesValid && isSecondsValid) {
  	isValid = true
  } else {
  	isValid = false
  }

  return(
 	<div>
      <label>Enter time specified on back of package</label>
	      <div>
	      	<Row>
		      <div className="d-flex justify-content-sm-center input-group col-sm-6 mb-2">  
		      	<input id="minutes" type="text" onChange={onChange} value={minutes} className="form-control"></input>
		      	<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">minutes</span>
		      	</div>
		      </div>

		      <div className="input-group col-sm-6 mb-2">  
		      	<input id="seconds" type="text" onChange={onChange} value={seconds} className="form-control"></input>
		      	<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">seconds</span>
		      	</div>
		      </div> 
		    </Row>
		    <FormErrors isValid={isValid} />	
  
		  </div>  
    </div>
  )
}

Time.propTypes = {
	minutes: PropTypes.string,
	seconds: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	isMinutesValid: PropTypes.bool.isRequired,
	isSecondsValid: PropTypes.bool.isRequired
}

export default Time;