export const tambah = (a,b) => a + b;
export function bagi(a, b) {
    if (b === 0) throw new Error('tidak isa dibagi nol');
    return a / b;
}