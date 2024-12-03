import {parseInput} from "../index";
import {extractMulProduct} from "./utils";


const line = parseInput("input.txt")[0];

const regExp = new RegExp(/(do\(\))|((mul\(\d+,\d+\)))|(don\'t\(\))/, "g");

const matched: RegExpMatchArray[] = [...line.matchAll(regExp)];
let doMul = true;
const filtered = matched.filter(item => {
    if (item[0] === "don\'t()") {
        doMul = false;
        return false;
    }
    if (item[0] === 'do()') {
        doMul = true;
        return false;
    }
    return doMul && item[0].startsWith('mul(');
})

const product = filtered.map(extractMulProduct)
const sum = product.reduce((acc, curr) => curr + acc, 0);

console.log(sum)
