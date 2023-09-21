


// Need to return the path that we took
	// Need to maintain this ourselves
	// Previous array -> filled with previous node 
	// Visited array -> filled with booleans indicating if the node is visited
// Use a Queue
export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

	const seen = new Array(graph.length).fill(false); // Visited array
	const prev = new Array(graph.length).fill(-1); // Previous array

	seen[source] = true;
	const q: number[] = [source]; // Queue

	do {
		const curr = q.shift() as number;
		if (curr === needle) {
			break;
		}

		const adjs = graph[curr];
		for (let i = 0; i < adjs.length; i++) {
			 if(adjs[i] === 0) {
				continue;
			 }
			 if (seen[i]) {
				continue;
			 }

			 seen[i] = true;
			 prev[i] = curr;
			 q.push(i);
		}
		
	} while (q.length);

	// Build it backwards
	// Walk through previous array until we reach -1
	let curr = needle; // Start where we want to find the value
	const out: number[] = [] // Represent path through graph from needle to source


	while (prev[curr] !== -1) { // Go until no more parents
		out.push(curr);
		curr = prev[curr];
	}

	if (out.length) {
		return [source].concat(out.reverse()); // Use concat to add source node
	}

	return null;
}