
function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {

    if (seen[curr]) { // If the node is seen, answer isn't in this area
        return false;
    }

    seen[curr] = true;

    // Previous -> Push path and create structurally correct path
    path.push(curr); // Visiting this node

    if (curr === needle) {
        return true;
    }

    // Recurse
    const list = graph[curr];
    
    // Walk the list until we find the needle or exhaust the list
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true; // Send signal up recuresive stack so that each one can pop
        }
    }

    // Post -> Didnt find path in this branch of the graph
    path.pop();

    return false;
}

// Very similar to the Maze Solver problem
// Time complexity: O(E + V)
export default function dfs(
    graph: WeightedAdjacencyList, 
    source: number, 
    needle: number): number[] | null {
    
        const seen: boolean[] = new Array(graph.length).fill(false);
        const path: number[] = [];

        walk(graph, source, needle, seen, path);

        if (path.length === 0) {
            return null;
        }

        return path; // Path from source to needle

}