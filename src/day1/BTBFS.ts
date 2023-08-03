// Get next item from queue
// Do operation
// Push left and right child into queue
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  // Queue
  const q = [head];

  while (q.length) {
	// Remove first element from queue
    const curr = q.shift() as BinaryNode<number>;

    // Search
    if (curr.value === needle) {
      return true;
    }

	// Check for children
    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }
  }

  return false;
}
