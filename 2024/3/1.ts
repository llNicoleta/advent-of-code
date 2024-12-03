import {parseInput} from "../index";
import {extractMulProduct} from "./utils";

const line = parseInput("input.txt")[0];

const regExp = new RegExp(/mul\(\d+,\d+\)/, "g");
const matched: RegExpMatchArray[] = [...line.matchAll(regExp)] ;

const product = matched.map(extractMulProduct);
const sum = product.reduce((acc, curr) => curr + acc, 0);
console.log(sum);
