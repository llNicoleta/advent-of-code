import { parseInput } from "..";

const lines = parseInput("input.txt");
let matrix: string[][] = lines.map(line => line.split(''));
const rows = matrix.length;
const cols = matrix[0].length;

let coordinates: {x: number, y: number} = getCoordinates();

function getCoordinates() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '^') {
                return {x: i, y: j};
            }
        }
    }
}
type Direction = 'up' | 'down' | 'left' | 'right';
let direction: Direction  = 'up';
const directionMap: Record<Direction, Direction> = {
    'up': 'right',
    'right': 'down',
    'down': 'left',
    'left': 'up',
}

function directionCoordinates(){
    return {
        'up': {x: coordinates.x - 1, y: coordinates.y},
        'right': {x: coordinates.x, y: coordinates.y + 1},
        'down': {x: coordinates.x + 1, y: coordinates.y},
        'left': {x: coordinates.x, y: coordinates.y - 1},
    }
}

while (coordinates.x > 0 && coordinates.x < rows - 1 && coordinates.y > 0 && coordinates.y < cols - 1) {
    if (matrix[directionCoordinates()[direction].x][directionCoordinates()[direction].y] !== '#') {
        matrix[coordinates.x][coordinates.y] = 'X';
        coordinates = directionCoordinates()[direction];
        matrix[coordinates.x][coordinates.y] = '^';
    } else {
        direction = directionMap[direction];
    }
}

const result = (matrix.join('\n').replace(',', '').match(/X/g) ||[]).length + 1;
console.log(result);
