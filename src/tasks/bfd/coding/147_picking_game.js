/**
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
    const memo = {};

    function gameAction(n, playerA, playerB) {
        if (n === 1) return playerB;
        if (n === 2 || n === 3) return playerA;

        const key = `${n}_${playerA}_${playerB}`;
        if (memo[key]) return memo[key];

        if (
            gameAction(n - 1, playerB, playerA) === playerA ||
            gameAction(n - 2, playerB, playerA) === playerA
        ) {
            memo[key] =  playerA;
        } else {
            memo[key] =  playerB;
        }

        return memo[key];
    }

    return gameAction(n, 'A', 'B');
}
