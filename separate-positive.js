// add whatever parameters you deem necessary
function separatePositive(arr) {
	let left = 0;
	let right = arr.length - 1;

	const _swap = (idx1, idx2) => {
		const temp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = temp;
	};

	while (left < right) {
		if (arr[left] < 0 && arr[right] > 0) {
			_swap(left, right);
			left++;
			right--;
		}
		if (arr[left] < 0 && arr[right] < 0) right--;
		if (arr[left] > 0 && arr[right] > 0) left++;
	}
	return arr;
}
