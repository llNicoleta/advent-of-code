import {parseInput} from "../index";

const line = parseInput("input.txt")[0];

const regExp = new RegExp(/mul\(\d+,\d+\)/, "g");
const matched: RegExpMatchArray[] = [...line.matchAll(regExp)] ;

const product = matched.map(match => {
    const str = match[0];
    const [x, numsWithClosedPar] = str.split('(');
    const [nums, y] = numsWithClosedPar.split(')');
    const [a, b] = nums.split(',').map(n => parseInt(n));
    return a * b;
})

const sum = product.reduce((acc, curr) => curr + acc, 0);
console.log(sum);
