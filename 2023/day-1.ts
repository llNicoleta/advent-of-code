import * as fs from "fs";

const fileContent: string = fs.readFileSync("input.txt", "utf-8");
const lines: string[] = fileContent.trimEnd().split("\n");

const stringToNumber: { [key: string]: string } = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

type StringToNumberOutput = { index: number; value: string };

const handleLines = (acc: number, value: string, index: number): number => {
  const stringToNumberOutput: StringToNumberOutput[] = [];
  Object.keys(stringToNumber).forEach((key) => {
    if (value.match(key)) {
      const matched = [
        ...value.matchAll(new RegExp(key, "g")),
      ] as RegExpMatchArray[];

      const found = matched.map(
        (match) =>
          ({ index: match["index"], value: match[0] }) as StringToNumberOutput,
      );

      stringToNumberOutput.push(...found);
    }
  });

  stringToNumberOutput.sort((a, b) => a.index - b.index);
  const twoValueOutput = stringToNumberOutput.filter(
    (_, idx) => !idx || idx === stringToNumberOutput.length - 1,
  );

  if (!!twoValueOutput.length) {
    twoValueOutput.forEach((strToNum, idx) => {
      const valueArray = value.split("");
      valueArray.splice(
        !idx ? strToNum.index : strToNum.index + 1,
        0,
        stringToNumber[strToNum.value],
      );
      value = valueArray.join("");
    });
  }

  const numbers = value.split(/[^\d]*/).filter((number) => !!number);
  return (acc += parseInt(`${numbers[0]}${numbers.at(-1)}`));
};

const answer: number = lines.reduce(
  (acc, value, index) => handleLines(acc, value, index),
  0,
);
console.log(answer);
