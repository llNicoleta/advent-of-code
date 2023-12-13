import * as fs from "fs";

const fileContent = fs.readFileSync("input.txt", "utf-8");
const lines = fileContent.trim().split("\n");

interface Game {
  blue: number[];
  green: number[];
  red: number[];
}

const handleNumberOfCubes = (line: string): number => {
  const game: Game = { blue: [], green: [], red: [] };
  for (const element of line.split(": ")[1].split("; ")) {
    for (const color of element.split(", ")) {
      const item = color.split(" ");
      const quantity = parseInt(item[0]);
      const hue = item[1];
      game[hue].push(quantity);
    }
  }
  const gameValues = Object.values(game);
  gameValues.forEach((element) => {
    element.sort((a: number, b: number) => b - a);
  });

  return gameValues
    .map((value) => value[0])
    .reduce((acc, curr) => acc * curr, 1);
};

const answer = lines
  .map((line) => handleNumberOfCubes(line))
  .reduce((acc, curr) => acc + curr, 0);
console.log(answer);
