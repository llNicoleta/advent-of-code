import {parseInput} from "../index";

const WORD = 'XMAS';

const lines = parseInput("input.txt");
const matrix: string[][] = lines.map(line => line.split(''));
const rows = matrix.length;
const cols = matrix[0].length;

function isWordInDirection(row: number, col: number, dirX: number, dirY: number): boolean {
    for (let i = 0; i < WORD.length; i++) {
        const r = row + i * dirX;
        const c = col + i * dirY;
        if (r < 0 || r >= rows || c < 0 || c >= cols || matrix[r][c] !== WORD[i]) {
            return false;
        }
    }
    return true;
}

let result = 0;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const directions = [
            {
                dirX: 0,
                dirY: 1,
            },
            {
                dirX: 1,
                dirY: 0,
            },
            {
                dirX: 1,
                dirY: 1,
            },
            {
                dirX: 1,
                dirY: -1,
            },
            {
                dirX: 0,
                dirY: -1,
            },
            {
                dirX: -1,
                dirY: 0,
            },
            {
                dirX: -1,
                dirY: -1,
            },
            {
                dirX: -1,
                dirY: 1,
            },
        ];

        for (const { dirX, dirY } of directions) {
            if (isWordInDirection(i, j, dirX, dirY)) {
                result++;
            }
        }
    }
}


console.log(result)
