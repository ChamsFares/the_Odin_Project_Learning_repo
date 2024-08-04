function knightMoves(start, end) {
    const boardSize = 8;
    const moves = [
        [-2,-1], [-2,1], [-1,-2], [-1,2],
        [1,-2], [1,2], [2,-1], [2,1]
    ]

    function isValidMove(x, y) {
        return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
    }

    function bfs() {
        const queue = [[start]];
        const visited = new Set(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if (x === end[0] && y === end[1]) {
                return path;
            }

            for (const [dx, dy] of moves) {
                const newX = x + dx;
                const newY = y + dy;
                const newPos = [newX, newY];

                if (isValidMove(newX, newY) && !visited.has(newPos.toString())) {
                    visited.add(newPos.toString());
                    queue.push([...path, newPos]);
                }
            }
        }
    }

    const path = bfs()

    console.log(`You made it in ${path.length- 1} moves! here's your path:`);
    path.forEach(pos => {
        console.log(`  [${pos[0]}, ${pos[1]}]`)
    });

    return path
}


console.log(knightMoves([0,0],[1,2]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[7,7]));