import {parseInput} from "../index";
import { getLists } from "./day-utils";

const lines = parseInput("input.txt")
const [firstList, secondList] = getLists(lines);

console.assert(firstList.length === secondList.length, 'Lists should be of equal length');

firstList.sort();
secondList.sort();

const result = firstList.reduce((acc, curr, index) => acc + Math.abs(curr - secondList[index]), 0);
console.log(result);