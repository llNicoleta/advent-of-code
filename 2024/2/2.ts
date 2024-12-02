import {parseInput} from "../index";
import {isDistanceAtMostThree, isSorted} from "./utils";

const lines = parseInput("input.txt");

let result = 0;

lines.forEach(line => {
    const nums = line.split(' ').filter(str => !!str.length).map(str => parseInt(str));
    function backtrack(next: number[], idx: number) {
        if (isSorted(next) && isDistanceAtMostThree(next)) return true;
        if (idx - 1 === next.length) return false;
        next = [...nums];
        next.splice(idx, 1)
        return backtrack(next, idx + 1);
    }
    result += backtrack(nums, 0) ? 1 : 0;
})

console.log(result);