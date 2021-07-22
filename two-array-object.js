// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
	const newObj = {};
	let index = 0;
	while (index < arr1.length) {
		newObj[arr1[index]] = arr2[index] ? arr2[index] : null;
		index++;
	}

	return newObj;
}
