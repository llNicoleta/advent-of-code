export function extractMulProduct(mul: RegExpMatchArray): number {
    const str = mul[0];
    const [x, numsWithClosedPar] = str.split('(');
    const [nums, y] = numsWithClosedPar.split(')');
    const [a, b] = nums.split(',').map(n => parseInt(n));
    return a * b;
}