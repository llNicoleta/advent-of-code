export function getLists(lines: string[]) {
    const firstList: number[] = [];
    const secondList: number[] = [];

    lines.forEach(line => {
        const [a, b] = line.split(' ').filter(str => !!str.length).map(str => parseInt(str));
        firstList.push(a);
        secondList.push(b);
    });

    return [firstList, secondList];
}