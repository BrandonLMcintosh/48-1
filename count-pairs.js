// add whatever parameters you deem necessary
function countPairs(arr, target) {
	let uniqueNumbers = new Set(arr);
	let count = 0;
	for (let int of arr) {
		uniqueNumbers.delete(int);
		if (uniqueNumbers.has(target - int)) {
			count++;
		}
	}
	return count;
}
