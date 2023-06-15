// O(log n)
export default function bs_list(haystack: number[], needle: number): boolean {
	let first = 0;
	let last = haystack.length - 1;

	while (first <= last) {
		let mid = Math.floor((first + last) / 2);
		if (haystack[mid] === needle) {
			return true;
		}
		else if (needle < haystack[mid]) {
			last = mid - 1;
		}
		else if (needle > haystack[mid]) {
			first = mid + 1;
		}
	}

	return false;
}