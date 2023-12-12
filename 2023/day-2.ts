import * as fs from "fs";

const fileContent = fs.readFileSync("input_2.txt", "utf-8");
const lines = fileContent.trim().split("\n");

const cubesTotal = {
  red: 12,
  green: 13,
  blue: 14,
};

const handleNumberOfCubes = (line: string): boolean => {
  for (const element of line.split(": ")[1].split("; ")) {
    for (const color of element.split(", ")) {
      const item = color.split(" ");
      const quantity = parseInt(item[0]);
      const hue = item[1];

      if (quantity > cubesTotal[hue]) return false;
    }
  }
  return true;
};

const answer = lines
  .filter((line) => handleNumberOfCubes(line))
  .map((line) => parseInt(line.split(": ")[0].split(" ")[1]))
  .reduce((acc, curr) => acc + curr, 0);
console.log(answer);
