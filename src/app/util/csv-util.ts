export function toCSV(data: any[]): string {
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map((item) => Object.values(item).join(',')).join('\n');
    return header + rows;
}