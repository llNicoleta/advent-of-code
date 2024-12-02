import {createFrequencyDict, parseInput} from "../index";

const lines = parseInput("input.txt");
const firstList: number[] = [];
const secondList: number[] = [];

lines.forEach(line => {
    const [a, b] = line.split(' ').filter(str => !!str.length).map(str => parseInt(str));
    firstList.push(a);
    secondList.push(b);
});

console.assert(firstList.length === secondList.length, 'Lists should be of equal length');

const frequencyDict: {[key: number]: number} = createFrequencyDict(firstList);
const similarityScore: {[key: number]: number} = {...frequencyDict};

firstList.forEach(num => {
    while (secondList.indexOf(num) !== -1) {
        const index = secondList.indexOf(num);
        frequencyDict[num] += 1;
        secondList.splice(index, 1);
    }
    similarityScore[num] = similarityScore[num] + num * frequencyDict[num];
});

const result = Object.values(similarityScore).reduce((acc, curr) => (acc + curr), 0);

console.log(result)
