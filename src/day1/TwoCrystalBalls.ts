// Question:
	// Given two crystal ball that will break if dropped from high enough
	// distance, determine the exact spot in which it will break in the most
	// optimized way

// Array consisting of true and false -> 1 and 0
// Once a crystal ball reaches false, it will break after that point
// Since we have two crystal balls, we can use a binary search
// However, it still results in O(n)
// So we need to jump by a different unit, sqrt n
// Jump until break, then walk back until our last good point

// O(sqrt n)
export default function two_crystal_balls(breaks: boolean[]): number {
	const jumpAmount = Math.floor(Math.sqrt(breaks.length));

	// Use first crystal ball to find break point
	let i = jumpAmount;
	for (; i < breaks.length; i+= jumpAmount) {
		if (breaks[i]) {
			break;
		}
	}

	// Jump back sqrt n
	i -= jumpAmount;

	// Walk forward by sqrt n
	for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
		if (breaks[i]) {
			return i; // Return index
		}
	}

	return -1;
}