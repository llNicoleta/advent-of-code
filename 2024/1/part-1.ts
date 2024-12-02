import * as fs from "fs";

const fileContent: string = fs.readFileSync("input.txt", "utf-8");
const lines: string[] = fileContent.trimEnd().split("\n");

const firstList: number[] = [];
const secondList: number[] = [];

lines.forEach(line => {
    const [a, b] = line.split(' ').filter(str => !!str.length).map(str => parseInt(str));
    firstList.push(a);
    secondList.push(b);
})

console.assert(firstList.length === secondList.length, 'Lists should be of equal length');

firstList.sort();
secondList.sort();

const result = firstList.reduce((acc, curr, index) => acc + Math.abs(curr - secondList[index]), 0);
console.log(result);