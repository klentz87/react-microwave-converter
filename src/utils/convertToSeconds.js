function convertToSeconds(minutes, seconds) {
	return parseInt(minutes)*60 + parseInt(seconds)
}

exports.convertToSeconds = convertToSeconds;