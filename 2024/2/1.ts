import {parseInput} from "../index";
import {isSorted} from "./utils";

const lines = parseInput('input.txt');

let result = 0;

function isDistanceAtMostThree(nums: number[]) {
    return nums.every((num, index) => {
        if (index === 0) return true;
        return [1, 2, 3].includes(Math.abs(num - nums[index - 1]));
    })
}

lines.forEach(line => {
    const nums = line.split(' ').filter(str => !!str.length).map(str => parseInt(str));
    result += isSorted(nums) && isDistanceAtMostThree(nums) ? 1 : 0;
})

console.log(result)