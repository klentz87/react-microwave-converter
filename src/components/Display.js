import React from 'react';
import '../css/Display.css';
import '../css/App.css';

/*
const convertToSeconds = require('../utils/convertToSeconds').convertToSeconds
const convertSecondsToTimeFormat = require ('../utils/convertSecondsToTimeFormat').convertSecondsToTimeFormat
*/

function Display ({ resultTime, packageTime, originalPower, yourPower }) {

	let yourPowerDisplay, originalPowerDisplay, packageTimeDisplay, resultTimeDisplay

	if (resultTime) {
		yourPowerDisplay = <h2><strong>Microwave's Wattage:</strong><br className="br-on-mobile" /> <span>{yourPower}</span> watts</h2>;
		originalPowerDisplay = <h2><strong>Package's Wattage:</strong><br className="br-on-mobile"/> <span>{originalPower}</span> watts</h2>;
		packageTimeDisplay = <h2><strong>Package's Cook Time:</strong><br className="br-on-mobile"/> <span>{packageTime}</span></h2>;
		resultTimeDisplay =  <h2><strong>Cook for:</strong><br className="br-on-mobile"/> <span>{resultTime}</span></h2> ;
	} else {
		yourPowerDisplay = <h2><strong>Microwave's Wattage:</strong></h2>;
		originalPowerDisplay = <h2><strong>Package's Wattage:</strong></h2>;
		packageTimeDisplay = <h2><strong>Package's Cook Time:</strong></h2>;
		resultTimeDisplay = <h2><strong>Cook for:</strong></h2>;
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

export default Display;