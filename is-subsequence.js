// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	if (str1.length > str2.length) return false;
	let str1Index = 0;
	let str2Index = 0;

	while (str2Index < str2.length && str1Index < str1.length) {
		if (str2[str2Index] !== str1[str1Index]) str2Index++;
		if (str2[str2Index] === str1[str1Index]) {
			str2Index++;
			str1Index++;
		}
	}
	if (str1Index !== str1.length) return false;
	return true;
}
