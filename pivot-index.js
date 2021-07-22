// add whatever parameters you deem necessary
function pivotIndex(nums) {
	if (nums.length < 3) return -1;
	let rightSum = nums.reduce(
		(accumulator, current) => accumulator + current,
		0
	);
	let leftSum = 0;
	let pivot = -1;

	for (let i = 0; i < nums.length; i++) {
		leftSum += nums[i];
		if (leftSum === rightSum) {
			pivot = i;
			break;
		}
		rightSum -= nums[i];
	}

	return pivot;
}
