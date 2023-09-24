const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

const bfs = function(grid, rowI, colI) {
    const ROWS_COUNT = grid.length;
    const COLS_COUNT = grid[0].length;

    const queue = [[rowI, colI]];

    grid[rowI][colI] = '0';

    while (queue.length > 0) {
        const [posRowI, posColI] = queue.shift();

        DIRECTIONS.forEach(([dirRowI, dirColI]) => {
            const resRowI = posRowI + dirRowI;
            const resColI = posColI + dirColI;

            if (resRowI >= 0 && resColI >= 0 && resRowI < ROWS_COUNT && resColI < COLS_COUNT && grid[resRowI][resColI] === '1') {
                queue.push([
                    resRowI,
                    resColI
                ]);
                grid[resRowI][resColI] = '0';
            }
        });
    }
};

const numIslands = (grid) => {
    const ROWS_COUNT = grid.length;
    const COLS_COUNT = grid[0].length;

    let islands = 0;

    for (let i = 0; i < ROWS_COUNT; i++) {
        for (let j = 0; j < COLS_COUNT; j++) {
            if (grid[i][j] === '1') {
                bfs(grid, i, j);
                islands++;
            }
        }
    }

    return islands;
}
