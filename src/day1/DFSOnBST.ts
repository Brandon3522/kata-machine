function search(curr: BinaryNode<number> | null, needle: number): boolean {
	
	if (!curr) { // null, made it to the bottom of the tree
		return false;
	}

	if (curr.value === needle) { // Found value
		return true;
	}
	
	// Traversal
	if (curr.value < needle) { // Search right
		return search(curr.right, needle);
	}
	
	return search(curr.left, needle); // Search left
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
	return search(head, needle);
}