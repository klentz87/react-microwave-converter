function convertToSeconds(minutes, seconds) {
	const total = ((Number(minutes)*60)+Number(seconds))	 
	return total ? total : "Invalid: please only enter numbers" 
}

exports.convertToSeconds = convertToSeconds;