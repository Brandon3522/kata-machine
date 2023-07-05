// Store 4 directions
// Left, Right, Down, Up
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];


function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base cases
    // Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // On a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // At the end
    if (curr.x == end.x && curr.y == end.y) {
        path.push(end); // Push in ending tile
        return true;
    }

    // Have we been to the previous points
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Recursive steps
    // Pre
		// If we successfully visit a point,
		// add it to the path
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Recurse
		// Look at all 4 possible directions for moving
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i]; // New current 
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // Post
		// If we can't move in any direction,,
		// remove most recent path point from the current path
    path.pop();

		// If we didn't find end point
    return false;
}

// Return -> list of points from the start to the end
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
