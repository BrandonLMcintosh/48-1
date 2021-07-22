// add whatever parameters you deem necessary
function constructNote(message, letters) {
	_frequencies = (str) => {
		let freqs = new Map();
		for (let char of str) {
			let charCount = freqs.get(char) || 0;
			freqs.set(char, charCount + 1);
		}
		return freqs;
	};

	if (letters.length < message.length) return false;

	let messageCharFreq = _frequencies(message);
	let lettersCharFreq = _frequencies(letters);

	for (let key of messageCharFreq.keys()) {
		if (lettersCharFreq.has(key) === false) return false;
		if (lettersCharFreq.get(key) < messageCharFreq.get(key)) return false;
	}

	return true;
}
