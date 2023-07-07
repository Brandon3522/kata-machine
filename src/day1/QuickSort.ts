
function qs(arr: number[], lo: number, hi: number): void {
	// Base case
	if (lo >= hi) {
		return;
	}

	const pivotIdx = partition(arr, lo, hi);

	// Not including the pivot
	qs(arr, lo, pivotIdx - 1);
	qs(arr, pivotIdx + 1, hi);
}

// Returns the pivot index
function partition(arr: number[], lo: number, hi: number): number {
	const pivot = arr[hi];

	let idx = lo - 1; // Gives low of split both arrays

	// Walk from low to high without including the pivot
	for (let i = lo; i < hi; i++) {
		// Compare each element to the pivot
		if (arr[i] <= pivot) {
			idx++;
			const tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
	}

	idx++;
	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

// Low and high are inclusive
export default function quick_sort(arr: number[]): void {
	qs(arr, 0, arr.length - 1);





}