import {parseInput} from "../index";
import {isDistanceAtMostThree, isSorted} from "./utils";

const lines = parseInput('input.txt');

let result = 0;

lines.forEach(line => {
    const nums = line.split(' ').filter(str => !!str.length).map(str => parseInt(str));
    result += isSorted(nums) && isDistanceAtMostThree(nums) ? 1 : 0;
})

console.log(result)