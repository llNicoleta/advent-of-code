import * as fs from "fs";

const fileContent: string = fs.readFileSync("input.txt", "utf-8");
const lines: string[] = fileContent.trimEnd().split("\n");

const handleLines = (acc: number, value: string): number => {
  const numbers = value.split(/[^\d]*/).filter((number) => !!number);
  return (acc += parseInt(`${numbers[0]}${numbers.at(-1)}`));
};

const answer: number = lines.reduce((acc, value) => handleLines(acc, value), 0);
console.log(answer);
