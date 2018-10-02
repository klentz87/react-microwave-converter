function convertToSeconds(minutes, seconds) {
	return parseInt(minutes, 10)*60 + parseInt(seconds, 10)
}

exports.convertToSeconds = convertToSeconds;