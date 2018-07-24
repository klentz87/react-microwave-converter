import React from 'react';
import FormErrors from './FormErrors'
import '../css/App.css';
import '../css/Time.css';

function Time({ minutes, seconds, onChange, isMinutesValid, isSecondsValid }) {
  
  let isValid = true;
  
  if (isMinutesValid && isSecondsValid) {
  	isValid = true
  } else {
  	isValid = false
  }



  return(
 	<div className='time-component'>
      <label className='center'><h3>Enter time specified on back of package</h3></label>
	      <div className='container'>
	      	<div className='row'>
		      <div className="input-group time-input center col-xs-3">  
		      	<input id="minutes" type="text" onChange={onChange} value={minutes} className="form-control"></input>
		      	<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">minutes</span>
		      	</div>
		      </div>
		      <div className="input-group time-input center col-xs-3">  
		      	<input id="seconds" type="text" onChange={onChange} value={seconds} className="form-control"></input>
		      	<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">seconds</span>
		      	</div>
		      </div> 
		      <FormErrors isValid={isValid} />	
		    </div>  
		  </div>  
    </div>
  )
}

export default Time;