// add whatever parameters you deem necessary
function longestFall(arr) {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return 1;
	let count = 1,
		greatest = 0;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			count++;
			greatest = Math.max(count, greatest);
		} else {
			count = 1;
		}
	}

	return greatest || 1;
}
