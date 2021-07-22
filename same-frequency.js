// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	if (num1 === num2) return true;

	const num1Str = num1.toString();
	const num2Str = num2.toString();

	if (num1Str.length !== num2Str.length) return false;

	const _calcFreq = (str) => {
		let freqs = new Map();
		for (let char of str) {
			const countChar = freqs.get(char) || 0;
			freqs.set(char, countChar + 1);
		}
		return freqs;
	};

	const num1freqs = _calcFreq(num1Str);
	const num2freqs = _calcFreq(num2Str);

	for (let key of num1freqs.keys()) {
		if (num2freqs.has(key) === false) return false;
		if (num2freqs.get(key) !== num1freqs.get(key)) return false;
	}

	return true;
}
