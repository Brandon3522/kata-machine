
function walk(curr: BinaryNode<number> | null, path: number[]): void {
	// Base case
	if (!curr) {
		return;
	}

	// Pre
	
	// Recurse
	walk(curr.left, path);
	path.push(curr.value);
	walk(curr.right, path);
	
	// Post
}

export default function in_order_search(head: BinaryNode<number>): number[] {
	const path: number[] = [];

	walk(head, path);

	return path;
}