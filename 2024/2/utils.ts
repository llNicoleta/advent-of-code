export function isSorted(arr: number[]): boolean {
    return isAscending(arr) || isDescending(arr);
}

export function isAscending(arr: number[]): boolean {
    return arr.every((num, index) => {
        if (index === 0 || index === arr.length - 1) return true;
        return num > arr[index - 1] && num < arr[index + 1];
    })
}

export function isDescending(arr: number[]): boolean {
    return arr.every((num, index) => {
        if (index === 0 || index === arr.length - 1) return true;
        return num < arr[index - 1] && num > arr[index + 1];
    })
}