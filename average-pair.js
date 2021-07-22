// add whatever parameters you deem necessary
function averagePair(arr, avg) {
	if (arr.length === 0) return false;
	_calcAvg = (num1, num2) => (num1 + num2) / 2;
	let left = 0;
	let right = arr.length - 1;

	while (left !== right) {
		const newAvg = _calcAvg(arr[left], arr[right]);
		if (newAvg === avg) return true;
		if (newAvg > avg) right--;
		if (newAvg < avg) left++;
	}
	return false;
}
