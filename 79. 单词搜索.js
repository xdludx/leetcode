/**
 * https://leetcode-cn.com/problems/word-search/
 * TODO 算法未完成
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board.length) return false;
    const firstLetter = word[0];
    let prePositions = findFirstLetter(firstLetter);
    const usedPositions = prePositions.concat();
    if (prePositions.length) {
        let i = 1;
        while (i < word.length) {
            let nextLetters = [];
            let letter = word[i];
            prePositions.forEach((item) => {
                nextLetters = nextLetters.concat(findNextLetter(board, letter, item, usedPositions));
            })
            if (nextLetters.length) {
                i++;
                prePositions = nextLetters;
            }
        }
        if (i === word.length) {
            return true;
        }
    }
    return false;
};

function findFirstLetter(board, letter) {
    const result = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const element = board[i][j];
            if (element === letter) {
                result.push({
                    i,
                    j,
                });
            }
        }
    }
    return result;
}

function findNextLetter(board, letter, position) {
    const result = [];
    if (board[position.x - 1, position.y] === letter) {
        result.push({
            x: position.x - 1,
            y: position.y
        });
        board[position.x - 1, position.y] = '';
    }
    if (board[position.x, position.y + 1] === letter) {
        result.push({
            x: position.x,
            y: position.y + 1
        });
        board[position.x, position.y + 1] = '';
    }
    if (board[position.x + 1, position.y] === letter) {
        result.push({
            x: position.x + 1,
            y: position.y
        });
        board[position.x + 1, position.y] = '';
    }
    if (board[position.x, position.y - 1] === letter) {
        result.push({
            x: position.x,
            y: position.y - 1
        });
        board[position.x, position.y - 1] = '';
    }
    return result;
}

console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
], 'ABCCED'));