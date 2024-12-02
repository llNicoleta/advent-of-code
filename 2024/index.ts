import * as fs from "fs";

export function parseInput(inputFile: string): string[] {
    const fileContent: string = fs.readFileSync(inputFile, "utf-8");
    return fileContent.trimEnd().split("\n");
}

export function createFrequencyDict<T extends string | number>(arr: T[]) {
    return arr.reduce((acc, curr) =>({...acc, [curr]: 0}), {});
}