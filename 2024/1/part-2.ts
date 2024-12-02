import {createFrequencyDict, parseInput} from "../index";
import {getLists} from "./day-utils";

const lines = parseInput("input.txt");
const [firstList, secondList] = getLists(lines);

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
