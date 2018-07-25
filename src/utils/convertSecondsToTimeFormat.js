function convertSecondsToTimeFormat(seconds) {
	if (isNaN(seconds)) {seconds = 0}
	return (seconds-(seconds %= 60))/60+(9<seconds ? ':' :':0') + seconds
}

exports.convertSecondsToTimeFormat = convertSecondsToTimeFormat