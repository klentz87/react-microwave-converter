import React from 'react';
import FormErrors from './FormErrors'
import '../css/App.css';
import '../css/Time.css';

function Time({ minutes, seconds, onChange, formErrors }) {
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
		      	<FormErrors formErrors={formErrors} id='minutes'/>
		      </div>
		      <div className="input-group time-input center col-xs-3">  
		      	<input id="seconds" type="text" onChange={onChange} value={seconds} className="form-control"></input>
		      	<div className="input-group-append">
					<span className="input-group-text" id="basic-addon2">seconds</span>
		      	</div>
		      	<FormErrors formErrors={formErrors} id='seconds'/>
		      </div> 	
		    </div>  
		  </div>  
    </div>
  )
}

export default Time;