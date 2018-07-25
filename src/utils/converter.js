function converter(originalPower, yourPower, minutes, seconds) {
	
	seconds = seconds ? parseInt(seconds) : 0 
	let minutesInSeconds =  minutes ? parseInt(minutes)*60 : 0
	const time = minutesInSeconds + seconds
	
	return Math.floor(originalPower/yourPower*time)		   
}

exports.converter = converter