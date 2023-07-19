
function walk(curr: BinaryNode<number> | null, path: number[]): void {
	// Base case
	if (!curr) {
		return;
	}

	// Pre
	
	// Recurse
	walk(curr.left, path);
	walk(curr.right, path);

	// Post
	path.push(curr.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
	const path: number[] = [];

	walk(head, path);

	return path;
}