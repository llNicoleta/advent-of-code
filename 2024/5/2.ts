import { parseInput } from "..";

const lines = parseInput('input.txt');

const [rules, pages] = [lines.slice(0, lines.indexOf('')), lines.slice(lines.indexOf('') + 1, lines.length)]

const rulesDict: {[key: number]: number[]} = rules.reduce((acc, curr: string) => {
    const [beforePage, afterPage] = curr.split('|').map(str => parseInt(str)) as number[];
    if (beforePage in acc) {
        return {...acc, [beforePage]: [...acc[beforePage], afterPage]}
    } else {
        return {...acc, [beforePage]: [afterPage]};
    }
}, {});

function areArraysEqual(arr1: number[], arr2: number[]): boolean {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

const result = pages.reduce((acc, curr) => {
    const pagesArr = curr.split(',').map(str => parseInt(str)) as number[];
    const sorted = [...pagesArr].sort((a, b) => {
        if(rulesDict[a]?.includes(b)) {
            return -1;
        }
        return 1;
    });
    return acc + (!areArraysEqual(sorted, pagesArr) ? sorted[Math.floor(pagesArr.length / 2)] : 0);
}, 0);

console.log(result);