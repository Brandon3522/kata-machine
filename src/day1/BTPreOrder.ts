
function walk(curr: BinaryNode<number> | null, path: number[]): void {
	// Base case
	if (!curr) {
		return;
	}

	// Pre
	path.push(curr.value);
	
	// Recurse
	walk(curr.left, path);
	walk(curr.right, path);

	// Post
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
	const path: number[] = [];

	walk(head, path);

	return path;
}