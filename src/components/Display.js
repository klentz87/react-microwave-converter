import React from 'react';
import '../css/Display.css';
//import '../css/App.css';
import PropTypes from "prop-types";

function Display ({ display }) {

	let yourPowerDisplay, originalPowerDisplay, packageTimeDisplay, resultTimeDisplay

	if (display.result) {
		yourPowerDisplay = <h5><strong>Microwave's Wattage:</strong><br className="br-on-mobile" /> <span>{display.yourPower}</span> watts</h5>;
		originalPowerDisplay = <h5><strong>Package's Wattage:</strong><br className="br-on-mobile"/> <span>{display.originalPower}</span> watts</h5>;
		packageTimeDisplay = <h5><strong>Package's Cook Time:</strong><br className="br-on-mobile"/> <span>{display.packageTime}</span></h5>;
		resultTimeDisplay =  <h5><strong>Cook for:</strong><br className="br-on-mobile"/> <span>{display.result}</span></h5> ;
	} else {
		yourPowerDisplay = <h5><strong>Microwave's Wattage:</strong></h5>;
		originalPowerDisplay = <h5><strong>Package's Wattage:</strong></h5>;
		packageTimeDisplay = <h5><strong>Package's Cook Time:</strong></h5>;
		resultTimeDisplay = <h5><strong>Cook for:</strong></h5>;
	}

	return(
	  <div className='display'>
		<div className='your-input'>
			{yourPowerDisplay}
			{originalPowerDisplay}
			{packageTimeDisplay}
		</div>
		<div className='result'>	
			{resultTimeDisplay}
		</div>	
	  </div>
	)
}

Display.propTypes = {
	display: PropTypes.object.isRequired
}

export default Display;