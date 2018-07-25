import React from 'react';
import { Panel } from 'react-bootstrap';
import '../css/Display.css';
import '../css/App.css';

const convertToSeconds = require('../utils/convertToSeconds').convertToSeconds
const convertSecondsToTimeFormat = require ('../utils/convertSecondsToTimeFormat').convertSecondsToTimeFormat

function Display ({ resultTime, packageTime, originalPower, yourPower }) {

	let yourPowerDisplay, originalPowerDisplay, packageTimeDisplay, resultTimeDisplay

	if (resultTime) {
		yourPowerDisplay = <h2><strong>Your Microwave's Wattage:</strong> <span>{yourPower}</span> watts</h2>;
		originalPowerDisplay = <h2><strong>Package's Wattage:</strong> <span>{originalPower}</span> watts</h2>;
		packageTimeDisplay = <h2><strong>Package's Cook Time:</strong> <span>{packageTime}</span></h2>;
		resultTimeDisplay =  <h2><strong>Cook for:</strong> {resultTime}</h2> ;
	} else {
		yourPowerDisplay = <h2><strong>Your Microwave's Wattage:</strong></h2>;
		originalPowerDisplay = <h2><strong>Package's Wattage:</strong></h2>;
		packageTimeDisplay = <h2><strong>Package's Cook Time:</strong></h2>;
		resultTimeDisplay = <h2><strong>Cook for:</strong></h2>;
	}

	return(
	  <Panel className='display'>
		<div className='your-input'>
			{yourPowerDisplay}
			{originalPowerDisplay}
			{packageTimeDisplay}
		</div>
		<div className='result'>	
			{resultTimeDisplay}
		</div>	
	  </Panel>
	)
}

export default Display;